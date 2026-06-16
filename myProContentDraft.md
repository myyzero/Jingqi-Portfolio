# Portfolio Project Content Draft (English)

**Purpose:** Draft copy for 8 work detail pages, structured for `WorkDetail.tsx` sections.  
**Status:** Ready for your edit. Items marked `[NEEDS YOUR INPUT]` or `[VERIFY]` need facts only you can confirm.

**Suggested mapping to page sections**


| Field              | WorkDetail section              |
| ------------------ | ------------------------------- |
| `summary`          | Title + Summary                 |
| `problem`          | What & Why → Problem            |
| `insight`          | What & Why → Insight            |
| `approach[]`       | What & Why → Approach (bullets) |
| `process.research` | Process → Research              |
| `process.tasks`    | Process → What needs to be done |
| `process.how`      | Process → How to do it          |
| `process.output`   | Process → Output                |
| `resultImpact`     | Result & Impact                 |


**Image index notes** refer to current `images[]` order in `content/en/projects.ts` (0-based). Adjust after you reorder assets.

---

## 1. Pop-up Museum (`popup-museum`)

**Meta (for reference)**  

- Role: Animatior  
- Type: Team project  
- Tools: Unity, Maya, C4D, Adobe CS  
- Client / context: Grant and Petrie Museum; UCL Illuminated 2026

### Summary

An interactive museum installation built around artefacts from the Grant and Petrie Museum. By combining 3D-printed replicas, physical sensing, and real-time digital media, the piece turns objects that are normally “look but don’t touch” into something visitors can feel, move, and hear. I led the animation system and contributed 2D/3D assets plus UI/UX for the Unity experience.

### What & Why

**Problem**  
Museum collections are often protected behind glass, which limits tactile engagement, especially for younger audiences who expect playful, responsive media. The project aimed to create a pop-up, body-led encounter with selected artefacts without compromising conservation rules, using replicas and digital layers instead of handling originals.

**Insight**  
Visitors responded more strongly to touchable artefact replicas and ways to learn through games with stylised and animated introductions. Also a toon-shaded, story-driven visual language made the artefacts feel alive and approachable.

**Approach**

**1. Tactile Artefacts**  
Created museum object replicas using 3D printing and high-precision scanning, enabling visitors to physically explore surface textures and forms for a deeper understanding of the artifacts.

**2. Hardware Application**  
Integrated CodeCell C3 sensors into the replicas, allowing physical movements to be mirrored in real time by their digital counterparts, enhancing engagement, playability, and exploration.

**3. Digital Storytelling**  
Developed a digital environment in Maya and Unity, combining animation, visual effects, UI design, and multimedia content to present artefact information in an engaging and accessible way, encouraging curiosity and self-directed discovery.

### Process

**Research**  
Studied Grant and Petrie collection themes, visitor flow for pop-up formats, and technical constraints (sensors, print scale, Unity deployment on site). Mapped the full pipeline in a team flowchart before production.  
→ Suggested image: `images[0]` (PM_Flowchart)

**Tasks (my scope)**  
**Interactive Digital System Development including**:

· **3D Modelling & Environment Design**

· **Animation Design**

· **Custom Shader Development**

· **Tool Development**

**Unity Editor tool - Batch Material Replace**

- **Aim:** Batch-apply a stylized template material to selected scene models while keeping each object’s original color.
- **How:** C# scripts.
- **Effect:** Cuts repetitive manual material swaps and avoids breaking shared `.mat` assets.

---

**Unity Editor tool - Scene Triangle Count**

- **Aim:** Check geometric triangle counts on selected scene objects without opening FBX or mesh assets in the Project window.
- **How:** C# scripts.
- **Effect:** Speeds up daily scene review and highlights the heaviest renderers early.

**How**  
· **3D Modelling & Environment Design**: Built a 3D asset pipeline from Maya and Cinema 4D to Unity, supporting custom shader development and animation integration.

· **Animation Design**: Created artifact reveal and transition animations using Animation Controllers and Animation Clips, developed looping environmental animations, and implemented subtle UI motion graphics to enhance user experience.

· **Custom Shader Development**: Designed toon-shader materials and noise-based dissolve shaders in Shader Graph to establish a cohesive visual style across the experience.

