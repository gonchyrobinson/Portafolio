export interface GithubLink {
  label: string;
  url: string;
}

export interface DemoVideo {
  label: { en: string; es: string };
  url: string;
}

export interface Project {
  slug: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  techStack: string[];
  screenshots: string[];
  demoVideos: DemoVideo[];
  liveUrl: string | null;
  githubUrls: GithubLink[];
  isPrivate: boolean;
  isSlowStart: boolean;
  createdAt: string;
}

export const projects: Project[] = [
  {
    slug: 'pasantias',
    title: {
      en: 'Internship Management System',
      es: 'Sistema de Gestión de Pasantías',
    },
    description: {
      en: 'Selected by the university to modernize the administrative ecosystem. Full-stack solution for managing internships with React, TypeScript, ASP.NET, C#, and SQL. Migrated legacy data and designed REST APIs. University thesis project.',
      es: 'Designado por la universidad para modernizar el ecosistema administrativo. Solución full-stack para gestión de pasantías con React, TypeScript, ASP.NET, C# y SQL. Migración de datos legacy y diseño de REST APIs. Proyecto de tesis universitaria.',
    },
    techStack: ['React', 'TypeScript', 'MUI', 'Vite', 'React Query', '.NET 8', 'C#', 'EF Core', 'MySQL', 'JWT'],
    screenshots: [
      '/projects/pasantias/screenshot-1.png',
      '/projects/pasantias/screenshot-2.png',
      '/projects/pasantias/screenshot-3.png',
    ],
    demoVideos: [
      {
        label: { en: 'General Overview', es: 'Recorrido General' },
        url: '/projects/pasantias/RecorridoGeneral_1.webm',
      },
      {
        label: { en: 'User Creation', es: 'Creación de Usuarios' },
        url: '/projects/pasantias/CreacionUsuarios_2.webm',
      },
      {
        label: { en: 'Agreement Registration', es: 'Alta de Convenio' },
        url: '/projects/pasantias/AltaDeConvenio_3.webm',
      },
      {
        label: { en: 'Individual Agreement', es: 'Acuerdo Individual' },
        url: '/projects/pasantias/AltaDeAcuerdoIndividual_4.webm',
      },
      {
        label: { en: 'Active Agreements Query', es: 'Consulta Convenios Vigentes' },
        url: '/projects/pasantias/ConsultaConveniosVigentes_5.webm',
      },
      {
        label: { en: 'Partial Search', es: 'Búsqueda Parcial' },
        url: '/projects/pasantias/BusquedaParcial_6.webm',
      },
      {
        label: { en: 'Internship Law Exceptions', es: 'Excepciones Ley de Pasantías' },
        url: '/projects/pasantias/ExcepcionesLeyDePasantias_8.webm',
      },
      {
        label: { en: 'Login Audit', es: 'Auditoría de Login' },
        url: '/projects/pasantias/AuditoriaLogin_9.webm',
      },
    ],
    liveUrl: null,
    githubUrls: [
      { label: 'Frontend', url: 'https://github.com/gonchyrobinson/Frontend-Pasantiasw' },
      { label: 'Backend', url: 'https://github.com/gonchyrobinson/Backend' },
    ],
    isPrivate: true,
    isSlowStart: false,
    createdAt: '2025-07-28',
  },
  {
    slug: 'blue-cheetah',
    title: {
      en: 'Blue Cheetah Investment Platform',
      es: 'Plataforma de Inversión Blue Cheetah',
    },
    description: {
      en: 'Web application for international logistics management and investment tracking. Built with ASP.NET Core MVC and deployed to production. Landing page publicly accessible.',
      es: 'Aplicación web para gestión de logística internacional y monitoreo de inversiones. Construida con ASP.NET Core MVC y desplegada en producción. Landing page accesible públicamente.',
    },
    techStack: ['ASP.NET Core MVC', '.NET 8', 'C#', 'EF Core', 'SQLite', 'AutoMapper', 'Razor', 'Bootstrap'],
    screenshots: [
      '/projects/blue-cheetah/screenshot-1.png',
      '/projects/blue-cheetah/screenshot-2.png',
      '/projects/blue-cheetah/screenshot-3.png',
    ],
    demoVideos: [
      {
        label: { en: 'Home Page', es: 'Página Principal' },
        url: '/projects/blue-cheetah/01-Home-Page-Demo.webm',
      },
      {
        label: { en: 'Login', es: 'Inicio de Sesión' },
        url: '/projects/blue-cheetah/02-Login-Demo.webm',
      },
      {
        label: { en: 'User Management', es: 'Gestión de Usuarios' },
        url: '/projects/blue-cheetah/03-User-Management-Demo.webm',
      },
      {
        label: { en: 'General Data', es: 'Datos Generales' },
        url: '/projects/blue-cheetah/04-General-Data-Demo.webm',
      },
      {
        label: { en: 'Capital & Rentability', es: 'Capital y Rentabilidad' },
        url: '/projects/blue-cheetah/05-Capital-Rentability-Demo.webm',
      },
      {
        label: { en: 'Reports', es: 'Reportes' },
        url: '/projects/blue-cheetah/06-Reports-Demo.webm',
      },
      {
        label: { en: 'Contact & More Info', es: 'Contacto e Info' },
        url: '/projects/blue-cheetah/07-Contact-MoreInfo-Demo.webm',
      },
    ],
    liveUrl: 'https://bluecheetahint.com',
    githubUrls: [
      { label: 'Source', url: 'https://github.com/gonchyrobinson/DiegoMoyanoProyect' },
    ],
    isPrivate: true,
    isSlowStart: false,
    createdAt: '2024-03-15',
  },
  {
    slug: 'restaurantes',
    title: {
      en: 'Multi-tenant Restaurant System',
      es: 'Sistema Multi-tenant para Restaurantes',
    },
    description: {
      en: 'Multi-tenant web system for restaurant order management. Customers scan QR codes to view menus and place orders without registration; includes group orders (multiple diners at a table with shared code). Administrators manage products, tables, and orders in real-time via WebSockets.',
      es: 'Sistema web multi-tenant para gestión de pedidos en restaurantes. Los clientes escanean QR para ver la carta y pedir sin registro; incluye pedidos grupales (varios comensales en una mesa con código compartido). Administradores gestionan productos, mesas y pedidos en tiempo real vía WebSockets.',
    },
    techStack: ['React', 'TypeScript', 'Tailwind', 'MUI', 'Redux', 'Zustand', 'React Query', 'Socket.io', 'Google Maps', 'PWA', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT'],
    screenshots: [
      '/projects/restaurantes/screenshot-1.png',
      '/projects/restaurantes/screenshot-2.png',
      '/projects/restaurantes/screenshot-3.png',
    ],
    demoVideos: [
      {
        label: { en: 'Browse Restaurants', es: 'Explorar Restaurantes' },
        url: '/projects/restaurantes/UC1-Browse-Restaurants.webm',
      },
      {
        label: { en: 'QR Code to Order', es: 'QR para Pedir' },
        url: '/projects/restaurantes/UC2-QR-Code-to-Order.webm',
      },
      {
        label: { en: 'Admin Dashboard & Orders', es: 'Panel Admin y Pedidos' },
        url: '/projects/restaurantes/UC3-Admin-Dashboard-Orders.webm',
      },
      {
        label: { en: 'Admin Products', es: 'Productos Admin' },
        url: '/projects/restaurantes/UC4-Admin-Products.webm',
      },
      {
        label: { en: 'Admin Tables & Settings', es: 'Mesas y Configuración' },
        url: '/projects/restaurantes/UC5-Admin-Tables-Settings.webm',
      },
      {
        label: { en: 'Super Admin Platform', es: 'Plataforma Super Admin' },
        url: '/projects/restaurantes/UC6-Super-Admin-Platform.webm',
      },
      {
        label: { en: 'Mobile Responsive', es: 'Diseño Responsivo' },
        url: '/projects/restaurantes/UC7-Mobile-Responsive.webm',
      },
      {
        label: { en: 'Place an Order', es: 'Realizar un Pedido' },
        url: '/projects/restaurantes/UC8-Place-an-Order.webm',
      },
    ],
    liveUrl: 'https://sistema-restaurantes-frontend-ivnb.vercel.app',
    githubUrls: [
      { label: 'Source', url: 'https://github.com/gonchyrobinson/sistemaRestaurantes' },
    ],
    isPrivate: false,
    isSlowStart: true,
    createdAt: '2026-01-22',
  },
  {
    slug: 'kanban',
    title: {
      en: 'Agile Kanban Management System',
      es: 'Sistema de Gestión Ágil Kanban',
    },
    description: {
      en: 'Scalable task management application with MVC architecture. Implemented CRUD operations, authentication features, and RESTful API design.',
      es: 'Aplicación escalable de gestión de tareas con arquitectura MVC. Implementación de funcionalidades CRUD, autenticación y diseño de APIs RESTful.',
    },
    techStack: ['C#', 'ASP.NET', 'MVC', 'MySQL', 'REST API'],
    screenshots: [
      '/projects/kanban/screenshot-1.png',
      '/projects/kanban/screenshot-2.png',
      '/projects/kanban/screenshot-3.png',
    ],
    demoVideos: [
      {
        label: { en: 'Admin Login', es: 'Login Admin' },
        url: '/projects/kanban/01-login-admin.webm',
      },
      {
        label: { en: 'List Users', es: 'Listar Usuarios' },
        url: '/projects/kanban/02-list-users.webm',
      },
      {
        label: { en: 'Create User', es: 'Crear Usuario' },
        url: '/projects/kanban/03-create-user.webm',
      },
      {
        label: { en: 'Edit User', es: 'Editar Usuario' },
        url: '/projects/kanban/04-edit-user.webm',
      },
      {
        label: { en: 'List Boards', es: 'Listar Tableros' },
        url: '/projects/kanban/05-list-boards.webm',
      },
      {
        label: { en: 'Create Board', es: 'Crear Tablero' },
        url: '/projects/kanban/06-create-board.webm',
      },
      {
        label: { en: 'Edit Board', es: 'Editar Tablero' },
        url: '/projects/kanban/07-edit-board.webm',
      },
      {
        label: { en: 'List Tasks', es: 'Listar Tareas' },
        url: '/projects/kanban/08-list-tasks.webm',
      },
      {
        label: { en: 'Create Task', es: 'Crear Tarea' },
        url: '/projects/kanban/09-create-task.webm',
      },
      {
        label: { en: 'Edit Task', es: 'Editar Tarea' },
        url: '/projects/kanban/10-edit-task.webm',
      },
      {
        label: { en: 'Assign Task', es: 'Asignar Tarea' },
        url: '/projects/kanban/11-assign-task.webm',
      },
      {
        label: { en: 'Boards by User', es: 'Tableros por Usuario' },
        url: '/projects/kanban/12-view-boards-by-user.webm',
      },
      {
        label: { en: 'Tasks by Board', es: 'Tareas por Tablero' },
        url: '/projects/kanban/13-view-tasks-by-board.webm',
      },
      {
        label: { en: 'Delete Task', es: 'Eliminar Tarea' },
        url: '/projects/kanban/14-delete-task.webm',
      },
      {
        label: { en: 'Delete Board', es: 'Eliminar Tablero' },
        url: '/projects/kanban/15-delete-board.webm',
      },
      {
        label: { en: 'Delete User', es: 'Eliminar Usuario' },
        url: '/projects/kanban/16-delete-user.webm',
      },
      {
        label: { en: 'Operative Permissions', es: 'Permisos Operativos' },
        url: '/projects/kanban/17-operative-user-permissions.webm',
      },
    ],
    liveUrl: null,
    githubUrls: [
      { label: 'Source', url: 'https://github.com/gonchyrobinson/RehacerTPS' },
    ],
    isPrivate: false,
    isSlowStart: false,
    createdAt: '2023-12-07',
  },
];
