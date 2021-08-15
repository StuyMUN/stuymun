import Layout from '../components/Layout.js'
import React from "react";
import { getSiteData } from '../lib/data.js';

import Link from 'next/link';

class ConferencesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let conferences = this.props.conferences;
        
        let conferenceList = [], i = 0;
        for (let conference in conferences) {
            conferenceList.push(
                <li key={i++}>
                    <Link href={`/conference/${conference}`}>
                        {conference}
                    </Link>
                </li>
            );
        }

        return (
            <Layout title={'Conferences'}>
                <div>Conferences: </div>
                <ul>{conferenceList}</ul>
            </Layout>
        );
    }

}

export default ConferencesPage;

export async function getStaticProps() {
    const site = await getSiteData();
    return { props: { conferences: site['conferences'] }};
}