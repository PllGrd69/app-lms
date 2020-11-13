<template>
  <div class="hello">
    
 <!--   <p> 
      {{ list }}
    </p> -->
    <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido Paterno</th>
              <th scope="col">Apellido Materno</th>
              <th scope="col">Sexo</th>
              <th scope="col">Dni</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, index) in list" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ d.Nombre }}</td>
              <td>{{ d.Apellido_p }}</td>
              <td>{{ d.Apellido_m }}</td>
              <td>{{ d.Sexo }}</td>
              <td>{{ d.Dni }}</td>
              
              
            </tr>
          </tbody>
        </table>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  name: 'Persona',
  data: function() {
    return {
      list: ""
    }
    
  },

  methods: {
    getPersona: function() {
      const path = 'http://localhost:8085/v2/persona';
      axios.get(path)
        .then((res) => {
          this.list = res.data.r;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
        
    },
     addPersona(payload) {
      const path = 'http://localhost:8085/v2/persona';
      axios.post(path, payload)
        .then(() => {
          this.getPersona();
          this.message = 'Añadido';
          this.showMessage = true;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.getPersona();
        });
    },
    editBook: function(cad) {
      console.log("edit "+cad+": "+this.message);

    },
  },

  created: function() {
    this.getBooks();
  }, 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
color: #42b983;
}
</style>