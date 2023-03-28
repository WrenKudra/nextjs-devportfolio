import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Tracey Turner | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>

        <p></p>
        <p>
          I am a Full Stack Web Developer with a Fine Art and Teaching
          background.
        </p>
        <div className="image">
          <Image src="/Tracey-profile.jpg" width={336} height={328} />
        </div>
      </div>
      <div className="eduAndWork">
        <div className="edu">
          <h3>Education</h3>
          <p>My prior education is listed below:</p>
          <div className="priorEduDivs">
            <p>
              <b>HyperionDev</b> <br />
              Full Stack Web Developer Bootcamp <br />
              2023 <br />
            </p>
            <hr />
          </div>
          <div className="priorEduDivs">
            <p>
              <b>Centre of Creative Education</b> <br />
              Higher Certificate in Early Childhood Development
              <br />
              2018
            </p>
            <hr />
          </div>
          <div className="priorEduDivs">
            <p>
              <b>University of KwaZulu Natal (Pietermaritzburg)</b> <br />
              Bachelor of Arts (Fine Arts) <br />
              2010
            </p>
            <hr />
          </div>
        </div>
        <div className="work">
          <h3>Work Experience</h3>
          <div className="job">
            <p>
              <b>Preschool teacher</b> <br />
              Grantleigh CURRO school (2021-2022)
              <br />I led a class of 15 children aged 1-3, managing their
              activities and taking care of them.
            </p>
            <hr />
          </div>
          <div className="job">
            <p>
              <b>Online English Teacher</b> <br />
              (March-July 2020)
              <br />
              Taught basic English skills including reading, writing, and
              speaking to Chineese students aged 3-12.
            </p>
            <hr />
          </div>

          <div className="job">
            <p>
              <b>Kindergarten Teacher</b> <br />
              Stellenbosch Waldorf school (2018-2019)
              <br />I managed a class of children aged 3 to 6. In 2019, I was
              the chairperson of my faculty and conducted our meetings
              accordingly.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
