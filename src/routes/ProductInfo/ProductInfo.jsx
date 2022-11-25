import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import c from './ProductInfo.module.css'
import { AiFillStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
const ProductInfo = () => {
    const { productId } = useParams()
    console.log(productId);
    const [individualProduct, setIndividualProduct] = useState(null)
console.log(individualProduct);
const [imageChoice, setImageChoice] = useState(0)
useEffect(() => {
    fetch(`http://localhost:8000/v2/allproducts/${productId}`)
.then(response => response.json())
.then(data => setIndividualProduct(data))
}, [])

  return (
    <div >
  {
   individualProduct ?
   <div className={c.product_container}>
      <div  className={c.wrapper_imafe_container}>
    <div className={c.container_images_options}>
   {individualProduct.image.map((item, index) =>
    <div className={c.image_options} style={imageChoice === index ? {boxShadow: "0px 0px 10px orange"} : null} onMouseOver={() => {setImageChoice(index)}} ><img src={item.url} alt="" /></div>
   )}
    </div>
    <img className={c.chosen_product} src={individualProduct?.image[imageChoice].url} alt="" />
    </div>
     <div className={c.container_description_info}>
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
   </div>
   </div>

   : null
  }
    </div>
  )
}

export default ProductInfo