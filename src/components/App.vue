<template>
<div>

  <router-view></router-view>

  <div class="body-border"></div>

  <menulink></menulink>

  <main-menu></main-menu>

  <a href='/' class="logo">
  Kw
  </a>

  <div class="decoration-line"></div>
</div>
</template>

<script>
import Menulink from './MenuLink.vue'
import MainMenu from './MainMenu.vue'

export default {
  components: {
    Menulink,
    MainMenu
  }
}
</script>
