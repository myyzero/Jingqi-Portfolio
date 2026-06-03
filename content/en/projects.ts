import { popupMuseumAnimationVideos } from "../shared/popupMuseumAnimationVideos";
import { popupMuseumEnvCarouselSlides } from "../shared/popupMuseumEnvCarousel";
import { getPopupMuseumShaderSections } from "../shared/popupMuseumShaderSections";
import { popupMuseumUiUxMedia } from "../shared/popupMuseumUiUxMedia";
import { getPopupMuseumToolDevelopment } from "../shared/popupMuseumToolDevelopment";
import { popupMuseumIntegrationImages } from "../shared/popupMuseumIntegrationImages";
import { popupMuseumResultImages } from "../shared/popupMuseumResultImages";

export type AnimationCategory = {
  title: string;
  layout: "circles" | "rectangles" | "grid";
  videos: string[];
};

export type CarouselSlide = {
  title: string;
  image: string;
};

export type { ShaderMediaItem, ShaderSection } from "../shared/popupMuseumShaderSections";
export type { UiUxMediaPair } from "../shared/popupMuseumUiUxMedia";

export type DetailBullet = {
  title: string;
  text: string | string[];
  image?: string;
  stepImages?: string[];
  animationCategories?: AnimationCategory[];
  carouselSlides?: CarouselSlide[];
  shaderSections?: import("../shared/popupMuseumShaderSections").ShaderSection[];
  uiUxMedia?: import("../shared/popupMuseumUiUxMedia").UiUxMediaPair;
  toolDevelopment?: import("../shared/popupMuseumToolDevelopment").ToolDevelopmentRow[];
};

export type ProjectDetailContent = {
  problem: string | string[];
  insight: string | string[];
  approachItems: DetailBullet[];
  process: {
    research: string;
    tasks: string;
    howItems: DetailBullet[];
    output: string;
    integrationImages?: readonly string[];
  };
  resultImpact: string;
  resultGalleryImages?: readonly string[];
  processImages?: {
    research?: string;
    tasks?: string;
    output?: string;
  };
};

export interface Project {
  id: string;
  name: string;
  keyword: string;
  summary: string;
  role: string;
  type: string;
  tools?: string;
  details?: string;
  website?: string;
  moreDetails?: string;
  previewImage: string;
  images: string[];
  videoUrl?: string;
  detail?: ProjectDetailContent;
}

