import Layout from '../components/Layout';
import NamedList from '../components/NamedList';
import { Site } from '../lib/util';

import styles from '../styles/OurTeam.module.css';

export default function OurTeamPage({ groups }) {

    return (
        <Layout title={'Team Page'}>
            <div className={styles.members}>
                <h2>Our team!</h2>
                {groups.map((group, i) => 
                    <NamedList 
                        key={i} 
                        title={group.position} 
                        list={group.people} 
                    />
                )}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    let site = await Site.getData();
    return { props: { groups: site['our-team'] } };
}
