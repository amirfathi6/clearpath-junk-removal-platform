const providers = [
  {
    name: "LoadLift Junk Co.",
    type: "Full-service hauler",
    category: "hauler",
    baseScore: 84,
    min: 145,
    max: 420,
    speed: "Same or next day",
    response: "18 min avg",
    onTime: 92,
    eco: 67,
    rating: 4.7,
    marketSignal: "3 pickup windows likely this week",
    valueBadge: "Avoids repeat quote calls",
    site: "https://example.com/providers/loadlift-junk-co",
    contact: {
      phone: "(415) 555-0184",
      email: "dispatch@loadlift.example",
      hours: "Mon-Sat, 7 AM-7 PM",
      serviceArea: "Dense metro ZIP codes"
    },
    itemFit: ["furniture", "mattress", "appliances", "electronics"],
    strengths: ["Strong bulky item fit", "Good photo quote workflow", "Licensed two-person crews"],
    risks: ["Higher minimum for stairs"]
  },
  {
    name: "Renew Pickup Network",
    type: "Donation-first route",
    category: "eco",
    baseScore: 78,
    min: 0,
    max: 95,
    speed: "2-5 days",
    response: "2 hr avg",
    onTime: 88,
    eco: 96,
    rating: 4.6,
    marketSignal: "Donation intake fills quickly",
    valueBadge: "May reduce disposal cost",
    site: "https://example.com/providers/renew-pickup-network",
    contact: {
      phone: "(888) 555-0136",
      email: "pickup@renew.example",
      hours: "Tue-Sat, 9 AM-5 PM",
      serviceArea: "Donation partner routes"
    },
    itemFit: ["furniture", "electronics", "appliances"],
    strengths: ["Prioritizes reuse before disposal", "Best for good-condition items", "Low customer cost"],
    risks: ["May reject damaged or stained items"]
  },
  {
    name: "Metro Clearout Pros",
    type: "Large cleanout specialist",
    category: "hauler",
    baseScore: 81,
    min: 225,
    max: 790,
    speed: "Next day",
    response: "31 min avg",
    onTime: 86,
    eco: 58,
    rating: 4.5,
    marketSignal: "Best for large jobs before weekend",
    valueBadge: "Handles difficult access",
    site: "https://example.com/providers/metro-clearout-pros",
    contact: {
      phone: "(510) 555-0169",
      email: "quotes@metroclearout.example",
      hours: "Daily, 6 AM-8 PM",
      serviceArea: "Large cleanouts and multi-room jobs"
    },
    itemFit: ["construction", "yard", "furniture", "mattress", "appliances"],
    strengths: ["Best fit for high-volume jobs", "Handles difficult access", "Transparent truck-load pricing"],
    risks: ["Some late-arrival reports during weekend slots"]
  },
  {
    name: "City Reuse & Recycling Desk",
    type: "Municipal and recycling guidance",
    category: "eco",
    baseScore: 72,
    min: 25,
    max: 160,
    speed: "Flexible",
    response: "Self-service",
    onTime: 100,
    eco: 91,
    rating: 4.2,
    marketSignal: "Local rules vary by ZIP",
    valueBadge: "Finds lower-cost routes",
    site: "https://example.com/providers/city-reuse-recycling-desk",
    contact: {
      phone: null,
      email: "recycling-info@citydesk.example",
      hours: "Online guidance, 24/7",
      serviceArea: "ZIP-specific municipal guidance"
    },
    itemFit: ["electronics", "yard", "appliances", "mattress"],
    strengths: ["Ethical disposal guidance", "Good for electronics and appliances", "Often cheapest with flexible timing"],
    risks: ["Customer may need drop-off or curb sorting"]
  },
  {
    name: "Neighborhood Donation Center",
    type: "Local donation drop-off",
    category: "eco",
    baseScore: 74,
    min: 0,
    max: 45,
    speed: "Flexible",
    response: "Walk-in or scheduled",
    onTime: 100,
    eco: 94,
    rating: 4.4,
    marketSignal: "Reusable items accepted by condition",
    valueBadge: "Can avoid landfill fees",
    site: "https://example.com/local/neighborhood-donation-center",
    contact: {
      phone: "(800) 555-0142",
      email: "intake@donation-center.example",
      hours: "Mon-Sat, 10 AM-6 PM",
      serviceArea: "Reusable furniture and household goods"
    },
    itemFit: ["furniture", "electronics", "appliances"],
    strengths: ["Best for items still in usable condition", "Often avoids disposal fees", "Can redirect rejected items to recycling partners"],
    risks: ["Drop-off or scheduled intake may be required"]
  },
  {
    name: "Regional Scrap & E-Waste Yard",
    type: "Scrap and recycling drop-off",
    category: "eco",
    baseScore: 73,
    min: 0,
    max: 85,
    speed: "Same day drop-off",
    response: "Self-service",
    onTime: 100,
    eco: 89,
    rating: 4.3,
    marketSignal: "Same-day drop-off can close early",
    valueBadge: "Best for recoverable materials",
    site: "https://example.com/local/regional-scrap-ewaste-yard",
    contact: {
      phone: "(877) 555-0129",
      email: "scalehouse@scrap-ewaste.example",
      hours: "Mon-Fri, 8 AM-5 PM",
      serviceArea: "Appliances, metal, electronics, and recyclable materials"
    },
    itemFit: ["appliances", "electronics", "construction"],
    strengths: ["Strong fit for appliances and e-waste", "Lower-cost path when customer can transport", "Keeps recoverable material out of landfill"],
    risks: ["May require unloading and proof of residency for some materials"]
  },
  {
    name: "RapidHaul Marketplace Partner",
    type: "On-demand hauler",
    category: "hauler",
    baseScore: 76,
    min: 185,
    max: 510,
    speed: "Today",
    response: "9 min avg",
    onTime: 79,
    eco: 49,
    rating: 4.1,
    marketSignal: "Fast slots change throughout the day",
    valueBadge: "Fastest booking path",
    site: "https://example.com/providers/rapidhaul-marketplace-partner",
    contact: {
      phone: "(855) 555-0198",
      email: null,
      hours: "On-demand windows, market dependent",
      serviceArea: "Most high-density service areas"
    },
    itemFit: ["furniture", "mattress", "yard", "construction"],
    strengths: ["Best speed for urgent jobs", "Instant booking windows", "Covers most dense ZIP codes"],
    risks: ["Repeated professionalism complaints in a few markets"]
  }
];

