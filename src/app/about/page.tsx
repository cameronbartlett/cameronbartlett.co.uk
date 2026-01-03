import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const About = () => {
    return (
        <>
            <Head>
                <title>Cameron Bartlett - About</title>
            </Head>
            <main className="grow w-full block relative">
                <Navbar
                    title="Cameron Bartlett"
                    screenReaderTitle="Cameron Bartlett"
                />
                <Header title="About" description="A little more about me." />
            </main>
        </>
    );
};

export default About;
