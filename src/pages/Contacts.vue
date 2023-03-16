<script>
import axios from 'axios';
import { store } from '../store';

    export default {
        name: 'Contacts',
        data() {
            return {
                store,
                name: '',
                surname: '',
                email: '',
                phone: '',
                message: '',
                success: false,
                loading: false,
            }
        },
        methods:{
            sendForm(){
                const data = {
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    phone: this.phone,
                    message: this.message,
                }

                this.loading = true

                axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                    if(!response.data.success){
                        this.loading = false;
                    }else{
                        this.name = '';
                        this.surname = '';
                        this.email = '';
                        this.phone = '';
                        this.message = '';
                        this.success = true;
                        this.loading = false;
                    }
                });
            }
        }
    }
</script>

<template>
  <div class="container">
    <div class="row my-5">
        <div class="col-12">
            <h2 class="text-center my-5">Pagina contatti</h2>
        </div>
        <div class="col-12">
            <h5 class="text-center my-5">Informazioni di contatto</h5>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="text-center d-flex flex-column">
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-map me-2"></i>
                                Indirizzo
                            </strong>
                            Via NomeVia, Num, Città CAP (Sigla provincia)
                        </div>
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-book me-2"></i>
                                Partita Iva:
                            </strong> 
                            12345678786123
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="text-center d-flex flex-column">
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-phone me-2"></i>
                                Telefono
                            </strong>
                            123145542525
                        </div>
                        <div class="my-2">
                            <strong>
                                <i class="fas fa-envelope me-2"></i>
                                Email:
                            </strong> 
                            info@boolfolio.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue py-3 my-3">
            <div class="container">
                <div class="col-12 my-5">
                    <h5 class="text-center my-3">Scrivici</h5>
                    <form @submit.prevent="sendForm()">
                        <div class="row">
                            <div class="col-12 col-md-6 my-2">
                                <label for="nome" class="control-label">Nome</label>
                                <input type="text" class="form-control"  name="nome" id="nome" placeholder="Nome" v-model="name">
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="cognome" class="control-label">Cognome</label>
                                <input type="text" class="form-control"  name="cognome" id="cognome" placeholder="Cognome" v-model="surname">
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="email" class="control-label">Mail</label>
                                <input type="mail" class="form-control" name="email" id="email" placeholder="Email" v-model="email">
                            </div>
                            <div class="col-12 col-md-6 my-2">
                                <label for="telefono" class="control-label">Numero di telefono</label>
                                <input type="phone" class="form-control"  name="telefono" id="telefono" placeholder="Telefono" v-model="phone">
                            </div>
                            <div class="col-12 my-2">
                                <label for="messaggio" class="control-label">Messaggio</label>
                                <textarea class="form-control" name="messaggio" id="messaggio" placeholder="Scrivi qui un messaggio per noi..." cols="30" rows="5" v-model="message"></textarea>
                            </div>
                            <div class="col-12 mt-3 text-center">
                                <button type="submit" class="btn btn-success button-send" :disabled="loading">{{loading ? 'Sto inviando...' : 'Invia'}}</button>
                                <div class="my-3" v-if="success">
                                    Messaggio inviato con successo
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.bg-blue{
    color: white;
}

.button-send{

    &:hover{
        background-color: rgb(1, 102, 1);
    }
}
    
</style>