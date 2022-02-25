<template>
  <div>
       <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
      <h2>오늘의 추천 맛집</h2>
      <a :href=StoreUrl>
          <img :src=FoodImage alt="음식사진">
      </a>
      <div>
          <p>{{StoreName}}</p>
          <p>{{StoreLocation}}</p>
          <p>대표메뉴 {{FoodName}} {{FoodPrice}}원</p>
          <a :href=ContactNum style="text-decoration: none;" ><button class="Buttons">전화하기</button></a>
          <button class="Buttons">다시하기</button>
          <router-link to="/StoreList" style="text-decoration: none;"><button class="Buttons">맛집 리스트</button></router-link>
          
      </div>
      <footer id="footer">
        <div class="FooterContent">
          copyRight Ramos & 
        </div>
      </footer>

      <p></p>
  </div>
</template>

<script>
import Vue from'vue'

export default {
    methods:{
        ResultData: function(){
            var eventBus = new Vue();
            eventBus.$on('FoodResult',function(data){
                console.log(data);
                this.FoodName = data.storeId;
                this.StoreLocation = data.location; 
                this.StoreUrl = data.storeUrl;
                this.FoodImage = data.imageUrl;
                this.FoodPrice = data.price;
                this.ContactNum = data.contactNum;
                this.StoreName = data.storeName;
            })
        }
    },
    data: function(){
        return{
            FoodName : '',
            StoreLocation : '',
            StoreUrl : '',
            FoodImage: '',
            FoodPrice: 0,
            ContactNum: '',
            StoreName: ''
        }
    }
}
</script>

<style>
.Buttons{
    border-radius: 1rem;
    background-color:rgb(255, 255, 255);
    width:20%;
    font-size:100%;   
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1.7rem;
    
}
#footer{
  height:100px;
  background-color: rgb(226, 214, 214);
  position:fixed;
  bottom:0;
  width:100%;
  font-family: 'Nanum Pen Script', cursive;
}
.FooterContent{
    display: flex;
    box-sizing: border-box;
    padding: 1rem;
    font-size: 1rem;
    -webkit-box-pack: end;
    justify-content: flex-end;
    background-color: rgb(242, 242, 242);
    height: 100%;
    width: 100%;
    
}
</style>