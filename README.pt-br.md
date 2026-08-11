# Model Number Generator for OpenCart 3.x / 4.x

![Versão do OpenCart](https://img.shields.io/badge/OpenCart-4.x-blue?style=for-the-badge&logo=opencart)
![Versão do OpenCart](https://img.shields.io/badge/OpenCart-3.x-blue?style=for-the-badge&logo=opencart)
![Licença](https://img.shields.io/badge/License-GPL--3.0-green?style=for-the-badge)
![Idiomas](https://img.shields.io/badge/Languages-5-orange?style=for-the-badge)

[English](README.md) | [Português (BR)](README.pt-br.md) | [Português (PT)](README.pt-pt.md) | [Español](README.es-es.md) | [Français](README.fr-fr.md) | [Italiano](README.it-it.md)

![Model Number Generator](./assets/images/social_preview.png)

Documentação da extensão Model Number Generator para OpenCart 3.x / 4.x. Gere automaticamente números de modelo estruturados para produtos. Disponível nas versões Free e Pro. Licenciado sob a GPL-3.0.

[![Download](./assets/images/pt-br/download.png)](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)

---

## Sobre o módulo

### Visão geral

Elimine o trabalho manual e repetitivo na criação de códigos de identificação de produtos.

O módulo garante identificadores **únicos e padronizados** por meio de um sistema inteligente de Templates. Com esta solução, você pode reduzir erros humanos e duplicidades, estabelecendo uma estrutura lógica e escalável para um melhor controle do estoque.

#### Requisitos

Certifique-se de ter permissão para acessar:

- Extension Installer & Manager
- Product Catalog

#### Comparação de versões

| Recurso | Free | Pro |
|---|:---:|:---:|
| Bloquear campo Model | ❌ | ✅ |
| Templates | Apenas 1 | Ilimitados |
| Intervalos numéricos | Apenas 1 | Ilimitados |
| Prefixos | ❌ | Ilimitados |
| Sufixos | ❌ | Ilimitados |

---

### Principais recursos

| Recurso | Descrição |
|:---|:---|
| **Preenchimento automático inteligente** | O sistema identifica o template padrão e preenche automaticamente o campo **Model** ao abrir um novo formulário, economizando tempo e cliques. |
| **Segurança e exclusividade** | Garante um **identificador único** para cada produto, evitando números duplicados, e pode bloquear o campo **Model** para impedir alterações manuais e eliminar erros humanos. |
| **Processamento retroativo** | Padronize com segurança os produtos existentes da loja. O módulo gera e aplica números de modelo aos seus produtos atuais. |
| **Templates dinâmicos** | Combine prefixos, intervalos e sufixos para criar regras distintas por departamento ou categoria de produto. |
| **Interface multilíngue** | Interface intuitiva com traduções nativas disponíveis em inglês (EN), português (PT), francês (FR), espanhol (ES) e italiano (IT). |
| **Escalabilidade completa** | Gerencie várias regras simultaneamente sem perda de desempenho em grandes bancos de dados. |

---

## Estrutura do número de modelo

A geração dos códigos é modular e flexível, dividida em três componentes que garantem rastreabilidade e exclusividade completas.

**Exemplo de estrutura:**

`ABC-XYZ-0001-ASD-QWE`

| Componente | Tipo | Exemplo |
|---|---|---|
| **Prefixo** | Identificador macro | `ABC-XYZ-` |
| **Sequencial** | Núcleo numérico | `0001` |
| **Sufixo** | Atributos finais | `-ASD-QWE` |

### Prefixos

Identificadores macro que precedem o número sequencial (por exemplo, `ABC-XYZ-`).

- **Modular**: Dividido em vários blocos.
- **Escalável**: Adicione quantos blocos desejar.
- **Opcional**: Use somente quando necessário.
- **Conexão**: Requer um separador antes do número sequencial.

### Intervalo numérico

O núcleo sequencial obrigatório (por exemplo, `0001`) que garante a exclusividade.

- **Preenchimento com zeros**: Adiciona zeros à esquerda até atingir o comprimento configurado.
- **Variável**: Quantidade de dígitos personalizável.
- **Faixas**: Regras e intervalos específicos por categoria.

### Sufixos

Atributos finais utilizados para detalhar versões ou status (por exemplo, `-ASD-QWE`).

- **Modular**: Dividido em vários blocos.
- **Escalável**: Adicione quantos blocos desejar.
- **Opcional**: Use somente quando necessário.
- **Conexão**: Requer um separador antes do número sequencial.

---

### Atenção: sensibilidade aos separadores

O sistema processa cada caractere literalmente, vinculando o intervalo numérico à combinação exclusiva de prefixos, sufixos e separadores. **Qualquer alteração — como trocar um hífen (`-`) por uma barra (`/`) — define uma nova identidade**, reiniciando automaticamente a sequência numérica para aquele identificador específico.

- **Padrão de referência**: `ABC-XYZ-0001-ASD-QWE`
- **Padrão diferente**: `ABC/XYZ-0001-ASD-QWE` *(A barra altera o prefixo; a contagem reinicia para este novo grupo.)*

---

### Dica de padronização

Para manter a legibilidade em etiquetas e relatórios, use siglas curtas para representar categorias ou marcas.

- **Recomendado**: `HW-MEM-DDR4-001` *(Hardware - Memory - DDR4)*
- **Evite**: `HARDWARE-MEMORY-DDR4-001`

---

## Instalação

Siga o fluxo abaixo para aplicar a numeração automática aos seus produtos:

1. **Download**: Obtenha o módulo oficial diretamente no [OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).
2. **Upload**: No painel administrativo da sua loja, acesse **Extensions > Installer**, clique em **Upload** e selecione o arquivo baixado.
3. **Ativação**: Localize o módulo na lista de extensões e clique no ícone **Install** para ativá-lo.

> **Dica técnica**: Após a ativação, lembre-se de acessar **Extensions > Modifications** e clicar no botão **Refresh** (ícone azul) para limpar o cache do sistema.

---

## Acessando as configurações

Após a instalação, siga este fluxo para configurar a automação:

1. Acesse **Extensions > Extensions** no menu lateral.
2. Selecione o tipo de extensão **Modules**.
3. Clique em **Edit** para abrir o painel de configuração.

---

### 1. Configurações gerais

![Configuração geral](./assets/images/pt-br/docs-config-general-tab-pt-br.png)

| Parâmetro | Função |
|---|---|
| **Preenchimento automático** | Gera o template instantaneamente ao criar produtos. |
| **Impedir edição** | Bloqueia o campo **Model** para impedir alterações manuais. |
| **Status** | Ativa ou desativa o módulo. |

---

### 2. Prefixo e sufixo

Essas abas permitem compor os elementos de texto ou data que ficam ao redor do número sequencial.

![Configuração de prefixos e sufixos](./assets/images/pt-br/docs-config-prefix-tab-pt-br.png)

#### Configurações do grupo

| Parâmetro | Função |
|---|---|
| **Nome** | Identificação interna (por exemplo, Electronics, Apparel). |
| **Separador** | Caractere que conecta este grupo ao número sequencial. |

#### Composição dos elementos

| Parâmetro | Descrição |
|---|---|
| **Tipo** | Define se o elemento será **Fixed Text** ou uma **Dynamic Date**. |
| **Conteúdo (Texto)** | Valor textual a ser exibido (por exemplo, `PROD`). |
| **Formato (Data)** | Formato de data desejado (por exemplo, ano com 2 dígitos + mês). |
| **Separador** | Caractere que conecta este elemento ao próximo dentro do mesmo grupo. |

> **Dica**: Você pode adicionar vários elementos para criar prefixos complexos, como `YEAR-CATEGORY-`.

---

### 3. Intervalo sequencial

![Configuração do intervalo sequencial](./assets/images/pt-br/docs-config-interval-tab-pt-br.png)

| Parâmetro | Descrição |
|---|---|
| **Nome** | Identificação interna (por exemplo, General Count, Batch 2024). |
| **Comprimento** | Define o número mínimo de dígitos por meio do preenchimento com zeros (por exemplo, um comprimento de 4 transforma `1` em `0001`). |
| **Mín. / Máx.** | Define o ponto inicial e o limite final da contagem. |

> **Dica**: Se você trabalha com variações (como cor ou tamanho), use a opção **Shared Sequence** na aba **Template** para manter uma única sequência para todos os produtos.

---

### 4. Template

O Template é onde as configurações anteriores são "unidas".

![Configuração do template](./assets/images/pt-br/docs-config-template-tab-pt-br.png)

| Parâmetro | Descrição |
|---|---|
| **Nome** | Identificação interna (por exemplo, Mouse, Keyboard, A4 Sheets). |
| **Prefixo** | Vincula ao grupo **Prefix** configurado. |
| **Shared Sequence** | Permite que diferentes variações de produto compartilhem a mesma sequência numérica. |
| **Intervalo** | Vincula à regra **Sequential Interval** configurada. |
| **Sufixo** | Vincula ao grupo **Suffix** configurado. |
| **Padrão** | Define o template como principal para o **auto-fill**. |

> **Dica de fluxo de trabalho**: Certifique-se de que os grupos Prefix, Interval e Suffix já tenham sido criados antes de finalizar esta etapa.

---

### Sequência compartilhada

A opção **Shared Sequence** permite que diferentes variações de um produto (como cor, tamanho ou versão) compartilhem a **mesma sequência numérica**, mesmo que possuam sufixos diferentes.

Quando ativada, o sistema ignora o sufixo ao calcular o próximo número disponível e considera apenas o **prefixo**.

- **Prefixo**: `TSHIRT-`
- **Número**: `001`
- **Sufixo**: `-WHT` / `-BLK`

#### Comparação de comportamento

| Modo | Comportamento | Exemplo de resultado |
|---|---|---|
| **Desativado** | Cada sufixo possui sua própria sequência | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-001-BLK`<br>`TSHIRT-002-BLK` |
| **Ativado** | Sequência unificada para todas as variações por prefixo | `TSHIRT-001-WHT`<br>`TSHIRT-002-WHT`<br>`TSHIRT-003-BLK`<br>`TSHIRT-004-BLK` |

- **Quando usar**: Variações de cor, tamanho e versões de produtos.
- **Importante**: O número deve estar imediatamente após o prefixo. Estruturas diferentes podem impedir a identificação correta da sequência.

---

## Gerando números

Siga o fluxo abaixo para aplicar a numeração automática aos seus produtos:

![Interface de geração de números de modelo](./assets/images/pt-br/docs-using-pt-br.png)

1. **Navegação**: No menu lateral, acesse **Catalog > Products**.
2. **Acesso**: Clique em **Edit** no produto ou no botão **Add New**.
3. **Localização**: Acesse a aba **Data** e localize o campo **Model** no formulário.
4. **Gerar número**: Selecione o template e clique no botão **Generate**. O campo **Model** será preenchido.

> **Dica de praticidade**: Ao selecionar um template que não seja o padrão e marcar a opção **Set as default**, o sistema salvará automaticamente sua escolha ao gerar o número.

---

## Desinstalação

Siga os passos abaixo para realizar uma desinstalação limpa e segura:

1. **Desinstalar**: Acesse **Extensions > Extensions**, filtre por **Modules**, localize o módulo e clique em **Uninstall**.
2. **Excluir**: Localize o módulo na lista de extensões instaladas e clique no ícone **Delete**.

> **O que acontece com os dados?**: A desinstalação remove as configurações e os arquivos do módulo. No entanto, os **números de modelo já gerados** para seus produtos permanecem armazenados no banco de dados para evitar a perda de integridade dos seus registros.

---

## Gostando do módulo?

Se o módulo está ajudando a otimizar seu catálogo, considere oferecer um café ao autor. Isso ajuda a manter o desenvolvimento, a manutenção e as futuras atualizações.

[![Buy me a coffee](./assets/images/pt-br/buy_me_a_coffee.png)](https://www.paypal.com/donate/?hosted_button_id=SPQH2B32XBJUW)

---

### Suporte e licença

Obtenha suporte por meio da página oficial do Marketplace: [Obter suporte](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr).

---

## Informações sobre a licença

Esta extensão (versões Free e Pro) é licenciada sob a **GNU General Public License v3.0 (GPL-3.0)**.

- O uso e a modificação do software devem estar de acordo com os termos estabelecidos pela licença GPL-3.0.
- O suporte técnico e as atualizações são fornecidos exclusivamente aos compradores originais por meio do OpenCart Marketplace oficial.
- Para consultar todos os detalhes da licença, consulte o [arquivo LICENSE](https://github.com/ab-rodrigo/model-number-generator-docs/blob/main/LICENSE) incluído neste repositório ou visite a página oficial da [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

---

© 2026 **Rodrigoab** · [OpenCart Extensions](https://www.opencart.com/index.php?route=marketplace/extension&filter_member=Rodrigoabr)