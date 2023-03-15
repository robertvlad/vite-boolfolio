<script>

import { store } from '../store';

export default {
    name: 'PostSingleCard',
    props: {
        post: Object,
    }
}

</script>


<template lang="">
    <div>
        <div class="card">
            <div class="card-body text-center">
                <div class="card-title">
                    <h5>{{ post.title }}</h5>
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
                <div class="card-img-top">
                    <img class="img-fluid" :src="post.cover_image != null ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'">
                </div>
                <router-link class="btn btn-sm btn-success my-3" :to="{ name: 'single-post', params: { slug: post.slug}}">
                    Leggi Post
                </router-link>
            </div>
        </div>        
    </div>
</template>


<style lang="">
    
</style>