import React from "react";
import axios from "axios";

const PayButton = ({ cart, user }) => {
	const [loading, setLoading] = React.useState(false);
	const handleCheckout = () => {
		const token = JSON.parse(localStorage.getItem("token"));

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		setLoading(true);
		debugger;

		axios
			.post(
				`${process.env.REACT_APP_SERVER_URL}/api/orders/checkout-session`,
				{
					cart,
					user,
				},
				config
			)
			.then((response) => {
				if (response.data.url) {
					window.location.href = response.data.url;
				}
			})
			.catch((err) => console.log(err.message));
		setLoading(false);
	};

	return (
		<>
			{user?._id && (
				<button
					type="button"
					class="btn text-white mt-3 "
					onClick={() => handleCheckout()}
					disabled={loading}
					style={{ backgroundColor: "#373B3C" }}
				>
					{loading && (
						<span
							class="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						></span>
					)}
					Check out
				</button>
			)}
		</>
	);
};

export default PayButton;
