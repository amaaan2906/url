<template>
  <div class="home">
    <span class="bg1"></span>
    <!-- <span class="bubble_1"></span>
    <span class="bubble_2"></span>
    <span class="bubble_3"></span> -->
    <URL id="box" />
  </div>
</template>

<script>
import URL from "@/components/URL";
export default {
  name: "Home",
  components: {
    URL
  },
  data() {
    return {
      lightMode: false
    };
  }
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(291.82deg, #faaaea 7.11%, #acaafa 57.74%);
  position: relative;
}
.home > .bg1 {
  width: 50vw;
  height: 50vw;
  position: absolute;
  top: -10vw;
  left: -10vw;
  border-radius: 50%;
  background: linear-gradient(180deg, #acaafa 0%, #d397de 48.96%);
  filter: blur(250px);
  transform: rotate(-29.54deg);
}
.home > .bubble_1 {
  width: 25vw;
  height: 25vw;
  position: absolute;
  top: -5vw;
  right: 3vw;
  border-radius: 50%;
  background: linear-gradient(
    194.6deg,
    rgba(255, 254, 254, 0.6) 7.66%,
    rgba(255, 255, 255, 0.18) 92.38%,
    rgba(255, 255, 255, 0) 92.38%
  );
  backdrop-filter: blur(150px);
  border: 1px solid white;
}
.home > .bubble_2 {
  width: 40vw;
  height: 40vw;
  position: absolute;
  bottom: 6vw;
  right: -7vw;
  border-radius: 50%;
  background: linear-gradient(
    194.6deg,
    rgba(255, 254, 254, 0.6) 7.66%,
    rgba(255, 255, 255, 0.18) 92.38%,
    rgba(255, 255, 255, 0) 92.38%
  );
  backdrop-filter: blur(150px);
  border: 1px solid white;
}
.home > .bubble_3 {
  width: 15vw;
  height: 15vw;
  position: absolute;
  top: 25vw;
  left: 15vw;
  border-radius: 50%;
  background: linear-gradient(
    194.6deg,
    rgba(255, 254, 254, 0.6) 7.66%,
    rgba(255, 255, 255, 0.18) 92.38%,
    rgba(255, 255, 255, 0) 92.38%
  );
  backdrop-filter: blur(150px);
  border: 1px solid white;
}
.home > #box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
