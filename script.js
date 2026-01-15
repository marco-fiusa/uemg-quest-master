// script.js (module)
import { QUESTIONS } from "./questions.js";

console.log("✅ UEMG Quest Master iniciado");

// ================================
// PROGRESSO (localStorage)
// ================================
const STORAGE_KEY = "uemgQuestMaster_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error("Erro ao carregar progresso:", e);
    return null;
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Erro ao salvar progresso:", e);
  }
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

let progress = loadProgress() || {
  totalAnswered: 0,
  totalCorrect: 0,
  bySubject: {},
  byLevel: {},
  mistakes: [],
  lastSessionAt: null
};

function registerAnswer(questionObj, chosenIndex, isCorrect) {
  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;

  const s = questionObj.subject;
  if (!progress.bySubject[s]) progress.bySubject[s] = { answered: 0, correct: 0 };
  progress.bySubject[s].answered += 1;
  if (isCorrect) progress.bySubject[s].correct += 1;

  const lvl = questionObj.level;
  if (!progress.byLevel[lvl]) progress.byLevel[lvl] = { answered: 0, correct: 0 };
  progress.byLevel[lvl].answered += 1;
  if (isCorrect) progress.byLevel[lvl].correct += 1;

  if (!isCorrect) {
    progress.mistakes.unshift({
      id: `${s}-${lvl}-${questionObj.q}`.slice(0, 140),
      subject: s,
      level: lvl,
      q: questionObj.q,
      correct: questionObj.correct,
      chosen: chosenIndex,
      at: new Date().toISOString()
    });
    progress.mistakes = progress.mistakes.slice(0, 300);
  }

  progress.lastSessionAt = new Date().toISOString();
  saveProgress(progress);
}

// ===============================
// HELPERS DE DATA (streak / hoje)
// ===============================
function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getLS(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}
function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// ===============================
// CONTINUAR (salvar/retomar rodada)
// ===============================
function saveLastRun() {
  const lastRun = {
    subject: state.subject,
    difficulty: state.difficulty,
    mode: state.mode,
    explain: state.explain,

    goalMode: state.goalMode,
    goalValue: state.goalValue,

    simulado: state.simulado,
    index: state.index, // questão atual

    savedAt: new Date().toISOString(),
  };

  setLS("uqm_lastRun", lastRun);
}

function getLastRun() {
  return getLS("uqm_lastRun", null);
}

// ===============================
// ELEMENTOS
// ===============================
const el = {
  menu: document.getElementById("menu"),
  game: document.getElementById("game"),
  summary: document.getElementById("summary"),

  subjectSelect: document.getElementById("subjectSelect"),
  difficultySelect: document.getElementById("difficultySelect"),
  modeSelect: document.getElementById("modeSelect"),
  explainMode: document.getElementById("explainMode"),

  goalMode: document.getElementById("goalMode"),
  goalInput: document.getElementById("goalInput"),
  totalQuestions: document.getElementById("totalQuestions"),

  streak: document.getElementById("streak"),
  todayProgress: document.getElementById("todayProgress"),
  todayBar: document.getElementById("todayBar"),

  startBtn: document.getElementById("startBtn"),
  resumeBtn: document.getElementById("resumeBtn"),
  simuladoBtn: document.getElementById("simuladoBtn"),
  summaryBtn: document.getElementById("summaryBtn"),
  errorBtn: document.getElementById("errorBtn"),

  gameInfo: document.getElementById("gameInfo"),
  xp: document.getElementById("xp"),
  combo: document.getElementById("combo"),

  progressText: document.getElementById("progressText"),
  progressFill: document.getElementById("progressFill"),

  questionText: document.getElementById("questionText"),
  answers: document.getElementById("answers"),
  feedback: document.getElementById("feedback"),

  nextBtn: document.getElementById("nextBtn"),
  backMenuBtn: document.getElementById("backMenuBtn"),

  summaryTitle: document.getElementById("summaryTitle"),
  summaryContent: document.getElementById("summaryContent"),
  backFromSummary: document.getElementById("backFromSummary"),
};

// ===============================
// ESTADO
// ===============================
let state = {
  simulado: false,
  subject: "ALL",
  difficulty: "facil",
  mode: "normal",
  explain: "full",

  pool: [],
  index: 0,

  xp: 0,
  combo: 0,
  correct: 0,
  wrong: 0,

  errors: [],

  answered: false,
  lastChoice: null,

  goalMode: "daily",
  goalValue: 30,

  todayDone: 0,
};

