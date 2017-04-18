<template lang="html">
  <div class="layout">
    <div class="layout-content">
        <gmap-map
          :center="center"
          :zoom="7"

          style="width:100%; height:300px">
        </gmap-map>
        <ul>
          <li v-for="house in houses">Title: {{house.title}} | description: {{house.description}}</li>
        </ul>
    </div>
    <div class="layout-content">
      <add-form></add-form>
    </div>
  </div>
</template>

<script>
import AddForm from './AddForm'
export default {
  components: {
    AddForm
  },
  data() {
    return {
      center: {lat:10.0, lng:10.0},
      markers:''

    }
  },
  methods: {
    mapRclicked (mouseArgs) {
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
    }
  },
  mounted() {
    this.$store.dispatch('getHouses')
    // console.log('ini house------',this.houses);
  },
  computed: {
    houses(){
      return this.$store.getters.houses
    }
  }

}
</script>

<style lang="css" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
}


.layout-content{
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

</style>
