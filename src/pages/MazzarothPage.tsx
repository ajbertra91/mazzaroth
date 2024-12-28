import AriesConstellation from "@components/AriesConstellation";
import ByLine from "@components/ByLine";
import CancerConstellation from "@components/CancerConstellation";
import GeminiConstellation from "@components/GeminiConstellation";
import LeoConstellation from "@components/LeoConstellation";
import Quote from "@components/Quote";
import TaurusConstellation from "@components/TaurusConstellation";


const MazzarothPage = () => {
    return (
        <section className="magi-page page-container">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900">The Mazzaroth</h1>
            <p className="text-base text-gray-700 leading-relaxed mt-4">What is it? Why do we care?</p>

            <Quote>
                "In the beginning God created the heaven and the earth"
                <ByLine>Genesis 1:1 (NKJV)</ByLine>
            </Quote>
            <Quote>
                "Can you bind the cluster of the Pleiades, Or loose the belt of Orion? Can you bring out Mazzaroth in its season? Or can you guide the Great Bear with its cubs? Do you know the ordinances of the heavens? Can you set their dominion over the earth?"
                <ByLine>Job 38:31-33 (NKJV)</ByLine>
            </Quote>
            <Quote>
                "Out of heaven He let you hear His voice, that He might instruct you;"
                <ByLine>Deuteronomy 4:26 (NKJV)</ByLine>
            </Quote>
            <Quote>
                "The heavens declare the glory of God; And the firmament shows His handiwork. Day unto day utters speech, And night unto night reveals knowledge. [There is] no speech nor language [Where] their voice is not heard. Their line has gone out through all the earth, And their words to the end of the world. In them He has set a tabernacle for the sun, Which [is] like a bridegroom coming out of his chamber, [And] rejoices like a strong man to run its race. Its rising [is] from one end of heaven, And its circuit to the other end; And there is nothing hidden from its heat."
                <ByLine>Psalm 19:1-6 (NKJV)</ByLine>
            </Quote>

            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">What is the Mazzaroth?</h2>

            <p className="text-base text-gray-700 leading-relaxed mt-4">The Mazzaroth refers to the constellations that follow the circular path of the sun over the course of a year. The moon, in turn, travels this path roughly once every month.</p>

            <p className="text-base text-gray-700 leading-relaxed mt-4">According to the Bible, the stars were purposefully placed in their positions by God to symbolically communicate the Great Salvation He provided for humanity. In our solar system, there are 88 recognized constellations, which are traditionally divided into 12 zodiacal "houses." Each house includes three associated decans (related constellations), forming 12 groups, or families, of four constellations each. These zodiacal houses and their related decans can be interpreted as expressing prophetic characteristics of the Christ.</p>

            <p className="text-base text-gray-700 leading-relaxed mt-4">God put the prophecy of His salvation in the night sky at creation!</p>

            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mt-4">The 12 Zodiacal Houses and Their Decans</h2>

            <ol className="list-decimal pl-8 space-y-6 text-gray-800 text-base leading-relaxed mt-4">
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Aries (The Ram)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Christ as the Lamb of God who takes away the sins of the world (<em>John 1:29</em>).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Cassiopeia (The Enthroned Woman): Represents the Church or Bride of Christ, awaiting union with the King.</li>
                        <li className="text-gray-700">Cetus (The Sea Monster): Symbolizes the power of evil or Satan, ultimately defeated by Christ.</li>
                        <li className="text-gray-700">Perseus (The Hero): Represents Christ as the Deliverer who rescues His people.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Taurus (The Bull)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Christ's return in judgment and strength (<em>Revelation 19:11-16</em>).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Orion (The Mighty Hunter): Represents Christ as the Prince of Glory coming to conquer.</li>
                        <li className="text-gray-700">Eridanus (The River): A river of fire symbolizing divine judgment.</li>
                        <li className="text-gray-700">Auriga (The Charioteer): Represents Christ as the Good Shepherd who protects His flock.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Gemini (The Twins)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes the dual nature of Christ (fully God and fully man) and the unity of the Church with Christ.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Lepus (The Hare): Represents the enemies of Christ, subdued under His feet.</li>
                        <li className="text-gray-700">Canis Major (The Greater Dog): Represents Christ as the Redeemer, the "dog star" Sirius symbolizing His bright presence.</li>
                        <li className="text-gray-700">Canis Minor (The Lesser Dog): Symbolizes Christ’s faithful followers.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Cancer (The Crab)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes the gathered Church, secure in Christ's eternal kingdom.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Ursa Minor (The Lesser Bear): Represents the faithful remnant of believers.</li>
                        <li className="text-gray-700">Ursa Major (The Greater Bear): Symbolizes the multitude of saints gathered into God’s kingdom.</li>
                        <li className="text-gray-700">Argo Navis (The Ship): Represents the Church being carried safely to its heavenly home.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Leo (The Lion)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Christ as the Lion of the tribe of Judah (<em>Revelation 5:5</em>), triumphant and reigning.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Hydra (The Water Serpent): Represents Satan, whose defeat is assured.</li>
                        <li className="text-gray-700">Crater (The Cup): Symbolizes the cup of God’s wrath poured out on the wicked.</li>
                        <li className="text-gray-700">Corvus (The Raven): Represents divine judgment and destruction of the enemies of God.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Virgo (The Virgin)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes the Virgin Mary and the birth of Christ, the promised seed (<em>Genesis 3:15</em>).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Coma Berenices (The Desired One): Represents Christ as the "Desired of all nations" (<em>Haggai 2:7</em>).</li>
                        <li className="text-gray-700">Centaurus (The Centaur): Symbolizes Christ’s dual nature and sacrificial role as the sin-bearer.</li>
                        <li className="text-gray-700">Bootes (The Herdsman): Represents Christ as the Great Shepherd.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Libra (The Scales)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes the justice of God and the atoning work of Christ, balancing the scales of sin and righteousness.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Crux (The Southern Cross): Represents the cross of Christ, the ultimate sacrifice.</li>
                        <li className="text-gray-700">Lupus (The Victim): Symbolizes Christ as the sacrificial Lamb.</li>
                        <li className="text-gray-700">Corona Borealis (The Northern Crown): Represents the crown of glory awaiting Christ and His saints.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Scorpio (The Scorpion)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Satan, the adversary, and the defeat of death through Christ’s resurrection.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Ophiuchus (The Serpent-Bearer): Represents Christ crushing the serpent (<em>Genesis 3:15</em>).</li>
                        <li className="text-gray-700">Hercules (The Strong Man): Symbolizes Christ’s victory over sin and death.</li>
                        <li className="text-gray-700">Ara (The Altar): Represents Christ’s sacrifice on the altar of the cross.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Sagittarius (The Archer)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Christ as the conquering King, riding forth to judge and make war (<em>Revelation 6:2</em>).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Lyra (The Harp): Represents praise and worship of the Redeemer.</li>
                        <li className="text-gray-700">Ara (The Altar): Again signifies divine judgment and redemption.</li>
                        <li className="text-gray-700">Draco (The Dragon): Symbolizes Satan, whose defeat is complete in Christ.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Capricorn (The Goat-Fish)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Christ’s death (as the sacrificial goat) and resurrection (life from death).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Sagitta (The Arrow): Represents Christ’s suffering and sacrifice.</li>
                        <li className="text-gray-700">Aquila (The Eagle): Symbolizes the resurrection and ascension of Christ.</li>
                        <li className="text-gray-700">Delphinus (The Dolphin): Represents the rising from death to life.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Aquarius (The Water Bearer)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes Christ pouring out the living water of the Holy Spirit (<em>John 7:38-39</em>).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Piscis Austrinus (The Southern Fish): Represents those who receive the living water.</li>
                        <li className="text-gray-700">Pegasus (The Winged Horse): Symbolizes the swift spread of the gospel.</li>
                        <li className="text-gray-700">Cygnus (The Swan): Represents purity and the faithful believer.</li>
                    </ul>
                </li>
                <li>
                    <strong className="text-lg font-semibold text-gray-900">Pisces (The Fish)</strong>
                    <p className="text-gray-700">Prophetic Interpretation: Symbolizes the Church, made up of those "caught" by Christ as fishers of men (<em>Matthew 4:19</em>).</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li className="text-gray-700">Andromeda (The Chained Woman): Represents the Church bound in this world, awaiting deliverance.</li>
                        <li className="text-gray-700">Cepheus (The Crowned King): Symbolizes Christ as the exalted King.</li>
                        <li className="text-gray-700">Perseus (The Hero): Represents Christ as the deliverer of His people (also linked to Aries).</li>
                    </ul>
                </li>
            </ol>

            <AriesConstellation />
            <br />
            <TaurusConstellation />
            <br />
            <GeminiConstellation />
            <br />
            <CancerConstellation />
            <br />
            <LeoConstellation />
            <br />

        </section>
    )
}

export default MazzarothPage;
