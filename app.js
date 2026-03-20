// ════════════════════════════════════════════════
//  SUPABASE CONFIG  (hier eintragen wenn bereit)
// ════════════════════════════════════════════════
const SUPABASE_URL = '';
const SUPABASE_KEY = '';

// ════════════════════════════════════════════════
//  VOKABELN
// ════════════════════════════════════════════════
const VOCAB = [
  {de:'Hallo',           ru:'Привет',         tr:'Privet'},
  {de:'Guten Morgen',    ru:'Доброе утро',    tr:'Dobroye utro'},
  {de:'Guten Abend',     ru:'Добрый вечер',   tr:'Dobryy vecher'},
  {de:'Gute Nacht',      ru:'Спокойной ночи', tr:'Spokoynoy nochi'},
  {de:'Auf Wiedersehen', ru:'До свидания',    tr:'Do svidaniya'},
  {de:'Tschüss',         ru:'Пока',           tr:'Poka'},
  {de:'Danke',           ru:'Спасибо',        tr:'Spasibo'},
  {de:'Bitte',           ru:'Пожалуйста',     tr:'Pozhaluysta'},
  {de:'Entschuldigung',  ru:'Извините',       tr:'Izvinite'},
  {de:'Ja',              ru:'Да',             tr:'Da'},
  {de:'Nein',            ru:'Нет',            tr:'Net'},
  {de:'Ich',             ru:'Я',              tr:'Ya'},
  {de:'Du',              ru:'Ты',             tr:'Ty'},
  {de:'Er',              ru:'Он',             tr:'On'},
  {de:'Sie (sie)',       ru:'Она',            tr:'Ona'},
  {de:'Wir',             ru:'Мы',             tr:'My'},
  {de:'Ihr',             ru:'Вы',             tr:'Vy'},
  {de:'Sie (sie pl.)',   ru:'Они',            tr:'Oni'},
  {de:'Sein / Haben',    ru:'Быть',           tr:'Byt\''},
  {de:'Machen / Tun',    ru:'Делать',         tr:'Delat\''},
  {de:'Gehen',           ru:'Идти',           tr:'Idti'},
  {de:'Kommen',          ru:'Приходить',      tr:'Prikhodit\''},
  {de:'Sehen',           ru:'Видеть',         tr:'Videt\''},
  {de:'Wissen',          ru:'Знать',          tr:'Znat\''},
  {de:'Wollen',          ru:'Хотеть',         tr:'Khotet\''},
  {de:'Können',          ru:'Мочь',           tr:'Moch\''},
  {de:'Sagen',           ru:'Говорить',       tr:'Govorit\''},
  {de:'Fragen',          ru:'Спрашивать',     tr:'Sprashivat\''},
  {de:'Essen',           ru:'Есть',           tr:'Yest\''},
  {de:'Trinken',         ru:'Пить',           tr:'Pit\''},
  {de:'Schlafen',        ru:'Спать',          tr:'Spat\''},
  {de:'Arbeiten',        ru:'Работать',       tr:'Rabotat\''},
  {de:'Wohnen / Leben',  ru:'Жить',           tr:'Zhit\''},
  {de:'Lesen',           ru:'Читать',         tr:'Chitat\''},
  {de:'Schreiben',       ru:'Писать',         tr:'Pisat\''},
  {de:'Hören',           ru:'Слышать',        tr:'Slyshat\''},
  {de:'Verstehen',       ru:'Понимать',       tr:'Ponimat\''},
  {de:'Lieben',          ru:'Любить',         tr:'Lyubit\''},
  {de:'Kaufen',          ru:'Покупать',       tr:'Pokupat\''},
  {de:'Fahren',          ru:'Ехать',          tr:'Yekhat\''},
  {de:'Mann',            ru:'Мужчина',        tr:'Muzhchina'},
  {de:'Frau',            ru:'Женщина',        tr:'Zhenshchina'},
  {de:'Kind',            ru:'Ребёнок',        tr:'Rebyonok'},
  {de:'Vater',           ru:'Отец',           tr:'Otets'},
  {de:'Mutter',          ru:'Мать',           tr:'Mat\''},
  {de:'Bruder',          ru:'Брат',           tr:'Brat'},
  {de:'Schwester',       ru:'Сестра',         tr:'Sestra'},
  {de:'Freund',          ru:'Друг',           tr:'Drug'},
  {de:'Haus',            ru:'Дом',            tr:'Dom'},
  {de:'Wohnung',         ru:'Квартира',       tr:'Kvartira'},
  {de:'Zimmer',          ru:'Комната',        tr:'Komnata'},
  {de:'Küche',           ru:'Кухня',          tr:'Kukhnya'},
  {de:'Straße',          ru:'Улица',          tr:'Ulitsa'},
  {de:'Stadt',           ru:'Город',          tr:'Gorod'},
  {de:'Land',            ru:'Страна',         tr:'Strana'},
  {de:'Schule',          ru:'Школа',          tr:'Shkola'},
  {de:'Arbeit',          ru:'Работа',         tr:'Rabota'},
  {de:'Buch',            ru:'Книга',          tr:'Kniga'},
  {de:'Wasser',          ru:'Вода',           tr:'Voda'},
  {de:'Brot',            ru:'Хлеб',           tr:'Khleb'},
  {de:'Milch',           ru:'Молоко',         tr:'Moloko'},
  {de:'Fleisch',         ru:'Мясо',           tr:'Myaso'},
  {de:'Obst',            ru:'Фрукты',         tr:'Frukty'},
  {de:'Gemüse',          ru:'Овощи',          tr:'Ovoshchi'},
  {de:'Auto',            ru:'Машина',         tr:'Mashina'},
  {de:'Zug',             ru:'Поезд',          tr:'Poyezd'},
  {de:'Flugzeug',        ru:'Самолёт',        tr:'Samolyot'},
  {de:'Geld',            ru:'Деньги',         tr:'Den\'gi'},
  {de:'Zeit',            ru:'Время',          tr:'Vremya'},
  {de:'Tag',             ru:'День',           tr:'Den\''},
  {de:'Nacht',           ru:'Ночь',           tr:'Noch\''},
  {de:'Woche',           ru:'Неделя',         tr:'Nedelya'},
  {de:'Monat',           ru:'Месяц',          tr:'Mesyats'},
  {de:'Jahr',            ru:'Год',            tr:'God'},
  {de:'Heute',           ru:'Сегодня',        tr:'Segodnya'},
  {de:'Morgen',          ru:'Завтра',         tr:'Zavtra'},
  {de:'Gestern',         ru:'Вчера',          tr:'Vchera'},
  {de:'Groß',            ru:'Большой',        tr:'Bol\'shoy'},
  {de:'Klein',           ru:'Маленький',      tr:'Malen\'kiy'},
  {de:'Gut',             ru:'Хороший',        tr:'Khoroshiy'},
  {de:'Schlecht',        ru:'Плохой',         tr:'Plokhoy'},
  {de:'Neu',             ru:'Новый',          tr:'Novyy'},
  {de:'Alt',             ru:'Старый',         tr:'Staryy'},
  {de:'Schnell',         ru:'Быстрый',        tr:'Bystryy'},
  {de:'Langsam',         ru:'Медленный',      tr:'Medlennyy'},
  {de:'Schön',           ru:'Красивый',       tr:'Krasivyy'},
  {de:'Heiß',            ru:'Горячий',        tr:'Goryachiy'},
  {de:'Kalt',            ru:'Холодный',       tr:'Kholodnyy'},
  {de:'Offen',           ru:'Открытый',       tr:'Otkrytyy'},
  {de:'Geschlossen',     ru:'Закрытый',       tr:'Zakrytyy'},
  {de:'Wo?',             ru:'Где?',           tr:'Gde?'},
  {de:'Wann?',           ru:'Когда?',         tr:'Kogda?'},
  {de:'Wie?',            ru:'Как?',           tr:'Kak?'},
  {de:'Warum?',          ru:'Почему?',        tr:'Pochemu?'},
  {de:'Was?',            ru:'Что?',           tr:'Chto?'},
  {de:'Wer?',            ru:'Кто?',           tr:'Kto?'},
  {de:'Wie viel?',       ru:'Сколько?',       tr:'Skol\'ko?'},
  {de:'Hilfe!',          ru:'Помогите!',      tr:'Pomogite!'},
];

