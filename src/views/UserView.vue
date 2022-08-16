<template>
  <div>
    <h1>This is an about page</h1>
    <p>User {{ $route.params.name }}</p>
    <p>User {{ $route.params.postId }}</p>

    <router-link to='/user/jorge/post/1'>user: Jorge - post: 1</router-link>
    <br>
    <router-link to='/user/armando/post/2'>user: Armando - post: 2</router-link>
    <br>
    <router-link to='/use'>Error</router-link>
    <br>
    <router-link to='/user-nomatch'>User Error</router-link>
  </div>
</template>

<script>
export default {
  methods: {
  },
  watch: {
    $route(to, from) {
      console.log(this.$route.params.name);
      console.log(this.$route.params.postId);
      console.log(this.$route.params.pathMatch);
      console.log(to);
      console.log(from);
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    console.log(from);
    next(false); // aborta la redireccion
    // next("/"); // redirige a dicho path
    // mas info: https://v3.router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes
  }
}
</script>