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
        <li><a href="/posts">Posts</a></li>
        <li><a href="/github">Github</a></li>
        <li><a href="https://twitter.com/brianmgonzalez">Twitter</a></li>
        <li><a href="/about">About</a></li>
      </ul>

      <div class="image">
      </div>
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
