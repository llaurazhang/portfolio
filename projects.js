// projects.js: edit this file to add or change your portfolio work!
//
// each folder (projects + hardware) is a list of "files". every file opens a case study.
// text goes inside "double quotes", so apostrophes like didn't are fine.
// (to use a double quote inside the text, write \" instead)
//
// fields:
//   id             unique slug, no spaces
//   title          project name
//   file           the fake filename shown in the folder (e.g. "bloom.fig")
//   summary        one-liner shown on the card and at the top of the case study
//   status         "completed" or "in progress" (in progress gets a pulsing yellow dot)
//   award          optional, shows a 🏆 ribbon
//   cover          path to an image, or "" to use the colour + emoji
//   coverPosition  which part of the cover to keep when it's cropped, e.g. "top" or "30% 78%"
//   color          background colour behind the cover / emoji
//   emoji          little icon on the card when there's no cover
//   meta           { any label: "value" } shown as a little info grid, in the order you write them
//   figma          a figma prototype link (figma.com/proto/...), embedded in the window ("" to hide)
//   links          [{ label, url }] extra buttons (figma, github, video, etc.)
//   sections       [{ heading, body, images: [{ src, caption }] }] the case study
//                  body can include simple html (<b>, <a>, <br>, <ul><li>)
//   gallery        ["img/...", { src: "img/...", caption: "..." }] extra images at the end
//
// images live in img/projects/<project-id>/ (export ~1600px wide as .webp with squoosh.app)

