<template>
    <div>
       <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
            <p style="visibility: hidden">
                     {{data}}
            </p>
            <div class="TopSentence">
                <b>오늘은 이게 땡기는데??</b><br>
                <p style="font-size: 75%">먹고 싶은 메뉴를 골라주세요!!</p>

            </div>
             <div class="FoodButtons" v-for="(a,i) in FoodType" :key="i">               
                <button v-bind:class="{UnSelectedBtn: !IsSelected[i], SelectedBtn: IsSelected[i] }" 
                v-on:mouseup="ChangeBtn(i)">{{a}}</button>                
            </div>                
             <p class="TopSentence" style="font-size: 150%">다 고르셨나요?</p>  
              <form v-on:submit.prevent="submitForm">
             <input id="SubmitBtn" type="submit" value="추천받기">
             <!-- <router-link to="/ResultTap"></router-link>                      -->
        </form> 
        <footer id="footer">
        <div class="FooterContent">
          copyRight Ramos & 
        </div>
      </footer>
    </div>
</template>

<script>
import axios from 'axios'
import router from "../router";
import Vue from 'vue'

export default {
    
    components:{
        
    },
   data: function(){
       return{
          data:0,
          FoodType : ['한식','중식','일식·돈까스·회','양식·아시안','패스트푸드','분식'],
          IsSelected : [false,false,false,false,false,false],        
          FoodString : ['KOREA','CHINA','JAPAN','WESTERN','FASTFOOD','SNACKBAR']
       }
   },
   methods: {
       submitForm: function(){
           var url = 'https://192.168.45.200:8080/api/random';
           var data = '';
           var condition = true;

           var count = 0;
           var SelectedNum;

            for(var i = 0; i < 6; i ++){
                if(this.IsSelected[i] == true){
                    count++;
                    SelectedNum = i;
                }

            }


           while(condition){
               if(count == 1){
                   data = this.FoodString[SelectedNum];
                   break;
               }
               var RandNum = Math.floor(Math.random()*5);
               if(this.IsSelected[RandNum] == true){
                   data = this.FoodString[RandNum];
                   break;
               }
           }
          var eventBus = new Vue();
           axios.post(url,JSON.stringify(data),
           { headers: { 'Content-Type': 'application/json'}})
            .then(function(response){
                console.log(response);
                eventBus.$emit('FoodResult',response);
                router.push('/ResultTap');
            })
            .catch(function(error){
                console.log(error);
            });

            },
            ChangeBtn: function(i){   
           this.data++;        
           if(this.IsSelected[i]){
               this.IsSelected[i] = false;
               
           }
           else{
               this.IsSelected[i] = true;
           }
       }
       },
       
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
.FoodButtons{
    width: 100%;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1.7rem;
}
.SelectedBtn{
    border-radius: 1rem;
    color: rgb(0, 70, 42);
    background-color: white;
    width:25%;
    font-size:100%;
    box-shadow: rgb(129 84 212 / 50%) 0px 0px 1rem 0px;
    outline: none;
}
.UnSelectedBtn{
    border-radius: 1rem;
    background-color:rgb(255, 255, 255);
    width:25%;
    font-size:100%;
}
.TopSentence{
    font-size: 200%;
    font-family: 'Nanum Pen Script', cursive;
}
#SubmitBtn{
    border-radius: 1rem;
    background-color:rgb(255, 255, 255);
    color: rgb(255, 155, 5);
    font-weight:bold;
    width:20%;
    margin-top:1.5rem;
    font-size:150%;
}

</style>