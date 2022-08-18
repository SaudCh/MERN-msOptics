import React from 'react';
import MiddleImage from '../../Images/middlebg.jpg';

export default function OurWays() {
  return (
    <section className="container-fluid mt-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>Our Ways</h1>
        </div>
        <div className="col-11 col-md-5">
          <h5>we provide the right lenses for you</h5>
          <p>
            Our work ensures quality and high service, in addition to following
            up the latest trends. Ongoing training is also important to us. Only
            in this way can we keep up to date with the latest developments, the
            latest technologies and the latest products We offer a wide range
            and a wide choice of business scientists , and We are happy to show
            you the way. The glasses not should be just beautiful and modern ,
            It needs to match your personality and face shape We specialize in
            individual built-in lenses that are fully adapted to each
            individual's lifestyle and choice of eyeriks....
          </p>
        </div>
        <div className="col-11 col-md-5">
          <img src={MiddleImage} style={{ width: '100%' }} alt="" />
        </div>
      </div>
    </section>
  );
}
