<script lang="ts" setup>
defineProps({
  scrollPosition: {
    type: Number,
    default: 0,
  },
})

const aalp = useAalp()

const { navigation } = useContent()
</script>

<template>
  <header :class="{ 'backdrop-blur-xl': scrollPosition > 17 }" class="w-full fixed top-0" style="z-index: 99999;">
    <nav class="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NuxtLink to="/" class="flex items-center">
          <img width="50" height="50" src="/assets/images/logo.png" alt="Aalp Logo">
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <ASocials />
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Menu</span>
            <Icon name="tabler:menu-2" class="w-6 h-6" />
          </button>
        </div>
        <div id="mobile-menu-2" class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" style="position: fixed;left: 50%;transform: translate(-50%, 0);">
            <li v-for="item in navigation" :key="item._path">
              <NuxtLink :to="item._path" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
