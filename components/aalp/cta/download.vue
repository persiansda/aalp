<script lang="ts" setup>
const downloadCta = ref<HTMLElement>()
</script>

<template>
  <div ref="downloadCta" class="cta container m-auto z-100">
    <div class="bg-primary rounded-2xl">
      <div class="flex justify-center py-10">
        <div class="flex items-center p-16 w-1/2">
          <div class="content">
            <h2 class="text-4xl text-white font-bold mb-5">
              Download now from apple and play store
            </h2>
            <p class="text-white">
              Description
            </p>
            <div class="flex">
              <button class="bg-white text-primary rounded-full px-8 py-2 mt-5">
                <span class="text-sm">Google Play</span>
              </button>
              <button class="bg-white text-primary rounded-full px-8 py-2 mt-5 ml-5">
                <span class="text-sm">App Store</span>
              </button>
            </div>
          </div>
        </div>
        <div class="-mt-28 w-1/3">
          <div class="flex relative">
            <img class="absolute -right-16 -bottom-5" src="https://demo.persiansda.com/assets/images/about-frame.png">
            <img width="277" src="https://demo.persiansda.com/assets/images/about-frame.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cta {
  z-index: 999;
}
#backdrop {
  background-color: #041313;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0.1;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition: all .4s;
  width: 100%;
  z-index: 0;
}

.download-cta-active {
  // background: #00c7c7;
  // transition: all 0.3s ease;
  &::before {
    content: '';
    position: fixed ;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba($color: #00c7c7, $alpha: 0.3);
    transition: all 0.3s ease;
  }
}
</style>
