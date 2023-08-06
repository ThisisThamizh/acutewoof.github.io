import Image from "next/image";
import Button from "./button";
import Header from "./header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  return (
    <section class='bg-hero dark:bg-hero-dark'>
      <Header />
      <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 gap-8'>
        <div class='mr-auto place-self-center lg:col-span-7'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 class='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
              {"Hi, I'm Vithushan."}
            </h1>
          </motion.div>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <p class='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              {
                "I'm a web developer and I run a web development agency called WebTrope. I'm also active on Discord where I can be contacted for almost anything."
              }
            </p>
          </motion.div>
          <motion.div
            ref={ref3}
            initial={{ opacity: 0 }}
            animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='flex flex-row gap-4'>
              <Button
                onClick={() => {
                  window.open("https://discord.gg/9ZBmZYVrD3");
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[18px] h-[18px]'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z'
                      clipRule='evenodd'
                    />
                  </svg>
                }
              >
                Say Hi!
              </Button>
              <Button
                onClick={() => {
                  window.open("https://www.buymeacoffee.com/acutewoof");
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-[18px] h-[18px]'
                  >
                    <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                  </svg>
                }
              >
                Buy Me A Coffee
              </Button>
              <Button
                onClick={() => {
                  window.open("/blog");
                }}
                icon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'
                  >
                    <path d='M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z' />
                  </svg>
                }
              >
                Blog
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={ref4}
          initial={{ opacity: 0 }}
          animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className='lg:col-span-5'
        >
          <Image
            src='/hero.png'
            alt='hero'
            width={500}
            height={500}
            className='rounded-lg box-shadow-lg'
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
