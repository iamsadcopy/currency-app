<template>
    <ul>
        <li><router-link to="/">Курс валют</router-link></li>
        <li><router-link to="/converter">Конвертер валют</router-link></li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: #333;
    justify-content: center;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>