const volumeProfile = {
  small: { label: "Small load", min: 0.75, max: 0.85, size: "Small load" },
  medium: { label: "Medium load", min: 1, max: 1, size: "Medium load" },
  large: { label: "Large load", min: 1.45, max: 1.65, size: "Large load" },
  estate: { label: "Cleanout", min: 2.2, max: 2.8, size: "Estate cleanout" }
};

const itemComplexity = {
  furniture: 26,
  appliances: 42,
  electronics: 18,
  yard: 22,
  construction: 72,
  mattress: 34
};

const scanCatalog = [
  {
    name: "Sofa or sectional",
    category: "furniture",
    keywords: ["sofa", "sectional", "couch", "loveseat"],
    low: 95,
    high: 185,
    confidence: 88,
    route: "Donation pickup if upholstery is clean"
  },
  {
    name: "Mattress",
    category: "mattress",
    keywords: ["mattress", "bed", "boxspring", "box-spring"],
    low: 80,
    high: 165,
    confidence: 90,
    route: "Recycling route preferred where available"
  },
  {
    name: "Dresser or cabinet",
    category: "furniture",
    keywords: ["dresser", "cabinet", "wardrobe", "shelf", "bookcase"],
    low: 70,
    high: 145,
    confidence: 84,
    route: "Reusable furniture candidate"
  },
  {
    name: "Dining chair set",
    category: "furniture",
    keywords: ["chair", "chairs", "stool", "dining"],
    low: 45,
    high: 120,
    confidence: 78,
    route: "Donation if stable and unstained"
  },
  {
    name: "Television or monitor",
    category: "electronics",
    keywords: ["tv", "television", "monitor", "screen"],
    low: 35,
    high: 95,
    confidence: 82,
    route: "E-waste recycling required"
  },
  {
    name: "Refrigerator or freezer",
    category: "appliances",
    keywords: ["fridge", "refrigerator", "freezer"],
    low: 135,
    high: 265,
    confidence: 87,
    route: "Appliance recycler with refrigerant handling"
  },
  {
    name: "Washer or dryer",
    category: "appliances",
    keywords: ["washer", "dryer", "laundry"],
    low: 115,
    high: 225,
    confidence: 84,
    route: "Scrap or appliance recycling"
  },
  {
    name: "Yard debris bundle",
    category: "yard",
    keywords: ["yard", "branches", "brush", "leaves", "tree"],
    low: 55,
    high: 155,
    confidence: 79,
    route: "Green waste compost stream"
  },
  {
    name: "Construction debris",
    category: "construction",
    keywords: ["debris", "wood", "drywall", "tile", "renovation", "construction"],
    low: 120,
    high: 340,
    confidence: 81,
    route: "Weight-based disposal pricing likely"
  },
  {
    name: "Bagged household junk",
    category: "construction",
    keywords: ["bags", "trash", "bagged", "cleanout", "junk"],
    low: 65,
    high: 180,
    confidence: 75,
    route: "Volume-based hauler pickup"
  }
];

