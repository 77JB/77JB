// Enhanced main.js functionality integrated - Real data from Varianten_Alle_Schüller25_1025.XLS
const item1 = {
  key: "Polymerglas matt",
  variantKeys: ["100", "520", "550", "988"],
  matId: "A3",
  dekorName: "Polymerglas matt",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item2 = {
  key: "Furnier",
  variantKeys: ["100", "206", "400", "500", "506", "510", "520", "988"],
  matId: "F1",
  dekorName: "Furnier",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item3 = {
  key: "Massivholz / Furnier",
  variantKeys: ["100"],
  matId: "F3",
  dekorName: "Massivholz / Furnier",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item4 = {
  key: "Kunststoff",
  variantKeys: [
    "100",
    "200",
    "206",
    "209",
    "400",
    "500",
    "506",
    "510",
    "520",
    "550",
    "988",
  ],
  matId: "K1",
  dekorName: "Kunststoff",
  status: "Freigegeben",
  breite: 1200,
  hoehe: 100,
  kachelBreite: 60,
  kachelHoehe: 60,
};

const item5 = {
  key: "Kunststoff Synchronpore",
  variantKeys: ["100", "209", "500", "506", "510", "520", "550", "988"],
  matId: "K6",
  dekorName: "Kunststoff Synchronpore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item6 = {
  key: "Satinlack",
  variantKeys: [
    "100",
    "206",
    "209",
    "400",
    "500",
    "506",
    "510",
    "520",
    "550",
    "562",
    "976",
    "984",
    "988",
  ],
  matId: "L1",
  dekorName: "Satinlack",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item7 = {
  key: "UV-Lack matt AFP",
  variantKeys: ["100"],
  matId: "L16",
  dekorName: "UV-Lack matt AFP",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item8 = {
  key: "Satinlack, Pore",
  variantKeys: [
    "100",
    "206",
    "209",
    "500",
    "506",
    "510",
    "520",
    "550",
    "562",
    "976",
    "988",
  ],
  matId: "L1P",
  dekorName: "Satinlack, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item9 = {
  key: "Hochglanzlack",
  variantKeys: ["100", "520"],
  matId: "L4",
  dekorName: "Hochglanzlack",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item10 = {
  key: "UV-Lack matt",
  variantKeys: ["100", "206", "500", "506", "510", "520", "988"],
  matId: "L6",
  dekorName: "UV-Lack matt",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item11 = {
  key: "Samtmatt-Lack",
  variantKeys: ["100", "206", "209", "500", "506", "510", "520", "984", "988"],
  matId: "L7",
  dekorName: "Samtmatt-Lack",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item12 = {
  key: "UV-Lack matt Struktur",
  variantKeys: ["100", "500", "510", "520", "550", "988"],
  matId: "L8",
  dekorName: "UV-Lack matt Struktur",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item13 = {
  key: "Lacklaminat hochglanz",
  variantKeys: ["100"],
  matId: "P5",
  dekorName: "Lacklaminat hochglanz",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item14 = {
  key: "Lacklaminat matt",
  variantKeys: ["100"],
  matId: "P6",
  dekorName: "Lacklaminat matt",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item15 = {
  key: "Schichtstoff matt",
  variantKeys: ["100"],
  matId: "S3",
  dekorName: "Schichtstoff matt",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item16 = {
  key: "Polymerglas kristallweiß matt",
  variantKeys: ["101", "521", "551", "989"],
  matId: "A092",
  dekorName: "Polymerglas kristallweiß matt",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item17 = {
  key: "Polymerglas taupe metal. matt",
  variantKeys: ["101", "521", "551", "989"],
  matId: "A107",
  dekorName: "Polymerglas taupe metal. matt",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item18 = {
  key: "Polymergl. titanio metal. matt",
  variantKeys: ["101", "521", "551", "989"],
  matId: "A112",
  dekorName: "Polymergl. titanio metal. matt",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item19 = {
  key: "Polymerglas ecru matt",
  variantKeys: ["101", "521", "551", "989"],
  matId: "A127",
  dekorName: "Polymerglas ecru matt",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item20 = {
  key: "Polymerglas onyxschwarz matt",
  variantKeys: ["101", "521", "551", "989"],
  matId: "A187",
  dekorName: "Polymerglas onyxschwarz matt",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item127A = {
  key: "Polymerglas lavaschwarz matt",
  variantKeys: ["101", "521", "551", "989"],
  matId: "A192",
  dekorName: "Polymerglas lavaschwarz matt",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item128B = {
  key: "Esche kristallweiß satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F090P",
  dekorName: "Esche kristallweiß satin, Pore",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item129C = {
  key: "Esche muschelweiß satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F095P",
  dekorName: "Esche muschelweiß satin, Pore",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item130D = {
  key: "Esche weiß satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F100P",
  dekorName: "Esche weiß satin, Pore",
  status: "Freigegeben",
  breite: 1200,
  hoehe: 100,
  kachelBreite: 60,
  kachelHoehe: 60,
};

const item131E = {
  key: "Esche kristallgrau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F120P",
  dekorName: "Esche kristallgrau satin, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item132F = {
  key: "Esche magnolia satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F135P",
  dekorName: "Esche magnolia satin, Pore",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item133G = {
  key: "Esche onyxschwarz satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F185P",
  dekorName: "Esche onyxschwarz satin, Pore",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item134H = {
  key: "Esche lavaschwarz satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F190P",
  dekorName: "Esche lavaschwarz satin, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item135I = {
  key: "Esche kieselgrau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F205P",
  dekorName: "Esche kieselgrau satin, Pore",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item136J = {
  key: "Esche sandgrau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F210P",
  dekorName: "Esche sandgrau satin, Pore",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item137K = {
  key: "Esche steingrau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F235P",
  dekorName: "Esche steingrau satin, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item138L = {
  key: "Esche terragrau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F260P",
  dekorName: "Esche terragrau satin, Pore",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item139M = {
  key: "Esche achatgrau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F275P",
  dekorName: "Esche achatgrau satin, Pore",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item140N = {
  key: "Esche anthrazit satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F285P",
  dekorName: "Esche anthrazit satin, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item141O = {
  key: "Esche indischrot satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F290P",
  dekorName: "Esche indischrot satin, Pore",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item142P = {
  key: "Esche stahlblau satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F295P",
  dekorName: "Esche stahlblau satin, Pore",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item143Q = {
  key: "Esche herbstrot satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F305P",
  dekorName: "Esche herbstrot satin, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const item144R = {
  key: "Esche eukalyptusgrün sat.,Pore",
  variantKeys: ["101", "155"],
  matId: "F315P",
  dekorName: "Esche eukalyptusgrün sat.,Pore",
  status: "Freigegeben",
  breite: 2600,
  hoehe: 900,
  kachelBreite: 150,
  kachelHoehe: 150,
};

const item145S = {
  key: "Esche orientrot satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F320P",
  dekorName: "Esche orientrot satin, Pore",
  status: "Freigegeben",
  breite: 3000,
  hoehe: 1000,
  kachelBreite: 200,
  kachelHoehe: 200,
};

const item146T = {
  key: "Esche sandgelb satin, Pore",
  variantKeys: ["101", "155"],
  matId: "F350P",
  dekorName: "Esche sandgelb satin, Pore",
  status: "Freigegeben",
  breite: 2400,
  hoehe: 800,
  kachelBreite: 120,
  kachelHoehe: 120,
};

const itemByMaterialId = {
  A3: item1,
  F1: item2,
  F3: item3,
  K1: item4,
  K6: item5,
  L1: item6,
  L16: item7,
  L1P: item8,
  L4: item9,
  L6: item10,
  L7: item11,
  L8: item12,
  P5: item13,
  P6: item14,
  S3: item15,
  A092: item16,
  A107: item17,
  A112: item18,
  A127: item19,
  A187: item20,
  A192: item127A,
  F090P: item128B,
  F095P: item129C,
  F100P: item130D,
  F120P: item131E,
  F135P: item132F,
  F185P: item133G,
  F190P: item134H,
  F205P: item135I,
  F210P: item136J,
  F235P: item137K,
  F260P: item138L,
  F275P: item139M,
  F285P: item140N,
  F290P: item141O,
  F295P: item142P,
  F305P: item143Q,
  F315P: item144R,
  F320P: item145S,
  F350P: item146T,
};

let currentPreviewTab = "preview";
let babylonEngine, babylonScene, babylonCanvas, currentBabylonModel;
let allAnimationGroups = [];
let variantNameMap = {};
let dekorPoolFiles = [];
let mainTextureFiles = [];
let variantFiles = {};
let programmeData = [];
let ausfuehrungenData = [];
let mainTextureFileRefs = {
  A3: ["file-1", "file-2"],
  F1: ["file-1", "file-3"],
  F3: ["file-2", "file-4"],
  K1: ["file-1", "file-2", "file-3"],
  K6: ["file-2", "file-3", "file-4"],
  L1: ["file-1", "file-3", "file-5"],
  L16: ["file-2"],
  L1P: ["file-1", "file-4"],
  L4: ["file-3", "file-5"],
  L6: ["file-1", "file-2"],
  L7: ["file-2", "file-4"],
  L8: ["file-1", "file-3"],
  P5: ["file-4"],
  P6: ["file-5"],
  S3: ["file-1"],
  A092: ["file-2", "file-3"],
  A107: ["file-1", "file-4"],
  A112: ["file-2", "file-5"],
  A127: ["file-3", "file-4"],
  A187: ["file-1", "file-2"],
};
let variantFileRefs = {
  101: ["file-1", "file-3"],
  201: ["file-4", "file-5"],
  // 603: ["file-2"], // Entfernt - Granit Stein hat noch keine Zuordnung aus Dekor Pool
  700: ["file-1", "file-2", "file-4"],
  851: ["file-3", "file-5", "file-4"],
  155: ["file-2", "file-4"],
  // 601, 603, 605, 607 für Granit Stein haben keine Files bis Dekor Pool Zuordnung erfolgt
};

// Splitter functionality
let isResizing = false;
let startX = 0;
let startWidth = 0;

function initSplitter() {
  const splitterHandle = document.getElementById("splitter-handle");
  const tablePanel = document.querySelector(".table-panel");
  const detailsPanel = document.querySelector(".details-panel");

  splitterHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = tablePanel.offsetWidth;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;

    const deltaX = e.clientX - startX;
    const newWidth = startWidth + deltaX;
    const containerWidth = document.querySelector(".main-splitter").offsetWidth;
    const minTableWidth = 300;
    const minDetailsWidth = 250;

    if (
      newWidth >= minTableWidth &&
      containerWidth - newWidth >= minDetailsWidth
    ) {
      const tablePercentage = (newWidth / containerWidth) * 100;
      const detailsPercentage = 100 - tablePercentage;

      tablePanel.style.flex = `0 0 ${tablePercentage}%`;
      detailsPanel.style.width = `${detailsPercentage}%`;
    }
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  });
}

// Function to determine Variantentyp based on variant keys
function determineVariantentyp(variantKeys) {
  // Check if variantKeys is an array or convert string to array
  const keys = Array.isArray(variantKeys)
    ? variantKeys
    : variantKeys.split(",").map((k) => k.trim());

  // Check for common patterns
  // Ausführung (A): even hundreds (100, 200, 206, 400, 500, 520, 550, 988, etc.)
  // Farbe (F): odd hundreds + 1 (101, 155, 521, 551, 989, etc.)

  const hasAusfuehrung = keys.some((k) => {
    const num = parseInt(k);
    return (
      (num >= 100 && num < 200 && num % 10 === 0) || // 100, 110, 120, etc.
      (num >= 200 && num < 300 && [200, 206, 209].includes(num)) ||
      (num >= 400 &&
        num < 600 &&
        [400, 500, 506, 510, 520, 550, 562].includes(num)) ||
      (num >= 700 && num < 800 && [700, 702].includes(num)) ||
      (num >= 800 && num < 900) ||
      (num >= 900 && num < 999 && num % 2 === 0)
    ); // 988, 984, etc.
  });

  const hasFarbe = keys.some((k) => {
    const num = parseInt(k);
    return (
      (num >= 100 && num < 200 && num % 10 === 1) || // 101, 111, 121, etc.
      num === 155 ||
      (num >= 500 &&
        num < 600 &&
        [
          501, 503, 505, 507, 509, 511, 513, 515, 517, 521, 523, 525, 527, 551,
          561, 563, 565,
        ].includes(num)) ||
      (num >= 700 && num < 800 && [701, 703].includes(num)) ||
      (num >= 800 && num < 900 && num % 2 === 1) ||
      (num >= 900 && num < 999 && num % 2 === 1)
    ); // 989, 985, etc.
  });

  // Determine the primary type
  if (hasAusfuehrung && !hasFarbe) return "Ausführung";
  if (hasFarbe && !hasAusfuehrung) return "Farbe";
  if (hasAusfuehrung && hasFarbe) return "Ausführung"; // Mixed, prefer Ausführung

  return "Nicht zugeordnet";
}

// Enhanced showDetails function for splitter layout
function showDetailsFromItem(item) {
  const detailsPanel = document.getElementById("detail-pane");

  // Show the details panel
  detailsPanel.classList.add("visible");

  // Mark selected row
  document.querySelectorAll(".p-datatable-row").forEach((row) => {
    row.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");

  // Determine Variantentyp based on variantKeys
  const variantentyp = determineVariantentyp(item.variantKeys);

  showDetails(
    item.key,
    item.variantKeys,
    item.matId,
    item.dekorName,
    item.status,
    item.breite,
    item.hoehe,
    item.kachelBreite,
    item.kachelHoehe,
    variantentyp
  );
}

function closeDetailPane() {
  document.getElementById("detail-pane").classList.remove("visible");
  document.querySelectorAll(".p-datatable-row").forEach((row) => {
    row.classList.remove("selected");
  });
}

function filterTable() {
  const searchInput = document.getElementById("search");
  const q = searchInput.value.toLowerCase();

  // Get current search mode more reliably
  const checkedButton = document.querySelector(
    ".cte-search-wrapper .p-selectbutton .p-togglebutton-checked"
  );
  const isAndMode =
    checkedButton &&
    checkedButton.querySelector(".p-togglebutton-label").textContent.trim() ===
      "UND";

  // Show autocomplete suggestions like in searchCatalog
  showTableSearchSuggestions(searchInput, q);

  // If search is empty, hide any existing dropdown
  if (!q.trim()) {
    const existingDropdown = document.querySelector(
      ".table-search-autocomplete-dropdown"
    );
    if (existingDropdown) {
      existingDropdown.remove();
    }
  }

  // Determine which table is currently active
  let activeTableId = ""; // Default: Material table

  const materialTablePanel = document.getElementById("material-table-panel");
  const colorPanel = document.getElementById("color-panel");
  const programmeTablePanel = document.getElementById("programme-table-panel");
  const ausfuehrungenTablePanel = document.getElementById(
    "ausfuehrungen-table-panel"
  );

  if (
    programmeTablePanel &&
    programmeTablePanel.style.display === "flex" &&
    programmeTablePanel.style.visibility === "visible"
  ) {
    activeTableId = "programmeTable";
  } else if (
    ausfuehrungenTablePanel &&
    ausfuehrungenTablePanel.style.display === "flex" &&
    ausfuehrungenTablePanel.style.visibility === "visible"
  ) {
    activeTableId = "ausfuehrungenTable";
  } else if (
    colorPanel &&
    colorPanel.style.display === "flex" &&
    colorPanel.style.visibility === "visible"
  ) {
    activeTableId = "colorPanel";
  }

  // Filter the active table or color panel
  if (activeTableId === "colorPanel") {
    // Special handling for color panel
    const colorCards = document.querySelectorAll('.color-card');
    
    colorCards.forEach(card => {
      if (!q.trim()) {
        card.style.display = 'block';
        return;
      }
      
      const materialNo = card.dataset.material.toLowerCase();
      const cardText = card.textContent.toLowerCase();
      const searchTerms = q.split(/\s+/).filter((term) => term.length > 0);
      
      let shouldShow = false;
      
      if (isAndMode) {
        // UND-Modus: Alle Suchbegriffe müssen vorhanden sein
        shouldShow = searchTerms.every((term) => 
          materialNo.includes(term) || cardText.includes(term)
        );
      } else {
        // ODER-Modus: Mindestens ein Suchbegriff muss vorhanden sein
        shouldShow = searchTerms.some((term) => 
          materialNo.includes(term) || cardText.includes(term)
        );
      }
      
      card.style.display = shouldShow ? 'block' : 'none';
    });
  } else {
    // Standard table filtering
    const activeTable = document.getElementById(activeTableId);
    if (!activeTable) return;

    document.querySelectorAll(`#${activeTableId} tr`).forEach((row) => {
      if (!q.trim()) {
        row.style.display = "";
        return;
      }

      const searchTerms = q.split(/\s+/).filter((term) => term.length > 0);
      const rowText = row.textContent.toLowerCase();

      // Collect all aria-label attributes from the row
      const ariaLabels = [];
      row.querySelectorAll("[aria-label]").forEach((element) => {
        const label = element.getAttribute("aria-label");
        if (label) {
          ariaLabels.push(label.toLowerCase());
        }
      });
      const ariaLabelText = ariaLabels.join(" ");

      // Combine row text and aria-label text for searching
      const combinedText = rowText + " " + ariaLabelText;

      let shouldShow = false;

      if (isAndMode) {
        // UND-Modus: Alle Suchbegriffe müssen vorhanden sein
        shouldShow = searchTerms.every((term) => combinedText.includes(term));
      } else {
        // ODER-Modus: Mindestens ein Suchbegriff muss vorhanden sein
        shouldShow = searchTerms.some((term) => combinedText.includes(term));
      }

      row.style.display = shouldShow ? "" : "none";
    });
  }

  // Update footer counts after filtering
  updateFooterCounts();
}

// Funktion zum Wechseln zwischen UND und ODER
function toggleSearchMode(clickedButton) {
  const selectButton = clickedButton.closest(".p-selectbutton");
  const allButtons = selectButton.querySelectorAll(".p-togglebutton");

  // Entferne checked-Klasse von allen Buttons
  allButtons.forEach((btn) => btn.classList.remove("p-togglebutton-checked"));

  // Füge checked-Klasse zum geklickten Button hinzu
  clickedButton.classList.add("p-togglebutton-checked");

  // Führe die Suche mit dem neuen Modus erneut aus
  filterTable();
}

// Funktion zum Wechseln zwischen Katalogtexturen und Dekor Pool
function toggleDataSource(clickedButton, dataSource) {
  const selectButton = clickedButton.closest(".p-selectbutton");
  const allButtons = selectButton.querySelectorAll(".p-togglebutton");

  // Entferne checked-Klasse von allen Buttons
  allButtons.forEach((btn) => btn.classList.remove("p-togglebutton-checked"));

  // Füge checked-Klasse zum geklickten Button hinzu
  clickedButton.classList.add("p-togglebutton-checked");

  // Simuliere den Wechsel der Datenquelle
  console.log(`Wechsel zu: ${dataSource}`);

  // Hier könnten verschiedene Aktionen je nach Datenquelle durchgeführt werden
  if (dataSource === "katalogtexturen") {
    // Simuliere das Laden von Katalogtexturen
    console.log("Lade Katalogtexturen...");
    // Hier könnte man die Tabelle mit Katalogdaten füllen
    showNotification("Katalogtexturen geladen", "success");
  } else if (dataSource === "dekorpool") {
    // Simuliere das Laden von Dekor Pool Daten
    console.log("Lade Dekor Pool...");
    // Hier könnte man die Tabelle mit Dekor Pool Daten füllen
    showNotification("Dekor Pool geladen", "info");
  }

  // Filter erneut anwenden nach dem Datenquellenwechsel
  filterTable();
}

// Hilfsfunktion für Benachrichtigungen (vereinfacht)
function showNotification(message, type) {
  // Einfache Konsolen-Ausgabe als Simulation
  console.log(`[${type.toUpperCase()}] ${message}`);

  // Optional: Hier könnte eine echte Benachrichtigung implementiert werden
  // z.B. ein Toast oder eine Statusmeldung in der UI
}

// Funktion für "Texturen hinzufügen" Button Toggle
function toggleImportButton(button) {
  // Toggle zwischen aktiviert und deaktiviert
  const isCurrentlyActive = button.classList.contains("p-togglebutton-checked");

  if (isCurrentlyActive) {
    // Deaktivieren
    button.classList.remove("p-togglebutton-checked");
    console.log("Import-Dialog geschlossen");
    showNotification("Texturen-Import abgebrochen", "info");
  } else {
    // Aktivieren
    button.classList.add("p-togglebutton-checked");
    console.log("Import-Dialog geöffnet");
    showNotification("Texturen-Import-Dialog geöffnet", "success");

    // Simulation: Nach 3 Sekunden automatisch deaktivieren (als würde Dialog geschlossen)
    setTimeout(() => {
      button.classList.remove("p-togglebutton-checked");
      console.log("Import-Dialog automatisch geschlossen");
      showNotification("Import-Dialog geschlossen", "info");
    }, 3000);
  }
}

function switchMainTab(tabName) {
  // Remove active class from all tabs
  document.querySelectorAll(".p-tab").forEach((tab) => {
    tab.classList.remove("p-tab-active");
    tab.setAttribute("aria-selected", "false");
  });

  // Remove active class from all tab panels
  document.querySelectorAll(".p-tabpanel").forEach((panel) => {
    panel.classList.remove("p-tabpanel-active");
    panel.style.display = "none";
  });

  // Activate clicked tab
  const activeTab = document.querySelector(`[onclick*="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add("p-tab-active");
    activeTab.setAttribute("aria-selected", "true");
  }

  // Show corresponding panel
  const activePanel = document.getElementById(`${tabName}-panel`);
  if (activePanel) {
    activePanel.classList.add("p-tabpanel-active");
    activePanel.style.display = "block";
  }

  // Toggle table panels based on active tab - ensure consistent styling
  const materialTablePanel = document.getElementById("material-table-panel");
  const colorPanel = document.getElementById("color-panel");
  const colorPanelFooterInfo = document.getElementById("cte-footer-info");
  const programmeTablePanel = document.getElementById("programme-table-panel");
  const ausfuehrungenTablePanel = document.getElementById(
    "ausfuehrungen-table-panel"
  );

  if (tabName === "program") {
    // Show programme table, hide others
    if (materialTablePanel) {
      materialTablePanel.style.display = "none";
      materialTablePanel.style.visibility = "hidden";
    }
    if (programmeTablePanel) {
      programmeTablePanel.style.display = "flex";
      programmeTablePanel.style.visibility = "visible";
      loadProgrammeData();
    }
    if (ausfuehrungenTablePanel) {
      ausfuehrungenTablePanel.style.display = "none";
      ausfuehrungenTablePanel.style.visibility = "hidden";
    }
    if (colorPanel) {
      colorPanel.style.display = "none";
      colorPanel.style.visibility = "hidden";
      colorPanelFooterInfo.style.display = "none";
      colorPanelFooterInfo.style.visibility = "hidden";
    }
  } else if (tabName === "finishes") {
    // Show ausführungen table, hide others
    if (materialTablePanel) {
      materialTablePanel.style.display = "none";
      materialTablePanel.style.visibility = "hidden";
    }
    if (programmeTablePanel) {
      programmeTablePanel.style.display = "none";
      programmeTablePanel.style.visibility = "hidden";
    }
    if (ausfuehrungenTablePanel) {
      ausfuehrungenTablePanel.style.display = "flex";
      ausfuehrungenTablePanel.style.visibility = "visible";
      loadAusfuehrungenData();
    }
    if (colorPanel) {
      colorPanel.style.display = "none";
      colorPanel.style.visibility = "hidden";
      colorPanelFooterInfo.style.display = "none";
      colorPanelFooterInfo.style.visibility = "hidden";
    }
  } else if (tabName === "colors") {
    // Show colors panel, hide all table panels
    if (materialTablePanel) {
      materialTablePanel.style.display = "none";
      materialTablePanel.style.visibility = "hidden";
    }
    if (programmeTablePanel) {
      programmeTablePanel.style.display = "none";
      programmeTablePanel.style.visibility = "hidden";
    }
    if (ausfuehrungenTablePanel) {
      ausfuehrungenTablePanel.style.display = "none";
      ausfuehrungenTablePanel.style.visibility = "hidden";
    }
    if (colorPanel) {
      colorPanel.style.display = "flex";
      colorPanel.style.visibility = "visible";
      colorPanelFooterInfo.style.display = "flex";
      colorPanelFooterInfo.style.visibility = "visible";
    }
  } else {
    // Show material table, hide others
    if (materialTablePanel) {
      materialTablePanel.style.display = "flex";
      materialTablePanel.style.visibility = "visible";
    }
    if (programmeTablePanel) {
      programmeTablePanel.style.display = "none";
      programmeTablePanel.style.visibility = "hidden";
    }
    if (ausfuehrungenTablePanel) {
      ausfuehrungenTablePanel.style.display = "none";
      ausfuehrungenTablePanel.style.visibility = "hidden";
    }
    if (colorPanel) {
      colorPanel.style.display = "none";
      colorPanel.style.visibility = "hidden";
      colorPanelFooterInfo.style.display = "none";
      colorPanelFooterInfo.style.visibility = "hidden";
    }
  }

  // Reset search when switching tabs
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.value = "";
    filterTable(); // This will show all rows in the newly activated table
  }

  // Here you can add logic to load different data based on the tab
  console.log(`Switched to ${tabName} tab`);
}

// Funktion zum Laden der Programme-Daten
async function loadProgrammeData() {
  if (programmeData.length === 0) {
    try {
      const response = await fetch("https://77jb.github.io/77JB/cte-prototype/json/programmes.json");
      programmeData = await response.json();
      renderProgrammeTable();
    } catch (error) {
      console.error("Error loading programme data:", error);
    }
  } else {
    renderProgrammeTable();
  }
}

// Funktion zum Rendern der Programme-Tabelle
function renderProgrammeTable() {
  const tableBody = document.getElementById("programmeTable");
  if (!tableBody) return;

  tableBody.innerHTML = programmeData
    .map(
      (programme) => `
    <tr class="p-datatable-row" role="row" tabindex="0" onclick="showProgrammeDetails('${
      programme.id
    }')">
      <td style="left: 0px;" role="cell">
        <input type="checkbox" class="p-checkbox-input" aria-label="${
          programme.name
        } auswählen" onclick="event.stopPropagation()">
      </td>
      <td role="cell">${programme.Serie || "-"}</td>
      <td role="cell"><strong>${
        programme.kuerzel || programme.Modell
      }</strong></td>
      <td role="cell">${programme.name || programme.Bezeichnung}</td>
      <td role="cell">${programme.Farbe || "-"}</td>
      <td role="cell">${
        programme.Front_Ausf || programme["Front_Ausf."] || "-"
      }</td>
      <td role="cell">${programme.Fronttiefe || "-"}</td>
      <td role="cell">${programme.Preisfeld || "-"}</td>
      <td role="cell">${
        programme["Preis-_gruppe"] || programme.Preisgruppe || "-"
      }</td>
      <td role="cell">${programme.VarFamNr || "-"}</td>
      <td role="cell">${
        programme["Mindest-_Lieferzeit"] || programme.Lieferzeit || "-"
      }</td>
    </tr>
  `
    )
    .join("");

  // Update footer counts after rendering
  updateFooterCounts();
}

// Funktion zum Anzeigen von Programm-Details (Platzhalter)
function showProgrammeDetails(programmeId) {
  const programme = programmeData.find((p) => p.id === programmeId);
  if (programme) {
    console.log("Programme selected:", programme);
    // Hier können später Details angezeigt werden
  }
}

// Funktion zum Laden der Ausführungen-Daten
async function loadAusfuehrungenData() {
  if (ausfuehrungenData.length === 0) {
    try {
      const response = await fetch("https://77jb.github.io/77JB/cte-prototype/json/ausfuehrungen.json");
      ausfuehrungenData = await response.json();
      renderAusfuehrungenTable();
    } catch (error) {
      console.error("Error loading ausführungen data:", error);
    }
  } else {
    renderAusfuehrungenTable();
  }
}

// Funktion zum Rendern der Ausführungen-Tabelle
function renderAusfuehrungenTable() {
  const tableBody = document.getElementById("ausfuehrungenTable");
  if (!tableBody) return;

  tableBody.innerHTML = ausfuehrungenData
    .map(
      (ausf) => `
    <tr class="p-datatable-row" role="row" tabindex="0" onclick="showAusfuehrungDetails('${
      ausf.id
    }')">
      <td style="left: 0px;" role="cell">
        <input type="checkbox" class="p-checkbox-input" aria-label="${
          ausf.Varianten_Text
        } auswählen" onclick="event.stopPropagation()">
      </td>
      <td role="cell" title="${
        ausf.Variantenart ? getVariantName(ausf.Variantenart) : "-"
      }">${ausf.Variantenart || "-"}</td>
      <td role="cell">${ausf.Variantenart_Text || "-"}</td>
      <td role="cell"><strong>${ausf.Variante || "-"}</strong></td>
      <td role="cell">${ausf.Varianten_Text || "-"}</td>
    </tr>
  `
    )
    .join("");

  // Update footer counts after rendering
  updateFooterCounts();
}

// Funktion zum Anzeigen von Ausführungs-Details (Platzhalter)
function showAusfuehrungDetails(ausfId) {
  const ausf = ausfuehrungenData.find((a) => a.id === parseInt(ausfId));
  if (ausf) {
    console.log("Ausführung selected:", ausf);
    // Hier können später Details angezeigt werden
  }
}

function showDetails(
  name,
  variantKeys,
  matId,
  dekorName,
  status,
  breite,
  hoehe,
  kachelBreite,
  kachelHoehe,
  variantentyp
) {
  // Material-spezifische Files laden
  const materialFileRefs = mainTextureFileRefs[matId] || [];
  mainTextureFiles = materialFileRefs
    .map((id) => dekorPoolFiles.find((f) => f.id === id))
    .filter(Boolean);

  // Titel und Grunddaten
  document.getElementById("detail-title").textContent = name;
  document.getElementById("detail-dekorname").textContent = dekorName || ""; // Leer wenn kein Original Name zugeordnet
  document.getElementById("detail-matid").textContent = matId;
  document.getElementById("detail-variantentyp").textContent =
    variantentyp || "-";
  document.getElementById("detail-breite").textContent = breite || "-"; // "-" für null/undefined Werte
  document.getElementById("detail-hoehe").textContent = hoehe || "-";
  document.getElementById("tile_width").value = kachelBreite || "";
  document.getElementById("tile_height").value = kachelHoehe || "";

  // Status-Visualisierung im Header
  const titleElement = document.getElementById("detail-title");
  titleElement.textContent = name; // Zeige den Namen im Header-Titel
  titleElement.className =
    "status-dot " +
    (status === "Freigegeben"
      ? "ready"
      : status === "In Prüfung"
      ? "review"
      : status === "In Bearbeitung"
      ? "editing"
      : "missing");

  // Name im Formular
  document.getElementById("detail-name").textContent = name;

  // Bildformat
  document.getElementById("detail-bildformat").textContent =
    breite && hoehe
      ? breite > hoehe
        ? "Querformat"
        : hoehe > breite
        ? "Hochformat"
        : "Quadratisch"
      : "-"; // Unbekannt wenn Dimensionen fehlen

  // Preview-Bild
  document.getElementById("detail-preview-img").src =
    name === "Buche Hell"
      ? "https://www.pfleiderer.com/file_pim/_processed_/2/d/csm_r24029-fjord-beech-light-detail-100-x-100-mm-im0014911_6835aa5f95.jpg"
      : name === "Ahorn Dunkel"
      ? "https://bilder.obi.at/73ccc45f-d984-404e-9616-943740ff4f8d/prZZO/ellent_Ahorn_Hell_Gentle_1.jpg"
      : name === "Granit Stein"
      ? "https://placehold.co/320x180/f0f0f0/666666?text=Keine+Textur+vorhanden"
      : name === "Messing gebürstet"
      ? "https://media.istockphoto.com/id/155443251/de/foto/abstrakte-messingfarbenes-metall-teller-strukturierten-hintergrund-xxl.jpg?s=612x612&w=0&k=20&c=NqCZBhsnFf0q7b_9efpiDp8Yt6BOue8Iw9EiSfp6D2g="
      : `https://placehold.co/320x180?text=${encodeURIComponent(name)}`;

  // Varianten-Buttons im Eigenschaften-Tab
  document.getElementById("detail-varianten").innerHTML = variantKeys
    .map(
      (key) =>
        `<button type="button" class="p-button p-component p-button-rounded p-button-info" style="padding:4px 14px;font-size:13px;" onclick="jumpToVariant('${key}')" title="${getVariantName(
          key
        )}">${key}</button>`
    )
    .join("");

  // Varianten-Buttons im Varianten-Tab
  document.getElementById("variant-buttons").innerHTML = variantKeys
    .map(
      (key) =>
        `<button type="button" class="p-button p-component p-button-rounded p-button-info" style="padding:4px 14px;font-size:13px;" onclick="jumpToVariant('${key}')" title="${getVariantName(
          key
        )}">${key}</button>`
    )
    .join("");

  // Variantenkarten im Varianten-Tab
  document.getElementById("variant-container").innerHTML = variantKeys
    .map(
      (key) => `
      <div class="variant-card" id="variant-${key}">
        <div class="variant-header" onclick="toggleVariantCard(this)" title="${getVariantName(
          key
        )}">
          <i class="fa-light fa-angle-right variant-toggle-icon"></i>
          ${getVariantName(key)} (${key})
        </div>
        <div class="variant-body">
          <fieldset>
            <label>Name</label>
            <span>${name}</span>
            <label>Dekor Name</label>
            <span>${dekorName}</span>
            <label>Material-Id</label>
            <span>${matId}</span>
            <label>Dekor Breite</label>
            <span>${breite}</span>
            <label>Dekor Höhe</label>
            <span>${hoehe}</span>
            <label>Dekor Bildformat</label>
            <span>${
              breite > hoehe
                ? "Querformat"
                : hoehe > breite
                ? "Hochformat"
                : "Quadratisch"
            }</span>
            <label>Kachelbreite</label>
            <input type="number" value="${kachelBreite}">
            <label>Kachelhöhe</label>
            <input type="number" value="${kachelHoehe}">
            <label>Ausrichtung Maserung</label>
            <span style="display: flex; gap: 8px; align-items: center">
              <select>
                <option>waagerecht</option>
                <option>senkrecht</option>
                <option>diagonal</option>
              </select>
              <input type="number" placeholder="in Grad" style="min-width: 120px">
            </span>
            <label>Glanzgrad</label>
            <span style="display: flex; gap: 8px; align-items: center">
              <select>
                <option>Matt</option>
                <option>Hochglanz</option>
                <option>Lackiert</option>
                <option>Glänzend</option>
                <option>Funiert</option>
                <option>Glas</option>
                <option>Kunstoff matt</option>
                <option>Kunstoff glänzend</option>
                <option>Holz</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
              </select>
              <input type="number" min="0" max="100" placeholder="In Prozent" style="min-width: 120px">
            </span>
            <label>Metallisch</label>
            <input type="checkbox" style="width: 20px; height: auto">
          </fieldset>
        </div>
      </div>
    `
    )
    .join("");

  // Varianten-Buttons im Texturdateien-Tab
  document.getElementById("variantfile-buttons").innerHTML = variantKeys
    .map(
      (key) =>
        `<button type="button" class="p-button p-component p-button-rounded p-button-info" style="padding:4px 14px;font-size:13px;" onclick="jumpToVariantFileCard('${key}')" title="${getVariantName(
          key
        )}">${key}</button>`
    )
    .join("");

  // Haupttextur-Dateien (Dekor Pool)
  document.getElementById("fileListWrapper").innerHTML =
    mainTextureFiles.length === 0
      ? `<div style="color:#666;padding:16px;text-align:center;background:#f9f9f9;border-radius:4px;margin-bottom:16px;margin-top:1rem;">
           <i class="fa-light fa-info-circle" style="margin-right:8px;"></i>
           Für diese Textur sind noch keine Dateien hinterlegt.
         </div>
         <div class="file-actions-footer" style="display:flex !important;gap:8px;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;">
           <button class="p-button p-component" style="flex:0 1 auto;min-width:max-content;white-space:nowrap;margin-right:0 !important;margin-bottom:0 !important;" onclick="addFileFromDekorPool()"><i class="fas fa-plus" aria-hidden="true"></i> Aus Dekor Pool hinzufügen</button>
           <button class="p-button p-component" style="flex:0 1 auto;min-width:max-content;white-space:nowrap;margin-left:0 !important;margin-bottom:0 !important;" onclick="uploadNewFile()"><i class="fas fa-arrow-up" aria-hidden="true"></i> Neue Textur hinzufügen</button>
         </div>`
      : mainTextureFiles
          .map(
            (file) => `
              <div class="file-entry-card p-card">
                <!-- Card Header mit Preview Image -->
                <div class="p-card-header">
                  <img src="${file.preview}" alt="Preview">
                </div>
                
                <!-- Card Body -->
                <div class="p-card-body">
                  <!-- Card Title (Dekor Pool Name) -->
                  <div class="p-card-title">
                    <a href="${file.dekorPoolLink}" target="_blank">${
              file.dekorPoolName
            }</a>
                  </div>
                  
                  <!-- Card Subtitle (Dekor Pool ID) -->
                  <div class="p-card-subtitle">
                    <a href="${file.dekorPoolLink}" target="_blank">${
              file.dekorPoolId
            }</a>
                  </div>
                  
                  <!-- Card Content mit Key-Value Layout -->
                  <div class="p-card-content">
                    <div class="file-details-grid">
                      <span class="detail-label">Dateiname:</span>
                      <span class="detail-value">${file.name}</span>
                      
                      <span class="detail-label">Dateityp:</span>
                      <span class="detail-value">${file.type}</span>
                      
                      <span class="detail-label">Pfad:</span>
                      <span class="detail-value file-path">${file.path}</span>
                      
                      <span class="detail-label">Basistextur:</span>
                      <span class="detail-value">
                        <input type="checkbox" ${
                          file.isBase ? "checked" : ""
                        } disabled>
                      </span>
                      
                      <span class="detail-label">Dateigröße:</span>
                      <span class="detail-value">${file.size}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Card Footer mit Action Button -->
                <div class="p-card-footer">
                  <div class="file-actions">
                    <button class="file-remove-button p-button p-component" onclick="removeFileFromDekorPool('${
                      file.id
                    }')">
                      <i class="fas fa-trash" aria-hidden="true"></i>
                      <span>Entfernen</span>
                    </button>
                  </div>
                </div>
              </div>
            `
          )
          .join("") +
        `<div class="file-actions-footer" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;align-items:flex-start;">
           <button class="p-button p-component" style="flex:1;min-width:max-content;white-space:nowrap;" onclick="addFileFromDekorPool()"><i class="fas fa-plus"></i> Aus Dekor Pool hinzufügen</button>
           <button class="p-button p-component" style="flex:1;min-width:max-content;white-space:nowrap;" onclick="uploadNewFile()"><i class="fas fa-arrow-up"></i> Neue Datei hochladen</button>
         </div>`;

  // Varianten-spezifische Dateien - Header für alle Varianten anzeigen, auch ohne Files
  document.getElementById("variant-file-container").innerHTML =
    variantKeys.length > 0
      ? variantKeys
          .map((key) => {
            const hasFiles =
              variantFileRefs[key] && variantFileRefs[key].length > 0;
            return `
          <div class="variant-file-card" id="variant-file-${key}">
            <div class="variant-file-header" onclick="toggleVariantCard(this)" title="${getVariantName(
              key
            )}">
              <i class="fa fa-angle-right variant-toggle-icon"></i>
              ${getVariantName(key)} (${key})
            </div>
            <div class="variant-file-body">
              ${
                hasFiles
                  ? (variantFiles[key] || [])
                      .map(
                        (file) => `
                <div class="file-entry-card p-card">
                  <!-- Card Header mit Preview Image -->
                  <div class="p-card-header">
                    <img src="${file.preview}" alt="Preview">
                  </div>
                  
                  <!-- Card Body -->
                  <div class="p-card-body">
                    <!-- Card Title (Dekor Pool Name) -->
                    <div class="p-card-title">
                      <a href="${file.dekorPoolLink}" target="_blank">${
                          file.dekorPoolName
                        }</a>
                    </div>
                    
                    <!-- Card Subtitle (Dekor Pool ID) -->
                    <div class="p-card-subtitle">
                      <a href="${file.dekorPoolLink}" target="_blank">${
                          file.dekorPoolId
                        }</a>
                    </div>
                    
                    <!-- Card Content mit Key-Value Layout -->
                    <div class="p-card-content">
                      <div class="file-details-grid">
                        <span class="detail-label">Dateiname:</span>
                        <span class="detail-value">${file.name}</span>
                        
                        <span class="detail-label">Dateityp:</span>
                        <span class="detail-value">${file.type}</span>
                        
                        <span class="detail-label">Pfad:</span>
                        <span class="detail-value file-path">${file.path}</span>
                        
                        <span class="detail-label">Basistextur:</span>
                        <span class="detail-value">
                          <input type="checkbox" ${
                            file.isBase ? "checked" : ""
                          } disabled>
                        </span>
                        
                        <span class="detail-label">Dateigröße:</span>
                        <span class="detail-value">${file.size}</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Card Footer mit Action Button -->
                  <div class="p-card-footer">
                      <button class="file-remove-button p-button p-component" onclick="removeVariantFile('${key}', '${
                          file.id
                        }')">
                        <i class="fas fa-trash" aria-hidden="true"></i>
                        <span>Entfernen</span>
                      </button>
                  </div>
                </div>
              `
                      )
                      .join("")
                  : `<div style="color:#666;padding:12px;text-align:center;background:#f9f9f9;border-radius:4px;margin-bottom:12px;margin-top:1rem;">
                   <i class="fa-light fa-info-circle" style="margin-right:8px;"></i>
                   Keine Dateien zugeordnet.
                 </div>`
              }
              <button class="p-button p-component p-button-primary" onclick="addFileToVariant('${key}')"><i class="fas fa-plus"></i> Datei zu Variante hinzufügen</button>
            </div>
          </div>
        `;
          })
          .join("")
      : `<div class="no-variants-message">
         <i class="fa-light fa-info-circle" style="margin-right: 8px;"></i>
         Keine Varianten verfügbar.
       </div>`;
}

function selectItemAndJump(item, key) {
  if (!item || !key) return;

  // 1. Details anzeigen
  showDetailsFromItem(item);

  // 2. Leicht verzögert scrollen & öffnen, damit DOM fertig ist
  setTimeout(() => {
    jumpToVariantFileCard(key);
  }, 200);
}

// Hilfsfunktion zur Weitergabe an showDetails
// function showDetailsFromItem(item) ist bereits oben definiert

function togglePreview(view) {
  currentPreviewTab = view;
  console.log(
    "→ Initialisiere Detail-Pane und Preview Tabs:",
    currentPreviewTab
  );

  document
    .querySelectorAll(".preview-tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".preview-content")
    .forEach((c) => c.classList.remove("active"));
  document
    .querySelector(`.preview-tab-btn[onclick*='${view}']`)
    .classList.add("active");
  document.getElementById(view).classList.add("active");
  if (view === "threeD") setTimeout(setupBabylon, 100);
}

function switchTab(e, tabId) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  document
    .querySelectorAll(".tab-content")
    .forEach((tc) => tc.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function jumpToVariant(key) {
  // Tab "Varianten" aktivieren
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((tc) => tc.classList.remove("active"));
  document
    .querySelector('.tab-btn[onclick*="varianten"]')
    .classList.add("active");
  document.getElementById("varianten").classList.add("active");
  // Nur die gewünschte Card öffnen
  openOnlyVariant(key);
}

function openOnlyVariant(key) {
  // Alle Cards schließen
  document
    .querySelectorAll(".variant-card")
    .forEach((card) => card.classList.remove("open"));
  // Nur die gewünschte Card öffnen
  const card = document.getElementById("variant-" + key);
  if (card) {
    card.classList.add("open");
    card.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

function setupBabylon() {
  // Engine ggf. vorher sauber zerstören
  if (babylonEngine) {
    babylonEngine.dispose();
    babylonEngine = null;
    babylonScene = null;
    currentBabylonModel = null;
  }
  babylonCanvas = document.getElementById("babylon-canvas");
  if (!babylonCanvas) return;
  babylonEngine = new BABYLON.Engine(babylonCanvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
  });
  babylonScene = new BABYLON.Scene(babylonEngine);

  // Hintergrund transparent, damit der CSS-Gradient sichtbar bleibt
  babylonScene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 2.5,
    2.5,
    BABYLON.Vector3.Zero(),
    babylonScene
  );
  camera.attachControl(babylonCanvas, true);
  new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(1, 1, 0),
    babylonScene
  );
  babylonEngine.runRenderLoop(() => babylonScene.render());
  // Default: Einzelschrank
  loadGLBModel("Ecklift.glb");
}

function loadGLBModel(modelName) {
  if (!babylonScene) return;
  const modelPath = "../3Dmodels/";

  // Entferne vorheriges Modell
  if (currentBabylonModel) {
    currentBabylonModel.dispose();
    currentBabylonModel = null;
  }

  BABYLON.SceneLoader.ImportMesh(
    null,
    modelPath,
    modelName,
    babylonScene,
    function (meshes, particleSystems, skeletons, animationGroups) {
      // Wrapper-Node erstellen
      currentBabylonModel = new BABYLON.TransformNode("root", babylonScene);

      // Nur Top-Level-Nodes parenten (keine internen Meshes oder Hierarchien zerstören)
      const topLevelNodes = meshes.filter((m) => m.parent == null);
      topLevelNodes.forEach((m) => {
        m.setParent(currentBabylonModel);
      });

      // Kamera auf Modell fokussieren
      const boundingInfo = currentBabylonModel.getHierarchyBoundingVectors();
      const center = boundingInfo.min.add(boundingInfo.max).scale(0.5);
      babylonScene.activeCamera.target = center;

      // Animationen speichern und Select befüllen
      allAnimationGroups = animationGroups || [];
      const select = document.getElementById("animation-select");
      select.innerHTML = '<option value="">-- Animation wählen --</option>';
      let defaultIdx = null;

      allAnimationGroups.forEach((group, idx) => {
        const opt = document.createElement("option");
        opt.value = idx;
        opt.textContent = group.name || `Clip ${idx + 1}`;
        select.appendChild(opt);

        if (
          defaultIdx === null &&
          group.name &&
          group.name.toLowerCase().includes("-idleclosed")
        ) {
          defaultIdx = idx;
        }
      });

      select.onchange = function () {
        allAnimationGroups.forEach((g) => g.stop());
        if (this.value !== "") {
          allAnimationGroups[this.value].play(true);
        }
      };

      if (defaultIdx !== null) {
        select.value = defaultIdx;
        allAnimationGroups.forEach((g) => g.stop());
        allAnimationGroups[defaultIdx].play(true);
      }
    }
  );
}

function activateTab(tabId) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".tab-content")
    .forEach((tc) => tc.classList.remove("active"));
  document
    .querySelector(`.tab-btn[onclick*="${tabId}"]`)
    ?.classList.add("active");
  document.getElementById(tabId)?.classList.add("active");
}

function toggleVariantCard(headerElem) {
  const card = headerElem.parentElement;
  const isOpen = card.classList.contains("open");

  // Bestimme Card-Typ und entsprechende Selektoren
  const isFileCard = card.classList.contains("variant-file-card");
  const cardSelector = isFileCard ? ".variant-file-card" : ".variant-card";

  // Wenn Card geöffnet werden soll, erst alle anderen des gleichen Typs schließen
  if (!isOpen) {
    // Alle Cards des gleichen Typs sanft schließen
    document.querySelectorAll(cardSelector).forEach((c) => {
      if (c !== card) {
        c.classList.remove("open");
      }
    });

    // Aktuelle Card öffnen
    card.classList.add("open");

    // Für normale variant-cards: explizit max-height setzen für smooth transition
    if (!isFileCard) {
      const body = card.querySelector(".variant-body");
      if (body) {
        // Temporär auf auto setzen, um die tatsächliche Höhe zu messen
        body.style.maxHeight = "none";
        const scrollHeight = body.scrollHeight;
        body.style.maxHeight = "0px";

        // Trigger reflow, dann auf gemessene Höhe animieren
        body.offsetHeight;
        body.style.transition = "max-height 0.3s ease-in, padding 0.3s ease-in";
        body.style.maxHeight = scrollHeight + "px";
        body.style.padding = "1rem";
      }
    }

    card.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  } else {
    // Card schließen
    if (!isFileCard) {
      const body = card.querySelector(".variant-body");
      if (body) {
        body.style.transition =
          "max-height 0.3s ease-out, padding 0.3s ease-out";
        body.style.maxHeight = "0px";
        body.style.padding = "0 1rem";
      }
    }
    card.classList.remove("open");
  }
}

function jumpToVariantFileCard(key, retry = 0) {
  console.log(">>> jumpToVariantFileCard:", key);
  console.log(
    ">>> DOM Lookup:",
    document.getElementById("variant-file-" + key)
  );

  const cardId = "variant-file-" + key;

  // 1. Sicherstellen, dass "Textur Dateien" aktiv ist
  const currentActiveTab = document.querySelector(".tab-content.active");
  if (!currentActiveTab || currentActiveTab.id !== "texturdateien") {
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((tc) => tc.classList.remove("active"));
    document
      .querySelector('.tab-btn[onclick*="texturdateien"]')
      ?.classList.add("active");
    document.getElementById("texturdateien")?.classList.add("active");
  }

  // 2. Card suchen
  const card = document.getElementById(cardId);

  if (!card) {
    if (retry < 10) {
      setTimeout(() => jumpToVariantFileCard(key, retry + 1), 100 + retry * 20);
    } else {
      console.warn("Card nicht gefunden:", cardId);
    }
    return;
  }

  // 3. Alle Karten schließen (immer!)
  document.querySelectorAll(".variant-file-card").forEach((c) => {
    c.classList.remove("open");
  });

  // 4. Gewünschte Karte öffnen (auch bei Retry)
  card.classList.add("open");

  // 5. Scroll immer
  card.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}

function showVariantDetails(item, variantKey) {
  if (!item || !variantKey) {
    console.warn("showVariantDetails: Fehlende Parameter", {
      item,
      variantKey,
    });
    return;
  }

  // Details anzeigen
  showDetailsFromItem(item);

  // Kurz warten, dann zum Varianten-Tab mit der spezifischen Karte springen
  setTimeout(() => {
    jumpToVariant(variantKey);
  }, 200);
}

function getVariantBadgeHTML(variantKeys, itemRef) {
  return variantKeys
    .map((key) => {
      const fileCount = (variantFiles[key] || []).length;
      const variantName = getVariantName(key);
      return `
        <div class="p-splitbutton p-component p-button-sm" title="${variantName} (${key}) – ${fileCount} Datei(en)">
          <button type="button" class="p-splitbutton-defaultbutton p-button p-component p-button-sm p-button-outlined" 
                  onclick="showVariantDetails(${itemRef}, '${key}')" 
                  aria-label="Zu ${variantName} (${key})">
            <span class="p-button-label">${key}</span>
          </button>
          <button type="button" class="p-splitbutton-menubutton p-button p-component p-button-sm p-button-outlined" 
                  onclick="selectItemAndJump(${itemRef}, '${key}')" 
                  aria-label="Dateien von ${variantName} (${key}) anzeigen">
            <span class="p-button-icon">${fileCount}</span>
          </button>
        </div>
      `;
    })
    .join("");
}

function renderVariantBadgesInTable() {
  const rows = document.querySelectorAll("#textureTable tr");

  if (rows.length === 0) {
    setTimeout(renderVariantBadgesInTable, 300);
    return;
  }

  document.querySelectorAll("#textureTable tr").forEach((row) => {
    const variantCell = row.cells[4]; // Varianten ist jetzt Spalte 4 (nach Entfernung von Hersteller & Katalog)
    const matIdCell = row.cells[3]; // Materialschlüssel ist jetzt Spalte 3 (nach Entfernung von Hersteller & Katalog)
    if (!variantCell || !matIdCell) return;

    const matId = matIdCell.textContent.trim();
    const item = itemByMaterialId[matId];
    if (!item) return;

    const keys = variantCell.textContent
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    variantCell.innerHTML = getVariantBadgeHTML(
      keys,
      `itemByMaterialId['${matId}']`
    );
  });
}

function toggleFileList() {
  const wrapper = document.getElementById("fileListWrapper");
  const icon = document.getElementById("fileListToggleIcon");

  const isHidden = wrapper.style.display === "none";

  wrapper.style.display = isHidden ? "" : "none";
  icon.classList.toggle("fa-chevron-down", isHidden);
  icon.classList.toggle("fa-chevron-right", !isHidden);
}

// Load variant names
fetch("https://77jb.github.io/77JB/cte-prototype/json/variant-names.json")
  .then((response) => response.json())
  .then((data) => {
    variantNameMap = data;
  })
  .catch((error) => {
    console.error("Fehler beim Laden der Variant-Namen:", error);
    variantNameMap = {};
  });

function getVariantName(key) {
  return variantNameMap[key] || "Variante " + key;
}

// Load texture files
fetch("https://77jb.github.io/77JB/cte-prototype/json/textures.json")
  .then((response) => response.json())
  .then((data) => {
    dekorPoolFiles = data;
    console.log("Geladene Daten:", dekorPoolFiles);

    // mainTextureFiles wird jetzt material-spezifisch in showDetails gesetzt
    // mainTextureFiles = mainTextureFileRefs[matId]
    //   .map((id) => dekorPoolFiles.find((f) => f.id === id))
    //   .filter(Boolean);

    // Für Varianten-Dateien
    Object.keys(variantFileRefs).forEach((key) => {
      variantFiles[key] = variantFileRefs[key]
        .map((id) => dekorPoolFiles.find((f) => f.id === id))
        .filter(Boolean);
    });
    renderVariantBadgesInTable();
  })
  .catch((error) => console.error("Fehler beim Laden der JSON-Datei:", error));

// Placeholder functions for file operations
function addFileFromDekorPool() {
  console.log("Add file from Dekor Pool");
  // Implementation für Dekor Pool Dialog
}

function uploadNewFile() {
  console.log("Upload new file");
  // Implementation für File Upload
}

function addFileToVariant(variantKey) {
  console.log("Add file to variant:", variantKey);
  // Implementation für Datei zu Variante hinzufügen
}

function removeVariantFile(variantKey, fileId) {
  console.log("Remove file from variant:", variantKey, fileId);
  // Implementation für Datei aus Variante entfernen
}

function removeFileFromDekorPool(fileId) {
  console.log("Remove file from dekor pool:", fileId);
  // Implementation für Datei aus Dekor Pool entfernen
  // Hier würde die Datei aus dem mainTextureFiles Array entfernt
  // und die UI entsprechend aktualisiert werden
}

// Global exports
window.item1 = item1;
window.item2 = item2;
window.item3 = item3;
window.item4 = item4;
window.item127A = item127A;
window.item128B = item128B;
window.item129C = item129C;
window.item130D = item130D;
window.item131E = item131E;
window.item132F = item132F;
window.item133G = item133G;
window.item134H = item134H;
window.item135I = item135I;
window.item136J = item136J;
window.item137K = item137K;
window.item138L = item138L;
window.item139M = item139M;
window.item140N = item140N;
window.item141O = item141O;
window.item142P = item142P;
window.item143Q = item143Q;
window.item144R = item144R;
window.item145S = item145S;
window.item146T = item146T;
window.showDetailsFromItem = showDetailsFromItem;
window.showVariantDetails = showVariantDetails;
window.removeFileFromDekorPool = removeFileFromDekorPool;

// Window resize handler for Babylon.js
window.addEventListener("resize", () => {
  if (babylonEngine) {
    babylonEngine.resize();
    // Kamera neu zentrieren, falls ein Modell geladen ist
    if (currentBabylonModel && babylonScene && babylonScene.activeCamera) {
      const boundingInfo = currentBabylonModel.getHierarchyBoundingVectors();
      const center = boundingInfo.min.add(boundingInfo.max).scale(0.5);
      babylonScene.activeCamera.target = center;
      // Optional: Radius anpassen, damit das Modell immer gleich groß erscheint
      const size = boundingInfo.max.subtract(boundingInfo.min).length();
      babylonScene.activeCamera.radius = size * 1.2; // 1.2 = etwas Abstand
    }
  }
});

// Initialize application when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Katalogtextur Verwaltung v3 initialized");

  // Initialize splitter
  initSplitter();

  // Add click handlers for table rows
  const tableRows = document.querySelectorAll(".p-datatable-row");
  tableRows.forEach((row) => {
    row.addEventListener("click", function () {
      // Remove active class from all rows
      tableRows.forEach((r) => r.classList.remove("selected"));
      // Add active class to clicked row
      this.classList.add("selected");
    });
  });

  // Add search functionality
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      filterTable();
    });
  }

  // Add checkbox functionality using event delegation for dynamic content
  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("p-checkbox-input")) {
      updateFooterCounts();
    }
  });

  // Initial footer count update
  updateFooterCounts();
});

// Catalog Search with AutoComplete simulation
function searchCatalog(input) {
  const searchTerm = input.value.toLowerCase();

  // Get all catalog options from the dropdown selects
  const editedSelect = document.getElementById("catalogSelectEdited");
  const importedSelect = document.getElementById("catalogSelectImported");

  let allCatalogs = [];

  // Collect options from both dropdowns (excluding "all" options)
  if (editedSelect) {
    Array.from(editedSelect.options).forEach((option) => {
      if (option.value !== "all" && option.textContent.trim()) {
        allCatalogs.push(option.textContent.trim());
      }
    });
  }

  if (importedSelect) {
    Array.from(importedSelect.options).forEach((option) => {
      if (option.value !== "all" && option.textContent.trim()) {
        allCatalogs.push(option.textContent.trim());
      }
    });
  }

  // Remove existing autocomplete dropdown if any
  const existingDropdown = document.querySelector(
    ".catalog-autocomplete-dropdown"
  );
  if (existingDropdown) {
    existingDropdown.remove();
  }

  // If search term is empty, don't show suggestions
  if (searchTerm.length < 2) {
    return;
  }

  // Filter catalogs based on search term
  const filteredCatalogs = allCatalogs.filter((catalog) =>
    catalog.toLowerCase().includes(searchTerm)
  );

  // Show autocomplete suggestions if any matches found
  if (filteredCatalogs.length > 0) {
    showCatalogSuggestions(input, filteredCatalogs, searchTerm);
  }
}

function showTableContent() {
  content = document.getElementById("material-table-panel");
  content.style.display = "block";
  content.style.visibility = "visible";
}

function showCatalogSuggestions(input, suggestions, searchTerm) {
  const container = input.closest(".p-autocomplete");

  // Create dropdown element
  const dropdown = document.createElement("div");
  dropdown.className =
    "catalog-autocomplete-dropdown p-autocomplete-panel p-component";
  dropdown.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    background: white;
    border: 1px solid var(--p-surface-border, #dee2e6);
    border-radius: var(--p-border-radius, 6px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-height: 200px;
    overflow-y: auto;
  `;

  // Add suggestions to dropdown
  suggestions.slice(0, 8).forEach((suggestion) => {
    const item = document.createElement("div");
    item.className = "p-autocomplete-item";
    item.style.cssText = `
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      border-bottom: 1px solid var(--p-surface-100, #f8f9fa);
      font-size: 0.875rem;
    `;

    // Highlight matching text
    const regex = new RegExp(`(${searchTerm})`, "gi");
    item.innerHTML = suggestion.replace(regex, "<strong>$1</strong>");

    // Add click handler
    item.addEventListener("click", () => {
      input.value = suggestion;
      dropdown.remove();
      // Simulate catalog selection
      selectCatalogFromSearch(suggestion);
    });

    // Add hover effect
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "var(--p-surface-100, #f8f9fa)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "transparent";
    });

    dropdown.appendChild(item);
  });

  container.appendChild(dropdown);

  // Close dropdown when clicking outside
  setTimeout(() => {
    document.addEventListener("click", function closeDropdown(e) {
      if (!container.contains(e.target)) {
        dropdown.remove();
        document.removeEventListener("click", closeDropdown);
      }
    });
  }, 10);
}

function selectCatalogFromSearch(catalogName) {
  // Update the current catalog title
  updateCurrentCatalogTitle(catalogName);

  // Try to find and select the catalog in the dropdown selects
  const editedSelect = document.getElementById("catalogSelectEdited");
  const importedSelect = document.getElementById("catalogSelectImported");

  // Check if catalog exists in edited catalogs
  if (editedSelect) {
    Array.from(editedSelect.options).forEach((option) => {
      if (option.textContent.trim() === catalogName) {
        editedSelect.value = option.value;
        console.log(`Selected catalog from edited: ${catalogName}`);
        return;
      }
    });
  }

  // Check if catalog exists in imported catalogs
  if (importedSelect) {
    Array.from(importedSelect.options).forEach((option) => {
      if (option.textContent.trim() === catalogName) {
        importedSelect.value = option.value;
        console.log(`Selected catalog from imported: ${catalogName}`);
        return;
      }
    });
  }

  console.log(`Catalog context switched to: ${catalogName}`);
}

// Function to update the current catalog title
function updateCurrentCatalogTitle(catalogName) {
  const titleElement = document.getElementById("currentCatalogTitle");
  if (titleElement) {
    titleElement.textContent = catalogName;
  }
  showTableContent();
}

// Add event listeners to dropdown selects to update title when changed
document.addEventListener("DOMContentLoaded", function () {
  const editedSelect = document.getElementById("catalogSelectEdited");
  const importedSelect = document.getElementById("catalogSelectImported");

  if (editedSelect) {
    editedSelect.addEventListener("change", function () {
      if (this.value !== "all") {
        const selectedText = this.options[this.selectedIndex].textContent;
        updateCurrentCatalogTitle(selectedText);
      } else {
        updateCurrentCatalogTitle("Katalog auswählen");
      }
    });
  }

  if (importedSelect) {
    importedSelect.addEventListener("change", function () {
      if (this.value !== "all") {
        const selectedText = this.options[this.selectedIndex].textContent;
        updateCurrentCatalogTitle(selectedText);
      } else {
        updateCurrentCatalogTitle("Katalog auswählen");
      }
    });
  }
});

// Table search autocomplete functionality
function showTableSearchSuggestions(input, searchTerm) {
  // Check if dropdown exists and just update the mode header
  const existingDropdown = document.querySelector(
    ".table-search-autocomplete-dropdown"
  );
  if (existingDropdown) {
    // Update mode header of existing dropdown
    const modeHeader = existingDropdown.querySelector(
      ".autocomplete-mode-header"
    );
    if (modeHeader) {
      // Get current search mode more reliably
      const checkedButton = document.querySelector(
        ".cte-search-wrapper .p-selectbutton .p-togglebutton-checked"
      );
      const isAndMode =
        checkedButton &&
        checkedButton
          .querySelector(".p-togglebutton-label")
          .textContent.trim() === "UND";

      modeHeader.textContent = `Suchmodus: ${
        isAndMode ? "UND (alle Begriffe)" : "ODER (beliebiger Begriff)"
      }`;
    }

    // If search term is the same, just return without recreating dropdown
    if (existingDropdown.dataset.searchTerm === searchTerm) {
      return;
    }

    // Remove existing dropdown if search term changed
    existingDropdown.remove();
  }

  // Don't show suggestions for very short terms
  if (searchTerm.length < 2) {
    return;
  }

  // Get current search mode dynamically - more reliable selector
  const checkedButton = document.querySelector(
    ".cte-search-wrapper .p-selectbutton .p-togglebutton-checked"
  );
  const isAndMode =
    checkedButton &&
    checkedButton.querySelector(".p-togglebutton-label").textContent.trim() ===
      "UND";

  // Collect all unique values from visible table cells
  const suggestions = new Set();
  const tableRows = document.querySelectorAll("#textureTable tr");

  tableRows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell, index) => {
      // Skip checkbox and image columns
      if (index === 0 || index === 1) return;

      const cellText = cell.textContent.trim();
      if (cellText && cellText.toLowerCase().includes(searchTerm)) {
        // Add the whole cell content
        suggestions.add(cellText);

        // Also add individual words if they contain the search term
        const words = cellText.split(/\s+/);
        words.forEach((word) => {
          if (word.toLowerCase().includes(searchTerm) && word.length > 2) {
            suggestions.add(word);
          }
        });
      }

      // Also check aria-label attributes in the cell
      const elementsWithAriaLabel = cell.querySelectorAll("[aria-label]");
      elementsWithAriaLabel.forEach((element) => {
        const ariaLabel = element.getAttribute("aria-label");
        if (ariaLabel && ariaLabel.toLowerCase().includes(searchTerm)) {
          suggestions.add(ariaLabel.trim());

          // Also add individual words from aria-label
          const ariaWords = ariaLabel.split(/\s+/);
          ariaWords.forEach((word) => {
            if (word.toLowerCase().includes(searchTerm) && word.length > 2) {
              suggestions.add(word);
            }
          });
        }
      });
    });

    // Also check aria-label on the row itself
    const rowAriaLabel = row.getAttribute("aria-label");
    if (rowAriaLabel && rowAriaLabel.toLowerCase().includes(searchTerm)) {
      suggestions.add(rowAriaLabel.trim());

      const ariaWords = rowAriaLabel.split(/\s+/);
      ariaWords.forEach((word) => {
        if (word.toLowerCase().includes(searchTerm) && word.length > 2) {
          suggestions.add(word);
        }
      });
    }
  });

  // Convert to array and sort by relevance
  const filteredSuggestions = Array.from(suggestions)
    .filter((suggestion) => suggestion.toLowerCase().includes(searchTerm))
    .sort((a, b) => {
      // Prioritize exact matches and shorter strings
      const aLower = a.toLowerCase();
      const bLower = b.toLowerCase();
      const termLower = searchTerm.toLowerCase();

      if (aLower.startsWith(termLower) && !bLower.startsWith(termLower))
        return -1;
      if (!aLower.startsWith(termLower) && bLower.startsWith(termLower))
        return 1;
      return a.length - b.length;
    })
    .slice(0, 8); // Limit to 8 suggestions

  if (filteredSuggestions.length > 0) {
    showTableSuggestionDropdown(input, filteredSuggestions, searchTerm);
  }
}

function showTableSuggestionDropdown(input, suggestions, searchTerm) {
  const container = input.closest(".cte-search");

  // Get current search mode dynamically - more reliable selector
  const checkedButton = document.querySelector(
    ".cte-search-wrapper .p-selectbutton .p-togglebutton-checked"
  );
  const isAndMode =
    checkedButton &&
    checkedButton.querySelector(".p-togglebutton-label").textContent.trim() ===
      "UND";

  // Create dropdown element
  const dropdown = document.createElement("div");
  dropdown.className =
    "table-search-autocomplete-dropdown p-autocomplete-panel p-component";
  dropdown.dataset.searchTerm = searchTerm; // Store search term for comparison

  // Get input position relative to viewport
  const inputRect = input.getBoundingClientRect();

  dropdown.style.cssText = `
    position: fixed;
    top: ${inputRect.bottom + window.scrollY}px;
    left: ${inputRect.left + window.scrollX}px;
    width: ${Math.max(inputRect.width, 300)}px;
    z-index: 9999;
    background: white;
    border: 1px solid var(--p-surface-border, #dee2e6);
    border-radius: var(--p-border-radius, 6px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    max-height: 200px;
    overflow-y: auto;
  `;

  // Add mode indicator header
  const modeHeader = document.createElement("div");
  modeHeader.className = "autocomplete-mode-header";
  modeHeader.style.cssText = `
    padding: 0.375rem 0.75rem;
    background: var(--p-surface-50, #f8f9fa);
    border-bottom: 1px solid var(--p-surface-200, #e9ecef);
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--p-text-color-secondary, #6c757d);
  `;
  modeHeader.textContent = `Suchmodus: ${
    isAndMode ? "UND (alle Begriffe)" : "ODER (beliebiger Begriff)"
  }`;
  dropdown.appendChild(modeHeader);

  // Add suggestions to dropdown
  suggestions.forEach((suggestion) => {
    const item = document.createElement("div");
    item.className = "p-autocomplete-item";
    item.style.cssText = `
      padding: 0.5rem 0.75rem;
      cursor: pointer;
      border-bottom: 1px solid var(--p-surface-100, #f8f9fa);
      font-size: 0.875rem;
      transition: background-color 0.2s;
    `;

    // Highlight matching text
    const regex = new RegExp(
      `(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    item.innerHTML = suggestion.replace(
      regex,
      '<strong style="background: yellow;">$1</strong>'
    );

    // Add hover effect
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "var(--p-surface-100, #f8f9fa)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "";
    });

    // Add click handler
    item.addEventListener("click", () => {
      // Replace the entire search field with the selected suggestion
      input.value = suggestion;

      dropdown.remove();

      // Trigger search with new value
      filterTable();
      input.focus();
    });

    dropdown.appendChild(item);
  });

  // Append dropdown to body to avoid overflow issues
  document.body.appendChild(dropdown);

  // Update position on scroll or resize
  const updatePosition = () => {
    const inputRect = input.getBoundingClientRect();
    dropdown.style.top = `${inputRect.bottom + window.scrollY}px`;
    dropdown.style.left = `${inputRect.left + window.scrollX}px`;
    dropdown.style.width = `${Math.max(inputRect.width, 300)}px`;
  };

  window.addEventListener("scroll", updatePosition);
  window.addEventListener("resize", updatePosition);

  // Add click outside handler to close dropdown
  const clickOutsideHandler = (e) => {
    if (!dropdown.contains(e.target) && !input.contains(e.target)) {
      dropdown.remove();
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("click", clickOutsideHandler);
    }
  };

  setTimeout(() => {
    document.addEventListener("click", clickOutsideHandler);
  }, 0);
}

// Keyboard navigation for table search
function handleTableSearchKeydown(event) {
  const dropdown = document.querySelector(
    ".table-search-autocomplete-dropdown"
  );
  if (!dropdown) return;

  const items = dropdown.querySelectorAll(".p-autocomplete-item");
  let selectedIndex = Array.from(items).findIndex(
    (item) =>
      item.style.backgroundColor === "var(--p-surface-100, #f8f9fa)" ||
      item.classList.contains("selected")
  );

  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      if (selectedIndex < items.length - 1) {
        if (selectedIndex >= 0) {
          items[selectedIndex].style.backgroundColor = "";
          items[selectedIndex].classList.remove("selected");
        }
        selectedIndex++;
        items[selectedIndex].style.backgroundColor =
          "var(--p-surface-100, #f8f9fa)";
        items[selectedIndex].classList.add("selected");
        items[selectedIndex].scrollIntoView({ block: "nearest" });
      }
      break;

    case "ArrowUp":
      event.preventDefault();
      if (selectedIndex > 0) {
        items[selectedIndex].style.backgroundColor = "";
        items[selectedIndex].classList.remove("selected");
        selectedIndex--;
        items[selectedIndex].style.backgroundColor =
          "var(--p-surface-100, #f8f9fa)";
        items[selectedIndex].classList.add("selected");
        items[selectedIndex].scrollIntoView({ block: "nearest" });
      }
      break;

    case "Enter":
      event.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      }
      break;

    case "Escape":
      event.preventDefault();
      dropdown.remove();
      break;
  }
}

// Kategorien Dialog Funktionalität
let isDragging = false;
let currentDialog = null;
let dragOffset = { x: 0, y: 0 };

function openCategoryDialog(event) {
  const dialog = document.getElementById("categoryDialog");
  const container = document.getElementById("categoryDialogContainer");

  // Dialog anzeigen
  dialog.style.display = "flex";

  // Einfache, sichere Positionierung - zentriert im Viewport
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%)";

  // Alternative: Position relativ zum Button wenn verfügbar
  if (event && event.currentTarget) {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();

    if (buttonRect && buttonRect.width > 0) {
      // Versuche Position relativ zum Button
      const dialogWidth = 350;
      let left = buttonRect.left - dialogWidth + buttonRect.width;
      let top = buttonRect.bottom + 10;

      // Grenzen prüfen
      if (left < 20) left = 20;
      if (left + dialogWidth > window.innerWidth - 20) {
        left = window.innerWidth - dialogWidth - 20;
      }
      if (top < 20) top = 20;
      if (top > window.innerHeight - 100) {
        top = buttonRect.top - 350; // Dialog über dem Button
      }

      // Nur setzen wenn Position gültig ist
      if (left >= 0 && top >= 0) {
        container.style.left = left + "px";
        container.style.top = top + "px";
        container.style.transform = "none";
      }
    }
  }

  // Event Listeners für Checkbox-Änderungen hinzufügen (nur einmal)
  const checkboxes = dialog.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    // Entferne alte Event Listener
    checkbox.removeEventListener("change", filterTableByCategories);
    // Füge neuen hinzu
    checkbox.addEventListener("change", filterTableByCategories);
  });

  // Drag & Drop Funktionalität aktivieren
  enableDialogDragging(container);
}

function closeCategoryDialog() {
  const dialog = document.getElementById("categoryDialog");
  dialog.style.display = "none";
}

function handleDialogDrag(e) {
  if (!isDragging || !currentDialog) return;

  const newX = e.clientX - dragOffset.x;
  const newY = e.clientY - dragOffset.y;

  // Grenzen einhalten
  const maxX = window.innerWidth - currentDialog.offsetWidth;
  const maxY = window.innerHeight - currentDialog.offsetHeight;

  const constrainedX = Math.max(0, Math.min(newX, maxX));
  const constrainedY = Math.max(0, Math.min(newY, maxY));

  currentDialog.style.left = constrainedX + "px";
  currentDialog.style.top = constrainedY + "px";
}

function handleDialogDragEnd() {
  isDragging = false;
  currentDialog = null;

  document.removeEventListener("mousemove", handleDialogDrag);
  document.removeEventListener("mouseup", handleDialogDragEnd);

  const header = document.querySelector(".dialog-header");
  if (header) {
    header.style.cursor = "move";
  }
}

function resetCategoryFilters() {
  const dialog = document.getElementById("categoryDialog");
  const checkboxes = dialog.querySelectorAll('input[type="checkbox"]');

  // Alle Checkboxen deaktivieren
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Tabellenfilter zurücksetzen
  filterTableByCategories();
}

function editCategories() {
  // Temporäre Simulation: Alert anzeigen
  alert(
    "Kategorien bearbeiten - Diese Funktion würde in der vollständigen Anwendung zu einem Bearbeitungsmodus führen."
  );

  // Optional: Dialog schließen
  // closeCategoryDialog();
}

function filterTableByCategories() {
  const dialog = document.getElementById("categoryDialog");
  const checkboxes = dialog.querySelectorAll('input[type="checkbox"]:checked');
  const selectedCategories = Array.from(checkboxes).map((cb) => cb.value);

  const tableRows = document.querySelectorAll("#textureTable tr");

  tableRows.forEach((row) => {
    if (selectedCategories.length === 0) {
      // Keine Filter ausgewählt - alle Zeilen anzeigen
      row.style.display = "";
    } else {
      // Kategorie-Spalte ist die 6. Spalte (Index 5)
      const categoryCell = row.cells[5];
      if (categoryCell) {
        const categoryTag = categoryCell.querySelector(".category-tag");
        const categoryText = categoryTag ? categoryTag.textContent.trim() : "";

        if (selectedCategories.includes(categoryText)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    }
  });

  // Footer-Zähler aktualisieren
  updateFooterCounts();
  updateActiveFilterIndicators();
}

function updateFooterCounts() {
  // Determine which table is currently active
  let activeTableId = "textureTable"; // Default: Material table

  const programmeTablePanel = document.getElementById("programme-table-panel");
  const ausfuehrungenTablePanel = document.getElementById(
    "ausfuehrungen-table-panel"
  );

  if (
    programmeTablePanel &&
    programmeTablePanel.style.display === "flex" &&
    programmeTablePanel.style.visibility === "visible"
  ) {
    activeTableId = "programmeTable";
  } else if (
    ausfuehrungenTablePanel &&
    ausfuehrungenTablePanel.style.display === "flex" &&
    ausfuehrungenTablePanel.style.visibility === "visible"
  ) {
    activeTableId = "ausfuehrungenTable";
  }

  const totalRows = document.querySelectorAll(`#${activeTableId} tr`).length;
  const visibleRows = document.querySelectorAll(
    `#${activeTableId} tr[style=""], #${activeTableId} tr:not([style*="display: none"])`
  ).length;
  const selectedRows = document.querySelectorAll(
    `#${activeTableId} tr input[type="checkbox"]:checked`
  ).length;

  const footerCounts = document.querySelectorAll(".cte-footer-count .stat-value");
  console.log("Footer Counts Elements:", footerCounts);
  if (footerCounts.length >= 3) {
    footerCounts[0].textContent = ` ${selectedRows}`;
    footerCounts[1].textContent = ` ${visibleRows}`;
    footerCounts[2].textContent = ` ${totalRows}`;
  }
}

// Event Listener für Klicks außerhalb des Dialogs
document.addEventListener("click", (event) => {
  const categoryDialog = document.getElementById("categoryDialog");
  const categoryContainer = document.getElementById("categoryDialogContainer");
  const categoryButton = document.querySelector(".icon-category");

  const filterDialog = document.getElementById("filterDialog");
  const filterContainer = document.getElementById("filterDialogContainer");
  const filterButton = document.querySelector(".icon-filter");

  // Kategorien Dialog
  if (categoryDialog && categoryDialog.style.display !== "none") {
    if (
      !categoryContainer.contains(event.target) &&
      !categoryButton.contains(event.target)
    ) {
      closeCategoryDialog();
    }
  }

  // Filter Dialog
  if (filterDialog && filterDialog.style.display !== "none") {
    if (
      !filterContainer.contains(event.target) &&
      !filterButton.contains(event.target)
    ) {
      closeFilterDialog();
    }
  }
});

// Event Listener für Escape-Taste
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const categoryDialog = document.getElementById("categoryDialog");
    const filterDialog = document.getElementById("filterDialog");
    if (categoryDialog && categoryDialog.style.display !== "none") {
      closeCategoryDialog();
    }
    if (filterDialog && filterDialog.style.display !== "none") {
      closeFilterDialog();
    }
  }
});

// Filter Dialog Funktionalität
let selectedColors = [];
let activeFilters = {
  colors: [],
  options: [],
};

function openFilterDialog(event) {
  const dialog = document.getElementById("filterDialog");
  const container = document.getElementById("filterDialogContainer");

  // Dialog anzeigen
  dialog.style.display = "flex";

  // Einfache, sichere Positionierung - zentriert im Viewport
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%)";

  // Alternative: Position relativ zum Button wenn verfügbar
  if (event && event.currentTarget) {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();

    if (buttonRect && buttonRect.width > 0) {
      // Versuche Position relativ zum Button
      const dialogWidth = 350;
      let left = buttonRect.left - dialogWidth + buttonRect.width - 32; // -32px für 2rem nach links
      let top = buttonRect.bottom + 10;

      // Grenzen prüfen
      if (left < 20) left = 20;
      if (left + dialogWidth > window.innerWidth - 20) {
        left = window.innerWidth - dialogWidth - 20;
      }
      if (top < 20) top = 20;
      if (top > window.innerHeight - 100) {
        top = buttonRect.top - 350; // Dialog über dem Button
      }

      // Nur setzen wenn Position gültig ist
      if (left >= 0 && top >= 0) {
        container.style.left = left + "px";
        container.style.top = top + "px";
        container.style.transform = "none";
      }
    }
  }

  // Event Listeners für Farbkacheln
  const colorItems = dialog.querySelectorAll(".filter-color-item");
  colorItems.forEach((item) => {
    item.removeEventListener("click", handleColorSelection);
    item.addEventListener("click", handleColorSelection);
  });

  // Event Listeners für Checkbox-Änderungen
  const checkboxes = dialog.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.removeEventListener("change", handleFilterChange);
    checkbox.addEventListener("change", handleFilterChange);
  });

  // Drag & Drop Funktionalität aktivieren
  enableDialogDragging(container);
}

function closeFilterDialog() {
  const dialog = document.getElementById("filterDialog");
  dialog.style.display = "none";
  updateActiveFilterIndicators();
}

function handleColorSelection(event) {
  const colorItem = event.currentTarget;
  const color = colorItem.dataset.color;

  if (colorItem.classList.contains("selected")) {
    // Deselektieren
    colorItem.classList.remove("selected");
    selectedColors = selectedColors.filter((c) => c !== color);
    activeFilters.colors = activeFilters.colors.filter((c) => c !== color);
  } else {
    // Selektieren
    colorItem.classList.add("selected");
    selectedColors.push(color);
    activeFilters.colors.push(color);
  }

  // Filter sofort anwenden
  applyFilters();
}

function handleFilterChange(event) {
  const checkbox = event.target;
  const value = checkbox.value;

  if (checkbox.checked) {
    if (!activeFilters.options.includes(value)) {
      activeFilters.options.push(value);
    }
  } else {
    activeFilters.options = activeFilters.options.filter((f) => f !== value);
  }

  // Filter sofort anwenden
  applyFilters();
}

function applyFilters() {
  const tableRows = document.querySelectorAll("#textureTable tr");

  tableRows.forEach((row) => {
    let visible = true;

    // Größenfilter anwenden
    if (
      activeFilters.options.includes("large") ||
      activeFilters.options.includes("medium") ||
      activeFilters.options.includes("small")
    ) {
      const breiteCell = row.cells[14]; // Breite Spalte
      const hoeheCell = row.cells[15]; // Höhe Spalte

      if (breiteCell && hoeheCell) {
        const breite = parseInt(breiteCell.textContent) || 0;
        const hoehe = parseInt(hoeheCell.textContent) || 0;
        const averageSize = (breite + hoehe) / 2;

        const sizeMatches =
          (activeFilters.options.includes("large") && averageSize > 1200) ||
          (activeFilters.options.includes("medium") &&
            averageSize >= 600 &&
            averageSize <= 1200) ||
          (activeFilters.options.includes("small") && averageSize < 600);

        if (!sizeMatches) visible = false;
      }
    }

    // Sortierung "Neuste zuerst"
    if (activeFilters.options.includes("newest")) {
      // Temporäre Simulation - in echter Anwendung würde die Tabelle sortiert
      // console.log('Sortierung: Neuste zuerst aktiviert');
    }

    // Helligkeit-Filter (Simulation)
    if (
      activeFilters.options.includes("dark") ||
      activeFilters.options.includes("light") ||
      activeFilters.options.includes("normal")
    ) {
      // Temporäre Simulation basierend auf Material Name
      const nameCell = row.cells[2];
      if (nameCell) {
        const name = nameCell.textContent.toLowerCase();
        const brightnessMatches =
          (activeFilters.options.includes("dark") &&
            (name.includes("dunkel") || name.includes("schwarz"))) ||
          (activeFilters.options.includes("light") &&
            (name.includes("hell") || name.includes("weiß"))) ||
          (activeFilters.options.includes("normal") &&
            !name.includes("dunkel") &&
            !name.includes("hell"));

        if (!brightnessMatches) visible = false;
      }
    }

    // Weitere Filter-Simulation für "Ohne Wiederholungsmuster"
    if (activeFilters.options.includes("no-pattern")) {
      // Temporäre Simulation - würde in echter Anwendung ein entsprechendes Feld prüfen
    }

    row.style.display = visible ? "" : "none";
  });

  // Footer-Zähler aktualisieren
  updateFooterCounts();
  updateActiveFilterIndicators();
}

function resetFilters() {
  const dialog = document.getElementById("filterDialog");

  // Alle Farbkacheln deselektieren
  const colorItems = dialog.querySelectorAll(".filter-color-item");
  colorItems.forEach((item) => {
    item.classList.remove("selected");
  });

  // Alle Checkboxen deaktivieren
  const checkboxes = dialog.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Filter-Arrays zurücksetzen
  selectedColors = [];
  activeFilters.colors = [];
  activeFilters.options = [];

  // Filter anwenden (zeigt alle Zeilen wieder an)
  applyFilters();
}

function editFilters() {
  // Temporäre Simulation
  alert(
    "Filter bearbeiten - Diese Funktion würde in der vollständigen Anwendung zu einem Bearbeitungsmodus führen."
  );
}

function updateActiveFilterIndicators() {
  const categoryButton = document.querySelector(".icon-category");
  const filterButton = document.querySelector(".icon-filter");

  // Kategorien-Filter prüfen
  const categoryDialog = document.getElementById("categoryDialog");
  const categoryCheckboxes = categoryDialog
    ? categoryDialog.querySelectorAll('input[type="checkbox"]:checked')
    : [];

  if (categoryCheckboxes.length > 0) {
    categoryButton.classList.add("has-active-filter");
  } else {
    categoryButton.classList.remove("has-active-filter");
  }

  // Material-Filter prüfen
  const hasActiveFilters =
    activeFilters.colors.length > 0 || activeFilters.options.length > 0;

  if (hasActiveFilters) {
    filterButton.classList.add("has-active-filter");
  } else {
    filterButton.classList.remove("has-active-filter");
  }
}

// Drag-Funktionalität für beide Dialoge
function enableDialogDragging(container) {
  const header = container.querySelector(".dialog-header");

  if (!header) return;

  // ===================================
  // Material Color Palette Functions
  // ===================================

  // Material color data from material_color_preview.html
  const materialColors = [
    { material: "1", hex: "#dfe0dd", rgb: "223, 224, 221" },
    { material: "6", hex: "#f8f5ef", rgb: "248, 245, 239" },
    { material: "14", hex: "#141613", rgb: "20, 22, 19" },
    { material: "53", hex: "#39120f", rgb: "57, 18, 15" },
    { material: "80", hex: "#f6f5f2", rgb: "246, 245, 242" },
    { material: "81", hex: "#cdc2b6", rgb: "205, 194, 182" },
    { material: "120", hex: "#f6f5f2", rgb: "246, 245, 242" },
    { material: "133", hex: "#5e6d6a", rgb: "94, 109, 106" },
    { material: "134", hex: "#22151c", rgb: "34, 21, 28" },
    { material: "137", hex: "#f2e2c8", rgb: "242, 226, 200" },
    { material: "138", hex: "#909893", rgb: "144, 152, 147" },
    { material: "139", hex: "#313836", rgb: "49, 56, 54" },
    { material: "140", hex: "#626260", rgb: "98, 98, 96" },
    { material: "141", hex: "#fcfcfb", rgb: "252, 252, 251" },
    { material: "145", hex: "#3c5064", rgb: "60, 80, 100" },
    { material: "147", hex: "#7f8d74", rgb: "127, 141, 116" },
    { material: "148", hex: "#8c8c8c", rgb: "140, 140, 140" },
    { material: "150", hex: "#41464b", rgb: "65, 70, 75" },
    { material: "152", hex: "#e5e2dd", rgb: "229, 226, 221" },
    { material: "153", hex: "#a59487", rgb: "165, 148, 135" },
    { material: "154", hex: "#542f36", rgb: "84, 47, 54" },
    { material: "155", hex: "#5e6d6a", rgb: "94, 109, 106" },
    { material: "156", hex: "#22151c", rgb: "34, 21, 28" },
    { material: "157", hex: "#f2e2c8", rgb: "242, 226, 200" },
    { material: "158", hex: "#909893", rgb: "144, 152, 147" },
    { material: "159", hex: "#313836", rgb: "49, 56, 54" },
    { material: "160", hex: "#626260", rgb: "98, 98, 96" },
    { material: "161", hex: "#fcfcfb", rgb: "252, 252, 251" },
    { material: "162", hex: "#3c5064", rgb: "60, 80, 100" },
    { material: "164", hex: "#8c8c8c", rgb: "140, 140, 140" },
    { material: "167", hex: "#e5e2dd", rgb: "229, 226, 221" },
    { material: "168", hex: "#a59487", rgb: "165, 148, 135" },
    { material: "169", hex: "#f2e2c8", rgb: "242, 226, 200" },
    { material: "170", hex: "#f2e2c8", rgb: "242, 226, 200" },
    { material: "171", hex: "#313836", rgb: "49, 56, 54" },
    { material: "172", hex: "#313836", rgb: "49, 56, 54" },
    { material: "173", hex: "#fcfcfb", rgb: "252, 252, 251" },
    { material: "174", hex: "#fcfcfb", rgb: "252, 252, 251" },
    { material: "175", hex: "#8c8c8c", rgb: "140, 140, 140" },
    { material: "176", hex: "#8c8c8c", rgb: "140, 140, 140" },
    { material: "177", hex: "#e5e2dd", rgb: "229, 226, 221" },
    { material: "178", hex: "#e5e2dd", rgb: "229, 226, 221" },
    { material: "179", hex: "#666060", rgb: "102, 96, 96" },
    { material: "180", hex: "#b0aa9c", rgb: "176, 170, 156" },
    { material: "181", hex: "#252525", rgb: "37, 37, 37" },
    { material: "182", hex: "#35382b", rgb: "53, 56, 43" },
    { material: "184", hex: "#626260", rgb: "98, 98, 96" },
    { material: "185", hex: "#654641", rgb: "101, 70, 65" },
    { material: "192", hex: "#666c7c", rgb: "102, 108, 124" },
    { material: "193", hex: "#2b323c", rgb: "43, 50, 60" },
    { material: "194", hex: "#61544c", rgb: "97, 84, 76" },
    { material: "195", hex: "#a49987", rgb: "164, 153, 135" },
    { material: "196", hex: "#8e8a7e", rgb: "142, 138, 126" },
    { material: "197", hex: "#d1ccc6", rgb: "209, 204, 198" },
    { material: "201", hex: "#51574d", rgb: "81, 87, 77" },
    { material: "202", hex: "#b5b2a9", rgb: "181, 178, 169" },
    { material: "213", hex: "#f8f5ef", rgb: "248, 245, 239" },
    { material: "237", hex: "#f8f5ef", rgb: "248, 245, 239" },
    { material: "240", hex: "#f6f5f2", rgb: "246, 245, 242" },
    { material: "252", hex: "#141613", rgb: "20, 22, 19" },
    { material: "253", hex: "#cdc2b6", rgb: "205, 194, 182" },
    { material: "281", hex: "#141613", rgb: "20, 22, 19" },
    { material: "284", hex: "#141613", rgb: "20, 22, 19" },
    { material: "285", hex: "#141613", rgb: "20, 22, 19" },
    { material: "290", hex: "#f8f5ef", rgb: "248, 245, 239" },
    { material: "292", hex: "#f8f5ef", rgb: "248, 245, 239" },
    { material: "300", hex: "#141614", rgb: "20, 22, 20" },
    { material: "301", hex: "#c2d3cd", rgb: "194, 211, 205" },
    { material: "302", hex: "#c3c8cb", rgb: "195, 200, 203" },
    { material: "303", hex: "#d2d3d5", rgb: "210, 211, 213" },
    { material: "315", hex: "#99a9b9", rgb: "153, 169, 185" },
    { material: "345", hex: "#cdc2b6", rgb: "205, 194, 182" },
    { material: "350", hex: "#dfe0dd", rgb: "223, 224, 221" },
    { material: "367", hex: "#cdc2b6", rgb: "205, 194, 182" },
    { material: "370", hex: "#f8f5ef", rgb: "248, 245, 239" },
    { material: "634", hex: "#bac0c7", rgb: "186, 192, 199" },
  ];

  // Feature data with color variants (simplified sample)
  const featureData = [
    {
      featureNumber: "101",
      featureName: "Frontfarbe",
      variantCount: 73,
      variants: [
        { name: "Graphit", color: "#313836" },
        { name: "Schwarz matt", color: "#141613" },
        { name: "Perlgrau", color: "#8c8c8c" },
        { name: "Balticblau", color: "#666c7c" },
        { name: "Graphit glänzend", color: "#313836" },
        { name: "Graphit matt", color: "#313836" },
        { name: "Kristallweiß", color: "#fcfcfb" },
        { name: "Kristallweiß glänzend", color: "#fcfcfb" },
        { name: "Esche-kristallweiß", color: "#fcfcfb" },
        { name: "Kaschmir", color: "#cdc2b6" },
      ],
    },
    {
      featureNumber: "105",
      featureName: "Front Kombination",
      variantCount: 289,
      variants: [
        { name: "SCALA Balticblau Melaminharzbeschichtung", color: "#666c7c" },
        { name: "SMART Kristallweiß Polymerglas", color: "#fcfcfb" },
        {
          name: "UNO Steinbeige Melaminharzbeschichtung Feinstruktur",
          color: "#b5b2a9",
        },
        {
          name: "TOP BRILLANT Steinbeige Direktlack glänzend",
          color: "#b5b2a9",
        },
        { name: "VEGAS Braun metallic Lacklaminat", color: "#61544c" },
      ],
    },
    {
      featureNumber: "150",
      featureName: "Glasausführung",
      variantCount: 3,
      variants: [
        { name: "Akzentglastür Perlgrau Mattglas", color: "#8c8c8c" },
        { name: "Akzentglastür Graphit Mattglas", color: "#313836" },
        { name: "Akzentglastür Weiß Mattglas", color: "#f8f5ef" },
      ],
    },
    {
      featureNumber: "202",
      featureName: "Korpusaußenfarbe",
      variantCount: 12,
      variants: [
        { name: "Satin", color: "#e5e2dd" },
        { name: "Crema-magnolie", color: "#f2e2c8" },
        { name: "Schwarz", color: "#141613" },
        { name: "Kaschmir", color: "#cdc2b6" },
        { name: "Graphit", color: "#313836" },
      ],
    },
  ];

  function loadColorPaletteData() {
    // Populate color grid
    const colorGrid = document.getElementById("colorGrid");
    if (!colorGrid) return;

    colorGrid.innerHTML = "";

    materialColors.forEach((color) => {
      const colorCard = document.createElement("div");
      colorCard.className = "color-card";
      colorCard.dataset.material = color.material;

      colorCard.innerHTML = `
      <div class="color-swatch" style="background-color: ${color.hex};"></div>
      <div class="color-info">
        <div class="material-no">Material Farbe ${color.material}</div>
        <div class="hex-code">${color.hex}</div>
        <div class="rgb-code">RGB(${color.rgb})</div>
      </div>
    `;

      // Click to copy hex code
      colorCard.addEventListener("click", () => {
        navigator.clipboard.writeText(color.hex);

        // Visual feedback
        const originalBg = colorCard.style.background;
        colorCard.style.background = "#e8f5e9";
        setTimeout(() => {
          colorCard.style.background = originalBg;
        }, 300);
      });

      colorGrid.appendChild(colorCard);
    });

    // Populate feature list
    const featureList = document.getElementById("featureList");
    if (!featureList) return;

    featureList.innerHTML = "";

    featureData.forEach((feature) => {
      const featureItem = document.createElement("div");
      featureItem.className = "feature-item";

      const variantsHtml = feature.variants
        .slice(0, 10)
        .map(
          (variant) => `
      <div class="variant-chip">
        <div class="variant-color-dot" style="background-color: ${variant.color};"></div>
        <span>${variant.name}</span>
      </div>
    `
        )
        .join("");

      const moreCount =
        feature.variantCount - Math.min(10, feature.variants.length);
      const moreChip =
        moreCount > 0
          ? `
      <div class="variant-chip">
        <span>+${moreCount} weitere...</span>
      </div>
    `
          : "";

      featureItem.innerHTML = `
      <div class="feature-header">
        <div>
          <div class="feature-title">${feature.featureName}</div>
          <div class="variant-count">${feature.variantCount} Varianten</div>
        </div>
        <div class="feature-number">Feature ${feature.featureNumber}</div>
      </div>
      <div class="variants-preview">
        ${variantsHtml}
        ${moreChip}
      </div>
    `;

      featureList.appendChild(featureItem);
    });

    // Setup search functionality
    setupColorSearch();
  }

  function setupColorSearch() {
    const searchBox = document.getElementById("colorSearchBox");
    const colorCards = document.querySelectorAll(".color-card");

    if (!searchBox) return;

    searchBox.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();

      colorCards.forEach((card) => {
        const materialNo = card.dataset.material.toLowerCase();
        if (materialNo.includes(searchTerm)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    currentDialog = container;

    const rect = container.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left;
    dragOffset.y = e.clientY - rect.top;

    document.addEventListener("mousemove", handleDialogDrag);
    document.addEventListener("mouseup", handleDialogDragEnd);

    header.style.cursor = "grabbing";
    e.preventDefault();
  });
}
