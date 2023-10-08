<template>
    <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Nuxt Movies App</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input 
                class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
                placeholder="Search..." 
                type="text" 
                v-model="searchTerm" 
                >
        </div>
        <div class="flex justify-center mb-10 items-center">
                <button v-if="!disablePrevious" @click="page--" class="px-4 py-2 text-m border rounded-lg">Previous</button>
                <div class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
                <button v-if="!disableNext"  @click="page++" class="px-4 py-2 text-m border rounded-lg">Next</button>
                <span class="px-3">of</span>
                <div class="px-4 py-2 text-m border rounded-lg">{{ totalPages }}</div>
            </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
            <div v-for="(movie, index) in data?.results" :key="index+movie.title" >
               <MovieCard :movie="movie"></MovieCard>
            </div>
        </div>
        <div class="flex justify-center items-center">
            <button v-if="!disablePrevious" @click="page--" class="px-4 py-2 text-m border rounded-lg">Previous</button>
            <div class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
            <button v-if="!disableNext"  @click="page++" class="px-4 py-2 text-m border rounded-lg">Next</button>
            <span class="px-3">of</span>
                    <div class="px-4 py-2 text-m border rounded-lg">{{ totalPages }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { APIResponse } from '~/types/APIResponse';

const searchTerm = ref('');
const page = ref(1);
const totalPages = computed(() => data.value?.total_pages)

const disablePrevious = computed(() => {
    return page.value === 1;
});

const disableNext = computed(() => {
    return page.value === data.value?.total_pages;
});

const debouncedSearchTerm = refDebounced(searchTerm, 600);

const url = computed(() => {
    return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`
});

const { data } = await useFetch<APIResponse>(url);
console.log(JSON.stringify(data?.value));


</script>