const form = document.querySelector("#matchForm");
const recommendationRoot = document.querySelector("#recommendations");
const tabs = document.querySelectorAll(".tab");
const toast = document.querySelector("#toast");
const imageUpload = document.querySelector("#imageUpload");
const imagePreview = document.querySelector("#imagePreview");
const previewFrame = document.querySelector("#previewFrame");
const analyzeImageButton = document.querySelector("#analyzeImageButton");
const applyScanButton = document.querySelector("#applyScanButton");
const clearImageButton = document.querySelector("#clearImageButton");
const scanStatus = document.querySelector("#scanStatus");
const detectedItemsRoot = document.querySelector("#detectedItems");
const detectedCount = document.querySelector("#detectedCount");
const detectedRange = document.querySelector("#detectedRange");
const detectedConfidence = document.querySelector("#detectedConfidence");
let activeFilter = "all";
let uploadedImageMeta = null;
let detectedItems = [];

function selectedItems() {
  if (detectedItems.length) {
    return [...new Set(detectedItems.map((item) => item.category))];
  }

  return [...document.querySelectorAll("#itemChoices input:checked")].map((input) => input.value);
}

function getState() {
  return {
    zip: document.querySelector("#zipCode").value.trim(),
    items: selectedItems(),
    volume: document.querySelector("#volume").value,
    condition: document.querySelector("#condition").value,
    timeline: document.querySelector("input[name='timeline']:checked").value,
    priority: document.querySelector("#priority").value,
    stairs: document.querySelector("#stairs").checked,
    photoReady: document.querySelector("#photoReady").checked,
    scanItems: detectedItems
  };
}

function money(value) {
  return `$${Math.max(0, Math.round(value / 5) * 5)}`;
}

function estimateRange(provider, state) {
  const volume = volumeProfile[state.volume];
  const complexity = state.items.reduce((total, item) => total + (itemComplexity[item] || 0), 0);
  const urgency = state.timeline === "today" ? 55 : state.timeline === "week" ? 20 : -15;
  const access = state.stairs ? 35 : 0;
  const photoDiscount = state.photoReady ? -18 : 0;
  const disposalPremium = state.condition === "hazard" ? 75 : state.condition === "poor" ? 28 : 0;
  const donationRelief = provider.category === "eco" && state.condition === "good" ? -42 : 0;

  if (state.scanItems.length) {
    const itemized = sumDetectedRange(state.scanItems);
    const routeFactor = provider.category === "eco" ? 0.42 : provider.name.includes("Clearout") ? 1.12 : 0.98;
    const routeMinimum = provider.category === "eco" ? provider.min : Math.max(provider.min, itemized.low * 0.55);
    const low = (routeMinimum + itemized.low * routeFactor + urgency + access + photoDiscount + donationRelief) * volume.min;
    const high = (provider.min + itemized.high * (routeFactor + 0.18) + urgency + access + disposalPremium) * volume.max;
    return { low, high };
  }

  const low = (provider.min + complexity * 0.45 + urgency + access + photoDiscount + donationRelief) * volume.min;
  const high = (provider.max + complexity * 0.85 + urgency + access + disposalPremium) * volume.max;
  return { low, high };
}

