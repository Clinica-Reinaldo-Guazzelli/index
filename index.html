/* ============================================
   CLÍNICA REINALDO GUAZZELLI — JAVASCRIPT
   ============================================ */

const WHATSAPP_NUMBER = "5518996443026"; // DDI 55 + DDD 18 + número
const ADMIN_PASSWORD = "clinica2024";
const HORARIOS_PADRAO = ["09:00","10:00","11:00","14:00","15:00","16:00","17:00"];
const STORAGE_KEY = "clinica_rg_agenda";

/* ---------- Utilitários ---------- */
function abrirWhatsApp(mensagem){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener");
}

function formatarData(d){
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dia = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dia}`;
}

function formatarDataBR(d){
  return d.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
}

/* ---------- Configurar links WhatsApp ---------- */
document.querySelectorAll("[data-whatsapp]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    abrirWhatsApp(el.dataset.message || "Olá! Gostaria de mais informações.");
  });
});

/* ---------- Menu mobile ---------- */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const aberto = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", aberto);
  });
}

/* ---------- Ano no footer ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============================================
   AGENDA / CALENDÁRIO
   Estrutura localStorage:
   {
     "2026-10-22": {
        "09:00": { status: "livre" | "ocupado", nome: "", celular: "", cidade: "" },
        ...
     }
   }
   ============================================ */

function carregarAgenda(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch(e){ return {}; }
}
function salvarAgenda(a){ localStorage.setItem(STORAGE_KEY, JSON.stringify(a)); }

function getHorariosDia(dataStr){
  const agenda = carregarAgenda();
  if (!agenda[dataStr]) {
    agenda[dataStr] = {};
    HORARIOS_PADRAO.forEach(h => agenda[dataStr][h] = { status: "livre", nome:"", celular:"", cidade:"" });
    salvarAgenda(agenda);
  }
  // Compatibilidade: se algum horário estiver como string antiga
  HORARIOS_PADRAO.forEach(h => {
    if (typeof agenda[dataStr][h] === "string") {
      agenda[dataStr][h] = { status: agenda[dataStr][h], nome:"", celular:"", cidade:"" };
    }
    if (!agenda[dataStr][h]) {
      agenda[dataStr][h] = { status:"livre", nome:"", celular:"", cidade:"" };
    }
  });
  return agenda[dataStr];
}

function setHorario(dataStr, horario, dados){
  const agenda = carregarAgenda();
  if (!agenda[dataStr]) agenda[dataStr] = {};
  agenda[dataStr][horario] = dados;
  salvarAgenda(agenda);
}

/* ---------- Estado ---------- */
let dataAtual = new Date();
dataAtual.setDate(1);
let dataSelecionada = null;
let horarioSelecionado = null;

const monthLabel = document.getElementById("monthLabel");
const calendarDays = document.getElementById("calendarDays");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const selectedDateTitle = document.getElementById("selectedDateTitle");
const selectedDateHelp = document.getElementById("selectedDateHelp");
const slotsList = document.getElementById("slotsList");
const bookingForm = document.getElementById("bookingForm");
const selectedSlotInfo = document.getElementById("selectedSlotInfo");

/* ---------- Render do calendário ---------- */
function renderCalendario(){
  if (!calendarDays) return;
  const ano = dataAtual.getFullYear();
  const mes = dataAtual.getMonth();

  const nomeMes = dataAtual.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  monthLabel.textContent = nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1);

  calendarDays.innerHTML = "";
  const primeiroDia = new Date(ano, mes, 1).getDay();
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();

  for (let i = 0; i < primeiroDia; i++) {
    const vazio = document.createElement("div");
    vazio.className = "cal-day empty";
    calendarDays.appendChild(vazio);
  }

  const hoje = new Date(); hoje.setHours(0,0,0,0);

  for (let dia = 1; dia <= ultimoDia; dia++) {
    const data = new Date(ano, mes, dia);
    const diaSemana = data.getDay();
    const dataStr = formatarData(data);

    const cel = document.createElement("div");
    cel.className = "cal-day";
    cel.textContent = dia;

    if (diaSemana === 0 || diaSemana === 6 || data < hoje) {
      cel.classList.add("disabled");
    } else {
      const horarios = getHorariosDia(dataStr);
      const total = HORARIOS_PADRAO.length;
      const ocupados = HORARIOS_PADRAO.filter(h => horarios[h].status === "ocupado").length;

      if (ocupados === 0) cel.classList.add("free");
      else if (ocupados >= total) cel.classList.add("full");
      else cel.classList.add("partial");

      if (dataSelecionada === dataStr) cel.classList.add("selected");

      cel.addEventListener("click", () => {
        dataSelecionada = dataStr;
        horarioSelecionado = null;
        renderCalendario();
        renderHorarios();
      });
    }
    calendarDays.appendChild(cel);
  }
}

prevMonthBtn.addEventListener("click", () => { dataAtual.setMonth(dataAtual.getMonth()-1); renderCalendario(); });
nextMonthBtn.addEventListener("click", () => { dataAtual.setMonth(dataAtual.getMonth()+1); renderCalendario(); });

/* ---------- Render dos horários ---------- */
function renderHorarios(){
  if (!dataSelecionada) {
    selectedDateTitle.textContent = "Horários disponíveis";
    selectedDateHelp.textContent = "Selecione um dia útil no calendário para visualizar os horários.";
    slotsList.innerHTML = '<div class="empty-state">Nenhuma data selecionada.</div>';
    bookingForm.hidden = true;
    return;
  }

  const [ano, mes, dia] = dataSelecionada.split("-").map(Number);
  const dataObj = new Date(ano, mes - 1, dia);
  selectedDateTitle.textContent = "Horários disponíveis";
  selectedDateHelp.textContent = formatarDataBR(dataObj);

  const horarios = getHorariosDia(dataSelecionada);
  slotsList.innerHTML = "";

  HORARIOS_PADRAO.forEach(h => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "slot-btn";
    btn.textContent = h;

    if (horarios[h].status === "ocupado") {
      btn.classList.add("occupied");
      btn.disabled = true;
      btn.title = "Horário ocupado";
    } else {
      if (horarioSelecionado === h) btn.classList.add("selected");
      btn.addEventListener("click", () => {
        horarioSelecionado = h;
        renderHorarios();
      });
    }
    slotsList.appendChild(btn);
  });

  if (horarioSelecionado) {
    bookingForm.hidden = false;
    const [a2, m2, d2] = dataSelecionada.split("-").map(Number);
    const dataFormatada = new Date(a2, m2-1, d2).toLocaleDateString("pt-BR");
    selectedSlotInfo.innerHTML = `<strong>${dataFormatada}</strong> às <strong>${horarioSelecionado}</strong>`;
  } else {
    bookingForm.hidden = true;
    selectedSlotInfo.innerHTML = "";
  }
}

/* ---------- Envio do formulário de agendamento ---------- */
const bookingRequest = document.getElementById("bookingRequest");
if (bookingRequest) {
  bookingRequest.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(bookingRequest);
    const nome = fd.get("nome").trim();
    const celular = fd.get("celular").trim();
    const cidade = fd.get("cidade").trim();

    // Salva o agendamento no localStorage como ocupado
    setHorario(dataSelecionada, horarioSelecionado, {
      status: "ocupado", nome, celular, cidade
    });

    // Mensagem WhatsApp
    const [a, m, d] = dataSelecionada.split("-").map(Number);
    const dataBR = new Date(a, m-1, d).toLocaleDateString("pt-BR");
    const msg =
      `Olá! Gostaria de confirmar um agendamento.\n\n` +
      `📅 Data: ${dataBR}\n` +
      `🕐 Horário: ${horarioSelecionado}\n` +
      `👤 Nome: ${nome}\n` +
      `📱 Celular: ${celular}\n` +
      `📍 Cidade: ${cidade}\n\n` +
      `Aguardo a confirmação da clínica. Obrigado(a)!`;

    abrirWhatsApp(msg);
    bookingRequest.reset();

    // Atualiza UI
    const dataSalva = dataSelecionada;
    horarioSelecionado = null;
    renderCalendario();
    renderHorarios();
    alert(`Solicitação enviada! O horário das ${dataBR} já está reservado no calendário demonstrativo.\n\nA clínica confirmará pelo WhatsApp.`);
  });
}

/* ---------- Formulário de contato ---------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const msg =
      `Olá! Vim pelo site.\n\n` +
      `Nome: ${fd.get("nome")}\n` +
      `Assunto: ${fd.get("assunto")}\n` +
      `Mensagem: ${fd.get("mensagem")}`;
    abrirWhatsApp(msg);
    contactForm.reset();
  });
}

/* ---------- Materiais ---------- */
document.querySelectorAll("[data-material]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    abrirWhatsApp(`Olá! Gostaria de solicitar o material "${el.dataset.material}".`);
  });
});

/* ============================================
   ÁREA DO PROPRIETÁRIO
   ============================================ */
const adminDialog = document.getElementById("adminDialog");
const adminOpen = document.getElementById("adminOpen");
const adminClose = document.getElementById("adminClose");
const adminLoginView = document.getElementById("adminLoginView");
const adminPanel = document.getElementById("adminPanel");
const adminLogin = document.getElementById("adminLogin");
const adminAppointmentForm = document.getElementById("adminAppointmentForm");
const adminRecords = document.getElementById("adminRecords");

if (adminOpen) {
  adminOpen.addEventListener("click", () => {
    adminDialog.showModal();
    adminLoginView.hidden = false;
    adminPanel.hidden = true;
  });
}
if (adminClose) adminClose.addEventListener("click", () => adminDialog.close());

if (adminLogin) {
  adminLogin.addEventListener("submit", e => {
    e.preventDefault();
    if (adminLogin.senha.value === ADMIN_PASSWORD) {
      adminLoginView.hidden = true;
      adminPanel.hidden = false;
      renderAdminRecords();
      adminLogin.reset();
    } else {
      alert("Senha incorreta.");
    }
  });
}

if (adminAppointmentForm) {
  adminAppointmentForm.addEventListener("submit", e => {
    e.preventDefault();
    const fd = new FormData(adminAppointmentForm);
    const data = fd.get("data");
    const horario = fd.get("horario");
    const status = fd.get("status");
    const nome = fd.get("nome") || "";
    const celular = fd.get("celular") || "";
    const cidade = fd.get("cidade") || "";

    setHorario(data, horario, { status, nome, celular, cidade });
    alert(`Horário ${horario} em ${data} salvo como ${status}.`);
    adminAppointmentForm.reset();
    renderAdminRecords();
    renderCalendario();
    if (dataSelecionada === data) renderHorarios();
  });
}

function renderAdminRecords(){
  if (!adminRecords) return;
  const agenda = carregarAgenda();
  const datas = Object.keys(agenda).sort();

  if (datas.length === 0) {
    adminRecords.innerHTML = '<p style="color:#6b6359;font-style:italic;">Nenhum registro na agenda.</p>';
    return;
  }

  let html = "<h4>Agendamentos salvos</h4><table><thead><tr><th>Data</th><th>Hora</th><th>Status</th><th>Nome</th><th>Celular</th><th>Cidade</th></tr></thead><tbody>";
  datas.forEach(data => {
    const horarios = agenda[data];
    Object.keys(horarios).sort().forEach(h => {
      const reg = horarios[h];
      const st = reg.status || reg;
      if (st === "livre" && !reg.nome) return; // mostra só os relevantes
      html += `<tr>
        <td>${data}</td>
        <td>${h}</td>
        <td>${st}</td>
        <td>${reg.nome || "-"}</td>
        <td>${reg.celular || "-"}</td>
        <td>${reg.cidade || "-"}</td>
      </tr>`;
    });
  });
  html += "</tbody></table>";
  adminRecords.innerHTML = html;
}

const exportDataBtn = document.getElementById("exportData");
if (exportDataBtn) {
  exportDataBtn.addEventListener("click", () => {
    const agenda = carregarAgenda();
    const linhas = [["Data","Horário","Status","Nome","Celular","Cidade"]];
    Object.keys(agenda).sort().forEach(data => {
      Object.keys(agenda[data]).sort().forEach(h => {
        const reg = agenda[data][h];
        if (!reg || typeof reg === "string") return;
        linhas.push([data, h, reg.status||"", reg.nome||"", reg.celular||"", reg.cidade||""]);
      });
    });
    const csv = linhas.map(l => l.map(v => `"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type:"text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "agenda_clinica_rg.csv";
    a.click();
  });
}

const clearDemoBtn = document.getElementById("clearDemo");
if (clearDemoBtn) {
  clearDemoBtn.addEventListener("click", () => {
    if (confirm("Apagar toda a agenda deste navegador?")) {
      localStorage.removeItem(STORAGE_KEY);
      renderAdminRecords();
      dataSelecionada = null;
      horarioSelecionado = null;
      renderCalendario();
      renderHorarios();
      alert("Agenda apagada.");
    }
  });
}

const adminLogout = document.getElementById("adminLogout");
if (adminLogout) {
  adminLogout.addEventListener("click", () => {
    adminLoginView.hidden = false;
    adminPanel.hidden = true;
  });
}

/* ---------- Init ---------- */
renderCalendario();
renderHorarios();
