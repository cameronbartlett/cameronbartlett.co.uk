import Image from "next/image";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const Home = () => {
    return (
        <>
            <Head>
                <title>Cameron Bartlett - Developer</title>
            </Head>
            <main className="grow w-full block relative">
                <Navbar
                    title="Cameron Bartlett"
                    screenReaderTitle="Cameron Bartlett"
                />
                <Header
                    eyebrow="Developer"
                    title="Cameron Bartlett"
                    description="I'm Cameron, a software developer. I build things and write about what I'm learning as I go."
                />
            </main>
        </>
    );
};

export default Home;
