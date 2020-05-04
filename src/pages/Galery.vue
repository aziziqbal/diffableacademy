<template>
  <div id="galeri" class="section section-navbars">
    <div id="navbar">
      <div class="navigation-example" style="background-color:#F7F7F7;">
        <div style="height:100%;">
        <div class="text-center">
          <div class="container" style="padding-top:70px;">
            <div class="title-program">Foto Kegiatan Diffable Academy</div>
            <div class="sub-program">Lokasi kegiatan pada gambar ini berada pada SLB N 1 Sleman Yogyakarta  </div>
            <carousel :perPageCustom="[[480, 2], [768, 3]]" :navigationEnabled="true" style="margin-top:70px;">
              <slide v-for="i in 10" :key="i" style="padding:5px;">
                <img :src="'/img/foto/' + i + '.jpeg'" style="display: block;"/>
              </slide>
            </carousel>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar, DropDown } from '@/components';
import VueGridLayout from 'vue-grid-layout';
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Navbar,
    DropDown,
    Carousel,
    Slide
  },
  data() {
    return {
      hovered: false
    };
  },
};
</script>
<style scoped>
  .gambar {
    /* background-image:url('img/4383.jpg') */
    /* background-image:url("../../../public/img/4383.jpg"); */
    background-image: url(https://d17ivq9b7rppb3.cloudfront.net/original/commons/partner-bg.jpg);
    
    /* background:url("../../../public/img/4383.jpg"); */

  }
  @media screen and (max-width: 425px) {
    .title-program {
      font-family: Montserrat-Bold;
      font-size: 20px;
      text-transform: uppercase;
      text-align:center;
      z-index: 99;
      position: relative;
      color:rgb(44,44,44);
      display: inline-block;
      transition: transform 0.5s, color 0.5s;
      transition-timing-function: cubic-bezier(0.2,1,0.3,1);
    }
    
  .sub-program {
    font-family: Montserrat-Light;
    margin-top:20px;
    font-size: 16px;
    text-align: center;
    color:rgb(44,44,44);
    line-height: 28px;
    margin-bottom:20px;
  }
  }
  @media screen and (min-width: 426px) {
  .title-program {
    font-family: Montserrat-Bold;
    font-size: 40px;
    line-height: 50px;
    text-transform: uppercase;
    text-align:center;
    z-index: 99;
    position: relative;
    color:rgb(44,44,44);
    display: inline-block;
    transition: transform 0.5s, color 0.5s;
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }
  
  .sub-program {
    font-family: Montserrat-Light;
    margin-top:20px;
    font-size: 16px;
    text-align: center;
    color:rgb(44,44,44);
    line-height: 28px;
    margin-bottom:20px;
  }
  }
</style>
