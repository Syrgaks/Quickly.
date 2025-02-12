import React from 'react'
import voto from '../../assets/Divider.png'
export default function Pricing() {
  return (
    <div style={{fontFamily: "'Plus Jakarta Sans', sans-serif", }}>
        <div style={{width:'1480px', height:'279px', margin:'auto', background:'#FAFAFA'}}>
              <h6 style={{fontSize:'18px', fontWeight:'700', color:'#20484F', position:'relative', top:'108px', textAlign:'center'}}>Smart plans for growing businesses</h6>
              <h1 style={{fontSize:'64px', lineHeight:'64px', color:'#072125', fontWeight:'700',textAlign:'center', position:'relative', top:'149px', }} >Our Pricing Plans</h1>
            
             
             </div>
       
             <div style={{width:'1480px', height:'107px', margin:'auto', background:'#FAFAFA'}}>
                    <img src={voto} width={1480}/>
             </div>
             <div style={{width:'1480px', height:'421px', margin:'auto', background:'#FFFFFF'}}>
      <h5 style={{fontSize:'18px', fontWeight:'700', color:'#20484F', position:'relative', top:'68px', left:'587px'}}>Stop wasting time, start saving it</h5>
      <h1 style={{fontSize:'50px', lineHeight:'60px', fontWeight:'700', position:'relative', top:'119px', left:'316px'}} >Sign up for your free trial, with the <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; world’s best product tool</h1>
      <button className='button'style={{width:'190px', height:'58px', position:'relative', top:'93px', left:'635px'}}>Start your trial</button>
     </div>
    </div>
  )
}
