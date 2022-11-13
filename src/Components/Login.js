import React,{useState} from 'react'
// import {Alert} from 'react-bootstrap'

export default function Login() {


  const[inputText,setInputText]=useState({ 
        
    email:"",
    password:""
});

  const submitHandler = (e) => {
    e.preventDefault();
    if(inputText.email===""){
      alert("please enter  your email");
      
    }
    else if(inputText.password===""){
      alert("please enter your password");
      
    }
    
     else{
      alert("Congrats: you are logged in..");
      
      
  }
    
    
  }
  const inputEvent=(event)=>{
        
    const name=event.target.name; 
    const value=event.target.value;
        setInputText((lastValue)=>{ 
            return{
                ...lastValue,
                [name]:value
            }
        }); 
    
  } 
  return (
    <div style={{
      position: "absolute",
      display: "block",
      // top:'0',
        bottom: '1',
        
      
        width:'50%'
      
      }}>
      
      <div className="container mt-5 mb-5" id="loginForm">
        <div className="d-flex flex row g-0">
            <div className="col-md-6 mt-3">
                <div className="card card1 p-3">
                <form>
                    <div className="input-field d-flex flex-column mt-3">
                    
                        <span>Email</span> 
                        <input type="email" className="form-control" placeholder="email@example.com" autoComplete='off' value={inputText.email} onChange={inputEvent} name="email"/>
                        <span className="mt-3">Password</span> 
                        <input type="password" className="form-control"  placeholder="Enter Your Password" autoComplete='off' value={inputText.password} onChange={inputEvent} name="password" /> 
                        <button type="submit" className="mt-4 btn btn-dark d-flex justify-content-center align-items-center"
                        style={{color:'black'}} onClick={submitHandler}>Let's Connect</button>
                        <div className="mt-3 text1"> 
                        <span className="mt-3 forget"><a href="#x" style={{color:'blue'}}>Forget Password?</a></span> </div>
                        <div className="text2 mt-4 d-flex flex-row align-items-center"> <span>Don't have an account?<span className="register"><u>
                        <a href="#x" style={{color:'blue'}}>Register here.</a></u>
                        </span></span> </div>
                    
                    </div>
                    </form>
                </div>
            </div>
            
        </div>
        </div>
        
        
    </div>
  )
}