function scoreProvider(provider, state) {
  let score = provider.baseScore;
  const matchingItems = state.items.filter((item) => provider.itemFit.includes(item)).length;
  score += matchingItems * 4;
  score -= Math.max(0, state.items.length - matchingItems) * 5;

  if (state.timeline === "today") {
    score += provider.speed.includes("Today") || provider.speed.includes("Same") ? 12 : -10;
  }
  if (state.timeline === "flexible" && provider.category === "eco") score += 9;
  if (state.condition === "good" && provider.category === "eco") score += 13;
  if (state.condition === "poor" && provider.category === "eco") score -= 6;
  if (state.condition === "hazard" && provider.name.includes("Desk")) score += 10;
  if (state.stairs && provider.name.includes("Clearout")) score += 6;
  if (state.photoReady && provider.strengths.some((strength) => strength.includes("photo"))) score += 5;
  if (state.scanItems.length && provider.strengths.some((strength) => strength.includes("photo"))) score += 6;
  if (state.scanItems.some((item) => item.category === "appliances") && provider.itemFit.includes("appliances")) score += 4;
  if (state.scanItems.some((item) => item.category === "electronics") && provider.eco > 85) score += 5;

  const priorityAdjustments = {
    lowest: provider.min < 100 ? 13 : provider.min > 200 ? -8 : 2,
    fastest: provider.speed.includes("Today") || provider.speed.includes("Same") ? 14 : -5,
    greenest: Math.round((provider.eco - 60) / 3),
    premium: Math.round((provider.onTime - 82) / 2),
    balanced: Math.round((provider.rating - 4.2) * 5)
  };

  score += priorityAdjustments[state.priority] || 0;
  return Math.max(0, Math.min(99, Math.round(score)));
}

function recommendationReason(provider, state, estimate) {
  const reasons = [...provider.strengths];
  if (provider.category === "eco" && state.condition === "good") {
    reasons.unshift("Recommended because the items may still have reuse or donation value");
  }
  if (state.timeline === "today" && provider.speed.includes("Today")) {
    reasons.unshift("Can support urgent pickup windows");
  }
  if (state.priority === "greenest" && provider.eco > 85) {
    reasons.unshift("High eco score versus landfill-heavy alternatives");
  }
  if (estimate.low < 100) {
    reasons.unshift("Likely low out-of-pocket customer cost");
  }
  return reasons.slice(0, 4);
}

function renderRecommendations() {
  const state = getState();
  if (!state.scanItems.length) {
    recommendationRoot.innerHTML = `
      <div class="empty-recommendations">
        <strong>Upload and analyze an image to generate options.</strong>
        <span>The platform will use recognized items to rank haulers, donation pickups, recycling paths, scrap options, and local drop-off routes.</span>
      </div>
    `;
    updateMetrics([], state);
    return;
  }

  const scored = providers
    .filter((provider) => activeFilter === "all" || provider.category === activeFilter)
    .map((provider) => {
      const estimate = estimateRange(provider, state);
      return {
        ...provider,
        score: scoreProvider(provider, state),
        estimate
      };
    })
    .sort((a, b) => b.score - a.score);

  recommendationRoot.innerHTML = scored.map((provider, index) => cardTemplate(provider, index + 1, state)).join("");
  updateMetrics(scored, state);
}

function updateMetrics(scored, state) {
  if (!state.scanItems.length) {
    document.querySelector("#sizeMetric").textContent = "Awaiting image";
    document.querySelector("#rangeMetric").textContent = "$0-$0";
    document.querySelector("#fitMetric").textContent = "Upload first";
    document.querySelector("#ecoMetric").textContent = "--";
    return;
  }

  const first = scored[0];
  const allEstimates = scored.map((provider) => provider.estimate);
  const itemized = sumDetectedRange(state.scanItems);
  const min = Math.min(itemized.low, ...allEstimates.map((estimate) => estimate.low));
  const max = Math.max(itemized.high, ...allEstimates.map((estimate) => estimate.high));
  const ecoConfidence = first && first.eco > 88 ? "Very high" : first && first.eco > 70 ? "High" : "Moderate";
  const reusable = state.scanItems.filter((item) => item.route.includes("Donation") || item.route.includes("Reusable") || item.route.includes("recycling")).length;
  const fit = reusable >= Math.ceil(state.scanItems.length / 2) && state.timeline !== "today"
    ? "Reuse or recycle first"
    : first?.category === "eco"
      ? "Local route"
      : "Full-service pickup";

  document.querySelector("#sizeMetric").textContent = volumeProfile[state.volume].size;
  document.querySelector("#rangeMetric").textContent = `${money(min)}-${money(max)}`;
  document.querySelector("#fitMetric").textContent = fit;
  document.querySelector("#ecoMetric").textContent = ecoConfidence;
}

