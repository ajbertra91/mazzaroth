import React from 'react';

const Description = ({ text, children }: { text?: string; children?: React.ReactNode }) => {
    return (
        <div className="description text-lg text-gray-300 leading-relaxed">
            {text && <p>{text}</p>}
            {children}
        </div>
    );
};

export default Description;