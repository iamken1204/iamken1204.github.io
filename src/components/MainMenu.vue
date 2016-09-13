<template>
  <div>
    <div class="menu-close"
         @click="toggleMenu"
         :class="{ 'shown': menuShown }">
    </div>

    <section class="menu" :class="{ 'shown': menuShown }">
      <ul class="links">
        <li><router-link :to="{ path: '/' }">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
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
    }
  }
}
</script>
