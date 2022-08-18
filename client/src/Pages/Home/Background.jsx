import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Background() {
  const { t } = useTranslation();
  return (
    <section className="home-top-background">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span
              className="text-white"
              style={{ fontSize: 50, fontWeight: '400' }}
            >
              {t('hero_big_title')}
            </span>
            <br />
            <span
              className="text-white"
              style={{ fontSize: '100px', fontWeight: '700' }}
            >
              {' '}
              {t('hero_big_title_frame')}
            </span>
            <br />
            <span className="text-white" style={{ fontSize: 25 }}>
              {t('hero_subtitle')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
