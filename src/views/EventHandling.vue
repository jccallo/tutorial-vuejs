<template>
   <div class="container">
      <h1>EventHandling</h1>
      <!-- si solo esta el nombre del metodo, entonces implicitamente esta pasando el evento $event -->
      <!-- si ya hay argumentos, entonces se le debe pasar explicitamente el evento $event -->
      <h3>Metodos en linea</h3>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">
         Submit
      </button>

      <h3>Modificadores de eventos</h3>
      <ul>
         <li>.stop</li>
         <li>.prevent</li>
         <li>.capture</li>
         <li>.self</li>
         <li>.once</li>
         <li>.passive</li>
      </ul>

      <!-- the click event's propagation will be stopped -->
      <a v-on:click.stop="doThis">v-on:click.stop="doThis"</a>

      <!-- the submit event will no longer reload the page -->
      <form v-on:submit.prevent="onSubmit">v-on:submit.prevent="onSubmit"</form>

      <!-- modifiers can be chained -->
      <a v-on:click.stop.prevent="doThat">v-on:click.stop.prevent="doThat"</a>

      <!-- just the modifier -->
      <form v-on:submit.prevent>v-on:submit.prevent</form>

      <!-- use capture mode when adding the event listener -->
      <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
      <div v-on:click.capture="doThis">v-on:click.capture="doThis"</div>

      <!-- only trigger handler if event.target is the element itself -->
      <!-- i.e. not from a child element -->
      <div v-on:click.self="doThat">v-on:click.self="doThat"</div>

      <!-- Nuevo en 2.1.4+ -->
      <!-- the click event will be triggered at most once -->
      <a v-on:click.once="doThis">v-on:click.once="doThis"</a>
      
      <br><br>
      <blockquote>
         El orden importa cuando se usan modificadores porque el código relevante se genera en el mismo orden. 
         Por lo tanto, el uso v-on:click.prevent.selfevitará todos los clics, 
         mientras v-on:click.self.preventque solo evitará los clics en el elemento mismo.
      </blockquote>

      <p>links de ayuda:</p>
      <a href="https://stackoverflow.com/questions/41992865/what-is-capture-mode-on-an-event-listener">what-is-capture-mode-on-an-event-listener</a><br>
      <a href="https://stackoverflow.com/questions/5963669/whats-the-difference-between-event-stoppropagation-and-event-preventdefault">whats-the-difference-between-event-stoppropagation-and-event-preventdefault</a>
      <a href="https://stackoverflow.com/questions/42763940/vue-js-what-is-the-self-modifier">vue-js-what-is-the-self-modifier</a>
   </div>
</template>

<script>
export default {
   methods: {
      warn: function (message, event) {
         // now we have access to the native event
         if (event) {
            event.preventDefault();
            console.log("evento de boton prevenido")
         }
         alert(message);
      },
   },
};
</script>
