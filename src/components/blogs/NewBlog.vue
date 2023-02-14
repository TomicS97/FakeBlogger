<template>
  <div>
    <form @submit="addBlog">
      <input type="text" name="title" v-model="title" placeholder="Enter Title" required />
      <input type="text" name="body" v-model="body" placeholder="Add Text to Blog" required />
      <button type="submit" class="btn">Add blog</button>
    </form>
  </div>
</template>

<script>


export default {
  name: "AddBlog",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    addBlog(e) {                                  //Add new data (Blog) in local storge.
      e.preventDefault();
      const newBlog = {
        title: this.title,
        body: this.body,
        editing: false,
      };
      this.$emit("add-blog", newBlog);
      this.title = "";
      this.body = "";
      alert("New blog saved!");
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

input[type="text"] {
  width: 50%;
  margin-top: 5px;
  padding: 10px;
  border-radius: 12px;
}

button {
  background: linear-gradient(90deg,
      rgb(26, 6, 161) 0%,
      rgba(100, 115, 255, 1) 100%);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 44%;
  width: 150px;
  height: 50px;
  border-radius: 12px;
}

.alert {
  position: relative;
  top: 10;
  left: 0;
  width: auto;
  height: auto;
  padding: 10px;
  margin: 10px;
  line-height: 1.8;
  border-radius: 5px;
  cursor: hand;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 400;
}

.alertCheckbox {
  display: none;
}

:checked+.alert {
  display: none;
}

.alertText {
  display: table;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
}

.alertClose {
  float: right;
  padding-top: 5px;
  font-size: 10px;
}

.clear {
  clear: both;
}

.info {
  background-color: #EEE;
  border: 1px solid #DDD;
  color: #999;
}

.success {
  background-color: #EFE;
  border: 1px solid #DED;
  color: #9A9;
}

.notice {
  background-color: #EFF;
  border: 1px solid #DEE;
  color: #9AA;
}

.warning {
  background-color: #FDF7DF;
  border: 1px solid #FEEC6F;
  color: #C9971C;
}

.error {
  background-color: #FEE;
  border: 1px solid #EDD;
  color: #A66;
}
</style>
