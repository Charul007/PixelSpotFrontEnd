
import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import '../nav/nav.css';
import da from './data.json';


function Nav()
{

  const [data, setData] = useState(da);
  const [image,setImage] = useState();

  const history =  useHistory();

  useEffect(() => {

    const fetchData = () => {
    
      debugger;
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {

              if (xhr.readyState === 4 && xhr.status === 200) {

                const responseData = JSON.parse(xhr.responseText);
                setData(responseData);
                console.log(responseData);
                // setData(da);
              }
            };    
            xhr.open("GET", "http://localhost:5000/pixel-api/listcategories");
            xhr.send();
    };

    fetchData();

  }, []);

  

   const handleClick = (category) => {

      
        
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {

          if (xhr.readyState === 4 && xhr.status === 200) {

            const responseData = JSON.parse(xhr.responseText);
            setImage(responseData);
            console.log(responseData);

            localStorage.setItem("data", JSON.stringify(responseData));
            history.push("/")
            
          }
        };
    
        xhr.open('GET','http://localhost:5000/pixel-api/categories/?name='+category);
        xhr.send();
        
    };

     return (
      <div style={{position: 'sticky' ,top: '100', zIndex:'5'}}>
    
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner" style={{display:'flex'}}>
                    <div class="item active" style={{display:'contents'}}> </div> 
                            {data.map((data) => (

                                <div class="item" style={{display:'contents'}}>
                                  <button key={data.category} className='btn'  style={{width:250}}
                                  onClick={() => handleClick(data.category)} >{data.category}</button>
                                </div>
                                ))} 
                              
                    </div>
                          
                <div style={{backgroundColor:'white' , height:'20px',marginTop:'-10px'}} ><hr/></div>
                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right"></span>
                </a>
          </div>
     </div>
  );
}

export default Nav;

