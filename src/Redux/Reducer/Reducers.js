const currentstate = {
  carts: []
}
const Reducers = (state = currentstate, action) => {
  switch (action.type) {
    case "Add-To-Cart":
      let carts = state.carts.findIndex((Item) => Item.id === action.payload.id)

      if (carts >= 0) {
        state.carts[carts].quantity += 1
      }
      else {
        let payment = { ...action.payload, quantity: 1 }
        return {
          ...state,
          carts: [...state.carts, payment]
        }
      }

    case "Remove-To-Cart":
      let datas = state.carts.filter((val) => val.id != action.payload)
      return {
        ...state,
        carts: datas
      }

    case "Decrement-To-cart":
      let cartsindex = state.carts.findIndex((Item) => Item.id === action.payload.id)

      if (state.carts[cartsindex].quantity >= 1) {
        state.carts[cartsindex].quantity -= 1



        return {
          ...state,
          carts: [...state.carts]
        }
      }else if(state.carts[cartsindex].quantity === 1){
        let datas = state.carts.filter((val) => val.id != action.payload)
        return {
          ...state,
          carts: datas
        }
      }

    default:
      return state
  }
}
export default Reducers