import img1 from '../assets/images/Black and Orange Modern Car Sale Banner.png'
import img2 from "../assets/images/Orange and Brown Modern Car Wash Service Banner.png";
import Footer from "./Footer"
import React,{useState,useEffect} from "react";
import axios from 'axios'
const Home=()=>{
  const [Products,setProduct]=useState([])
  const [add,setAdd]=useState(false)
  const [currentProduct,setCurrentProduct]=useState(null)
  useEffect(()=>{
    axios.get('https://apiecommerce.pythonanywhere.com/api/product/')
    .then(response=>setProduct(response.data))
    .catch(error=>console.log(error))
  },[])

  const view_p=(products)=>{
    setAdd(true);
    setCurrentProduct(products);
  }
    return(
        <>
        <h2>Home</h2>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">

  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} alt="Los Angeles" className="d-block" style={{width:"100%"}} />
    </div>
    <div className="carousel-item">
      <img src={img2} alt="Chicago" className="d-block" style={{width:"100%"}}/>
    </div>
    <div className="carousel-item">
      <img src={img1} alt="New York" className="d-block" style={{width:"100%"}}/>
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>

<div className="container mt-3">
  <div className="row" id="a1">
{Products.map(pro=>(
  <div className="col-lg-3 col-md-3 col-sm-6" key={pro.id}>
<div className="card" onClick={()=>view_p(pro)}>
  <img className="card-img-top img-fluid" src={pro.image} alt="" />
<div className="card-body">
  <h4 className='card-little'>{pro.p_name}</h4>
  <h6 className='card-text'>${pro.price}</h6>
</div>
</div>
  </div>
))}
  </div>
</div>


        <Footer/>
        </>
    )
}
export default Home