function cardTemplate(provider, rank, state) {
  const estimate = `${money(provider.estimate.low)}-${money(provider.estimate.high)}`;
  const reasons = recommendationReason(provider, state, provider.estimate)
    .map((reason) => `
      <li>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>
        <span>${reason}</span>
      </li>
    `)
    .join("");
  const riskClass = provider.risks.some((risk) => risk.includes("complaints")) ? "risk" : "warning";
  const phone = provider.contact.phone || "Not listed";
  const email = provider.contact.email || "Not listed";

  return `
    <details class="recommendation-card">
      <summary class="recommendation-summary">
        <div class="summary-main">
          <span class="rank-badge">${rank}</span>
          <div class="summary-provider">
            <a class="provider-name" href="${provider.site}" target="_blank" rel="noopener noreferrer">
              ${provider.name}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M9 7h8v8"></path></svg>
            </a>
            <span class="provider-type">${provider.type}</span>
            <span class="provider-contact">${phone}</span>
            <span class="urgency-line">${provider.marketSignal}</span>
          </div>
        </div>

        <div class="summary-badges">
          <span>${provider.valueBadge}</span>
          <span>${provider.category === "eco" ? "Local route" : "Service-ready"}</span>
        </div>

        <div class="summary-meta" aria-label="Collapsed company summary">
          <div>
            <span>Estimate</span>
            <strong>${estimate}</strong>
          </div>
          <div>
            <span>Availability</span>
            <strong>${provider.speed}</strong>
          </div>
          <div>
            <span>Match</span>
            <strong>${provider.score}</strong>
          </div>
          <div>
            <span>Contact</span>
            <strong>${provider.contact.phone ? "Phone listed" : provider.contact.email ? "Email only" : "Self-service"}</strong>
          </div>
        </div>
      </summary>

      <div class="recommendation-body">
        <div class="recommendation-meta">
          <div class="meta-item">
            <span>Estimate</span>
            <strong>${estimate}</strong>
          </div>
          <div class="meta-item">
            <span>Availability</span>
            <strong>${provider.speed}</strong>
          </div>
          <div class="meta-item">
            <span>On time</span>
            <strong>${provider.onTime}%</strong>
          </div>
          <div class="meta-item">
            <span>Eco score</span>
            <strong>${provider.eco}/100</strong>
          </div>
        </div>

        <div class="contact-grid">
          <div>
            <span>Website</span>
            <a href="${provider.site}" target="_blank" rel="noopener noreferrer">${provider.site.replace("https://", "")}</a>
          </div>
          <div>
            <span>Phone</span>
            <strong>${phone}</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>${email}</strong>
          </div>
          <div>
            <span>Hours</span>
            <strong>${provider.contact.hours}</strong>
          </div>
          <div>
            <span>Service fit</span>
            <strong>${provider.contact.serviceArea}</strong>
          </div>
          <div>
            <span>Response</span>
            <strong>${provider.response}</strong>
          </div>
        </div>

        <div class="conversion-panel">
          <div>
            <span>Why act now</span>
            <strong>${provider.marketSignal}</strong>
          </div>
          <div>
            <span>Platform value</span>
            <strong>${provider.valueBadge} without manually comparing every option.</strong>
          </div>
        </div>

        <ul class="reason-list">${reasons}</ul>

        <ul class="reason-list">
          <li>
            <svg class="${riskClass}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="m10.3 4.3-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-2.7l-8-14a2 2 0 0 0-3.4 0Z"></path></svg>
            <span>${provider.risks[0]}</span>
          </li>
        </ul>

        <div class="card-actions">
          <button class="secondary-button" type="button" data-action="details" data-provider="${provider.name}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Compare details
          </button>
          <button class="secondary-button" type="button" data-action="shortlist" data-provider="${provider.name}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21 12 17 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"></path></svg>
            Shortlist
          </button>
        </div>
      </div>
    </details>
  `;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function sumDetectedRange(items) {
  return items.reduce(
    (total, item) => ({
      low: total.low + item.low,
      high: total.high + item.high
    }),
    { low: 0, high: 0 }
  );
}

function updateScanSummary(items) {
  const range = sumDetectedRange(items);
  const averageConfidence = items.length
    ? Math.round(items.reduce((total, item) => total + item.confidence, 0) / items.length)
    : 0;

  detectedCount.textContent = items.length;
  detectedRange.textContent = `${money(range.low)}-${money(range.high)}`;
  detectedConfidence.textContent = items.length ? `${averageConfidence}%` : "--";
}

function setScanStatus(label, state = "neutral") {
  scanStatus.textContent = label;
  scanStatus.className = `status-pill ${state}`;
}

function seededIndex(seed, length) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % 9973;
  }
  return hash % length;
}