// ════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════
let direction  = 'de';
let activeMode = 'card';
let progress   = {};
let session = { queue:[], pos:0, modeSequence:[], correct:0, wrong:0, currentIdx:-1 };

// ════════════════════════════════════════════════
//  PERSISTENCE
// ════════════════════════════════════════════════
function saveProgress() {
  localStorage.setItem('rv_progress', JSON.stringify(progress));
}
function loadProgress() {
  const raw = localStorage.getItem('rv_progress');
  if (raw) progress = JSON.parse(raw);
  VOCAB.forEach((_,i) => { if (!progress[i]) progress[i] = {correct:0, total:0, mastered:false}; });
  updateHomeStats();
}
function updateHomeStats() {
  const mastered = Object.values(progress).filter(p=>p.mastered).length;
  const learning  = Object.values(progress).filter(p=>!p.mastered && p.total>0).length;
  document.getElementById('statMastered').textContent = mastered;
  document.getElementById('statLearning').textContent = learning;
  const pct = Math.round(mastered / VOCAB.length * 100);
  document.getElementById('progFill').style.width = pct + '%';
  document.getElementById('progText').textContent  = mastered + ' / ' + VOCAB.length;
}

// ════════════════════════════════════════════════
//  UI CONTROLS
// ════════════════════════════════════════════════
function setDir(dir) {
  direction = dir;
  document.getElementById('dirDE').classList.toggle('active', dir==='de');
  document.getElementById('dirRU').classList.toggle('active', dir==='ru');
}
function selectMode(mode) {
  activeMode = mode;
  ['card','mc','type','mix'].forEach(m => {
    const id = 'mode' + m.charAt(0).toUpperCase() + m.slice(1);
    document.getElementById(id).classList.toggle('selected', m===mode);
  });
}
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function goHome() { loadProgress(); showScreen('screenHome'); }

