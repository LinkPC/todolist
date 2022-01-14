<template>
  <v-app style="background: #E8E8E8">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
