// 性别肤色
const skins = {
  male: ["male_skin1.png", "male_skin2.png", "male_skin3.png", "male_skin4.png", "male_skin5.png", "male_skin6.png"],
  female: ["female_skin1.png", "female_skin2.png", "female_skin3.png", "female_skin4.png", "female_skin5.png", "female_skin6.png"]
};

// 头发
const hairs = {
  male: [
    "hair1.png","hair2.png","hair3.png",
    "hair4.png","hair5.png","hair6.png"
  ],
  female: [
    "fhair1.png","fhair2.png","fhair3.png",
    "fhair4.png","fhair5.png","fhair6.png"]
};

// 衣服
const clothes = {
  male: [
    "clothes1.png", "clothes2.png", "clothes3.png",
    "clothes4.png", "clothes5.png", "clothes6.png"
  ],
  female: [
    "fclothes1.png","fclothes2.png","fclothes3.png",
    "fclothes4.png","fclothes5.png","fclothes6.png"
  ]
};


/* 当前页面用到的索引（会在每页初始化时恢复到 localStorage 值或 0） */
let skinIndex = 0, hairIndex = 0, clothesIndex = 0;

/* 保存选择到 localStorage */
function saveChoice(key, value) {
  localStorage.setItem(key, value);
}

/* 读取选择 */
function getChoice(key) {
  return localStorage.getItem(key);
}

/* 返回当前 gender（若没选择，则默认 male） */
function currentGender() {
  return getChoice("gender") || "male";
}

/* ------------ 页面：index.html (性别)  ------------ */
function selectGender(gender) {
  saveChoice("gender", gender);
  // reset indices when choose gender
  saveChoice("skinIndex", 0);
  saveChoice("hairIndex", 0);
  saveChoice("clothesIndex", 0);
  // 跳转到肤色页
  window.location = "pick_skin.html";
}

/* ------------ 页面：pick_skin.html (肤色) ------------ */
/* 初始化肤色页面：载入当前 gender 的 skin 列表并显示当前索引 */
function initSkinPage() {
  const g = currentGender();
  const arr = skins[g];
  const saved = parseInt(getChoice("skinIndex") || "0", 10);
  skinIndex = (isNaN(saved) ? 0 : saved) % arr.length;

  const el = document.getElementById("preview-skin");
  if (!el) return;

  el.src = `assets/characters/${g}/skin/${arr[skinIndex]}`;
  // 同步到 localStorage
  saveChoice("skin", arr[skinIndex]);
  saveChoice("skinIndex", skinIndex);
}

function switchSkin(dir) {
  const g = currentGender();
  const arr = skins[g];
  skinIndex = (skinIndex + dir + arr.length) % arr.length;
  document.getElementById("preview-skin").src =
    `assets/characters/${g}/skin/${arr[skinIndex]}`;
  saveChoice("skin", arr[skinIndex]);
  saveChoice("skinIndex", skinIndex);
}

function goToHair() {
  window.location = "pick_hair.html";
}

/* ------------ 页面：pick_hair.html (头发)------------ */
function initHairPage() {
  const g = currentGender();
  const arr = hairs[g];
  const saved = parseInt(getChoice("hairIndex") || "0", 10);
  hairIndex = (isNaN(saved) ? 0 : saved) % arr.length;

  const el = document.getElementById("preview-hair");
  if (!el) return;

  el.src = `assets/characters/${g}/hair/${arr[hairIndex]}`;
  saveChoice("hair", arr[hairIndex]);
  saveChoice("hairIndex", hairIndex);
}

function switchHair(dir) {
  const g = currentGender();
  const arr = hairs[g];
  hairIndex = (hairIndex + dir + arr.length) % arr.length;
  document.getElementById("preview-hair").src =
    `assets/characters/${g}/hair/${arr[hairIndex]}`;
  saveChoice("hair", arr[hairIndex]);
  saveChoice("hairIndex", hairIndex);
}

function goToClothes() {
  window.location = "pick_clothes.html";
}

/* ------------ 页面：pick_clothes.html (衣服) ------------ */
function initClothesPage() {
  const g = currentGender();
  const arr = clothes[g];
  const saved = parseInt(getChoice("clothesIndex") || "0", 10);
  clothesIndex = (isNaN(saved) ? 0 : saved) % arr.length;

  const el = document.getElementById("preview-clothes");
  if (!el) return;

  el.src = `assets/characters/${g}/clothes/${arr[clothesIndex]}`;
  saveChoice("clothes", arr[clothesIndex]);
  saveChoice("clothesIndex", clothesIndex);
}

function switchClothes(dir) {
  const g = currentGender();
  const arr = clothes[g];
  clothesIndex = (clothesIndex + dir + arr.length) % arr.length;
  document.getElementById("preview-clothes").src =
    `assets/characters/${g}/clothes/${arr[clothesIndex]}`;
  saveChoice("clothes", arr[clothesIndex]);
  saveChoice("clothesIndex", clothesIndex);
}

function showFinal() {
  window.location = "result.html";
}

/* ------------ 页面：result.html 初始化（叠层最后） ------------ */
function initResultPage() {
  const g = currentGender();
  const skinFile = getChoice("skin") || (skins[g][0]);
  const hairFile = getChoice("hair") || (hairs[g][0]);
  const clothesFile = getChoice("clothes") || (clothes[g][0]);

  const bodyEl = document.getElementById("final-skin");
  const hairEl = document.getElementById("final-hair");
  const clothesEl = document.getElementById("final-clothes");

  if (bodyEl) bodyEl.src = `assets/characters/${g}/skin/${skinFile}`;
  if (hairEl) hairEl.src = `assets/characters/${g}/hair/${hairFile}`;
  if (clothesEl) clothesEl.src = `assets/characters/${g}/clothes/${clothesFile}`;
}

/* ------------ 页面自动入口（自动检测页面并执行 init） ------------ */
window.addEventListener('DOMContentLoaded', () => {
  // 检测页面元素来决定初始化哪个页面
  if (document.getElementById('preview-skin')) {
    initSkinPage();
  }
  if (document.getElementById('preview-hair')) {
    initHairPage();
  }
  if (document.getElementById('preview-clothes')) {
    initClothesPage();
  }
  if (document.getElementById('final-skin')) {
    initResultPage();
  }
});