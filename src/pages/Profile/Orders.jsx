import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useSelector } from "react-redux";

const Orders = () => {
	const { uid } = useSelector((state) => state.authState);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = async () => {
			const ordersCollection = collection(db, "orders");
			const q = query(ordersCollection, where("userID", "==", uid)); // Assuming you have userId in orders
			const querySnapshot = await getDocs(q);
			const ordersData = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setOrders(ordersData);
		};

		if (uid) {
			fetchOrders();
		}
	}, [uid]);

	return (
		<div className="p-4">
			<h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
			{orders.length === 0 ? (
				<p>You have no orders placed yet.</p>
			) : (
				<ul>
					{orders.map((order) => (
						<li
							key={order.id}
							className="mb-3 border p-3 rounded-md"
						>
							<h3 className="font-bold">Order ID: {order.id}</h3>
							<p>Total Price: ${order.totalPrice}</p>
							<p>Payment Method: {order.paymentMethod}</p>
							<p>Order Status: {order.orderStatus}</p>
							{/* Add more details as needed */}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Orders;
