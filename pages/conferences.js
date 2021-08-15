import Layout from '../components/Layout.js'
import React from "react";
import { getSiteData } from '../lib/data.js';

import Link from 'next/link';

class ConferencesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    getConferenceLink(name) {
        return <Link href={`/conference/${name}`}>{name}</Link>
    }

    render() {
        let conferences = this.props.conferences;

        return (
            <Layout title={'Conferences'}>
                <div>Conferences: </div>
                
                <ul>
                    {conferences.map((name, i) => 
                        <li key={i}>{this.getConferenceLink(name)}</li>
                    )}
                </ul>
            </Layout>
        );
    }

}

export default ConferencesPage;

export async function getStaticProps() {
    let site = await getSiteData(),
        conferences = Object.keys(site['conferences']);

    return { props: { conferences }};
}