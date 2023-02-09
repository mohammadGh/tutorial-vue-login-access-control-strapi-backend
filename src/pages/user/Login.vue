<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from "yup"
import UserApi from '../../api/user.js';

 const credential=defineProps({})

 const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(6),
});

function onSubmit(values) {
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
    UserApi.login(values)
}

</script>

<template>
    <p>Login Page</p>
    

    <Form  @submit="onSubmit" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username</label>
          <Field name="username" type="text" class="form-control" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
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
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>

</template>