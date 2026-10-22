CLÍNICA REINALDO GUAZZELLI — SITE HTML/CSS/JAVASCRIPT
=====================================================

ARQUIVOS
- index.html: conteúdo e estrutura do site.
- style.css: identidade visual, layout e responsividade.
- script.js: calendário demonstrativo, links de WhatsApp e área do proprietário.
- README.txt: este guia.

COMO ABRIR NO VS CODE
1. Descompacte a pasta clinica_reinaldo_guazzelli.
2. Abra o VS Code.
3. Clique em File > Open Folder (Arquivo > Abrir Pasta) e selecione esta pasta.
4. Abra index.html.
5. Para testar, clique com o botão direito no index.html e escolha "Open with Live Server"
   (se a extensão Live Server estiver instalada), ou abra index.html diretamente no navegador.

AJUSTES OBRIGATÓRIOS ANTES DE PUBLICAR
1. Abra script.js e troque WHATSAPP_NUMBER pelo número oficial da clínica:
   inclua DDI e DDD, somente números. Exemplo de formato: 5518999999999.
2. Troque as imagens demonstrativas pelas fotos reais da clínica.
   Crie a pasta "images" e use estes nomes:
   - images/fachada-clinica.jpg
   - images/recepcao-clinica.jpg
   - images/sala-atendimento.jpg
   As imagens atuais têm fallback para fotos genéricas da internet.
3. Confirme endereço, contatos, nome profissional, credenciais e serviços antes de publicar.
4. Revise o texto de privacidade/LGPD conforme o tratamento real de dados da clínica.
5. O material de consulta é demonstrativo; substitua pelos arquivos finais autorizados.

CALENDÁRIO
- Mostra todos os dias do mês e o dia da semana correto.
- Verde: horários livres; amarelo: alguns horários ocupados; vermelho: todos os horários ocupados.
- Clique em um dia útil para visualizar os horários.
- O visitante preenche nome, celular e cidade e solicita o horário pelo WhatsApp.
- A solicitação não confirma automaticamente a consulta; a clínica deve confirmar.
- O proprietário pode marcar/liberar horários, registrar dados de demonstração, anotar cancelamento,
  exportar CSV e apagar a agenda demonstrativa.
- A regra de desistência com 24 horas deve ser confirmada e aplicada pela clínica. O campo registra
  observação/cancelamento, mas não calcula ou fiscaliza automaticamente o prazo de 24 horas.

ÁREA DO PROPRIETÁRIO — ALERTA DE SEGURANÇA
A senha de demonstração é a que foi definida no pedido. A senha está no arquivo script.js,
que pode ser lido por qualquer pessoa em um site estático. O login NÃO é seguro para produção.
Além disso, os dados de agenda são guardados no localStorage do navegador, não em um servidor:
não sincronizam entre computadores e podem ser apagados pelo usuário.
Não use esta versão para armazenar dados reais de pacientes ou informações de saúde.
Para uso real, implemente autenticação no servidor, banco de dados protegido, controle de acesso,
backups, política de retenção e medidas adequadas à LGPD.

E-COMMERCE / MATERIAIS
A seção "Materiais para consulta" é um catálogo informativo. Os botões solicitam o material pelo
WhatsApp; não há pagamento online nem checkout integrado nesta versão. Para vender materiais
digitalmente, será necessário integrar um serviço de pagamento e entrega segura de arquivos.

OBSERVAÇÕES
- O site usa Google Fonts e imagens genéricas externas como fallback; precisa de internet para carregá-las.
- Esta é uma versão inicial de front-end, não um sistema clínico completo.
