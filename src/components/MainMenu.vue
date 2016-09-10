<template>
  <div>
    <div class="menu-close"
      @click="toggleMenu"
      v-bind:class="{ 'shown': menuShown }"></div>

    <section class="menu" v-bind:class="{ 'shown': menuShown }">
      <ul class="links">
        <li><a>Home</a></li>
        <li><a>Posts</a></li>
        <li><a>Github</a></li>
        <li><a>Twitter</a></li>
        <li><a>About</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      menuShown: state => state.menuShown
    })
  },
  methods: {
    toggleMenu () {
      this.$store.dispatch('toggleMenu')
    },
    closeMenu () {}
  }
}
</script>
