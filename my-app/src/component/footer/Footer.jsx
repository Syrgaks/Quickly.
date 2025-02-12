import React from 'react'
import '../footer/footer.css'

export default function Footer() {
  return (
    <div>
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <h2>Quickly.</h2>
      <p>32 - 44 Upper Rupert Street</p>
      <p>W12 BDY Kensington</p>
      <p>United Kingdom</p>
    </div>

    <div class="footer-links">
      <div class="footer-column">
        <h3>Our Company</h3>
        <a href="#">Our Team</a>
        <a href="#">Company Vision</a>
        <a href="#">Our History</a>
        <a href="#">Investors</a>
      </div>

      <div class="footer-column">
        <h3>Our Resources</h3>
        <a href="#">The Blog</a>
        <a href="#">Downloads</a>
        <a href="#">Change Log</a>
        <a href="#">Slack Channel</a>
      </div>

      <div class="footer-column">
        <h3>Our Product</h3>
        <a href="#">New Features</a>
        <a href="#">Roadmap</a>
        <a href="#">Product Demo</a>
        <a href="#">Pricing</a>
      </div>
      
    </div>
    
  </div>
  
<div class="footer-bottom">
    <p>Copyright 2022 Quickly LTD</p>
  </div>

  
</footer>

    </div>
  )
}

