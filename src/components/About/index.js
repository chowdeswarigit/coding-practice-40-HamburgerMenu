// Write your code here
import './index.css'

import Header from '../Header'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="mobile-about-image"
        alt="About"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="desktop-about-image"
        alt="About"
      />
    </div>
  </div>
)

export default About
