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
            </v-card>
    </v-dialog>
</template>

<script>


export default{

}
</script>
