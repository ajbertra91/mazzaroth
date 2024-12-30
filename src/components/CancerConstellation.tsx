const CancerConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >
            {/* Connecting lines */}
            <line x1="146" y1="50" x2="183" y2="209" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="183" y1="209" x2="191" y2="290" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="191" y1="290" x2="138" y2="445" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="191" y1="290" x2="302" y2="409" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="302" y1="409" x2="370" y2="466" stroke="#e5e7eb" strokeWidth="1" />
            {/* Stars */}
            <circle cx="146" cy="50" r="5" fill="#d946ef" />
            <circle cx="183" cy="209" r="5" fill="#d946ef" />
            <circle cx="191" cy="290" r="8" fill="white" />
            <circle cx="138" cy="445" r="5" fill="#d946ef" />
            <circle cx="302" cy="409" r="5" fill="#d946ef" />
            <circle cx="370" cy="466" r="8" fill="white" />
        </svg>
    );
};

export default CancerConstellation;