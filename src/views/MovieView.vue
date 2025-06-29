<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { ref} from 'vue';
import { MovieService} from '@/services/movie.service';
import { MovieModel} from '@/models/movie.model';

const route = useRoute()
const movie = ref<MovieModel>()
const short = route.params.link as string

MovieService.getMovieByShortUrl(short)
.then(rsp=> movie.value = rsp.data)
</script>

<template>
    <table class="table table-striped" v-if="movie">
  <tbody>
    <tr>
      <th scope="row">Naziv</th>
      <td>{{ movie.title }}</td>
    </tr>
    <tr>
      <th scope="row">Opis</th>
      <td>{{movie.description}}</td>
    </tr>
    <tr>
      <th scope="row">Reziser</th>
      <td>{{movie.director.name}}</td>
    </tr>
     <tr>
      <th scope="row">Pocetak projekcije</th>
      <td>{{movie.startDate}}</td>
       <tr>
      <th scope="row">Vreme trajanja</th>
      <td>{{movie.runTime}} min</td>
    </tr>
    </tr>
  </tbody>
</table>
<pre>{{ movie }}</pre>
</template>