<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: 'Page Title',
  },
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
})

const route = useRoute()

const paths = computed(() => {
  const cPath = route.path.substring(1).split('/')
  return cPath.map((name, i) => ({
    name: name.replace(/-/g, ' '),
    url: `/${cPath.slice(0, i + 1).join('/')}`,
    active: i === cPath.length - 1,
  }))
})
</script>

<template>
  <div h-96 flex text-center items-center style="background-image: url('/assets/images/breadcrumb.svg');background-repeat: no-repeat;background-position: center;background-size: cover;">
    <div container m-auto>
      <div>
        <h1 text-6xl font-bold capitalize>
          {{ paths[paths.length - 1].name }}
        </h1>

        <ol inline-flex items-center space-x-1 md:space-x-2 mt-5>
          <li inline-flex items-center>
            <NuxtLink to="/" inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white>
              Home
            </NuxtLink>
          </li>
          <template v-for="(item, index) in paths" :key="index">
            <Icon name="uil:angle-right" />
            <li inline-flex items-center capitalize>
              <NuxtLink :class="item.active ? 'text-gray-500' : 'text-gray-700 hover:text-blue-600  dark:hover:text-white'" :to="item.url" class="text-sm font-medium dark:text-gray-400">
                {{ item.name }}
              </NuxtLink>
            </li>
          </template>
        </ol>
      </div>
    </div>
  </div>
</template>
