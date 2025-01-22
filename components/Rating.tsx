import { Star } from "@phosphor-icons/react";
import React from "react";

interface RatingProps {
    currentRate: number | undefined;
    classname: string;
}

const Rating: React.FC<RatingProps> = ({ currentRate, classname }) => {
    let arrOfStar = [];
    for (let i = 0; i < 5; i++) {
        if (currentRate) {
            if (i >= currentRate) {
                arrOfStar.push(
                    <Star key={i} className={classname} color='#9FA09C' weight='fill' />
                );
            } else {
                arrOfStar.push(
                    <Star key={i} className={classname} color='#F4D118' weight='fill' />
                );
            }
        }
    }
    return <div className='rate flex'>{arrOfStar}</div>;
};

export default Rating;
