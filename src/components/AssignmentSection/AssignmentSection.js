import React from 'react';
import banner from '../../images/banner-photo.jpg';
import './AssignmentSection.scss';

export const AssignmentSection = () => {
  return (
    <section className="assignment" style={{backgroundImage: `url(${banner})`}}>
      <div className="assignment__body">
        <h1 className="assignment__title">
          Test Assignment <br />
          for frontend developer position
        </h1>

        <p className="assignment__description">
          We kindly remind you that your test assignment should be submited
          as a link to github/bitbucket repository. Please be patient, we
          concider and respond to every application that meets minimum
          requirements. We look forward to your submission. Good luck!
          The photo has to scale in the banner area on the different screens
        </p>
        
        <a href="#registration" className="assignment__button">
          Sign up now
        </a>
      </div>
    </section>
  );
}
