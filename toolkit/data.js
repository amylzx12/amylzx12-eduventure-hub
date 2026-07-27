/*
  TOOLKIT DATA — this is the file to edit when adding more job-hunting
  guides. Structure:

  window.TOOLKIT = {
    categories: [
      {
        id: "short-id", label: "Category name shown as a tab",
        articles: [
          {
            id: "short-id", title: "Article title", summary: "One-line teaser",
            sections: [ { heading: "Section heading", body: "Paragraph text." } ]
          }
        ]
      }
    ]
  }
*/

window.TOOLKIT = {
  categories: [
    {
      id: "resume",
      label: "Resume & cover letter",
      articles: [
        {
          id: "us-resume",
          title: "Building a US-style teaching resume",
          summary: "What US school hiring teams expect, and what to leave off compared to resume norms elsewhere.",
          sections: [
            { heading: "Length and format", body: "Keep it to one page if you have under ~8 years of experience, two pages maximum otherwise. Use a clean, single-column layout — many US school districts scan resumes through applicant-tracking software, and multi-column or heavily designed layouts can scramble when parsed." },
            { heading: "Leave off personal details", body: "US resumes do not include a photo, date of birth, marital status, nationality, or a headshot. Anti-discrimination hiring norms mean including these can actually work against you — a hiring committee often can't legally consider them, so including them just looks unfamiliar with US conventions." },
            { heading: "Lead with impact, not duties", body: "Instead of \"Responsible for teaching Chinese to grades 6-8,\" write what changed because of your teaching: \"Redesigned the grade 7 Chinese curriculum around project-based units, raising course completion rates from 78% to 94% over two years.\" Quantify wherever you can — test score gains, program enrollment growth, class sizes managed." },
            { heading: "Certification status is a resume line, not a disqualifier", body: "If you're mid-pathway toward NY certification, say so plainly: \"NYSTCE EAS: passed. Content Specialty Test: scheduled for [month].\" Schools that sponsor or support alternative-certification candidates want to see you understand exactly where you are in the process, not that you've hidden it." },
            { heading: "Include relevant coursework and practicum", body: "If your teaching experience is mostly international or you're newly certified, a short \"Education\" section listing relevant coursework, student teaching placements, and grade levels/subjects supervised gives hiring committees the specifics they're looking for." },
          ],
        },
        {
          id: "cover-letter",
          title: "Writing a cover letter that gets read",
          summary: "Structure and tailoring tips for a one-page letter that earns you an interview.",
          sections: [
            { heading: "Purpose", body: "A cover letter's only job is to get your resume actually read carefully. It should answer one question for the reader: why this school, why this role, why you — specifically, not generically." },
            { heading: "Structure", body: "Opening: one or two sentences naming the role and one concrete reason you're drawn to that school (something from their mission, program, or student population — not a generic \"I am passionate about education\"). Body: two short paragraphs connecting your specific experience to what the posting says they need. Closing: a direct, confident line inviting next steps — not \"I hope to hear from you,\" but \"I'd welcome the chance to discuss how I could contribute to [program name].\"" },
            { heading: "Tailor every single time", body: "Reusing one generic letter is the most common reason a strong candidate gets skipped. Change at least the opening and one body paragraph for every school — reference their specific program, language offerings, or student demographics." },
          ],
        },
      ],
    },
    {
      id: "interview",
      label: "Interview preparation",
      articles: [
        {
          id: "common-questions",
          title: "Common interview questions and how to answer them",
          summary: "The STAR method, classroom-management scenarios, and questions about your certification progress.",
          sections: [
            { heading: "The STAR method", body: "Most behavioral questions (\"Tell me about a time when...\") are best answered with Situation, Task, Action, Result: briefly set the scene, say what your responsibility was, describe the specific action you took, and close with the measurable or observed outcome. Keep each answer under about 90 seconds." },
            { heading: "Classroom management scenarios", body: "Expect questions like \"A student refuses to participate — what do you do?\" Panels are listening for a calm, specific, escalating approach: a private redirect first, a clear and consistently enforced expectation, and only then involving further support — rather than jumping straight to discipline or ignoring it." },
            { heading: "Culturally responsive teaching questions", body: "You may be asked how you'd support English language learners or students from different cultural backgrounds. Ground your answer in specific practices — scaffolding, visuals, honoring students' home languages and cultures as assets — rather than a general statement that you \"treat everyone the same.\"" },
            { heading: "Questions about your certification pathway", body: "It's common and expected to be asked directly where you are in the certification process. Answer plainly and confidently with dates: what you've completed, what's scheduled next, and your target completion date. Vague answers read as less prepared than exact ones." },
          ],
        },
        {
          id: "questions-to-ask",
          title: "Questions to ask your interviewer",
          summary: "A short list that signals genuine engagement rather than just filling silence.",
          sections: [
            { heading: "Why ask questions at all", body: "Interviewers consistently note when a candidate has no questions — it reads as lower engagement, even if unintentional. Prepare two or three genuine ones in advance." },
            { heading: "Strong examples", body: "\"What does a typical first year look like for a new teacher in this program?\" \"How does the school support teachers who are still completing certification requirements?\" \"What's one thing you'd want a new hire to understand about this student population in their first month?\"" },
          ],
        },
      ],
    },
    {
      id: "demo-lesson",
      label: "Demo lesson planning",
      articles: [
        {
          id: "planning-a-demo",
          title: "Planning a strong demo lesson",
          summary: "Structure, timing, and engagement strategies for a short taught segment in front of a panel or students.",
          sections: [
            { heading: "Structure", body: "A tight demo lesson usually follows: a short hook (1-2 minutes) that connects to something students already know or care about; a clear, stated objective; guided practice where you model and check understanding; brief independent or paired practice; and a closing that has students demonstrate what they learned, not just you summarizing it." },
            { heading: "Time management", body: "Demo lessons are almost always shorter than a real class period — often 15-20 minutes. Rehearse with a timer. Build in a natural place to cut content short if you're running over, rather than rushing the ending." },
            { heading: "Engaging a mixed group", body: "You often won't know the exact skill level of the students (or panel members role-playing students) in advance. Build in at least one moment of choice or differentiation — a harder and easier version of the same task — so the lesson works across ability levels." },
          ],
        },
        {
          id: "what-panels-look-for",
          title: "What interview panels look for in a demo lesson",
          summary: "The specific things being scored, beyond just the content of the lesson.",
          sections: [
            { heading: "Clarity of objective", body: "Panels check whether you state what students should be able to do by the end, not just what topic you're covering." },
            { heading: "Engagement strategies", body: "Cold-calling only a few students, versus using strategies that involve everyone (turn-and-talk, quick written responses, thumbs up/down checks) — panels are watching how you get the whole room participating." },
            { heading: "Checking for understanding", body: "Strong candidates check understanding throughout, not just at the end — a quick question, a show of hands, circulating during practice — and visibly adjust based on what they see." },
            { heading: "Classroom presence", body: "Voice projection, pacing, and how you handle an unexpected wrong answer or a quiet room all get noticed. A calm, unhurried response to the unexpected reads better than perfect delivery of a rehearsed script." },
          ],
        },
      ],
    },
    {
      id: "work-authorization",
      label: "Work authorization basics",
      articles: [
        {
          id: "pathways-overview",
          title: "Common work authorization pathways for international teachers",
          summary: "A general orientation only — not legal advice. Always confirm your specific situation with an immigration attorney or your school district's HR/international office.",
          sections: [
            { heading: "This is general orientation, not legal advice", body: "Immigration rules are complex, change over time, and depend heavily on your individual circumstances. Nothing here should be treated as legal guidance — always verify your specific situation with a qualified immigration attorney or your (prospective) school district's HR or international-hire office before making decisions." },
            { heading: "J-1 exchange visitor teacher programs", body: "Some school districts and sponsor organizations bring international teachers to the US on a J-1 visa specifically for teaching, usually for a fixed, renewable term. These programs are typically arranged through designated sponsor organizations rather than applied for independently." },
            { heading: "H-1B specialty occupation sponsorship", body: "Some districts sponsor teachers for H-1B status, which requires an employer to file on the teacher's behalf and is subject to an annual cap and lottery in most categories. Timing matters a great deal here — talk to a prospective employer early about whether and when they can sponsor." },
            { heading: "F-1 student status: OPT and CPT", body: "If you're completing a US teacher-education program on an F-1 student visa, Optional Practical Training (OPT) or Curricular Practical Training (CPT) may allow temporary work authorization tied to your field of study, subject to specific program and timing rules." },
            { heading: "Already authorized to work", body: "If you're a US citizen, permanent resident, or otherwise already authorized to work without sponsorship, none of the above applies to you — but it's still worth confirming with any school's HR office exactly what documentation they'll need at hiring." },
          ],
        },
      ],
    },
  ],
};
