import React from "react";
import "./style/MainCont.css";
import Card from "./Card";
//img
import img1 from "../../Images/inst.png";
import img2 from "../../Images/gmail.png";
import logoimg from "../../Images/Logo.png";
import mail from "../../Images/envelope.svg";
import telephone from "../../Images/telephone.svg";
import gear from "../../Images/gear.svg";
import user from "../../Images/user_img.png";
import wind from "../../Images/wind.svg";
import lock from "../../Images/lock.svg";
import house from "../../Images/house.svg";
import motherboard from "../../Images/motherboard.svg";
import sliders2 from "../../Images/sliders2.svg";
import building from "../../Images/building.svg";
import workerman from "../../Images/IMAGE.png";
import vec1 from "../../Images/Vector.png";
import vec2 from "../../Images/Vector1.png";
import vec3 from "../../Images/Vector2.png";
import vec4 from "../../Images/Vector3.png";
import pinterres from "../../Images/p.png";
import facebook from "../../Images/f.png";
import twitter from "../../Images/t.png";
import instagram from "../../Images/instagram.svg";
import mapPoint from "../../Images/mapPoint.png";

import Carousel from "./Carouselforwite";
import Client from "./Client";
import PriceCard from "./PriceCard";
function BlueMain() {
  return (
    <div className='Main-container'>
      <div className='infhead'>
        <h3>Opening Hours: 06:00 to 20:00</h3>
        <div className='infimg'>
          <img src={img1} alt='' />
          <img src={img2} alt='' />
          <img src={img1} alt='' />
        </div>
      </div>
      <div className='Logoheader'>
        <div className='Logo'>
          <img src={logoimg} />
          <h1>BlueCollar</h1>
        </div>
        <div className='header-contact'>
          <div className='header-item'>
            <img src={mail} />
            <h1>
              Email
              <br /> <p>BlueCollar@gmal.com</p>
            </h1>
          </div>
          <div className='header-item'>
            <img src={telephone} />
            <h1>
              Call us <br /> <p>+38(066)40-203-98</p>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className='header-menu'>
        <nav class='navbar navbar-expand-lg'>
          <div class='container-fluid'>
            <a class='navbar-brand' href='/bluecollar' id='home'>
              Home
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarText'
              aria-controls='navbarText'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarText'>
              <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>
                    About
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Features
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class='container-present'>
        <div className='introtext'>
          <img src={gear} />
          <h5>Improve our customers lives by providing effective solutions.</h5>
        </div>
        <h1>A recognized leader in services industry</h1>
        <button type='button' class='btn btn-warning'>
          <a href='#services' id='linkbtn'>
            View Services
          </a>
        </button>
      </div>
      <div className='About'>
        <img src={workerman} id='about-img' />
        <div className='about-text'>
          <div className='welcome'>
            <img src={logoimg} />
            <h3>Welcome BlueCollar</h3>
          </div>
          <h1>We Provide Your Future</h1>
          <p>
            Bluecollar Electrical services was established in 2008. We are
            trusted and reliable electricians who serve customers in the city as
            well as throughout United States Of America.
            <br />
            We have extensive experience of domestic and business electrical
            installations and no job is too small. Our customers value our
            professionalism, work ethic and our competitive prices.
          </p>
          <div className='about-plusses'>
            <div className='square'>
              <h1>35</h1>
              <h3>Years Of Experience</h3>
            </div>
            <ul>
              <li>- For all your system requirements</li>
              <li>- All work undertaken by qualified</li>
              <li>- Experienced office staff on hand</li>
              <li>- A Full Guarantee On Workmanship</li>
              <li>- Properties at a reasonable price.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container-Services'>
        <h1 id='services'> Our Services</h1>
        <p className='title-services'>
          We offers a comprehensive range of electrical services for domestic
          and commercial properties at a reasonable price.
        </p>
        <div className='container-cards'>
          <Card
            img={wind}
            title='Air condition service'
            description='Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.'
            link='View More'
          />
          <Card
            img={motherboard}
            title='Electrical installation'
            description='Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.'
            link='View More'
          />
          <Card
            img={building}
            title='General Builder'
            description='Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.'
            link='View More'
          />
          <Card
            img={lock}
            title='Security System'
            description='Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.'
            link='View More'
          />
          <Card
            img={sliders2}
            title='Service & maintenance'
            description='Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.'
            link='View More'
          />
          <Card
            img={house}
            title='House Extensions'
            description='Services are able to service your entire electrical infrastructure from Thermal Imaging of your air condition from switch boards.'
            link='View More'
          />
        </div>
      </div>
      <div className='Gallery'>
        <h1 className='Component_title'> Our Recent Projects</h1>
        <Carousel />
      </div>
      <div className='container_order'>
        <div className='customer'>
          <h1>Customer Says</h1>
          <div className='customer_card'>
            <div className='header_card'>
              <img src={user} />
              <h2>
                Nancy luther <br />
                NewYork
              </h2>
              <div className='user_data'>
                <h1>''</h1>
              </div>
            </div>
            <p>
              We have had several good experiences with <b>Blue Collar</b> team.
              Most recently, they replaced our 20-year-old HVAC system with a
              new, modern, and more efficient system & it worked fine.
            </p>
            <div className='card-button'>
              <div class='d-grid gap-2 d-md-block'>
                <button class='btn btn-primary' type='button'>
                  prew
                </button>
                <button class='btn btn-primary' type='button'>
                  next
                </button>
              </div>
            </div>
          </div>
          <div className='customer_question'>
            <h1>Questions?</h1>
            <h2>99.9% Customer Satisfaction Based</h2>
            <h3>
              If you have any questions or need help contact with our team, or
              call
            </h3>
            <div className='question-phone'>
              <img src={telephone} />
              <h2>(003) 123 456 7890</h2>
            </div>
          </div>
        </div>
        <div className='Appointment'>
          <h1>Appointment Form</h1>
          <form>
            <input type='text' placeholder='Your name' required></input>
            <input type='email' placeholder='Email' required></input>
            <input type='tel' placeholder='Phone' required></input>
            <input type='date' placeholder='Date' required></input>
            <select class='form-select' id='inputGroupSelect01'>
              <option selected>Choose services</option>
              <option value='1'>Air condition service</option>
              <option value='2'>Electrical installation</option>
              <option value='3'>General Builder</option>
              <option value='4'>Security System</option>
              <option value='5'>Service & maintenance</option>
              <option value='6'>House Extensions</option>
            </select>
            <textarea
              placeholder='Service Description'
              class='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
            ></textarea>
            <button class='btn' type='submit'>
              Submit form
            </button>
          </form>
        </div>
      </div>
      <h1 className='Component_title'>Our Trusted Big Clients!</h1>
      <div className='client_list'>
        <Client image={vec1} title='Bride' />
        <Client image={vec2} title='Building' />
        <Client image={vec3} title='Construction' />
        <Client image={vec4} title='Cpompany' />
      </div>
      <h1 className='Component_title'>Prices</h1>
      <div className='price_title'>
        <h1>Let’s Customize Work With Affordable Price</h1>
        <p>
          This is passionate about delivering growth and the new possibilities
          in the field of electrical services. We have extensive experience of
          domestic and business electrical installations and no job is too
          small.
        </p>
      </div>
      <div className='price_cards'>
        <PriceCard
          plan='Basic Plan'
          price='$ 599.0'
          period='Per Visit Charge'
          list1='Electrical Service'
          list2='Distribution Power Systemss'
          list3='High & Medium Voltages'
          list4='Industrial Control Systems'
          list5='Switch Installation'
          list6='Generator Installations'
          list7='Innovative Construction'
        />
        <PriceCard
          plan='Standart'
          price='$ 699.0'
          status='Popular'
          period='Per Visit Charge'
          list1='PLC Controls'
          list2='Distribution Power Systemss'
          list3='High & Medium Voltages'
          list4='Service And Panel Upgrades'
          list5='Switch Installation'
          list6='Generator Installations'
          list7='Innovative Construction'
        />
        <PriceCard
          plan='Professional'
          price='$ 850.0'
          period='Per Visit Charge'
          list1='Cable Tray Installations'
          list2='Distribution Power Systemss'
          list3='High & Medium Voltages'
          list4='Industrial Control Systems'
          list5='Switch Installation'
          list6='Service And Panel Upgrades'
          list7='Innovative Construction'
        />
        <div className='price_info'>
          <div className='price_sub'>
            <h3>Affordable Price</h3>
            <p>
              We adhere strictly to the current National Electrical Code, and we
              conduct regular in-house sessions with our technicians to review
              any code changes and applications.
            </p>
          </div>
          <div className='price_sub'>
            <h3>Fixed Plan</h3>
            <p>
              We understand fully that your time is of extreme value. You will
              never have to worry about waiting around for our trained
              technicians.24/7 Service Providers Affordable Price.
            </p>
          </div>
        </div>
      </div>
      <div className='subscribe'>
        <div className='sub_text'>
          <h1>Subscribe Our Newsletter</h1>
          <p>
            Stay in touch with us to get latest news. We are here to fit the
            needs of your electrical services for your dream building.
          </p>
        </div>
        <form className='subscribeForm'>
          <input type='email' placeholder='input Email' />
          <button type='button' class='btn btn-success'>
            Subscribe
          </button>
        </form>
      </div>
      <footer>
        <div className='footer_contact'>
          <div className='footer_logo'>
            <img src={logoimg} />
            <h1>BlueCollar</h1>
          </div>
          <div className='footer_mail'>
            <img src={mail} />
            <h2>
              Mail us
              <br />
              Info@bluecollar.com
            </h2>
          </div>
          <div className='footer_phone'>
            <img src={telephone} />
            <h2>
              Call us
              <br />
              (003) 123 456 7890
            </h2>
          </div>
          <div className='footer_nav'>
            <img src={mapPoint} />
            <h2>
              Location
              <br />
              Amsterdam, 109-74
            </h2>
          </div>
        </div>
        <hr className='footer-line' />
        <div className='subFoot'>
          <div className='foot1'>
            <p>
              We are here to fit the needs of your basic services for your dream
              building whether its a commercial, residential or industry.
            </p>
            <div className='social_foot'>
              <img src={instagram} />
              <img src={facebook} />
              <img src={twitter} />
              <img src={pinterres} />
            </div>
          </div>
          <div className='foot2'>
            <div className='foot2_tb1'>
              <h3>Explore</h3>
              <ul>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className='foot2_tb2'>
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Service Single</li>
                <li>Projects</li>
                <li>Projects Single</li>
              </ul>
            </div>
          </div>
          <div>
            <div className='foot3'>
              <h3>Utility Pages</h3>
              <ul>
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected Page</li>
                <li>404 Page</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlueMain;
