<script>
  import LinkButton from "../components/LinkButton.vue"
  export default {
    components: {
      LinkButton,
    },
  }
</script>

<template>
  <div class="relative overflow-hidden">
    <article>
      <img src="/src/assets/article-bg-1.jpg" />
      <h2>Get online week 2021</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint voluptatum obcaecati, provident iusto impedit expedita iure alias error iste, voluptas eaque facere recusandae. Ipsa cumque quam vero voluptatum reiciendis.</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
  article {
    @apply flex flex-col gap-3 md:gap-6 p-8 lg:p-16 h-fit;

    img {
      @apply absolute left-0 top-0 z-10;
    }
    
    h2 {
      @apply p-3 sm:w-fit font-normal leading-9 tracking-tight text-5xl text-center sm:text-left sm:text-6xl bg-[#4B7A8F] text-white z-20;
    }

    p {
      @apply p-3 max-w-md bg-white text-green-700 leading-snug text-sm sm:text-base z-20;
    }
  }
</style>
