<template>
  <div id="app">
    <SgusHeader @component-list-users="componentListUsers" />
    <SgusSection/>
  </div>
</template>

<script>
import SgusHeader from './components/SgusHeader.vue';
import SgusSection from './components/SgusSection.vue';
import {mapGetters, mapMutations} from 'vuex';


export default {
  name: 'App',
  components: {
    SgusHeader,
    SgusSection
  },
  computed: {
    ...mapGetters({
      currentComponent: 'getCurrentComponent'
    })
  },
  methods: {
    ...mapMutations({
      componentListUsers: 'setCurrentComponent'
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');
@import url('https://fonts.cdnfonts.com/css/gacor-personal-use');

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #000000;
  box-sizing: border-box;
  list-style: none;
}

body {
  background: #FAFAFA;
}
</style>
