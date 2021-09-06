import Head from 'next/head';
import React from "react";

import { Conferences } from '../lib/data';
import { ConferenceFeed, OtherFeed, Pill, StuyFeed } from '../components';

export default function ConferencesPage({ conferences }) {
    return <>
        <Head>
            <title>Conferences | StuyMUN</title>
        </Head>

        <header className="text-center">
            <h1>Conferences</h1>
        </header>

        <Pill>
            <ConferenceFeed
                title='StuyMUN Conferences'
                conferences={conferences}
                feed={StuyFeed}
            />
        </Pill>

        <Pill>
            <ConferenceFeed
                title='Visiting Conferences'
                conferences={conferences}
                feed={OtherFeed}
            />
        </Pill>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            conferences: await Conferences.getConferences(),
        }
    };
}