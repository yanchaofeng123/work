// pages/guahao/guahao.js
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
    //j疾病导航
    jibing_nav: [{
      mode: 'aspectFit',
      text: '医院介绍',
      src: '/images/nav2.png'
    }, {
      mode: 'aspectFit',
      text: '专家问诊',
      src: '/images/nav3.png'
    }, {
      mode: 'aspectFit',
      text: '电话预约',
      src: '/images/nav7.png'
    }, {
      mode: 'aspectFit',
      text: '医院新闻',
      src: '/images/nav2.png'
    }, {
      mode: 'aspectFit',
      text: '白癜风',
      src: '/images/nav3.png'
    }, {
      mode: 'aspectFit',
      text: '牛皮癣',
      src: '/images/nav7.png'
    }, {
      mode: 'aspectFit',
      text: '去疤痕',
      src: '/images/nav2.png'
    }, {
      mode: 'aspectFit',
      text: '青春痘',
      src: '/images/nav3.png'
    }
    ],
//医院介绍
  bankuai_img:[{
    mode: 'scaleToFill',
    text: '医院介绍',
    src: '/images/gy0.jpg'
  }, {
      mode: 'aspectFit',
    text: '盔甲宝宝',
    src: '/images/gy1.jpg'
    }, {
      mode: 'aspectFit',
      text: '牛皮癣宝宝',
      src: '/images/gy2.jpg'
  }, {
      mode: 'scaleToFill',
    text: '交流会',
    src: '/images/gy3.jpg'
  } ]
  

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
  /**
* 拨打电话方法
*/
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '02152721929',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  }
})

