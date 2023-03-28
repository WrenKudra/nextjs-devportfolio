import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Projects = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>All Projects</h1>
      <div className="text">
        These are some of my recent projects. I've deployed them to their own
        web addresses with Heroku and Netlify. The code can be found in my
        <a href="https://github.com/WrenKudra">Github</a>.
      </div>

      <div className="projectItem">
        <p>
          <b>My iTunes </b>
          <br /> Created with HTML, CSS, Javascript, React, Node and Express
          <br />
          View the live demo here:
          <a href="https://itunes-app2.herokuapp.com/">
            https://itunes-app2.herokuapp.com/
          </a>
        </p>
        <hr />
      </div>

      <div className="projectItem">
        <p>
          <b>Minesweeper Game</b> <br />
          Created with HTML, CSS, Javascript and React <br />
          Github repo (source code):{" "}
          <a href="https://github.com/WrenKudra/minesweeper">
            https://github.com/WrenKudra/minesweeper
          </a> <br />
          Deployed with Netlify at:{" "}
          <a href="https://main--precious-creponne-4c47fd.netlify.app/">
            https://main--precious-creponne-4c47fd.netlify.app/
          </a>

        </p>
        <hr />
      </div>
    </div>
  );
}

export default Projects;