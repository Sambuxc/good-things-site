<template>
  <div class="search-input__wrapper">
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      class="icon icon-search"
      viewBox="0 0 22 22">
      <path
        d="M9.625 2a7.625 7.625 0 100 15.25 7.625 7.625 0 000-15.25zm0 1.5a6.125 6.125 0 110 12.25 6.125 6.125 0 010-12.25z" />
      <path
        d="M15.148 13.947l4.213 4.213a.687.687 0 11-.972.972l-4.213-4.213a.688.688 0 01.972-.972z" />
    </svg>
    <input
      type="search"
      value=""
      placeholder="Search" />
  </div>
</template>

<script>
  export default {
    name: "SearchInput",
  }
</script>

<style lang="scss" scoped>
  .search-input__wrapper {
    @apply py-2 px-3 border-x inline-flex items-center gap-2;
  
    svg {
      @apply flex-auto;
      width: 20px;
      height: 20px;
    }

    input {
      @apply w-20 focus-visible:outline-none font-semibold;
    }
  }
</style>
