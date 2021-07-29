<template>
  <div class="pos">
    <el-row>
      <el-col :span='8' class="right-style" id="right-list">
        <h1>Abstract</h1>
        <div style="float:left">
          &nbsp Emotion:
          <template>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </div>
        <br/><br/><br/>
        <div>
          <div style="float:left">&nbsp Abstract:</div>
          <br/>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="100"
            show-word-limit
          >
          </el-input>
        </div>
        <br/>
        <div class="bigBox">
          <div>
            <div style="float:left">Paragraph</div><br/><br/>
            <div style="float:left">Filter1:</div>
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <br/> <br/>
            <div style="float:left">Filter2:</div>
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </div>
        </div>
        <el-button style="position:absolute;right:660px;bottom:23px" type="info">Generate</el-button>
      </el-col>
      <el-col :span='16' class="title-style" id="title-list">
        <el-tabs>
          <el-tab-pane label="Paragraph">
            <div class="smallTitle">
              Paragraph
            </div>
            <br/><br/>
            <div class="box1">
              <el-button style="position:absolute;right:25px;top:142px" type="info">Confirm</el-button>
            </div><br/>
            <div class="box2">

            </div>
          </el-tab-pane>
          <el-tab-pane label="Image">

          </el-tab-pane>
          <el-tab-pane label="Music">

          </el-tab-pane>
        </el-tabs>
      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  name: "pos",
  mounted:function(){
    var titleHeight=document.body.clientHeight;
    console.log(titleHeight);
    document.getElementById('title-list').style.height=titleHeight+'px';
    document.getElementById('right-list').style.height=titleHeight+'px';
  }
}
</script>

<style>
.bigBox{
  border:1px solid rgb(0,0,0);
  padding:12px;
  margin:12px;
  height:170px;
}
.box2{
  border:1px solid rgb(0,0,0);
  padding:20px;
  margin:20px;
  height:300px;
}
.box1{
  border:1px solid rgb(0,0,0);
  padding:20px;
  margin:20px;
  height:90px;
}
.smallTitle{
  float:left;
  padding:10px;
}
.right-style{
  border-right: 3px solid rgb(0,0,0);
}
.title-style{
  border-right: 1px solid #C0CCDA;
}
</style>

