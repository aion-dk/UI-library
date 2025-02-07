const IMAGE_OPTIONS = ["square", "passport"] as const;

// AVSpinner
const SPINNER_VARIANTS = ["spinner-border", "spinner-grow"] as const;

// AVLinkVisualizer
const LINK_VISUALIZER_KEYS = [
  "github",
  "instagram",
  "linkedin",
  "twitter",
  "envelope",
  "facebook",
  "vimeo",
  "youtube",
  "tiktok",
] as const;

// AVOptionLiveResults
const LIVE_RESULT_MODES = ["internal", "external"] as const;

const SPLIT_HELPER_STATE = ["ballot", "assign", "overview"] as const;

export {
  IMAGE_OPTIONS,
  SPINNER_VARIANTS,
  LINK_VISUALIZER_KEYS,
  LIVE_RESULT_MODES,
  SPLIT_HELPER_STATE,
};
