# wx-easyModal
微信小程序 模态窗modal组件
基于微信官方组件方案 实现一个模态窗

基本模态弹窗 具备 
![image.png ](http://upload-images.jianshu.io/upload_images/326507-6d856955dd5f7b88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)

1.显示/隐藏 
2.backdrop  
3.过度动画  
4.自定义头尾 
这几部分基础功能

增强型模态弹窗 具备
![image.png](http://upload-images.jianshu.io/upload_images/326507-407dc0c48ec707d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/200)

1.基础模态弹窗功能
2.自定义内容区域
3.title自定义
4.确定取消按钮自定义


使用方式

1. copay easyModal 文件夹到 你的公共组件目录
2. 在业务page 配置json
```
{ 
  
    "usingComponents": {
      "easy-modal": "/component/easyModal/easy/easyModal",    
    }
  
}
```

3.在业务page中 引入组件
 
```
   <easy-modal  
      id="easyModal" 
      title="这个是标题 01"   
      bind:cancelEvent="_cancelEvent"  
      bind:confirmEvent="_confirmEventFirst"  
      >  <view class='modal-content'>
             <text> 这是内容部分 01 </text>     
             <text> 这是内容部分 01 </text>     
             <text> 这是内容部分 01 </text>                                             
      </view>    

</easy-modal> 

```

props配置参数
```
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
```

更详细可参考:
http://www.jianshu.com/p/cc9c9bab2c04