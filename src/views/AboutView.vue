<template>
  <div class="about">
    <h1>This is an about page</h1>
    
    <router-link to='/user/jorge/post/1'>user: Jorge - post: 1</router-link>
    <br>
    <router-link to='/user/armando/post/2'>user: Armando - post: 2</router-link> 

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content"> 
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>     
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var myModalEl = document.getElementById('exampleModal')
      myModalEl.addEventListener('hidden.bs.modal', function (event) {
        console.log(event.target);
        console.log("hola");
      })
    }
  }
}
</script>
