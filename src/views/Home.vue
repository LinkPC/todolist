<template>
<div class="home">
  <p>¡Hola vue! uwu</p>
  
  <v-btn class="pink white--text">click me</v-btn>
  <v-btn depressed color="pink">click</v-btn>
  <v-btn text color="pink">click</v-btn>

  <v-btn depressed class="pink white--text">
    <v-icon left> mdi-train </v-icon>
    <span>mugen</span>
  </v-btn>

  <v-btn depressed small class="pink white--text">
    <v-icon left small> mdi-train </v-icon>
    <span>mugen</span>
  </v-btn>

  <v-btn depressed large class="pink white--text">
    <span>mugen</span>
    <v-icon right large> mdi-train </v-icon>
  </v-btn>

  <v-btn fab depressed small dark color="purple">
    <v-icon> mdi-one-up </v-icon>
  </v-btn>
</div>
</template>

<script>

  export default {
    name: 'Home',

    components: {
    },
  }
</script>
