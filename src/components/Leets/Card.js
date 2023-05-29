import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from './LeetPage.module.css';

const Card = ({
    data,
}) => {
    const [card, setCard] = useState();
    useEffect(() => {
        setCard(data)
    }, [data])
    return (
        <div className={classes.card}>
            {card && (
                <>
                    <span className={classes.lname}>
                        <Link to={`/leetpage/:${card[0]}`}>{card[1].lname}</Link>
                    </span>
                    <p className={classes.description}>{card[1].description}</p>
                </>
        )}
        </div>
    )
}
export default Card;