<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">State</router-link> |
      <router-link to="/getters">Getters</router-link> |
      <router-link to="/mutations">Mutations</router-link> |
      <router-link to="/actions">Actions</router-link> |
    </div>
    <router-view/>
  </div>
</template>