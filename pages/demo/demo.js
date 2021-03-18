const util = require('../../utils/util.js')
let vv ;
var a = new Date();
console.log(a)
// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateF: '2020/12/04',
    name: '于立伟',
    age: 12,
    value: [1,1,1],
    cvalue: [],
    count: 100,
    openid: null,
    token: null,
    code: null,
    s: '',
    list:[{x: 0}, {x: 0}, {x: 0}, {x: 0}, {x: 0}, {x: 0}, {x: 0}, {x: 0}, {x: 0}],
    y:0,
    leftStart: '',
    leftEnd: '',
    loadImagePath: '',
    radarImg: '',
    tt: false
  },
  inputchange(e) {
    console.log(e.detail.value)
  },
  toggleArea() {
    this.setData({
      tt: true
    })
  },
  // 吃饭
  goToEat() {
    wx.navigateTo({
      url: '/pages/eat/index',
    })
  },
  changePicker(e) {
    // console.log(e.detail.value)
    var a = ["+", "-"][e.detail.value[0]];
    var b = ["1.","2.","3.","4.","5."][e.detail.value[1]];
    var c = [11,22,33,44,55][e.detail.value[2]];

    this.setData({
      value: e.detail.value,
      cvalue: [a,b,c]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.openDialog()
    console.log('ceshi')
    console.log(this.data.dateF)
    let s = new Date(this.data.dateF)
    console.log(s)
    // wx.previewImage({
    //   current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //   urls: [ // 所有图片的URL列表，数组格式
    //     'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
    //     'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    //     'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
    //   ],
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  openDialog:function(){
    var that = this;
     let ctx = wx.createCanvasContext('canvas');
     ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)
    ctx.fillRect(50, 50, 150, 100)
     console.log(ctx)
     console.log(that)
    //  ctx.draw()
     ctx.draw(true, setTimeout(()=>{
       wx.canvasToTempFilePath({
         x: 100,
         y: 200,
         width: 50,
         height: 50,
         destWidth: 100,
         destHeight: 100,
         canvasId: 'canvas',
         success: function(res) {
           console.log(res);
           let tempFilePath = res.tempFilePath;
          
           that.setData({
             as:tempFilePath
           })
         },
         fail: function(res) {
           console.log(res);
         }
       }, that);
     },500))
   },
  drawer() {
    const that = this
    const ctx = wx.createCanvasContext('asd')
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)
    ctx.fillRect(50, 50, 150, 100)
     console.log(ctx)
     console.log(that)
     ctx.draw(true,setTimeout(()=>{
      wx.canvasToTempFilePath({
        canvasId: 'canvas',
        success: function(res) {
          console.log(res);
          let tempFilePath = res.tempFilePath;
         
          that.setData({
            radarImg:tempFilePath
          }, ()=> {
            wx.saveImageToPhotosAlbum(
              {
                filePath: tempFilePath,
                success(e) {
                  console.log('图片保存成功')
                  console.log(e)
                  wx.showToast({
                    title: '保存成功',
                    icon: 'success'
                  })
                },
                fail() {
                  console.log('err')
                }
              }
            )
          })
        },
        fail: function(res) {
          console.log(res);
        }
      }, that);
    },500))
     
    // ctx.draw(true,() => {
    //   that.createImages()
    // })
    // const query = wx.createSelectorQuery()
    // query.select('#myCanvas')
    //   .fields({ node: true, size: true })
    //   .exec((res) => {
    //     console.log("res",res)
    //     const canvas = res[0].node
    //     const ctx = canvas.getContext('2d')
    //     const dpr = wx.getSystemInfoSync().pixelRatio
    //     console.log('dpr',dpr)
    //     canvas.width = res[0].width
    //     canvas.height = res[0].height
    //     ctx.arc(150, 75, 50, 0, 1 * Math.PI)
    //     ctx.strokeStyle = 'red'
    //     ctx.stroke()
    //     ctx.fillRect(0, 0, 100, 100)
    //     const that = this
    //     setTimeout(function(){
    //       that.createImages()        
    //     },1000)
    //   })
  },
  openScanCode() {
    wx.scanCode({
      success(res) {
        console.log('success');
        console.log(res)
        console.log(wx.base64ToArrayBuffer(res.rawData))
      }
    })
  },
  createImages() {
    setTimeout(function() {
      wx.canvasToTempFilePath({
        canvasId: 'myCanvas',
        success: function(res) {
            var tempFilePath = res.tempFilePath;
            console.log(tempFilePath)
            that.setData({
                loadImagePath: tempFilePath,
            });
        },
        fail: function(res) {
            console.log(res);
        }
    });
  },1000)
  },
  saveImage() {
    wx.saveImageToPhotosAlbum(
      {
        filePath: '/image/timg.gif',
        success(e) {
          console.log('图片保存成功')
          console.log(e)
          wx.showToast({
            title: '保存成功',
            icon: 'success'
          })
        },
        fail() {
          console.log('err')
        }
      }
    )
  },
  onReady: function () {
    // console.log('res')
    var a = wx.getSystemInfoSync()
    // console.log("sync",a)
    wx.getSystemInfo({
      success(res) {
        // console.log(res)
      },
      fail(err) {
        // console.log(err)
      },
      complete() {
        // console.log(12312321)
      }
    })
    // console.log('yuliwei')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const time = new Date();
    var a = util.formatTime(time);
    // console.log(a);

    // 获取子组件实例
    const child = this.selectComponent('#d1');
    // console.log(child.properties)
    const that = this;
    wx.login({
      success(e) {
        console.log(e.code)
        that.setData({
          code: e.code
        })
        let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx08b41bdada2fa3db&secret=6330d04a56c6a8e6c7544c6bbad0c279&js_code=${e.code}&grant_type=authorization_code`
        wx.request({
          url,
          success(e) {
            console.log(e)
            that.setData({
              openid: e.data.openid
            })
          }
        })
      },
      fail(e) {
        console.log(e)
      }
    })

   

    let url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx08b41bdada2fa3db&secret=6330d04a56c6a8e6c7544c6bbad0c279"
    wx.request({
      url,
      success(e) {
        console.log(e)
        that.setData({
          token: e.data.access_token
        })
      }
    })
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
   * 用户点击事件
   */
   changeText() {
     this.setData({
       name: '秦媛丽'
     })
   },
  //  双向绑定
  inputChange(e) {
    let key = e.currentTarget.dataset.name;
    let val = e.detail.value;
    this.setData({
      [key]: val
    })
  },
  getChildData(e) {
    // console.log(e.detail)
  },
  handleSubmit(e) {
    console.log(e)
  },
  dq() {
    wx.openSetting({
      withSubscriptions: true,
      success(e) {
        console.log('openSetting')
        console.log(e)
      },
      fail(e) {
        console.log(e)
        console.log('失败')
      },
      complete() {
        console.log("conplate")
      }
    })
  },
  handleSend2() {
    const that = this;
    wx.requestSubscribeMessage({
      tmplIds: ['_1VT0qAqEFcA4G286Y0VqTVSJfzp07EnsjY5DwXH0IA'],
      success(e) {
        console.log("调用成功u")
        console.log(e)
        if (e['_1VT0qAqEFcA4G286Y0VqTVSJfzp07EnsjY5DwXH0IA'] === 'accept') {
          wx.showToast({
            title: '授权成功',
            icon: 'none'
          })
        } else {
          wx.showModal({
            cancelColor: 'cancelColor',
            title: '提示',
            content: '添加失败，请在请在请在请在请在请在请在请在请在请在请在请在请在请在请在请在请在请在',
            cancelColor: '000',
            confirmText: '确定',
            confirmColor: '#008BD0',
            success() {
              console.log("成功")
            },
            fail() {
              console.log("失败")
            }
          })
          // 判断是哪种拒绝
          wx.getSetting({
            withSubscriptions: true,
            success(e) {
              console.log('getSetting')
              console.log(e)
              if (e.subscriptionsSetting['_1VT0qAqEFcA4G286Y0VqTVSJfzp07EnsjY5DwXH0IA']) {
                wx.showToast({
                  title: '打开设置',
                  icon: 'none'
                })
              } else {
                wx.showToast({
                  title: '用户拒绝授权',
                  icon: 'none'
                })
              }
            }
          })
        }
        // wx.request({
        //   url: `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=38_NEsjS9KWvBBGv830TO3pn5-Iut4prdVYszJXUeO2iutQ7Ats-zXuTbBToQ9rd_mevb20dnVb03YV804iFa_AJ5IqN540IPuZImU7hL_zmQSEynDsv79DT6cYM7UPRMHaAMCobTRq74jv-rFrYKQaAEAOAG`,
        //   method: 'POST',
        //   data: {
        //     // 7200秒内有效
        //     // access_token: "38_RGTMDzGiqRkxcPvb66Uf_BHeykFxb494k4yaj-j5H6si-81M2C7QyGwbT_Cfqtcnsq4eiGWnVqa1HCsBZjd5heS7spBTLWXLKpyistvpxLPtf4zkUPDcplgCVFPT0JXrJ02m2D0yZaZF39BLYGXfAHACKB",
        //     'touser': that.data.openid,
        //     'template_id': '_1VT0qAqEFcA4G286Y0VqTVSJfzp07EnsjY5DwXH0IA',
        //     'page': '/pages/demo/demo',
        //     'data':  {
        //       "thing1": {
        //         "value": "于立伟很帅"
        //         },
        //       "thing2": {
        //         "value": "秦媛丽很漂亮"
        //       }
        //     },
        //     'miniprogram_state': 'trial',
        //     'lang': 'zh_CN'
        //   },
        //   success(e) {
        //     console.log("没有失败啦")
        //     console.log(e)
        //   },
        //   fail() {
        //     console.log("失败啦")
        //   }
        // })
      },
      fail() {
        console.log("调用失败u")
      }
    })
  },
  handleSend() {
    const that = this;
    wx.requestSubscribeMessage({
      tmplIds: ['4b0RvyhMFckR0VpHdhefWSP3VEU4S3Qb2oBAlCOeFKU'],
      success(e) {
        console.log("调用成功u")
        console.log(e)
        if (e['4b0RvyhMFckR0VpHdhefWSP3VEU4S3Qb2oBAlCOeFKU'] === 'accept') {
          wx.showToast({
            title: '授权成功',
            icon: 'none'
          })
        } else {
          // 判断是哪种拒绝
          wx.getSetting({
            withSubscriptions: true,
            success(e) {
              console.log('getSetting')
              console.log(e)
              if (e.subscriptionsSetting['4b0RvyhMFckR0VpHdhefWSP3VEU4S3Qb2oBAlCOeFKU']) {
                wx.showToast({
                  title: '打开设置',
                  icon: 'none'
                })
              } else {
                wx.showToast({
                  title: '用户拒绝授权了',
                  icon: 'none'
                })
              }
            }
          })
        }
        // wx.request({
        //   url: `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=38_NEsjS9KWvBBGv830TO3pn5-Iut4prdVYszJXUeO2iutQ7Ats-zXuTbBToQ9rd_mevb20dnVb03YV804iFa_AJ5IqN540IPuZImU7hL_zmQSEynDsv79DT6cYM7UPRMHaAMCobTRq74jv-rFrYKQaAEAOAG`,
        //   method: 'POST',
        //   data: {
        //     // 7200秒内有效
        //     // access_token: "38_RGTMDzGiqRkxcPvb66Uf_BHeykFxb494k4yaj-j5H6si-81M2C7QyGwbT_Cfqtcnsq4eiGWnVqa1HCsBZjd5heS7spBTLWXLKpyistvpxLPtf4zkUPDcplgCVFPT0JXrJ02m2D0yZaZF39BLYGXfAHACKB",
        //     'touser': that.data.openid,
        //     'template_id': '_1VT0qAqEFcA4G286Y0VqTVSJfzp07EnsjY5DwXH0IA',
        //     'page': '/pages/demo/demo',
        //     'data':  {
        //       "thing1": {
        //         "value": "于立伟很帅"
        //         },
        //       "thing2": {
        //         "value": "秦媛丽很漂亮"
        //       }
        //     },
        //     'miniprogram_state': 'trial',
        //     'lang': 'zh_CN'
        //   },
        //   success(e) {
        //     console.log("没有失败啦")
        //     console.log(e)
        //   },
        //   fail() {
        //     console.log("失败啦")
        //   }
        // })
      },
      fail() {
        console.log("调用失败u")
      }
    })
  },
  mn() {
    const that = this
    wx.request({
      url: `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${that.data.token}`,
      method: 'POST',
      data: {
        // 7200秒内有效
        // access_token: "38_RGTMDzGiqRkxcPvb66Uf_BHeykFxb494k4yaj-j5H6si-81M2C7QyGwbT_Cfqtcnsq4eiGWnVqa1HCsBZjd5heS7spBTLWXLKpyistvpxLPtf4zkUPDcplgCVFPT0JXrJ02m2D0yZaZF39BLYGXfAHACKB",
        'touser': that.data.openid,
        'template_id': '4b0RvyhMFckR0VpHdhefWSP3VEU4S3Qb2oBAlCOeFKU',
        'page': '/pages/demo/demo',
        'data':  {
          "thing1": {
            "value": '于立伟很帅'
          },
          "thing2": {
            "value": "于立伟真的很帅"
          }
        },
        'miniprogram_state': 'trial',
        'lang': 'zh_CN'
      },
      success(e) {
        console.log("没有失败啦")
        console.log(e)
      },
      fail() {
        console.log("失败啦")
      }
    })
  },
  mn2() {
    const that = this
    wx.request({
      url: `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${that.data.token}`,
      method: 'POST',
      data: {
        // 7200秒内有效
        // access_token: "38_RGTMDzGiqRkxcPvb66Uf_BHeykFxb494k4yaj-j5H6si-81M2C7QyGwbT_Cfqtcnsq4eiGWnVqa1HCsBZjd5heS7spBTLWXLKpyistvpxLPtf4zkUPDcplgCVFPT0JXrJ02m2D0yZaZF39BLYGXfAHACKB",
        'touser': that.data.openid,
        'template_id': '_1VT0qAqEFcA4G286Y0VqTVSJfzp07EnsjY5DwXH0IA',
        'page': '/pages/demo/demo',
        'data':  {
          "thing1": {
            "value": '快来检测视力'
          },
          "thing2": {
            "value": "视力预测"
          },
          "thing3": {
            "value": "你自己"
          },
          "time4": {
            "value": "2020-10-22 10:00:00"
          }
        },
        'miniprogram_state': 'trial',
        'lang': 'zh_CN'
      },
      success(e) {
        console.log("没有失败啦")
        console.log(e)
      },
      fail() {
        console.log("失败啦")
      }
    })
  },
  test() {
    const that = this;
    wx.request({
      url: `http://172.24.106.32:3000/sendMessage?openid=${that.data.openid}`,
      success(res) {
        console.log(res)
      },
      fail(e) {
        console.log("失败")
        console.log(e)
      }
    })
  },

  htouchmove(e) {
    console.log("执行")
    console.log(e)
  },
  bindtouchend(e) {
    console.log(e)
    let leftEnd = e.changedTouches[0].pageX;
    console.log("startend")
    console.log(leftEnd)
    console.log(this.data.leftStart)
    let list = this.data.list;
    let index = e.currentTarget.dataset.key;
    if (this.data.leftStart - leftEnd > 0) {
      list.forEach((item) => {item.x = 0;})
      list[index].x = -120
      this.setData({
        list
      })
    } else {
      list[index].x = 0
      this.setData({
        list
      })
    }
  },
  bindtouchstart(e) {
    console.log(e.changedTouches[0].pageX)
    this.setData({
      leftStart: e.changedTouches[0].pageX
    })
  }
})