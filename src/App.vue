<template>
  <div class="bg-[#111111] text-white">
    <div class="max-w-screen min-h-screen">
      <div class="w-11/12 mx-auto pt-3">
        <div class="flex justify-between">
          <div class="flex flex-row items-center">
            <img
              src="./assets/repofi-r.svg"
              class="h-12 md:h-20 xl:h-14 mr-2"
              alt="repofi-logo"
            />
            <p class="font-logo text-2xl md:text-3xl xl:text-2xl -mb-[6px]">
              RepoFi
            </p>
          </div>
          <div class="flex items-center">
            <div class="w-fit mx-auto mr-3 2xl:mr-7 rounded-md">
              <a href="https://twitter.com/repofime" target="_blank">
                <img
                  src="./assets/twitter-white.svg"
                  class="w-10 md:w-12 xl:w-10 px-[2px] py-[7px] 2xl:w-14 rounded-full"
                  alt="Follow our Twitter!"
                />
              </a>
            </div>
            <div class="w-fit mx-auto rounded-md">
              <a href="https://discord.gg/sJu3cyWpzz" target="_blank">
                <img
                  src="./assets/discord-white.svg"
                  class="w-12 md:w-14 xl:w-12 px-1 py-2 2xl:w-16"
                  alt="Join the community in our Discord"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 mx-auto overflow-clip">
        <!-- <h2
        class="text-5xl w-10/12 mx-auto text-center mt-32 font-heading bg uppercase font-normal"
      >
        It pays to be you
      </h2>
      <p class="mt-10 w-10/12 text-xl mx-auto text-center">
        All your links, all your projects, all your NFTs at one place. Get
        noticed. Get Paid.
      </p>
      <div class="img"></div>
      <img src="./assets/Union.svg" class="" alt="" /> -->
        <img
          src="./assets/asset.gif"
          class="w-[600px] h-auto lg:w-2/3 lg:h-2/3 xl:w-1/3 xl:h-1/3 mx-auto hero-image -z-10"
          alt="Image"
        />
        <div
          class="absolute ml-6 md:ml-10 lg:left-[16em] xl:left-[3em] lg:right-0 xl:right-0 top-[16em] md:top-80 xl:top-[16em] w-11/12 lg:w-4/6 xl:w-4/5"
        >
          <p
            class="font-heading font-normal uppercase text-6xl md:text-7xl xl:text-8xl"
          >
            It pays to be you
          </p>
          <p class="mt-6 text-xl md:text-3xl w-3/5 font-body">
            All your links and NFTs at one place. Make connections. Make
            payments.
          </p>
        </div>
      </div>
      <div class="mt-14 flex flex-col items-center">
        <p class="text-xl mb-5 font-body">Sign up for the early beta!</p>
        <form
          class="rounded-xl xl:w-5/12 xl:h-14 bg-gradient-to-b from-[#ededed] to-[#000000] p-1"
        >
          <div class="h-full w-full rounded-xl bg-[#111111]">
            <div class="w-full h-full flex flex-row items-center">
              <input
                type="email"
                placeholder="gm@gtfol.com"
                class="xl:w-11/12 h-full bg-[#111111] px-2 py-1 rounded-xl hover:outline-none focus:outline-none font-body"
              />
              <button class="text-gray" @click="handleClick">
                <img
                  src="./assets/arrow-right.svg"
                  class="w-7 xl:w-10"
                  alt="submit your email"
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-image {
  max-width: 150%;
}
</style>
