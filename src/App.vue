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
  data() {
    return {
      audioElement: null,
    };
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Raleway:wght@700&display=swap");

// colors
$primary: #e2362a;
$secondary: #ed8936;
$body-bg: #ffffff;
$grey-bg: #f6f6f6;
$off-white: rgb(224, 224, 224);
$text-body: #212529;
$text-grey: grey;
$body-color: $text-body;
$border-radius: 8px;
$footer-bg: #2d2c2c;

// Breakpoints:
$screen-smallest-mobile: 320px;
$screen-small-mobile: 374px;
$screen-small-iphone: 375px;
$screen-xs: 480px;
$screen-sm-landscape: 576px;
$screen-sm: 767px;
$screen-md: 992px;
$screen-tablet-landscape: 1024px;
$screen-lg: 1200px;
$screen-design: 1440px;
$screen-2000: 2560px;

//overrides
$font-family-primary: "Montserrat", -apple-system, BlinkMacSystemFont,
  "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";

// fonts
$headings-font-family: $font-family-primary;
$font-heading: "Raleway", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol";

@import "node_modules/bootstrap/scss/bootstrap";

html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 375px;

  @media only screen and (max-width: $screen-sm) {
    margin-bottom: 600px;
  }
}

// fonts

p,
span,
figcaption {
  font-family: $font-family-primary;
}

// Menu Header

.menu-items-container {
  position: fixed;
  width: 100%;
  background-color: $white;
  z-index: 99;

  .menu-items {
    padding-top: 30px;

    .menu-logo {
      max-width: 186px;
    }

    .menu-today-date {
      text-align: right;
      font-size: 14px;
      font-weight: 500;
    }
  }
}

// Main Article

.main-article {
  padding-top: 145px;

  .main-article-headline {
    border-bottom: 1px solid $off-white;

    &-title {
      font-family: $font-heading;
      font-weight: 700;
      font-size: 36px;
      width: 90%;
      margin-bottom: 15px;
    }
  }

  // main article details - after title
  .main-article-details {
    padding-top: 15px;
    padding-bottom: 15px;

    .main-article-byline {
      display: inline-block;
      .today-author {
        display: flex;
        align-items: center;
        font-size: 15px;

        .today-author-image {
          display: inline-block;
          background-size: cover;
          background-position: 50%;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          margin-right: 10px;
        }
      }

      .today-author-by {
        margin-right: 5px;
        font-style: italic;
        font-weight: 400;
      }

      .today-author-name {
        a {
          color: $text-body;
          font-weight: 700;
          text-transform: uppercase;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    .main-article-dates {
      float: right;
      text-align: right;
      font-size: 14px;
    }
  }

  .main-article-hero {
    .today-hero-photo-figure {
      margin-bottom: 5px;

      .today-hero-photo-wrapper {
        position: relative;

        .photo-author {
          background-color: rgba(0, 0, 0, 0.5);
          color: rgb(245, 245, 245);
          padding: 5px;
          font-size: 14px;
          font-weight: 400;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    .today-hero-photo-desc {
      .photo-desc {
        color: $text-grey;
        font-size: 14px;
        font-weight: 400;
      }
    }

    .today-hero-photo {
      width: 100%;
    }
  }

  .main-article-body {
    display: flex;
    @media only screen and (max-width: $screen-md) {
      display: block;
    }

    .main-article-content {
      margin-top: 50px;
    }

    .read-also-container {
      margin-top: 200px;

      @media only screen and (max-width: $screen-md) {
        margin-top: 10px;
      }

      .read-also {
        background-color: $grey-bg;
        margin-left: 20px;
        margin-bottom: 200px;
        padding: 12px;
        color: $primary;

        @media only screen and (max-width: $screen-md) {
          margin-left: 0;
          margin-bottom: 25px;
        }

        .read-also-label {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 700;
        }

        a {
          font-size: 16px;
          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }

  .main-article-tags {
    margin-top: 25px;
    margin-bottom: 50px;
    text-transform: uppercase;

    .tags-title {
      font-weight: 600;
      margin-bottom: 7.5px;
    }

    .tags-list {
      display: inline;

      &::after {
        content: "|";
        margin-left: 10px;
        margin-right: 10px;
      }

      &:last-child {
        &::after {
          content: "";
        }
      }

      .tags-label {
        color: $secondary;
      }
    }
  }
}

// Read Next

.read-next-container {
  .read-next-title {
    font-family: $font-heading;
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 1.4px;
    color: $text-body;
    margin-bottom: 50px;
  }

  .read-next-listing {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 25px;

    .read-next-listing-details {
      padding: 0 15px 0 0;
      position: relative;
      border-bottom: 1px solid $off-white;

      @media only screen and (max-width: $screen-md) {
        order: 1;
      }

      .read-next-cta {
        display: flex;
        position: absolute;
        bottom: 0;
        margin-bottom: 20px;
        width: 100%;
        justify-content: space-between;

        @media only screen and (max-width: $screen-md) {
          position: relative;
        }

        .read-next-cta-btn {
          border: 1px solid $text-body;
          padding: 12px 12.5px;
          margin-right: 15px;
          color: $text-body;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;

          &:hover {
            text-decoration: none;
            background-color: $text-body;
            color: $white;
          }

          span {
            margin-right: 10px;
          }
        }
      }
    }

    .read-next-listing-image {
      padding: 0;
      border-bottom: 1px solid $off-white;
      padding-bottom: 25px;

      @media only screen and (max-width: $screen-md) {
        border: 0;
      }
    }
  }
}

// Footer

.today-footer {
  background: $footer-bg;
  color: $body-bg;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 375px;
  padding-top: 30px;
  //line-height: 60px;

  @media only screen and (max-width: $screen-sm) {
    height: 600px;
  }

  .today-footer-heading {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .today-footer-section {
    .today-footer-section-listing {
      padding-bottom: 10px;

      ul {
        padding-left: 0;
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;

        li {
          list-style: none;

          a {
            color: $white;

            &:hover {
              text-decoration: none;
              color: $primary;
            }

            &.active {
              color: $primary;
            }
          }
        }
      }
    }
  }

  .today-footer-copy {
    @media only screen and (max-width: $screen-sm) {
      display: none;
    }

    hr {
      border-top: 1px solid $off-white;
      margin-bottom: 30px;
    }

    .today-footer-copy-text {
      float: right;
      font-size: 11px;
      font-weight: 600;
      margin-top: 5px;
    }
  }

  .today-footer-social {
    a {
      color: $white;

      svg {
        font-size: 24px;
        margin-right: 15px;
      }
    }
  }

  .today-footer-download {
    padding-top: 40px;

    .today-footer-download-badge {
      width: 138px;
      height: 40px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }

  .today-footer-copy-mobile {
    display: none;

    @media only screen and (max-width: $screen-sm) {
      display: block;
    }

    hr {
      border-top: 1px solid $off-white;
      margin-bottom: 30px;
    }

    .today-footer-copy-text {
      font-size: 11px;
      font-weight: 600;
      margin-top: 5px;
    }
  }
}

// Utility Panel
.utility-panel {
  position: fixed;
  bottom: 50px;
  right: 0;

  .panelbtn {
    padding: 5px 9.5px;
    background-color: rgb(224, 224, 224, 0.8);
    margin-bottom: 1px;
    cursor: pointer;

    &:hover {
      background-color: $text-body;
      color: $white;
    }
  }
}
</style>
