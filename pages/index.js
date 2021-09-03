import Head from 'next/head';

export default function HomePage({news, others}) {
    return <>
        <Head>
            <title>StuyMUN</title>
        </Head>
        <p>hello world</p>
    </>;
}

// export async function getStaticProps() {
//     return {
//         props: {}
//     };
// }
