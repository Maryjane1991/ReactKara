import React from "react";

const Footer = () => {
  return 
  <div>
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h2>Brainwave.io</h2>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
      </div>
      <div>
        <a href="https://twitter.com" className="text-blue-400 hover:underline"> Twitter</a>, 
          <a href="https://facebook.com" className="text-blue-400 hover:underline"> Facebook</a>, and 
          <a href="https://instagram.com" className="text-blue-400 hover:underline"> Instagram</a>.
      </div>
      <div>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>News</li>
            <li>Help desk</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Digital Marketing</li>
            <li>Content Writing</li>
            <li>SEO for Business</li>
            <li>UI Design</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-support">
        <p>Support</p>
      </div>
</div>
    </footer>
  </div>;
};

export default Footer;
