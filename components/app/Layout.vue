<script lang="ts" setup>
const scrollPosition = ref(0)

function getScrollPosition() {
  return scrollPosition.value = window.scrollY
}
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

img {
  // no select
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // no drag
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
}
</style>
