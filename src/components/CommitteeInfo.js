import Pill from './Pill';
import Link from './Link';
import { isHttpLink } from '../lib/util';

export function Markdown({ content }) {
    return <div className={'__markdown'} dangerouslySetInnerHTML={{ __html: content }} />
}

export default function CommitteeInfo({ committee }) {

    function getBGLink(bglink) {
        if (isHttpLink(bglink)) {
            return <Link href={bglink}>Check out this Background Guide!</Link>
        } else {
            return <p>Background Guide coming soon!</p>
        }
    }

    const { title, chair, codirector, content, bglink } = committee;

    return <>
        <h2>{title}</h2>
        <i>Chair: {chair}</i><br />
        <i>Co-Director: {codirector}</i><br />
        {content && <Markdown content={content} />}
        {getBGLink(bglink)}<br />
        <hr />
        <br />
    </>;
}