```
Toon Shader Design: The shader can be reused by simply modifying the colour and texture as needed, at the same time maintaining a consistent lighting direction that aligns with the constructed external environment.

Dissolve Shader Design: The dissolve-in appearance  effect was created using noise textures, with highlights added to the dissolution edges. The speed and extent of dissolution could be controlled via scripts.
```

· **UI/UX Design**:

· **Tool Development**: Developed an AI-assisted Unity Editor tool that automatically batch-replaces model materials while preserving original colour data, significantly improving production efficiency.  
→ Suggested images: `images[5]` (ToonShader), `images[6]` (StateMachine), `images[7–8]` (Animation)

**Output**  
A deployable installation where touching printed replicas drives animated narratives, sound, and UI cues in a cohesive diorama.  
→ Suggested images: `images[9]` (Diorama), `images[10–12]` (exhibition / on-site)

### Result & Impact

Presented at **UCL Illuminated 2026** in collaboration with the Grant and Petrie Museum, drew follow-up interest from museum curators. 

The piece offered a multi-sensory alternative to static display and demonstrated how digital animation systems can scale across many artefacts in one physical setup.  
→ Links: `website`, `moreDetails`, `videoUrl` (YouTube hero / Bilibili zh)

`[VERIFY]` Approximate visitor numbers: 300, curator quotes: 5.

---

## 2. Aqua's Will (`aquas-will`)

**Meta**  

- Role: 2D Animation system, Narrative and Level Design  
- Type: Team project (6 members)  
- Tools: Unity, Midjourney, Adobe CS

### Summary

A 2D side-scrolling RPG following Aqua, a sea spirit who enters a polluted underwater cave to rescue a mutated whale-shark companion and restore ecological balance. I designed the level flow, narrative beats and implemented the 2D animation system in Unity, also developed an AI-enhanced image generation workflow through Midjourney to Photoshop and After Effects, which can be reused in future design prototypes.

### What is it

**Background Research**  
The ocean is the cradle of life on Earth, brimming with abundant natural resources. However, today, 40% of the world’s oceans are severely impacted by human activity, and more than half of coastal habitats are degrading. While enjoying the ocean’s natural gifts, humanity must never forget the pain it has endured.

Based on a lack of public awareness about marine pollution, the team created this work with the ocean as its theme, aiming to popularize marine knowledge and protect the marine environment.

**Story**  
Aqua, the Sea Spirit, is a gentle guardian of the ocean, carrying its whispers across the endless blue.

By her side swims a whale shark, her closest friend and lifelong companion. Together, they roam the vast seas, gliding through coral forests and drifting peacefully beneath the waves.

For years, their world remained untouched.

But as human pollution spread through the ocean, darkness began to seep into the depths. The whale shark, dwelling within an ancient underwater cave, was slowly poisoned by the contaminated waters. The corruption twisted its body and clouded its mind. Consumed by agony, it thrashed violently against the cave walls, shaking the ocean with its suffering.

When Aqua hears her friend's desperate cries echoing through the deep, she embarks on a journey into the heart of the corrupted cave. There, she must purify the spreading pollution, heal the whale shark, and restore the harmony that once united them.

### Process

**Flowchart of Game Mechanism**

**Character & Animaiton Design**  
animation development workflows including AI-enhanced image generation through Midjourney, polished in Photoshop and animated in After Effects through plugins like autosway and 2D Spline.

Aqua Skills

Shot: 

(1) Hold the left mouse button to charge the light orb.

(2) Move the mouse to determine the firing direction.

(3) Release the mouse button to launch the light orb.

Dash:

Press the Spacebar to perform a dash (with a simple cooldown).

Compress:

Press T to compress the body, reducing the Sea Spirit’s size.



**Map & Level Design**  
Level 1: Current and Bubble Zone

When the player enters a current zone, strong water flow pushes them away from their original movement path.

Level 2: None-Oxygen Zone

Players should use light orbs to illuminate the corals to gain enough oxygen to survive. Once the player leaves the lightened oral area, the oxygen level will decrease.

Level 3: Rock Zone

