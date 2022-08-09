import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPass } from '../../redux/action/SetPass';

const EnterCode = (props) => {
    const dispatch = useDispatch()
    const [checkCode, setCheckCode] = useState(false)
    const ref= useRef()
    const {codeForgot} = useSelector(state => state.ResetPass)
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(ref.current.value)
        if(Number(ref.current.value) === codeForgot) {
            setCheckCode(!checkCode)
        }
    }
    const navigate = useNavigate()
    const {information} = useSelector(state => state.ResetPass)
    const resetPass = (e) => { 
        e.preventDefault()
        console.log(information)
        console.log(ref.current)
        dispatch(setPass(information, 123, () => {
            navigate("/signin")
        }))
    }
    return (
        <div className='sign'>
            <div className="sign__cover">
                <h2>Reset Password</h2>
                { checkCode === false ?
                 <form>
                    <div className="input">
                    <input key={0} ref={ref} placeholder='Enter code'></input>
                    </div>
                    <div className="login">
                        <button onClick={handleSubmit}  className="btn-login">Submit</button>
                        </div>
                </form> : 
                 <form>
                    <div className="input">
                    <input key={1} placeholder='Password' type="password"></input>
                    </div>
                    <div className="login">
                        <button onClick={resetPass} className="btn-login">Reset Password</button>
                        </div>
                </form>}
                </div>
        </div>
    );
};

export default EnterCode;