/* eslint-disable react/prop-types */
import Input from "../elements/input";
import Label from "../elements/label";

function Form ({label,...asda}) {
    return ( 
        <div className="ml-6 py-5 pl-15">
            <Label Label= {label} />
            <Input {...asda}/>

        </div>
     );
}

export default Form ;