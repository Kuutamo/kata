<template>
  <div class="d-flex row mb-4" :class="isnumber">
    <!-- top -->
    <div class="row justify-content-center lcd__line-horizontal">
      <div
        v-for="w in widthLoop"
        :key="w"
        class="lcd__dot-horizontal"
        :class="lines.top"
        :style="defineWidth"
      ></div>
    </div>
    <!-- top vertical -->
    <div class="row justify-content-between w-100">
      <div class="lcd__line-vertical">
        <div
          v-for="h in heightLoop"
          :key="h"
          class="lcd__dot-vertical"
          :class="lines.topLeft"
          :style="defineHeight"
        ></div>
      </div>
      <div class="lcd__line-vertical">
        <div
          v-for="h in heightLoop"
          :key="h"
          class="lcd__dot-vertical"
          :class="lines.topRight"
          :style="defineHeight"
        ></div>
      </div>
    </div>
    <!-- middle -->
    <div class="row justify-content-center lcd__line-horizontal">
      <div
        v-for="w in widthLoop"
        :key="w"
        class="lcd__dot-horizontal"
        :class="lines.middle"
        :style="defineWidth"
      ></div>
    </div>
    <!-- bottom vertical -->
    <div class="row justify-content-between w-100">
      <div class="lcd__line-vertical">
        <div
          v-for="h in heightLoop"
          :key="h"
          class="lcd__dot-vertical"
          :class="lines.bottomLeft"
          :style="defineHeight"
        ></div>
      </div>
      <div class="lcd__line-vertical">
        <div
          v-for="h in heightLoop"
          :key="h"
          class="lcd__dot-vertical"
          :class="lines.bottomRight"
          :style="defineHeight"
        ></div>
      </div>
    </div>
    <!-- bottom -->
    <div class="row justify-content-center lcd__line-horizontal">
      <div
        v-for="w in widthLoop"
        :key="w"
        class="lcd__dot-horizontal"
        :class="lines.bottom"
        :style="defineWidth"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
      default: 0,
    },
    width: {
      type: Number,
      default: 1,
    },
    height: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      lines: {
        top: null,
        topLeft: null,
        topRight: null,
        middle: null,
        bottomLeft: null,
        bottomRight: null,
        bottom: null,
      },
      isnumber: 'lcd__num-card',
    }
  },
  computed: {
    //  varmista jokin pituus elementille tyhjällä tuloksella
    defineWidth() {
      let w = this.width
      if (isNaN(w)) {
        w = 1
      }
      const width = 62 / w
      return `width:${width}px;`
    },
    defineHeight() {
      let h = this.height
      if (isNaN(h)) {
        h = 1
      }
      const height = 40 / h
      return `height:${height}px;`
    },
    // varmista, ettei selain renderöit tyhjän loopin virhettä
    heightLoop() {
      let heightLoop = this.height
      if (isNaN(heightLoop)) {
        heightLoop = 1
      }
      return heightLoop
    },
    widthLoop() {
      let widthLoop = this.width
      if (isNaN(widthLoop)) {
        widthLoop = 1
      }
      return widthLoop
    },
  },
  mounted() {
    this.defineNumber()
    window.console.log(this.number)
  },
  methods: {
    defineNumber() {
      switch (this.number) {
        case 0:
          this.lines.top = 'lcd__true'
          this.lines.topLeft = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          //
          this.lines.bottomLeft = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          this.lines.bottom = 'lcd__true'
          break
        case 1:
          this.lines.topRight = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          break
        case 2:
          this.lines.top = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomLeft = 'lcd__true'
          this.lines.bottom = 'lcd__true'
          break
        case 3:
          this.lines.top = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          this.lines.bottom = 'lcd__true'
          break
        case 4:
          this.lines.topLeft = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          break
        case 5:
          this.lines.top = 'lcd__true'
          this.lines.topLeft = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          this.lines.bottom = 'lcd__true'
          break
        case 6:
          this.lines.top = 'lcd__true'
          this.lines.topLeft = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomLeft = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          this.lines.bottom = 'lcd__true'
          break
        case 7:
          this.lines.top = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          break
        case 8:
          this.lines.top = 'lcd__true'
          this.lines.topLeft = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomLeft = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          this.lines.bottom = 'lcd__true'
          break
        case 9:
          this.lines.top = 'lcd__true'
          this.lines.topLeft = 'lcd__true'
          this.lines.topRight = 'lcd__true'
          this.lines.middle = 'lcd__true'
          this.lines.bottomRight = 'lcd__true'
          break
        default:
          break
      }
    },
  },
}
</script>
