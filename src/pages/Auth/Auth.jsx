import React from "react";
import LoginForm from "../../components/AuthForm/LoginForm";
import { RegisterForm } from "../../components/AuthForm/RegisterForm";

const Auth = () => {
	return (
		<div className="w-full min-h-[calc(100vh-132px)] flex flex-col justify-center items-center p-3 rounded max-sm:bg-transparent">
			<div className="flex gap-4 justify-around h-full w-full max-sm:flex-col ">
				<div className="w-1/2 flex justify-center items-center max-sm:w-full card glass px-1.5 py-20">
					<LoginForm />
				</div>
				<div className="w-1/2 flex justify-center items-center max-sm:w-full card glass px-1.5 py-20">
					<RegisterForm />
				</div>
			</div>
		</div>
	);
};

export default Auth;
