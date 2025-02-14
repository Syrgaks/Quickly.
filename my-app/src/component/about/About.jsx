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
import foto7 from '../../assets/Image.svg'
import foto8 from '../../assets/Decoration.svg'
import foto9 from '../../assets/Frame14.svg'
import Blog from '../blog/Blog'; // Путь должен быть правильным
import { Link } from "react-router-dom";



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
          <p className='pi' style={{position:'relative', top:'20px'}} >
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

          <button className="signUp-btn" style={{ width: "136px", height: "58px" }}>
         <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>Sign Up</Link>
        </button>
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
      <div className='cardd'>
      <Blog text='Roberta Flack' col='Chief Innovator' image={foto1} />
      <Blog text="Robert Wilts" col="Head of HR" image={foto5} />  
      <Blog text="Charlie Roberts" col="Chief Innovation Officer" image={foto4} />  
      <Blog text="Christian Heart" col="UX Writing Lead" image={foto6} />  
      <Blog text="Tommy Wisby" col="Chief of Cutlery" image={foto2} />  
      <Blog text="Teddy Pdergrass" col="Legendary Song Writer" image={foto3} />
       <button className='signUp-btn' style={{ width:'243px', height:'58px', margin:'auto', marginTop:'40px'}}>See open vacancies</button>
      </div>
      </div>

      <div className='contor'>
      <h1 style={{textAlign:'center', fontSize:'111px', color:'#B8E4DA', marginTop:'40px'}}>“</h1>
      <h1 className='h1'style={{textAlign:'center'}}>Imagine the best product you’ve <br /> used, times it by ten, and you’ll <br /> have something similar</h1>
      
      <div
      style={{
        width: '216px',
        height:'55px',
        display: 'flex',
        alignItems: 'center',
        gap:'20px',
        margin:'auto',
        marginTop:'50px'
        
      }}
    >
      <img
        src={foto7}
       
      />
      <div>
        <h1 style={{ fontSize: '18px', margin: '0 0 5px 0' }}>Elliot Rosenberg</h1>
        <h2 style={{ fontSize: '16px', color: '#555', margin: 0 }}>Product Lead</h2>
      </div>
    </div> 

    <h1 className='h1' style={{textAlign:'center', borderRadius:'2px', marginTop:'30px'}} > <span style={{color:'#B8E4DA'}}>.</span> . . .</h1>
      
      </div>

      <div style={{width:'1480px', height:'405px', margin:'auto', background:'#20484F'}}>
       <h1 className='h1' style={{ color:'white', marginLeft:'100px', lineHeight:'60px', position:'relative', top:"102px"}}>Sign up for your free trial, with the <br /> world’s best product tool</h1>
      <button className='signUp-btn' style={{width:'190px', height:'58px',background:"White", color:'black', marginLeft:'1132px', position:'relative', top:'-40px'}}>Start your trial</button>
      <img src={foto8} style={{marginLeft:'1259px', position:'relative', top:'-267px'}}/>
      
      <div style={{ display: 'flex', gap: '20px', position:"relative", top:'-130px', left:'100px'}}>
  <div style={{ width: '157px', height: '27px', display: 'flex', alignItems: 'center' }}>
    <img src={foto9} alt="icon" />
    <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '15px' }}>No obligation</h6>
  </div>
  <div style={{ width: '186px', height: '27px', display: 'flex', alignItems: 'center' }}>
    <img src={foto9} alt="icon" />
    <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '15px' }}>Free onboarding </h6>
  </div>
  <div style={{ width: '177px', height: '27px', display: 'flex', alignItems: 'center' }}>
    <img src={foto9} alt="icon" />
    <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '15px' }}>14 day free trial</h6>
  </div>
  <div style={{ width: '165px', height: '27px', display: 'flex', alignItems: 'center' }}>
    <img src={foto9} alt="icon" />
    <h6 style={{ color: 'white', fontSize: '18px', marginLeft: '15px' }}>Full features</h6>
  </div>
</div>


      </div>

          
    </div>
  );
}
