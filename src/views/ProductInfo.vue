<template>
  <div class="product_page">
    <div class="product_container">
      <div class="product_img">
        <img :src="this.$route.params.img">
      </div>
      <div class="infos_n_order">
        <div class="product_info_part">
          <div class="category">
            <a href="#">{{this.$route.params.category}}</a>
          </div>
          <p class="product_name">{{name}}</p>
          <div class="product_price">{{Number(this.price).toLocaleString()}}원</div>
        </div>
        <div class="product_order_part">
          <div class="order_count">
            <span style="padding-left:20px;">구매수량</span>
            <span style="padding-right:20px;">
              <input type="number" min="1" max="99" v-model.number="count"/>
            </span>
          </div>
          <div class="product_sum">
            <span>상품금액 합계</span>
            <span>{{total}}원</span>
          </div>
          <div class="btns">
            <button class="cart">장바구니</button>
            <button class="order">바로구매</button> <!--결제페이지로 연결-->
          </div>
        </div>

      </div>
    </div>
    <div class="product_details">
      <h1>상품설명, 상품정보, 상품평, 상품문의, 배송/반품/교환</h1>
      <div style="height:200px;">이미지</div>
    </div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      name: this.$route.params.name,
      price: this.$route.params.price,
      count: 1
    }
  },
  computed: {
    total() {
      return (this.price * this.count).toLocaleString()
    }
  }
}
</script>

<style scoped>
  .product_page {
    display: block;
    max-width: 1200px;
    min-width: 1200px;
    margin: 20px auto;
    padding: 20px 60px;
  }
  .product_container {
    height: 675px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .product_img, .infos_n_order {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 500px;
    height: 100%;
  }
  .product_img img {
    height: 100%;
  }
  .infos_n_order a {
     color: grey;
     text-decoration: none;
  }
  .category {
    display: flex;
    align-items: left;
    font-size: 20px;
  }
  .product_name {
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    margin-top: 14px;
    margin-bottom: 0;
  }
  .product_price {
    color: green;
    font-size: 28px;
    font-weight: bold;
    text-align: left;
  }
  .order_count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border:1px solid white;
    border-radius: 6px;
    background: lightgrey;
    font-weight: bold;
    padding: 16px 0;
  }
  .order_count span {
    font-size:20px;
  }
  .order_count input {
    text-align: center;
    width: 100px;
    font-weight: bold;
    outline: none;
  }
  .product_sum {
    display:flex;
    justify-content: space-between;
    border-bottom: 3px solid green;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  .product_sum span {
    font-size: 20px;
  }
  .btns {
    display: flex;
  }
  .btns button {
    width: 150px;
    height: 60px;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cart {
    margin-right: 20px;
    background: none;
    border: 2px solid green;
    color: green;
  }
  .order {
    background: green;
    border: 2px solid green;
    color: white;
  }
  .product_details {
    width:100%;
    margin-top: 20px;
    background: lightgrey;
  }
</style>
