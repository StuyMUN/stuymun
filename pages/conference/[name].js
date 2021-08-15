
import Layout from "../../components/Layout";
import { getSiteData } from "../../lib/data";

export default function ConferencePage({ name, details, committees }) {
    let detailsList = [], i = 0;
    for (let detailType in details) {
        detailsList.push(
            <li key={i++}> 
                {detailType}: {details[detailType]}
            </li>
        );
    }

    let allCommittees = [];
    for (let committeeInfo of committees) {
        let j = 0;
        for (let info in committeeInfo) {
            allCommittees.push(
                <li key={j++}>
                    {info}: {committeeInfo[info]}
                </li>
            );
        }
    }

    return (
        <Layout title={name}>
            <div><h1>{name}</h1></div>
            <ul>
                {detailsList}
            </ul>
            <ul>
                {allCommittees}
            </ul>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    const site = await getSiteData();
    const conference = site['conferences'][params.name];
    
    return {
        props: {
            name: params.name,
            details: conference.details,
            committees: conference.committees
        }
    };
}

export async function getStaticPaths() {
    let paths = [];
    const site = await getSiteData();
    console.log(site);
    for (let conference in site['conferences']) {
        paths.push({
            params: {
                name: conference
            }
        });
    }

    return { paths, fallback: false };
}