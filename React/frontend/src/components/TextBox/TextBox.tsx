import "./TextBox.css";
interface TextBoxProps {
    berner: boolean;
    setBerner: Function;
}
const TextBox = ({berner, setBerner}:TextBoxProps) => {
return (
    <div className="textbox">
    <div>Likes to be {berner ? "inside" : "outside"}</div>
    <div>Lifespan {berner ? "8": "12"} years</div>
        <div>{berner ? "Bad" : "Good"} at hunting</div>
    </div>
)
}

export default TextBox;