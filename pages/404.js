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

import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '64px',
        color: '#1e40af',
        margin: '0 0 20px 0',
        fontWeight: 'bold'
      }}>404</h1>

      <div style={{
        marginBottom: '32px'
      }}>
        <p style={{
          fontSize: '20px',
          color: '#475569',
          marginBottom: '12px'
        }}>抱歉，该页面暂时不可用</p>
        <p style={{
          fontSize: '16px',
          color: '#64748b'
        }}>静心备考，不负时光</p>
      </div>

      <button
        onClick={() => router.push('/')}
        style={{
          backgroundColor: '#1e40af',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1e3a8a'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#1e40af'}
      >
        返回首页
      </button>
    </div>
  )
}
