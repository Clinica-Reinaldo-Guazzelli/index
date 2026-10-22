/* ============================================
   CLÍNICA REINALDO GUAZZELLI — JAVASCRIPT
   ============================================ */

// ⚠️ CONFIGURAÇÃO OBRIGATÓRIA: troque pelo número oficial
const WHATSAPP_NUMBER = "5518996443026"; // DDI 55 + DDD 18 + número

// Senha da área do proprietário (DEMONSTRAÇÃO — insegura em produção)
const ADMIN_PASSWORD = "clinica2024";

// Horários padrão de atendimento
const HORARIOS_PADRAO = ["09:00","10:00","11:00","14:00","15:00","16:00","17:00"];

// Chave do localStorage
const STORAGE_KEY = "clinica_rg_agenda";

/* ---------- Utilitários ---------- */
function abrirWhatsApp(mensagem){
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url,"_blank","noopener");
}

function formatarData(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,"0");
  const dia = String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-
