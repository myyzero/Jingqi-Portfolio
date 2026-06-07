# Portfolio content structure map (English)

**Purpose:** Reference document aligned with the **Pop-up Museum** detail page on the site. Use it when preparing copy and assets before updating `content/manifests/projects/*.data.ts`.

**Source of truth (live site):** `content/manifests/projects/popup-museum.data.ts` (+ `popup-museum-assets.ts` for local files).

**Convention**

- **Copy** — English text shown on the page.
- **Media** — Suggested file path under `materials/<project-slug>/` or URL. Pop-up Museum paths match the current repo.
- **Manifest field** — Where this block maps when you sync to code (Pop-up only today).
- `**[CONFIRM]`** — Draft inference or placeholder; please verify before publishing to manifest.
- `**[manifest TODO]`** — Site card still has `TODO` in `*.data.ts`; text here is from `myProContentDraft.md` / Visual Practice until you confirm.

**Page flow (detail layout)**

1. Hero / meta strip → Summary
2. **What & Why** → Problem, Insight, Approach (×3)
3. **Process** → Research → Tasks → How (5 sub-sections) → **INTEGRATION** (no body copy on site)
4. **Result & Impact** → impact text + image gallery

---

## 1. Pop-up Museum (`popup-museum`)

**Works category:** interaction-design  
**Detail page:** full template (only project with `detail` today)  
**Manifest:** `popup-museum.data.ts` · assets: `popup-museum-assets.ts`

### Works index card override (English only on list card)


| Field | Value (overrides meta on Works grid) |
| ----- | ------------------------------------ |
| Type  | Team Project                         |
| Role  | Animator                             |
| Tools | Maya, Unity, Adobe CS                |


*Meta on detail header still uses tools below.*

---

### Meta


