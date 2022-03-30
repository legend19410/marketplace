import React from 'react'
import './styles/Footer.css';
import Logo from './Logo'

function Footer() {
  return (
    <section className="footer">

    <div className="box-container">

        <div className="box">
            <h3> <Logo/> </h3>
            <p>Shop Now at the MarketPLACE for the most affordable prices. Also see our special offers. Dont let these sale miss you!</p>
            <img src="image/payment.png" className="payment-img" alt=""/>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +1 (876) 895-8478 </a>
            <a href="#" className="links"> <i className="fas fa-phone"></i> +1 (876) 803-8220</a>
            <a href="#" className="links"> <i className="fas fa-envelope"></i> francismilton19410@gmail.com </a>
            <a href="#" className="links"> <i className="fas fa-map-marker-alt"></i> Kingston, Jamaica </a>
        </div>

        <div className="box">
            <h3>Social Media</h3>
            <a href="https://www.facebook.com/profile.php?id=100005219239487" className="links"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="#" className="links"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="https://www.instagram.com/miltonfrancis8/" className="links"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="https://jm.linkedin.com/in/milton-francis-66b2471a7" className="links"> <i className="fab fa-linkedin"></i> linkedin </a>
            <a href="https://github.com/legend19410/marketplace" className="links"> <i className="fab fa-github"></i> github repo</a>
        </div>

        <div className="box">
            <h3>Quick Links</h3>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i>  Home </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i>  Categories </a>
            <a href="#" className="links"> <i className="fas fa-arrow-right"></i>  About </a>
            <a href="https://legend19410.github.io/my_portfolio" className="links"> <i className="fas fa-arrow-right"></i> Portfolio </a>
        </div>

        {/* <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input type="email" placeholder="your email" className="email"/>
            <input type="submit" value="subscribe" className="btn"/>
        </div> */}

    </div>

    <div className="credit"> Copyright © 2022. <span>All Rights Reserved </span></div>

</section>
  )
}

export default Footer