// ════════════════════════════════════════════════
//  QUEUE  (spaced repetition light)
// ════════════════════════════════════════════════
function buildQueue() {
  const scores = VOCAB.map((_,i) => {
    const p = progress[i];
    if (p.mastered)  return {i, score:0.05};
    if (p.total===0) return {i, score:1};
    return {i, score: 1 - p.correct/p.total + 0.1};
  });
  scores.sort((a,b)=>b.score-a.score);
  return shuffle(scores.slice(0,20).map(s=>s.i)).slice(0,10);
}
function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

// ════════════════════════════════════════════════
//  SESSION
// ════════════════════════════════════════════════
function startSession() {
  session.queue   = buildQueue();
  session.pos     = 0;
  session.correct = 0;
  session.wrong   = 0;
  if (activeMode==='mix') {
    const modes = ['card','mc','type'];
    session.modeSequence = session.queue.map(()=>modes[Math.floor(Math.random()*3)]);
  }
  showNext();
}
function showNext() {
  if (session.pos >= session.queue.length) { showEnd(); return; }
  session.currentIdx = session.queue[session.pos];
  const vocab = VOCAB[session.currentIdx];
  const mode  = activeMode==='mix' ? session.modeSequence[session.pos] : activeMode;
  if      (mode==='card') showFlashcard(vocab);
  else if (mode==='mc')   showMC(vocab);
  else                    showType(vocab);
}
function recordResult(correct) {
  const p = progress[session.currentIdx];
  p.total++;
  if (correct) {
    p.correct++; session.correct++;
    if (p.correct>=3 && p.correct/p.total>=0.8) p.mastered=true;
  } else { session.wrong++; }
  saveProgress();
}

