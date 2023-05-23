import Home from '../../views/Home.vue';
import ContactManager from '../../views/ContactManager.vue';
import AddContact from '../../views/AddContact.vue'
import EditContact from '../../views/EditContact.vue'
import ViewContact from '../../views/ViewContact.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/contacts',
    component: Home
  },
  {
    path: '/contacts',
    name: 'ContactsManager',
    component: ContactManager
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router