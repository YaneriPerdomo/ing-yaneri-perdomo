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
        Ingeniera de sistemas | Desarrollora Full Stack Jr en Software
      </h2>
      <p class="content__description m-0">
        Mi perfil profesional se enfoca en el desarrollo de
        <strong>Aplicaciones Web Completas (Full-Stack)</strong>. Poseo un sólido dominio
        de tecnologías front-end como <strong>HTML5</strong>, <strong>CSS</strong>,
        <strong>Bootstrap</strong>, y <strong>JavaScript(ES6)</strong>. En el back-end, mi
        experiencia se centra en la construcción de sistemas robustos y escalables con
        <strong>PHP</strong>, el framework <strong>Laravel</strong> y bases de datos
        relacionales como <strong>MySQL</strong>. Actualmente, estoy fortaleciendo mis
        habilidades con <strong>Vue.js 3</strong> para diseñar interfaces de usuario
        dinámicas y modernas. Complemento mis conocimientos con experiencia en
        <strong>soporte técnico de software y hardware</strong>, lo que me permite ofrecer
        soluciones integrales.
      </p>
      <section class="content__section content__section--contact m-1">
        <h3 class="content__span">Información</h3>
        <ul class="content__section-list content__section-list--icons">
          <li class="content__section-list-item">
            <i class="bi bi-geo-alt-fill"></i> Zulia, Venezuela
          </li>
          <li class="content__section-list-item">
            <i class="bi bi-envelope-fill"></i> perdomopaolabarrios@gmail.com
          </li>
          <li class="content__section-list-item">
            <i class="bi bi-calendar-date-fill"></i> 05/11/2003
          </li>
          <li class="content__section-list-item">
            <i class="bi bi-telephone-fill"></i> 58+ 0412-473-9997
          </li>
        </ul>
      </section>
      <br />
      <div class="content__button">
        <a href="../public/Yaneri_Perdomo_Ingeniera_de_Sistemas.PDF" download=""
          ><button class="button__black">DESCARGAR CV</button>
        </a>
      </div>
   
      <small class="content__note">
        👩‍💻 Este portafolio fue creado con <span>Vue.js 3</span> 💚
      </small>
      <List :saludar="array"></List>
    </div>
  </Layout>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.content__note{
    text-decoration: underline;
  color: var(--color-azul-claro);
}

.content__note > span{
  color: var(--color-verde);
  font-weight: bold;
  filter: drop-shadow(1px 0px 0px rgb(47,47,47) );
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
