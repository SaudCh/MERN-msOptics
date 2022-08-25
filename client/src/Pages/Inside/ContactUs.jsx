import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  document.title = "Contact Us";
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div class="row align-items-center justify-content-center" style={{ minHeight: "72vh" }}>
        <div className="col-10 col-md-9">
          <div class="contact_img text-center">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/assets/contact.svg`}
              alt="contact us"
              width={250}
            />
          </div>
          <div class="contact_info text-center">
            <h1>{t("customer_service")}</h1>
            <p>{t("phone_number")} :</p>
            <span>+32 46 638 28 58</span>
            <br />
            <span>{t("email")} :</span>
            <br />
            <a href="mailto:support@mhsoptics.be" className="link-blue">
              support@mhsoptics.be
            </a>
            <p>{t("opning")} :</p>
            <span>{t("time")}</span>
            <br />
            <a href="mailto:support@mhsoptics.be" class="contact link-blue">
              {t("contact us")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
