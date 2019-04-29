<template>
  <div>
    <b-form>
      <div>
        <p class="h5">Aeg</p>
        <hr class="my-2">
        <div class="float-left w-50 p-2">
          <p class="h6">Algus</p>
          <b-form-group
            label="Kuupäev:"
            label-for="start-date"
            label-cols-sm="4"
            label-cols-lg="3"
            description="Alguse kuupäev"
          >
            <b-form-input required id="start-date" type="date"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Kellaaeg:"
            label-for="start-time"
            label-cols-sm="4"
            label-cols-lg="3"
            description="Alguse kellaaeg"
          >
            <b-form-input required id="start-time" type="time"></b-form-input>
          </b-form-group>
        </div>
        <div class="float-right w-50 p-2">
          <p class="h6">Lõpp</p>
          <b-form-group
            label="Kuupäev:"
            label-for="end-date"
            label-cols-sm="4"
            label-cols-lg="3"
            description="Lõpu kuupäev"
          >
            <b-form-input required id="end-date" type="date"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Kellaaeg:"
            label-for="end-time"
            label-cols-sm="4"
            label-cols-lg="3"
            description="Lõpu kellaaeg"
          >
            <b-form-input required id="end-time" type="time"></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div>
        <p class="h5">Koht</p>
        <hr class="my-2">
        <div>
          <b-form-group label="Maakond:" label-for="county" label-cols-sm="4" label-cols-lg="3">
            <b-form-input required id="county"></b-form-input>
          </b-form-group>
          <b-form-group label="Linn / asula:" label-for="city" label-cols-sm="4" label-cols-lg="3">
            <b-form-input required id="city"></b-form-input>
          </b-form-group>
          <b-form-group label="Tänav:" label-for="street" label-cols-sm="4" label-cols-lg="3">
            <b-form-input required id="street"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Maja number:"
            label-for="house-number"
            label-cols-sm="4"
            label-cols-lg="3"
          >
            <b-form-input required id="house-number" type="number"></b-form-input>
          </b-form-group>
        </div>
      </div>
      <div>
        <p class="h5">Lisainfo</p>
        <hr class="my-2">
        <b-form-group
          label="Keda on vaja hoida?"
          label-for="select"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-select v-model="selected" id="select" :options="options" required></b-form-select>
        </b-form-group>
        <b-form-group
          v-if="selected == 'child' || selected == 'both'"
          label="Laste arv"
          label-for="child-count"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-input id="child-count" type="number"></b-form-input>
        </b-form-group>
        <b-form-group
          v-if="selected == 'pet' || selected == 'both'"
          label="Loomade arv"
          label-for="pet-count"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-input required id="pet-count" type="number"></b-form-input>
        </b-form-group>
        <b-form-group
          v-if="selected == 'pet' || selected == 'both'"
          label="Loomade liik"
          label-for="pet-type"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-select required v-model="petSelected" id="pet-type" :options="petTypes"></b-form-select>
        </b-form-group>
        <b-form-group label="Lisamärkused" label-for="additional-info">
          <b-form-textarea
            id="additional-info"
            placeholder="Kui tunned, et on vaja midagi lisada, siis kirjuta see siia..."
            rows="3"
            no-resize
          ></b-form-textarea>
        </b-form-group>
      </div>
      <div>
        <p class="h5">Maksmine</p>
        <hr class="my-2">
        <b-form-checkbox
          required
          class="mb-2"
          id="agreement"
          v-model="status"
          name="terms-and-conditions-agreement"
          value="accepted"
          unchecked-value="not_accepted"
        >Olen läbi lugenud ja nõustun Lapsehoidja.ee tingimustega</b-form-checkbox>
        <b-form-group
          label="Millisest pangast soovite ülekannet teha?"
          label-for="bank-radio"
          label-cols-sm="4"
          label-cols-lg="3"
        >
          <b-form-radio-group
            id="bank-radio"
            v-model="bankSelected"
            :options="bankOptions"
            buttons
            button-variant="outline-primary"
            size="lg"
            name="radio-btn-outline"
            class="pt-2 pl-4"
            required
          ></b-form-radio-group>
        </b-form-group>
        <b-button block variant="primary">Maksma</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "BookingForm",
  data: function() {
    return {
      status: "not_accepted",
      selected: null,
      petSelected: null,
      bankSelected: null,
      options: [
        { value: null, text: "Palun vali keda on vaja hoida" },
        { value: "child", text: "Laps" },
        { value: "pet", text: "Loom" },
        { value: "both", text: "Laps ja loom" }
      ],
      petTypes: [
        { value: null, text: "Palun vali looma liik" },
        { value: "dog", text: "Koer" },
        { value: "cat", text: "Kass" }
      ],
      bankOptions: [
        { value: "swedbank", text: "SwedBank" },
        { value: "lhv", text: "LHV" },
        { valuse: "seb", text: "SEB" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>