// ===============================
// FILTROS E POOL
// ===============================
function buildPool() {
  const subject = state.subject;
  const difficulty = state.difficulty;

  let pool = QUESTIONS.filter(q => {
    const okSubject = (subject === "ALL") || (q.subject === subject);
    const okLevel = (difficulty === "mista") || (q.level === difficulty);
    return okSubject && okLevel;
  });

  shuffle(pool);
  return pool;
}

function updateTotalQuestionsUI() {
  const subject = el.subjectSelect.value;
  const difficulty = el.difficultySelect.value;

  const total = QUESTIONS.filter(q => {
    const okSubject = (subject === "ALL") || (q.subject === subject);
    const okLevel = (difficulty === "mista") || (q.level === difficulty);
    return okSubject && okLevel;
  }).length;

  el.totalQuestions.textContent = String(total);
}

// ===============================
// STREAK + HOJE
// ===============================
function loadTodayAndStreak() {
  const key = todayKey();

  const stats = getLS("uqm_stats", {
    lastDay: null,
    streak: 0,
    today: {},
  });

  if (stats.lastDay !== key) {
    if (stats.lastDay) {
      const last = new Date(stats.lastDay);
      const now = new Date(key);
      const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) stats.streak = (stats.streak || 0) + 1;
      else stats.streak = 1;
    } else {
      stats.streak = 1;
    }

    stats.lastDay = key;
    stats.today[key] = { done: 0 };
  }

  const todayObj = stats.today[key] || { done: 0 };
  state.todayDone = todayObj.done || 0;

  el.streak.textContent = String(stats.streak || 0);

  const goalMode = el.goalMode.value;
  const goalValue = Number(el.goalInput.value || 0);

  const denom = goalMode === "daily" ? goalValue : Math.max(goalValue, 1);
  el.todayProgress.textContent = `${state.todayDone}/${goalMode === "daily" ? denom : "∞"}`;

  const pct = goalMode === "daily" && denom > 0
    ? Math.min(100, (state.todayDone / denom) * 100)
    : 0;
  el.todayBar.style.width = `${pct}%`;

  setLS("uqm_stats", stats);
}

function incrementTodayDone() {
  const key = todayKey();
  const stats = getLS("uqm_stats", { lastDay: key, streak: 1, today: {} });

  if (!stats.today[key]) stats.today[key] = { done: 0 };

  stats.today[key].done += 1;
  setLS("uqm_stats", stats);

  loadTodayAndStreak();
}

// ===============================
// NAVEGAÇÃO UI
// ===============================
function showMenu() {
  el.menu.classList.remove("hidden");
  el.game.classList.add("hidden");
  el.summary.classList.add("hidden");

  const lastRun = getLastRun();
el.resumeBtn.style.display = lastRun ? "inline-block" : "none";
}

function showGame() {
  el.menu.classList.add("hidden");
  el.game.classList.remove("hidden");
  el.summary.classList.add("hidden");
}

function showSummary() {
  el.menu.classList.add("hidden");
  el.game.classList.add("hidden");
  el.summary.classList.remove("hidden");
}

// ===============================
// INICIAR / CONFIG
// ===============================
function applyConfigFromUI() {
  state.subject = el.subjectSelect.value;
  state.difficulty = el.difficultySelect.value;
  state.mode = el.modeSelect.value;
  state.explain = el.explainMode.value;

  state.goalMode = el.goalMode.value;
  state.goalValue = Number(el.goalInput.value || 0);
  if (state.goalMode === "daily" && state.goalValue < 1) state.goalValue = 1;
}

function resetRunStats() {
  state.index = 0;
  state.xp = 0;
  state.combo = 0;
  state.correct = 0;
  state.wrong = 0;
  state.errors = [];
  state.answered = false;
  state.lastChoice = null;
}

