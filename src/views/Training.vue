<script setup>
import Layout from "@/components/Layout.vue";
import List from "@/components/List.vue";
 
//Array de objetos - La clave de un objeto debe ser unico [objet, object] {{claveUnico: valor}, ClaveUnico:valor}
const TRAINING = [
  {
    type: "Educación Formal",
    concepts: [
      {
        subtitle: "Educación Superior Universitaria ",
        places: [
          "Ingeniera en Sistemas, egresada de la Universidad Dr. José Gregorio Hernández, ubicada en Maracaibo, Estado Zulia. Venezuela (2021-2025).",
        ],
      },
      {
        subtitle: " Educación Secundaria ",
        places: [
          "Bachiller en Ciencias, Liceo U.E.N Luis Urdaneta, ubicado en San Francisco, Zulia. Venezuela (2016-2020).",
          "E.B.N 'Gral. Rafael Urdaneta Fe y Alegría, de Manzanillo' (2015-2016).",
        ],
      },
      {
        subtitle: "Educación Primaria",
        places: [
          "Titulo de Sexto Grado en la Escuela Nacional “Josefina de Acosta”, ubicada en San Francisco, Estado Zulia (2011-2015).",
        ],
      },
    ],
  },
  {
    type: "Cursos",
    concepts: [
      {
        subtitle: "Contable",
        places: [
          "Asistente Contable. En la Fundación Renovando Esperanzas, San Francisco, Estado Zulia, 2025 (Presente).",
        ],
      },
      {
        subtitle: " Desarollo Web",
        places: [
          "Programación Python, Nivel Básico. En la Universidad Dr. José Gregorio Hernández, Maracaibo, Estado Zulia, 2023 (16 horas).",
          "Base de Datos con MySQL. En la Universidad Dr. José Gregorio Hernández, Maracaibo, 2023 (16 horas).",
        ],
      },
      {
        subtitle: "Soporte tecnico a nivel de Hardware y Software",
        places: [
          "Ensamblaje y Mantenimiento de Computadoras. En la Universidad Dr. José Gregorio Hernández, Maracaibo, 2023 (16 horas).",
          "Reparación de Hardware y Software de Computadoras. En la Centro Educativo Integral 'Tamanaco', 2019 (10 semanas).",
        ],
      },
    ],
  },
];
</script>
<template>
  <Layout>
    <div class="content m-1">
      <h1 class="content__title m-1">Educación:</h1>
      <List :data="TRAINING" type="Multiple list within multiple list"></List>
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
