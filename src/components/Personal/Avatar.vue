<template lang="">
  <div class="avatar">
    <div class="avatar-inner">
      <div class="avatar-inner-photo">
        <div class="img-area">
          <img src="@/assets/photo/me.jpg" alt="load">
        </div>
      </div>
      <div class="avatar-inner-contact">
        <div class="contact-area">
          <p>Eddie (張富鈞)</p>
          <br/>
          <p>2020 一月開始認識前端</p> 
          <p>不將自己匡限於前端</p>
          <p>慢慢探索嚮往的職涯與人生</p>
          <p>閒時看課程自修</p> 
          <p>也透過踏青游泳健身調適心靈</p> 
          <br/>
          <p>願能像靈魂急轉彎的22號</p> 
          <p>在這遙遙人生裡享受我的火花</p> 
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.avatar {
  background-image: url('~@/assets/photo/material/deepwood.png');
  grid-row: span 3 /4;
  position: relative;

  width: 80%;
  min-width: 360px;
  min-height: 720px;
  height: 95%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  z-index: -1;
  box-shadow: 15px 15px 10px #27193f67;
  @media (max-width: 1586px) {
    min-height: 630px;
  }
  @media (max-width: 1120px) {
    min-height: 600px;
  }
  @media (max-width: 560px) {
    width: 95%;
    grid-row: unset;
    min-width: 300px;
    min-height: 800px;
  }

  &-inner {
    width: 100%;
    height: 100%;
    background-image: url('~@/assets/photo/material/woodsmall.png');
    box-shadow: 1px 1px 3px 2px rgba(20%,20%,40%,0.5) inset;
    &-photo {
      width: 100%;
      height: 45%;
      @media (max-width: 1586px) {
        height: 35%;
      }
      .img-area {
        width: 75%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-top: 40px;
        margin: auto;
        position: relative;
        img {
          height: 100%;
          min-height: 200px;
          margin: auto;
          border-bottom-left-radius: 20px 500px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          z-index: 1;
          
        }
      }
    }
    &-contact {
      width: 100%;
      height: 55%;
      padding-top: 40px;
      @media (max-width: 560px) {
        padding-top: 60px;
      }
      .contact-area {
        width: 80%;
        margin: auto;
        padding-left: 8%;
        text-align: left;
        font-size: $home-title;
        font-weight: 300;
        color: $text-color-indeep;
        line-height: 30px;
      }
    }
  }
}
</style>