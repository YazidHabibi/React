import Header2 from "../fragments/header2";
import Form from "../fragments/form";
import Button from "../elements/button";

function Registration() {
    return ( 
        <>
        <div className="border-2 w-1/2 h-1/2 mx-auto mt-10 rounded-lg">
        <Header2/>
        <hr />
        <Form label='First Name' type='text' placeholder='Fill First Name'/>
        <hr />
        <Form label='Second Name' type='text' placeholder='Fill Second name '/>
        <hr />
        <Form label='Email' type='email' placeholder='Fill Email'/>
        <hr />
        <Form label='Password' type='password' placeholder='Fill Password'/>

        <Button/>

        </div>
        </>

     );
}

export default Registration;