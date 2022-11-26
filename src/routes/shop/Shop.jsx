import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillStar, AiOutlineLeft } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'
import c from './Shop.module.css'
import { Link } from 'react-router-dom'
import textShopProducts from '../../data-productInfo-appex.json'
import textShopProductsAbove from '../../data-extra-options-above.json'
import { SiPrime } from 'react-icons/si'
const Shop = () => {
    const [result, setResult] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/v2/allproducts")
            .then(data => data.json())
            .then(response => {
                if (response) {
                    setResult(response)
                }
            })
            .catch(err => console.log(err))
    }, [])
    console.log(result);
    return (
        <div className={c.product_container}>
            <div className={c.side_shop_text_box}>
                {
                    textShopProducts ?
                        textShopProducts.map(text =>
                            <div className={c.text_box}>
                                <h4>{text.title}</h4>
                                {text.textOptions ?
                                text.textOptions.map(textOption =>
                                    <Link className={c.side_text_appex}>{textOption.text}</Link>
                                    ) : null
                            }

                            </div>
                        ) : null
            }
            {
                textShopProductsAbove ?

 textShopProductsAbove.map(text =>
<div className={c.text_box}>
{text.title.map(text =>
                        <h4>{text.text}</h4>
                        )}
                        {text.textOptions.map(text =>
                            <Link className={c.side_text_appex}><AiOutlineLeft/>{text.option}</Link>
                    
                    )}
                    <form action="">
                <div>
                <h4>Eligible for Free Shipping</h4>
                    <input id='free' name="gender" type="checkbox" /> <label htmlFor="free">FREE Shipping</label>
                </div>
                <div>
                <h4>Amazon Prime</h4>
                    <input type="checkbox" name="gender" id="prime" /> <label className={c.icon_prime} htmlFor="prime"><SiPrime/></label>
                </div>
                </form>
</div>
                    )              
                     : null
            }
            </div>
            <div className={c.container_box_cards}>
                <h1>International Best Sellers</h1>
                <p>Top products shipped internationally including electronics, baby, books, and more</p>
                {
                    result ?
                    <div>
                      {  result.map(items =>
                            <Link to={`/shop/${items._id}`} className={c.product_card}>
                                <img src={items?.image[0].url} alt="" />
                                <div>
                                    <p className={c.basic_product_description}>{items.name}</p>
                                    {
                                        items.ratings % 1 === 0 ?

                                            new Array(Math.floor(items.ratings)).fill("*").map(mark =>
                                                <AiFillStar className={c.icon_star} />
                                            ) :
                                            <>
                                                {new Array(Math.floor(items.ratings)).fill("*").map(mark =>
                                                    <AiFillStar className={c.icon_star} />
                                                )} <BsStarHalf className={c.icon_star} />
                                            </>
                                    }
                                </div>
                                <div className={c.discount_box}>
                                    <button>
                                        {items.sale} % off
                                    </button>
                                    &nbsp;
                                    <span>Black Friday Deal</span>
                                </div>
                                <hr style={{width: "90%"}} />
                                <div className={c.price_ptoduct_box}>
                                <b><sup>
                                    <b>$</b>
                                </sup>{items.price}</b> <s>{items.price + 100}$</s>
                                </div>
                            </Link>
                        )}</div> : <p>Please try again</p>
                }
            </div>
        </div>
        
    )
}

export default Shop