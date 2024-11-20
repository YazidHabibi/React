import Button from "../elements/button";
import Form from "../fragments/form";
import Header1 from "../fragments/header1";

function Login() {
    return (  
        <>
        <div className="border-2 w-1/2 rounded-lg shadow-lg mx-auto mt-10 pb-10">
        
        <Header1/>
        <hr />
        <Form label="Username" type="text" placeholder="Fill The Username" />
        <hr />
        <Form label="Password" type="password" placeholder="Fill The Password" />
        <hr />
        <Form label="Confirm Password" type="password" placeholder="Fill The Confirm Password" />
        <hr />
        <Button     />   

        </div>
        </>
    );
}

export default Login;