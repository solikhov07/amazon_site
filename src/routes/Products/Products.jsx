import React from 'react'
import { Link } from 'react-router-dom'
import goods from '../../data-producsGoods.json'
import c from './Products.module.css'
const Products = () => {
  return (
    <div className={c.box_body}>
      <div className={c.box_main_image}>
        <h1>Essential For Games</h1>
      </div>
    <h1>Featured Categories</h1>
    <div className={c.container_goods}>
{
  goods.map(items =>
<Link to='/shop' className={c.box_product}>
<img src={items.image} alt="" />
<p>{items.title}</p>
</Link>
)
}
    </div>
    </div>
  )
}

export default Products