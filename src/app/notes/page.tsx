import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export const Notes = () => {
    return (
        <>
            <Head>
                <title>Cameron Bartlett - Notes</title>
            </Head>
            <main className="grow w-full block relative">
                <Navbar
                    title="Cameron Bartlett"
                    screenReaderTitle="Cameron Bartlett"
                />
                <Header
                    title="Notes"
                    description="Notes, explanations, and things I didn't want to forget."
                />
            </main>
        </>
    );
};

export default Notes;
