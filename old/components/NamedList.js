
export default function NamedList({ title, list }) {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {list.map((item, i) =>
                    <li key={i}>{item}</li>
                )}
            </ul>
        </div>
    );
}