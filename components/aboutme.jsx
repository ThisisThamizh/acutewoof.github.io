import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  return (
    <section className='bg-graph-paper dark:bg-graph-paper-dark p-12 py-20'>
      <div className='max-w-screen-md mx-auto flex flex-col gap-12'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-6xl font-bold text-center text-slate-900 dark:text-slate-300'>
            About Me
          </h1>
        </motion.div>
        <div className='text-lg text-justify text-slate-900 dark:text-gray-400 flex flex-col gap-4'>
          <motion.p
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {
              "I am a 14 year old developer from Sri Lanka with a passion for web development. I specialize in using TailwindCSS, NextJS, and Firebase to create functional and visually appealing websites. I run a web development agency called "
            }
            <Link
              href='https://webtrope.github.io'
              target='_blank'
              className='text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500 transition ease-in-out duration-150'
            >
              WebTrope
            </Link>
            , where I have the opportunity to work on a variety of projects for
            clients.
          </motion.p>
          <motion.p
            ref={ref3}
            initial={{ opacity: 0, x: -100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {
              "In addition to my technical skills, I am also a strong problem-solver and enjoy the challenge of finding creative solutions to complex problems. I am always looking for new ways to improve my skills and stay up-to-date with the latest technologies and trends in the field."
            }
          </motion.p>
          <motion.p
            ref={ref4}
            initial={{ opacity: 0, x: -100 }}
            animate={inView4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
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