function startGame(simulado) {
  state.simulado = !!simulado;

  if (state.simulado) {
    el.subjectSelect.value = "ALL";
    el.difficultySelect.value = "mista";
  }

  applyConfigFromUI();
  resetRunStats();

  state.pool = buildPool();

  if (!state.pool.length) {
    alert("⚠️ Não há questões disponíveis para esse filtro. Ajuste Matéria/Dificuldade.");
    showMenu();
    return;
  }

  showGame();
  render();
}
function resumeLastRun() {
  const lastRun = getLastRun();

  if (!lastRun) {
    alert("Ainda não existe uma rodada salva para continuar.");
    return;
  }

  // 1) Coloca as seleções salvas de volta na interface
  el.subjectSelect.value = lastRun.subject || "ALL";
  el.difficultySelect.value = lastRun.difficulty || "facil";
  el.modeSelect.value = lastRun.mode || "normal";
  el.explainMode.value = lastRun.explain || "full";

  el.goalMode.value = lastRun.goalMode || "daily";
  el.goalInput.value = lastRun.goalValue ?? 30;

  // 2) Aplica isso no estado e inicia uma rodada nova igual
  applyConfigFromUI();
  resetRunStats();

  state.simulado = !!lastRun.simulado;

  // 3) Recria o pool com os filtros salvos
  state.pool = buildPool();

  if (!state.pool.length) {
    alert("⚠️ Não há questões para os filtros salvos. Ajuste Matéria/Dificuldade.");
    showMenu();
    return;
  }

  // 4) Volta pro índice salvo (com proteção pra não estourar)
  const idx = Number(lastRun.index ?? 0);
  state.index = Math.min(Math.max(idx, 0), state.pool.length - 1);

  // 5) Abre o jogo e renderiza
  showGame();
  render();
}

// ===============================
// RENDER
// ===============================
function render() {
  const q = state.pool[state.index];

  el.gameInfo.textContent = `${q.subject} • ${q.level.toUpperCase()} • Questão ${state.index + 1}`;
  el.xp.textContent = String(state.xp);
  el.combo.textContent = String(state.combo);

  el.progressText.textContent = `Questão ${state.index + 1}/${state.pool.length}`;
  const pct = ((state.index + 1) / state.pool.length) * 100;
  el.progressFill.style.width = `${pct}%`;

  el.questionText.textContent = q.q;

  el.answers.innerHTML = "";
  el.feedback.textContent = "";
  el.nextBtn.disabled = true;
  state.answered = false;
  state.lastChoice = null;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = opt;
    btn.onclick = () => check(i);
    el.answers.appendChild(btn);
  });
}

// ===============================
// CHECK (responder)
// ===============================
function shortExplanation(text) {
  if (!text) return "";
  const first = text.split(".")[0] + ".";
  return first.length <= 140 ? first : text.slice(0, 140) + "...";
}

function check(choice) {
  if (state.answered) return;

  const q = state.pool[state.index];
  const buttons = Array.from(el.answers.querySelectorAll("button"));

  state.answered = true;
  state.lastChoice = choice;

  buttons.forEach(b => (b.disabled = true));

  // visual
  buttons.forEach((btn, i) => {
    if (i === q.correct) btn.classList.add("correct");
    if (i === choice && choice !== q.correct) btn.classList.add("wrong");
  });

  const isCorrect = choice === q.correct;

  // salva progresso UMA VEZ
  registerAnswer(q, choice, isCorrect);

  const explainText = (state.explain === "short")
    ? shortExplanation(q.explanation)
    : q.explanation;

  if (isCorrect) {
    state.correct += 1;
    state.combo += 1;

    const gain = 10 + Math.min(10, state.combo);
    state.xp += gain;

    el.feedback.textContent = `✅ Correto! (+${gain} XP)\n\n${explainText}`;
  } else {
    state.wrong += 1;
    state.combo = 0;

    const key = `${q.subject}::${q.level}::${q.q}`;
    const already = state.errors.some(e => e.key === key);

    if (!already) {
      state.errors.push({
        key,
        subject: q.subject,
        level: q.level,
        q: q.q,
        correctText: q.options[q.correct],
        explanation: q.explanation,
      });
    }

    el.feedback.textContent =
      `❌ Errado.\n\n✅ Resposta correta: ${q.options[q.correct]}\n\n${explainText}`;

    if (state.mode === "chute") {
      const wrongs = q.options
        .map((t, idx) => ({ t, idx }))
        .filter(x => x.idx !== q.correct)
        .slice(0, 2)
        .map(x => `- ${x.t}`)
        .join("\n");

      el.feedback.textContent += `\n\n🎯 Chute inteligente (eliminação):\nProváveis distrações:\n${wrongs}`;
    }
  }

  incrementTodayDone();
  saveLastRun();

  el.nextBtn.disabled = false;

  if (state.goalMode === "daily" && state.goalValue > 0) {
    if (state.correct + state.wrong >= state.goalValue) {
      el.nextBtn.textContent = "Finalizar (meta batida)";
    } else {
      el.nextBtn.textContent = "Próxima";
    }
  } else {
    el.nextBtn.textContent = "Próxima";
  }
}

