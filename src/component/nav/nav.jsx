// import React from 'react';
// import '../nav/nav.css';



// function Nav()
// {

  

//      return (
//       <div style={{position: 'sticky' ,top: '100', zIndex:'5' }}>
    
//             <div className='div1'>
//                 <button className='btn'>wild</button>
//                 <button className='btn'>nature</button>
//                 <button className='btn'>space</button>
//                 <button className='btn'>wallpaper</button>
//                 <button className='btn'>wedding</button>
//                 <button className='btn'>animal</button>
//                 <button className='btn'>tech</button>
//                 <button className='btn'>body</button>
//                 <button className='btn'>city</button>
//                 <button className='btn'>night</button>
//             </div>
           
//            <div style={{backgroundColor:'white' , height:'20px',marginTop:'-10px'}} ><hr/></div>
         
//         </div>
//   );
// }

// export default Nav;


//======================================json===========================

import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import '../nav/nav.css';
import da from '../nav/data.json';
import url  from '../url.json';



function Nav()
{

  const [data, setData] = useState(da);
  const [image,setImage] = useState();

  const history =  useHistory();

  useEffect(() => {

    const fetchData = () => {
    
      // debugger;
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {

              if (xhr.readyState === 4 && xhr.status === 200) {

                const responseData = JSON.parse(xhr.responseText);
                setData(responseData);
                console.log(responseData);
                // setData(da);
              }
            };    
            xhr.open("GET", url.url + "/api/Photo/getAllCategory");
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
    
        xhr.open('GET',url.url + '/api/Photo/photoCategoryName?categoryName='+category);
        xhr.send();
        
    };

     return (
      <div style={{position: 'sticky' ,top: '80', zIndex:'5',overflowX:'auto'}}>
    
            <div className='div1'>
            {data.map((item) => (

                <button key={item.pc_id} className='btn' onClick={() => handleClick(item.pc_name)} >{item.pc_name}</button>

                ))} 
            </div>
           
           <div style={{backgroundColor:'white' , height:'20px',marginTop:'-20px'}} ><hr/></div>
         
        </div>
  );
}

export default Nav;

