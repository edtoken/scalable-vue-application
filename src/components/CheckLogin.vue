<template>
  <div/>
</template>

<script>
export default {
  name: "CheckLogin",
  created() {
    this.$store.dispatch("user/check")
  }
}
</script>
