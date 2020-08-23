<template>
  <div class="container justify-content-center">
    <section>
      <h1 class="mb-0">Number to LCD</h1>
      <a href="https://codingdojo.org/kata/NumberToLCD/"> <p>NumberToLCD</p></a>
    </section>
    <!-- lcd-area -->
    <section class="d-flex justify-content-center flex-wrap p-2 lcd">
      <lcdnumber
        v-for="(num, i) in lcdArray"
        :key="i"
        :number="num"
        :width="widthValue"
        :height="heightValue"
      />
    </section>
    <form class="row d-flex align-items-center ui px-3">
      <fieldset
        class="form-group col-lg-6 d-flex justify-content-between px-0 mb-3"
      >
        <label for="input-lcd-nums">Tarjoa numerot</label>
        <input
          id="input-lcd-nums"
          v-model="lcdString"
          type="text"
          name="lcd-nums"
          class="ui__input"
        />
      </fieldset>
      <fieldset class="d-lg-flex justify-content-lg-between col-12 px-0">
        <div
          class="form-group d-flex justify-content-between col-12 col-lg-6 mb-3 mr-lg-4 px-0"
        >
          <label class="my-auto mb-0" for="numbersWidthSeqs">Vaaka</label>
          <input
            id="numbersWidthSeqs"
            v-model="numWidth"
            name="Numeron pituussekvenssit"
            class="ui__input_short"
            type="text"
          />
        </div>
        <div
          class="form-group d-flex justify-content-between col-12 col-lg-6 px-0"
        >
          <label class="my-auto mb-0" for="numbersHeightSeqs">Korkeus</label>
          <input
            id="numbersHeightSeqs"
            v-model="numHeight"
            name="Numeron korkeussekvenssit"
            class="ui__input_short"
            type="text"
          />
        </div>
      </fieldset>
    </form>
    <hr />
  </div>
</template>

<script>
import lcdnumber from '@/components/LCDnum'
export default {
  components: {
    lcdnumber,
  },
  data() {
    return {
      lcdString: null,
      numWidth: 1,
      numHeight: 1,
    }
  },
  computed: {
    /**
     * @description {filteröi lcdString niin, että digits ja falsyista 0 pääsevät läpi}
     */
    lcdArray() {
      const numbers = Array.from(String(this.lcdString), Number)
      return numbers.filter((num) => num || num === 0)
    },
    widthValue() {
      const w = parseInt(this.numWidth)
      return w
    },
    heightValue() {
      const h = parseInt(this.numHeight)
      return h
    },
  },
}
</script>