function pickFallbackItems(meta) {
  const seed = `${meta.name}-${meta.width}-${meta.height}-${meta.size}`;
  const isLandscape = meta.width >= meta.height * 1.18;
  const isPortrait = meta.height >= meta.width * 1.18;
  const isLargeFile = meta.size > 2_500_000;
  const landscapeSet = ["Sofa or sectional", "Dining chair set", "Television or monitor"];
  const portraitSet = ["Mattress", "Dresser or cabinet", "Bagged household junk"];
  const denseSet = ["Construction debris", "Bagged household junk", "Washer or dryer"];
  const balancedSet = ["Dresser or cabinet", "Television or monitor", "Yard debris bundle"];
  const names = isLargeFile ? denseSet : isLandscape ? landscapeSet : isPortrait ? portraitSet : balancedSet;
  const offset = seededIndex(seed, names.length);

  return names
    .map((name, index) => names[(index + offset) % names.length])
    .map((name) => scanCatalog.find((item) => item.name === name));
}

function analyzeImageMeta(meta) {
  const normalizedName = meta.name.toLowerCase().replace(/[_-]+/g, " ");
  const keywordMatches = scanCatalog.filter((item) =>
    item.keywords.some((keyword) => normalizedName.includes(keyword))
  );
  const baseItems = keywordMatches.length ? keywordMatches : pickFallbackItems(meta);
  const uniqueItems = [...new Map(baseItems.map((item) => [item.name, item])).values()];
  const sizeBoost = meta.width * meta.height > 1_800_000 ? 6 : 0;
  const fileBoost = meta.size > 1_200_000 ? 4 : 0;

  return uniqueItems.slice(0, 5).map((item, index) => ({
    ...item,
    confidence: Math.min(96, item.confidence + sizeBoost + fileBoost - index * 3)
  }));
}

function renderDetectedItems(items) {
  updateScanSummary(items);

  if (!items.length) {
    detectedItemsRoot.className = "detected-list empty";
    detectedItemsRoot.innerHTML = "<p>Upload a photo to begin. Recognized items will appear here with category, estimate, and best disposal path.</p>";
    return;
  }

  detectedItemsRoot.className = "detected-list";
  detectedItemsRoot.innerHTML = `
    <div class="detected-table" role="table" aria-label="Detected removal items">
      <div class="detected-row header" role="row">
        <span role="columnheader">Item</span>
        <span role="columnheader">Category</span>
        <span role="columnheader">Estimate</span>
        <span role="columnheader">Best path</span>
      </div>
      ${items.map((item) => `
        <div class="detected-row" role="row">
          <span role="cell">
            <strong>${item.name}</strong>
            <small>${item.confidence}% confidence</small>
          </span>
          <span role="cell">${categoryLabel(item.category)}</span>
          <span role="cell">
            <strong>${money(item.low)}-${money(item.high)}</strong>
            <small>Possible removal fee</small>
          </span>
          <span role="cell">
            <strong>${item.route}</strong>
            <small>${localPathForItem(item)}</small>
          </span>
        </div>
      `).join("")}
    </div>
  `;
}

function localPathForItem(item) {
  const paths = {
    furniture: "Donation pickup or reuse center if condition is good",
    appliances: "Appliance recycler, scrap yard, or full-service hauler",
    electronics: "E-waste drop-off or certified recycling desk",
    yard: "Green waste pickup, compost center, or municipal drop-off",
    construction: "Debris hauler or construction-material transfer station",
    mattress: "Mattress recycler or bulky-item pickup"
  };
  return paths[item.category] || "Compare local pickup and drop-off options";
}

