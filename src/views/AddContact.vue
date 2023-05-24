<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold"> Add Contact</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae libero neque asperiores facilis necessitatibus nisi, saepe perspiciatis quisquam sapiente dicta ut at officiis perferendis nesciunt iure excepturi placeat alias et!</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <form action="">
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Photo URL">
          </div>
          <div class="mb-2">
            <input type="email" class="form-control" placeholder="Email">
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Mobile">
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Company">
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" placeholder="Title">
          </div>
          <div class="mb-2">
            <select class="form-control">
              <option value="">Select group</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" placeholder="Create">
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" 
        alt="" class="contact-img">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AddContact',
  components: {}
}
</script>