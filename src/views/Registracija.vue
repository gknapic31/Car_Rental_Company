<template>
  <div id="prvi">
    <section class="container-fluid">
      <section class="row justify-content-center">
        <section class="col-12 col-sm-6 col-md-4">
          <form class="form-container">
            <div class="form-group">
              <h4 class="text-center font-weight-bold">SIGN UP</h4>
              <label for="InputEmail1">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                aria-describeby="emailHelp"
                placeholder="Enter email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="text">Name and Surname</label>
              <input
                type="text"
                class="form-control"
                placeholder="Name and Surname"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <label for="number">Phone number</label>
              <input
                type="number"
                class="form-control"
                placeholder="Phone number"
                v-model="phonenumber"
              />
            </div>
            <div class="form-group">
              <label >Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <label >Repeat Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="repeatpassword"
              />
            </div>
            <button
              type="button"
              onsubmit="return false"
              @click="registracija"
              class="btn btn-primary btn-block"
            >
              Submit
            </button>
            <div class="form-footer">
              <p>Already have an account? <a href="Prijava">Sign In</a></p>
            </div>
          </form>
        </section>
      </section>
    </section>
  </div>
</template>
<style>
#prvi{
  margin-top: 75px;
}
</style>

<script>
import { auth, createUserWithEmailAndPassword } from "@/firebase";
export default {
  name: "registracija",
  data() {
    return {
      email: "",
      username: "",
      phonenumber: "",
      password: "",
      repeatpassword: "",
    };
  },
  methods: {
    registracija() {
      if (this.password==this.repeatpassword) {
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert('Uspješna registracija :)')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        }); 
      }
      else {
        this.password='';
        this.repeatpassword='';
       console.log('n')}

    },
  },
};
</script>