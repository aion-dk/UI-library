import type { LocalString, OptionContent } from "@/types";
import type {
  BOOTSTRAP_COLORS,
  BOOTSTRAP_BASIC_SIZES,
  BOOTSTRAP_EXPANDED_SIZES,
} from "@/constants";

type BootstrapColor = (typeof BOOTSTRAP_COLORS)[number];

type BootstrapBasicSize = (typeof BOOTSTRAP_BASIC_SIZES)[number];

type BootstrapExpandedSize = (typeof BOOTSTRAP_EXPANDED_SIZES)[number];

export * from "@/components/atoms/AVSpinner/AVSpinner.types";

type AVSplitHelperState = "ballot" | "assign" | "overview";
type AVPileSummaryState = AVSplitHelperState | "summary";
type ImageOption = "square" | "passport";

interface AVDropdownOption {
  value: unknown;
  label: string;
}

interface AVSummaryOptionObject {
  title: LocalString;
  handle: string;
  image?: string;
  crosses: number;
  rank?: number;
  parent?: OptionContent;
}

interface AVSummaryOptionParent {
  title: LocalString;
}

interface OptionSummary {
  options: AVSummaryOptionObject[];
  writeIns: AVSummaryWriteInObject[];
}

interface AVSummaryWriteInObject {
  partyLetter: string;
  partyName: string;
  candidateName: string;
}

type AVCalculateResultContentRole = "mixer" | "decrypter" | "all" | "observer";

type AVCalculateResultContentStatus =
  | "initial"
  | "mixing"
  | "decrypting"
  | "aggregating"
  | "finished";

type AVCalculateResultContentElapsed = `${string}:${string}:${string}`;

const LINK_KEYS: string[] = [
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

type AVLinkVisualizerKey = (typeof LINK_KEYS)[number];

type AVLinkVisualizerType = Record<AVLinkVisualizerKey, RegExp>;

interface AVRankedSummaryResultOptionRow {
  reference: string;
  title: Record<string, string>;
  rounds: {
    count: number;
    tied: boolean;
    elected: boolean;
  }[];
  tied: boolean;
  elected: boolean;
}

export { LINK_KEYS };

export type {
  BootstrapColor,
  BootstrapBasicSize,
  BootstrapExpandedSize,
  AVSplitHelperState,
  AVPileSummaryState,
  AVDropdownOption,
  AVSummaryOptionObject,
  AVSummaryOptionParent,
  AVSummaryWriteInObject,
  AVCalculateResultContentRole,
  AVCalculateResultContentStatus,
  AVCalculateResultContentElapsed,
  ImageOption,
  OptionSummary,
  AVLinkVisualizerKey,
  AVLinkVisualizerType,
  AVRankedSummaryResultOptionRow,
};
