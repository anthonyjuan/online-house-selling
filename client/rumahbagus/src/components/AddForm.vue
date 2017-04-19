<template lang="html">
  <el-tabs v-model="activeName" @tab-click="showForm()">
    <el-tab-pane label="Add House" name="first">
      <el-form class="animated fadeIn" v-if="show" label-position="top" ref="form" label-width="120px" >
        <el-form-item label="Title">
          <el-input v-model="newHouse.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="newHouse.description"></el-input>
        </el-form-item>
        <el-form-item label="Price">
          <el-input type="number" v-model="newHouse.price"></el-input>
        </el-form-item>
        <el-form-item label="Owner">
          <el-input v-model="newHouse.owner"></el-input>
        </el-form-item>
        <el-form-item label="Image">
          <el-input v-model="newHouse.image"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="newHouse.address"></el-input>
        </el-form-item>
        <el-form-item label="Latitude">
          <el-input type="number" v-model="newHouse.lat"></el-input>
        </el-form-item>
        <el-form-item label="Longitude">
          <el-input type="number" v-model="newHouse.lng"></el-input>
        </el-form-item>
        <br>
        <el-form-item>
          <gmap-map
            :center="center"
            :zoom="18"
            @click="mapRclicked"
            @rightclick="mapClicked"
            style="width:100%; height:300px">
            <gmap-marker
              :position="marker.position"
              :clickable="true"
              :draggable="true"
              @click="center=markers.position"
            ></gmap-marker>
          </gmap-map>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="postHouse()">Submit</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>

  </el-tabs>

</template>

<script>
export default {
  data() {
    return {
      activeName:'first',
      show:false,
      marker: ''
    }
  },

  computed: {
    newHouse() {
      return this.$store.getters.newHouse
    },
    center() {
      return this.$store.getters.center
    }
  },
  methods: {
    showForm() {
      this.show = !this.show
    },
    postHouse() {
      // console.log(this.newHouse);
      this.$store.dispatch('postHouse')
    },
    mapClicked(mouseArgs) {
     console.log('map clicked', mouseArgs); // eslint-disable-line no-console
   },
   mapRclicked(mouseArgs) {
     const createdMarker = this.addMarker();
     this.newHouse.lat = mouseArgs.latLng.lat();
     this.newHouse.lng = mouseArgs.latLng.lng();
     createdMarker.position.lat = mouseArgs.latLng.lat();
     createdMarker.position.lng = mouseArgs.latLng.lng();
   },
   addMarker: function addMarker() {
     this.lastId++;
     this.marker = {
       id: this.lastId,
       position: {
         lat: 48.8538302,
         lng: 2.2982161
       },
       opacity: 1,
       draggable: true,
       enabled: true,
       clicked: 0,
       rightClicked: 0,
       dragended: 0,
       ifw: true,
       ifw2text: 'This text is bad please change me :( '
     }
     return this.markers;
   }
  }

}
</script>

<style lang="css">
</style>
