<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field" :class="{ error: v$.form.email.$errors.length }">
      <label for="">Email</label>
      <input class="form-control"  type="email" v-model="v$.form.email.$model">
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.email.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <!-- password -->
    <div class="input-field" :class="{ error: v$.form.password.$errors.length }">
      <label for="">Пароль</label>
      <input class="form-control"  type="password" v-model="v$.form.password.$model">
      <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    </div>

    <!-- Submit Button -->
    <div class="card-action">
      <div>
      <button class="btn waves-effect waves-light auth-submit"
      type="submit"
      :disabled="v$.form.$invalid">Войти<i class="material-icons right">send</i></button>
      </div>
    <p class="center">
        Нет аккаунта?
        <router-link to='/register'>Зарегистрироваться</router-link>
    </p>
    </div>

  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  setup () {
    return { v$: useVuelidate() }
  },

  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations () {
    return {
      form: {
        email: {
          required, email
        },
        password: {
          required,
          min: minLength(6)
        }
      }
    }
  },
  methods: {
    async onSubmit () {
      const formData = {
        email: this.form.email,
        password: this.form.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>
