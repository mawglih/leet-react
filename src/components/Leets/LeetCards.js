// import {code as card} from './sample.code';
import { useEffect, useMemo, useState } from 'react';
import Card from './Card';
import classes from './LeetPage.module.css';

const LeetCards = ({
    cards,
    search,
    searchN,
    sort1,
    sort2
}) => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([cards]);
    const setSearch = () => {
        let filtered = [];
        // filtered =  data.filter(card => card[1]?.keywords?.split().foreach(el => el.includes(search)));
        data.forEach(card => {
            if(card[1].keywords.includes(search)) {
                filtered.push(card);
            }
            });
        setFiltered(filtered);
        setData(filtered);
    }
    const setSearchN = () => {
        let filtered = [];
        // filtered =  data.filter(card => card[1]?.keywords?.split().foreach(el => el.includes(search)));
        data.forEach(card => {
            if(card[1].lname.includes(searchN)) {
                filtered.push(card);
            }
            });
        setFiltered(filtered);
        setData(filtered);
    }
    const setSort1 = () => {
        let sorted = [...data];
        sorted.length > 1 && sorted.sort((a, b) => parseInt(b[1].lname) - parseInt(a[1].lname));
        setData(sorted);
    }
    const setSort2 = () => {
        let sorted = [...data];
        sorted.length > 1 && sorted.sort((a, b) => a[1].lname.localeCompare(b[1].lname));
        sorted.forEach(elem => console.log(elem[1].lname.split('.')[1]))
        setData(sorted);
    }
    useEffect(() => {
        setData(cards)
        if(search) {
            setSearch();
        }
        if(searchN) {
            setSearchN();
        }
        if(sort1) {
            setSort1();
        }
        if(sort2) {
            setSort2();
        }
    }, [cards, search, searchN, sort1, sort2]);
    useMemo(() => {
        console.log('filtered', filtered);
        console.log('cards', data);
        console.log('sort1', sort1);
        console.log('sort2', sort2);
    }, [filtered, data, sort1, sort2]);


    return (
        <div className={classes.cards}>
            {data && data.map(card => <Card key={card[0]} data={card}/>)}
        </div>
    )
}
export default LeetCards;