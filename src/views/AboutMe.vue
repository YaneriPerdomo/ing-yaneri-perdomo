<script setup>
import Aside from "@/components/Aside.vue";
import Layout from "@/components/Layout.vue";

import List from "@/components/List.vue";
const array = {
  name: "yaneri",
};
</script>
<template>
  <Layout>
    <div class="content m-1">
      <h1 class="content__title m-1">Yaneri Perdomo Paola Barrios</h1>
      <h2 class="content__subtitle m-1">
        Ingeniera de Sistemas & Desarrolladora Full-Stack
      </h2>
      <p class="content__description m-0">
          <p class="profile__description">
              Perfil profesional enfocado en el desarrollo de <strong>Aplicaciones Web Completas (Full-Stack)</strong>. 
              Poseo un sólido dominio de tecnologías front-end como <strong>HTML5, CSS (BEM), Bootstrap</strong> y 
              <strong>JavaScript (ES6)</strong>. En el back-end, mi experiencia se centra en la construcción de sistemas 
              robustos y escalables bajo arquitectura <strong>MVC</strong>, utilizando <strong>PHP</strong>, el framework 
              <strong>Laravel</strong> y <strong>REST APIs</strong>.
          </p>
          <p class="profile__description">
              Mi enfoque es integral: desde la planificación y el diseño de interfaces dinámicas, actualmente 
              fortaleciendo habilidades en <strong>Vue.js 3</strong>, hasta el soporte técnico de hardware/software 
              y el deploy final. Experiencia gestionando proyectos independientes con organización de tareas, 
              control de versiones en <strong>GitHub</strong> y adaptabilidad a cambios semanales.
          </p> 
      </p>
      <section class="content__section content__section--contact m-1">
        <h3 class="content__span">Información</h3>
        <ul class="content__section-list content__section-list--icons">
          <li class="content__section-list-item">
            <i class="bi bi-geo-alt-fill"></i> Municipio San Francisco (Zulia), Venezuela
          </li>
          <li class="content__section-list-item">
            <i class="bi bi-envelope-fill"></i> perdomopaolabarrios@gmail.com
          </li>
          <li class="content__section-list-item">
            <i class="bi bi-calendar-date-fill"></i> 05/11/2003
          </li>
          <li class="content__section-list-item">
            <i class="bi bi-telephone-fill"></i> 58+ 412-473-9997
          </li>
        </ul>
      </section>
      <br />
      <div class="content__button">
        <a href="/CV_Yaneri_Perdomo_Ingeniera_de_Sistemas_2026_.pdf" download=""
          ><button class="button__black">DESCARGAR CV</button>
        </a>
      </div>
      <br />
      <small class="content__note">
        👩‍💻 Este Portafolio Web fue creado con <span>Vue.js 3</span> 💚
      </small>
      <List :saludar="array"></List>
      <br />
      <br />
    </div>
  </Layout>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.content__note {
  text-decoration: underline;
  color: var(--color-azul-claro);
}

.content__note > span {
  color: var(--color-verde);
  font-weight: bold;
  filter: drop-shadow(1px 0px 0px rgb(47, 47, 47));
}

p {
  margin-top: 0.5rem;
}

h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

h2 {
  margin-top: 0.5rem;
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
