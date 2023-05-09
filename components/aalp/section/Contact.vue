<template>
  <div grid place-items-center>
    <div bg-base class="w-2/3 -mt-24 py-10 px-6 rounded-lg shadow-xl">
      <!-- TODO: add info cards -->
      <form action="#" method="POST">
        <div class="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
            <div class="mt-2.5">
              <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input id="last-name" type="text" name="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="flex gap-x-4 sm:col-span-2">
            <div class="flex h-6 items-center">
              <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
              <button type="button" class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                <span class="sr-only">Agree to policies</span>
                <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
                <span aria-hidden="true" class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out" />
              </button>
            </div>
            <label id="switch-1-label" class="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our
              <NuxtLink href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</NuxtLink>.
            </label>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Let's talk
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
