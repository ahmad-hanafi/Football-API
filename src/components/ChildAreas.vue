<template>
  <div class="container">
    <form id="sort-bar" class="my-2">
      <input
        type="text"
        v-model="searchValue"
        placeholder="Search clubs..."
        id="search-input"
        class="form-control col"
      />
    </form>

    <div class="row">
      <div
        class="card mx-2 my-2"
        style="width: 300px"
        v-for="team in filteredlistTeams"
        :key="team.id"
      >
      <div class="card-image rounded mx-auto d-block">
          <img
            :src="team.crestUrl"
            alt="card image"
            style="width: 150px; position: center"
          />
        </div>
        <div class="card-body">
          <h3>{{ team.name }}</h3>
          <h3>({{team.tla}})</h3>
          <p><em> {{ team.area.name }}</em></p>
        </div>
        <button class="btn btn-success my-1" @click.prevent="detail(team.id)">
          Detail Team
        </button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildAreas",
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    detail(id) {
      this.$store.dispatch("getTeamById", {
        id: id,
        router: this.$router,
      });
    },
  },
  computed: {
    filteredlistTeams() {
      return this.$store.getters.filteredTeams(this.searchValue);
    },
  },
};
</script>

<style>
</style>