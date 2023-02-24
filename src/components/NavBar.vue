<script setup>
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const {user}= storeToRefs(userStore)

</script>

<template>
    <nav>
    <h3><img src="../assets/vue.svg" class="logo vue" alt="Vue logo" /> Vue & Users</h3>
<ul>
  <li><router-link to="/">Home</router-link></li>
  
  <li><router-link to="/normal-user-page/">Normal User Page</router-link></li>
  <li><router-link to="/admin-user-page/">Admin User Page</router-link></li>

  <li v-if="!user"><router-link  to="/login/">Login</router-link></li>
  <li v-if="!user"><router-link  to="/signup/">Signup</router-link></li>
  <li v-if="user"><router-link  to="/profile/">User Profile</router-link></li>

</ul>
</nav>
</template>

<style scoped>
</style>