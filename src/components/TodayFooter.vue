<template>
  <div class="today-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="today-footer-section">
            <h4 class="today-footer-heading">Today</h4>
            <div class="today-footer-section-listing">
              <ul>
                <li><a href="#" class="active">Singapore</a></li>
                <li><a href="#">World</a></li>
                <li><a href="#">Big Read</a></li>
                <li><a href="#">Gen Y Speaks</a></li>
                <li><a href="#">Commentary</a></li>
                <li><a href="#">Voices</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Brand Spotlight</a></li>
                <li><a href="#">8 DAYS</a></li>
                <li><a href="#">Journalists</a></li>
              </ul>
            </div>
          </div>
          <div class="today-footer-copy">
            <hr />
            <img src="@/assets/logo-footer.png" class="today-footer-logo" />
            <p class="today-footer-copy-text">
              Copyright {{ new Date().getFullYear() }} © Mediacorp Pte Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="today-footer-social">
            <h4 class="today-footer-heading">Connect with us</h4>
            <a href="https://www.facebook.com/todayonline" target="_blank"
              ><font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'facebook' }"
            /></a>
            <a href="https://twitter.com/TODAYonline" target="_blank"
              ><font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'twitter' }"
            /></a>
            <a
              href="https://www.instagram.com/todayonline/?hl=en"
              target="_blank"
              ><font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'instagram' }"
            /></a>
            <a href="https://www.youtube.com/c/todayonline" target="_blank"
              ><font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'youtube' }"
            /></a>
            <a href="https://t.me/todayonlinesg" target="_blank"
              ><font-awesome-icon
                :icon="{ prefix: 'fab', iconName: 'telegram' }"
            /></a>
          </div>
          <div class="today-footer-download">
            <h4 class="today-footer-heading">Download our app</h4>
            <a
              href="https://play.google.com/store/apps/details?id=com.sg.mc.android.itoday&hl=en"
              target="_blank"
            >
              <img
                src="@/assets/google-badge.png"
                class="today-footer-download-badge img-fluid"
              />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C101665097?appId=C101665097&source=appshare&subsource=C101665097"
              target="_blank"
            >
              <img
                src="@/assets/huawei-badge.png"
                class="today-footer-download-badge img-fluid"
              />
            </a>
            <a
              href="https://itunes.apple.com/sg/app/itoday/id346158656?mt=8"
              target="_blank"
            >
              <img
                src="@/assets/appstore-badge.png"
                class="today-footer-download-badge img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="today-footer-copy-mobile">
        <hr />
        <img src="@/assets/logo-footer.png" class="today-footer-logo" />
        <p class="today-footer-copy-text">
          Copyright {{ new Date().getFullYear() }} &copy; Mediacorp Pte Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "today-footer",
  props: ["contents"],
  components: {
    FontAwesomeIcon,
  },
};
</script>