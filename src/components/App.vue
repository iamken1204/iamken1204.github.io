<template>
<div>
  <main role="main" id="main">
    <div id="waves"></div>

    <h1 class="home-hello">
      <span class="zag">Hi, I am Kettan</span>.
    </h1>

    <h1 class="home-about">
      I mainly use
      <strong>Laravel</strong>
      and
      <strong>Vue.js</strong>
      in development.
    </h1>

    <p>
      I can... <br>
      design
      <a class="dsc">database schema</a> <br>
      build websites e.g. <br>
      <a class="dsc">CMS</a>,
      <a class="dsc">backend administrator</a>, <a class="dsc">single page application</a>.
      <br>
    </p>

    <p>
      You can find more about me on <a href="https://github.com/iamken1204">Github</a>.
    </p>

  </main>

  <div class="body-border">
  </div>

  <div class="loader"></div>

  <menulink></menulink>

  <main-menu></main-menu>

  <a href='/' class="logo">
  Kw
  </a>

  <div class="decoration-line"></div>

  <!-- <footer>
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
  </footer> -->
</div>
</template>

<script>
import Menulink from './MenuLink.vue';
import MainMenu from './MainMenu.vue';

export default {
  components: {
    Menulink,
    MainMenu
  }
}
</script>