If a player is hit by a falling rock, their health will decrease; if their health reaches zero, the player dies.

Level 4: Deepest Zone

Here is where the Boss lives, which is also a none-oxygen area unless all the corals in the cave are lightened. Players need to first lighten all the corals, then using skills to battle with the boss until it is purified.



**Output**  


### Result & Impact

Delivered a complete team-developed game prototype featuring a clear narrative arc, immersive environmental storytelling, and a polished player experience.

Expanded my expertise in Unity-based level design and animation implementation while establishing a reusable AI-assisted art pipeline using Midjourney, Photoshop, and After Effects to accelerate concept development and production workflows. 


---

## 3. Dragon Mountain (`dragon-mountain`)

**Meta**  

- Role: Technical Artist, Interaction Design  
- Type: Team project (2 members)  
- Tools: Unreal Engine, Maya, Adobe CS  
- Context: Immersive digital experience based on traditional Chinese landscape painting; museum-oriented presentation `[VERIFY exact venue/exhibition name]`

### Summary

An immersive Unreal Engine experience that lifts a classical Chinese shanshui painting into a navigable 3D world. Players explore temples and mountain paths, solve environment puzzles, and experience weather shifts that change mood and readability. As technical artist and interaction designer, I implemented core interaction systems (navigation, dialogue, weather, signature events) and shaders that preserve an ink-wash aesthetic in real time.

### What & Why

**Problem**  
Traditional paintings are admired statically in galleries; younger audiences often lack context for brushwork, space, and cultural symbolism. The goal was to **translate 2D compositional rhythm into 3D spatial traversal** without losing the painting’s poetic restraint.

**Insight**  
Authenticity came from **material behaviour**, not polygon density: ink diffusion, atmospheric perspective, and weather as “emotional UI” helped players feel the scroll unfold. Gameplay needed light puzzles tied to space (path, gate, bird ride) rather than combat-heavy mechanics.

**Approach**

- Developed ink-style shaders and post treatments in UE to keep surfaces readable at multiple camera distances.
- Built navigation and dialogue systems suited to contemplative pacing (guided paths, optional discovery).
- Designed weather and a bird-ride event as narrative punctuation—changing visibility, audio, and player focus.

### Process

**Research**  
Analysed source painting composition, temple/architecture references, and museum-style “slow looking” behaviours. Produced a systems flowchart linking interaction beats to environmental states.  
→ Suggested image: `images[4]` (DM_flowChart) or zh HL_Flowchart

**Tasks**  
Interaction logic (navigation, dialogue triggers), weather state machine, bird-ride sequence integration, shader look development, Maya asset prep for environment props.

**How**  
Greyboxed routes in UE → wired Blueprint/C++ interaction → tuned shader parameters against lighting scenarios → playtested puzzle clarity in rain/fog states.  
→ Suggested images: `images[5–8]` (BirdRide, Dialogue, Navigation, Shader), `images[9]` (Weather)

**Output**  
A walkable painterly world where weather and scripted events reframe the same spaces, supporting educational storytelling about Chinese landscape culture.  
→ Video + PDF portfolio linked in project data

### Result & Impact

Demonstrated a viable pipeline for **cultural IP → real-time immersive exhibit**. Visitors/participants could experience brush-and-wash logic as spatial drama rather than wall text alone.  
→ `[NEEDS YOUR INPUT]` Exhibition name, dates, audience size, partner museum, any awards or press.

---

## 4. Future Design Project (`future-design-project`)

**Meta**  

- Keyword: Future architecture  
- Visual practice hints: Rhino modelling → Processing motion → ComfyUI stylisation  
- `[NEEDS YOUR INPUT]` Official project title, year, institution, team size, your exact role %

### Summary

`[DRAFT — expand after your brief]` A speculative architecture exploration that uses a **Rhino → Processing → ComfyUI** workflow to move from parametric massing to animated spatial studies and AI-assisted visualisation. The work tests how future-oriented forms can be iterated quickly across physical modelling logic and computational image generation.

### What & Why

**Problem**  
`[NEEDS YOUR INPUT]` What was the design brief? (e.g. climate-adaptive housing, lunar habitat, urban node, Bartlett/RCA studio unit?)  
Draft placeholder: Conventional presentation boards struggle to show **time-based atmosphere** and **iterative form generation** in one narrative.

