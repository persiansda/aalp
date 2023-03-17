<script lang="ts" setup>
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import type { Slide } from '~~/types/slide'

// TODO: complete props
defineProps({
  slides: {
    type: Array as PropType<Slide[]>,
    required: true,
  },
  direction: {
    type: String as PropType<'rtl' | 'ltr'>,
    default: 'ltr',
  },
})

const currentIndex = ref(0)

const modules = [Navigation, Pagination]

const onSlideChange = (swiper: any) => {
  currentIndex.value = swiper.activeIndex
}
</script>

<template>
  <section>
    <div class="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
      <div class="m-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Title
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Description
        </p>
        <NuxtLink class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Button
        </NuxtLink>
      </div>
      <div
        class="relative hidden lg:mt-0 lg:col-span-5 sm:flex justify-center hero-content"
        :style="{ '--aalp-hero-color': `${slides[currentIndex].color}` }"
      >
        <div class="left_icon">
          <img src="/assets/images/icons/f.png" alt="image" title="fast">
        </div>
        <div class="right_icon">
          <img src="/assets/images/icons/shield_icon.png" alt="image" title="secure">
        </div>

        <Swiper
          id="frmae_slider"
          ref="carouselTest"
          :dir="direction"
          :modules="modules"
          navigation
          :pagination="{ clickable: true }"
          :slides-per-view="1"
          @slide-change="onSlideChange"
        >
          <SwiperSlide v-for="slide in slides" :key="slide.color">
            <img :src="slide.image" :alt="slide.name">
          </SwiperSlide>
        </Swiper>
        <div class="hero-frame">
          <img src="/assets/images/hero/frame.png" alt="frame">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero-content {
  &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 475px;
      height: 475px;
      border-radius: 100%;
      z-index: 0;
      filter: blur(77px);
      background-color: var(--aalp-hero-color);
      transition: all 0.3s ease;
  }
  .left_icon {
    position: absolute;
    left: 15px;
    bottom: 70px;
    z-index: 9999;
}

.right_icon {
    position: absolute;
    right: 15px;
    top: 70px;
    z-index: 9999;
}

.hero-frame {
  pointer-events: none;
  position: absolute;
  z-index: 999;
  width: 315px;

  img {
    width: 315px;
  }
}

.swiper {
  border-radius: 57px;

  &#frmae_slider {
    width: 307px;
    height: 630px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 5px;
      top: 5px;
      background-color: #fafdfc;
      width: calc(100% - 10px);
      height: 98%;
      border-radius: 50px;
    }

    img {
      position: absolute;
      bottom: 10px;
      left: 5px;
      width: 97%;
      height: 97%;
      border-radius: 50px;
    }
  }

  .swiper-button-next {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    z-index: 9999;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 4px);
      left: calc(50% - 4px);
      width: 8px;
      height: 8px;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      transform: rotate(45deg);
    }
  }

  .swiper-button-prev {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    z-index: 9999;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: calc(50% - 4px);
      left: calc(50% - 4px);
      width: 8px;
      height: 8px;
      border-top: 2px solid #000;
      border-right: 2px solid #000;
      transform: rotate(-135deg);
    }
  }

  .swiper-pagination {
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    list-style: none;
    z-index: 999;
  }
}
}
</style>
