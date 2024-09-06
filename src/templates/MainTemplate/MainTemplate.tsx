import { ReactNode, memo, useState } from 'react'
import styles from './styles.module.scss'
import Head from 'next/head'
import { Roboto } from 'next/font/google'
// import { Navbar } from '@/components/organisms/Navbar/Navbar'
// import { Sidebar } from '@/components/organisms/Sidebar/Sidebar'
import { Footer } from '@/components/views/Footer/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

interface ComponentProps {
  headTitle?: string
  headDescription?: string
  children: ReactNode
}

export const MainTemplate: React.FC<ComponentProps> = memo(({ headTitle, headDescription, children }) => {
  //
  const [collapseSidebar, setCollapseSidebar] = useState(false)

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name='description' content={headDescription} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.layout} ${collapseSidebar ? styles.layout_collapse : ''} ${roboto.className}`}>
        {/* <div className={styles.layout_navbar}>
          <Navbar />
        </div>
        <div className={styles.layout_sidebar}>
          <Sidebar />
        </div> */}
        <main className={styles.layout_page}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
})

MainTemplate.displayName = 'MainTemplate'
