// projects.js — edit this file to add / change your portfolio work!
//
// each folder (projects + hardware) is a list of "files". every file opens a case study.
//
// fields:
//   id        unique slug, no spaces
//   title     project name
//   file      the fake filename shown in the folder (e.g. "bloom.fig")
//   summary   one-liner shown on the card + top of the case study
//   status    e.g. "completed" or "in progress" (in progress gets a pulsing yellow dot)
//   award     optional — shows a 🏆 ribbon
//   cover     path to an image — leave "" to use the colour + emoji
//   coverPosition  which part of the cover to keep when it's cropped, e.g. 'top' or '30% 78%'
//   color     background colour behind the cover / emoji
//   emoji     little icon on the card when there's no cover
//   tags      short labels
//   meta      { any label: 'value' } — shown as a little info grid, in the order you write them
//   figma     a figma prototype link (figma.com/proto/...) → embedded right in the window ("" to hide)
//   links     [{ label, url }] — extra buttons (figma, github, video, etc.)
//   sections  [{ heading, body, images: [{ src, caption }] }] — the case study
//             body can include simple html (<b>, <a>, <br>, <ul><li>)
//   gallery   ["img/...", { src: "img/...", caption: "..." }] — extra images at the end
//
// images live in img/projects/<project-id>/ — export at ~1600px wide as .webp (squoosh.app)

