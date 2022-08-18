import React from 'react';
import NotFoundIcon from '../../Images/notFound.svg';

export default function NotFound() {
  document.title = '404 Not Found';
  return (
    <div
      style={{ height: '80vh' }}
      className="d-flex justify-content-center align-items-center"
    >
      <figure className="text-center">
        <img src={NotFoundIcon} alt="Not Found" className="img-fluid" />
        <figcaption className="text-muted">Page Not Found</figcaption>
      </figure>
    </div>
  );
}
