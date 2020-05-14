<template>
  <navbar
    position="fixed"
    type="white"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-if="scroll === true" v-popover:popover1 class="navbar-brand" to="/">
        <img src="img/logo_da.png" height="50"/>
      </router-link>
      <router-link v-else v-popover:popover1 class="navbar-brand" to="/">
        <img src="img/logo_da_white.png" height="60"/>
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link v-smooth-scroll class="nav-link" :to="{ name: 'index', hash: '#beranda' }">BERANDA</router-link>
      </li>
      <li class="nav-item">
        <router-link v-smooth-scroll class="nav-link" :to="{ name: 'index', hash: '#profile' }">PROFILE</router-link>
      </li>
      <li class="nav-item">
        <router-link v-smooth-scroll class="nav-link" :to="{ name: 'index', hash: '#pendidikan' }">PENDIDIKAN</router-link>
      </li>
      <li class="nav-item">
        <router-link v-smooth-scroll class="nav-link" :to="{ name: 'index', hash: '#galeri' }">GALERI</router-link>
      </li>
      <li class="nav-item">
        <router-link v-smooth-scroll class="nav-link" :to="{ name: 'donasi' }">DONASI</router-link>
      </li>
      <li class="nav-item">
        <router-link v-smooth-scroll class="nav-link" :to="{ name: 'contact' }">KONTAK KAMI</router-link>
      </li>
      <li class="nav-item">
        <a v-if="scroll" class="nav-link btn btn-neutral" href="#" style="color:white;background-color:#26B5BD;">
          <p>Masuk Kelas</p>
        </a>
        <a v-else class="nav-link btn btn-neutral" href="#" style="color:black;">
          <p>Masuk Kelas</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import Vue from 'vue';
import vueSmoothScroll from 'vue2-smooth-scroll'
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
Vue.use(vueSmoothScroll)
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  },
  data () {
    return {
      scroll: false,
      offsetTop: 0
    }
  },
  created () {
    console.log('created')
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollFix: function(hashbang) {
      location.href = hashbang
    },
    handleScroll () {
      this.offsetTop = window.scrollY
      if (this.offsetTop > 400) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    }
  }
};
</script>

<style scoped>
  .navbar p {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    font-family: Poppins;
  }
  .navbar .navbar-nav .nav-link:not(.btn) {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    font-family: Poppins;
  }
  @font-face {
    font-family: Poppins;
    src: url(../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
  }
</style>
