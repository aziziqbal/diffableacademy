<template>
  <div>
    <home />
    <about />
    <program />
    <galery />
  </div>
</template>
<script>
import Home from './Home'
import About from './about'
import Program from './Landing'
import Galery from './Galery'

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Home,
    About,
    Program,
    Galery
  }
};
</script>
<style scoped>
  @font-face {
    font-family: Montserrat;
    src: url(../assets/fonts/Montserrat-Medium.otf) format("truetype");
  }
  @font-face {
    font-family: Montserrat-Bold;
    src: url(../assets/fonts/Montserrat-Bold.otf) format("truetype");
  }
  @font-face {
    font-family: Montserrat-Light;
    src: url(../assets/fonts/Montserrat-Light.otf) format("truetype");
  }
  .title-about {
    font-family: Montserrat-Bold;
    font-size: 30px;
    line-height: 50px;
    text-transform: uppercase;
  }
  .sub-about {
    font-family: Montserrat-Light;
    margin-top:20px;
    font-size: 16px;
    text-align: justify;
    line-height: 28px;
    margin-bottom:20px;
  }
  @media screen and (max-width: 425px) {
    .main-title {
      font-family: Montserrat;
      font-size: 25px;
      line-height: 50px;
      text-align:center;
    }
    .sub {
      font-family: Montserrat-Light;
      font-size: 15px;
      line-height: 50px;
      text-align:center;
    }
    .daftar {
      text-align: center;
    }
    .button-edit {
      background-color:transparent;
      border: 1px solid white; 
      color:white;
      font-size: 15px;
      padding:10px;
      font-family: Montserrat-Light;
    }
    .button-edit:hover {
      background-color: white;
      color:black;
    }
  }
  @media screen and (min-width: 426px) {
    .main-title {
      font-family: Montserrat;
      font-size: 35px;
      line-height: 50px;
    }
    .sub {
      font-family: Montserrat-Light;
      font-size: 20px;
      line-height: 50px;
    }
    .button-edit {
      background-color:transparent;
      border: 1px solid white; 
      color:white;
      font-size: 15px;
      padding:10px;
      font-family: Montserrat-Light;
    }
    .button-edit:hover {
      background-color: white;
      color:black;
    }
  }
  
  
  
</style>
