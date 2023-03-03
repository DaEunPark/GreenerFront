
<template>
    <br/><br/>
    <div class="container">
        <form class="form-horizontal">
            <div class="form-group">
                <div>
                    <h2 align="center">결제하기</h2>
                </div>
            </div><br/>
            <div class="form-group">
                <div>
                    <h5 align="center">{{  }} 개의 제품 {{  }} 원 </h5>
                </div>
            </div><br/><br/>
            <hr/>
            <div class="form-group">
                <div>
                    <h2 align="left">장바구니</h2>
                </div>
            </div><br/>
            <div class="form-group">
                <div class="col-sm-8">
                    <h5 align="left">도착 예정일: </h5>
                </div>
            </div>
            <hr/>
            <table>
                <tbody>
                    <tr>
                        <td>상품 금액</td>
                        <td> {{  }}</td>
                    </tr>
                    <tr>
                        <td>배송비</td>
                        <td>{{  }}</td>
                    </tr>
                    <tr>
                        <td><b>총 결제 금액</b></td>
                        <td><b>{{  }}</b></td>
                    </tr>
                </tbody>
            </table>
            <hr/>
            <div class="form-group">
                <div>
                    <h2 align="left">배송 옵션</h2>
                </div>
            </div><br/>
            <table id="deliverAddress">
                <thead>
                    <th>배송 주소</th>
                </thead>
                <tbody>
                    <tr>{{  }}</tr>
                    <tr>{{  }}</tr>
                    <tr>{{  }}</tr>
                    <tr>{{  }}</tr>
                </tbody>
            </table>
            <hr/>
            <div class="form-group">
                <div>
                    <h2 align="left">결제</h2>
                </div>
            </div><br/>
            <div class="form-group">
                <div class="col-sm-8">
                    <h4 align="left">결제 수단 선택</h4>
                </div>
            </div>
            <div class="paymentOpt" align="left">
                <label><input type="radio" v-bind:value="payVal1" v-model="picked"/>&nbsp;카카오페이</label><br/>
                <label><input type="radio" v-bind:value="payVal2" v-model="picked"/>&nbsp;신용카드</label><br/>
                <label><input type="radio" v-bind:value="payVal3" v-model="picked"/>&nbsp;네이버페이</label><br/>
                <label><input type="radio" v-bind:value="payVal4" v-model="picked"/>&nbsp;페이코</label><br/>
                <label><input type="radio" v-bind:value="payVal5" v-model="picked"/>&nbsp;실시간 계좌이체</label><br/>
            </div><br/><br/>
            <p align="left">
                <button type="button" class="btn btn-primary">
                    결제 수단 선택 <span>{{ picked }}</span>
                </button>
            </p>
        </form>
        
    </div>
    
</template>

<script>
export default {
    data() {
        return {            
            payVal1 : 'kakao',
            payVal2 : 'credit',
            payVal3 : 'naver',
            payVal4 : 'payco',
            payVal5 : 'account',
            picked: 'kakao'
        }
    }
}
</script>

<style>
    h1, h2, h3 {
        padding-left: 0;
        margin-left: 0;
        position: relative;
    }

    table {
        text-align: left;
    }
    
</style>
