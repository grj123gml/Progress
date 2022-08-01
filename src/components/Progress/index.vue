<template>
  <div class="progress">
    <div class="outBox" :class="{ backgroundColor: bgColor }">
      <div
        class="innerBox"
        :style="{ width: `${percent}%` }"
        :class="type"
      ></div>
    </div>
    <span>{{ percent }}%</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    // 百分比
    percent: {
      type: String,
      default: '60'
    },
    // 进度条的宽度
    // width: {
    //   type: Number,
    //   default: 300,
    // },
    // // 背景颜色
    bgColor: {
      type: String,
      default: '#ebeef5'
    },
    // 进度条颜色的类型
    type: {
      type: String,
      default: 'default',
      // 自动校验
      validator(val) {
        // console.log(val)
        return ['success', 'fail', 'warning', 'default'].includes(val)
      }
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped lang="less">
.progress {
  width: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
    font-size: 14px;
    color: #666;
  }

  .outBox {
    width: 300px;
    height: 20px;
    border-radius: 10px;
    background: #ebeef5;
    position: relative;
    display: flex;
    align-items: center;

    .innerBox {
      width: 100px;
      height: 20px;
      // background: #409eff;
      border-radius: 10px;
    }
  }

  .success {
    background-color: #13ce66;
  }
  .fail {
    background-color: #ff4949;
  }
  .waring {
    background-color: #e6a23c;
  }
  .default {
    background-color: #409eff;
  }
}
</style>
