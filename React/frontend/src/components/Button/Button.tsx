import "./Button.css";

interface InfoBoxesProps {
    showDog: boolean;
    setShowDog: Function;
}

const Button = ({showDog, setShowDog}:InfoBoxesProps) => {
return (
    <button className="dog-button"
            onClick={()=>setShowDog(!showDog)}>
        Trykk her for {showDog ? "katt" : "hund"}
    </button>
    )
}

export default Button;