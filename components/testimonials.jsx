import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./button";

function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className=' px-12 py-20'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        class='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'
      >
        <figure class='max-w-screen-md mx-auto'>
          <svg
            class='h-12 mx-auto mb-3 text-slate-400 dark:text-slate-600'
            viewBox='0 0 24 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
              fill='currentColor'
            />
          </svg>
          <blockquote>
            <p class='text-2xl font-medium text-gray-900 dark:text-white'>
              {`"`}You are the best website designer. Thanks for your service!
              {`"`}
            </p>
          </blockquote>
          <figcaption class='flex items-center justify-center mt-6 space-x-3'>
            <div class='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
              <div class='pr-3 font-medium text-gray-900 dark:text-white'>
                Hudmon
              </div>
              <div class='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                Fitness Course Writer
              </div>
            </div>
          </figcaption>
        </figure>
      </motion.div>
    </section>
  );
}

export default Testimonials;
