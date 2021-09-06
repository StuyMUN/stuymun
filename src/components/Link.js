import NextLink from 'next/link';

export default function Link({ children, href, passHref=false }) {
    return <NextLink href={href} passHref={passHref}>
        <a>{children}</a>
    </NextLink>
}