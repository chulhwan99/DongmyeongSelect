<template>
  <div>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet">
      <div id="app">
        <img src="../assets/main.png" alt="">
        <h1 class="TitleFont">동명셀렉</h1>
        <p class="ContentFont">동명동 맛집을 추천해드립니다</p>
        <router-link to="/FoodType"><button class="SubmitBtn">추천받기</button></router-link>
      </div>     
      <footer id="footer">
        <div class="FooterContent">
          copyRight Ramos & 
        </div>
      </footer>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
#app{
  min-height:100%;
  position:relative;
  padding-bottom:170px;
}
.SubmitBtn{
  border-radius: 1rem;
    background-color:rgb(255, 255, 255);
    color: rgb(255, 155, 5);
    font-weight:bold;
    width:20%;
    margin-top:1.5rem;
    font-size:150%;
    
}

.TitleFont{
  font-family: sans-serif;
  font-size: 50px;
  color:rgb(199, 240, 87);
}
.ContentFont{
  font-family: 'Nanum Pen Script', cursive;
  font-size: 200%;
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