import { useLocation } from "react-router";

const UseLocation = () => {
    
    const location = useLocation();
     
    return (<>
        <h2>{location.pathname}</h2>
        <p>useLocation is for finding the current location of URL</p>
    </>);
}
 
export default UseLocation;