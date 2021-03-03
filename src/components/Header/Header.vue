<template lang="">
  <div class="header">
    <Logo />
    <NavList />
  </div>
</template>
<script>
import Logo from "../common/Logo"
import NavList from "../Header/NavList"
import { ref, reactive } from 'vue'
export default {
  name: 'Header',
  components: {
    Logo,
    NavList,
  },
  setup () {
    
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: $nav-height;
    margin:  0 auto;
    display: flex;
    @media (max-width: 615px) {
      justify-content: space-around;
    }
    @media (max-width: 560px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 99;
      background: #fff;
    }
  }
</style>