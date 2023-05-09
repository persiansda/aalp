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
  <div container my-24 px-6 mx-auto>
    <section mb-32>
      <img relative rounded-lg object-cover w-full class="max-h-[500px]" :src="image">
      <div container mx-auto px-6 md:px-12 xl:px-32>
        <div text-center text-primary>
          <div class="bg-white/50 backdrop-blur-lg block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12 -mt-48">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              {{ title }} <br>
              <span v-if="highlight" text-secondary>
                {{ highlight }}
              </span>
            </h1>
            <!-- TODO: button-base -->
            <NuxtLink v-if="link" inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-secondary text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:secondary hover:shadow-lg focus:secondary focus:shadow-lg focus:outline-none focus:ring-0 active:secondary active:shadow-lg transition-all>
              Get started
            </NuxtLink>
            <NuxtLink v-if="secondaryLink" inline-block px-7 py-3 text-black font-medium text-sm leading-snug bg-gray-200 text-primary text-xs leading-tight uppercase rounded hover:text-primary hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition-all>
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
