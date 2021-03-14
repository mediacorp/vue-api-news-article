<template>
  <div class="container">
    <div class="main-article" v-for="(content, index) in contents" :key="index">
      <div class="main-article-headline">
        <h1 class="main-article-headline-title">{{ content.title }}</h1>
      </div>
      <div class="main-article-details">
        <div
          class="main-article-byline"
          v-for="(author, index) in content.author"
          :key="index"
        >
          <span class="today-author">
            <div
              class="today-author-image"
              :style="{ backgroundImage: 'url(' + author.author_image + ')' }"
            ></div>
            <span class="today-author-by">By&nbsp;</span>
            <span class="today-author-name">
              <a :href="author.author_path">{{ author.name }}</a>
            </span>
          </span>
        </div>
        <div class="main-article-dates">
          <div class="today-published-date">
            <i>Published </i>
            <span>{{ content.publication_date.value | formatDate }}</span>
          </div>
          <div class="today-published-date">
            <i>Updated </i>
            <span>{{ content.updated_date.value | formatDate }}</span>
          </div>
        </div>
      </div>
      <div class="main-article-hero">
        <div
          class="today-hero-photo-container"
          v-for="(herocontents, index) in content.hero.obj"
          :key="index"
        >
          <figure class="today-hero-photo-figure">
            <div class="today-hero-photo-wrapper">
              <img
                :src="herocontents.sizes.optimised"
                class="today-hero-photo img-fluid"
              />
              <figcaption class="photo-author">
                {{ herocontents.author }}
              </figcaption>
            </div>
          </figure>
          <div class="today-hero-photo-desc">
            <figcaption class="photo-desc">{{ herocontents.desc }}</figcaption>
          </div>
        </div>
      </div>

      <div class="main-article-body">
        <div class="main-article-content" v-html="content.body">
          {{ content.body }}
        </div>

        <div class="read-also-container">
          <div
            class="read-also"
            v-for="(related, index) in content.related"
            :key="index"
          >
            <div class="read-also-label">Read Also</div>
            <a :href="related.url">{{ related.title }}</a>
          </div>
        </div>
      </div>

      <div class="main-article-tags">
        <div class="tags-title">Topics</div>
        <div
          class="tags-list"
          v-for="(tag, index) in content.tags"
          :key="index"
        >
          <a
            :href="'https://www.todayonline.com/' + tag.slug"
            class="tags-label"
            >{{ tag.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-article",
  props: ["contents"],
};
</script>