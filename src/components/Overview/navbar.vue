<template>
  <div>
    <a
      style="text-decoration: underline; color: #2447b9; margin-right: 20px; margin-left: 20px; border: 5px;"
      @click="home()"
    >Home</a
    >
    <a
      style="text-decoration: underline; color: #2447b9;margin-right: 20px; margin-left: 20px; border: 5px;"
      @click="deletePage()"
    >Delete</a
    >
    <a
      style="text-decoration: underline; color: #2447b9;margin-right: 20px; margin-left: 20px; border: 5px;"
      @click="testing()"
    >testing</a
    >
  </div>
</template>

<script>
export default{
  methods: {
    home () {
      this.$router.push('home')
    },
    deletePage () {
      this.$router.push('delete')
    },
    testing () {
      this.$router.push('testing')
    }
  }
}
</script>

<style>

</style>
