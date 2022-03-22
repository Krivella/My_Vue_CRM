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
    <div class="input-field" :class="{ error: v$.form.password.$errors.length }">
      <label for="">Пароль</label>
      <input class="form-control"  type="password" v-model="v$.form.password.$model">
      <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <!-- error message -->
      <div class="input-errors" v-for="(error, index) of v$.form.password.$errors" :key="index">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
    <div class="input-field">
       <label for=""> Имя</label><input class="form-control"  type="text" v-model="v$.form.name.$model">
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.name.$errors" :key="index">
            <div class="error-msg">{{ error.$message }}</div>
          </div>
    </div>
    <p>
      <label>
        <input type="checkbox" v-model="agree"/>
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          :disabled="v$.form.$invalid"
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export function validName (name) {
  const validNamePattern = /^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$/
  if (validNamePattern.test(name)) {
    return true
  }
  return false
}

export function validEmail (email) {
  const validEmailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (validEmailPattern.test(email)) {
    return true
  }
  return false
}

export default {
  setup () {
    return { v$: useVuelidate() }
  },

  data () {
    return {
      form: {
        email: '',
        password: '',
        name: '',
        agree: false
      }
    }
  },
  validations () {
    return {
      form: {
        email: {
          required,
          email,
          email_validation: {
            $validator: validEmail,
            $message: 'Неверный формат поля емэйл'
          }
        },
        password: {
          required,
          min: minLength(6)
        },
        name: {
          required,
          name_validation: {
            $validator: validName,
            $message: 'Некорректное имя!'
          }
        }
      }
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name
      }
      console.log(formData)
      this.$router.push('/')
    }
  }
}
</script>
