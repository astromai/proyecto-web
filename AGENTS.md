# King Barber Shop — guía del proyecto

## Objetivo

Landing page estática de una sola página para King Barber Shop, La Cisterna. No incluye reservas, autenticación, panel administrativo ni backend.

## Requerimientos implementados

- Navegación fija con anclas: inicio, servicios, barberos y ubicación.
- Presentación de la barbería con temática vikinga contemporánea.
- Servicios inventados con nombres y narrativa nórdica.
- Equipo reutilizado del HTML original: Jesús “El Rey”, Cristóbal “Gladiador” y Matías “Motoquero”.
- Ubicación, horarios y contactos del HTML original.
- Mapa embebido de Google Maps sin clave API.
- Enlace a la ficha de Google para consultar reseñas actualizadas.

## Estructura

```text
src/
  App.tsx       Secciones y datos de contenido de la landing
  index.css     Sistema visual, responsive y animaciones CSS
  main.tsx      Punto de entrada React
```

## Librerías

- React + TypeScript
- Vite
- lucide-react (iconografía)

## Decisiones

Google no proporciona el recuento y las reseñas en vivo sin configurar Google Places API, facturación y una clave restringida. Por eso la página no muestra una cifra que pueda quedar desactualizada; enlaza directamente a Google Maps. Para incorporar esos datos en el futuro se necesitaría un backend/proxy seguro para la clave.

## Git y commits

Se pueden crear commits locales durante el desarrollo. El trabajo se registra mediante commits progresivos al completar unidades lógicas coherentes; no se debe esperar al final para un único commit ni crear commits por cambios triviales.

### Estándar

Se usa Conventional Commits con descripciones en español. Los tipos permitidos se mantienen en inglés:

- `feat:` nueva funcionalidad.
- `fix:` corrección de errores.
- `style:` cambios visuales sin alterar lógica.
- `refactor:` reorganización sin cambiar comportamiento.
- `perf:` rendimiento.
- `docs:` documentación.
- `test:` pruebas.
- `chore:` configuración, dependencias o mantenimiento.

Ejemplo: `feat: agrega navegación entre secciones`.

### Flujo antes de cada commit

1. Ejecutar `git status`.
2. Revisar los cambios relevantes con `git diff`.
3. Confirmar que el staging solo contiene archivos propios de la unidad terminada.
4. Ejecutar las validaciones disponibles (lint, typecheck y tests cuando existan).
5. Corregir errores relacionados antes de crear el commit.
6. Excluir archivos accidentales, temporales, secretos y credenciales.
7. Crear un commit Conventional Commit descriptivo.

Como referencia, las unidades pueden agrupar configuración, navegación, secciones de contenido, mapa/horarios, contacto, responsive, diseño vikingo, SEO, accesibilidad, rendimiento y documentación, cuando cada una esté completa.

### Seguridad Git

Se permiten las operaciones normales de consulta y registro local: `git status`, `git diff`, `git add`, `git commit` y consultas al historial. No ejecutar sin autorización explícita `git push`, `git push --force`, `git reset --hard`, `git rebase`, `git commit --amend` ni operaciones destructivas sobre el historial. Nunca sobrescribir ni eliminar cambios del usuario no relacionados con la tarea.
