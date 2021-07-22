<template>
  <div class="container">
    <form id="sort-bar" class="my-2">
      <input
        type="text"
        v-model="searchValue"
        placeholder="Search nations or continent..."
        id="search-input"
        class="form-control col"
      />
    </form>

    <div class="row">
      <div
        class="card mx-2 my-2"
        style="width: 300px"
        v-for="area in filteredlistAreas"
        :key="area.id"
      >
        <div class="card-text">
          <h3>{{ area.name }} ({{area.countryCode}})</h3>
          <p><em> {{ area.parentArea }}</em></p>
        </div>
        <button class="btn btn-success" @click.prevent="detail(area.id)">
          Team List
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area",
  data() {
    return {
      searchValue: "",
      listAreas: []
    }
  },
  methods: {
    getAreas() {
      this.$store.dispatch("getAreas");
    },
    detail(id) {
      this.$store.dispatch("getAreaById", {
        id: id,
        router: this.$router,
      });
    },
  },

  mounted() {
    this.getAreas();
  },
  computed: {
    areas() {
      this.listAreas = this.$store.state.areas;
      return this.$store.state.areas;
    },
    filteredlistAreas() {
      return this.$store.getters.filteredAreas(this.searchValue)
    }
  }

};
</script>

<style>
</style>