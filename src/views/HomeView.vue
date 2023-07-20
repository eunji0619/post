<template>
  <div id="list_container">
    <table class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>등록일시</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="detail(`${list.idx}`)" v-for="(list, idx) in list" :key="idx">
          <td>{{ list.idx }}</td>
          <td>
            <a>{{ list.title }}</a>
          </td>
          <td>{{ list.createAt }}</td>
          <td>
            <img @click="delete(`${list.idx}`)" src="../assets/trash.png" alt="삭제" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="paging">
      <div @click="prePage(page)">
        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
      <polyline fill="none" stroke="#000000" stroke-width="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"/>
        </svg>
      </div>
      Page {{ Math.floor(page/10) }}
      <div @click="nextPage(page)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="15px" width="15px" version="1.1" id="XMLID_287_" viewBox="0 0 24 24" xml:space="preserve">
      <g id="next">
      <g>
      <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12   "/>
      </g>
      </g>
        </svg>
      </div>
    </div>
    <div>
      <button @click="write()" id="write_button">게시글 작성</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var axios = require('axios');
export default {
  name: "HomeView",
  data(){
    return{
      list:[],
      idx:'',
      page: 11,
      endpage:""
    };
  },
  methods: {
    write() {
      this.$router.push({ path: "/PostWrite" });
    },
    detail(idx){
      this.idx = idx;
      console.log(idx);
      this.$router.push({
        path:`/PostDetail/${idx}`
      })
    },
    delete(idx){
      this.idx = idx;
      confirm("게시물을 삭제하시겠습니까?")
    },
    prePage(page){
      this.page = Math.floor(page/10)   //한페이지에 10개씩 보이려면 page초기값은 11
      console.log(page);
      if(page==11){
        alert('첫페이지 입니다.')
        this.page = 11;
      }
      else{
        this.page = page-10;
        var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://dev.safeean.com:63101/test/post/list?startRow=${page}`,
        headers: { }
        };
        axios(config)
        .then((response) =>{
          console.log(response.data);
          this.list = response.data.data
          this.endpage = Math.ceil((response.data.total)/(response.data.length))
        })
        .catch((error)=> {
          console.log(error);
        });
      }
    },
    nextPage(page){
      this.page = Math.floor(page/10)
      console.log(page);
      if(this.page==this.endpage){
        alert('마지막 페이지 입니다.')
        this.page = page;
      }
      else{
        this.page = page+10;
        var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://dev.safeean.com:63101/test/post/list?startRow=${page}`,
        headers: { }
        };
        axios(config)
        .then((response) =>{
          console.log(response.data);
          this.list = response.data.data
        })
        .catch((error)=> {
          console.log(error);
        });
      }
    }
  },
  mounted() {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://dev.safeean.com:63101/test/post/list?startRow=1`,
      headers: { }
    };
    axios(config)
    .then((response) =>{
      console.log(response.data);
      this.list = response.data.data
      this.endpage = Math.ceil((response.data.total)/(response.data.length))
    })
    .catch((error)=> {
      console.log(error);
    });

  },
};
</script>

<style>
#list_container {
  display: flex;
  flex-direction: column;
  width: auto;
  height: 600px;
  /* margin-top: 3%; */
}
#write_button{
  display: block;
  float: right;
  width: 150px;
  height: 40px;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: gray;
  color: white;
}
#write_button:hover{
  background-color: rgb(56, 56, 56);
}
table{
  border-collapse: collapse;
  height: 700px;
}
th{
  padding: 10px;
  border: 2px solid rgb(180, 180, 180);
  background-color:gray;
  color: white;
}
td{
  border-bottom: 1px solid rgb(180, 180, 180);
}
tbody>tr:hover{
  cursor: pointer;
  background-color: rgb(199, 199, 199);
}
.paging{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.paging>div{
  margin: 0px 20px 0px 20px;
  cursor: pointer;
  width: 30px;
  height: 20px;
}
</style>
