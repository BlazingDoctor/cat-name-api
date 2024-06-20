Vue.createApp({
  data() {
    return {
      cats: [],
      cat_name: "",
      cat_count: "",
    };
  },

  methods: {
    loadCats: async function () {
      let resp = await fetch("http://localhost:8080/cats");
      this.cats = await resp.json();
      console.log(this.cats);
    },
    addCat: async function () {
      myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      if (this.cat_name.trim() === "" || this.cat_count.trim() === "") {
        alert("No empty fields");
        return;
      }

      let encodedData =
        "name=" +
        encodeURIComponent(this.cat_name) +
        "&count=" +
        encodeURIComponent(this.cat_count);

      let requestOptions = {
        method: "POST",
        body: encodedData,
        headers: myHeaders,
      };
      fetch("http://localhost:8080/cats", requestOptions).then(() => {
        this.loadCats();
      });
    },
  },

  created: function () {
    console.log("vue app loaded!");
    this.loadCats();
  },
}).mount("#app");
