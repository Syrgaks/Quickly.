import React from 'react' 
import { Link } from 'react-router-dom'
import './Header.css'
 
function Header() { 
  return ( 
    <div style={{display:'flex', 
                 justifyContent:'space-around', 
                 alignItems:'center', 
                 background:'#20484F', 
                 color:'white', 
                 width:'1480px', 
                 height:'75px' ,
                 fontFamily: '',
                 margin:'auto'

    }}>  
      <h1 style={{
      position: "relative", right: "50px" 
      }}> Quickly. </h1> 
      <nav style={{ display:'flex', gap:'50px', marginLeft:'20px'}}> 
        <Link to="aboutPage" style={{ textDecoration: 'none', fontSize:'16px', color:'#FFFFFF', lineHeight:'24px' }} >About us   </Link> 
        <Link to="productsPage" style={{ textDecoration: 'none', fontSize:'16px',color:'#FFFFFF', lineHeight:'24px' }} >Products </Link> 
        <Link to="featuresPage" style={{ textDecoration: 'none', fontSize:'16', color:'#FFFFFF' , lineHeight:'24px' }} >Features</Link> 
        <Link to="ourPage" style={{ textDecoration: 'none', fontSize:'16', color:'#FFFFFF' , lineHeight:'24px' }} >Our Blog</Link> 
        <Link to="pricingPage" style={{ textDecoration: 'none', fontSize:'16', color:'#FFFFFF' , lineHeight:'24px' }} >Pricing </Link> 
      </nav> 
       
       <div>
        <a href="../signUp/SignUp.jsx"> <button
  
          style={{
            backgroundColor: "#AEE7E8",
            color: "#2C4E50",
            border: "none",
            borderRadius: "12px",
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#89D5D7";
            e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#AEE7E8";
            e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            e.target.style.transform = "scale(1)";
          }}>
      Sign up
</button>

   </a>
      
     <a href="../login/LogIn.jsx"><span
  className="spanbtn"
  style={{
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginLeft: "20px",
    position: "relative",
    display: "inline-block",
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  }}
  onMouseEnter={(e) => {
    e.target.style.color = "#AEE7E8";
    e.target.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.target.style.color = "#FFFFFF";
    e.target.style.transform = "scale(1)";
  }}
>
  Log In
  <span
    style={{
      position: "absolute",
      left: "0",
      bottom: "-3px",
      width: "100%",
      height: "2px",
      backgroundColor: "#AEE7E8",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease-in-out",
    }}
    className="underline"
  ></span>
</span></a>
       

        </div>
    </div> 
  ) 
} 
 
export default Header

