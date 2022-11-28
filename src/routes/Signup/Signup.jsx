import './Signup.css'
import {Si1Password} from 'react-icons/si'
import { FaCaretRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Signup = () => {
return(
    <div className="subscribe_box-signup">
<Link className='login-logo' to='/'>
    <img src="data:image/png;base64,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" alt="" />
</Link>
<div className="signup-box">
<div className="signup-registr-box">
    <h1 className='introduction-signup'>Create account</h1>
    <form className='form-signup' action="">
        <div className="username-input-box-signup">
            <label htmlFor="username-input-signup">Your name</label>
            <input id='username-input-signup' placeholder='First and last name' className='username-input-signup' type="text" />
        </div>
        <div className="email-input-box-signup">
            <label htmlFor="email-input-signup">Email</label>
            <input required type="text" name="" id="email-input-signup" className='email-input-signup' />
        </div>
        <div className="password-input-box-signup">
            <label htmlFor="password-input-signup">Password</label>
            <input required id='password-input-signup' placeholder='At least 6 characters' className='password-input-signup' type="text" />
        <div className="warning-box-signup">
        <Si1Password/> <span>Passwords must be at least 6 characters.</span>
        </div>
        </div>
        <div className="password-input-repeat-box">
            <label htmlFor="password-input-repeat-signup">Re-enter password</label>
            <input required id='password-input-repeat-signup'  className='password-input-repeat-signup' type="text" />
        </div>
        <button className="btn-create-account-signup">Create your Amazon account </button>
    </form>
    <p className='signup-conditions-text'>By continuing, you agree to Amazon's <span className='condition-text-signup-link'> Conditions of Use </span> and <span className='condition-text-signup-link'> Privacy Notice </span>. </p>
<div className="moreinfo-box-signup">
    <p>Already have an account?</p> <Link to='/signin' className='signin-link-account'>Sign in <FaCaretRight/> </Link>
</div>
</div>
</div>
</div>
)
}
export default Signup