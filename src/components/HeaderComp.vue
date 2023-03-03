<template>
  <header>
    <nav class="fixed-top">
      <div class="container">
        <p class='right status' v-if="loggedIn" id='welcome'>{{name}}님 반갑습니다. [<a href='#'>로그아웃</a>]</p>
        <p class='right status' v-else id='welcome'>로그인해야지?</p>
        <router-link class='left' to="/"><img id="logo" src="../assets/green_icon.png" alt="logo"/></router-link>
        <div class='left' id="search_box">
          <span id="search">
            <input type="text" placeholder="검색창"/>
            <router-link to="/"><img src="https://cdn-icons-png.flaticon.com/512/49/49116.png" alt="search"/></router-link>
          </span>
          <div id="rank_bar">
            <p id="rank">{{rank}}</p>
            <a href="#" id="title">{{title}}</a>
            <div id="all_rank" style="display:none">
              <p><span>1</span><a href="#">{{rankArr[0]}}</a></p>
              <p><span>2</span><a href="#">{{rankArr[1]}}</a></p>
              <p><span>3</span><a href="#">{{rankArr[2]}}</a></p>
              <p><span>4</span><a href="#">{{rankArr[3]}}</a></p>
              <p><span>5</span><a href="#">{{rankArr[4]}}</a></p>
              <p><span>6</span><a href="#">{{rankArr[5]}}</a></p>
              <p><span>7</span><a href="#">{{rankArr[6]}}</a></p>
              <p><span>8</span><a href="#">{{rankArr[7]}}</a></p>
              <p><span>9</span><a href="#">{{rankArr[8]}}</a></p>
              <p><span>10</span><a href="#">{{rankArr[9]}}</a></p>
            </div>
          </div>
        </div>
        <div class='icons right'>
          <span>
            <router-link v-show='toMyPage' to="/MyPage"><img src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg" alt="login"/></router-link>
            <router-link v-show='toLoginPage' to="/login"><img src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg" alt="login"/></router-link>
          </span>
          <span>
            <router-link to="/login"><img src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg" alt="mypage"/></router-link>
          </span>
          <span>
            <router-link to="/cscustomer"><img src="../assets/pngwing.com.png" alt="chatbot"/></router-link>
          </span>
          <span>
            <router-link to="/"><img src="../assets/globe2.svg" alt="language"/></router-link>
          </span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      rank: 1,
      title:'검색어',
      rankArr: ['가오리', '나비', '다람쥐', '라면', '마술사', '바구니', '사진기', '아저씨', '자전거', '차키'],
      loggedIn: false, // 마이페이지 버튼 경로 설정(기본값 : false)
      toMyPage: false, // 마이페이지 버튼 경로 설정(기본값 : false)
      toLoginPage: true, // 로그인 상태 표시 설정(기본값 : true)
      // 마이페이지 버튼 눌렀을 때, 로그인이 되어 있는 상태면 마이페이지로, 로그인이 안되어있는 상태면 로그인 페이지로 이동
      name:''
    }
  },
  mounted(){
    this.title=this.rankArr[Number(this.rank)-1]
    this.rankSetter()
    this.emitter.on('trans', (name)=>{
      this.name=name
      this.loggedIn = true
      this.toMyPage = true
      this.toLoginPage = false
    })
  },
  methods: {
    rankSetter(){
      setInterval(()=>{
        this.rank++
        if(this.rank>10) this.rank=1
        this.title=this.rankArr[Number(this.rank)-1]
      }, 2000)
    },
    showAllRanks(){
      document.getElementById("all_rank").style.display='block'
    },
    hideAllRanks(){
      document.getElementById("all_rank").style.display='none'
    }
  }
}
</script>

<style scoped>
  .icons {
    margin-top: 20px;
    justify-content: space-between;
    width: 400px;
  }
  .icons span {
    margin-left: 40px;
  }
  .right{
    float: right;
  }
  .left{
    float: left;
  }
  .status{
    width: 1200px;
    padding-top: 5px;
  }
  header {
    height:120px;
    width: 100%;
    max-width:1200px;
    min-width:1200px;
    margin: 5px auto;
  }
  nav {
    padding-bottom: 5px;
  }
  .fixed-top {
    width:100%;
    background: white;
    border-bottom: 1px solid lightgray;
  }
  .container {
    width:1200px;
  }
  #welcome {
    margin:0;
    text-align: right;
  }
  #logo{
    width: 120px;
    height: 90px;
  }
  #search_box {
    margin-left: 15px;
    padding-top: 20px;
  }
  #search {
    border: 3px green solid;
    border-radius: 30px;
    padding: 10px;
  }
  #search input {
    width: 450px;
    margin: 10px 0 10px 6px;
    border: none;
    outline: none;
  }
  #search button {
    background-color: white;
    border: none;
  }
  #search img {
    height: 20px;
    width: 20px;
    background-color: white;
  }
  #rank_bar {
    width: 350px;
    height: 30px;
    border-bottom: 1px green solid;
    margin: 1px 0 2px 20px;
    text-align: left;
  }
  #rank {
    width: 20px;
    margin-right: 40px;
    display: inline;
  }
  #title {
    width: 300px;
    display: inline;
    text-decoration: none;
    color: black;
  }
  #search_box span {
    margin-right: 40px
  }
  a {
    color: black;
    text-decoration-color: black;
  }
</style>
