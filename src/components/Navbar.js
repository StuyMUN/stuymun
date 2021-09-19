// import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from './Link';
import getImg from "../lib/constants";

function useScroll() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            let currScrollPos = window.pageYOffset;
            if (scrollPosition > currScrollPos) {
                document.getElementById("main-nav").style.top = "0px";
                document.getElementsByClassName("nav-container")[0].style.top = "0px";
            } else {
                document.getElementById("main-nav").style.top = "-84.63px";
                document.getElementsByClassName("nav-container")[0].style.top = "-84.63px";
            }
            setScrollPosition(currScrollPos);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });
}


export default function Navbar({ }) {
    useScroll();

    /* an alternative to this is using useRouter() in this component
    and having a useEffect that changes on router.pathname and not having
    onClick on each link -- this triggers more reloads in development
    but it should be the same in SSG production  */
    
    // mobile nav options
    const [checked, setChecked] = useState(false);
    const toggle = _e => setChecked(!checked);
    const disable = _e => setChecked(false);

    // eslint-disable-next-line @next/next/no-img-element
    const FilledImage = <img
        alt="MUNLOGO"
        src={getImg("/img/munlogo-transparent.png")}
        width="80px" height="70px"
    />;

    return <div id="nav">

        <div className="nav-container">
            <nav id="main-nav">
                <Link href='/'>
                    <div className="nav-title">
                        {FilledImage}
                        <div className="link-txt" id="special">StuyMUN</div>
                    </div>
                </Link>
                <Link href={"/resources"}><div className="link-txt">Resources</div></Link>
                <Link href={"/conferences"}><div className="link-txt">Conferences</div></Link>
                <Link href={"/secretariat"}><div className="link-txt">Secretariat</div></Link>
                <Link href={"/about"}><div className="link-txt">About</div></Link>
            </nav>
        </div>

        <div className="mobile-nav-container">
            <nav className="mobile-nav" role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" onChange={toggle} checked={checked} />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        <Link href={"/"}><li onClick={disable}>Home</li></Link>
                        <Link href={"/resources"}><li onClick={disable}>Resources</li></Link>
                        <Link href={"/conferences"}><li onClick={disable}>Conferences</li></Link>
                        <Link href={"/secretariat"}><li onClick={disable}>Secretariat</li></Link>
                        <Link href={"/about"}><li onClick={disable}>About</li></Link>
                    </ul>
                </div>
                <div className="nav-title-m" id="nav-m">
                    <Link href={"/"}><div className="link-txt" id="special">StuyMUN</div></Link>
                    <Link href={"/"}>{FilledImage}</Link>
                </div>
            </nav>
        </div>

    </div >;
}