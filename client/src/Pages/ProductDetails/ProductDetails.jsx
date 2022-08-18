import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../Components/css/productDetails.css';
import { formatCurrency } from '../../Components/utils/currencyFormater';
import { IncrementIcon, DecrementIcon } from '../../Components/icons';
import SvgComponent from '../../Images/glassSize.svg';
import DimensionOne from '../../Images/dimensionOne.svg';
import DimensionTwo from '../../Images/dimensionTwo.svg';
import DimensionThree from '../../Images/dimensionThree.svg';
import Error from '../../Images/errorIcon.png';
import { CartContext } from '../../Components/Context/CartContext';
import { WishContext } from '../../Components/Context/WishlistContext';

export default function ProductDetails() {
  const { addToWishlist, wishlist, removeFromWishlist } =
    useContext(WishContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const cart = useContext(CartContext);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/${id}`)
        .then(function (response) {
          setSelectedImage(response.data.data.data.images[0]);
          setProduct(response.data.data.data);
          setIsInWishlist(
            wishlist.find(
              (item) => item.product === response.data.data.data._id
            )
          );

          document.title = response.data.data.data.title;
        })
        .catch(function (error) {
          const err = {};
          error.response.data?.message
            ? (err.api = error.response.data.message)
            : (err.network = error.message);

          setError(err);
        });
    };
    getProducts();
  }, [id, wishlist]);

  if (!!error) {
    return (
      <div
        style={{ height: '80vh' }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="text-center">
          <img src={Error} alt="" width={100} />
          {error.network ? (
            <>
              <p>{error.network}</p>
            </>
          ) : (
            <p className="h3 fw-bold text-secondary">
              No Item Found For that Id
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row align-item-center justify-content-center">
          <div className="col-12 col-md-5 d-flex p-2 justify-content-between align-item-center">
            <div className="col-9">
              <figure className="pd-selected-img-container">
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}/img/products/${selectedImage}`}
                  alt="product"
                  className="img-fluid col-12 product-details-selected-img"
                />
              </figure>
            </div>
            <div className="col-2">
              {product.images
                ? product.images
                    .filter((image) => image !== selectedImage)
                    .map((image) => (
                      <div
                        key={image}
                        className="my-2 col-12 border overflow-hidden position-relative d-flex justify-content-center align-items-center"
                        onClick={() => setSelectedImage(image)}
                        style={{
                          height: '100px',
                        }}
                      >
                        <figure className="pd-all-image-container p-0 m-0">
                          <div className="pd-div-1"></div>
                          <img
                            src={`${process.env.REACT_APP_SERVER_URL}/img/products/${image}`}
                            alt=""
                            className="image-fluid pd-all-images col-12"
                          />
                        </figure>
                      </div>
                    ))
                : null}
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <h2 className="m-0">{product.title}</h2>
            <p className="text-green m-0">In Stock</p>
            <p className="fw-bold text-success p-0 m-0">
              {formatCurrency(product.price)}
            </p>
            <div className="add-to-cart-container d-flex flex-column align-items-center flex-md-row">
              <div className="d-flex border">
                <button
                  className="btn px-2 py-1 bg-light cart-icon"
                  style={{ borderRadius: '0', borderColor: '#F8F9FA' }}
                  onClick={() => setQuantity((e) => (e > 1 ? e - 1 : 1))}
                >
                  <DecrementIcon />
                </button>
                <div>
                  <p className="m-0 px-3 py-1">{quantity}</p>
                </div>

                <button
                  className="btn px-2 py-1 bg-light cart-icon"
                  style={{ borderRadius: '0', borderColor: '#F8F9FA' }}
                  onClick={() => setQuantity((e) => e + 1)}
                >
                  <IncrementIcon />
                </button>
              </div>

              <div className="add-to-cart-btn mt-2 mt-md-0 ms-md-2">
                <button
                  onClick={() => cart.addToCart(product, quantity)}
                  className="btn text-white"
                  style={{ backgroundColor: '#373B3C' }}
                >
                  Add to Cart
                </button>
              </div>

              <div className="add-to-cart-btn mt-2 mt-md-0  ms-md-2">
                {!isInWishlist ? (
                  <button
                    className="btn"
                    style={{ borderColor: '#373B3C', color: '#373B3C' }}
                    onClick={() => addToWishlist(product.id)}
                  >
                    Add to Wishlist
                  </button>
                ) : (
                  <button
                    className="btn"
                    style={{ borderColor: '#373B3C', color: '#373B3C' }}
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove from Wishlist
                  </button>
                )}
              </div>
            </div>

            <div className="mt-1">
              <p>
                <span className="fw-bold">Description: </span>
                {product.description}
              </p>
            </div>
          </div>
        </div>

        <div className="border-top row pt-3">
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-between">
              <p className="p-0 m-0 mt-1 fw-bold">Gender:</p>
              <p className="p-0 m-0 mt-1">{product.productGender}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="p-0 m-0 mt-1 fw-bold">Shape:</p>
              <p className="p-0 m-0 mt-1">{product.shape}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="p-0 m-0 mt-1 fw-bold">Frame Color:</p>
              <p className="p-0 m-0 mt-1">{product.colors}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="p-0 m-0 mt-1 fw-bold">Temple Color:</p>
              <p className="p-0 m-0 mt-1">{product.templeColor}</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="p-0 m-0 mt-1 fw-bold">Frame material:</p>
              <p className="p-0 m-0 mt-1">{product.frameMatirial}</p>
            </div>
          </div>
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="p-0 m-0 mt-1 fw-bold">Glass size:</p>
              </div>
              <div className="p-0 m-0 mt-1 text-center">
                <img src={SvgComponent} alt="" />
                <p className="p-0 m-0">{product.glassWidth}mm</p>
              </div>
            </div>

            <div>
              <p className="p-0 m-0 mt-1 fw-bold">Dimensions:</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-1">
              <div className="p-0 m-0 mt-1 text-center">
                <img src={DimensionOne} alt="" />
                <p className="p-0 m-0">{product.noasSize}mm</p>
              </div>

              <div className="p-0 m-0 mt-1 text-center">
                <img src={DimensionTwo} alt="" />
                <p className="p-0 m-0">{product.sideSize}mm</p>
              </div>

              <div className="p-0 m-0 mt-1 text-center">
                <img src={DimensionThree} alt="" />
                <br />
                <span className="p-0 m-0">{product.lenseHeight}mm</span>
                <span className="p-0 m-0">{product.lenseSize}mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
