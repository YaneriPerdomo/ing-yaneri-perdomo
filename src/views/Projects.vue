<script setup>
import Aside from "@/components/Aside.vue";
import Card from "@/components/Card.vue";
import Layout from "@/components/Layout.vue";

import List from "@/components/List.vue";
const PROJECTS = [
  {
    title: "Aplicacion web para el control de ventas e inventarios",
    technologiesUsed: [
      "HTML5",
      "CSS",
      "JavaScript(ES6)",
      "Bootstrap",
      "Laravel",
      "MySQL",
      "AJAX",
    ],
    img: "/img/StockYp/welcome.PNG",
    url: "proyectos/stock-yp",
  },
  /**{
    title: "Aplicación web para consultar el valor del dólar en Venezuela en tiempo real",
    technologiesUsed: ["HTML5", "JavaScript(ES6)", "CSS", "Bootstrap", "Laravel", "AJAX"],
    img: "/img/tasa-del-dia/main.PNG",
    url: "proyectos/tasa-del-dia",
  } */
  {
    title: " Aplicacion web para la gestion de finanzas personales",
    technologiesUsed: [
      "HTML5",
      "CSS",
      "JavaScript(ES6)",
      "Bootstrap",
      "PHP",
      "MySQL",
      "MVC",
      "AJAX",
    ],
    img: "/img/calidad-financiera/admin.PNG",
    url: "proyectos/calidad-financiera",
  },
  {
    title: " Aplicación web para sesiones de logopedia personalizadas para dislalia ",
    technologiesUsed: [
      "HTML5",
      "CSS",
      "JavaScript(ES6)",
      "Bootstrap",
      "PHP",
      "MySQL",
      "AJAX",
    ],
    img: "./img/sonidos-del-habla/index.JPG",
    url: "proyectos/sonidos-del-habla",
  },
  {
    title: " Aplicación web para niños de primaria con discalculia ",
    technologiesUsed: [
      "HTML5",
      "CSS",
      "JavaScript(ES6)",
      "Bootstrap",
      "PHP",
      "MySQL",
      "AJAX",
    ],
    img: "./img/space-n/read.JPG",
    url: "proyectos/espacio-n",
  },
  {
    title:
      " Aplicación web para el aprendizaje de la lectoescritura en niños de primaria con dislexia",
    technologiesUsed: ["HTML5", "CSS", "JavaScript(ES6)", "Bootstrap", "PHP", "MySQL"],
    img: "./img/tu-puedes/create-account.JPG",
    url: "proyectos/tu-puedes",
  },
  {
    title: " Asistente Virtual para la Universidad Dr. José Gregorio Hernández ",
    img: "img/chat-bot/chat-bot02.JPG",
    technologiesUsed: ["HTML5", "CSS", "JavaScript(ES6)", "Bootstrap", "PHP", "MySQL"],
    url: "proyectos/gregorin",
  },
];
</script>
<template>
  <Layout>
    <div class="content m-1">
      <h1 class="content__title m-1">Proyectos</h1>
      <p class="content__description">
        A continuación, se presenta una selección de proyectos que ilustran mi evolución
        como desarrolladora web. Inicialmente, mi enfoque se centró en el desarrollo de la
        <strong>interfaz de usuario (front-end)</strong>, perfeccionando mis habilidades
        en la creación de experiencias visuales atractivas. Posteriormente, amplié mis
        conocimientos al desarrollo del <strong>lado del servidor (back-end)</strong>, lo
        que me permitió crear aplicaciones web completas y funcionales.
      </p>
      <Card :data="PROJECTS"></Card>
    </div>
  </Layout>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

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

main {
  height: auto !important;
}
</style>
