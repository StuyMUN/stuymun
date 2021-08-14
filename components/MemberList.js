
export default function MemberList({ rank, members }) {
    return (
        <div>
            <h3>{rank}</h3>
            <ul>
                {members.map((member, i) =>
                    <li key={i}>{member}</li>
                )}
            </ul>
        </div>
    );
}