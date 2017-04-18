<template lang="html">
  <div class="">
    <Menu mode="horizontal" theme="dark" active-name="1">
         <div class="layout-logo"></div>
         <div class="layout-nav">
             <Menu-item name="1">
                 <Icon type="ios-analytics"></Icon>
                 Home
             </Menu-item>
         </div>
    </Menu>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
}
.layout-assistant{
    width: 300px;
    margin: 0 auto;
    height: inherit;
}
.layout-breadcrumb{
    padding: 10px 15px 0;
}
.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
</style>
