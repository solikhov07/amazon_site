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
  const [boxLogin, setBoxLogin] = useState()
  const mouseOverBtnSignin = () => {
    setBoxLogin(true)
  }
  const deleteBox = () => {
    setBoxLogin(false)
  }

return(
    <div className="subscribe_box-signin">
<Link className='login-logo' to='/'>
    <img src="data:image/png;base64,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" alt="" />
</Link>
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
    <div className="main-text-box-signin"><h3>"Keep Me Signed In" Checkbox</h3> <GrClose onClick={deleteBox} className='close-btn-signin'/> </div>
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