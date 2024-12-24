import { PropsWithChildren } from "react";

const ByLine = ({ children }: PropsWithChildren) => {
    return (
        <cite className="block mt-2 text-left text-gray-500">&mdash;{children}</cite>
    )
}

export default ByLine;