import classes from '../Leets/LeetPage.module.css'

const SearchBar = ({
    labelText,
    inputValue,
    onchange,
}) => {
    return (
        <div>
            <label>          
                <input 
                    type="text"
                    className={classes['input-search']}
                    value={inputValue}
                    onChange={(e) => onchange(e.target.value)}
                />
                <span>{labelText}</span>
            </label>
        </div>
    )
}

export default SearchBar;