<template>
  <component :is="currentComponent" @component-register-users="componentRegisterUsers" ></component>
</template>

<script>
import SgusSectionListUser from './SgusSectionListUser.vue';
import {mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    SgusSectionRegisterUser: () => import ('./SgusSectionRegisterUser.vue'),
    SgusSectionListUser
  },
  computed: {
    ...mapGetters({
      currentComponent: 'getCurrentComponent'
    })
  },
  methods: {
    ...mapMutations({
      componentRegisterUsers: 'setCurrentComponent'
    })
  }
}
</script>

<style></style>
