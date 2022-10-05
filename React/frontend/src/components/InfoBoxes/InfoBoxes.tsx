import "./InfoBoxes.css";

interface InfoBoxesProps {
    berner: boolean;
    setBerner: Function;
}

const InfoBoxes = ({berner, setBerner}:InfoBoxesProps) => {
return (
    <div className="textbox">
    <div>Likes to be {berner ? "inside" : "outside"}</div>
    <div>Lifespan {berner ? "8": "12"} years</div>
        <div>{berner ? "Bad" : "Good"} at hunting</div>
    </div>
)
}

export default InfoBoxes;