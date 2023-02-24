<script setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()

function shortenString(str, size) {
    const middle = '...'
    const len = size / 2
    return str.substring(0, len) + middle + str.substr(str.length - len)
}
</script>

<template>
    <p>Profile Page</p>
    <div>
        <p>
            User Info:
        <ul>
            <li v-for="(value, name, index) in userStore.user" :key="index">
                <template v-if="name === 'accessToken'"><strong>JWT Token</strong>: {{ shortenString(value,20) }} </template>
                <template v-else><strong>{{ name }}</strong>:{{ ' ' + value }}</template>
            </li>
        </ul>
        </p>
        <button @click="userStore.logout()">Logout</button>
    </div>
</template>