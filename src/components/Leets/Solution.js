import { CopyBlock, dracula } from "react-code-blocks";
import { code as sample } from './sample.code';
import { useState } from "react";

const Solution = ({
    showLineNumbers,
    startingLineNumber,
}) => {
    const [code, setCode] = useState([sample.LC1.solution])
    return (
        <div>
            <CopyBlock
                text={code}
                language='javascript'
                showLineNumbers={showLineNumbers}
                startingLineNumber={startingLineNumber}
                wrapLines={true}
                theme={dracula}
            />
        </div>
    )
}

export default Solution;