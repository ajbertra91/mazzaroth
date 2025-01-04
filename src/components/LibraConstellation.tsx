const LibraConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >
            {/* Connecting lines */}
            <line x1="89" y1="211" x2="132" y2="193" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="132" y1="193" x2="171" y2="185" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="171" y1="185" x2="240" y2="100" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="240" y1="100" x2="335" y2="212" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="335" y1="212" x2="272" y2="369" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="272" y1="369" x2="175" y2="412" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="175" y1="412" x2="162" y2="440" stroke="#e5e7eb" strokeWidth="1" />

            <line x1="272" y1="369" x2="240" y2="100" stroke="#e5e7eb" strokeWidth="1" />

            {/* Stars */}
            <circle cx="89" cy="211" r="5" fill="#d946ef" />
            <circle cx="132" cy="193" r="5" fill="#d946ef" />
            <circle cx="171" cy="185" r="5" fill="#d946ef" />
            <circle cx="240" cy="100" r="8" fill="white" />
            <circle cx="335" cy="212" r="8" fill="white" />
            <circle cx="272" cy="369" r="5" fill="#d946ef" />
            <circle cx="175" cy="412" r="5" fill="#d946ef" />
            <circle cx="162" cy="440" r="5" fill="#d946ef" />
        </svg>
    );
};

export default LibraConstellation;