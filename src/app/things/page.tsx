import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export const Things = () => {
    return (
        <>
            <Head>
                <title>Cameron Bartlett - Things</title>
            </Head>
            <main className="grow w-full block relative">
                <Navbar
                    title="Cameron Bartlett"
                    screenReaderTitle="Cameron Bartlett"
                />
                <Header
                    title="Things"
                    description="Things I've built or am building."
                />
            </main>
        </>
    );
};

export default Things;
