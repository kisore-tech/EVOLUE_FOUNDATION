import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
  
const SocialIcons = () => {
  const iconStyle = {
    fontSize: '13px',
    color: 'white',
  };

  const icons = [
    { icon: <FaInstagram />, bg: '#E1306C' },
    { icon: <FaFacebookF />, bg: '#1877F2' },
    { icon: <FaYoutube />, bg: '#FF0000' },
    { icon: <FaXTwitter />, bg: '#000000' },
    { icon: <FaWhatsapp />, bg: '#25D366' },
  ];

  return (
    <div style={{ display: 'flex', gap: '7px', marginRight:'15px'}}>
      {icons.map((item, index) => (
        <div
          key={index}
            style={{
              backgroundColor: item.bg,
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              cursor: 'pointer',
              marginTop: '10px',
            }}
        >
          <span style={{...iconStyle, marginBottom:'5px'}}>{item.icon}</span>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;