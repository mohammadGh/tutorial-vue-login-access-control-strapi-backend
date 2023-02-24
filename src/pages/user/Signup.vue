<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from "yup"
import { useUserStore } from '@/stores'

const credential = defineProps({})
const message = ref("")
const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  rePassword: yup.string().required().oneOf([yup.ref('password')], 'dose not match with our password'),
});

function onSubmit(values, {setErrors}) {
  const userStore = useUserStore()
  const { username, email, password } = values
  
  userStore
  .register(username,email, password)
  .catch(err=>setErrors({loginFailed:err}))
}

</script>

<template>
  <p>Login Page</p>


  <Form @submit="onSubmit" :validation-schema="schema" v-slot="{errors}">
    <div class="form-group">
      <label for="username">Username</label>
      <Field name="username" type="text" class="form-control" />
      <ErrorMessage name="username" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="email">email</label>
      <Field name="email" type="text" class="form-control" />
      <ErrorMessage name="email" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <Field name="password" type="password" class="form-control" />
      <ErrorMessage name="password" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="rePassword">Re-Password</label>
      <Field name="rePassword" type="password" class="form-control" />
      <ErrorMessage name="rePassword" class="error-feedback" />
    </div>

    <div class="form-group">
      <!-- <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Login</span>
            </button> -->
      <button type="submit" class="btn btn-primary mr-1">Register</button>
    </div>

    <div class="form-group">
      <div v-if="errors.loginFailed" class="alert alert-danger" role="alert">
        {{ errors.loginFailed }}
      </div>
    </div>
  </Form>
</template>