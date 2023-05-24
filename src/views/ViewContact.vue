<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae libero neque asperiores facilis necessitatibus nisi, saepe perspiciatis quisquam sapiente dicta ut at officiis perferendis nesciunt iure excepturi placeat alias et!</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="">
      </div>
      <div class="col-md-6">
        <div class="list-group">
          <ul class="list-group">
            <li class="list-group-item">Name: 
              <span class="fw-bold">Name</span>
            </li>
            <li class="list-group-item">Email: 
              <span class="fw-bold">Email</span>
            </li>
            <li class="list-group-item">Mobile: 
              <span class="fw-bold">Mobile</span>
            </li>
            <li class="list-group-item">Company: 
              <span class="fw-bold">Name</span>
            </li>
            <li class="list-group-item">Title: 
              <span class="fw-bold">Title</span>
            </li>
            <li class="list-group-item">Group: 
              <span class="fw-bold">Mobile</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <router-link to="/" class="btn btn-success">Back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ViewContact',
  components: {}
}
</script>