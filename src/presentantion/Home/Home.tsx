import "./Home.css";
import { RiArrowRightUpLine } from "react-icons/ri";
export const Home = () => {
  return (
    <>
      <main className="main-container">
        <section className="section-content-one">
          <article className="header-content">
            <h3>Core features</h3>
            <h1>Develops systematically with Comet.</h1>
            <p>
              <span>Adaptable sections are ideal for </span>
              crafting versatile layouts.
            </p>
          </article>

          <article className="feature-container">
            <div className="feature-content">
              <img src="./fingerprint.png" alt="Finger-icon" />
              <h4>System analyze your data</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="learn-more">
                <span>Le</span>arn more
                <RiArrowRightUpLine />
              </p>
            </div>
            <div className="feature-content">
              <img src="./24-hours.png" alt="24-hours-icon" />
              <h4>Direct system management</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="learn-more">
                <span>Le</span>arn more
                <RiArrowRightUpLine />
              </p>
            </div>
          </article>
        </section>

        <section className="section-content-two">
          <img src="./home.jpg"></img>
        </section>
      </main>
    </>
  );
};
