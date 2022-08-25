import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function SideBarLayout() {
  const { t } = useTranslation();
  return (
    <div>
      <Header background={true} />
      <div className="container-fluid mt-4">
        <div
          className="row justify-content-center flex-wrap"
          style={{ minHeight: '80vh' }}
        >
          <div className="col-12 col-md-2 p-0">
            <div className="border rounded">
              <Link
                to="/account"
                className="btn m-0 side-bar-btn border-bottom py-2"
                style={{ width: '100%' }}
              >
                {t("account")}
              </Link>
              <Link
                to="/wishlist"
                className="btn m-0 side-bar-btn border-bottom py-2"
                style={{ width: '100%' }}
              >
                {t("wishlist")}
              </Link>
              <Link
                to="/order-history"
                className="btn m-0 side-bar-btn  py-2"
                style={{ width: '100%' }}
              >
                Order History
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
