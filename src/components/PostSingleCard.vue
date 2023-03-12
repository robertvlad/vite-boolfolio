<script>

export default {
    name: 'PostSingleCard',
    props: {
        post: Object,
        baseUrl: String
    }
}

</script>


<template lang="">
    <div>
        <div class="card">
            <div class="card-body text-center">
                <div class="card-title">
                    <h5>{{ post.title }}</h5>
                    <em>Type: {{ post.type.name }}</em>
                </div>
                <div>
                    <h6>Technologies</h6>
                    <span v-for="technology in post.technologies">
                        {{ technology.name }}
                    </span>
                </div>
                <div class="card-img-top">
                    <img class="img-fluid" :src="post.cover_image != null ? `${baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'">
                </div>
                <a href="#" class="btn btn-sm btn-success m-3">Leggi il Post</a>
            </div>
        </div>        
    </div>
</template>


<style lang="">
    
</style>