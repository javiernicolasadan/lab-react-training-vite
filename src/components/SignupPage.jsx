import { useState } from "react";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nationality, setNationality] = useState("");
    return ( 
    <>
        <p>SignupPage</p>
        <form>
            <label>Email<br/>
                <input type="email" onChange={event => {setEmail(event.target.value)}}/>
                
            </label><br/>
            <label>Password<br/>
                <input type="password"/>
            </label><br/>
            <label>Nationality<br/>
                <select onChange={event => {setNationality(event.target.value)}}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </select>
            </label><br/>
            <button style={{backgroundColor: "blue"}}>Sign up</button>
        </form>
        {nationality === "en" ? <h4>Hello</h4> : null}
        {nationality === "de" ? <h4>Hallo</h4> : null}
        {nationality === "fr" ? <h4>Bonjour</h4> : null}
        <h4>Your email is {email}</h4>
        <hr/>
    </> 
    );
}
 
export default SignupPage;