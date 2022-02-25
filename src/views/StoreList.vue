<template>
  <div>
       <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
        <div>
          <button v-on:click="GetData()">전체리스트 보기</button>
          <div v-for="(a,i) in FoodName" :key="i">               
            <div class="TopBox">
              <div>
                  <img src="" alt="">
              </div>
              <div>
                <h3>{{StoreName[i]}}</h3>
                <div>{{StoreLocation[i]}}</div>
                <div>{{ContactNum[i]}}</div>
                <div>대표메뉴</div>
                <div>{{FoodName[i]}}{{price[i]}}원</div>
              </div>
            </div>
          </div> 
        </div>
      <footer id="footer">
        <div class="FooterContent">
          copyRight Ramos & 
        </div>
      </footer>
  </div>
</template>

<script>
import axios from'axios'



export default {
  data: function(){
    return {
            FoodName : [''],
            StoreLocation : [''],
            StoreUrl : [''],
            FoodImage: [''],
            FoodPrice: [0],
            ContactNum: [''],
            StoreName: ['']
    }
  },
  methods:{
    GetData: function(){
      axios.get()
      .then(function(response){
                console.log(response);
                for(var i = 0; i < response.length; i++){
                  this.FoodName[i] = response.storeId;
                  this.StoreLocation[i] = response.location; 
                  this.StoreUrl[i] = response.storeUrl;
                  this.FoodImage[i] = response.imageUrl;
                  this.FoodPrice[i] = response.price;
                  this.ContactNum[i] = response.contactNum;
                  this.StoreName[i] = response.storeName;
                }               
            })
            .catch(function(error){
                console.log(error);
            });
    }
  }
}
</script>

<style>
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