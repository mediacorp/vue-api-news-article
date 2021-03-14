<template>
  <div class="container read-next-container">
    <h2 class="read-next-title">Read Next</h2>
    <div class="read-next" v-for="(content, index) in contents" :key="index">
      <div
        class="read-next-listing row"
        v-for="(readnext, index) in content.next_ids_details"
        :key="index"
      >
        <div class="read-next-listing-details col-md-8">
          <h4>{{ readnext.title }}</h4>
          <p>{{ readnext.abstract }}</p>
          <div class="read-next-cta">
            <div class="read-next-author">
              <div
                v-for="(readnextauthor, index) in readnext.author"
                :key="index"
              >
                <i>By&nbsp;</i>
                <span class="read-next-author-name">{{
                  readnextauthor.name
                }}</span>
              </div>
            </div>
            <a :href="readnext.node_url" class="read-next-cta-btn"
              ><span>Read full story</span>
              <font-awesome-icon icon="chevron-right"
            /></a>
          </div>
        </div>
        <div class="read-next-listing-image col-md-4">
          <img :src="readnext.node_image" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "read-next",
  props: ["contents"],
  components: {
    FontAwesomeIcon,
  },
};
</script>