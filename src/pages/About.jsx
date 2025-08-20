import "./CSS/About.css";
import { loremIpsum } from "react-lorem-ipsum";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <img
          src="src/content/images/yoshi-portrait.jpeg"
          alt="Janet's portrait"
          className="about-portrait"
        />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! I'm Janet, an author.{" "}
            {loremIpsum({
              p: 2,
              avgWordsPerSentence: 8,
              avgSentencesPerParagraph: 5,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
