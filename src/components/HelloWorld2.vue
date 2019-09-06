<template>
  <div >
   <div>2</div>
  </div>
</template>

<script>
  /* eslint-disable space-in-parens */

  export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: ''
    }
  },
  mounted: function () {
    console.log('=============')
    this.$axios.get('/hello?name=forezp').then( response => (
      console.log(response)

    ))
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
