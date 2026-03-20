// Configuração global
let materialCounter = 0;
let incidentType = 'TRAFO'; // Tipo padrão

// Lista de materiais (será preenchida com as opções que você fornecer)
let materiaisOptions = [
    "ARRUELA QUAD AZ, 50X3X18MM,D410.03",
    "ARRUELA,QUAD AL 50X3X18MM, D904.02",
    "ARRUELA, RED AZ,36X3X18MM,D410.01",
    "ARRUELA, RED AL, 36X3X18MMD904.01",
    "COBERTURA, ESTAI 6,4MM, LARANJA, 3M,220.35",
    "COBERTURA, ESTAI 9,5MM, LARANJA, 3M,D220.35",
    "CHAPA CURVA, AZ, 76X8X130, ESTAI, D445.11",
    "PORCA, QUAD, AZ, M16X2, D410.04",
    "PORCA, QUAD, AL, M16X2, D904.05",
    "SAPATILHA, AZ, CORD ACO 6,4-9,5MM, D510.02",
    "SEC, PREF CERCA 3,25-4,11MM, D750.01",
    "ELO, FUS, BOT, 15KV, 0.5A,H,D138.01",
    "ELO, FUS,BOT, 15KV, 1A,H,D138.01",
    "ELO, FUS,BOT, 15KV, 2A,H,D138.01",
    "ELO, FUS, BOT, 15KV, 3A,H,D138.01",
    "ELO, FUS, BOT, 15KV, 5A,H,D138.01",
    "ELO, FUS, BOT, 15KV, 3A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 6A,K,D138.01",
    "ELO, FUS, BOT, 15KV, BA,K,D138.01",
    "ELO, FUS, BOT, 15KV, 10A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 12A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 15A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 20A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 25A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 30A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 40A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 50A,K,D138.01",
    "ELO, FUS, BOT, 15KV, 65A,K,D138.01",
    "ELO, FUS, BOT, 15KV, BOA,K,D138.01",
    "ABRACADEIRA, NYLON 1,7X7,7X170MM,ET761",
    "CORDOALHA ACO ESTAL6.4MM,7F,MR(SM),D212.03",
    "CORDOALHA ACO PR,7.9MM,7F, AR(HS), D212.03",
    "CORDOALHA ACO ESTAL9.5MM, 7F,MR(SM), D212.03",
    "CABO, NU CAA, 4AWG 6/1F,SWAN, EMT003",
    "CABO, NU CAA, 1/0AWG 6/1F, RAVEN EMT003",
    "CABO, NU CAA, 266.8MCM, 26/7F, PART, EMT003",
    "CABO, NU CAL 50MM2, 7F,GSC003",
    "CABO NU CAL 70MM2, 19F,GSC003",
    "CABO, NU,CAL 120MM2,19F,GSC003",
    "CABO, NU, 160-A6201-19,160MM2, 19F, ELT001",
    "CABO,CU NU, 25MM2,7F, MD, EMT003",
    "CABO CU NU, 35MM2,7F, MD, EMT003",
    "CABO, CU NU, 70MM2, 19F, MD, EMT003",
    "CABO, CU NU, 95MM2, 19F,MD,GSC003",
    "CABO, CU ISOL XLPE/EPR 0,6/1KV, 16MM2,0204.03",
    "CABO,ACO-CU,ATERR, 3X10AWG, BT, D805.02",
    "CABO 4 AWG",
    "CABO 1/0",
    "CABO 266",
    "CABO MRT",
    "ARRUELA QUAD AZ, 50X3X18MM",
    "ARRUELA,QUAD AL 50X3X18MM",
    "ARRUELA, RED AZ,36X3X18MM",
    "ARRUELA, RED AL, 36X3X18MM",
    "COBERTURA, ESTAI 6,4MM, LARANJA, 3M",
    "COBERTURA, ESTAI 9,5MM, LARANJA, 3M"
];

// Inicializar formulário
function initializeForm() {
    const container = document.getElementById('materialsContainer');
    if (container.children.length === 0) {
        adicionarMaterial();
    }

    atualizarListaMateriais();
}

// Configurar event listeners
function setupEventListeners() {
    document.getElementById('copiarBtn').addEventListener('click', copiarTexto);
    document.getElementById('pdfBtn').addEventListener('click', baixarPDF);
    document.getElementById('limparBtn').addEventListener('click', limparFormulario);

    document.getElementById('addMaterialBtn').addEventListener('click', adicionarMaterial);

    const btnHoje = document.getElementById('btnHoje');
    if (btnHoje) {
        btnHoje.addEventListener('click', definirDataHoraAtual);
    }
}

