import Solution from "./Solution";
import {code as sample} from './sample.code';
import classes from './LeetPage.module.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Leet = () => {
    const params = useParams();
    const { id } = params;
    const [leet, setLeet] = useState({});
    const [leetId, setLeetId] = useState('')
    useEffect(() => {
        const newId = id.substring(1);
        setLeetId(newId);
        setLeet(sample[newId]);
    },[id]);
    return (
        <div className={classes.leetsingle}>
            {leet &&
            (<>
                <h2>{leet.lname}</h2>
                <h4>Problem</h4>
                <span>{leet.description}</span>
                <h4>How to Solve it</h4>
                <span>{leet.algo}</span>
                <h4>Solution</h4>
                <Solution
                    language='javascript'
                    theme='codepen'
                    showLineNumbers={true}
                    leetId={leetId}
                    solution={leet.solution}
                />
                <h4>Runtime</h4>
                <span>{leet.speed}</span>
                <h4>Memory used</h4>
                <span>{leet.memory}</span>
            </>
            )}
            
        </div>
    )
}

export default Leet;