<template>
  <div>
    <div class="w-11/12 mx-auto pt-3">
      <div class="flex justify-center">
        <div class="flex flex-row items-center">
          <img
            src="./assets/repofi-r.svg"
            class="h-12 mr-2"
            alt="repofi-logo"
          />
          <p class="font-logo text-2xl -mb-[6px]">RepoFi</p>
        </div>
      </div>
    </div>
    <div>
      <h2
        class="text-5xl w-10/12 mx-auto text-center mt-32 font-heading bg uppercase font-normal"
      >
        It pays to be you
      </h2>
      <p class="mt-10 w-10/12 text-xl mx-auto text-center">
        All your links, all your projects, all your NFTs at one place. Get
        noticed. Get Paid.
      </p>
      <div class="img"></div>
      <!-- <img src="./assets/Union.svg" class="" alt="" /> -->
    </div>
    <div class="mt-14 flex flex-col items-center">
      <p class="text-xl mb-5">Sign up for the early beta!</p>
      <form class="flex flex-col items-center w-10/12">
        <input class="h-10 w-full bg-transparent border border-black rounded-md px-4 py-2 text-center placeholder-[#D7C1D1]" type="email" placeholder="email@example.com" />
        <button class="bg-black h-10 w-full hover:border-2 focus:border-2 hover:border-white focus:border-white rounded-md text-white mt-6 ease-in duration-300"> RepoFi Me! </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img {
  position: absolute;
  width: 100vw;
  height: 534px;
  top: 96px;
  left: -9px;
  z-index: -99;
  overflow: hidden;
  background: conic-gradient(
    from 68.62deg at 52.5% 61.15%,
    #d03ea6 0deg,
    #6b92f9 360deg
  );
  filter: blur(90px);
}
</style>
