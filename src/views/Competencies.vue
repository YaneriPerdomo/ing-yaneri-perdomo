<script setup>
import Aside from "@/components/Aside.vue";
import Layout from "@/components/Layout.vue";
import List from "@/components/List.vue";

const SOFT_SKILLS = {
  firstData: {
    title: "Habilidades blandas",
    functions: [
      "Escucha Activa.",
      "Empatía",
      "Responsabilidad",
      "Puntualidad",
      "Análisis y reflexión.",
    ],
  },
};
</script>
<template>
  <Layout>
    <div class="content m-1">
      <h1 class="content__title m-1">Competencias</h1>

      <section class="content__section content__section--competence">
        <List :data="SOFT_SKILLS" type="Multiple List"></List>
        <h2 class="content__subtitle"><b>Habilidades tecnicas</b></h2>
        <ul class="content__section-list">
          <li class="content__section-list-item">
            <b>Front-end</b>
            <ul class="content__section-list">
              <li class="content__section-list-item">HTML5</li>
              <li class="content__section-list-item">CSS.</li>
              <li class="content__section-list-item">JavaScript(ES6).</li>
              <li class="content__section-list-item">
                <b>Framework</b>
                <ul class="content__section-list">
                  <li class="content__section-list-item">Vue.js 3</li>
                </ul>
              </li>
              <li class="content__section-list-item">
                <b>Biblioteca</b>
                <ul class="content__section-list">
                  <li class="content__section-list-item">Bootstrap</li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="content__section-list-item">
            <b>Back-end</b>
            <ul class="content__section-list">
              <li class="content__section-list-item">PHP</li>
              <li class="content__section-list-item">
                <b>Framework</b>
                <ul class="content__section-list">
                  <li class="content__section-list-item">Laravel</li>
                </ul>
              </li>
            </ul>
          </li>
           <li class="content__section-list-item">
              <b>Base de datos</b>
              <li class="content__section-list-item remove-circles-item-lists">
                <ul class="content__section-list">
                  <li class="content__section-list-item">MySql</li>
                </ul>
             </li>
            </li>
        </ul>
      </section>
       <br />
      <br />
    </div>
  </Layout>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.content{
   flex-grow: 1;
}

h2{
  margin-top: 0.5rem ;
  margin-bottom: 0.5rem;

}

.button__black {
  background: var(--color-black);
  border: solid 2px white;
  padding: 0.5rem 1rem;
  color: white !important;
  cursor: pointer;
}
.content__section-list-item {
  list-style: circle;
  color: var(--color-azul-claro);
}
.sidebar-item--selected {
  background: white;
  color: var(--color-azul-claro) !important;
  padding: 0.2rem;
}

.text-white {
  color: white;
  text-decoration: none !important;
}
</style>
