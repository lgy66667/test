// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgsrc:'https://s3.ax1x.com/2021/03/14/6BFlPf.md.jpg'
  },

  click:function() {
    let audio = wx.createInnerAudioContext();
    audio.src = "http://m10.music.126.net/20210314225730/e69961703914bf53493df400a434140b/ymusic/a9c1/47f7/e72a/eeca0e403e1aa21dc60ca590be3db3f0.mp3";
    audio.play();
  } 
})
