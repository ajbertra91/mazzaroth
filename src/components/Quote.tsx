import { PropsWithChildren } from "react";

const Quote = ({ children }: PropsWithChildren) => {
    return (
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mt-5 mb-5">
            {children}
        </blockquote>
    );
}

export default Quote;