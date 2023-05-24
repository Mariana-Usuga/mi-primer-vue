<template>
  <div class="container mt-3">
    <div class="col">
      <p class="h3 text-success fw-bold">
        <router-link to="/contacts/add" class="btn btn-success btn-sm">
          <i class="fa"></i>New
        </router-link>
      </p>

      <form action="">
        <div>
          <input type="text" class="form-control" placeholder="Search name">
        </div>
        <div>
          <input type="submit" class="btn btn-outline-dark">
        </div>
      </form>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md">
        <div class="card my-2 shadow-lg">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" 
                alt="" class="contact-img">
              </div>
              <div class="col-sm-7">
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
                </ul>
              </div>
              <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                  Ver
                </router-link>
                <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                  Edit
                </router-link>
                <button class="btn btn-danger my-1">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactManager',
  components: {}
}
</script>