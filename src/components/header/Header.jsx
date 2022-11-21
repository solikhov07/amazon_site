import React from 'react'
import {  useLocation } from 'react-router-dom'
import c from './Header.module.css'
import { SlLocationPin } from 'react-icons/sl'
import { BsChevronLeft, BsSearch } from 'react-icons/bs'
import { FaFlagUsa, FaCartArrowDown, FaUserCircle } from 'react-icons/fa'
import { AiFillCaretDown } from 'react-icons/ai'
import { FiChevronRight, FiMenu } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import textSidebar from '../../data-sidebar.json' 
import { HiOutlineChevronDown } from 'react-icons/hi'
import options from '../../data-options.json'
import secondOption from '../../data-second-option.json'
import { TfiArrowTopRight } from 'react-icons/tfi'
const Header = () => {
const [selectOption, setSelectOption] = useState("all")
  const [sidebar, setSidebar] = useState(false)
  const [pickedText, setPickedText] = useState(null)
  const sideBarEl = useRef()
  const [optionText, setOptionText] = useState(0)
  const [secondOptionText, setSecondOptionText] = useState(0)
  useEffect(() => {
    if(pickedText){
      sideBarEl.current.scrollLeft = sideBarEl.current.offsetWidth
    }
    else{
      sideBarEl.current.scrollLeft = 0
    }
  }, [pickedText])
  console.log(pickedText);
  function clickSidebar(){
    setSidebar(true)
  }
  function closeClick(){
    setSidebar(false)
  }
  const { pathname } = useLocation()
  if(pathname.includes("/signin")){
    return
  }
  return (
    <>  
    <div className={c.header_part}>
      <header>
<div className={c.header_logo}>
  <img src="https://bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png" alt="" />
</div>
<div className={c.header_location_box}>
  <div className={c.header_location_icon}>
    <SlLocationPin/>
  </div>
  <div className={c.header_choosen_location}>
    <span>Deliver to</span> <br />
    <b className={c.header_country}>Uzbekistan</b>
  </div>
</div>
<from className={c.header_input_search_box}>
 <select style={  selectOption.length <= 10 ? {width: selectOption.length * 18 + "px" } : {width: selectOption.length * 10 + "px" } } onChange={(e) => {
  setSelectOption(e.target.value)
 }} name="" id="">
  <option value="All">All</option>
  <option value="Arts & Crafts">Arts & Crafts</option>
  <option value="Books">Books</option>
 </select>
  <input className='' type="text" /> <button type='submit'><BsSearch/></button>
</from>
<div className={c.header_choose_language}>
<i className={c.flag}><FaFlagUsa/></i> <i className={c.vector_down}><AiFillCaretDown/></i>
</div>
<div className={c.header_signin_box_enter}>
  <span>Hello signin in </span> <br />
<b>Account & Lists</b> <i className={c.vector_down}><AiFillCaretDown/></i>
</div>
<div className={c.header_orders}>
  <span>Returns</span>
  <br />
  <b>& Orders</b>
</div>
<div className={c.header_cart_box}>
<i className={c.header_cart}>  <FaCartArrowDown/></i><sub>0</sub> <span>cart</span>
</div>
    </header>
    <div className={c.header_above_box}>
<div onClick={clickSidebar}  className={c.header_menu_box}>
<i><FiMenu/></i><span>All</span>
</div>
<div className={c.header_details}>
  <span>Today's details</span>
</div>
<div className={c.header_customer_service}>
  <span>Customer Service</span>
</div>
<div className={c.registry_text_header} >
  <span>Registry</span>
</div>
<div className={c.card_header_text} >
  <span>Gift cards</span>
</div>
<div className={c.text_sell_header}>
  <span>Sell</span>
</div>
    </div>
    <div ref={sideBarEl} style={sidebar ? {left : 0} : {left: -100 + '%'}} className={c.sidebar}>
        <i onClick={closeClick}  className={c.close_btn}><MdOutlineClose/></i>

      <div className={c.navbar_option_text_box}>
        <div className={c.profile_account_box}><FaUserCircle/> Hello, sign in</div>
<div className={c.text_box}>
{textSidebar.map(text =>  
  <div className="">
  <h3 className={c.text_navbar}>{text.type}</h3>
  {text.text ? text.text.map(words =>
    <div onClick={() => {setPickedText(words)}} className={c.text_navbar}>
  <p >{words.option} <FiChevronRight/></p>
  </div> ) : 
text.textRegistr.map(textOptions =>
  <div onClick={() => {setPickedText(textOptions)}} className={c.text_navbar}>
    <p>{textOptions.option}</p>
    </div>
  )
  }
  <div className={c.text_navbar}>
    {text.more ? 
    <div>
<div className={c.see_more_options_box}>
{options.slice(0, optionText).map(optionalText =>
      <p>{optionalText.sidebarText}</p>  
)}
</div>
{optionText <= 0 ? 
    <p onClick={() => {setOptionText(options.length)}}>{text.more} <HiOutlineChevronDown/></p>
:
<p onClick={() => {setOptionText(0)}}>{text.less} <TfiArrowTopRight/></p>
  }
    </div>: null
  }
      {text.moreTwo ? 
    <div >
<div className={c.see_more_options_box}>
{secondOption.slice(0, secondOptionText).map(optionalText =>
      <p>{optionalText.sidebarText}</p>  
)}
</div>
{secondOptionText <= 0 ? 
    <p onClick={() => {setSecondOptionText(secondOption.length)}}>{text.moreTwo} <HiOutlineChevronDown/></p>
:
<p onClick={() => {setSecondOptionText(0)}}>{text.less} <TfiArrowTopRight/></p>
  }
    </div>: null
  }
  </div>
    </div>
  )}
</div>
</div>
<div className={c.box_sidebar}>
<h2 style={{cursor: "pointer"}} className={c.text_navbar} onClick={()=> {setPickedText(null)}}><BsChevronLeft/>Main Menu</h2>

  <div className={c.picked_option_box}>
          <h2 className={c.text_navbar}> {pickedText?.menuType} </h2>
{  pickedText?.info.map(item => 
    <div className={c.text_navbar}>
<p>{item}</p>
  </div>
  )}
  </div>

</div>
      </div>
    <div onClick={() => {
      setSidebar(false)
    }} style={sidebar ? {display: 'block'} : {display: 'none'}}  className={c.shadow_box}></div>
    </div>
    </>
  )
}

export default Header