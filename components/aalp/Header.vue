<script lang="ts" setup>
defineProps({
  scrollPosition: {
    type: Number,
    default: 0,
  },
})

const { navigation } = useContent()
</script>

<template>
  <header :class="{ 'backdrop-blur-xl': scrollPosition > 17 }" w-full fixed top-0 z-99999>
    <nav px-4 py-2.5 lg:px-6 :class="{ 'bg-base bg-opacity-25! border-b border-base' : scrollPosition > 17 }">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <NuxtLink to="/" class="flex items-center">
          <img width="50" height="50" src="/assets/images/logo.png" alt="Aalp Logo">
        </NuxtLink>
        <div class="flex items-center lg:order-2">
          <AColorMode />
          <ASocials />
          <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Menu</span>
            <Icon name="tabler:menu-2" class="w-6 h-6" />
          </button>
        </div>
        <div id="mobile-menu-2" class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0" style="position: fixed;left: 50%;transform: translate(-50%, 0);">
            <li v-for="item in navigation" :key="item._path">
              <!-- class="block  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700" -->
              <NuxtLink :to="item._path" active-class="text-primary" text-base-low hover="text-base" py-2 pr-4 pl-3 transition-all>
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