window.PORTFOLIO = {
  projects: [
    {
      id: 'student-hub',
      title: 'integrated student hub',
      file: 'student-hub.fig',
      summary: 'one platform for uni life — course planning, enrolment, automatic timetables, campus navigation and study-room booking — shaped by user research, usability testing and accessibility checks.',
      status: 'completed',
      cover: 'img/projects/student-hub/cover.webp',
      coverPosition: 'top',
      color: '#FFF1C9',
      emoji: '🎓',
      tags: ['ux research', 'usability testing', 'accessibility', 'figma prototype'],
      meta: {
        role: 'ui/ux designer',
        context: 'COMP3511 · human-computer interaction',
        team: '5 designers',
        tools: 'figma',
      },
      figma: '', // paste the figma prototype link here to embed it
      links: [],
      sections: [
        {
          heading: 'the problem',
          body: 'students have to piece together one university journey across a handful of disconnected systems — the handbook, enrolment, timetabling, campus maps and room booking. all that switching adds uncertainty, wastes time and makes enrolment or navigation mistakes more likely.<br><br>the main pain points: <b>repeated platform switching</b>, <b>unclear prerequisite and graduation requirements</b>, <b>manual timetable trial and error</b>, <b>difficult campus navigation</b> and <b>hard-to-find study spaces</b>.',
        },
        {
          heading: 'who we designed for',
          body: 'we built two personas from the problem space: <b>mary</b>, a final-year cs student who is cross-checking the handbook, the enrolment system and her own spreadsheet because she\'s worried a missing requirement will delay graduation — and <b>hangjun</b>, a postgrad who keeps reshuffling classes to fix clashes and wants a timetable with short gaps and reasonable walking distances.<br><br>their needs became three requirement areas: <b>academic confidence</b>, <b>schedule efficiency</b> and <b>campus support</b>.',
          images: [{ src: 'img/projects/student-hub/requirements.webp', caption: 'requirement analysis — each user problem mapped to a design response' }],
        },
        {
          heading: 'research',
          body: 'a pre-test questionnaire with <b>13 participants</b> (mostly mid-degree undergrads who use uni systems regularly) confirmed that fragmented systems were the biggest usability issue, and participants strongly supported a single hub.<br><br>23% were unsure whether they were meeting graduation requirements. the most-wanted planning features were visual prerequisite flowcharts, graduation progress tracking and automatic requirement checking. for timetables, avoiding clashes came first, then fewer days on campus and shorter gaps. for navigation, students wanted walking times, building entrances, nearby study spaces and accessible routes.',
          images: [{ src: 'img/projects/student-hub/questionnaire.webp', caption: 'pre-test questionnaire findings' }],
        },
        {
          heading: 'ai prototype vs our first prototype',
          body: 'we compared an ai-generated prototype against our own first design. the ai version had a cleaner structure, a persistent sidebar and a clear card layout — but it suggested features that didn\'t exist, gave no feedback after changes, and leaned on so much colour coding that it added cognitive load.<br><br>our manual prototype better matched how existing uni systems work, used step-by-step flows with clear confirmations, and included an interactive map with accessible routes — but it was denser and less polished. the final design combined the ai version\'s clean layout and navigation with our realistic workflows, error prevention and accessibility.',
          images: [{ src: 'img/projects/student-hub/first-prototype.webp', caption: 'our first prototype — home, class registration, enrolment and campus map' }],
        },
        {
          heading: 'testing & iteration',
          body: 'a post-test with <b>7 participants</b> found booking a nearby study room was the easiest task, while generating a timetable was the hardest — the filter logic wasn\'t clear. we logged every issue in issue tables against usability heuristics and fixed them:<ul><li><b>campus map</b> — added route pathing, hid unnecessary bus info, added a help pop-up for location markers, and made the accessible-routes toggle more obvious</li><li><b>class registration</b> — a working "avoid clashes" filter, a clearer subject picker and a "my timetable" view reachable from any page</li><li><b>enrolment</b> — changed the vague "not enrolled" to a directive "not met", fixed colour contrast, and added a red warning bar for unmet prerequisites</li></ul>',
          images: [
            { src: 'img/projects/student-hub/map-solution.webp', caption: 'campus map — route pathing + accessible routes' },
            { src: 'img/projects/student-hub/timetable-solution.webp', caption: 'class registration — clash filter + my timetable' },
            { src: 'img/projects/student-hub/enrolment-solution.webp', caption: 'enrolment — clearer status wording + suggestions' },
          ],
        },
        {
          heading: 'home page redesign',
          body: 'the old placeholder home page relied on recall: the enrolment and study-space icons looked too similar. we switched to distinct icons with text labels (recognition rather than recall), rebuilt the navigation bar for accessibility, and turned the home page into an at-a-glance overview with the timetable, a degree progress bar, enrolment warnings and booking info.',
          images: [{ src: 'img/projects/student-hub/home-redesign.webp', caption: 'before → after: labelled navigation and an overview dashboard' }],
        },
        {
          heading: 'designing for visual impairment',
          body: 'nearly one in five australians has a disability (abs, 2018), so we designed for screen-magnifier users, people with colour blindness or low contrast sensitivity, and screen-reader users, measured against <b>wcag 2.2</b>. two rules guided us: <b>colour never carries meaning on its own</b>, and <b>every status is also written in words</b>.<br><br>a failed prerequisite is signalled four ways — status text, a warning icon, the missing course named, and a banner explaining the fix — so the message still works with the colour stripped out. contrast testing also caught real problems: the clash colours measured just 1.58:1, the "fulfilled" green failed aa, and yellow and orange become the same colour under red/green colour blindness. next steps: hatching and text labels on clashing blocks, a darker green, and permanent inline prerequisite text instead of a tiny hover tooltip.',
          images: [
            { src: 'img/projects/student-hub/four-signals.webp', caption: 'four signals, not one colour' },
            { src: 'img/projects/student-hub/colour-testing.webp', caption: 'colour testing under different types of colour blindness' },
          ],
        },
        {
          heading: 'reflection',
          body: 'this project taught me how to take an interactive prototype through a full user-centred design process, how to use issue tables to turn test feedback into concrete fixes, and how to design for accessibility from the start. working in a team of five brought more diverse solutions and a faster prototyping stage — and taught me how to align conflicting visions and work in parallel.',
        },
      ],
      gallery: [],
    },
    {
      id: 'tangles',
      title: 'tangles',
      file: 'tangles.fig',
      summary: 'a team-formation platform for devsoc\'s training program — helping trainees and leads get to know each other and form teams that will work well together.',
      status: 'in progress',
      cover: 'img/projects/tangles/lofi-preferences.webp',
      color: '#DDE8CC',
      emoji: '🧶',
      tags: ['product design', 'web app', 'lo-fi wireframes', 'devsoc'],
      meta: {
        role: 'designer & developer',
        context: 'devsoc training program',
        team: 'team za\'atar · 6 people',
        stack: 'react, typescript, tanstack, rust, postgresql',
      },
      figma: '',
      links: [],
      sections: [
        {
          heading: 'the problem',
          body: 'every term, dozens of training program leads and trainees need to be sorted into teams… but nobody knows anyone yet.<br><br>right now the tp directors send out two rounds of notion forms — one for leads to preference each other, and one for trainees to preference lead pairs. most people have no idea who to name, so the directors end up forming teams from vague answers. it\'s an admin headache spread across multiple forms, spreadsheets and result announcements.',
        },
        {
          heading: 'the idea',
          body: '<b>tangles</b> streamlines the admin side of the training program — team formation and discord management — while helping trainees and leads learn about the people they\'re preferencing.<br><br>when someone is accepted into tp they get a tangles invite to register and fill out a profile. once that\'s done they\'re added to the devsoc discord with the right roles assigned automatically by a bot. returning members get a link to join the new cohort and can reuse their existing profile.',
          images: [{ src: 'img/projects/tangles/sign-up.webp', caption: 'sign-up & profiling flow' }],
        },
        {
          heading: 'discoverability',
          body: 'trainees and leads build profiles with their goals, interests and potential project ideas, and can customise them to stand out. anyone in the cohort can browse their fellow members at any time and filter by role and goals — so preferencing is based on who people actually are.',
          images: [
            { src: 'img/projects/tangles/lofi-members.webp', caption: 'lo-fi: browsing the cohort' },
            { src: 'img/projects/tangles/lofi-preferences.webp', caption: 'lo-fi: ranking preferences from high to low' },
          ],
        },
        {
          heading: 'two-phase matching',
          body: '<b>phase 1 — leads.</b> leads preference other leads they\'d like to work with, and tangles\' matching algorithm pairs them up using those preferences and profile questions. once results are released, leads see their co-lead on their team page and a discord channel is created for the team automatically.<br><br><b>phase 2 — trainees.</b> when the directors open the next round, trainees preference lead pairs and other trainees, and the algorithm builds full teams around the existing lead pairs. leads see their trainees first; trainees see their team at a later date.',
          images: [
            { src: 'img/projects/tangles/phase-1.webp', caption: 'phase 1: leads preferencing' },
            { src: 'img/projects/tangles/phase-2.webp', caption: 'phase 2: trainee preferencing' },
          ],
        },
        {
          heading: 'the directors\' cut',
          body: 'the directors keep full control so the process stays flexible: they get the final say on every lead pairing and team and can swap people manually, manage the cohort by adding or removing members, and decide when each preference round opens and when results come out — including staggering releases for leads and trainees.',
          images: [{ src: 'img/projects/tangles/directors-cut.webp', caption: 'directors can move trainees between generated teams' }],
        },
        {
          heading: 'where it\'s at',
          body: 'we\'ve finished the lo-fi wireframes and are currently building tangles with react, typescript, tanstack, rust and postgresql. hi-fi designs and the live product are coming soon ✦',
          images: [
            { src: 'img/projects/tangles/lofi-my-team.webp', caption: 'lo-fi: my team' },
            { src: 'img/projects/tangles/lofi-no-team.webp', caption: 'lo-fi: empty state before teams are released' },
          ],
        },
      ],
      gallery: [],
    },
  ],

  hardware: [
    {
      id: 'glowy',
      title: 'glowy',
      file: 'glowy.proto',
      summary: 'a friendly door-handle sanitiser that uses uv rays and a reactive scanner to reduce the spread of bacteria from door handles.',
      status: 'completed',
      award: 'design award · buildathon 2025',
      cover: 'img/projects/glowy/showcase.webp',
      coverPosition: '30% 78%', // focus the crop on the device
      color: '#EDE3FF',
      emoji: '🐱',
      tags: ['hardware prototype', 'buildathon', 'un sdgs', 'health & hygiene'],
      meta: {
        event: 'unsw founders × ramsoc × csesoc buildathon 2025',
        award: '🏆 design award',
        built: 'hardware + code prototype',
        components: 'provided at the buildathon',
      },
      figma: '',
      links: [],
      sections: [
        {
          heading: 'the brief',
          body: 'at the unsw founders × ramsoc × csesoc buildathon 2025, teams had to design an innovative solution aimed at the un\'s <b>sustainable development goals</b> — building a working hardware and code prototype with the components provided.',
        },
        {
          heading: 'meet glowy ^^',
          body: 'door handles are touched by everyone, all day. <b>glowy</b> is our solution to reducing the spread of bacteria from them: a small device that sits on the handle and removes bacteria with its <b>uv rays</b> and <b>reactive scanner</b>. we gave it a pixel cat face on its screen so a piece of hygiene tech feels friendly rather than clinical.',
          images: [{ src: 'img/projects/glowy/showcase.webp', caption: 'glowy at the buildathon showcase, with our poster' }],
        },
        {
          heading: 'why it matters',
          body: 'in line with the un sustainable development goals, glowy aims to improve our society\'s <b>health and hygiene</b> and make <b>sanitisation</b> effortless in shared spaces.',
        },
        {
          heading: 'outcome',
          body: 'our team won the <b>design award</b> for the hardware and code prototype 🏆',
        },
      ],
      gallery: [],
    },
  ],
};