// ===============================
// NEXT
// ===============================
function finishRun(message) {
  alert(message);
  renderPerformanceSummary("Desempenho da Rodada");
  showSummary();
}

function nextQuestion() {
  if (state.goalMode === "daily" && state.goalValue > 0) {
    const done = state.correct + state.wrong;
    if (done >= state.goalValue) {
      finishRun("🏁 Meta diária concluída!");
      return;
    }
  }

  state.index += 1;

  if (state.index >= state.pool.length) {
    finishRun("🏁 Fim da rodada!");
    return;
  }

  render();
}

// ===============================
// SUMMARY + ERROS
// ===============================
function renderPerformanceSummary(title) {
  el.summaryTitle.textContent = `📊 ${title}`;

  const total = state.correct + state.wrong;
  const acc = total > 0 ? Math.round((state.correct / total) * 100) : 0;

  el.summaryContent.innerHTML = `
    <p><b>Questões respondidas:</b> ${total}</p>
    <p><b>Acertos:</b> ${state.correct}</p>
    <p><b>Erros:</b> ${state.wrong}</p>
    <p><b>Aproveitamento:</b> ${acc}%</p>
    <p><b>XP ganho:</b> ${state.xp}</p>
    <p><b>Combo atual:</b> ${state.combo}</p>
    <hr style="margin:12px 0; opacity:.3;">
    <p class="small">Dica: use o “Caderno de Erros” para revisar onde você está errando mais.</p>
  `;
}

function renderErrorsBook() {
  el.summaryTitle.textContent = "📒 Caderno de Erros";

  if (!state.errors.length) {
    el.summaryContent.innerHTML = `
      <p><b>Perfeito.</b> Nenhum erro registrado nesta rodada.</p>
      <p class="small">Se quiser, faça uma rodada mais difícil ou mista.</p>
    `;
    return;
  }

  const html = state.errors.map((e, idx) => `
    <div style="padding:10px; border:1px solid #eee; border-radius:10px; margin:10px 0;">
      <p><b>${idx + 1})</b> <b>${e.subject}</b> • ${e.level.toUpperCase()}</p>
      <p style="margin-top:6px;"><b>Pergunta:</b> ${e.q}</p>
      <p style="margin-top:6px;"><b>Resposta certa:</b> ${e.correctText}</p>
      <p style="margin-top:6px; white-space:pre-line;"><b>Explicação:</b>\n${e.explanation}</p>
    </div>
  `).join("");

  el.summaryContent.innerHTML = `
    <p><b>Erros registrados:</b> ${state.errors.length}</p>
    ${html}
  `;
}

// ===============================
// EVENTOS
// ===============================
el.startBtn.addEventListener("click", () => startGame(false));
el.resumeBtn.addEventListener("click", resumeLastRun);
el.simuladoBtn.addEventListener("click", () => startGame(true));

el.nextBtn.addEventListener("click", nextQuestion);

el.backMenuBtn.addEventListener("click", () => {
  showMenu();
});

el.summaryBtn.addEventListener("click", () => {
  renderPerformanceSummary("Desempenho Geral (desta sessão)");
  showSummary();
});

el.errorBtn.addEventListener("click", () => {
  renderErrorsBook();
  showSummary();
});

el.backFromSummary.addEventListener("click", () => showMenu());

el.subjectSelect.addEventListener("change", updateTotalQuestionsUI);
el.difficultySelect.addEventListener("change", updateTotalQuestionsUI);

el.goalMode.addEventListener("change", loadTodayAndStreak);
el.goalInput.addEventListener("input", loadTodayAndStreak);

// ===============================
// UTILS
// ===============================
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ===============================
// INIT
// ===============================
updateTotalQuestionsUI();
loadTodayAndStreak();
showMenu();

// ================================
// SERVICE WORKER (MODO OFFLINE)
// ================================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("✅ Service Worker registrado"))
      .catch(err => console.error("❌ Erro ao registrar SW:", err));
  });
}
