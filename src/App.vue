<template>
  <div class="appx">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/ping">Go to Ping</router-link> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/persons">Go to Persons</router-link></a>
        </li>
      </ul>
    </div>
  </nav>
  <!--<p>
    <router-link to="/">Home</router-link> <br>
    <router-link to="/ping">Go to Ping</router-link> <br>
    <router-link to="/persons">Go to Persons</router-link>
  </p>-->


    <router-view/>
  </div>
</template>


<style>
.appx {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a{
  color:#fff;
}
</style>
