<template>
  <div id="app">
    <menu-header />
    <main-article :contents="contents" />
    <read-next :contents="contents" />
    <today-footer :contents="contents" />
    <utility-panel
      @scrollToTop="scrollToTop"
      @copyToClipboard="copyToClipboard"
      @zoomIn="zoomIn"
    />
  </div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader";
import MainArticle from "@/components/MainArticle";
import ReadNext from "@/components/ReadNext";
import TodayFooter from "@/components/TodayFooter";
import UtilityPanel from "@/components/UtilityPanel";
import { mapState } from "vuex";

export default {
  name: "App",
  title() {
    return `Today Online`;
  },
  computed: {
    ...mapState(["contents"]),
  },
  methods: {
    scrollToTop: function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    copyToClipboard: function () {
      var currentUrl = document.createElement("input"),
        text = window.location.href;
      document.body.appendChild(currentUrl);
      currentUrl.value = text;
      currentUrl.select();
      document.execCommand("copy");
      document.body.removeChild(currentUrl);
    },
    zoomIn: function () {
      document.body.style.zoom = "150%";
    },
  },
  created() {
    this.$store.dispatch("fetchContents");
  },
  components: {
    MenuHeader,
    MainArticle,
    ReadNext,
    TodayFooter,
    UtilityPanel,
  },
};
</script>

<style lang="scss">
// Import Google Fonts
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Raleway:wght@700&display=swap");

// Import variables to override bootstrap styles
@import "./scss/base/_variables.scss";

// Import Bootstrap
@import "node_modules/bootstrap/scss/bootstrap";

// Import Base Files SCSS
@import "./scss/base/_reset.scss";
@import "./scss/base/_fonts.scss";

// Import Components Files SCSS
@import "./scss/components/_menu-header.scss";
@import "./scss/components/_main-article.scss";
@import "./scss/components/_read-next.scss";
@import "./scss/components/_footer.scss";
@import "./scss/components/_utility-panel.scss";
</style>
