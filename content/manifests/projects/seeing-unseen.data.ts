import type { ProjectManifestEntry } from "../_schema/projectManifest";
import type { LocalizedCopy, LocalizedStringList } from "../_schema/types";
import type { SeeingUnseenAssetKey } from "./seeing-unseen-assets";
import { remote } from "./_media";

export const seeingUnseenWhatWhyCopy = {
  problem: {
    en: [
      "Urban sensory adaptation causes people to become desensitised to everyday environmental stimuli.",
      "Continuous exposure to noise and visual overload can negatively impact wellbeing despite often going unnoticed.",
      'Research Question: How can people become aware of sensory stimuli that have been normalised and overlooked in urban environments?',
    ],
    zh: [
      "Urban sensory adaptation causes people to become desensitised to everyday environmental stimuli.",
      "Continuous exposure to noise and visual overload can negatively impact wellbeing despite often going unnoticed.",
      'Research Question: How can people become aware of sensory stimuli that have been normalised and overlooked in urban environments?',
    ],
  } satisfies LocalizedStringList,
  insight: {
    en: [
      "Awareness is the first step toward reclaiming sensory agency.",
      "Real-time feedback can help people recognise both environmental conditions and changes in their own sensory responsiveness.",
    ],
    zh: [
      "Awareness is the first step toward reclaiming sensory agency.",
      "Real-time feedback can help people recognise both environmental conditions and changes in their own sensory responsiveness.",
    ],
  } satisfies LocalizedStringList,
  approach: {
    en: [
      "Literature review on sensory perception and urban sensory discipline.",
      "Environmental data collection and analysis.",
      "Wearable system design and hardware prototyping.",
      "Development of visual and haptic feedback mechanisms to externalise sensory information.",
    ],
    zh: [
      "Literature review on sensory perception and urban sensory discipline.",
      "Environmental data collection and analysis.",
      "Wearable system design and hardware prototyping.",
      "Development of visual and haptic feedback mechanisms to externalise sensory information.",
    ],
  } satisfies LocalizedStringList,
} as const;

