<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">Rater</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="/one">One</b-nav-item>
          <b-nav-item href="/two">Two</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Serach" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="/user/profile">Profile</b-dropdown-item>
            <b-dropdown-item href="/user/logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <main role="main" class="container">
      <h1>Submit New Rating</h1>

      <div v-if="!success">
        <b-form @submit="formSubmit" novalidate>
          <b-form-group label="Brand" label-for="brand" :state="brandState" :invalid-feedback="'Brand is required.'">
            <b-form-input id="brand" v-model.trim="form.brand" required :state="brandState" placeholder="Who makes, sells or serves this product?" />
          </b-form-group>

          <b-form-group label="Name" label-for="name">
            <b-form-input id="name" v-model.trim="form.name" required />
          </b-form-group>

          <b-form-group label="Rating" label-for="rating" description="Give a score 1-5">
            <b-form-input id="rating" v-model="form.rating" class="form-control-range" type="range" min="0" max="5" step="0.5" />
          </b-form-group>

          <p>{{form.rating}}</p>

          <b-button type="submit" variant="primary" v-bind:disabled="submitting">Submit</b-button>&nbsp;
        </b-form>
      </div>
      <div v-else>
        <p>Thanks for your submission!</p>
      </div>
    </main>
  </div>
</template>

<script>

const initialBrand = 'test'

export default {
  data() {
    return {
      form: {
        brand: '',
        name: '',
        rating: 2.5
      },
      submitted: false,
      submitting: false,
      success: false,
    }
  },
  methods: {
    formSubmit (evt) {
      evt.preventDefault()

      console.log(evt)
      console.log(this.form)

      this.submitted = true
      this.submitting = true
    },
    formReset (evt) {
      this.form.brand = initialBrand
    }
  },
  computed: {
    brandInvalid() {
      if (!this.submitted) {
        return false
      }

      return this.form.brand.length == 0
    },
    brandState () {
      if (!this.submitted) {
        return null
      }

      return this.form.brand.length > 0
    }
  }
}
</script>

<style>
body {
  padding-top: 5rem;
}
</style>
