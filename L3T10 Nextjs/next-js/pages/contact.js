import Head from 'next/head'
import Image from 'next/image'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Tracey Turner | Contact</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div className="para">
        <h1>Contact</h1>
        <div>
          <b>Email:</b>{" "}
          <a href="mailto:tturner.zn@gmail.com">tturner.zn@gmail.com</a>
        </div>

        <div>
          <b>Github repository:</b>{" "}
          <a href="https://github.com/WrenKudra">
            https://github.com/WrenKudra
          </a>
        </div>

        <div>
          <b>Linkedin:</b>{" "}
          <a href="https://www.linkedin.com/in/tracey-turner-73679234/">
          https://www.linkedin.com/in/tracey-turner
          </a>
        </div>
      </div>
    </>
  );
}

{/* Styling for contact page */}
<style jsx>{`
.para {
  flex: 2;
  padding: 0rem;
  display: flex;
  flex-direction: column;
}
.para div {
  margin-top: 0.5rem;
}
`}</style>
 
export default Contact;

 