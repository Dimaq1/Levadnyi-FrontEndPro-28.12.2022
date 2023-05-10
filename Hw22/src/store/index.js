export const initialState = {
  size: {
    price: 0,
    calories: 0
  },

  stuffing: {
    price: 0,
    calories: 0
  },

  addition: {
    price: 0,
    calories: 0
  },

  totalPrice: 0,
  totalCalories: 0
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SIZE':
      return {
        ...state,
        size: {
          price: action.payload.price,
          calories: action.payload.calories
        }
      }

    case 'STUFFING':
      return {
        ...state,
        stuffing: {
          price: action.payload.price,
          calories: action.payload.calories
        }
      }

    case 'ADDITION':
      return {
        ...state,
        addition: {
          price: action.payload.price,
          calories: action.payload.calories
        }
      }

    case 'TOTALS':
      const totalPrice = state.size.price + state.stuffing.price + state.addition.price
      const totalCalories = state.size.calories + state.stuffing.calories + state.addition.calories

      return {
        ...state,
        totalPrice,
        totalCalories
      }

    default:
      return {
        ...state
      }
  }
}