**Insight**  
Draft placeholder: Linking **accurate 3D structure (Rhino)** with **motion prototypes (Processing)** and **style/scenario renders (ComfyUI)** made design decisions discussable at multiple fidelities—structure, ambience, and cultural reading.

**Approach**

- `[VERIFY]` Built primary massing and structural logic in Rhino.
- `[VERIFY]` Used Processing to prototype motion, fields, or environmental responsiveness.
- `[VERIFY]` Applied ComfyUI for stylised scenario images / material atmosphere studies.

### Process

**Research**  
`[NEEDS YOUR INPUT]` Site, precedents, sustainability or tech drivers, constraints.  
→ Suggested image: `images[0]` (RhinoModel)

**Tasks**  
`[NEEDS YOUR INPUT]` Which parts did you personally author (concept, modelling, scripting, visualisation, narrative)?

**How**  
`[NEEDS YOUR INPUT]` Iteration story—e.g. one major pivot from diagram to form.  
→ Additional refs in visualPractice: Processing stills, ComfyUI outputs (ids 21–23 in `visualPractice.ts`).

**Output**  
`[NEEDS YOUR INPUT]` Final deliverable format (board set, animation, physical model, VR?).

### Result & Impact

`[NEEDS YOUR INPUT]` Crit feedback, grade, exhibition, competition, or studio publication.  
Draft placeholder: Established a repeatable **computational + generative vis** pipeline you later applied to interactive and game environments.

---

## 5. Life Begets Life (`life-begets-life`)

**Meta (from visualPractice)**  

- 3D animation; narrative of whale life cycle → energy core → mechanical submarine → underwater city  
- Theme: interconnectedness of all life  
- Tools (inferred): Cinema 4D (XPRESSO practice in same section), likely After Effects `[VERIFY]`  
- `[NEEDS YOUR INPUT]` Year, course, solo vs. team, runtime, final video link

### Summary

A short 3D animated film tracing a whale’s life cycle from birth to dissolution, re-emergence as a core of energy, and transformation into a mechanical submarine that carries an entire underwater city—symbolising that all life is connected through continuous cycles of matter and meaning.

### What & Why

**Problem**  
Create an original visual fable without dialogue that still reads clearly to a general audience. The goal was to practice **long-form visual causality** (each shot motivates the next) within a student production window.

**Insight**  
The story landed when each transformation followed an internal logic of **scale shift** (creature → energy → machine → habitat), so the audience reads metaphor rather than random spectacle. Contrast between organic motion and rigid mechanical motion clarified the “rebirth as infrastructure” idea.

**Approach**

- Storyboarded the whale arc in four movements: life, death/dissolution, energy reconstruction, city emergence.
- `[VERIFY]` Used Cinema 4D for world-building and XPRESSO-driven motion experiments referenced in your visual practice section.
- `[VERIFY]` Controlled lighting passes to sell the “exposure / luminance” story beats between organic and mechanical phases.

### Process

**Research**  
Whale anatomy and locomotion references; underwater lighting; symbolic maps of “life → energy → built environment.”  
→ Suggested images: narrative stills in visualPractice ids 7–9 (luminance series)

**Tasks**  
Solo animation authorship `[VERIFY]`: concept, modelling, animation, lighting, compositing, edit.

**How**  
Blocked timing in animatic → built assets → animated transformation beats → polish lighting/composite per chapter.  
→ Suggested image: `images[0]` (cover); add more `images[]` when you upload process frames

**Output**  
Completed animated short communicating cyclical ecology through sequential metamorphosis.  
→ `[NEEDS YOUR INPUT]` YouTube/Bilibili link, festival submissions, duration.

### Result & Impact

Demonstrates **3D storytelling + symbolic structure** for animation/film direction roles. `[NEEDS YOUR INPUT]` Any screening, tutor quote, or peer recognition.

---

## 6. Montage (`montage`)

**Meta**  

- Keyword: Film montage  
- Video ref in visualPractice: `https://youtu.be/N8GMI1KpAhw`  
- `[NEEDS YOUR INPUT]` Source films, assignment brief, year, tools (Premiere / DaVinci / Avid?)

