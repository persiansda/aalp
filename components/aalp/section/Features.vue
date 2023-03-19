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
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  secondaryImage: {
    type: String,
    required: false,
    default: null,
  },
  reverse: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <section class="relative py-32 bg-white overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="md:flex items-center justify-center">
        <div class="w-full md:w-1/2 p-8 relative">
          <img class="animate-hover" :src="image" :alt="`${highlight ?? ''} ${title}`">
          <div v-if="secondaryImage" class="absolute top-1/4 right-28 rounded-2xl">
            <img src="https://demo.persiansda.com/assets/images/about-screen.png" alt="">
            <!-- transform hover:-translate-y-16 transition ease-in-out duration-1000 -->
          </div>
        </div>
        <div class="w-full md:w-1/3">
          <div class="block">
            <h2 class="mb-6 text-primary text-5xl font-bold font-heading tracking-px-n leading-tight">
              <span v-if="highlight" class="text-secondary">{{ highlight }}</span> {{ title }}
            </h2>
            <p class="text-lg">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.animate-hover{
  animation: hover 3s linear infinite;
}

@keyframes hover {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
