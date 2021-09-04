import { Site } from '../lib/data';
import { Pill } from '../components';
// import Image from 'next/image';

function LowerMember({ person }) {
    let size = 20;

    let imageSize = `${size - 2}px`;
    /* eslint-disable-next-line @next/next/no-img-element*/
    const PfpImage = <img src={person.pfp} width={imageSize} height={imageSize} alt="pfp" />;

    let textSize = `${size}px`;
    return <>
        {person.pfp && PfpImage} <span style={{ fontSize: textSize }}>{person.name}</span>
    </>;
}

function Member({ person }) {
    /* eslint-disable-next-line @next/next/no-img-element*/
    const PfpImage = <img src={person.pfp} width="200px" height="200px" alt="pfp" />;

    return <Pill>
        <table>
            <tbody>
                <tr>
                    <td>{person.pfp && PfpImage}</td>
                    <td>
                        <span>{person.name}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </Pill>;
}

function Position({ rank, position, people }) {

    function getUpperMembers() {
        return people.map((person, i) =>
            <div key={i}>
                <Member person={person} />;
            </div>
        );
    }

    function getLowerMembers() {
        return <Pill>
            {people.map((person, i) =>
                <div key={i}>
                    <LowerMember person={person} />
                </div>
            )}
        </Pill>;
    }

    function getMembers() {
        if (rank === 'Upper Secretariat') {
            return getUpperMembers();
        }
        return getLowerMembers();
    }

    return <>
        <h3>{position}</h3>

        {getMembers()}
    </>;
}

function Rank({ rank, data }) {

    function getPositions() {
        return data.map(({ position, people }, i) => {
            return <div key={i++}>
                <Position
                    rank={rank}
                    position={position}
                    people={people}
                />
            </div>;
        })
    }

    return <>

        <h2>{rank}</h2>

        {getPositions()}

    </>;
}

export default function SecretariatPage({ sec }) {

    return <div>
        <header className="text-center">
            <h1>Meet the Team</h1>
        </header>

        {sec.map((rank, data, i) => {
            return <div key={i}>
                <Rank rank={rank} data={data} />
            </div>;
        })}

    </div>;
}

export async function getStaticProps() {

    // let sec = await Site.getData('secretariat')

    return {
        props: {
            sec: await Site.getData('secretariat')
        }
    };
}