// ════════════════════════════════════════════════
//  STEPS
// ════════════════════════════════════════════════
function renderSteps(id) {
  const el=document.getElementById(id); el.innerHTML='';
  session.queue.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='step'+(i<session.pos?' done':i===session.pos?' current':'');
    el.appendChild(d);
  });
}
function sessionInfo(id) {
  const labels={card:'Karteikarten',mc:'Multiple Choice',type:'Tippen',mix:'Gemischt'};
  document.getElementById(id).textContent=labels[activeMode]+' · '+(session.pos+1)+' / '+session.queue.length;
}

// ════════════════════════════════════════════════
//  FLASHCARD
// ════════════════════════════════════════════════
let cardFlipped=false;
function showFlashcard(vocab) {
  cardFlipped=false;
  document.getElementById('cardInner').classList.remove('flipped');
  document.getElementById('cardActions').style.display='none';
  const isDE=direction==='de';
  document.getElementById('cardFrontLabel').textContent = isDE ? 'Deutsch'  : 'Russisch';
  document.getElementById('cardFrontWord').textContent  = isDE ? vocab.de   : vocab.ru;
  document.getElementById('cardBackLabel').textContent  = isDE ? 'Russisch' : 'Deutsch';
  document.getElementById('cardBackWord').textContent   = isDE ? vocab.ru   : vocab.de;
  document.getElementById('cardTranslit').textContent   = isDE ? vocab.tr   : '';
  renderSteps('stepsCard'); sessionInfo('sessionInfoCard');
  showScreen('screenCard');
  setTimeout(()=>speakCurrent(), 300);
}
function flipCard() {
  if(cardFlipped)return;
  cardFlipped=true;
  document.getElementById('cardInner').classList.add('flipped');
  document.getElementById('cardActions').style.display='flex';
}
function flipCardBack() {
  cardFlipped=false;
  document.getElementById('cardInner').classList.remove('flipped');
  document.getElementById('cardActions').style.display='none';
}
function rateCard(knew) { recordResult(knew); session.pos++; showNext(); }

// ════════════════════════════════════════════════
//  MULTIPLE CHOICE
// ════════════════════════════════════════════════
function showMC(vocab) {
  const isDE=direction==='de';
  const correct=isDE ? vocab.ru : vocab.de;
  document.getElementById('mcLabel').textContent = isDE ? 'Wie heißt auf Russisch …' : 'Was bedeutet auf Deutsch …';
  document.getElementById('mcWord').textContent  = isDE ? vocab.de : vocab.ru;
  document.getElementById('mcSub').textContent   = isDE ? '' : vocab.tr;

  const distractors=shuffle(VOCAB.filter((_,i)=>i!==session.currentIdx)).slice(0,3).map(v=>isDE?v.ru:v.de);
  const options=shuffle([correct,...distractors]);
  const container=document.getElementById('mcOptions');
  container.innerHTML='';
  options.forEach(opt=>{
    const btn=document.createElement('button');
    btn.className='mc-opt'; btn.textContent=opt;
    btn.onclick=()=>selectMC(btn,opt,correct);
    container.appendChild(btn);
  });
  renderSteps('stepsMC'); sessionInfo('sessionInfoMC');
  showScreen('screenMC');
  setTimeout(()=>speakCurrent(), 300);
}
function selectMC(btn,chosen,correct) {
  document.querySelectorAll('.mc-opt').forEach(b=>{
    b.classList.add('disabled');
    if(b.textContent===correct) b.classList.add('correct');
  });
  const isCorrect=chosen===correct;
  if(!isCorrect){btn.classList.remove('disabled');btn.classList.add('wrong');}
  recordResult(isCorrect);
  setTimeout(()=>{session.pos++;showNext();},900);
}

