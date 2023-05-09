<script lang="ts" setup>
interface fetchProp {
  key: string
  path: string
  component: string
}

const props = defineProps({
  fetch: {
    type: Object as PropType<fetchProp>,
    default: null,
  },
})

const grid = ref<boolean>(true)

const fetchData = props.fetch ? await useAsyncData(props.fetch!.key, () => queryContent(props.fetch!.path).sort({ date: -1 }).where({ published: true }).find()) : null
</script>

<template>
  <div grid="~ md:cols-3">
    <template v-if="fetch">
      <component :is="fetch?.component" v-for="item in fetchData?.data.value" :key="item._id" :item="item" />
    </template>
    <template v-else>
      <slot />
    </template>
  </div>
</template>
