import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

const Page: NextPageWithLayout = () => {
  return (
    <div>Contact</div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <div></div>
    // <LayoutAuth title='Historial'>
    //   {page}
    // </LayoutAuth>
  )
}

export default Page
