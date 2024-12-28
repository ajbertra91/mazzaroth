import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type LinkWithArrowProps = {
    url: string;
} & PropsWithChildren;

const LinkWithArrow: React.FC<LinkWithArrowProps> = ({ url, children }) => {
    return (
        <span className="text-base text-gray-700 leading-relaxed">
            <Link
                to={url}
                className="flex items-center text-blue-500 hover:text-blue-700 transition group"
            >
                <span>{children}</span>
                <ArrowRight
                    className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2"
                />
            </Link>
        </span>
    );
};

export default LinkWithArrow;
