# Générateur de Numéros de Modèle pour OpenCart 3.x / 4.x

![OpenCart Version](https://img.shields.io/badge/OpenCart-4.x-blue?style=for-the-badge&logo=opencart)
![OpenCart Version](https://img.shields.io/badge/OpenCart-3.x-blue?style=for-the-badge&logo=opencart)
![License](https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-5-orange?style=for-the-badge)

[English](README.md) | [Português (BR)](README.pt-br.md) | [Português (PT)](README.pt-pt.md) | [Español](README.es-es.md) | [Français](README.fr-fr.md) | [Italiano](README.it-it.md)

![Générateur de Numéros de Modèle](./assets/images/social_preview.png)

Documentation officielle de l'extension Générateur de Numéros de Modèle pour OpenCart 3.x / 4.x. Générez automatiquement des numéros de modèle de produit structurés. Disponible en versions Free et Pro. Sous licence GPL-3.0.

---

## Bienvenue

Apprenez à installer, configurer et automatiser la standardisation de vos numéros de modèle de produit.

* **Auteur** : Rodrigo Barbosa (Rodrigoab)
* **Licence** : GNU General Public License v3.0 (GPL-3.0)
* **Versions OpenCart compatibles** : 3.x / 4.x
* **Page officielle de l'extension** : [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

## À propos du module

### Aperçu

Éliminez le travail manuel et répétitif lors de la création de codes d'identification.

Le module garantit des identifiants **uniques et standardisés** grâce à un système de modèles intelligent. Avec cette solution, vous éradiquez les erreurs humaines et les doublons, en établissant une structure logique et évolutive pour un contrôle total des stocks.

#### Exigences

Assurez-vous d'avoir les autorisations pour :

- Installateur et Gestionnaire d'extensions
- Catalogue de produits

#### Comparaison des versions

| Fonctionnalité | Free | Pro |
|---|:---:|:---:|
| Verrouiller le champ Modèle | ❌ | ✅ |
| Modèles | 1 seul | Illimités |
| Intervalles numériques | 1 seul | Illimités |
| Préfixes | ❌ | Illimités |
| Suffixes | ❌ | Illimités |

[![Télécharger](./assets/images/en-gb/download.png)](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

### Fonctionnalités clés

- **Saisie automatique intelligente** : Le système identifie le modèle par défaut et remplit automatiquement le champ **Modèle** lors de l'ouverture d'un nouveau formulaire, ce qui permet de gagner du temps et d'économiser des clics.
- **Sécurité et unicité** : Garantit une **identité unique** pour chaque produit, évitant les numéros en double, et peut verrouiller le champ **Modèle** contre la modification manuelle afin d'éliminer les erreurs humaines.
- **Traitement rétroactif** : Standardisez en toute sécurité los articles existants de votre boutique. Le module génère et applique en toute sécurité des numéros de modèle à vos produits actuels.
- **Modèles dynamiques** : Combinez préfixes, intervalles et suffixes pour créer des règles distinctes par rayon ou catégorie de produits.
- **Interface multilingue** : Interface intuitive avec des traductions natives disponibles en anglais (EN), portugais (PT), français (FR), espagnol (ES) et italien (IT).
- **Évolutivité totale** : Gérez plusieurs règles simultanément sans perte de performance sur les grandes bases de données.

---

### Support et licence

- **Support** : Obtenez de l'aide via la page officielle du marketplace : [Obtenir du support](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
- **Licence** : Logiciel distribué selon les termes de la [GNU General Public License v3.0 (GPL v3.0)](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Structure du numéro de modèle

La génération de code est modulaire et flexible, divisée en trois composants qui garantissent une traçabilité totale et l'unicité.

**Exemple de structure :**

`ABC-XYZ-0001-ASD-QWE`

| Composant | Type | Exemple |
|---|---|---|
| **Préfixe** | Macro-identifiant | `ABC-XYZ-` |
| **Séquentiel** | Cœur numérique | `0001` |
| **Suffixe** | Attributs finaux | `-ASD-QWE` |

### Préfixes

Macro-identifiants qui précèdent le numéro séquentiel (ex. `ABC-XYZ-`).

- **Modulaire** : Segmenté en plusieurs blocs.
- **Évolutif** : Ajoutez autant de blocs que vous le souhaitez.
- **Optionnel** : À utiliser uniquement si nécessaire.
- **Connexion** : Nécessite un séparateur avant le chiffre.

### Plage numérique

Le cœur séquentiel obligatoire (ex. `0001`) qui garantit l'unicité.

- **Remplissage** : Remplissage par des zéros alignés à gauche.
- **Variable** : Longueur de chiffres personnalisable.
- **Plages** : Règles et intervalles spécifiques par catégorie.

### Suffixes

Attributs finaux pour détailler les versions ou le statut (ex. `-ASD-QWE`).

- **Modulaire** : Segmenté en plusieurs blocs.
- **Évolutif** : Ajoutez autant de blocs que vous le souhaitez.
- **Optionnel** : À utiliser uniquement si nécessaire.
- **Connexion** : Nécessite un séparateur avant le chiffre.

---

### Attention : Sensibilité au séparateur

Le système traite chaque caractère littéralement, liant la plage numérique à la combinaison unique de préfixes, suffixes et séparateurs. **Tout changement — comme le remplacement d'un tiret (`-`) par una barre oblique (`/`) — définit une nouvelle identité**, redémarrant automatiquement la séquence numérique pour cet identifiant spécifique.

- **Modèle de référence** : `ABC-XYZ-0001-ASD-QWE`
- **Modèle différent** : `ABC/XYZ-0001-ASD-QWE` *(La barre oblique modifie le préfixe ; le décompte redémarre pour ce nouveau groupe)*

---

### Conseil de standardisation

Pour maintenir la lisibilité sur les étiquettes et les rapports, utilisez des acronymes courts pour représenter les catégories ou les marques.

- **Recommandé** : `HW-MEM-DDR4-001` *(Hardware - Mémoire - DDR4)*
- **À éviter** : `HARDWARE-MEMORY-DDR4-001`

---

## Installation

Suivez le flux de travail ci-dessous pour appliquer la numérotation automatique à vos produits :

1. **Téléchargement** : Obtenez le module officiel directement depuis l'[OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
2. **Transfert** : Dans le panneau d'administration de votre boutique, allez dans **Extensions > Installateur**, cliquez sur **Transférer**, et sélectionnez le fichier téléchargé.
3. **Activation** : Localisez le module dans la liste des extensions et cliquez sur l'icône **Installer** pour l'activer.

> **Conseil technique** : Après l'activation, n'oubliez pas d'aller dans **Extensions > Modifications** et de cliquer sur le bouton **Actualiser** (icône bleue) pour vider le cache du système.

---

## Accès aux paramètres

Après l'installation, suivez ce flux de travail pour configurer votre automatisation :

1. Allez dans **Extensions > Extensions** dans le menu latéral.
2. Sélectionnez le type d'extension **Modules**.
3. Cliquez sur **Éditer** pour ouvrir le panneau de configuration.

---

### 1. Paramètres généraux

![Configuration générale](./assets/images/en-gb/docs-config-general-tab-en-gb.png)

| Paramètre | Fonction |
|---|---|
| **Saisie automatique** | Génère le modèle instantanément lors de la création de produits. |
| **Empêcher la modification** | Verrouille le champ **Modèle** pour éviter les modifications manuelles. |
| **Statut** | Active ou désactive le module. |

---

### 2. Préfixe et Suffixe

Ces onglets vous permettent de composer les éléments de texte ou de date entourant le numéro séquentiel.

![Configuration des préfixes et suffixes](./assets/images/en-gb/docs-config-prefix-tab-en-gb.png)

#### Paramètres de groupe

| Paramètre | Fonction |
|---|---|
| **Nom** | Identification interne (ex. Électronique, Vêtements). |
| **Séparateur** | Caractère qui relie ce groupe au numéro séquentiel. |

#### Composition des éléments

| Paramètre | Description |
|---|---|
| **Type** | Définit si l'élément sera un **Texte fixe** ou une **Date dynamique**. |
| **Contenu (Texte)** | La valeur textuelle à afficher (ex. `PROD`). |
| **Format (Date)** | Le format de date souhaité (ex. année à 2 chiffres + mois). |
| **Séparateur** | Caractère qui relie cet élément au suivant au sein du même groupe. |

> **Conseil** : Vous pouvez ajouter plusieurs éléments pour créer des préfixes complexes, comme `ANNÉE-CATÉGORIE-`.

---

### 3. Intervalle séquentiel

![Configuration de l'intervalle séquentiel](./assets/images/en-gb/docs-config-interval-tab-en-gb.png)

| Paramètre | Description |
|---|---|
| **Nom** | Identification interne (ex. Décompte général, Lot 2024). |
| **Longueur** | Définit le nombre minimum de chiffres en complétant avec des zéros (ex. une longueur de 4 transforme "1" en "0001"). |
| **Min / Max** | Définit le point de départ et la limite finale du décompte. |

> **Conseil** : Si vous travaillez avec des variations (telles que la couleur ou la taille), utilisez l'option **Séquence partagée** dans l'onglet **Modèle** pour maintenir une séquence unique pour tous les produits.

---

### 4. Modèle

Le Modèle est l'endroit où vous "assemblez" les paramètres précédents.

![Configuration du modèle](./assets/images/en-gb/docs-config-template-tab-en-gb.png)

| Paramètre | Description |
|---|---|
| **Nom** | Identification interne (ex. Souris, Clavier, Feuilles A4). |
| **Préfixe** | Relie au groupe de **Préfixe** configuré. |
| **Séquence partagée** | Permet à différentes variations de produits de partager la même séquence numérique. |
| **Intervalle** | Relie à la règle de **Numérotation séquentielle**. |
| **Suffixe** | Relie au groupe de **Suffixe** configuré. |
| **Par défaut** | Définit le modèle comme principal pour la **saisie automatique**. |

> **Conseil sur le flux de travail** : Assurez-vous que les groupes Préfixe, Intervalle et Suffixe ont déjà été créés avant de finaliser cette étape.

---

### Séquence partagée

L'option **Séquence partagée** permet à différentes variations d'un produit (telles que la couleur, la taille ou la version) de partager la **même séquence numérique**, même si elles ont des suffixes distincts.

Lorsqu'elle est activée, le système ignore le suffixe lors du calcul du prochain numéro disponible et ne prend en compte que le **préfixe**.

- **Préfixe** : `TSHIRT-`
- **Numéro** : `001`
- **Suffixe** : `-WHT` / `-BLK`

#### Comparaison du comportement

| Mode | Comportement | Exemple de résultat |
|---|---|---|
| **Désactivé** | Chaque suffixe a sa propre séquence | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-001-BLK`<br>`TSHIRT-002-BLK` |
| **Activé** | Séquence unifiée pour toutes les variations par préfixe | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-003-BLK`<br>`TSHIRT-004-BLK` |

- **Quand l'utiliser** : Variations de couleur, variations de taille et versions de produits.
- **Important** : Le numéro doit se trouver immédiatement après le préfixe. Des structures différentes peuvent empêcher l'identification correcte de la séquence.

---

## Génération de numéros

Suivez le flux de travail ci-dessous pour appliquer la numérotation automatique à vos produits :

![Interface de génération de modèles](./assets/images/en-gb/docs-using-en-gb.png)

1. **Navigation** : Dans le menu latéral, allez dans **Catalogue > Produits**.
2. **Accès** : Cliquez sur **Éditer** sur le produit ou sur le bouton **Ajouter**.
3. **Emplacement** : Allez dans l'onglet **Données** et localisez le champ **Modèle** dans le formulaire.
4. **Générer le numéro** : Sélectionnez le modèle et cliquez sur le bouton **Générer**. Le champ **Modèle** sera rempli.

> **Conseil de commodité** : Lors de la sélection d'un modèle non défini par défaut e en cochant l'option **Définir par défaut**, le système enregistrera automatiquement votre choix lors de la génération du numéro.

---

## Désinstallation

Suivez les étapes ci-dessous pour une désinstallation propre et sécurisée :

1. **Désactiver** : Allez dans **Extensions > Extensions**, filtrez par **Modules**, localisez le module et cliquez sur **Désinstaller**.
2. **Désinstaller** : Localisez le module dans la liste des extensions installées et cliquez sur l'icône **Désinstaller**.
3. **Supprimer** : Toujours dans la liste des extensions installées, cliquez sur **Supprimer**.

> **Qu'advient-il des données ?** : La désinstallation supprime les paramètres et les fichiers du module. Cependant, les **numéros de modèle déjà générés** pour vos produits restent stockés dans la base de données afin d'éviter toute perte d'intégrité de vos enregistrements.

---

## Vous appréciez le module ?

Si le module vous simplifie la vie et optimise votre catalogue, envisagez d'offrir un café à l'auteur. Cela permet de maintenir un code propre, un support rapide et fournit la caféine nécessaire pour les futures mises à jour !

[![Offrir un café](./assets/images/en-us/buy_me_a_coffee.png)](https://www.paypal.com/donate/?hosted_button_id=SPQH2B32XBJUW)

---

## Informations sur la licence

Cette extension (versions Free et Pro) est sous licence **GNU General Public License v3.0 (GPL-3.0)**.

- L'utilisation et la modification du logiciel doivent être conformes aux conditions établies par la licence GPL-3.0.
- Le support technique et les mises à jour sont fournis exclusivement aux acheteurs d'origine via l'OpenCart Marketplace officiel.
- Pour obtenir tous les détails de la licence, veuillez consulter le [fichier LICENSE](https://github.com/ab-rodrigo/model-number-generator-docs/blob/main/LICENSE) inclus dans ce dépôt ou visiter la page officielle de la [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

© 2026 **Rodrigoab** · [OpenCart Extensions](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)