<template>
  <div class="rightTop-Nav">
    <div class="clearfix">
      <div class="box" style="background-color:#bbb">
        <h2>Paragraph</h2>
      </div>
      <div class="box" style="background-color:#ccc">
        <h2>Image</h2>
      </div>
      <div class="box" style="background-color:#ddd">
        <h2>Music</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rightTopNav"
}
</script>

<style>

* {
  box-sizing: border-box;
}
.box {
  float: left;
  width: 33.33%;
  padding:20px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.rightTop-Nav{
  width:65%;
  float:right;
}
</style>
