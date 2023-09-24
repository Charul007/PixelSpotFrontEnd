import '../body/body.css';
import licenceIcon from "../../img/licence_icon.png";
import facebookicon from "../../img/facebook_icon.png";
import instagramIcon from "../../img/instagram_icon.png";
import twitterIcon from "../../img/twitter_icon.png";
import { Link } from 'react-router-dom';
import '../footer/footer.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ScrollToTopButton from '../scroll/ScrollToTopButton';


function Footer() {

  const history = useHistory();
 
 return (
      <div className='maindiv'>
              <ScrollToTopButton />
        <div style={{backgroundColor:'white'}}>
              <div style={{display:'flex'}}>
                  <div style={{height:'20px',width:'50px'}}><img src={licenceIcon} alt="icon" style={{height:'100%'}} /></div>
                  <div style={{height:'50px'}}>Media you can Download</div>
              </div>
              <div style={{height:'100px'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam dicta aspernatur, dolore ratione  pellat aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, beatae! Rerum nobis quasi id corporis, voluptatum similique pariatur, possimus cupiditate, quibusdam nisi consectetur. Corporis, est non ab possimus quos dignissimos?
                Nam dicta aspernatur, dolore ratione  pellat aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, beatae! Rerum nobis quasi id corporis, voluptatum similique pariatur, possimus cupiditate, quibusdam nisi consectetur. Corporis, est non ab possimus quos dignissimos?
              </div>
              <div style={{height:'20px',color:'green',marginLeft:'30px', marginTop:'20px'}}>
                learn more about licence
              </div>
        </div>
       <hr></hr>
        <div style={{display:'flex', backgroundColor:'white', marginTop:'20' }}>
              <div style={{backgroundColor:'white',width:'55%'}}>
                    <div style={{width:'40%',height:'100px',fontSize: 50,fontFamily: 'monospace',display:'content',marginTop:'20px'}} 
                    onClick={()=>{history.push('/')}}
                    >PixelSpot</div>
                    <div style={{display:'flex',width: '20%',justifyContent:'space-around'}}>
                      <div> <a href='https://www.facebook.com/' ><img src={facebookicon} alt="icon" style={{height:20}}/></a> </div>
                      <div> <a href='https://www.instagram.com/' ><img src={instagramIcon} alt="icon" style={{height:20}} /></a> </div>
                      <div> <a href='https://twitter.com/' ><img src={twitterIcon} alt="icon"  style={{height:20}} /></a> </div>
                    </div>
              </div>
            
              <div style={{backgroundColor:'white',width:'15%'}} >
                  <div style={{ marginLeft: '40'}}>Discover</div>
                  <ul style={{listStyleType:'none'}}>
                      <li>Popular Search</li>
                      <li>Popular Image</li>
                      <li>Editor's Choice</li>
                  </ul>

              </div>
              <div style={{backgroundColor:'white',width:'15%'}} >
                  <div style={{ marginLeft: '40'}}>Community</div>
                  <ul style={{listStyleType:'none'}}>
                      <li>Blog</li>
                      <li>Camers</li>
                      <li>Creaters</li>
                  </ul>
              </div>
              <div style={{backgroundColor:'white',width:'15%'}} >
                  <div style={{ marginLeft: '40'}}>About</div>
                  <ul style={{listStyleType:'none'}}>
                      <li onClick={()=>{history.push('/adminAboutUs')}}>About Us</li>
                      <li>FAQ</li>
                      <li>Licence Summary</li>
                      <li>Terms of Services</li>
                      <li>Privacy Policy</li>
                      <li>Cookies Policy</li>
                      <li><Link to="/contactUs">ContactUs</Link></li>
                  </ul>
              </div>
          </div>
          <hr></hr>
          <div style={{textAlign:'center'}}>
            All Right Reserved @pixelspot
          </div>
      </div>

  );
}

export default Footer
