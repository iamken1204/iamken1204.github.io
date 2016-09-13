<template>
<section>

  <router-view></router-view>

  <div class="body-border"></div>
  <div class="loader"></div>
  <menulink></menulink>
  <main-menu></main-menu>
  <a href='/' class="logo">Kw</a>
  <div class="decoration-line"></div>

  <footer>
    <section class="main">
      <ul>
        <li><a href="https://github.com/iamken1204">Github</a></li>
        <li><a href="https://twitter.com/iamken1204">Twitter</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </section>
  </footer>

</section>
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
