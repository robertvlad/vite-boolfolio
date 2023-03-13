<script>

import axios from 'axios';
import PostSingleCard from '../components/PostSingleCard.vue';

export default {
    name: 'Portfolio',
    data() {
        return {
            posts: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000',
            currentPage: 1,
            lastPage: null
        }
    },
    components: {
        PostSingleCard
    },
    methods: {
        getPosts(post_page) {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`, { params: { page: post_page }}).then((response) => {
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
                    <PostSingleCard :post="post" :baseUrl="baseUrl"></PostSingleCard>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <nav>
                        <ul class="pagination d-flex justify-content-center my-3">
                            <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                                <button class="page-link" @click="getPosts(currentPage - 1)">Prev</button>
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

    .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
</style>