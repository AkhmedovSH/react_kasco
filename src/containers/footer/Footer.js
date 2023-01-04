import React from "react";

import { FaFacebook, FaTwitter, FaGoogle, FaTwitch } from "react-icons/fa";

import Logo from '../../assets/img/logo-footer.png'

function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div class="footer-link">
          <ul class="footer-grid">
            <li><a href="#">회사소개</a></li>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">Q&A</a></li>
            <li><a href="#">F&Q</a></li>
          </ul>
        </div>
        <div class="footer-address">
          <div class="footer-grid">
            <strong class="footer-logo">
              <a href="./index.html">
                <img src={Logo} alt="" class="img-logo" />
              </a>
            </strong>
            <address class="address">
              <span>출하문의 : (전화) 070  경매 및 출하 문의 : (전화) 070-8889-3456~7  (이메일) : djs@kasko.co.kr   (팩스) 031-719-6540</span>
            </address>
            <span class="footer-copy">COPYRIGHT (C) KASCO. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
