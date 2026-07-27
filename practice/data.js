/*
  DATA FILE — this is the only file you (or Claude) need to touch to:
    - add a brand new exam
    - add more practice questions to an existing exam
    - add more flashcard terms to an existing exam

  Structure for each exam:
  {
    id: "short-unique-id",
    name: "Short name shown on the home screen",
    fullName: "Full official name",
    meta: "One line shown under the exam title, e.g. question count / time / passing score",
    competencies: [ { id, label, short } ],   // categories used to tag/filter questions
    questions: [
      { id, c: "competencyId", q: "question text", options: ["a","b","c","d"], correct: 0, exp: "explanation" }
    ],
    flashcards: [
      { c: "competencyId", term: "...", def: "..." }
    ]
  }
*/

window.EXAM_DATA = {
  eas: {
    id: "eas",
    name: "EAS",
    fullName: "Educating All Students (NYSTCE 201)",
    meta: "40 selected-response + 3 constructed-response · 135 minutes · passing score 520 · $80 fee",
    competencies: [
      { id: "diversity", label: "Diverse student populations", short: "Diversity" },
      { id: "ell", label: "English language learners", short: "ELLs" },
      { id: "swd", label: "Students with disabilities", short: "SWD" },
      { id: "responsibilities", label: "Teacher responsibilities", short: "Responsibilities" },
      { id: "home", label: "School-home relationships", short: "Home & school" },
    ],
    questions: [
      { id: "d1", c: "diversity", q: "Culturally responsive teaching primarily aims to:", options: ["Ignore students' backgrounds to keep the curriculum uniform", "Use students' cultural backgrounds as an asset to make learning more relevant", "Group students strictly by cultural background for instruction", "Replace core content standards with cultural content"], correct: 1, exp: "Culturally responsive teaching connects instruction to students' cultural frames of reference to increase relevance and engagement — it doesn't lower expectations or segregate students." },
      { id: "d2", c: "diversity", q: "Which best describes an \"asset-based\" perspective on students from low-income backgrounds?", options: ["Assuming they need remedial instruction until proven otherwise", "Recognizing the funds of knowledge and strengths they bring from home and community", "Lowering expectations to match perceived resources", "Focusing instruction only on test preparation"], correct: 1, exp: "An asset-based view treats students' home and community knowledge as a resource to build on, not a deficit to fix." },
      { id: "d3", c: "diversity", q: "A teacher notices two students consistently left out by peers because of accent differences. The most appropriate response is to:", options: ["Ignore it — it's a social issue outside of instruction", "Explicitly teach respect for linguistic diversity and address the exclusion directly", "Ask the students to stop speaking with an accent in class", "Separate the students from the group during group work"], correct: 1, exp: "Teachers are responsible for fostering an inclusive classroom climate, which means naming and addressing exclusion directly rather than avoiding it." },
      { id: "d4", c: "diversity", q: "\"Funds of knowledge\" refers to:", options: ["Financial literacy skills taught in school", "The knowledge and skills embedded in students' households and communities", "The school's operating budget", "A student's grade point average"], correct: 1, exp: "The term describes the practical knowledge families accumulate through work, culture, and daily life — a resource teachers can draw on." },
      { id: "e1", c: "ell", q: "Which strategy best supports ELL comprehension of grade-level content without watering down the material?", options: ["Removing all academic vocabulary from the lesson", "Using visuals, gestures, and scaffolded language alongside grade-level content", "Requiring ELLs to master English before addressing content", "Translating the whole lesson and lecturing only in the student's first language"], correct: 1, exp: "Scaffolding — visuals, gestures, sentence frames — keeps grade-level content accessible without diluting it." },
      { id: "e2", c: "ell", q: "A student chats comfortably at lunch in English but struggles with a science textbook. This student has developed strong:", options: ["CALP but weak BICS", "BICS, and is still developing CALP", "Neither BICS nor CALP", "Both fully"], correct: 1, exp: "BICS (conversational fluency) typically develops in 1–2 years; CALP (academic language) can take 5–7 years." },
      { id: "e3", c: "ell", q: "Under federal civil rights law, schools must provide ELL students with:", options: ["Instruction identical to native English speakers, with no added support", "Language support services that ensure meaningful access to the curriculum", "Automatic placement in special education", "Exemption from all state testing"], correct: 1, exp: "Federal law (e.g., the outcome of Lau v. Nichols) requires meaningful access to instruction, not identical treatment or blanket exemptions." },
      { id: "e4", c: "ell", q: "Pairing a content objective with a language objective in a lesson plan is meant to:", options: ["Replace the content objective for ELL students", "Specify the academic language skills students need to practice while learning the content", "Assess grammar only", "Apply only in ESL pull-out classes"], correct: 1, exp: "A language objective names the academic English (vocabulary, sentence structures) students will use while engaging with the content — for all students in the class." },
      { id: "s1", c: "swd", q: "An IEP (Individualized Education Program) is:", options: ["A general lesson plan used for the whole class", "A legally binding, individualized document outlining a student's special education services and goals", "A discipline record", "An informal teacher note"], correct: 1, exp: "The IEP is a legal document, developed by a team, that specifies goals, services, and accommodations for a student with a disability." },
      { id: "s2", c: "swd", q: "The principle of \"least restrictive environment\" (LRE) means:", options: ["Students with disabilities should always attend a separate school", "Students with disabilities should be educated with non-disabled peers to the maximum extent appropriate", "Teachers may restrict access to the general curriculum for efficiency", "Parents have no input on placement"], correct: 1, exp: "LRE requires that students be included with non-disabled peers as much as appropriate, with removal only when necessary." },
      { id: "s3", c: "swd", q: "A student with dyslexia struggles with decoding text. An appropriate accommodation is:", options: ["Grading the student on a different scale than peers", "Providing audiobooks or text-to-speech and extra time for reading tasks", "Excusing the student from all reading tasks", "Retaining the student until reading improves"], correct: 1, exp: "Accommodations change how a student accesses material, not the learning expectation itself — audiobooks and extra time preserve access without lowering the standard." },
      { id: "s4", c: "swd", q: "Response to Intervention (RTI) is best described as:", options: ["A discipline system for behavior", "A tiered framework for increasingly intensive academic support with progress monitoring", "A test used only to qualify students for gifted programs", "A one-time kindergarten screening"], correct: 1, exp: "RTI is an ongoing, multi-tiered process of support and data collection, not a single test or a discipline tool." },
      { id: "r1", c: "responsibilities", q: "FERPA primarily protects:", options: ["Students' physical safety on campus", "The privacy of student education records", "Teachers' salaries", "School building safety codes"], correct: 1, exp: "The Family Educational Rights and Privacy Act governs who may access and share student education records." },
      { id: "r2", c: "responsibilities", q: "A teacher suspects a student is being abused at home. The teacher's legal responsibility is to:", options: ["Investigate independently before reporting", "Report the suspicion to the appropriate authority as a mandated reporter", "Discuss it with other students first", "Wait until there is definitive proof"], correct: 1, exp: "Teachers are mandated reporters and must report reasonable suspicion — they are not required, or permitted, to investigate or wait for proof themselves." },
      { id: "r3", c: "responsibilities", q: "Which is an appropriate professional boundary in teacher-student communication?", options: ["Communicating with students only through school-sanctioned, documented channels", "Private personal social media messaging with students", "Meeting alone with a student behind closed, locked doors", "Sharing personal contact information freely"], correct: 0, exp: "Professional communication should stay on official, documented channels to protect both the student and the teacher." },
      { id: "r4", c: "responsibilities", q: "A teacher believes a student's IEP accommodation \"doesn't seem necessary\" anymore. The appropriate action is to:", options: ["Unilaterally remove the accommodation", "Follow the IEP as written and raise concerns with the IEP team for review", "Apply the accommodation only on some tests", "Ask the student's peers what they think"], correct: 1, exp: "An IEP is a legal document — only the IEP team can revise it, so a teacher raises concerns rather than changing services alone." },
      { id: "h1", c: "home", q: "The most effective way to build trust with a family whose home language is not English is to:", options: ["Send all communication only in English", "Provide interpretation or translation and communicate proactively, not just about problems", "Wait for the family to ask for translated materials", "Rely on the student to translate all communications"], correct: 1, exp: "Proactive, translated, two-way communication builds trust; relying on the child as interpreter can burden them and limit accuracy." },
      { id: "h2", c: "home", q: "A parent disagrees with a teacher's classroom decision. The best first step is to:", options: ["Immediately involve administration", "Listen to the parent's concern and seek to understand their perspective before responding", "Dismiss the concern as unfounded", "Avoid future contact with the parent"], correct: 1, exp: "Listening first builds the relationship and often resolves the disagreement before escalation is needed." },
      { id: "h3", c: "home", q: "Effective family engagement includes:", options: ["Contacting families only when there is a problem", "Regular, two-way communication that includes positive news, not just concerns", "Requiring in-person attendance at all events or marking families uninvolved", "Limiting communication to formal report cards"], correct: 1, exp: "Strong home-school relationships depend on ongoing, balanced communication — not contact that only happens when something goes wrong." },
      { id: "h4", c: "home", q: "When working with families from diverse cultural backgrounds, teachers should:", options: ["Assume all families define \"involvement\" the same way", "Recognize that family engagement can look different across cultures and value multiple forms of it", "Penalize families who don't attend PTA meetings", "Require identical participation from every family"], correct: 1, exp: "Involvement takes many culturally shaped forms — attending events is only one of them — so teachers should recognize and welcome a range of participation." },
    ],
    flashcards: [
      { c: "diversity", term: "Culturally responsive teaching", def: "Instruction that draws on students' cultural backgrounds and experiences to make learning more relevant and effective." },
      { c: "diversity", term: "Funds of knowledge", def: "The skills and knowledge embedded in students' households and communities that can be leveraged for learning." },
      { c: "diversity", term: "Asset-based perspective", def: "Viewing students' backgrounds, languages, and experiences as strengths to build on, rather than deficits to fix." },
      { c: "diversity", term: "Equity vs. equality", def: "Equality gives everyone the same resources; equity gives resources based on individual need so everyone can reach the same outcome." },
      { c: "ell", term: "BICS", def: "Basic Interpersonal Communicative Skills — conversational English fluency, typically developing within 1–2 years." },
      { c: "ell", term: "CALP", def: "Cognitive Academic Language Proficiency — the academic language needed for schoolwork, typically taking 5–7 years to develop." },
      { c: "ell", term: "Scaffolding", def: "Temporary supports — visuals, sentence starters, modeling — that help students reach content above their current independent level." },
      { c: "ell", term: "Language objective", def: "A lesson goal naming the academic English skills students will practice while learning the content." },
      { c: "swd", term: "IEP", def: "Individualized Education Program — a legally binding document outlining a student's special education goals, services, and accommodations." },
      { c: "swd", term: "504 Plan", def: "A plan providing accommodations for a student whose disability affects a major life activity, under Section 504 of the Rehabilitation Act." },
      { c: "swd", term: "Least Restrictive Environment (LRE)", def: "The principle that students with disabilities should be educated alongside non-disabled peers to the maximum extent appropriate." },
      { c: "swd", term: "Response to Intervention (RTI)", def: "A tiered, data-driven framework for providing increasing levels of academic or behavioral support." },
      { c: "swd", term: "Universal Design for Learning (UDL)", def: "A framework for designing instruction with multiple means of engagement, representation, and expression built in from the start." },
      { c: "responsibilities", term: "FERPA", def: "Family Educational Rights and Privacy Act — federal law protecting the privacy of student education records." },
      { c: "responsibilities", term: "Mandated reporter", def: "A professional legally required to report suspected child abuse or neglect to the appropriate authority." },
      { c: "responsibilities", term: "Formative assessment", def: "Ongoing assessment used to monitor learning and adjust instruction during the learning process." },
      { c: "responsibilities", term: "Summative assessment", def: "Assessment given at the end of an instructional period to evaluate learning against a standard." },
      { c: "home", term: "Home-school communication", def: "Ongoing, two-way, culturally responsive communication between teachers and families that goes beyond reporting problems." },
    ],
  },

  // Add future exams here, e.g.:
  // edtpa: { id: "edtpa", name: "edTPA", fullName: "...", meta: "...", competencies: [...], questions: [...], flashcards: [...] },
};

