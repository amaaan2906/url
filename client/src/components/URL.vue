<template>
  <div class="url">
    <div class="top">
      <div class="link">
        <i class="link__icon fas fa-link"></i>
        <input type="url" class="link__input" />
      </div>
      <div class="slug">
        <i class="slug__icon fas fa-font"></i>
        <input type="text" class="slug__input" />
      </div>
    </div>
    <div class="bottom">
      <button>
        <h1 class="gradient-text">Shorten</h1>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "URL",
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
.url {
  /* outline: 1px solid red; */
  width: 50vw;
  height: 60vh;
  border-radius: 30px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.3);
}
.url > .top {
  width: 100%;
  height: 60%;
  border-radius: 30px 30px 0 0;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
}
.top > .link,
.top > .slug {
  border: transparent;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 80%;
  height: 70px;
  /* padding: 0 20px 0 50px; */
  font-size: 0.8rem;
  letter-spacing: 0.08rem;
  display: flex;
  align-items: center;
}
.link__icon,
.slug__icon {
  font-size: 2.5rem;
  width: 20%;
  margin: 0 auto;
  text-align: center;
}
.link__input,
.slug__input {
  outline: none;
  border: none;
  font-size: 1rem;
  letter-spacing: 0.01rem;
  background-color: transparent;
  width: 80%;
  margin: 0 auto;
  margin-right: 20px;
}
.url > .bottom {
  /* outline: 1px solid blue; */
  width: 100%;
  height: 40%;
  border-radius: 0 0 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom > button {
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  width: 80%;
  height: 70%;
}
.gradient-text {
  font-family: "Anton", sans-serif;
  font-size: 3.5rem;
  font-weight: normal;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  display: inline-block;
  background-color: black;
  background-image: linear-gradient(45deg, #acaafa, #faaaea);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  text-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
}
</style>
