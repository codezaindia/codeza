import React, { Component } from "react";
import "./Footer.css";
const iconColor = "#0057fe"

const companyFooterList = [{name:'Home', link:'/'}, {name:'About Us', link:'/aboutUs'},{name:'Leadership Team', link:null},  {name:'Contact Us', link:'/Contact'} ]
const serviceFooterList = [{name:'Services', link:'/productsAndServices'}, {name:'Latest Blog', link:null} ]
const socialMediaIcons = [{name:'facebook', link:'https://www.facebook.com/'}, {name:'instagram', link:'https://www.instagram.com/'}, {name:"linkedin", link:'https://www.linkedin.com/company/codeza-solutions-private-limited/about/'}, {name:"twitter", link :"https://x.com/"} ]

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="Footer">
          <section className="FooterLogoPart">
          <div className="FooterLogoContainer" style={{paddingTop:"40px"}}>
            <div style={{ fontSize: '35px', fontWeight: 'bold', display: 'inline-flex'}}>
            <box-icon type='solid' name='user' color={'white'} size='lg'></box-icon> Codeza
            </div>
            <div style={{padding: '35px', paddingTop: '10px'}}>Welcome to Codeza, tomorrow's services and knowledge provider in field of Data warehousing field. Codeza is your trusted partner in developing and testing the next generation data warehouse projects. We are a start-up based in India, founded in 2021.
            </div></div><br/>
          </section>
          <section style={{width:'75%'}}>
          <div className="FooterSecondPart">
            <section className="conatctUs">
              <div>
                <p className="headingFooter">Get In Touch</p>
              </div>
              <div className="contactUsList">
                <box-icon name='current-location' color={iconColor}></box-icon>
                <div>
                  <h1 className="contactKey">BLOSSOM APARTMENT, FLAT NO 6, SR NO 23/1B/39, Baner, Pune, MH, IN. 411045</h1>
                </div>
              </div>
              
              <div className="contactUsList">
                <box-icon
                  name="envelope"
                  flip="horizontal"
                  color={iconColor}
                ></box-icon>
                <div>
                  <h1 className="contactKey">info@codeza.in</h1>
                </div>
              </div>
              <div className="contactUsList">
                <box-icon
                  name="phone-call"
                  color={iconColor}
                ></box-icon>
                <div>
                  <h1 className="contactKey">+91-996061161</h1>
                </div>
              </div>
              <div className="contactUsList">
                {socialMediaIcons.map((ele, index)=>{
                  return <div className="FooterLogoContainer" style={{width: '40px',height: '40px' , background:"#00a0e3", marginLeft: index!==0 && '5px'}} onClick={()=>{ele.link && window.open(ele.link)}}>
                
                <div style={{ fontSize: '35px', height: '100%', display: 'inline-flex'}}>
                  {/* <box-icon name='facebook' type='logo' ></box-icon> */}
                  <box-icon type='solid' name={ele.name} type='logo' color={'white'} style={{alignSelf: 'center'}}></box-icon>
                  </div>
                </div>
                })}
              </div>
            </section>
            <section className="conatctUs">
              <div>
                <p className="headingFooter">Company</p>
              </div>
              {companyFooterList.map(ele=>{
                return <div className="contactUsList">
                <box-icon
                  name="right-arrow-alt"
                  color={iconColor}
                ></box-icon>
                <div>
                  <h1 className="contactKey" style={{cursor: ele.link && 'pointer'}} onClick={()=> {ele.link && window.open(`${ele.link}`)}}>{ele.name}</h1>
                </div>
              </div>
              })}
            </section>
            <section className="conatctUs">
              <div>
                <p className="headingFooter">Services</p>
              </div>
              {serviceFooterList.map(ele=> {
                return <a href={ele.link} className="contactUsList">
                <box-icon
                  name="right-arrow-alt"
                  color={iconColor}
                ></box-icon>
                <div>
                  <h1 className="contactKey" style={{cursor: ele.link && 'pointer'}} // onClick={()=> {ele.link && window.open(`${ele.link}`)}}
                  >{ele.name}</h1>
                </div>
              </a>
              })}
            </section>
          </div>
          <div className="FooterSecondPartCenter">
          <section className="designedBySection">
              <div className="designedBy">
                {/* © 2024 
                &nbsp; */}
                <h1 className="designedByH1">@ 
                  &nbsp;
                  <div className="besignedByName">Codeza Solutions Private Limited.</div>
                </h1>
                &nbsp;
                 All right reserved. 
                 {/* | Design By  */}
                 {/* &nbsp;
                <h1 className="designedByH1">Codeza Solutions Private Limited</h1> */}
              </div>
            </section>
            </div>
            </section>
        </div>
      </div>
    );
  }
}

export default Footer;