// ════════════════════════════════════════════════
//  TYPE
// ════════════════════════════════════════════════
let typeChecked=false;
function showType(vocab) {
  typeChecked=false;
  const isDE=direction==='de';
  document.getElementById('typeLabel').textContent = isDE ? 'Wie heißt auf Russisch:' : 'Was bedeutet auf Deutsch:';
  document.getElementById('typeWord').textContent  = isDE ? vocab.de : vocab.ru;
  document.getElementById('typeSub').textContent   = isDE ? '' : vocab.tr;
  const inp=document.getElementById('typeInput');
  inp.value=''; inp.className='type-input'; inp.disabled=false;
  inp.placeholder=isDE?'Russisch eingeben…':'Deutsch eingeben…';
  inp.focus();
  document.getElementById('typeFeedback').textContent='';
  document.getElementById('typeFeedback').className='type-feedback';
  document.getElementById('typeCheckBtn').textContent='Prüfen';
  document.getElementById('typeCheckBtn').onclick=checkType;
  renderSteps('stepsType'); sessionInfo('sessionInfoType');
  showScreen('screenType');
  setTimeout(()=>speakCurrent(), 300);
}
function typeKeydown(e) {
  if(e.key==='Enter'){if(!typeChecked)checkType();else{session.pos++;showNext();}}
}
function checkType() {
  if(typeChecked)return;
  const vocab=VOCAB[session.currentIdx]; const isDE=direction==='de';
  const answer=document.getElementById('typeInput').value.trim();
  const correct=isDE?vocab.ru:vocab.de;
  const alts=isDE?[vocab.tr]:[];
  const norm=s=>s.toLowerCase().replace(/[.,!?']/g,'').trim();
  const isCorrect=norm(answer)===norm(correct)||alts.some(a=>norm(answer)===norm(a));
  const inp=document.getElementById('typeInput');
  const fb=document.getElementById('typeFeedback');
  inp.disabled=true; inp.classList.add(isCorrect?'correct':'wrong');
  fb.textContent=isCorrect?'✓ Richtig!':'✗ Richtige Antwort: '+correct;
  fb.className='type-feedback '+(isCorrect?'correct':'wrong');
  recordResult(isCorrect); typeChecked=true;
  const btn=document.getElementById('typeCheckBtn');
  btn.textContent='→ Weiter'; btn.onclick=()=>{session.pos++;showNext();};
}

// ════════════════════════════════════════════════
//  SPEECH
// ════════════════════════════════════════════════
function speakCurrent() {
  if(!('speechSynthesis' in window))return;
  const vocab=VOCAB[session.currentIdx];
  if(!vocab)return;
  const u=new SpeechSynthesisUtterance(vocab.ru);
  u.lang='ru-RU'; u.rate=0.85;
  speechSynthesis.cancel(); speechSynthesis.speak(u);
}

// ════════════════════════════════════════════════
//  SESSION END
// ════════════════════════════════════════════════
function showEnd() {
  document.getElementById('endCorrect').textContent=session.correct;
  document.getElementById('endWrong').textContent=session.wrong;
  const total=session.correct+session.wrong;
  const pct=total>0?Math.round(session.correct/total*100):0;
  let msg='';
  if(pct>=90) msg='Ausgezeichnet! Du hast fast alles richtig. 🔥';
  else if(pct>=70) msg='Gut gemacht! Noch ein bisschen üben und du hast es drauf. 💪';
  else if(pct>=50) msg='Solider Anfang! Die schwachen Wörter kommen öfter wieder. 🧠';
  else msg='Nicht schlimm – Wiederholung ist der Schlüssel! 📚';
  document.getElementById('endMsg').textContent=msg;
  updateHomeStats(); showScreen('screenEnd');
}

// ════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════
loadProgress();
