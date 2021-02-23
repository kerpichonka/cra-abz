import React from 'react';
import laptop from '../../images/man-laptop-v1.svg';
import './AcquaintedSection.scss';

export const AcquaintedSection = () => {
  return (
    <section className="acquainted">
      <h2 className="acquainted__title">
        Let's get acquainted
      </h2>

      <div className="acquainted__body">
        <div className="acquainted__image" style={{backgroundImage: `url(${laptop})`}}></div>

        <div className="acquainted__description">
          <h3 className="acquainted__description-title">
            I am cool frontend developer
          </h3>
          <p className="acquainted__paragraph">
            We will evaluate how clean your approuch to writing CSS 
            and JavaScript code is. You can use CSS and JavaScript
            3rd party libraries without any restriction.
          </p>
          <p className="acquainted__paragraph">
            If 3rd party css/javascript libraries are added to the project via 
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bounu points as well. Slice service directory 
            page PSD mockup into HTML5/CSS3.
          </p>
          <a href="#registration" className="acquainted__link">Sign up now</a>
        </div>

      </div>
    </section>
  )
}

