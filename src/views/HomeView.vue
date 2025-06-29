<script setup lang="ts">
import { ref } from 'vue';
import {MovieModel} from '@/models/movie.model';
import {MovieService} from '@/services/movie.service';


const movies = ref<MovieModel[]>()

MovieService.getMovies()
.then(rsp => movies.value =rsp.data)

const actors = ref()
const search = ref({
  actor: 0
})
MovieService.getActors()
.then(rsp=> actors.value=rsp.data)

</script>

<template>
  <h1>Praktikum sistemi E-Poslovanja</h1>
  <p>Odabran glumac:{{ search.actor }}</p>
  <div class="row">
    <div class="col" v-if="actors">
      <select class="form-select" v-model="search.actor" >
        <option :value="0">Odaberite glumca</option>
        <option v-for="a of actors" :value="a.actorId">{{ a.name }}</option>
</select>
    </div>
  </div>
  <div class="card-holder" v-if="movies">
    <div class="card movie-card" v-for="m of movies" :key="m.movieId">
  <img :src="m.poster" class="card-img-top" :alt="m.title">
  <div class="card-body">
    <h5 class="card-title">{{ m.title }}</h5>
    <p class="card-text"> {{ m.shortDescription }}</p>
  </div>
  <div class="card-footer">
    <RouterLink :to="'/movie/$(m.shortUrl)'" class="btn btn-warning">
     <i class="fa-regular fa-pen-to-square"></i> Details
      </RouterLink>
  </div>
  </div>
  </div>
  

 
 
  
</template>
<style>
.card-holder{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

 .movie-card{
  width: 18rem;
  min-height: 200px;
}
</style>