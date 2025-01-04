const ScorpioConstellation = () => {
    return (
        <svg
            width="512"
            height="512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ backgroundColor: 'black' }}
        >
            {/* Connecting lines */}
            <line x1="135" y1="174" x2="97" y2="163" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="97" y1="163" x2="74" y2="173" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="74" y1="173" x2="54" y2="202" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="54" y1="202" x2="101" y2="264" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="101" y1="264" x2="176" y2="310" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="176" y1="310" x2="250" y2="274" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="250" y1="274" x2="338" y2="254" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="338" y1="254" x2="360" y2="252" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="360" y1="252" x2="440" y2="274" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="440" y1="274" x2="415" y2="337" stroke="#e5e7eb" strokeWidth="1" /> {/* bottom line*/}
            <line x1="440" y1="274" x2="461" y2="212" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="461" y1="212" x2="438" y2="169" stroke="#e5e7eb" strokeWidth="1" />

            {/* Stars */}
            <circle cx="135" cy="174" r="8" fill="white" />
            <circle cx="97" cy="163" r="8" fill="white" />
            <circle cx="74" cy="173" r="5" fill="#d946ef" />
            <circle cx="54" cy="202" r="8" fill="white" />
            <circle cx="101" cy="264" r="5" fill="#d946ef" />
            <circle cx="176" cy="310" r="8" fill="white" />
            <circle cx="250" cy="274" r="5" fill="#d946ef" />
            <circle cx="338" cy="254" r="8" fill="white" />
            <circle cx="360" cy="252" r="8" fill="white" />
            <circle cx="440" cy="274" r="5" fill="#d946ef" />
            <circle cx="415" cy="337" r="5" fill="#d946ef" /> {/* bottom star */}
            <circle cx="461" cy="212" r="8" fill="white" />
            <circle cx="438" cy="169" r="8" fill="white" />

        </svg>
    );
};

export default ScorpioConstellation;