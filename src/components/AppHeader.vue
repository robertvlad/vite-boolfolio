<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'homepage',
                },
                {
                    label: 'Portfolio',
                    routeName: 'portfolio',
                },
                {
                    label: 'Contatti',
                    routeName: 'contacts',
                }
            ]
        }
    },
}
</script>


<template lang="">
    <header>
        <nav class="navbar navbar-expand-md bg-blue">
            <div class="container">
                <div class="navbar-brand">
                    <h1><router-link class="unstyled-logo-h" to='/'>Boolpress</router-link></h1>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key='index'>
                            <router-link :to="{ name: item.routeName }" class="nav-link text-white">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>        
    </header>
</template>


<style lang="scss" scoped>

    .unstyled-logo-h {
        text-decoration: none;
        color: #ffffff;
    }
</style>