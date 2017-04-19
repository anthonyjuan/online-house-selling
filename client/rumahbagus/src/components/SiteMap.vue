<template lang="html">
  <div class="layout">
    <div class="layout-content">
      <el-row>

        <el-col :span="14">
        <el-tabs v-model="activeName">
          <el-tab-pane label="House" name="first"></el-tab-pane>
            <el-row>
              <el-col :span="6" v-for="(house, index) in houses" :key="house._id" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="house.image"  style="width:200px;height:200px;" class="image">
                  <div style="padding: 14px;">
                    <span>{{house.title}}</span>
                    <div class="bottom clearfix">
                      <el-button type="text" class="button" @click="showDialog(house)">View</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-dialog title="Details" v-model="dialogTableVisible">
                <el-row>
                  <el-col :span="10">
                    <img :src="houseDialog.image" style="width:200px;height:200px;" class="image">
                    <el-button style="float:left;" type="danger" @click="deleteHouse(houseDialog._id)">Delete</el-button>
                    <el-button style="float:left;" type="success" @click="editHouse(houseDialog)">Submit Edit</el-button>
                  </el-col>
                  <el-col :span="14">
                    <el-form label-position="top" label-width="100px">
                      <el-form-item label="Title">
                        <el-input v-model="houseDialog.title"></el-input>
                      </el-form-item>
                      <el-form-item label="Description">
                        <el-input v-model="houseDialog.description"></el-input>
                      </el-form-item>
                      <el-form-item label="Price">
                        <el-input v-model="houseDialog.price"></el-input>
                      </el-form-item>
                      <el-form-item label="Owner">
                        <el-input v-model="houseDialog.owner"></el-input>
                      </el-form-item>
                      <el-form-item label="Address">
                        <el-input v-model="houseDialog.address"></el-input>
                      </el-form-item>
                      <el-form-item label="Latitude">
                        <el-input type="number" v-model="houseDialog.loc.lat"></el-input>
                      </el-form-item>
                      <el-form-item label="Longitude">
                        <el-input type="number" v-model="houseDialog.loc.lng"></el-input>
                      </el-form-item>

                    </el-form>
                    <gmap-map
                      :center="locMap"
                      :zoom="17"
                      @click="mapRclicked"
                      style="width:100%; height:300px">
                      <gmap-marker
                        :position="locMap"
                        :clickable="true"
                      ></gmap-marker>
                    </gmap-map>
                  </el-col>
                </el-row>

                <br>
              </el-dialog>
            </el-row>
        </el-tabs>
        </el-col>
        <el-col :span="10">
          <add-form></add-form>
        </el-col>
      </el-row>
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
      activeName:'first',
      dialogTableVisible: false,
      locMap: {
        lat: 0,
        lng: 0
      },
      marker:''
    }
  },
  methods: {

    mapClicked(mouseArgs) {
     console.log('map clicked', mouseArgs); // eslint-disable-line no-console
    },
    mapRclicked(mouseArgs) {
     const createdMarker = this.addMarker();
     this.houseDialog.loc.lat = mouseArgs.latLng.lat();
     this.houseDialog.loc.lng = mouseArgs.latLng.lng();
     this.locMap.lat = mouseArgs.latLng.lat();
     this.locMap.lng = mouseArgs.latLng.lng();
     createdMarker.position.lat = mouseArgs.latLng.lat();
     createdMarker.position.lng = mouseArgs.latLng.lng();
    },
    addMarker: function addMarker() {
     this.lastId++;
     this.markers = {
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
    },
    showDialog(house) {
      this.$store.dispatch('addHouseDialog',house)
      console.log(this.houseDialog);
      this.locMap.lat = this.houseDialog.loc.lat
      this.locMap.lng = this.houseDialog.loc.lng
      this.dialogTableVisible = true
    },
    deleteHouse(id) {
      this.$alert('Are you sure?!', 'Warning', {
        confirmButtonText: 'OK',
        callback: action => {
          if(action == 'confirm') {
            this.$store.dispatch('deleteHouse',id);
            this.dialogTableVisible = false
            this.$message({
              type: 'info',
              message: `Item Deleted`
            });
          } else {
            this.dialogTableVisible = false
          }

        }
      });

    },
    editHouse() {
      this.$store.dispatch('editHouse');
      this.dialogTableVisible = false
    }
  },
  mounted() {
    this.$store.dispatch('getHouses')
    // console.log('ini house------',this.houses);
  },
  computed: {
    houses(){
      return this.$store.getters.houses
    },
    houseDialog(){
      return this.$store.getters.houseDialog
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
    /*background: #fff;*/
    border-radius: 4px;
}

</style>
