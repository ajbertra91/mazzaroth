const TaurusConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >
            {/* Connecting lines */}
            {/* stem */}
            <line x1="140" y1="480" x2="150" y2="470" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="150" y1="470" x2="180" y2="330" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="180" y1="330" x2="230" y2="250" stroke="#e5e7eb" strokeWidth="1" />
            {/* bottom branch line */}
            <line x1="230" y1="250" x2="255" y2="240" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="255" y1="240" x2="285" y2="225" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="285" y1="225" x2="350" y2="190" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="350" y1="190" x2="450" y2="80" stroke="#e5e7eb" strokeWidth="1" />
            {/* bottom right line */}
            <line x1="285" y1="225" x2="345" y2="380" stroke="#e5e7eb" strokeWidth="1" />
            {/* top branch line */}
            <line x1="230" y1="250" x2="235" y2="220" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="235" y1="220" x2="247" y2="190" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="247" y1="190" x2="380" y2="20" stroke="#e5e7eb" strokeWidth="1" />

            {/* Stars */}
            {/* stem */}
            <circle cx="140" cy="480" r="5" fill="#d946ef" />
            <circle cx="150" cy="470" r="5" fill="#d946ef" />
            <circle cx="180" cy="330" r="5" fill="#d946ef" />
            <circle cx="230" cy="250" r="5" fill="#d946ef" />
            {/* bottom branch */}
            <circle cx="255" cy="240" r="8" fill="white" />
            <circle cx="285" cy="225" r="5" fill="#d946ef" />
            <circle cx="350" cy="190" r="5" fill="#d946ef" />
            <circle cx="450" cy="80" r="8" fill="white" />
            {/* bottom right star */}
            <circle cx="345" cy="380" r="8" fill="white" />
            {/* top branch */}
            <circle cx="235" cy="220" r="8" fill="white" />
            <circle cx="247" cy="190" r="8" fill="white" />
            <circle cx="380" cy="20" r="8" fill="white" />
        </svg>
    );
};

export default TaurusConstellation;