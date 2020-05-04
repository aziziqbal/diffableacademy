<template>
  <div id="pendidikan">
    <div class="section section-team gambar">
      <div style="background: rgba(70, 72, 82, 0.3);">
        <div class="container text-center">
          <div class="title-program">Fokus Pendidikan</div>
          <h5 class="sub-program" style="margin-bottom:40px;">
            Dalam pendidikan ini kami membagi menjadi beberapa keahlian. 
            Banyak keahlian yang ada di Diffable Academy. Diantaranya adalah Programmer,
            Multimedia dan Enterpreneur.
          </h5>
          <div class="team">
            <div class="row">
              <div class="col-md-4">
                <card>
                  <img slot="image" class="card-img-top" v-lazy="'/img/program/programmer.jpg'">
                  <div>
                    <h4 class="card-title">Programmer</h4>
                    <p class="card-text">
                      merupakan sebuah wadah untuk menyiapkan Programmer yang handal dan mengarahkan sesuai passion masing – masing seperti Back End, Front End, Android, IOS, IoT dan Embedded Systems  
                    </p>
                    <n-button type="primary" style="background-color:#26b5bd">Lihat Detail</n-button>
                  </div>
                </card>
              </div>
              <div class="col-md-4">
                <card>
                  <img slot="image" class="card-img-top" v-lazy="'/img/program/multimedia.jpg'">
                  <div>
                    <h4 class="card-title">Multimedia</h4>
                    <p class="card-text">
                      mempunyai tujuan mencetak seorang 
                      <span> Grafik Designer  </span>
                      yang mempunyai jiwa seni
                      seperti  Animator, Foto dan Video Grafi, Foto dan Video Editing, Desain Web dan Aplikasi(UI UX)
                    </p>
                    <n-button type="primary" style="background-color:#26b5bd">Lihat Detail</n-button>
                  </div>
                </card>
              </div>
              <div class="col-md-4">
                <card>
                  <img slot="image" class="card-img-top" v-lazy='"/img/program/enterpreneur.jpg"'>
                  <div>
                    <h4 class="card-title">Enterpreneur</h4>
                    <p class="card-text">
                      mencetak seorang Entrepreneur yang mempunyai jiwa wirausaha kreatif dan invotif dengan ketrampilan yang sesuai dengan perkembangan jaman
                    </p>
                    <n-button type="primary" style="background-color:#26b5bd">Lihat Detail</n-button>
                  </div>
                </card>
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
  .card-title {
    text-align:center;
    font-family: Montserrat-Bold;
    color:#54595F;
    margin-top:10px;
  }
  .card-text {
    text-align:justify;
    color:#626262;
    font-family: Montserrat-Light;
    line-height: 28px;
    margin-bottom:20px;
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
  .title-program {
    font-family: Montserrat-Bold;
    font-size: 30px;
    line-height: 50px;
    text-transform: uppercase;
    z-index: 99;
    color:white;
    position: relative;
    display: inline-block;
    transition: transform 0.5s, color 0.5s;
    transition-timing-function: cubic-bezier(0.2,1,0.3,1);
  }
  .sub-program {
    font-family: Montserrat-Light;
    margin-top:20px;
    font-size: 16px;
    text-align: center;
    color:white;
    line-height: 28px;
    margin-bottom:20px;
  }
</style>
