import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Return() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-9">
          <div class="return_img text-center">
            <img
              src={`${process.env.REACT_APP_SERVER_URL}/assets/return.svg`}
              alt="returns"
              width={250}
            />
          </div>
          <div class="return_info">
            <h1 className="text-center">{t("returns_title")}</h1>
            <p class="notice">{t("notice_1")}</p>
            <p class="notice">{t("notice_2")}</p>

            <div class="return_remarque remaque_danger">
              <p>
                {t("remaque_start")}
                <a href="mailto:support@mhsoptics.be">support@mhsoptics.be</a>.
                Any {t("remarque_end")} <Link to="#"> {t("tos")} </Link> .
              </p>
            </div>
            <h3>What is covered by the 2 year warranty?</h3>
            <table>
              <thead>
                <tr class="table100-head">
                  <th class="column2"></th>
                  <th class="column4">✔ {t("covered")}</th>
                  <th class="column7">✘ {t("uncovered")}</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table100-head">
                  <td class="column2">{t("glasses")}</td>
                  <td class="column4">{t("covered_glasses")}</td>
                  <td class="column7">{t("uncovered_glasses")}</td>
                </tr>
                <tr class="table100-head">
                  <td class="column2">{t("frames")}</td>
                  <td class="column4">{t("covered_frames")}</td>
                  <td class="column7">{t("uncovered_frames")}</td>
                </tr>
              </tbody>
            </table>
            <p>{t("paragh")}</p>
            <div class="return_remarque remaque_lite">
              <p>
                {t("remarque_Lite_start")}
                <a href="mailto:support@mhsoptics.be">support@mhsoptics.be</a>.
                {t("remarque_Lite_end")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
