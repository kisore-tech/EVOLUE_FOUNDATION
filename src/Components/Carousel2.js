import React from 'react'
import Our_activity1 from '../Assets/Our_activity1.jpg'
import Our_activity2 from '../Assets/Our_activity2.jpg'
import Our_activity3 from '../Assets/Our_activity3.jpg'

export default function Carousel2() {
  return (
    <div>
       <div id="carouselExampleIndicators" className="carousel slide" style={{maginleft:"20px"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Our_activity1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Our_activity2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Our_activity3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
