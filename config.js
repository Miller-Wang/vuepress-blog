module.exports = {
  title: "我的小站", // 网站标题
  favicon: "/img/avatar.jpg", // 网页标签的图标
  base: "/blog-site/", // 部署路径，跟创建的git仓库名一致
  themeConfig: {
    logo: "/img/avatar.jpg", // 导航栏logo
    authorAvatar: "/img/avatar.jpg", // 右侧边栏头像
    mode: "light", // auto 跟随系统，dark 暗色模式，light 亮色模式
  },

  doll: {
    enable: true, // 网站内显示小玩偶
    model: "epsilon2_1", // https://zhousiwei.gitee.io/live2d-widget.js/examples/index.html
    display: {
      position: "left", // 显示位置：left/right(default: 'right')
      width: 200, // 模型的长度(default: 135)
      height: 500, // 模型的高度(default: 135)
      hOffset: 30, //  水平偏移(default: 65)
      vOffset: -15, //  垂直偏移(default: 0)
    },
  },
};
