// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
   
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

      //获得easyModal
    this.easyModal = this.selectComponent("#easyModal");
    this.easyModalSecond = this.selectComponent("#easyModalSecond");

    this.thridModal = this.selectComponent("#thridModal");

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


  _onShowModal : function(e){
    let type = e.currentTarget.dataset.type;
    console.log(type);
    if(type == 'first'){
      this.easyModal.show();
    }
    else if(type == 'second'){
      this.easyModalSecond.show();
    }   
    else{
      this.thridModal.showModal();
    }
  },
  

  _confirmEventFirst : function(){
    console.log("01 点击确定了!");  
    this.easyModal.hide(); 
  },

  _confirmEventSecond : function(){
    console.log("02 点击确定了!");  
    this.easyModalSecond.hide()
  },
  _cancelEvent : function(){
    console.log("点击取消!");
  }
})