import { createContext } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
    return <CartContext.Provider>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
