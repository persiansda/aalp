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

    <Transition name="slide-up">
      <AScrollToTop v-if="scrollPosition > 177" />
    </Transition>
  </div>
</template>

<style lang="scss">
:root {
  --aalp-color-primary: #125251;
  --aalp-color-secondary: #ffbf1d;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// slide-up
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
