// import './Login.css';
import {useState} from "react";
import React from "react";
import {useNavigate} from 'react-router-dom';
function Login(props) {
    const [userName, setUserName] = useState("admin")
    const [passWord, setPass] = useState("linne")
    const navigate = useNavigate();
    const confirm = () => {
        let i = document.getElementById("getUser").value;
        let p = document.getElementById("getPassword").value;
        if (i === userName && p === passWord){
            navigate('/welcome' , { replace: true });
            alert("chào mừng " + userName + " đã trở lại" )
        }else{
            alert("Tài khoản hoặc mật khẩu của bạn chưa chính xác")
        }
    }
    console.log(navigate)
    return (
        <div>
            <div action="/home" >
                <div className="username">
                    <span>Username</span>
                    <input type="text" id="getUser"/>
                </div>
                <div className="password">
                    <span>Password</span>
                    <input type="password" id="getPassword"/>
                </div>
                <div>
                    <input type="button" value="Login" onClick={confirm}/>
                </div>
            </div>
        </div>
    );
}
export default Login;