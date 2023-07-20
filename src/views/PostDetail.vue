<template>
  <div id="detail_container">
    <div class="header_title">
      <img
        @click="prepage()"
        class="previous_img"
        src="../assets/previous.png"
        alt="이전"
      />
      <!-- <h2>게시글 {{ idx }}</h2> -->
      <h2>게시글 {{ idx }}</h2>
    </div>
    <div class="detail_info">
      <!-- <PostEdit v-show="!isShow"></PostEdit> -->
      <div class="detail_subtit">{{ list1.type }}</div>
      <h2 class="detail_title">{{ list1.title }}</h2>
        <div class="detail_date">{{ list1.createAt }}</div>
        <div @click="d_delete(`${list1.idx}`)" class="detail_tools">삭제
          <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24" fill="none">
        <path d="M20.5001 6H3.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke="#1C274C" stroke-width="1.5"/>
          </svg>
        </div>
        <div @click="d_edit(`${list1.idx}`)" class="detail_tools">수정
        <!-- <img src="" alt=""> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 -0.5 25 25" fill="none">
        <path d="M13.2942 7.95881C13.5533 7.63559 13.5013 7.16358 13.178 6.90453C12.8548 6.64549 12.3828 6.6975 12.1238 7.02072L13.2942 7.95881ZM6.811 14.8488L7.37903 15.3385C7.38489 15.3317 7.39062 15.3248 7.39623 15.3178L6.811 14.8488ZM6.64 15.2668L5.89146 15.2179L5.8908 15.2321L6.64 15.2668ZM6.5 18.2898L5.7508 18.2551C5.74908 18.2923 5.75013 18.3296 5.75396 18.3667L6.5 18.2898ZM7.287 18.9768L7.31152 19.7264C7.36154 19.7247 7.41126 19.7181 7.45996 19.7065L7.287 18.9768ZM10.287 18.2658L10.46 18.9956L10.4716 18.9927L10.287 18.2658ZM10.672 18.0218L11.2506 18.4991L11.2571 18.491L10.672 18.0218ZM17.2971 10.959C17.5562 10.6358 17.5043 10.1638 17.1812 9.90466C16.8581 9.64552 16.386 9.69742 16.1269 10.0206L17.2971 10.959ZM12.1269 7.02052C11.8678 7.34365 11.9196 7.81568 12.2428 8.07484C12.5659 8.33399 13.0379 8.28213 13.2971 7.95901L12.1269 7.02052ZM14.3 5.50976L14.8851 5.97901C14.8949 5.96672 14.9044 5.95412 14.9135 5.94123L14.3 5.50976ZM15.929 5.18976L16.4088 4.61332C16.3849 4.59344 16.3598 4.57507 16.3337 4.5583L15.929 5.18976ZM18.166 7.05176L18.6968 6.52192C18.6805 6.50561 18.6635 6.49007 18.6458 6.47532L18.166 7.05176ZM18.5029 7.87264L19.2529 7.87676V7.87676L18.5029 7.87264ZM18.157 8.68976L17.632 8.15412C17.6108 8.17496 17.5908 8.19704 17.5721 8.22025L18.157 8.68976ZM16.1271 10.0203C15.8678 10.3433 15.9195 10.8153 16.2425 11.0746C16.5655 11.3339 17.0376 11.2823 17.2969 10.9593L16.1271 10.0203ZM13.4537 7.37862C13.3923 6.96898 13.0105 6.68666 12.6009 6.74805C12.1912 6.80943 11.9089 7.19127 11.9703 7.60091L13.4537 7.37862ZM16.813 11.2329C17.2234 11.1772 17.5109 10.7992 17.4552 10.3888C17.3994 9.97834 17.0215 9.69082 16.611 9.74659L16.813 11.2329ZM12.1238 7.02072L6.22577 14.3797L7.39623 15.3178L13.2942 7.95881L12.1238 7.02072ZM6.24297 14.359C6.03561 14.5995 5.91226 14.9011 5.89159 15.218L7.38841 15.3156C7.38786 15.324 7.38457 15.3321 7.37903 15.3385L6.24297 14.359ZM5.8908 15.2321L5.7508 18.2551L7.2492 18.3245L7.3892 15.3015L5.8908 15.2321ZM5.75396 18.3667C5.83563 19.1586 6.51588 19.7524 7.31152 19.7264L7.26248 18.2272C7.25928 18.2273 7.25771 18.2268 7.25669 18.2264C7.25526 18.2259 7.25337 18.2249 7.25144 18.2232C7.2495 18.2215 7.24825 18.2198 7.24754 18.2185C7.24703 18.2175 7.24637 18.216 7.24604 18.2128L5.75396 18.3667ZM7.45996 19.7065L10.46 18.9955L10.114 17.536L7.11404 18.247L7.45996 19.7065ZM10.4716 18.9927C10.7771 18.9151 11.05 18.7422 11.2506 18.499L10.0934 17.5445C10.0958 17.5417 10.0989 17.5397 10.1024 17.5388L10.4716 18.9927ZM11.2571 18.491L17.2971 10.959L16.1269 10.0206L10.0869 17.5526L11.2571 18.491ZM13.2971 7.95901L14.8851 5.97901L13.7149 5.04052L12.1269 7.02052L13.2971 7.95901ZM14.9135 5.94123C15.0521 5.74411 15.3214 5.6912 15.5243 5.82123L16.3337 4.5583C15.4544 3.99484 14.2873 4.2241 13.6865 5.0783L14.9135 5.94123ZM15.4492 5.7662L17.6862 7.6282L18.6458 6.47532L16.4088 4.61332L15.4492 5.7662ZM17.6352 7.58161C17.7111 7.6577 17.7535 7.761 17.7529 7.86852L19.2529 7.87676C19.2557 7.36905 19.0555 6.88127 18.6968 6.52192L17.6352 7.58161ZM17.7529 7.86852C17.7524 7.97604 17.7088 8.07886 17.632 8.15412L18.682 9.22541C19.0446 8.87002 19.2501 8.38447 19.2529 7.87676L17.7529 7.86852ZM17.5721 8.22025L16.1271 10.0203L17.2969 10.9593L18.7419 9.15928L17.5721 8.22025ZM11.9703 7.60091C12.3196 9.93221 14.4771 11.5503 16.813 11.2329L16.611 9.74659C15.0881 9.95352 13.6815 8.89855 13.4537 7.37862L11.9703 7.60091Z" fill="#000000"/>
          </svg>
        </div>
        <p class="detail_text">{{ list1.content }}</p>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
