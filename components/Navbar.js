// import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { Link } from './Link';


function useScroll() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            let currScrollPos = window.pageYOffset;
            if (scrollPosition > currScrollPos) {
                document.getElementById("main-nav").style.top = "0px";
                document.getElementsByClassName("mobile-nav")[0].style.top = "0px";
            } else {
                document.getElementById("main-nav").style.top = "-84.63px";
                document.getElementsByClassName("mobile-nav")[0].style.top = "-84.63px";
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

    // eslint-disable-next-line @next/next/no-img-element
    const FilledImage = <img
        alt="MUNLOGO"
        src="/img/munlogo-transparent.png"
        width="80px" height="70px"
    />;

    return <div id="nav">

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

        <nav className="mobile-nav" role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <Link href={"/resources"}><li>Resources</li></Link>
                    <Link href={"/conferences"}><li>Conferences</li></Link>
                    <Link href={"/secretariat"}><li>Secretariat</li></Link>
                    <Link href={"/about"}><li>About</li></Link>
                </ul>
            </div>
            <div className="nav-title-m" id="nav-m">
                <Link href={"/"}><div className="link-txt" id="special">StuyMUN</div></Link>
                <Link href={"/"}>{FilledImage}</Link>
            </div>
        </nav>

    </div>;
}