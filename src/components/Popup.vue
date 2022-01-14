<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn  v-bind="attrs" v-on="on" class="success">
                <span>Add a New Project</span>
            </v-btn>
        </template>
            <v-card>
                <v-card-title>
                    <h2>Add a New Project</h2>
                </v-card-title>

                <v-card-text>
                    <v-from class="px-3">
                        <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                        <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>

                        <v-menu v-model="fromDateMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
                            offset-y max-width="290px" min-width="290px">
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    label="From"
                                    prepend-icon="mdi-calendar-range"
                                    readonly
                                    :value="fromDateDisp"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="fromDateVal"
                                no-title
                                @input="fromDateMenu = false"
                                :min="minDate"
                            ></v-date-picker>
                        </v-menu>

                        <v-btn text class="success mx-0 mt-3" @click="submit"> Add project</v-btn>
                    </v-from>
                </v-card-text>



            </v-card>
    </v-dialog>
</template>

<script>


export default{
    data(){
        return{
            title: '',
            content: '',
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            fromDateMenu: false,
            fromDateVal: null,
            minDate: "2020-01-05",
            maxDate: "2019-08-30"
        }
    },
    methods: {
        submit(){
            console.log(this.title, this.content)
        }
    },
    computed: {
    fromDateDisp() {
      return this.fromDateVal;
      // format/do something with date
    }
}
}
</script>