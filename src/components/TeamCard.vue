<template>
  <div>
    <div class="container">
      
      <div class="row">

      <div class="col text-start">
          <img class="my-2" :src=team.crestUrl><br>
          <label>Full name</label><br>
          <p class="fst-italic">{{team.name}}</p>
          <label>Short Name</label><br>
          <p class="fst-italic">{{team.shortName}}</p>
          <label>Founded</label><br>
          <p class="fst-italic">{{team.founded}}</p>
          <label>Club Color</label><br>
          <p class="fst-italic">{{team.clubColors}}</p>
          <label>Venue</label><br>
          <p class="fst-italic">{{team.venue}}</p>
          <label>Address</label><br>
          <p class="fst-italic">{{team.address}}</p>
          <label>Email</label><br>
          <p class="fst-italic">{{team.eamil}}</p>
          <label>Phone</label><br>
          <p class="fst-italic">{{team.phone}}</p>
          <label>Website</label><br>
          <p class="fst-italic">{{team.website}}</p>
      </div>
      <div class="col">
          <button
        class="btn btn-danger my-2 d-grid gap-2 d-md-block"
        @click.prevent="goBackAreaId(team.area.id)"
      >
        Back
      </button>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col-1">No</th>
              <th scope="col">Name</th>
              <th scope="col">Nationality</th>
              <th scope="col">Birth</th>
              <th scope="col">Position</th>
              <th scope="col">Role</th>
              <th scope="col-1">Shirt Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, i) in team.squad" :key="i">
              <th>{{ i + 1 }}</th>
              <th>{{player.name}}</th>
              <th>{{player.nationality}}</th>
              <th>{{player.countryOfBirth}}, {{formatDate(player.dateOfBirth)}}</th>
              <th>{{player.position}}</th>
              <th>{{player.role}}</th>
              <th>{{player.shirtNumber}}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "TeamDetail",
//   data() {
//     return {
//       admin: false,
//     };
//   },
  methods: {
    goBackAreaId(id) {
      this.$store.dispatch("getAreaById", {
        id: id,
        router: this.$router,
      });
    },
    formatDate(date) {
        let result = new Date(date).toDateString()
        return result
    }
  },
  //   mounted() {
  //     this.team();
  //   },
  computed: {
    team() {
      return this.$store.state.team;
    },
  },
};
</script>

<style>
</style>