<template>
  <p class="item-title">{{ todo.title }}</p>
</template>

<script>
export default{
  data () {
    return {
      todo: this.$store.state.todos[this.$route.params.id]
    }
  }
}
</script>

<style>
.item-title{
color:green;
justify-content: left;
display: flex;
font-size: 35px;
}
</style>
