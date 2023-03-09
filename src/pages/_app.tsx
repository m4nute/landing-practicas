import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from 'next/font/google'
import "~/styles/globals.css";
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from "next/router";

const inter = Inter({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {

  const router = useRouter()
  return (
    <AnimatePresence mode="wait" initial>
      <motion.div
        key={router.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .4 }}
        className='text-white'
      >
        <main className={`${inter.className} min-h-screen pt-[1rem] px-8 max-w-[1000px] mx-auto`}>
          <Component {...pageProps} />
        </main>
      </motion.div>
    </AnimatePresence>

  )
};

export default MyApp;
