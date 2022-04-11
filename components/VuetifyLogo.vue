<template>
  <img
    class="vuetify-logo"
    alt="Vuetify Logo"
    src="/favicon.svg"
  >
</template>

<style>
.vuetify-logo {
  height: 120px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
  filter: invert(100%);
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
