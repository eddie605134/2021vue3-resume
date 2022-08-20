<template lang="">
  <div class="skill">
    <!-- phone size -->
    <div class="skill-select">
      <select class="skill-select-inner" v-model="opitionKey" @change="selectRoute($event)">
        <option 
          v-for="item in skillData"
          :key="item.key"
          :selected="opitionKey === 1"
          :value="item.key">
            {{item.opition}}
        </option>
      </select>
    </div>

    <div class="skill-chart">
      <router-view />
    </div>

    <!-- pc size -->
    <div class="check-skill">
      <div class="check-skill-inner">
        <router-link 
        v-for="item in skillData"
        :key="item.key"
        :to="{name: 'Skill_opition', params:{skill: item.key}}">
          <div class="relation" :id="`relation${item.key}`">
            <div class="relation-inner">
              {{item.opition}}
            </div>
            </div>
        </router-link>
      </div>
    </div>
    <div class="skill-application">
      <div class="skill-application-inner">
        製作完此頁面一年多後，深覺量化技能掌握度太過自大，<br/>
        故將此頁面數據一律調成4，並把目前不會的技能去除<br/>
        新的技能頁面 -> <a href="https://cheery-cucurucho-f89aa1.netlify.app/orders" target="_blank" style="color: black; text-decoration: none;">https://cheery-cucurucho-f89aa1.netlify.app/orders</a>
      </div>
    </div>
  </div>
</template>
<script>
import {ref, reactive, onMounted, watch} from 'vue'
import { useSkillData } from '@/compositions'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'skill',
  setup () {
    const route = useRoute();
    const router = useRouter();
    const { skills } = useSkillData();
    const skillData = reactive(skills)
    const introduction = ref('')
    const opitionKey = ref(1)

    const selectRoute = () => {
      router.push({name: 'Skill_opition', params:{skill: opitionKey.value}})
    }

    watch(
      ()=> route.params,
      (newVal)=> {
        const ps = parseInt(newVal.skill)
        introduction.value = skills?.filter(it=> it.key === ps)[0]?.introduction
      }, {deep: true})

    onMounted(()=> {
      const ps = parseInt(route.params.skill) 
      introduction.value = skills.filter(it=> it.key === ps)[0]?.introduction
    })
    
    return {
      skillData,
      introduction,
      opitionKey,
      selectRoute
    }
  }
}
</script>
<style lang="scss">


.skill {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: calc(55% - 15px) 45%;
  grid-template-rows: 45% calc(55% - 15px);
  gap: 15px;
  grid-auto-flow: column;
  @media (max-width: 1586px) {
    grid-template-rows: 70% calc(30% - 15px);
  }
  @media (max-width: 560px) {
    grid-template-columns: 100%;
    grid-template-rows:  20% 80% 50%;
    grid-auto-flow: row;
  }
  .skill-select {
    display: none;
    @media (max-width: 560px) {
      padding-top: 100px;
      display: block;
      margin: auto;
    }
    select {
      width: 95%;
      padding: 10px 3px;
    }
  }
  .skill-chart {
    grid-row: span 2 / 3;
    @media (max-width: 560px) {
      grid-row: unset;
    }
  }
  .check-skill {
    padding: 10px 20px 10px 20px;
    @media (max-width: 560px) {
      display: none;
    }
    &-inner {
      width: 95%;
      min-width: 600px;
      min-height: 327px;
      height: 100%;
      margin: 0 auto;
      padding: 10px 24px;
      background-image: url('~@/assets/photo/material/deepwood.png');
      background-color: rgba(223, 150, 41, 0.671);
      box-shadow: 3px 3px 5px rgba(10, 20, 34, 0.774);
      border-radius: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 10px;
      justify-content: center;
      align-items: center;
      justify-items: center;
      align-self: center;
      @media (max-width: 1586px) {
        width: 60%;
        min-width: 500px;
        min-height: 327px;
      }
      a {
        display: block;
        color: rgb(210, 244, 255);
        text-decoration: none;
        &.router-link-exact-active {
          .relation {
            border-radius: 50%;
            font-size: 20px;
            color: darken($vue-color, 7);
            padding: 8px 6px 0px 6px;
          }
        }  
        .relation {
          width: 140px;
          height: 140px;
          padding: 0px 8px;
          background-image: url('~@/assets/photo/material/woodsmall.png');
          font-size: 20px;
          font-weight: 500;
          text-align: center;
          line-height: 1.5;
          border-radius: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 3px 3px 1px #000000;
          transition: .5s;
          &:hover {
            box-shadow: 0px 5px 4px -4px $text-color-indeep;
            color: lighten($link-color, 3);
          }
          @media (max-width: 1120px) {
            width: 120px;
            height: 120px;
            font-size: 18px;
          }
          &-inner {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }

  .skill-application {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 60px;
    @media (max-width: 1586px) {
      padding-bottom: 20px;
    }
    &-inner {
      width: 80%;
      height:60%;
      padding: 30px;
      font-size: 18px;
      background: #6bb8ad71;
      border: 2px solid #dcecea83;
      border-right: 10px solid #06dabdf6;
      border-radius: 16px 0 0 16px;
      color: lighten($vue-under-color, 10) ;
      font-size: 20px;
      letter-spacing: 2px;
      line-height: 1.5;
      @media (max-width: 1586px) {
        height:80%;
        font-size: 16px;
        padding: 20px;
      }
      @media (max-width: 560px) {
        margin: auto;
      }
    }
  }
}



</style>