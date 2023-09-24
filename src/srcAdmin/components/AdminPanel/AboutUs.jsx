import React from 'react'
import './AboutUs.css';
import imge from '../../../img/profile_icon.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';


function Home() {     
  
  const history = useHistory();

debugger;
  // if(localStorage.getItem("login")!=null)
  // {
  //     const userCheck = JSON.parse(localStorage.getItem("login"));

  //       if(userCheck == null)
  //       {
  //         history.push('/');
  //       }
  //     if(userCheck.u_role != "ADMIN")
  //     {
  //      history.push('/');
  //     }
  //   }
  //   else{
  //     history.push('/login');
  //   }




  return (
    <main className='main-container'>
       <div className='main-title'>
            <h3 className='dashboard-title'>ABOUT US</h3>
        </div>

        <div className='main-cards'>
            <div className='about-cards'>
                <h3>Company</h3>
                <p>Welcome to Pixelspot, a premier online platform for high-quality images, illustrations, and graphics. We are dedicated to providing a vast collection of visually stunning and royalty-free images to meet the creative needs of individuals, businesses, and organizations worldwide. At Pixelspot, we believe in the power of imagery to inspire, engage, and enhance visual storytelling.</p>
                <h4>Image Collection:</h4>
                <p>
 Our extensive image collection boasts millions of hand-picked, professionally curated images across various categories, including nature, travel, business, technology, and more. From breathtaking landscapes to vibrant lifestyle shots, our diverse collection caters to a wide range of creative projects and design needs.
</p>
<h4>Image Licensing:
</h4>
<p> At Pixelspot, we offer royalty-free licensing for all our images, allowing our users to access and use our images for personal and commercial purposes without the need for additional permissions or paying ongoing royalties. We provide a simplified and transparent licensing model that ensures ease of use and legal compliance.
</p>
<h4>Image Upload and Contributions:</h4>
<p>
 Pixelspot welcomes talented photographers, illustrators, and artists to contribute to our collection. If you have exceptional visual content to share, you can submit your images for review and consideration. Join our community of creators and showcase your work to a global audience.
</p>
<h4>Advanced Search and Filtering:
</h4>
<p>
 Our user-friendly interface provides powerful search and filtering options, enabling users to find the perfect image quickly. You can search by keywords, categories, colors, orientations, and other parameters to refine your results and discover the ideal image for your project.
</p>
<h4>
Image Licensing Options:</h4>
<p> Pixelspot offers flexible licensing options to suit different usage requirements. Whether you need images for personal blogs, social media posts, advertising campaigns, or print materials, we have licensing plans to fit your needs and budget. Choose from individual image licenses or subscription-based plans for unlimited access to our vast image library.</p>

            </div>
            <div className='about-cards'>
                    <h3>Contact</h3>
                   <p>We value your feedback and inquiries. Reach out to our dedicated customer support team for any questions, assistance, or licensing inquiries. You can contact us through the following channels:. Reach out to us using the following contact details:
                  <p>Address: Sunbeam Karad</p>
                   <p> Phone:    +91 0000000000</p>
                   <p> Email:      pixelspot@test.com</p>
                   <p> Follow us on social media: Instagram, Twitter, Facebook</p>
                    </p>
            </div>

            <div className='about-cards'>
             <div className='about-owners'>
               <div className="per-owner">
               <img src={imge} alt="my img" />
                <div>
                  <h3>Rajat Lokhande</h3>
                  <p> Rajat Lokhande is a passionate entrepreneur and visionary founder of Pixelspot, a leading online platform for high-quality images. With a background in digital marketing and a deep appreciation for the power of visuals, Sarah played a pivotal role in shaping ImageHub into a thriving community and resource for creative professionals and businesses worldwide.</p>
                  </div>
               </div>
               <div className="per-owner"> <img src={imge} alt="my img" />
                <div>
                <h3>Kapil Patidar</h3>
                  <p>  Kapil Patidar is a passionate entrepreneur and visionary co-founder of Pixelspot, a leading online platform for high-quality images. With a background in digital marketing and a deep appreciation for the power of visuals, Sarah played a pivotal role in shaping ImageHub into a thriving community and resource for creative professionals and businesses worldwide.</p>
                </div></div>
               <div className="per-owner">
               <img src={imge} alt="my img" />
                <div>
                <h3>Vaibhav Saini</h3>
                  <p>  Vaibhav Saini is a passionate entrepreneur and visionary co-founder of Pixelspot, a leading online platform for high-quality images. With a background in digital marketing and a deep appreciation for the power of visuals, Sarah played a pivotal role in shaping ImageHub into a thriving community and resource for creative professionals and businesses worldwide.</p>
                </div>
               </div>
               <div className="per-owner">
                <img src={imge} alt="my img" />
                <div>
                <h3>Charul Patidar</h3>
                  <p>  Charul Patidar is a passionate entrepreneur and visionary co-founder of Pixelspot, a leading online platform for high-quality images. With a background in digital marketing and a deep appreciation for the power of visuals, Sarah played a pivotal role in shaping ImageHub into a thriving community and resource for creative professionals and businesses worldwide.</p>
                </div>
                </div>
                
             </div>
            </div>

            <hr></hr>
            <div className='about-cards'>
                <h3>Join our Community</h3>
                <p>If you're passionate about photography or illustration, join our community of creatives on Pxelspot. Share your work, connect with like-minded individuals, and gain exposure for your talent. Visit our website to explore community features and benefits.</p>
                <p>Thank you for choosing Pixelspot as your go-to destination for stunning, royalty-free images. We look forward to serving your creative needs and inspiring your visual projects.</p>
                <p className='termss'>Terms And Conditions</p>  
            </div>
            
        
        </div>                    
                      {/* <div className="main-footer">
                      <div className="footer"><h2>foter of the page</h2></div>
                      </div> */}
    </main>
  )
}

export default Home