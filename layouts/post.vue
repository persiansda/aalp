<script lang="ts" setup>
const { page } = useContent()

const route = useRoute()

const [prev, next] = await queryContent('/blog/')
  .only(['_path', 'title'])
  .sort({ date: 1 })
  .findSurround(route.path)
</script>

<template>
  <div>
    <ABreadcrumb />
    <section class="p-20 -mt-36">
      <div class="container bg-white p-10 shadow-xl rounded-xl">
        <div class="flex justify-center">
          <img class="rounded-xl" :src="page.image" :alt="page.title">
        </div>
        <hr class="my-10">
        <slot />
        <hr class="my-10">
        <div class="flex justify-between">
          <NuxtLink v-if="prev" :to="prev._path" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Previous
          </NuxtLink>
          <div class="links">
            <Icon name="uil:github" />
          </div>
          <NuxtLink v-if="next" :to="next._path" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Next
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
body {
  background: #f5f5f5;
}
</style>
