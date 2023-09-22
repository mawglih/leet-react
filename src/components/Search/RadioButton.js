import classes from '../Leets/LeetPage.module.css'

const RadioButton = ({
    labelText,
    enabled,
    onchange,
}) => {
    return (
        <div>
            <label>          
                <input 
                    type="radio"
                    className={classes['radio-button']}
                    checked={enabled}
                    onChange={(e) => onchange(e)}
                />
                <span>{labelText}</span>
            </label>
        </div>
    )
}

export default RadioButton;