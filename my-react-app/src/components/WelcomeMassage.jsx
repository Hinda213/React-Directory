import App from "../App";



function WelcomeMassage({isLogedIn}){
    if(isLogedIn){
        return <h2> Welcome Back Hinda!</h2>;
    } else{
        return <h3>Please Log in</h3>;
    }

}

export default WelcomeMassage;

