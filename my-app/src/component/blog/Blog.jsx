import React from 'react';
import icon1 from '../../assets/facebook.svg'
import icon2 from '../../assets/tvitter.svg'
import icon3 from '../../assets/intagram.svg'

function Blog({ text, col, image }) {
  return (
    
    <div
  style={{
    width: '250px',
    height: '400px',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
  }}
>
  <img
    src={image}
    alt={text}
    style={{
      width: '195px',
      height: '195px',
      borderRadius: '50%',
      objectFit: 'cover', // Обрезка изображения по кругу
    }}
  />
  
  <div style={{ textAlign: 'center' }}>
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>{text}</h1>
    <h2 style={{ fontSize: '18px', color: '#777', margin: '5px 0 0' }}>{col}</h2>
  </div>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '15px',
    }}
  >
    {/* Иконки, замените src на путь к вашим иконкам */}
    <img src={icon1} alt="Icon 1" style={{  width: '48px', height: '48px' }} />
    <img src={icon3} alt="Icon 2" style={{  width: '48px', height: '48px' }} />
    <img src={icon2} alt="Icon 3" style={{  width: '48px', height: '48px' }} />
  </div>
  

</div>


  );
}

export default Blog;
