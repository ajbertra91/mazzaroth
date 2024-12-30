const VirgoConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >

            {/* top line*/}
            <line x1="31" y1="317" x2="156" y2="279" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="156" y1="279" x2="230" y2="286" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="230" y1="286" x2="335" y2="226" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="335" y1="226" x2="287" y2="174" stroke="#e5e7eb" strokeWidth="1" />
            {/* bottom line */}
            <line x1="67" y1="367" x2="138" y2="352" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="138" y1="352" x2="153" y2="387" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="153" y1="387" x2="272" y2="352" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="272" y1="352" x2="378" y2="255" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="378" y1="255" x2="433" y2="228" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="433" y1="228" x2="489" y2="150" stroke="#e5e7eb" strokeWidth="1" />
            {/* Connecting lines */}
            <line x1="230" y1="286" x2="272" y2="352" stroke="#e5e7eb" strokeWidth="1" /> {/* t1 - b1 */}
            <line x1="335" y1="226" x2="378" y2="255" stroke="#e5e7eb" strokeWidth="1" /> {/* t2 - b2 */}

            {/* Stars */}
            <circle cx="31" cy="317" r="8" fill="white" />
            <circle cx="156" cy="279" r="5" fill="#d946ef" />
            <circle cx="230" cy="286" r="5" fill="#d946ef" /> {/* t1 */}
            <circle cx="335" cy="226" r="5" fill="#d946ef" /> {/* t2 */}
            <circle cx="287" cy="174" r="8" fill="white" />

            <circle cx="67" cy="367" r="5" fill="#d946ef" />
            <circle cx="138" cy="352" r="5" fill="#d946ef" />
            <circle cx="153" cy="387" r="5" fill="#d946ef" />
            <circle cx="272" cy="352" r="8" fill="white" /> {/* b1 */}
            <circle cx="378" cy="255" r="5" fill="#d946ef" /> {/* b2 */}
            <circle cx="433" cy="228" r="5" fill="#d946ef" />
            <circle cx="489" cy="150" r="8" fill="white" />
        </svg >
    );
};

export default VirgoConstellation;