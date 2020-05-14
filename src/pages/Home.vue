<template>
  <div id="beranda">
    <div class="page-header clear-filter" filter-color="black" style="   background: rgba(0, 0, 0, 0.5);">
      <parallax
        class="page-header-image"
        style="background-image:url('img/4308.jpg'); "
      >
      </parallax>
      <div class="container">
        <div class="content-center brand coba" style="text-align:left;max-width:none;top:40%;">
          <div class="main-title">
            Wujudkan Pendidikan Gratis dan Berkualitas bagi Penyandang
            <span style="color:#26B4BC;font-weight:550;"> Disabilitas </span>
          </div>
          <div class="sub">
            Mari Bergabung Bersama Kami
          </div>
          <div class="daftar">
            <button @click="pendaftaran('Pelajar / Murid')" class="button-edit" size="lg">Murid Difabel</button>
            <button @click="pendaftaran('Relawan Pegajar')" class="button-edit" size="lg" style="margin-left:20px;">Relawan Pengajar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Parallax } from '@/components'
export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax
  },
  methods: {
    pendaftaran (x) {
      localStorage.setItem('posisi', x)
      this.$router.push('/pendaftaran')
    }
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
