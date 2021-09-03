export default function NamedObject({ title, object }) {
    object = Object.entries(object);

    return (
        <div>
            <h3>{ title }</h3>
            <ul>
                {
                    object.map((entry, i) =>
                        <li key={i}>{entry[0]}: {entry[1]}</li>
                    )
                }
            </ul>
        </div>
    );
}