import React from 'react'
import  '../../component/products/products.css'
import foto from '../../assets/Untitled.svg'
import foto1 from '../../assets/hoto.jpg'
import foto2 from '../../assets/hoto4.png'
import foto3 from '../../assets/hoto2.svg'
import foto4 from '../../assets/hoto3.svg'
import foto5 from '../../assets/hoto5.svg'
import topo from '../../assets/topo.svg'
import topo1 from '../../assets/topo1.svg'
import topo2 from '../../assets/topo2.png'
import topo3 from '../../assets/topo11.svg'
import topo4 from '../../assets/topo10.svg'
import topo5 from '../../assets/topo9.svg'
import topo6 from '../../assets/topo8.svg'
import topo7 from '../../assets/Divider.png'
import topo8 from '../../assets/toko.svg'
import topo9 from '../../assets/1.svg'
import topo10 from '../../assets/2.svg'
import topo11 from '../../assets/3.svg'
import topo12 from '../../assets/4.svg'
import topo13 from '../../assets/5.svg'
import topo14 from '../../assets/FeaturesBlocks.svg'
import topo15 from '../../assets/Dec.svg'
import topo16 from '../../assets/“.svg'
import { Link } from 'react-router-dom'





export default function Products() {
  return (
   

    <div style={{fontFamily: "'Plus Jakarta Sans', sans-serif", }}>
      <div style={{width:'1480px', height:'810px', margin:'auto', background:'#FAFAFA' }}>
        <h5 style={{ fontSize:'18px', color:'#20484F', fontWeight:'700', position:'relative', top:'217px', left:'139px'}}>The new way to work online</h5>
        
        <h1 className='hh1' style={{position:'relative', top:'264px', left:'139px' }}>Get the important <br />
         work done  faster</h1>
         
        <h4 style={{color:'#072125', lineHeight:'36px', fontSize:'26px', fontWeight: '400', position:'relative', top:'300px', left:'139px'}}>With Quickly, you can get more productive <br />
        work done in far less time than ever before.</h4>
        <Link to='/signup'><button className='button' style={{position:'relative', top:'-210px', left:'139px', width:'136px', height:'58px',}}>Sign Up</button></Link>
        <a href="#learn"><button onclick="scrollToSection()" className='button' style={{position:'relative', top:'-210px', left:'149px', width:'168px', height:'58px', borderRadius:'8px', background:'#FFFFFF', color:'black'}}>Learn more</button></a>
        <img src={foto} style={{position:'relative', top:'-310px', left:'50px'}}/>
        
      
      <img src={foto2} style={{position:'relative', left:'130px', top:'-150px'}}/>
      <img src={foto1} style={{position:'relative', top:'-720px', left:'910px'}}/>
      <img src={foto3} style={{position:'relative', top:'-600px', left:'370px'}}/>
      <img src={foto4} style={{position:'relative', top:'-1040px', left:'90px'}}/>
      </div>
      
      <div style={{width:'1480px', height:'211px', margin:'0 auto', background:'#FAFAFA'}}>
        <img src={foto5} width={1490} height={211}/>

      </div>
     
     <div id='learn' style={{width:'1480px', height:'765px', margin:'auto', background:'#FAFAFA'}}>
      <h3 style={{fontWeight:'700', fontSize:'32px', color:'#072125', position:'relative', top:'119px', left:'120px'}}>The source of truth for all of your <br />
        product decisions</h3>

      <p style={{fontSize:'18px',fontWeight:'400', color:'#072125', position:'relative', top:'149px', left:'120px'}}>This goes further than what you expected, here you can <br /> communicate two really important product features with icons.</p>
     

     
      <img src={topo2} style={{position:'relative', left:'770px'}}/>
      <img src={topo1} style={{position:'relative', left:'220px', top:'-40px'}}/>
      <img src={topo} style={{position:'relative', left:'215px', top:'-360px'}}/>
      <img src={topo3} style={{position:'relative', right:'750px', top:'-220px'}}/>
      <img src={topo4} style={{position:'relative', left:'120px', top:'-190px'}}/>
      <img src={topo5} style={{position:'relative', left:'190px', top:'-190px'}} />
      <img src={topo6} style={{position:'relative', top:'-370px', right:'400px'}}/>
     
     

     </div>
       
      <div style={{width:'1480px', height:'107px', margin:'auto', background:'#FAFAFA'}}>
       <img src={topo7} width={1480}/>
      </div>

      <div style={{width:'1480px', height:'808px', margin:'auto'}}>
       <h3 style={{fontSize:'32px', color:'#072125', fontWeight:'700', textAlign:'center', position:'relative', top:'97px'}}>How Quickly helps you get more done</h3>
      <img src={topo8} style={{display:'block', margin:'0 auto', position:'relative', top:'301.47px'}} />
      <img src={topo11} style={{position:'relative',  left:'120px'}} />
      <img src={topo10} style={{position:'relative',  left:'198px'}}/>
      <img src={topo9} style={{position:'relative',  left:'264px'}}/>
      <img src={topo12} style={{position:'relative', right:'910px', top:'px'}} />
      <img src={topo13} style={{position:'relative', left:'979px', top:'-380px'}} />
      <img src={topo1} style={{position:'relative', top:'-450px',left:'215px', width:'430.51px'}}/>
      <h4 style={{fontSize:'24px', fontWeight:'700', color:'#072125', position:'relative', top:'-330px', left:'170px'}}>Quick Project Creation</h4>
      <p style={{fontSize:'18px',fontWeight:'400', color:'#072125',  position:'relative', top:'-310px', left:'160px'}}>Your new projects are simply a click away <br />
      with our intuitive creation flow</p>
      <h4 style={{fontSize:'24px', fontWeight:'700', color:'#072125',  position:'relative', top:'-395px', left:'600px'}}>Effortless Collaboration</h4>
      <p style={{fontSize:'18px',fontWeight:'400', color:'#072125', position:'relative', top:'-377px', left:'600px'}}>Need to assign a designer to your new <br />
      project, that’s easy with quickly</p>
      <h4 style={{fontSize:'24px', fontWeight:'700', color:'#072125', position:'relative', top:'-460px', left:'1050px'}}>Advanced Tracking</h4>
      <p style={{fontSize:'18px',fontWeight:'400', color:'#072125', position:'relative', top:'-445px', left:'1050px'}}>Track project progress with swim lanes, <br />
      road maps and other tools</p>
      </div>
    
    <div style={{width:'1480px', height:'509px', margin:'auto'}} >
     <img src={topo14} />
    </div>
    <div className='containner'>
            <img src={topo7} width={1480} style={{transform:'rotate(180deg)'}}/>
          </div>

     <div  style={{ width:'1480px', height:'753px', margin:'auto', background:'#FAFAFA',}}>
     <h3 style={{fontWeight:'700', fontSize:'32px', color:'#072125', position:'relative', left:'120px', top:'71px'}}>Our customers keep talking</h3>
     <p style={{fontSize:'18px',fontWeight:'400', color:'#072125', position:'relative', left:'120px', top:'87px'}}>Listen to what they say about our product offering right here</p>
     <button className='button' style={{width:'190px', height:'58px', position:'relative', left:'1130px', top:'-40px'}}>Find out more</button>
     <div style={{width:'387px', height:'450px', background:'#FFFFFF', borderRadius:'24px', position:'relative', left:'944px', top:'10px'}}>
      <img src={topo16} style={{position:'relative', left:'44px', top:'37px'}}/>
      <h3 style={{fontSize:'24px', fontWeight:'400', color:'#072125', lineHeight:'36px', position:'relative', left:'69px', top:'54px'}}>Thanks so much to the <br /> team at Quickly for <br /> building something truly <br /> fun to use, and <br /> excellently equipt</h3>
      <h5 style={{fontSize:'18px', fontWeight:'700', color:'#072125', position:'relative', top:'155px', left:'69px'}}>Tom Parsons</h5>  
      <p style={{fontSize:'16px',fontWeight:'400', color:'#072125', position:'relative', top:'165px', left:'69px'}} >VP of Product</p>
     </div>
     <div style={{width:'387px', height:'450px', background:'#FFFFFF', borderRadius:'24px', position:'relative', left:'537px', top:'-440px'}}>
     <img src={topo16} style={{position:'relative', left:'44px', top:'37px'}} />
      <h3 style={{fontSize:'24px', fontWeight:'400', color:'#072125', lineHeight:'36px', position:'relative', left:'69px', top:'54px'}}>This is the first time that <br />
      the entire team from <br /> design to management <br /> has been in love with a <br /> tool.</h3>
      <h5 style={{fontSize:'18px', fontWeight:'700', color:'#072125', position:'relative', top:'155px', left:'69px'}}>Claudia Winkleman</h5>  
      <p style={{fontSize:'16px',fontWeight:'400', color:'#072125', position:'relative', top:'165px', left:'69px'}} >Product Manager</p>
     </div>
     <div style={{width:'387px', height:'450px', background:'#FFFFFF', borderRadius:'24px', position:'relative', left:'130px', top:'-890px', }}>
     <img src={topo16} style={{position:'relative', left:'44px', top:'37px'}} />
      <h3 style={{fontSize:'24px', fontWeight:'400', color:'#072125', lineHeight:'36px', position:'relative', left:'69px', top:'54px'}}>I love the flexibility of the <br />
          product, we’ve been able <br />
          to integrate with all the <br />
          other platforms we <br />
          use in product.</h3>
          <h5 style={{fontSize:'18px', fontWeight:'700', color:'#072125', position:'relative', top:'155px', left:'69px'}}>Renata Salvatore</h5>  
      <p style={{fontSize:'16px',fontWeight:'400', color:'#072125', position:'relative', top:'165px', left:'69px'}} >Director of Design</p>
     </div>
     
     <img src={topo15} style={{position:'relative', left:'1290px', top:'-996px'}}/>  
     </div>

  

     <div style={{width:'1480px', height:'421px', margin:'auto', background:'#FFFFFF'}}>
      <h5 style={{fontSize:'18px', fontWeight:'700', color:'#20484F', position:'relative', top:'68px', left:'587px'}}>Stop wasting time, start saving it</h5>
      <h1 style={{fontSize:'50px', lineHeight:'60px', fontWeight:'700', position:'relative', top:'119px', left:'316px'}} >Sign up for your free trial, with the <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; world’s best product tool</h1>
      <button className='button'style={{width:'190px', height:'58px', position:'relative', top:'93px', left:'635px'}}>Start your trial</button>
     </div>
    </div>
    
  )
}