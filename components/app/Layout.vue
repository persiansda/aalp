<script lang="ts" setup>
import '@unocss/reset/tailwind.css'

const { y: scrollPosition } = useWindowScroll()
</script>

<template>
  <div bg-base>
    <AHeader :scroll-position="scrollPosition" />

    <ABackground />

    <slot />

    <AFooter />

    <Transition name="slide-up">
      <AScrollToTop v-if="scrollPosition > 177" />
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

img {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
}
</style>
