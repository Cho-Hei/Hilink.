"use client";

import { useState } from "react";

interface ReadMoreProps {
    id: string;
    text: string;
    amountOfWords?: number;
}

export const ReadMore = ({ id, text, amountOfWords = 36 }: ReadMoreProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const splittedText = text.split(" ");
    const itCanOverflow = splittedText.length > amountOfWords;
    const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(" ") : text;
    const endText = splittedText.slice(amountOfWords - 1).join(" ");

    const handleKeyboard = (e: React.KeyboardEvent) => {
        if (e.code === "Space" || e.code === "Enter") {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className='body2 text-variant1'>
            <p id={id}>
                {beginText}
                {itCanOverflow && (
                    <>
                        {!isExpanded && <span>... </span>}
                        <span className={`${!isExpanded && "hidden"}`} aria-hidden={!isExpanded}>
                            {` ${endText}`}
                        </span>
                        <span
                            className='text-button-sm underline inline-block duration-300 cursor-pointer hover:text-primary'
                            role='button'
                            tabIndex={0}
                            aria-expanded={isExpanded}
                            aria-controls={id}
                            onKeyDown={handleKeyboard}
                            onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? "Hidden less" : "Read more"}
                        </span>
                    </>
                )}
            </p>
        </div>
    );
};
