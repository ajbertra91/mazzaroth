const LeoConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >

            {/* Connecting lines */}
            <line x1="48" y1="148" x2="170" y2="158" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="170" y1="158" x2="309" y2="255" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="309" y1="255" x2="331" y2="312" stroke="white" strokeWidth="2" />
            <line x1="331" y1="312" x2="394" y2="437" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="331" y1="312" x2="310" y2="400" stroke="white" strokeWidth="2" />
            <line x1="170" y1="158" x2="135" y2="230" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="135" y1="230" x2="78" y2="269" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="135" y1="230" x2="55" y2="330" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="135" y1="230" x2="331" y2="312" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="309" y1="255" x2="330" y2="198" stroke="white" strokeWidth="2" />
            <line x1="330" y1="198" x2="396" y2="187" stroke="white" strokeWidth="2" />
            <line x1="396" y1="187" x2="484" y2="210" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="484" y1="210" x2="444" y2="247" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="444" y1="247" x2="412" y2="222" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="412" y1="222" x2="396" y2="187" stroke="white" strokeWidth="2" />

            {/* Stars */}
            <circle cx="48" cy="148" r="8" fill="white" />
            <circle cx="170" cy="158" r="8" fill="white" />
            <circle cx="309" cy="255" r="8" fill="white" />
            <circle cx="331" cy="312" r="5" fill="#d946ef" />
            <circle cx="394" cy="437" r="5" fill="#d946ef" />
            <circle cx="310" cy="400" r="8" fill="white" />
            <circle cx="135" cy="230" r="5" fill="#d946ef" />
            <circle cx="78" cy="269" r="5" fill="#d946ef" />
            <circle cx="55" cy="330" r="5" fill="#d946ef" />
            <circle cx="330" cy="198" r="5" fill="#d946ef" />
            <circle cx="396" cy="187" r="5" fill="#d946ef" />
            <circle cx="484" cy="210" r="5" fill="#d946ef" />
            <circle cx="444" cy="247" r="5" fill="#d946ef" />
            <circle cx="412" cy="222" r="8" fill="white" />
        </svg>
    );
};

export default LeoConstellation;