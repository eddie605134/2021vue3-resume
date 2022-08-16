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
      console.log(strs);
      const hightlighted = args.map((arg, index) => {
        const theSkill = tempStrArr.find(item => item.text === arg)
        if (theSkill) {
          return `<span style="color: ${theSkill['color']};text-decoration: underline ${theSkill['color']};">${arg}</span>`
        } else {
          return arg
        }
      })
      
      return strs.reduce((pre, cur, idx) =>(`${pre}${cur}${hightlighted[idx] ?? ''}`), '')
    }
    const tempStrArr = [
      {
        text: 'Nuxt',
        color: '#338b64',
        key: 1
      },
      {
        text: 'Vue2',
        color: '#338b64',
        key: 2
      },
      {
        text: 'React',
        color: 'rgb(37, 145, 175)',
        key: 4
      },
      {
        text: 'Vue3',
        color: '#338b64',
        key: 5
      },
      {
        text: 'Typescript',
        color: '#0076c6',
        key: 6
      },
      {
        text: 'Tailwind',
        color: '#05afce',
        key: 7
      }
    ]

    const sentence = hightlight`
      目前是一位前端工程師，主要工作內容為: 
      <ul>
        <li>1.使用Javasctipt框架開發網頁與系統前端。</li>
        <li>2.跨部門溝通協作以及同部門共同開發時git合併。</li>
        <li>3.透過串接後端的API渲染頁面，讓client端使用者操作資料的存寫。</li>
        <li>4.維護既有網站與新模組擴建。</li>
        <li>5.解決QA與使用者回報之問題。</li>
      </ul><br />
      工作上有使用${tempStrArr[1]['text']}與${tempStrArr[0]['text']}開發網頁與系統的經驗，包含有：<br />
      處理頁面路由系統權限，驗證前端資料，<br />
      多國語系或RWD等其他指定工作項目，<br />
      研究公司購買之付費工具之原文文獻，加以在專案中實作各種功能等。<br />
      <br />

      空閒時會看youtube裡codetuber們分享新資訊，<br />
      平時也透過訂閱dev新聞或透過其他開發者在社群分享等管道，<br />
      獲取新的開發資訊與技術文章。<br />
      會購買Udemy、Hahow、六角課程進修，<br />
      也會適當的踏青健身游泳旅行，調節身心平衡與放鬆，<br />
      維持自己的生活品質與健康狀態。<br />
      <br />

      目前對於${tempStrArr[2]['text']}、${tempStrArr[3]['text']}、${tempStrArr[4]['text']}、${tempStrArr[5]['text']}有興趣，<br />
      並有自己看課程研究與實作作品，<br />
      希望有機會能用${tempStrArr[2]['text']}、${tempStrArr[3]['text']}、${tempStrArr[4]['text']}、${tempStrArr[5]['text']}等技術開發專案的機會。<br />
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
  padding-bottom: 15px;
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