import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "../images/Login.png";

const Login = () => {
  const [account, setAccount] = useState(true);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (account) {
      if (!pass == "" && !email == "") {
        const person = {
          id: Math.floor(Math.random() * 1000),
          email: email,
          pass: pass,
        };
        user.push(person);
        localStorage.setItem("data", JSON.stringify(user));
        setUser(user);
        alert("kayıt yapıldı");
      }
    }
    if (pass == "" || email == "") {
      alert("Email ve Password boş bırakılamaz!!!");
    } else if (!account) {
      const loginUser = user.filter((item) => item.email === email);
      if (loginUser.length == 0) {
        alert("kullanıcı bulunamadı");
      }
      if (loginUser.length > 0) {
        localStorage.setItem("email", email);
        navigate("/");
      }
    }
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("data")) || [];
    setUser(localData);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <img src={Bg} alt="" className="h-[100vh] w-[100%]" />
      <div className="bg-lime-400 w-[540px] h-[400px] absolute top-48 md:right-8 rounded-lg shadow-lg shadow-emerald-200 flex flex-col justify-center items-center gap-4 ">
        <div className="w-[80%]">
          <p
            className={
              account ? "text-lg font-bold" : "text-lg font-bold text-lime-600"
            }
          >
            E-mail
          </p>
          <input
            type="e-mail"
            placeholder="Enter Your E-mail Adress"
            className="w-96 rounded-md indent-2 h-8"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-[80%] ">
          <p
            className={
              account ? "text-lg font-bold" : "text-lg font-bold text-lime-600"
            }
          >
            Password
          </p>
          <input
            type="password"
            placeholder="Enter Your E-mail Adress"
            className="w-96 rounded-md indent-2 h-8"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <button
            className={
              account
                ? " bg-lime-600 py-1 px-3 ml-[50px] font-bold text-lg text-black active:scale-90 active:text-black rounded-lg"
                : " bg-lime-600 py-1 px-3 ml-[50px] font-bold text-lg text-lime-800 active:scale-90 active:text-black rounded-lg"
            }
            onClick={handleClick}
          >
            {account ? "Register" : "Login"}
          </button>
        </div>
        <p
          className="underline underline-offset-4 text-blue-400 font-bold text-xl"
          onClick={() => setAccount(!account)}
        >
          {account ? "I have an account" : "Don't have an account?"}
        </p>
      </div>
    </div>
  );
};

export default Login;
