import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const EnterCode = (props) => {
    const [checkCode, setCheckCode] = useState(false)
    const ref= useRef()
    const {codeForgot} = useSelector(state => state.UserReducer)
    const handleSubmit = (event) => {
        event.preventDefault()
        if(Number(ref.current.value) === codeForgot) {
            setCheckCode(!checkCode)
        }
    }
    const resetPass = () => {
        
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