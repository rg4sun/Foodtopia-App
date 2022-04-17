<template>
  <div>
    <!-- <h1>ArticleInfo 组件</h1> -->
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.src[0]" alt="" class="thumb" v-if="cover.type === 1" />
        </div>
        <!-- 三张图片 -->
        <!-- 这里不能用 v-else 因为这个 div 和 上面 v-if 的img 不是同级别标签 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item, index) in cover.src" :key="index" />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span class="rmb">¥ {{ rmb }}</span> <span>&nbsp;&nbsp; {{ like }}条评论 &nbsp;&nbsp; 上架日期 {{ time }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="fire" color="#ee0a24" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'FoodtopiaCanteen',
  // 自定义属性
  props: {
    // 文章标题
    title: {
      type: String,
      default: '默认菜品名称'
    },
    rmb: {
      type: Number,
      default: 999
    },
    like: {
      type: Number,
      default: 0
    },
    time: {
      type: String,
      default: '默认时间'
    },
    cover: {
      type: Object,
      default: () => {
        return {
          type: 3,
          src: ''
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .rmb {
    color: red;
    font-size: 21px;
  }
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