// Atualizar lista de materiais em todos os inputs
function atualizarListaMateriais() {
    const inputs = document.querySelectorAll('.material-select');

    inputs.forEach(input => {
        const valorAtual = input.value;
        const datalistId = input.getAttribute('list');
        const datalist = document.getElementById(datalistId);

        if (datalist) {
            datalist.innerHTML = '';

            materiaisOptions.forEach(material => {
                const option = document.createElement('option');
                option.value = material;
                datalist.appendChild(option);
            });
        }

        input.value = valorAtual;
    });
}

// Adicionar nova linha de material
function adicionarMaterial() {
    materialCounter++;

    const container = document.getElementById('materialsContainer');
    const materialRow = document.createElement('div');
    materialRow.className = 'material-row';

    materialRow.innerHTML = `
        <input list="materials-${materialCounter}" class="material-select" name="material_${materialCounter}" placeholder="Digite ou selecione o material" required>
        <datalist id="materials-${materialCounter}"></datalist>
        <input type="number" class="quantity-input" name="quantity_${materialCounter}" placeholder="Qtd" min="1" required>
        <button type="button" class="remove-btn" onclick="removerMaterial(this)">X</button>
    `;

    container.appendChild(materialRow);
    atualizarListaMateriais();
}

// Remover linha de material
function removerMaterial(button) {
    const materialRow = button.parentElement;
    materialRow.remove();
}

// Retorna valor ou N/A
function valorOuNA(valor) {
    if (valor === undefined || valor === null) return 'N/A';
    if (String(valor).trim() === '') return 'N/A';
    return String(valor).trim();
}

// Coletar dados do formulário
function coletarDados() {
    const form = document.getElementById('relatorioForm');
    const formData = new FormData(form);
    const dados = {};

    dados.tipoIncidente = incidentType;

    for (let [key, value] of formData.entries()) {
        dados[key] = value;
    }

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

// Formatar texto para WhatsApp
function formatarTextoParaWhatsApp(dados) {
    const dataFormatada = formatarData(dados.dataHora);

    let texto = `📋 *RELATÓRIO DE PENDÊNCIA - ${dados.tipoIncidente}*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 *IDENTIFICAÇÃO E LOCALIZAÇÃO:*
• Descrição: ${valorOuNA(dados.descricao)}
• Causa: ${valorOuNA(dados.causa)}
• Nº Incidência: ${valorOuNA(dados.incidencia)}
• Data/Hora: ${valorOuNA(dataFormatada)}
• Endereço: ${valorOuNA(dados.endereco)}
• Município: ${valorOuNA(dados.municipio)}
• Legenda: ${valorOuNA(dados.legenda)}
• Elem. de Corte: ${valorOuNA(dados.elemCorte)}

🔧 *DADOS TÉCNICOS:*
• Acesso: ${valorOuNA(dados.acesso)}
• Potência Trafo: ${valorOuNA(dados.potenciaTrafo)}
• Para-Raio: ${valorOuNA(dados.paraRaio)}
• Proteção Primária: ${valorOuNA(dados.protecaoPrimaria)}
• Proteção Secundária: ${valorOuNA(dados.protecaoSecundaria)}
• Grampo Linha Viva: ${valorOuNA(dados.grampoLinhaViva)}
• Estrutura: ${valorOuNA(dados.estrutura)}
• Rede Primária: ${valorOuNA(dados.redePrimaria)}
• Rede Secundária: ${valorOuNA(dados.redeSecundaria)}
• Aterramento: ${valorOuNA(dados.aterramento)}
• Elos estavam adequados? De quanto?: ${valorOuNA(dados.elosAdequados)}
• Disjuntor (A): ${valorOuNA(dados.disjuntorA)}
${dados.observacoes ? `• Observações: ${valorOuNA(dados.observacoes)}` : ''}

👥 *EQUIPE:*
• Equipe Necessária: ${valorOuNA(dados.equipeNecessaria)}
• Operador(a): ${valorOuNA(dados.operador)}
• 1° Recurso: ${valorOuNA(dados.primeiroRecurso)}

📦 *MATERIAIS NECESSÁRIOS:*`;

    if (dados.materiais && dados.materiais.length > 0) {
        dados.materiais.forEach((material, index) => {
            texto += `\n${index + 1}. ${material}`;
        });
    } else {
        texto += '\n• Nenhum material especificado';
    }

    texto += '\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📱 *Enviado via Sistema de Relatórios*';

    return texto;
}

// Formatar data para exibição
function formatarData(dataHora) {
    if (!dataHora) return 'N/A';

    const [data, hora] = dataHora.split(' ');
    if (!data || !hora) return dataHora;

    const [dia, mes, ano] = data.split('/');
    const [horas, minutos] = hora.split(':');

    return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
}

// Copiar texto para clipboard
function copiarTexto() {
    const dados = coletarDados();
    const textoFormatado = formatarTextoParaWhatsApp(dados);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textoFormatado).then(() => {
            showMessage('✅ Texto copiado com sucesso! Cole no WhatsApp.', 'success');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            fallbackCopyTextToClipboard(textoFormatado);
        });
    } else {
        fallbackCopyTextToClipboard(textoFormatado);
    }
}

