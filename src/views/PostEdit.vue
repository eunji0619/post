<template>
  <div id="edit_container">
    <div class="header_title">
      <img
        @click="prepage()"
        class="previous_img"
        src="../assets/previous.png"
        alt="이전"
      />
      <h2>게시글 수정{{ idx }}</h2>
    </div>
    <input
      v-model="data.title"
      type="text"
      class="edit_title"
    />
    <textarea
      v-model="data.content"
      class="edit_content"
      maxlength="500"
    ></textarea>
    <div class="edit_save">
      <button @click="edit_savebtn(`${idx}`,`${data.title}`,`${data.content}`)" class="edit_savebtn">
        게시글 수정
        <img class="upload_img" src="../assets/upload.png" alt="업로드" />
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var axios = require('axios');
export default {
  name: "app",
  data() {
    return {
      // data: {
      //   title: "",
      //   content: "",
      // },
      idx: this.$route.params.idx,
      data:[],
      // newData:{
        title:'',
        content:'',
      // }
    };
  },
  mounted() {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://dev.safeean.com:63101/test/post/${this.idx}`,
      headers: { },
    };
    axios(config)
    .then((response) =>{
      // console.log(JSON.stringify(response.data));
      this.data = response.data.data
    })
    .catch((error) =>{
      console.log(error);
    });
  },
  methods:{
    prepage(){
      this.$router.push(`/PostDetail/${this.idx}`);
    },
    edit_savebtn(idx,title,content){
      this.idx = idx;
      console.log(idx)
      this.title = title;
      console.log(title)
      this.content = content;
      console.log(content)
      
      var data = `\r\n{\r\n    "idx" : ${this.idx},\r\n    "title" :"${this.title}",\r\n    "content": "${this.content}"\r\n}`;
      var config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `https://dev.safeean.com:63101/test/post/`,
      headers: { },
      data : data
      };
      axios(config)
      .then((response) =>{
        console.log(JSON.stringify(response.data));
        this.title="";
        this.content="";
        this.data = response.data.data
        alert('수정되었습니다.');
        this.$router.push(`/PostDetail/${this.idx}`);
      })
      .catch((error) =>{
        console.log(error);
      });
    }
  }
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
h2{
  display: block;
  float:center;
}
#edit_container {
  width: auto;
  height: 600px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.edit_title{
  margin-top: 2%;
  padding: 0 10px;
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: rgb(218, 216, 216);
}
.edit_content{
  margin-top: 20px;
  padding: 10px 10px;
  resize: none; /*textarea 크기고정*/
  width: 400px;
  height: 300px;
  border: none;
  border-radius: 10px;
  background-color: rgb(218, 216, 216);
}
.edit_save{
  display: block;
  width: 400px;
  height: 30px;
}
.edit_savebtn{
  display: block;
  float: right;
  border: none;
  background-color: white;
  border-radius: 5px;
  margin-top: 5%;
  font-size: small;
  cursor: pointer;
}
.edit_savebtn:hover{
  background-color: rgb(218, 216, 216);
}
.upload_img{
  display: block;
  float: right;
  height: 13px;
  width: 15px;
}
</style>