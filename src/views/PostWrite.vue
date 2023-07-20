<template>
  <div id="write_container">
    <div class="header_title">
      <img
        @click="prepage()"
        class="previous_img"
        src="../assets/previous.png"
        alt="이전"
      />
      <h2>게시글 작성</h2>
    </div>

    <input
      v-model="data.title"
      type="text"
      class="write_title"
      placeholder=" 제목"
    />
    <textarea
      v-model="data.content"
      class="write_content"
      maxlength="500"
      placeholder="내용을 작성해주세요"
    ></textarea>
    <div class="write_save">
      <button @click="savebtn(`${data.title}`,`${data.content}`)" class="savebtn">
        게시글 작성
        <img class="upload_img" src="../assets/upload.png" alt="업로드" />
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default{
  data(){
    return{
      data:{
        insertId:"",
        title:"",
        content:"",
        createAt:'',
        modifyAt:null
      }
    };
  },
  methods:{
    savebtn(title, content){

    //   var config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: `https://dev.safeean.com:63101/test/post`,
    //   headers: { },
    // };
    // axios(config)
    // .then((response) =>{
    //   console.log(JSON.stringify(response.data));
    //   this.insertId = response.data.total
      
    // })
    // .catch((error) =>{
    //   console.log(error);
    // });

      this.insertId = insertId;
      this.data.title = title;
      console.log(this.data.title)
      this.data.content = content;
      console.log(this.data.content)
      var date = new Date();
      this.createAt = date.getFullYear() + "-"
        + ('0'+ date.getMonth() + 1) + "-"    //getMonth()는 0~11을 반환 -> +1
        +('0'+ date.getDate()) + " "
        + ('0' + date.getHours()) + ":" 
        + ('0' + date.getMinutes())+ ":" 
        + ('0' + date.getSeconds());

      if(!this.data.title){
        console.log(this.data.title)
        alert('제목이 입력되지 않았습니다.')
      }
      else if(!this.data.content){
        console.log(this.data.content)
        alert('내용이 입력되지 않았습니다.')
      }
      else{
        var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://dev.safeean.com:63101/test/post/${this.insertId}`,
        headers: { },
        data:data
        };
        axios(config)
        .then((response) =>{
          console.log(response.data);
          // this.list = response.data.data
          alert("게시글 작성 완료");
          this.$router.push("/"); // 게시글 list페이지로 이동
        })
        .catch((error)=> {
          console.log(error);
        });
        // axios.post("/PostWrite",{
        //   title : this.data.title,
        //   content : this.data.content
        // })
        // .then((response) => {
        //   if (response.data == "writesuccess") {
        //     alert("게시글 작성 완료");
        //     this.$router.push("/"); // 게시글 list페이지로 이동
        //   }
        // });
      }
    },
    prepage(){
      this.$router.push("./");
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
#write_container {
  width: auto;
  height: 600px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.write_title{
  margin-top: 2%;
  padding: 0 10px;
  width: 400px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: rgb(218, 216, 216);
}
.write_content{
  margin-top: 20px;
  padding: 10px 10px;
  resize: none; /*textarea 크기고정*/
  width: 400px;
  height: 300px;
  border: none;
  border-radius: 10px;
  background-color: rgb(218, 216, 216);
}
.write_save{
  display: block;
  width: 400px;
  height: 30px;
}
.savebtn{
  display: block;
  float: right;
  border: none;
  background-color: white;
  border-radius: 5px;
  margin-top: 5%;
  font-size: small;
  cursor: pointer;
}
.savebtn:hover{
  background-color: rgb(218, 216, 216);
}
.upload_img{
  display: block;
  float: right;
  height: 13px;
  width: 15px;
}
</style>