// Fallback para copiar texto
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showMessage('✅ Texto copiado com sucesso! Cole no WhatsApp.', 'success');
        } else {
            showMessage('❌ Erro ao copiar texto. Tente novamente.', 'error');
        }
    } catch (err) {
        console.error('Erro ao copiar:', err);
        showMessage('❌ Erro ao copiar texto. Tente novamente.', 'error');
    }

    document.body.removeChild(textArea);
}

// Baixar PDF
function baixarPDF() {
    const button = document.getElementById('pdfBtn');

    try {
        button.disabled = true;
        button.innerHTML = '⏳ Gerando PDF...';

        const dados = coletarDados();
        gerarPDF(dados);

        showMessage('✅ PDF gerado com sucesso!', 'success');
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        showMessage('❌ Erro ao gerar PDF. Tente novamente.', 'error');
    } finally {
        button.disabled = false;
        button.innerHTML = '📄 Baixar PDF';
    }
}

// Limpar formulário
function limparFormulario() {
    if (confirm('Tem certeza que deseja limpar todos os dados preenchidos?')) {
        document.getElementById('relatorioForm').reset();

        const materialsContainer = document.getElementById('materialsContainer');
        materialsContainer.innerHTML = '';

        adicionarMaterial();

        const campoDataHora = document.getElementById('dataHora');
        campoDataHora.value = '';

        const btnHoje = document.getElementById('btnHoje');
        btnHoje.textContent = 'HOJE';
        btnHoje.style.background = '';

        showMessage('🗑️ Formulário limpo com sucesso!', 'success');
    }
}

// Configurar data/hora atual como padrão
function setupDateTimeDefault() {
    // Não define automaticamente
}

// Definir data e hora atual
function definirDataHoraAtual() {
    const now = new Date();

    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0');
    const ano = now.getFullYear();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');

    const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

    const campoDataHora = document.getElementById('dataHora');
    campoDataHora.value = dataHoraFormatada;

    const btnHoje = document.getElementById('btnHoje');
    const textoOriginal = btnHoje.textContent;
    btnHoje.textContent = '✓ DEFINIDO';
    btnHoje.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';

    setTimeout(() => {
        btnHoje.textContent = textoOriginal;
    }, 2000);

    if (typeof validateField === 'function') {
        validateField(campoDataHora);
    }
}

// Escreve linha com quebra automática no PDF
function addWrappedField(doc, label, value, xLabel, xValue, y, maxWidth, lineHeight) {
    const safeValue = valorOuNA(value);
    const lines = doc.splitTextToSize(safeValue, maxWidth);

    doc.text(`${label}:`, xLabel, y);
    doc.text(lines, xValue, y);

    return y + (lines.length * lineHeight);
}

