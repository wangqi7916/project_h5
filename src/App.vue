<template>
  <div id="app">
    <router-view name='head'/>
    <router-view name='main' :key="key"/>
    <router-view name='foot'/>
  </div>
</template>
<script>
export default {
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>>
<style lang="scss">

</style>
