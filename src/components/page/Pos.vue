<template>
  <div class="pos">
    <div class="left-container">
      <div class="biggest-title">Abstract</div>
      <div class="input-line">
        Emotion:
        <el-select v-model="emoValue" placeholder="请选择">
          <el-option
            v-for="item in emotion"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="input-line">
        <div class="input-title">Abstract:</div>
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="textarea"
          maxlength="100"
          show-word-limit
        >
        </el-input>
      </div>
      <div class="big-box">
        <div>
          <div class="input-title big-title">Paragraph</div>
          <div class="input-line">
            <div class="input-title">DataLength:</div>
            <el-select class="input-title" v-model="paraValue" placeholder="请选择">
              <el-option
                v-for="item in paragraphF1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="big-box">
        <div>
          <div class="input-title big-title">Image</div>
          <div class="input-line">
            <div class="input-title">Style:</div>
            <el-select class="input-title" v-model="imgValue1" placeholder="请选择">
              <el-option
                v-for="item in imageF1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="input-line">
            <div class="input-title">Color:</div>
            <el-select class="input-title" v-model="imgValue2" placeholder="请选择">
              <el-option
                v-for="item in imageF2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="big-box">
        <div>
          <div class="input-title big-title">Music</div>
          <div class="input-line">
            <div class="input-title">Genre:</div>
            <el-select class="input-title" v-model="musValue1" placeholder="请选择">
              <el-option
                v-for="item in musicF1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="input-line">
            <div class="input-title">Instrument:</div>
            <el-select class="input-title" v-model="musValue2" placeholder="请选择">
              <el-option
                v-for="item in musicF2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <el-button type="info" class="generate-button">Generate</el-button>
    </div>

    <div class="right-container">
<!--      {{something}}-->
      <div class="input-box">
        <div class="input-title big-title">Paragraph</div>
        <div class="confirm-box input-box">
          {{chosenParagraph}}
          <el-button type="info" class="confirm-button1">Confirm1</el-button>
        </div>
        <div class="confirm-box">
<!--          <div class="infinite-list-wrapper" style="overflow:auto">-->
<!--            <ul-->
<!--              class="list"-->
<!--              v-infinite-scroll="load"-->
<!--              infinite-scroll-disabled="disabled">-->
<!--              <li v-for="i in count" class="list-item">{{ i }}</li>-->
<!--            </ul>-->
<!--            <p v-if="loading">加载中...</p>-->
<!--            <p v-if="noMore">没有更多了</p>-->
<!--          </div>-->
          <div class="scroll-box">
              <div v-for="para in paragraphs" @click="chooseItem(1, para)" class="choose-pointer">{{para}}</div>
          </div>
        </div>
      </div>
      <div class="bottom-area ">
        <div class="left-area">
          <div class="input-title big-title">Image</div>
          <div class="confirm-smallBox1 input-box">
            <div>
              <img :src="chosenImg" :class="`${chosenImg ? 'chosen-img' : 'no-chosen'}`" />
            </div>
            <el-button type="info" class="confirm-button2">Confirm2</el-button>
          </div>
          <div class="confirm-smallBox2 input-box">
            <div class="box-style">
              <img v-for="url in urls" :src="url" width="110px" height="110px" alt="picture" @click="chooseItem(2, url)" class="img-style"/>
            </div>
<!--            <div class="demo-image__lazy">-->
<!--              <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>-->
<!--            </div>-->
          </div>
        </div>
        <div class="right-area">
          <div class="input-title big-title">Music</div>
          <div class="confirm-smallBox1 input-box">
            <div>
              <audio controls :src="chosenMusic"/>
            </div>
            <el-button type="info" class="confirm-button3">Confirm3</el-button>
          </div>
          <div class="confirm-smallBox2 input-box">
            <div class="box-style">
              <div class="music-style" v-for="musicUrl in musicUrls" >
                <el-button type="info" class="choose-button" @click="chooseItem(3, musicUrl)">Choose</el-button>
                <audio controls :src="musicUrl" class="music-show"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
