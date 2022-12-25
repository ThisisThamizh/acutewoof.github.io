import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  return (
    <section className='p-12 py-20 '>
      <div className='flex flex-col max-w-screen-md gap-12 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-4xl font-extrabold text-center lg:text-6xl text-slate-900 dark:text-slate-300'>
            About Me
          </h1>
        </motion.div>
        <div className='flex flex-col gap-4 text-lg text-justify text-slate-900 dark:text-gray-400'>
          <motion.p
            ref={ref2}
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {
              "I am a 14 year old developer from Sri Lanka with a passion for web development. I specialize in using TailwindCSS, NextJS, and Firebase to create functional and visually appealing websites. I run a web development agency called "
            }
            <Link
              href='https://webtrope.github.io'
              target='_blank'
              className='text-blue-500 transition duration-150 ease-in-out dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500'
            >
              WebTrope
            </Link>
            , where I have the opportunity to work on a variety of projects for
            clients.
          </motion.p>
          <motion.p
            ref={ref3}
            initial={{ opacity: 0 }}
            animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {
              "In addition to my technical skills, I am also a strong problem-solver and enjoy the challenge of finding creative solutions to complex problems. I am always looking for new ways to improve my skills and stay up-to-date with the latest technologies and trends in the field."
            }
          </motion.p>
          <motion.p
            ref={ref4}
            initial={{ opacity: 0 }}
            animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {
              "Overall, my goal as a developer is to use my skills and knowledge to create meaningful and impactful projects that can help improve people's lives. I am excited to continue learning and growing as a developer, and I am confident that my passion and dedication will lead me to great success in the future."
            }
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
