import React from 'react'
import doto from '../../assets/Divider.png'
import doto1 from '../../assets/feotor.svg'
import doto2 from '../../assets/FeatBlocks.svg'
import doto3 from '../../assets/negr.svg'
import doto4 from '../../assets/Tabs.svg'

export default function Features() {
  return (
    <div style={{fontFamily: "'Plus Jakarta Sans', sans-serif", }}>
       <div style={{width:'1480px', height:'279px', margin:'auto', background:'#FAFAFA'}}>
       <h6 style={{fontSize:'18px', fontWeight:'700', color:'#20484F', position:'relative', top:'108px', textAlign:'center'}}>Are you really really ready for the boom box?</h6>
       <h1 style={{fontSize:'64px', lineHeight:'64px', color:'#072125', fontWeight:'700',textAlign:'center', position:'relative', top:'149px', }} >The future of features</h1>
     
      
      </div>

      <div style={{width:'1480px', height:'107px', margin:'auto', background:'#FAFAFA'}}>
             <img src={doto} width={1480}/>
      </div>

      <div style={{width:'1480px', height:'702px', margin:'auto', background:'#FFFFFF'}} >
       <img src={doto1}/>
      </div>

      <div style={{width:'1480px', height:'107px', margin:'auto', background:'#FAFAFA'}}>
        <img src={doto} width={1480} style={{transform:'rotate(180deg)'}}/>
      </div>

      <div style={{width:'1480px', height:'868px', margin:'auto'}}>
        <img src={doto4} width={1480} />
        <button className='btnp' style={{width:'201px',height:'60px',borderRadius:'8px',bottom:'10px',bo:'none',cursor:'pointer', background:'#20484F',color:'white', position:'relative', top:'-721px', left:'1257px'}}>Get Started</button>

      </div>

      <div style={{width:'1480px', height:'509px', margin:'auto', background:'#FAFAFA'}}>
       <img src={doto2} />
      </div>

      <div style={{width:'1480px', height:'554px', margin:'auto', background:'#ffffff'}} >
       <h2 style={{fontSize:'40px', lineHeight:'64px', color:'#072125', position:'relative', top:'80px', left:'120px'}}>Let’s start your journey <br />
       towards winning</h2>
       <p style={{fontSize:'18px', fontWeight:'400', color:'#20484F', position:'relative', top:'107px', left:'120px'}}>Time is scarce, so let’s get the show on the road <br /> and start your amazing free trial today</p>
       <button className='button'style={{width:'190px', height:'58px',background:'#B8E4DA', color:'#072125', position:'relative', top:'-293px', left:'135px'}}>Start your trial</button>
     <img src={doto3} style={{position:'relative', top:'-167px' ,left:'570px'}} />
      </div>

    </div>

  )
}
