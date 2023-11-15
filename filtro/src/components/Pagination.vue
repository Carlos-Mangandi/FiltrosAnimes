<template>
  <ul class="flex md:hidden mt-5 justify-between">
    <li>
      <button @click="changePage(prev)" class="mx-1 bg-blue-500 cursor-pointer rounded-full p-2 w-12 h-12 text-center text-lg text-white" :disabled="currentPage === 1">
        <i class="fas fa-chevron-left"></i>
      </button>
    </li>
    <li class="flex justify-center items-center">
      <span>Pagina {{ currentPage }} de {{ totalPag }}</span>
    </li>
    <li>
      <button @click="changePage(next)" class="mx-1 bg-blue-500 rounded-full p-2 w-12 h-12 cursor-pointer text-center text-lg text-white"
        :disabled="currentPage === totalPag" >
        <i class="fas fa-chevron-right"></i>
      </button>
    </li>
  </ul>
  <ul class="hidden md:flex mt-6">
    <li>
      <button @click="changePage(prev)" class="mx-1 bg-blue-500 cursor-pointer rounded-full p-2 w-12 h-12 text-center text-lg text-white" :disabled="currentPage === 1" >
        <i class="fas fa-chevron-left"></i>
      </button>
    </li>
    <li @click="changePage(page)"
      class="mx-1 border font-semibold border-blue rounded-full p-2 w-12 h-12 text-center text-[10px] flex justify-center items-center cursor-pointer"
      v-for="page in pages"
      :class="page === currentPage ? 'bg-blue-500 text-white' : ' text-blue-500'"
      v-bind:key="page">
      {{ page }}
    </li>
    <li>
      <button class="mx-1 bg-blue-500 rounded-full p-2 w-12 h-12 cursor-pointer text-center text-lg text-white" :disabled="currentPage === totalPag" @click="changePage(next)">
        <i class="fas fa-chevron-right"></i>
      </button>
    </li>
  </ul>
</template>
   
<script lang="ts" setup>
  interface Props {
      pages: Array<number | string>;
      currentPage: number;
      totalPag: number;
      next: number;
      prev: number;
  }
    
  const { pages, currentPage, totalPag, next, prev } = defineProps<Props>();
  
  type Emits = {
      (event: "method", page: number): void;
  };
  
  const emits = defineEmits<Emits>();
      
  const changePage = (page: number | string) => {
      emits("method", Number(page));
  };
</script>