import './YellowButton.css';
import { FaRegHeart } from 'react-icons/fa6';  

const YellowButton = () => {
  return (
    <button className="yellow-btn">
      <FaRegHeart style={{ marginRight: '5px' }} />
      SUPPORT A CAUSE
    </button>
  );
};

export default YellowButton;
