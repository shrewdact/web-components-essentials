<template>
  <div class="hello">
    <h1>VueJS Application using Web Components</h1>
    <p>{{show ? 'open': 'closed'}}</p>
    <x-dropdown :title="myTitle" @show="log">
      Hello from Web Component in Vue!
    </x-dropdown>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function(){
    return {
      myTitle: 'project-vue',
      show: false
    }
  },
  methods: {
    log: function (event){
      console.log(event);
      this.show = event.detail;
    }
  }
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
</style>
