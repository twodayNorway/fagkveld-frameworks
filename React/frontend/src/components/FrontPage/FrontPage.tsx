import {useState} from "react";
import bernerSennen from "../../pictures/berner.png"
import engelskSetter from "../../pictures/setter.png"
import "./FrontPage.css"
import TextBox from "../TextBox/TextBox";

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
            <TextBox berner={berner} setBerner={setBerner}>

            </TextBox>


        </>
    )

}
export default FrontPage