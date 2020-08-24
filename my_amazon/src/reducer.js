export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
	basket: [{
		id: 121,
		title: "The best book you have ever seen in your life",
		price: 11.96,
		rating: 5,
		image: "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg"
	}],
	user: null,
}

function reducer(state, action) {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state, // returning the current state,
				basket: [...state.basket, action.payload] // changing the basket, whatever the it was + whatever item you just add it
			}
		case "REMOVE_FROM_BASKET":
			// we clone the basket
			let newBasket = [...state.basket];

			// we check to see if product exists
			const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

			if (index >= 0) {
				// item exists in basket, remove it...
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its no in basket`
				)
			}
			return {
				...state,
				basket: newBasket
			}
		default:
			return state;
	}
}

export default reducer;
