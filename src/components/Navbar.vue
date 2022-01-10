<template>
    <nav>
        <v-app-bar outlined app flat>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Recluta</span>
                <span>chat</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text small flat color="grey">
                <span>Sign Out</span>
                <v-icon right> mdi-exit-to-app </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer  v-model="drawer" app class="grey">
            <p>Test</p>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false
        }
    }
}
</script>