import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "../sass/login.scss";

export let user;
if (localStorage.getItem("user") === null) {
  user = false;
  localStorage.setItem("user", user);
} else if (localStorage.getItem("user") === "true") {
  user = true;
}

export default function Login() {
  const [error, setError] = useState("");
  const history = useNavigate();
  const email = useRef();
  const pass = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(pass.current.value);
    signInWithEmailAndPassword(auth, email.current.value, pass.current.value)
      .then((e) => (user = true))
      .then((e) => localStorage.setItem("user", user))
      .then((e) => history("/"))
      .catch((e) => setError("Invalid Email or Password"));
  }
  return (
    <form
      className="login p-5 d-flex justify-content-content align-items-center flex-column"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="mb-1 fs-5">Email</label>
      <input
        className="px-3"
        placeholder="Email"
        type="email"
        required
        defaultValue="a@a.com"
        ref={email}
      />
      <label className="mt-3 mb-1 fs-5">Password</label>
      <input
        className="px-3 mb-4"
        placeholder="Password"
        type="password"
        required
        defaultValue="123456"
        ref={pass}
      />
      <p className="text-danger fs-6 text-left">{error}</p>
      <input className="bg-primary text-light" type="submit" value="Login" />
    </form>
  );
}
