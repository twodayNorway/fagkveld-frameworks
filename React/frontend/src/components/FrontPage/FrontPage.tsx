import {useState} from "react";
import bernerSennen from "../../pictures/berner.png"
import engelskSetter from "../../pictures/setter.png"
import "./FrontPage.css"
import InfoBoxes from "../InfoBoxes/InfoBoxes";

const FrontPage = () => {

    const [berner, setBerner] = useState<boolean>(false)

    const handleClick = () => {
        setBerner(!berner);
    }
    return (
        <>
            <h2>{berner ? "Berner Sennen" : "Coca"}</h2>
        <img
            className='dog-image'
            src={berner ? bernerSennen : engelskSetter}/>

        <button style = {{marginTop:"2rem"}}
                className="dog-button"
                onClick={handleClick}>
            Switch
        </button>
            <InfoBoxes berner={berner} setBerner={setBerner}>

            </InfoBoxes>


        </>
    )

}
export default FrontPage