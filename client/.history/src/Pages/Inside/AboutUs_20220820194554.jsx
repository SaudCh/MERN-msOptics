import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  document.title = "About Us";
  const { t } = useTranslation();
  return (
    <div className="container-fluid my-5">
      <div className="row align-items-center justify-content-center">
        <div class="col-10 col-md-9">
          <div class="garantie_img text-center">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/assets/story.svg`}
              alt="Our Story"
              width="250px"
            />
          </div>
          <div class="garantie_info story_info">
            <p>{t("about_parag")}</p>
            <p>{t("about_parag1")}</p>
            <p>{t("about_parag2")}</p>
            <p>{t("about_parag3")}</p>
            <p>{t("about_parag4")}</p>
            <p>{t("about_parag5")}</p>
            <p>{t("about_parag6")}</p>
            <p>{t("about_parag7")}</p>
            <p>{t("about_parag8")}</p>
            <p>{t("about_parag9")}</p>
            <p>{t("about_parag10")}</p>
            <p>{t("about_parag11")}</p>
            <p>{t("about_parag12")}</p>
            <p>{t("about_parag13")}</p>
            <p>{t("about_parag14")}</p>
            <p>{t("about_parag15")}</p>
            <p>{t("about_parag16")}</p>
            <p>{t("about_parag17")}</p>
            <p>{t("about_parag18")}</p>
            <p>{t("about_parag19")}</p>
            <p>{t("about_parag20")}</p>
            <p>{t("about_parag21")}</p>
            <p>{t("about_parag22")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
