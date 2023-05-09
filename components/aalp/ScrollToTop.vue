<script  lang="ts" setup>
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div fixed bottom-4 right-4 z-999>
    <button bg-primary shadow-lg transition-all text-white py-2 px-3 rounded-full @click="scrollToTop">
      <Icon name="tabler:chevron-up" w-4 h-4 mb-1 />
    </button>
  </div>
</template>
