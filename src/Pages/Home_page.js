import React from 'react'
import SocialIcons from '../Components/SocialIcons'
import YellowButton from '../Components/YellowButton'
import Navbar from '../Components/Navbar'
import Logo from '../Assets/Evolve_logo.png'
import Carousel from '../Components/Carousel'
import Carousel2 from '../Components/Carousel2'
import Stories from '../Assets/Stories.jpg'
import Volunteer from '../Assets/Volunteer.jpg'
import Shiksha1 from '../Assets/Shiksha1.jpg'
import Shiksha2 from '../Assets/Shiksha2.jpg'
import Shiksha3 from '../Assets/Shiksha3.jpg'
import Support from '../Components/Support'
import Footer from  '../Components/Footer'
import '../Components/YellowButton.css';

const impactData = [
  { number: '50000+', text: 'PLATES SERVED IN UNPRIVILEGED SCHOOLS' },
  { number: '700+', text: 'MEALS SERVED WEEKLY IN SLUMS' },
  { number: '5000+', text: 'CHILDREN RECEIVED QUALITY EDUCATION KIT' },
  { number: '500+', text: 'CHILDREN BENEFITTED THROUGH FREE COACHING' },
];


export default function Home_page() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginTop:'10px',marginRight:'8px', width:'100%'}}>
            <div   style={{
              marginLeft:'50px',
              marginTop:'30px'
                }}>
                 <a className="navbar-brand" 
              href="#">
                <img src={Logo} alt="Logo" height="60" width="230"/>
                </a>
            </div>
             
              
            <div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-end',marginTop:'10px',marginRight:'8px', paddingLeft:'80px'}}>
                <SocialIcons/>
                <YellowButton/>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        padding: '10px 15px',
                        backgroundColor: '#ffffff', // optional background
                        fontSize: '16px',
                        fontWeight: '500',
                    }}>
                    <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link active" href="#">Our Activities</a>
                    <a className="nav-link active" href="#">Join Us</a>
                    <a className="nav-link active" href="#">About Us</a>
                    <a className="nav-link active" href="#">Contact Us</a>
                </div>
              
           </div>    
      </div>
          <Carousel/>
          <div style={{padding:'50px', marginBottom:'0px'}}>
               <p>
                Evolve Sangh Foundation is a Section 8 nonprofit dedicated to
                uplifting underprivileged youth in India. Our mission-driven programs cater to students  who lack basic
                  necessities, educational resources, or emotional support. Through grassroots initiatives like free food distribution in slums,
                  midday meals in schools, stationery drives, and personalized career mentoring, we aim to break the cycle of poverty and despair.
                    Our Youth Welfare Centers provide holistic care—including hostel, food, coaching, mental wellness, and value-based education. Anchored
                    in compassion and guided by purpose, we believe every young mind deserves the tools, support, and environment to thrive.
                
              </p>
            </div>
          
          <div style={{ backgroundColor: '#004d99', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
           <h2 className="text-3xl font-bold mb-10">OUR IMPACT</h2>
           <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-around',
                gap:'30px',
                marginTop:'40px'
           }}>
           {impactData.map((item, index) => (
            <div key={index} className="min-w-[200px] flex-1">
            <h1 className="text-4xl font-bold">{item.number}</h1>
            <p className="mt-2">{item.text}</p>
          </div>
            ))}
          </div>
          </div>
     <Carousel2/>
       <hr style={{color:'#02509f', border:'1px solid #02509f'}}></hr>
                      <div>     
                          <h3   style={{
          fontFamily: 'Open Sans, sans-serif',
           fontWeight: 800,
          fontSize: '25px',
           lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       color: '#004d99',
       }} >STORIES IN MOTION</h3>
                              <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-evenly'}}>
                                  <div className="card" style={{width: '18rem'}}>
                                  <img src={Stories} className="card-img-top" alt="..." style={{height: '100%', objectFit: 'cover',}}/>
                                   </div>
                                   <div className="card" style={{width: '18rem'}}>
                                   <img src={Stories} className="card-img-top" alt="..." style={{height: '100%', objectFit: 'cover',}}/>
                                    </div>
                                    <div className="card" style={{width: '18rem'}}>
                                    <img src={Stories} className="card-img-top" alt="..." style={{height: '100%', objectFit: 'cover',}}/>
                                    </div>     
                               </div>
                        </div>
     {/* <Support/> */}
     <div style={{marginTop:'30px',height: '45vh'}}>
         <img src={Volunteer}  alt="..." style={{height: '100%',width:'100%'}}/>
     </div>

                        <div style={{marginTop:'30px'}}>
                          <h6 style={{
                              fontFamily: 'Open Sans, sans-serif',
                              fontWeight: 800,
                              fontSize: '25px',
                              lineHeight: '100%',
                                letterSpacing: '0px',
                                textAlign: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#004d99',
                          }}>
                          SUPPORT A CAUSE
                        </h6>
                         </div>

              <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  gap: '20px',
  padding: '20px',
}}>

  {/* Card 1 */}
  <div className="card" style={{ width: '18rem', border: 'none'}}>
    <div style={{ position: 'relative' }}>
      <img src={Shiksha1} className="card-img-top" alt="..." />
      <div style={{
        position: 'absolute',
        bottom: '0',
        // background: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
      }}>
        <h5 style={{
          fontFamily: 'League Gothic, sans-serif',
           fontWeight: 400,
           fontSize: '40px',
         lineHeight: '100%',
          letterSpacing: '0',
        textTransform: 'uppercase',
          display: 'flex',
         justifyContent: 'left',
           alignItems: 'left',
           marginBottom:'2rem'
        }}>SHIKSHA NA  RUKE</h5>
      </div>
    </div>
    <div className="card-body">
      <p className="card-text" style={{color:'#005Fa5', fontsize:'30px'}}>
                          Smile Foundation, through its
                  'Shiksha Na Ruke' initiative, has
                  been helping children from
                  difficult circumstances get back
                  to school and restart their lives
      </p>
      <p className="card-text">
        <a style={{color:'	#0000ff',opacity:'1',fontWeight:'800px', fontsize:'15px'}}>Know more&gt;</a>
      </p>
    </div>
  </div>

  {/* Repeat for Card 2, Card 3, etc. */}
