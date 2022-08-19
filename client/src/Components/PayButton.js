import axios from "axios";

const PayButton = ({ cart, user }) => {
	const handleCheckout = () => {
		const token = JSON.parse(localStorage.getItem("token"));

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};
		axios
			.post(
				`${process.env.REACT_APP_SERVER_URL}/api/orders/checkout-session`,
				{
					cart,
					userId: user._id,
				},
				config
			)
			.then((response) => {
				if (response.data.url) {
					window.location.href = response.data.url;
				}
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<>
			{user?._id && (
				<button
					type="button"
					class="btn btn-primary mt-3"
					onClick={() => handleCheckout()}
				>
					Check out
				</button>
			)}
		</>
	);
};

export default PayButton;