export const interactiveInstallation: Project[] = [
  {
    id: "popup-museum",
    name: "Pop-up Museum (2026)",
    keyword: "Museum interactive installation",
    summary:
      "An interactive museum installation built around artefacts from the Grant and Petrie Museum. By combining 3D-printed replicas, physical sensing, and real-time digital media, the piece turns objects that are normally “look but don’t touch” into something visitors can feel, move, and hear. I led the animation system and contributed 2D/3D assets plus UI/UX for the Unity experience.",
    role: "Animator",
    type: "Team project",
    tools: "Unity, Maya, C4D, Adobe CS",
    details: "Designed for Grant and Petrie Museum",
    website:
      "https://sites.google.com/view/the-forest-collective/events/ucl-illuminated-2026",
    moreDetails:
      "https://drive.google.com/file/d/1SO1XoJSZZHBFos8DZKYdI0Mf_ENYVCXY/view?usp=sharing",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193895/PM_Flowchart_hwnbcu.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635243/ScreenShot_2026-03-04_143602_363_rhjp1v.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635240/ScreenShot_2026-03-04_143613_991_tfzthj.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587644/ScreenShot_2026-02-18_202557_562_cj69ds.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635243/ScreenShot_2026-03-04_143623_577_iu6rkg.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193892/PM_ToonShader_rbdxfk.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193896/PM_StateMachine_lkdrnb.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_Animation_fhrr29.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_AppearAnimation_amrrv1.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_Diorama_kuwuq6.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635251/ScreenShot_2026-03-04_143855_701_rm5bh1.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635245/ScreenShot_2026-03-04_143727_008_ts4okg.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635250/ScreenShot_2026-03-04_143747_610_dokz4v.jpg",
    ],
    videoUrl: "https://youtu.be/xCatM3rwGKA",
    detail: {
      problem: [
        "Museum collections are often protected behind glass, which limits tactile engagement, especially for younger audiences who expect playful, responsive media.",
        "The project aimed to create a pop-up, body-led encounter with selected artefacts without compromising conservation rules, using replicas and digital layers instead of handling originals.",
      ],
      insight: [
        "Visitors responded more strongly to touchable artefact replicas and ways to learn through games with stylised and animated introductions.",
        "A toon-shaded, story-driven visual language made the artefacts feel alive and approachable.",
      ],
      approachItems: [
        {
          title: "Tactile Artefacts",
          text: [
            "Created museum object replicas using 3D printing and high-precision scanning.",
            "Enables visitors to physically explore surface textures and forms for a deeper understanding of the artifacts.",
          ],
        },
        {
          title: "Hardware Application",
          text: [
            "Integrated CodeCell C3 sensors into the replicas.",
            "Physical movements are mirrored in real time by their digital counterparts.",
            "Enhances engagement, playability, and exploration.",
          ],
        },
        {
          title: "Digital Storytelling",
          text: [
            "Developed a digital environment in Maya and Unity.",
            "Combines animation, visual effects, UI design, and multimedia content.",
            "Presents artifact information in an engaging and accessible way, encouraging curiosity and self-directed discovery.",
          ],
        },
      ],
      process: {
        research:
          "Studied Grant and Petrie collection themes, visitor flow for pop-up formats, and technical constraints (sensors, print scale, Unity deployment on site). Mapped the full pipeline in a team flowchart before production.",
        tasks:
          "Interactive Digital System Development including:\n\n· 3D Modelling & Environment Design\n· Animation Design\n· Custom Shader Development\n· UI/UX Design\n· Tool Development",
        howItems: [
          {
            title: "3D Modelling & Environment Design",
            text: "Built a 3D asset pipeline from Maya and Cinema 4D to Unity, supporting custom shader development and animation integration.",
            stepImages: [
              "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
              "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
              "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
              "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
              "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
            ],
            carouselSlides: popupMuseumEnvCarouselSlides,
          },
          {
            title: "Animation Design",
            text: "Created artifact reveal and transition animations using Animation Controllers and Animation Clips, developed looping environmental animations, and implemented subtle UI motion graphics to enhance user experience.",
            animationCategories: [
              {
                title: "Artefact Animation",
                layout: "circles",
                videos: [...popupMuseumAnimationVideos.dissolve],
              },
              {
                title: "Dissolved and Flipping Animation",
                layout: "rectangles",
                videos: [...popupMuseumAnimationVideos.artefact],
              },
              {
                title: "Diorama Loop Animation",
                layout: "grid",
                videos: [...popupMuseumAnimationVideos.diorama],
              },
            ],
          },
          {
            title: "Custom Shader Development",
            text: "",
            shaderSections: getPopupMuseumShaderSections("en"),
          },
          {
            title: "UI/UX Design",
            text: "",
            uiUxMedia: popupMuseumUiUxMedia,
          },
          {
            title: "Tool Development",
            text: "",
            toolDevelopment: getPopupMuseumToolDevelopment("en"),
          },
        ],
        output: "",
        integrationImages: [...popupMuseumIntegrationImages],
      },
      resultImpact:
        "Presented at UCL Illuminated 2026 in collaboration with the Grant and Petrie Museum, drew follow-up interest from museum curators. The piece offered a multi-sensory alternative to static display and demonstrated how digital animation systems can scale across many artefacts in one physical setup.",
      resultGalleryImages: [...popupMuseumResultImages],
      processImages: {
        research:
          "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193895/PM_Flowchart_hwnbcu.png",
        output:
          "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/PM_Diorama_kuwuq6.png",
      },
    },
  },
  {
    id: "seeing-unseen",
    name: "Seeing the Unseen (2025)",
    keyword: "Wearable device",
    summary:
      'A research-based wearable design which explores how sensory conditioning desensitises people to external stimuli, helping individuals reconnect with overlooked sensory dimensions.\n\nIt captures environmental sound and colour in real time, using a linear regression model to predict pleasure levels of disciplined groups. When wearers input their own level, the device responds visually and haptically, revealing their "sensory discipline" and creating an immersive, reflective experience.\n\nEach input refines the model, improving prediction accuracy and reopening the boundary between external reality and inner perception—turning the body into a medium of communication.\n\nMore than a wearable, Seeing the Unseen invites us to reconsider sensory thresholds in urban life and reflect on how deeply we perceive its details.',
    role: "Hardware system, data analysis, colour and sound research",
    type: "Team Project with 3 members",
    tools: "Arduino, Raspberry Pi",
    details: "Exhibited in Bartlett Fifteen Show",
    website:
      "https://fifteen2025.bartlettarchucl.com/dfpi-room-3/dfpi-2025-room-3-seeing-the-unseen",
    moreDetails:
      "https://drive.google.com/file/d/1nZK_dRKe3uoHWCQeciMPy-3kh-mV-wZI/view?usp=sharing",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772671720/%E5%9B%BE%E5%B1%82_2_jj41va.png",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635941/ScreenShot_2026-03-04_144814_171_zwyou5.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635940/ScreenShot_2026-03-04_144728_730_hpgwnx.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772671468/ScreenShot_2026-03-04_144742_674.jpg_oc1owo.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635940/ScreenShot_2026-03-04_145103_144_mfjlcl.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635945/ScreenShot_2026-03-04_145022_609_vsxkmc.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636022/ScreenShot_2026-03-04_144549_899_uxkafr.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635943/ScreenShot_2026-03-04_144838_023_syardu.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635941/ScreenShot_2026-03-04_144849_671_m5rlbu.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635944/ScreenShot_2026-03-04_144910_512_dnvcez.jpg",
    ],
    videoUrl: "https://youtu.be/RkLyVnXSmog",
  },
  {
    id: "interactive-archive",
    name: "Interactive Archive System (2023)",
    keyword: "Museum interactive interface",
    summary:
      "An interactive interface developed for Yonglian Museum to review the history and rapid development of Yonglian Village, exploring ways to let people of all age feel more engaged when visiting the museum.",
    role: "Unity Developer, UI/UX Design",
    type: "Commercial Project with 3 members",
    tools: "Unity, Photoshop",
    details: "Designed for Yonglian Museum in China",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772678740/%E5%9B%BE%E5%B1%82_3_l7lwyt.png",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772678740/%E5%9B%BE%E5%B1%82_3_l7lwyt.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772678742/%E5%9B%BE%E5%B1%82_4_kckre9.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772680034/%E5%9B%BE%E5%B1%827_7_qmuts0.png",
    ],
  },
];

