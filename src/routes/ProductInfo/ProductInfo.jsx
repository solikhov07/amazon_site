import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import c from './ProductInfo.module.css'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
const ProductInfo = () => {
    const { productId } = useParams()
    console.log(productId);
    const [individualProduct, setIndividualProduct] = useState(null)
console.log(individualProduct);
const [imageChoice, setImageChoice] = useState(0)
const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
const [tracker, setTracker] = useState(false)
const [selectOption, setSelectedOption] = useState()
console.log(selectOption)
useEffect(() => {
    fetch(`http://localhost:8000/v2/allproducts/${productId}`)
.then(response => response.json())
.then(data => setIndividualProduct(data))
}, [])
useEffect(() => {window.scrollTo({top: 0})}, [])
  return (
    <div >
  {
   individualProduct ?
   <div key={individualProduct._id} className={c.product_container}>
      <div  className={c.wrapper_imafe_container}>
    <div className={c.container_images_options}>
   {individualProduct.image.map((item, index) =>
    <div className={c.image_options} style={imageChoice === index ? {boxShadow: "0px 0px 10px orange"} : null} onMouseOver={() => {setImageChoice(index)}} ><img src={item.url} alt="" /></div>
   )}
    </div>
    <img 
    onMouseMove={(e) => {setMousePosition({x: e.clientX, y: e.clientY}) 
    setTracker(true)}}
     className={c.chosen_product}
    src={individualProduct?.image[imageChoice].url}
    onMouseLeave={() => {setTracker(false)}}
    alt="" />
    <div style={tracker ? {display: "block", top: `${mousePosition.y - 180}px`, left: `${mousePosition.x - 100}px`} : {display: "none"}} className={c.box_zoom}></div>
    </div>
     <div className={c.container_description_info}>
      <div style={tracker ? {display : "block",
    backgroundImage: `url(${individualProduct.image[imageChoice].url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: '250%',
    backgroundPosition: `${-mousePosition.x}px ${-mousePosition.y * 1.4  + 30}px`,
    } : {display: "none"}} className={c.shown_picture}>

      </div>
     <h1>{individualProduct?.name}</h1>
<div>
{
        individualProduct.ratings % 1 === 0 ?
        new Array(individualProduct.ratings).fill("*").map(mark =>
    <AiFillStar className={c.icon_star} />
            ) :
            <>
           { new Array(Math.floor(individualProduct.ratings)).fill("*").map(mark =>
    <AiFillStar className={c.icon_star} />
                )}
                <BsStarHalf className={c.icon_star} />
                </>
     }
</div>
     <b>{individualProduct.price}$</b>
     <p className={c.product_text_description}>{individualProduct.description}</p>
   <div className={c.extra_info}>
    <h2>Currently available</h2>
    <div className={c.price_box}>
      <div>
        <span>with discount:</span> <b>{individualProduct.price}$</b>
      </div>
      <div>
        <span>without :</span> <b>{individualProduct.price * 2}$</b>
      </div>
    </div>
    <div className={c.box_version_product}>
      <div>
   <span>Type :</span>   <strong>{individualProduct.productCategory}</strong>
   </div>
   <div>
   <span>Current Location :</span>   <strong>{individualProduct.address}</strong>
   </div>
<div>
  <span>Released date :</span> <strong>{individualProduct.time}</strong>
</div>
<div>
  <span>Seller :</span> <strong>{individualProduct.author}</strong>
</div>
<div>
  <span>Seller's phone number:</span> <strong>{individualProduct.authorPhoneNumber}</strong>
</div>
<hr />
<h2>About the Item</h2>
<ul>
  <li>The Item possesses a discount</li>
  <li>The Gadget is hight quality</li>
  <li>If you feel worried about the Item, we can return your money</li>
</ul>
    </div>
   </div>
   </div>
   <div className={c.select_box}>
   <div className={c.container_info_location}>
   <h3>Currently available</h3>
<div >
  <i><HiOutlineLocationMarker/></i>
<select name="" style={selectOption < 6 ? {width: (selectOption * 20 + "px")} : {width: (selectOption * 15 + "px")}} onChange={(e) => {setSelectedOption(e.target.value.length)}} className={c.select_location}>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Russia">Russia</option>
    <option value="USA">USA</option>
   </select>
</div>
<hr style={{width: "90%"}} />
<div style={{width: "90%", margin: "auto"}}>
<button style={{width: "100%"}}>Add to List</button>
</div>
   </div>
   </div>
   </div>

   : null
  }
    </div>
  )
}

export default ProductInfo