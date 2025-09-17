<script setup>
import List from "@/components/List.vue";
const WORK_EXPERIENCE = {
  firstPlace: {
    title: "Desarrolladora Web Independiente (2025 - 2025) ",
    functions: [
      " Desarrollo e implementación de un sistema web para el control de ventas e inventarios para un negocio de auto partes. ",
      " Diseño y desarrollo de un sistema web para la gestión de finanzas personales. ",
      " Diseño y desarrollo de un sistema web para mejorar la lectoescritura en niños de primaria con dislexia (Proyecto de Tesis). ",
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
    function: [
      " Diseño y planificación de un sistema web para optimizar los procesos de archivo departamental. ",
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
  <main class="h-100 shadow">
    <article>
      <nav>
        <ul>
          <li>Acerca de mí</li>
          <li>Proyectos</li>
          <li>Experiencia laboral</li>
          <li>Formación</li>
          <li>Tecnologías</li>
        </ul>
      </nav>
    </article>
    <article></article>
  </main>
  <List :saludar="WORK_EXPERIENCE"></List>
</template>
<style scoped></style>
