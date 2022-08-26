import { useState, useEffect } from "react";

export const useAuth = () => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState("");

	const login = (user, token) => {
		setToken(token);
		setUser(user);

		localStorage.setItem("userData", JSON.stringify({ user }));
		localStorage.setItem("token", JSON.stringify(token));
	};

	const logout = () => {
		setToken(null);
		setUser(null);
		localStorage.removeItem("userData");
		localStorage.removeItem("token");
	};

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		const token = JSON.parse(localStorage.getItem("token"));
		setToken(token);
		setUser(storedData?.user);

		if (storedData && token) {
			login(storedData?.user, token);
		}
	}, []);

	return { login, logout, token, user };

};
