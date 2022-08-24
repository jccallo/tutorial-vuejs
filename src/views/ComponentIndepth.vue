<template>
   <div>
      <h1>{{ componentTitle }}</h1>
      <simple-props title="paso de propiedad no dinamica"></simple-props>
      <dynamic-props 
         :user="user"
         :isMarried="true"
         :age="37"
         :retirementAge="50"
         :dni="'edad'"
         :dia="'miercoles'"
         :ages="ages"
      ></dynamic-props>
   </div>
</template>

<script>
import SimpleProps from "../components/SimpleProps.vue";
import DynamicProps from "../components/DynamicProps.vue";

export default {
   data() {
      return {
         componentTitle: "Componentes a profundidad",
         user: {
            firstname: "Armando",
            lastname: "Morales",
         },
         ages: [
            4,
            26,
            37,
         ]
      };
   },
   components: {
      SimpleProps,
      DynamicProps,
   },
};
</script>
