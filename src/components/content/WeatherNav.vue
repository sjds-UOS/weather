<template>
  <nav-bar>
    <div slot="left">
      <img class="menu-icon" src="@/assets/img/navbar/menu.svg" @click="openMenu"  style="-webkit-app-region:no-drag"/>
    </div>
    <div slot="center" style="font-size: 20px;">桌面天气</div>
    <div slot="right">
      <img class="plus-icon" src="@/assets/img/navbar/plus.png" @click="cityClick" style="-webkit-app-region:no-drag" />
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "../common/NavBar";
import { mapMutations } from "vuex";

export default {
  components: {
    NavBar,
  },
  methods: {
    ...mapMutations(["switchMenu"]),
    openMenu() {
      this.$store.state.menuState = true;
    },
    cityClick() {
      this.$router.push("/CityChoose");
    },
  },
};
</script>
