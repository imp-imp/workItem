<template>
  <view class="fu-waterfall">
    <view id="fu-left-column" class="fu-column"><slot name="left" :leftList="leftList"></slot></view>
    <view id="fu-right-column" class="fu-column"><slot name="right" :rightList="rightList"></slot></view>
  </view>
</template>

<script>
/**
 * waterfall 瀑布流
 * @description 这是一个瀑布流形式的组件，内容分为左右两列，结合uView的懒加载组件效果更佳。相较于某些只是奇偶数左右分别，或者没有利用vue作用域插槽的做法，uView的瀑布流实现了真正的 组件化，搭配LazyLoad 懒加载和loadMore 加载更多组件，让您开箱即用，眼前一亮。
 * @tutorial https://www.uviewui.com/components/waterfall.html
 * @property {Array} flow-list 用于渲染的数据
 * @property {String Number} add-time 单条数据添加到队列的时间间隔，单位ms，见上方注意事项说明（默认200）
 * @example <fu-waterfall :flowList="flowList"></fu-waterfall>
 */
export default {
  name: 'fu-waterfall',
  props: {
    value: {
      // 瀑布流数据
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    // 每次向结构插入数据的时间间隔，间隔越长，越能保证两列高度相近，但是对用户体验越不好
    // 单位ms
    addTime: {
      type: [Number, String],
      default: 200
    },
    // 数据索引唯一标识
    nodeKey: {
      type: String,
      default: 'id'
    }
  },
  data() {
    return {
      leftList: [],
      rightList: [],
      tempList: [],
      children: []
    };
  },
  watch: {
    copyFlowList(nVal, oVal) {
      if (oVal.length != 0) {
        // 新数据比老数据多 加载数据
        // 新数据比老数据少 刷新数据
        // 新数据和老数据一样 刷新数据
        if (nVal.length > oVal.length) {
          console.log('上拉加载');
          // 取差值，即这一次数组变化新增的部分
          let startIndex = Array.isArray(oVal) && oVal.length > 0 ? oVal.length : 0;
          // 拼接上原有数据
          this.tempList = this.tempList.concat(this.cloneData(nVal.slice(startIndex)));
        } else {
          console.log('下拉刷新');
          this.tempList = this.cloneData(nVal);
          // 新数据ID集合
          let nIds = nVal.map(ele => ele[this.nodeKey]);
          // 删除多余的数据
          this.leftList = this.leftList.filter(ele => nIds.includes(ele[this.nodeKey]));
          this.rightList = this.rightList.filter(ele => nIds.includes(ele[this.nodeKey]));
        }
      } else {
        // 首次加载数据
        console.log('首次加载');
        this.tempList = this.cloneData(nVal);
      }
      this.splitData();
    }
  },
  mounted() {
    this.tempList = this.cloneData(this.copyFlowList);
    this.splitData();
  },
  computed: {
    // 破坏flowList变量的引用，否则watch的结果新旧值是一样的
    copyFlowList() {
      return this.cloneData(this.value);
    }
  },
  methods: {
    async splitData() {
      if (!this.tempList.length) return;
      let leftRect = await this.$uGetRect('#fu-left-column');
      let rightRect = await this.$uGetRect('#fu-right-column');
      // 如果左边小于或等于右边，就添加到左边，否则添加到右边
      let item = this.tempList[0];
      // 解决多次快速上拉后，可能数据会乱的问题，因为经过上面的两个await节点查询阻塞一定时间，加上后面的定时器干扰
      // 数组可能变成[]，导致此item值可能为undefined
      if (!item) return;
      // 查找数据,精确更新每一条数据
      let leftIndex = this.leftList.findIndex(ele => ele[this.nodeKey] == item[this.nodeKey]);
      let rightIndex = this.rightList.findIndex(ele => ele[this.nodeKey] == item[this.nodeKey]);
      if (leftIndex != -1) {
        this.leftList.splice(leftIndex, 1, item);
      } else if (rightIndex != -1) {
        this.rightList.splice(rightIndex, 1, item);
      } else {
        if (leftRect.height < rightRect.height) {
          this.leftList.push(item);
        } else if (leftRect.height > rightRect.height) {
          this.rightList.push(item);
        } else {
          // 这里是为了保证第一和第二张添加时，左右都能有内容
          // 因为添加第一张，实际队列的高度可能还是0，这时需要根据队列元素长度判断下一个该放哪边
          if (this.leftList.length <= this.rightList.length) {
            this.leftList.push(item);
          } else {
            this.rightList.push(item);
          }
        }
      }
      // 移除临时列表的第一项
      this.tempList.splice(0, 1);
      // 如果临时数组还有数据，继续循环
      if (this.tempList.length) {
        setTimeout(() => {
          this.splitData();
        }, this.addTime);
      }
    },
    // 复制而不是引用对象和数组
    cloneData(data) {
      return JSON.parse(JSON.stringify(data));
    },

    $uGetRect(selector, all) {
      return new Promise(resolve => {
        uni
          .createSelectorQuery()
          .in(this)
          [all ? 'selectAll' : 'select'](selector)
          .boundingClientRect(rect => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.fu-waterfall {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 10rpx;
}

.fu-column {
  display: flex;
  flex: 1;
  width: 50%;
  flex-direction: column;
  height: auto;
}
</style>