export const seeingUnseenResearchCopy = [
  {
    title: {
      en: "1. Field Research: Understanding Urban Environmental Perception",
      zh: "1. Field Research: Understanding Urban Environmental Perception",
    } satisfies LocalizedCopy,
    intro: {
      en: "To investigate how people perceive urban environments in everyday life, field studies were conducted across a range of locations in London, including residential areas, commercial districts, public squares, and urban green spaces.",
      zh: "To investigate how people perceive urban environments in everyday life, field studies were conducted across a range of locations in London, including residential areas, commercial districts, public squares, and urban green spaces.",
    } satisfies LocalizedCopy,
    rowGroups: [
      {
        heading: {
          en: "Research Activities",
          zh: "Research Activities",
        } satisfies LocalizedCopy,
        rows: [
          {
            text: {
              en: "Site observations and environmental documentation through photography and audio recording.",
              zh: "Site observations and environmental documentation through photography and audio recording.",
            } satisfies LocalizedCopy,
            imageKey: "researchSite1" as const satisfies SeeingUnseenAssetKey,
            layout: "split" as const,
          },
          {
            text: {
              en: "Intercept interviews with passers-by regarding their perceptions of sound and colour in the surrounding environment.",
              zh: "Intercept interviews with passers-by regarding their perceptions of sound and colour in the surrounding environment.",
            } satisfies LocalizedCopy,
            imageKeys: [
              "interview1",
              "interview2",
              "interview3",
              "interview4",
            ] as const satisfies readonly SeeingUnseenAssetKey[],
            layout: "grid2x2" as const,
          },
        ],
      },
      {
        heading: {
          en: "Key Findings",
          zh: "Key Findings",
        } satisfies LocalizedCopy,
        groupLayout: "cards" as const,
        rows: [
          {
            text: {
              en: "Urban noise feels inevitable—few question its impact on wellbeing.",
              zh: "城市噪音被视为理所当然，鲜少质疑其对身心健康的影响。",
            } satisfies LocalizedCopy,
            imageKey: "key1" as const satisfies SeeingUnseenAssetKey,
          },
          {
            text: {
              en: "Daily traffic and crowd noise normalises stimuli, lowering conscious awareness.",
              zh: "持续的交通与人群噪音使刺激常态化，降低感知觉察。",
            } satisfies LocalizedCopy,
            imageKey: "key2" as const satisfies SeeingUnseenAssetKey,
          },
          {
            text: {
              en: "Natural environments bring greater comfort, calm, and satisfaction.",
              zh: "自然环境带来更高的舒适、平静与满意度。",
            } satisfies LocalizedCopy,
            imageKey: "key3" as const satisfies SeeingUnseenAssetKey,
          },
          {
            text: {
              en: "Visually rich settings with more colour and natural elements were strongly preferred.",
              zh: "更偏好色彩丰富、自然元素较多的视觉环境。",
            } satisfies LocalizedCopy,
            imageKey: "key4" as const satisfies SeeingUnseenAssetKey,
          },
        ],
      },
    ],
    imageLayout: "groupedRows" as const,
  },
  {
    title: {
      en: "2. Online Survey: Factors Influencing Environmental Experience",
      zh: "2. Online Survey: Factors Influencing Environmental Experience",
    } satisfies LocalizedCopy,
    intro: {
      en: "To further explore public perceptions at a larger scale, an online questionnaire was distributed to evaluate how people experience urban soundscapes and visual environments.",
      zh: "To further explore public perceptions at a larger scale, an online questionnaire was distributed to evaluate how people experience urban soundscapes and visual environments.",
    } satisfies LocalizedCopy,
    rowGroups: [
      {
        heading: {
          en: "Survey Overview",
          zh: "Survey Overview",
        } satisfies LocalizedCopy,
        items: {
          en: [
            "Sample Size: N = 256",
            "Method: Online questionnaire",
            "Focus Areas: Environmental comfort; Perceived pleasantness; Soundscape appropriateness; Satisfaction with environmental conditions; Preferences toward different sound and colour characteristics",
          ],
          zh: [
            "Sample Size: N = 256",
            "Method: Online questionnaire",
            "Focus Areas: Environmental comfort; Perceived pleasantness; Soundscape appropriateness; Satisfaction with environmental conditions; Preferences toward different sound and colour characteristics",
          ],
        } satisfies LocalizedStringList,
        sharedImageKey: "onlineSurvey" as const satisfies SeeingUnseenAssetKey,
        sharedImageScale: 0.75,
        splitRatio: "2:1" as const,
      },
      {
        heading: {
          en: "How to describe sound and colour perception",
          zh: "How to describe sound and colour perception",
        } satisfies LocalizedCopy,
        rows: [
          {
            label: {
              en: "SOUND",
              zh: "SOUND",
            } satisfies LocalizedCopy,
            text: {
              en: "We selected Acoustic Comfort and Pleasantness as the research target, with Average RMS Amplitude as an objective sound measure, Average Chromaticity Difference to represent color variation, Soundscape Appropriateness to reflect consistency, and nine types of sound sources as the potential factors influencing acoustic comfort.",
              zh: "We selected Acoustic Comfort and Pleasantness as the research target, with Average RMS Amplitude as an objective sound measure, Average Chromaticity Difference to represent color variation, Soundscape Appropriateness to reflect consistency, and nine types of sound sources as the potential factors influencing acoustic comfort.",
            } satisfies LocalizedCopy,
            imageKey: "surveySound" as const satisfies SeeingUnseenAssetKey,
            layout: "split" as const,
          },
          {
            label: {
              en: "COLOUR",
              zh: "COLOUR",
            } satisfies LocalizedCopy,
            text: {
              en: "We use Average Chromaticity Difference to describe the colour complexity of the environment.\n\nVarying degrees of chromatic differences in the environment may trigger different levels of physiological discomfort, potentially posing risks to human health (Penacchio et al., 2021).\n\nThe Average Chromaticity Difference of each scene image are calculated in Matlab2019.",
              zh: "We use Average Chromaticity Difference to describe the colour complexity of the environment.\n\nVarying degrees of chromatic differences in the environment may trigger different levels of physiological discomfort, potentially posing risks to human health (Penacchio et al., 2021).\n\nThe Average Chromaticity Difference of each scene image are calculated in Matlab2019.",
            } satisfies LocalizedCopy,
            imageKey: "surveyAcd" as const satisfies SeeingUnseenAssetKey,
            layout: "split" as const,
          },
        ],
      },
      {
        heading: {
          en: "Key Findings",
          zh: "Key Findings",
        } satisfies LocalizedCopy,
        groupLayout: "labelOnly" as const,
      },
      {
        heading: {
          en: "Perception difference",
          zh: "Perception difference",
        } satisfies LocalizedCopy,
        groupLayout: "textTwinImages" as const,
        prose: {
          en: "The questionnaire results showed that individuals exhibited significant differences in their perceptions of the same environment, making it difficult to use a single objective variable as a unified standard to evaluate their environmental experiences.",
          zh: "The questionnaire results showed that individuals exhibited significant differences in their perceptions of the same environment, making it difficult to use a single objective variable as a unified standard to evaluate their environmental experiences.",
        } satisfies LocalizedCopy,
        imageKeys: [
          "finding1",
          "finding2",
        ] as const satisfies readonly SeeingUnseenAssetKey[],
      },
      {
        heading: {
          en: "New evaluation system",
          zh: "New evaluation system",
        } satisfies LocalizedCopy,
        rows: [
          {
            text: {
              en: "We used the previously proposed indicators of soundscape perception as latent variables and conducted a linear regression analysis to examine their effects on acoustic comfort.\n\nThe variables that showed significant influence were included in a linear regression equation, through which the statistical value of acoustic comfort could be predicted.",
              zh: "We used the previously proposed indicators of soundscape perception as latent variables and conducted a linear regression analysis to examine their effects on acoustic comfort.\n\nThe variables that showed significant influence were included in a linear regression equation, through which the statistical value of acoustic comfort could be predicted.",
            } satisfies LocalizedCopy,
            imageKey: "finding3" as const satisfies SeeingUnseenAssetKey,
            layout: "split" as const,
          },
          {
            text: {
              en: "When selecting influencing factors, we added construction noise which showed significant differences in the questionnaire results, as a new variable.\n\nNext, we aim to simplify the model and conduct further analysis from a local perspective to obtain more detailed conclusions.",
              zh: "When selecting influencing factors, we added construction noise which showed significant differences in the questionnaire results, as a new variable.\n\nNext, we aim to simplify the model and conduct further analysis from a local perspective to obtain more detailed conclusions.",
            } satisfies LocalizedCopy,
            imageKey: "finding4" as const satisfies SeeingUnseenAssetKey,
            layout: "split" as const,
          },
        ],
      },
      {
        heading: {
          en: "Summary",
          zh: "Summary",
        } satisfies LocalizedCopy,
        groupLayout: "summary" as const,
        sharedImageKey: "surveyModelling" as const satisfies SeeingUnseenAssetKey,
      },
    ],
    imageLayout: "groupedRows" as const,
  },
  {
    title: {
      en: "3. Data Analysis - Linear Process",
      zh: "3. Data Analysis - Linear Process",
    } satisfies LocalizedCopy,
    rowGroups: [
      {
        rows: [
          {
            text: {
              en: "We simplified the previously obtained model equation, focusing on the variables that influence people's sense of pleasantness.\n\nThe resulting linear regression model includes four factors—RMS, ACD, Wind, and Airplane—and can be used to predict the perceived pleasantness of urban-disciplined groups in a given environment.",
              zh: "We simplified the previously obtained model equation, focusing on the variables that influence people's sense of pleasantness.\n\nThe resulting linear regression model includes four factors—RMS, ACD, Wind, and Airplane—and can be used to predict the perceived pleasantness of urban-disciplined groups in a given environment.",
            } satisfies LocalizedCopy,
            imageKey: "linear" as const satisfies SeeingUnseenAssetKey,
            imageScale: 0.75,
            splitRatio: "1:1" as const,
            layout: "split" as const,
          },
          {
            imageKey: "linear2" as const satisfies SeeingUnseenAssetKey,
            layout: "imageOnly" as const,
          },
        ],
      },
    ],
    imageLayout: "groupedRows" as const,
  },
] as const;

