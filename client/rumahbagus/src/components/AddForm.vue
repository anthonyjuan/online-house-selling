<template lang="html">
  <el-collapse>
    <el-collapse-item title="Add House" name="1">
      <el-form ref="form" label-width="120px">
        <el-form-item label="Title">
          <el-input v-model="newHouse.title"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="newHouse.description"></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="newHouse.address"></el-input>
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
        <el-form-item label="Lng">
          <el-input v-model="newHouse.loc.lng"></el-input>
        </el-form-item>
        <el-form-item label="Lat">
          <el-input v-model="newHouse.loc.lat"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="postHouse()">Submit</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>

    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    postHouse() {
      this.$store.dispatch('postHouse')
    }
  },
  computed: {
    newHouse() {
      return this.$store.getters.newHouse
    }
  }
}
</script>

<style lang="css">
</style>
