<script>

import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SinglePost',
    data() {
        return {
            store,
            post: null,
            loading: true
        }
    },
    mounted() {
        this.loading = true,
        axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response)=>{
            this.post = response.data.post
            this.loading = false
        })
    },

}
</script>


<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12" v-if="loading">
                <div class="loader"></div>
            </div>
            <div v-else class="col-12">
                <div class="float-end">
                    <router-link :to="{name: 'portfolio' }" class="btn btn-sm btn-success my-5">Torna indietro</router-link>
                </div>
                <div>
                    <h2>{{ post.title }}</h2>
                </div>
                <div class="cover-img">
                    <img :src="post.cover_image != null ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid">
                </div>
                <hr>
                <div>
                    <h6>Type: </h6>
                    <span v-if="post.type">
                        {{ type.name }}
                    </span>
                    <span v-else>
                        Non presente
                    </span>
                </div>
                <hr>
                <div class="my-2">
                    <h6>Technologies:</h6>
                    <span v-if="post.technologies.length" v-for="technology in post.technologies">
                        {{ technology.name }}
                    </span>
                    <span v-else>
                        Non presente
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .cover-img {
        width: 200px;
    }
</style>