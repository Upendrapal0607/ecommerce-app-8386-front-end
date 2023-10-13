import { Link } from "@chakra-ui/react"
import "./Footer.css"
import facebook from "../../Images/facebook.jpg"
import twitter from '../../Images/twiter.jpg'
import intra from '../../Images/instragram.jpg'
import pint from '../../Images/pintrest.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
export function Footer() {
  return (
    <div className="main">
      <div className="main-section">
        <div className="about-us">
          <h1 style={{ color: "black", fontWeight: "500" }}>About Us</h1>
          <br />
          <p>Our mission at Anthropologie has always been to surprise and delight you with unexpected, distinctive finds for your closet and home. We source and craft all of our products with care, ensuring that any treasure you find at Anthropologie is unique, just like you. Explore our dresses shop to find styles and fits perfect for any occasion, from cocktail party dresses to wedding...</p>
          <Link>Read more</Link>
        </div>
        <div className="login-fotter">
          <div className="login-part">
            <div className="login-heading">
              <h1 style={{ color: "black", fontWeight: "500" }}>Sign Up for Email</h1>
              <br />
              <p>Receive early access to new arrivals, sales, exclusive content, events</p>
              <p>and much more!</p>
            </div>
            <div className="input-submit" >
              <div className="manage-btm" >

                <p>Email Adress</p>
                <input className="input-manage" style={{ border: "1px solid #bdbdbd", padding: "0.5rem", outlineColor: "#4CAF50" }} type="text" name="" id="" />

              </div>
              <button className="submite-btn">SUBMIT</button>
            </div>
          </div>
          <div className="information">
            <p>By signing up, you will receive Anthropologie offers, promotions and other commercial messages. You are also agreeing to Anthropologie’s Privacy Policy. You may unsubscribe at any time</p>
          </div>
        </div>


        <div className="header-about-part">
          <div className="information-box">

            <div className="link-part">
              <h1 style={{ color: "black", fontWeight: "500", fontSize: "18px", borderBottom: "1px solid #bdbdbd", padding: "0rem 1rem" }}>

                Help</h1>
              <br />
              <Link>Track Your Order
              </Link>
              <Link>Start A Return Or Exchange</Link>
              <Link>Returns & Exchanges
              </Link>
              <Link>Shipping
              </Link>
              <Link>Customer Service
              </Link>
              <Link>Current Promotions
              </Link>
              <Link>Product Recalls</Link>
            </div>
          </div>
          <div className="information-box">

            <div className="link-part">
              <h1 style={{ color: "black", fontWeight: "500", fontSize: "18px", borderBottom: "1px solid #bdbdbd", padding: "0rem 1rem" }}>About Us</h1>
              <br />
              <Link>Our Story
              </Link>
              <Link>Events</Link>
              <Link>A Greater Good
              </Link>
              <Link>Diversity & Inclusion
              </Link>
              <Link>Stories
              </Link>

            </div>
          </div>
          <div className="information-box">
            <div className="link-part">
              <h1 style={{ color: "black", fontWeight: "500", fontSize: "18px", borderBottom: "1px solid #bdbdbd", padding: "0rem 1rem" }}>Services</h1>
              <br />
              <Link>AnthroPerks
              </Link>
              <Link>Gift Cards</Link>
              <Link>AnthroLiving Designer
              </Link>
              <Link>Furniture: Guides & Services
              </Link>
              <Link>Store Pickup,Collection Points
              </Link>
              <Link>Klarna
              </Link>

            </div>
          </div>
          <div className="information-box">

            <div className="link-part">
              <h1 style={{ color: "black", fontWeight: "500", fontSize: "18px", borderBottom: "1px solid #bdbdbd", padding: "0rem 1rem" }}>Connect</h1>
              <br />
              <Link>Contact Us
              </Link>
              <Link>Stay Connected</Link>
              <Link>Careers
              </Link>
              <Link>Shipping
              </Link>
              <Link>Styling Services
              </Link>
              <Link>Request A Catalog
              </Link>

            </div>
          </div>
          {/* </div> */}
          <div className="information-box">
            <div className="google-email-mantain">
              <div className="google-map-symble">
                <FontAwesomeIcon icon={faLocationDot} />
                <Link>Store Location</Link>

              </div>
              <div className="google-map-symble">
                <FontAwesomeIcon icon={faEnvelope} />
                <Link>
                  Get Email
                </Link>

              </div>
            </div>

          </div>
        </div>




        <div className="social-media-tag">
          <div className="app-store">
            <img src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg" alt="" />
          </div>
          <div className="google-map-maintain-box">
            <div className="google-map-symble">

              <img src={pint} alt="" />

            </div>
            <div className="google-map-symble">
              <img src={intra} alt="" />

            </div>
            <div className="google-map-symble">
              <img src={facebook} alt="" />



            </div>
            <div className="google-map-symble">

              <img src={twitter} alt="" />

            </div>
          </div>
        </div>

        <div className="long-poster">

          <img src="https://images.ctfassets.net/5de70he6op10/4agdVEbGVV8sqDhHarm6Ka/c03d58416e2541028d9ffb2562c62615/467884482-jan2023_sitefootbanners_update_personalstylingbanner_ls.jpg" alt="" />
        </div>

        <div className="contry-name">
          <Link>UK</Link>
          <Link>Frence</Link>
          <Link>Germany</Link>
          <Link>Italy</Link>
          <Link>Spain</Link>
          <Link>UK</Link>
        </div>
        <div className="last-of-fotter">
          <div className="last-of-fotter-privency">
            <Link> Privacy Policy</Link>
            <Link>Terms of Use</Link>
            <Link>eCA Transparency</Link>
            <Link>Accessibility</Link>
            <Link>URBN.comFor CA and VA Residents</Link>

          </div>
          <div className="end">
            <p>2023 URBN.com. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}