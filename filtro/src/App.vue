<template>
  <div class="w-full p-4">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <!-- <a href="https://flowbite.com/" class="flex items-center">
          <img src="https://us.123rf.com/450wm/kchung/kchung1708/kchung170800207/83599277-letra-a-roja-representaci%C3%B3n-gr%C3%A1fica-3d-aislada-sobre-fondo-blanco.jpg?ver=6" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Animes</span>
        </a> -->
        <div class="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" v-model="search" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
          </div>
          <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div class="relative mt-3 md:hidden">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
          </div>
          <!--<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
             <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a> 
            </li> 
          </ul>-->
        </div>
      </div>
    </nav>
    <hr>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mr-32 ml-32 p-2">
      <div v-for="anime in animes" :key="anime.mal_id" class="w-72 border h-96 rounded-lg shadow-2xl">
        <div class="relative">
          <img
          :src="anime.images.jpg.large_image_url"
          class="w-full h-96 rounded-lg"
          alt=""
          srcset=""
          />
          <div class="absolute bottom-0 bg-[rgba(0,0,0,0.7)] w-full flex justify-center items-center rounded-lg p-4">
            <p class="text-white text-sm">{{ anime.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <PaginationGlobal class="flex justify-center"
      :pages="pagination.pages"
      :currentPage="pagination.currentPage"
      @method="on_change_page"
      :next="pagination.next_page"
      :prev="pagination.prev_page"
      :total-pag="pagination.total"
    />
  </div>  
</template>
  
<script lang="ts" setup>
  import axios from "axios";
  import { onMounted, ref, watch} from "vue";
  import { type Data, type GetAnimes } from "./types/animes.types";
  import { paginate } from './utils';
  import PaginationGlobal from './components/Pagination.vue';
  
  
  interface Pagination {
    pages: Array<string | number>,
    currentPage: number,
    total: number,
    next_page: number,
    prev_page: number
  }
  
  const animes = ref<Data[]>([]);
  
  const pagination = ref<Pagination>({
    pages: [],
    currentPage: 1,
    next_page: 2,
    prev_page: 0,
    total: 0
  });
  
  const get_animes = async (page = 1, limit = 6, q:string ) => {
    axios.get<GetAnimes>(`https://api.jikan.moe/v4/anime?page=${page}&limit=${limit}&q=${q}`).then(({data}) => {
      animes.value = data.data;
      pagination.value = {
        pages: paginate(data.pagination.current_page,data.pagination.last_visible_page,1),
        currentPage: data.pagination.current_page,
        next_page: page === data.pagination.last_visible_page ? 0 : page + 1,
        prev_page: page === 1 ? 0 : page - 1,
        total: data.pagination.last_visible_page
      }
    });
  };
  
  const on_change_page = (page: number) => {
    get_animes(page, 6, search.value);
  }
  
  onMounted( () => {
    get_animes(1, 6, search.value);
  })
  
  
  const search = ref("")
  
  watch (search,  async () =>{
      get_animes(1, 6, search.value)
   })
  
  </script>
  
  <style lang="scss" scoped>
  
  
  </style>
  