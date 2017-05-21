<template>
  <div class="hello">
    <div class="left">
      left
    </div>
    <div class="right">
      right
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
   display: flex;
   bottom: 0;
   position: fixed;    
   width: 100%;
}
.left {
  flex: 1;
  background-color: red;
}
.right{
  flex: 4;
  background-color: blue;
}
</style>
