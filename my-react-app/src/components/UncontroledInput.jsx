import { useRef } from "react";

function UncontroledInput(){
    const inputRef = useRef();

    const handleSubmit = () => {
        alert("Entered Names:" + inputRef.current.value);
    };

    return(
        <>
       
        <input type="text" ref={inputRef} />
        <button onClick={handleSubmit}> Show Name </button>
        
        </>
    )
}

export default UncontroledInput;