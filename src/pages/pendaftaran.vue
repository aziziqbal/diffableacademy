<template>
  <div>
    <div class="page-header page-header-small" filter-color="black" style="background: rgba(0, 0, 0, 0.5);">
      <parallax
        class="page-header-image"
        style="background-image: url('img/foto/11.png')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">FORMULIR PENDAFTARAN</h1>
          <!-- <div class="text-center sub">
            "One child, one teacher, one pen and one book can change the world." <br>
            - <span style="font-style: italic;"> Malala Yousafzai </span>
          </div> -->
        </div>
      </div>
    </div>
    <div class="section section-contact-us text-center" style="">
      <div class="container">
        <h2 class="judul">{{ status }} </h2>
        <el-radio-group v-model="status">
          <el-radio-button label="Pelajar / Murid"></el-radio-button>
          <el-radio-button label="Relawan Pegajar"></el-radio-button>
        </el-radio-group>
        <div class="row" v-if="status === 'Pelajar / Murid'">
          <div class="col-lg-8 text-center ml-auto mr-auto col-md-10">
            <form>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Nama
                </label>
                <div class="col-sm-8">
                  <input type="text" class="input form-control" id="inputPassword" placeholder="Nama Lengkap" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Alamat Lengkap
                </label>
                <div class="col-sm-8">
                  <input type="textarea" class="input form-control" id="inputPassword" placeholder="Alamat" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Tanggal Lahir
                </label>
                <div class="col-sm-8">
                  <el-date-picker
                    class="input"
                    type="date"
                    style="border-radius:0px;font-size:0.9rem;"
                    placeholder="Tanggal Lahir">
                    </el-date-picker>
                </div>
              </div>
              <div class="form-group row" style="align-items:center;display: flex;">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Email
                </label>
                <div class="col-sm-8">
                  <input type="email" class="input form-control" id="inputPassword" placeholder="Email" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row" style="align-items:center;display: flex;">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Password
                </label>
                <div class="col-sm-8">
                  <input type="password" class="input form-control" id="inputPassword" placeholder="Email" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Jenis Kelamin
                </label>
                <div class="col-sm-8">
                  <select id="inputState" class="input form-control" style="border-radius:0px;font-size:0.9rem;">
                    <option selected>Pria</option>
                    <option>Wanita</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Sekolah
                </label>
                <div class="col-sm-8">
                  <input type="textarea" class="input form-control" id="inputPassword" placeholder="Alamat" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Jenis Disabilitas
                </label>
                <div class="col-sm-8">
                  <select id="inputState" class="input form-control" style="border-radius:0px;font-size:0.9rem;">
                    <option selected>Tuna Netra</option>
                    <option>Tuna Rungu</option>
                    <option>Tuna Wicara</option>
                    <option>Tuna Daksa</option>
                    <option>Tuna Laras</option>
                    <option>Tuna Grahita</option>
                    <option>Tuna Ganda</option>
                    <option>Lain-lain</option>
                  </select>
                </div>
              </div>
              <button style="background-color:#409EFF;" type="submit" class="btn btn-primary btn-lg">Daftar</button>
            </form>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-lg-8 text-center ml-auto mr-auto col-md-10">
            <form>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Nama
                </label>
                <div class="col-sm-8">
                  <input type="text" class="input form-control" id="inputPassword" placeholder="Nama Lengkap" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Alamat Lengkap
                </label>
                <div class="col-sm-8">
                  <input type="textarea" class="input form-control" id="inputPassword" placeholder="Alamat" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Tanggal Lahir
                </label>
                <div class="col-sm-8">
                  <el-date-picker
                    class="input"
                    type="date"
                    style="border-radius:0px;font-size:0.9rem;"
                    placeholder="Tanggal Lahir">
                    </el-date-picker>
                </div>
              </div>
              <div class="form-group row" style="align-items:center;display: flex;">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Email
                </label>
                <div class="col-sm-8">
                  <input type="email" class="input form-control" id="inputPassword" placeholder="Email" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row" style="align-items:center;display: flex;">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Password
                </label>
                <div class="col-sm-8">
                  <input type="password" class="input form-control" id="inputPassword" placeholder="Email" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Jenis Kelamin
                </label>
                <div class="col-sm-8">
                  <select id="inputState" class="input form-control" style="border-radius:0px;font-size:0.9rem;">
                    <option selected>Pria</option>
                    <option>Wanita</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="label col-sm-4 col-form-label">
                  Pekerjaan
                </label>
                <div class="col-sm-8">
                  <input type="textarea" class="input form-control" id="inputPassword" placeholder="Alamat" style="border-radius:0px;font-size:0.9rem;">
                </div>
              </div>
              <button style="background-color:#409EFF;" type="submit" class="btn btn-primary btn-lg">Daftar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import { DatePicker,Radio, RadioGroup, RadioButton, } from 'element-ui';

export default {
  name: 'donasi',
  bodyClass: 'donasi-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    [DatePicker.name]: DatePicker,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [RadioButton.name]: RadioButton,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      },
      status: ''
    };
  },
  mounted() {
    this.status = localStorage.getItem('posisi');
  }
};
</script>
<style scoped>
.form-group {
    align-items:center;
    display: flex;
    margin-bottom:0px;
}
.label {
    vertical-align:middle;
    font-size:1rem;
    text-align:left;
    font-family: Montserrat-Light;
}
.input {
    font-family: Montserrat-Light;
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
