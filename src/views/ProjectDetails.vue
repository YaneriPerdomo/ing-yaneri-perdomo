<script setup>
import Layout from "@/components/Layout.vue";
import ShowProject from "@/components/ShowProject.vue";
const TOTAL_INFORMATION_PROJECTS = {
  gleeo:{
      
    title: "Sistema Web con un Tutor Inteligente que integra Sensores Táctiles y Respuesta Lumínica para dinamizar el aprendizaje en educación primaria.",
    meta: {
      type_project: "Educativo",
      GitHub: "https://github.com/YaneriPerdomo/gleeo",
       
      deploy: "https://gleeo.infinityfreeapp.com/configuracion-del-tutor/contenido-de-esfuerzo",
    },
    media: {
      file: "gleeo",
      thumbnails: [
        {
          src: "caja-beta.jpeg",
          alt: "Presentacion",
        },
        {
          src: "juego.PNG",
          alt: "Diagrama de casos de uso",
        },
        {
          src: "progreso.PNG",
          alt: "Indicador",
        },
        {
          src: "plataforma.PNG",
          alt: "Panel de control",
        },
        {
          src: "caja.jpeg",
          alt: "Indicadores",
        },
      ],
      main: "caja.jpeg",
    },
     content: {
  objective: `Desarrollar un sistema web con un tutor inteligente que integra sensores táctiles y respuesta lumínica para dinamizar el aprendizaje en educación primaria.`,
  scope_: `Gleeo es un Tutor Inteligente (STI) que redefine la interactividad educativa al combinar una plataforma web con una interfaz física basada en sensores táctiles y respuesta lumínica. El sistema permite a los estudiantes seleccionar opciones y navegar por las lecciones mediante el contacto físico directo con sensores, eliminando las barreras de los periféricos convencionales. Esta interacción se complementa con un feedback visual inmediato a través de luces que validan las respuestas en tiempo real. Al unir el software con hardware tangible, el proyecto potencia la motricidad y la atención, ofreciendo una experiencia de aprendizaje inmersiva que facilita el monitoreo del progreso académico y el refuerzo pedagógico personalizado.`,
},
  
  },
  logi_plan: {
    title:
      "Sistema Web de Monitoreo y Gestión Logística de Rutas Terrestres Urbanas",
    meta: {
      type_project: "Logístico",
      
      deploy: "https://logi-plan.infinityfreeapp.com",
    },
    media: {
      file: "logi-plan",
      thumbnails: [
        {
          src: "dashboard-administrativo.PNG",
          alt: "Panel Administrativo",
        },
        {
          src: "Gestion-de-pedidos.PNG",
          alt: "Gestion de pedido",
        },
        {
          src: "geolocalizacion.PNG",
          alt: "Geolocalizacion",
        },
        {
          src: "centros-de-distribucion.PNG",
          alt: "Centro de distribucion",
        },
        {
          src: "control-y-geolocalización-de-rutas.PNG",
          alt: "Control y geolocalizacion de rutas",
        },
      ],
      main: "iniciar-sesion.PNG",
    },
    content: {
      objective: ` Desarrollar un Sistema Web de Monitoreo y Gestión Logística de Rutas Terrestres Urbanas`,
      audience: {
        groups: [
          {
            title: "Niños:",
            description:
              "Estudiantes/Pacientes de entre 7 y 12 años con diagnóstico de discalculia verbal.",
          },
          {
            title: "Profesionales:",
            description:
              "Terapeutas ocupacionales, psicopedagogos y profesores especializados en dificultades de aprendizaje.",
          },
        ],
      },
      scope_: `
LogiPlan fue un Sistema Web de Gestión Logística Integral desarrollado para una tesis universitaria, enfocado en la planificación de rutas terrestres y la trazabilidad de envíos urbanos. El sistema implementa un componente de geolocalización y está estructurado en tres roles (Administrador, Planificador, Conductor) para centralizar la gestión de recursos, operaciones de paquetería y el control diario de rutas, cumpliendo el objetivo académico de demostrar la eficiencia en la optimización logística.        `,
    },
  },
  espacio_n: {
    title: " Aplicación Web para Niños de Primaria con Discalculia ",
    meta: {
      type_project: "Educativo",
      GitHub: "https://github.com/YaneriPerdomo/spaceN",
      video:
        "https://www.instagram.com/p/DF1M4RAgU6HknISxMbvL8O_9b8pXlRGC005MB00/",
      deploy: "https://proyecto-yp.infinityfree.me/espacio-n/",
    },
    media: {
      file: "space-n",
      thumbnails: [
        {
          src: "dashboard.JPG",
          alt: "Presentacion",
        },
        {
          src: "Diagrama-de-casos-de-uso.png",
          alt: "Diagrama de casos de uso",
        },
        {
          src: "index.JPG",
          alt: "Primer vistazo a la aplicacion",
        },
        {
          src: "read.JPG",
          alt: "Aprende",
        },
        {
          src: "progress.JPG",
          alt: "Progreso",
        },
      ],
      main: "presentacion.png",
    },
    content: {
      objective: ` Desarrollar una aplicación web educativa y divertida para niños de
                    entre 7 y 12 años con discalculia verbal, con el objetivo de mejorar
                    sus habilidades matemáticas a través de ejercicios personalizados y
                    gamificados.`,
      audience: {
        groups: [
          {
            title: "Niños:",
            description:
              "Estudiantes/Pacientes de entre 7 y 12 años con diagnóstico de discalculia verbal.",
          },
          {
            title: "Profesionales:",
            description:
              "Terapeutas ocupacionales, psicopedagogos y profesores especializados en dificultades de aprendizaje.",
          },
        ],
      },
      scope_:
        "Esta aplicación se enfoca en proporcionar un entorno de aprendizaje interactivo y personalizado para niños con discalculia. A través de ejercicios adaptados a sus necesidades individuales, la aplicación busca fortalecer sus habilidades matemáticas básicas y fomentar un enfoque positivo hacia el aprendizaje.",
    },
  },
  calidad_financiera: {
    title: "Aplicación Web para la Gestion de Finanzas Personales",
    meta: {
      type_project: "Administrativo",
      GitHub: "https://github.com/YaneriPerdomo/calidad-financiera",
      video: "https://www.youtube.com/watch?v=F90w6pDA7-8&t=3s",
      deploy:
        "https://proyecto-yp.infinityfreeapp.com/calidad-financiera/public/create-account",
    },
    media: {
      file: "calidad-financiera",
      thumbnails: [
        {
          src: "iniciar-sesion.PNG",
          alt: "Indicadores",
        },
        {
          src: "crear-cuenta.PNG",
          alt: "Presentacion",
        },
        {
          src: "Diagrama de casos de uso.png",
          alt: "Diagrama de casos de uso",
        },
        {
          src: "dinero.PNG",
          alt: "Indicador",
        },
        {
          src: "transaccion.PNG",
          alt: "Panel de control",
        },
        
      ],
      main: "Presentacion-(1).png",
    },
    content: {
      objective: `Desarrollar una aplicación web para la gestión de finanzas personales.`,
      scope_: `El proyecto Calidad Financiera fue un desarrollo web para una tesis universitaria, clasificado como un Sistema de Gestión Financiera Personal (PFM). El objetivo fue proporcionar una solución integral que simplificara la gestión, registro y monitoreo de ingresos y gastos de personas de todas las edades. El sistema permite el control de transacciones y el establecimiento de presupuestos, cumpliendo el propósito académico de ofrecer una herramienta eficaz para mejorar la planificación y el control financiero personal.`,
    },
  },
  tu_puedes: {
    title:
      "Aplicación Web para el Aprendizaje de la Lectoescritura en Niños con Dislexia en Etapa Primaria.",
    meta: {
      type_project: "Educativo",
      GitHub: "https://github.com/YaneriPerdomo/Tu-puedes",
      video:
        "https://www.instagram.com/p/DF1N9smAGsmUe-vpDgeJtGLcnTyz40rTlhUsgQ0/",
    },
    media: {
      file: "tu-puedes",
      thumbnails: [
        {
          src: "index.JPG",
          alt: "Presentacion",
        },
        {
          src: "create-account.JPG",
          alt: "Diagrama de casos de uso",
        },
        {
          src: "Picture1.png",
          alt: "Indicador",
        },
        {
          src: "read.JPG",
          alt: "Panel de control",
        },
        {
          src: "game.JPG",
          alt: "Indicadores",
        },
      ],
      main: "presentacion.png",
    },
    content: {
      objective: `Desarrollar una aplicación web para el aprendizaje de la lectoescritura en niños con dislexia en etapa primaria. `,
      scope_: `La aplicación web "Tú Puedes" se presenta como un recurso valioso para apoyar a los niños en sus primeras etapas de aprendizaje. Su objetivo principal es proporcionar estrategias dinámicas y atractivas diseñadas específicamente para abordar las dificultades de lectura y escritura. Al ofrecer un entorno interactivo y estimulante, esta herramienta busca facilitar el desarrollo de habilidades fundamentales, permitiendo a los niños avanzar con confianza en su camino hacia la alfabetización, teniendo en cuenta que deben estar supervisados ​​por un adulto, como un familiar, un maestro o un terapeuta, quien será responsable de crear y administrar su cuenta.`,
    },
  },
  asistente_virtual_gregorin: {
    title: "Asistente Virtual para la Universidad Dr. José Gregorio Hernández",
    meta: {
      type_project: "de Sistema Experto",
      GitHub: "https://github.com/YaneriPerdomo/chatbot-UJGH",
      video:
        "https://www.instagram.com/p/DF1RJETgO1aRGrR_VHoIQc5-E9QCTFJMDXmXYA0/",
      deploy: "https://proyecto-yp.infinityfree.me/gregorin/",
    },
    media: {
      file: "chat-bot",
      thumbnails: [
        {
          src: "presentacion.png",
          alt: "Presentacion",
        },
        {
          src: "chat-bot01.JPG",
          alt: "Diagrama de casos de uso",
        },
        {
          src: "chat-bot02.JPG",
          alt: "Indicador",
        },
        {
          src: "diagrama-de-flujo.png",
          alt: "Panel de control",
        },
        {
          src: "chat-bot03.JPG",
          alt: "Indicadores",
        },
      ],
      main: "presentacion.png",
    },
    content: {
      objective: `Desarrollar un asistente virtual para la Universidad Dr. José Gregorio Hernández.`,
      scope_: `El Asistente Virtual, en esencia un chatbot para la Universidad Dr. José Gregorio Hernández, está diseñado para brindar respuestas rápidas y precisas a preguntas básicas y generales de estudiantes y usuarios externos. Su objetivo principal es facilitar el acceso a información relevante sobre la UJGH, incluyendo sus procesos administrativos, oferta académica y detalles sobre la vida y obra de José Gregorio Hernández. Al ofrecer respuestas claras y concisas, el chatbot busca mejorar la experiencia del usuario, optimizar el tiempo de estudiantes y usuarios externos, y servir como un punto de contacto eficiente para la comunidad universitaria, considerando que fue creado desde cero y sin IA.`,
    },
  },
  sonidos_del_habla: {
    title:
      "Aplicación Web para Sesiones de Logopedia Personalizadas para Dislalia",
    meta: {
      type_project: "Educativo",
      GitHub: "https://github.com/YaneriPerdomo/sonidos-del-habla",
      video:
        "https://www.instagram.com/p/DGPRvamg8iU6AHwYbmzT89LBaMswAeoq4pkVOM0/",
    },
    media: {
      file: "sonidos-del-habla",
      thumbnails: [
        {
          src: "add-patient.JPG",
          alt: "Presentacion",
        },
        {
          src: "create-account.JPG",
          alt: "Diagrama de casos de uso",
        },
        {
          src: "dashboard.JPG",
          alt: "Indicador",
        },
        {
          src: "attendance.JPG",
          alt: "Panel de control",
        },
        {
          src: "Diagrama de clases.png",
          alt: "Indicadores",
        },
      ],
      main: "presentacion.png",
    },
    content: {
      objective: `Desarrollar una aplicación web para sesiones de logopedia personalizadas para dislalia.`,
      scope_: `Esta aplicación web se concibe como una herramienta integral para el tratamiento de la dislalia, ofreciendo un enfoque estructurado y personalizado. Su alcance abarca la provisión de más de 15 ejercicios de habla, diseñados para fortalecer la musculatura orofacial, mejorar la pronunciación de fonemas y desarrollar la fluidez verbal. Además, incorpora un calendario de asistencia que permite a los profecionales y pacientes visualizar el progreso y la regularidad de las sesiones. La aplicación también ofrece materiales de apoyo adicionales. Finalmente, se incluye un historial de actividades detallado, que registra todas las acciones realizadas por los pacientes, facilitando el seguimiento y la evaluación del tratamiento.`,
    },
  },
  /*tasa_del_dia: {
    title: "Aplicación web para consultar el valor del dólar en Venezuela en tiempo real",
    meta: {
      type_project: "en tiempo real",
      GitHub: "https://github.com/YaneriPerdomo/tasa-del-dia",
      video: "",
    },
    media: {
      file: "tasa-del-dia",
      thumbnails: [
        {
          src: "main.png",
          alt: "Aplicacion web",
        },
        {
          src: "code.png",
          alt: "Proyecto a nivel de codigo",
        },
        {
          src: "responsive.PNG",
          alt: "Dispositivo movil",
        },
        {
          src: "diagrama-de-flujo.png",
          alt: "Diagrama de flujo",
        },
        {
          src: "diagrama-de-casos-de-uso.png",
          alt: "Diagrama de casos de uso",
        },
      ],
      main: "main.png",
    },
    content: {
      objective: `Desarrollar una aplicación web para consultar el valor del dólar en Venezuela en tiempo real.`,
      scope_: `Esta aplicación web es una herramienta esencial para los trabajadores venezolanos, ya que les proporciona información actualizada y precisa sobre el valor del dólar frente al bolívar, tanto al tipo de cambio oficial como al paralelo. Dada la frecuente devaluación de la moneda local, también destaca por su capacidad para detectar y actualizar valores automáticamente, eliminando la necesidad de recargar la página y garantizando que las personas siempre tengan acceso a la información más actualizada.`,
    },
  },*/
  stock_yp: {
    title: "Aplicacion Web para el Control de Ventas e inventarios",
    meta: {
      type_project: "Administrativo",
      GitHub: "https://github.com/YaneriPerdomo/StockYP",
      video: "https://www.youtube.com/watch?v=ik28b0m4Dkk",
      deploy:
        "https://proyecto-yp.infinityfreeapp.com/sistema-de-inventario/iniciar-sesion",
    },
    media: {
      file: "StockYp",
      thumbnails: [
        {
          src: "panel.PNG",
          alt: "Aplicacion web",
        },
        {
          src: "factura.PNG",
          alt: "Proyecto a nivel de codigo",
        },
        {
          src: "historial.PNG",
          alt: "Dispositivo movil",
        },
        {
          src: "iniciar-sesion (2).PNG",
          alt: "Diagrama de flujo",
        },
        {
          src: "Diagrama.PNG",
          alt: "Diagrama de casos de uso",
        },
      ],
      main: "main.PNG",
    },
    content: {
      objective: `Desarrollar una aplicacion web para el control de ventas e inventarios.`,
      scope_: `Esta aplicacion web, diseñado para una tienda de autopartes, permite un control 
      detallado de productos y ventas. Facilita la gestión precisa de inventario y la facturación
       de ventas al contado.

Estoy gestionando todo el desarrollo e implementación del proyecto, que aun esta en proceso. 
Su arquitectura flexible permite futuras expansiones, como la gestión de ventas a crédito y el cálculo de ventas netas, para una visión financiera más completa.`,
    },
  },
};
const URL = window.location;
let projectSelected;
if (URL.pathname.includes("tasa-del-dia")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.tasa_del_dia;
} else if (URL.pathname.includes("tu-puedes")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.tu_puedes;
} else if (URL.pathname.includes("calidad-financiera")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.calidad_financiera;
} else if (URL.pathname.includes("espacio-n")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.espacio_n;
} else if (URL.pathname.includes("sonidos-del-habla")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.sonidos_del_habla;
} else if (URL.pathname.includes("gregorin")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.asistente_virtual_gregorin;
} else if (URL.pathname.includes("stock-yp")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.stock_yp;
} else if (URL.pathname.includes("logi-plan")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.logi_plan;
}
else if (URL.pathname.includes("gleeo")) {
  projectSelected = TOTAL_INFORMATION_PROJECTS.gleeo;
}

let selectImage = (img) => {
  return img;
};
</script>
<template>
  <Layout>
    <div class="content m-1">
      <ShowProject :projectData="projectSelected"></ShowProject>
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

main {
  height: auto !important;
}
</style>
