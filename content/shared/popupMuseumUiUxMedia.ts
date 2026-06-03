import logicUi from "../../materials/logic_UI_PM.png";
import storyboardUx from "../../materials/Storyboard_UX_PM.png";
import aniUi from "../../materials/Ani_UI.mp4";

export type UiUxMediaPair = {
  logicImage: string;
  storyboardImage: string;
  video: string;
};

export const popupMuseumUiUxMedia: UiUxMediaPair = {
  logicImage: logicUi,
  storyboardImage: storyboardUx,
  video: aniUi,
};
