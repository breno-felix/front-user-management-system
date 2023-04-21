<template>
  <div id="app">
    <SgusHeader :current-component="currentSectionComponent" @component-list-users="componentListUsers" />
    <SgusSection :current-component="currentSectionComponent" @component-register-users="componentRegisterUsers"/>
  </div>
</template>

<script>
import SgusHeader from './components/SgusHeader.vue'
import SgusSection from './components/SgusSection.vue';

export default {
  name: 'App',
  components: {
    SgusHeader,
    SgusSection
  },
  data() {
    return {
      currentSectionComponent: 'SgusSectionListUser'
    }
  },
  methods: {
    componentRegisterUsers() {
      this.currentSectionComponent = 'SgusSectionRegisterUser';
    },
    componentListUsers() {
      this.currentSectionComponent = 'SgusSectionListUser';
    }
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
