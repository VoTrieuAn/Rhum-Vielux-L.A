import { cartInitial } from "@libs/initial-reducer";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "cart/add": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      return {
        ...state,
        items: existingItem
          ? state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.items, action.payload],
      };
    }
    case "cart/minus": {
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
              : item,
          )
          .filter((item) => item.quantity > 0), // Xóa phần tử nếu số lượng về 0
      };
    }
    case "cart/delete": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case "cart/deleteAll": {
      return cartInitial;
    }
    default: {
      return state;
    }
  }
};
