<template>
  <div>
      <h1>Ini di childAreas</h1>
      <ChildAreas />
  </div>
</template>

<script>
import ChildAreas from "@/components/ChildAreas.vue";

export default {
    name : "ChildAreas",
    components: {
        ChildAreas
    }
}
</script>

<style>

</style>