import Head from 'next/head';
import React from "react";

import { Conferences } from '../lib/data';

import Link from 'next/link';
import { ConferenceFeed, OtherFeed, Pill, StuyFeed } from '../components';

export default function ConferencesPage({ stuy, other }) {
    return <>
        <Head>
            <title>Conferences | StuyMUN</title>
        </Head>

        <Pill>
            <ConferenceFeed title='Our Conferences' conferences={stuy} feed={StuyFeed} />
        </Pill>

        <div style={{height: '250px'}}></div> 

        <Pill>
            <ConferenceFeed title='Upcoming Conferences' conferences={other} feed={OtherFeed} />
        </Pill>

        <div><Link href='/'>Go to home</Link></div>
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            stuy: await Conferences.getStuyConferences(),
            other: await Conferences.getOtherConferences()
        }
    };
}