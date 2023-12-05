<script>
  import SearchInput from "./components/SearchInput.vue"
  import LinkButton from "./components/LinkButton.vue"

  export default {
    name: "App",
    components: {
      SearchInput,
      LinkButton
    },
  }
</script>

<template>
  <div>
    <div class="pre-header">
      <search-input></search-input>

      <div class="flex">
        <LinkButton class="border-b-4 border-l border-b-green-700" value="Learn" link="#"></LinkButton>
        <LinkButton class="text-white bg-red-700 btn" value="Donate" link="#"></LinkButton>
      </div>
    </div>
    <header
      class="border-y border-y-gray-300"
      v-if="$route.meta.title">
      <div class="px-6 py-6 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <img src="{{ $route.meta.logo }}" />
        <h1 class="flex flex-col text-3xl leading-tight text-slate-600">
          <span>{{ $route.meta.title }}</span>
          <span class="text-xl">{{ $route.meta.subtitle }}</span>
        </h1>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .pre-header {
    @apply lg:px-16 flex justify-between transition-all duration-500;
  }
</style>