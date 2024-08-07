# Sistema de Gestión de Tienda

## Introducción
Este proyecto es un Sistema de Gestión de Tienda que proporciona un servicio backend construido con Spring Boot y una interfaz frontend creada con React. El sistema soporta operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar inventarios de tienda, clientes y pedidos.

## Tabla de Contenidos
- [Introducción](#introducción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Uso](#uso)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Características
- Autenticación y autorización de usuarios
- Operaciones CRUD para productos, clientes y pedidos
- Interfaz de usuario responsiva y fácil de usar
- Integración con API RESTful
- Manejo de errores y validación

## Tecnologías Utilizadas
### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- H2 Database (para pruebas)
- MySQL (para producción)
- Maven

### Frontend
- React
- Redux (para manejo de estado)
- Axios (para llamadas API)
- React Router (para enrutamiento)
- Material-UI (para componentes UI)

## Instalación
### Backend
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/store-backend.git
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd store-backend
    ```
3. Construir el proyecto con Maven:
    ```bash
    mvn clean install
    ```
4. Ejecutar la aplicación:
    ```bash
    mvn spring-boot:run
    ```

### Frontend
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/store-frontend.git
    ```
2. Navegar al directorio del proyecto:
    ```bash
    cd store-frontend
    ```
3. Instalar las dependencias:
    ```bash
    npm install
    ```
4. Ejecutar la aplicación:
    ```bash
    npm start
    ```

## Uso
1. Acceder a la interfaz web en `http://localhost:3000`.
2. Registrar una cuenta o iniciar sesión si ya tiene una.
3. Usar la interfaz para gestionar productos, clientes y pedidos.

## Contribuir
1. Hacer un fork del repositorio.
2. Crear una rama con la nueva característica o corrección de errores:
    ```bash
    git checkout -b feature/nueva-caracteristica
    ```
3. Hacer commit de sus cambios:
    ```bash
    git commit -m 'Agregar nueva característica'
    ```
4. Hacer push a la rama:
    ```bash
    git push origin feature/nueva-caracteristica
    ```
5. Abrir un Pull Request.

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
