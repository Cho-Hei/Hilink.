import React, { ReactNode } from "react";
import Image from "next/image";

interface ModelProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Model = ({ open, onClose, children }: ModelProps) => {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors z-40 ${
                open ? "visible bg-black/20" : "invisible"
            }`}>
            <div
                className={`rounded-lg p-6 transition-all flex flex-col ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-0"
                }`}
                onClick={(e) => e.stopPropagation()}>
                <button
                    type='button'
                    className='absolute top-0 right-0 p-1 rounded-lg text-grey-400 hover:bg-gray-50 hover:text-grey-600'
                    onClick={onClose}>
                    <Image src='/close.svg' alt='close' width={25} height={25} />
                </button>
                <div className='flex justify-center items-center p-1'>{children}</div>
            </div>
        </div>
    );
};

export default Model;
