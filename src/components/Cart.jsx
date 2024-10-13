//
const itemData = {
	productId: "eUOxlk3xqXEYtx6lWiz3",
	quantity: 3,
	price: 3000,
	productName: "ROG Zephyrus G16 (2024) GA605",
	img: "https://firebasestorage.googleapis.com/v0/b/react-store-3a6915.appspot.com/o/products%2Fzep16h732.png?alt=media&token=b2d51d2a-8479-4dd4-8101-a0258e7d8b45",
};
const Cart = () => {
	return (
		<div className="drawer drawer-end z-50">
			<input
				id="user-cart-drawer"
				type="checkbox"
				className="drawer-toggle"
			/>

			<div className="drawer-side">
				<label
					htmlFor="user-cart-drawer"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<div className="menu bg-base-200 text-base-content min-h-full w-[453px] p-4">
					{/* Cart Content here */}
					<ul>
						<li>
							<div className="flex justify-between">
								<div className="flex items-center gap-4">
									<div className="avatar">
										<div className="mask mask-squircle w-12 h-12">
											<img
												src={itemData.img}
												alt="product image"
											/>
										</div>
									</div>
									<div>
										<div className="font-bold">
											{itemData.productName}
										</div>
										<div className="text-sm opacity-50">
											{itemData.price}
										</div>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<button className="btn btn-square btn-sm">
										-
									</button>
									<span>{itemData.quantity}</span>
									<button className="btn btn-square btn-sm">
										+
									</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Cart;
