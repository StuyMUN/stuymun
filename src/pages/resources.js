import Head from "next/head";
import { Pill } from "../components";
import getImg from "../lib/constants";

export default function ResourcesPage() {

    // eslint-disable-next-line @next/next/no-img-element
    const DriveImage = <img
        src={getImg("/img/drive.png")}
        alt="Google Drive Logo"
        width="160px" height="143.7px"
    />;

    // eslint-disable-next-line @next/next/no-img-element
    const FormImage = <img
        src={getImg("/img/form.png")}
        alt="Form Image"
        width="160px" height="160px"
    />

    return <>

        <Head>
            <title>Resurces | StuyMUN</title>    
        </Head>

        <header className="text-center">
            <h1>Resources</h1>
        </header>

        <Pill>
            <div className="split text-center">
                <a href="https://drive.google.com/drive/folders/103mc1nllTEgKit2lzzAgi9pWL8RGIOc3?usp=sharing"><div>Delegate Guides &#8250;</div></a>
                <a href="https://drive.google.com/drive/folders/103mc1nllTEgKit2lzzAgi9pWL8RGIOc3?usp=sharing">{DriveImage}</a>
            </div>
        </Pill>

        <Pill>
            <div className="split text-center">
                <a href="https://drive.google.com/drive/folders/1nMvH2HV_HunXg8AwgyeoEHOnefvq64B6?usp=sharing"><div>Forms &#8250;</div></a>
                <a href="https://drive.google.com/drive/folders/1nMvH2HV_HunXg8AwgyeoEHOnefvq64B6?usp=sharing">{FormImage}</a>
            </div>
        </Pill>

    </>;
}