<!-- <template>
    <card title="24小时预报">
        <ul class="day7-forecast">
            <li v-for="(hour, index) in $store.state.forecast24h.fxTime" :key="index">
                <span class="wdate">
                    <span>
                        {{ $store.state.forecast24h.flag[index] }}
                    </span>
                    &nbsp;&nbsp;
                    <span>
                        {{
                            $store.state.forecast24h.fxTime[index]

                        }}
                    </span>
                </span>
                <span class="wicon" style="display: flex;justify-content: flex-start;width: 100px;">
                    <img :src="require(`@/assets/img/wicon/${$store.state.forecast24h.icon[index]}.png`)" />
                    
                    <span>
                        {{
                            $store.state.forecast24h.text[index]

                        }}
                    </span>
                </span>
                <span class="wtemp">
                    {{ $store.state.forecast24h.temp[index] }}°C
                </span>
            </li>
        </ul>
    </card>
</template>
  
<script>
import Card from "./card.vue";

export default {
    components: { Card },
};
</script>
  
<style>
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
</style> -->






<template>
    <card title="24小时预报">
        <ul class="day7-forecast">
            <li v-for="(hour, index) in forecast24h.fxTime" :key="index">
                <span class="wdate">
                    <span>
                        {{ forecast24h.flag[index] }}
                    </span>
                    &nbsp;&nbsp;
                    <span>
                        {{
                            forecast24h.fxTime[index]

                        }}
                    </span>
                </span>
                <span class="wicon" style="display: flex;justify-content: flex-start;width: 100px;">
                    <img :src="require(`@/assets/img/wicon/${forecast24h.icon[index]}.png`)" />
                    <!-- <i class="split"></i> -->
                    <span>
                        {{
                           forecast24h.text[index]

                        }}
                    </span>
                </span>
                <span class="wtemp">
                    {{ forecast24h.temp[index] }}°C
                </span>
            </li>
        </ul>
    </card>
</template>
  
<script>
import Card from "./card.vue";

export default {
    components: { Card },
    created(){
        this.getdata()
    },
    data(){
        return {
            forecast24h:{
                fxTime:[],
                flag:[],
                icon:[],
                text:[],
                temp:[],
            }
        }
    },
    methods:{
        getdata(){
            this.forecast24h.fxTime=this.$store.state.forecast24h.fxTime;
            this.forecast24h.flag = this.$store.state.forecast24h.flag;
            this.forecast24h.icon = this.$store.state.forecast24h.icon;
            this.forecast24h.text = this.$store.state.forecast24h.text;
            this.forecast24h.temp = this.$store.state.forecast24h.temp;
        }
    }
};
</script>
  
<style>
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
