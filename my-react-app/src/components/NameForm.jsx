import { useState } from "react";


function NameForm(){
    const[name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return(
        <>
        <h2> Hello, {name}</h2>
        <input type="text" value={name} onChange={handleChange} placeholder=" Enter your name" />
        </>
    )
}

export default NameForm;