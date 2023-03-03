<template>
  <div class="main_menu">
    <div class="main_category">
      <p>전체 보기</p>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          과일 / 채소 / 곡류
        </button>
        <ul class="dropdown-menu">
          <li>과일</li>
          <li>채소</li>
          <li>곡물</li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          정육 / 계란
        </button>
        <ul class="dropdown-menu">
          <li>신선육</li>
          <li>가공육</li>
          <li>계란</li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          수산물 / 건해산
        </button>
        <ul class="dropdown-menu">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          우유 / 유제품
        </button>
        <ul class="dropdown-menu">
          <li>우유</li>
          <li>기타 유제품</li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          밀키트 / 간편식
        </button>
        <ul class="dropdown-menu">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          김치 / 반찬
        </button>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          생수 / 음료 / 주류
        </button>
        <ul class="dropdown-menu">
          <li>생수</li>
          <li>음료</li>
          <li>주류</li>
        </ul>
      </div>
      <div class="btn-group dropend">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          과자 / 간식
        </button>
        <ul class="dropdown-menu">
          <li>수입 과자</li>
          <li>건강 간식</li>
        </ul>
      </div>
    </div>
    <nav class="navbar">
      <div><router-link to="#" class="">이번 달 특가</router-link></div>
      <div><router-link to="#" class="">등급 회원 라운지</router-link></div>
      <div><router-link to="#" class="">기획 상품</router-link></div>
      <div><router-link to="#" class="">고단백 식사</router-link></div>
      <div><router-link to="#" class="">다이어트</router-link></div>
      <div><router-link to="#" class="">비건 푸드</router-link></div>
    </nav>
    <div id="commercialBanner" class="myCarousel carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#commercialBanner" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#commercialBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#commercialBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/newjeans-all-members.jpg" class="d-block w-100" alt="pic1">
        </div>
        <div class="carousel-item">
          <img src="../assets/newjeans-all-members2.jpg" class="d-block w-100" alt="pic2">
        </div>
        <div class="carousel-item">
          <img src="../assets/newjeans-all-members3.jpg" class="d-block w-100" alt="pic3">
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#commercialBanner" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#commercialBanner" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main_menu {
    margin: 8px auto;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(8, 12.5%);
    height: 421px;
    width: 100%;
    gap: 0;
    grid-template-areas:
      "a b b b b"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c"
      "a c c c c";
  }
  .main_category {
    grid-area: a;
    text-align:center;
    color:white;
    background-color:#33cc33;
    font-weight:bold;
  }
  .main_category p {
    font-size: 25px;
    padding: 6px;
    margin: 0;
  }
  #category {
    height: 50px;
    font-size:25px;
    border-bottom: 2px solid white;
    text-align: center;
  }
  .dropend {
    width: 235px;
  }
  li{
    width:200px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: green;
  }
  .navbar {
    grid-area: b;
    background-color: white;
    padding:0;
  }
  .navbar div:hover{
    border-bottom: solid 2px #33cc33;
  }
  div a {
    color: #33cc33;
    font-weight: bold;
    text-decoration: none;
  }
  div a:first-child {
    margin-left: 35px
  }
  div a:last-child {
    margin-right: 35px
  }
  .myCarousel {
    grid-area: c;
  }
  .products_carousel {
    width:100%;
    height:400px;
  }
</style>
