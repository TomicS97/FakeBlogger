<template>
  <div class="blog-item">
    <div class="blog-title-left">
      <div v-if="!editing" class="title-label">{{ blog.title }}</div>
      <input v-else class="blog-title-edit" type="text" v-model="blog.title" @keyup.enter="doneEdit()" />

      <button class="edit-me" @click="editBlog()" v-if="isAdmin">{{ button.name }}</button>
      <button @click="$emit('delete-blog', blog.id)" class="del" v-if="isAdmin">Delete</button>
    </div>
    <div class="blog-body-left">
      <div v-if="!editing" class="body-label">{{ blog.body }}</div>
      <textarea v-else class="blog-body-edit" type="text" v-model="blog.body" @keyup.enter="doneEdit()"></textarea>
    </div>
  </div>
</template>

<script>
let isAdmin;

export default {
  name: "BlogItem",
  props: ["blog"],

  data() {
    return {
      editing: false,
      button: {
        name: "Edit",
      },
      isAdmin: this.$store.getters['users/getIsAdmin'],
    };
  },

  methods: {
    editBlog() {                                                      //Edit data (Blog) in local storage. 
      this.editing = !this.editing;                                  //Depending on whether we need to edit or save the change, the name of the button changes
      if (this.editing == true) {
        this.button.name = "Save";
      } else {
        this.button.name = "Edit";
      }
    },

    doneEdit() {
      this.editing = false;
      this.button.text = "Edit";
    },
  },
};
</script>

<style scoped>
.blog-item {
  background: white;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-left: 25%;
}

.del {
  background: red;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  width: 80px;
  margin-left: 5px;
}

.blog-title-left,
.blog-body-left {
  display: flex;
  align-items: center;
}

.title-label {
  font-size: 2rem;
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}

.body-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
  font-size: 1.1rem;
}

.blog-title-edit,
.blog-body-edit {
  font-size: 15px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
}

.blog-body-edit {
  height: 100px;
}

.edit-me {
  background-color: green;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  width: 80px;
}

input {
  margin-right: 10px;
  background-color: #DCDCDC;
}

textarea {
  margin-top: 20px;
  background-color: #DCDCDC;
}
</style>
