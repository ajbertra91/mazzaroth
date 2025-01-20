import ByLine from "@components/ByLine";
import Quote from "@components/Quote";
import LinkCard from '@components/LinkCard';


const HomePage = () => {
    return (
        <div className="home-page flex flex-col gap-8">
            <section className="sm:h-full">
                <h1 className="text-5xl font-semibold tracking-tight text-fuchsia-500 bg-teal-300 inline-block">The Story of the Birth of Jesus</h1>
                <p className="text-base text-gray-300 leading-relaxed mt-4">There are a few questions that need to be answered in the story of the birth of Jesus as recorded in the Gospel of Matthew.</p>

                <Quote>
                    "Now after Jesus was born in Bethlehem of Judea in the days of Herod the king, behold, <strong>wise men from the East</strong> came to Jerusalem,
                    saying, "Where is He who has been born King of the Jews? <strong>For we have seen His star in the East</strong> and have come to worship Him."
                    When Herod the king heard this, <strong>he was troubled, and all Jerusalem with him.</strong>"
                    <ByLine>Matthew 2:1-3 (NKJV - emphasis added)</ByLine>
                </Quote>
            </section>

            <section className="sm:h-full">
                <h2 className="text-4xl font-medium tracking-tight text-fuchsia-500 bg-teal-300 inline-block">Questions:</h2>
                <p className="text-base leading-relaxed mt-4">
                    <LinkCard url="/history">Why was the whole population of Jerusalem troubled by the wise men?"</LinkCard>
                </p>
                <p className="text-base leading-relaxed mt-4">
                    <LinkCard url="/magi">Who are the wise men?</LinkCard>
                </p>
                <p className="text-base leading-relaxed mt-4">
                    <LinkCard url="/stars">What do you mean, "they saw His star?"</LinkCard>
                </p>
            </section>
        </div>
    )
}

export default HomePage;
