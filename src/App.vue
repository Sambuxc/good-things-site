<script>
  import SearchInput from "./components/SearchInput.vue"
  import LinkButton from "./components/LinkButton.vue"
  import Navmenu from "./components/Navmenu.vue"

  export default {
    name: "App",
    components: {
      SearchInput,
      LinkButton,
      Navmenu,
    },
  }
</script>

<template>
  <div>
    <div class="pre-header">
      <search-input></search-input>

      <div class="flex">
        <LinkButton
          class="border-b-4 border-l border-b-green-700"
          value="Learn"
          link="#"></LinkButton>
        <LinkButton
          class="text-white bg-red-700 btn"
          value="Donate"
          link="#"></LinkButton>
      </div>
    </div>

    <header v-if="$route.meta.title">
      <div class="inner-wrapper">
        <div class="inline-flex">
          <img
            src="../src/assets/logo.png"
            width="60"
            height="40" />
          <h1 class="flex flex-col text-3xl leading-none text-slate-600">
            <span>Good Things</span>
            <span class="text-xl">Foundation</span>
          </h1>
        </div>

        <Navmenu />
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .pre-header,
  header .inner-wrapper {
    @apply transition-all duration-500;
  }

  .pre-header {
    @apply lg:px-16 flex justify-between;
  }

  header {
    @apply py-3 flex border-y border-y-gray-300;

    .inner-wrapper {
      @apply lg:px-16 w-full flex items-center justify-between;
    }
  }
</style>
