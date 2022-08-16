<template lang="">
  <div class="nav-list">
    <ul class="nav">
      <router-link 
        v-for="(item, index) in navItems"
        :key="item.key"
        tag="li" 
        :class="['nav-item', {'router-link-exact-active': activeIdx === index}]"
        active-class="active"
        :to="{ path: item.path }">
          <span class="nav-item-span">
            <span class="item-text">
              {{ item.itemName }}
            </span>
            <!-- <img :src="item.imgToSVG" :alt="item.itemName"> -->
            <svg v-if="item.key === 1" aria-hidden="true" focusable="false" data-prefix="far" data-icon="address-card" class="svg-inline--fa fa-address-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="width: 24px"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path></svg>
            <svg v-if="item.key === 2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-bar" class="svg-inline--fa fa-chart-bar fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="width: 24px"><path fill="currentColor" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
            <svg v-if="item.key === 3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll-h" class="svg-inline--fa fa-poll-h fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 24px"><path fill="currentColor" d="M448 432V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48zM112 192c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h128c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16H112zm0 96c-8.84 0-16-7.16-16-16v-32c0-8.84 7.16-16 16-16h64c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-64z"></path></svg>
          </span>

        </router-link>
    </ul>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router"
import { ref, reactive, watch } from 'vue'
import PersonalSVG from '@/assets/photo/motto/personal.svg'
import SkillSVG from '@/assets/photo/motto/skill.svg'
import ResumeSVG from '@/assets/photo/motto/resume.svg'
const routerNameArr = ['Home', 'Skill_opition', 'Resume']
const route = useRoute();
const activeIdx = ref(0)
const navItems = reactive(
  [
    {
      itemName: '個人資訊',
      path: '/',
      key: 1,
      imgToSVG: PersonalSVG
    },
    {
      itemName: '技能樹',
      path: '/skill',
      key: 2,
      imgToSVG: SkillSVG
    },
    {
      itemName: '作品集',
      path: '/resume',
      key: 3,
      imgToSVG: ResumeSVG
    },
])

watch(
  ()=>route.params,
  ()=> {
    routerNameArr.forEach((item, index) => {
      const currentRouteName = route.name

      if (currentRouteName === item) {
        activeIdx.value = index
      }
    })
  });
</script>
<style lang="scss">
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
          /* position: relative;
          top: -100px;
          filter: drop-shadow($text-color-inbright 0px 100px);
          z-index: 99; */
          svg {
            path {
              fill: $text-color-inbright;
            }
            
            stroke: $text-color-inbright;
          }
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
          margin-right: 4px;
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