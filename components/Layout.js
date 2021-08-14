import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title, isRoot }) {
    return (
        <div className={styles.root}>
            <Head>
                <title>{ title }</title>
            </Head>
            <div className={styles.content}>
                {children}
            </div>
            { 
                !isRoot && 
                <Link href={'/'}><a>Go Back Home!</a></Link>
            }
        </div>
    );
}