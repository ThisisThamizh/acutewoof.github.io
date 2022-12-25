import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className='px-12 py-20 overflow-x-hidden'>
      <div class='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          class='mx-auto max-w-screen-sm'
        >
          <h2 class='mb-4 text-4xl lg:text-6xl font-extrabold text-center text-slate-900 dark:text-slate-300'>
            Testimonials
          </h2>
          <p class='mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
            {
              "Don't just take my word about my service, here's what my clients have to say."
            }
          </p>
        </motion.div>
        <div class='grid mb-8 lg:mb-12 lg:grid-cols-2'>
          <Testimony
            name='Vincent'
            title='Founder of Ajez Media'
            text='He has built an amazing website for my agency and has fulfilled every request and small detail I needed to fix, absolutely worth my money, will do business with him again.'
          />
          <Testimony
            name='Hudmon'
            title='Fitness Writer'
            text='He has done such a good job. Despite his young age, he works like a machine and fulfilled all requests. Every penny I gave him was worth it.'
          />
        </div>
      </div>
    </section>
  );
}

function Testimony(props) {
  const [ref, inView] = useInView();
  const { name, title, text } = props;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <figure class=' h-full flex flex-col justify-center items-center p-8 text-center md:p-12'>
        <blockquote class='mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400'>
          <p class='my-4'>
            {`"`}
            {text}
            {`"`}
          </p>
        </blockquote>
        <figcaption class='flex justify-center items-center space-x-3'>
          <div class='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
            <div class='pr-3 font-medium text-gray-900 dark:text-white'>
              {name}
            </div>
            <div class='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
              {title}
            </div>
          </div>
        </figcaption>
      </figure>
    </motion.div>
  );
}

export default Testimonials;
