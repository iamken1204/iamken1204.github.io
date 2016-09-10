<template>
  <a class="menulink zag" v-on:click="showMenu">
    Menu
  </a>
</template>

<script>
export default {
  methods: {
    showMenu () {
      this.$store.dispatch('toggleMenu')
    }
  }
}
</script>
