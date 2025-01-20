import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type LinkCardProps = {
    url: string;
} & PropsWithChildren;

const LinkCard: React.FC<LinkCardProps> = ({ url, children }) => {
    return (
        <Link
            to={url}
            className="text-blue-500 hover:text-blue-700"
        >
            <div className="items-center transition group bg-conic-gradient bg-[hsl(224,32%,12%)] bg-blend-multiply text-white grid place-items-center min-h-[100px]">
                <span>{children}</span>
                <ArrowRight
                    className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2"
                />
            </div>
        </Link >

    );
};

export default LinkCard;
