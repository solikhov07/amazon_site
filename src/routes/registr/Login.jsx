import './Login.css'
import { AiFillCaretDown} from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const boxStyleSignin =  {
width: "33%",
height: '0',
border: '0.5px solid gray'
  }
  const [boxLogin, setBoxLogin] = useState(false)
  const mouseOverBtnSignin = () => {
    setBoxLogin(!boxLogin)
  }
  const deleteBtnSignin = () => {
if(document.querySelector('.explaining-box-signin').style.display === 'block'){
  document.querySelector('.explaining-box-signin').style.display = 'none'
}
else{
  document.querySelector('.explaining-box-signin').style.display = 'block'

}
  }
return(
    <div className="subscribe_box-signin">
<Link className='back_home_page' to="/">Home</Link>
    <div className="login-box">
      <div className="login-box-registr">
<h1 className='introduction-signin'>Sign in</h1>
<form className='signin-form' action="">
  <div className="email-input-box">
  <label  htmlFor="email-input">Email or mobile phone number</label>
  <input required className='email-input' id='email-input' type="email" name=""  />
  </div>
  <div className="password-input-box">
    <div className="password-box">
  <label  htmlFor="password-input">Password</label> <Link to='/password-forgot' className='page-recreate-password'>Forgot your password?</Link>
  </div>
  <input required className='password-input' id='password-input' type="password" name=""  />
  </div>
  <button className='btn-signin'>Sign in</button>
</form>
<div style={boxLogin ? {display: "block"} : {display: "none"}   } className="explaining-box-signin">
    <div className="main-text-box-signin"><h3>"Keep Me Signed In" Checkbox</h3> <GrClose onClick={deleteBtnSignin} className='close-btn-signin'/> </div>
   <p>Choosing "Keep me signed in" reduces the number of times <br /> you're asked to Sign-In on this device.</p>
   <p>To keep your account secure, use this option only on your <br /> personal devices.</p>
    <div className="traingular-box-signin"></div>
  </div>
<p className='signin-conditions-text'>By continuing, you agree to Amazon's <span className='condition-text-signin-link'> Conditions of Use </span> and <span className='condition-text-signin-link'> Privacy Notice </span>. </p>
<div className="check-box-signin">
<input type="checkbox" /> <span>Keep me signed in.</span> <span onClick={mouseOverBtnSignin} className='more-info-signin'>Details <AiFillCaretDown className='icon-down-signin'/></span>
</div>
<div className="box-preference-signin">
  <div style={boxStyleSignin}></div><span>New to Amazon?</span><div style={boxStyleSignin}></div>
</div>
<div className="btn-create-box">
<Link to='/signup'  className='create-account-signin'>Create your Amazon account</Link>
      </div>
      </div>
    </div>
    </div>
)
} 
export default Login