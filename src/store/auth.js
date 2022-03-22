import { initializeApp } from 'firebase/app'
export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await initializeApp.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
