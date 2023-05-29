import { CopyBlock, dracula } from "react-code-blocks";
import { useEffect, useState } from "react";
import classes from './LeetPage.module.css';

const Solution = ({
    showLineNumbers,
    startingLineNumber,
    solution,
}) => {
    const [code, setCode] = useState('');
    useEffect(() => {
        setCode(solution);
    }, [solution])
    return (
        <div className={classes.solution}>
            <div className={classes.solutionContent}>
            {code && <CopyBlock
                text={code}
                language='javascript'
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                wrapLines={true}
                theme={dracula}
            />}
            </div>
            
        </div>
    )
}

export default Solution;