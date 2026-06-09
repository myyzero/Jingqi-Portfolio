import { buildMaterialRegistry } from "../_schema/localMaterialAssets";

/** Logical key → path under repo `materials/` (file may be absent → placeholder + warn). */
const seeingUnseenMaterialPaths = {
  problem: "seeing-unseen/whatwhy/problem.png",
  insight: "seeing-unseen/whatwhy/insight.png",
  approach: "seeing-unseen/whatwhy/approach.png",
  researchSite1: "seeing-unseen/process/research_site_1.png",
  interview1: "seeing-unseen/process/interview_1.png",
  interview2: "seeing-unseen/process/interview_2.png",
  interview3: "seeing-unseen/process/interview_3.png",
  interview4: "seeing-unseen/process/interview_4.png",
  key1: "seeing-unseen/process/key_1.png",
  key2: "seeing-unseen/process/key_2.png",
  key3: "seeing-unseen/process/key_3.png",
  key4: "seeing-unseen/process/key_4.png",
  onlineSurvey: "seeing-unseen/process/online.jpg",
  surveySound: "seeing-unseen/process/sound.png",
  surveyAcd: "seeing-unseen/process/ACD.png",
  finding1: "seeing-unseen/process/finding_1.png",
  finding2: "seeing-unseen/process/finding_2.png",
  finding3: "seeing-unseen/process/finding_3.png",
  finding4: "seeing-unseen/process/finding_4.png",
  surveyModelling: "seeing-unseen/process/modelling.png",
  linear: "seeing-unseen/process/linear.png",
  linear2: "seeing-unseen/process/linear_2.png",
  userJourney: "seeing-unseen/process/userJourney.png",
  hard1: "seeing-unseen/process/hard_1.png",
  hard2: "seeing-unseen/process/hard_2.png",
  hard3: "seeing-unseen/process/hard_3.png",
  aniGear1: "seeing-unseen/process/ani_/ani_gear_1.mp4",
  aniGear2: "seeing-unseen/process/ani_/ani_gear_2.mp4",
  aniMake: "seeing-unseen/process/ani_/ani_make.mp4",
  aniUse: "seeing-unseen/process/ani_/ani_use.mp4",
  aniOutcome: "seeing-unseen/process/ani_/ani_outcome.mp4",
  final1: "seeing-unseen/process/final_1.png",
  final2: "seeing-unseen/process/final_2.png",
  final3: "seeing-unseen/process/final_3.png",
  final4: "seeing-unseen/process/hardware.png",
  resultLeft: "seeing-unseen/result/r_left.JPG",
  result1: "seeing-unseen/result/1.png",
  result2: "seeing-unseen/result/2.png",
  result3: "seeing-unseen/result/3.png",
  researchPlaceholder15: "seeing-unseen/process/research/placeholder_15.png",
  researchPlaceholder16: "seeing-unseen/process/research/placeholder_16.png",
  researchPlaceholder17: "seeing-unseen/process/research/placeholder_17.png",
  researchPlaceholder18: "seeing-unseen/process/research/placeholder_18.png",
  researchPlaceholder19: "seeing-unseen/process/research/placeholder_19.png",
  researchPlaceholder20: "seeing-unseen/process/research/placeholder_20.png",
  researchPlaceholder21: "seeing-unseen/process/research/placeholder_21.png",
  researchPlaceholder22: "seeing-unseen/process/research/placeholder_22.png",
  researchPlaceholder23: "seeing-unseen/process/research/placeholder_23.png",
  researchPlaceholder24: "seeing-unseen/process/research/placeholder_24.png",
} as const;

export type SeeingUnseenAssetKey = keyof typeof seeingUnseenMaterialPaths;

export const seeingUnseenAssetRegistry = buildMaterialRegistry(
  "seeing-unseen",
  seeingUnseenMaterialPaths,
);

export function resolveSeeingUnseenAsset(key: SeeingUnseenAssetKey): string {
  return seeingUnseenAssetRegistry[key];
}
