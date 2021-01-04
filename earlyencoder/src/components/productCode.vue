<template>
    <!-- 编码主功能区 -->
  <div id="divMain">
    <!-- 左侧边栏 -->
    <div id="divCnfig">
      <!-- 上 -->
      <!-- <div id="divChoseCnfig"> -->
        <el-tag style=
        "background-color: #DFE4ED;
        color: #545c64;
        border-color: #DFE4ED;
        font-size: medium;
        margin-left: 45%;"
        >
        选择配置
        </el-tag>
        <el-tabs @tab-click="fillDateToTable">
            <el-tab-pane label="产品机种" name="first">产品机种</el-tab-pane>
            <el-tab-pane label="传动方式" name="second">传动方式</el-tab-pane>
            <el-tab-pane label="吨位" name="third">吨位</el-tab-pane>
            <el-tab-pane label="轴距" name="fourth">轴距</el-tab-pane>
            <el-tab-pane label="特殊代号" name="five">特殊代号</el-tab-pane>
            <el-tab-pane label="动力形式" name="six">动力形式</el-tab-pane>
            <el-tab-pane label="排放代号" name="seven">排放代号</el-tab-pane>
            <el-tab-pane label="配置升级代号" name="eight">配置升级代号</el-tab-pane>
            <el-tab-pane label="版式" name="nine">版式</el-tab-pane>
            <el-tab-pane label="发动机" name="ten">发动机</el-tab-pane>
            <el-tab-pane label="变速箱" name="eleven">变速箱</el-tab-pane>
            <el-tab-pane label="动臂" name="twvelve">动臂</el-tab-pane>
            <el-tab-pane label="铲斗" name="thirteen">铲斗</el-tab-pane>
            <el-tab-pane label="操控方式" name="fourteen">操控方式</el-tab-pane>
            <el-tab-pane label="销售代号" name="fifteen">销售代号</el-tab-pane>
            <el-tab-pane label="可选配置" name="sixteen">可选配置</el-tab-pane>
        </el-tabs>
      <!-- </div> -->
      <!-- 下-->
      <!-- <div id="divCnfigShow"> -->
        <el-table
            :data="tableData"
            style="width: 100%"
            height="300px"
            >
            <el-table-column v-if="tChoseSeen"
                  label="选择" width="80">
                  <template>
                    <el-radio></el-radio>
                  </template>
            </el-table-column>
            <el-table-column v-else
                  type="selection"
                  width="50">
            </el-table-column>
            <el-table-column
                  prop="configName"
                  label="配置名称"
                  width="150">
            </el-table-column>
            <el-table-column
                  prop="configParam"
                  label="配置参数"
                  width="300">
            </el-table-column>
            </el-table>
            <el-tag style=
        "background-color: #DFE4ED;
        color: #545c64;
        border-color: #DFE4ED;
        font-size: medium;
        margin-left: 40%;
        margin-top: 60px;">
        已选配置说明
        </el-tag>
            <el-input placeholder="已选配置说明" value="装载机/"></el-input>
      <!-- </div> -->
    </div>
    <div id="divCodeShow">
      <el-tag style=
        "background-color: #DFE4ED;
        color: #545c64;
        border-color: #DFE4ED;
        font-size: medium;
        margin-left: 35%;">
      整机编码
      </el-tag>
      <el-input placeholder="整机编码"></el-input>
      <div style=
      "margin-top: 20px;
      margin-left: 20%;">
      <el-checkbox v-model="toDataBaseCheck">保存至数据库</el-checkbox>
      <el-button type="info" @click="testPostRequest">点击生成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'productCode',
  data() {
    return {
      tableData:[],
      tChoseSeen:true,
      toDataBaseCheck:true
    }
  },
  methods: {
      fillDateToTable(tab,event){
          this.$data.tableData=[{configName:'产品机种',configParam:'山推'}];
        },
      testPostRequest(){
          const result = this.$http.get("query")
          .then(
            (res) => {
              console.log(res);
            });
            /* const result = this.$http.post("https://autumnfish.cn/api/user/reg",{
              username:'jack'
            }).then(res => {
              console.log(res);
            });
            https://autumnfish.cn/api/joke/list?num=3
            */
          console.log(result);
        }
  }
  }
</script>

<style scoped>
  /**
   * 编码主区域
   * */
#divMain{
  width: 1000px;
  /* height: 100%; */
  margin: 0 auto;
  /* border: 1px solid #2B4B6B; */
}
  /**
   *  配置主区域
   * */
#divCnfig{
  width: 70%;/* 700px; */
  height: 550px;
  border: 1px solid #2B4B6B;
  float: left;
}
/*配置上区域*/
/* #divCnfigShow{
  width: 700px;
  height: 447px;
  border: 1px solid #2B4B6B;
} */
/*配置下区域*/
/* #divChoseCnfig{
  width: 700px;
  height: 150px;
  border: 1px solid #2B4B6B;
} */
/**
 * 整机编码显示区
 */
#divCodeShow{
  width: 28%;/* 300px; */
  height: 550px;
  border: 1px solid #2B4B6B;
  float: right;
}
</style>
