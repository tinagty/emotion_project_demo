<template>
  <div class="pos">
    <el-row>
      <el-col :span='8' class="right-style" id="right-list">
        <h1>Abstract</h1>
        <div style="float:left">
          &nbsp Emotion:
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

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

              <el-select v-model="para_value" placeholder="请选择">
                <el-option
                  v-for="item in paragraph_f1"
                  :key="item.para_value"
                  :label="item.para_label"
                  :value="item.para_value">
                </el-option>
              </el-select>

            <br/> <br/>
            <div style="float:left">Filter2:</div>

              <el-select v-model="value3" placeholder="请选择">
                <el-option
                  v-for="item in options3"
                  :key="item.value3"
                  :label="item.label3"
                  :value="item.value3">
                </el-option>
              </el-select>

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
  },
  data() {
    return {
      options1: [
        {
        value: '选项1',
        label: '黄金糕'
        },
        {
        value: '选项2',
        label: '双皮奶'
        },
        {
        value: '选项3',
        label: '蚵仔煎'
        }],

      paragraph_f1: [
        {
        para_value: 'f1',
        para_label: '黄'
        },
        {
        para_value: 'f2',
        para_label: '红'
        },
        {
        para_value: 'f3',
        para_label: '白'
        }],

      options3: [{
        value3: '选项11',
        label3: '快乐'
      }, {
        value3: '选项12',
        label3: '伤心'
      }, {
        value3: '选项13',
        label3: '愤怒'
      }, {
        value3: '选项14',
        label3: '喜悦'
      }, {
        value3: '选项15',
        label3: '郁闷'
      }],

      value: '',
      para_value:'',
      value3:''
    }
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
