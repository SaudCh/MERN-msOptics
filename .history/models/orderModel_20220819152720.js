const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
		},
		products: [
			{
				type: mongoose.Schema.ObjectId,
				ref: "Product",
			},
		],
		amount: { type: Number },
		address: { type: Object },
		isComplet: { type: Boolean, default: false },
		orderNum: String,
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

orderSchema.pre("save", function (next) {
	const date = new Date();
	const number = `${date.getDate()}${date.getFullYear()}${date.getMinutes()}GLASS`;
	this.orderNum = number;
	next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;