import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useSearch() {
    const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState("");
    const [gender, setGender] = useState([]);
    const [ftype, setFtype] = useState([]);
    const [shape, setShape] = useState([]);
    const [color, setColor] = useState([]);
    const [fMaterial, setFMaterial] = useState([]);

    const searchProduct = (e) => {
        const search = e.target.value;
        setSearch(search);
    };

    const changeGender = (e) => {
        if (e.target.checked) {
            setGender([...gender, e.target.value]);
        } else {
            setGender(gender.filter((item) => item !== e.target.value));
        }
    };

    const changeFtype = (e) => {
        if (e.target.checked) {
            setFtype([...ftype, e.target.value]);
        } else {
            setFtype(ftype.filter((item) => item !== e.target.value));
        }
    };

    const changeShape = (e) => {
        if (e.target.checked) {
            setShape([...shape, e.target.value]);
        } else {
            setShape(shape.filter((item) => item !== e.target.value));
        }
    };

    const changeColor = (e) => {
        if (e.target.checked) {
            setColor([...color, e.target.value]);
        } else {
            setColor(color.filter((item) => item !== e.target.value));
        }
    };

    const changeFMaterial = (e) => {
        if (e.target.checked) {
            setFMaterial([...fMaterial, e.target.value]);
        } else {
            setFMaterial(fMaterial.filter((item) => item !== e.target.value));
        }
    };


    useEffect(() => {
        document.title = "Search";
        setCategory([]);
        const getProducts = async () => {
            await axios
                .get(`${process.env.REACT_APP_SERVER_URL}/api/products/`)
                .then(function (response) {
                    setCategory(response.data.data.data);
                    setFilter(response.data.data.data);
                    console.log(response.data.data.data);
                })
                .catch(function (error) {
                    const err = {};
                    err.api = error.response.data?.message
                        ? error.response.data.message
                        : error.message;
                });
        };
        getProducts();
    }, []);

    useEffect(() => {
        let genderFilter = [];

        let searchProducts = category.filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });

        if (gender.length > 0) {
            gender.forEach((e) => {
                searchProducts.filter((item) => {
                    if (item.productGender.toLowerCase().includes(e))
                        return genderFilter.push(item);
                    else return null;
                });
            });
        } else {
            genderFilter = searchProducts;
        }

        setFilter(genderFilter);
    }, [gender, category, search]);

    return { filter, searchProduct, changeGender, changeFtype, changeShape, changeColor, changeFMaterial }
}
