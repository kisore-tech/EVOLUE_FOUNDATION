import React from 'react';
import { FaHandHoldingHeart, FaBullhorn, FaHandshake, FaBuilding } from 'react-icons/fa';
import { BsCircleFill } from 'react-icons/bs'; // optional if you want the white circle with a fallback
import { GiHeartInside } from 'react-icons/gi';
import { MdVolunteerActivism } from 'react-icons/md';

const circleStyle = {
  width: 115,
  height: 115,
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '65px',
};


export default function SupportOptions() {
//   const options = [
//     { icon: <FaHandHoldingHeart size={40} />, label: "BECOME VOLUNTEER" },
//     { icon: <FaBullhorn size={40} />, label: "SPREAD THE WORDS" },
//     { icon: <FaHandshake size={40} />, label: "CORPORATE PARTNERS" },
//     { icon: <img src="/benevity.png" alt="benevity" className="w-10 h-10" />, label: "BENEVITY" },
//     { icon: <FaBuilding size={40} />, label: "CSR" },
//   ];
  




  

  return (
    <div>
        <div style={{height:'10px' , width:'100%', backgroundColor:'#005FA5', marginTop:'30px'}}></div>
        <div  style={{height:'50vh', backgroundColor:'#005FA5',marginTop:'5px'}}>
            <div style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-evenly', 
                    
                    flexWrap: 'wrap',
                    gap: '20px', // optional, for spacing
                    padding: '20px'
                    }}>
                     <div style={circleStyle}><MdVolunteerActivism size={40} color="#005FA5" /></div>
                    <div style={circleStyle}><FaBullhorn size={40} color="#005FA5" /></div>
                     <div style={circleStyle}><FaHandshake size={40} color="#005FA5" /></div>
                     <div style={circleStyle}><GiHeartInside size={40} color="#005FA5" /></div>
                     <div style={circleStyle}><FaBuilding size={40} color="#005FA5" /></div>
            </div>

               



        </div>
        <div style={{height:'10px' , width:'115%', backgroundColor:'#005FA5', marginTop:'5px'}}></div>
        


    </div>
  );
}
