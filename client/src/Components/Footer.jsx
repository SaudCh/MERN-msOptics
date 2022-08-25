import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <section className="container-fluid bg-light mt-4 py-3">
      <div className="row">
        <div className="col-12 col-md-3">
          <h5>{t("inside_mhsoptics")}</h5>
          <ul className="footer-ul">
            <li>
              <Link className="link" to={"/about"}>
                {t("our_story")}
              </Link>
            </li>
            <li>
              <Link className="link" to="contact">
                {t("contact_us")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h5>{t("support")}</h5>
          <ul className="footer-ul">
            <li>
              <Link className="link" to="returns">
                {t("return_policy")}
              </Link>
            </li>
            <li>
              <Link className="link" to="garantee">
                {t("garantie")}
              </Link>
            </li>
            <li>
              <Link className="link" to="shipping">
                {t("shipping_and_delevry")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h5>{t("s_media")}</h5>
          <ul className="footer-ul">
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <h5>{t("p_m")}</h5>
          <ul className="footer-ul"></ul>
        </div>
      </div>
    </section>
  );
}
