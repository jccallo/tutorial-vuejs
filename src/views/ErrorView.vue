<template>
   <div>
      <h1>Error View</h1>
      <p>{{$route.params.pathMatch}}</p>
      <router-link to='/user/armando/post/2'>user: Armando - post: 2</router-link>
   </div>
</template>

<script>
export default {
   mounted() {
      console.log(this.$route.params.pathMatch);
   },
}
</script>