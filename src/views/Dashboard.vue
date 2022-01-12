<template>
<div class="dashboard">
  <h1 class="grey--text">Dashboard</h1>

   <v-container class="my-5">

    <v-row class="mb-3">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
            <v-icon left small > mdi-folder </v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
        </template>
          <span>Sort projects by project name</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
            <v-icon left small > mdi-account</v-icon>
            <span class="caption text-lowercase">By person name</span>
          </v-btn>
        </template>
          <span>Sort projects by person</span>
      </v-tooltip>
    </v-row>     

     <v-card flat v-for="project in projects" :key="project.title">
       <v-row no-gutters :class="`pa-5 project ${project.status}`">
         <v-flex xs12 md6>
           <div class="caption grey--text">Title</div>
           <div>{{ project.title }}</div>
         </v-flex>
         <v-flex xs6 sm4 md2>
           <div class="caption grey--text">Person</div>
           <div>{{ project.person }}</div>
         </v-flex>
         <v-flex xs6 sm4 md2>
           <div class="caption grey--text">Date</div>
           <div>{{ project.due }}</div>
         </v-flex>
         <v-flex xs6 sm4 md2>
          <div>
            <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
          </div> 
         </v-flex>
       </v-row>
       <v-divider></v-divider>
     </v-card>

   </v-container>

</div>
</template>

<script>

  export default {
    name: 'dashboard',

    components: {
    },

    data(){
      return {
        projects: [
          { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    }
  }
</script>

<style>
.project.complete{
  border-left: 4px solid blue;
}
.project.ongoing{
  border-left: 4px solid rgb(221, 236, 3);
}
.project.overdue{
  border-left: 4px solid rgb(150, 10, 10);
}

.v-chip.complete{
  background: rgb(0, 189, 25) !important;
}
.v-chip.ongoing{
  background: rgb(230, 226, 12) !important;
}
.v-chip.overdue{
  background: rgb(221, 6, 6) !important;
}
</style>