export const immersiveGaming: Project[] = [
  {
    id: "dragon-mountain",
    name: "Dragon Mountain (2024)",
    keyword: "Digital experience design",
    summary:
      "An immersive interactive experience set in a traditional Chinese painting converted from 2D to 3D, where players navigate ancient temples and solve environmental puzzles under different weather conditions. This project was developed in Unreal Engine to explore cultural narratives through digital media.",
    role: "Technical Artist, Interaction Design",
    type: "Team Project with 2 members",
    tools: "UE, Maya, Adobe CS",
    details: "Designed for Museum",
    moreDetails:
      "https://drive.google.com/file/d/1DIEezLARhdBBU6KE5yDaVFND-64FcQ6B/view?usp=sharing",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772586323/cover_en_qmsr2t.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587226/7_u3pwox.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587242/8_vq8ctw.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587241/6_gr9rqc.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587243/1_giefhu.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_flowChart_dlke5e.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_BirdRideEventpng_tq9djx.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_dialogueSystem_xa7eri.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/DM_NavigationSystem_td2gj2.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_shader_lir69z.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193894/DM_WeatherSystem_t0xenk.png",
    ],
    videoUrl: "https://youtu.be/jrOYWVOa4_k",
  },
  {
    id: "aquas-will",
    name: "Aqua's Will (2023)",
    keyword: "2D RPG game",
    summary:
      "A 2D side-scrolling RPG about Aqua, a sea spirit who ventures into a polluted underwater cave to save her mutated whale shark companion and restore balance to the ocean.",
    role: "2D Animation system, Narrative and Level Design",
    type: "Team Project with 6 members",
    tools: "Unity, Midjourney, Adobe CS",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587042/%E5%9B%BE%E7%89%871_xcgsiz.png",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193892/AW_Map_nct1k3.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587059/%E5%9B%BE%E7%89%87l1_yrfuo5.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1773193893/AW_Animation_lgdli3.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636562/ScreenShot_2026-03-04_150142_226_vh9sr4.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636560/ScreenShot_2026-03-04_150049_468_hpc9ib.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636561/ScreenShot_2026-03-04_150128_240_zfg6dg.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636561/ScreenShot_2026-03-04_150108_031_aqndkc.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636560/ScreenShot_2026-03-04_150208_935_x5issz.jpg",
    ],
    videoUrl: "https://youtu.be/mc4brbHeh4w",
  },
  {
    id: "mixing-happiness",
    name: "Mixing Happiness (2023)",
    keyword: "Brand pop-up experience",
    summary:
      "This project explores interactive experience concepts for a White Rabbit candy pop-up event. By combining making, storytelling, and immersive media, participants create their own rabbit figures using White Rabbit creamy candy and share childhood memories associated with the brand. These memories are collected through capsule machines and displayed within a projection space, transforming personal nostalgia into a shared experience and strengthening the emotional connection between people and the brand.",
    role: "Brand Experience Design",
    type: "Personal Project",
    tools: "Touch Designer, Arduino, Adobe CS",
    details: "Designed for brand pop-up event",
    moreDetails:
      "https://drive.google.com/file/d/1Q369KhztQaTNgBO_OYacyDbM0c2pzN48/view?usp=sharing",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772679863/%E5%9B%BE%E5%B1%826_6_jhibf9.png",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload//v1772627910/GU_Jingqi_RCAIED_Project3_p1_uyx51i.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772627908/GU_Jingqi_RCAIED_Project3_p2_vlryb0.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772627917/GU_Jingqi_RCAIED_Project3_p3_wmt6xw.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772627917/GU_Jingqi_RCAIED_Project3_p4_vo9b1z.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772627926/GU_Jingqi_RCAIED_Project3_p5_xtg1ac.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772627926/GU_Jingqi_RCAIED_Project3_p6_ubn0vg.png",
    ],
    videoUrl: "https://youtu.be/uOD4Bkaiw7c",
  },
  {
    id: "emotional-trap",
    name: "Emotional Trap (2024)",
    keyword: "Interactive concept",
    summary:
      "This project explores the visualization and transformation of negative emotions through interactive design. A conceptual Emotion Transformation Machine materializes suppressed emotions as physical objects and imagines a process in which they are transformed into chocolate candies. By turning abstract feelings into tangible interactions, the project invites users to reflect on healthier ways of confronting and releasing negative emotions.",
    role: "Interaction Design",
    type: "Personal Project",
    tools: "Maya, Arduino, Adobe CS",
    moreDetails:
      "https://drive.google.com/file/d/1eX-FVvsLwnCg2pvazQKOXN0rPw2Ujx7n/view?usp=sharing",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772679709/%E5%9B%BE%E5%B1%825_5_o11rc1.png",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637441/1_%E7%94%BB%E6%9D%BF_1_odgoxw.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637439/1-02_gfnh4n.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637440/1-03_x0u67p.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637439/1-04_co2mx3.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637440/1-05_rnee0q.png",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772637441/1-06_vikegt.png",
    ],
    videoUrl: "https://youtu.be/snkAiXPK9qY",
  },
];

