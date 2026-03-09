export interface Project {
  id: string;
  name: string;
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
}

export const interactiveInstallation: Project[] = [
  {
    id: "popup-museum",
    name: "Pop-up Museum (2026)",
    summary:
      "An interactive installation featuring artefacts from the Grant and Petrie Museum, transforming traditionally untouchable objects into an immersive experience that can be felt, moved, and heard through the integration of 3D printing, sensing, and digital media technologies.",
    role: "Animation System, 2D/3D asset, UI/UX Design",
    type: "Team Project",
    tools: "Unity, Maya, C4D, Adobe CS",
    details: "Designed for Grant and Petrie Museum",
    website:
      "https://sites.google.com/view/the-forest-collective/events/ucl-illuminated-2026",
    moreDetails:
      "https://drive.google.com/file/d/1SO1XoJSZZHBFos8DZKYdI0Mf_ENYVCXY/view?usp=sharing",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772745373/ScreenShot_2026-03-05_211513_697_qmv6ib.jpg",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635243/ScreenShot_2026-03-04_143602_363_rhjp1v.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635240/ScreenShot_2026-03-04_143613_991_tfzthj.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587644/ScreenShot_2026-02-18_202557_562_cj69ds.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635243/ScreenShot_2026-03-04_143623_577_iu6rkg.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635245/ScreenShot_2026-03-04_143727_008_ts4okg.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635250/ScreenShot_2026-03-04_143747_610_dokz4v.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772635251/ScreenShot_2026-03-04_143855_701_rm5bh1.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587169/ScreenShot_2026-02-20_000553_165_gilpnl.jpg",
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587136/toonshader_q3cqjo.jpg",
    ],
    videoUrl: "https://youtu.be/xCatM3rwGKA",
  },
  {
    id: "seeing-unseen",
    name: "Seeing the Unseen (2025)",
    summary:
      'A research-based wearable design which explores how sensory conditioning desensitises people to external stimuli, helping individuals reconnect with overlooked sensory dimensions.\n\nIt captures environmental sound and colour in real time, using a linear regression model to predict pleasure levels of disciplined groups. When wearers input their own level, the device responds visually and haptically, revealing their "sensory discipline" and creating an immersive, reflective experience.\n\nEach input refines the model, improving prediction accuracy and reopening the boundary between external reality and inner perception—turning the body into a medium of communication.\n\nMore than a wearable, Seeing the Unseen invites us to reconsider sensory thresholds in urban life and reflect on how deeply we perceive its details.',
    role: "Hardware system, data analysis, colour and sound research",
    type: "Team Project",
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
    summary:
      "An interactive interface developed for Yonglian Museum to review the history and rapid development of Yonglian Village, exploring ways to let people of all age feel more engaged when visiting the museum.",
    role: "Unity Developer, UI/UX Design",
    type: "Commercial Project",
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
    summary:
      "An immersive interactive experience set in a traditional Chinese painting converted from 2D to 3D, where players navigate ancient temples and solve environmental puzzles under different weather conditions. This project was developed in Unreal Engine to explore cultural narratives through digital media.",
    role: "Technical Artist, Interaction Design",
    type: "Team Project",
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
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587606/%E9%AA%91%E4%B9%98%E7%B3%BB%E7%BB%9F%E8%93%9D%E5%9B%BE_k6ul0g.jpg",
    ],
    videoUrl: "https://youtu.be/jrOYWVOa4_k",
  },
  {
    id: "aquas-will",
    name: "Aqua's Will (2023)",
    summary:
      "A 2D side-scrolling RPG about Aqua, a sea spirit who ventures into a polluted underwater cave to save her mutated whale shark companion and restore balance to the ocean.",
    role: "2D Animation system, Narrative and Level Design",
    type: "Team Project",
    tools: "Unity, Midjourney, Adobe CS",
    previewImage:
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587042/%E5%9B%BE%E7%89%871_xcgsiz.png",
    images: [
      "https://res.cloudinary.com/dnigow6jb/image/upload/v1772587059/%E5%9B%BE%E7%89%87l1_yrfuo5.png",
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

