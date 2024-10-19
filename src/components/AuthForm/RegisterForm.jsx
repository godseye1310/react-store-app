import { useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../store/auth-slice";
import { fetchAndSetUserData } from "../../store/auth-user-thunk-Actions";

export const RegisterForm = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const id = event.target.id;
		const value = event.target.value;
		setFormData({ ...formData, [id]: value });
	};

	const signUpUser = async (event) => {
		event.preventDefault();
		const { fullName, phone, email, password, confirmPassword } = formData;

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			setTimeout(() => {
				setError(null);
			}, 3000);
			return;
		}

		try {
			// Create user with email and password
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;

			console.log("User signed up:");

			const userData = {
				fullName: fullName,
				phone: phone,
				email: email,
			};
			// Save additional user data to Firestore
			await setDoc(doc(db, "users", user.uid), userData);

			console.log("User created and data saved in Firestore:", userData);

			// Dispatch actions to set login status, token, uid
			dispatch(
				handleLogin({
					uid: user.uid,
					token: user.stsTokenManager.accessToken,
				})
			);

			// Dispatch action to fetch user data from Firestore
			dispatch(fetchAndSetUserData(user.uid));

			// Navigate to the home page
			navigate("/");
			event.target.reset();
			setFormData({
				fullName: "",
				phone: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		} catch (error) {
			console.log(error);
			console.log("Error signing up:", error.message);
			setError(error.message);
		} finally {
			setTimeout(() => {
				setError(null);
			}, 3000);
		}
	};

	return (
		<form
			onSubmit={signUpUser}
			className="flex flex-col gap-1 rounded-box bg-base-200 p-6 max-w-md w-96 max-xs:w-full shadow-lg"
		>
			<h1 className="text-3xl font-bold self-center">
				Create an account
			</h1>

			<label className="form-control" htmlFor="fullName">
				<div className="label">
					<span className="label-text">Full Name</span>
				</div>

				<input
					id="fullName"
					type="text"
					value={formData.fullName}
					onChange={handleInputChange}
					className="input input-sm input-bordered"
					required
				/>
			</label>

			<label className="form-control" htmlFor="phone">
				<div className="label">
					<span className="label-text">Phone</span>
				</div>

				<input
					id="phone"
					type="tel"
					value={formData.phone}
					onChange={handleInputChange}
					className="input input-sm input-bordered"
					required
				/>
			</label>

			<label className="form-control" htmlFor="email">
				<div className="label">
					<span className="label-text">Email</span>
				</div>

				<input
					id="email"
					type="email"
					value={formData.email}
					onChange={handleInputChange}
					className="input input-sm input-bordered"
					required
				/>
			</label>

			<label className="form-control" htmlFor="password">
				<div className="label">
					<span className="label-text">Password </span>
				</div>

				<input
					id="password"
					type="password"
					value={formData.password}
					onChange={handleInputChange}
					className="input input-sm input-bordered"
					required
				/>
			</label>

			<label className="form-control" htmlFor="confirmPassword">
				<div className="label">
					<span className="label-text">Confirm password</span>
				</div>

				<input
					id="confirmPassword"
					type="password"
					value={formData.confirmPassword}
					onChange={handleInputChange}
					className="input input-sm input-bordered"
					required
				/>
			</label>

			{error && <p style={{ color: "red" }}>{error}</p>}

			<button className="btn btn-primary mt-5">Create</button>
		</form>
	);
};
