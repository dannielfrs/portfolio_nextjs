import { ReactNode, memo, useState } from 'react'
import styles from './LayoutAuth.module.scss'
import Head from 'next/head'
import { Roboto } from 'next/font/google'
// import { Navbar } from '@/components/organisms/Navbar/Navbar'
// import { Sidebar } from '@/components/organisms/Sidebar/Sidebar'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

interface ComponentProps {
  headTitle?: string
  headDescription?: string
  showSidebar?: boolean
  children: ReactNode
}

export const LayoutAuth: React.FC<ComponentProps> = memo(({ headTitle, headDescription, showSidebar = true, children }) => {
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
      <div className={`${styles.layout} ${collapseSidebar ? styles.layout_collapse : ''} ${showSidebar ? '' : styles.layout_hidesidebar} ${roboto.className}`}>
        <div className={styles.layout_navbar}>
          {/* <Navbar /> */}
        </div>
        {showSidebar &&
          <div className={styles.layout_sidebar}>
            {/* <Sidebar /> */}
          </div>}
        <main className={styles.layout_page}>
          {children}
        </main>
      </div>
    </>
  )
})

LayoutAuth.displayName = 'LayoutAuth'
