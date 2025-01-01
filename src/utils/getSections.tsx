import AriesConstellation from "@components/AriesConstellation";
import ByLine from "@components/ByLine";
import CancerConstellation from "@components/CancerConstellation";
import Circles from "@components/Circles";
import Description from "@components/Description";
import GeminiConstellation from "@components/GeminiConstellation";
import LeoConstellation from "@components/LeoConstellation";
import Quote from "@components/Quote";
import TaurusConstellation from "@components/TaurusConstellation";
import VirgoConstellation from "@components/VirgoConstellation";


export const sections = [
    {
        title: "The Mazzaroth",
        component: <Circles />,
        description: (
            <Description>
                <p>
                    Refers to the constellations that follow the circular path of the sun over the course of a year. The moon, in turn, travels this path roughly once every month.
                </p>
                <p className="mt-4">
                    According to the Bible, the stars were purposefully placed in their positions by God to symbolically communicate the Great Salvation He provided for humanity.
                </p>
                <p className="mt-4">
                    In our solar system, there are 88 recognized constellations, which are traditionally divided into 12 zodiacal "houses." Each house includes three associated decans (related constellations), forming 12 groups, or families, of four constellations each (48 in the northern hemisphere).
                </p>
                <p className="mt-4">
                    These zodiacal houses and their related decans can be interpreted as expressing prophetic characteristics of the Christ.
                </p>
                <p className="mt-4"><em>
                    The original meanings have been lost to time, but in hindsight, we can try to piece them back together.
                </em></p>
            </Description>
        ),
    },
    {
        title: "Purposeful Design",
        component: (
            <Description>
                <Quote>
                    "In the beginning God created the heaven and the earth"
                    <ByLine>Genesis 1:1 (NKJV)</ByLine>
                </Quote>
            </Description>
        ),
        description: (
            <p>
                According to the Bible, the stars were purposefully placed in their positions by God to symbolically communicate the Great Salvation He provided for humanity. In our solar system, there are 88 recognized constellations, which are traditionally divided into 12 zodiacal "houses." Each house includes three associated decans (related constellations), forming 12 groups, or families, of four constellations each. These zodiacal houses and their related decans can be interpreted as expressing prophetic characteristics of the Christ.
            </p>
        ),
    },
    {
        title: "",
        component: (
            <Description>
                <Quote>
                    "Out of heaven He let you hear His voice, that He might instruct you;"
                    <ByLine>Deuteronomy 4:26 (NKJV)</ByLine>
                </Quote>
            </Description>
        ),
        description: "",
    },
    {
        title: "",
        component: (
            <Description>
                <Quote>
                    "The heavens declare the glory of God; And the firmament shows His handiwork. Day unto day utters speech, And night unto night reveals knowledge. [There is] no speech nor language [Where] their voice is not heard. Their line has gone out through all the earth, And their words to the end of the world. In them He has set a tabernacle for the sun, Which [is] like a bridegroom coming out of his chamber, [And] rejoices like a strong man to run its race. Its rising [is] from one end of heaven, And its circuit to the other end; And there is nothing hidden from its heat."
                    <ByLine>Psalm 19:1-6 (NKJV)</ByLine>
                </Quote>
            </Description>
        ),
        description: "",
    },
    {
        title: "The Sovereignty of God Over the Heavens",
        component: (
            <Description>
                <Quote>
                    "He counts the number of the stars; He calls them all by name. Great [is] our Lord, and mighty in power; His understanding [is] infinite."
                    <ByLine>Psalm 147:4-5 (NKJV)</ByLine>
                </Quote>
                <Quote>
                    "Can you bind the cluster of the Pleiades, Or loose the belt of Orion? Can you bring out Mazzaroth in its season? Or can you guide the Great Bear with its cubs? Do you know the ordinances of the heavens? Can you set their dominion over the earth?"
                    <ByLine>Job 38:31-33 (NKJV)</ByLine>
                </Quote>
            </Description>
        ),
        description: (
            <p>
                Adam, the first man and father of humanity, was entrusted by God with the task of naming the plants and creatures of the earth, reflecting his dominion over them as their steward. In contrast, God reserved the naming of the stars for Himself, signifying that humanity was not granted dominion or control over the heavens.
            </p>
        ),
    },
    {
        title: "Aries (The Ram)",
        component: <AriesConstellation />,
        description: (
            <Description>
                <p>
                    Symbolizes Christ as the Lamb of God who takes away the sins of the world{" "}
                    <em>(John 1:29)</em>.
                </p>
            </Description>
        ),
    },
    {
        title: "Taurus (The Bull)",
        component: <TaurusConstellation />,
        description: (
            <Description>
                <p>
                    Symbolizes Christ's return in judgment and strength - "His glory is like a firstborn
                    bull, And his horns like the horns of the wild ox (aurochs);" <em>Deut. 33:17a</em>.
                </p>
            </Description>
        ),
    },
    {
        title: "Gemini (The Twins)",
        component: <GeminiConstellation />,
        description: (
            <Description>
                <p>
                    Symbolizes the dual nature of Christ (fully God and fully man) and the unity of the
                    Church with Christ.
                </p>
            </Description>
        ),
    },
    {
        title: "Cancer (The Crab)",
        component: <CancerConstellation />,
        description: (
            <Description>
                <p>
                    Symbolizes the gathered Church, secure in Christ's eternal kingdom.
                </p>
            </Description>
        ),
    },
    {
        title: "Leo (The Lion)",
        component: <LeoConstellation />,
        description: (
            <Description>
                <p>
                    Symbolizes Christ as the Lion of the tribe of Judah{" "}
                    <em>(Revelation 5:5)</em>, triumphant and reigning.
                </p>
            </Description>
        ),
    },
    {
        title: "Virgo (The Virgin)",
        component: <VirgoConstellation />,
        description: (
            <Description>
                <p>
                    Symbolizes the Virgin Mary and the birth of Christ, the promised seed{" "}
                    <em>(Genesis 3:15)</em>.
                </p>
            </Description>
        ),
    },
];