### Summary

`[DRAFT]` A film montage study that edits existing moving-image sources into a new rhythmic and emotional arc. The piece focuses on how **collision of shots** (scale, motion, sound, and thematic echo) creates meaning that no single clip contains alone.

### What & Why

**Problem**  
`[NEEDS YOUR INPUT]` Was this for a film studies class, editing workshop, or personal reel?  
Placeholder: Learn to control pacing and thematic through-line when you do not control production footage—only **selection, order, duration, and sound**.

**Insight**  
`[NEEDS YOUR INPUT]` Your intended theme (e.g. memory, violence, romance, urban alienation).  
Placeholder: Montage power comes from **juxtaposition**; holds and audio bridges matter as much as cuts.

**Approach**

- `[NEEDS YOUR INPUT]` Selected clips around a clear thematic spine.
- `[VERIFY]` Structured acts (setup → escalation → release) with varied shot scale.
- `[VERIFY]` Used sound (music, silence, diegetic overlap) to smooth or stress cuts.

### Process

**Research**  
`[NEEDS YOUR INPUT]` Films/genres referenced; analysis notes or mood board.  

**Tasks**  
Editing, sound treatment, colour consistency `[VERIFY]`, export for critique/reel.

**How**  
Assembly cut → fine cut → sound pass → export. `[NEEDS YOUR INPUT]` Notable revision after feedback.

**Output**  
Final montage piece on YouTube (`N8GMI1KpAhw`).  
→ Add to `projects.ts` `videoUrl` when ready.

### Result & Impact

`[NEEDS YOUR INPUT]` Grade, class critique, views, or use in demo reel.  
Placeholder: Shows editorial literacy for **animation/film hybrid portfolios**—useful when applying to studios that value pacing and narrative compression.

---

## 7. Seeing the Unseen (`seeing-unseen`)

**Meta**  

- Role: Hardware system, data analysis, colour and sound research `[zh also lists interaction design]`  
- Type: Team project (3 members)  
- Tools: Arduino, Raspberry Pi  
- Exhibited: Bartlett Fifteen Show 2025

### Summary

A research-based wearable that asks how urban “sensory discipline” dulls our response to environment. The device captures live sound and colour, predicts pleasure levels for a reference group via linear regression, then compares the wearer’s self-reported feeling through visual and haptic feedback—making personal perception visible and debatable.

### What & Why

**Problem**  
City dwellers are trained to filter stimuli; many sensations never register consciously. The project goal was to **externalise that gap** between measured environment and felt experience, using the body as an interface rather than a phone screen.

**Insight**  
People engaged most when the device felt like a **conversation with themselves**, not a scoreboard: each input retrains the model, so the wearer sees how their calibration diverges from the group model—surfacing “sensory discipline” as something learned, not fixed.

**Approach**

- Co-built wearable hardware pipeline (sensors → microcontrollers → output actuators) with teammates.
- Conducted colour and sound studies to define features fed into the regression model.
- Designed feedback patterns (light, motion, haptics) that are legible in exhibition without a manual.

### Process

**Research**  
Literature and prototypes on sensory adaptation, urban noise/colour profiles, and wearable ethics. Collected training data from disciplined vs. less-filtered participant groups `[VERIFY sample size]`.  
→ Suggested images: `images[0–2]` (concept / device)

**Tasks**  
Hardware integration, data analysis workflow, mapping features to model outputs, interaction behaviour for input/feedback loop, exhibition-ready reliability.

**How**  
Iterated sensor placement and sampling rates → trained/refined regression → tuned feedback to avoid overwhelming users during live demos → documented for Fifteen Show install.  
→ Suggested images: `images[3–8]` (electronics, UI states, exhibition)

**Output**  
Working wearable plus gallery installation where visitors could compare predicted vs. felt responses in real time.  
→ Website, PDF, video documented in project links

### Result & Impact

Exhibited at the **Bartlett Fifteen Show 2025** with public walk-up trials. The work sparked discussions about quantified sensation vs. lived experience, and demonstrated a cross-disciplinary pipeline: **research → ML prototype → embodied interaction**.  
→ `[NEEDS YOUR INPUT]` Visitor quotes, model accuracy metrics, press, or award mentions.

