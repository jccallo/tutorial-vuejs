<template>
   <div>
      <h3>Simple Props</h3>
      <p>{{title}}</p>
   </div>
</template>

<script>
export default {
   props: {
      title: String,
   }
}
</script>