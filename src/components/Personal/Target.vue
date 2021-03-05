<template lang="">
  <div class="target">
    <div class="target-inner">
      <div class="target-inner-title">
        自述
      </div>
      <div class="target-inner-content">
        <p v-html="sentence"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'target',
  setup () {
    const hightlight = (strs, ...args)=> {
      const hightlighted = args.map((arg, index) => 
      (`<span style="color: ${tempStrArr[index]['color']}">${arg}</span>`))
      
      return strs.reduce((pre, cur, index) =>`${pre}${cur}${hightlighted[index] ?? ''}`, '')
    }
    const tempStrArr = [
      {
        text: 'Nuxt',
        color: '#338b64'
      },
      {
        text: 'Vue2.x',
        color: '#338b64'
      },
      {
        text: 'React 17^',
        color: 'rgb(37, 145, 175)'
      },
      {
        text: 'Vue3',
        color: '#338b64'
      },
      {
        text: 'vue-router',
        color: '#338b64'
      },
      {
        text: 'vuex',
        color: '#338b64'
      },
    ]

    const sentence = hightlight`
      &ensp;&ensp;&ensp;&ensp;我是一位前端工程師，主要作業內容有JS與前端框架做網頁開發、維護原有網站、串接來自後端的API渲染頁面，以及處理QA回傳的BUG。之前主要使用 ${tempStrArr[0]['text']} (${tempStrArr[1]['text']}) 作為開發框架，空閒時喜歡看youtube裡codetuber們用JS或SCSS實現有趣的動畫效果。<br />
      <br/>
      之前為了比較當前熱門框架間的差異與優缺點，自學了All in Js的熱門框架${tempStrArr[2]['text']}，欲一睹去年社群上讚譽有佳的Hooks，之後接觸${tempStrArr[3]['text']}時發現新推出的composition api寫法中擁有非常多Hooks的身影，甚至生態圈的${tempStrArr[4]['text']}與${tempStrArr[5]['text']}也都坐擁了hooks的大腿，也就沒有從2.x版轉移到3.x版的震痛了，並希望之後能將其應用在工作項目中。 <br/>
      <br/>
      身處在水深又多變的前端領域裡，我目前擁有的技術及知識量不過九牛一毛，面對變化的方法就是熟悉與改變，短期希望能掌握TypeScript並在專案上有使用機會、學習Design Pattern以及PWA相關知識以及用reactNative做手機APP，中期希望使用WebGL開發網頁動畫或遊戲、學第二語言如Python做數據分析(如分析股市工具、或影像辨識)、並補齊資料結構與演算法基礎，並期許自己在不斷學習的過程保有熱忱。(2021/2月)
    `

    return {
      sentence
    }
  }
}
</script>
<style lang="scss" scoped>
.target {
  width: 100%;
  height: 100%;
  padding-bottom: 35px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &-inner {
    width: 95%;
    height: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    background-image: url('~@/assets/photo/material/woodsmall.png');
    color: $deep-wood-color;
    box-shadow: 15px 15px 10px #27193f67;
    &-title {
      width: 85%;
      height: 5%;
      padding-bottom: 5px;
      padding-left: 10px;
      display: flex;
      align-items: flex-end;
      font-size: $home-title;
      font-weight: 300;
      border-bottom: 1px solid $deep-wood-color;
    }
    &-content {
      width: 85%;
      height: 68%;
      padding-top: 20px;
      color: $text-color-indeep;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: $wood-color;
        border: 3px solid $deep-wood-color;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-track {
        background: $deep-wood-color;
        border-radius: 50%;
      }
      p {
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 1.5px;
      }
    }
  }
}
</style>