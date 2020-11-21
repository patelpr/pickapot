<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center ">
    <h1>Add a Pot</h1>
    </v-row>
    <v-row class="d-flex justify-center ">
        
      <v-col cols="3" md="3">
        <v-text-field
          label="Amount"
          type="number"
          outlined
          v-model="amt"
          required
        ></v-text-field>
  </v-col>
        <v-col cols="3" md="3">
        <v-text-field
          label="Increments"
          outlined
          type="number"
          required
          v-model="inc"
        ></v-text-field>
          </v-col>

      <v-col cols="2" md="2">
        <v-btn large color="primary" width="100%" @click.prevent="addItem">Add</v-btn>
      </v-col>

    </v-row>
    <v-row class="text-center"><v-col class="text-center"><h1>Fund a Pot</h1></v-col></v-row>

 


    <transition-group name="fade" >
    


      <v-card
        class="mx-auto pa-3 ma-2 text-center"
        max-width="600"
        v-for="Pot in Pots"
        :key="Pot.id"
      >
          <v-row class="d-flex justify-center ">
    </v-row>
        <v-row>
          <v-col cols="10">
            <v-list-item-title class="headline mb-1">Amount:{{Pot.amt}}</v-list-item-title>
          </v-col>
          <v-col cols="1">
            <v-btn icon color="red" @click="invest(Pot.id,Pot.inc)">
              <v-icon>mdi-cash</v-icon>
            </v-btn>



          </v-col>
        </v-row>
<cont id="data-cont">

            <v-row>
          <v-col cols="12" md="12">
        <v-text-field
          label="Name"
          v-model="name"
        ></v-text-field>
          </v-col>

    </v-row>
    <v-row>
        
      <v-col cols="3" md="3">
        <v-text-field
          label="Shares"
          v-model="shares"
          required
          type="number"
        ></v-text-field>
  </v-col>
      <v-col cols="9" md="9">
        <v-text-field
          label="Email"
          required
          v-model="email"
        ></v-text-field>
          </v-col>

    </v-row>
    <v-row>
          <v-col cols="12" md="12">
        <v-text-field
          label="Address"
          required
          v-model="address"
        ></v-text-field>
          </v-col>

    </v-row>
</cont>

                 <v-progress-linear
      v-bind:[value]="Pot.amt/Pot.funded"

      v-model=Pot.funded
      color="amber"
      height="5"
    ></v-progress-linear>

      </v-card>
         
    </transition-group>
  </div>
</template>

<script>
import { db } from "../firebase/db";
  
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      Pots: [],amt: 0,inc:0,shares:0,email:"",address:"",name:""
    };
  },
  methods: {
     invest(id,inc) {
       let ref = db.collection("Pots").doc(id)
         for(let i = this.shares; i !== 0; i--){
       this.email && ref.update({
           funded:firebase.firestore.FieldValue.increment(inc),
           bidders:firebase.firestore.FieldValue.arrayUnion({name:this.name,email:this.email,address:this.address,share: i})
       })}
      // ref.get(bidders.length) * Math.random()

      //    ref.get(funded) >= this.amt && winnerSelection(ref);

       this.name=""
         this.email=""
         this.address=""
      },
    async addItem() {
      if (this.amt) {
        await db.collection("Pots").add({ amt: this.amt,inc: this.inc, created: Date.now() });

        this.amt = 0;
        this.inc = 0;
      }
    },
    // winnerSelection(ref){
    //   ref.get(bidders.length) * Math.random()

    // }
  },
  firestore: {
    Pots: db.collection("Pots"),
    
  }        
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
