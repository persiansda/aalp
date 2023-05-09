<script lang="ts" setup>
useHead({
  title: '404 - Page not found',
  meta: [
    {
      name: 'description',
      content: 'This is not the page you are looking for.',
    },
  ],
})
</script>

<template>
  <div p-48>
    <AError code="404" title="Page not found" message="This is not the page you're looking for." icon="uil:file" />
  </div>
</template>
