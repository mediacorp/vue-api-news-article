<template>
  <div class="utility-panel">
    <div class="panelbtn panelbtn-back-to-top" @click="$emit('scrollToTop')">
      <font-awesome-icon icon="arrow-up" />
    </div>
    <div class="panelbtn panelbtn-share" @click="$emit('copyToClipboard')">
      <font-awesome-icon icon="share-alt" />
    </div>
    <div class="panelbtn panelbtn-zoom" @click="$emit('zoomIn')">
      <font-awesome-icon icon="font" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "utility-panel",
  components: {
    FontAwesomeIcon,
  },
};
</script>