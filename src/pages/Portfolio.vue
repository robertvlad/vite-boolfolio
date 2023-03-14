<script>

import axios from 'axios';
import { store } from '../store';
import PostSingleCard from '../components/PostSingleCard.vue';

export default {
    name: 'Portfolio',
    data() {
        return {
            store,
            posts: [],
            currentPage: 1,
            lastPage: null,
            loading: true
        }
    },
    components: {
        PostSingleCard
    },
    methods: {
        getPosts(post_page) {
            this.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts`, { params: { page: post_page }}).then((response) => {
                if (response.data.success) {

                    console.log(response.data)
                    this.posts = response.data.posts.data;
                    this.currentPage = response.data.posts.current_page
                    this.lastPage = response.data.posts.last_page
                    this.loading = false;
                }
                else {
                    //
                }
            })
        }
    },
    mounted() {
        this.getPosts(this.currentPage);
    },
}

</script>


<template lang="">

<div class="container">
    <div class="row">
        <div class="col-12">
            <h1 class="text-center p-5">Lista dei Progetti</h1>
        </div>
        <div class="col-12">
            <div v-if="loading" class="d-flex justify-content-center my-5">
                <div class="loader"></div>
            </div>
            <div v-else class="d-flex gap-5 flex-wrap justify-content-center">
                <div class="col-3" v-for="post in posts" :key="post.id">
                    <PostSingleCard :post="post"></PostSingleCard>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <nav>
                        <ul class="pagination d-flex justify-content-center my-3">
                            <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                                <button class="page-link" @click="getPosts(currentPage - 1)">Prev</button>
                            </li>
                            <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                                <button class="page-link" @click="getPosts(i)">{{ i }}</button>
                            </li>
                            <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                                <button class="page-link" @click="getPosts(currentPage + 1)">Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>
    
</style>