<script  lang="ts" setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="fixed bottom-4 right-4 z-999">
    <button class="bg-blue-500 hover:bg-blue-700 transition-all text-white py-2 px-3 rounded-full" @click="scrollToTop">
      <Icon name="tabler:chevron-up" class="w-4 h-4 mb-1" />
    </button>
  </div>
</template>
