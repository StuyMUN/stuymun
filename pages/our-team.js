import { Layout, NamedList } from '../old/components';
import { Site } from '../lib/data';

export default function OurTeamPage({ groups }) {
    return (
        <Layout title={'Team Page'}>
            <div>
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
    return {
        props: {
            groups: await Site.getData('our-team')
        }
    };
}
