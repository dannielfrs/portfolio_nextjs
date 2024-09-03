import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import { MainTemplate } from '@/templates/MainTemplate/MainTemplate'

const Page: NextPageWithLayout = () => {
  return (
    <div>My Portfolio</div>
  )
}

Page.getLayout = function getLayout (page: ReactElement) {
  return (
    <MainTemplate headTitle='My Portfolio'>
      {page}
    </MainTemplate>
  )
}

export default Page
