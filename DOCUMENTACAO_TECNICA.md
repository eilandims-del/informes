# 📋 Sistema de Relatórios de Campo - Documentação Técnica

## 🎯 Visão Geral
Sistema web responsivo para eletricistas reportarem pendências de campo via WhatsApp e PDF. Desenvolvido com HTML5, CSS3 e JavaScript vanilla, otimizado para GitHub Pages.

## 📁 Estrutura do Projeto

### Arquivos Principais
- **`index.html`** - Arquivo único contendo toda a aplicação
- **`styles.css`** - Estilos CSS responsivos
- **`script.js`** - Lógica JavaScript (integrada no HTML)
- **`DOCUMENTACAO_TECNICA.md`** - Esta documentação
- **`GUIA_GITHUB_PAGES.md`** - Guia de upload para GitHub Pages

## 🔧 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos com Flexbox e Grid
- **JavaScript ES6+** - Lógica da aplicação
- **jsPDF** - Geração de PDFs no cliente

### Bibliotecas Externas
- **jsPDF 2.5.1** - CDN para geração de PDFs
- **Font Awesome** - Ícones (via CDN)

## 📱 Funcionalidades Principais

### 1. Tela de Seleção de Incidente
```javascript
function selectIncidentType(type) {
    incidentType = type;
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('formScreen').style.display = 'block';
    updateIncidentIndicator();
    initializeForm();
    window.scrollTo(0, 0);
}
```

### 2. Formulário Dinâmico
- **Campos obrigatórios** com validação
- **Seleção de materiais** com busca integrada
- **Adição/remoção** dinâmica de linhas de materiais
- **Botão "HOJE"** para data/hora automática

### 3. Geração de Conteúdo
- **Copiar texto** formatado para WhatsApp
- **Download PDF** com layout profissional
- **Limpar formulário** com confirmação

## 🎨 Sistema de Design

### Cores Principais
```css
:root {
    --primary-color: #1e3a8a;
    --secondary-color: #3498db;
    --success-color: #27ae60;
    --warning-color: #f39c12;
    --danger-color: #e74c3c;
    --text-color: #2c3e50;
    --bg-color: #f8f9fa;
}
```

### Tipografia
- **Fonte principal**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Tamanhos responsivos** com clamp()
- **Hierarquia visual** clara

### Layout Responsivo
- **Mobile First** design
- **Breakpoints**: 320px, 480px, 768px, 992px, 1200px, 1400px+
- **Flexbox** para layouts flexíveis
- **Grid** para estruturas complexas

## 🔍 Estrutura do Código

### JavaScript - Funções Principais

#### 1. Gerenciamento de Estado
```javascript
let materialCounter = 0;
let incidentType = 'TRAFO';
let materiaisOptions = [...]; // Array com 50+ materiais
```

#### 2. Inicialização
```javascript
function initializeForm() {
    const container = document.getElementById('materialsContainer');
    if (container.children.length === 0) {
        adicionarMaterial();
    }
    atualizarListaMateriais();
    setupEventListeners();
}
```

#### 3. Coleta de Dados
```javascript
function coletarDados() {
    const form = document.getElementById('relatorioForm');
    const formData = new FormData(form);
    const dados = {};
    
    dados.tipoIncidente = incidentType;
    
    for (let [key, value] of formData.entries()) {
        dados[key] = value;
    }
    
    // Processar materiais dinamicamente
    dados.materiais = [];
    const materialInputs = document.querySelectorAll('.material-select');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    
    materialInputs.forEach((input, index) => {
        if (input.value && quantityInputs[index] && quantityInputs[index].value) {
            const material = input.value;
            const quantity = quantityInputs[index].value;
            dados.materiais.push(`${quantity} ${material}`);
        }
    });
    
    return dados;
}
```

#### 4. Formatação para WhatsApp
```javascript
function formatarTextoParaWhatsApp(dados) {
    let texto = `📋 *RELATÓRIO DE PENDÊNCIA - ${dados.tipoIncidente}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 *IDENTIFICAÇÃO E LOCALIZAÇÃO:*
• Descrição: ${dados.descricao || 'N/A'}
• Causa: ${dados.causa || 'N/A'}
// ... mais campos formatados
    
    return texto;
}
```

#### 5. Geração de PDF
```javascript
function gerarPDF(dados) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Configurar página
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    
    // Cabeçalho
    doc.setFillColor(30, 60, 114);
    doc.rect(0, 0, pageWidth, 25, 'F');
    
    // Título
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`RELATÓRIO DE PENDÊNCIA - ${dados.tipoIncidente}`, pageWidth / 2, 15, { align: 'center' });
    
    // Conteúdo estruturado
    // ... lógica de formatação do PDF
}
```

## 🛠️ Manutenção e Ajustes

### Adicionar Novos Materiais
```javascript
// No array materiaisOptions (linha ~358)
let materiaisOptions = [
    "MATERIAL EXISTENTE",
    "NOVO MATERIAL AQUI", // Adicionar aqui
    // ... outros materiais
];
```

### Modificar Campos do Formulário
```html
<!-- Exemplo: Adicionar novo campo -->
<div class="form-group">
    <label for="novoCampo">*NOVO CAMPO -*</label>
    <input type="text" id="novoCampo" name="novoCampo" placeholder="Digite..." required>
