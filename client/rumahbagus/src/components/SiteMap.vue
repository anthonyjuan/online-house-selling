<template lang="html">
  <div class="layout">
    <div class="layout-content">
        <!-- <gmap-map
          :center="center"
          :zoom="7"

          style="width:100%; height:300px">
        </gmap-map> -->
        <el-row>
          <el-col :span="4" v-for="(house, index) in houses" :key="house._id" :offset="index > 0 ? 1 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="http://i.imgur.com/W5ICO9j.jpg"  style="width:200px;height:200px;" class="image">
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
                <img src="http://i.imgur.com/W5ICO9j.jpg"  style="width:200px;height:200px;" class="image">
              </el-col>
              <el-col :span="14">
                <p><b>Title</b> : {{houseDialog.title}}</p>
                <p><b>Description</b> : {{houseDialog.description}}</p>
                <p><b>Price</b> : IDR {{houseDialog.price}}</p>
              </el-col>

            </el-row>
            <el-button style="float:right;" type="danger" @click="deleteHouse(houseDialog._id)">Delete</el-button>
            <br>
          </el-dialog>
        </el-row>
        <br>
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
      markers:'',
      dialogTableVisible: false,
      houseDialog: ''
    }
  },
  methods: {
    mapRclicked (mouseArgs) {
      const createdMarker = this.addMarker()
      createdMarker.position.lat = mouseArgs.latLng.lat()
      createdMarker.position.lng = mouseArgs.latLng.lng()
    },
    showDialog(house) {
      this.houseDialog = house
      console.log(this.houseDialog)
      this.dialogTableVisible = true
    },
    deleteHouse(id) {
      this.$store.dispatch('deleteHouse',id);
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
