import Layout from '../components/Layout';
import MemberList from '../components/MemberList';
import { getSiteData } from '../lib/data';

import styles from '../styles/OurTeam.module.css';

export default function OurTeamPage({team}) {

    let memberLists = [], i = 0;
    for (let rank in team) {
        memberLists.push(<
            MemberList 
            key={i++}
            rank={rank} 
            members={team[rank]} 
        />);
    }

    return (
        <Layout title={'Team Page'}>
            <div className={styles.members}>
                <h2>Our team!</h2>
                {memberLists}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let site = await getSiteData();
    return { props: { team: site['our-team'] } };
}
