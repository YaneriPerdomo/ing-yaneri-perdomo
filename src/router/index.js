import AboutMe from "@/views/AboutMe.vue";
import Competencies from "@/views/Competencies.vue";
import Home from "@/views/Home.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";
import Projects from "@/views/Projects.vue";
import Training from "@/views/Training.vue";
import WorkExperience from "@/views/WorkExperience.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "/",
      component: AboutMe,
      meta: {
        title: "Acerca de mí"
      }
    },
    {
      path: '/acerca-de-mi',
      name: '/acerca-de-mi',
      component: AboutMe,
      meta: {
        title: "Acerca de Mí"
      }
    },
    {
      path: '/competencias',
      name: '/competencias',
      component: Competencies,
      meta: { title: "Competencias" }
    },
    {
      path: '/educacion',
      name: '/educacion',
      component: Training,
      meta: { title: 'educacion' }

    },
    {
      path: '/experiencia-laboral',
      name: '/experiencia-laboral',
      component: WorkExperience,
      meta: { title: 'Experiencia Laboral' }
    },
    {
      path: '/proyectos',
      name: '/proyectos',
      component: Projects,
      meta: {
        title: 'Proyectos'
      }
    },
    {
      path: '/proyectos/:proyecto',
      name: '/proyectos/:proyecto',
      component: ProjectDetails , 
      meta: {
        title: 'Detalles del Proyecto'
      }
    }
    /* {
       path: "/form2521/:id",
       name: "form2521-id",
       component: Form2521Id,
       meta: {
         title: "Formulario con dicho parametro",
       },
     },*/
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Mi App por defecto";
  next();
});

export default router;
