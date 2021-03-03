<template>
  <div class="home">
    <Readme />

    <div class="motto">
      <div class="motto-content">
        遇見新技術就好奇&nbsp;&nbsp;&nbsp;&nbsp;面對新挑戰就勇敢
      </div>
    </div>

    <Target />
    <Avatar />
  </div>
</template>

<script>
import Avatar from '@/components/Personal/Avatar';
import Readme from '@/components/Personal/Readme';
import Target from '@/components/Personal/Target';

export default {
  name: 'Home',
  components: {
    Avatar,
    Readme,
    Target
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  padding-left: 40px;
  display: grid;
  grid-template-columns: calc(61.8% - 10px) calc(38.2% - 10px);
  grid-template-rows: calc(22.2% - 15px) calc(5% - 15px) 72.8%;
  grid-auto-flow: column;
  gap: 15px 20px;
  @media (max-width: 560px) {
    padding-left: unset;
    padding: 80px 20px 20px 20px;
    grid-template-columns: 100%;
    grid-auto-rows: 100%;
    grid-auto-flow: row;
  }
}
.motto {
  width: 100%;
  height: 100%;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $text-color-inbright;
  &-content {
    width: 95%;
    margin: auto;
    padding-top: 5px;
    text-align: center;
    font-size: $home-title;
    font-weight: 500;
    text-shadow: 2px 2px 6px lighten($text-color-indeep, 10) ;
    @media (max-width: 560px) {
      font-size: 16px;
    }
  }
  
}


</style>