import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import "./index.css";

function App() {
	const { isAuthenticated } = useAuth0;

	return (
		<>
		{	isAuthenticated ?
			<Profile /> :
			<Login />}
		</>
	);
}

export default App;
