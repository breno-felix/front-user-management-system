<template>
  <component :is="currentComponent" @component-register-users="componentRegisterUsers"></component>
</template>

<script>
import SgusSectionListUser from './SgusSectionListUser.vue';

export default {
  components: {
    SgusSectionRegisterUser: () => import ('./SgusSectionRegisterUser.vue'),
    SgusSectionListUser
  },
  props: {
    currentComponent: String
  },
  methods: {
    componentRegisterUsers() {
      this.$emit('component-register-users');
    }
  }
}
</script>

<style></style>
