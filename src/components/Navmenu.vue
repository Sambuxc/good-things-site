<template>
  <div class="flex items-center">
    <button
      v-if="!isMenuOpen"
      class="btn-menu"
      @click="isMenuOpen = !isMenuOpen">
      Menu
    </button>

    <Transition>
      <nav v-if="isMenuOpen">
        <div
          class="btn-close"
          @click="isMenuOpen = false">
          <svg
            class="theme-icon"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.58586 6.00008L0.292969 1.70718L1.70718 0.292969L6.00008 4.58586L10.293 0.292969L11.7072 1.70718L7.41429 6.00008L11.7072 10.293L10.293 11.7072L6.00008 7.41429L1.70718 11.7072L0.292969 10.293L4.58586 6.00008Z"
              fill="#142C73" />
          </svg>
        </div>

        <router-link
          v-for="(route, index) in getRoutes"
          :key="index"
          :to="route.path"
          >{{ route.title }}</router-link>
      </nav>
    </Transition>
  </div>
</template>

<script>
  import { mapStores, mapState } from "pinia"
  import useNavStore from "../stores/nav"

  export default {
    name: "Navmenu",

    data() {
      const routes = this.$router.options.routes
      routes.pop() // remove the last route which isnt needed for nav

      return {
        routes: routes,
        isMenuOpen: true,
      }
    },

    computed: {
      ...mapStores(useNavStore),
      ...mapState(useNavStore, ["getRoutes"])
    }
  }
</script>

<style lang="scss" scoped>
  .btn-menu {
    @apply pr-5 block;
  }

  nav {
    @apply absolute left-0 top-0 w-screen h-screen lg:relative lg:w-fit lg:h-fit flex flex-col items-center justify-center lg:flex-row gap-4 bg-white z-50;

    .btn-close {
      @apply absolute right-0 top-0 p-4 cursor-pointer lg:hidden;
    }

    a {
      @apply inline-flex items-center justify-center text-base font-semibold leading-6 hover:text-gray-600 focus:outline-none;

      &.router-link-active.router-link-exact-active {
        @apply border-b border-b-gray-600;
      }
    }
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
