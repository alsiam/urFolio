
export default async function Home() {

  return (
    <main className="">
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Saif Al Siam</h1>
            <p>I am a Professional Web Designer</p>
            <div className="social-links">
              <a href="https://twitter.com/alsiam_me" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/alsiam.me" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/alsiam" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/alsiam_me" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/al-siam" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
