import { reactive, toRefs } from 'vue';

export function useSkillData() {
  const skills = reactive([
    {
      opition: 'vue相關',
      key: 1,
      barData: {
        name: [
          'veu2',
          'vue3',
          'vue-router',
          'vuex',
          'Nuxt',
          'pinia',
          'iview',
          'vuetify',
        ],
        value: [4, 4, 4, 4, 4, 4, 4, 4],
      },
      introduction:
        '有vue2與Nuxt的開發經驗，接API使用Axios庫，UI庫使用過iview(view-design)開發後台，以及使用vant開發手機版網頁。',
    },
    {
      opition: 'react相關',
      key: 2,
      barData: {
        name: [
          'JSX',
          'react-hooks api',
          'styled-component',
          'react-router-dom',
          'redux',
          'graphql',
          'mui',
        ],
        value: [4, 4, 4, 4, 4, 4, 4],
      },
      introduction:
        '自學reactHook之後的版本，喜歡react的all-in-js特性以及高自由的撰寫風格，styled-component也很有趣，react-apollo與graphql還沒使用經驗但之後想嘗試。',
    },
    {
      opition: 'Html與css相關',
      key: 3,
      barData: {
        name: [
          'sass',
          'scss',
          'css3',
          'Html5',
          'RWD',
          'bootstrap5',
          'tailwind',
        ],
        value: [4, 4, 4, 4, 4, 4, 4],
      },
      introduction:
        'css方面能使用flex、grid等佈局屬性切版，預處理器大多使用scss做開發，有抽取共用變數的習慣，scss map 與function略懂，自己寫小東西時則偏好用sass',
    },
    {
      opition: '版本控管相關',
      key: 4,
      barData: {
        name: ['git', 'gitlab'],
        value: [4, 4],
      },
      introduction:
        '有使用gitlab多人協作的經驗，主要用command line指令搭配gitlab圖形介面作管理。',
    },
    {
      opition: 'js庫與js延伸',
      key: 5,
      barData: {
        name: ['ES6+', 'typescript', 'jest', 'lodash', 'axios'],
        value: [4, 4, 4, 4, 4],
      },
      introduction:
        '除了ES6與之後的版本外，目前正在學習typescript並希望能用它實作其他物件導向語言的design pattern，有用jest寫一些測試但無實務上經驗，希望之後有機會能體驗它再開發上帶來的便利',
    },
    {
      opition: '後端與包管裡器與部屬',
      key: 6,
      barData: {
        name: ['express', 'node.js', 'yarn', 'MYSQL'],
        value: [4, 4, 4, 4, 4],
      },
      introduction:
        '後端技能還在琢磨，希望能自己弄API給自己接給前端渲染，包管理器大多選用yarn或npm，docker佈屬主要搭配windows的圖形介面使用',
    },
    {
      opition: '美術相關技能',
      key: 7,
      barData: {
        name: ['Photoshop', 'Illustrator', 'figma'],
        value: [2, 2, 2],
      },
      introduction:
        '不擅長使用，目前僅能使用基本操作、基礎去背需求以及裁切圖片、製作SVG等功能',
    },
  ]);

  return { skills };
}
