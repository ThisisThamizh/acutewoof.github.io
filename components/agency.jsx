import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./button";

function Agency() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <section className='px-12 py-20'>
      <div className='flex flex-col max-w-screen-md gap-12 mx-auto'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-4xl font-extrabold text-center lg:text-6xl text-slate-900 dark:text-slate-300'>
            WebTrope
          </h1>
        </motion.div>
        <div className='flex flex-col gap-12'>
          <motion.div
            ref={ref2}
            initial={{ opacity: 0 }}
            animate={inView2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className='flex flex-col gap-4'
          >
            <p className='text-lg text-justify text-slate-900 dark:text-gray-400'>
              {
                "At WebTrope, we believe that every business, regardless of its size, should have a professional online presence. That's why we work closely with our clients to create custom websites that perfectly capture their unique vision and brand. Whether you're a small business owner, a blogger, or an individual looking to showcase your work online, our team has the skills and expertise to bring your vision to life."
              }
            </p>
            <div>
              <Button
                onClick={() => {
                  window.open("https://webtrope.github.io", "_blank");
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Agency;
