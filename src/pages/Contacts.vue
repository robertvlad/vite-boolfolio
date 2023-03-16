<script>
export default {
    name: 'Contacts'
}
</script>


<template lang="">
    <div class="container">
        <div class="row my-4">
            <div class="col-12">
                <h2 class="text-center my-4">Pagina Contatti</h2>
            </div>
            <div class="col-12 my-4">
                <h5 class="text-center my-4">Informazioni di contatto</h5>
                <div class="row">
                    <div class="col-12 col-md-6 my-4">
                        <div class="align-items-center d-flex flex-column gap-3">
                            <strong><i class=" fas fa-map me-2"> Indirizzo: </i></strong>Via Roma, 00111, Roma, Lazio, Italia
                            <hr class="w-75">
                            <strong><i class=" fas fa-book me-2"> Partita IVA: </i></strong> 10378467297477738
                        </div>
                    </div>
                    <div class="col-12 col-md-6 my-4">
                        <div class="text-center">
                            <div class="align-items-center d-flex flex-column gap-3">
                                <strong><i class=" fas fa-phone me-2"> Telefono: </i></strong>82783487628
                                <hr class="w-75">
                                <strong><i class=" fas fa-envelope me-2"> Email: </i></strong> boolpress@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-blue">
        <div class="container">
            <div class="row">
                <div class="col-12 my-4">
                    <h5 class="text-center">Contattaci</h5>
                    <form>
                        <div class="row">
                            <div class="col-12 col-md-6 my-2">
                                <label for="nome" class="control-label">Nome</label>
                                <input type="text" class="form-control" name="nome" id="nome" placeholder="Nome" v-model='name'>
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="cognome" class="control-label">Cognome</label>
                                <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Cognome" v-model='surname'>
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="email" class="control-label">Email</label>
                                <input type="mail" class="form-control" name="email" id="email" placeholder="Email" v-model='email'>
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="telefono" class="control-label">Telefono</label>
                                <input type="phone" class="form-control" name="telefono" id="telefono" placeholder="Telefono" v-model='phone'>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.bg-blue{
    color: white;
}
    
</style>