
<style lang="scss">
.main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
}
.login-btn {
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  &:hover {
    cursor: pointer;
    filter: brightness(150%);
  }
}
</style>
<template>
  <v-main class="main" id="main" v-cloak v-if="$route.path !== '/'">
    <v-card color="primary" dark class="mx-auto" style="max-width: 400px">
      <v-btn
        color="success"
        nuxt
        icon
        to="/inspire"
        mdi
        depressed
        class="login-btn"
        @click="handleClick"
      >
        <v-icon class="text-3xl text-accent">mdi-google</v-icon>
      </v-btn>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-card>
  </v-main>
</template>
<script>
export default{
  methods:{
    handleClick: ()=>alert("Hello Worls")
  }
}
</script>
