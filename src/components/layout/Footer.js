import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"

import logo from '../../images/logo.svg';
import imecUgent from '../../images/imec-mict-ugent.png';
import citip from '../../images/transparant-CiTiP.png';
import smit from '../../images/smit.png';
import uGent from '../../images/universiteit-gent.png';
import kuLeuven from '../../images/transparant-KU-Leuven-logo.png';
import vub from '../../images/vub.png';
import imec from '../../images/imec.png';
import aiVl from '../../images/ai-vlaanderen.png';

const Footer = () => {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="error-report">Iets fout of onduidelijk op deze pagina? <a href="#">Meld het ons</a>.</p>
          </div>
        </div>
        <div className="row company-info">
          <div className="col-12 col-xl-3 col-lg-3">
            <div className="logo">
              <img src={logo} alt="logo Kenniscentrum Data & Maatschappij"/>
            </div>
            <div className="social">
              <a href="#" className="social__link"><FontAwesomeIcon icon={faFacebookF} color="#fff" size="lg" /></a>
              <a href="#" className="social__link"><FontAwesomeIcon icon={faTwitter} color="#fff" size="lg" /></a>
              <a href="#" className="social__link"><FontAwesomeIcon icon={faLinkedinIn} color="#fff" size="lg" /></a>
            </div>
          </div>
          <address className="col-12 col-xl-3 col-lg-4 contact">
            <div className="contact__address">
              <p>Pleinlaan 9 (2de verdieping)<br />1050 Brussel</p>
            </div>
            <div className="contact__info">
              <div>
                <FontAwesomeIcon icon={faEnvelope} size="sm"/><a href="mailto:info@data-en-maatschappij.ai">info@data-en-maatschappij.ai</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} size="sm"/><a href="tel:+3226148540">+32 2 614 85 40</a>
              </div>
            </div>
          </address>
          <div className="col-12 col-xl-6 col-lg-5">
            <div className="sponsors">
              <div><img src={imecUgent} alt="logo Imec Mict UGent"/></div>
              <div><img src={citip} alt="logo CiTiP" /></div>
              <div><img src={smit} alt="logo Smit" /></div>
              <div><img src={uGent} alt="logo UGent" /></div>
              <div><img src={kuLeuven} alt="logo KU Leuven" /></div>
              <div><img src={vub} alt="logo vub" /></div>
              <div><img src={imec} alt="logo Imec" /></div>
            </div>
            <div className="main-sponsor">
              <img src={aiVl}></img>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p>&copy; Copyright 2019 \ <a href="#">Privacyverklaring</a> \ <a href="#">Cookiebeleid</a> \ <a href="#">Nieuwsbrief archief</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;