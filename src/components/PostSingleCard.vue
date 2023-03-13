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
                <div v-if="post.type.length > 0">
                    <em>Type: {{ post.type.name }}</em>
                </div>
                <div v-if="post.technologies.length > 0">
                    <h6>Technologies</h6>
                    <span v-for="technology in post.technologies">
                        {{ technology.name }}
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