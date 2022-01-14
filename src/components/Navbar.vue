<template>
    <nav>
        <v-app-bar outlined app flat>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Recluta</span>
                <span>chat</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <!-- dropdown menu -->
    <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="text--grey" dark v-bind="attrs" v-on="on">
                <v-icon left>mdi-chevron-down</v-icon>
                <span>Menu</span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="(item, index) in links" :key="index" router :to="item.route">
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>


            <v-btn text small color="grey">
                <span>Sign Out</span>
                <v-icon right> mdi-exit-to-app </v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer  v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex>
                    <v-avatar size="100">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                </v-flex>
            </v-layout>

            <v-layout column align-center>
                <p class="white--text subtitle-1 mt-1 font-weight-medium" >
                    Kivitruco
                </p>
                <v-flex class="mt-4 mb-3">
                    <Popup />
                </v-flex>
            </v-layout>


            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon left class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>



<script>

import Popup from './Popup.vue'

export default {

    components: {Popup},

    data(){
        return{
            drawer: false,
            links: [
                { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
                { icon: "mdi-folder", text: "My projects", route: "/projects" },
                { icon: "mdi-account-multiple", text: "Team", route: "/team" },
            ]
        }
    }
}
</script>