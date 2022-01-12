<template>
<div class="team">
  <h1 class="grey--text">Team</h1>
  
    <v-container class="my-5">
      
      <v-row>
        <v-flex sx12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1 font-weight-medium">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left> mdi-message</v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-row>

    </v-container>

</div>
</template>

<script>

  export default {
    name: 'team',

    components: {
    },

    data() {
      return {
        team: [
          { name: 'The net Ninja', role: 'Web developer' },
          { name: 'Ryu', role: 'Graphic desginer' },
          { name: 'Chun Li', role: 'Web developer' },
          { name: 'Gouken', role: 'Social media maverick' },
          { name: 'Yoshi', role: 'Sales guru' }
        ]
      }
    }
  }
</script>