var app = new Vue({
  el: "#app",
  data: {
    fotos: [],
    perfil: 'devgiordane'
  },
  methods: {
    getProfile: function () {
      axios
        .get(`https://www.instagram.com/${this.perfil}/?__a=1`)
        .then((res) => (this.fotos = res.data.graphql["user"].edge_owner_to_timeline_media.edges));
    },
  },
  mounted() {
    this.getProfile();
  },
});