// import PostEdit from '@/views/PostEdit.vue'
var axios = require('axios');
export default {
  name: "HomeView",
  data(){
    return{
      // isShow:true,
      idx: this.$route.params.idx,
      list1:[]
    }
  },
  // components:{
  //   PostEdit
  // },
  mounted() {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://dev.safeean.com:63101/test/post/${this.idx}`,
      headers: { },
    };

    axios(config)
    .then((response) =>{
      console.log(JSON.stringify(response.data));
      // console.log(JSON.stringify(response.data.data.title))
      // this.title = (JSON.stringify(response.data.data.title))
      // this.content = (JSON.stringify(response.data.data.content))
      // this.createAt = (JSON.stringify(response.data.data.createAt))
      // this.type = (JSON.stringify(response.data.data.type))

      // console.log(Object.values(response.data.data.title))
      // this.title = Object.values(response.data.data.title);
      // this.content = Object.values(response.data.data.content);
      // this.createAt = Object.values(response.data.data.createAt);
      // this.type = Object.values(response.data.data.type);
      // console.log(Object.values(response.data.data.idx))
      this.list1 = response.data.data
    })
    .catch((error) =>{
      console.log(error);
    });
  },
  methods:{
    prepage(){
      this.$router.push("/");
    },
    d_edit(idx){
      this.idx = idx;
      console.log(idx)
      var check = confirm("게시글을 수정하시겠습니까?")
      if(check){
        this.$router.push({
          path:`/PostEdit/${idx}`
        })
        // this.isShow = !this.isShow
      }
    },
    d_delete(idx){
      this.idx = idx;
      var check = confirm("게시글을 삭제하시겠습니까?")
      if(check){
        this.idx = idx;
        console.log(idx)
        var config = {
          method: 'delete',
          maxBodyLength: Infinity,
          url: 'https://dev.safeean.com:63101/test/post',
          headers: { },
          data : this.list1
        };
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          alert("게시글이 삭제되었습니다.");
        })
        .catch(function (error) {
          console.log(error);
        });
        this.$router.push("/");
      }
    }
  },
}
</script>

<style>
.header_title{
  width: 420px;
  display: block;
}
.previous_img{
  margin-top: 5%;
  width: 30px;
  height: 30px;
  float: left;
  cursor: pointer;
}
#detail_container {
  width: auto;
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.detail_info{
  display: block;
  width: 420px;
}
.detail_date,.detail_tools{
  font-size: small;
  color: gray;
  display: block;
}
.detail_date{
  float: left;
}
.detail_tools{
  float: right;
  cursor: pointer;
}
.detail_title{
  text-align: left;
  margin-top: 0;
  margin-bottom: 10px;
}
.detail_subtit{
  font-size: small;
  color: rgb(175, 175, 175);
  text-align: left;
  margin-top: 5%;
}
.detail_text{
  text-align: left;
  width: 420px;
  height: 250px;
  margin-top: 20%;
}
</style>
