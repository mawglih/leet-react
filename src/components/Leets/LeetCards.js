import {code as card} from './sample.code';
import Card from './Card';
import classes from './LeetPage.module.css';

const LeetCards = () => {
    const cards = Object.entries(card);
    return (
        <div className={classes.cards}>
            {cards.map(card => <Card key={card[0]} data={card}/>)}
        </div>
    )
}
export default LeetCards;