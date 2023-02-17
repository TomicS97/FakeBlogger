<template>

  <body>
    <div id="app" v-if="isLoggedIn">
      <Header />
      <button class="button" v-on:click="logout">Logout</button>
      <NewBlog class='newBlog' v-on:add-blog="newBlog" v-if="isAdmin" />
      <form class="search" @submit="search">
        <input type="text" v-model="search" name="search" placeholder="Search Blogs" />
      </form>
      <Blogs v-bind:blogs="filterBlogs" v-on:delete-blog="deleteBlog" />
    </div>
  </body>
</template>

<script>
import Blogs from "../components/blogs/Blogs.vue";
import Header from "../components/layout/Header.vue";
import NewBlog from "../components/blogs/NewBlog.vue";
import axios from "axios";

let isAdmin;
let isLoggedIn;


export default {
  name: "App",
  components: {
    Blogs,
    Header,
    NewBlog,
  },
  data() {
    return {
      blogs: [
        {
          title: "",
          body: "",
          editing: false,
        },
      ],
      search: "",
      isAdmin: this.$store.getters['users/getIsAdmin'],
      isLoggedIn: this.$store.getters['users/getIsLoggedIn']
    };
  },
  computed: {
    filterBlogs: function blogFilter() {                                                               //Search from data(Blogs)
      return this.blogs.filter((blogForSearch) => {
        return blogForSearch.title.match(this.search);
      });
    }
  },
  methods: {
    search(e){
      e.preventDefault();
    },
    logout() {                                                                                  //logout
      this.$store.dispatch('users/logout').then(() => this.$router.push('/'));
    },
    deleteBlog(id) {                                                                           //Delete file from local storge.
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          this.blogs = this.blogs.filter((blog) => blog.id !== id);
          alert("Deleted successfully");
          return res;
        })
        .catch((error) => alert(error));
    },
    newBlog(newBlogCreate) {                                                                  //Add new file in local storge.
      const { title, body } = newBlogCreate;
      axios
        .post("https://jsonplaceholder.typicode.com/posts", { title, body })
        .then((res) => (this.blogs = [...this.blogs, res.data]))
        .catch((error) => alert(error));
    },
  },
  created() {
    axios                                                                                     //Loading data from a JSON file.
      .get("https://jsonplaceholder.typicode.com/posts?_limit=20")
      .then((result) => (this.blogs = result.data))
      .catch((error) => alert(error));

    isLoggedIn = this.$store.getters['users/getIsLoggedIn']
    if (isLoggedIn === false) {
      this.$router.push('/')
    }

  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  margin-bottom: 50px;
  width: 100%;
}

form .search {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 50px;
}

input[name="search"] {
  width: 30%;
  padding: 10px;
  border-radius: 12px;
  margin-left: 35%;
  margin-top: 50px;
}

.addBlog {
  margin-top: 20px;
}

.button {
  width: 65px;
  margin-left: 95%;
}
</style>