export const seeingUnseenTasksCopy = {
  userJourney: {
    title: {
      en: "User journey",
      zh: "User journey",
    } satisfies LocalizedCopy,
    imageKey: "userJourney" as const satisfies SeeingUnseenAssetKey,
  },
  hardwareDevelopment: {
    title: {
      en: "Hardware system development",
      zh: "Hardware system development",
    } satisfies LocalizedCopy,
    layout: "verticalTriple" as const,
    imageKeys: ["hard1", "hard2", "hard3"] as const satisfies readonly SeeingUnseenAssetKey[],
  },
} as const;

export const seeingUnseenHowCopy = {
  videoKeys: [
    "aniGear1",
    "aniGear2",
    "aniMake",
  ] as const satisfies readonly SeeingUnseenAssetKey[],
} as const;

export const seeingUnseenIntegrationCopy = {
  imageKeys: [
    "final1",
    "final2",
    "final3",
  ] as const satisfies readonly SeeingUnseenAssetKey[],
  videoKeys: [
    "aniUse",
    "aniOutcome",
  ] as const satisfies readonly SeeingUnseenAssetKey[],
} as const;

export const seeingUnseenResultCopy = {
  galleryLayout: "leftOneRightTwo" as const,
  galleryKeys: [
    "resultLeft",
    "result1",
    "result2",
    "result3",
  ] as const satisfies readonly SeeingUnseenAssetKey[],
  impact: {
    en: "Exhibited at the 2025 Bartlett Fifteen Show, the work received enthusiastic and consistently positive feedback from visitors.",
    zh: "该项目于 2025 年 Bartlett Fifteen Show 展出，收获了观众广泛而积极的反馈。",
  } satisfies LocalizedCopy,
  video: {
    en: "https://youtu.be/RkLyVnXSmog",
    zh: "https://youtu.be/RkLyVnXSmog",
  } satisfies LocalizedCopy,
} as const;

