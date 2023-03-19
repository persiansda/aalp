<script lang="ts" setup>
const scrollPosition = ref(0)

const getScrollPosition = () => scrollPosition.value = window.scrollY
onMounted(() => window.addEventListener('scroll', getScrollPosition))
onBeforeUnmount(() => window.removeEventListener('scroll', getScrollPosition))
</script>

<template>
  <div>
    <AHeader :scroll-position="scrollPosition" />

    <ABackground />

    <slot />

    <AFooter />

    <AScrollToTop />
  </div>
</template>

<style lang="scss">
:root {
  --aalp-color-primary: #125251;
  --aalp-color-secondary: #ffbf1d;
}
</style>
