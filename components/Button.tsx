import Image from "next/image";
import React from "react";

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = ({ type, title, icon, variant, full, disabled, onClick }: ButtonProps) => {
    return (
        <button
            className={`flexCenter gap-3 p-6 rounded-full border ${variant} ${full && "w-full"} ${
                disabled && "opacity-50 cursor-not-allowed"
            }`}
            type={type}
            disabled={disabled}
            onClick={onClick}>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
            <label
                className={`bold-16 whitespace-nowrap ${
                    disabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}>
                {title}
            </label>
        </button>
    );
};

export default Button;
