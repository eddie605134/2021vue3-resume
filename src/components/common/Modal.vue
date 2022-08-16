<template lang="">
  <div class="mask" @click.self="props.close()">
    <div class="modal-inner">
      <div class="close-btn" @click="props.close()">&times;</div> 
      <div class="modal-inner-tittle">
        <slot name='title' />
      </div>
      <div class="modal-inner-content">
        <slot name='content' />
      </div>
      <div class="modal-inner-btns">
        <slot name='btns' />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modal',
  props: {
    close: {
      type: Function,
      default: ()=>{}
    }
  },
  setup (props) {

    return {
      props
    }
  }
}
</script>
<style lang="scss" scoped>
  .mask {
    width: 100%;
    height: 100vh;
    background-color: rgba(22, 21, 21, 0.226);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 40;
    color: $vue-under-color;
    .modal-inner {
      width: 30%;
      height: 50%;
      padding: 20px;
      background: url('~@/assets/photo/material/woodsmall.png');
      border: 15px solid $card-outside;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      position: relative;
      @media (max-width: 1120px) {
        width: 50%;
      }
      @media (max-width: 680px) {
        width: 80%;
      }
      @media (max-width: 560px) {
        width: 90%;
      }
      .close-btn {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: $modal-title;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;
      }
      &-tittle {
        width: 100%;
        height: 15%;
        padding: 30px 0;
        font-size: 20px;
        color: $modal-title;
        text-align: center;
      }
      &-content {
        width: 100%;
        height: 70%;
        padding: 30px 30px 0 30px;
        font-size: 18px;
        color: $modal-text-color;
      }
      &-btns {
        width: 100%;
        height: 15%;
        padding: 15px 0px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }

    }
  }
</style>