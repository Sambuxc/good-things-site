<script>
  import SearchInput from "./components/SearchInput.vue"

  export default {
    name: "App",
    components: {
      SearchInput,
    },
  }
</script>

<template>
  <div>
    <div class="pre-header lg:px-16">
      <search-input></search-input>
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
