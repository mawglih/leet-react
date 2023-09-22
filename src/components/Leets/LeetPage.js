import LeetCards from "./LeetCards";
import Sidebar from "./Sidebar";
import classes from './LeetPage.module.css';
import SearchBar from "../Search/SearchBar";
import { useEffect, useState } from "react";
import {code as card} from './sample.code';
import RadioButton from "../Search/RadioButton";

const LeetPage = () => {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    const [searchN, setSearchN] = useState('');
    const [enabled1, setEnabled1] = useState(null);
    const [enabled2, setEnabled2] = useState(null);

    // const searchKeywords = data => {
    //     let fileterdCards =[...cards];
    //     if(fileterdCards.length) {
    //         fileterdCards.filter(card => card.keyword.includes(data));
    //         console.log(fileterdCards);
    //     }
       
    // }
    const onSearchChange = val => {
        console.log(val);
        setSearch(val);
    }
    const onSearchChangeN = val => {
        console.log(val);
        setSearchN(val)
    }
    const onRadioClick1 = e => {
        console.log('clicked', e.target.checked);
        setEnabled1(true);
        setEnabled2(false);
    }
    
    const onRadioClick2 = e => {
        console.log('clicked', e.target.checked);
        setEnabled1(false);
        setEnabled2(true);
    }
    useEffect(() => {
        setCards(Object.entries(card))
    }, [])
    return (
        <div>
            <div className={classes['search-cont']}>
            <SearchBar 
                onchange={onSearchChange}
                inputValue={search}
                labelText={"search by keyword"}
            />
            <SearchBar 
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
            />
            </div>

            <div className={classes['leet-page-cont']}>
                <Sidebar/>
                <LeetCards
                    cards={cards} 
                    search={search} 
                    searchN={searchN} 
                    sort1={enabled1} 
                    sort2={enabled2} 
                />
            </div>
            
        </div> 
    )
}

export default LeetPage;