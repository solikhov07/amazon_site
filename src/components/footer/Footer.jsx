import React from 'react'
import textFooter from '../../data-footer.json'
import c from './Footer.module.css'
import { useLocation } from 'react-router-dom'
import leftSide from '../../data-above-footer.json'
import rightSide from '../../data-footer-rightside.json'
const Footer = () => {
    function clickTop(){
        window.scrollTo({top: 0})
    }
 const { pathname } = useLocation()
    if(pathname.includes("/signin") || pathname.includes("/signup") ){
        return
    }
    return (
   <footer>
    <div onClick={clickTop} className={c.back_to_top_box}>
        <span>Back to Top</span>
    </div>
    <div className={c.footer_text_box}>
{textFooter.map(text =>
<div className="">
    <h3>{text.title}</h3>
    {text.textGroup.map(option =>
        <p>{option.text}</p>
        )}
    </div>
    )}
    </div>
    <div className={c.footer_above_box}>
<div className={c.box_leftside}>
{
    leftSide.map(text => 
    <div>
        <b>{text.type}</b>
        <p>{text.text}</p>
    </div>
    )
}
</div>
<div className={c.box_rightside}>
    {
        rightSide.map(text => 
            <div>
                <b>{text.type}</b>
<p>{text.text}</p>
            </div>
            )
    }
</div>
    </div>
   </footer>
  )
}

export default Footer