<template>
  <footer class="border-t border-grey-500 mt-5">
    <div class="w-full mx-auto container md:py-6 py-4 px-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {{ new Date().getFullYear() }}
        <NuxtLink to="/" class="hover:underline">
          Aalp
        </NuxtLink>
        All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          Developed by
          <NuxtLink to="https://persiansda.com" target="_blank" class="mr-4 hover:underline md:mr-6 ">
            Persian SDA
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
