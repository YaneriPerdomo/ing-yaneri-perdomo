<script setup>
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

// Mapa para asociar tecnologías con sus clases CSS y nombres de visualización
const techMap = {
  HTML5: { class: "tools__item--HTML5", name: "HTML5" },
  CSS: { class: "tools__item--CSS", name: "CSS" },
  "JavaScript(ES6)": { class: "tools__item--JS", name: "Javascript(ES6)" },
  Bootstrap: { class: "tools__item--BS", name: "Bootstrap" },
  Laravel: { class: "tools__item--LARAVEL", name: "Laravel" },
  AJAX: { class: "tools__item--OTHER", name: "AJAX" },
  MVC: { class: "tools__item--OTHER", name: "MVC" },
  MySQL: { class: "tools__item--MYSQL", name: "MySQL" },
  PHP: { class: "tools__item--PHP", name: "PHP" },
};

const getTechClass = (techName) => {
  const baseClass = "tools__item";
  const mappedClass = techMap[techName].class;
  return mappedClass ? `${baseClass} ${mappedClass}` : baseClass;
};

const getTechName = (techName) => {
  return techMap[techName].name || techName;
};
</script>

<template>
  <div class="content__card-group">
    <template v-for="data in props.data" :key="data.title">
      <div class="content__card">
        <figure>
          <img
            :src="data.img"
            alt=""
            class="content__card-img img-fluid"
            draggable="false"
          />
        </figure>
        <div class="card__content">
          <h2 class="content__card-title fs-3">
            {{ data.title }}
          </h2>
          <div class="card__technologies">
            <div class="tools">
              <template
                v-for="technologie in data.technologiesUsed"
                :key="technologie"
              >
                <span :class="getTechClass(technologie)">{{
                  getTechName(technologie)
                }}</span>
              </template>
            </div>
          </div>
          <div class="card__link">
            <router-link :to="data.url">Ver mas</router-link>
          </div>
        </div>
      </div>
    </template>  
  </div>
 
</template>

<style scoped>
/* Estilos principales para el contenedor de la tarjeta */

.card__link {
  text-align: end;
  width: 100%;
  color: rgb(36, 87, 138);
  text-decoration: dashed;
  border-bottom: solid 1px rgb(36, 87, 138);
    margin-top: 0.3rem;
}
.card__link > a {
  color: rgb(36, 87, 138);
  text-decoration: none;
}

.card__content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-end;
  align-content: space-between;
}
.content__card {
  width: 250px !important;
  position: relative;
  /* El height con !important sobrescribe los demás */
  /* height: clamp(336px, 50vh, 30px) !important; */
  padding: 0.5rem !important;
  border-radius: 0;
  background-color: var(--color-white);
  border: solid 1px #e8d8ff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: solid 1px rgb(38, 87, 136);
}

/* Título de la tarjeta */
.content__card-title {
  color: rgb(28, 65, 102);
  font-weight: bold;
}

/* Contenedor de las tarjetas (grupo) */
.content__card-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card__separator {
}

/* Imagen dentro de la tarjeta */
.content__card-img {
  width: 100%;
}

/* Contenedor principal de los proyectos */
.content__proyects {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  flex-wrap: wrap;
}

/* Contenedor y estilos de los enlaces */
.content__card-link {
  color: var(--color-black) !important;
  flex-grow: 2;
  position: absolute;
  bottom: 0em;
  right: 0rem;
}

/* Estilos para los enlaces y sus iconos */
.content__card-link > a,
.content__card-link > a:hover,
.content__card-link > a:focus,
.content__card-link > a:active,
.content__card-link > i {
  color: var(--color-black); /* Sobrescribe el color naranja original */
  text-decoration: none;
}

/* Contenedor de las tecnologías */
.card__technologies {
  /** position: absolute;
  border: 0;
  bottom: 0; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
}

/* Contenedor de las etiquetas de tecnología */
.tools {
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

/* Estilo general para todas las etiquetas */
.tools__item {
  padding: 0.3rem;

  color: white;
}

/* Colores específicos para cada tecnología */
.tools__item--HTML5 {
  background-color: #ff4800;
}

.tools__item--CSS,
.tools__item--PHP,
.tools__item--MYSQL {
  background-color: var(--color-azul);
}

.tools__item--JS {
  background-color: var(--color-amarillo);
  color: var(--color-black) !important;
}

.tools__item--OTHER {
  background-color: var(--color-verde);
  color: white;
}

.tools__item--BS {
  background-color: var(--color-lila-oscuro);
}

.tools__item--LARAVEL {
  background: var(--color-rojo);
}
</style>
