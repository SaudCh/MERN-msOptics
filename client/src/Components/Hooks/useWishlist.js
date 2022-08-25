import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

export const useWishlist = () => {
    const [wishlist, setWishlist] = useState([])

    const addToWishlist = async (id) => {
        setWishlist([...wishlist, { product: id }])
        toast.success("Product added to wishlist")

        const user = JSON.parse(localStorage.getItem('userData'))
        const token = JSON.parse(localStorage.getItem('token'))

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/favourite/`, { product: id, user: user.user.id }, config)
    }

    const removeFromWishlist = async (id) => {
        const updatedWishlist = wishlist.filter((item) => item.product !== id)
        setWishlist(updatedWishlist)
        toast.error("Product removed from wishlist")

        const user = JSON.parse(localStorage.getItem('userData'))
        const token = JSON.parse(localStorage.getItem('token'))

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/favourite/deleteFa/${id}/${user.user.id}`, config)
    }

    const clearWishlist = () => {
        setWishlist([])
        console.log("je")
    }

    const getWishlist = async () => {
        const user = JSON.parse(localStorage.getItem('userData'))
        const token = JSON.parse(localStorage.getItem('token'))

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favourite/${user?.user.id}`, config).then(function (response) {
            setWishlist(response.data.data.favourit);
        })
            .catch(function (error) {
                const err = {};
                err.api = error.response.data?.message
                    ? error.response.data.message
                    : error.message;

                console.log(err)
            });

    }

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('userData'))
        const token = JSON.parse(localStorage.getItem('token'))

        const getWishlist = async (user, token) => {

            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/favourite/${user?.user.id}`, config).then(function (response) {
                setWishlist(response.data.data.favourit);
            })
                .catch(function (error) {
                    const err = {};
                    err.api = error.response.data?.message
                        ? error.response.data.message
                        : error.message;

                    console.log(err)
                });

        }

        getWishlist(user, token);
    }, [])

    return { wishlist, addToWishlist, removeFromWishlist, clearWishlist, getWishlist }
}
