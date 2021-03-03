<template lang="">
  <div class="logo">
    <router-link to="/">
      <img src="@/assets/photo/logo/growMon.png" alt="">
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'logo'
}
</script>
<style lang="scss" scoped>
.logo {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  @media (max-width: 615px) {
    padding-left: 10px;
  }
  img {
    width: 80px;
    height: 100%;
  }
}
</style>