| Field             | Copy                                                                                                                                                                     | Media / link                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| name              | Pop-up Museum (2026)                                                                                                                                                     | —                                             |
| keyword           | Museum interactive installation                                                                                                                                          | —                                             |
| role              | Animator                                                                                                                                                                 | —                                             |
| type              | Team project                                                                                                                                                             | —                                             |
| tools             | Unity, Maya, C4D, Adobe CS                                                                                                                                               | —                                             |
| details           | Designed for Grant and Petrie Museum                                                                                                                                     | —                                             |
| website           | [https://sites.google.com/view/the-forest-collective/events/ucl-illuminated-2026](https://sites.google.com/view/the-forest-collective/events/ucl-illuminated-2026)       | —                                             |
| moreDetails (PDF) | [https://drive.google.com/file/d/1SO1XoJSZZHBFos8DZKYdI0Mf_ENYVCXY/view?usp=sharing](https://drive.google.com/file/d/1SO1XoJSZZHBFos8DZKYdI0Mf_ENYVCXY/view?usp=sharing) | —                                             |
| heroVideo         | [https://youtu.be/Ld0dREliREA](https://youtu.be/Ld0dREliREA)                                                                                                             | —                                             |
| previewImage      | —                                                                                                                                                                        | Cloudinary preview (see manifest `previewEn`) |


---

### Summary

An interactive museum installation built around artefacts from the Grant and Petrie Museum. By combining 3D-printed replicas, physical sensing, and real-time digital media, the piece turns objects that are normally “look but don’t touch” into something visitors can feel, move, and hear. I led the animation system and contributed 2D/3D assets plus UI/UX for the Unity experience.

---

### What & Why

#### Problem

- Museum collections are often protected behind glass, which limits tactile engagement, especially for younger audiences who expect playful, responsive media.
- The project aimed to create a pop-up, body-led encounter with selected artefacts without compromising conservation rules, using replicas and digital layers instead of handling originals.

**Media:** `materials/popup-museum/whatwhy/problem.png`

#### Insight

- Visitors responded more strongly to touchable artefact replicas and ways to learn through games with stylised and animated introductions.
- A toon-shaded, story-driven visual language made the artefacts feel alive and approachable.

**Media:** `materials/popup-museum/whatwhy/insight.jpg`

#### Approach 1 — Tactile Artefacts

- Created museum object replicas using 3D printing and high-precision scanning.
- Enables visitors to physically explore surface textures and forms for a deeper understanding of the artifacts.

**Media:** `materials/popup-museum/approach/app1_PM.png`

#### Approach 2 — Hardware Application

- Integrated CodeCell C3 sensors into the replicas.
- Physical movements are mirrored in real time by their digital counterparts.
- Enhances engagement, playability, and exploration.

**Media:** `materials/popup-museum/approach/app2_PM.jpg`

#### Approach 3 — Digital Storytelling

- Developed a digital environment in Maya and Unity.
- Combines animation, visual effects, UI design, and multimedia content.
- Presents artifact information in an engaging and accessible way, encouraging curiosity and self-directed discovery.

**Media:** `materials/popup-museum/approach/app3_PM.jpg`

---

### Process

#### Research (step copy)

Studied Grant and Petrie collection themes, visitor flow for pop-up formats, and technical constraints (sensors, print scale, Unity deployment on site). Mapped the full pipeline in a team flowchart before production.

**Media (sidebar):** `materials/popup-museum/process/research_en.png`  
**Optional flowchart (remote):** PM_Flowchart on Cloudinary — `popupMuseumRemote.flowchart`

#### Tasks (sidebar — “What needs to be done”)

Interactive Digital System Development including:

· 3D Modelling & Environment Design  
· Animation Design  
· Custom Shader Development  
· UI/UX Design  
· Tool Development  

**Media (sidebar):** `materials/popup-museum/process/what_en.png`

---

#### How — 1. 3D Modelling & Environment Design

**Title:** 3D Modelling & Environment Design  

**Body:** Built a 3D asset pipeline from Maya and Cinema 4D to Unity, supporting custom shader development and animation integration.

**Step images (5):**


| #   | File                                         |
| --- | -------------------------------------------- |
| 1   | `materials/popup-museum/process/enPro_1.png` |
| 2   | `materials/popup-museum/process/enPro_2.png` |
| 3   | `materials/popup-museum/process/enPro_3.png` |
| 4   | `materials/popup-museum/process/enPro_4.png` |
| 5   | `materials/popup-museum/process/enPro_5.png` |


**Diorama carousel (title + image):**


| Slide title            | File                          |
| ---------------------- | ----------------------------- |
| Seychellophryne Frog   | `dio_seychellophryneFrog.jpg` |
| Cowfish                | `dio_cowfish.jpg`             |
| Carved ebony vessel    | `dio_vessel.jpg`              |
| Pottery 'tulip beaker' | `dio_pottery.jpg`             |
| Limestone Frog         | `dio_limestonefrog.jpg`       |
| Pipistrellus           | `dio_pipi.jpg`                |
| Female Figurine        | `dio_femalefigurine.jpg`      |
| Sandstone Lion         | `dio_sandstonelion.jpg`       |
| Sea Sponge             | `dio_seasponge.jpg`           |
| Amoured Fish           | `dio_amouredfish.jpg`         |


---

#### How — 2. Animation Design

**Title:** Animation Design  

**Body:** Created artifact reveal and transition animations using Animation Controllers and Animation Clips, developed looping environmental animations, and implemented subtle UI motion graphics to enhance user experience.

**Category: Artefact Animation** (layout: circles)


| #   | File                                                   |
| --- | ------------------------------------------------------ |
| 1   | `materials/popup-museum/process/AD_Artefact_ani_1.mp4` |
| 2   | `materials/popup-museum/process/AD_Artefact_ani_2.mp4` |


**Category: Dissolved and Flipping Animation** (layout: rectangles)


| #   | File                                              |
| --- | ------------------------------------------------- |
| 1   | `materials/popup-museum/process/AD_D&F_ani_1.mp4` |
| 2   | `materials/popup-museum/process/AD_D&F_ani_2.mp4` |


**Category: Diorama Loop Animation** (layout: grid)


| #   | File                |
| --- | ------------------- |
| 1   | `AD_loop_ani_1.mp4` |
| 2   | `AD_loop_ani_2.mp4` |
| 3   | `AD_loop_ani_3.mp4` |
| 4   | `AD_loop_ani_4.mp4` |


---

#### How — 3. Custom Shader Development

**Section title (How block):** Custom Shader Development  
*(No single paragraph under How; two sub-sections below.)*

**Sub-section: Dissolve Shader** *(UI label from builder)*

**Copy:** Designed noise-based dissolve shaders in Shader Graph to establish a cohesive visual style across the experience.


| Media slot     | File                    |
| -------------- | ----------------------- |
| Shader graph   | `shader_dissolve_1.png` |
| Output (video) | `shader_dissolve_2.mp4` |


**Sub-section: Toon Shader**

**Copy:** The shader can be reused by simply modifying the colour and texture as needed, at the same time maintaining a consistent lighting direction that aligns with the constructed external environment.


| Media slot     | File                   |
| -------------- | ---------------------- |
| Logic diagram  | `toonshader_logic.png` |
| Shader graph   | `toonshader_graph.png` |
| Output (video) | `toonshader_ani.mp4`   |


---

#### How — 4. UI/UX Design

**Title:** UI/UX Design  

**Body:** *(none on site — media only)*


| Media slot | File / URL                                                   |
| ---------- | ------------------------------------------------------------ |
| Logic      | `ui_logic.png`                                               |
| Storyboard | `ui_storyboard.png`                                          |
| Demo video | [https://youtu.be/9tGo0ZzQf9o](https://youtu.be/9tGo0ZzQf9o) |


---

#### How — 5. Tool Development

**Title:** Tool Development  

**Tool row 1**

- Unity Editor tool - Batch Material Replace
- Aim: Batch-apply a stylized template material to selected scene models while keeping each object's original color.
- How: C# scripts.
- Effect: Cuts repetitive manual material swaps and avoids breaking shared .mat assets.


| Media        | File                |
| ------------ | ------------------- |
| Screenshot 1 | `tool_shader_1.png` |
| Screenshot 2 | `tool_shader_2.png` |


**Tool row 2**

- Unity Editor tool - Scene Triangle Count
- Aim: Check geometric triangle counts on selected scene objects without opening FBX or mesh assets in the Project window.
- How: C# scripts.
- Effect: Speeds up daily scene review and highlights the heaviest renderers early.


| Media        | File             |
| ------------ | ---------------- |
| Screenshot 1 | `tool_tri_1.png` |
| Screenshot 2 | `tool_tri_2.png` |


---

#### INTEGRATION (Process step label; was “Output”)

**Body copy:** *(empty on site)*

**Integration images (3):**


| #   | File                                      |
| --- | ----------------------------------------- |
| 1   | `materials/popup-museum/process/in_1.jpg` |
| 2   | `in_2.jpg`                                |
| 3   | `in_3.jpg`                                |


**Note:** Step also uses a large diorama image from remote (`processDiorama`) — not user-facing copy.

---

### Result & Impact

**Impact copy:** Presented at UCL Illuminated 2026 in collaboration with the Grant and Petrie Museum, drew follow-up interest from museum curators. The piece offered a multi-sensory alternative to static display and demonstrated how digital animation systems can scale across many artefacts in one physical setup.

**Gallery (2×2):**


| #   | File                                         |
| --- | -------------------------------------------- |
| 1   | `materials/popup-museum/result/result_1.jpg` |
| 2   | `result_2.jpg`                               |
| 3   | `result_3.jpg`                               |
| 4   | `result_4.jpg`                               |


---

## 2. Seeing the Unseen (`seeing-unseen`)

**Works category:** interaction-design  
**Site today:** card only (no detail page) — structure ready for future detail build.  
**Manifest:** `seeing-unseen.data.ts`  
**Suggested materials folder:** `materials/seeing-unseen/`

### Works index card override


| Field | Value                |
| ----- | -------------------- |
| Type  | *(none — uses meta)* |
| Role  | *(none — uses meta)* |
| Tools | *(none — uses meta)* |


---

### Meta


| Field             | Copy                                                                                                                                                                             | Media / link                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| name              | Seeing the Unseen (2025)                                                                                                                                                         | —                                       |
| keyword           | Wearable device                                                                                                                                                                  | —                                       |
| role              | Hardware system, data analysis, colour and sound research                                                                                                                        | —                                       |
| type              | Team Project with 3 members                                                                                                                                                      | —                                       |
| tools             | Arduino, Raspberry Pi                                                                                                                                                            | —                                       |
| details           | Exhibited in Bartlett Fifteen Show                                                                                                                                               | —                                       |
| website           | [https://fifteen2025.bartlettarchucl.com/dfpi-room-3/dfpi-2025-room-3-seeing-the-unseen](https://fifteen2025.bartlettarchucl.com/dfpi-room-3/dfpi-2025-room-3-seeing-the-unseen) | —                                       |
| moreDetails (PDF) | [https://drive.google.com/file/d/1nZK_dRKe3uoHWCQeciMPy-3kh-mV-wZI/view?usp=sharing](https://drive.google.com/file/d/1nZK_dRKe3uoHWCQeciMPy-3kh-mV-wZI/view?usp=sharing)         | —                                       |
| heroVideo         | [https://youtu.be/gAUYF0tgbx0](https://youtu.be/gAUYF0tgbx0)                                                                                                                     | —                                       |
| previewImage      | —                                                                                                                                                                                | manifest `previewImage.en` (Cloudinary) |


---

### Summary

A research-based wearable design which explores how sensory conditioning desensitises people to external stimuli, helping individuals reconnect with overlooked sensory dimensions.

It captures environmental sound and colour in real time, using a linear regression model to predict pleasure levels of disciplined groups. When wearers input their own level, the device responds visually and haptically, revealing their "sensory discipline" and creating an immersive, reflective experience.

Each input refines the model, improving prediction accuracy and reopening the boundary between external reality and inner perception—turning the body into a medium of communication.

More than a wearable, Seeing the Unseen invites us to reconsider sensory thresholds in urban life and reflect on how deeply we perceive its details.

---

### What & Why

#### Problem

- City dwellers are trained to filter stimuli; many sensations never register consciously.
- The project goal was to externalise the gap between measured environment and felt experience, using the body as an interface rather than a phone screen.

**Media:** `materials/seeing-unseen/whatwhy/problem.png` `[CONFIRM — file not in repo yet]`  
**Also (manifest gallery):** `images[0–2]` concept / early device

#### Insight

- People engaged most when the device felt like a conversation with themselves, not a scoreboard.
- Each input retrains the model, so the wearer sees how their calibration diverges from the group model—surfacing sensory discipline as something learned, not fixed.

**Media:** `materials/seeing-unseen/whatwhy/insight.jpg` `[CONFIRM]`

#### Approach 1 — Data collection and Model  Built

- Co-built wearable hardware pipeline (sensors → microcontrollers → output actuators) with teammates.
- Integrated live capture of environmental sound and colour for real-time inference.

**Media:** `materials/seeing-unseen/approach/approach_1.jpg` `[CONFIRM]` · manifest `images[3–5]`

#### Approach 2 — Wearable Design and Hardware System

- Conducted colour and sound studies to define features fed into the regression model.
- Compared disciplined vs. less-filtered participant groups to train prediction baselines. `[CONFIRM sample size]`

**Media:** `materials/seeing-unseen/approach/approach_2.jpg` `[CONFIRM]`

#### Approach 3 — Outcome Visualization and Narrative Film

- Designed feedback patterns (light, motion, haptics) legible in gallery without a manual.
- Supported walk-up trials where visitors compared predicted vs. felt responses.

**Media:** `materials/seeing-unseen/approach/approach_3.jpg` `[CONFIRM]` · manifest `images[6–8]`

---

### Process

#### Research (step copy)

```
Field Research: 
```

Literature and prototypes on sensory adaptation, urban noise/colour profiles, and wearable ethics. Collected training data from disciplined vs. less-filtered participant groups to define regression features and exhibition constraints.

**Media (sidebar):** `materials/seeing-unseen/process/research.png` `[CONFIRM]`  
**Remote (manifest):** `images[0]` flow / concept, `images[4]` flowchart if used

#### Tasks (sidebar — “What needs to be done”)

Wearable system development including:

· Hardware integration (Arduino, Raspberry Pi)  
· Colour and sound sensing pipeline  
· Data analysis & linear regression workflow  
· Interaction design (input / visual / haptic feedback)  
· Exhibition-ready reliability & documentation  

**Media (sidebar):** `materials/seeing-unseen/process/tasks.png` `[CONFIRM]`

---

#### How — 1. 3D Modelling & Environment Design

**Title:** Wearable Enclosure & Component Layout  

**Body:** Designed the physical wearable structure and internal layout for sensors, microcontrollers, and feedback actuators—balancing comfort, signal quality, and gallery durability.

**Step images (5):**


| #   | File / manifest ref                          |
| --- | -------------------------------------------- |
| 1   | `[CONFIRM]` · `images[5]` electronics layout |
| 2   | `[CONFIRM]` · `images[6]`                    |
| 3   | `[CONFIRM]`                                  |
| 4   | `[CONFIRM]`                                  |
| 5   | `[CONFIRM]`                                  |


**Carousel slides (artefact / device states):**


| Slide title          | File                   |
| -------------------- | ---------------------- |
| Concept / form study | manifest `images[0–2]` |
| Device on body       | `[CONFIRM]`            |
| Sensor placement     | `[CONFIRM]`            |
| Exhibition install   | manifest `images[7–8]` |


---

#### How — 2. Animation Design

**Title:** Feedback Motion & Visual Response  

**Body:** Tuned visual and haptic feedback timing so responses felt conversational rather than punitive—supporting reflection on personal vs. group-predicted pleasure levels.

**Category: Live feedback states** (layout: circles) `[CONFIRM layout]`


| #   | File                  |
| --- | --------------------- |
| 1   | `[CONFIRM]` demo clip |
| 2   | `[CONFIRM]`           |


**Category: User input loop** (layout: rectangles)


| #   | File        |
| --- | ----------- |
| 1   | `[CONFIRM]` |
| 2   | `[CONFIRM]` |


**Category: Exhibition documentation** (layout: grid)


| #   | File                   |
| --- | ---------------------- |
| 1   | manifest `images[7]`   |
| 2   | manifest `images[8]`   |
| 3   | heroVideo still / clip |
| 4   | `[CONFIRM]`            |


---

#### How — 3. Custom Shader Development

**Title:** Data Model & Prediction *(replaces shader block for this project)*  

**Sub-section: Feature pipeline**

**Copy:** Mapped live colour and sound features into a linear regression model that predicts pleasure levels for a reference (disciplined) group.


| Media slot | File                                |
| ---------- | ----------------------------------- |
| Diagram    | `[CONFIRM]` data flow               |
| Output     | `[CONFIRM]` model / plot screenshot |


**Sub-section: Personal calibration loop**

**Copy:** Each wearer input refines the model and highlights divergence between felt experience and group prediction—making sensory discipline visible.


| Media slot | File                   |
| ---------- | ---------------------- |
| Logic      | `[CONFIRM]`            |
| Chart / UI | manifest `images[3–4]` |


---

#### How — 4. UI/UX Design

**Title:** Interaction & Exhibition UX  

**Body:** Designed the on-device input flow and feedback language so Fifteen Show visitors could use the piece without instructions—foregrounding debate between quantified sensation and lived experience.


| Media slot | File / URL                                                   |
| ---------- | ------------------------------------------------------------ |
| Logic      | `[CONFIRM]` `ui_logic.png`                                   |
| Storyboard | `[CONFIRM]` `ui_storyboard.png`                              |
| Demo video | [https://youtu.be/gAUYF0tgbx0](https://youtu.be/gAUYF0tgbx0) |


---

#### How — 5. Tool Development

**Title:** Firmware & Prototyping Tools  

**Tool row 1**

- Arduino / Raspberry Pi sensing stack
- Aim: Stable sampling of environmental colour and sound for model input.
- How: Sensor calibration, serial/USB pipelines, iteration on placement.
- Effect: Reliable live data during exhibition walk-ups.


| Media        | File                 |
| ------------ | -------------------- |
| Screenshot 1 | `[CONFIRM]`          |
| Screenshot 2 | manifest `images[5]` |


**Tool row 2**

- Data analysis & model refinement workflow
- Aim: Train and update linear regression from participant sessions.
- How: Feature extraction from colour/sound studies; retrain after each wearer input.
- Effect: Improving prediction accuracy across the show run. `[CONFIRM tooling: Python / notebook?]`


| Media        | File        |
| ------------ | ----------- |
| Screenshot 1 | `[CONFIRM]` |
| Screenshot 2 | `[CONFIRM]` |


---

#### INTEGRATION

**Body copy:** *(empty — align with Pop-up when detail page is built)*

**Integration images (3):**


| #   | File                                |
| --- | ----------------------------------- |
| 1   | `[CONFIRM]` full wearable + install |
| 2   | `[CONFIRM]`                         |
| 3   | `[CONFIRM]`                         |


---

### Result & Impact

**Impact copy:** Exhibited at the Bartlett Fifteen Show 2025 with public walk-up trials. The work sparked discussions about quantified sensation vs. lived experience, and demonstrated a cross-disciplinary pipeline: research → ML prototype → embodied interaction. `[CONFIRM]` visitor quotes, model accuracy metrics, press, or awards.

**Gallery (2×2):**


| #   | File / manifest                                           |
| --- | --------------------------------------------------------- |
| 1   | `materials/seeing-unseen/result/result_1.jpg` `[CONFIRM]` |
| 2   | result_2                                                  |
| 3   | result_3                                                  |
| 4   | result_4                                                  |


---

## 3. Dragon Mountain (`dragon-mountain`)

**Works category:** game-digital-experience  
**Site today:** card only  
**Manifest:** `dragon-mountain.data.ts`  
**Suggested materials folder:** `materials/dragon-mountain/` · hero: `materials/dragon-mountain/HV_DM.mp4`

### Works index card override


| Field | Value                |
| ----- | -------------------- |
| Type  | *(none — uses meta)* |
| Role  | *(none — uses meta)* |
| Tools | *(none — uses meta)* |


---

### Meta


| Field             | Copy                                                                                                                                                                     | Media / link                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| name              | Dragon Mountain (2024)                                                                                                                                                   | —                              |
| keyword           | Digital experience design                                                                                                                                                | —                              |
| role              | Technical Artist, Interaction Design                                                                                                                                     | —                              |
| type              | Team Project with 2 members                                                                                                                                              | —                              |
| tools             | UE, Maya, Adobe CS                                                                                                                                                       | —                              |
| details           | Designed for Museum                                                                                                                                                      | —                              |
| website           | `[CONFIRM — not in manifest]`                                                                                                                                            | —                              |
| moreDetails (PDF) | [https://drive.google.com/file/d/1DIEezLARhdBBU6KE5yDaVFND-64FcQ6B/view?usp=sharing](https://drive.google.com/file/d/1DIEezLARhdBBU6KE5yDaVFND-64FcQ6B/view?usp=sharing) | —                              |
| heroVideo         | [https://youtu.be/CPF2gNgYsvQ](https://youtu.be/CPF2gNgYsvQ)                                                                                                             | —                              |
| previewImage      | —                                                                                                                                                                        | manifest `cover_en_qmsr2t.jpg` |


---

### Summary

An immersive interactive experience set in a traditional Chinese painting converted from 2D to 3D, where players navigate ancient temples and solve environmental puzzles under different weather conditions. This project was developed in Unreal Engine to explore cultural narratives through digital media.

---

### What & Why

#### Problem

- Traditional paintings are admired statically in galleries; younger audiences often lack context for brushwork, space, and cultural symbolism.
- The goal was to translate 2D compositional rhythm into 3D spatial traversal without losing the painting’s poetic restraint.

**Media:** `materials/dragon-mountain/whatwhy/problem.png` `[CONFIRM]` · manifest `images[0–3]` painterly environments

#### Insight

- Authenticity came from material behaviour, not polygon density: ink diffusion, atmospheric perspective, and weather as emotional UI helped players feel the scroll unfold.
- Gameplay needed light puzzles tied to space (path, gate, bird ride) rather than combat-heavy mechanics.

**Media:** `materials/dragon-mountain/whatwhy/insight.jpg` `[CONFIRM]`

#### Approach 1 — Ink-Style Look Development

- Developed ink-style shaders and post treatments in UE to keep surfaces readable at multiple camera distances.
- Preserved shanshui readability when the camera moves through depth and weather.

**Media:** `materials/dragon-mountain/approach/approach_1.jpg` `[CONFIRM]` · manifest `images[8]` DM_shader

#### Approach 2 — Contemplative Interaction Systems

- Built navigation and dialogue systems suited to slow, museum-style pacing (guided paths, optional discovery).
- Wired triggers for narrative beats without breaking the meditative tone.

**Media:** `materials/dragon-mountain/approach/approach_2.jpg` `[CONFIRM]` · manifest `images[6–7]` dialogue, navigation

#### Approach 3 — Weather & Signature Events

- Designed weather and a bird-ride event as narrative punctuation—changing visibility, audio, and player focus.
- Used environmental state shifts as puzzle and storytelling tools.

**Media:** `materials/dragon-mountain/approach/approach_3.jpg` `[CONFIRM]` · manifest `images[5]` bird ride · `images[9]` weather

---

### Process

#### Research (step copy)

Analysed source painting composition, temple and architecture references, and museum-style slow-looking behaviours. Produced a systems flowchart linking interaction beats to environmental states.

**Media (sidebar):** `materials/dragon-mountain/process/research.png` `[CONFIRM]`  
**Remote:** manifest `images[4]` DM_flowChart

#### Tasks (sidebar — “What needs to be done”)

Unreal experience development including:

· Ink-style shader & lighting look dev  
· Navigation & dialogue systems  
· Weather state machine  
· Bird-ride sequence integration  
· Maya environment asset prep  

**Media (sidebar):** `materials/dragon-mountain/process/tasks.png` `[CONFIRM]`

---

#### How — 1. 3D Modelling & Environment Design

**Title:** 3D Environment & Painting Translation  

**Body:** Lifted classical shanshui composition into a navigable UE world—greyboxing routes, temple paths, and props from Maya into engine-ready assets.

**Step images (5):**


| #   | File / manifest ref            |
| --- | ------------------------------ |
| 1   | manifest `images[0]`           |
| 2   | manifest `images[1]`           |
| 3   | manifest `images[2]`           |
| 4   | manifest `images[3]`           |
| 5   | `[CONFIRM]` greybox / blockout |


**Carousel slides (spaces / landmarks):**


| Slide title        | File                 |
| ------------------ | -------------------- |
| Mountain path      | manifest `images[0]` |
| Temple approach    | manifest `images[1]` |
| Interior / gate    | manifest `images[2]` |
| Vista              | manifest `images[3]` |
| Flowchart overview | manifest `images[4]` |


---

#### How — 2. Animation Design

**Title:** Scripted Motion & Bird-Ride Sequence  

**Body:** Integrated bird-ride and environmental motion as punctuation—animating reveals and transitions that reframe the same spaces under different weather.

**Category: Bird ride & events** (layout: circles)


| #   | File                                    |
| --- | --------------------------------------- |
| 1   | manifest `images[5]` DM_BirdRideEvent   |
| 2   | `[CONFIRM]` sequence clip · `HV_DM.mp4` |


**Category: Dialogue beats** (layout: rectangles)


| #   | File                                   |
| --- | -------------------------------------- |
| 1   | manifest `images[6]` DM_dialogueSystem |
| 2   | `[CONFIRM]`                            |


**Category: Navigation** (layout: grid)


| #   | File                                     |
| --- | ---------------------------------------- |
| 1   | manifest `images[7]` DM_NavigationSystem |
| 2   | `[CONFIRM]`                              |
| 3   | `[CONFIRM]`                              |
| 4   | `[CONFIRM]`                              |


---

#### How — 3. Custom Shader Development

**Sub-section: Ink / atmospheric materials**

**Copy:** Tuned UE materials and post for ink diffusion and atmospheric perspective so brush-and-wash logic reads in real time.


| Media slot     | File                           |
| -------------- | ------------------------------ |
| Shader graph   | manifest `images[8]` DM_shader |
| Output (video) | `[CONFIRM]` in-engine capture  |


**Sub-section: Weather-driven readability**

**Copy:** Weather states act as emotional UI—rain and fog change visibility and puzzle readability without breaking the painterly frame.


| Media slot | File                                  |
| ---------- | ------------------------------------- |
| Logic      | `[CONFIRM]`                           |
| Output     | manifest `images[9]` DM_WeatherSystem |


---

#### How — 4. UI/UX Design

**Title:** Dialogue & Guidance UX  

**Body:** Designed dialogue and navigation UX for contemplative pacing—minimal HUD, clear prompts tied to spatial discovery.


| Media slot | File / URL                                                   |
| ---------- | ------------------------------------------------------------ |
| Logic      | manifest `images[6]`                                         |
| Storyboard | `[CONFIRM]`                                                  |
| Demo video | [https://youtu.be/CPF2gNgYsvQ](https://youtu.be/CPF2gNgYsvQ) |


---

#### How — 5. Tool Development

**Title:** Blueprint / UE Workflow  

**Tool row 1**

- Interaction & weather Blueprint tooling
- Aim: Rapid iteration on triggers, weather blends, and bird-ride timing.
- How: UE Blueprint/C++ integration with art parameters.
- Effect: Playtestable mood shifts without rebuilding geometry.


| Media        | File                           |
| ------------ | ------------------------------ |
| Screenshot 1 | manifest `images[4]` flowchart |
| Screenshot 2 | `[CONFIRM]`                    |


**Tool row 2**

- Shader parameter presets
- Aim: Reuse ink look across meshes and lighting setups.
- How: Material instances + shared lighting rig.
- Effect: Consistent scroll aesthetic at multiple camera distances.


| Media        | File                 |
| ------------ | -------------------- |
| Screenshot 1 | manifest `images[8]` |
| Screenshot 2 | `[CONFIRM]`          |


---

#### INTEGRATION

**Body copy:** *(empty)*

**Integration images (3):**


| #   | File                                                             |
| --- | ---------------------------------------------------------------- |
| 1   | `[CONFIRM]` walkthrough still                                    |
| 2   | `[CONFIRM]` weather + path composite                             |
| 3   | `[CONFIRM]` exhibit / demo context `[CONFIRM venue name, dates]` |


---

### Result & Impact

**Impact copy:** Demonstrated a viable pipeline for cultural IP → real-time immersive exhibit. Visitors could experience brush-and-wash logic as spatial drama rather than wall text alone. `[CONFIRM]` exhibition name, dates, audience size, partner museum, awards or press.

---

## 4. Aqua's Will (`aquas-will`)

**Works category:** game-digital-experience  
**Site today:** card only  
**Manifest:** `aquas-will.data.ts`  
**Suggested materials folder:** `materials/aquas-will/` · draft assets: `whatwhy/problem.png`, `whatwhy/research.png`, `process/research.png`

### Works index card override


| Field | Value                |
| ----- | -------------------- |
| Type  | *(none — uses meta)* |
| Role  | *(none — uses meta)* |
| Tools | *(none — uses meta)* |


---

### Meta


| Field             | Copy                                                         | Media / link         |
| ----------------- | ------------------------------------------------------------ | -------------------- |
| name              | Aqua's Will (2023)                                           | —                    |
| keyword           | 2D RPG game                                                  | —                    |
| role              | 2D Animation system, Narrative and Level Design              | —                    |
| type              | Team Project with 6 members                                  | —                    |
| tools             | Unity, Midjourney, Adobe CS                                  | —                    |
| details           | `[CONFIRM — not in manifest]`                                | —                    |
| website           | `[CONFIRM]`                                                  | —                    |
| moreDetails (PDF) | `[empty on EN manifest]` · ZH PDF on R2                      | —                    |
| heroVideo         | [https://youtu.be/9QSlb-fNXos](https://youtu.be/9QSlb-fNXos) | —                    |
| previewImage      | —                                                            | manifest preview PNG |


---

### Summary

A 2D side-scrolling RPG about Aqua, a sea spirit who ventures into a polluted underwater cave to save her mutated whale shark companion and restore balance to the ocean.

I designed the level flow and narrative beats and implemented the 2D animation system in Unity so character states, combat, and environmental storytelling stayed consistent across the team build.

---

### What & Why

#### Problem

- The team wanted a short-form student game that communicated ocean pollution through play—not only through dialogue.
- The challenge was balancing environmental messaging with readable platformer/RPG mechanics in a tight production schedule.

**Media:** `materials/aquas-will/whatwhy/problem.png`  
**Remote:** manifest `images[0]` AW_Map

#### Insight

- Players understood the stakes faster when level geography mirrored emotional beats: clearer waters near hope, denser hazards near the mutated companion.
- Animation clarity (readable silhouettes, distinct hurt/attack frames) mattered more than frame count for a small team.

**Media:** `materials/aquas-will/whatwhy/insight.jpg` `[CONFIRM]`

#### Approach 1 — Narrative Level Structure

- Structured acts and encounter pacing in a level map tied to story milestones (descent → discovery → confrontation → resolution).
- Linked space layout to the eco-fable arc.

**Media:** `materials/aquas-will/approach/approach_1.jpg` `[CONFIRM]` · manifest `images[0]` AW_Map

#### Approach 2 — 2D Animation System in Unity

- Built a reusable 2D animation controller in Unity for Aqua and key enemies, reducing duplicate logic across scenes.
- Hooked animator parameters to gameplay events (damage, pickup, scene gates).

**Media:** `materials/aquas-will/approach/approach_2.jpg` `[CONFIRM]` · manifest `images[2]` AW_Animation

#### Approach 3 — Visual Exploration Pipeline

- Used AI-generated concept art (Midjourney) for rapid mood exploration, then refined hero readability in Adobe tools before in-engine implementation.

**Media:** `materials/aquas-will/approach/approach_3.jpg` `[CONFIRM]` · manifest `images[1]`

---

### Process

#### Research (step copy)

Referenced ocean ecology narratives, side-scroller readability principles, and pollution visual metaphors (murk, coral loss, unnatural growth). Defined core player fantasy: small spirit vs. large damaged ecosystem.

**Media (sidebar):** `materials/aquas-will/process/research.png` · `whatwhy/research.png`  
**Remote:** manifest `images[0]` AW_Map

#### Tasks (sidebar — “What needs to be done”)

Game development (my scope highlighted) including:

· Narrative outline & level design documentation  
· 2D animation system setup in Unity  
· Animation integration for player and key interactables  
· Coordination on triggers, boss phases, and scene gates  

**Media (sidebar):** `materials/aquas-will/process/tasks.png` `[CONFIRM]`

---

#### How — 1. 3D Modelling & Environment Design

**Title:** Level Layout & Environment Art Direction  

**Body:** Blocked levels on paper → digital map → Unity greybox; art direction supported readable silhouettes and pollution read at a glance.

**Step images (5):**


| #   | File / manifest ref           |
| --- | ----------------------------- |
| 1   | manifest `images[0]` AW_Map   |
| 2   | manifest `images[1]` concept  |
| 3   | manifest `images[3]` gameplay |
| 4   | manifest `images[4]`          |
| 5   | manifest `images[5]`          |


**Carousel slides (level beats):**


| Slide title         | File                   |
| ------------------- | ---------------------- |
| Descent into cave   | `[CONFIRM]`            |
| Polluted zone       | manifest `images[3–5]` |
| Companion encounter | manifest `images[6–7]` |
| Resolution          | manifest `images[7]`   |
| Full map            | manifest `images[0]`   |


---

#### How — 2. Animation Design

**Title:** 2D Character Animation System  

**Body:** Implemented Aqua and enemy state machines—attack, hurt, idle, interaction—iterated from playtest feedback for clarity over frame count.

**Category: Player states** (layout: circles)


| #   | File                              |
| --- | --------------------------------- |
| 1   | manifest `images[2]` AW_Animation |
| 2   | `[CONFIRM]` clip                  |


**Category: Combat / interaction** (layout: rectangles)


| #   | File                 |
| --- | -------------------- |
| 1   | manifest `images[3]` |
| 2   | manifest `images[4]` |


**Category: Gameplay in context** (layout: grid)


| #   | File                 |
| --- | -------------------- |
| 1   | manifest `images[5]` |
| 2   | manifest `images[6]` |
| 3   | manifest `images[7]` |
| 4   | heroVideo            |


---

#### How — 3. Custom Shader Development

**Title:** 2D Visual Treatment & Readability *(project-specific block)*  

**Sub-section: Character readability**

**Copy:** Prioritised silhouette, hurt/attack frames, and colour separation so mechanics read on small screens.


| Media slot | File                   |
| ---------- | ---------------------- |
| Reference  | manifest `images[1–2]` |
| Output     | `[CONFIRM]`            |


**Sub-section: Pollution mood**

**Copy:** Used murk, coral loss, and unnatural growth as environmental storytelling—not only UI text.


| Media slot   | File                   |
| ------------ | ---------------------- |
| Level stills | manifest `images[3–7]` |


---

#### How — 4. UI/UX Design

**Title:** HUD & Narrative UI  

**Body:** `[CONFIRM]` dialogue UI, health, prompts—document if you have screens.


| Media slot | File / URL                                                   |
| ---------- | ------------------------------------------------------------ |
| Logic      | `[CONFIRM]`                                                  |
| Storyboard | `[CONFIRM]`                                                  |
| Demo video | [https://youtu.be/9QSlb-fNXos](https://youtu.be/9QSlb-fNXos) |


---

#### How — 5. Tool Development

**Title:** Unity Animation Workflow  

**Tool row 1**

- Reusable 2D Animator Controller template
- Aim: Share one logic pattern across Aqua and enemies.
- How: Parameters driven by gameplay triggers and scene events.
- Effect: Less duplicate animation code across scenes.


| Media        | File                 |
| ------------ | -------------------- |
| Screenshot 1 | manifest `images[2]` |
| Screenshot 2 | `[CONFIRM]`          |


**Tool row 2**

- Midjourney → Adobe → Unity art pass
- Aim: Fast mood exploration without locking unreadable heroes.
- How: Generate concepts, refine silhouettes, implement in engine.
- Effect: Team-aligned look before full animation polish.


| Media        | File                 |
| ------------ | -------------------- |
| Screenshot 1 | manifest `images[1]` |
| Screenshot 2 | `[CONFIRM]`          |


---

#### INTEGRATION

**Body copy:** *(empty)*

**Integration images (3):**


| #   | File                                |
| --- | ----------------------------------- |
| 1   | `[CONFIRM]` vertical slice gameplay |
| 2   | `[CONFIRM]`                         |
| 3   | `[CONFIRM]`                         |


---

### Result & Impact

**Impact copy:** Delivered as a complete team game build with a coherent arc from descent to restoration. Strengthened pipeline for narrative-driven level design and 2D animation systems in Unity. `[CONFIRM]` course name, year, grade, festival/playtest, public download link.

**Gallery (2×2):**


| #   | File                                                                |
| --- | ------------------------------------------------------------------- |
| 1–4 | `[CONFIRM]` · use manifest `images[3–7]` until result folder filled |


---

## 5. Life Begets Life (`life-begets-life`)

**Works category:** animation-film  
**Site today:** card only · **manifest meta is still TODO**  
**Manifest:** `life-begets-life.data.ts`  
**Suggested materials folder:** `materials/life-begets-life/` · `HV_LBL.mp4`

### Works index card override


| Field | Value    |
| ----- | -------- |
| Type  | *(none)* |
| Role  | *(none)* |
| Tools | *(none)* |


---

### Meta


| Field             | Copy                                                                     | Media / link                                |
| ----------------- | ------------------------------------------------------------------------ | ------------------------------------------- |
| name              | Life Begets Life                                                         | —                                           |
| keyword           | 3D animation                                                             | —                                           |
| role              | `[manifest TODO]` → **3D animation (solo)** `[CONFIRM]`                  | —                                           |
| type              | `[manifest TODO]` → **Personal project** `[CONFIRM]`                     | —                                           |
| tools             | `[manifest TODO]` → **Cinema 4D, After Effects** `[CONFIRM]`             | —                                           |
| details           | `[manifest TODO]` → **Student animated short** `[CONFIRM year / school]` | —                                           |
| website           | `[CONFIRM]`                                                              | —                                           |
| moreDetails (PDF) | `[CONFIRM]`                                                              | —                                           |
| heroVideo         | [https://youtu.be/wU2xjlGVz-Q](https://youtu.be/wU2xjlGVz-Q)             | —                                           |
| previewImage      | —                                                                        | Visual Practice id 6 / manifest placeholder |


---

### Summary

`[manifest TODO on site — draft below]`

A short 3D animated film tracing a whale’s life cycle from birth to dissolution, re-emergence as a core of energy, and transformation into a mechanical submarine that carries an entire underwater city—symbolising that all life is connected through continuous cycles of matter and meaning.

---

### What & Why

#### Problem

- Create an original visual fable without dialogue that still reads clearly to a general audience.
- Practice long-form visual causality (each shot motivates the next) within a student production window.

**Media:** `materials/life-begets-life/whatwhy/problem.png` `[CONFIRM]` · Visual Practice id 6 cover

#### Insight

- The story landed when each transformation followed internal logic of scale shift (creature → energy → machine → habitat), so the audience reads metaphor rather than random spectacle.
- Contrast between organic motion and rigid mechanical motion clarified the “rebirth as infrastructure” idea.

**Media:** `materials/life-begets-life/whatwhy/insight.jpg` `[CONFIRM]` · Visual Practice ids 7–9 luminance series

#### Approach 1 — Four-Movement Story Structure

- Storyboarded the whale arc: life, death/dissolution, energy reconstruction, city emergence.
- Mapped symbolic beats before asset build.

**Media:** `materials/life-begets-life/approach/approach_1.jpg` `[CONFIRM]`

#### Approach 2 — Cinema 4D World-Building

- `[CONFIRM]` Used Cinema 4D for world-building; XPRESSO motion experiments referenced in Visual Practice (ids 2–5).
- Built transformation sequences with controlled timing.

**Media:** `materials/life-begets-life/approach/approach_2.jpg` `[CONFIRM]`

#### Approach 3 — Lighting & Compositing

- Controlled lighting passes to sell exposure / luminance story beats between organic and mechanical phases.
- `[CONFIRM]` Compositing/edit in After Effects.

**Media:** `materials/life-begets-life/approach/approach_3.jpg` `[CONFIRM]` · Visual Practice ids 7–9

---

### Process

#### Research (step copy)

Whale anatomy and locomotion references; underwater lighting; symbolic maps of life → energy → built environment.

**Media (sidebar):** `materials/life-begets-life/process/research.png` `[CONFIRM]`

#### Tasks (sidebar)

Solo animation authorship `[CONFIRM]`: concept, modelling, animation, lighting, compositing, edit.

**Media (sidebar):** `materials/life-begets-life/process/tasks.png` `[CONFIRM]`

---

#### How — 1. 3D Modelling & Environment Design

**Title:** Worlds & Scale Shifts  

**Body:** Modelled whale, energy core, mechanical submarine, and underwater city with readable scale jumps between acts.

**Step images (5):** `[CONFIRM]` · Visual Practice stills ids 7–9

**Carousel slides:**


| Slide title          | File                   |
| -------------------- | ---------------------- |
| Life / birth         | `[CONFIRM]`            |
| Dissolution          | Visual Practice id 7   |
| Energy core          | Visual Practice id 7–8 |
| Mechanical submarine | Visual Practice id 8   |
| Underwater city      | Visual Practice id 9   |


---

#### How — 2. Animation Design

**Title:** Character & Transformation Animation  

**Body:** Animated whale locomotion and metamorphosis beats; contrasted organic vs. mechanical timing.

**Category: Organic motion** (layout: circles) | `[CONFIRM]` clips  
**Category: Transformation** (layout: rectangles) | `[CONFIRM]`  
**Category: City emergence** (layout: grid) | `HV_LBL.mp4` · `[CONFIRM]`

---

#### How — 3. Custom Shader Development

**Title:** Materials & Lighting *(if no custom shaders, use look-dev)*  

**Sub-section: Organic phase**

**Copy:** Underwater lighting and exposure to support the life-cycle read without dialogue.

| Media | `[CONFIRM]` |

**Sub-section: Mechanical / city phase**

**Copy:** Hard-surface and city lights sell rebirth-as-infrastructure metaphor.

| Media | Visual Practice id 8–9 |

---

#### How — 4. UI/UX Design

**Title:** *(not applicable — no UI)*  

**Body:** N/A for animated short.

| Logic | — | Storyboard | `[CONFIRM]` animatic | Demo video | [https://youtu.be/wU2xjlGVz-Q](https://youtu.be/wU2xjlGVz-Q) |

---

#### How — 5. Tool Development

**Title:** Cinema 4D / XPRESSO Experiments  

**Tool row 1** — XPRESSO-driven motion tests (Visual Practice ids 2–5) `[CONFIRM]`  
**Tool row 2** — Render / composite pipeline `[CONFIRM]`

*Built the interactive flower roads using **MoGraph Cloners**, **Field-based procedural animation**, and **XPresso-driven User Data** for real-time layout control. Two cloner systems (holes + raised elements) tile across a 50 cm grid, while Formula, Capsule, and Helix Fields create spatial wave motion and colour/light variation. Custom sliders control size, count, spacing, and surface area—making the wall fully parametric and interactive during production.*

---

#### INTEGRATION

**Body copy:** *(empty)*


| #   | File                          |
| --- | ----------------------------- |
| 1–3 | `[CONFIRM]` final film stills |


---

### Result & Impact

**Impact copy:** Demonstrates 3D storytelling and symbolic structure for animation/film direction roles. `[CONFIRM]` runtime, festival submissions, tutor quote, screening.

**Gallery:** `materials/life-begets-life/result/` · Visual Practice id 6 + 7–9

---

## 6. Yuliu Tea Ceremony (`yuliu-tea-ceremony`)

**Works category:** animation-film  
**Site today:** card only · **manifest meta is still TODO**  
**Manifest:** `yuliu-tea-ceremony.data.ts`  
**Suggested materials folder:** `materials/yuliu-tea-ceremony/` · `HV_TC.mp4`

### Works index card override


| Field | Value    |
| ----- | -------- |
| Type  | *(none)* |
| Role  | *(none)* |
| Tools | *(none)* |


---

### Meta


| Field             | Copy                                                                         | Media / link          |
| ----------------- | ---------------------------------------------------------------------------- | --------------------- |
| name              | Yuliu Tea Ceremony                                                           | —                     |
| keyword           | 3D character animation                                                       | —                     |
| role              | `[manifest TODO]` → **Character animation, rigging, simulation** `[CONFIRM]` | —                     |
| type              | `[manifest TODO]` → **Personal / course project** `[CONFIRM]`                | —                     |
| tools             | `[manifest TODO]` → **Maya, Bifrost, nParticle, Plask AI, ADV rigging**      | —                     |
| details           | `[CONFIRM course / year]`                                                    | —                     |
| website           | `[CONFIRM]`                                                                  | —                     |
| moreDetails (PDF) | `[CONFIRM]`                                                                  | —                     |
| heroVideo         | [https://youtu.be/AEXkZEiB_Wk](https://youtu.be/AEXkZEiB_Wk)                 | —                     |
| previewImage      | —                                                                            | Visual Practice id 32 |


---

### Summary

`[manifest TODO on site — draft below]`

A 3D character animation piece centred on a tea ceremony performance, combining ritual gesture, fluid simulation, and digital character craft—from rigging and skinning through simulated tea/steam elements to motion-captured body performance refined in Maya.

---

### What & Why

#### Problem

- Tea ceremonies demand precise, restrained motion; poor weighting or over-active mocap breaks cultural believability.
- `[CONFIRM]` Assignment constraints: duration, character count, required simulation elements.

**Media:** `materials/yuliu-tea-ceremony/whatwhy/problem.png` `[CONFIRM]` · Visual Practice id 32

#### Insight

- Reference video → Plask AI → Maya allowed fast blocking of torso and arm arcs, but fingers, wrists, and prop contact needed manual artistry to respect ceremonial tempo.

**Media:** `materials/yuliu-tea-ceremony/whatwhy/insight.jpg` `[CONFIRM]`

#### Approach 1 — Rigging & Skinning

- Rigged character with ADV skeleton tools; painted and refined skin weights for shoulders, wrists, and props.

**Media:** Visual Practice id 34

#### Approach 2 — Fluid & Particle Simulation

- Simulated fluids/particles with Bifrost and nParticle for tea/steam accents without overpowering character acting.

**Media:** Visual Practice id 33

#### Approach 3 — Mocap Cleanup Workflow

- Record reference → Plask AI → Maya → hand-keyed polish on detail joints.

**Media:** Visual Practice id 35 · `HV_TC.mp4`

---

### Process

#### Research (step copy)

`[CONFIRM]` Tea ceremony references (school, region, specific rite).

**Media (sidebar):** `materials/yuliu-tea-ceremony/process/research.png` `[CONFIRM]`

#### Tasks (sidebar)

Character modelling/rigging `[CONFIRM]`, simulation, animation, lighting/render `[CONFIRM split with teammates if any]`.

---

#### How — 1. 3D Modelling & Environment Design

**Title:** Character & Set Modelling  

**Body:** `[CONFIRM]` Character, props (tea ware), set dressing for ceremony framing.

**Step images (5):** `[CONFIRM]` · Visual Practice id 32

**Carousel slides:** Character turn · Prop layout · Set · `[CONFIRM]`

---

#### How — 2. Animation Design

**Title:** Ceremonial Performance  

**Body:** Blocked timing in animatic; mocap block + hand polish on wrists/fingers/prop contact.

**Categories:** Mocap block · Hand polish · Final performance (`HV_TC.mp4`, heroVideo)

---

#### How — 3. Custom Shader Development

**Sub-section: Bifrost fluid**

**Copy:** Tea/steam simulation supporting ritual gesture without overpowering the character.

| Media | Visual Practice id 33 |

**Sub-section: nParticle accents**

**Copy:** `[CONFIRM]` supplementary particle details.

| Media | `[CONFIRM]` |

---

#### How — 4. UI/UX Design

**N/A** — no UI. Optional: storyboard / shot list only.

| Storyboard | `[CONFIRM]` | Demo video | [https://youtu.be/AEXkZEiB_Wk](https://youtu.be/AEXkZEiB_Wk) |

---

#### How — 5. Tool Development

**Tool row 1** — ADV rigging + skin weight workflow (Visual Practice id 34)  
**Tool row 2** — Plask → Maya mocap pipeline (Visual Practice id 35)

---

#### INTEGRATION

| # | `[CONFIRM]` beauty frames from final render |

---

### Result & Impact

**Impact copy:** Shows readiness for character + FX animation pipelines (game cinematics, film previz). `[CONFIRM]` grade, screening, recruiter feedback.

**Gallery:** `materials/yuliu-tea-ceremony/result/` · ids 32–35

---

## 7. Montage (`montage`)

**Works category:** animation-film  
**Site today:** `layout: fullscreen-video` (hero only) · **manifest meta is still TODO**  
**Manifest:** `montage.data.ts`  
**Suggested materials folder:** `materials/montage/`

### Works index card override


| Field | Value    |
| ----- | -------- |
| Type  | *(none)* |
| Role  | *(none)* |
| Tools | *(none)* |


---

### Meta


| Field             | Copy                                                           | Media / link          |
| ----------------- | -------------------------------------------------------------- | --------------------- |
| name              | Montage                                                        | —                     |
| keyword           | Film montage                                                   | —                     |
| role              | `[manifest TODO]` → **Editor (solo)** `[CONFIRM]`              | —                     |
| type              | `[manifest TODO]` → **Personal / course project** `[CONFIRM]`  | —                     |
| tools             | `[manifest TODO]` → **Premiere / DaVinci / Avid?** `[CONFIRM]` | —                     |
| details           | `[CONFIRM assignment context, year]`                           | —                     |
| website           | `[CONFIRM]`                                                    | —                     |
| moreDetails (PDF) | `[CONFIRM]`                                                    | —                     |
| heroVideo         | [https://youtu.be/N8GMI1KpAhw](https://youtu.be/N8GMI1KpAhw)   | —                     |
| previewImage      | —                                                              | Visual Practice id 50 |


---

### Summary

`[manifest TODO on site — draft below]`

A film montage study that edits existing moving-image sources into a new rhythmic and emotional arc. The piece focuses on how collision of shots (scale, motion, sound, and thematic echo) creates meaning that no single clip contains alone.

---

### What & Why

#### Problem

- Learn to control pacing and thematic through-line when you do not control production footage—only selection, order, duration, and sound.
- `[CONFIRM]` Course / workshop / personal reel context.

**Media:** `materials/montage/whatwhy/problem.png` `[CONFIRM]`

#### Insight

- `[CONFIRM]` Intended theme (e.g. memory, violence, romance, urban alienation).
- Montage power comes from juxtaposition; holds and audio bridges matter as much as cuts.

**Media:** `materials/montage/whatwhy/insight.jpg` `[CONFIRM]`

#### Approach 1 — Thematic Spine

- `[CONFIRM]` Selected clips around a clear thematic spine.

**Media:** `[CONFIRM]`

#### Approach 2 — Rhythmic Structure

- Structured acts (setup → escalation → release) with varied shot scale. `[CONFIRM]`

**Media:** `[CONFIRM]`

#### Approach 3 — Sound Design

- Used music, silence, and diegetic overlap to smooth or stress cuts. `[CONFIRM]`

**Media:** `[CONFIRM]`

---

### Process

#### Research (step copy)

`[CONFIRM]` Films/genres referenced; analysis notes or mood board.

**Media (sidebar):** `materials/montage/process/research.png` `[CONFIRM]`

#### Tasks (sidebar)

Editing, sound treatment, colour consistency `[CONFIRM]`, export for critique/reel.

---

#### How — 1. 3D Modelling & Environment Design

**Title:** Source Material & Selects *(relabelled for montage)*  

**Body:** Organised source clips and selects by theme and emotional beat before assembly.

**Step images (5):** `[CONFIRM]` mood board / bin screenshots

**Carousel slides:** `[CONFIRM]` key source films or scenes

---

#### How — 2. Animation Design

**Title:** Cutting Rhythm & Motion *(relabelled)*  

**Body:** Assembly cut → fine cut; varied scale and motion across collisions.

**Categories:** Setup · Escalation · Release `[CONFIRM]` — use stills from timeline

---

#### How — 3. Custom Shader Development

**Title:** Colour & Consistency `[CONFIRM if graded]`

**Sub-sections:** Look reference · Grade output · `[CONFIRM]`

---

#### How — 4. UI/UX Design

**N/A** — optional: editing timeline screenshot as “logic”

| Demo video | [https://youtu.be/N8GMI1KpAhw](https://youtu.be/N8GMI1KpAhw) |

---

#### How — 5. Tool Development

**Tool row 1** — NLE project organisation `[CONFIRM]`  
**Tool row 2** — Sound / export settings `[CONFIRM]`

---

#### INTEGRATION

| # | `[CONFIRM]` final sequence stills |

---

### Result & Impact

**Impact copy:** `[CONFIRM]` grade, critique, views, demo reel use. Placeholder: shows editorial literacy for animation/film hybrid portfolios.

**Gallery:** `materials/montage/result/` · Visual Practice id 50

---

## 8. Future Design Project (`future-design-project`)

**Works category:** future-design  
**Site today:** card only · **manifest meta is still TODO**  
**Manifest:** `future-design-project.data.ts`  
**Suggested materials folder:** `materials/future-design-project/`

### Works index card override


| Field | Value    |
| ----- | -------- |
| Type  | *(none)* |
| Role  | *(none)* |
| Tools | *(none)* |


---

### Meta


| Field             | Copy                                                              | Media / link                     |
| ----------------- | ----------------------------------------------------------------- | -------------------------------- |
| name              | Future Design Project                                             | —                                |
| keyword           | Future architecture                                               | —                                |
| role              | `[manifest TODO]` → `**[CONFIRM your %]`**                        | —                                |
| type              | `[manifest TODO]` → **Personal / team / studio unit** `[CONFIRM]` | —                                |
| tools             | `[manifest TODO]` → **Rhino, Processing, ComfyUI**                | —                                |
| details           | `[CONFIRM institution, year, brief name]`                         | —                                |
| website           | `[CONFIRM]`                                                       | —                                |
| moreDetails (PDF) | `[CONFIRM]`                                                       | —                                |
| heroVideo         | `[manifest TODO]`                                                 | —                                |
| previewImage      | —                                                                 | Visual Practice id 20 RhinoModel |


---

### Summary

`[manifest TODO on site — draft below]`

A speculative architecture exploration using a **Rhino → Processing → ComfyUI** workflow to move from parametric massing to animated spatial studies and AI-assisted visualisation—testing how future-oriented forms can be iterated quickly across physical modelling logic and computational image generation.

---

### What & Why

#### Problem

- `[CONFIRM]` Design brief (climate-adaptive housing, lunar habitat, urban node, Bartlett/RCA unit, etc.).
- Draft: conventional presentation boards struggle to show time-based atmosphere and iterative form generation in one narrative.

**Media:** `materials/future-design-project/whatwhy/problem.png` `[CONFIRM]` · Visual Practice id 20

#### Insight

- Linking accurate 3D structure (Rhino) with motion prototypes (Processing) and style/scenario renders (ComfyUI) made design decisions discussable at multiple fidelities—structure, ambience, and cultural reading.

**Media:** `materials/future-design-project/whatwhy/insight.jpg` `[CONFIRM]`

#### Approach 1 — Rhino Massing & Structure

- Built primary massing and structural logic in Rhino. `[CONFIRM]`

**Media:** Visual Practice id 20

#### Approach 2 — Processing Motion Studies

- Used Processing to prototype motion, fields, or environmental responsiveness. `[CONFIRM]`

**Media:** Visual Practice ids 21–22

#### Approach 3 — ComfyUI Scenario Visualisation

- Applied ComfyUI for stylised scenario images and material atmosphere studies. `[CONFIRM]`

**Media:** Visual Practice id 23

---

### Process

#### Research (step copy)

`[CONFIRM]` Site, precedents, sustainability or tech drivers, constraints.

**Media (sidebar):** `materials/future-design-project/process/research.png` · id 20

#### Tasks (sidebar)

`[CONFIRM]` Which parts you authored: concept, modelling, scripting, visualisation, narrative.

---

#### How — 1. 3D Modelling & Environment Design

**Title:** Parametric Massing (Rhino)  

**Body:** Primary 3D structure and spatial logic before motion and generative passes.

**Step images (5):** ids 20–23 `[CONFIRM]` breakdown

**Carousel slides:** Massing · Detail · `[CONFIRM]`

---

#### How — 2. Animation Design

**Title:** Processing Motion Prototypes  

**Body:** Time-based spatial studies—motion, fields, or environmental response.

**Categories:** `[CONFIRM]` clips or still sequences ids 21–22

---

#### How — 3. Custom Shader Development

**Title:** ComfyUI Atmosphere & Style *(generative vis block)*  

**Sub-section:** Scenario renders  
**Copy:** Stylised futures / material atmosphere for critique and boards.

| Media | Visual Practice id 23 |

---

#### How — 4. UI/UX Design

**N/A** or **boards layout** `[CONFIRM]`

---

#### How — 5. Tool Development

**Tool row 1** — Rhino → Processing export workflow `[CONFIRM]`  
**Tool row 2** — ComfyUI pipeline for iteration `[CONFIRM]`

---

#### INTEGRATION

| # | `[CONFIRM]` board / animation composite |

---

### Result & Impact

**Impact copy:** `[CONFIRM]` crit feedback, grade, exhibition, competition. Draft: established repeatable computational + generative vis pipeline applied later to interactive and game environments.

**Gallery:** `materials/future-design-project/result/`

---

## Appendix — Not on Works index (optional)

Full Pop-up-style structure; meta/summary from manifest; detail sections drafted from summaries where no `myProContentDraft` exists.

### A. Interactive Archive System (`interactive-archive`)

**Manifest:** `interactive-archive.data.ts` · `materials/interactive-archive/`


| Meta field | Copy                                  |
| ---------- | ------------------------------------- |
| name       | Interactive Archive System (2023)     |
| keyword    | Museum interactive interface          |
| role       | Unity Developer, UI/UX Design         |
| type       | Commercial Project with 3 members     |
| tools      | Unity, Photoshop                      |
| details    | Designed for Yonglian Museum in China |


**Summary:** An interactive interface developed for Yonglian Museum to review the history and rapid development of Yonglian Village, exploring ways to let people of all ages feel more engaged when visiting the museum.

**What & Why / Process / Result:** `[CONFIRM]` expand when adding detail page — use §2 skeleton; problem/insight draft from summary above.

---

### B. Mixing Happiness (`mixing-happiness`)


| Meta    | Copy                              |
| ------- | --------------------------------- |
| name    | Mixing Happiness (2023)           |
| keyword | Brand pop-up experience           |
| role    | Brand Experience Design           |
| type    | Personal Project                  |
| tools   | Touch Designer, Arduino, Adobe CS |


**Summary:** Interactive experience concepts for a White Rabbit candy pop-up—making, storytelling, immersive media; participants sculpt candy rabbits, share childhood memories via capsule machines, and see memories projected as a shared nostalgic field.

**Detail sections:** `[CONFIRM]` — follow §2 when building page. PDF: manifest `moreDetails` Google Drive link.

---

### C. Emotional Trap (`emotional-trap`)


| Meta    | Copy                    |
| ------- | ----------------------- |
| name    | Emotional Trap (2024)   |
| keyword | Interactive concept     |
| role    | Interaction Design      |
| type    | Personal Project        |
| tools   | Maya, Arduino, Adobe CS |


**Summary:** Explores visualisation and transformation of negative emotions through an “Emotion Transformation Machine” that materialises suppressed feelings as objects and imagines them becoming chocolate candies—inviting reflection on healthier ways to confront and release negative emotions.

**Detail sections:** `[CONFIRM]` — follow §2 when building page.

---

## Quick reference — Pop-up folder layout

```
materials/popup-museum/
  whatwhy/     problem.png, insight.jpg
  approach/    app1_PM.png, app2_PM.jpg, app3_PM.jpg
  process/     research_en.png, what_en.png, enPro_1–5.png,
               dio_*.jpg, AD_*.mp4, shader_*, toonshader_*,
               ui_*.png, tool_*, in_1–3.jpg
  result/      result_1–4.jpg
```

**When you update the site:** copy from this doc → `popup-museum.data.ts` (English `en` fields) and register files in `popup-museum-assets.ts`.

---

*English only. Chinese (`zh`) omitted by design.*

*§1 aligned with live `popup-museum.data.ts`. §2–4 from manifest + `myProContentDraft.md`. §5–8 where manifest has `TODO`, copy is draft / Visual Practice — marked `[CONFIRM]` or `[manifest TODO]`.*