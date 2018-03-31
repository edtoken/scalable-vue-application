<template>
  <div/>
</template>

<script>
export default {
  name: "CheckLogin",
  created() {
    this.$store.dispatch("profile/check")
  }
}
</script>
