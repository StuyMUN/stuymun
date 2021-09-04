import Head from 'next/head';
import React from "react";

import { Conferences } from '../lib/data';

import Link from 'next/link';
import { ConferenceFeed, Pill } from '../components';

export default function ConferencesPage({ stuy, other }) {
    return <>
        <Head>
            <title>Conferences | StuyMUN</title>
        </Head>

        <Pill>
            <ConferenceFeed conferences={other} />
            <div><Link href='/'>Go to home</Link></div>
        </Pill>
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