const GeminiConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >

            {/* Connecting lines */}
            <line x1="80" y1="432" x2="105" y2="370" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="105" y1="370" x2="125" y2="340" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="125" y1="340" x2="215" y2="310" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="215" y1="310" x2="460" y2="290" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="460" y1="290" x2="465" y2="190" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="465" y1="190" x2="305" y2="130" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="305" y1="130" x2="237" y2="151" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="237" y1="151" x2="80" y2="180" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="80" y1="180" x2="57" y2="94" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="57" y1="94" x2="50" y2="75" stroke="#e5e7eb" strokeWidth="1" />
            {/* Stars */}
            <circle cx="80" cy="432" r="5" fill="#d946ef" />
            <circle cx="105" cy="370" r="5" fill="#d946ef" />
            <circle cx="125" cy="340" r="8" fill="white" />
            <circle cx="215" cy="310" r="8" fill="white" />
            <circle cx="460" cy="290" r="8" fill="white" />
            <circle cx="465" cy="190" r="8" fill="white" />
            <circle cx="305" cy="130" r="5" fill="#d946ef" />
            <circle cx="237" cy="151" r="5" fill="#d946ef" />
            <circle cx="80" cy="180" r="8" fill="white" />
            <circle cx="57" cy="94" r="5" fill="#d946ef" />
            <circle cx="50" cy="75" r="8" fill="white" />
        </svg>
    );
};

export default GeminiConstellation;