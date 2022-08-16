<template lang="">
  <div class="readme">
    <div class="readme-inner">

      <div class="readme-inner-title">
        更多資訊
      </div>

      <div class="readme-inner-content">
        <a href="https://github.com/eddie605134" target="_blank" title="github" style="margin-right: 20px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class="circle">
            <path d="M150,10A140,140,0,1,0,290,150,140,140,0,0,0,150,10"></path>
          </svg>
          <img src="@/assets/photo/motto/github.svg" alt="github">
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail" style="cursor: pointer" @click="copy(phoneNumber)"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        <input v-show="false" v-model="phoneNumber" type="text" />
        <span v-if="copied" style="padding-left: 10px">已複製</span>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const phoneNumber = ref('eddie605134@gmail.com')

const { text, copy, copied, isSupported } = useClipboard();

</script>
<style lang="scss">
.readme {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  @media (max-width: 560px) {
    padding-top: 3px;
  }
  &-inner {
    width:  95%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('~@/assets/photo/material/woodsmall.png');
    border-radius: 10px;
    color: $deep-wood-color;
    box-shadow: 15px 15px 10px #27193f67;
    &-title {
      width: 85%;
      height: 38%;
      padding-bottom: 5px;
      padding-left: 10px;
      display: flex;
      align-items: flex-end;
      font-size: $home-title;
      font-weight: 300;
      /* text-shadow: 1px 1px $wood-color, -0.5px -0.5px $text-color-indeep; */
      border-bottom: 1px solid $deep-wood-color;
    }
    &-content {
      width: 85%;
      height: 62%;
      padding-left: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      a {
        display: block;
        position: relative;
        &:hover {
          .circle {
            transform: rotate(1turn);
            stroke-dashoffset: 0;
            opacity: 1;
          }
          img {
            svg {
              fill: lighten($deep-wood-color, 5);
            }
          }
        }
        .circle {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          fill: none;
          stroke: #B5CAA0;
          stroke-dasharray: 880;
          stroke-dashoffset: -440;
          stroke-width: 10px;
          opacity: 0;
          transform: rotate(90deg);
          transition: all .4s ease-in-out;
        }
        img {
          width: 50px;
          height: 50px;
          svg {
            fill: $deep-wood-color;
          }
        }
      }
    }
  }
}
</style>