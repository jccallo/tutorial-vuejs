<template>
   <div>
      <nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-dark mb-4">
         <div class="container">
            <router-link class="navbar-brand" to="/home"><i>Tutorial<span class="text-warning">Vuejs</span></i></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                  <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
                  <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                     <router-link class="nav-link" to="/home">Home</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" to="/components-indepth">VueComponents</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" to="/bootstrap-components">bootstrapComponents</router-link>
                  </li>
                  <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">More</a>
                        <ul class="dropdown-menu dropdown-menu-end">
                        <li><router-link class="nav-link" to="/bootstrap-components">bootstrapComponents</router-link></li>
                        <li><router-link class="nav-link" to="/bootstrap-components">bootstrapComponents</router-link></li>
                        <li><router-link class="nav-link" to="/bootstrap-components">bootstrapComponents</router-link></li>
                        </ul>
                  </li>
                  </ul>
                  <form class="d-flex">
                  <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search">
                        <button class="btn btn-warning" type="submit"><i class="bi bi-search"></i></button>
                  </div>
                  </form>
                  <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><i class="bi bi-person-circle"></i> Armando Morales</a>
                        <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Link</a></li>
                        <li><a class="dropdown-item" href="#">Another link</a></li>
                        <li><a class="dropdown-item" href="#">A third link</a></li>
                        </ul>
                  </li>
                  </ul>
            </div>
         </div>
      </nav>
      <div class="container">
         <div class="row mb-2">
            <div class="col-6  col-sm-8 text-start">
               <div class="h2">
                  Table
                  <small class="text-muted d-block d-sm-none" style="font-size: 15px; font-weight: 500">123 Resultados</small>
                  <small class="text-muted d-none d-sm-inline-flex" style="font-size: 15px; font-weight: 500">123 Resultados en total</small>
               </div>
            </div>
            <div class="col-6 col-sm-4 text-end">
               <router-link to="/" class="btn btn-primary d-block d-sm-none"><i class="bi bi-plus"></i> Registrar</router-link>
               <router-link to="/" class="btn btn-primary d-none d-sm-inline-block"><i class="bi bi-plus"></i> Registrar</router-link>
            </div>
         </div>
         <div class="card">
            <div class="card-header bg-white">
               <div class="row justify-content-between">
                  <div class="col-auto align-self-center">
                        <label class="d-inline">Mostrando </label>
                        <select class="form-select form-select-sm d-inline" style="width: 70px;">
                           <option value="10">10</option>
                           <option value="25">25</option>
                           <option value="50">50</option>
                           <option value="100">100</option>
                        </select> Items
                  </div>
                  <div class="col-auto">
                     <router-link to="/" class="btn btn-outline-info btn-sm d-block d-sm-none"><i class="bi bi-filter-circle-fill"></i></router-link>
                     <router-link to="/" type="button" class="btn btn-outline-info btn-sm d-none d-sm-inline"><i class="bi bi-filter-circle-fill"></i> Filters</router-link>
                  </div>
                  <div class="col-auto">
                     <ul class="pagination pagination-sm">
                     <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                     <li class="page-item"><a class="page-link" href="#">1</a></li>
                     <li class="page-item"><a class="page-link" href="#">2</a></li>
                     <li class="page-item"><a class="page-link" href="#">3</a></li>
                     <li class="page-item"><a class="page-link" href="#">Next</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="card-body">
               <!-- <div class="row justify-content-between mb-3">
                  <div class="col-auto align-self-center">
                        <label class="d-inline">Mostrando </label>
                        <select class="form-select form-select-sm d-inline" style="width: 70px;">
                           <option value="10">10</option>
                           <option value="25">25</option>
                           <option value="50">50</option>
                           <option value="100">100</option>
                        </select> Items
                  </div>
                  <div class="col-auto">
                     <router-link to="/" class="btn btn-outline-info btn-sm d-block d-sm-none"><i class="bi bi-filter-circle-fill"></i></router-link>
                     <router-link to="/" type="button" class="btn btn-outline-info btn-sm d-none d-sm-inline-block"><i class="bi bi-filter-circle-fill"></i> Filters</router-link>
                  </div>
               </div> -->
               <div class="table-responsive">
               <table class="table table-hover table-sm table-borderless table-sm mb-0">
                  <thead>
                     <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Password</th>
                        <th class="text-end">Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th>1</th>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td class="text-end">
                           <button type="button" class="btn btn-primary btn-sm me-1 d-none d-lg-inline-block"><i class="bi bi-pencil"></i></button>
                           <button type="button" class="btn btn-danger btn-sm d-none d-lg-inline-block"><i class="bi bi-trash"></i></button>
                           <div class="dropdown d-flex justify-content-end">
                              <button type="button" class="btn btn-light d-block d-lg-none" data-bs-toggle="dropdown">
                                 <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                 <li><a class="dropdown-item" href="#">Link 1</a></li>
                                 <li><a class="dropdown-item" href="#">Link 2</a></li>
                                 <li><a class="dropdown-item" href="#">Link 3</a></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <th>2</th>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td class="text-end">
                           <button type="button" class="btn btn-primary btn-sm me-1 d-none d-lg-inline-block"><i class="bi bi-pencil"></i></button>
                           <button type="button" class="btn btn-danger btn-sm d-none d-lg-inline-block"><i class="bi bi-trash"></i></button>
                           <div class="dropdown d-flex justify-content-end">
                              <button type="button" class="btn btn-light d-block d-lg-none" data-bs-toggle="dropdown">
                                 <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                 <li><a class="dropdown-item" href="#">Link 1</a></li>
                                 <li><a class="dropdown-item" href="#">Link 2</a></li>
                                 <li><a class="dropdown-item" href="#">Link 3</a></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <th>3</th>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td class="text-end">
                           <button type="button" class="btn btn-primary btn-sm me-1 d-none d-lg-inline-block"><i class="bi bi-pencil"></i></button>
                           <button type="button" class="btn btn-danger btn-sm d-none d-lg-inline-block"><i class="bi bi-trash"></i></button>
                           <div class="dropdown d-flex justify-content-end">
                              <button type="button" class="btn btn-light d-block d-lg-none" data-bs-toggle="dropdown">
                                 <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                 <li><a class="dropdown-item" href="#">Link 1</a></li>
                                 <li><a class="dropdown-item" href="#">Link 2</a></li>
                                 <li><a class="dropdown-item" href="#">Link 3</a></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <th>4</th>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td class="text-end">
                           <button type="button" class="btn btn-primary btn-sm me-1 d-none d-lg-inline-block"><i class="bi bi-pencil"></i></button>
                           <button type="button" class="btn btn-danger btn-sm d-none d-lg-inline-block"><i class="bi bi-trash"></i></button>
                           <div class="dropdown d-flex justify-content-end">
                              <button type="button" class="btn btn-light d-block d-lg-none" data-bs-toggle="dropdown">
                                 <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                 <li><a class="dropdown-item" href="#">Link 1</a></li>
                                 <li><a class="dropdown-item" href="#">Link 2</a></li>
                                 <li><a class="dropdown-item" href="#">Link 3</a></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                     <tr>
                        <th>5</th>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <td>Lorem ipsum dolor sit amet.</td>
                        <td>Lorem ipsum dolor sit.</td>
                        <td class="text-end">
                           <button type="button" class="btn btn-primary btn-sm me-1 d-none d-lg-inline-block"><i class="bi bi-pencil"></i></button>
                           <button type="button" class="btn btn-danger btn-sm d-none d-lg-inline-block"><i class="bi bi-trash"></i></button>
                           <div class="dropdown d-flex justify-content-end">
                              <button type="button" class="btn btn-light d-block d-lg-none" data-bs-toggle="dropdown">
                                 <i class="bi bi-three-dots-vertical"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                 <li><a class="dropdown-item" href="#">Link 1</a></li>
                                 <li><a class="dropdown-item" href="#">Link 2</a></li>
                                 <li><a class="dropdown-item" href="#">Link 3</a></li>
                              </ul>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <!-- <table class="table table-borderless table-sm mb-0">
                        <thead>
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">Fecha</th>
                              <th scope="col">Hora</th>
                              <th scope="col">Tramo de carretera</th>
                              <th scope="col">Sentido</th>
                              <th scope="col">KM</th>
                              <th scope="col">Tipo de via</th>
                              <th scope="col">Condiciones</th>
                              <th scope="col">Condiciones</th>
                              <th scope="col" class="text-right">Acciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th scope="row">1</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="width: 105px; display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">2</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">3</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">4</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">5</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">6</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">7</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">8</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">9</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <th scope="row">10</th>
                              <td>01/01/2016</td>
                              <td>13:25</td>
                              <td>RUTA-R1/N</td>
                              <td>Norte</td>
                              <td>247000</td>
                              <td>AutoPista - CA</td>
                              <td>Bueno</td>
                              <td>Tarde</td>
                              <td class="text-right">
                                 <div style="display: inline-block;">
                                    <a href="detalles.html" class="btn btn-secondary btn-sm"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>

                        </tbody>
                     </table> -->
            </div> 
            </div>
            <div class="card-footer bg-white">
               <div class="row justify-content-between">
                  <div class="col-auto align-self-center">
                        <label class="d-inline">Mostrando </label>
                        <select class="form-select form-select-sm d-inline" style="width: 70px;">
                           <option value="10">10</option>
                           <option value="25">25</option>
                           <option value="50">50</option>
                           <option value="100">100</option>
                        </select> Items
                  </div>
                  <div class="col-auto">
                     <router-link to="/" class="btn btn-outline-info btn-sm d-block d-sm-none"><i class="bi bi-filter-circle-fill"></i></router-link>
                     <router-link to="/" type="button" class="btn btn-outline-info btn-sm d-none d-sm-inline-block"><i class="bi bi-filter-circle-fill"></i> Filters</router-link>
                  </div>
               </div>
            </div>
         </div>
                  
      </div>
   </div>
   
</template>