<!--    <el-row>-->
<!--      <el-col :span='8' class="right-style" id="right-list">-->
<!--        <h1>Abstract</h1>-->
<!--        <div style="float:left">-->
<!--            Emotion:-->
<!--            <el-select v-model="value" placeholder="请选择">-->
<!--              <el-option-->
<!--                v-for="item in options1"-->
<!--                :key="item.value"-->
<!--                :label="item.label"-->
<!--                :value="item.value">-->
<!--              </el-option>-->
<!--            </el-select>-->

<!--        </div>-->
<!--        <br/><br/><br/>-->
<!--        <div>-->
<!--          <div style="float:left">Abstract:</div>-->
<!--          <br/>-->
<!--          <el-input-->
<!--            type="textarea"-->
<!--            placeholder="请输入内容"-->
<!--            v-model="textarea"-->
<!--            maxlength="100"-->
<!--            show-word-limit-->
<!--          >-->
<!--          </el-input>-->
<!--        </div>-->

<!--        <br/>-->
<!--        <div class="bigBox">-->
<!--          <div>-->
<!--            <div style="float:left">Paragraph</div><br/><br/>-->
<!--            <div style="float:left">Filter1:</div>-->

<!--              <el-select v-model="para_value" placeholder="请选择">-->
<!--                <el-option-->
<!--                  v-for="item in paragraph_f1"-->
<!--                  :key="item.para_value"-->
<!--                  :label="item.para_label"-->
<!--                  :value="item.para_value">-->
<!--                </el-option>-->
<!--              </el-select>-->

<!--            <br/> <br/>-->
<!--            <div style="float:left">Filter2:</div>-->

<!--              <el-select v-model="value3" placeholder="请选择">-->
<!--                <el-option-->
<!--                  v-for="item in options3"-->
<!--                  :key="item.value3"-->
<!--                  :label="item.label3"-->
<!--                  :value="item.value3">-->
<!--                </el-option>-->
<!--              </el-select>-->

<!--          </div>-->
<!--        </div>-->
<!--        <el-button style="position:absolute;right:660px;bottom:23px" type="info">Generate</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span='16' class="title-style" id="title-list">-->
<!--        <el-tabs>-->
<!--          <el-tab-pane label="Paragraph">-->
<!--            <div class="smallTitle">-->
<!--              Paragraph-->
<!--            </div>-->
<!--            <br/><br/>-->
<!--            <div class="box1">-->
<!--              <el-button style="position:absolute;right:25px;top:142px" type="info">Confirm</el-button>-->
<!--            </div><br/>-->
<!--            <div class="box2">-->

<!--            </div>-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="Image">-->

<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="Music">-->

<!--          </el-tab-pane>-->
<!--        </el-tabs>-->
<!--      </el-col>-->


<!--    </el-row>-->

</template>

