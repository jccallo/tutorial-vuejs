<template>
   <div class="container">
      <h3>Text</h3>
      <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p>

      <h3>Checked</h3>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>

      <h3>Textarea</h3>
      <span>Multiline message is:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>

      <h3>Multiple Checkbox</h3>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>

      <h3>Radio</h3>
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <span>Picked: {{ picked }}</span>

      <h3>Seleccion Multiple</h3>
      <select v-model="selected" multiple>
         <option>A</option>
         <option>B</option>
         <option>C</option>
      </select>
      <br />
      <span>Selected: {{ selected }}</span>
   </div>
</template>

<script>
export default {
   name: "ForminputBinding",
   data() {
      return {
         checked: true,
         message: "Nada",
         checkedNames: [],
         picked: "",
         selected: []
      };
   },
};
</script>
