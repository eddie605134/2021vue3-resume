<template>
  <div id="modal"></div>
  <nav>
    <Header />
  </nav>
  <main>
    <router-view/>
  </main>
</template>

<script>
import Header from './components/Header/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-width: 360px;
  font-family: 'Noto Sans TC', sans-serif;
  color: #2c3e50;
}

nav {
  margin-top: 10px; 
  width: 100%;
}
main {
  width: 100%;
  height: calc(100vh - #{$nav-height});
}
</style>
