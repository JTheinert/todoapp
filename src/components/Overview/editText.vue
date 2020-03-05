<template>
  <p class="text">
    {{ text }}
  </p>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'You can edit your todo with a just one click!'
    }

  }
}
</script>
<style >
.text{
margin-right: 10px;
display: flex;
font-size: 15px;
text-align: center;
justify-content: center;
align-items: center;
}
</style>
