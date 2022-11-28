import React from 'react'
import c from './Main.module.css'
import { useState, useEffect, useRef } from 'react';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import cards from '../../data-card.json'
import { Link } from 'react-router-dom';
import imgProducts from '../../data-carousel-products.json'
import boxesPhoto from '../../data-cards-photo.json'
import { BiArrowToTop } from 'react-icons/bi'
const Main = () => {
const [result, setResult] = useState(0)
const [scrollPage, setScrollPage] = useState(0)
const carouselEl = useRef()
const carouselProduct = useRef()
function prev(){
if(result > 0){
    setResult(result - 1)
}
else{
    setResult(images.length - 1)
}
    }
    function next(){
        if(result < images.length - 1){
            setResult(result + 1)
        }
        else{
            setResult(0)
        }
    }

    useEffect(() => {
        carouselEl.current.scrollLeft = result * carouselEl.current.offsetWidth
    }, [result])
    const images = [
         "https://m.media-amazon.com/images/I/71CFB7VgeuL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg"
      ];
      function nextPage(){
        if(scrollPage < 3){
            setScrollPage(scrollPage + 1)
        }
        else{
            setScrollPage(0)
        }
      }
      function prevPage(){
        if(scrollPage > 0){
            setScrollPage(scrollPage - 1)
        }
        else{
            setScrollPage(imgProducts.length - 1)
        }
      }
      useEffect(()=>{
        carouselProduct.current.scrollLeft = scrollPage * carouselProduct.current.offsetWidth
      }, [scrollPage])
      useEffect(()=> {
        window.scrollTo({top: 0})
      }, [])
      function click(){
        window.scrollTo({top: 0})
      }
  return (
    <>
<div className={c.carousel_box}>
    <div className={c.wrapper_btn_box}>
<button className={c.btn_left} onClick={prev}><TfiAngleLeft className={c.btn_icon}/></button> <button className={c.btn_right} onClick={next}><TfiAngleRight className={c.btn_icon} /></button>
    </div>
    <div className={c.carousel_circle_box}>
{
    new Array(6).fill("*").map((circles, index) => 
    <div key={index} onClick={() => {setResult(index)}} style={result === index ? {background: "white"} : null} className={c.carousel_circles}></div>
    )
}
</div>
    <div ref={carouselEl} className={c.carousel_photo_box}>
{
    images.map((carousel_photo, index) => 
    <img className={c.carousel_photo} key={index} src={carousel_photo} alt=''/>
    )
}
    </div>
</div>
<main>
<div className={`${c.box_products} ${c.main_picture_box}`}>
        {
cards.map((images) =>
<Link to='/shop' className={c.product_box}>
    {images.btn ?
<button className={c.btn_product}>{images.btn}</button>
: null }
<h3 className={c.text_title}>{images.title}</h3>
{images.cardImages ?
<div className={c.four_images_box}>
{images.cardImages.map(items =>
    <div>
        <b>{items.name}</b>
<img src={items.img} alt="" />
    </div>
    )}
</div>
:
<div className={c.picture_product}>
<img src={images.img} alt="" />
</div>
}
<Link to='/products' className={c.text_link}>{images['text-link']}</Link>
</Link>
    )
        }
    </div>
    <div  className={c.carousel_products}>
        <div ref={carouselProduct} className={c.carousel_box_photo}>
{
    imgProducts.map(photo_item => 
    <img className={c.product_img} src={photo_item}  alt=''/>
    )
}
</div>
<div  className={c.btn_wrapper_carousel}>
    <button onClick={nextPage} className={c.btn_prev}><FaChevronLeft/></button>
    <button onClick={prevPage} className={c.btn_next}><FaChevronRight/></button>
</div>
    </div>
    <div className={c.box_products}>
        {
boxesPhoto.map((images) =>
<Link to='/shop' className={c.product_box}>
<h3 className={c.text_title}>{images.title}</h3>
{images.cardImages ?
<div className={c.four_images_box}>
{images.cardImages.map(items =>
    <div>
        <b>{items.name}</b>
<img src={items.img} alt="" />
    </div>
    )}
</div>
:
<div className={c.picture_product}>
<img src={images.img} alt="" />
</div>
}
<Link to='/products' className={c.text_link}>{images['text-link']}</Link>
</Link>
    )
        }
    </div>
    <span className={c.back_to_top} onClick={click}><BiArrowToTop/></span>
</main>
<div className={c.sign_box}>
    <p>See personalized recommendations</p>
<Link className={`${c.link_sign} ${c.link_signin}`} to='/signin'>Sign in</Link>
<div >
    <span>New customer?</span> <Link className={`${c.link_sign} ${c.link_signup}`} to='/signup'>Start here</Link>
</div>
</div>
    </>
  )
}

export default Main