<script>
export default {
  name: "pos",
  mounted:function(){
    // var titleHeight=document.body.clientHeight;
    // console.log(titleHeight);
    // document.getElementById('title-list').style.height=titleHeight+'px';
    // document.getElementById('right-list').style.height=titleHeight+'px';
  },
  data() {
    return {
      count: 10,
      loading: false,
      textarea:'',
      // url1:'https://www.ytmp3.cn/down/49366.mp3?v=15',
      // url2:'https://www.ytmp3.cn/down/49366.mp3',
      musicUrls: [
        'https://www.ytmp3.cn/down/49366.mp3?v=15',
        'https://www.ytmp3.cn/down/49366.mp3',
        'https://www.ytmp3.cn/down/49366.mp3?v=15',
        'https://www.ytmp3.cn/down/49366.mp3?v=15',
      ],
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      paragraphs: [
        '近一段时间，立陶宛政府不顾中方反复交涉、晓以利害，宣布允许台湾当局以“台湾”名义设立“代表处”。',
        '此举公然违背中立两国建交公报精神，严重损害中国主权和领土完整。中国政府对此表示坚决反对，决定召回中国驻立陶宛大使，并要求立政府召回驻中国大使。',
        '近一段时间，立陶宛政府不顾中方反复交涉、晓以利害，宣布允许台湾当局以“台湾”名义设立“代表处”。',
        '此举公然违背中立两国建交公报精神，严重损害中国主权和领土完整。中国政府对此表示坚决反对，决定召回中国驻立陶宛大使，并要求立政府召回驻中国大使。',
        '近一段时间，立陶宛政府不顾中方反复交涉、晓以利害，宣布允许台湾当局以“台湾”名义设立“代表处”。',
        '此举公然违背中立两国建交公报精神，严重损害中国主权和领土完整。中国政府对此表示坚决反对，决定召回中国驻立陶宛大使，并要求立政府召回驻中国大使。',
      ],
      emotion: [
        {
          value: '选项11',
          label: '快乐'
        }, {
          value: '选项12',
          label: '恐惧'
        }, {
          value: '选项13',
          label: '愤怒'
        }, {
          value: '选项14',
          label: '悲伤'
        }, {
          value: '选项15',
          label: '喜爱'
        }],
      paragraphF1: [
        {
        value: '选项1',
        label: '1-2个段落'
        },
        {
        value: '选项2',
        label: '3-4个段落'
        },
        {
        value: '选项3',
        label: '5个段落及以上'
        }],
      imageF1:[
        {
          value: '选项1',
          label: '动漫风'
        },
        {
          value: '选项2',
          label: '油画风'
        },
        {
          value: '选项3',
          label: '水彩风'
        }],
      imageF2:[
        {
          value: '选项1',
          label: '黄色'
        },
        {
          value: '选项2',
          label: '红色'
        },
        {
          value: '选项3',
          label: '蓝色'
        },
        {
          value: '选项4',
          label: '绿色'
        },
        {
          value: '选项5',
          label: '粉色'
        },
        {
          value: '选项6',
          label: '黑色'
        }],
      musicF1:[
        {
          value: '选项1',
          label: '流行音乐'
        },
        {
          value: '选项2',
          label: '古典音乐'
        },
        {
          value: '选项3',
          label: '说唱'
        }],
      musicF2:[
        {
          value: '选项1',
          label: '吉他主旋'
        },
        {
          value: '选项2',
          label: '钢琴主旋'
        },
        {
          value: '选项3',
          label: '民乐主旋'
        }],
      emoValue: '',
      paraValue:'',
      imgValue1:'',
      imgValue2:'',
      musValue1:'',
      musValue2:'',
      chosenParagraph: '',
      chosenImg: '',
      chosenMusic: '',
      // something: '还没来数据'
    }
  },
  // computed: {
  //   noMore () {
  //     return this.count >= 20
  //   },
  //   disabled () {
  //     return this.loading || this.noMore
  //   }
  // },
  methods: {
    // musicPlay: function () {
    //   this.ifPlaying = true;
    //   this.ifPaused = false;
    // },
    // musicPause: function () {
    //   this.ifPaused = true ;
    // },
    chooseItem: function (type, param) {
      if (type === 1) this.chosenParagraph = param
      if (type === 2) this.chosenImg = param
      if (type === 3) this.chosenMusic = param
    },
      // load () {
    //   this.loading = true
    //   setTimeout(() => {
    //     this.count += 2
    //     this.loading = false
    //   }, 2000)
    // }
  //   handleGenerate() {//操作后進入該函數
  //      getList({ style: this.options1.value, }).then() //後台的style賦值
  //   }
  },
}
</script>

<style lang="scss">
@import "../css/pos.scss";

//.bigBox{
//  border:1px solid rgb(0,0,0);
//  padding:12px;
//  margin:12px;
//  height:170px;
//}
//.box2{
//  border:1px solid rgb(0,0,0);
//  padding:20px;
//  margin:20px;
//  height:75%;
//}
//.box1{
//  border:1px solid rgb(0,0,0);
//  padding:20px;
//  margin:20px;
//  height:25%;
//}
//.smallTitle{
//  float:left;
//  padding:10px;
//}
//.right-style{
//  border-right: 3px solid rgb(0,0,0);
//}
//.title-style{
//  border-right: 1px solid #C0CCDA;
//}
//.choose-pointer {
//  cursor: pointer;
//}
</style>
