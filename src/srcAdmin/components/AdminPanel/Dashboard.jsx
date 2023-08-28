import React from 'react'
import { useEffect,useState } from "react";
import axios from "../../../srcAdmin/axios.jsx";
import '../../style.css';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'


 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import { DeleteIcon } from '@chakra-ui/icons';

function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 398,
          amt: 2300,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     
      
    const [totalUsers, setTotalUsers] = useState("");
    const [activeUsers, setActiveUsers] = useState("");
    const [totalLikes, setTotalLikes] = useState("");
    const [totalSpams, setTotalSpams] = useState("");
    const [totalPhotos, setTotalPhotos] = useState("");
    const [totalCollections,setTotalCollections]= useState("");
    const [totalDownloads,setTotalDownloads]= useState("");
    const [allUsers,setAllUsers]= useState([]);
    const [allSpams,setAllSpams]= useState([]);
    const [spamsPhoto,setSpamsPhoto]= useState([] || null);


    const [isError,setIsError] = useState("");
    
    const getActiveUsers =async()=>{
      try {   
        const res = await axios.get("/Admin/activeUsers");
        setActiveUsers(res.data);
        
        console.log(res.data);
      } catch (error) {
        
        setIsError(error.message);
      }
    }

    const getTotalUsers =async()=>{
        try {
          
          const res = await axios.get("/Admin/getTotalUser");
          setTotalUsers(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }

      const getTotalPhotos =async()=>{
        try {
          const res = await axios.get("/Admin/getPhotoCount");
          setTotalPhotos(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }

      const getTotalLikes =async()=>{
        try {
          const res = await axios.get("/Admin/getLikeCount");
          setTotalLikes(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }

      const getTotalCollections =async()=>{
        try {
          const res = await axios.get("/Admin/getCollectionCount");
          setTotalCollections(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }

      const getTotalSpams =async()=>{
        try {
          const res = await axios.get("/Admin/getSpamCount");
          setTotalSpams(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }
      const getTotalDownloads =async()=>{
        try {
          const res = await axios.get("/Admin/getDownloadCount");
          setTotalDownloads(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }

      const getAllUsers =async()=>{
        try {
          const res = await axios.get("/Admin/getUsers");
          setAllUsers(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }

      const getAllSpams =async()=>{
        try {
          debugger;
          const res = await axios.get("/Admin/getSpam");
          setAllSpams(res.data);
          console.log(res.data);
        } catch (error) {
          setIsError(error.message);
        }
      }


      const getPhotoById =async(id)=>{
        try {
          debugger;
          const res = await axios.get("/Photo/GetPhotoPublicById/"+id);
          setSpamsPhoto(res.data[0])
          console.log("photp --- ",res.data[0].p_name);
        } catch (error) {
          setIsError(error.message);
        }
      }


      const deletePhoto =async(id)=>{
        try {
          debugger;
         const data = {
           p_id: id
         };
          const res = await axios.post("/Admin/delPhoto/" ,data);
         
          console.log("photdel --- ",res);
        } catch (error) {
          setIsError(error.message);
        }
      }

    useEffect(() => {
        getActiveUsers();
        getTotalUsers();
        getTotalCollections();
        getTotalLikes();
        getTotalPhotos();
        getTotalSpams();
        getTotalDownloads();
        getAllUsers();
        getAllSpams();
      }, []);

  return (
    <main className='main-container'>
      <script src="https://cdn.jsdelivr.net/npm/react-icons@4.10.1/fa/index.esm.min.js"></script>
       <div className='main-title'>
            <h3 className='dashboard-title'>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL USERS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalUsers}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL PHOTOS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalPhotos}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL DOWNLOADS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalDownloads}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL COLLECTIONS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalCollections}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL LIKES</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalLikes}</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ACTIVE USERS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : activeUsers}</h3>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL DOWNLOADS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalDownloads}</h3>
            </div> */}
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL SPAMREPORTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h3>{isError !== "" ? isError : totalSpams}</h3>
            </div>
        
        </div>

        <div className="main-messages">

                  {/* total user data  */}

                <div className="messages">
                <div className='card-inner'>
                            <h3>TOTAL USERS</h3>
                            <BsFillBellFill className='card_icon'/>
                        </div>
                  {/* <h3> {allUsers.map((user, index) => (
                      <li key={index}>{user.u_email}</li>
                    ))}</h3> */}
                  
                  <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="table-responsive">
                            <table class="table" style={{backgroundColor:"white"}}>
                                <thead class="thead-light">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {allUsers.map((user, index) => (
                      <tr key={index}>
                                        <td>{user.u_id}</td>
                                        <td>{user.u_first_name} { user.u_last_name}</td>
                                        <td></td></tr>
                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>       
                </div>

                {/* total user data end */}

                {/* total spam data */}
                <div className="messages">
                <div className='card-inner'>
                          <h3>TOTAL SPAMREPORTS</h3>
                          <BsFillBellFill className='card_icon'/>
                      </div>
                {/* <h3>{allSpams.map((user, index) => (
                    <li key={index}>{user.sp_id && user.sp_details}</li>
                  ))}</h3> */}
                  <div class="table-data" style={{display:'flex'}}>
                    <div class="order">

                      <table className='table' style={{width:'400px' ,backgroundColor:"white",margin:20}}>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Photo Id</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{allSpams.map((spam, index) => (
                                <tr key={index}>
                                <td>
                                   <p>{spam.sp_id}</p>
                                </td>
                                 <td>{spam.sp_details}</td>
                                 <td style={{cursor:'pointer'}} onClick={()=>{getPhotoById(spam.p_id)}}>{spam.p_id}</td>
                                 <td><DeleteIcon
                                 onClick={()=>{deletePhoto(spam.p_id)}}
                                 /></td>

                                </tr>
                                
                              ))}
                        </tbody>
                      </table>
                    </div>
                    <div style={{marginTop:40,height:20,width:100,background:"white"}}>
                      <img src={ spamsPhoto.length !== 0 ? spamsPhoto.p_name : "https://clipart-library.com/images/8TxrBGznc.jpg" } alt="img">
                      </img>
                    </div>

                  </div>
                 </div>
        </div>
        {/* total spam data end */}

        <div className="main-img-show">
                <div className="imge-show">hi</div>
        </div>
                          
                          {/* chart start */}
                    
                        <div className='charts'>
                            <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>

                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>

                        </div>

                        {/* chart end */}
                      <div className="main-footer">
                      <div className="footer"><h2>foter of the page</h2></div>
                      </div>
    </main>
  )
}

export default Home