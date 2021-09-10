export default function Feet() {
    let year = new Date().getFullYear();

    return <footer className="text-center">
        &copy; {year} | <a href="https://github.com/pserb" rel="noreferrer" target="_blank">Paul Serbanescu</a> & <a href="https://github.com/selym3" rel="noreferrer" target="_blank">Myles Pasetsky</a>
    </footer>;
}