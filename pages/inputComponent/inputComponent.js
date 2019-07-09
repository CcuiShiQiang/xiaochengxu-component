// pages/inputComponent/inputCompinent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // readOnly: false,
    checkoutData: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' }
    ]
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

  onGotUserInfo: function (e) {
    console.log(e);
  },

  // 多选框
  checkboxChange: function (e) {
    console.log(e.detail.value);
  },

  onStatusChange: function () {
    console.log(11)
  },

  submit: function (e) {
    console.log(e.detail.value);
  },

  reset: function () {
    console.log('重置')
  },

  toinput: function () {
    wx.navigateTo({
      url: './inputPage/inputPage'
    })
  },

  tolabel: function () {
    wx.navigateTo({
      url: './labelPage/labelPage'
    })
  },

  topicker: function () {
    wx.navigateTo({
      url: './pickerPage/pickerPage',
    })
  },

  toradio: function () {
    wx.navigateTo({
      url: './radioPage/radioPage'
    })
  },

  toslider: function () {
    wx.navigateTo({
      url: './sliderPage/sliderPage',
    })
  },

  toswitch: function () {
    wx.navigateTo({
      url: './switchPage/switchPage',
    })
  },

  totextarea: function () {
    wx.navigateTo({
      url: './textareaPage/textareaPage',
    })
  }
})