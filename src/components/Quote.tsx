import { PropsWithChildren } from "react";

const Quote = ({ children }: PropsWithChildren) => {
    return (
        <blockquote className="border-l-4 border-[#40f384] pl-4 pr-4 italic text-gray-300 mt-5 mb-5 text-base">
            {children}
        </blockquote>
    );
}

export default Quote;