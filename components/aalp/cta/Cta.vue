<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  highlight: {
    type: String,
    default: null,
    required: false,
  },
  image: {
    type: String,
    default: null,
    required: false,
  },
  link: {
    type: String,
    default: null,
    required: false,
  },
  secondaryLink: {
    type: String,
    default: null,
    required: false,
  },
})
</script>

<template>
  <div class="container my-24 px-6 mx-auto">
    <section class="mb-32">
      <div class="relative overflow-hidden bg-no-repeat bg-cover rounded-lg" :style="{ backgroundPosition: '50%', backgroundImage: `url('${image}')`, height: '500px;' }" />

      <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="text-center text-gray-800">
          <div class="bg-white/50 backdrop-blur-lg block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 -mt-48">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              {{ title }} <br>
              <span v-if="highlight" class="text-red-600">
                {{ highlight }}
              </span>
            </h1>
            <NuxtLink v-if="link" class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="#!" role="button">
              Get started
            </NuxtLink>
            <NuxtLink v-if="secondaryLink" class="inline-block px-7 py-3 text-black font-medium text-sm leading-snug bg-gray-200 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:text-red-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" href="#!" role="button">
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
