<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1" />
        </div>
        <!-- 三张图片 -->
        <!-- 这里不能用 v-else 因为这个 div 和 上面 v-if 的img 不是同级别标签 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img :src="item" alt="" class="thumb" v-for="(item,index) in cover.images" :key="index"/>
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{ author }} &nbsp;&nbsp; {{ cmtCount }}评论 &nbsp;&nbsp; 发布日期 {{ time }}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'FoodtopiaDeliver',
  // 自定义属性
  props: {
    // 文章标题
    title: {
      type: String,
      default: '发单标题'
    },
    author: {
      type: String,
      default: '默认发单者名字'
    },
    cmtCount: {
      // 指定type 可以是数组中的任意类型
      type: [Number, String],
      default: 0
    },
    time: {
      type: String,
      default: '默认时间'
    },
    cover: {
      type: Object,
      // 带有默认值的对象，对象或者数组必须从一个工厂函数中获取
      // 不可以直接 赋值为 {} or []
      // default: {}
      default: () => {
        return {}
      }
      // 简单点，直接赋值 null 对象
      // default: null
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
