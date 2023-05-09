<template>
  <footer border="t base" mt-5>
    <div w-full mx-auto container md="flex justify-between items-center py-6" py-4 px-4>
      <span text="sm base-low" sm:text-center>
        © {{ new Date().getFullYear() }}
        <NuxtLink to="/" hover="underline text-primary">
          Aalp
        </NuxtLink>
        All Rights Reserved.
      </span>
      <ul flex flex-wrap items-center mt-3 sm:mt-0 text="sm base-low">
        <li>
          Developed by
          <NuxtLink to="https://persiansda.com" target="_blank" mr-4 hover="underline text-primary" md:mr-6>
            Persian SDA
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
