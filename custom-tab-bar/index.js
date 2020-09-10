// components/userTabbar/userTabbar.js
/**
 * 指路：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html
 * 注: (1)需给对应页面配置padding-bottom，文字型的约64rpx，图标型约118rpx   page{padding-bottom:xxxrpx;}
 *     (2)在tabBar对应的每一个页面的onShow生命周期中，添加以下代码【其中selected对应当前页面所处的index】
            if (typeof this.getTabBar === 'function' &&
              this.getTabBar()) {
              this.getTabBar().setData({
                selected: 0
              })
            }
 * 缺点：page的滚动条无法覆盖
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   * color: 默认颜色，取值：颜色
   * selectedColor: 当前tabBar颜色：颜色
   * style: tabBar显示形式，取值：icon 图标类样式 pic 图片样式 text 文字样式
   * tabBars: tabBar列表内容，长度>=2
   *      属性：
   *            text: 显示文本
   *            iconClass: 图标类，引用第三方图标类的时候使用，style==icon时该项必填，例如引入阿里的iconfont时，传值：iconfont 对应图标类
   *            pagePath: 页面路径，必填，点击tabBar切换的页面
   *            iconPath: 图标图片地址，style==pic时该项必填
   *            activeIconPath: 当前tabBar对应图标，非必填
   */
  data: {
    selected: 0,
    color:"blue",
    selectedColor:"red",
    tabbarPos:"bottom",
    style:"icon", //icon 图标类样式 pic 图片样式 text 文字样式
    tabBars:[
      {
        text:"列表",
        iconClass:"iconfont iconliebiao",
        pagePath:"/pages/home/home",
        iconPath:"/assets/tabBar/list.png",
        activeIconPath:'/assets/tabBar/add.png'
      },
      {
        text:"个人",
        iconClass:"iconfont iconxinjian",
        pagePath:"/pages/index/index",
        iconPath:"/assets/tabBar/person.png",
        activeIconPath:'/assets/tabBar/add.png'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
