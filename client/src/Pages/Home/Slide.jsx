import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { WishContext } from '../../Components/Context/WishlistContext';
import { HeartEmptyIcon, HeartFillIcon } from '../../Components/icons';

export default function SoloSlide({ item }) {
  const navigate = useNavigate();

  const { addToWishlist, wishlist, removeFromWishlist } =
    useContext(WishContext);

  const isInWishlist = wishlist.find((wish) => wish.product === item._id);

  return (
    <div className="mx-2 home-best-items py-2 position-relative">
      <span
        className="position-absolute"
        style={{ right: 20, top: 20, zIndex: '10' }}
      >
        {isInWishlist ? (
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => removeFromWishlist(item.id)}
          >
            <HeartFillIcon style={{ fontSize: '22px' }} />
          </button>
        ) : (
          <button
            style={{ backgroundColor: 'transparent', border: 'none' }}
            onClick={() => addToWishlist(item.id)}
          >
            <HeartEmptyIcon style={{ fontSize: '22px' }} />
          </button>
        )}
      </span>
      <div
        className="border rounded"
        onClick={() => navigate(`/product/${item.id}`)}
      >
        <figure
          className="d-flex justify-content-center align-item-center"
          style={{ height: '200px' }}
        >
          <img
            src={`http://localhost:4000/img/products/${item.images[0]}`}
            className="m-0 p-3 col-12 item-image"
            alt=""
          />
        </figure>
        <p className="text-center p-0 m-0">{item.title}</p>
        <p className="text-success text-center fw-bold p-0 m-0 mb-2">
          {item.price}$
        </p>
      </div>
    </div>
  );
}
