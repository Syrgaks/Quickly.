import React from 'react';
import '../../component/about/about.css';
import surot from '../../assets/Image.png';
import surot1 from '../../assets/Divider.png';
import surot2 from '../../assets/фото.png';
import surot3 from '../../assets/Component2.png'
import surot4 from '../../assets/Image1.jpg'
import surot5 from '../../assets/Image2.png'
import surot6 from '../../assets/Image3.png'
import surot7 from '../../assets/Image4.jpg'
import foto1 from '../../assets/foto1.png'
import foto2 from '../../assets/foto2.png'
import foto3 from '../../assets/foto3.png'
import foto4 from '../../assets/foto4.png'
import foto5 from '../../assets/foto5.png'
import foto6 from '../../assets/foto6.png'
import Blog from '../blog/Blog'; // Путь должен быть правильным



export default function About() {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1480px',
          height: '501px',
          padding: '20px',
          backgroundColor: '#F8F9FA',
          margin: 'auto',
        }}
      >
        {/* Текстовая секция */}
        <div style={{ flex: 1, paddingRight: '30px', marginLeft: '60px' }}>
          <h1 className='h1'>
            We wanted to build a company that <br />
            you will love to work with and <br /> connect to
          </h1>
          <p className='pi'>
            We’re doing things bigly, I mean really quite big. The way we operate
            is different <br /> from other companies because we disrupt. We break the
            code, we crack the <br /> code as well.
          </p>
        </div>

        {/* Секция с изображением */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', marginLeft: '10px' }}>
          <img
            src={surot}
            alt="Woman working on a laptop"
            style={{
              borderRadius: '16px',
              width: '100%',
              maxWidth: '400px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              marginTop: '50px',
            }}
          />
        </div>
      </div>

      <div className='containner'>
        <img src={surot1} width={1480} />
      </div>

      <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '30px', marginLeft: '80px' }}>
          <h1 className='h1'>
            When we get to work we <br /> really make things happen <br /> fast and powerfully
          </h1>
          <p className='pi'>
            I want to fly like an angel flare on a ten feet snare I want to <br /> dance until the sun comes up I want to fight your cousin.
          </p>

          <button className='signUp-btn'>Sign Up</button>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={surot2}
            alt="Woman working on a laptop"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '400px',
              marginTop: '50px',
              marginRight:'150px'
              
            }}
          />
        </div>
      </div>
      <div className='conntainer'>
     <img src={surot3} width={1480}/>
    </div>
    
      
      <div className='containe'>
     <h1 className='h1' style={{textAlign:'center ', marginTop:'90px'}}>Work shouldn’t be boring</h1>
      <p className='pi' style={{textAlign:'center'}}>
    I want to fly like an angel flare on a ten feet snare I want to dance <br />
     until the sun comes I want to fight your cousin.
    </p>

    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      marginTop: "30px",
      flexWrap: "wrap",
    }}
  >
    <img src={surot7} style={{ marginTop:'-250px', borderRadius: "15px", }} />
    <img src={surot4} style={{marginTop:'100px', borderRadius: "15px", }} />
    <img src={surot6} style={{ marginTop:'-150px', borderRadius: "15px",}}/>
    <img src={surot5} style={{ marginTop:'100px', borderRadius: "15px", }} />
  </div>
  
      </div>

      <div className='containner'>
        <img src={surot1} width={1480} style={{transform:'rotate(180deg)'}}/>
      </div>
    
      <div className='contr'>
      <h1 className='h1' style={{textAlign:'center', }}>A team of exceptional people</h1>
      <div className='card'>
      <Blog  image={foto1} />
      <Blog text="Nurlan Saburov" col="Казахский комик, юморист" image={foto2} />  
      <Blog text="Dmitry Bivol" col="Российский боксёр-профессионал" image={foto4} />  
      <Blog text="Canelo Álvarez" col="Мексиканский профессиональный боксёр" image={foto5} />  
      <Blog text="Matrang" col="Артист, русский певец" image={foto3} />  
      <Blog text="Akzhol Makhmudov" col="Киргизский борец-любитель" image={foto6} />

      </div>
      </div>
        
    </div>
  );
}
