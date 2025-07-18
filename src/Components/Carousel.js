import React from 'react'
import Help from '../Assets/Help.png'
import Teach from '../Assets/Teach.png'
import Youth from '../Assets/Youth.jpg'
import Food from '../Assets/Food.jpg'
import Plant from '../Assets/Plant.jpg'
import Wave from '../Assets/Wave.jpg'
import Empchild from '../Assets/Empchild.jpg'


export default function Carousel() {
  return (
    <div   
          style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="3000"
          style={{width:'100%',maxHeight:'70vh', overflow:'hidden', margin:'auto'}}
    >
    <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={Help} className="d-block w-100 h-100" alt="..."  style={{ objectFit: 'cover', height: '50vh' }}/>
        </div>
        <div className="carousel-item">
        <img src={Youth} className="d-block w-100 h-100" alt="..."   style={{ objectFit: 'cover', height: '50vh' }}/>
        </div>
        <div className="carousel-item">
        <img src={Food} className="d-block w-100  h-100" alt="..."    style={{ objectFit: 'cover', height: '50vh' }}/>
        </div>
         <div className="carousel-item">
        <img src={Plant} className="d-block w-100 h-100" alt="..."     style={{ objectFit: 'cover', height: '50vh' }}/>
        </div>
         <div className="carousel-item">
        <img src={Wave} className="d-block w-100 h-100" alt="..."     style={{ objectFit: 'cover', height: '50vh' }}/>
        </div>
    </div>
<div
  className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex justify-content-center gap-2"
>
  {/* Full Image Button */}
  <button
    className="btn p-0 border-0"
    style={{ width: '75px', height: '60px', overflow: 'hidden' }}
  >
    <img
      src={Empchild}
      alt="..."
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
  </button>

  {/* Small Text Buttons */}
  <button className="btn btn-primary px-2 py-1">Donate Us</button>
  <button className="btn btn-primary px-2 py-1">Become a Volunteer</button>
  <button className="btn btn-primary px-2 py-1">Feed</button>
</div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>  
    </div>
    </div>
    
    
  )
}