---

## 8. Yuliu Tea Ceremony (`yuliu-tea-ceremony`)

**Meta (from visualPractice)**  

- 3D character animation; tea ceremony theme  
- Pipeline: ADV rigging → skin weights → Bifrost fluid + nParticle → Plask AI mocap → Maya polish  
- `[NEEDS YOUR INPUT]` Course name, year, solo/team, story synopsis, final render link

### Summary

`[DRAFT]` A 3D character animation piece centred on a tea ceremony performance, combining **ritual gesture**, **fluid simulation**, and **digital character craft**. The project demonstrates full character pipeline competence—from rigging and skinning through simulated tea/steam elements to motion-captured body performance refined in Maya.

### What & Why

**Problem**  
`[NEEDS YOUR INPUT]` Assignment constraints (duration, character count, must-include simulation?).  
Placeholder: Tea ceremonies demand **precise, restrained motion**; poor weighting or over-active mocap breaks cultural believability.

**Insight**  
Capturing reference on video → Plask AI → Maya allowed fast blocking of torso and arm arcs, but **fingers, wrists, and prop contact** needed manual artistry to respect ceremonial tempo.

**Approach**

- Rigged character with ADV skeleton tools; painted and refined skin weights for shoulders, wrists, and props.
- Simulated fluids/particles with **Bifrost** and **nParticle** for tea/steam accents without overpowering character acting.
- Applied mocap cleanup workflow: reference recording → Plask → Maya → hand-keyed polish on detail joints.

### Process

**Research**  
`[NEEDS YOUR INPUT]` Tea ceremony references (school, region, specific rite).  
→ Character design image: visualPractice id 32 / `images[0]`

**Tasks**  
Character modelling/rigging `[VERIFY]`, simulation, animation, lighting/render `[VERIFY split with teammates]`.

**How**  
Rig pass → weight paint → block animation via mocap → simulate fluids → lighting/render iterations.  
→ Suggested images: rig `34`, mocap workflow `35`, fluid `33`

**Output**  
`[NEEDS YOUR INPUT]` Final playblast or beauty render link; shot list if multi-shot.

### Result & Impact

Shows readiness for **character + FX animation** pipelines common in game cinematics and film previz. `[NEEDS YOUR INPUT]` Grade, screening, or recruiter feedback.

---

# Questions for you (please answer to replace `[NEEDS YOUR INPUT]` blocks)

Reply in any format; bullet answers are fine.

### Future Design Project

1. Official title, year, school/unit, solo or team?
2. One-sentence brief (site + design question)?
3. What did **you** personally do in Rhino / Processing / ComfyUI?
4. Final deliverables and any crit grade, exhibition, or award?

### Life Begets Life

1. Solo project? Year and runtime?
2. Primary software (C4D only, or Maya/AE too)?
3. Final video URL for portfolio?
4. Any public screening or competition?

### Montage

1. Assignment context and year?
2. Theme or films sampled (list is enough)?
3. Editing software?
4. What feedback or grade did you receive?

### Yuliu Tea Ceremony

1. Story in one paragraph (who, what moment in the ceremony)?
2. Solo or team? Year and school?
3. Final video/render link?
4. Your exact split: modelling vs. rig vs. sim vs. animation %

### Dragon Mountain

1. Where was it exhibited or demoed (museum name, event, dates)?
2. Split of work with your teammate (2-person team)?

### Aqua's Will

1. Course / showcase context and playable link if public?

### Pop-up Museum & Seeing the Unseen

1. Any metrics or quotes you want highlighted (visitor count, model accuracy, curator comment)?

---

# Quick copy-paste JSON shape (optional, for future `Project` type extension)

```ts
// Example only — not wired in codebase yet
type ProjectNarrative = {
  problem: string;
  insight: string;
  approach: string[];
  process: {
    research: string;
    tasks: string;
    how: string;
    output: string;
  };
  resultImpact: string;
};
```

---

*Generated for Jingqi Portfolio — edit freely before importing into `content/en/projects.ts`.*