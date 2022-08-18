import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import { AuthContext } from './Context/AuthContext';
import HeaderIcon from './Header/headerIcon';
import Logo from '../Images/logo.png';
import { UserIcon } from './icons';
import { useTranslation } from 'react-i18next';

export default function Header({ background }) {
  const { t } = useTranslation();
  const auth = useContext(AuthContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        background ? 'navbar-light bg-light' : 'navbar-dark home-header-style'
      }`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} style={{ width: 150 }} alt="logo" />
        </Link>
        <div>
          <span className="d-md-none">
            <HeaderIcon background={background} />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/t/sunglasses" className="nav-link" aria-current="page">
                {t('sunglasses')}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/t/prescription" className="nav-link">
                {t('persctiption')}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={auth.isLoggedIn ? '/wishlist' : '/login'}
                className="nav-link"
              >
                {t('wishlist')}
              </Link>
            </li>
            <li className="d-md-none">
              <Link to={auth.isLoggedIn ? '/account' : '/login'}>
                <UserIcon
                  color={background ? 'black' : 'white'}
                  style={{ marginRight: 10 }}
                />
              </Link>
            </li>
          </ul>
          <span className="d-none d-md-block">
            <HeaderIcon background={background} />
          </span>
        </div>
      </div>
    </nav>
  );
}
