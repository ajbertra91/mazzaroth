import ByLine from "@components/ByLine";
import Quote from "@components/Quote";


const MagiPage = () => {
    return (
        <section className="magi-page page-container">
            <h1 className="text-5xl font-semibold tracking-tight text-fuchsia-500 bg-teal-300 inline-block">The Magi: Wise-men from the East</h1>
            <p className="text-base text-gray-300 leading-relaxed mt-4">We first see references to wise men in the book of Daniel.</p>

            <Quote>
                "[Dan 2:12 NKJV] 12 For this reason the king was angry and very furious, and gave the command to destroy all the wise [men] of Babylon."
                <ByLine>Daniel 2:12</ByLine>
            </Quote>

            <p className="text-base text-gray-300 leading-relaxed mt-4">Go back to the beginning of the chapter to see who these wise men are:</p>
            <Quote>
                "Then the king gave the command to call the magicians, the astrologers, the sorcerers, and the Chaldeans to tell the king his dreams. So they came and stood before the king."
                <ByLine>Daniel 2:2</ByLine>
            </Quote>
            <h2 className="text-4xl font-medium tracking-tight text-fuchsia-500 bg-teal-300 inline-block">"Wise men"</h2>
            <ul className="list-disc pl-6 space-y-4 text-gray-800">
                <li>
                    <p className="text-base text-gray-300 leading-relaxed"><strong><em>Chaldeans</em></strong> - an advisory leadership title</p>
                </li>
                <li>
                    <p className="text-base text-gray-300 leading-relaxed"><strong><em>chartom</em></strong> - diviner, magician, astrologer, practicer of the occult</p>
                </li>
                <li>
                    <p className="text-base text-gray-300 leading-relaxed"><strong><em>ashshaph</em></strong> - necromancer, conjurer</p>
                </li>
            </ul>
            <p className="text-base text-gray-300 leading-relaxed mt-4">The practices of these groups probably overlapped extensively. Daniel referred to them generally as "wise men" (Daniel 2:12-14, 18, 24[2x], 48; 4:6, 18; 5:7-8, 15)</p>
        </section>
    )
}

export default MagiPage;
