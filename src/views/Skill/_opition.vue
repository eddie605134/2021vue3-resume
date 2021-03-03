<template>
  <div class="skill-chart-title">
    技能掌握度 
    <span class="green"></span>
    良好
    <span class="blue"></span>
    普通
    <span class="yellow"></span>
    略懂
    <span class="gray"></span>
    待學
  </div>
  <div class="skill-chart-area">
    <div class="chart" ref="bar"></div>
  </div>
</template>
<script >
import { useBar } from '@/compositions'
import { useRoute } from 'vue-router'
import { ref, reactive ,onMounted, watch } from 'vue'
export default {
  setup () {
    const route = useRoute();
    const bar = ref(null);
    const skParam = reactive(route.params);
    let setBar;

    watch(
      ()=> route.params,
      (newval)=> {
        setBar(newval.skill);
      },{deep: true}
    );

    onMounted(()=> {
      const { setOption } = useBar(bar.value);
      setBar = setOption;
      setBar(skParam.skill);
    })

    return {
      bar,
      skParam
    }
  }
}
</script>
<style lang="scss" scoped>
  .skill-chart-title {
    width: 100%;
    height: 20%;
    padding-left: 20px;
    padding-top: 20px;
    padding: 20px 0 40px 60px;
    font-size: $home-title;
    color: $vue-color;
    display: flex;
    align-items: flex-end;
    color: $vue-under-color;
    @media (max-width: 560px) {
      padding: 5px 10px;
      font-size: 16px;
    }
    span {
      display: block;
      width: $home-title;
      height: $home-title;
      margin: 0 10px;
    }
    .blue {
      background:#5ED3F3;
    }
    .green {
      background:#42b983;
    }
    .yellow {
      background:#d4bb29;
    }
    .gray {
      background:gray;
    }
  }
  .skill-chart-area {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    .chart {
      width: 100%;
      height: 100%;
    }
  }
</style>