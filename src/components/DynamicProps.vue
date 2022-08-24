<template>
   <div>
      <h3>Pasando un objeto</h3>
      <p>Nombre: {{ user.firstname }}</p>
      <p>Apellido: {{ user.lastname }}</p>

      <h3>Estado civil</h3>
      <p>¿Esta casado?: {{ isMarried }}</p>

      <h3>Edad</h3>
      <p>{{ age }}</p>

      <h3>Edad de jubilacion</h3>
      <p>usando la prop: {{ retirementAge }}</p>
      <p>usando una propiedad inicializada por la prop: {{ rAge }}</p>
      <p>Añadir 5 años a mi jubilacion: {{ addYear }}</p>

      <h3>Dni</h3>
      <p>{{ dni }}</p>
      <p>{{ typeof dni }}</p>

      <h3>Dia</h3>
      <p>{{ dia }}</p>
      <p>{{ typeof dia }}</p>

      <h3>Pasando un array</h3>
      <p>ages[0]: {{ ages[0] }}</p>
      <p>ages[1]: {{ ages[1] }}</p>
      <p>ages[2]: {{ ages[2] }}</p>
   </div>
</template>

<script>
export default {
   props: {
      retirementAge: Number,
      isMarried: Boolean,
      age: Number,
      ages: Array,
      user: {
         type: Object,
         default: function() { // objeto por default. Tambien funciona con el array
            return {
               firstname: "Angel",
               lastname: "Morales",
            }
         }
      },
      dni: {
         type: [String, Number], // admite dos tipos, de lo contratio arrojara un error en la consola
         required: true, // default no lo soluciona
         default: 100 // funciona si es que no es requerido
      },
      dia: { // no necesita el tipo ya que debe coincidir con un valor que puede ser de cualquier tipo
         validator: function (value) { 
         return ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 12, true].includes(value)
         }
      },
   },
   data() {
      return {
         rAge: this.retirementAge,
      };
   },
   computed: {
      addYear() {
         return this.retirementAge + 5;
      },
   },
};
</script>
