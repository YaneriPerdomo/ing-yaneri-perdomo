<script setup>
import { ref } from "vue";

const props = defineProps({
  projectData: Object,
  type: String,
});

let getThumbnailSrc = (folder, filename) => {
  // `getSrcImg` se cambió a `getThumbnailSrc`
  return "../img/" + folder + "/" + filename;
};

const selectMainImage = (event) => {
  // `prueba` se cambió a `selectMainImage`
  const thumbnailFilename = event.target.getAttribute("data-img");
  currentMainImage.value = getThumbnailSrc(
    props.projectData.media.file,
    thumbnailFilename
  );
};
let initialMainImageUrl = getThumbnailSrc(
  props.projectData.media.file,
  props.projectData.media.main
); // `mainUrl` se cambió a `initialMainImageUrl`
const currentMainImage = ref(initialMainImageUrl); // `projectSelected` se cambió a `currentMainImage`
</script>
<template>
  <div class="project">
    <div class="project__back">
      <div class="project__button-container">
        <button class="project__back-button">
          <i class="bi bi-arrow-left"></i>
          <router-link to="../proyectos">Regresar</router-link>
        </button>
      </div>
    </div>
    <i
      ><b class="project__type">Proyecto {{ props.projectData.meta.type_project }}</b></i
    >
    <h1 class="project__title">
      {{ props.projectData.title }}
    </h1>
    <section class="project__gallery row">
      <div class="project__thumbnails col-2">
        <template v-for="(img, index) in props.projectData.media.thumbnails">
          <img
            :src="getThumbnailSrc(props.projectData.media.file, img.src)"
            :data-img="img.src"
            :alt="img.alt"
            draggable="false"
            class="project__img img-fluid"
            @click="selectMainImage($event)"
          />
        </template>
      </div>
      <div class="project__main-image col-10">
        <img :src="currentMainImage" alt="" draggable="false" />
      </div>
    </section>
    <hr class="project__divider" />
    <section class="project__buttons">
      <button
        class="project__button project__button--github"
        v-if="props.projectData.meta.GitHub != null"
      >
        <a :href="props.projectData.meta.GitHub" target="_blank"> GitHub </a>
      </button>
      <button
        class="project__button project__button--video"
        v-if="props.projectData.meta.video != null"
      >
        <a :href="props.projectData.meta.video" target="_blank"> Video </a>
      </button>
    </section>
    <hr class="project__divider" />
    <section class="project__information">
      <h2 class="project__subpoint text-dark-blue">1. Objetivo del proyecto</h2>
      <ul class="project__list">
        <li class="project__list-item text-dark-blue">
          {{ props.projectData.content.objective }}
        </li>
      </ul>
      <h2 class="project__subpoint text-dark-blue">2. Resumen</h2>
      <ul class="project__list">
        <li class="project__list-item text-dark-blue">
          {{ props.projectData.content.scope_ }}
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
.project__thumbnails > img {
  width: 100px !important;
  cursor: pointer;
}

.project__divider {
  margin: 1rem 0;
  color: inherit;
  border-top-width: 0px;
  border-top-style: none;
  border-top-color: currentcolor;
  border-top: var(--bs-border-width) solid;
}
.project__title {
  padding: 0.7rem;
  background: var(--color-azul-claro);
  color: white;
}

.project__thumbnails {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.project__back-button {
  color: grey !important;
  background: none;
  border: none;
}

.project__back-button > a {
  text-decoration: none;
  color: grey !important;
}

.project__type {
  color: var(--color-azul-claro);
}

.project__gallery {
  display: flex;

  gap: 0.3rem;
  margin-top: 0.4rem;
}

.project__main-image > img {
  width: 100%;
}
.project__buttons > button {
  background: var(--color-black);
  border: solid 2px white;
  padding: 0.5rem 1rem;
  color: white !important;
}

.project__buttons {
  display: flex;
  justify-content: end;
}

.project__list-item {
  list-style: none;
}

.text-dark-blue {
  color: var(--color-azul-claro);
}

.project__button > a {
  color: white;
  text-decoration: none;
}
</style>
