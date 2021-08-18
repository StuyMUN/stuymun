import React from 'react';
import Layout from '../../../components/Layout';
import { getSiteData } from '../../../lib/data';

class CommitteePage extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { name, chair, codirectors, description, bglink } = this.props;

        return (
            <Layout title={name}>
                <h2>{name}</h2><br/>
                Chair: <i>{chair}</i><br/>
                Co-Directors: <i>{codirectors}</i><br/>
                <p>{description}</p><br/>
                <a href={bglink}>Background Guide</a><br/><br/>
                <hr/>
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