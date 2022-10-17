import {useState} from "react";
import hund from "../../assets/dog.png"
import katt from "../../assets/katt.png"
import "./Dog.css"
import Button from "../Button/Button";

const Dog = () => {

    const [showDog, setShowDog] = useState<boolean>(false)

    return (
        <div className="dog-container">
            <img
            className='dog-image'
            alt="dog"
            src={showDog ? hund : katt}
            />
            <Button showDog={showDog} setShowDog={setShowDog}/>
        </div>
    )

}
export default Dog;
