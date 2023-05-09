<script lang="ts" setup>
const aalp = useAalp()
</script>

<template>
  <NuxtLink v-for="item in aalp.socials" :key="item.url" :title="item.title" :to="item.url" :target="item.target" font-medium rounded-lg text="sm gray-800" mx-4>
    <Icon :name="item.icon" />
  </NuxtLink>
</template>
