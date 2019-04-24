<template>
  <div class="sidebar make-me-sticky shadow-sm bg-white mb-2">
    <div class="search shadow-sm p-2">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search">
    </div>
    <div class="options p-2">
      <ul class="list-unstyled m-0">
        <li class="nav-item" v-for="(option, index) in options" :key="index">
          <b-button
            v-b-toggle="option.name"
            block
            variant="link"
            class="toggle-button text-dark"
            v-on:click="option.collapsed = !option.collapsed"
          >
            <p class="h6 float-left">{{option.name}}</p>
            <font-awesome-icon v-if="option.collapsed" icon="angle-down" class="float-right mt-1"/>
            <font-awesome-icon v-else icon="angle-up" class="float-right mt-1"/>
          </b-button>
          <b-collapse :id="option.name">
            <b-card>
              <b-form-group>
                <b-form-checkbox
                v-for="value in option.values"
                :key="value"
                :value="value"
                :name="option.name"
                >
                {{value}}
                </b-form-checkbox>
              </b-form-group>
            </b-card>
          </b-collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseSidebar",
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
.options {
  text-align: left;
  overflow-y: auto;
  max-height: 85vh;
}

.make-me-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 5rem;
}

.card {
  border: none;
}

.card-body {
  padding: 0;
  padding-left: 1rem;
}
</style>