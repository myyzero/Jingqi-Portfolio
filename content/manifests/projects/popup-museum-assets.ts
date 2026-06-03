import enPro1 from "../../../materials/enPro_1.png";
import enPro2 from "../../../materials/enPro_2.png";
import enPro3 from "../../../materials/enPro_3.png";
import enPro4 from "../../../materials/enPro_4.png";
import enPro5 from "../../../materials/enPro_5.png";
import shaderDissolve2 from "../../../materials/shader_dissolve_2_PM.png";
import shaderToon from "../../../materials/shader_toon_PM.png";
import logicToon from "../../../materials/logic_toonShader2_PM.png";
import logicUi from "../../../materials/logic_UI_PM.png";
import storyboardUx from "../../../materials/Storyboard_UX_PM.png";
import aniDissolveShader from "../../../materials/Ani_DissolveShader.mp4";
import aniToonShader from "../../../materials/Ani_ToonShader.mp4";
import aniUi from "../../../materials/Ani_UI.mp4";
import toolShader1 from "../../../materials/Tools/shader_1_PM.png";
import toolShader2 from "../../../materials/Tools/shader_2_PM.png";
import toolTri1 from "../../../materials/Tools/tri_1_PM.png";
import toolTri2 from "../../../materials/Tools/tri_2_PM.png";
import integrationIn1 from "../../../materials/Integration/in_1.jpg";
import integrationIn2 from "../../../materials/Integration/in_2.jpg";
import integrationIn3 from "../../../materials/Integration/in_3.jpg";
import result1 from "../../../materials/Result_1_PM.jpg";
import result2 from "../../../materials/Result_2_PM.jpg";
import result3 from "../../../materials/Result_3_PM.jpg";
import result4 from "../../../materials/Result_4_PM.jpg";
import aniOb1 from "../../../materials/Ani-ob/Ani-ob-1.mp4";
import aniOb2 from "../../../materials/Ani-ob/Ani-ob-2.mp4";
import aniOb3 from "../../../materials/Ani-ob/Ani-ob-3.mp4";
import aniOb4 from "../../../materials/Ani-ob/Ani-ob-4.mp4";
import aniDio1 from "../../../materials/Ani-dio/Ani-dio-1.mp4";
import aniDio2 from "../../../materials/Ani-dio/Ani-dio-2.mp4";
import aniDio3 from "../../../materials/Ani-dio/Ani-dio-3.mp4";
import aniDio4 from "../../../materials/Ani-dio/Ani-dio-4.mp4";

/** Registry of bundled assets — reference by key in popup-museum.data.ts */
export const popupMuseumAssetRegistry = {
  enPro1,
  enPro2,
  enPro3,
  enPro4,
  enPro5,
  shaderDissolve2,
  shaderToon,
  logicToon,
  logicUi,
  storyboardUx,
  aniDissolveShader,
  aniToonShader,
  aniUi,
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
  aniOb1,
  aniOb2,
  aniOb3,
  aniOb4,
  aniDio1,
  aniDio2,
  aniDio3,
  aniDio4,
} as const;

export type PopupMuseumAssetKey = keyof typeof popupMuseumAssetRegistry;

export function resolvePopupMuseumAsset(key: PopupMuseumAssetKey): string {
  return popupMuseumAssetRegistry[key];
}
