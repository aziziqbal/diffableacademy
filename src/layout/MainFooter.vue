<template>
  <div id="footer">
    <div class="section section-team gambar">
      <div style="">
        <div class="container">
          <div class="row">
            <div class="col-md-5 kiri">
              <div style="background-color:;">
              <img src="img/footer.png" height="40" style="margin-bottom:20px;"/>
              </div>
              <div class="alamat demo-solution demo-solution--flexbox">
                <i class="fa fa-home" style="margin-right:10px;"></i>
                <span>
                  RT 03 RW 11, Dusun Kandangsari. Desa Sukoharjo, Kec Ngaglik, Kab Sleman, Yogyakarta <br>
                </span>
              </div>
              <div class="alamat demo-solution demo-solution--flexbox">
                <i class="fa fa-phone" style="margin-right:10px;"></i>
                <span>
                  +62859-2509-1508
                </span>
              </div>
              <div class="alamat demo-solution demo-solution--flexbox">
                <i class="fa fa-envelope" style="margin-right:10px;"></i>
                <span>
                  info@aziziqbal.com
                </span>
              </div>
            </div>
            <div class="col-md-4">
            </div>
            <div class="col-md-3 kanan">
              <div class="alamat demo-solution demo-solution--flexbox">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30" style="margin-right:10px;">
                  <path style="fill:#fff;" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                  </path>
                </svg>
                <svg style="margin-right:10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.1 512" width="30" height="30"><path style="fill:#fff;" d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"></path></svg>
                <svg style="margin-right:10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="30" height="30"><path style="fill:#fff;" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Card} from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    Card
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
  .gambar {
    background-image: url(https://d17ivq9b7rppb3.cloudfront.net/original/commons/partner-bg.jpg);
    background-position: center center;
    background-size: cover;
  }
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
  .alamat {
    font-family: Montserrat-Light;
    font-size: 12px;
    color:white;
    line-height: 18px;
    margin-bottom:5px;
  }
  .demo-solution--flexbox {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 700px) {
    .kanan {
      margin-top:20px;
    }
  }
</style>
