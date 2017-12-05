// common/component/customModal.js
Component({
  /**
   * 组件的属性列表
   */
   properties: {
    title : {
      type : String,
      value : ''
    },
    
    cancelText : {
      type: String,
      value: '取消'
    },

    confirmText : {
      type: String,
      value: '确定'
    },
       
    backdrop: {
      type: Boolean,
      value: true
    },

    animated: {
      type: Boolean,
      value: true
    },

    modalSize: {
      type: String,
      value: "md"
    },    
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  ready : function(){
    //获得baseModal节点
    if (!this.selectComponent){
      throw new Error("小程序sdk暂不支持节点操作selectComponent");
    }
    this.baseModal  = this.selectComponent('#baseModal');   
  },

  /**
   * 组件的方法列表
   */
  methods: {
   
    show : function(){     
      this.baseModal.showModal();           
    },

    hide : function(){          
      this.baseModal.hideModal();
    },

    //cancel
    _cancelModal : function(){      
      this.hide();     
      this.triggerEvent("cancelEvent");
    },

    //success
    _confirmModal : function(){     
      this.triggerEvent("confirmEvent");
    }
  }
})
