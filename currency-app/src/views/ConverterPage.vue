<template>
  <div>
    <valute-selector v-model="firstValute" :items="formattedValutes" />
    <valute-selector v-model="secondValute" :items="formattedValutes" />
    <valute-count
      :value="valuteCount"
      :valCount="changeCount"
      @change-valute-count="calcResult"
    />
    <valute-result :result="result" />
  </div>
</template>

<script>
import Converter from "@/components/Converter.vue"
import ValuteSelector from "@/components/ValuteSelector.vue"
import ValuteCount from "@/components/ValuteCount.vue"
import ValuteResult from "@/components/ValuteResult.vue"

export default {
  components: {
    Converter,
    ValuteSelector,
    ValuteCount,
    ValuteResult,
  },
  data() {
    return {
      valutes: [],
      firstValute: "EUR",
      secondValute: "USD",
      valuteCount: "1",
      result: "Результат",
    }
  },
  mounted() {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((response) => response.json())
      .then((json) => {
        this.valutes = json.Valute
      })
  },
  computed: {
    formattedValutes() {
      return Object.values(this.valutes).map((v) => {
        return {
          Name: v.Name,
          CharCode: v.CharCode,
        }
      })
    },
    changeCount() {
      return this.valuteCount
    },
    // calcResult() {
    //     let first = this.valutes[this.firstValute]
    //     let second = this.valutes[this.secondValute]

    //     let firstVal = 1 / (first.Value / first.Nominal)
    //     let secondVal = 1 / (second.Value / second.Nominal)
    //     var res = String((secondVal / firstVal * this.valuteCount).toFixed(2))
    //     this.result = `${this.valuteCount} ${this.firstValute} = ${res} ${this.secondValute}`
    //  }
  },
  methods: {
    changeValuteCount(valCount) {
      this.valuteCount = valCount
    },
    calcResult(valCount) {
      let first = this.valutes[this.firstValute]
      let second = this.valutes[this.secondValute]

      let firstVal = 1 / (first.Value / first.Nominal)
      let secondVal = 1 / (second.Value / second.Nominal)
      var res = String(((secondVal / firstVal) * valCount).toFixed(2))
      this.result = `${valCount} ${this.firstValute} = ${res} ${this.secondValute}`
    },
  },
}
</script>
