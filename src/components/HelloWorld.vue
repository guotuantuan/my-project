<template>
  <div >
    <div>vue</div>

  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  data () {
    return {
      msg: 'Welcome11 to Your Vue.js App'
    }
  },
  created:function () {
    debugger
    let url = "http://localhost:8769/api-hi/login";
    this.$axios.get(url).then(res=>{
//      console.log(123)
    })

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
</style>
