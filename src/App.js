/* eslint-disable jsx-a11y/anchor-is-valid */
import woofMusic from "./images/woof-music.png";
import rnsplash from "./images/rnsplash.png";
import landingPage from "./images/landing-page.png";
import PoygonScatter from "./images/polygon-scatter-haikei.svg";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isIntersecting;
}

function App() {
  const theme = "night";

  const ref = useRef();
  const isVis = useOnScreen(ref);

  const btnRef = useRef();
  const isBtnVis = useOnScreen(btnRef);

  const imgRef = useRef();
  const isImgVis = useOnScreen(imgRef);

  const titleRef = useRef();
  const isTitleVis = useOnScreen(titleRef);

  const nameRef = useRef();
  const isNameVis = useOnScreen(nameRef);

  useEffect(() => {
    if (isVis) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (isBtnVis) {
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }

    if (isImgVis) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }

    if (isTitleVis) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }

    if (isNameVis) {
      gsap.fromTo(nameRef.current, { opacity: 0 }, { opacity: 1, duration: 3 });
    }
  }, [isVis, isBtnVis, isImgVis, isTitleVis, isNameVis]);

  return (
    <div data-theme={theme}>
      <section id="hi">
        <div
          className="hero py-32 lg:min-h-screen bg-base-300"
          style={{
            backgroundImage: `url(${PoygonScatter})`,
            backgroundSize: "contain",
          }}
        >
          <div>
            <div className="px-26 hero-content flex-col lg:flex-row lg:gap-24">
              <div>
                <div>
                  <h1 className="text-5xl font-bold" ref={titleRef}>
                    I'm{" "}
                    <span className="text-primary" ref={nameRef}>
                      Vithushan.
                    </span>
                  </h1>
                  <p className=" py-10 text-justify " ref={ref}>
                    I have been programming for over a year, and I've recently
                    decided to start freelancing.
                    <br />
                    You can also find my videos on youtube.
                  </p>
                </div>
                <div className="flex flex-row gap-2" ref={btnRef}>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.open("https://discord.gg/9ZBmZYVrD3");
                    }}
                  >
                    Say Hi!
                  </button>
                  {
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        window.open("https://www.buymeacoffee.com/acutewoof");
                      }}
                    >
                      Buy Me A Coffee
                    </button>
                  }
                </div>
              </div>
              <img
                alt="..."
                ref={imgRef}
                src="https://media.discordapp.net/attachments/812720081024319518/1006545010252075048/Woof_Imagine_Dragons_Smokes_and_Mirrors_album_cover_mixed_with__6eae6513-a0bf-41bc-af0a-5d2c8cadb970.png?width=634&height=634"
                className="max-w-sm rounded-lg shadow-2xl hidden-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-base-300">
        <header
          className="bg-base-300 backdrop-filter backdrop-blur-sm bg-opacity-50"
          style={{
            // sticky
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <h1 className="text-secondary font-semibold tracking-wide uppercase text-lg  py-3 text-center">
            Projects
          </h1>
        </header>
        <Project
          title={
            <>
              Woof <span className="text-primary">Music</span>
            </>
          }
          description="A web music player built with React and Ant Design. Uses YouTube for streaming music from YouTube embeds, Firebase for account management, user playlists, user configuration and YouTube Music for Search, Metadata, etc."
          image={woofMusic}
          link="
          https://woof-music.web.app
          "
          gh="https://github.com/the-woofs/woof-music-r2"
          flex="flex-col"
        />
        <Project
          title={
            <>
              Woof <span className="text-primary">OS</span>
            </>
          }
          description="A simple Arch respin for users who want a quick Arch installation with a comfortable, functional eye candy experience. Qtile and Xfce editions available with the Calamares installer."
          image={
            "https://camo.githubusercontent.com/c7190dd6d86d45d3304c7e6029ddac79e45383a6eea835bd0aa50ad5025c4df7/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3633353632353931373632333832383532302f3934303937353733353931393737313638382f756e6b6e6f776e2e706e67"
          }
          link="https://woof-os.github.io"
          gh="https://github.com/woof-os"
          flex="flex-col"
        />
        <Project
          title={
            <>
              RN<span className="text-primary">Splash</span>
            </>
          }
          description="Get random images from unsplash with query and resolution. Uses Unsplash API for the images and React Daisy UI for the UI. Also randomizes the default theme coz why not."
          image={rnsplash}
          link="https://acutewoof.is-a.dev/random-unsplash"
          gh="https://github.com/acutewoof/random-unsplash"
          flex="flex-col"
        />
      </section>

      <section id="freelance-listings" className="bg-base-100">
        <header
          className="bg-base-100 backdrop-filter backdrop-blur-sm bg-opacity-50"
          style={{
            // sticky
            position: "sticky",
            top: 0,
            zIndex: 99,
          }}
        >
          <h1 className="text-secondary font-semibold tracking-wide uppercase text-lg  py-3 text-center">
            Get Something Made
          </h1>
        </header>
        <FreelanceOffer
          title={
            <>
              <span className="text-primary">$25</span> Landing Page
            </>
          }
          description="I'm offering to make you a dynamic landing page website using modern JavaScript frameworks like React JS. The website will be carefully designed and coded to give a modern, minimalistic, attractive output."
          image={landingPage}
          link="
          https://www.fiverr.com/acutewoof/build-you-a-product-landing-page
          "
          flex="flex-col"
        />

        <h1 className="text-gray-600 font-semibold tracking-wide uppercase text-lg  pb-14 text-center">
          More To Come
        </h1>
      </section>

      <footer class="footer p-10 bg-neutral text-neutral-content">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>Copyright &copy; 2022 ACuteWoof</p>
        </div>
        <div>
          <span class="footer-title">Social</span>
          <div class="grid grid-flow-col gap-4">
            <a href="https://twitter.com/acutewoof1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://youtube.com/acodingwoof">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://discord.gg/9ZBmZYVrD3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 71 55"
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="71" height="55" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://github.com/acutewoof">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
              >
                <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Project(props) {
  const { title, description, link, gh, image, flex } = props;

  const ref = useRef();
  const isVis = useOnScreen(ref);

  const imgRef = useRef();
  const isImgVis = useOnScreen(imgRef);

  const textRef = useRef();
  const isTextVis = useOnScreen(textRef);

  const buttonRef = useRef();
  const isButtonVis = useOnScreen(buttonRef);

  // animate aniRef if ref is visible
  useEffect(() => {
    if (isVis) {
      console.log("visible");
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [isVis]);

  useEffect(() => {
    if (isImgVis) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [isImgVis]);

  useEffect(() => {
    if (isTextVis) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [isTextVis]);

  useEffect(() => {
    if (isButtonVis) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [isButtonVis]);

  return (
    <>
      <div className="hero py-32 lg:min-h-screen bg-base-300">
        <div className={`px-26 hero-content ${flex} lg:flex-col lg:gap-24`}>
          <div>
            <h1 className="text-5xl font-bold" ref={ref}>
              {title}
            </h1>
            <p className=" py-10 text-justify " ref={textRef}>
              {description}
            </p>
            <div className="flex flex-row gap-2" ref={buttonRef}>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  window.open(link);
                }}
              >
                View
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.open(gh);
                }}
              >
                Github
              </button>
            </div>
          </div>
          <img
            src={image}
            alt="..."
            ref={imgRef}
            style={{
              opacity: 0,
              x: 100,
            }}
            className="max-w-screen rounded-lg shadow-2xl crop-image"
          />
        </div>
      </div>
    </>
  );
}

function FreelanceOffer(props) {
  const { title, description, link, image, flex } = props;

  const ref = useRef();
  const isVis = useOnScreen(ref);

  const imgRef = useRef();
  const isImgVis = useOnScreen(imgRef);

  const textRef = useRef();
  const isTextVis = useOnScreen(textRef);

  const buttonRef = useRef();
  const isButtonVis = useOnScreen(buttonRef);

  // animate aniRef if ref is visible
  useEffect(() => {
    if (isVis) {
      console.log("visible");
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [isVis]);

  useEffect(() => {
    if (isImgVis) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [isImgVis]);

  useEffect(() => {
    if (isTextVis) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [isTextVis]);

  useEffect(() => {
    if (isButtonVis) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    }
  }, [isButtonVis]);

  return (
    <>
      <div className="hero py-32 lg:min-h-screen bg-base-100">
        <div className={`px-26 hero-content ${flex} lg:flex-col lg:gap-24`}>
          <div>
            <h1 className="text-5xl font-bold" ref={ref}>
              {title}
            </h1>
            <p className=" py-10 text-justify " ref={textRef}>
              {description}
            </p>
            <div className="flex flex-row gap-2" ref={buttonRef}>
              <button
                className="btn btn-primary"
                onClick={() => {
                  window.open(link);
                }}
              >
                View
              </button>
            </div>
          </div>
          <img
            src={image}
            alt="..."
            ref={imgRef}
            style={{
              opacity: 0,
              x: 100,
            }}
            className="max-w-screen rounded-lg shadow-2xl crop-image"
          />
        </div>
      </div>
    </>
  );
}

export default App;
