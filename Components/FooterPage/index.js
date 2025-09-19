import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
// import Burger from "../Burger";
import Image from 'next/image'
import ImgHover from '../ComponentsInner/ImgHover'
import { Location, Message } from 'react-iconly'

const FooterPage = ({ contactSetting = {} }) => {
  return (
    <div data-aos="fade-up" className={cn(styles.footerPage, 'pt-5')}>
      <div className="container">
        <div className="footer-wrapper py-5 px-5 px-md-0">
          <div className="row g-5">
            <div className="col-md-12 col-xl-4">
              <div className="footer-item">
                <h4 className="fw-bold text-20 text-uppercase mb-5">
                  about us
                </h4>
                <div className="footer-item__content">
                  <p className="mb-5 fst-italic">
                    {}
                  </p>
                  <a
                    className="fst-italic d-flex items-center gap-3"
                    target="_blank"
                    href="https://www.google.com/maps/place/531+W+29th+St,+New+York,+NY+10001,+USA/@40.7523433,-74.0052683,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89c2444f6d1e6915:0x84a7e82470ac9f90!2s531+West+Ave,+Brooklyn,+NY+11224,+USA!3b1!8m2!3d40.5820668!4d-73.9722096!3m4!1s0x89c259b68e06620d:0xfebfdc67d5bb91b6!8m2!3d40.7523418!4d-74.0030696?hl=en"
                    rel="noreferrer"
                  >
                    <Location set="light" />
                    <span>{contactSetting?.address}</span>
                  </a>
                  <a
                    className="fst-italic d-flex items-center gap-3 mt-4"
                    target="_blank"
                    href="mailto:aalto@qodeinteractive.com"
                    rel="noreferrer"
                  >
                    <Message set="light" />
                    <span>{contactSetting?.email}</span>
                  </a>
                  <form className="needs-validation mt-5" noValidate>
                    <div className="input-group has-validation position-relative w-100">
                      <div className="input-both w-100">
                        <input
                          type="text"
                          className="form-control"
                          id="validationTooltipUsername"
                          aria-describedby="validationTooltipUsernamePrepend"
                          required
                        />
                        <button type="submit">
                          <Message set="light" />
                        </button>
                      </div>
                      <div className="invalid-tooltip">
                        Please choose a unique and valid username.
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-xl-4">
              <div className="footer-item">
                <h4 className="fw-bold text-20 text-uppercase mb-5">
                  LATEST TWEETS
                </h4>
                <div className="footer-item__content">
                  <div className="d-flex gap-3">
                  <span>
                    <AiOutlineTwitter />
                    </span>
                    <p>
                      <a
                        className="fst-italic"
                        target="_blank"
                        href="https://www.google.com/maps/place/531+W+29th+St,+New+York,+NY+10001,+USA/@40.7523433,-74.0052683,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x89c2444f6d1e6915:0x84a7e82470ac9f90!2s531+West+Ave,+Brooklyn,+NY+11224,+USA!3b1!8m2!3d40.5820668!4d-73.9722096!3m4!1s0x89c259b68e06620d:0xfebfdc67d5bb91b6!8m2!3d40.7523418!4d-74.0030696?hl=en"
                        rel="noreferrer"
                      >
                        @RobWattCT
                      </a>
                      Hey, please DM us so we can provide more details. Thanks!
                    </p>
                  </div>
                  <div className="d-flex gap-3">
                    <span>
                    <AiOutlineTwitter />
                    </span>
                    <p>
                      Here comes La Comète!
                      <a
                        className="fst-italic px-2"
                        target="_blank"
                        href="https://t.co/ApIk6kk3Tt"
                        rel="noreferrer"
                      >
                        https://t.co/ApIk6kk3Tt
                      </a>
                      theme is made for any type of modern…
                      <a
                        className="fst-italic px-2"
                        target="_blank"
                        href="https://t.co/ApIk6kk3Tt"
                        rel="noreferrer"
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12 col-xl-8">
              <div className="footer-item footer-ig">
                <h4 className="fw-bold text-20 text-uppercase mb-5">
                  Instagram
                </h4>
                <div className="footer-item__content">
                  <div className="row g-4 g-md-5">
                    <div className="col-6 col-md-4">
                      <a href="" target="_blank">
                        <ImgHover />
                      </a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="" target="_blank">
                        <ImgHover />
                      </a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="" target="_blank">
                        <ImgHover />
                      </a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="" target="_blank">
                        <ImgHover />
                      </a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="" target="_blank">
                        <ImgHover />
                      </a>
                    </div>
                    <div className="col-6 col-md-4">
                      <a href="" target="_blank">
                        <ImgHover />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <figure>
                <Image src={require('../../assets/LIBEROSTUDIOLOGO.png')} />
              </figure>
            </div>
            <div className="col-md-6">
              <ul className="ps-0 d-flex align-items-center gap-5 align-items-center justify-content-center justify-content-md-end mt-5 mt-md-0 ">
                <li>
                  <a
                    className="fst-italic d-block"
                    target="_blank"
                    href="#"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="fst-italic d-block"
                    target="_blank"
                    href="#"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="fst-italic d-block"
                    target="_blank"
                    href="#"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="fst-italic d-block"
                    target="_blank"
                    href="#"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterPage
