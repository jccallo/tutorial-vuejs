<template>
   <div>
      <!-- cabecera externa -->
      <div class="container">
         <div class="row align-items-center mb-2">
            <div class="col-xl-6">
               <div class="h3">Siniestros <small class="text-muted" style="font-size: 14px; font-weight: 500;">Mostrando 32 resultados en Total</small></div>
            </div>
            <div class="col-xl-6">
               <div class="form-row justify-content-xl-end">
                  <div class="col-12 col-sm-4 mb-2 mb-sm-0">
                     <label class="sr-only" for="inlineFormInputName">Buscar</label>
                     <input type="text" class="form-control" id="inlineFormInputName" placeholder="Buscar">
                  </div>
                  <div class="col-12 col-sm-3 mb-2 mb-sm-0">
                     <button class="btn btn-info btn-block" href="#"><i class="bi bi-filter-circle"></i> Filtrar</button>
                  </div>
                  <div class="col-12 col-sm-3 mb-2 mb-sm-0">
                     <a class="btn btn-primary btn-block" href="#"><i class="bi bi-plus-circle"></i> Registrar</a>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <!-- large table -->
      <div class="container">
         <div class="row">
            <div class="col">
               <div class="card mb-4">

                  <!-- card header -->
                  <div class="card-header">
                     <!-- cabecera -->
                     <div class="row align-items-center">
                        <div class="col-xl-6">
                           <div class="h4">Siniestros <small class="text-muted" style="font-size: 13px; font-weight: 500;">Mostrando 32 resultados en Total</small></div>
                        </div>
                        <div class="col-xl-6">
                           <div class="form-row justify-content-xl-end">
                              <div class="col-12 col-sm-4 mb-2 mb-sm-0">
                                 <label class="sr-only" for="inlineFormInputName">Buscar</label>
                                 <input type="text" class="form-control form-control-sm" id="inlineFormInputName" placeholder="Buscar">
                              </div>
                              <div class="col-12 col-sm-3 mb-2 mb-sm-0">
                                 <button class="btn btn-info btn-block btn-sm" href="#"><i class="bi bi-filter-circle"></i> Filtrar</button>
                              </div>
                              <div class="col-12 col-sm-3 mb-2 mb-sm-0">
                                 <a class="btn btn-primary btn-block btn-sm" href="#"><i class="bi bi-plus-circle"></i> Registrar</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- /cabecera -->
                  </div>

                  <!-- card body -->
                  <div class="card-body table-responsive">

                     <!-- cabecera -->
                     <div class="row align-items-center">
                        <div class="col-xl-6 mb-sm-2">
                           <div class="form-row justify-content-start">
                              <div class="col-12 col-sm-auto mb-2 mb-sm-0 form-inline">
                                 <label for="sel1" class="mr-1">Select list</label>
                                 <select class="custom-select custom-select-sm" id="sel1">
                                    <option>11</option>
                                    <option>12</option>
                                    <option>31</option>
                                    <option>41</option>
                                 </select>
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <button class="btn btn-outline-info btn-block btn-sm" href="#"><i
                                       class="bi bi-filter-circle-fill"></i> Filtrar</button>
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <a class="btn btn-outline-primary btn-block btn-sm" href="#"><i class="bi bi-plus-circle-fill"></i>
                                    Registrar</a>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6">
                           <div class="form-row justify-content-xl-end">
                              <div class="col-12 col-sm-4 mb-2 mb-sm-0">
                                 <label class="sr-only" for="inlineFormInputName">Buscar</label>
                                 <input type="text" class="form-control form-control-sm" id="inlineFormInputName" placeholder="Buscar">
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <button class="btn btn-info btn-block btn-sm" href="#"><i class="bi bi-filter-circle"></i> Filtrar</button>
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <a class="btn btn-primary btn-block btn-sm" href="#"><i class="bi bi-plus-circle"></i> Registrar</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- /cabecera -->

                     <!-- tabla -->
                     <table class="table table-borderless table-sm">
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
                                 <div>
                                    <a href="detalles.html" class="btn btn-secondary btn-sm mr-1"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm mr-1"><i class="bi bi-pencil"></i></a>
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
                                 <div>
                                    <a href="detalles.html" class="btn btn-secondary btn-sm mr-1"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm mr-1"><i class="bi bi-pencil"></i></a>
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
                                 <div>
                                    <a href="detalles.html" class="btn btn-secondary btn-sm mr-1"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm mr-1"><i class="bi bi-pencil"></i></a>
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
                                 <div>
                                    <a href="detalles.html" class="btn btn-secondary btn-sm mr-1"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm mr-1"><i class="bi bi-pencil"></i></a>
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
                                 <div>
                                    <a href="detalles.html" class="btn btn-secondary btn-sm mr-1"><i class="bi bi-eye"></i></a>
                                    <a href="editar.html" class="btn btn-primary btn-sm mr-1"><i class="bi bi-pencil"></i></a>
                                    <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal"><i
                                          class="bi bi-trash"></i></a>
                                 </div>
                              </td>
                           </tr>

                        </tbody>
                     </table>

                     <!-- cabecera -->
                     <div class="row align-items-center">
                        <div class="col-xl-6 mb-sm-2">
                           <div class="form-row justify-content-start">
                              <div class="col-12 col-sm-auto mb-2 mb-sm-0 form-inline">
                                 <label for="sel1" class="mr-1">Select list</label>
                                 <select class="custom-select custom-select-sm" id="sel1">
                                    <option>11</option>
                                    <option>12</option>
                                    <option>31</option>
                                    <option>41</option>
                                 </select>
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <button class="btn btn-outline-info btn-block btn-sm" href="#"><i
                                       class="bi bi-filter-circle-fill"></i> Filtrar</button>
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <ul class="pagination pagination-sm mb-0">
                                    <li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>
                                    <li class="page-item active"><a class="page-link" href="index.html">1</a></li>
                                    <li class="page-item"><a class="page-link" href="index-2.html">2</a></li>
                                    <li class="page-item"><a class="page-link" href="index-3.html">&raquo;</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6">
                           <div class="form-row justify-content-xl-end">
                              <div class="col-12 col-sm-4 mb-2 mb-sm-0">
                                 <label class="sr-only" for="inlineFormInputName">Buscar</label>
                                 <input type="text" class="form-control form-control-sm" id="inlineFormInputName" placeholder="Buscar">
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <button class="btn btn-info btn-block btn-sm" href="#"><i class="bi bi-filter-circle"></i> Filtrar</button>
                              </div>
                              <div class="col-6 col-sm-auto mb-2 mb-sm-0">
                                 <ul class="pagination pagination-sm mb-0">
                                    <li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>
                                    <li class="page-item active"><a class="page-link" href="index.html">1</a></li>
                                    <li class="page-item"><a class="page-link" href="index-2.html">2</a></li>
                                    <li class="page-item"><a class="page-link" href="index-3.html">&raquo;</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- /cabecera -->
                  </div>

                  <!-- card footer -->
                  <div class="card-footer">
                     <!-- cabecera -->
                     <div class="row align-items-center">
                        <div class="col-xl-6 mb-sm-2">
                           <div class="form-row justify-content-start">
                              <div class="col-12 col-sm-4 col-lg-5 mb-2 mb-sm-0">
                                 <select class="custom-select custom-select-sm">
                                    <option value="" selected>Small Custom Select Menu</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                 </select>
                              </div>
                              <div class="col-6 col-sm-3 col-lg-4 mb-2 mb-sm-0">
                                 <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" placeholder="Buscar">
                                    <div class="input-group-append">
                                       <div class="input-group-text"><i class="bi bi-search"></i></div>
                                    </div>
                                 </div>
                              </div>
                              <div class="col-6 col-sm-3 col-lg-3 mb-2 mb-sm-0">
                                 <div class="input-group input-group-sm">
                                    <div class="input-group-prepend">
                                       <div class="input-group-text"><i class="bi bi-search"></i></div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Buscar">
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-6">
                           <div class="form-row justify-content-xl-end">
                              <div class="col-12 col-sm-4 mb-2 mb-sm-0">
                                 <label class="sr-only" for="inlineFormInputName">Buscar</label>
                                 <input type="text" class="form-control form-control-sm" id="inlineFormInputName" placeholder="Buscar">
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <button class="btn btn-info btn-block btn-sm" href="#"><i class="bi bi-filter-circle"></i> Filtrar</button>
                              </div>
                              <div class="col-6 col-sm-3 mb-2 mb-sm-0">
                                 <a class="btn btn-primary btn-block btn-sm" href="#"><i class="bi bi-plus-circle"></i> Registrar</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!-- /cabecera -->

                  </div>

               </div>
            </div>
         </div>
      </div>
   </div>
</template>