# Generador de Números de Modelo para OpenCart 3.x / 4.x
[English](README.md) | [Português (BR)](README.pt-br.md) | [Português (PT)](README.pt-pt.md) | [Español](README.es-es.md) | [Français](README.fr-fr.md) | [Italiano](README.it-it.md)

![Generador de Números de Modelo](./assets/images/social_preview.png)

Documentación oficial de la extensión Generador de Números de Modelo para OpenCart 3.x / 4.x. Genera automáticamente números de modelo de producto estructurados. Disponible en versiones Free y Pro. Licenciado bajo GPL-3.0.

---

## Bienvenido

Aprenda a instalar, configurar y automatizar la estandarización de los números de modelo de sus productos.

* **Autor**: Rodrigo Barbosa (Rodrigoab)
* **Licencia**: Licencia Pública General GNU v3.0 (GPL-3.0)
* **Versiones compatibles de OpenCart**: 3.x / 4.x
* **Página oficial de la extensión**: [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

## Sobre el módulo

### Visión general

Elimine el trabajo manual y repetitivo al crear códigos de identificación.

El módulo garantiza identificadores **únicos y estandarizados** mediante un sistema de plantillas inteligente. Con esta solución, se eliminan los errores humanos y los duplicados, estableciendo una estructura lógica y escalable para un control de inventario total.

#### Requisitos

Asegúrese de tener permisos para:

- Instalador y Gestor de extensiones
- Catálogo de productos

#### Comparación de versiones

| Función | Free | Pro |
|---|:---:|:---:|
| Bloquear campo de Modelo | ❌ | ✅ |
| Plantillas | Solo 1 | Ilimitadas |
| Intervalos numéricos | Solo 1 | Ilimitados |
| Prefijos | ❌ | Ilimitados |
| Sufijos | ❌ | Ilimitados |

[![Descargar](./assets/images/en-gb/download.png)](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

### Características principales

- **Relleno automático inteligente**: El sistema identifica la plantilla predeterminada y rellena automáticamente el campo **Modelo** al abrir un nuevo formulario, ahorrando tiempo y clics.
- **Seguridad y unicidad**: Garantiza una **identidad única** para cada producto, evitando números duplicados, y puede bloquear el campo **Modelo** para la edición manual con el fin de eliminar errores humanos.
- **Procesamiento retroactivo**: Estandarice de forma segura los artículos existentes de su tienda. El módulo genera y aplica de forma segura números de modelo a sus productos actuales.
- **Plantillas dinámicas**: Combine prefijos, intervalos y sufijos para crear reglas distintas por departamento o categoría de producto.
- **Interfaz multilingüe**: Interfaz intuitiva con traducciones nativas disponibles en inglés (EN), portugués (PT), francés (FR), español (ES) e italiano (IT).
- **Escalabilidad total**: Gestione múltiples reglas simultáneamente sin pérdida de rendimiento en grandes bases de datos.

---

### Soporte y licencia

- **Soporte**: Obtenga ayuda a través de la página oficial del marketplace: [Obtener soporte](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
- **Licencia**: Software distribuido bajo los términos de la [Licencia Pública General GNU v3.0 (GPL v3.0)](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Estructura del número de modelo

La generación de códigos es modular y flexible, dividida en tres componentes que garantizan la trazabilidad total y la unicidad.

**Estructura de ejemplo:**

`ABC-XYZ-0001-ASD-QWE`

| Componente | Tipo | Ejemplo |
|---|---|---|
| **Prefijo** | Identificador macro | `ABC-XYZ-` |
| **Secuencial** | Núcleo numérico | `0001` |
| **Sufijo** | Atributos finales | `-ASD-QWE` |

### Prefijos

Identificadores macro que preceden al número secuencial (ej. `ABC-XYZ-`).

- **Modular**: Segmentado en múltiples bloques.
- **Escalable**: Añada tantos bloques como desee.
- **Opcional**: Úselo solo cuando sea necesario.
- **Conexión**: Requiere un separador antes del número.

### Rango numérico

El núcleo secuencial obligatorio (ej. `0001`) que garantiza la unicidad.

- **Relleno**: Relleno de ceros alineado a la izquierda.
- **Variable**: Longitud de dígitos personalizable.
- **Rangos**: Reglas e intervalos específicos por categoría.

### Sufijos

Atributos finales para detallar versiones o estados (ej. `-ASD-QWE`).

- **Modular**: Segmentado en múltiples bloques.
- **Escalable**: Añada tantos bloques como desee.
- **Opcional**: Úselo solo cuando sea necesario.
- **Conexión**: Requiere un separador antes del número.

---

### Atención: Sensibilidad al separador

El sistema procesa cada carácter de forma literal, vinculando el rango numérico a la combinación única de prefijos, sufijos y separadores. **Cualquier cambio —como cambiar un guión (`-`) por una barra (`/`)— define una nueva identidad**, reiniciando automáticamente la secuencia numérica para ese identificador específico.

- **Patrón de referencia**: `ABC-XYZ-0001-ASD-QWE`
- **Patrón diferente**: `ABC/XYZ-0001-ASD-QWE` *(La barra cambia el prefijo; el recuento se reinicia para este nuevo grupo)*

---

### Consejo de estandarización

Para mantener la legibilidad en etiquetas e informes, utilice acrónimos cortos para representar categorías o marcas.

- **Recomendado**: `HW-MEM-DDR4-001` *(Hardware - Memoria - DDR4)*
- **Evitar**: `HARDWARE-MEMORY-DDR4-001`

---

## Instalación

Siga el flujo de trabajo a continuación para aplicar la numeración automática a sus productos:

1. **Descarga**: Obtenga el módulo oficial directamente desde el [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
2. **Subida**: En el panel de administración de su tienda, vaya a **Extensiones > Instalador**, haga clic en **Subir** y seleccione el archivo descargado.
3. **Activación**: Localice el módulo en la lista de extensiones y haga clic en el icono **Instalar** para activarlo.

> **Consejo técnico**: Tras la activación, recuerde ir a **Extensiones > Modificaciones** y hacer clic en el botón **Actualizar** (icono azul) para limpiar la caché del sistema.

---

## Acceso a la configuración

Tras la instalación, siga este flujo de trabajo para configurar su automatización:

1. Vaya a **Extensiones > Extensiones** en el menú lateral.
2. Seleccione el tipo de extensión **Módulos**.
3. Haga clic en **Editar** para abrir el panel de configuración.

---

### 1. Ajustes generales

![Configuración general](./assets/images/en-gb/docs-config-general-tab-en-gb.png)

| Parámetro | Función |
|---|---|
| **Relleno automático** | Genera la plantilla al instante al crear productos. |
| **Prevenir edición** | Bloquea el campo **Modelo** para evitar cambios manuales. |
| **Estado** | Habilita o deshabilita el módulo. |

---

### 2. Prefijo y Sufijo

Estas pestañas le permiten componer los elementos de texto o fecha que rodean al número secuencial.

![Configuración de prefijos y sufijos](./assets/images/en-gb/docs-config-prefix-tab-en-gb.png)

#### Ajustes de grupo

| Parámetro | Función |
|---|---|
| **Nombre** | Identificación interna (ej. Electrónica, Ropa). |
| **Separador** | Carácter que une este grupo al número secuencial. |

#### Composición de elementos

| Parámetro | Descripción |
|---|---|
| **Tipo** | Define si el elemento será **Texto fijo** o una **Fecha dinámica**. |
| **Contenido (Texto)** | El valor textual que se mostrará (ej. `PROD`). |
| **Formato (Fecha)** | El patrón de fecha deseado (ej. año de 2 dígitos + mes). |
| **Separador** | Carácter que une este elemento con el siguiente dentro del mismo grupo. |

> **Consejo**: Puede añadir múltiples elementos para crear prefijos complejos, como `AÑO-CATEGORÍA-`.

---

### 3. Intervalo secuencial

![Configuración del intervalo secuencial](./assets/images/en-gb/docs-config-interval-tab-en-gb.png)

| Parámetro | Descripción |
|---|---|
| **Nombre** | Identificación interna (ej. Conteo general, Lote 2024). |
| **Longitud** | Define el número mínimo de dígitos mediante el relleno con ceros (ej. una longitud de 4 transforma "1" en "0001"). |
| **Mín / Máx** | Define el punto de inicio y el límite final del recuento. |

> **Consejo**: Si trabaja con variaciones (como color o tamaño), utilice la opción **Secuencia compartida** en la pestaña **Plantilla** para mantener una única secuencia en todos los productos.

---

### 4. Plantilla

La Plantilla es donde se "conectan" los ajustes anteriores.

![Configuración de plantilla](./assets/images/en-gb/docs-config-template-tab-en-gb.png)

| Parámetro | Descripción |
|---|---|
| **Nombre** | Identificación interna (ej. Ratón, Teclado, Hojas A4). |
| **Prefijo** | Enlaza al grupo de **Prefijo** configurado. |
| **Secuencia compartida** | Permite que diferentes variaciones del producto compartan la misma secuencia numérica. |
| **Intervalo** | Enlaza a la regla de **Numeración secuencial**. |
| **Sufijo** | Enlaza al grupo de **Sufijo** configurado. |
| **Predeterminado** | Establece la plantilla como principal para el **relleno automático**. |

> **Consejo del flujo de trabajo**: Asegúrese de que los grupos de Prefijo, Intervalo y Sufijo hayan sido creados antes de finalizar este paso.

---

### Secuencia compartida

La opción **Secuencia compartida** permite que diferentes variaciones de un producto (como color, tamaño o versión) compartan la **misma secuencia numérica**, incluso si tienen sufijos distintos.

Cuando está habilitada, el sistema ignora el sufijo al calcular el siguiente número disponible y considera únicamente el **prefijo**.

- **Prefijo**: `CAMISETA-`
- **Número**: `001`
- **Sufijo**: `-BLA` / `-NEG`

#### Comparación de comportamiento

| Modo | Comportamiento | Ejemplo de resultado |
|---|---|---|
| **Deshabilitado** | Cada sufijo tiene su propia secuencia | `CAMISETA-001-BLA`<br>`CAMISETA-002-BLA`<br>`CAMISETA-001-NEG`<br>`CAMISETA-002-NEG` |
| **Habilitado** | Secuencia unificada en todas las variaciones por prefijo | `CAMISETA-001-BLA`<br>`CAMISETA-002-BLA`<br>`CAMISETA-003-NEG`<br>`CAMISETA-004-NEG` |

- **Cuándo usar**: Variaciones de color, variaciones de tamaño y versiones de producto.
- **Importante**: El número debe estar inmediatamente después del prefijo. Diferentes estructuras pueden impedir la identificación correcta de la secuencia.

---

## Generación de números

Siga el flujo de trabajo a continuación para aplicar la numeración automática a sus productos:

![Interfaz de generación de modelos](./assets/images/en-gb/docs-using-en-gb.png)

1. **Navegación**: En el menú lateral, vaya a **Catálogo > Productos**.
2. **Acceso**: Haga clic en **Editar** en el producto o en el botón **Añadir nuevo**.
3. **Ubicación**: Vaya a la pestaña **Datos** y localice el campo **Modelo** en el formulario.
4. **Generar número**: Seleccione la plantilla y haga clic en el botón **Generar**. El campo **Modelo** se rellenará.

> **Consejo de conveniencia**: Al seleccionar una plantilla que no sea la predeterminada y marcar la opción **Establecer como predeterminada**, el sistema guardará automáticamente su elección al generar el número.

---

## Desinstalación

Siga los pasos a continuación para una desinstalación limpia y segura:

1. **Desactivar**: Vaya a **Extensiones > Extensiones**, filtre por **Módulos**, localice el módulo y haga clic en **Desinstalar**.
2. **Desinstalar**: Localice el módulo en la lista de extensiones instaladas y haga clic en el icono **Desinstalar**.
3. **Eliminar**: Aún en la lista de extensiones instaladas, haga clic en **Eliminar**.

> **¿Qué ocurre con los datos?**: La desinstalación elimina la configuración y los archivos del módulo. Sin embargo, los **números de modelo ya generados** para sus productos se mantienen almacenados en la base de datos para evitar la pérdida de integridad en sus registros.

---

## ¿Le gusta el módulo?

Si el módulo le está solucionando el día y optimizando su catálogo, considere invitar al autor a un café. ¡Esto ayuda a mantener el código limpio, el soporte rápido y proporciona la cafeína necesaria para futuras actualizaciones!

[![Invítame a un café](./assets/images/en-us/buy_me_a_coffee.png)](https://www.paypal.com/donate/?hosted_button_id=SPQH2B32XBJUW)

---

## Información de licencia

Esta extensión (versiones Free y Pro) está licenciada bajo la **Licencia Pública General GNU v3.0 (GPL-3.0)**.

- El uso y la modificación del software deben cumplir con los términos establecidos por la licencia GPL-3.0.
- El soporte técnico y las actualizaciones se proporcionan exclusivamente a los compradores originales a través del OpenCart Marketplace oficial.
- Para obtener todos los detalles de la licencia, consulte el [archivo LICENSE](https://github.com/ab-rodrigo/model-number-generator-docs/blob/main/LICENSE) incluido en este repositorio o visite la página oficial de la [Licencia Pública General GNU v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

© 2026 **Rodrigoab** · [OpenCart Extensions](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)