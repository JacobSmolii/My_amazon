import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://static.amazon.jobs/business_categories/16/images/amazon-jobs-go-banner.jpg?1482447776"
					alt=""
				/>
				{basket?.length === 0 ? (
					<div>
						<h2>Your shopping basket is empty</h2>
						<p>
							You have no items in your basket. To buy one or
							more items, click "Add to basket" next to the item
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout_title">Your Shopping Basket</h2>

						{basket.map((item, index) => (
							<CheckoutProduct
								key={index}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout_right">
					<Subtotal />
				</div>
			)}


		</div>
	)
}

export default Checkout
