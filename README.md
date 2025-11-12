# 📋 Sistema de Relatórios de Campo - Eletricistas

## 🎯 Visão Geral
Sistema web responsivo para eletricistas reportarem pendências de campo via WhatsApp e PDF. Desenvolvido para funcionar 100% no GitHub Pages, sem necessidade de servidor ou banco de dados.

## ✨ Funcionalidades

### 🏠 Tela Inicial
- **3 tipos de incidente**: TRAFO ⚡, POSTE 📡, VEGETAÇÃO 🌳
- **Interface intuitiva** com seleção visual
- **Design responsivo** para todos os dispositivos

### 📝 Formulário Inteligente
- **Campos pré-configurados** com opções específicas
- **Validação em tempo real** de campos obrigatórios
- **Botão "HOJE"** para data/hora automática
- **Seção dinâmica** de materiais com busca integrada

### 📦 Gestão de Materiais
- **50+ materiais** pré-cadastrados
- **Busca integrada** por digitação
- **Adicionar/remover** linhas dinamicamente
- **Quantidade personalizável** para cada material

### 📱 Exportação
- **📋 Copiar Texto**: Formatação otimizada para WhatsApp
- **📄 Baixar PDF**: Relatório profissional em PDF
- **🗑️ Limpar**: Reset completo com confirmação

## 🚀 Como Usar

### 1. Acesso
- Acesse o link do GitHub Pages
- Selecione o tipo de incidente
- Preencha o formulário

### 2. Preenchimento
- Use o botão **"HOJE"** para data/hora automática
- Selecione opções nos campos dropdown
- Adicione materiais necessários
- Digite o endereço e detalhes

### 3. Envio
- **Copiar Texto**: Cole no WhatsApp da equipe
- **Baixar PDF**: Anexe o PDF no WhatsApp
- **Limpar**: Para novo relatório

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo e moderno
- **JavaScript ES6+** - Lógica da aplicação
- **jsPDF** - Geração de PDFs no cliente
- **GitHub Pages** - Hospedagem gratuita

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

### Dispositivos
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Mobile (iOS, Android)
- ✅ Tablet (iPad, Android tablets)

## 🔧 Instalação e Deploy

### Para GitHub Pages
1. **Clone** este repositório
2. **Ative GitHub Pages** nas configurações
3. **Configure branch main** como fonte
4. **Acesse** seu site em `username.github.io/repo-name`

### Configuração Local
1. **Baixe** os arquivos
2. **Abra** `index.html` no navegador
3. **Teste** todas as funcionalidades

## 📋 Campos do Formulário

### Identificação e Localização
- **Defeitos** (dropdown com 16 opções)
- **Causa** (dropdown com 8 opções)
- **Nº Incidência** (texto livre)
- **Data/Hora** (botão "HOJE" automático)
- **Endereço** (texto livre)
- **Município** (dropdown com 37 municípios)
- **Legenda** (texto livre)
- **Elem. de Corte** (texto livre)

### Dados Técnicos
- **Acesso** (dropdown com 8 opções)
- **Potências Trafos** (dropdown com 11 opções)
- **Para-Raio** (SIM/NÃO)
- **Proteção Primária** (SIM/NÃO)
- **Proteção Secundária** (SIM/NÃO)
- **Possui Grampo de Linha Viva?** (SIM/NÃO)
- **Estruturas** (dropdown com 8 opções)
- **Tipos de Redes** (dropdown com 5 opções)
- **Nível de Tensão** (dropdown com 5 opções)

### Equipe
- **Equipe Necessária** (dropdown com 8 opções)
- **Operador(a)** (dropdown com 8 nomes)
- **1° Recurso** (texto livre)

## 📦 Materiais Disponíveis

O sistema inclui **50+ materiais** pré-cadastrados:
- Arruelas e porcas
- Coberturas e chapas
- Elos fusíveis
- Cordoalhas e cabos
- Abraçadeiras e conectores

## 🎨 Design Responsivo

### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

### Características
- **Mobile First** design
- **Touch-friendly** interface
- **Legibilidade** otimizada
- **Navegação intuitiva**

## 🔒 Segurança e Privacidade

- ✅ **100% client-side** - Nenhum dado enviado para servidores
- ✅ **HTTPS obrigatório** - Comunicação segura
- ✅ **Sem cookies** - Privacidade total
- ✅ **Dados locais** - Processamento no dispositivo

## 📊 Performance

- **Tamanho total**: ~50KB
- **Tempo de carregamento**: <2s em 3G
- **Compatibilidade**: 95%+ navegadores modernos
- **Otimizado** para GitHub Pages

## 🐛 Solução de Problemas

### PDF não gera
- Verifique se jsPDF carregou
- Teste em navegador diferente
- Verifique console para erros

### Texto não copia
- Confirme HTTPS ativo
- Teste fallback manual
- Verifique permissões do navegador

### Layout quebrado
- Verifique viewport meta tag
- Teste em diferentes dispositivos
- Limpe cache do navegador

## 🔄 Atualizações

### Versão Atual: 1.0.0
- ✅ Interface completa
- ✅ 3 tipos de incidente
- ✅ Formulário dinâmico
- ✅ Geração de PDF
- ✅ Copiar para WhatsApp
- ✅ Design responsivo

### Próximas Versões
- 🔄 Histórico de relatórios
- 🔄 Temas personalizáveis
- 🔄 Validação avançada
- 🔄 Modo offline

## 📞 Suporte

### Documentação
- **`DOCUMENTACAO_TECNICA.md`** - Documentação técnica completa
- **`GUIA_GITHUB_PAGES.md`** - Guia de deploy no GitHub Pages

### Recursos
- **Console do navegador** para debug
- **GitHub Issues** para reportar bugs
- **Documentação** para manutenção

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 👥 Contribuição

Para contribuir com o projeto:
1. **Fork** o repositório
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

---

## 🎉 Agradecimentos

Desenvolvido para otimizar o trabalho de campo dos eletricistas, facilitando a comunicação e documentação de incidentes técnicos.

**Sistema 100% funcional e pronto para produção!** 🚀

---

**Desenvolvido com ❤️ para eletricistas**  
**Versão**: 1.0.0 | **Dezembro 2024**