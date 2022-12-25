import AboutMe from "../components/aboutme";
import Hero from "../components/hero";
import Head from "next/head";
import Agency from "../components/agency";
import Testimonials from "../components/testimonials";
import WhatIUse from "../components/whatIUse";
import Socials from "../components/socials";

function App() {
  return (
    <>
      <Head>
        <title>ACuteWoof</title>
        <meta
          name='description'
          content='A web developer at WebTrope web development agency and at Networthy.'
        />
        <meta
          name='keywords'
          content='web developer, programmer, linux, mac os, hackintosh, woof os, woof, vithushan, sutharsan, sutharsan vithushan, vithushan sutharsan, vithu, acutewoof, acute woof. a cute woof'
        />
        <link rel='icon' href='https://github.com/acutewoof.png' />
        <meta name='author' content='Vithushan Sutharsan' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#000000' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='apple-mobile-web-app-title' content='ACuteWoof' />
        <meta name='application-name' content='ACuteWoof' />
      </Head>
      <main className='bg-hero dark:bg-hero-dark min-h-screen'>
        <Hero />
        <div className='bg-graph-paper dark:bg-graph-paper-dark'>
          <WhatIUse />
        </div>
        <div className='bg-wiggle dark:bg-wiggle-dark'>
          <Socials />
        </div>
        <div className='bg-graph-paper dark:bg-graph-paper-dark'>
          <AboutMe />
        </div>
        <Agency />
        <div className='bg-graph-paper dark:bg-graph-paper-dark'>
          <Testimonials />
        </div>

        <footer class='p-4 md:flex md:items-center md:justify-between md:p-6 '>
          <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022-2023{" "}
            <a href='https://flowbite.com/' class='hover:underline'>
              ACuteWoof
            </a>
            . All Rights Reserved.
          </span>
        </footer>
      </main>
    </>
  );
}

export default App;
