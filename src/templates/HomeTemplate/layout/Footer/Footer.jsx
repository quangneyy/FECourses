import React from 'react';
import logo from "../../../../img/header/logo.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__cover">
                <div className="footer__1">
                    <img src={logo} alt="logo" />
                    <h4>Our New App Is Comming Soon</h4>
                </div>
                <div className="footer__2">
                    <h3>REFERENCES</h3>
                    <ul>
                        <li><a href="https://reactjs.org/">ReactJs </a></li>
                        <li><a href="https://viblo.asia/newest">Viblo</a></li>
                        <li><a href="https://www.youtube.com/c/OnlineTutorials4Designers">Animation</a></li>
                        <li><a href="https://www.npmjs.com/">npmJs</a></li>
                    </ul>
                </div>
                <div className="footer__3">
                    <h3>SOCIAL</h3>
                    <ul>
                        <li><a href="https://github.com/">GitHub</a></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.tiktok.com/@vannghiak2?_t=8UBuSEWUovR&_r=1">Tiktok</a></li>
                        <li><a href="https://twitter.com/?lang=vi">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer__4">
                    <h3>VISIT</h3>
                    <ul>
                        <li><span>Address: </span>318 Phan Van Tri Street, Ward 11, Binh Thanh District, Ho Chi Minh</li>
                        <li><span>Email: </span>abcxyz@gmail.com</li>
                        <li><span>Phone: </span>+(84) 909 090</li>
                    </ul>
                    </div>
            </div>
        </div>
    );
};

export default Footer;