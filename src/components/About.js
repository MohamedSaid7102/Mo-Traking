import { Link } from 'react-router-dom';
function About() {
  return (
    <center>
      <h2>Version 1.0.0</h2>
      <p>
        Created By &nbsp;
        <a
          href="https://www.linkedin.com/in/mohamed-shelf/"
          className="linkToMyAccout"
        >
          Mohamed Shelf
        </a>
      </p>
      <Link to="/">
        <button className="btn bnt-block">Go Back</button>
      </Link>
    </center>
  );
}

export default About;
