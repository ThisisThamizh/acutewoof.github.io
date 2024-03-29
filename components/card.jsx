import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card(props) {
  const { title, description, icon, className } = props;

  const [ref, inView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      className={
        "h-full max-w-sm border border-gray-200 shadow-md dark:border-gray-700 flex flex-col justify-between bg-approach dark:bg-approach-dark  " +
        " " +
        className
      }
    >
      <div className='flex items-center justify-center p-6 grow'>
        {icon}
      </div>
      <div className='p-5'>
        <h5 className='w-full mb-2 text-2xl font-bold tracking-tight text-left text-slate-800 dark:text-white'>
          {title}
        </h5>
        <p className='mb-3 text-lg font-normal text-justify text-gray-700 dark:text-gray-400'>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default Card;