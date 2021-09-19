import getImg from "../lib/constants";

export default function Feet() {
    let year = new Date().getFullYear();

    // eslint-disable-next-line @next/next/no-img-element
    const FacebookImage = <img
        className="fbimg"
        src={getImg("/img/facebook.png")}
        alt="Facebook"
        width="30px" height="30px"
    />

    // eslint-disable-next-line @next/next/no-img-element
    const StuyActivitiesImage = <img
        className="stuyactimg"
        src={getImg("/img/stuyactivities.png")}
        alt="Stuyactivities"
        width="36px" height="36px"
    />

    return <footer className="text-center">
        &copy; {year}  
        {/* <div className="vertline"> &#124; </div> 
        <a href="https://www.facebook.com/groups/229090407136486" rel="noreferrer" target="_blank">{FacebookImage}</a>   
        &nbsp;<a href="https://stuyactivities.org/mun" rel="noreferrer" target="_blank">{StuyActivitiesImage}</a> 
        <div className="vertline"> &#124; </div>  */}
        &nbsp;<a href="https://github.com/pserb" rel="noreferrer" target="_blank">Paul Serbanescu</a> & <a href="https://github.com/selym3" rel="noreferrer" target="_blank">Myles Pasetsky</a>
        <br/>
        <a href="https://www.facebook.com/groups/229090407136486" rel="noreferrer" target="_blank">{FacebookImage}</a>   
        &nbsp;<a href="https://stuyactivities.org/mun" rel="noreferrer" target="_blank">{StuyActivitiesImage}</a> 
    </footer>;
}