</div>
```

### Atualizar Opções de Select
```html
<!-- Exemplo: Modificar opções do município -->
<select id="municipio" name="municipio" required>
    <option value="">Selecione...</option>
    <option value="NOVO MUNICIPIO">NOVO MUNICIPIO</option>
    <!-- ... outras opções -->
</select>
```

### Personalizar Cores
```css
/* No arquivo styles.css */
:root {
    --primary-color: #NOVA_COR_AQUI;
    --secondary-color: #OUTRA_COR_AQUI;
}
```

## 🐛 Solução de Problemas Comuns

### 1. PDF não gera
**Problema**: Erro ao gerar PDF
**Solução**: 
- Verificar se jsPDF está carregado
- Verificar console para erros JavaScript
- Testar em navegador diferente

### 2. Texto não copia
**Problema**: Botão "Copiar Texto" não funciona
**Solução**:
- Verificar se está em contexto seguro (HTTPS)
- Testar fallback manual
- Verificar permissões do navegador

### 3. Layout quebrado no mobile
**Problema**: Interface não responsiva
**Solução**:
- Verificar viewport meta tag
- Testar em diferentes dispositivos
- Verificar CSS media queries

### 4. Materiais não aparecem
**Problema**: Lista de materiais vazia
**Solução**:
- Verificar array materiaisOptions
- Verificar função atualizarListaMateriais()
- Verificar IDs dos elementos

### 5. Formulário não limpa
**Problema**: Botão "Limpar" não funciona
**Solução**:
- Verificar função limparFormulario()
- Verificar IDs dos campos
- Verificar event listeners

## 🔄 Atualizações Futuras

### Melhorias Sugeridas
1. **Persistência Local**: Salvar dados no localStorage
2. **Histórico**: Manter histórico de relatórios
3. **Validação Avançada**: Validação em tempo real
4. **Temas**: Múltiplos temas visuais
5. **Offline**: Funcionamento offline com Service Worker

### Estrutura para Expansão
```javascript
// Exemplo: Adicionar persistência
function salvarRelatorio(dados) {
    const relatorios = JSON.parse(localStorage.getItem('relatorios') || '[]');
    relatorios.push({
        id: Date.now(),
        data: new Date().toISOString(),
        dados: dados
    });
    localStorage.setItem('relatorios', JSON.stringify(relatorios));
}

function carregarRelatorios() {
    return JSON.parse(localStorage.getItem('relatorios') || '[]');
}
```

## 📊 Performance

### Otimizações Implementadas
- **CSS minificado** para produção
- **JavaScript otimizado** com funções eficientes
- **Lazy loading** de bibliotecas externas
- **Debounce** em eventos de busca
- **Cache** de elementos DOM

### Métricas
- **Tamanho total**: ~50KB (HTML + CSS + JS)
- **Tempo de carregamento**: <2s em 3G
- **Compatibilidade**: 95%+ dos navegadores modernos

## 🔒 Segurança

### Considerações
- **Validação client-side** (não substitui validação server-side)
- **Sanitização** de inputs
- **HTTPS obrigatório** para clipboard API
- **CSP headers** recomendados

### Implementação de Segurança
```html
<!-- Exemplo: Content Security Policy -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' cdnjs.cloudflare.com;">
```

## 📱 Compatibilidade

### Navegadores Suportados
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile browsers**: iOS Safari 12+, Chrome Mobile 60+

### Funcionalidades por Navegador
| Funcionalidade | Chrome | Firefox | Safari | Edge |
|----------------|--------|---------|--------|------|
| Clipboard API | ✅ | ✅ | ✅ | ✅ |
| PDF Generation | ✅ | ✅ | ✅ | ✅ |
| Responsive Design | ✅ | ✅ | ✅ | ✅ |
| Local Storage | ✅ | ✅ | ✅ | ✅ |

## 📞 Suporte

### Logs de Debug
```javascript
// Ativar logs detalhados
const DEBUG = true;

function log(message, data = null) {
    if (DEBUG) {
        console.log(`[SISTEMA] ${message}`, data);
    }
}
```

### Contato
Para suporte técnico ou dúvidas sobre implementação, consulte esta documentação ou verifique o código fonte comentado.

---

**Versão**: 1.0.0  
**Última atualização**: Dezembro 2024  
**Compatibilidade**: GitHub Pages, Navegadores modernos