<div className="card" style={{ width: '18rem', border: 'none',}}>
    <div style={{ position: 'relative' }}>
      <img src={Shiksha2} className="card-img-top" alt="..." />
      <div style={{
        position: 'absolute',
        bottom: '0',
        // background: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
      }}>
        <h5 style={{
          fontFamily: 'League Gothic, sans-serif',
           fontWeight: 400,
           fontSize: '40px',
         lineHeight: '100%',
          letterSpacing: '0',
        textTransform: 'uppercase',
          display: 'flex',
         justifyContent: 'left',
           alignItems: 'left',
           marginBottom:'2rem'
        }}>SHIKSHA NA RUKE</h5>
      </div>
    </div>
    <div className="card-body">
      <p className="card-text" style={{color:'#005Fa5', fontsize:'30px'}}>
        Smile Foundation, through its
'Shiksha Na Ruke' initiative, has
been helping children from
difficult circumstances get back
to school and restart their lives
      </p>
      <p className="card-text">
        <a style={{color:'	#0000ff',opacity:'1',fontWeight:'800px', fontsize:'15px'}}>Know more&gt;</a>
      </p>
    </div>
  </div>
{/* Card-3 */}
  <div className="card" style={{ width: '18rem', border: 'none'  }}>
    <div style={{ position: 'relative' }}>
      <img src={Shiksha3} className="card-img-top" alt="..." />
      <div style={{
        position: 'absolute',
        bottom: '0',
        // background: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
      }}>
        <h5 className="card-title mb-0"  style={{
          fontFamily: 'League Gothic, sans-serif',
           fontWeight: 400,
           fontSize: '40px',
         lineHeight: '100%',
          letterSpacing: '0',
        textTransform: 'uppercase',
          display: 'flex',
         justifyContent: 'left',
           alignItems: 'left',
           marginBottom:'2rem'
        }}>SHIKSHA NA  RUKE</h5>
      </div>
    </div>
    <div className="card-body">
      <p className="card-text"  style={{color:'#005Fa5', fontsize:'30px'}}>
                Smile Foundation, through its
                'Shiksha Na Ruke' initiative, has
                been helping children from
                difficult circumstances get back
                to school and restart their lives
      </p>
          <p className="card-text">
            <a style={{color:'	#0000ff',opacity:'1',fontWeight:'800px', fontsize:'15px'}}>Know more&gt;</a>
            </p>
    </div>
  </div>

</div>
<Footer/>


      

</div>
   
  )
}