/** import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { DynamicLayout } from '@/themes/theme'

const NoFound = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='Layout404' {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req

  const props = (await getGlobalData({ from: '404', locale })) || {}
  return { props }
}

export default NoFound
*/


// pages/404.js
export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1>404 - Page Not Found</h1>
      <p>页面不存在，请返回首页.</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        回到首页
      </a>
    </div>
  )
}
