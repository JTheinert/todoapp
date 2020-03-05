<template>
  <div class="filter">
    <a
      v-if="filteredNr == 1"
      name="All1"
      style="text-decoration: underline;"
      @click="filter()"
    >All</a
    >
    <a
      v-else
      name="All2"
      @click="filter()">All</a>
    <a
      v-if="filteredNr == 2"
      name="notDone1"
      style="text-decoration: underline;"
      @click="filterNotDone()"
    >in Progress</a
    >
    <a
      v-else
      @click="filterNotDone()">in Progress</a>

    <a
      v-if="filteredNr == 3"
      style="text-decoration: underline;"
      @click="filterDone()"
    >Done</a
    >
    <a
      v-else
      @click="filterDone()">Done</a>
  </div>
</template>

<script>
export default{
  computed: {

    filteredNr () {
      return this.$store.state.filteredNr
    }
  },
  methods: {
    filter () {
      this.$store.state.filteredNr = 1
    },

    filterNotDone () {
      this.$store.state.filteredNr = 2
    },

    filterDone () {
      this.$store.state.filteredNr = 3
    }
  }
}
</script>

<style>
.filter {
display: flex;
margin-left: 20px;
margin-right: 20px;
color: #2a9cac;
justify-content: space-around;
margin-bottom: 10px;
}
</style>
