<template>
  <li :class="{ plus: isGrowth }">
    <span>{{ valuteInfo["CharCode"] }}</span>
    <span>{{ valuteInfo["Name"] }}</span>
    <span>
      {{ (valuteInfo["Value"] / valuteInfo["Nominal"]) | fixDecimal }} RUB
    </span>
    <span>{{ diff }}</span>
  </li>
</template>

<script>
export default {
  props: {
    valuteInfo: {
      type: Object,
      required: true,
    },
  },
  filters: {
    fixDecimal(value) {
      return value.toFixed(2)
    },
  },
  computed: {
    diff() {
      const { Value, Previous } = this.valuteInfo
      let result = ((Value - Previous) / Previous) * 100
      result = result.toFixed(2)
      return Previous > Value ? `${result}%` : `+${result}%`
    },
    isGrowth() {
      const { Value, Previous } = this.valuteInfo
      let result = ((Value - Previous) / Previous) * 100
      return Number(result) >= 0 ? true : false
    },
  },
}
</script>

<style scoped>
li {
  background: rgba(255, 0, 0, 0.7);
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

li:hover {
  color: white;
}

.plus {
  background: rgba(0, 128, 0, 0.7);
}

span {
  width: 350px;
}
</style>
