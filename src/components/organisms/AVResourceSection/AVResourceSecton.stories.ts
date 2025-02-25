import type { Meta } from "@/types";
import { AVResourceSection } from "@/components";
import { SUPPORTED_LOCALES } from "@/constants";
import { getCandidate } from "@/examples";

const meta: Meta<typeof AVResourceSection> = {
  title: "Design System/Organisms/AVResourceSection",
  component: AVResourceSection,
  tags: ["autodocs"],
  argTypes: {
    candidate: {
      control: { type: "object" },
    },
    currentCandidateGroup: {
      control: { type: "number", min: 0, max: 10, step: 1 },
    },
    summary: {
      control: { type: "boolean" },
    },
    locale: {
      control: { type: "select" },
      options: SUPPORTED_LOCALES,
    },
  },
};

export default meta;

const Template = (args: Meta) => ({
  components: { AVResourceSection },
  setup() {
    return { args };
  },
  template: '<AVResourceSection v-bind="args" />',
});

const SummaryTemplate = (args: Meta) => ({
  components: { AVResourceSection },
  setup() {
    return { args };
  },
  template: '<div class="bg-theme-secondary p-5"><AVResourceSection v-bind="args" /></div>',
});

const CardTemplate = (args: Meta) => ({
  components: { AVResourceSection },
  setup() {
    return { args };
  },
  template:
    '<div class="card p-3 rounded" style="width: 15rem;"><AVResourceSection v-bind="args" /></div>',
});

export const Default = {
  render: Template,

  args: {
    candidate: getCandidate(),
  },
};

export const Summary = {
  render: SummaryTemplate,

  args: {
    candidate: getCandidate(),
    summary: true,
  },
};

export const WithCustomGroup = {
  render: SummaryTemplate,

  args: {
    candidate: getCandidate(),
    currentCandidateGroup: 2,
    summary: true,
  },
};

export const Card = {
  render: CardTemplate,

  args: {
    candidate: getCandidate(),
    currentCandidateGroup: 2,
    summary: true,
    card: true,
  },
};
