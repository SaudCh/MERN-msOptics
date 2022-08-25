import { createContext } from "react";

export const WishContext = createContext({
    wishlist: [],
    addToWishlist: () => { },
    removeFromWishlist: () => { },
    clearWishlist: () => { },
    getWishlist: () => { },
});