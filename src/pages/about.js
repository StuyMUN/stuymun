import Head from 'next/head';
import Link from '../components/Link';
import { Pill } from '../components';
import getImg from '../lib/constants';


export default function AboutPage( ) {
    return <>
        <Head>
            <title>About | StuyMUN</title>
        </Head>

        <header className="text-center">
            <h1>About StuyMUN</h1>
        </header>

        <Pill>
        <div align="center">
        <h1>Venimus, Vidimus, Gavelimus</h1>
        </div><br/>

        <div>
            <p>The Stuyvesant Model United Nations team, commonly called StuyMUN, is made up of students from Stuyvesant High
                School in New York, NY. Members are trained to be well equipped for collegiate competitions in some of the
                nation's most prestigious institutions. The team regularly brings home awards, and is ranked amongst the top 15
                teams in the nation by Best Delegate.</p>
        </div>

        <div>Every April, the team also hosts its own conference, the Stuyvesant Model United Nations Conference, which attracts
            delegates from around the New York area.</div><br/>

        <div align="center">
            <h2>Conclusion</h2>
        <div>Sussus Amogus</div>
        <img src={getImg("/img/sus.jpg")} alt="sussy" /></div>
            <Link href={'/'}>Go back home</Link>
        </Pill>
    </>
}
