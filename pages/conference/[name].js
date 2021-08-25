
import Layout from "../../components/Layout";
import NamedObject from "../../components/NamedObject";
import { getSiteData } from "../../lib/data";

import Link from 'next/link';

export default function ConferencePage({ name, details, committees }) {

    function getCommitteeLink(conferenceName, committee) {
        return <Link href={`/conference/${conferenceName}/${committee}`}><a>{committee}</a></Link>
    }

    return (
        <Layout title={name}>
            <div><h1>{name}</h1></div>
            
            <NamedObject 
                title={'Details'} 
                object={details}
            />
            
            <ul>
                {committees.map((entry, i) => 
                    <li key={i}>
                        {getCommitteeLink(name, entry.name)}
                    </li>
                )}
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
    const site = await getSiteData();
    let cnfs = Object.keys(site['conferences']);
    
    return { 
        paths: cnfs.map(cnf => {
            return { params: {name: cnf} };
        }), 
        fallback: false 
    };
}