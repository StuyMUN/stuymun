import { NamedList } from '../old/components';
import { Site } from '../lib/data';

export default function SecretariatPage({ groups }) {
    return <div>
        <h2>Our team!</h2>
        {groups.map((group, i) =>
            <NamedList
                key={i}
                title={group.position}
                list={group.people}
            />
        )}
    </div>;
}

export async function getStaticProps() {
    return {
        props: {
            groups: await Site.getData('secretariat')
        }
    };
}
