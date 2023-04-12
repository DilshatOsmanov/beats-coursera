<template>
  <div id="app">
    <div class="main">    
      <MainNav />
      <router-view />
    </div> 
  </div>
</template>

<script>
  import MainNav from '@/components/MainNav.vue'

  export default {
    components: {
      MainNav
    }
  }
</script>
