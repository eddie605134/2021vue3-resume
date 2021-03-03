<template lang="">
  <div class="nav-list">
    <ul class="nav">
      <router-link 
        v-for="(item, index) in navItems"
        :key="item.key"
        tag="li" 
        :class="['nav-item', {'router-link-exact-active': idx === index}]"
        active-class="active"
        :to="{ path: item.path }">
          <span class="nav-item-span">
            <span class="item-text">
              {{ item.itemName }}
            </span>
            <img :src="require(`@/assets/photo/motto/${item.imgUrl}.svg`)" :alt="item.itemName">
          </span>

        </router-link>
    </ul>
  </div>
</template>
<script>
import { useRoute } from "vue-router"
import { ref, reactive, watch } from 'vue'
export default {
  name: 'nav-list',
  setup () {
    const routerArr = ['', 'skill', 'resume']
    const route = useRoute();
    const idx = ref(0)
    const navItems = reactive(
      [
        {
          itemName: '個人資訊',
          path: '/',
          key: 1,
          imgUrl: 'personal'
        },
        {
          itemName: '技能樹',
          path: '/skill',
          key: 2,
          imgUrl: 'skill'
        },
        {
          itemName: '作品集',
          path: '/resume',
          key: 3,
          imgUrl: 'resume'
        },
      ])

      watch(
        ()=>route.params,
        ()=> {
          routerArr.forEach((item, index) => {
            const rp = route.path.substr(1).split('/')[0]
            if (rp === item) {
              idx.value = index
            }
          })
        })

    return {
      navItems,
      idx
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-list {
  width: 60%;
  height: 100%;
  padding-top: 5px ;
  .nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 615px) {
      justify-content: flex-end;
    }
    a {
      display: block;
      padding: 0 20px ;
      font-weight: bold;
      color: $link-color;
      text-decoration: none;
      @media (max-width: 615px) {
        padding: 0 10px ;
      }
      &.router-link-exact-active {
        color: $text-color-inbright;
        img {
          position: relative;
          top: -100px;
          filter: drop-shadow($text-color-inbright 0px 100px);
        }
      }
      &:hover {
        span::before {
          transform: scaleX(1);
        }
      }
      .nav-item-span {
        z-index: 2;
        position: relative;
        display: flex;
        align-items: center;
        .item-text {
          @media (max-width: 615px) {
            display: none;
          }
        }
        &::before {
          z-index: 1;
          position: absolute;
          bottom: -2px; /*no*/ 
          left: 0; /*no*/ 
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          background-color: darken($text-color-inbright, 3);
          content: "";
          transition: all .25s cubic-bezier(1,0,0,1);
          transition-timing-function: cubic-bezier(1,0,0,1);
        }
        img {
          margin-left: 5px;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  
}
</style>