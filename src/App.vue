<template>
  <div
    id="app"
    class="container">
    <div class="header">
      <img
        src="./components/assets/images.png"
        class="logo" >

      <h1> Vue to Do List!</h1>
    </div>
    <router-view
      default="{name: 'home'}"/>
</div></template>

<script>
import Overview from './components/Overview'
import Details from './components/Details'
import Delete from './components/Delete'
import Testing from './components/testing'

export default {
  nme: 'app',
  components: {

    Overview,
    Details,
    Delete,
    Testing
  }
}
</script>

<style>
.h1 {
font-family: "Rockwell Extr Bold", "Rockwell Bold", monospace;
font-size: 24px;
font-style: italic;
font-variant: normal;
font-weight: 700;
line-height: 26.4px;
}
* {
box-sizing: border-box;
}
.container {
max-width: 100%;
margin-left: 100px;
margin-right: 100px;
margin-top: 50px;
}
#app {
font-family: "Rockwell Extr Bold", "Rockwell Bold", monospace;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
margin-top: 30px;
font-size: 26px;
}
.logo {
margin: 20px;
height: 90px;
margin-top: 10px;
}
.header {
display: flex;
justify-content: center;
}
</style>
