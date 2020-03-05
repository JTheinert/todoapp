<template>
  <div>
    <div>
      <div
        v-if="todo.used == 1"
        class="status-item">
        <p style="color:darkgoldenrod;">in progress</p>
      </div>
      <div
        v-if="todo.used == 2"
        class="status-item">
        <p class="done">Done</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      todo: this.$store.state.todos
    }
  },
  computed: {

  }
}
</script>
<style >
.status-item {
display: block;
align-items: left;
border: 1px;
font-size: 20px;
text-align: center;
}
.done {
color: green;
}
.progress {
color: darkgoldenrod;
}
</style>
