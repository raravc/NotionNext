const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到公考雷达', url: 'https://gkld.us.kg' },
    { title: '联系我们获取更多帮助', url: 'https://gkld.us.kg/category/关于我' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '分享知识',
  HEO_HERO_TITLE_2: '与做题技巧',
  HEO_HERO_TITLE_3: 'GKLD.US.KG',
  HEO_HERO_TITLE_4: '助您上岸',
  HEO_HERO_TITLE_5: '多维度提供考公辅导信息',
  HEO_HERO_TITLE_LINK: 'https://yandongli.eu.org',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用技巧', url: '/tag/实用技巧' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: 'https://gkld.us.kg/article/15db7c2d-0e98-807f-88d6-f9e17e5f9a89',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://b23.tv/3rq3XXT',
  HEO_INFO_CARD_ICON2: 'fa-brands fa-bilibili',
  HEO_INFO_CARD_URL3: 'https://www.yandongli.eu.org/category/%E5%85%B3%E4%BA%8E%E6%88%91',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: '常识',
      img_1: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDR8fGJvb2t8ZW58MHx8fHwxNzM0MTY4MjU4fDA&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#989bf8',
      title_2: 'basic',
      img_2: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDExfHxib29rfGVufDB8fHx8MTczNDE2ODI1OHww&ixlib=rb-4.0.3&q=80&w=200',
      color_2: '#ffffff'
    },
    {
      title_1: '言语',
      img_1: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDE1fHxib29rfGVufDB8fHx8MTczNDE2ODI1OHww&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#57b6e6',
      title_2: 'lang',
      img_2: 'https://images.unsplash.com/photo-1520467795206-62e33627e6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDI3fHxib29rfGVufDB8fHx8MTczNDE2ODI1OHww&ixlib=rb-4.0.3&q=80&w=200',
      color_2: '#4082c3'
    },
    {
      title_1: '图推',
      img_1: 'https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDI5fHxib29rfGVufDB8fHx8MTczNDE2ODI1OHww&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#ffffff',
      title_2: 'pic',
      img_2: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_2: '#ffffff'
    },
    {
      title_1: '判断推理',
      img_1: 'https://images.unsplash.com/photo-1472905981516-5ac09f35b7f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDI5fHxib29rfGVufDB8fHx8MTczNDE2ODI1OHww&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#eb6840',
      title_2: 'think',
      img_2: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDV8fG1hdGh8ZW58MHx8fHwxNzM0MjA3MTg0fDA&ixlib=rb-4.0.3&q=80&w=200',
      color_2: '#8f55ba'
    },
    {
      title_1: '图推',
      img_1: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDE1fHx2YWNhdGlvbnxlbnwwfHx8fDE3MzQxMDcyODZ8MA&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#f29e39',
      title_2: 'pic',
      img_2: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDE3fHx2YWNhdGlvbnxlbnwwfHx8fDE3MzQxMDcyODZ8MA&ixlib=rb-4.0.3&q=80&w=200',
      color_2: '#2c51db'
    },
    {
      title_1: '申论',
      img_1: 'https://images.unsplash.com/photo-1440778303588-435521a205bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDE1fHx2YWNhdGlvbnxlbnwwfHx8fDE3MzQxMDcyODZ8MA&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#f7cb4f',
      title_2: 'writing',
      img_2: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDE3fHx2YWNhdGlvbnxlbnwwfHx8fDE3MzQxMDcyODZ8MA&ixlib=rb-4.0.3&q=80&w=200',
      color_2: '#e9572b'
    },
    {
      title_1: '面试',
      img_1: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDExfHxpbnRlcnZpZXd8ZW58MHx8fHwxNzM0MTgzMTc5fDA&ixlib=rb-4.0.3&q=80&w=200',
      color_1: '#df5b40',
      title_2: 'person',
      img_2: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMXwwfDF8c2VhcmNofDExfHxpbnRlcnZpZXd8ZW58MHx8fHwxNzM0MTgzMTc5fDA&ixlib=rb-4.0.3&q=80&w=200',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论学习',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://gkld.us.kg/article/15db7c2d-0e98-807f-88d6-f9e17e5f9a89',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
