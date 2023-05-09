<script lang="ts" setup>
import type { Card } from '~~/types/card'

defineProps<{
  item: Partial<Card>
}>()
</script>

<template>
  <div :class="[{ 'text-center': item.centered }]" max-w-sm bg-base rounded-lg shadow-xl hover="shadow-2xl" transition-all m-auto mb-10>
    <NuxtLink :to="item._path">
      <img rounded-t-lg w-full :src="item.image" :alt="item.imageAlt ?? item.title">
    </NuxtLink>
    <div p-5>
      <NuxtLink :to="item._path">
        <h5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white>
          {{ item.title }}
        </h5>
      </NuxtLink>
      <p v-if="item.description" mb-3 font-normal text-gray-700 dark:text-gray-400>
        {{ item.description }}
      </p>
      <NuxtLink :to="item._path" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <AIcon name="uil-arrow-right" />
      </NuxtLink>
    </div>
  </div>
</template>
