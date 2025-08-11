# Month / Year Date Widget for Odoo 17

[![Odoo Version](https://img.shields.io/badge/Odoo-17.0-purple.svg)](https://www.odoo.com)
[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

Este módulo agrega un widget personalizado que permite seleccionar **únicamente el mes y el año** en campos de tipo `date` o `datetime` dentro de Odoo 17, estableciendo de forma automática el **día en 1**.  
Es ideal para casos donde se necesita registrar períodos, ciclos o fechas de referencia sin importar el día exacto.

---

## ✨ Características
- Compatible con campos `date` y `datetime`.
- Selección simple de **mes y año** mediante `<input type="month">` (HTML5).
- Guarda siempre el **día 1** para la fecha seleccionada.
- Integración nativa con el framework OWL de Odoo 17.
- Fácil de reutilizar en cualquier módulo gracias a su registro como `widget="month_year"`.

---

## 📸 Vista previa

![Vista previa del widget](static/src/img/capture.png)

---

## 📦 Instalación
1. Copiar la carpeta del módulo en `addons/` o en un path válido para Odoo.
2. Actualizar la lista de aplicaciones desde el menú **Apps**.
3. Instalar el módulo **Month/Year Date Widget**.

# 🛠 Uso del widget Month / Year

Este widget se usa en cualquier vista XML de Odoo para campos tipo `date` o `datetime`.

## Ejemplo básico
En una vista de formulario:
```xml
<field name="mi_campo_fecha" widget="month_year"/>
```

# Desarrolladores principales
- Jonás Bonilla <jonas.b0891@gmail.com> — Desarrollo inicial, estructura del módulo y documentación.

## ¿Quieres contribuir?
Las contribuciones son bienvenidas!  
Si quieres participar:
1. Haz un **fork** del repositorio.
2. Crea una rama con tu mejora o corrección:
   ```bash
   git checkout -b mi-mejora
3. Envía un Pull Request describiendo los cambios.

Recuerda seguir las convenciones de código de Odoo y probar que el módulo se instala y funciona correctamente antes de enviar cambios.
