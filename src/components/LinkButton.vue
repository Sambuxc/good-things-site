<template>
  <a :href="link">{{ value }}</a>
</template>

<script>
  export default {
    name: "Button",
    props: {
      value: String,
      link: String,
    },
  }
</script>

<style lang="scss" scoped>
  a {
    @apply px-5 inline-flex justify-center items-center font-bold;
  }
</style>
