import React from 'react'
import voto from '../../assets/Divider.png'
import voto1 from '../../assets/Frame14.svg'
import voto2 from '../../assets/Pricing.svg'
import '../../component/pricing/pricing.css'






const pricingPlans = [
  { 
    name: "Free", 
    price: "£19.99", 
    description: "Get the main benefits of quickly for this unbelievable offer", 
    features: ["Basic features", "Limited projects", "No support"], 
    popular: false, 
    dark: false 
  },
  { 
    name: "Business", 
    price: "£39.99", 
    description: "Premium features for growing businesses and companies", 
    features: ["All features", "Unlimited projects", "Priority support", "No payment needed"], 
    popular: true, 
    dark: false 
  },
  { 
    name: "Expert", 
    price: "£59.99", 
    description: "The ultimate collection of features for expert users", 
    features: ["All features", "Unlimited projects", "Dedicated support", "Free onboarding"], 
    popular: false, 
    dark: false 
  },
  { 
    name: "Enterprise", 
    price: "£199.99", 
    description: "Custom solutions for the world's most demanding industries", 
    features: ["Custom features", "Enterprise-level security", "Dedicated  manager", "24/7 support", "Personalized setup"], 
    popular: false, 
    dark: true 
  },
];

const MAX_FEATURES = Math.max(...pricingPlans.map(plan => plan.features.length));

const PricingCard = ({ name, price, description, features, popular, dark }) => {
  const filledFeatures = [...features];

  while (filledFeatures.length < MAX_FEATURES) {
    filledFeatures.push(""); 
  }

  return (
    <div className={`card ${dark ? "dark" : ""}`}>
      {popular && <span className="popular">Popular</span>}
      <h3 className="bb">{name}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
      <ul>
        {filledFeatures.map((feature, index) => (
          <li key={index} className={feature ? "" : "empty"}>
            {feature && <img src={voto1} alt="check" className="icon" />}
            {feature}
          </li>
        ))}
      </ul>
      <button className={`btn ${dark ? "btn-light" : "btn-dark"}`}>Get Started</button>
    </div>
  );
}




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

            <div className='containner' style={{background:'white'}}>
     <h2 style={{fontWeight:'700', fontSize:'40px', color:'#072125', position:'relative', left:'120px', top:'71px'}}>Pricing plans for every team</h2>
     <p style={{fontSize:'18px',fontWeight:'400', color:'#072125', position:'relative', left:'120px', top:'87px'}}>Democracy. It’s what we see, it’s how we live and what we breathe. Here is <br /> a cup of tea, please won’t you drink it with me.</p>
    
            </div>

            <div className="pricing-container">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={index} {...plan} />
      ))}
            </div> 
   
     <div className='containner'>
                 <img src={voto} width={1480} style={{transform:'rotate(180deg)'}}/>
      </div>

      <div style={{width:'1480px', height:'1341px', margin:'auto', position:'relative'}}>
             <img src={voto2} width={1480}/>
             <button className='btnp' style={{width:'171px',height:'42px',borderRadius:'8px',bottom:'10px',bo:'none',cursor:'pointer', background:'#ffffff', color:'black', position:'relative', top:'-125px', left:'835px'}}>Get Started</button>
             <button className='btnp' style={{width:'171px',height:'42px',borderRadius:'8px',bottom:'10px',bo:'none',cursor:'pointer', background:'#20484F', color:'white', position:'relative', top:'-125px', left:'875px'}}>Get Started</button>
             <button className='btnp' style={{width:'171px',height:'42px',borderRadius:'8px',bottom:'10px',bo:'none',cursor:'pointer', background:'#20484F', color:'white', position:'relative', top:'-125px', left:'915px'}}>Get Started</button>
            </div >

      <div style={{width:'1480px', height:'421px', margin:'auto', background:'#ffffff'}}>
              <h5 style={{fontSize:'18px', fontWeight:'700', color:'#20484F', position:'relative', top:'68px', left:'587px'}}>Stop wasting time, start saving it</h5>
              <h1 style={{fontSize:'50px', lineHeight:'60px', fontWeight:'700', position:'relative', top:'119px', left:'316px'}} >Sign up for your free trial, with the <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; world’s best product tool</h1>
              <button className='button'style={{width:'190px', height:'58px', position:'relative', top:'93px', left:'635px'}}>Start your trial</button>
             </div>

           
 </div>
     
  )
}
