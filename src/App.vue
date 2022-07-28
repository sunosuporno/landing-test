<template>
  <div class="bg-[#111111] text-white">
    <div class="max-w-[1734px] min-h-screen pb-5 lg:pb-10">
      <div class="w-11/12 mx-auto pt-3 2xl:pt-5">
        <div class="flex justify-between">
          <div class="flex flex-row items-center">
            <img
              src="./assets/repofi-r.svg"
              class="h-12 md:h-20 lg:h-16 xl:h-14 2xl:h-20 mr-2"
              alt="repofi-logo"
            />
            <p
              class="font-logo text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-4xl -mb-[6px]"
            >
              RepoFi
            </p>
          </div>
          <div class="flex items-center">
            <div class="w-fit mx-auto mr-3 2xl:mr-7 rounded-md">
              <a href="https://twitter.com/repofime" target="_blank">
                <img
                  src="./assets/twitter-white.svg"
                  class="w-10 md:w-12 lg:w-10 xl:w-10 px-[2px] py-[7px] 2xl:w-14 rounded-full"
                  alt="Follow our Twitter!"
                />
              </a>
            </div>
            <div class="w-fit mx-auto rounded-md">
              <a href="https://discord.gg/sJu3cyWpzz" target="_blank">
                <img
                  src="./assets/discord-white.svg"
                  class="w-12 md:w-14 lg:w-12 xl:w-12 px-1 py-2 2xl:w-16"
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
          class="w-[600px] h-auto lg:h-[32em] lg:w-auto xl:w-1/3 xl:h-1/3 2xl:w-2/5 2xl:h-auto mx-auto hero-image -z-10"
          alt="Image"
        />
        <div
          class="absolute ml-6 md:ml-10 lg:left-[2em] xl:left-[3em] lg:right-0 xl:right-0 top-[16em] md:top-80 lg:top-72 xl:top-[16em] 2xl:top-[24em] w-11/12 lg:w-4/6 xl:w-4/5"
        >
          <p
            class="font-heading font-normal uppercase text-6xl md:text-7xl xl:text-8xl"
          >
            It pays to be you
          </p>
          <p
            class="mt-6 text-xl md:text-3xl lg:text-2xl 2xl:3xl w-3/5 font-body"
          >
            All your links and NFTs at one place. Make connections. Make
            payments.
          </p>
        </div>
      </div>
      <div
        v-if="!isEmailGiven"
        class="mt-2 md:mt-10 flex flex-col items-center font-body"
      >
        <p class="text-xl 2xl:text-3xl mb-5">Sign up for the early beta!</p>
        <form
          class="rounded-xl xl:w-5/12 xl:h-14 2xl:h-16 bg-gradient-to-b from-[#999999] to-[#111111] p-[2px] 2xl:p-[3px]"
        >
          <div class="h-full w-full rounded-xl bg-[#111111]">
            <div
              class="w-full h-full flex flex-row items-center justify-evenly"
            >
              <input
                type="email"
                placeholder="gm@gtfol.com"
                class="xl:w-11/12 2xl:text-2xl h-full bg-[#111111] px-2 py-1 rounded-xl hover:outline-none focus:outline-none"
                v-model="email"
              />
              <button class="text-gray" @click.prevent="handleClick">
                <img
                  src="./assets/arrow-right.svg"
                  class="w-7 xl:w-10 2xl:w-12 pr-1"
                  alt="submit your email"
                />
              </button>
            </div>
          </div>
        </form>
        <p v-if="error" class="text-red-400 mt-3 text-center 2xl:text-xl">
          {{ error }}
        </p>
      </div>
      <div
        v-else
        class="w-11/12 flex flex-col items-start lg:items-center lg:text-center mx-auto mt-2 md:mt-10 font-body"
      >
        <p class="text-lg lg:text-2xl xl:font-thin mb-2">
          Thanks a lot for your interest!
        </p>
        <p class="text-lg lg:text-2xl xl:font-thin mb-2">
          While you wait, join our
          <a
            href="https://discord.gg/sJu3cyWpzz"
            class="hover:cursor-pointer focus:cursor-pointer hover:text-[#DA1DA5] focus:text-[#DA1DA5] transition duration-200 underline"
            target="_blank"
            >Discord</a
          >
          and follow our
          <a
            href="https://twitter.com/repofime"
            class="hover:cursor-pointer focus:cursor-pointer hover:text-[#1946BA] focus:text-[#1946BA] transition duration-200 underline"
            target="_blank"
            >Twitter</a
          >
          to get all the updates.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const isEmailGiven = ref(false);
    const error = ref("");

    const isValidEmail = (email) => {
      const emailRegex = /\S+@\S+\.\S+/g;

      return emailRegex.test(email);
    };

    const addToWaitlist = async (email) => {
      try {
        const response = await fetch(
          import.meta.env.VITE_APP_BACKEND_URL + "/waitlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
            }),
          }
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        if (response.status !== 200) {
          error.value = data.message;
        }
      } catch (error) {
        console.log(error);
      }
    };

    const handleClick = async () => {
      error.value = "";
      if (email.value.length > 0) {
        if (isValidEmail(email.value)) {
          await addToWaitlist(email.value);
          if (error.value === "") {
            isEmailGiven.value = true;
            email.value = "";
          }
        } else {
          error.value = "Invalid email address";
        }
      } else {
        error.value = "Please enter your email";
      }
    };

    return {
      email,
      isEmailGiven,
      error,
      handleClick,
    };
  },
};
</script>

<style>
.hero-image {
  max-width: 150%;
}
</style>
