
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import "../styles/signUpStyles.css"
import { useState } from 'react';
import{firebaseAuth} from "../utils/firebase-config"
import{createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [showPassword,setShowPassword]=useState(false);
    const [formValues,setFormValues]=useState({
        email:"",
        password:""
    });
    const navigate=useNavigate();

     const handleSignIn=async()=>
    {
        try{
            const{email,password}=formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email,password);

        }catch(e){
            console.log(e);
        }

    }
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser){
            navigate("/");
        }

    })
    return (
        <div id="signUpContainer" showPassword={showPassword}>
            <BackgroundImage />
            <div className="content">


                <Header login />
                <div className="body flex column a-center j-center">
                    <div className="text flex column">
                        <h1>Unlimited movies,TV shows and more</h1>
                        <h4>Watch anywhere.Cancel anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className="form" style={{gridTemplateColumns:showPassword?"1fr 1fr":"2fr 1fr"}}>
                        <input type="email" placeholeder="Email address" name="email" value={formValues.email} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})}/>
                        {
                            showPassword&&( <input type="password" placeholeder="Password" name="password" value={formValues.password} onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value})} />)
                           
                        }
                        {
                            !showPassword&&<button onClick={()=>setShowPassword(true)}>Get Started</button>
                            
                        }
                        
                    </div>
                    <button onClick={handleSignIn}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}