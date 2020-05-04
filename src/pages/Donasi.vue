<template>
  <div>
    <!-- <div class="page-header-small clear-filter" filter-color="black" style="   background: rgba(0, 0, 0, 0.5);"> -->
    <div class="page-header page-header-small" filter-color="black" style="   background: rgba(0, 0, 0, 0.5);">
      <parallax
        class="page-header-image"
        style="background-image: url('img/foto/11.png')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">DONASI</h1>
          <!-- <div class="text-center sub">
            "One child, one teacher, one pen and one book can change the world." <br>
            - <span style="font-style: italic;"> Malala Yousafzai </span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center" style="">
      <div class="container">
        <h2 class="judul">Ingin diskusi atau berkolaborasi ?</h2>
        <p class="des" style="color:rgb(94,94,94);">Silahkan Hubungan Kami ...</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              class="input-lg"
              placeholder="Nama Lengkap"
              v-model="form.firstName"
              addon-left-icon="now-ui-icons users_circle-08"
            >
            </fg-input>
            <fg-input
              class="input-lg"
              placeholder="Email"
              v-model="form.email"
              addon-left-icon="now-ui-icons ui-1_email-85"
            >
            </fg-input>
            <div class="textarea-container">
              <textarea
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                v-model="form.message"
                placeholder="Isi pesan anda ....."
              ></textarea>
            </div>
            <div class="send-button">
              <n-button type="info  " round block size="lg"
                >Kirim Pesan</n-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'donasi',
  bodyClass: 'donasi-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
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
  @media screen and (max-width: 425px) {
    .sub {
      font-family: Montserrat-Light;
      font-size: 12px;
    }
    .title {
        font-family: Montserrat-Light;
        font-size: 30px;
    }
  }
    .title {
        font-family: Montserrat-BOLD;
        font-size: 30px;
    }
    .sub {
      font-family: Montserrat-Light;
      font-size: 18px;
    }
    .judul {
        font-family: Montserrat;

    }
    .des {
        font-family: Montserrat-Light;
    }
</style>
