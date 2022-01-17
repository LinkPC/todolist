<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" class="success">
                <span>Add new project</span>
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                    <h2>Add a new Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                    <v-menu :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field :rules="inputRules" tile label="Due date" prepend-icon="mdi-calendar-range" :value="formattedDate" v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker :rules="inputRules" scrollable no-title v-model="due"></v-date-picker>
                    </v-menu>
                    <v-btn class="success mx-0 mt-3" @click="submit" :loading="loading">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb'
import { collection, addDoc } from 'firebase/firestore';


export default {
    data(){
        return{
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimun length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        async submit() {
            if(this.$refs.form.validate()){
                this.loading = true;

                this.loading = true;
                await addDoc(collection(db, "projects"), {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.due), 'do MMM yyyy'),
                    person: 'jgpbDev',
                    status: 'ongoing'
                }).then(() => {
                    console.log('Added to DB');
                    this.dialog = false;
                    this.loading = false;
                    this.$emit('projectAdded');
                });
            }
        }
    },
    computed: {
        formattedDate() {
             return this.due ? format(parseISO(this.due), 'do MMM yyyy') : '';
        }
    }
}
</script>