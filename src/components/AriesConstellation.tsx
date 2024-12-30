const AriesConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >
            {/* Connecting lines */}
            <line x1="240" y1="100" x2="355" y2="300" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="355" y1="300" x2="340" y2="420" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="340" y1="420" x2="320" y2="450" stroke="#e5e7eb" strokeWidth="1" />
            {/* Stars */}
            <circle cx="240" cy="100" r="5" fill="#d946ef" />
            <circle cx="355" cy="300" r="8" fill="white" />
            <circle cx="340" cy="420" r="8" fill="white" />
            <circle cx="320" cy="450" r="5" fill="#d946ef" />
        </svg>
    );
};

export default AriesConstellation;