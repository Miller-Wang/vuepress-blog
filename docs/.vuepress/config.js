const moment = require("moment"); // 时间插件
const nav = require("./public/config/nav"); // 头部菜单
const sidebar = require("./public/config/sidebar"); // 侧边栏菜单
const customConfig = require("../../config");

module.exports = {
  title: customConfig.title, // 标题
  description: customConfig.description, // meta中展示
  theme: "reco", // 主题reco
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: customConfig.favicon }], // 增加一个自定义的 favicon(网页标签的图标)
    ["script", { src: "/js/canvas-nest.js" }],
  ],
  base: customConfig.base, // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    logo: "/img/avatar.jpg", // 导航栏logo
    smoothScroll: true, // 页面滚动
    nav: nav, // 头部菜单
    sidebar: sidebar, // 侧边栏菜单
    sidebarDepth: 2, // 同时提取markdown中h2 和 h3 标题，显示在侧边栏上
    lastUpdated: "更新时间", // string | boolean 取每个文件最后一次 git 提交的 UNIX 时间戳
    // 博客配置
    type: "blog", // 首页主题样式
    authorAvatar: "/img/avatar.jpg", // 首页右侧头像
    mode: "light", // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    blogConfig: {
      category: {
        location: 1, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
    },
    ...customConfig.themeConfig,
  },
  plugins: [
    // 最后更新时间
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // 更新时间格式
          // 不要忘了安装 moment
          // moment.locale('zh-cn')
          // return moment(timestamp).format('YYYY年MM月DD日 HH:mm:ss');
          return new Date(timestamp).toISOString();
        },
        dateOptions: {
          hours12: false,
        },
      },
    ],
    // 看板娘
    [
      "vuepress-plugin-helper-live2d",
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: "hijiki", //   shizuku  tororo
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 150, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 135)
            hOffset: 30, //  水平偏移(default: 65)
            vOffset: -15, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false, // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8, // 模型透明度(default: 0.8)
          },
          ...customConfig.doll,
        },
      },
    ],
  ],
};
