import App from "../App";


function DashBoard({isLogedIn}){
    return(
        <div>
            {isLogedIn? <p>You are logged in</p>: <p>Please log in</p>}
        </div>
    );

}

export default DashBoard;