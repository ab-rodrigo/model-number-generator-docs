# Model Number Generator for OpenCart 3.x / 4.x

![OpenCart Version](https://img.shields.io/badge/OpenCart-4.x-blue?style=for-the-badge&logo=opencart)
![OpenCart Version](https://img.shields.io/badge/OpenCart-3.x-blue?style=for-the-badge&logo=opencart)
![License](https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-5-orange?style=for-the-badge)

[English](README.md) | [Português (BR)](README.pt-br.md) | [Português (PT)](README.pt-pt.md) | [Español](README.es-es.md) | [Français](README.fr-fr.md) | [Italiano](README.it-it.md)

![Model Number Generator](./assets/images/social_preview.png)

Official documentation for the Model Number Generator extension for OpenCart 3.x / 4.x. Automatically generate structured product model numbers. Available in Free and Pro versions. GPL-3.0 licensed.

---

## Welcome

Learn how to install, configure, and automate the standardization of your product model numbers.

* **Author**: Rodrigo Barbosa (Rodrigoab)
* **License**: GNU General Public License v3.0 (GPL-3.0)
* **Compatible OpenCart Versions**: 3.x / 4.x
* **Official Extension Page**: [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

## About Module

### Overview

Eliminate manual and repetitive work when creating identification codes.

The module ensures **unique and standardized** identifiers through an intelligent Template system. With this solution, you eradicate human errors and duplicates, establishing a logical and scalable structure for total inventory control.

#### Requirements

Ensure you have permissions for:

- Extension Installer & Manager
- Product Catalog

#### Version Comparison

| Feature | Free | Pro |
|---|:---:|:---:|
| Lock Model field | ❌ | ✅ |
| Templates | Only 1 | Unlimited |
| Number Intervals | Only 1 | Unlimited |
| Prefixes | ❌ | Unlimited |
| Suffixes | ❌ | Unlimited |

[![Download](./assets/images/en-gb/download.png)](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

### Key Features

- **Smart Auto-fill**: The system identifies the default template and automatically fills the **Model** field when opening a new form, saving time and clicks.
- **Security & Uniqueness**: Guarantees a **unique identity** for each product, preventing duplicate numbers, and can lock the **Model** field for manual editing to eliminate human errors.
- **Retroactive Processing**: Standardize existing store items safely. The module safely generates and applies model numbers to your current products.
- **Dynamic Templates**: Combine prefixes, intervals, and suffixes to create distinct rules by department or product category.
- **Multi-language Interface**: Intuitive interface with native translations available in English (EN), Portuguese (PT), French (FR), Spanish (ES), and Italian (IT).
- **Full Scalability**: Manage multiple rules simultaneously without performance loss in large databases.

---

### Support & License

- **Support**: Get help through the official marketplace page: [Get Support](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
- **License**: Software distributed under the terms of the [GNU General Public License v3.0 (GPL v3.0)](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Model Number Structure

The code generation is modular and flexible, divided into three components that ensure full traceability and uniqueness.

**Example structure:**

`ABC-XYZ-0001-ASD-QWE`

| Component | Type | Example |
|---|---|---|
| **Prefix** | Macro Identifier | `ABC-XYZ-` |
| **Sequential** | Numerical Core | `0001` |
| **Suffix** | Final Attributes | `-ASD-QWE` |

### Prefixes

Macro identifiers that precede the sequential number (e.g., `ABC-XYZ-`).

- **Modular**: Segmented into multiple blocks.
- **Scalable**: Add as many blocks as you wish.
- **Optional**: Use only when necessary.
- **Connection**: Requires a separator before the numeral.

### Numerical Range

The mandatory sequential core (e.g., `0001`) that ensures uniqueness.

- **Padding**: Left-aligned zero filling.
- **Variable**: Customizable digit length.
- **Ranges**: Specific rules and intervals per category.

### Suffixes

Final attributes to detail versions or status (e.g., `-ASD-QWE`).

- **Modular**: Segmented into multiple blocks.
- **Scalable**: Add as many blocks as you wish.
- **Optional**: Use only when necessary.
- **Connection**: Requires a separator before the numeral.

---

### Attention: Separator Sensitivity

The system processes each character literally, linking the numerical range to the unique combination of prefixes, suffixes, and separators. **Any change — such as swapping a hyphen (`-`) for a slash (`/`) — defines a new identity**, automatically restarting the numerical sequence for that specific identifier.

- **Reference pattern**: `ABC-XYZ-0001-ASD-QWE`
- **Different pattern**: `ABC/XYZ-0001-ASD-QWE` *(The slash changes the prefix; the count restarts for this new group)*

---

### Standardization Tip

To maintain readability on labels and reports, use short acronyms to represent categories or brands.

- **Recommended**: `HW-MEM-DDR4-001` *(Hardware - Memory - DDR4)*
- **Avoid**: `HARDWARE-MEMORY-DDR4-001`

---

## Installation

Follow the workflow below to apply automatic numbering to your products:

1. **Download**: Get the official module directly from the [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
2. **Upload**: In your store's admin panel, go to **Extensions > Installer**, click **Upload**, and select the downloaded file.
3. **Activation**: Locate the module in the extensions list and click the **Install** icon to activate it.

> **Tech Tip**: After activation, remember to go to **Extensions > Modifications** and click the **Refresh** button (blue icon) to clear the system cache.

---

## Accessing Settings

After installation, follow this workflow to configure your automation:

1. Go to **Extensions > Extensions** in the side menu.
2. Select the **Modules** extension type.
3. Click **Edit** to open the configuration panel.

---

### 1. General Settings

![General Configuration](./assets/images/en-gb/docs-config-general-tab-en-gb.png)

| Parameter | Function |
|---|---|
| **Auto-fill** | Generates the template instantly when creating products. |
| **Prevent Editing** | Locks the **Model** field to prevent manual changes. |
| **Status** | Enables or disables the module. |

---

### 2. Prefix and Suffix

These tabs allow you to compose the text or date elements surrounding the sequential number.

![Prefix and Suffix Configuration](./assets/images/en-gb/docs-config-prefix-tab-en-gb.png)

#### Group Settings

| Parameter | Function |
|---|---|
| **Name** | Internal identification (e.g., Electronics, Apparel). |
| **Separator** | Character that joins this group to the sequential number. |

#### Element Composition

| Parameter | Description |
|---|---|
| **Type** | Defines if the element will be **Fixed Text** or a **Dynamic Date**. |
| **Content (Text)** | The textual value to be displayed (e.g., `PROD`). |
| **Format (Date)** | The desired date pattern (e.g., 2-digit year + month). |
| **Separator** | Character that joins this element to the next one within the same group. |

> **Tip**: You can add multiple elements to create complex prefixes, such as `YEAR-CATEGORY-`.

---

### 3. Sequential Interval

![Sequential Interval Configuration](./assets/images/en-gb/docs-config-interval-tab-en-gb.png)

| Parameter | Description |
|---|---|
| **Name** | Internal identification (e.g., General Count, Batch 2024). |
| **Length** | Defines the minimum number of digits by padding with zeros (e.g., length of 4 transforms "1" into "0001"). |
| **Min / Max** | Defines the starting point and the final count limit. |

> **Tip**: If you work with variations (such as color or size), use the **Shared Sequence** option in the **Template** tab to maintain a single sequence across all products.

---

### 4. Template

The Template is where you "stitch together" the previous settings.

![Template Configuration](./assets/images/en-gb/docs-config-template-tab-en-gb.png)

| Parameter | Description |
|---|---|
| **Name** | Internal identification (e.g., Mouse, Keyboard, A4 Sheets). |
| **Prefix** | Links to the configured **Prefix** group. |
| **Shared Sequence** | Allows different product variations to share the same numerical sequence. |
| **Interval** | Links to the **Sequential Numbering** rule. |
| **Suffix** | Links to the configured **Suffix** group. |
| **Default** | Sets the template as the primary one for **auto-fill**. |

> **Workflow Tip**: Make sure that the Prefix, Interval, and Suffix groups have already been created before finalizing this step.

---

### Shared Sequence

The **Shared Sequence** option allows different variations of a product (such as color, size, or version) to share the **same numerical sequence**, even if they have distinct suffixes.

When enabled, the system ignores the suffix when calculating the next available number and considers only the **prefix**.

- **Prefix**: `TSHIRT-`
- **Number**: `001`
- **Suffix**: `-WHT` / `-BLK`

#### Behavior Comparison

| Mode | Behavior | Result Example |
|---|---|---|
| **Disabled** | Each suffix has its own sequence | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-001-BLK`<br>`TSHIRT-002-BLK` |
| **Enabled** | Unified sequence across all variations by prefix | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-003-BLK`<br>`TSHIRT-004-BLK` |

- **When to use**: Color variations, size variations, and product versions.
- **Important**: The number must be immediately after the prefix. Different structures may prevent correct sequence identification.

---

## Generating Numbers

Follow the workflow below to apply automatic numbering to your products:

![Model Generation Interface](./assets/images/en-gb/docs-using-en-gb.png)

1. **Navigation**: In the side menu, go to **Catalog > Products**.
2. **Access**: Click **Edit** on the product or the **Add New** button.
3. **Location**: Go to the **Data** tab and locate the **Model** field in the form.
4. **Generate Number**: Select the template and click the **Generate** button. The **Model** field will be filled.

> **Convenience Tip**: When selecting a non-default template and checking the **Set as default** option, the system will automatically save your choice upon generating the number.

---

## Uninstallation

Follow the steps below for a clean and safe uninstallation:

1. **Deactivate**: Go to **Extensions > Extensions**, filter by **Modules**, locate the module, and click **Uninstall**.
2. **Uninstall**: Locate the module in the list of installed extensions and click the **Uninstall** icon.
3. **Delete**: Still in the installed extensions list, click **Delete**.

> **What happens to the data?**: Uninstallation removes the module settings and files. However, the **model numbers already generated** for your products remain stored in the database to prevent loss of integrity in your records.

---

## Enjoying the module?

If the module is saving your day and optimizing your catalog, consider buying the author a coffee. This helps keep the code clean, the support fast, and provides the caffeine needed for future updates!

[![Buy me a coffee](./assets/images/en-us/buy_me_a_coffee.png)](https://www.paypal.com/donate/?hosted_button_id=SPQH2B32XBJUW)

---

## License Information

This extension (Free and Pro versions) is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

- Use and modification of the software must comply with the terms established by the GPL-3.0 license.
- Technical support and updates are provided exclusively to original purchasers through the official OpenCart Marketplace.
- For complete license details, please refer to the [LICENSE file]( https://github.com/ab-rodrigo/model-number-generator-docs/blob/main/LICENSE) included in this repository or visit the official page of the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

© 2026 **Rodrigoab** · [OpenCart Extensions](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)