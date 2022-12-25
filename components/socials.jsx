import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Socials() {
  const [ref, inView] = useInView();

  return (
    <section className='px-12 py-20'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        class='mx-auto max-w-screen-xl px-4'
      >
        <h2 class='mb-24 text-4xl lg:text-6xl font-extrabold text-center text-slate-900 dark:text-slate-300'>
          My Socials
        </h2>
        <div class='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400'>
          <Social
            name='Github'
            link='https://github.com/acutewoof'
            icon='/github.svg'
            className='dark:invert dark:hover:invert-0'
          />
          <Social
            name='Twitter'
            link='https://twitter.com/acutewoof1'
            icon='/twitter.png'
          />
          <Social
            name='Instagram'
            link='https://www.instagram.com/acutewoof/'
            icon='/instagram.png'
          />
          <Social
            name='Discord'
            link='https://discord.com/invite/9ZBmZYVrD3'
            icon='/discord.svg'
          />
          <Social
            name='YouTube'
            link='https://youtube.com/acodingwoof'
            icon='/youtube.png'
          />
        </div>
      </motion.div>
    </section>
  );
}

function Social(props) {
  const { name, link, icon, className } = props;
  return (
    <Link href={link} target='_blank'>
      <picture>
        <img
          src={icon}
          alt={name}
          className={"h-[64px] grayscale hover:grayscale-0 " + className}
        />
      </picture>
    </Link>
  );
}

export default Socials;
