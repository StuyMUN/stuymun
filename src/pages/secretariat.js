import { Site } from '../lib/data';
import Head from 'next/head';
import getImg from '../lib/constants';

function Person({ person }) {

    let pfp = null;
    if (person.pfp) {
        // eslint-disable-next-line @next/next/no-img-element
        pfp = <img src={getImg(person.pfp)} width="200px" height="200px" alt={`${person.name}'s personal picture`} />;
    }
    
    return <>
        {pfp}
        <p>{person.name}</p>
    </>;
}

function Position({ position, people }) {
    let inlineStyles = {};
    if (people.length === 2) {
        inlineStyles.maxWidth = '700px';
    }
    
    return <>
        <h2 className="position">{position}</h2>

        <div style={inlineStyles} className="split" id="sec">
            {people.map((person, i) => {
                return <div key={i} className='person'>
                    <Person person={person} />
                </div>
            })}
        </div>
    </>;
}

function Rank({ rank, positions }) {
    return <section className="container text-center">
        <h1 id="line" className="news">{rank}</h1>

        {positions.map(({position, people}, i) => {
            return <div className='position' key={i}>
                <Position position={position} people={people} />
            </div>;
        })}
    </section>;
}

export default function SecretariatPage({ sec }) {
    return <>
        <Head>
            <title>Secretariat | StuyMUN </title>
        </Head>

        <header className="text-center">
            <h1>Our Team</h1>
        </header>

        {sec.map((entry, i) => {
            return <div className='rank' key={i}>
                <Rank rank={entry[0]} positions={entry[1]} />
            </div>
        })}
    </>;
}

export async function getStaticProps() {
    return {
        props: {
            sec: await Site.getData('secretariat')
        }
    };
}