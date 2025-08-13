import { publications } from "../data/publications";

function Publications() {
  return (
    <div>
      <h1>Publications</h1>
      <ul>
        {publications.map((pub) => (
          <li key={pub.id}>
            <a href={pub.link}>{pub.title}</a> — {pub.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
