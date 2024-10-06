# 🐱 **Museo Virtual de Memes "MeCat"**

## 📝 **Presentación del proyecto**

¡Bienvenido a **MeCat**, tu museo virtual dedicado a los memes de gatos más divertidos y virales! 🎉 Esta aplicación te permite explorar, interactuar y disfrutar de una amplia colección de memes felinos. Desarrollada con React y estilizada con Tailwind CSS, **MeCat** ofrece una experiencia interactiva y responsiva para todos los amantes de los gatos y los memes.

## 🚀 **Características de la aplicación**

### 🔍 **Explora la colección de memes:**

Puedes ver todos los memes de gatos en una galería organizada. Cada meme se presenta en una tarjeta interactiva que puedes voltear para ver más detalles.

### ➕ **Agrega nuevos memes:**

¡Contribuye a la colección! Puedes agregar nuevos memes de gatos mediante un formulario sencillo. Solo asegúrate de que el meme sea apropiado y cumpla con las políticas del museo.

### 🗑️ **Elimina memes:**

¿Hay un meme que ya no debería estar en la colección? Puedes eliminarlo fácilmente con un solo clic.

### ✏️ **Actualiza información del meme:**

Si un meme necesita una actualización o corrección, puedes editar los detalles directamente desde la aplicación.

### 🔄 **Voltea las tarjetas para más información:**

Al hacer clic en "more", las tarjetas se voltean para mostrar información adicional sobre el meme, como la descripción, fecha y número de likes.

## ⚙️ **Funciones de la API**

La API de **MeCat** ofrece las siguientes funcionalidades:

### 🔍 **Obtener todos los memes:**

Puedes recuperar una lista de todos los memes de gatos almacenados en el museo virtual.

- **Método**: `GET`
- **Endpoint**: `/api/memes`
- **Descripción**: Retorna una lista de todos los memes disponibles.

### ➕ **Agregar un nuevo meme:**

Permite agregar un nuevo meme a la colección.

- **Método**: `POST`
- **Endpoint**: `/api/memes`
- **Descripción**: Envía los datos de un nuevo meme (imagen, descripción, etc.) para almacenarlo en la API.

### 🗑️ **Eliminar un meme:**

Permite eliminar un meme específico de la colección.

- **Método**: `DELETE`
- **Endpoint**: `/api/memes/:id`
- **Descripción**: Elimina un meme de la colección a partir de su ID.

### ✏️ **Actualizar información de un meme:**

Permite editar los detalles de un meme existente.

- **Método**: `PUT`
- **Endpoint**: `/api/memes/:id`
- **Descripción**: Actualiza la información de un meme a partir de su ID.

## 🔧 **Tecnologías utilizadas:**

- **React**: Para construir una interfaz de usuario dinámica y modular.
- **Tailwind CSS**: Para un diseño moderno y responsivo.
- **ReactCardFlip**: Para implementar el efecto de volteo en las tarjetas.
- **Fetch API**: Para manejar solicitudes HTTP y comunicación con la API.

## 🌐 **Interacción con la API:**

La aplicación utiliza una API (puede ser una API falsa o real) para manejar las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) de los memes.

## 🎨 **Diseño responsivo:**

Gracias a Tailwind CSS, la interfaz se adapta a diferentes tamaños de pantalla, asegurando una experiencia óptima tanto en dispositivos móviles como en escritorio.

## 🚀 **Cómo utilizar esta aplicación**

### 1. 🖥️ **Clona este repositorio:**

Primero, clona el proyecto en tu máquina local con el siguiente comando:

```bash
git clone https://github.com/tuusuario/MeCat.git
```


```bash git clone https://github.com/jruizndev/memecatmuseum.git
```
cd MeCat

### 2. 🔧 **Instala las dependencias del proyecto:**
Después de clonar el proyecto, instala las dependencias necesarias:

```bash
npm install
```
### 3. 🔩 Modificaciones archivo .env.example
# Configuración de Cloudinary en el Proyecto

Esta guía detalla cómo configurar Cloudinary en tu proyecto utilizando un archivo `.env` para almacenar de manera segura las credenciales sensibles. Asegúrate de seguir cada paso para completar la configuración correctamente.

## 1. Renombrar `.env.example` a `.env`

Primero, localiza el archivo `.env.example` en la raíz de tu proyecto y renómbralo a `.env`. Este archivo será utilizado para almacenar tus credenciales de Cloudinary y otras variables de entorno sensibles.

```bash
mv .env.example .env

```
## 2. Obtener las credenciales de Cloudinary

Para integrar Cloudinary, necesitas crear una cuenta en [Cloudinary](https://cloudinary.com/). Una vez registrado, sigue estos pasos:

1. Accede al [Dashboard de Cloudinary](https://cloudinary.com/console).
2. Copia los siguientes valores:
   - **Cloud Name**
   - **API Key**
   - **API Secret**

## 3. Agregar las credenciales al archivo `.env`

Una vez que tengas las credenciales de Cloudinary, agrégalas a tu archivo `.env` de la siguiente manera:

```makefile
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```
## 4. Verificar que `.gitignore` tenga `.env`

Asegúrate de que el archivo `.gitignore` ya contenga la línea `.env`, para que este archivo no se suba a GitHub y tus credenciales permanezcan seguras. Si no está, agrégala manualmente:

```bash
.env
```
## 5. Instalar la dependencia `dotenv`

Si trabajas con Node.js, debes instalar `dotenv` para gestionar las variables de entorno. Usa el siguiente comando en tu terminal:

```bash
npm install dotenv
```

### 4. 🚀 Inicia la aplicación:
Inicia la aplicación en modo de desarrollo:

```bash 
npm start
```
### 5. 🛠️ **Inicializar base de datos y servidor**



#### **Inician la base de datos JSON**
```bash
npm run apicat
```
#### Arrancar el servidor
```bash
npm run dev
```

### 6. 🌐 ¡Listo para usar!
Abre http://localhost:3000 en tu navegador y comienza a explorar el museo virtual de memes de gatos.

## 👥 **Desarrolladores del equipo**

Nuestro equipo está formado por cinco desarrolladores comprometidos con el proyecto **MeCat**, cada uno desempeñando un papel clave en el desarrollo y éxito de la aplicación.

- **Jose Alfonso Ruiz**: Desarrollador y Scrum Master del equipo.
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/josealfonsoruiz/)
  
- **César Mercado**: Desarrollador. 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cesarmercadoh/)
- **Sara Alcaraz**: Desarrolladora. 
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saraalcarazvalverde/)
- **Darío Pacheco**: Desarrollador .
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dario3pacheco/)
- **Juliana Amorim**: Desarrolladora y Product Owner.
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/julianaamrm/)

## 💡 Vista al futuro
Algunas ideas para mejorar esta aplicación:

**Autenticación de usuarios:** Permitir a los usuarios iniciar sesión para guardar sus memes favoritos.
**Sistema de comentarios:** Añadir la posibilidad de comentar en los memes.
**Compartir en redes sociales:** Integrar botones para compartir memes en plataformas como Facebook y Twitter.
**Filtro y búsqueda:** Implementar funciones para filtrar y buscar memes por categorías o palabras clave.

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si tienes sugerencias o encuentras algún problema, no dudes en abrir un issue o enviar un pull request. 🙌
