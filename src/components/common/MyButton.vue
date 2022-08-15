<template>
  <div 
    :class="['button', props.type]">
    <div class="button-text">{{ props.text }}</div>
    <div class="button-icon">
      <template v-if=" props.type == 'back'">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="backward" class="svg-inline--fa fa-backward fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M11.5 280.6l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2zm256 0l192 160c20.6 17.2 52.5 2.8 52.5-24.6V96c0-27.4-31.9-41.8-52.5-24.6l-192 160c-15.3 12.8-15.3 36.4 0 49.2z"></path></svg>
      </template>
      <template v-else-if="props.type == 'go'">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
      </template>
      <template v-else-if="props.type == 'watch'">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'go',
    },
    text: {
      type: String,
      default: 'button'
    }
  },
  setup (props) {

    return {
      props
    }
  }

};
</script>
<style lang="scss" scoped>
.button {
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 6px;
  color: azure;
  cursor: pointer;
  &.back{
    background: $warn-color;
    &:hover {
      color: $vue-under-color;
      svg {
        path {
          fill: $vue-under-color;
        }
      }
    }
  }
  &.go{
    background: $vue-color;
    &:hover {
      color: $vue-under-color;
      svg {
        path {
          fill: $vue-under-color;
        }
      }
    }
  }
  &.watch{
    background: #1a64b9;
    .button-icon {
      padding-left: 3px ;
      padding-top: 1px ;
    }
    &:hover {
      color: $warn-color;
      svg {
        path {
          fill: $warn-color;
        }
      }
    }
  }
  &-text {
    font-size: 18px;
  }
  &-icon {
    width: 16px;
    height: 16px;
  }
}
</style>