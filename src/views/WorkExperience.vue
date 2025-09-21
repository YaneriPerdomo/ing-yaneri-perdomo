<script setup>
import Layout from "@/components/Layout.vue";
import List from "@/components/List.vue";
const WORK_EXPERIENCE = {
  firstPlace: {
    title: "Desarrolladora Web Independiente (2025 - 2025) ",
    functions: [
      " Desarrollo e implementación de un Sistema Web para el control de ventas e inventarios para un negocio de auto partes. ",
      " Diseño y desarrollo de un Sistema Web para la gestión de finanzas personales. ",
      " Diseño y desarrollo de un Sistema Web para mejorar la lectoescritura en niños de primaria con dislexia (Proyecto de Tesis). ",
      " Responsabilidad por todo el ciclo del proyecto, desde la concepción hasta la implementación. ",
    ],
  },
  secondPlace: {
    title: " Pasantías en la Universidad Dr. José Gregorio Hernández (2024 - 2024) ",
    functions: [
      " Recopilación de datos de inventario de equipos informáticos como computadoras y periféricos. ",
      " Soporte técnico informático a nivel de software (formateo de sistema operativo Windows, configuración básica de BIOS, instalación de programas). ",
    ],
  },
  thirdPlace: {
    title: " Pasantías en el Concejo Municipal de Maracaibo (2024 - 2024) ",
    functions: [
      " Diseño y planificación de un Sistema Web para optimizar los procesos de archivo departamental. ",
      " Configuración inicial del módem router. ",
      " Instalación de conectores RJ45 y jack para puntos de red. ",
    ],
  },
  fourthPlace: {
    title: " Restaurante Don Pescadon (2023 - Presente)",
    functions: ["Atención al cliente.", "Desempeño en el área de cobranzas."],
  },
};
</script>
<template>
  <Layout>
    <div class="content m-1">
      <h1 class="content__title m-1">Experiencia Laboral</h1>
      <section class="content__section content__section--formal-education">
        <List :data="WORK_EXPERIENCE" type="Multiple List"></List>
      </section>
      <br />
      <br />
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

.text-white {
  color: white;
  text-decoration: none !important;
}

h1,
h2 {
  margin: 0.5rem;
}

ul {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
