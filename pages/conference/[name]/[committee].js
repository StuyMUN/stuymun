import React from 'react';
import Layout from '../../../components/Layout';
import { getSiteData } from '../../../lib/data';

class CommitteePage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { name, description } = this.props;

        return (
            <Layout title={name}>
                <h3>{name}</h3>
                <p>{description}</p>
            </Layout>
        );
    }
}

export default CommitteePage;

export async function getStaticProps({ params }) {
    const site = await getSiteData();

    const committees = site['conferences'][params.name].committees;

    let props = {};

    for (let committee of committees) {
        if (committee.name == params.committee) {
            props = committee;
            break;
        }
    }

    return { 
        props
    };
}

export async function getStaticPaths() {
    let site = await getSiteData(),
        conferences = site['conferences'];
    
    let paths = [];
    for (let conference in conferences) {
        let committees = conferences[conference].committees;

        for (let committee of committees) {
            paths.push({
                params: { 
                    name: conference, 
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