<template>
	<html>

	<head>
		<title>Slide Navbar</title>
		<link rel="stylesheet" type="text/css" href="slide navbar style.css">
		<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
	</head>

	<body style="margin-left: 160%; margin-top: 30%;">
		<div class="main" @submit="login" >
			<input type="checkbox" id="chk" aria-hidden="true">
			<h1 class="ml-40 mt-40" style="color: white;">Login FakeBlogger</h1>
			<div class="mt-60">
				<input type="text" filled v-model="username" placeholder="Enter username" required />
				<input type="password" filled v-model="password" placeholder="Enter password" required />
				<button class="ml-68 mt-60" type="submit" v-on:click="login">Login</button>
				<router-view />
			</div>
		</div>
	</body>

	</html>
</template>

<script>
import { reactive } from 'vue';

export default {
	name: "Login",
	methods: {
		login() {																				//Login in app. It was done as a simulation because we don't have a backend side 
			let loginForm;																		//and we can't hash passwords and we don't have authentication.
			if (this.username == 'admin' && this.password == 'admin') {
				loginForm = reactive({
					username: 'admin',
					password: 'admin'
				});
			} else if (this.username == 'user' && this.password == 'user') {
				loginForm = reactive({
					username: 'user',
					password: 'user'
				});
			}
			console.log(this.username);
			this.$store
				.dispatch('users/login', loginForm)
				.then(() => {
					if (this.$store.getters['users/getIsLoggedIn']) this.$router.push({ path: '/home' });
				})
				.then(() => alert('Login successful.'))
				.catch((e) =>
					alert('Wrong credencial!')
				);
		}
	}
}
</script>
<style>
body {
	margin: 0;
	padding: 0;
	margin-bottom: 50px;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
	background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}

.main {
	width: 350px;
	height: 500px;
	background: red;
	overflow: hidden;
	background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
	left      : 50%;
    top       : 50%;
    position  : absolute;
    transform : translate(-50%, -50%);
}

#chk {
	display: none;
}

.signup {
	position: relative;
	width: 100%;
	height: 100%;
}

label {
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}

input {
	width: 60%;
	height: 40px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}

button {
	width: 60%;
	height: 40px;
	justify-content: center;
	display: block;
	color: #fff;
	background: #573b8a;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}

button:hover {
	background: #6d44b8;
}

.login label {
	color: #573b8a;
	transform: scale(.6);
}

#chk:checked~.login {
	transform: translateY(-500px);
}

#chk:checked~.login label {
	transform: scale(1);
}

#chk:checked~.signup label {
	transform: scale(.6);
}

.mt-60 {
	margin-top: 60px;
}

.mt-40 {
	margin-top: 40px;
}

.ml-40 {
	margin-left: 40px;
}

.ml-68 {
	margin-left: 68px;
}
</style>