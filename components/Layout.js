import styles from '../styles/Layout.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title, root }) {
    return (
        <div className={styles.root}>
            <Head>
                <title>{ title }</title>
            </Head>
            <div className={styles.content}>
                {children}
            </div>
            { 
                !root && 
                <Link href={'/'}><a>Go Back Home!</a></Link>
            }
        </div>
    );
}