<template>
  <header class="header">
    <h1>Welcome</h1>
    <h3>FakeBlogger</h3>
    <img src="../../assets/logo.png"/>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background: linear-gradient(90deg,
      rgb(26, 6, 161) 0%,
      rgba(100, 115, 255, 1) 100%);
  color: white;
  text-align: center;
  padding: 50px;
}
img{
  width: 100px;
  height: 100px;
}
</style>
