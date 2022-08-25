import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MiddleImage from "../../Images/middlebg.jpg";

export default function OurWays() {
  const { t } = useTranslation();
  return (
    <section className="container-fluid mt-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: "bold" }}>{t("our_ways")}</h1>
        </div>
        <div className="col-11 col-md-5">
          <h5>{t("our_ways_title")}</h5>
          <p>
            {t("about_parag2")} {t("about_parag3")} {t("about_parag4")}{" "}
            {t("about_parag5")} {t("about_parag6")}
            <Link className="link text-success fw-bold" to={"/about"}>
              {t("see_all")}
            </Link>
          </p>
        </div>
        <div className="col-11 col-md-5">
          <img src={MiddleImage} style={{ width: "100%" }} alt="" />
        </div>
      </div>
    </section>
  );
}
