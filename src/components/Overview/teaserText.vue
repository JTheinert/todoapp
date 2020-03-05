<template>
  <div>
    <div
      v-for="(todo, index) in todoList"
      :key="index">
      <p
        class="teaser-text">
        {{ todo.description }}
      </p>
    </div>
  </div>

</template>
<script>
export default {
  computed: {
    todoList () {
      return this.$store.state.todos
    }
  }
}
</script>
<style >
.teaser-text {
display: flex;
font-size: 15px;
text-align: left;
justify-content: left;
}
</style>
