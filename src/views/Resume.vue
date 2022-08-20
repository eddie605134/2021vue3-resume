<template lang="">

  <teleport to='#modal'>
    <transition>
      <modal v-if="modalSwitch" :close="closeModal">
        <template #title>
          {{ modalTitle }}
        </template>
        <template #content>
          &ensp;&ensp;{{ modalContent }}
        </template>
        <template #btns>
          <MyButton type="back" text="返回" @click="closeModal()"/>
          <MyButton type="go" text="前往"/>
        </template >
      </modal>
    </transition>
  </teleport>

  <div class="resume">
    <div class="resume-inner">
      <div class="card-padding" v-for="item in resumeData.data" :key="item.id">
        <div class="card">
          <div class="card-img">
            <div class="card-img-title">{{ item.name }}</div>
            <Suspense>
              <template #default >
                <div 
                  class="card-background" 
                  :style="`background-image: url('${item.img}')`"
                  @click="goPage(item.page)"
                >
                </div>
              </template >
              <template #fallback >
                <img src="@/assets/photo/material/load.gif" alt="鳩斗">
              </template >
            </Suspense>
          </div>
          <div class="card-btns">
            <MyButton type="watch" text="細節" @click="openModal(item)"/>
            <MyButton type="go" text="前往" @click="goPage(item.page)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref, reactive, onMounted} from 'vue'
import axios from 'axios'
import modal from '@/components/common/Modal'
import MyButton from '@/components/common/MyButton'
export default {
  name: 'Resume',
  components: {
    modal,
    MyButton
  },
  setup () {
    const resumeData = reactive({data: []})
    const modalSwitch = ref(false)
    const modalTitle = ref('')
    const modalContent = ref('')

    const loadData = () => {
      return axios.get('https://eddie605134.github.io/romon30/resumePortfolio/resumePortfolio.json')
    }

    const closeModal = () => {
      modalSwitch.value = false
    }

    const openModal = (item) => {
      modalSwitch.value = true
      modalTitle.value = item.name
      modalContent.value = item.spr
    }

    const goPage = (url) => {
      window.open(url)
    }

    onMounted( async ()=> {
      try {
        const { data } = await loadData();
        resumeData.data = data
      } catch (error) {
        console.error(error)
      }
    })

    return {
      resumeData,
      modalSwitch,
      modalTitle,
      modalContent,
      closeModal,
      openModal,
      goPage
    }
  }
}
</script>
<style lang="scss" scoped>
.aaa {
  transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}
.v-enter-active,
.v-leave-active {
  transition: opacity .5s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.resume {
  width: 100%;
  padding: 50px 0;
  @media (max-width: 560px) {
    padding: 80px 0 20px 0;
  }
  &-inner {
    margin: 0 auto;
    padding: 30px;
    background: url('~@/assets/photo/material/woodsmall.png');
    border-radius: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 350px;
    gap: 10px;
    @media (max-width: 3000px) {
      width: 80%;
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
      width: 90%;
      padding: 15px 15px;
    }
    @media (max-width: 560px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 30px 20px;
    }
    @media (max-width: 560px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card-padding {
      width: 100%;
      height: 100%;
      padding: 10px;
      @media (max-width: 1586px) {
        padding: 10px 10px;
      }
      @media (max-width: 1120px) {
        padding: 10px 10px;
      }
      @media (max-width: 950px) {
        padding: 10px 10px;
      }
      .card {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.87);
        border-radius: 16px; 
        box-shadow: 2px 2px 5px #000000;
        overflow: hidden;
        cursor: pointer;
        &-img {
          width: 100%;
          height: 75%;
          position: relative;
          &-title {
            width: 100%;
            padding: 10px 0 ;
            text-align: center;
            color: azure;
            background-color: $card-outside;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 3;
            box-shadow: 1px 1px 4px rgba(0, 0, 0);
          }
          img {
            width: 100%;
            height: 100%;
          }
          background: url('~@/assets/photo/material/deepwood.png');
        }
        &-btns {
          width: 100%;
          height: 25%;
          padding: 15px 0px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: $card-outside;
        }
      }
      .card-background {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: -1;
        @media (max-width: 1586px) {
          background-size: cover;
        }
        @media (max-width: 1120px) {
          background-size: cover;
        }
        @media (max-width: 950px) {
          background-size: cover;
        }
        @media (max-width: 560px) {
          background-size: cover;
        }
        &:hover {
          transform: scale(1.1);
          transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
      }
      
    }
  }
}
</style>