<template>
 <TheHeader></TheHeader>
 <router-view></router-view>
</template>

<script>

import TheHeader from './components/nav/TheHeader'
export default {
  name: 'App',
  components: {
    TheHeader,
    
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>