// Gerar PDF
function gerarPDF(dados) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    let yPosition = 20;
    const lineHeight = 7;
    const margin = 20;
    const xLabel = margin;
    const xValue = margin + 60;
    const maxWidth = pageWidth - xValue - 15;

    doc.setFillColor(30, 60, 114);
    doc.rect(0, 0, pageWidth, 25, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`RELATÓRIO DE PENDÊNCIA - ${dados.tipoIncidente}`, pageWidth / 2, 15, { align: 'center' });

    yPosition = 35;
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    const secoes = [
        {
            titulo: 'IDENTIFICAÇÃO E LOCALIZAÇÃO',
            campos: [
                { label: 'Descrição', valor: dados.descricao },
                { label: 'Causa', valor: dados.causa },
                { label: 'Nº Incidência', valor: dados.incidencia },
                { label: 'Data/Hora', valor: formatarData(dados.dataHora) },
                { label: 'Endereço', valor: dados.endereco },
                { label: 'Município', valor: dados.municipio },
                { label: 'Legenda', valor: dados.legenda },
                { label: 'Elem. de Corte', valor: dados.elemCorte }
            ]
        },
        {
            titulo: 'DADOS TÉCNICOS',
            campos: [
                { label: 'Acesso', valor: dados.acesso },
                { label: 'Potência Trafo', valor: dados.potenciaTrafo },
                { label: 'Para-Raio', valor: dados.paraRaio },
                { label: 'Proteção Primária', valor: dados.protecaoPrimaria },
                { label: 'Proteção Secundária', valor: dados.protecaoSecundaria },
                { label: 'Grampo Linha Viva', valor: dados.grampoLinhaViva },
                { label: 'Estrutura', valor: dados.estrutura },
                { label: 'Rede Primária', valor: dados.redePrimaria },
                { label: 'Rede Secundária', valor: dados.redeSecundaria },
                { label: 'Aterramento', valor: dados.aterramento },
                { label: 'Elos estavam adequados? De quanto?', valor: dados.elosAdequados },
                { label: 'Disjuntor (A)', valor: dados.disjuntorA },
                ...(dados.observacoes ? [{ label: 'Observações', valor: dados.observacoes }] : [])
            ]
        },
        {
            titulo: 'EQUIPE',
            campos: [
                { label: 'Equipe Necessária', valor: dados.equipeNecessaria },
                { label: 'Operador(a)', valor: dados.operador },
                { label: '1° Recurso', valor: dados.primeiroRecurso }
            ]
        }
    ];

    secoes.forEach(secao => {
        if (yPosition > pageHeight - 40) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(52, 152, 219);
        doc.text(secao.titulo, margin, yPosition);
        yPosition += 10;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);

        secao.campos.forEach(campo => {
            if (yPosition > pageHeight - 20) {
                doc.addPage();
                yPosition = 20;
            }

            yPosition = addWrappedField(doc, campo.label, campo.valor, xLabel, xValue, yPosition, maxWidth, lineHeight);
        });
    });

    if (dados.materiais && dados.materiais.length > 0) {
        if (yPosition > pageHeight - 40) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(52, 152, 219);
        doc.text('MATERIAIS NECESSÁRIOS', margin, yPosition);
        yPosition += 10;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);

        dados.materiais.forEach((material, index) => {
            if (yPosition > pageHeight - 20) {
                doc.addPage();
                yPosition = 20;
            }

            const linha = `${index + 1}. ${material}`;
            const linhas = doc.splitTextToSize(linha, pageWidth - (margin * 2));
            doc.text(linhas, margin, yPosition);
            yPosition += linhas.length * lineHeight;
        });
    }

    const nomeArquivo = `relatorio_pendencia_${dados.tipoIncidente.toLowerCase()}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(nomeArquivo);
}

// Mostrar mensagem
function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;

    document.body.appendChild(message);

    setTimeout(() => {
        message.classList.add('show');
    }, 100);

    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Voltar à tela inicial
function voltarHome() {
    localStorage.removeItem('incidentType');
    window.location.href = 'home.html';
}

// Atualizar indicador de tipo
function updateIncidentIndicator() {
    const indicator = document.getElementById('incidentTypeIndicator');
    const typeIcon = document.getElementById('typeIcon');
    const typeText = document.getElementById('typeText');

    indicator.className = 'incident-type-indicator';

    switch (incidentType) {
        case 'TRAFO':
            typeIcon.textContent = '⚡';
            typeText.textContent = 'TRAFO';
            indicator.classList.add('trafo');
            break;
        case 'POSTE':
            typeIcon.textContent = '📡';
            typeText.textContent = 'POSTE';
            indicator.classList.add('poste');
            break;
        case 'VEGETAÇÃO':
            typeIcon.textContent = '🌳';
            typeText.textContent = 'VEGETAÇÃO';
            indicator.classList.add('vegetacao');
            break;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);

    const savedType = localStorage.getItem('incidentType');
    if (savedType) {
        incidentType = savedType;
        updateIncidentIndicator();
    } else {
        window.location.href = 'home.html';
        return;
    }

    initializeForm();
    setupEventListeners();
    setupDateTimeDefault();

    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});