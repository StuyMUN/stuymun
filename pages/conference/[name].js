
import Layout from "../../components/Layout";
import NamedObject from "../../components/NamedObject";
import { getSiteData } from "../../lib/data";

export default function ConferencePage({ name, details, committees }) {

    return (
        <Layout title={name}>
            <div><h1>{name}</h1></div>
            
            <NamedObject 
                title={'Details'} 
                object={details}
            />
            
            <ul>
                {committees.map(({name, description}, i) => 
                    <li key={i}>
                        <h3>{name}</h3>
                        <div>{description}</div>
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