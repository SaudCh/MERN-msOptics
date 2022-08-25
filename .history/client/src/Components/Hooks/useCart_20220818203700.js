import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useCart = () => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const addToCart = (product, quantity) => {
        // console.log(product)

        var lsCart = JSON.parse(localStorage.getItem("msopticcart"));
        let flag = 0;

        if (lsCart != null) {
            lsCart.forEach(function (item) {
                if (item.id === product.id) {
                    item.quantity = item.quantity + quantity;
                    flag = 1;
                }
            });
        } else {
            lsCart = [];
        }

        if (flag === 0) {
            lsCart.push({ id: product.id, title: product.title, image: product.images[0], images: product.images, price: product.price, quantity: quantity });
        }

        localStorage.setItem("msopticcart", JSON.stringify(lsCart));
        setCart(lsCart);

        toast.success("Product added to cart");

    }

    const removeAll = () => {
        setCart([])
        localStorage.removeItem("msopticcart");
    }

    const removeItem = (id) => {
        var lsCart = JSON.parse(localStorage.getItem("msopticcart"));
        lsCart = lsCart.filter(item => item.id !== id);
        localStorage.setItem("msopticcart", JSON.stringify(lsCart));
        setCart(lsCart);
    }

    const IncQuantity = (id) => {
        var lsCart = JSON.parse(localStorage.getItem("msopticcart"));
        lsCart.forEach(function (item) {
            if (item.id === id) {
                item.quantity = item.quantity + 1;
            }
        });
        localStorage.setItem("msopticcart", JSON.stringify(lsCart));
        setCart(lsCart);
    }

    const DecQuantity = (id) => {
        var lsCart = JSON.parse(localStorage.getItem("msopticcart"));
        lsCart.forEach(function (item) {
            if (item.id === id && item.quantity > 1) {
                item.quantity = item.quantity - 1;
            }
        });
        localStorage.setItem("msopticcart", JSON.stringify(lsCart));
        setCart(lsCart);
    }


    useEffect(() => {
        const lsCart = JSON.parse(localStorage.getItem("msopticcart"));

        if (lsCart) {
            setCart(lsCart)
        }
    }, [])

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity
        })
        setTotal(total)
    }, [cart])



    return { cart, addToCart, removeAll, removeItem, total, IncQuantity, DecQuantity }
}
