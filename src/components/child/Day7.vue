<template>
  <div class="card">
    <div>
      <img class="back-icon" @click="backBtn" :src="backIconUrl" style="-webkit-app-region:no-drag"/>
    </div>
    <ul class="day7-forecast">
      <li v-for="(day, index) in $store.state.forecast.days" :key="index">
        <span class="wdate">
          <span>
            {{ $store.state.forecast.weekdays[index] }}
          </span>
          <i class="split"></i>
          <span>
            {{
              $store.state.forecast.days[index].fxDate
                .substr(5, 5)
                .replace("-", "/")
            }}
          </span>
        </span>
        <span class="wicon" style="display: flex;justify-content: flex-start;width: 100px;">
          <img :src="require(`@/assets/img/wicon/${$store.state.forecast.wcode[index]}.png`)" />
          <span>
            {{ $store.state.forecast.days[index].textDay }}
          </span>
        </span>
        <span class="wtemp">
          {{ $store.state.forecast.days[index].tempMin }}°C ~
          {{ $store.state.forecast.days[index].tempMax }}°C
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// import Card from "./card.vue";

export default {
  // components: { Card },
  data(){
    return{
      backIconUrl: require("@/assets/img/navbar/back.png"),
    };
  },
  methods:{
    backBtn() {
      this.$router.back(-1);
    },
  }
};
</script>

<style>
.card {
  box-sizing: border-box;
  margin: 10px 0;
  padding: 0 26px;
  padding-bottom: 14px;
  width: 100%;
  background: #ffffff80;
  box-shadow: 0 8px 32px 0 #1f26875e;
  border-radius: 18px;
  border: 1px solid #ffffff6c;
}
.back-icon{
  
      padding: 6px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    
    
}
.day7-forecast li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0;
  height: 26px;
  width: 100%;
  color: #414141;
  font-size: 18px;
}

i.split {
  display: inline-block;
  margin: 0 14px;
  margin-top: 2px;
  width: 2px;
  height: 80%;
  border-radius: 1px;
  background-color: #20202080;
}

.day7-forecast li .wdate {
  display: flex;
  align-items: center;
  height: 100%;
}

.day7-forecast li .wicon img {
  width: 24px;
  height: 24px;
  vertical-align: top;
}

.day7-forecast li .wtemp {
  text-align: right;
}
</style>