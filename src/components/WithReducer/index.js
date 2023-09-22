import LeetCards from "../Leets/LeetCards";
import Sidebar from "../Leets/Sidebar";
import classes from '../Leets/LeetPage.module.css';
import SearchBar from "../Search/SearchBar";
import { useEffect, useState, useReducer } from "react";
import {code as card} from '../Leets/sample.code';
import RadioButton from "../Search/RadioButton";

const WithReducer = () => {
    // const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    // const [searchN, setSearchN] = useState('');
    // const [enabled1, setEnabled1] = useState(null);
    // const [enabled2, setEnabled2] = useState(null);

    
    const initialState = {
        isLoading: false,
        error: null,
        data: [],
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'getDataStart': {
                return {
                    ...state,
                    isLoading: true,
                }
            };
            case 'getInitialDataSuccess' : {
                return {
                    ...state,
                    isLoading: false,
                    data: Object.entries(card),
                }
            };
            case 'searchByKeword': {
                return {
                    ...state,
                    isLoading:false,
                    data: getSearch(action.payload, state.data),
                }
            }
            default: {
                return state;
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const getSearch = (search, data) => {
        let filtered = [];
        data.forEach(card => {
            if(card[1].keywords.includes(search)) {
                filtered.push(card);
            }
            });
        return filtered;
    }
    const onSearchChange = val => {
        console.log('val in red', val);
        setSearch(val);
        dispatch({
            type: 'searchByKeyword',
            payload: val,
        })
    }
    // const onSearchChangeN = val => {
    //     console.log('val in red N', val);
    //     setSearchN(val)
    // }
    // const onRadioClick1 = e => {
    //     console.log('clicked', e.target.checked);
    //     setEnabled1(true);
    //     setEnabled2(false);
    // }
    
    // const onRadioClick2 = e => {
    //     console.log('clicked', e.target.checked);
    //     setEnabled1(false);
    //     setEnabled2(true);
    // }
    useEffect(() => {
        dispatch({
            type: 'getInitialDataSuccess',
        })
    }, [])
    console.log('state', state);
    return (
        <div>
            <div className={classes['search-cont']}>
            <SearchBar 
                onchange={onSearchChange}
                inputValue={search}
                labelText={"search by keyword"}
            />
            {/* <SearchBar 
                onchange={onSearchChangeN}
                inputValue={searchN}
                labelText={"search by name"}
            />
            <RadioButton
                onchange={onRadioClick1}
                enabled={enabled1}
                labelText={"sort by number"}
            />
            <RadioButton
                onchange={onRadioClick2}
                enabled={enabled2}
                labelText={"sort by name"}
            /> */}
            </div>

            <div className={classes['leet-page-cont']}>
                <Sidebar/>
                <LeetCards
                    cards={state.data} 
                    search={search} 

                />
            </div>
            
        </div> 
    )
}

export default WithReducer;