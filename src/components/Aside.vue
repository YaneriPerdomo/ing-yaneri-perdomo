<script setup>
const url = window.location;

const URL_PATH_NAME = url.pathname;
</script>
<template>
  <aside class="col-12 col-md-2 sidebar flex-center-full sidebar">
    <figure class="sidebar__photo">
      <img
        src="../../public/photo-yaneri-perdomo.png"
        class="img-fluid"
        alt=""
        draggable="false"
      />
    </figure>
    <nav class="sidebar__navegation">
      <ul class="remove-circles-item-lists remove-padding sidebar__list">
        <li
          class="sidebar__list-item"
          :id="
            URL_PATH_NAME == '/acerca-de-mi' ||
            URL_PATH_NAME == '/' ||
            URL_PATH_NAME == ''
              ? 'sidebar-item--selected'
              : ''
          "
        >
          <router-link :to="{ name: '/acerca-de-mi' }" class="text-white"
            >Acerca de Mí</router-link
          >
        </li>
        <li
          class="sidebar__list-item"
          :id="
            URL_PATH_NAME == '/proyectos' ||
            URL_PATH_NAME == '/proyectos/tasa-del-dia' ||
            URL_PATH_NAME == '/proyectos/calidad-financiera' ||
            URL_PATH_NAME == '/proyectos/sonidos-del-habla' ||
            URL_PATH_NAME == '/proyectos/espacio-n' ||
            URL_PATH_NAME == '/proyectos/tu-puedes' ||
            URL_PATH_NAME == '/proyectos/gregorin' ||
            URL_PATH_NAME == '/proyectos/stock-yp'
              ? 'sidebar-item--selected'
              : ''
          "
        >
          <router-link :to="{ name: '/proyectos' }" class="text-white"
            >Proyectos</router-link
          >
        </li>
        <li
          class="sidebar__list-item"
          :id="URL_PATH_NAME == '/experiencia-laboral' ? 'sidebar-item--selected' : ''"
        >
          <router-link :to="{ name: '/experiencia-laboral' }" class="text-white"
            >Experiencia Laboral
          </router-link>
        </li>
        <li
          class="sidebar__list-item"
          :id="URL_PATH_NAME == '/competencias' ? 'sidebar-item--selected' : ''"
        >
          <router-link :to="{ name: '/competencias' }" class="text-white"
            >Competencias
          </router-link>
        </li>
        <li
          class="sidebar__list-item"
          :id="URL_PATH_NAME == '/educacion' ? 'sidebar-item--selected' : ''"
        >
          <router-link :to="{ name: '/educacion' }" class="text-white"
            >Educación
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style>
.sidebar {
  align-items: self-start;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

#sidebar-item--selected {
  background: white;
  color: var(--color-azul-claro) !important;
  padding: 0.2rem;
}

.sidebar-item--selected-responsive {
  background: var(--color-azul-claro) !important;
  color: white !important;
  padding: 0.2rem;
}

#sidebar-item--selected > a {
  color: var(--color-azul-claro);
  text-decoration: none;
}

.sidebar__photo > img {
  max-width: 100%;
  height: auto;
  height: auto;
  width: clamp(80px, 50vw, 128px);
}

figure {
  margin: 0;
}
</style>
