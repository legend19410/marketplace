import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../shared/Logo'
import './styles/About.css'


function About() {
  return (
    <section className="about" id="about">
  
            <div className="image">
            <img src="image/about.jpg" alt=""/>
            </div>

            <div className="content">
            <h3 className="title">welcome to      <Logo fontSize={'3rem'}/> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio at, saepe accusamus dolorum, quos eos nesciunt amet exercitationem illum quis nostrum, repellat quaerat eum debitis fugit alias magnam omnis!</p>
            <NavLink to='/about' className="btn">read more</NavLink>
            <div className="icons-container">
                <div className="icons">
                    <img src="image/product-7.png" alt=""/>
                    <h3>vegetables</h3>
                </div>
                <div className="icons">
                    <img src="image/product-1.png" alt=""/>
                    <h3>Fruits</h3>
                </div>
                <div className="icons">
                    <img src="image/cat-1.png" alt=""/>
                    <h3>& More!</h3>
                </div>
            </div>
            </div>

</section>
  )
}

export default About