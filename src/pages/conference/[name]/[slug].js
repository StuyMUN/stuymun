import { Pill, Link, CommitteeInfo } from '../../../components'
import { Conferences } from '../../../lib/data';
import Head from 'next/head';


export default function CommitteePage({ conference, committee }) {

    const { title } = committee;

    return <>
        <Head>
            <title>{title} | StuyMUN</title>
        </Head>
        <header className="spacer">&nbsp;</header>
        <section><Pill>
        <CommitteeInfo committee={committee}/>
        <div><Link href={`/conference/${conference}`}>Go back to conference</Link></div>
        </Pill></section>
    </>;
}

export async function getStaticProps({ params }) {
    let committees = (await Conferences.getStuyConference(params.name)).committees;
    let committee = committees[params.slug];

    return {
        props: {
            conference: params.name,
            committee: committee
        }
    };
}

export async function getStaticPaths() {
    let conferences =
        await Conferences.getStuyConferenceMap();

    let paths = [];
    for (let name in conferences) {
        let committees = conferences[name].committees;
        for (let slug in committees) {
            paths.push({ params: { name: name, slug: slug } });
        }
    }

    return {
        paths: paths,
        fallback: false
    };
}