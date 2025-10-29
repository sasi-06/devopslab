import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [form, setForm] = useState({name:"",email:"",password:""})
  const [editId,setEditId]=useState(null)

  useEffect(() => {
    const saved=JSON.parse(localStorage.getItem(user));
    setUser(user);
  },[]);
  useEffect(() => {
    const newuser=(localStorage.setItem("user"))
    setUser(...user,newuser)
  },[user]);
  const handlesubmit = (e) =>{
    e.preventdefault();
    if(!name || !email || !password) return
    if(editId){
      setUser(user.map(u) = ( u.id === id ?{...form,id:name}:u))
      setEditId(null);
    }
    else{
      const newuser=setUser({id:name,newuser})
      setForm(...user,newuser)
    }
  };
  const handlesubmitpass = (pass) =>{
    // setUser(user.map(u) = ({u.pass ===password})?password:u)
  }
  retrun(
    <form onClick={handlesubmit()}>
      <input type='text'  value={form.name}placeholder='Enter the name' onChange={(e) => setForm(name,e.target.value)}></input>
      <input type='email' value={form.email}placeholder='Enter the email' onChange={(e)=>setForm(email,e.target.value)}></input>
    </form>
  )
}
  
export default App;
