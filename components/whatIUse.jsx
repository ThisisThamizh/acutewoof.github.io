import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function WhatIUse() {
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
          What I Use
        </h2>
        <div class='grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400'>
          <picture>
            <img
              src='/html.svg'
              alt='html'
              className='h-[64px] grayscale hover:grayscale-0'
            />
          </picture>
          <picture>
            <img
              src='/css.svg'
              alt='css'
              className='h-[64px] grayscale hover:grayscale-0'
            />
          </picture>
          <picture>
            <img
              src='/js.png'
              alt='js'
              className='h-[64px] grayscale hover:grayscale-0'
            />
          </picture>

          <picture>
            <img
              src='/react.png'
              alt='react'
              className='h-[64px] grayscale  hover:grayscale-0'
            />
          </picture>
          <picture>
            <img
              src='/next.png'
              alt='nextjs'
              className='h-[64px] dark:invert grayscale hover:grayscale-0'
            />
          </picture>
          <picture>
            <img
              src='/tailwind.png'
              alt='tailwindcss'
              className='h-[64px] grayscale hover:grayscale-0'
            />
          </picture>
          <picture>
            <img
              src='/firebase.png'
              alt='firebase'
              className='h-[64px] grayscale hover:grayscale-0'
            />
          </picture>
          <picture>
            <img
              src='/mui.png'
              alt='mui'
              className='h-[64px] grayscale hover:grayscale-0'
            />
          </picture>
        </div>
      </motion.div>
    </section>
  );
}

export default WhatIUse;
