# Generatore di Numeri di Modello per OpenCart 3.x / 4.x

![OpenCart Version](https://img.shields.io/badge/OpenCart-4.x-blue?style=for-the-badge&logo=opencart)
![OpenCart Version](https://img.shields.io/badge/OpenCart-3.x-blue?style=for-the-badge&logo=opencart)
![License](https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-5-orange?style=for-the-badge)

[English](README.md) | [Português (BR)](README.pt-br.md) | [Português (PT)](README.pt-pt.md) | [Español](README.es-es.md) | [Français](README.fr-fr.md) | [Italiano](README.it-it.md)

![Generatore di Numeri di Modello](./assets/images/social_preview.png)

Documentazione ufficiale dell'estensione Generatore di Numeri di Modello per OpenCart 3.x / 4.x. Genera automaticamente numeri di modello di prodotto strutturati. Disponibile nelle versioni Free e Pro. Con licenza GPL-3.0.

---

## Benvenuti

Scopri come installare, configurare e automatizzare la standardizzazione dei numeri di modello dei tuoi prodotti.

* **Autore**: Rodrigo Barbosa (Rodrigoab)
* **Licenza**: GNU General Public License v3.0 (GPL-3.0)
* **Versioni OpenCart compatibili**: 3.x / 4.x
* **Pagina ufficiale dell'estensione**: [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

## Informazioni sul modulo

### Panoramica

Elimina il lavoro manuale e ripetitivo nella creazione dei codici di identificazione.

Il modulo garantisce identificatori **unici e standardizzati** attraverso un sistema di modelli intelligente. Con questa soluzione, elimini gli errori umani e i duplicati, stabilendo una struttura logica e scalabile per un controllo totale dell'inventario.

#### Requisiti

Assicurati di disporre dei permessi per:

- Installatore e Gestione estensioni
- Catalogo prodotti

#### Confronto tra le versioni

| Funzionalità | Free | Pro |
|---|:---:|:---:|
| Blocca campo Modello | ❌ | ✅ |
| Modelli | Solo 1 | Illimitati |
| Intervalli numerici | Solo 1 | Illimitati |
| Prefissi | ❌ | Illimitati |
| Suffissi | ❌ | Illimitati |

[![Scarica](./assets/images/en-gb/download.png)](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

### Caratteristiche principali

- **Compilazione automatica intelligente**: Il sistema individua il modello predefinito e compila automaticamente il campo **Modello** all'apertura di un nuovo modulo, risparmiando tempo e clic.
- **Sicurezza e unicità**: Garantisce un'**identità unica** per ciascun prodotto, evitando numeri duplicati, e può bloccare il campo **Modello** per la modifica manuale al fine di eliminare gli errori umani.
- **Elaborazione retroattiva**: Standardizza in modo sicuro gli articoli esistenti nel tuo negozio. Il modulo genera e applica in modo sicuro i numeri di modello ai tuoi prodotti attuali.
- **Modelli dinamici**: Combina prefissi, intervalli e suffissi per creare regole distinte per reparto o categoria di prodotto.
- **Interfaccia multilingue**: Interfaccia intuitiva con traduzioni native disponibili in inglese (EN), portoghese (PT), francese (FR), spagnolo (ES) e italiano (IT).
- **Scalabilità totale**: Gestisci più regole contemporaneamente senza perdite di prestazioni su grandi database.

---

### Supporto e licenza

- **Supporto**: Ottieni assistenza tramite la pagina ufficiale del marketplace: [Ricevi supporto](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
- **Licenza**: Software distribuito secondo i termini della [GNU General Public License v3.0 (GPL v3.0)](https://www.gnu.org/licenses/gpl-3.0.html).

---

## Struttura del numero di modello

La generazione del codice è modulare e flessibile, divisa in tre componenti che garantiscono la piena tracciabilità e l'unicità.

**Esempio di struttura:**

`ABC-XYZ-0001-ASD-QWE`

| Componente | Tipo | Esempio |
|---|---|---|
| **Prefisso** | Identificatore macro | `ABC-XYZ-` |
| **Sequenziale** | Nucleo numerico | `0001` |
| **Suffisso** | Attributi finali | `-ASD-QWE` |

### Prefissi

Identificatori macro che precedono il numero sequenziale (es. `ABC-XYZ-`).

- **Modulare**: Segmentato in più blocchi.
- **Scalabile**: Aggiungi tutti i blocchi che desideri.
- **Opzionale**: Da utilizzare solo se necessario.
- **Connessione**: Richiede un separatore prima della cifra.

### Intervallo numerico

Il nucleo sequenziale obbligatorio (es. `0001`) che garantisce l'unicità.

- **Riempimento**: Riempimento con zeri allineato a sinistra.
- **Variabile**: Lunghezza delle cifre personalizzabile.
- **Intervalli**: Regole e intervalli specifici per categoria.

### Suffissi

Attributi finali per dettagliare versioni o stato (es. `-ASD-QWE`).

- **Modulare**: Segmentato in più blocchi.
- **Scalabile**: Aggiungi tutti i blocchi che desideri.
- **Opzionale**: Da utilizzare solo se necessario.
- **Connessione**: Richiede un separatore prima della cifra.

---

### Attenzione: Sensibilità al separatore

Il sistema elabora ogni carattere letteralmente, collegando l'intervallo numerico alla combinazione unica di prefissi, suffissi e separatori. **Qualsiasi modifica — come sostituire un trattino (`-`) con una barra (`/`) — definisce una nuova identità**, riavviando automaticamente la sequenza numerica per quel determinato identificatore.

- **Modello di riferimento**: `ABC-XYZ-0001-ASD-QWE`
- **Modello differente**: `ABC/XYZ-0001-ASD-QWE` *(La barra modifica il prefisso; il conteggio si riavvia per questo nuovo gruppo)*

---

### Consiglio per la standardizzazione

Per mantenere la leggibilità su etichette e report, utilizza brevi acronimi per rappresentare categorie o marchi.

- **Consigliato**: `HW-MEM-DDR4-001` *(Hardware - Memoria - DDR4)*
- **Da evitare**: `HARDWARE-MEMORY-DDR4-001`

---

## Installazione

Segui il flusso di lavoro sottostante per applicare la numerazione automatica ai tuoi prodotti:

1. **Download**: Ottieni il modulo ufficiale direttamente dall'[OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
2. **Caricamento**: Nel pannello di amministrazione del negozio, vai su **Estensioni > Installatore**, fai clic su **Carica** e seleziona il file scaricato.
3. **Attivazione**: Individua il modulo nell'elenco delle estensioni e fai clic sull'icona **Installa** per attivarlo.

> **Consiglio tecnico**: Dopo l'attivazione, ricordati di andare su **Estensioni > Modifiche** e fare clic sul pulsante **Aggiorna** (icona blu) per cancellare la cache di sistema.

---

## Accesso alle impostazioni

Dopo l'installazione, segui questo flusso di lavoro per configurare l'automazione:

1. Vai su **Estensioni > Estensioni** nel menu laterale.
2. Seleziona il tipo di estensione **Moduli**.
3. Fai clic su **Modifica** per aprire il pannello di configurazione.

---

### 1. Impostazioni generali

![Configurazione generale](./assets/images/en-gb/docs-config-general-tab-en-gb.png)

| Parametro | Funzione |
|---|---|
| **Compilazione automatica** | Genera il modello all'istante durante la creazione dei prodotti. |
| **Impedisci modifica** | Blocca il campo **Modello** per evitare modifiche manuali. |
| **Stato** | Abilita o disabilita il modulo. |

---

### 2. Prefisso e Suffisso

Queste schede consentono di comporre gli elementi di testo o data che circondano il numero sequenziale.

![Configurazione di prefisso e suffisso](./assets/images/en-gb/docs-config-prefix-tab-en-gb.png)

#### Impostazioni del gruppo

| Parametro | Funzione |
|---|---|
| **Nome** | Identificazione interna (es. Elettronica, Abbigliamento). |
| **Separatore** | Carattere che unisce questo gruppo al numero sequenziale. |

#### Composizione degli elementi

| Parametro | Descrizione |
|---|---|
| **Tipo** | Definisce se l'elemento sarà **Testo fisso** o una **Data dinamica**. |
| **Contenuto (Testo)** | Il valore testuale da visualizzare (es. `PROD`). |
| **Formato (Data)** | Il formato data desiderato (es. anno a 2 cifre + mese). |
| **Separatore** | Carattere che unisce questo elemento a quello successivo nello stesso gruppo. |

> **Consiglio**: È possibile aggiungere più elementi per creare prefissi complessi, come `ANNO-CATEGORIA-`.

---

### 3. Intervallo sequenziale

![Configurazione dell'intervallo sequenziale](./assets/images/en-gb/docs-config-interval-tab-en-gb.png)

| Parametro | Descrizione |
|---|---|
| **Nome** | Identificazione interna (es. Conteggio generale, Lotto 2024). |
| **Lunghezza** | Definisce il numero minimo di cifre riempiendo con zeri (es. una lunghezza di 4 trasforma "1" in "0001"). |
| **Min / Max** | Definisce il punto di partenza e il limite finale del conteggio. |

> **Consiglio**: Se lavori con varianti (come colore o taglia), utilizza l'opzione **Sequenza condivisa** nella scheda **Modello** per mantenere un'unica sequenza per tutti i prodotti.

---

### 4. Modello

Il Modello è il punto in cui vengono "assemblate" le impostazioni precedenti.

![Configurazione del modello](./assets/images/en-gb/docs-config-template-tab-en-gb.png)

| Parametro | Descrizione |
|---|---|
| **Nome** | Identificazione interna (es. Mouse, Tastiera, Fogli A4). |
| **Prefisso** | Si collega al gruppo **Prefisso** configurato. |
| **Sequenza condivisa** | Consente a diverse varianti di prodotto di condividere la stessa sequenza numerica. |
| **Intervallo** | Si collega alla regola di **Numerazione sequenziale**. |
| **Suffisso** | Si collega al gruppo **Suffisso** configurato. |
| **Predefinito** | Imposta il modello come principale per la **compilazione automatica**. |

> **Consiglio per il flusso di lavoro**: Assicurati che i gruppi Prefisso, Intervallo e Suffisso siano già stati creati prima di completare questo passaggio.

---

### Sequenza condivisa

L'opzione **Sequenza condivisa** consente a diverse varianti di un prodotto (come colore, taglia o versione) di condividere la **stessa sequenza numerica**, anche se presentano suffissi distinti.

Quando è abilitata, il sistema ignora il suffisso durante il calcolo del numero successivo disponibile e considera unicamente il **prefisso**.

- **Prefisso**: `TSHIRT-`
- **Numero**: `001`
- **Suffisso**: `-WHT` / `-BLK`

#### Confronto del comportamento

| Modalità | Comportamento | Esempio di risultato |
|---|---|---|
| **Disabilitata** | Ogni suffisso ha la propria sequenza | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-001-BLK`<br>`TSHIRT-002-BLK` |
| **Abilitata** | Sequenza unificata per tutte le varianti in base al prefisso | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-003-BLK`<br>`TSHIRT-004-BLK` |

- **Quando utilizzarla**: Varianti di colore, varianti di taglia e versioni di prodotto.
- **Importante**: Il numero deve trovarsi immediatamente dopo il prefisso. Strutture diverse potrebbero impedire la corretta identificazione della sequenza.

---

## Generazione dei numeri

Segui il flusso di lavoro sottostante per applicare la numerazione automatica ai tuoi prodotti:

![Interfaccia di generazione dei modelli](./assets/images/en-gb/docs-using-en-gb.png)

1. **Navigazione**: Nel menu laterale, vai su **Catalogo > Prodotti**.
2. **Accesso**: Fai clic su **Modifica** sul prodotto o sul pulsante **Aggiungi nuovo**.
3. **Posizione**: Vai alla scheda **Dati** e individua il campo **Modello** nel modulo.
4. **Genera numero**: Seleziona il modello e fai clic sul pulsante **Genera**. Il campo **Modello** verrà compilato.

> **Consiglio pratico**: Quando selezioni un modello non predefinito e spunti l'opzione **Imposta come predefinito**, il sistema salverà automaticamente la tua scelta al momento della generazione del numero.

---

## Disinstallazione

Segui i passaggi sottostanti per una disinstallazione pulita e sicura:

1. **Disattivare**: Vai su **Estensioni > Estensioni**, filtra per **Moduli**, individua il modulo e fai clic su **Disinstalla**.
2. **Disinstallare**: Individua il modulo nell'elenco delle estensioni installate e fai clic sull'icona **Disinstalla**.
3. **Eliminare**: Sempre nell'elenco delle estensioni installate, fai clic su **Elimina**.

> **Cosa succede ai dati?**: La disinstallazione rimuove le impostazioni e i file del modulo. Tuttavia, i **numeri di modello già generati** per i tuoi prodotti rimangono memorizzati nel database per evitare la perdita di integrità dei tuoi record.

---

## Ti piace il modulo?

Se il modulo ti sta salvando la giornata e ottimizzando il tuo catalogo, prendi in considerazione l'idea di offrire un caffè all'autore. Questo aiuta a mantenere il codice pulito, il supporto rapido e fornisce la caffeina necessaria per i futuri aggiornamenti!

[![Offrimi un caffè](./assets/images/en-us/buy_me_a_coffee.png)](https://www.paypal.com/donate/?hosted_button_id=SPQH2B32XBJUW)

---

## Informazioni sulla licenza

Questa estensione (versioni Free e Pro) è distribuita con licenza **GNU General Public License v3.0 (GPL-3.0)**.

- L'uso e la modifica del software devono essere conformi ai termini stabiliti dalla licenza GPL-3.0.
- Il supporto tecnico e gli aggiornamenti sono forniti esclusivamente agli acquirenti originali tramite l'OpenCart Marketplace ufficiale.
- Per tutti i dettagli sulla licenza, consultare il [file LICENSE](https://github.com/ab-rodrigo/model-number-generator-docs/blob/main/LICENSE) incluso in questo repository o visitare la pagina ufficiale della [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

© 2026 **Rodrigoab** · [OpenCart Extensions](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)