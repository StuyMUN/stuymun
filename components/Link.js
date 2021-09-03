import NextLink from 'next/link';

export { default as NextLink } from 'next/link';

export function Link({ children, href, passHref=false }) {
    return <NextLink href={href} passHref={passHref}>
        <a>{children}</a>
    </NextLink>
}