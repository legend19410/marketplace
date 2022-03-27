import React from 'react'
import './styles/Feature.css';

function Feature() {
  return (
    <section className="features" id="features">

    <h1 className="heading"> our <span>features</span> </h1>

    <div className="box-container">

        <div className="box">
            <img src="image/feature-img-1.png" alt=""/>
            <h3>fresh and organic</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src="image/feature-img-2.png" alt=""/>
            <h3>free delivery</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
            <a href="#" className="btn">read more</a>
        </div>

        <div className="box">
            <img src="image/feature-img-3.png" alt=""/>
            <h3>easy payments</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!</p>
            <a href="#" className="btn">read more</a>
        </div>

    </div>

</section>

  )
}

export default Feature