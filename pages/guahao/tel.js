// pages/guahao/tel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/images/banner1.jpg', '/images/banner2.jpg', '/images/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    markers: [{
      iconPath: "/images/map.png",
      id: 0,
      title:"上海江城皮肤病医院",
      latitude: 31.274330,
      longitude: 121.529770,
      width: 30,
      height: 30
    }],
  
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /****/
  daohang:function() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: 31.274330,
          longitude: 121.529770,
          name: "上海江城皮肤病医院",
          scale: 28
        })
      }
    })

  }
})
