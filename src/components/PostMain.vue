<script>

export default {
    name: 'PostMain',
    data() {
        return {
            posts: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getPosts() {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`).then((response) => {
                if (response.data.success) {
                    this.post = response.data.posts
                    this.loading = false;
                }
                else {

                }
            })
        }
    },
    mounted() {
        this.getPosts()
    },
}

</script>


<template lang="">

<div class="container">
    <div class="row">
        <div class="col-12">

        </div>
    </div>
</div>

</template>


<style lang="scss" scoped>
    
</style>