/*
  PROGRAMS — guided, cohort-based study camps (as opposed to the self-paced
  exams above). Add a new program the same way: give it an id, link it to
  an exam via examId if relevant, and fill in structure / outcomes / weeks.
*/
window.PROGRAMS = {
  eas_camp: {
    id: "eas_camp",
    examId: "eas",
    name: "EAS 考证陪伴营",
    tagline: "8-week guided prep and exam-registration program for the EAS",
    structure: [
      "8 weekly 90-minute live sessions",
      "Optional 60-minute study room / office hour each week",
      "About 2 hours of independent work per week",
      "Recommended cohort size: 12–20 participants",
      "One diagnostic, three domain writing assignments, and one full 135-minute simulation",
    ],
    outcomes: [
      "A personal testing timeline",
      "Practice across every EAS competency",
      "At least nine completed constructed responses",
      "An ongoing error-analysis log",
      "One full 135-minute simulation completed",
      "Registration for an exam date",
    ],
    weeks: [
      { week: "Week 0", title: "Onboarding & certification audit", objective: "Confirm the EAS is needed, set a target test date, and complete a diagnostic assessment." },
      { week: "Week 1", title: "Understanding the EAS & scenario analysis", objective: "Learn the exam format, the five competencies, and a repeatable routine for reading classroom scenarios." },
      { week: "Week 2", title: "Diverse student populations", objective: "Culturally responsive-sustaining education, asset-based teaching, and Universal Design for Learning." },
      { week: "Week 3", title: "English language learners / multilingual learners", objective: "Language vs. content objectives, scaffolding, and telling language development apart from disability." },
      { week: "Week 4", title: "Students with disabilities & other special learning needs", objective: "IDEA, IEPs, least restrictive environment, accommodations vs. modifications, and MTSS." },
      { week: "Week 5", title: "Teacher responsibilities", objective: "FERPA, mandated reporting, and New York's Dignity for All Students Act (DASA)." },
      { week: "Week 6", title: "School-home relationships", objective: "Family engagement, language access, and handling disagreement with families." },
      { week: "Week 7", title: "Constructed-response intensive", objective: "The CARE method for written responses, plus rubric-based scoring practice." },
      { week: "Week 8", title: "Full simulation & exam readiness", objective: "A complete 135-minute mock exam, error analysis, and a final readiness checklist." },
    ],

    // ---- fact sheet (premium) ----
    factSheet: {
      asOf: "July 27, 2026",
      format: [
        "40 selected-response questions",
        "3 constructed-response assignments (~150–200 words each)",
        "135 minutes of testing time",
        "Passing score: 520",
        "Fee: $80",
        "Testing available by appointment, year-round",
      ],
      weighting: [
        { label: "Selected-response questions", value: "~70% of total score" },
        { label: "Constructed-response assignments", value: "~30% of total score" },
        { label: "Diverse Student Populations", value: "~18% (selected-response) + 1 constructed response" },
        { label: "English Language Learners / Multilingual Learners", value: "~18% (selected-response) + 1 constructed response" },
        { label: "Students with Disabilities & Other Special Learning Needs", value: "~18% (selected-response) + 1 constructed response" },
        { label: "Teacher Responsibilities", value: "~8% (selected-response only)" },
        { label: "School-Home Relationships", value: "~8% (selected-response only)" },
      ],
      crScoring: [
        "Content — does the response address every part of the task?",
        "Analysis, synthesis, and pedagogical application — does it accurately use the exhibit information and instructional knowledge?",
        "Command of evidence — is the recommendation supported by relevant facts, examples, and details from the exhibits?",
      ],
      notes: [
        "This is still officially called Test 201 — a proposed EAS-II (Test 203, 60 selected-response + 1 extended constructed response) exists only as an October 2017 draft and is not the active exam. Prepare for Test 201; only monitor 203 for changes.",
        "Candidates who don't pass must re-register and generally wait 30 days before retaking. The near-passing-score waiver process available for some NYSTCE tests explicitly excludes the EAS.",
      ],
    },

    // ---- bilingual terminology glossary (premium) ----
    glossary: {
      categories: [
        {
          id: "assessment", label: "Assessment & instruction",
          terms: [
            ["Selected-response item", "选择题", "A question with four answer choices requiring the single best response."],
            ["Constructed-response assignment", "简答题", "A written response requiring analysis of exhibits and application of pedagogical knowledge."],
            ["Competency", "考试能力领域", "One of the five major EAS content areas."],
            ["Exhibit / stimulus", "材料或情境资料", "Classroom descriptions, lesson plans, observations, or data used to answer questions."],
            ["Diagnostic assessment", "诊断性评估", "An assessment used before instruction to identify strengths, needs, and misconceptions."],
            ["Formative assessment", "形成性评估", "Ongoing evidence used to adjust instruction while learning is occurring."],
            ["Summative assessment", "总结性评估", "An assessment used after instruction to evaluate learning."],
            ["Progress monitoring", "进展监测", "Repeated collection of student-performance data to determine whether an intervention is effective."],
            ["Differentiation", "差异化教学", "Adjusting content, process, product, or learning environment according to learner readiness, needs, or interests."],
            ["Scaffolding", "教学支架", "Temporary support that is gradually removed as the learner becomes more independent."],
            ["Universal Design for Learning (UDL)", "通用学习设计", "Proactive design of learning environments using multiple means of engagement, representation, and action and expression."],
            ["Criterion-referenced assessment", "标准参照评估", "Evaluating performance against defined standards rather than comparing students with one another."],
            ["Evidence-based practice", "循证教学实践", "A practice supported by credible evidence that it improves learner outcomes."],
          ],
        },
        {
          id: "diversity", label: "Diverse student populations",
          terms: [
            ["Culturally Responsive-Sustaining Education (CR-S)", "文化回应与文化持续性教育", "Instruction that affirms identities, maintains cultural and linguistic assets, promotes rigor, and supports equitable participation."],
            ["Equity", "教育公平", "Providing the supports and opportunities learners need to access comparable educational outcomes."],
            ["Inclusion", "融合教育", "Ensuring students participate meaningfully in the general educational environment with appropriate supports."],
            ["Implicit bias", "隐性偏见", "Automatic assumptions or associations that may influence expectations and decisions."],
            ["Asset-based approach", "优势导向方法", "Beginning with students' knowledge, languages, identities, and strengths."],
            ["Funds of knowledge", "家庭与社区知识资源", "Knowledge and skills developed through family, cultural, and community experiences."],
            ["Culturally and linguistically responsive teaching", "文化与语言回应式教学", "Using students' cultures and languages as resources for instruction."],
            ["Heterogeneous grouping", "异质分组", "Grouping students with varied strengths, identities, or performance levels."],
            ["Cooperative learning", "合作学习", "Structured group work involving shared goals, individual accountability, and interdependence."],
            ["Flexible grouping", "灵活分组", "Temporary grouping that changes according to instructional purpose and current data."],
            ["Trauma-informed practice", "创伤知情教学", "Creating predictable and supportive environments while avoiding assumptions or unnecessary retraumatization."],
            ["Gifted and talented learner", "资优学生", "A learner requiring increased depth, complexity, pacing, enrichment, or acceleration."],
          ],
        },
        {
          id: "ell", label: "ELL / MLL terminology",
          terms: [
            ["English Language Learner (ELL)", "英语语言学习者", "A student formally identified as requiring English-language-development services."],
            ["Multilingual Learner (MLL)", "多语学习者", "A broader, asset-oriented term recognizing students' developing or existing multilingual abilities."],
            ["English as a New Language (ENL)", "英语作为新语言", "New York's instructional services supporting English-language development."],
            ["Home language (L1)", "家庭语言或第一语言", "The language primarily learned or used in the student's home or early environment."],
            ["Second language (L2)", "第二语言", "A language acquired after the home or first language."],
            ["Language objective", "语言目标", "The listening, speaking, reading, or writing skill students will use during a lesson."],
            ["Content objective", "学科内容目标", "The academic knowledge or skill students are expected to learn."],
            ["Academic language", "学术语言", "Vocabulary, sentence structures, and discourse used for academic tasks."],
            ["Social language", "社交语言", "Language used in everyday interpersonal communication."],
            ["Comprehensible input", "可理解性输入", "Language and content made understandable through context, visuals, modeling, adjustments, and prior knowledge."],
            ["Translanguaging", "跨语实践", "Using a learner's full linguistic repertoire to understand, communicate, and learn."],
            ["Bilingual education", "双语教育", "Instruction that systematically uses English and another language."],
            ["Dual-language program", "双语沉浸项目", "A program designed to develop bilingualism, biliteracy, and academic achievement in two languages."],
            ["Transitional bilingual education (TBE)", "过渡性双语教育", "A bilingual model supporting academic learning while progressively increasing English instruction."],
            ["NYSITELL", "纽约州英语学习者入学测试", "The state assessment used as part of initial ELL identification."],
            ["NYSESLAT", "纽约州英语作为第二语言成绩测试", "The annual English-language-proficiency assessment for identified ELLs."],
            ["SIFE", "受过不连续或中断正规教育的学生", "Students with Inconsistent/Interrupted Formal Education who meet specific New York identification criteria."],
            ["Commissioner's Regulations Part 154 (CR Part 154)", "纽约州154法规", "New York regulations governing ELL identification, programming, services, and family rights."],
          ],
        },
        {
          id: "swd", label: "Special education & intervention",
          terms: [
            ["IDEA", "《残障人士教育法》", "The federal special education law establishing rights and services for eligible students with disabilities."],
            ["FAPE", "免费且适当的公共教育", "Special education and related services provided without charge and designed to meet the student's individual needs."],
            ["LRE", "限制最少的环境", "Educating students with nondisabled peers to the maximum extent appropriate."],
            ["IEP", "个别化教育计划", "A legally required educational plan for a student eligible under IDEA."],
            ["CSE", "特殊教育委员会", "The New York school-age team responsible for eligibility, IEP development, and placement recommendations."],
            ["CPSE", "学前特殊教育委员会", "The corresponding team for eligible preschool students."],
            ["PLAAFP", "当前学业与功能表现水平", "The IEP description of current strengths, needs, and performance."],
            ["Annual goal", "年度目标", "A measurable skill or outcome the student is expected to achieve during the IEP period."],
            ["Specially designed instruction", "专门设计的教学", "Adaptation of instructional content, methodology, or delivery to address disability-related needs."],
            ["Related services", "相关服务", "Services such as counseling, speech-language therapy, occupational therapy, or physical therapy that support access to education."],
            ["Accommodation", "便利措施", "A change in how the student accesses instruction or demonstrates learning without changing the learning standard."],
            ["Modification", "教学要求调整", "A change in what the student is expected to learn or demonstrate."],
            ["Section 504 Plan", "504计划", "An accessibility plan under federal civil-rights law for a student whose disability substantially limits a major life activity."],
            ["Assistive technology (AT)", "辅助技术", "A device or service that improves or maintains a student's functional capabilities."],
            ["Child Find", "主动识别义务", "The obligation to locate, identify, and evaluate students who may have disabilities."],
            ["MTSS", "多层次支持系统", "A schoolwide framework coordinating increasingly intensive academic, behavioral, and social-emotional supports."],
            ["Response to Intervention (RtI)", "干预反应模式", "A data-based process for providing interventions and evaluating student response."],
            ["PBIS", "积极行为干预与支持", "A preventive framework for teaching, reinforcing, and supporting positive behavior."],
            ["Functional Behavioral Assessment (FBA)", "功能性行为评估", "A process for determining the function or purpose of a behavior."],
            ["Behavior Intervention Plan (BIP)", "行为干预计划", "A plan using FBA information to prevent and respond to interfering behavior."],
          ],
        },
        {
          id: "responsibilities", label: "Responsibilities & family engagement",
          terms: [
            ["FERPA", "《家庭教育权利和隐私法》", "The federal law protecting student educational-record privacy and providing access and amendment rights."],
            ["Mandated reporter", "法定报告人", "A professional legally required to report suspected child abuse or maltreatment."],
            ["Reasonable cause to suspect", "合理怀疑理由", "The legal threshold that triggers a mandated report; proof or an independent investigation is not required."],
            ["Statewide Central Register (SCR)", "纽约州儿童虐待与忽视中央登记处", "The New York system that receives reports of suspected child abuse or maltreatment."],
            ["DASA", "《所有学生尊严法》", "New York law addressing discrimination, harassment, intimidation, bullying, and cyberbullying."],
            ["Title VI", "《民权法》第六章", "Federal civil-rights protection against discrimination based on race, color, or national origin, including certain language-access obligations."],
            ["Language access", "语言服务权", "Meaningful access to important school information through qualified translation or interpretation."],
            ["Qualified interpreter", "合格口译员", "A person with sufficient language proficiency, interpretation skill, confidentiality knowledge, and subject-matter understanding."],
            ["Family engagement", "家庭参与", "Reciprocal partnership in which families help shape educational decisions and student support."],
            ["Informed consent", "知情同意", "Voluntary agreement made after receiving and understanding relevant information."],
            ["Procedural safeguards", "程序性保障", "Legal notices and protections supporting the rights of students with disabilities and their families."],
            ["Due process", "正当程序", "Formal procedures for resolving disputes involving educational identification, evaluation, services, or placement."],
            ["Confidentiality", "保密义务", "Protecting student and family information from unauthorized disclosure."],
          ],
        },
      ],
    },

    // ---- constructed-response (essay) practice, using the program's CARE method ----
    crPractice: {
      method: {
        name: "CARE",
        steps: [
          { letter: "C", label: "Cite the need", desc: "Identify the exact student need or instructional issue shown in the exhibits." },
          { letter: "A", label: "Action", desc: "Describe one specific, feasible teacher strategy." },
          { letter: "R", label: "Rationale", desc: "Explain the pedagogical principle behind the strategy." },
          { letter: "E", label: "Effect", desc: "Explain how the strategy will improve access, learning, participation, or independence." },
        ],
        structure: "Paragraph 1: name the issue and cite exhibit evidence. Paragraph 2: describe the strategy concretely. Paragraph 3: explain why it will work.",
      },
      checklist: [
        "Every part of the task is answered",
        "The need I identified comes directly from the scenario",
        "My strategy is specific, not generic",
        "The strategy directly addresses that exact need",
        "I explained the expected student outcome",
        "I referred to specific details from the scenario",
        "My response is roughly 150–200 words",
      ],
      prompts: [
        {
          id: "cr1", competency: "diversity",
          scenario: "Ms. Ortiz teaches a 4th-grade class that includes recently arrived refugee students and a student who has told classmates she has two moms. During a unit on family traditions, several students say their family \"doesn't celebrate anything like that\" after a read-aloud that only depicted one family structure and one set of holiday traditions.",
          task: "Identify one diversity-and-equity issue shown in this scenario. Describe one specific instructional strategy Ms. Ortiz could use, and explain how it would support learning and inclusion for the whole class.",
        },
        {
          id: "cr2", competency: "ell",
          scenario: "Diego moved to the U.S. eight months ago from Guatemala. He converses easily with classmates at recess and follows oral directions without trouble, but during a science lab he cannot complete the written lab report independently and leaves most sections blank.",
          task: "Identify Diego's specific language-related need shown in this scenario. Describe one differentiated instructional strategy, and explain how it addresses that need while keeping Diego engaged with grade-level science content.",
        },
        {
          id: "cr3", competency: "swd",
          scenario: "Maya's IEP specifies extended time and a graphic organizer for writing assignments. During a persuasive essay unit, her teacher gives the whole class 40 minutes to plan and draft with no organizer provided, and Maya turns in an incomplete outline with no draft.",
          task: "Identify the barrier to Maya's access in this scenario. Recommend one accommodation or instructional adaptation consistent with her IEP, and explain why it is appropriate while keeping her included in the class assignment.",
        },
      ],
    },
  },
};

/*
  SITE_CONFIG.accessCode — the single shared code that unlocks premium
  (member-only) content across the whole site. Change this any time by
  editing the string below, or just tell Claude the new code and ask for
  an updated data.js.

  Reminder: this lives in a file anyone can view in their browser, so it's
  a soft gate (keeps casual visitors out) — not real per-person security.
*/
window.SITE_CONFIG = {
  accessCode: "EAS2026",
};
