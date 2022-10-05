import {useState} from "react";
import bernerSennen from "../../../pictures/berner.png"
import "./FrontPage.css"

const FrontPage = () => {

    const [berner, setBerner] = useState<boolean>(false)

    const handleClick = () => {
        setBerner(!berner);
    }
    return (
        <>
        <img
            className='dog-image'
            src={bernerSennen}/>

        <button style = {{marginTop:"2rem"}}
                className="dog-button"
                onClick={handleClick}>
            {berner ? "Berner sennen" : "coca"}
        </button>
        </>
    )

}
export default FrontPage