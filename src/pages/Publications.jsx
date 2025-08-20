import { publications } from "../data/publications";
import Header from "../components/Header";
import "../pages/CSS/Publications.css";

export function Publications() {
  return (
    <div>
      <Header />
      <div className="pub-wrapper">
        <h1 className="pub-text">Publications</h1>
        <ul>
          {publications.map((pub) => (
            <li key={pub.id}>
              <a href={pub.link}>{pub.title}</a> — {pub.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Publications;
