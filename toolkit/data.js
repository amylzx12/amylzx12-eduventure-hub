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
      "id": "preparation",
      "label": "Getting Started (求职准备)",
      "articles": [
        {
              "id": "job-search-basics",
              "title": "纽约教师求职入门",
              "summary": "从确定方向、筛选学校到主动联系",
              "leadCallout": {
                    "type": "callout",
                    "title": "先看结论",
                    "lines": [
                          "纽约教师求职的核心路径是：先确认资格和方向，再建立学校名单、排列优先级，并主动联系学校。申请系统只是入口，校级沟通、面试准备和持续跟进同样重要。"
                    ]
              },
              "sections": [
                    {
                          "heading": "写在前面",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "第一次在纽约找教师工作，常见问题包括：从哪里找职位、先申请系统还是先联系学校、如何判断学校是否适合自己，以及没有美国全职教学经验能否申请。"
                                },
                                {
                                      "type": "text",
                                      "text": "教师求职不只是“找到职位并投递简历”。更有效的做法，是先明确方向和资格范围，再建立学校名单、判断优先级，并主动联系招聘负责人。本文根据 EduVenture“纽约教师求职分享会”第一场内容整理。"
                                }
                          ]
                    },
                    {
                          "heading": "第一步：明确自己的求职方向",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "开始搜索职位前，先把“想当老师”拆解成三个具体维度。"
                                },
                                {
                                      "type": "callout",
                                      "title": "1｜年龄段",
                                      "lines": [
                                            "常见方向：Pre-K/幼儿、小学、初中、高中、成人教育或课后项目。",
                                            "确认重点：教学案例、课堂管理经验和证书范围是否与目标学生匹配。"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "2｜教学科目",
                                      "lines": [
                                            "常见方向：中文/世界语言、ENL/ESL、双语、特殊教育、数学、科学等。",
                                            "确认重点：纽约州教师资格证、在办证书或教师教育项目是否符合职位要求。"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "3｜学校类型",
                                      "lines": [
                                            "常见方向：NYCPS、Charter、Private、Independent、社区机构和课后项目。",
                                            "确认重点：招聘平台、合同制度和面试流程。本文重点介绍 NYCPS。"
                                      ]
                                }
                          ],
                          "anchor": "step1"
                    },
                    {
                          "heading": "第二步：确认自己应该使用哪个求职系统",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "纽约公校的新教师申请者和在职教师使用不同的系统。选错入口会浪费时间。"
                                },
                                {
                                      "type": "callout",
                                      "title": "新教师或首次申请 NYCPS",
                                      "lines": [
                                            "入口：NYCPS Certified Teacher Application → New Teacher Finder",
                                            "作用：提交资格、偏好、推荐人和\nResume；审核后搜索职位，也可被学校招聘人员发现。",
                                            "提醒：通过审核只代表进入校级求职阶段，并不等于获得工作。"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "目前已在 NYCPS 任职",
                                      "lines": [
                                            "入口：Open Market Hiring System",
                                            "作用：面向符合条件的在职教师及部分员工申请校内转职。",
                                            "提醒：通常每年4月至8月开放；新教师不应把它当作主要入口。"
                                      ]
                                }
                          ],
                          "anchor": "step2"
                    },
                    {
                          "heading": "第三步：寻找职位并建立学校名单",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "进入招聘系统后，不建议看到职位就立即大量投递。先建立一份学校追踪表，便于比较和跟进。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "追踪项目",
                                            "建议记录的信息"
                                      ],
                                      "rows": [
                                            [
                                                  "**学校与职位**",
                                                  "学校全名、编号、科目、年级、全职或兼职"
                                            ],
                                            [
                                                  "**地点与通勤**",
                                                  "Borough、District、实际通勤时间及换乘情况"
                                            ],
                                            [
                                                  "**学生与项目**",
                                                  "学生人数、语言背景、学习需求、AP/双语/ENL或特色课程"
                                            ],
                                            [
                                                  "**学校文化**",
                                                  "教学理念、近期活动、社区特点和发展方向"
                                            ],
                                            [
                                                  "**联系人**",
                                                  "Principal、Assistant Principal 或招聘负责人"
                                            ],
                                            [
                                                  "**申请状态**",
                                                  "未联系、已投递、已回复、面试、结束"
                                            ]
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "学校信息可以来自 New Teacher Finder、NYCPS 学校页面、学校官网和社交媒体、School Quality Snapshot、招聘会，以及大学项目和校友网络。"
                                },
                                {
                                      "type": "callout",
                                      "title": "信息使用提醒",
                                      "lines": [
                                            "School Quality Snapshot\n适合查看学校基本情况和调查数据；学校官网的近期活动、课程介绍、校长寄语和教师团队页面，往往更能反映学校当前的发展方向。"
                                      ]
                                }
                          ],
                          "anchor": "step3"
                    },
                    {
                          "heading": "第四步：根据自己的情况排列优先级",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "筛选学校时，可以重点比较以下四个方面。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "筛选维度",
                                            "重点问题"
                                      ],
                                      "rows": [
                                            [
                                                  "**职位匹配**",
                                                  "学校是否真正开设该科目？职位是否符合证书？课程已建立，还是需要从零搭建？是否要承担多个年级或额外职责？"
                                            ],
                                            [
                                                  "**学生群体**",
                                                  "你是否熟悉多语言学习者、融合课堂、初学者、高年级、考试课程或 AP 课程？"
                                            ],
                                            [
                                                  "**通勤现实性**",
                                                  "实际通勤时间、换乘次数和早晚高峰是否可以长期承受？"
                                            ],
                                            [
                                                  "**面试价值**",
                                                  "即使学校不是第一选择，是否能帮助你练习自我介绍、了解校长关注点、准备 Demo Lesson，并明确自己的工作底线？"
                                            ]
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "例如，同样是中文教师职位，一所学校可能希望新教师从零建立项目，另一所学校则可能已有完整课程。前者更看重课程开发和项目推进能力，后者更关注课堂执行和课程衔接。"
                                },
                                {
                                      "type": "text",
                                      "text": "求职初期不必等待“完美学校”才开始行动，但应避开明显不符合证书、地点或个人底线的职位。"
                                }
                          ],
                          "anchor": "step4"
                    },
                    {
                          "heading": "第五步：主动联系学校",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "纽约公校招聘具有较强的校本特点。通过 New Teacher Finder 找到合适职位后，可以主动联系学校，说明自己为什么适合该岗位。后续环节通常可能包括面试和 Demo Lesson。"
                                },
                                {
                                      "type": "subheading",
                                      "text": "联系前的基础材料"
                                },
                                {
                                      "type": "list",
                                      "ordered": false,
                                      "items": [
                                            "一至两页的教师 Resume，以及可针对学校快速修改的 Cover Letter",
                                            "教师资格信息和两至三位推荐人",
                                            "Teaching Portfolio、可调整的 Demo Lesson 和简短自我介绍"
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "求职邮件的核心内容"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "邮件要素",
                                            "写法"
                                      ],
                                      "rows": [
                                            [
                                                  "**具体职位**",
                                                  "明确写出申请的科目和岗位"
                                            ],
                                            [
                                                  "**资格与经验**",
                                                  "说明证书状态、教学方向和相关学生或课程经验"
                                            ],
                                            [
                                                  "**学校匹配点**",
                                                  "用一两句话指出你关注的项目、理念或学生群体"
                                            ],
                                            [
                                                  "**材料与下一步**",
                                                  "附上 Resume，并表达希望进一步交流的意愿"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "邮件模板",
                                      "lines": [
                                            "Dear Principal [Last Name],",
                                            "I am writing to express my interest in the Mandarin teaching position\nat [School Name]. I am certified/on track to be certified in\n[Certification Area] and have experience teaching [student group or\ncourse]. I was particularly interested in your school's [specific\nprogram, value, or student population].",
                                            "I have attached my resume for your consideration and would appreciate\nthe opportunity to discuss how my experience could support your students\nand school community."
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "不要向所有学校发送完全相同的邮件。即使只增加一两句话，说明你了解学校的课程、学生或教育理念，也会让邮件更具体。"
                                }
                          ],
                          "anchor": "step5"
                    },
                    {
                          "heading": "第六步：等待期间继续推进",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "没有立即收到回复，不一定代表申请失败。学校可能仍在确认预算、审批职位、处理毕业和考试安排，或调整课程需求。"
                                },
                                {
                                      "type": "text",
                                      "text": "等待期间，可以继续申请其他学校、参加招聘会、联系校友和实习导师、修改求职材料、准备常见面试问题和 Demo Lesson，并整理推荐人信息。经过合理间隔后，可以发送一封简短、礼貌的 follow-up 邮件。"
                                },
                                {
                                      "type": "subheading",
                                      "text": "Networking 也是求职的一部分"
                                },
                                {
                                      "type": "text",
                                      "text": "Networking 的作用是帮助你获得真实信息、了解招聘时间，并让更多教育工作者知道你的专业方向。"
                                },
                                {
                                      "type": "callout",
                                      "title": "可以从这些渠道开始",
                                      "lines": [
                                            "学校与专业网络：教授、项目导师、校友、Student\nTeaching/实习学校、招聘会、教师社群和教育会议。",
                                            "线上与社区网络：LinkedIn、微信群、小红书、家长和社区教育机构。",
                                            "建立关系的关键：长期参与、主动交流和可靠的工作表现。"
                                      ]
                                }
                          ],
                          "anchor": "step6"
                    },
                    {
                          "heading": "求职行动清单",
                          "blocks": [
                                {
                                      "type": "checklist",
                                      "items": [
                                            "明确目标年级、教学科目和可接受的学校类型",
                                            "确认教师资格证书状态",
                                            "更新 Resume、基础 Cover Letter 和推荐人信息",
                                            "完成 NYCPS 教师申请",
                                            "建立学校追踪表并调查目标学校",
                                            "主动联系招聘负责人",
                                            "准备面试和 Demo Lesson",
                                            "持续参加招聘与 Networking 活动",
                                            "按合理间隔发送 follow-up 邮件"
                                      ]
                                }
                          ],
                          "anchor": "checklist"
                    },
                    {
                          "heading": "最后的建议",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "纽约教师求职很少是一条完全线性的道路。申请系统、学校邮件、招聘会、实习经历和专业人脉，往往会同时推动进程。最重要的是把模糊目标转化为可执行的问题。"
                                },
                                {
                                      "type": "list",
                                      "ordered": true,
                                      "items": [
                                            "我可以合法并合规地申请哪些职位？",
                                            "我适合教授哪些学生？",
                                            "我能够为学校解决什么问题？",
                                            "哪些经历最能证明我的教学能力？",
                                            "我接下来可以联系哪三所学校？"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "下一步",
                                      "lines": [
                                            "先选出三所符合资格和通勤条件的学校，完成调查，并分别写出一句具体的匹配理由。这样可以立即进入可执行的申请节奏。"
                                      ]
                                }
                          ]
                    },
                    {
                          "heading": "资料来源",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "本文根据 EduVenture“纽约教师求职分享会 Session 1”课件整理。分享人为 Zexiu Li、Minjia Zhang，实习与教育经验部分由嘉宾 Jinghao Xu 分享。招聘系统和流程信息参考 NYC Public Schools 与 TeachNYC 官方资料。相关规定、申请窗口和职位信息可能更新，请以申请时的官方信息为准。"
                                }
                          ]
                    }
              ],
              "nav": [
                    {
                          "label": "1. 明确求职方向",
                          "anchor": "step1"
                    },
                    {
                          "label": "2. 选对申请系统",
                          "anchor": "step2"
                    },
                    {
                          "label": "3. 建立学校名单",
                          "anchor": "step3"
                    },
                    {
                          "label": "4. 排列申请优先级",
                          "anchor": "step4"
                    },
                    {
                          "label": "5. 主动联系学校",
                          "anchor": "step5"
                    },
                    {
                          "label": "6. 等待期间继续推进",
                          "anchor": "step6"
                    },
                    {
                          "label": "求职行动清单",
                          "anchor": "checklist"
                    }
              ]
        },
        {
          "id": "nycps-interview-process",
          "title": "纽约公立学校教师招聘流程与面试准备",
          "summary": "纽约公校教师招聘各环节、常见面试问题与 Demo Lesson 准备要点。",
          "sections": [
            {
              "heading": "写在前面",
              "body": "完成 NYC Public Schools Certified Teacher Application，并进入 New Teacher Finder 后，申请者便进入了以学校为单位的招聘阶段。\n\n这一阶段通常没有完全统一的流程。同样是教师职位，有些学校先安排电话沟通，再进行正式面试；有些学校会直接邀请候选人到校；还有一些学校会安排多轮面试、教学任务或 Demo Lesson。\n\n因此，准备纽约公校教师面试时，重点不只是背诵标准答案，而是提前建立一套可以灵活调用的个人经历、教学案例和专业表达。\n\n本文根据 EduVenture“纽约教师求职分享会 Session 1”整理，并结合 NYCPS 当前官方招聘与面试指南，帮助申请者了解招聘流程、准备常见问题，并更有针对性地完成 Demo Lesson。"
            },
            {
              "heading": "一、纽约公校教师招聘的基本流程",
              "body": "通过 NYCPS 教师申请审核后，候选人可以进入 New Teacher Finder 搜索职位，学校招聘负责人也可以查看符合条件的候选人。\n\n官方流程通常包括：\n\n1. 完成 NYCPS Certified Teacher Application\n2. 通过资格审核\n3. 进入 New Teacher Finder\n4. 搜索并联系招聘学校\n5. 参加学校安排的面试\n6. 根据学校要求完成 Demo Lesson\n7. 提交推荐人或其他材料\n8. 确认职位、证书和入职要求\n9. 收到并接受正式 Offer\n10. 完成指纹、背景审查和入职手续\n\nNYCPS目前明确说明，申请通过审核后，候选人和校长可以通过 New Teacher Finder 相互搜索和联系；学校可能要求候选人完成面试与 Demo Lesson。\n\n需要注意的是，通过 NYCPS 的初步申请审核，并不代表已经获得职位。最终招聘决定通常由具体学校及其招聘团队作出。"
            },
            {
              "heading": "二、你可能会经历哪些面试形式？",
              "body": "不同学校的规模、职位需求和行政结构不同，招聘形式也会有所变化。"
            },
            {
              "heading": "1. Phone Screening",
              "body": "有些学校会先安排一次简短的电话或线上沟通，常见内容包括：\n\n• 目前的教师资格状态\n• 可以教授的科目和年级\n• 是否能够在学校要求的时间开始工作\n• 为什么申请这所学校\n• 过去的教学或学生工作经历\n• 是否愿意参加下一轮面试或 Demo Lesson\n\nPhone Screening通常时间不长，但它决定了学校是否愿意进一步了解你。回答应清晰、直接，并准备好一段一分钟左右的自我介绍。"
            },
            {
              "heading": "2. 第一轮正式面试",
              "body": "正式面试可能由以下人员参加：\n\n• Principal\n• Assistant Principal\n• Department Chair\n• Instructional Coach\n• 年级组或学科组教师\n• 其他招聘委员会成员\n\n分享会主讲人提到，在规模较大的学校，学科职位可能主要由 Assistant Principal 或 Department 团队负责面试；在规模较小的学校，校长、行政人员和教师可能同时参与。有时也可能出现群面或多位候选人共同参加的招聘活动。"
            },
            {
              "heading": "3. 第二轮面试或团队面试",
              "body": "进入下一轮后，问题通常会更加具体，例如：\n\n• 你将如何教授某个年级或课程？\n• 如何与同年级教师共同备课？\n• 如何处理持续影响课堂的学生行为？\n• 如何根据学生数据调整教学？\n• 如何支持ENL学生或有特殊学习需求的学生？\n• 如果需要从零搭建课程，你会如何开始？\n\n这一轮往往更关注候选人与学校实际需求的匹配程度。"
            },
            {
              "heading": "4. Demo Lesson",
              "body": "并非所有学校都会要求 Demo Lesson，但它是教师招聘中非常常见的环节。试讲可能安排在第一次面试当天，也可能在面试通过后另行安排。"
            },
            {
              "heading": "三、面试前应该准备什么？",
              "body": "NYCPS建议候选人在面试前调查学校、准备自我介绍、练习常见问题、准备示范课程，并携带更新后的Resume。官方也建议候选人准备一至三个可以向面试官提出的问题。"
            },
            {
              "heading": "1. 调查学校",
              "body": "至少了解以下信息：\n\n• 学校的使命和教学理念\n• 学生年级和学生人数\n• 学生语言与文化背景\n• 学校的特色课程\n• 学校是否开设AP、双语、ENL或其他项目\n• 招聘职位所属的学科或年级团队\n• 学校近期活动和发展重点\n\n调查学校的目的，是让你能够回答两个重要问题：\n\n为什么是这所学校？为什么你适合这所学校？\n\n不要只说“贵校非常优秀”或“我很喜欢多元文化”。应结合具体信息，例如：\n\n我注意到贵校非常重视项目式学习。过去在学生教学期间，我曾设计一个以社区采访为核心的语言项目，因此我希望进一步了解贵校如何在世界语言课程中开展跨学科学习。"
            },
            {
              "heading": "2. 准备一分钟自我介绍",
              "body": "自我介绍可以采用以下结构：\n\n1. 你目前的身份和教师资格方向\n2. 你主要教授的科目或学生群体\n3. 一项最能体现你优势的经历\n4. 你为什么申请这所学校\n\n例如：\n\nI am completing my master’s degree in TESOL and am on track to receive my New York State certification. During student teaching, I worked with multilingual high school students and designed lessons that combined language objectives with project-based learning. I am particularly interested in your school because of its strong focus on college readiness and support for multilingual learners.\n\n自我介绍应根据学校进行调整，不建议每次使用完全相同的版本。"
            },
            {
              "heading": "3. 建立自己的“教学案例库”",
              "body": "面试前，准备六至八个具体案例。每个案例可以控制在一至两分钟内。\n\n建议覆盖：\n\n• 一次成功的课堂活动\n• 一次课堂管理挑战\n• 一次根据学生表现调整教学\n• 一次支持不同水平学生的经历\n• 一次与教师或家长合作的经历\n• 一次接受反馈并改进教学的经历\n• 一次课程或活动设计经历\n• 一次失败、反思与重新尝试的经历\n\n回答时可以使用简化的STAR结构：\n\n• **Situation：** 当时是什么情况？\n• **Task：** 你需要解决什么问题？\n• **Action：** 你具体做了什么？\n• **Result and Reflection：** 结果如何？你学到了什么？\n\n教师面试尤其重视最后的反思。一个案例不需要以“完美成功”结束，但应说明你如何观察学生、调整策略并改进教学。"
            },
            {
              "heading": "四、常见教师面试问题",
              "body": "NYCPS官方提供的示例问题主要覆盖学科知识、教学实践、个人教育理念、团队合作和学生理解。"
            },
            {
              "heading": "教学理念与个人背景",
              "body": "• Why did you become a teacher?\n• How would you describe yourself as a teacher?\n• What can you contribute to our school?\n• What do you know about our school?\n• Why are you interested in this position?\n\n回答这类问题时，应把个人故事与学校需求联系起来。不要只说“我喜欢孩子”或“我从小就想当老师”，而应进一步说明哪些经历影响了你的教育理念。"
            },
            {
              "heading": "课程与教学设计",
              "body": "• Describe your approach to lesson planning.\n• How do you make your subject relevant to students’ lives?\n• How do you know whether a lesson is rigorous and engaging?\n• How do you assess student learning?\n• How do you use assessment results to plan your next lesson?\n\n回答时可以说明：\n\n• 学习目标如何与活动和评估对应\n• 如何检查学生是否理解\n• 如何使用Exit Ticket、观察记录或学生作品\n• 如何根据学生表现调整下一步教学"
            },
            {
              "heading": "Classroom Management",
              "body": "• What classroom management strategies do you use?\n• How would you respond to a student who repeatedly interrupts\n\ninstruction?\n\n• How do you build classroom routines?\n• How do you create a respectful learning environment?\n\n避免只回答“我会建立规则”或“我会和学生谈话”。更有效的回答应包括：\n\n• 如何提前教授课堂常规\n• 如何清楚表达行为期待\n• 如何使用积极强化\n• 如何了解行为背后的原因\n• 如何记录问题并与相关人员合作\n• 如何在维持课堂秩序的同时保护学生尊严"
            },
            {
              "heading": "Differentiation与学生支持",
              "body": "• How do you support students at different proficiency levels?\n• How do you support multilingual learners?\n• How do you adapt instruction for students with disabilities?\n• What do you do when students do not understand?\n\n可以结合以下方法：\n\n• Visual supports\n• Sentence frames\n• Modeling\n• Chunking\n• Choice of output\n• Small-group instruction\n• Flexible grouping\n• Checking for understanding\n• Modified texts or tasks\n\n使用 UDL、UbD、Scaffolding 或 Differentiation 等专业词汇时，应能够用具体课堂例子解释，而不是只罗列术语。"
            },
            {
              "heading": "合作与反馈",
              "body": "• How do you feel about collaborative planning?\n• What makes an effective co-teacher?\n• How do you respond to feedback?\n• Describe a time when you worked as part of a team.\n• How would you communicate with families?\n\n学校希望了解候选人能否加入团队、分享责任并接受反馈。回答时可以强调：\n\n• 主动沟通\n• 共同制定目标\n• 明确分工\n• 尊重不同观点\n• 根据学生需求调整合作方式"
            },
            {
              "heading": "五、国际申请者如何呈现自己的经历？",
              "body": "很多国际学生担心自己缺少美国全职教学经历，因此在面试中不断强调“我还没有经验”。\n\n更有效的方式，是把已有经历转换成学校能够理解的专业证据。\n\n可以使用的经历包括：\n\n• 国内学校教学\n• 培训机构或语言中心教学\n• Student Teaching\n• Classroom Observation\n• Tutoring\n• Afterschool Program\n• Summer Camp\n• 志愿者项目\n• 课程设计项目\n• Research Assistant工作\n• 成人语言教学\n• 文化活动或学生社团组织\n\n分享会主讲人特别提醒，候选人完全可以介绍中国或其他国家的教育经历。重点是说明这些经历如何培养了你的课程设计、沟通、组织、评估或课堂管理能力。\n\n例如，不要只说：\n\nI taught English in China for two years.\n\n可以进一步说明：\n\nIn my previous teaching position in China, I taught classes of more than 40 students. That experience helped me develop clear routines, structured group work and multiple ways to check student understanding during a large-group lesson."
            },
            {
              "heading": "六、Demo Lesson主要考察什么？",
              "body": "根据 NYCPS 官方指南，Demo Lesson主要帮助招聘团队观察候选人能否：\n\n• 将复杂内容分解为可学习的步骤\n• 清楚、自信地呈现教学内容\n• 与学生建立互动\n• 检查学生理解情况\n• 在学生不理解时及时调整\n• 管理课堂\n• 设计完整且可执行的教学流程"
            },
            {
              "heading": "试讲前必须确认的问题",
              "body": "收到Demo邀请后，应向学校确认：\n\n• 教授哪个年级和课程？\n• 学生大约有多少人？\n• 学生目前正在学习什么？\n• 试讲时间多长？\n• 是否有指定的学习目标或标准？\n• 教室中有哪些材料或设备？\n• 有多少准备和布置时间？\n• 试讲对象是真实学生还是招聘委员会？\n• 是否需要提交正式Lesson Plan？\n\nNYCPS也建议候选人准备不依赖投影仪或Smart Board的备用方案，并提前准备需要使用的材料和复印件。"
            },
            {
              "heading": "一个清晰的短试讲结构",
              "body": "对于15至25分钟的Demo Lesson，可以参考："
            },
            {
              "heading": "1. Warm-up或激活旧知识",
              "body": "用图片、问题、简单任务或快速投票了解学生已有知识。"
            },
            {
              "heading": "2. 明确学习目标",
              "body": "用学生能够理解的语言告诉他们本节课要学什么、最终需要完成什么。"
            },
            {
              "heading": "3. Modeling",
              "body": "教师展示新知识或任务完成过程。"
            },
            {
              "heading": "4. Guided Practice",
              "body": "学生在句型、示例或教师支持下完成练习。"
            },
            {
              "heading": "5. Independent or Collaborative Practice",
              "body": "学生独立或合作运用新知识。"
            },
            {
              "heading": "6. Check for Understanding",
              "body": "通过提问、观察、手势、白板或简短任务判断学生是否理解。"
            },
            {
              "heading": "7. Exit Ticket或总结",
              "body": "让学生展示自己是否达到学习目标。\n\n短试讲不需要塞入过多内容。完整、清楚并能够看到学生学习过程，比展示大量知识更重要。"
            },
            {
              "heading": "七、面试中应该怎样讲好自己的故事？",
              "body": "分享会中有一个重要建议：\n\n讲好自己的故事，用具体实例打动面试官。\n\n一个好的求职故事应回答：\n\n• 你为什么选择教育？\n• 你为什么选择这个学科？\n• 你的经历如何塑造了你的教学方式？\n• 你能够为这所学校和学生带来什么？\n• 你目前仍在学习和改进什么？\n\n故事需要真实，但也需要与职位相关。\n\n例如，从其他行业转入教育的申请者，可以说明原来的经历如何帮助自己：\n\n• 分析数据\n• 解决问题\n• 管理项目\n• 与不同背景的人合作\n• 设计清晰流程\n• 使用科技工具\n\n不要把非传统背景当成需要道歉的缺点。应说明它如何成为你的教学优势。"
            },
            {
              "heading": "八、准备推荐人和求职材料",
              "body": "NYCPS初始教师申请要求填写一位推荐人，并上传Resume及相关教师资格证明。\n\n进入学校招聘阶段后，分享会主讲人建议提前准备两至三位可以联系的推荐人。\n\n推荐人可以包括：\n\n• Student Teaching指导教师\n• Cooperating Teacher\n• University Supervisor\n• 教授或项目负责人\n• 现任或前任学校主管\n• 教育项目负责人\n\n在提交推荐人信息前，应提前联系对方，并提供：\n\n• 申请职位\n• 学校名称\n• 最新Resume\n• 希望对方重点说明的经历\n• 可能收到联系的时间\n\n面试当天还可以准备：\n\n• 数份Resume\n• Teaching Portfolio\n• Sample Lesson Plan\n• 学生作品样本，注意删除个人信息\n• 教师资格证明\n• 推荐人名单"
            },
            {
              "heading": "九、候选人也需要向学校提问",
              "body": "面试也是候选人了解职位的机会。\n\n可以询问：\n\n• What are the main priorities for this position?\n• What courses and grade levels would I teach?\n• How does the department collaborate and plan?\n• What support is available for new teachers?\n• Is there a formal mentoring program?\n• What professional development opportunities are available?\n• What curriculum materials are currently used?\n• How much flexibility would I have in curriculum development?\n• What would success in this role look like during the first year?\n• What is the anticipated hiring timeline?\n\n避免只询问官网已经明确说明的内容。问题应表现出你对学生、教学和学校发展的关注。\n\n分享会主讲人也强调，候选人应主动确认职位范围、Professional Development和未来发展机会。"
            },
            {
              "heading": "十、面试后的Follow-up",
              "body": "完成面试后，建议在一至两个工作日内发送一封个性化的感谢邮件。\n\n邮件可以包括：\n\n1. 感谢对方安排面试\n2. 提及面试中让你印象深刻的一点\n3. 再次说明自己与职位的匹配之处\n4. 表达继续参与招聘流程的意愿\n5. 询问预计的招聘时间线\n\nNYCPS官方同样建议候选人在面试后的一至两天内发送感谢邮件；如果Demo Lesson单独安排，也应在试讲后发送相应的感谢邮件。\n\n学校没有立即回复，不一定代表你没有通过。招聘可能受到预算、课程安排、内部审批和其他候选人面试时间的影响。\n\n在等待期间，应继续申请其他学校，不建议停止整个求职进程。"
            },
            {
              "heading": "面试前",
              "body": "• 调查学校使命、学生和课程\n• 准备一分钟自我介绍\n• 准备六至八个教学案例\n• 练习常见面试问题\n• 准备一份可调整的Demo Lesson\n• 更新Resume和Teaching Portfolio\n• 联系推荐人\n• 准备一至三个反问学校的问题\n• 确认面试时间、地点和参与人员"
            },
            {
              "heading": "面试当天",
              "body": "• 提前到达或提前测试线上设备\n• 携带Resume和教学材料\n• 对遇到的每一位工作人员保持专业和礼貌\n• 使用具体例子回答问题\n• 记录学校提供的重要信息\n• 询问下一步流程和招聘时间线"
            },
            {
              "heading": "面试后",
              "body": "• 记录面试问题\n• 完成自我反思\n• 一至两个工作日内发送感谢邮件\n• 更新求职追踪表\n• 按约定时间进行Follow-up\n• 继续申请其他职位"
            },
            {
              "heading": "最后的建议",
              "body": "学校招聘团队并不只是在寻找一个“回答所有问题都正确”的候选人。\n\n他们通常希望看到一位能够：\n\n• 清楚解释自己的教学决定\n• 理解学生需求\n• 与团队合作\n• 接受反馈\n• 面对问题时保持冷静\n• 持续反思和成长\n• 真正愿意了解学校社区\n\n的教师。\n\n教师面试准备的核心，是把自己的教育理念转化为具体、真实、可验证的课堂行动。\n\n当你能够清楚地说明“我做过什么、为什么这样做、学生有什么变化、下一次我会如何改进”时，你的回答就会比单纯使用专业术语更有说服力。"
            },
            {
              "heading": "资料来源",
              "body": "本文根据 EduVenture“纽约教师求职分享会 Session 1”课件整理。招聘流程、面试问题和Demo Lesson建议参考 NYC Public Schools 与 TeachNYC 官方招聘资源。具体招聘流程可能因学校、职位和学年而异，请以招聘学校提供的信息为准。"
            }
          ]
        },
        {
          "id": "building-us-teaching-experience",
          "title": "国际学生如何积累美国教育与教学经验",
          "summary": "如何通过实习、辅导、研究等经历积累有效的求职证据，以及 CPT/OPT 的基本概念。",
          "sections": [
            {
              "heading": "写在前面",
              "body": "很多国际学生在准备美国教师求职时，都会担心一个问题：\n\n我没有美国学校的全职教学经验，学校为什么要选择我？\n\n美国本地经验确实能够帮助招聘团队更快地了解你是否熟悉当地课堂、学生群体和学校文化。但是，“美国教育经验”并不只包括正式的全职教师工作。\n\n以下经历都可能成为有效的求职证据：\n\n• Student Teaching\n• Classroom Observation\n• Tutoring\n• Afterschool Program\n• Summer Program\n• 成人教育\n• 社区语言学校\n• 教育类志愿服务\n• Research Assistant\n• Curriculum Development\n• 学生社团和文化活动\n• 与学校、家庭或社区合作的项目\n\nEduVenture纽约教师求职分享会建议，教育实习不只是为了增加Resume上的一行经历。它还能帮助未来教师在真实环境中应用课程知识、了解不同利益相关者、探索研究兴趣、建立专业人脉，并接触最新的教育实践。\n\n关键是有计划地选择经历，并学会说明自己在这些经历中真正完成了什么。"
            },
            {
              "heading": "一、为什么美国本地教育经验有帮助？",
              "body": "美国学校招聘教师时，通常不仅关注申请者“在哪里工作过”，也关注申请者是否能够提供以下证据：\n\n• 是否真正接触过学生\n• 是否观察和理解过美国课堂\n• 是否能够设计并执行教学活动\n• 是否熟悉课堂管理和学校常规\n• 是否能够与教师、家长和学校工作人员合作\n• 是否能够根据学生表现调整教学\n• 是否能够接受反馈并持续改进\n\n一段高质量的短期经历，可能比一段内容模糊的长期经历更有价值。\n\n例如，以下表述信息有限：\n\nVolunteered at an afterschool program.\n\n更有说服力的表述是：\n\nDesigned and facilitated weekly small-group literacy activities for 12 multilingual middle school students and adjusted instructional supports based on student participation and written work.\n\n第二种写法清楚说明了：\n\n• 服务对象\n• 工作频率\n• 具体职责\n• 使用的教学方法\n• 如何观察和调整教学\n\n因此，积累经验时要同时思考两个问题：\n\n1. 我能够在这里学习和实践什么？\n2. 以后我可以用什么具体证据介绍这段经历？"
            },
            {
              "heading": "1. Student Teaching",
              "body": "Student Teaching通常是教师教育项目中最直接的课堂实践经历。\n\n在这一阶段，你可能有机会：\n\n• 观察合作教师\n• 了解学校常规\n• 设计Lesson Plan\n• 教授部分或完整课程\n• 批改学生作业\n• 参与团队会议\n• 与家庭沟通\n• 接受指导教师和大学导师的反馈\n\n不要把Student Teaching仅仅视为毕业要求。它也可能帮助你获得：\n\n• 推荐人\n• 教学材料\n• 学生作品样本\n• 面试案例\n• Demo Lesson灵感\n• 学校招聘信息\n\n应注意保护学生隐私。用于Teaching Portfolio的材料需要删除学生姓名和其他身份信息，并遵守学校规定。"
            },
            {
              "heading": "2. Tutoring",
              "body": "一对一或小组辅导可以帮助你练习：\n\n• 判断学生的具体困难\n• 设计个别化支持\n• 提供即时反馈\n• 记录学生进步\n• 调整语言和教学节奏\n• 与学生建立稳定关系\n\nTutoring尤其适合刚开始积累经验的学生，因为准备和管理范围相对明确。\n\n但是，面试中不要只说“我辅导过学生”。应进一步说明：\n\n• 学生年龄\n• 学习目标\n• 你使用了什么方法\n• 学生遇到了什么困难\n• 你如何判断学生有所进步"
            },
            {
              "heading": "3. Afterschool Program与Summer Program",
              "body": "课后项目和暑期项目常见于：\n\n• 公立学校\n• 社区组织\n• 语言学校\n• 博物馆\n• 图书馆\n• 非营利机构\n• 大学项目\n\n这些项目可以帮助你积累：\n\n• 小组教学\n• 活动设计\n• 行为管理\n• 项目式学习\n• 文化活动组织\n• 家庭和社区沟通\n\n课后项目通常比正式课堂更灵活，也更需要教师通过活动维持学生参与。"
            },
            {
              "heading": "4. 社区语言学校和中文学校",
              "body": "对于准备教授中文的申请者，社区中文学校可以提供比较直接的学科经验。\n\n你可能接触到：\n\n• Heritage Learners\n• 非华裔中文学习者\n• 不同年龄段学生\n• 周末课程\n• 文化活动\n• 家庭参与\n\n面试时应说明该环境与目标学校的不同，同时突出可迁移的能力。例如：\n\n• 如何设计语言输出任务\n• 如何处理水平差异\n• 如何使用目标语言\n• 如何结合文化内容\n• 如何与家长沟通"
            },
            {
              "heading": "5. 成人教育",
              "body": "成人语言学习者在动机、生活经验、课堂互动和学习需求方面，与K–12学生存在明显区别。\n\n成人教育仍然能够帮助申请者练习：\n\n• 需求分析\n• 清楚解释语言\n• 设计真实情境任务\n• 调整教学节奏\n• 提供尊重且具体的反馈\n• 支持不同教育背景的学习者\n\n申请K–12职位时，可以说明哪些技能能够迁移，同时表明自己理解儿童和青少年课堂需要不同的教学与管理方式。"
            },
            {
              "heading": "6. Homeschooling与家庭教育支持",
              "body": "部分申请者可能通过家庭教育、私人辅导或家庭学习项目积累经验。\n\n这类经历可以证明：\n\n• 个别化课程设计\n• 学习进度管理\n• 家庭沟通\n• 跨学科学习\n• 灵活调整内容\n\n同时需要注意，不要在Resume或面试中透露学生和家庭的私人信息。"
            },
            {
              "heading": "三、研究类经验能否帮助教师求职？",
              "body": "可以。\n\n分享会课件将教育相关机会分为两类：\n\n• Teaching或Tutoring相关\n• Research相关\n\n研究类工作可能包括：\n\n• Data Collection\n• Data Analysis\n• Literature Review\n• Interview或Survey\n• Paper Drafting\n• Curriculum Research\n• 教育项目评估\n\n这些工作虽然不一定包括直接教学，但可以培养教师岗位同样需要的能力。\n\n例如：\n\n研究经历 — 可以转化的教师能力\n分析学生数据 — 根据数据调整教学\n进行访谈 — 主动倾听学生和家庭\n文献综述 — 使用研究支持教学决策\n项目协调 — 管理课程、活动和时间线\n撰写报告 — 清楚记录学生进展\n研究多语言学习者 — 理解语言、文化与公平问题"
            },
            {
              "heading": "面试中如何介绍研究经历？",
              "body": "不要只描述研究主题，还要说明你的角色。\n\n例如：\n\nAs a research assistant, I coded interview data from multilingual students and identified recurring challenges related to classroom participation. This experience strengthened my ability to listen carefully to student perspectives and consider how classroom structures affect participation.\n\n这种回答把研究工作与教师岗位需要的学生理解能力连接了起来。"
            },
            {
              "heading": "四、志愿服务是否有价值？",
              "body": "有价值，但必须具备实际内容。\n\n招聘学校通常不会只因为“志愿者”这个身份而认可一段经历。真正重要的是你是否：\n\n• 持续参与\n• 承担明确职责\n• 与学生或教育工作者合作\n• 解决具体问题\n• 接受监督和反馈\n• 能够说明学习成果\n\n例如，偶尔参加一次文化活动，可以作为补充经历；持续一个学期负责学生小组、课程活动或家庭沟通，则更容易成为面试中的完整案例。"
            },
            {
              "heading": "选择志愿机会前，可以询问：",
              "body": "• 我的具体职责是什么？\n• 是否会直接接触学生？\n• 是否有人提供指导？\n• 是否可以观察课堂或参与备课？\n• 每周需要多少时间？\n• 项目将持续多久？\n• 是否可以获得反馈或推荐？\n• 我是否需要完成背景审查或培训？"
            },
            {
              "heading": "五、国际学生必须注意：无薪不等于无需授权",
              "body": "分享会课件提到，可以按照“有薪”和“无薪”对机会进行分类。这个思路有助于整理职位，但在F-1身份问题上，仅看是否领取工资并不够。\n\n美国国土安全部对“志愿者”的解释指出，F-1或M-1学生可以参与真正的志愿服务；但如果该岗位通常应该由雇主正式聘人完成，学生仍然需要取得适当的工作授权。\n\n因此：\n\n• 无薪实习不一定自动属于志愿服务\n• 不领取工资也可能被视为工作\n• “Volunteer”“Intern”“Fellow”或“Assistant”等职位名称不能单独决定是否需要授权\n• 学分、工作职责、雇主类型和岗位性质都可能影响判断\n\n美国劳工部也使用“主要受益人测试”等因素判断营利性机构的无薪实习是否属于合法的教育实习，包括培训性质、是否与正式课程相关、是否适应学校时间、是否取代正式员工等。具体情况需要结合岗位实际判断。"
            },
            {
              "heading": "最安全的做法",
              "body": "在开始任何校外实习、辅导、研究、志愿服务或教学活动前：\n\n1. 把完整职位描述发给学校的DSO\n2. 说明是否有薪、是否获得学分、每周工作时间和工作地点\n3. 询问是否需要CPT、OPT或其他授权\n4. 获得必要批准后再开始\n5. 保存Offer Letter、I-20、EAD和相关记录\n\nDHS明确提醒F-1学生，在决定工作时应首先联系自己的DSO；未经授权的工作可能导致SEVIS记录被终止。\n\n不同学校可能有自己的CPT课程、学分和申请流程。朋友或同学的情况不能代替DSO根据你个人记录作出的判断。"
            },
            {
              "heading": "六、CPT和OPT的基本区别",
              "body": "以下内容仅用于帮助理解概念，不能代替学校DSO或专业法律意见。"
            },
            {
              "heading": "CPT：Curricular Practical Training",
              "body": "CPT通常用于课程期间，与专业课程或项目要求直接相关的实习、合作教育或实践。\n\nUSCIS说明，CPT必须是既定课程体系中的组成部分，由学校DSO批准并记录在Form I-20上。学生不能早于I-20所注明的CPT开始日期工作。CPT可以是兼职或全职；累计一年或以上的全职CPT会影响同一学历层级的Post-completion OPT资格。\n\n常见特点包括：\n\n• 在完成学位前使用\n• 与专业和课程直接相关\n• 通常需要具体雇主和Offer\n• 由学校DSO授权\n• 可能需要注册实习课程或获得学分\n• 必须在批准日期和雇主范围内进行"
            },
            {
              "heading": "OPT：Optional Practical Training",
              "body": "OPT是与专业领域直接相关的实践工作授权，可以在毕业前或毕业后使用。\n\nUSCIS说明，OPT需要DSO推荐，并由学生向USCIS提交Form I-765；学生获得有效EAD并到达授权开始日期后才能开始相关工作。一般OPT可以提供最多12个月的实践时间。\n\nPost-completion OPT期间，工作必须与所学专业直接相关。普通OPT可以包括符合劳动法规的无薪实习或志愿形式，但仍需满足OPT的专业相关性和工作时间要求。"
            },
            {
              "heading": "On-campus Employment",
              "body": "符合条件的F-1学生可以从事校内工作。学期期间通常每周不能超过20小时，学校放假期间可以全职工作。校内岗位的具体资格仍应先与DSO确认。"
            },
            {
              "heading": "一张简化对照表",
              "body": "类型 — 常见时间 / 核心要求 / 谁批准\nOn-campus Employment — 在校期间 / 符合校内工作定义和工时要求 / 学校/DSO确认\nCPT — 完成学位前 / 与课程体系及专业直接相关 / DSO\nPre-completion OPT — 完成学位前 / 与专业直接相关 / DSO推荐＋USCIS\nPost-completion OPT — 毕业后 / 与专业直接相关 / DSO推荐＋USCIS\n真正的志愿服务 — 视情况而定 / 无报酬，且岗位性质不能构成未经授权的就业 / 应先咨询DSO"
            },
            {
              "heading": "七、从哪里寻找教育和教学机会？",
              "body": "EduVenture分享会列出的渠道包括：\n\n• Handshake\n• 院系教授和项目邮件\n• 学校或院系Listserv\n• LinkedIn\n• Indeed\n• 实习导师和Placement Mentor\n• 校友和教师社群\n• 志愿者项目\n• 专业协会和教育机构\n\n分享会也建议提前关注部分大型教育组织和研究机构的暑期申请窗口，因为部分项目会在冬季至初春截止。"
            },
            {
              "heading": "1. 学校内部渠道",
              "body": "优先查看：\n\n• Career Center\n• Handshake\n• 教育学院Newsletter\n• 教授转发的机会\n• Department Listserv\n• Research Center\n• 校内工作平台\n• Student Teaching Office\n• International Student Office\n\n学校内部机会通常更容易确认：\n\n• 是否与课程相关\n• 是否能够申请CPT\n• 是否有教师或研究人员监督\n• 是否能够获得推荐"
            },
            {
              "heading": "2. 主动联系教授",
              "body": "不要只发送一句：\n\nDo you have any opportunities?\n\n更有效的邮件应包括：\n\n• 你是谁\n• 你的专业和研究兴趣\n• 你对教授哪项工作感兴趣\n• 你可以贡献什么技能\n• 你每周可以投入多少时间\n• 附上Resume或CV\n\n例如：\n\nI am a TESOL master’s student interested in multilingual education and classroom participation. I recently read about your project on bilingual learners and would be interested in supporting literature review, interview coding or classroom-based data collection. I have experience with qualitative coding and Mandarin-English bilingual communication."
            },
            {
              "heading": "3. 主动联系社区组织",
              "body": "社区学校、中文学校、课后项目和非营利机构不一定会持续发布正式职位。\n\n可以发送简短邮件询问：\n\n• 是否需要Tutor\n• 是否招募课堂助教\n• 是否有周末或暑期项目\n• 是否需要课程或文化活动支持\n• 是否接受经过审核的志愿者\n\n在接受任何职责前，仍应核对工作授权和背景审查要求。"
            },
            {
              "heading": "4. 建立专业人脉",
              "body": "分享会把以下关系列为可能带来机会的重要来源：\n\n• Placement Mentor\n• 实习和志愿项目负责人\n• 大学教授\n• 校友\n• 学生家长和社区成员\n• 面试或活动中认识的教师\n• 专业微信群和其他教师社群\n\nNetworking的目标不只是获得“内推”，还包括：\n\n• 了解真实招聘时间\n• 学习行业表达\n• 获得项目反馈\n• 认识潜在推荐人\n• 发现没有公开发布的机会"
            },
            {
              "heading": "八、怎样选择真正有价值的机会？",
              "body": "面对一个实习、志愿或兼职机会，可以从五个维度评估。"
            },
            {
              "heading": "1. 专业相关性",
              "body": "它是否与你未来想申请的职位有关？\n\n例如：\n\n• 中文教学\n• ENL/TESOL\n• 双语教育\n• 特殊教育\n• 课程设计\n• 学生支持\n• 教育研究"
            },
            {
              "heading": "2. 实际职责",
              "body": "你会完成什么？\n\n“帮助老师”过于模糊。更有价值的职责包括：\n\n• 设计活动\n• 教授小组\n• 提供反馈\n• 分析学生作品\n• 观察并记录学习表现\n• 参与备课\n• 制作课程材料\n• 与项目团队合作"
            },
            {
              "heading": "3. 监督与反馈",
              "body": "是否有人：\n\n• 观察你的工作\n• 回答问题\n• 提供反馈\n• 帮助你反思\n• 在了解你表现后担任推荐人"
            },
            {
              "heading": "4. 持续时间",
              "body": "一次性活动适合扩大接触面；持续数周或一个学期的项目更容易形成：\n\n• 具体成果\n• 学生进步证据\n• 完整教学案例\n• 稳定专业关系"
            },
            {
              "heading": "5. 身份与时间可行性",
              "body": "确认：\n\n• 是否允许你的身份参与\n• 是否需要CPT或OPT\n• 是否与课程时间冲突\n• 通勤是否合理\n• 工作量是否会影响学业\n• 背景审查能否及时完成"
            },
            {
              "heading": "九、如何把中国或其他国家的教学经历转化为优势？",
              "body": "国际申请者不需要隐藏国内教学经历。\n\nEduVenture分享会明确建议，求职者可以介绍中国或其他教育环境中的相关经验，更全面地呈现自己的能力。\n\n重点是避免只描述职位名称，而要说明可迁移能力。"
            },
            {
              "heading": "示例一：大班教学",
              "body": "原始表达：\n\n在中国教过40人的英语班。\n\n转化后：\n\nManaged classes of more than 40 students by establishing clear routines, structuring collaborative tasks and using quick formative checks to monitor participation and understanding.\n\n可体现：\n\n• Classroom Management\n• Routines\n• Collaborative Learning\n• Formative Assessment"
            },
            {
              "heading": "示例二：培训机构",
              "body": "原始表达：\n\n在培训机构教过中文。\n\n转化后：\n\nDesigned differentiated Mandarin lessons for learners with varied proficiency levels and communicated regularly with families about learning goals and progress.\n\n可体现：\n\n• Differentiation\n• Lesson Planning\n• Family Communication\n• Progress Monitoring"
            },
            {
              "heading": "示例三：文化活动",
              "body": "原始表达：\n\n组织过春节活动。\n\n转化后：\n\nCoordinated a schoolwide Lunar New Year program, supervised student teams and designed interactive cultural activities for participants from different language backgrounds.\n\n可体现：\n\n• Leadership\n• Project Management\n• Student Engagement\n• Cross-cultural Communication"
            },
            {
              "heading": "十、积累经历时需要保存什么？",
              "body": "每完成一段经历，建议保存以下记录：\n\n• 项目名称和机构\n• 开始与结束日期\n• 每周投入时间\n• 学生年龄和群体\n• 具体职责\n• 设计过的Lesson Plan\n• 教学或项目材料\n• 获得的反馈\n• 学生学习证据\n• 可以量化的成果\n• 主管或推荐人信息\n• 工作授权文件\n• 背景审查和培训记录\n\n不要等到毕业求职时再回忆所有细节。\n\n可以在每次活动后记录：\n\n今天我做了什么？学生有什么反应？我遇到了什么困难？我进行了什么调整？这段经历可以回答哪一道面试问题？"
            },
            {
              "heading": "十一、如何把经历写进Resume？",
              "body": "Resume中的经历可以采用以下公式："
            },
            {
              "heading": "Action Verb + What You Did + Who You Served + Method + Result",
              "body": "例如：\n\n• Designed and taught weekly beginner Mandarin lessons for 18 middle\n\nschool students using visual supports, sentence frames and collaborative speaking tasks.\n\n• Facilitated small-group literacy instruction for multilingual learners\n\nand adjusted activities based on formative assessment data.\n\n• Analyzed qualitative interview data for a bilingual education research\n\nproject and presented key findings to the research team.\n\n• Coordinated family-facing cultural events serving more than 100\n\nstudents and community members.\n\n避免使用过于宽泛的描述：\n\n• Helped students\n• Assisted the teacher\n• Participated in activities\n• Responsible for lesson plans\n\n这些表达没有说明你具体做了什么。"
            },
            {
              "heading": "十二、如何把经历用于面试？",
              "body": "一段经历可以对应多道面试问题。\n\n例如，在课后项目中帮助一名不愿参与的学生，可以用于回答：\n\n• How do you build relationships with students?\n• How do you respond when a student refuses to participate?\n• How do you differentiate instruction?\n• Tell us about a challenge you faced.\n• How do you reflect on your teaching?\n\n可以提前为每段经历填写：\n\nSituation — 当时发生了什么？\nStudent Need — 学生需要什么支持？\nAction — 你具体做了什么？\nEvidence — 你如何知道策略是否有效？\nReflection — 下一次会怎样调整？\nInterview Questions — 这段经历可以回答哪些问题？"
            },
            {
              "heading": "开始寻找前",
              "body": "• 明确未来希望教授的科目和年龄段\n• 盘点已有教学、研究和活动经历\n• 更新Resume或CV\n• 确认F-1身份和工作授权要求\n• 联系DSO了解CPT、OPT和校内工作规定\n• 准备简短的机会询问邮件"
            },
            {
              "heading": "评估机会时",
              "body": "• 阅读完整职位描述\n• 确认具体职责\n• 确认是否直接接触学生\n• 确认是否有指导和反馈\n• 确认时间和通勤是否可行\n• 确认是否需要CPT、OPT或其他授权\n• 了解背景审查和培训要求"
            },
            {
              "heading": "参与过程中",
              "body": "• 主动观察并记录\n• 争取承担具体任务\n• 定期寻求反馈\n• 保存Lesson Plan和非敏感成果\n• 保护学生隐私\n• 与主管和同事建立专业关系"
            },
            {
              "heading": "结束后",
              "body": "• 总结职责和成果\n• 更新Resume\n• 整理面试案例\n• 请求反馈或推荐\n• 保持适当联系\n• 记录这段经历对职业方向的影响"
            },
            {
              "heading": "最后的建议",
              "body": "国际学生积累美国教育经验时，不需要等待一个“完美实习”。\n\n更有效的方法是，从可以合法参与、职责清楚并能够获得反馈的机会开始，逐步建立自己的经验组合：\n\n• 一段直接教学经历\n• 一段学生支持或社区经历\n• 一段研究或课程设计经历\n• 一位真正了解你工作的推荐人\n• 几个可以用于Resume和面试的具体案例\n\n一段经历的价值，不只取决于机构名称。\n\n真正重要的是你是否能够清楚说明：\n\n我服务了哪些学习者？我承担了什么责任？我使用了哪些教学方法？我如何判断学生的需要和进步？我从中学到了什么？这段经历如何帮助我成为更好的教师？\n\n当这些问题都有具体答案时，你就已经开始建立一套能够支持教师求职的专业证据。"
            },
            {
              "heading": "资料来源与免责声明",
              "body": "本文根据 EduVenture“纽约教师求职分享会 Session 1”中关于教育实习、教学经验和Networking的内容整理。F-1学生就业信息参考美国国土安全部、ICE、USCIS及美国劳工部公开资料。\n\n移民身份、工作授权和劳动法规具有个案差异，也可能更新。本文仅用于一般信息分享，不构成法律意见。参与任何校外工作、实习、辅导、研究或志愿活动前，请向所在学校的DSO确认个人情况；复杂情形应咨询合格的移民法律专业人士。"
            }
          ]
        },
        {
          "id": "teacher-networking",
          "title": "教师求职中的 Networking：如何建立真正有效的专业人脉",
          "summary": "如何建立并维护真正有效的专业人脉，而不只是请人内推。",
          "sections": [
            {
              "heading": "写在前面",
              "body": "教师求职过程中，很多人都会听到类似的建议：\n\n你要多Networking。你要认识学校里的人。有人推荐会更容易找到工作。\n\n这些话虽然有一定道理，却容易让刚开始求职的人产生误解。\n\nNetworking并不是突然联系一个不熟悉的人，请对方“帮我找工作”或“给我内推”。真正有效的Networking，是通过持续、专业和互相尊重的交流，让别人逐渐了解：\n\n• 你希望从事什么工作\n• 你具备哪些能力\n• 你对哪些教育问题感兴趣\n• 你是否可靠、认真并愿意学习\n• 当合适机会出现时，为什么会想到你\n\nEduVenture“纽约教师求职分享会”中提到，教师求职的人脉来源可以包括LinkedIn、微信群、大学教授、实习导师、志愿项目、学生家长、校长联系，以及求职或面试过程中认识的教师。\n\n这些渠道的共同点是：机会通常来自已经建立了一定信任的专业关系。"
            },
            {
              "heading": "一、教师求职为什么需要Networking？",
              "body": "学校招聘信息并不总是同时出现在所有平台上。\n\n一位教师、导师或校友可能提前知道：\n\n• 某所学校即将出现职位空缺\n• 某位教师准备离职或转岗\n• 学校正在寻找短期代课教师\n• 某个课后项目正在扩招\n• 一个研究团队需要助理\n• 某位校长正在参加招聘会\n• 一所学校正在搭建新的中文或ENL项目\n\nNetworking可以帮助求职者更早接触到这些信息。\n\n同时，它也能帮助你了解招聘信息之外的实际情况，例如：\n\n• 学校真正重视什么\n• 面试通常由谁负责\n• 该职位的工作范围\n• 学校是否支持新教师\n• 教师团队如何合作\n• 某类学校的招聘时间\n• 你的Resume是否符合行业习惯\n\n因此，Networking的价值不只是“获得一个职位”，还包括帮助你理解教育行业并减少求职中的信息差。"
            },
            {
              "heading": "二、Networking不等于什么？",
              "body": "建立人脉前，先避免几个常见误区。"
            },
            {
              "heading": "误区一：Networking就是请别人内推",
              "body": "如果双方几乎不认识，直接提出以下请求通常会让对方感到压力：\n\nCan you refer me to your school? Can you help me get a teaching job? Can you introduce me to your principal?\n\n更适合的第一步是询问经验和信息：\n\nI am beginning my search for Mandarin teaching positions and would appreciate hearing about your experience working in NYC schools.\n\n先建立交流，再根据关系发展判断是否适合提出更具体的请求。"
            },
            {
              "heading": "误区二：只有“厉害的人”才值得认识",
              "body": "Networking不只发生在校长、教授或招聘负责人之间。\n\n以下关系同样重要：\n\n• 同专业同学\n• 比你早毕业一两年的校友\n• Student Teaching学校的教师\n• 其他学科的新教师\n• 教育项目工作人员\n• 招聘会中认识的申请者\n• 社区学校负责人\n• 教师协会成员\n\n与你处于相近职业阶段的人，可能更了解你当前遇到的具体问题。"
            },
            {
              "heading": "误区三：只有找工作时才需要联系别人",
              "body": "如果每次联系都发生在你需要帮助的时候，关系很难长期发展。\n\n有效的专业关系需要持续维护，例如：\n\n• 分享对方可能感兴趣的资源\n• 祝贺对方的新项目或职业变化\n• 在活动后表达感谢\n• 简短更新自己的进展\n• 对曾经获得的建议进行反馈"
            },
            {
              "heading": "误区四：发出消息后没有回复，就是被拒绝",
              "body": "教师、校长和教授通常工作繁忙。没有回复可能只是：\n\n• 没有看到消息\n• 正处于考试或招聘高峰期\n• 没有合适的信息可以提供\n• 不熟悉你的目标领域\n• 暂时没有时间交流\n\n可以礼貌跟进一次。若仍无回复，继续联系其他人即可。"
            },
            {
              "heading": "三、先建立自己的“人脉地图”",
              "body": "在主动联系别人之前，可以先梳理自己已经拥有的关系。"
            },
            {
              "heading": "第一圈：直接认识的人",
              "body": "包括：\n\n• 教授\n• 项目导师\n• Student Teaching指导教师\n• University Supervisor\n• 实习负责人\n• 现任或前任主管\n• 同学\n• 校友\n• 教育项目同事\n\n这些人已经了解你的部分背景，通常是最适合开始交流的对象。"
            },
            {
              "heading": "第二圈：通过共同关系能够认识的人",
              "body": "例如：\n\n• 教授认识的学校教师\n• 校友所在学校的学科负责人\n• 实习导师的同事\n• 同学认识的招聘负责人\n• 社群成员介绍的教育工作者\n\n请共同联系人介绍时，应让对方容易完成这件事。\n\n不要只说：\n\n能不能帮我介绍一个校长？\n\n可以说：\n\n我正在了解纽约高中中文教师的招聘流程。如果您认为合适，是否可以介绍一位愿意分享10至15分钟经验的在职中文教师？我主要想了解新教师进入学校后的课程准备。\n\n目标越具体，对方越容易判断是否可以帮助。"
            },
            {
              "heading": "第三圈：尚未认识但具有共同背景的人",
              "body": "可以通过以下方式发现：\n\n• LinkedIn\n• 大学校友平台\n• 专业协会\n• 教师会议\n• 微信群\n• 学科社群\n• 小红书、B站或播客\n• 学校官网\n• 教育机构活动\n\n联系陌生人时，需要说明双方的连接点，例如：\n\n• 同一所大学\n• 同一专业\n• 相似的职业转型\n• 相同的教学科目\n• 参加过同一个会议\n• 对同一研究主题感兴趣"
            },
            {
              "heading": "1. 教授和教师教育项目",
              "body": "大学教授通常能够提供：\n\n• 学校和项目介绍\n• 教育研究机会\n• 校友联系\n• Resume反馈\n• 推荐信\n• 专业会议信息\n• 招聘时间建议\n\n联系教授时，不要把所有问题一次性发过去。\n\n可以围绕一个具体目标展开：\n\nI am beginning to apply for high school Mandarin positions. Based on my student-teaching experience, are there one or two areas you would recommend that I emphasize in my resume?\n\n教授更容易回应范围清楚的问题。"
            },
            {
              "heading": "2. Student Teaching和实习关系",
              "body": "Student Teaching学校可能是最有价值的Networking环境之一。\n\n即使学校目前没有职位，你也可以通过这段经历建立：\n\n• Cooperating Teacher关系\n• 学科组联系\n• Assistant Principal联系\n• 教学导师关系\n• 推荐人\n• 其他学校的信息来源\n\n实习期间可以主动：\n\n• 准时完成任务\n• 接受反馈\n• 参加团队会议\n• 观察其他教师\n• 协助学校活动\n• 与工作人员保持专业沟通\n• 在结束时表达感谢\n\n学校工作人员是否愿意推荐你，通常取决于他们是否真正观察过你的工作。"
            },
            {
              "heading": "3. 校友网络",
              "body": "刚毕业不久的校友往往能够提供非常实用的信息：\n\n• 最近使用过哪些求职平台\n• 面试遇到了什么问题\n• 哪些材料最重要\n• 学校招聘时间如何变化\n• 新教师第一年有哪些挑战\n• 如何处理证书和入职流程\n\n校友联系邮件可以写得简短：\n\nHello \\[Name\\],\n\nI am also a graduate student in the NYU TESOL and World Language Education program. I noticed that you are currently teaching Mandarin in an NYC high school. I am beginning my job search and would be grateful to hear about your transition from graduate school to your first teaching position.\n\nIf you are available, would you be open to a brief 15-minute conversation in the next few weeks?\n\n注意：\n\n• 说明共同背景\n• 说明为什么联系对方\n• 控制交流时间\n• 不要第一条消息就要求推荐"
            },
            {
              "heading": "4. LinkedIn",
              "body": "LinkedIn适合：\n\n• 查找校友\n• 了解教师职业路径\n• 关注学校和机构\n• 联系教育工作者\n• 展示专业项目\n• 发现招聘信息"
            },
            {
              "heading": "LinkedIn个人资料至少应包括：",
              "body": "• 清晰的Headline\n• 教师资格方向\n• 教学科目和年级\n• 教育经历\n• Student Teaching或相关经验\n• 专业技能\n• 教学项目或作品\n• 合适的个人照片\n\nHeadline示例：\n\nMandarin Teacher Candidate \\| New York State Certification in Chinese 7–12 \\| World Language Education\n\n或：\n\nTESOL Teacher Candidate \\| Multilingual Learner Support \\| Secondary Education\n\n避免只写：\n\nGraduate Student at NYU\n\n它没有说明你的职业目标。"
            },
            {
              "heading": "联系陌生校友的消息",
              "body": "Hi \\[Name\\], I am also a graduate of \\[Program\\] and am preparing to apply for Mandarin teaching positions in New York. I noticed your experience at \\[School/Organization\\] and would appreciate learning about your transition into the classroom. Would you be open to a brief conversation?"
            },
            {
              "heading": "5. 教师社群和微信群",
              "body": "微信群、专业社群和线上教师社区可以提供：\n\n• 招聘信息\n• 教师证书经验\n• 面试分享\n• 教学资源\n• 学校信息\n• 活动和会议通知\n\n在社群中建立可信度，可以从小事开始：\n\n• 回答自己熟悉的问题\n• 分享官方信息\n• 推荐实用资源\n• 参加线上活动\n• 表达感谢\n• 避免传播未经核实的信息\n\n不要只在需要工作时突然出现，并反复发送简历。"
            },
            {
              "heading": "6. 招聘会和专业会议",
              "body": "招聘会可以帮助你直接接触：\n\n• 校长\n• Assistant Principal\n• HR工作人员\n• 学科负责人\n• 其他申请者\n\n参加前应准备：\n\n• 一分钟自我介绍\n• Resume\n• 教师资格信息\n• 目标职位\n• 两到三个学校问题\n• Follow-up方法\n\n活动后可以发送：\n\nIt was a pleasure speaking with you at the teacher recruitment fair on Saturday. I appreciated learning about your school’s multilingual learner program. I remain very interested in the Mandarin teaching position and have attached my resume for reference.\n\n专业会议的Networking目标不一定是立即找工作。\n\n你也可以通过会议：\n\n• 认识同学科教师\n• 了解教学趋势\n• 加入专业协会\n• 参加专题讨论\n• 分享自己的教学项目\n• 建立未来合作关系"
            },
            {
              "heading": "7. 社交媒体和内容平台",
              "body": "分享会课件中还提到了B站、小红书等平台。\n\n这些平台可以帮助教师：\n\n• 分享求职经验\n• 发布教学反思\n• 展示课堂材料\n• 认识同行\n• 了解国际教师职业路径\n• 建立个人专业形象\n\n发布内容时需要注意：\n\n• 不公开学生身份信息\n• 不发布学校内部敏感信息\n• 不批评可识别的学生、家长或同事\n• 区分个人观点和官方规定\n• 核实教师资格、签证和法律信息"
            },
            {
              "heading": "五、如何进行一次有效的Informational Interview？",
              "body": "Informational Interview是一种以了解职业经验为目的的简短交流。\n\n它不是正式面试，也不应以直接求职为唯一目标。"
            },
            {
              "heading": "可以询问的问题",
              "body": "• How did you find your first teaching position?\n• What did schools focus on during your interviews?\n• What surprised you most during your first year?\n• What skills are most important in your school?\n• How does your department support new teachers?\n• What should a new Mandarin or ENL teacher prepare before applying?\n• Are there professional communities you would recommend?\n• What do you wish you had known during graduate school?"
            },
            {
              "heading": "不适合一开始就问的问题",
              "body": "• Can you get me a job?\n• Can you send my resume to your principal?\n• How much money do you make?\n• Can you write me a recommendation letter?\n• Is your school easy to get into?\n\n如果交流顺利，对方可能主动提供帮助。即使没有，也应感谢对方的时间。"
            },
            {
              "heading": "交流结束后",
              "body": "发送简短感谢消息：\n\nThank you again for sharing your experience. Your advice about preparing specific classroom examples was especially helpful. I plan to revise my interview notes this week and will keep you updated on my progress."
            },
            {
              "heading": "六、如何让别人愿意推荐你？",
              "body": "推荐建立在信任和具体观察之上。\n\n别人更愿意推荐以下类型的候选人：\n\n• 按时完成任务\n• 沟通清楚\n• 能够接受反馈\n• 对学生负责\n• 遇到问题会主动解决\n• 不夸大自己的能力\n• 能够代表推荐人的专业判断\n\n因此，不要只问：\n\n谁可以给我推荐？\n\n应先问：\n\n谁真正了解我的工作？\n\n适合成为推荐人的人通常能够具体说明：\n\n• 你如何备课\n• 你如何与学生互动\n• 你如何回应反馈\n• 你如何与团队合作\n• 你如何解决问题\n• 你是否可靠"
            },
            {
              "heading": "向教授请求介绍校友",
              "body": "Professor \\[Name\\],\n\nI am preparing to apply for secondary Mandarin teaching positions and would like to learn more about the transition from student teaching to a full-time role. If you know a recent graduate who might be willing to share their experience, I would greatly appreciate an introduction. I would keep the conversation brief and focused on the job-search process."
            },
            {
              "heading": "向朋友请求介绍教师",
              "body": "I remember you mentioned that your colleague teaches ENL in Queens. I am currently learning about middle-school ENL positions. If you think it would be appropriate, would you be comfortable introducing us for a short informational conversation?"
            },
            {
              "heading": "请求对方转发招聘信息",
              "body": "Thank you for sharing the opening. Based on the description, the position aligns closely with my Chinese 7–12 certification and student-teaching experience. Would you recommend applying through the school’s system first, or contacting the hiring administrator directly?\n\n这种问法先关注正确流程，而不是立即要求对方承担推荐责任。"
            },
            {
              "heading": "八、如何维护专业关系？",
              "body": "一次交流结束后，不需要频繁发送消息。\n\n可以在以下时间自然联系：\n\n• 获得面试时\n• 接受Offer时\n• 完成重要项目时\n• 参加对方推荐的活动后\n• 看到与对方工作相关的资源时\n• 节日或学年结束时\n\n更新消息应简短具体：\n\nI wanted to share a quick update and thank you again for your advice. I recently completed my first demo lesson and used the clear learning-objective structure you recommended. The experience helped me feel much more prepared.\n\n对方会看到自己的建议产生了实际影响。"
            },
            {
              "heading": "九、国际学生Networking时需要注意什么？",
              "body": "国际学生在交流中可能会担心：\n\n• 英语不够自然\n• 不熟悉美国职场礼仪\n• 不知道怎样介绍国内经历\n• 担心身份问题影响交流\n• 害怕被拒绝\n\n可以记住："
            },
            {
              "heading": "1. 不需要假装自己已经知道所有规则",
              "body": "可以直接说：\n\nI am still learning how the NYC teacher hiring process works and would appreciate hearing about your experience."
            },
            {
              "heading": "2. 不要隐藏国际经历",
              "body": "中国或其他国家的教学、管理、研究和职业经历，都可以成为专业交流的内容。"
            },
            {
              "heading": "3. 不要在第一次交流中详细询问私人身份信息",
              "body": "可以询问一般经验：\n\nAre there common hiring challenges that international graduates should prepare for?\n\n避免直接要求对方公开个人移民细节。"
            },
            {
              "heading": "4. 工作授权问题应向DSO或专业人士核实",
              "body": "教师、校友和社群成员可以分享经历，但不能代替学校DSO或法律意见。"
            },
            {
              "heading": "十、建立Networking自我介绍",
              "body": "建议准备三个长度的版本。"
            },
            {
              "heading": "10秒版本",
              "body": "I am a Mandarin teacher candidate preparing to teach at the secondary level in New York."
            },
            {
              "heading": "30秒版本",
              "body": "I am completing a master’s program in world language education and working toward New York State certification in Chinese 7–12. My student-teaching experience focuses on beginner Mandarin and project-based language learning."
            },
            {
              "heading": "60秒版本",
              "body": "I am completing my master’s degree in world language education and preparing for New York State certification in Chinese 7–12. During student teaching, I designed beginner Mandarin lessons using visual supports, collaborative speaking tasks and formative assessment. I am particularly interested in schools that are building or expanding world language programs, because I enjoy curriculum development and creating accessible entry points for new language learners.\n\n根据交流对象调整重点，不需要每次背诵完全相同的内容。"
            },
            {
              "heading": "第1周：整理现有关系",
              "body": "• 列出教授、导师、校友和同学\n• 更新LinkedIn资料\n• 准备30秒自我介绍\n• 明确目标职位和学校类型\n• 联系两位已经认识的人"
            },
            {
              "heading": "第2周：扩大关系",
              "body": "• 在LinkedIn寻找五位相关校友\n• 发送两到三封个性化消息\n• 参加一次教师社群活动\n• 在专业群中分享一个可靠资源\n• 安排一次Informational Interview"
            },
            {
              "heading": "第3周：深入交流",
              "body": "• 准备Informational Interview问题\n• 与一至两位教育工作者交流\n• 记录获得的信息\n• 根据建议修改Resume或面试材料\n• 发送感谢消息"
            },
            {
              "heading": "第4周：维护与转化",
              "body": "• 向提供建议的人更新进展\n• 申请交流中发现的机会\n• 联系实习或Student Teaching关系\n• 参加招聘会或专业活动\n• 规划下个月的联系目标"
            },
            {
              "heading": "Networking追踪表建议字段",
              "body": "可以记录：\n\n姓名 — 联系人姓名\n职位和机构 — 当前工作\n认识渠道 — 教授介绍、LinkedIn、会议等\n共同点 — 同校、同专业、同学科\n首次联系日期 — 发送消息的时间\n回复状态 — 未回复、已回复、已交流\n交流重点 — 对方分享的建议\n下一步 — 感谢、Follow-up或更新\n下次联系日期 — 合适的维护时间\n可以提供的帮助 — 你可以分享的资源或支持"
            },
            {
              "heading": "Networking沟通检查清单",
              "body": "发送消息前，确认：\n\n• 是否说明了自己是谁\n• 是否说明了为什么联系对方\n• 是否有明确且合理的请求\n• 是否控制了对方需要投入的时间\n• 是否根据对方经历修改消息\n• 是否避免直接索要工作或推荐\n• 是否检查了姓名和机构拼写\n• 是否保持专业和礼貌\n\n交流后，确认：\n\n• 发送感谢信息\n• 记录关键建议\n• 完成自己承诺的行动\n• 在适当时间提供进展更新\n• 避免频繁催促或重复请求"
            },
            {
              "heading": "最后的建议",
              "body": "教师求职中的Networking，本质上是建立一套专业信任网络。\n\n这套网络不需要很大。\n\n几位真正了解你的导师、同事、校友或同行，可能比几百个没有实际交流的LinkedIn联系人更有价值。\n\n从以下三个行动开始即可：\n\n1. 联系一位已经了解你工作的人\n2. 向一位校友请教具体经验\n3. 参加一次能够认识同行的专业活动\n\n每一次交流都保持具体、尊重和真诚。\n\n当别人能够清楚地知道你是谁、你想做什么、你擅长什么，以及你是否值得信任时，合适的机会出现后，他们才更有可能想到你。"
            },
            {
              "heading": "资料来源",
              "body": "本文根据EduVenture“纽约教师求职分享会 Session 1”中关于LinkedIn、微信群、大学教授、实习导师、志愿活动和专业社群的分享整理。\n\n文中的沟通模板和行动建议为EduVenture International Teacher Hub原创整理，使用时应根据个人经历、关系程度和具体求职目标进行修改。"
            }
          ]
        },
        {
              "id": "job-search-faq",
              "title": "纽约教师求职常见问题：从提交申请到接受 Offer",
              "summary": "从申请系统到接受 Offer，教师求职中最常见问题的整理与解答。",
              "intro": "纽约教师求职很少是一条完全清晰的直线。\n\n有些申请者提交材料后，很快就收到学校联系；有些人发送了很多邮件，却长时间没有回复。部分学校会安排多轮面试和Demo Lesson，另一些学校可能在一次面试后便作出决定。\n\nEduVenture“纽约教师求职分享会”中，参与者最常提出的问题包括：\n\n• 校长不回复怎么办？\n• 没有美国教学经验是否会影响求职？\n• 是否需要主动联系学校？\n• 面试时应该注意哪些礼仪？\n• 国际学生什么时候说明工作授权？\n• 推荐人应该怎样准备？\n• 收到口头Offer后还需要做什么？\n\n本文将这些问题集中整理，帮助申请者判断自己目前处于哪一个阶段，以及下一步应该采取什么行动。",
              "faqs": [
                    {
                          "q": "新教师应该使用New Teacher Finder还是Open Market？",
                          "a": "准备第一次进入NYC Public Schools全职任教的申请者，通常需要完成NYCPS Certified Teacher Application。\n\n申请通过审核后，候选人会进入New Teacher Finder。候选人可以在其中搜索职位，校长和招聘负责人也可以查看符合条件的申请者。\n\nOpen Market Hiring System主要供目前已经在NYCPS任职、符合资格的教师和其他UFT职位员工申请转校使用，不是新教师的主要申请系统。\n\n可以这样判断：\n\n申请者身份 — 主要系统\n第一次申请NYCPS全职教师职位 — Certified Teacher Application＋New Teacher Finder\n目前已在NYCPS任职并希望转校 — Open Market\n申请Charter或Private School — 学校或机构自己的申请平台\n申请Pre-K或社区机构职位 — 根据项目类型使用相应申请系统"
                    },
                    {
                          "q": "完成NYCPS申请后，是否代表已经获得教师职位？",
                          "a": "不是。\n\nNYCPS首先审核申请者是否符合进入学校招聘阶段的基本条件。申请被接受后，候选人进入New Teacher Finder，但仍需要自行搜索职位、联系学校并参加学校安排的招聘流程。最终决定通常由具体学校的招聘团队作出。\n\n可以将整个流程理解为：\n\nNYCPS申请审核 → 进入候选人系统 → 学校级求职 → 面试与Demo → 学校Offer → Nomination与入职流程\n\n申请通过审核只是获得了参加学校招聘的资格，并不是工作Offer。"
                    },
                    {
                          "q": "教师资格证还没有正式签发，可以申请吗？",
                          "a": "部分正在完成纽约州教师教育项目，并预计在规定时间前满足教师资格要求的候选人，可以按照“on track to be certified”的身份申请。\n\nNYCPS当前说明，已经获得纽约州教师资格，或预计在相应学年开始前获得资格的候选人，可以提交Certified Teacher Application。具体资格状态、项目证明和截止日期应以当期官方申请说明为准。\n\n申请前应准备：\n\n• 教师教育项目证明\n• 预计毕业或完成项目日期\n• 当前证书申请状态\n• 已通过和待完成的考试\n• 学校Certification Office联系方式\n• NYSED TEACH账户信息\n\n面试中应准确说明自己的状态，不要说“已经获得证书”，除非证书已经正式签发。\n\n可以说：\n\nI am currently on track to complete the requirements for New York State certification in Chinese 7–12 before the beginning of the school year."
                    },
                    {
                          "q": "进入New Teacher Finder后，应该等待学校联系吗？",
                          "a": "不建议只等待。\n\nNew Teacher Finder允许候选人和学校相互搜索与联系，但被动等待会限制你接触职位的数量。\n\n更有效的方法是同时进行：\n\n1. 在New Teacher Finder中搜索职位\n2. 建立目标学校名单\n3. 阅读学校网站和课程信息\n4. 根据职位要求调整Resume\n5. 按照学校要求提交申请\n6. 在适当情况下发送简短联系邮件\n7. 参加招聘会、学校参观和Networking活动\n\n求职系统是入口，不是完整的求职策略。"
                    },
                    {
                          "q": "需要申请多少所学校？",
                          "a": "没有适用于所有人的固定数字。\n\n申请数量应根据以下因素决定：\n\n• 教师资格领域\n• 年级范围\n• 地理位置\n• 招聘季节\n• 学校类型\n• 个人通勤限制\n• 是否需要签证或工作授权安排\n• 职位供需情况\n\n建议把学校分为三组：\n\n**高优先级**\n\n职位、学校理念、学生群体和通勤条件都比较匹配。\n\n对这些学校应投入更多时间：\n\n• 调整Resume\n• 研究学校\n• 撰写个性化邮件\n• 准备有针对性的面试答案\n\n**中等优先级**\n\n基本符合条件，但仍有部分信息需要确认。\n\n可以正常申请，并在面试中进一步了解。\n\n**探索性申请**\n\n你并不完全确定是否适合，但职位能够帮助你了解市场和积累面试经验。\n\n求职初期不要因为学校不是“完美选择”就完全不申请。分享会主讲人也建议新教师把部分面试看作了解学校和练习专业表达的机会。"
                    },
                    {
                          "q": "为什么我联系了很多校长，却没有收到回复？",
                          "a": "没有回复并不一定代表申请者不合格。\n\n学校招聘可能受到以下因素影响：\n\n• 学校仍在确认预算或课程安排\n• 职位尚未最终批准\n• 招聘负责人正在处理大量申请\n• 学校已经有内部候选人\n• 面试时间尚未确定\n• 招聘负责人优先处理紧急职位\n• 邮件进入垃圾邮箱\n• 你的材料没有清楚显示证书或职位匹配度\n\n分享会中，“联系校长后没有回复”也是参与者提出的常见问题。主讲人建议申请者继续扩大申请范围，而不是把所有希望放在一所学校上。\n\n可以采用以下节奏：\n\n• 提交申请后等待约一周\n• 发送一次简短Follow-up\n• 没有回复后继续申请其他学校\n• 职位仍开放时，可以在之后进行最后一次跟进\n• 避免连续多日重复发送邮件"
                    },
                    {
                          "q": "可以绕过系统，直接给学校发邮件吗？",
                          "a": "直接联系学校可以作为系统申请的补充，但不应代替学校要求的正式申请步骤。\n\n一个较稳妥的顺序是：\n\n1. 确认自己符合职位要求\n2. 完成正式系统申请\n3. 查找学校或招聘负责人的公开联系方式\n4. 发送简短、个性化的介绍邮件\n5. 附上Resume\n6. 说明已经通过哪个渠道申请\n7. 礼貌询问是否需要补充材料\n\n例如：\n\nDear Assistant Principal Chen,\n\nI recently applied for the Mandarin teacher position through the New Teacher Finder. I am on track to receive New York State certification in Chinese 7–12 and recently completed my student teaching at the high school level.\n\nI am particularly interested in your school’s focus on project-based learning and would welcome the opportunity to discuss how my experience could support your world language program. My resume is attached for reference.\n\n不要一次向同一所学校的多位工作人员发送完全相同的邮件。"
                    },
                    {
                          "q": "我的Resume没有美国全职教学经历，怎么办？",
                          "a": "不要用“是否做过美国全职教师”作为唯一标准判断自己的经验。\n\n以下经历都可以提供与教师岗位相关的证据：\n\n• Student Teaching\n• Tutoring\n• Afterschool Program\n• Summer Camp\n• 社区中文学校\n• 成人教育\n• Research Assistant\n• 课程设计\n• 志愿服务\n• 学生社团\n• 国内教学\n• 客户服务\n• 项目管理\n• 数据分析\n• 团队领导\n\n重点是把经历转换成教师招聘团队能够理解的能力：\n\n原经历 — 可以体现的教师能力\n客户服务 — 关系建立、家庭沟通、冲突处理\n数据分析 — 学生数据分析、形成性评估\n项目管理 — 单元规划、时间管理、跨团队合作\n团队监督 — 课堂管理、领导力、反馈\n内容设计 — 课程材料与学习活动设计\n销售与推广 — 学生动机、清晰表达、需求分析\n\n不要虚构自己没有承担过的教学职责。\n\n可以改变表达重点，但不能把“向新员工介绍收银系统”写成“教授学生课程”。\n\n正确的转化逻辑是：\n\n我完成了什么真实任务？它体现了什么技能？这种技能如何用于教师岗位？"
                    },
                    {
                          "q": "一份教师Resume应该多长？",
                          "a": "对于刚毕业或职业早期的教师候选人，清晰、相关和容易扫描通常比堆积大量内容更重要。\n\n官方Resume指导强调：\n\n• 根据招聘对象调整内容\n• 清楚列出教师资格和相关经验\n• 使用行动动词和具体例子\n• 保持格式一致\n• 检查语言和拼写\n• 保存为PDF提交\n\n通常应优先保留：\n\n• 教师资格\n• 教育背景\n• Student Teaching\n• 相关教学和学生工作经历\n• 可迁移的职业经验\n• 技能和语言\n• 与职位相关的项目\n\n不相关或很早以前的经历可以缩短，而不是全部删除。"
                    },
                    {
                          "q": "是否需要准备Teaching Portfolio？",
                          "a": "Teaching Portfolio不一定是每所学校的硬性要求，但它可以帮助招聘负责人更具体地了解你的教学实践。\n\nTeachNYC建议Portfolio可以包括Lesson Plan和其他教学样本。\n\n可以准备：\n\n• 一至两份代表性Lesson Plan\n• Unit Plan\n• Slides或学生材料\n• Assessment和Rubric\n• 匿名化学生作品\n• 教学反思\n• 项目式学习案例\n• Classroom Management Plan\n• 教学视频片段，前提是获得必要许可\n• Professional Development记录\n\n不要把Portfolio做成几十页的材料集合。\n\n更重要的是选择少量作品，并说明：\n\n• 教学目标是什么\n• 为什么这样设计\n• 学生如何参与\n• 如何评估学习\n• 你进行了什么调整"
                    },
                    {
                          "q": "所有学校都会安排Demo Lesson吗？",
                          "a": "不一定。\n\nDemo Lesson是学校可能使用的一种招聘评估方式。学校可能要求候选人向真实学生或由行政人员组成的小组教授一节模拟课，但并非每一所学校都会采用相同流程。\n\n可能出现的形式包括：\n\n• 不安排Demo\n• 面试当天进行短试讲\n• 第一轮面试后另行安排\n• 向真实学生授课\n• 向招聘委员会授课\n• 提交Lesson Plan并进行部分展示\n• 观看教学视频或讨论教学案例\n\n即使学校暂时没有要求Demo，TeachNYC也建议候选人提前准备一份可以调整的示范课程。"
                    },
                    {
                          "q": "Demo Lesson中最重要的是什么？",
                          "a": "Demo Lesson不是表演一节“看起来很热闹”的课。\n\n招聘团队更希望观察：\n\n• 学习目标是否清楚\n• 活动是否与目标一致\n• 指令是否容易理解\n• 学生是否真正参与\n• 教师是否检查理解\n• 是否能够根据学生反应调整\n• 时间管理是否合理\n• 教师是否建立尊重的课堂氛围\n\nTeachNYC的准备建议也强调，候选人应遵循准备好的教学计划，同时保持灵活，并通过提问、观察学生工作和其他方式持续检查理解。\n\n短试讲最常见的问题不是内容不够多，而是：\n\n• 教师讲话时间过长\n• 活动与目标不一致\n• 没有检查学生是否理解\n• 指令过于复杂\n• 内容超出学生水平\n• 依赖科技，没有备用方案\n• 结尾没有Assessment"
                    },
                    {
                          "q": "面试时需要穿得非常正式吗？",
                          "a": "教师面试通常应采用干净、专业并适合学校环境的服装。\n\n不一定需要非常正式的商务套装，但应避免：\n\n• 过于休闲的运动服\n• 影响活动或走动的服装\n• 带有明显争议性文字的服饰\n• 不适合进入课堂的鞋子\n• 过度依赖香水或强烈气味\n\n若面试包含Demo Lesson，应考虑：\n\n• 是否需要在教室中走动\n• 是否能够使用白板\n• 是否需要弯腰协助学生\n• 是否方便携带和发放材料\n\n面试礼仪不只体现在衣着，还包括：\n\n• 提前到达\n• 对前台、School Safety Agent和其他工作人员保持礼貌\n• 关闭手机声音\n• 带好材料\n• 认真倾听问题\n• 不批评前任学校或同事\n• 离开前感谢参与面试的人员"
                    },
                    {
                          "q": "回答面试问题时，应该使用多少专业术语？",
                          "a": "专业术语可以帮助你准确表达教学实践，但术语不能代替实际案例。\n\n例如，只说：\n\nI use UDL, differentiation and culturally responsive teaching.\n\n说服力有限。\n\n更好的回答是：\n\nIn a beginner Mandarin class, I used images, sentence frames and multiple response options so that students with different language backgrounds could participate in the same speaking task.\n\n分享会主讲人建议候选人使用专业教育语言，同时通过具体教学故事让面试官理解这些术语如何出现在实际课堂中。\n\n一个有效回答可以包含：\n\n1. 核心观点\n2. 具体情境\n3. 采取的行动\n4. 学生表现或结果\n5. 反思与下一步"
                    },
                    {
                          "q": "需要准备几位推荐人？",
                          "a": "NYCPS教师申请目前要求候选人填写至少一位、不超过三位专业推荐人的相关信息。\n\n进入学校招聘阶段后，建议提前准备两至三位能够具体评价你工作的人。分享会中也建议候选人提前整理推荐人名单。\n\n适合的人选包括：\n\n• Cooperating Teacher\n• University Supervisor\n• Student Teaching负责人\n• 教授\n• 教育项目主管\n• 前任学校领导\n• 实习或研究负责人\n\n推荐人应当能够说明你的：\n\n• 教学准备\n• 学生互动\n• 专业态度\n• 合作能力\n• 接受反馈的能力\n• 可靠性\n\n一个职位更高、但不熟悉你工作的人，不一定比直接观察过你教学的人更适合。"
                    },
                    {
                          "q": "可以不通知推荐人，直接填写对方信息吗？",
                          "a": "不建议。\n\n提交前应先联系推荐人，确认对方：\n\n• 愿意担任推荐人\n• 记得你的具体工作\n• 可以在招聘期间及时回复\n• 知道你正在申请什么职位\n• 拥有你的最新Resume\n\n可以提供：\n\n• 职位描述\n• 学校名称\n• 最新Resume\n• 申请时间线\n• 希望对方重点说明的经历\n\n不要为推荐人编写他们必须照抄的评价，但可以提醒对方你们共同完成过的项目。"
                    },
                    {
                          "q": "国际学生应该什么时候向学校说明工作授权？",
                          "a": "应诚实、准确地回答申请和招聘过程中关于工作授权的问题，但不需要在第一次Networking交流中主动解释所有个人移民历史。\n\n需要区分：\n\n• 教师资格\n• 求职资格\n• 当前工作授权\n• 未来是否需要雇主支持\n\n这些是不同的问题。\n\nF-1学生决定在美国工作时，官方建议首先联系本校DSO，确认自己是否具有相应授权。学生不能在尚未取得所需授权时提前开始工作。\n\nCPT通常由DSO根据课程和职位情况授权；OPT则涉及DSO推荐，并在适用情况下需要USCIS批准。\n\n面试前应能够准确回答：\n\n• 当前身份是什么\n• 工作授权何时开始\n• 授权何时结束\n• 是否与所学专业相关\n• 是否存在雇主需要完成的步骤\n• 将来是否可能需要新的身份或雇主支持\n\n不确定时，不要根据同学经历猜测，应向DSO或合格的移民法律专业人士确认。"
                    },
                    {
                          "q": "面试官问身份问题时，我应该怎样回答？",
                          "a": "回答应简短、准确，并聚焦工作资格。\n\n例如：\n\nI am currently an F-1 student and expect to be eligible for post-completion OPT beginning in July. I am confirming the exact timeline with my university’s international student office.\n\n或者：\n\nI am currently authorized to work through OPT until \\[date\\]. I would be happy to provide the appropriate employment authorization documentation during the onboarding process.\n\n避免：\n\n• 隐瞒重要事实\n• 承诺自己并不了解的签证结果\n• 使用“应该没问题”作为回答\n• 把OPT、CPT和工作签证混为一谈\n• 让招聘负责人替你判断个人身份问题\n\n本文不构成移民法律意见。复杂情况应咨询DSO或合格律师。"
                    },
                    {
                          "q": "学校口头说“想雇用我”，是否代表已经正式入职？",
                          "a": "不一定。\n\n学校表达招聘意向或给出口头Offer后，通常还需要完成正式提名和系统入职步骤。NYCPS的求职指南说明，候选人接受学校Offer后，还会收到与Applicant Gateway及后续入职事项有关的信息。\n\n收到口头Offer时，可以确认：\n\n• 具体职位名称\n• 教授科目和年级\n• 全职或兼职\n• 预计开始日期\n• 学校下一步需要什么材料\n• 谁负责提交Nomination\n• 何时收到正式系统通知\n• 是否存在尚未完成的批准或审核\n\n在没有确认正式流程前，不要假设所有入职步骤已经完成。"
                    },
                    {
                          "q": "收到Offer后应该问哪些问题？",
                          "a": "Offer阶段可以重点确认以下内容。\n\n**教学职责**\n\n• 教授哪些课程和年级？\n• 每天有多少节课？\n• 是否需要教授多个不同课程？\n• 是否承担Advisory、Lunch Duty或其他职责？\n• 是否需要建立新的课程？\n\n**教学支持**\n\n• 是否有Mentor？\n• 新教师如何参加Professional Development？\n• 是否提供课程材料？\n• 是否有共同备课时间？\n• 学科组如何合作？\n\n**工作安排**\n\n• 预计开始日期\n• 每日工作时间\n• 入职培训\n• 课程表何时确定\n• 教室和设备安排\n• 需要完成的背景审查和文件\n\n**发展机会**\n\n• 是否支持参加专业会议？\n• 是否有课程开发机会？\n• 是否可以带学生社团？\n• 是否有未来教师领导力路径？\n\n不需要在第一次Offer沟通中一次问完所有问题。优先确认会影响你是否接受职位的重要信息。"
                    },
                    {
                          "q": "什么时候可以停止申请其他学校？",
                          "a": "建议至少等到以下事项比较明确后，再停止全部求职活动：\n\n• 已经接受明确的职位\n• 学校确认了职位和职责\n• 正式提名或入职步骤已经开始\n• 工作授权与开始日期没有明显冲突\n• 你已经收到并完成必要系统指示\n\n在此之前，可以减少新申请，但不建议只根据一句口头承诺立即取消所有其他机会。\n\n同时，应保持职业道德：\n\n• 接受Offer前认真考虑\n• 接受后不要继续把其他学校作为随意比较的筹码\n• 情况变化时尽快通知相关学校\n• 不要同时向多所学校承诺已经接受职位"
                    },
                    {
                          "q": "面试后多久没有回复，可以Follow-up？",
                          "a": "一般可以在面试后的一至两个工作日内先发送感谢邮件。\n\n若学校提供了明确时间线，应按照该时间线等待。如果超过了学校给出的时间，可以发送一次简短Follow-up。\n\nTeachNYC建议候选人在面试后发送感谢邮件；如果Demo Lesson单独进行，也应在试讲后的一至两个工作日内发送个性化感谢信息。\n\nFollow-up可以写：\n\nDear Principal Garcia,\n\nThank you again for the opportunity to interview for the ENL teacher position. I appreciated learning more about your school’s collaborative planning structure and support for multilingual learners.\n\nI remain very interested in the role and wanted to ask whether there are any updates regarding the next stage of the hiring process."
                    },
                    {
                          "q": "被拒绝后，可以询问反馈吗？",
                          "a": "可以礼貌询问，但学校没有义务提供详细反馈。\n\n例如：\n\nThank you for letting me know. Although I am disappointed, I appreciate the opportunity to learn more about your school. If you are able to share any brief feedback that could help me improve for future interviews, I would be grateful.\n\n即使对方没有回复，也可以自行复盘：\n\n• 哪些问题回答得不够具体？\n• 是否真正研究了学校？\n• 是否清楚解释了教师资格状态？\n• 案例是否体现了学生学习？\n• Demo是否有检查理解？\n• 是否提出了有价值的问题？\n• Resume是否与职位匹配？\n\n不要把每次拒绝都解释为自己“不适合当老师”。\n\n招聘结果也可能受到课程安排、职位变化、内部候选人和学校特殊需求影响。"
                    },
                    {
                          "q": "如果连续申请都没有回复，应该调整什么？",
                          "a": "可以依次检查以下方面。\n\n**第一层：职位匹配**\n\n• 是否申请了符合自己证书领域的职位？\n• 年级和学科是否对应？\n• 是否清楚标注证书状态？\n• 是否存在地理范围过窄的问题？\n\n**第二层：Resume**\n\n• 招聘负责人能否在十秒内看出你可以教什么？\n• 是否把Student Teaching放在明显位置？\n• Bullet是否包含具体行动和结果？\n• 是否有过多不相关经历？\n• 是否存在格式或语言错误？\n\n**第三层：联系方式**\n\n• 邮件是否过长？\n• 是否使用相同模板联系所有学校？\n• 是否说明已经完成正式申请？\n• 邮件主题是否清楚？\n• Resume文件名是否专业？\n\n**第四层：申请策略**\n\n• 是否只申请少数“理想学校”？\n• 是否持续扩大学校名单？\n• 是否参加招聘活动？\n• 是否使用Networking？\n• 是否记录和安排Follow-up？\n\n**第五层：材料证据**\n\n• 是否有教学案例？\n• 是否准备Portfolio？\n• 是否有推荐人？\n• 是否能够清楚解释非教育经历的可迁移技能？\n\n一次只调整一到两个方面，之后观察回复率是否变化。"
                    }
              ],
              "closing": [
                    {
                          "heading": "A. 申请系统",
                          "body": "• 确认纽约州教师资格或on-track状态\n• 建立或更新NYSED TEACH账户\n• 完成NYCPS Certified Teacher Application\n• 上传最新Resume\n• 填写专业推荐人\n• 上传教师资格证明\n• 检查申请状态\n• 进入New Teacher Finder"
                    },
                    {
                          "heading": "B. 学校搜索",
                          "body": "• 明确目标年级和学科\n• 确定可接受的Borough和通勤时间\n• 建立学校名单\n• 调查学校使命、学生和课程\n• 记录联系人\n• 设置申请优先级\n• 记录申请和Follow-up日期"
                    },
                    {
                          "heading": "C. 求职材料",
                          "body": "• 一页或两页Resume\n• 基础Cover Letter模板\n• 学校定制段落\n• 一分钟自我介绍\n• Teaching Portfolio\n• Sample Lesson Plan\n• 推荐人名单\n• 教师资格状态说明\n• 工作授权状态说明"
                    },
                    {
                          "heading": "D. 面试",
                          "body": "• 调查学校\n• 准备六至八个教学案例\n• 练习STAR-R回答\n• 准备Classroom Management案例\n• 准备Differentiation案例\n• 准备数据与Assessment案例\n• 准备团队合作案例\n• 准备国际经历转化案例\n• 准备一至三个候选人问题"
                    },
                    {
                          "heading": "E. Demo Lesson",
                          "body": "• 确认年级、课程和学生水平\n• 确认时长\n• 确认设备和材料\n• 写出可观察的学习目标\n• 设计Check for Understanding\n• 加入学生输出\n• 准备Differentiation\n• 设计Exit Ticket\n• 准备无科技备用方案\n• 完整计时排练"
                    },
                    {
                          "heading": "F. 面试后",
                          "body": "• 记录问题和反馈\n• 更新求职追踪表\n• 一至两个工作日内发送感谢邮件\n• 按学校时间线跟进\n• 继续申请其他职位\n• 修改需要改进的面试案例"
                    },
                    {
                          "heading": "G. Offer与入职",
                          "body": "• 确认职位、科目和年级\n• 确认开始日期\n• 确认学校联系人\n• 确认Nomination流程\n• 检查Applicant Gateway信息\n• 完成背景审查和指纹要求\n• 核对教师资格状态\n• 核对工作授权\n• 保存所有正式文件"
                    },
                    {
                          "heading": "最后的建议",
                          "body": "教师求职中，最容易让人焦虑的并不是某一道面试题，而是不知道“现在到底应该做什么”。\n\n可以把整个过程简化为四个循环：\n\n搜索机会 → 提交申请 → 复盘反馈 → 调整策略\n\n每周检查以下五个数字：\n\n1. 新调研了多少所学校？\n2. 提交了多少份申请？\n3. 完成了多少次Follow-up？\n4. 获得了多少次面试或交流？\n5. 根据反馈修改了什么？\n\n无法控制学校何时回复，但可以控制：\n\n• 材料是否清楚\n• 申请范围是否合理\n• Follow-up是否专业\n• 面试案例是否具体\n• Demo Lesson是否经过练习\n• 是否持续建立专业关系\n\n教师求职不是证明自己没有缺点，而是让学校清楚地看到：\n\n你能够教授什么？你如何支持学生？你怎样与团队合作？你是否愿意接受反馈？你为什么适合这所学校？\n\n当这些问题能够通过真实经历和具体证据得到回答时，你的申请就会更有说服力。"
                    },
                    {
                          "heading": "资料来源与免责声明",
                          "body": "本文根据EduVenture“纽约教师求职分享会 Session 1”中的常见问题、招聘流程、学校联系、推荐人和面试建议整理。\n\nNYCPS申请和招聘信息参考NYC Public Schools及TeachNYC截至2026年7月的公开资源。招聘系统、时间和要求可能在不同学年调整，请在申请时核对当期官方说明。\n\n文中关于F-1、CPT和OPT的内容仅用于一般信息分享，不构成法律意见。国际学生应根据个人情况咨询学校DSO或合格的移民法律专业人士。"
                    }
              ]
        }
      ]
    },
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
