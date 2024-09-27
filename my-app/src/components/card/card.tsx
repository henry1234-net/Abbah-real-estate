import React, { ReactNode } from "react";

type cardProps = {
    children?: React.ReactNode;
    className?: string;
}

const Card = (props: cardProps) => {
    const {children, className} = props;
    return (
        <div className={`bg-white h-fit flex flex-col items-center justify-center max-w-80 p-4 py-10 rounded-md hover:bg-bakson-main-green/20 hover:cursor-pointer ${className}`}>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card;