import styles from '../styles/Layout.module.css';
import Head from 'next/head';

export default function Layout({ children, title }) {
    return (
        <div className={styles.root}>
            <Head>
                <title>{ title }</title>
            </Head>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}