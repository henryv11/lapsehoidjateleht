<template>
  <div class="sidebar shadow bg-white border p-2 mb-2">
    <div class="mb-2">
      <p class="lead m-0 mb-2 text-secondary border-bottom">Otsi</p>
      <input class="form-control" type="text" aria-label="Search">
    </div>
    <div class>
      <p class="lead mb-2 text-secondary border-bottom">Järjesta</p>
      <FeedControls/>
    </div>
    <div>
      <p class="lead text-secondary m-0 border-bottom">Filtreeri</p>
      <ul class="list-unstyled m-0">
        <li class="nav-item" v-for="(option, index) in options" :key="index">
          <div>
            <b-button
              v-b-toggle="option.name"
              block
              variant="link"
              class="toggle-button text-primary p-1 mt-2 mb-2"
              v-on:click="option.collapsed = !option.collapsed"
            >
              <p class="h6 float-left mb-0">{{option.name}}</p>
              <font-awesome-icon
                v-if="option.collapsed"
                icon="angle-down"
                class="float-right mt-1"
              />
              <font-awesome-icon v-else icon="angle-up" class="float-right mt-1"/>
            </b-button>
          </div>
          <b-collapse class="p-0" :id="option.name">
            <b-card class="border-0" body-class="p-2">
              <b-form-group class="m-0 text-secondary">
                <b-form-checkbox
                  v-for="value in option.values"
                  :key="value"
                  :value="value"
                  :name="option.name"
                >{{value}}</b-form-checkbox>
              </b-form-group>
            </b-card>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FeedControls from "@/components/FeedControls.vue";
export default {
  name: "BrowseSidebar",
  components: {
    FeedControls
  },
  data: function() {
    return {
      options: [
        {
          name: "Sugu",
          values: ["Mees", "Naine"],
          collapsed: true
        },
        {
          name: "Vanus",
          values: [
            "18-23",
            "24-29",
            "30-35",
            "36-41",
            "42-47",
            "48-53",
            "54-59",
            "60+"
          ],
          collapsed: true
        },
        {
          name: "Hinnang",
          values: ["1/5", "2/5", "3/5", "4/5", "5/5"],
          collapsed: true
        },
        {
          name: "Maakond",
          values: [
            "Harju maakond",
            "Tartu maakond",
            "Ida-Viru maakond",
            "Pärnu maakond",
            "L22ne-Viru maakond",
            "Viljandi maakond",
            "V6ru maakond",
            "Saare maakond",
            "J6geva maakond",
            "J2rva maakond",
            "Valga maakond",
            "P6lva maakond",
            "L22ne maakond",
            "Hiiu maakond"
          ],
          collapsed: true
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
</style>