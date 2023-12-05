<template>
  <div>
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2
        class="text-3xl font-extrabold leading-9 tracking-tight text-slate-800 sm:text-4xl sm:leading-10">
        {{ $route.meta.title }}
      </h2>
      <div class="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md shadow-lg bg-sky-500 hover:bg-sky-600 focus:outline-none shadow-sky-500"
            >Back Home</router-link
          >
        </div>
        <Button />
      </div>
    </div>
  </div>
</template>
<script>
  import Button from "../components/LinkButton.vue"

  export default {
    components: {
      Button,
    },
  }
</script>