function categoryLabel(category) {
  const labels = {
    furniture: "Furniture",
    appliances: "Appliance",
    electronics: "Electronics",
    yard: "Yard waste",
    construction: "Debris",
    mattress: "Mattress"
  };
  return labels[category] || category;
}

function applyScanToIntake() {
  if (!detectedItems.length) return;

  const categories = new Set(detectedItems.map((item) => item.category));
  document.querySelectorAll("#itemChoices input").forEach((input) => {
    input.checked = categories.has(input.value);
  });

  const range = sumDetectedRange(detectedItems);
  const volume = document.querySelector("#volume");
  if (detectedItems.length >= 5 || range.high > 650) volume.value = "large";
  else if (detectedItems.length >= 3 || range.high > 320) volume.value = "medium";
  else volume.value = "small";

  const condition = document.querySelector("#condition");
  const reusableCount = detectedItems.filter((item) => item.route.includes("Donation") || item.route.includes("Reusable")).length;
  condition.value = reusableCount >= Math.ceil(detectedItems.length / 2) ? "good" : "fair";

  document.querySelector("#photoReady").checked = true;
  renderRecommendations();
}

function clearImageScan() {
  imageUpload.value = "";
  imagePreview.removeAttribute("src");
  previewFrame.classList.add("hidden");
  uploadedImageMeta = null;
  detectedItems = [];
  analyzeImageButton.disabled = true;
  if (applyScanButton) applyScanButton.disabled = true;
  clearImageButton.disabled = true;
  setScanStatus("Awaiting image");
  renderDetectedItems([]);
  renderRecommendations();
}

form.addEventListener("input", renderRecommendations);
form.addEventListener("change", renderRecommendations);

imageUpload.addEventListener("change", () => {
  const [file] = imageUpload.files;
  if (!file) {
    clearImageScan();
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  analyzeImageButton.disabled = true;
  if (applyScanButton) applyScanButton.disabled = true;
  clearImageButton.disabled = false;
  setScanStatus("Loading image");

  imagePreview.onload = () => {
    uploadedImageMeta = {
      name: file.name,
      size: file.size,
      width: imagePreview.naturalWidth,
      height: imagePreview.naturalHeight
    };
    URL.revokeObjectURL(imageUrl);
    analyzeImageButton.disabled = false;
    setScanStatus("Image loaded", "ready");
  };
  imagePreview.onerror = () => {
    URL.revokeObjectURL(imageUrl);
    uploadedImageMeta = null;
    analyzeImageButton.disabled = true;
    setScanStatus("Image unreadable");
    showToast("This image format could not be previewed in the browser.");
  };
  imagePreview.src = imageUrl;
  previewFrame.classList.remove("hidden");
  detectedItems = [];
  renderDetectedItems([]);
  showToast("Image uploaded. Ready for itemization.");
});

analyzeImageButton.addEventListener("click", () => {
  if (!uploadedImageMeta) {
    showToast("Upload an image before running the scan.");
    return;
  }

  detectedItems = analyzeImageMeta(uploadedImageMeta);
  renderDetectedItems(detectedItems);
  applyScanToIntake();
  if (applyScanButton) applyScanButton.disabled = false;
  setScanStatus("Itemized", "ready");
  showToast("AI itemization complete. Recommendations updated.");
});

if (applyScanButton) applyScanButton.addEventListener("click", applyScanToIntake);
clearImageButton.addEventListener("click", clearImageScan);

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    activeFilter = tab.dataset.filter;
    renderRecommendations();
  });
});

recommendationRoot.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const provider = button.dataset.provider;
  const verb = button.dataset.action === "shortlist" ? "shortlisted" : "opened for comparison";
  showToast(`${provider} ${verb}.`);
});

document.querySelector("#quoteButton").addEventListener("click", () => {
  showToast("Quote packet prepared with photo itemization, fee ranges, and recommended routes.");
});

document.querySelector("#refreshButton").addEventListener("click", () => {
  renderRecommendations();
  showToast("Recommendations refreshed with the current request.");
});

renderRecommendations();