export const animationFilm: Project[] = [
  {
    id: "life-begets-life",
    name: "Life Begets Life",
    keyword: "3D animation",
    summary:
      "TODO: Replace with the real project summary (2–3 sentences).",
    role: "TODO: Replace with your role",
    type: "TODO: Personal / Team / Commercial",
    tools: "TODO: Tools used",
    details: "TODO: Optional short context",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    ],
    videoUrl: "TODO: YouTube or .mp4 link (optional)",
    moreDetails: "TODO: PDF link (optional)",
  },
  {
    id: "yuliu-tea-ceremony",
    name: "Yuliu Tea Ceremony",
    keyword: "3D character animation",
    summary:
      "TODO: Replace with the real project summary (2–3 sentences).",
    role: "TODO: Replace with your role",
    type: "TODO: Personal / Team / Commercial",
    tools: "TODO: Tools used",
    details: "TODO: Optional short context",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    ],
    videoUrl: "TODO: YouTube or .mp4 link (optional)",
    moreDetails: "TODO: PDF link (optional)",
  },
  {
    id: "montage",
    name: "Montage",
    keyword: "Film montage",
    summary:
      "TODO: Replace with the real project summary (2–3 sentences).",
    role: "TODO: Replace with your role",
    type: "TODO: Personal / Team / Commercial",
    tools: "TODO: Tools used",
    details: "TODO: Optional short context",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    ],
    videoUrl: "TODO: YouTube or .mp4 link (optional)",
    moreDetails: "TODO: PDF link (optional)",
  },
];

export const futureDesign: Project[] = [
  {
    id: "future-design-project",
    name: "Future Design Project",
    keyword: "Future architecture",
    summary:
      "TODO: Replace with the real project summary (2–3 sentences).",
    role: "TODO: Replace with your role",
    type: "TODO: Personal / Team / Commercial",
    tools: "TODO: Tools used",
    details: "TODO: Optional short context",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    ],
    videoUrl: "TODO: YouTube or .mp4 link (optional)",
    moreDetails: "TODO: PDF link (optional)",
  },
];

