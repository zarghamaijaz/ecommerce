import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            password:'',
            confirmPassword:'',
            email:''
        }
    }
    handleSubmit= async event=>{
        event.preventDefault();
        const {email, displayName, password, confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user} =await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                password:'',
                confirmPassword:'',
                email:''
            })
        }
        catch(error){
            console.error(error);
        }
    }
    handleChange=event=>{
        const {name,value}=event.target;
        console.log(name,value)
        this.setState({
            [name]:value
        });
    }
    render(){
        const {email, displayName, password, confirmPassword}=this.state;
        return(
        <div className="sign-up">
            <h2>I do no have an account</h2>
            <span>Sign up with your email password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                label="Display Name"
                onChange={this.handleChange}
                required
                />
                <FormInput
                type="email"
                name="email"
                value={email}
                label="Email"
                onChange={this.handleChange}
                required
                />
                <FormInput
                type="password"
                name="password"
                value={password}
                label="Password"
                onChange={this.handleChange}
                required
                />
                <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                label="Confirm Password"
                onChange={this.handleChange}
                required
                />
                
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
        )
    }
}
export default SignUp;