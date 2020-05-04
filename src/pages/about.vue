<template>
  <div id="profile">
    <div class="section section-nucleo-icons" style="background-color:#f7f7f7;">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12">
            <h2 class="title-about">Selamat Datang di Diffable Academy</h2>
            <h5 class="sub-about">
             <span style="font-family:  Montserrat-Bold;color:#24A8AF;font-weight:bold;">Diffable Academy</span> adalah sebuah tempat pendidikan non formal 
              bagi penyandang disabilitas yang berlokasi di Yogyakarta, 
              Membekali muridnya dengan skill yang dibutuhkan pada 
              era industri 4.0 dan mengarahkan belajar sesuai PASSION mereka.
              <!-- Berikut ini adalah 3 pilar yang kami fokus untuk menyelesaikan masalah disabilitas : -->
            </h5>
            <n-button type="primary" size="lg">Kontak Kami</n-button>
          </div>
          <div class="col-lg-5 col-md-12" style="background-color:;display:table;height:60vh;">
            <div class="icons-container" style="text-align:center;display: table-cell;vertical-align: middle;">
              <img v-lazy="'/img/19573.jpg'" style="height:280px;vertical-align:middle;"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { Button } from '@/components'
export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    [Button.name]: Button,
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
    .title-about {
    font-family: Montserrat-Bold;
    font-size: 25px;
    line-height: 30px;
    text-transform: uppercase;
  }
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