window.PORTFOLIO = {
  projects: [
    {
      id: "student-hub",
      title: "integrated student hub",
      file: "student-hub.fig",
      summary: "one centralised platform for uni life. course planning, enrolment, automatic timetables, campus navigation and study-room booking, shaped by user research, usability testing and accessibility checks.",
      status: "completed",
      cover: "img/projects/student-hub/cover.webp",
      coverPosition: "top",
      color: "#FFF1C9",
      emoji: "🎓",
      meta: {
        role: "ui/ux designer",
        context: "COMP3511 · human-computer interaction",
        team: "5 designers",
        tools: "figma",
      },
      figma: "", // paste the figma prototype link here to embed it
      links: [],
      sections: [
        {
          heading: "the problem",
          body: "students juggle separate systems for the handbook, enrolment, timetabling, campus maps and room booking. the constant switching wastes time and leads to enrolment and navigation mistakes.",
        },
        {
          heading: "who we designed for",
          body: "<b>mary</b>, a final-year student worried a missing requirement will delay her graduation, and <b>hangjun</b>, a postgrad who wants a clash-free timetable with short gaps. their needs shaped three focus areas: <b>academic confidence</b>, <b>schedule efficiency</b> and <b>campus support</b>.",
          images: [{ src: "img/projects/student-hub/requirements.webp", caption: "each user problem mapped to a design response" }],
        },
        {
          heading: "research",
          body: "a survey of 13 students confirmed that scattered systems were their biggest frustration. they wanted graduation progress tracking, automatic clash-free timetables, and walking routes that show nearby study spaces.",
          images: [{ src: "img/projects/student-hub/questionnaire.webp", caption: "pre-test survey findings" }],
        },
        {
          heading: "ai prototype vs our first prototype",
          body: "we compared an ai-generated prototype with our own first design. the ai version looked cleaner but invented features and gave no feedback after actions. ours was more realistic and accessible, but denser. the final design combined the strengths of both.",
          images: [{ src: "img/projects/student-hub/first-prototype.webp", caption: "our first prototype" }],
        },
        {
          heading: "testing & iteration",
          body: "usability testing with 7 students showed generating a timetable was the hardest task. we logged each issue against usability heuristics and fixed it:<ul><li><b>campus map:</b> clearer route paths and an obvious accessible-routes toggle</li><li><b>class registration:</b> a working clash filter and a \"my timetable\" view</li><li><b>enrolment:</b> clearer status wording (\"not met\") and better contrast</li></ul>",
          images: [
            { src: "img/projects/student-hub/map-solution.webp", caption: "campus map" },
            { src: "img/projects/student-hub/timetable-solution.webp", caption: "class registration" },
            { src: "img/projects/student-hub/enrolment-solution.webp", caption: "enrolment" },
          ],
        },
        {
          heading: "home page redesign",
          body: "two icons looked too alike, so users had to rely on memory. we added text labels and turned the home page into an at-a-glance view of the timetable, degree progress and alerts.",
          images: [{ src: "img/projects/student-hub/home-redesign.webp", caption: "labelled navigation and an overview dashboard" }],
        },
        {
          heading: "designing for accessibility",
          body: "we designed for screen-magnifier, screen-reader and colour-blind users, tested against wcag 2.2. colour never carries meaning on its own: a failed prerequisite shows a status label, an icon, the missing course and how to fix it. contrast testing also caught clash colours that become invisible with colour blindness, which we flagged for the next iteration.",
          images: [
            { src: "img/projects/student-hub/four-signals.webp", caption: "four signals, not one colour" },
            { src: "img/projects/student-hub/colour-testing.webp", caption: "colour-blindness testing" },
          ],
        },
        {
          heading: "reflection",
          body: "taking a prototype through a full user-centred design process taught me to turn test feedback into concrete fixes, and to design for accessibility from the start.",
        },
      ],
      gallery: [],
    },
    {
      id: "tangles",
      title: "tangles",
      file: "tangles.fig",
      summary: "a team-formation platform for devsoc's training program, helping trainees and leads get to know each other and form teams that work well together.",
      status: "in progress",
      cover: "img/projects/tangles/lofi-preferences.webp",
      color: "#DDE8CC",
      emoji: "🧶",
      meta: {
        role: "UI/UX designer & developer",
        context: "devsoc training program",
        team: "unsw devsoc project cycle",
        stack: "react, typescript, tanstack, rust, postgresql",
      },
      figma: "",
      links: [],
      sections: [
        {
          heading: "the problem",
          body: "each term, dozens of trainees and leads are sorted into teams before they know each other. directors rely on forms and vague answers, so team formation is slow and manual.",
        },
        {
          heading: "the solution",
          body: "tangles brings it into one platform. members sign up, build a profile with their goals and interests, and are added to the devsoc discord with the right roles automatically.",
          images: [{ src: "img/projects/tangles/sign-up.webp", caption: "sign-up and profiling flow" }],
        },
        {
          heading: "getting to know your cohort",
          body: "members can browse and filter everyone in their cohort, then rank who they'd like to work with.",
          images: [
            { src: "img/projects/tangles/lofi-members.webp", caption: "browsing the cohort" },
            { src: "img/projects/tangles/lofi-preferences.webp", caption: "ranking preferences" },
          ],
        },
        {
          heading: "matching in two rounds",
          body: "leads are paired up first, then trainees are matched to lead pairs. each team gets a team page and its own discord channel.",
          images: [
            { src: "img/projects/tangles/phase-1.webp", caption: "round 1: leads" },
            { src: "img/projects/tangles/phase-2.webp", caption: "round 2: trainees" },
          ],
        },
        {
          heading: "the directors' cut",
          body: "directors keep the final say. they can swap members between teams, manage the cohort, and choose when each round opens and when results are released.",
          images: [{ src: "img/projects/tangles/directors-cut.webp", caption: "moving a trainee between teams" }],
        },
        {
          heading: "where it's at",
          body: "the lo-fi wireframes are done and we're now building it. hi-fi designs coming soon ✦",
          images: [
            { src: "img/projects/tangles/lofi-my-team.webp", caption: "my team" },
            { src: "img/projects/tangles/lofi-no-team.webp", caption: "empty state before teams are released" },
          ],
        },
      ],
      gallery: [],
    },
  ],

  hardware: [
    {
      id: "glowy",
      title: "glowy",
      file: "glowy.proto",
      summary: "a friendly door-handle sanitiser that uses uv rays and a reactive scanner to reduce the spread of bacteria.",
      status: "completed",
      award: "best design award · buildathon 2025",
      cover: "img/projects/glowy/showcase.webp",
      coverPosition: "30% 78%", // focus the crop on the device
      color: "#EDE3FF",
      emoji: "🐱",
      meta: {
        event: "UNSW Founders × RAMSoc × CSESoc buildathon 2025",
        award: "🏆 best design award",
        tools: "arduino uno, esp32, CAD, bambu studio",
        built: "hardware + code prototype",
      },
      figma: "",
      links: [],
      sections: [
        {
          heading: "the brief",
          body: "design an innovative solution for the UN sustainable development goals (SDG), built as a working hardware and code prototype from the components provided.",
        },
        {
          heading: "meet glowy ^^",
          body: "door handles are touched by everyone, all day. glowy sits on the handle and removes bacteria with uv rays and a reactive scanner, and its pixel cat face makes hygiene tech feel friendly.",
          images: [{ src: "img/projects/glowy/showcase.webp", caption: "glowy at the buildathon showcase" }],
        },
        {
          heading: "how we built it",
          body: "we prototyped the electronics with an <b>arduino uno</b> and <b>esp32</b>, modelled the enclosure in <b>CAD</b>, and prepared it for 3D printing in <b>bambu studio</b>.",
        },
        {
          heading: "outcome",
          body: "glowy supports the SDGs for better health, hygiene and sanitisation in shared spaces, and our team won the <b>best design award</b> 🏆",
        },
      ],
      gallery: [],
    },
  ],
};