export const seeingUnseenManifest: ProjectManifestEntry = {
  id: "seeing-unseen",
  meta: {
    name: { en: "Seeing the Unseen (2025)", zh: "见所未见（2025）" },
    keyword: { en: "Wearable device", zh: "可穿戴设备" },
    summary: {
      en: 'A research-based wearable design which explores how sensory conditioning desensitises people to external stimuli, helping individuals reconnect with overlooked sensory dimensions.\n\nIt captures environmental sound and colour in real time, using a linear regression model to predict pleasure levels of disciplined groups. When wearers input their own level, the device responds visually and haptically, revealing their "sensory discipline" and creating an immersive, reflective experience.\n\nEach input refines the model, improving prediction accuracy and reopening the boundary between external reality and inner perception—turning the body into a medium of communication.\n\nMore than a wearable, Seeing the Unseen invites us to reconsider sensory thresholds in urban life and reflect on how deeply we perceive its details.',
      zh: "一个基于研究的可穿戴设计，讨论感官驯化如何让人对外界刺激逐渐“失敏”，并尝试帮助人们重新连接那些被忽略的感知维度。\n\n装置实时采集环境声与色彩，利用线性回归模型预测被试群体对周围环境的愉悦程度。当佩戴者输入自己的感受评价时，设备会以视觉与触觉反馈回应，显现出他们的被城市规训程度大小，同时引发人们的思考。\n\n每一次输入都会反向修正模型，提高预测的准确度，重新打开外在现实与内在感知之间的边界——让身体重新成为沟通的媒介。\n\n这不仅是一个可穿戴装置，更是一次对城市生活中感官阈值的重新审视，引发我们进行反思：自己究竟对环境的感知有多敏锐？",
    },
    role: {
      en: "Hardware system, data analysis, colour and sound research",
      zh: "硬件系统、数据分析、声音与色彩研究、交互设计",
    },
    type: { en: "Team Project with 3 members", zh: "团队项目" },
    tools: { en: "Arduino, Raspberry Pi", zh: "Arduino, Raspberry Pi" },
    details: {
      en: "Exhibited in Bartlett Fifteen Show",
      zh: "展出于 Bartlett Fifteen Show",
    },
    website: {
      en: "https://fifteen2025.bartlettarchucl.com/dfpi-room-3/dfpi-2025-room-3-seeing-the-unseen",
      zh: "https://fifteen2025.bartlettarchucl.com/dfpi-room-3/dfpi-2025-room-3-seeing-the-unseen",
    },
    moreDetails: {
      en: "https://drive.google.com/file/d/1nZK_dRKe3uoHWCQeciMPy-3kh-mV-wZI/view?usp=sharing",
      zh: "https://pub-bea146db2f744e7a8ade7c6af6a38bae.r2.dev/Seeing%20the%20Unseen.pdf",
    },
  },
  previewImage: {
    en: remote(
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772671720/%E5%9B%BE%E5%B1%82_2_jj41va.png",
    ),
    zh: remote(
      "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-preview%20image/%E5%9B%BE%E5%B1%82_2_jj41va.png",
    ),
  },
  images: {
    en: [
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635941/ScreenShot_2026-03-04_144814_171_zwyou5.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635940/ScreenShot_2026-03-04_144728_730_hpgwnx.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772671468/ScreenShot_2026-03-04_144742_674.jpg_oc1owo.png",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635940/ScreenShot_2026-03-04_145103_144_mfjlcl.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635945/ScreenShot_2026-03-04_145022_609_vsxkmc.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772636022/ScreenShot_2026-03-04_144549_899_uxkafr.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635943/ScreenShot_2026-03-04_144838_023_syardu.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635941/ScreenShot_2026-03-04_144849_671_m5rlbu.jpg",
      ),
      remote(
        "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635944/ScreenShot_2026-03-04_144910_512_dnvcez.jpg",
      ),
    ],
    zh: [
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144814_171_zwyou5.jpg",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144728_730_hpgwnx.jpg",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144742_674.jpg_oc1owo.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_145103_144_pjgxi2.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_145022_609_vsxkmc.jpg",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144549_899_uxkafr.jpg",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144838_023_pdzded.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144849_671_u3vyjz.png",
      ),
      remote(
        "https://pub-9b9aa28da9694d5c898fff02b25e70f0.r2.dev/Interactive%20project-content%20image/ScreenShot_2026-03-04_144910_512_ma2x0o.png",
      ),
    ],
  },
  heroVideo: {
    en: remote("https://youtu.be/gAUYF0tgbx0"),
    zh: remote("//player.bilibili.com/player.html?bvid=BV1NKP9zXE6p&page=1"),
  },
};
