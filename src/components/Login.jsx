import React from 'react'
import useLocalStorage from "use-local-storage";
import "../index.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import { BsToggleOn } from "react-icons/bs";
function Login() {
      const { loginWithRedirect } = useAuth0();
    const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
    const toggleTheme = () => {
			const newTheme = theme === "light" ? "dark" : "light";
			setTheme(newTheme);
		};
  return (
		<div>
			<div className="app" data-theme={theme}>
				<div className="login">
					<h1>Login</h1>
					<div className="container">
						<div className="top" onClick={() => loginWithRedirect()}>
							<FcGoogle size={36} />
							<p>Continue With Google</p>
						</div>
						<p className="divider">
							<span>Or</span>
						</p>
						<form>
							<label htmlFor="email">Email</label>
							<input type="text" name="email" placeholder="Enter your Email" />
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								placeholder="Enter your password"
							/>
							<div className="remember">
								<input type="checkbox" defaultChecked={true} />
								<p>Remember Me</p>
							</div>
							<button>Log In</button>
						</form>
						<div className="bottom">
							<p>Forget your password?</p>
							<a href="/">Reset Password</a>
						</div>
						<p className="create">Create Account</p>
					</div>
					<div className="theme-toggle">
						<h2>Light Theme</h2>
						<BsToggleOn size={32} onClick={toggleTheme} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login