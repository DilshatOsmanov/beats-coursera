<template>
    <router-link class="main-menu__item" :to="link.link">{{ link.title }}</router-link>
</template>

<script>
export default {
  props: {
      link: {
          type: Object,
          required: true
      }
  }
}
</script>