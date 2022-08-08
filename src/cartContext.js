import React, { createContext, useState } from "react";


const CartContext = createContext();

export function CartProvider({ children }) {
    return (
        <CartContext.Provider>{ children}</CartContext.Provider>

)

}
export default CartContext;