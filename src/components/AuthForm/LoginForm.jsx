import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAndSetUserData, handleLogin } from "../../store/auth-slice";

const LoginForm = () => {
	const [formData, setFormData] = useState({
		usermail: "",
		userPassword: "",
	});
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		const id = event.target.id;
		const value = event.target.value;
		setFormData({ ...formData, [id]: value });
	};

	const loginFormHandler = async (event) => {
		event.preventDefault();
		const { usermail, userPassword } = formData;

		if (usermail === "" || userPassword === "") {
			setError("Please fill in all fields");
			setTimeout(() => {
				setError(null);
			}, 3000);
			return;
		}

		try {
			// Login user with email and password
			const userCredential = await signInWithEmailAndPassword(
				auth,
				usermail,
				userPassword
			);
			const user = userCredential.user;

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
		} catch (error) {
			console.error("Error logging in:", error);
			setError("Invalid email or password");
			setTimeout(() => {
				setError(null);
			}, 3000);
		}
	};

	return (
		<form
			onSubmit={loginFormHandler}
			className="flex flex-col gap-4 rounded-box bg-base-200 p-6 max-w-md w-96 max-xs:w-full shadow-lg"
		>
			<h1 className="text-3xl font-bold self-center">Log in</h1>

			{/* {false && (
				<>
					<a className="btn btn-neutral">
						<FcGoogle className="size-7" />
						Continue in with Google
					</a>

					<div className="divider">OR</div>
				</>
			)} */}

			<label htmlFor="usermail" className="form-control">
				<div className="label">
					<span className="label-text">Email</span>
				</div>

				<input
					id="usermail"
					type="email"
					value={formData.usermail}
					onChange={handleInputChange}
					className="input input-bordered"
				/>
			</label>

			<label htmlFor="userPassword" className="form-control">
				<div className="label">
					<span className="label-text">Password</span>
					<a className="label-text link link-accent">
						Forgot password?
					</a>
				</div>

				<input
					id="userPassword"
					type="password"
					value={formData.userPassword}
					onChange={handleInputChange}
					className="input input-bordered"
				/>
			</label>

			{error && <p className="text-red-500">{error}</p>}

			<button className="btn btn-primary mt-10">Log in</button>
		</form>
	);
};

export default LoginForm;
