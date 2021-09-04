import { Pill, Link } from '../../../components'
import { isHttpLink } from '../../../lib/util';
import { Conferences } from '../../../lib/data';
import Head from 'next/head';


export default function CommitteePage({ committee, conference }) {

    const { name, description, chair, codirector, bglink } = committee;

    function getBGLink(bglink) {
        if (isHttpLink(bglink)) {
            return <Link href={bglink}>Check out this Background Guide!</Link>
        } else {
            return <p>Background Guide coming soon!</p>
        }
    }

    return <>
        <Head>
            <title>{name} | StuyMUN</title>
        </Head>
        
        <Pill>
        <h2>{name}</h2><br />
            <i>Chair: {chair}</i><br />
            <i>{codirector}</i><br />
            <p>{description}</p><br />
            {getBGLink(bglink)}<br />
            <hr />
            <br/>
            <div><Link href={`/conference/${conference}`}>Go back to conference</Link></div>
        </Pill>


    </>;
}

export async function getStaticProps({ params }) {
    const committees =
        (await Conferences.getStuyConference(params.name)).committees;

    let props = {};

    for (let committee of committees) {
        if (committee.name == params.committee) {
            props = { committee: committee, conference: params.name };
            break;
        }
    }

    return { props };
}

export async function getStaticPaths() {
    let conferences =
        await Conferences.getStuyConferenceMap();

    let paths = [];
    for (let name in conferences) {
        let committees = conferences[name].committees;

        for (let committee of committees) {
            paths.push({
                params: {
                    name: name,
                    committee: committee.name
                }
            });
        }
    }

    return {
        paths: paths,
        fallback: false
    };
}