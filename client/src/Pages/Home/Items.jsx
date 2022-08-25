import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import ViewMoreCard from "../../Components/Home/ViewMoreCard";
import useWindowDimensions from "../../Components/Hooks/useWindowDimensions";
import { ChevronLeftIcon, ChevronRightIcon } from "../../Components/icons";
import axios from "axios";
import SoloSlide from "./Slide";
import { useTranslation } from "react-i18next";

function Items() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_SERVER_URL}/api/products/`)
        .then(function (response) {
          // console.log(response.data.data.data);
          setItems(response.data.data.data);
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

  const { width } = useWindowDimensions();
  const visibleSlides = width > 992 ? 4 : width > 768 ? 3 : width > 576 ? 2 : 1;
  if (items?.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container-fluid mt-2">
      <div className="row justify-content-center position-relative">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
            {t("our_best_items")}
          </h1>
        </div>
        <CarouselProvider
          className="relative mt-8"
          isIntrinsicHeight={true}
          naturalSlideWidth={250}
          totalSlides={items?.length}
          visibleSlides={visibleSlides}
        >
          {visibleSlides < items?.length && (
            <ButtonBack className="home-item-chevron home-item-chevron-left">
              <ChevronLeftIcon color="black" />
            </ButtonBack>
          )}
          <Slider>
            {items.map((item, index) => (
              <Slide key={index}>
                <SoloSlide item={item} />
              </Slide>
            ))}
            <Slide className=" px-4" index={Math.random()}>
              <ViewMoreCard />
            </Slide>
          </Slider>
          {visibleSlides < items?.length && (
            <ButtonNext className="home-item-chevron home-item-chevron-right">
              <ChevronRightIcon color="black" />
            </ButtonNext>
          )}
        </CarouselProvider>
      </div>
    </section>
  );
}

export default Items;
