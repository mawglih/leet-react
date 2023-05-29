import Solution from "./Solution";
import {code as sample} from './sample.code';

const Leet = () => {
    const {lname, description,algo, memory, speed} = sample.LC1;
    return (
        <div className="leet-single">
            <h2>{lname}</h2>
            <h4>Problem</h4>
            <span>{description}</span>
            <h4>How to Solve it</h4>
            <span>{algo}</span>
            <h4>Solution</h4>
            <Solution
                language='javascript'
                theme='codepen'
                showLineNumbers
            />
            <h4>Runtime</h4>
            <span>{speed}</span>
            <h4>Memory used</h4>
            <span>{memory}</span>
        </div>
    )
}

export default Leet;