import problem from "../../../materials/popup-museum/whatwhy/problem.png";
import insight from "../../../materials/popup-museum/whatwhy/insight.jpg";
import approach1 from "../../../materials/popup-museum/approach/app1_PM.png";
import approach2 from "../../../materials/popup-museum/approach/app2_PM.jpg";
import approach3 from "../../../materials/popup-museum/approach/app3_PM.jpg";
import researchEn from "../../../materials/popup-museum/process/research_en.png";
import whatEn from "../../../materials/popup-museum/process/what_en.png";
import enPro1 from "../../../materials/popup-museum/process/enPro_1.png";
import enPro2 from "../../../materials/popup-museum/process/enPro_2.png";
import enPro3 from "../../../materials/popup-museum/process/enPro_3.png";
import enPro4 from "../../../materials/popup-museum/process/enPro_4.png";
import enPro5 from "../../../materials/popup-museum/process/enPro_5.png";
import dioSeychellophryneFrog from "../../../materials/popup-museum/process/dio_seychellophryneFrog.jpg";
import dioCowfish from "../../../materials/popup-museum/process/dio_cowfish.jpg";
import dioVessel from "../../../materials/popup-museum/process/dio_vessel.jpg";
import dioPottery from "../../../materials/popup-museum/process/dio_pottery.jpg";
import dioLimestoneFrog from "../../../materials/popup-museum/process/dio_limestonefrog.jpg";
import dioPipi from "../../../materials/popup-museum/process/dio_pipi.jpg";
import dioFemaleFigurine from "../../../materials/popup-museum/process/dio_femalefigurine.jpg";
import dioSandstoneLion from "../../../materials/popup-museum/process/dio_sandstonelion.jpg";
import dioSeasponge from "../../../materials/popup-museum/process/dio_seasponge.jpg";
import dioAmouredfish from "../../../materials/popup-museum/process/dio_amouredfish.jpg";
import aniArtefact1 from "../../../materials/popup-museum/process/AD_Artefact_ani_1.mp4";
import aniArtefact2 from "../../../materials/popup-museum/process/AD_Artefact_ani_2.mp4";
import aniDissolveFlip1 from "../../../materials/popup-museum/process/AD_D&F_ani_1.mp4";
import aniDissolveFlip2 from "../../../materials/popup-museum/process/AD_D&F_ani_2.mp4";
import aniLoop1 from "../../../materials/popup-museum/process/AD_loop_ani_1.mp4";
import aniLoop2 from "../../../materials/popup-museum/process/AD_loop_ani_2.mp4";
import aniLoop3 from "../../../materials/popup-museum/process/AD_loop_ani_3.mp4";
import aniLoop4 from "../../../materials/popup-museum/process/AD_loop_ani_4.mp4";
import shaderDissolveGraph from "../../../materials/popup-museum/process/shader_dissolve_1.png";
import shaderDissolveOutput from "../../../materials/popup-museum/process/shader_dissolve_2.mp4";
import logicToon from "../../../materials/popup-museum/process/toonshader_logic.png";
import shaderToon from "../../../materials/popup-museum/process/toonshader_graph.png";
import aniToonShader from "../../../materials/popup-museum/process/toonshader_ani.mp4";
import logicUi from "../../../materials/popup-museum/process/ui_logic.png";
import storyboardUx from "../../../materials/popup-museum/process/ui_storyboard.png";
import uiAni from "../../../materials/popup-museum/process/ui_ani.mp4";
import toolShader1 from "../../../materials/popup-museum/process/tool_shader_1.png";
import toolShader2 from "../../../materials/popup-museum/process/tool_shader_2.png";
import toolTri1 from "../../../materials/popup-museum/process/tool_tri_1.png";
import toolTri2 from "../../../materials/popup-museum/process/tool_tri_2.png";
import integrationIn1 from "../../../materials/popup-museum/process/in_1.jpg";
import integrationIn2 from "../../../materials/popup-museum/process/in_2.jpg";
import integrationIn3 from "../../../materials/popup-museum/process/in_3.jpg";
import result1 from "../../../materials/popup-museum/result/result_1.jpg";
import result2 from "../../../materials/popup-museum/result/result_2.jpg";
import result3 from "../../../materials/popup-museum/result/result_3.jpg";
import result4 from "../../../materials/popup-museum/result/result_4.jpg";

/** Registry of bundled assets — reference by key in popup-museum.data.ts */
export const popupMuseumAssetRegistry = {
  problem,
  insight,
  approach1,
  approach2,
  approach3,
  researchEn,
  whatEn,
  enPro1,
  enPro2,
  enPro3,
  enPro4,
  enPro5,
  dioSeychellophryneFrog,
  dioCowfish,
  dioVessel,
  dioPottery,
  dioLimestoneFrog,
  dioPipi,
  dioFemaleFigurine,
  dioSandstoneLion,
  dioSeasponge,
  dioAmouredfish,
  aniArtefact1,
  aniArtefact2,
  aniDissolveFlip1,
  aniDissolveFlip2,
  aniLoop1,
  aniLoop2,
  aniLoop3,
  aniLoop4,
  shaderDissolveGraph,
  shaderDissolveOutput,
  logicToon,
  shaderToon,
  aniToonShader,
  logicUi,
  storyboardUx,
  uiAni,
  toolShader1,
  toolShader2,
  toolTri1,
  toolTri2,
  integrationIn1,
  integrationIn2,
  integrationIn3,
  result1,
  result2,
  result3,
  result4,
} as const;

export type PopupMuseumAssetKey = keyof typeof popupMuseumAssetRegistry;

export function resolvePopupMuseumAsset(key: PopupMuseumAssetKey): string {
  return popupMuseumAssetRegistry[key];
}
