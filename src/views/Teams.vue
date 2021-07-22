<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <TeamsCard />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TeamsCard from '@/components/TeamsCard.vue'

export default {
  name: 'Home',
  components: {
    TeamsCard
  }
}
</script>
