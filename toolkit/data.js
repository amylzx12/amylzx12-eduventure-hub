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
                                            "作用：提交资格、偏好、推荐人和 Resume；审核后搜索职位，也可被学校招聘人员发现。",
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
                                            "School Quality Snapshot 适合查看学校基本情况和调查数据；学校官网的近期活动、课程介绍、校长寄语和教师团队页面，往往更能反映学校当前的发展方向。"
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
                                            "I am writing to express my interest in the Mandarin teaching position at [School Name]. I am certified/on track to be certified in [Certification Area] and have experience teaching [student group or course]. I was particularly interested in your school's [specific program, value, or student population].",
                                            "I have attached my resume for your consideration and would appreciate the opportunity to discuss how my experience could support your students and school community."
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
                                            "学校与专业网络：教授、项目导师、校友、Student Teaching/实习学校、招聘会、教师社群和教育会议。",
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
              "summary": "从进入 New Teacher Finder，到完成面试、Demo Lesson 与 Follow-up",
              "leadCallout": {
                    "title": "核心提醒",
                    "lines": [
                          "通过 NYCPS 的初步申请审核，只代表你可以进入校级招聘阶段。最终聘用决定通常由具体学校及其招聘团队作出。"
                    ]
              },
              "nav": [
                    {
                          "label": "一、纽约公校教师招聘的基本流程",
                          "anchor": "s1"
                    },
                    {
                          "label": "二、你可能会经历哪些面试形式？",
                          "anchor": "s2"
                    },
                    {
                          "label": "三、面试前应该准备什么？",
                          "anchor": "s3"
                    },
                    {
                          "label": "四、常见教师面试问题",
                          "anchor": "s4"
                    },
                    {
                          "label": "五、国际申请者如何呈现自己的经历？",
                          "anchor": "s5"
                    },
                    {
                          "label": "六、Demo Lesson 主要考察什么？",
                          "anchor": "s6"
                    },
                    {
                          "label": "七、面试中怎样讲好自己的故事？",
                          "anchor": "s7"
                    },
                    {
                          "label": "八、准备推荐人和求职材料",
                          "anchor": "s8"
                    },
                    {
                          "label": "九、候选人也需要向学校提问",
                          "anchor": "s9"
                    },
                    {
                          "label": "十、面试后的 Follow-up",
                          "anchor": "s10"
                    },
                    {
                          "label": "面试准备清单",
                          "anchor": "s11"
                    }
              ],
              "sections": [
                    {
                          "heading": "写在前面",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "完成 NYC Public Schools Certified Teacher Application，并进入 New Teacher Finder 后，你就进入了以学校为单位的招聘阶段。不同学校可能采用电话筛选、正式面试、团队面试、教学任务或 Demo Lesson，流程并不完全一致。"
                                },
                                {
                                      "type": "text",
                                      "text": "因此，面试准备的重点不是背诵标准答案，而是建立一套可以灵活调用的教学案例、个人故事和专业表达。本文将招聘流程、常见问题与试讲准备整理成一份可执行的指南。"
                                }
                          ],
                          "level": 1
                    },
                    {
                          "heading": "一、纽约公校教师招聘的基本流程",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "通过资格审核后，候选人可以在 New Teacher Finder 搜索职位，学校招聘负责人也可以主动查看并联系符合条件的申请者。整个流程可以理解为以下五个阶段："
                                },
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "完成系统申请",
                                                  "desc": "提交 Certified Teacher Application，并通过资格审核。"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "进入校级求职",
                                                  "desc": "使用 New Teacher Finder 搜索职位，同时主动联系目标学校。"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "参加学校筛选",
                                                  "desc": "完成电话沟通、正式面试、团队面试或其他招聘任务。"
                                            },
                                            {
                                                  "number": "4",
                                                  "title": "展示教学能力",
                                                  "desc": "根据学校要求完成 Demo Lesson，并提交推荐人或补充材料。"
                                            },
                                            {
                                                  "number": "5",
                                                  "title": "确认并完成入职",
                                                  "desc": "确认职位、证书与入职要求，接受正式 Offer，完成指纹和背景审查。"
                                            }
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s1"
                    },
                    {
                          "heading": "二、你可能会经历哪些面试形式？",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "面试形式",
                                            "学校通常关注什么"
                                      ],
                                      "rows": [
                                            [
                                                  "**Phone Screening**",
                                                  "资格证书状态、可教授科目与年级、到岗时间、申请动机，以及是否进入下一轮。建议准备约一分钟的自我介绍。"
                                            ],
                                            [
                                                  "**第一轮正式面试**",
                                                  "教学背景、教育理念、课堂实践和学校匹配度。面试官可能包括校长、助理校长、学科负责人或教师代表。"
                                            ],
                                            [
                                                  "**第二轮或团队面试**",
                                                  "课程规划、团队协作、课堂管理、数据使用、ENL与特殊学习需求支持，以及从零搭建课程的能力。"
                                            ],
                                            [
                                                  "**Demo Lesson**",
                                                  "教学目标、内容拆解、互动、检查理解、课堂管理和现场调整能力。可能与面试同日，也可能单独安排。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "准备原则",
                                      "lines": [
                                            "同一个职位在不同学校可能有不同流程。准备时要覆盖多种场景，并在每次沟通后确认下一步安排。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s2"
                    },
                    {
                          "heading": "三、面试前应该准备什么？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "面试前最重要的三项准备是：了解学校、准备自我介绍、建立教学案例库。"
                                },
                                {
                                      "type": "subheading",
                                      "text": "1. 调查学校"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "需要了解",
                                            "可查找的信息"
                                      ],
                                      "rows": [
                                            [
                                                  "**学校定位**",
                                                  "使命、教学理念、年级范围、学生人数与社区特点"
                                            ],
                                            [
                                                  "**学生需求**",
                                                  "语言与文化背景、ENL、多语言学习者、特殊教育与其他学习支持"
                                            ],
                                            [
                                                  "**课程项目**",
                                                  "AP、双语、特色课程、项目式学习、大学与职业准备"
                                            ],
                                            [
                                                  "**职位环境**",
                                                  "所属年级或学科团队、现有课程、近期活动与发展重点"
                                            ]
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "调查的目的，是让你能够具体回答两个问题：为什么是这所学校？为什么你适合这所学校？"
                                },
                                {
                                      "type": "callout",
                                      "title": "表达示例",
                                      "lines": [
                                            "“我注意到贵校重视项目式学习。学生教学期间，我设计过一个以社区采访为核心的语言项目，因此希望进一步了解贵校如何在世界语言课程中开展跨学科学习。”"
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "2. 准备一分钟自我介绍"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "组成部分",
                                            "建议内容"
                                      ],
                                      "rows": [
                                            [
                                                  "**目前身份**",
                                                  "学位项目、教师资格方向和预计取得证书的时间"
                                            ],
                                            [
                                                  "**教学方向**",
                                                  "主要科目、年级或学生群体"
                                            ],
                                            [
                                                  "**核心优势**",
                                                  "最能体现你教学能力的一项经历"
                                            ],
                                            [
                                                  "**学校匹配**",
                                                  "为什么申请该校，以及你的经验可以支持哪些学生需求"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "英文示例",
                                      "lines": [
                                            "I am completing my master’s degree in TESOL and am on track to receive my New York State certification. During student teaching, I worked with multilingual high school students and designed lessons that combined language objectives with project-based learning. I am particularly interested in your school because of its focus on college readiness and support for multilingual learners."
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "3. 建立“教学案例库”"
                                },
                                {
                                      "type": "text",
                                      "text": "建议提前准备六至八个案例，每个案例控制在一至两分钟。可以覆盖以下情境："
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "案例类型",
                                            "可以准备的内容"
                                      ],
                                      "rows": [
                                            [
                                                  "**课堂教学**",
                                                  "成功活动、课程设计、学生参与度提升"
                                            ],
                                            [
                                                  "**课堂管理**",
                                                  "行为挑战、常规建立、学生关系修复"
                                            ],
                                            [
                                                  "**学生支持**",
                                                  "差异化教学、多语言学习者、不同水平学生"
                                            ],
                                            [
                                                  "**评估与调整**",
                                                  "根据学生表现修改教学、使用数据规划下一步"
                                            ],
                                            [
                                                  "**合作沟通**",
                                                  "与教师、家长、导师或团队共同解决问题"
                                            ],
                                            [
                                                  "**反思成长**",
                                                  "接受反馈、失败后调整、重新尝试并总结经验"
                                            ]
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "回答时可以使用简化的 STAR 结构："
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "步骤",
                                            "回答重点"
                                      ],
                                      "rows": [
                                            [
                                                  "**Situation**",
                                                  "当时是什么情况？"
                                            ],
                                            [
                                                  "**Task**",
                                                  "你需要解决什么问题？"
                                            ],
                                            [
                                                  "**Action**",
                                                  "你具体采取了哪些行动？"
                                            ],
                                            [
                                                  "**Result & Reflection**",
                                                  "结果如何？你学到了什么？下一次会怎样改进？"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "教师面试特别看重反思",
                                      "lines": [
                                            "案例不需要以“完美成功”结束。重点是说明你如何观察学生、调整策略，并把经验转化为下一次更好的教学决定。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s3"
                    },
                    {
                          "heading": "四、常见教师面试问题",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "与其逐题背答案，更有效的方式是按主题准备证据。下面的表格可以作为练习框架。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "问题主题",
                                            "准备重点"
                                      ],
                                      "rows": [
                                            [
                                                  "**教学理念与个人背景**",
                                                  "为什么成为教师、你是什么样的教师、能为学校带来什么。把个人故事与学校需求联系起来。"
                                            ],
                                            [
                                                  "**课程与教学设计**",
                                                  "说明目标、活动与评估如何对应；如何检查理解；如何根据 Exit Ticket、观察或学生作品规划下一步。"
                                            ],
                                            [
                                                  "**Classroom Management**",
                                                  "说明如何教授常规、表达期待、使用积极强化、了解行为原因、记录问题并保护学生尊严。"
                                            ],
                                            [
                                                  "**Differentiation 与学生支持**",
                                                  "用具体课堂例子解释 visual supports、sentence frames、modeling、chunking、flexible grouping 等方法。"
                                            ],
                                            [
                                                  "**合作与反馈**",
                                                  "展示主动沟通、共同目标、明确分工、尊重不同观点、接受反馈和与家庭沟通的能力。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "避免只罗列术语",
                                      "lines": [
                                            "使用 UDL、UbD、Scaffolding 或 Differentiation 等专业词汇时，需要配合一个真实的课堂例子，说明你何时使用、为什么使用以及学生有什么变化。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s4"
                    },
                    {
                          "heading": "五、国际申请者如何呈现自己的经历？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "缺少美国全职教学经历，并不等于缺少可用的专业证据。关键是把已有经历翻译成学校能够识别的教学能力。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "已有经历",
                                            "可以体现的能力"
                                      ],
                                      "rows": [
                                            [
                                                  "**国内学校、培训机构或语言中心**",
                                                  "课程设计、课堂管理、大班教学、评估与家校沟通"
                                            ],
                                            [
                                                  "**Student Teaching / Classroom Observation**",
                                                  "美国课堂经验、标准对齐、教学反思、与导师合作"
                                            ],
                                            [
                                                  "**Tutoring / Afterschool / Summer Camp**",
                                                  "小组教学、个别支持、活动设计、学生关系建立"
                                            ],
                                            [
                                                  "**志愿项目或学生社团**",
                                                  "项目管理、跨文化沟通、组织与协作"
                                            ],
                                            [
                                                  "**Research Assistant / 课程项目**",
                                                  "数据分析、资料整理、课程研究和解决问题"
                                            ],
                                            [
                                                  "**成人语言教学**",
                                                  "目标导向教学、差异化支持、学习者动机管理"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "从经历到证据",
                                      "lines": [
                                            "不要只说：“I taught English in China for two years.” 可以进一步说明：“I taught classes of more than 40 students. That experience helped me develop clear routines, structured group work and multiple ways to check student understanding during a large-group lesson.”"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s5"
                    },
                    {
                          "heading": "六、Demo Lesson 主要考察什么？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "Demo Lesson 通常用于观察候选人能否把教学计划转化为清楚、可执行的课堂行动。招聘团队常关注以下能力："
                                },
                                {
                                      "type": "list",
                                      "ordered": false,
                                      "items": [
                                            "把复杂内容分解为可学习的步骤",
                                            "清楚、自信地呈现教学内容",
                                            "与学生建立互动并维持课堂节奏",
                                            "检查学生是否理解",
                                            "在学生不理解时及时调整",
                                            "设计完整且可执行的教学流程"
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "试讲前必须确认"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "确认项目",
                                            "需要问清楚的问题"
                                      ],
                                      "rows": [
                                            [
                                                  "**学生与课程**",
                                                  "哪个年级和课程？学生人数？目前正在学习什么？"
                                            ],
                                            [
                                                  "**时间与目标**",
                                                  "试讲多长？是否指定学习目标、标准或内容？"
                                            ],
                                            [
                                                  "**环境与设备**",
                                                  "教室有哪些材料和设备？有多少布置时间？"
                                            ],
                                            [
                                                  "**试讲对象**",
                                                  "是真实学生、教师团队，还是招聘委员会？"
                                            ],
                                            [
                                                  "**提交要求**",
                                                  "是否需要正式 Lesson Plan、讲义或其他材料？"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "准备备用方案",
                                      "lines": [
                                            "提前准备不依赖投影仪或 Smart Board 的版本，并自备关键材料和复印件。"
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "15–25 分钟短试讲结构"
                                },
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "Warm-up",
                                                  "desc": "用图片、问题、快速投票或简短任务激活旧知识。"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "Learning Objective",
                                                  "desc": "用学生能够理解的语言说明本节课要学什么、最后要完成什么。"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "Modeling",
                                                  "desc": "教师示范新知识或任务完成过程。"
                                            },
                                            {
                                                  "number": "4",
                                                  "title": "Guided Practice",
                                                  "desc": "学生在句型、示例或教师支持下尝试。"
                                            },
                                            {
                                                  "number": "5",
                                                  "title": "Independent / Collaborative Practice",
                                                  "desc": "学生独立或合作运用新知识。"
                                            },
                                            {
                                                  "number": "6",
                                                  "title": "Check for Understanding",
                                                  "desc": "通过提问、观察、手势、白板或简短任务判断学生是否理解。"
                                            },
                                            {
                                                  "number": "7",
                                                  "title": "Exit Ticket / Closure",
                                                  "desc": "让学生展示是否达到学习目标，并简要总结。"
                                            }
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "控制内容量",
                                      "lines": [
                                            "短试讲的重点是让招聘团队看到完整的学习过程。清楚、连贯和能够检查学生学习，比塞入大量内容更重要。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s6"
                    },
                    {
                          "heading": "七、面试中怎样讲好自己的故事？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "一个有说服力的求职故事，应该把个人经历、教学选择和学校需求连接起来。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "故事要回答的问题",
                                            "表达方向"
                                      ],
                                      "rows": [
                                            [
                                                  "**为什么选择教育？**",
                                                  "说明影响你的具体经历或问题，而不只说“喜欢孩子”。"
                                            ],
                                            [
                                                  "**为什么选择这个学科？**",
                                                  "连接个人背景、专业学习和学生需求。"
                                            ],
                                            [
                                                  "**经历如何塑造教学方式？**",
                                                  "用一个案例说明你如何设计、调整或反思教学。"
                                            ],
                                            [
                                                  "**你能带来什么？**",
                                                  "指出可以支持的学生群体、课程或学校目标。"
                                            ],
                                            [
                                                  "**你还在学习什么？**",
                                                  "展示自我觉察、反馈意识和成长方向。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "非传统背景也可以成为优势",
                                      "lines": [
                                            "从其他行业转入教育的申请者，可以突出数据分析、问题解决、项目管理、跨文化协作、流程设计或科技工具使用等可迁移能力。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s7"
                    },
                    {
                          "heading": "八、准备推荐人和求职材料",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "进入学校招聘阶段后，建议提前准备两至三位可联系的推荐人，并在提交信息前获得对方同意。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "推荐人类型",
                                            "联系前应提供"
                                      ],
                                      "rows": [
                                            [
                                                  "**Cooperating Teacher / Student Teaching 指导教师**",
                                                  "申请职位、学校名称、最新 Resume、希望重点说明的经历"
                                            ],
                                            [
                                                  "**University Supervisor / 教授 / 项目负责人**",
                                                  "职位方向、相关课程或项目、可能收到联系的时间"
                                            ],
                                            [
                                                  "**现任或前任学校主管 / 教育项目负责人**",
                                                  "职责范围、教学成果、与你合作的具体情境"
                                            ]
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "面试当天可准备以下材料："
                                },
                                {
                                      "type": "list",
                                      "ordered": false,
                                      "items": [
                                            "数份 Resume",
                                            "Teaching Portfolio",
                                            "Sample Lesson Plan",
                                            "删除个人信息后的学生作品样本",
                                            "教师资格证明",
                                            "推荐人名单"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s8"
                    },
                    {
                          "heading": "九、候选人也需要向学校提问",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "反问环节既能体现专业度，也能帮助你判断职位是否适合自己。建议准备一至三个问题。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "了解方向",
                                            "可使用的问题"
                                      ],
                                      "rows": [
                                            [
                                                  "**职位重点**",
                                                  "What are the main priorities for this position? / What would success look like during the first year?"
                                            ],
                                            [
                                                  "**课程与年级**",
                                                  "What courses and grade levels would I teach? / What curriculum materials are currently used?"
                                            ],
                                            [
                                                  "**团队与支持**",
                                                  "How does the department collaborate and plan? / What support is available for new teachers?"
                                            ],
                                            [
                                                  "**成长机会**",
                                                  "Is there a mentoring program? / What professional development opportunities are available?"
                                            ],
                                            [
                                                  "**课程自主度**",
                                                  "How much flexibility would I have in curriculum development?"
                                            ],
                                            [
                                                  "**招聘时间线**",
                                                  "What is the anticipated hiring timeline?"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "提问原则",
                                      "lines": [
                                            "避免只询问官网已经明确说明的内容。优先了解学生、教学、团队支持、职位范围和未来发展。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s9"
                    },
                    {
                          "heading": "十、面试后的 Follow-up",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "建议在面试后的一至两个工作日内发送个性化感谢邮件。如果 Demo Lesson 单独安排，也应在试讲后发送相应邮件。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "邮件内容",
                                            "建议写法"
                                      ],
                                      "rows": [
                                            [
                                                  "**感谢**",
                                                  "感谢对方安排面试或试讲。"
                                            ],
                                            [
                                                  "**具体连接**",
                                                  "提及交流中让你印象深刻的一项课程、学生支持或团队信息。"
                                            ],
                                            [
                                                  "**再次匹配**",
                                                  "用一两句话说明你的经验如何回应职位需求。"
                                            ],
                                            [
                                                  "**下一步**",
                                                  "表达继续参与招聘流程的意愿，并询问预计时间线。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "等待期间继续推进",
                                      "lines": [
                                            "学校未立即回复，可能与预算、课程安排、内部审批或其他候选人的面试时间有关。继续申请其他学校，并按约定时间进行礼貌 Follow-up。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s10"
                    },
                    {
                          "heading": "面试准备清单",
                          "blocks": [
                                {
                                      "type": "checklist",
                                      "title": "面试前",
                                      "items": [
                                            "调查学校使命、学生和课程",
                                            "准备一分钟自我介绍",
                                            "准备六至八个教学案例",
                                            "练习常见问题",
                                            "准备可调整的 Demo Lesson",
                                            "更新 Resume 和 Teaching Portfolio",
                                            "联系推荐人",
                                            "准备一至三个反问问题",
                                            "确认时间、地点、形式和参与人员"
                                      ]
                                },
                                {
                                      "type": "checklist",
                                      "title": "面试当天",
                                      "items": [
                                            "提前到达，或提前测试线上设备",
                                            "携带 Resume 和教学材料",
                                            "对所有工作人员保持专业和礼貌",
                                            "使用具体例子回答问题",
                                            "记录学校提供的重要信息",
                                            "确认下一步流程和招聘时间线"
                                      ]
                                },
                                {
                                      "type": "checklist",
                                      "title": "面试后",
                                      "items": [
                                            "记录面试问题和自己的回答",
                                            "完成自我反思",
                                            "一至两个工作日内发送感谢邮件",
                                            "更新求职追踪表",
                                            "按约定时间 Follow-up",
                                            "继续申请其他职位"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s11"
                    },
                    {
                          "heading": "最后的建议",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "学校招聘团队通常希望看到一位能够清楚解释教学决定、理解学生需求、与团队合作、接受反馈，并持续反思成长的教师。"
                                },
                                {
                                      "type": "callout",
                                      "title": "面试回答的核心公式",
                                      "lines": [
                                            "我做过什么 → 为什么这样做 → 学生有什么变化 → 下一次我会如何改进"
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "当你能用具体、真实、可验证的课堂行动解释自己的教育理念时，回答就会比单纯使用专业术语更有说服力。"
                                }
                          ],
                          "level": 1
                    },
                    {
                          "heading": "资料来源",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "本文根据 EduVenture“纽约教师求职分享会 Session 1”课件整理。招聘流程、面试问题和 Demo Lesson 建议参考 NYC Public Schools 与 TeachNYC 官方招聘资源。具体流程可能因学校、职位和学年而异，请以招聘学校提供的信息为准。"
                                }
                          ],
                          "level": 1
                    }
              ]
        },
        {
              "id": "building-us-teaching-experience",
              "title": "国际学生如何积累美国教育与教学经验",
              "summary": "从 Student Teaching、Tutoring 到研究、志愿服务与工作授权",
              "leadCallout": {
                    "title": "核心观点",
                    "lines": [
                          "一段高质量、职责清楚、能够获得反馈的短期经历，往往比一段内容模糊的长期经历更有价值。"
                    ]
              },
              "nav": [
                    {
                          "label": "一、为什么美国本地教育经验有帮助？",
                          "anchor": "s1"
                    },
                    {
                          "label": "二、可以积累哪些教学类经验？",
                          "anchor": "s2"
                    },
                    {
                          "label": "三、研究类经验和志愿服务有价值吗？",
                          "anchor": "s3"
                    },
                    {
                          "label": "四、F-1 国际学生必须注意：无薪不等于无需授权",
                          "anchor": "s4"
                    },
                    {
                          "label": "五、CPT、OPT 与校内工作的基本区别",
                          "anchor": "s5"
                    },
                    {
                          "label": "六、从哪里寻找教育和教学机会？",
                          "anchor": "s6"
                    },
                    {
                          "label": "七、怎样选择真正有价值的机会？",
                          "anchor": "s7"
                    },
                    {
                          "label": "八、如何把中国或其他国家的经历转化为优势？",
                          "anchor": "s8"
                    },
                    {
                          "label": "九、积累经历时需要保存什么？",
                          "anchor": "s9"
                    },
                    {
                          "label": "十、如何把经历写进 Resume？",
                          "anchor": "s10"
                    },
                    {
                          "label": "十一、如何把经历用于面试？",
                          "anchor": "s11"
                    },
                    {
                          "label": "教育经验积累行动清单",
                          "anchor": "s12"
                    }
              ],
              "sections": [
                    {
                          "heading": "写在前面",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "很多国际学生在准备美国教师求职时，都会担心自己缺少美国学校的全职教学经验。美国本地经验确实有帮助，但有效的“美国教育经验”并不只来自正式教师职位。"
                                },
                                {
                                      "type": "text",
                                      "text": "Student Teaching、Tutoring、课后项目、社区语言学校、研究助理、课程开发、志愿服务和社区项目，都可能成为有说服力的求职证据。关键是有计划地选择机会，并能具体说明自己做了什么、服务了谁、如何调整教学，以及取得了什么结果。"
                                }
                          ],
                          "level": 1
                    },
                    {
                          "heading": "一、为什么美国本地教育经验有帮助？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "招聘团队通常不仅关注你在哪里工作过，也关注你是否能用具体证据证明自己理解学生、课堂与学校协作。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "学校想看到的证据",
                                            "可以怎样证明"
                                      ],
                                      "rows": [
                                            [
                                                  "**真正接触过学生**",
                                                  "说明学生年龄、语言背景、班级规模和你的具体职责。"
                                            ],
                                            [
                                                  "**能够设计并执行教学**",
                                                  "提供 Lesson Plan、活动设计、学生作品或教学案例。"
                                            ],
                                            [
                                                  "**理解课堂管理与常规**",
                                                  "描述如何建立流程、回应行为问题并保护学生尊严。"
                                            ],
                                            [
                                                  "**能够根据学习表现调整**",
                                                  "说明你使用了哪些观察、作业或形成性评估证据。"
                                            ],
                                            [
                                                  "**能够合作并接受反馈**",
                                                  "说明你如何与教师、家长、主管或项目团队沟通。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "较弱",
                                            "Volunteered at an afterschool program."
                                      ],
                                      "rows": [
                                            [
                                                  "**更具体**",
                                                  "Designed and facilitated weekly small-group literacy activities for 12 multilingual middle school students and adjusted instructional supports based on student participation and written work."
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "积累经验时同时问两个问题",
                                      "lines": [
                                            "我能在这里学习和实践什么？以后我能用哪些具体证据介绍这段经历？"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s1"
                    },
                    {
                          "heading": "二、可以积累哪些教学类经验？",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "经验类型",
                                            "最适合积累的能力"
                                      ],
                                      "rows": [
                                            [
                                                  "**Student Teaching**",
                                                  "课堂观察、备课、完整授课、评估、团队会议、家校沟通和接受导师反馈。"
                                            ],
                                            [
                                                  "**Tutoring**",
                                                  "诊断具体困难、个别化支持、即时反馈、记录进步和调整教学节奏。"
                                            ],
                                            [
                                                  "**Afterschool / Summer Program**",
                                                  "小组教学、活动设计、行为管理、项目式学习、文化活动与家庭沟通。"
                                            ],
                                            [
                                                  "**社区语言学校 / 中文学校**",
                                                  "Heritage Learners、非华裔学习者、水平差异、目标语言使用与家长沟通。"
                                            ],
                                            [
                                                  "**成人教育**",
                                                  "需求分析、真实情境任务、清楚解释、尊重反馈和支持不同教育背景的学习者。"
                                            ],
                                            [
                                                  "**Homeschooling / 家庭学习支持**",
                                                  "个别化课程、学习进度管理、跨学科设计和家庭沟通。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "Student Teaching 不只是毕业要求",
                                      "lines": [
                                            "它还可能帮助你获得推荐人、教学材料、学生作品样本、面试案例、Demo Lesson 灵感和学校招聘信息。使用学生材料时必须删除身份信息并遵守学校规定。"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "Tutoring 也要具体呈现",
                                      "lines": [
                                            "不要只说“我辅导过学生”。说明学生年龄、学习目标、使用的方法、遇到的困难，以及你如何判断学生有所进步。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s2"
                    },
                    {
                          "heading": "三、研究类经验和志愿服务有价值吗？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "研究和志愿经历不一定包含完整课堂教学，但可以培养教师岗位同样需要的观察、分析、倾听、项目管理和记录能力。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "研究经历",
                                            "可以转化的教师能力"
                                      ],
                                      "rows": [
                                            [
                                                  "**分析学生数据**",
                                                  "根据数据调整教学"
                                            ],
                                            [
                                                  "**进行访谈或调查**",
                                                  "主动倾听学生与家庭"
                                            ],
                                            [
                                                  "**文献综述**",
                                                  "使用研究支持教学决策"
                                            ],
                                            [
                                                  "**项目协调**",
                                                  "管理课程、活动和时间线"
                                            ],
                                            [
                                                  "**撰写报告**",
                                                  "清楚记录学生进展"
                                            ],
                                            [
                                                  "**研究多语言学习者**",
                                                  "理解语言、文化与公平问题"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "介绍研究经历时强调“你的角色”",
                                      "lines": [
                                            "例如：As a research assistant, I coded interview data from multilingual students and identified recurring challenges related to classroom participation. This experience strengthened my ability to listen carefully to student perspectives and consider how classroom structures affect participation."
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "志愿服务真正有价值的条件"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "有价值的特征",
                                            "判断方法"
                                      ],
                                      "rows": [
                                            [
                                                  "**持续参与**",
                                                  "持续数周或一个学期，而不只是一次性活动。"
                                            ],
                                            [
                                                  "**职责明确**",
                                                  "负责学生小组、课程活动、家庭沟通或项目任务。"
                                            ],
                                            [
                                                  "**有监督与反馈**",
                                                  "有人观察、指导并能在了解你表现后担任推荐人。"
                                            ],
                                            [
                                                  "**能够形成成果**",
                                                  "可以保存非敏感材料、记录学生反应并形成面试案例。"
                                            ]
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s3"
                    },
                    {
                          "heading": "四、F-1 国际学生必须注意：无薪不等于无需授权",
                          "blocks": [
                                {
                                      "type": "callout",
                                      "title": "重要身份提醒",
                                      "lines": [
                                            "职位是否需要授权，不能只看是否领取工资，也不能只看岗位名称。Volunteer、Intern、Fellow 或 Assistant 等名称本身，不能决定该活动是否属于合法志愿服务或就业。"
                                      ]
                                },
                                {
                                      "type": "text",
                                      "text": "在开始任何校外实习、辅导、研究、志愿服务或教学活动前，应把完整职位描述交给学校 DSO，并说明薪酬、学分、每周时间、工作地点和具体职责。"
                                },
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "准备完整信息",
                                                  "desc": "保存职位描述、Offer Letter、工作地点、每周时间、是否有薪和是否获得学分。"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "先联系 DSO",
                                                  "desc": "询问该活动是否需要 CPT、OPT 或其他授权，以及学校的课程和申请要求。"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "获得批准后再开始",
                                                  "desc": "确认 I-20、EAD 或其他必要文件上的雇主、日期和工作范围。"
                                            },
                                            {
                                                  "number": "4",
                                                  "title": "保存全部记录",
                                                  "desc": "保留 Offer Letter、I-20、EAD、培训和背景审查文件。"
                                            }
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "不要照搬同学的情况",
                                      "lines": [
                                            "不同学校可能有不同的 CPT 课程、学分与申请流程。朋友或同学的经历不能代替 DSO 对你个人记录作出的判断。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s4"
                    },
                    {
                          "heading": "五、CPT、OPT 与校内工作的基本区别",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "下面的对照表只用于理解概念，不能代替学校 DSO 或专业法律意见。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "类型",
                                            "常见时间",
                                            "核心要求与审批"
                                      ],
                                      "rows": [
                                            [
                                                  "**On-campus Employment**",
                                                  "在校期间",
                                                  "符合校内工作定义和工时要求；先由学校或 DSO 确认。"
                                            ],
                                            [
                                                  "**CPT**",
                                                  "完成学位前",
                                                  "与课程体系和专业直接相关；由 DSO 授权并记录在 Form I-20 上。"
                                            ],
                                            [
                                                  "**Pre-completion OPT**",
                                                  "完成学位前",
                                                  "与专业直接相关；DSO 推荐后向 USCIS 申请。"
                                            ],
                                            [
                                                  "**Post-completion OPT**",
                                                  "毕业后",
                                                  "与专业直接相关；获得有效 EAD 并到达授权日期后开始。"
                                            ],
                                            [
                                                  "**真正的志愿服务**",
                                                  "视情况而定",
                                                  "无报酬且岗位性质不能构成未经授权就业；应先咨询 DSO。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "CPT 提醒",
                                      "lines": [
                                            "CPT 必须在获批日期和雇主范围内进行。累计一年或以上的全职 CPT，可能影响同一学历层级的 Post-completion OPT 资格。"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "OPT 提醒",
                                      "lines": [
                                            "OPT 工作必须与所学专业直接相关。即使是无薪实习或志愿形式，也要满足相应的专业相关性、工作时间和记录要求。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s5"
                    },
                    {
                          "heading": "六、从哪里寻找教育和教学机会？",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "渠道",
                                            "使用方式"
                                      ],
                                      "rows": [
                                            [
                                                  "**学校内部**",
                                                  "Career Center、Handshake、学院 Newsletter、Department Listserv、Research Center、Student Teaching Office 和校内工作平台。"
                                            ],
                                            [
                                                  "**教授与研究团队**",
                                                  "结合教授的具体项目发送邮件，说明专业、兴趣、可贡献技能和每周可投入时间。"
                                            ],
                                            [
                                                  "**社区组织**",
                                                  "联系中文学校、课后项目、非营利机构、图书馆、博物馆和暑期项目，询问 Tutor、助教或课程支持机会。"
                                            ],
                                            [
                                                  "**公开平台**",
                                                  "LinkedIn、Indeed、专业协会和教育机构网站。"
                                            ],
                                            [
                                                  "**专业人脉**",
                                                  "实习导师、Placement Mentor、校友、项目负责人、教师社群和社区成员。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "主动联系教授的邮件需要具体",
                                      "lines": [
                                            "说明你是谁、专业与研究兴趣、关注教授的哪项工作、你可以贡献什么技能、每周可投入多少时间，并附上 Resume 或 CV。"
                                      ]
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "过于笼统",
                                            "Do you have any opportunities?"
                                      ],
                                      "rows": [
                                            [
                                                  "**更有效**",
                                                  "I am a TESOL master’s student interested in multilingual education and classroom participation. I would be interested in supporting literature review, interview coding or classroom-based data collection. I have experience with qualitative coding and Mandarin-English bilingual communication."
                                            ]
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s6"
                    },
                    {
                          "heading": "七、怎样选择真正有价值的机会？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "面对一个实习、志愿或兼职机会，可以从以下五个维度快速评估。"
                                },
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "专业相关性",
                                                  "desc": "是否与你未来希望申请的学科、年龄段或教育岗位有关？"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "实际职责",
                                                  "desc": "你会设计活动、教授小组、提供反馈、分析作品，还是只做模糊的“协助”？"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "监督与反馈",
                                                  "desc": "是否有人观察、指导、回答问题，并可能成为推荐人？"
                                            },
                                            {
                                                  "number": "4",
                                                  "title": "持续时间",
                                                  "desc": "是否足以形成具体成果、学生进步证据和完整教学案例？"
                                            },
                                            {
                                                  "number": "5",
                                                  "title": "身份与时间可行性",
                                                  "desc": "是否符合工作授权要求？课程、通勤、工作量和背景审查是否可行？"
                                            }
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "一个简单判断标准",
                                      "lines": [
                                            "优先选择：合法可参与 + 职责清楚 + 能直接练习专业能力 + 有监督反馈 + 能形成证据的机会。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s7"
                    },
                    {
                          "heading": "八、如何把中国或其他国家的经历转化为优势？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "国际申请者不需要隐藏海外经历。重点是从职位名称转向可迁移能力，并使用美国招聘团队熟悉的专业语言。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "原始经历",
                                            "转化后的表达重点",
                                            "可体现能力"
                                      ],
                                      "rows": [
                                            [
                                                  "**在中国教过40人的英语班**",
                                                  "建立清晰常规、组织合作任务，并用快速形成性检查监测参与和理解。",
                                                  "Classroom Management、Routines、Collaborative Learning、Formative Assessment"
                                            ],
                                            [
                                                  "**在培训机构教过中文**",
                                                  "为不同水平学习者设计差异化课程，并定期与家庭沟通学习目标和进展。",
                                                  "Differentiation、Lesson Planning、Family Communication、Progress Monitoring"
                                            ],
                                            [
                                                  "**组织过春节活动**",
                                                  "协调全校文化项目、监督学生团队，并为不同语言背景的参与者设计互动活动。",
                                                  "Leadership、Project Management、Student Engagement、Cross-cultural Communication"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "转化公式",
                                      "lines": [
                                            "经历背景 + 具体行动 + 使用的方法 + 服务对象 + 可观察结果"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s8"
                    },
                    {
                          "heading": "九、积累经历时需要保存什么？",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "记录类别",
                                            "建议保存的内容"
                                      ],
                                      "rows": [
                                            [
                                                  "**基本信息**",
                                                  "机构、项目名称、开始与结束日期、每周投入时间、主管信息。"
                                            ],
                                            [
                                                  "**服务对象**",
                                                  "学生年龄、语言背景、班级规模和学习需求。"
                                            ],
                                            [
                                                  "**职责与材料**",
                                                  "Lesson Plan、课程材料、活动设计、会议记录和非敏感成果。"
                                            ],
                                            [
                                                  "**证据与反思**",
                                                  "学生反应、学习证据、主管反馈、具体调整和可量化成果。"
                                            ],
                                            [
                                                  "**合规文件**",
                                                  "工作授权、I-20、EAD、Offer Letter、背景审查和培训记录。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "每次活动后快速记录",
                                      "lines": [
                                            "今天我做了什么？学生有什么反应？我遇到了什么困难？我进行了什么调整？这段经历可以回答哪一道面试问题？"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s9"
                    },
                    {
                          "heading": "十、如何把经历写进 Resume？",
                          "blocks": [
                                {
                                      "type": "callout",
                                      "title": "Resume 公式",
                                      "lines": [
                                            "Action Verb + What You Did + Who You Served + Method + Result"
                                      ]
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "较弱表达",
                                            "更有信息量的表达"
                                      ],
                                      "rows": [
                                            [
                                                  "**Helped students**",
                                                  "Facilitated small-group literacy instruction for multilingual learners and adjusted activities based on formative assessment data."
                                            ],
                                            [
                                                  "**Assisted the teacher**",
                                                  "Designed and taught weekly beginner Mandarin lessons for 18 middle school students using visual supports, sentence frames and collaborative speaking tasks."
                                            ],
                                            [
                                                  "**Participated in activities**",
                                                  "Coordinated family-facing cultural events serving more than 100 students and community members."
                                            ],
                                            [
                                                  "**Responsible for research tasks**",
                                                  "Analyzed qualitative interview data for a bilingual education research project and presented key findings to the research team."
                                            ]
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s10"
                    },
                    {
                          "heading": "十一、如何把经历用于面试？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "一段经历可以回答多道面试题。可以提前把每个项目整理成一张“案例卡”。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "案例卡字段",
                                            "需要准备的内容"
                                      ],
                                      "rows": [
                                            [
                                                  "**Situation**",
                                                  "当时发生了什么？"
                                            ],
                                            [
                                                  "**Student Need**",
                                                  "学生需要什么支持？"
                                            ],
                                            [
                                                  "**Action**",
                                                  "你具体做了什么？"
                                            ],
                                            [
                                                  "**Evidence**",
                                                  "你如何知道策略是否有效？"
                                            ],
                                            [
                                                  "**Reflection**",
                                                  "下一次会怎样调整？"
                                            ],
                                            [
                                                  "**Interview Questions**",
                                                  "这段经历可以回答哪些问题？"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "一段课后项目经历可以对应的问题",
                                      "lines": [
                                            "How do you build relationships with students? / How do you respond when a student refuses to participate? / How do you differentiate instruction? / Tell us about a challenge you faced. / How do you reflect on your teaching?"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s11"
                    },
                    {
                          "heading": "教育经验积累行动清单",
                          "blocks": [
                                {
                                      "type": "checklist",
                                      "title": "开始寻找前",
                                      "items": [
                                            "明确未来希望教授的科目和年龄段",
                                            "盘点已有教学、研究和活动经历",
                                            "更新 Resume 或 CV",
                                            "确认 F-1 身份和工作授权要求",
                                            "联系 DSO 了解 CPT、OPT 和校内工作规定",
                                            "准备简短的机会询问邮件"
                                      ]
                                },
                                {
                                      "type": "checklist",
                                      "title": "评估机会时",
                                      "items": [
                                            "阅读完整职位描述并确认具体职责",
                                            "确认是否直接接触学生",
                                            "确认是否有指导和反馈",
                                            "确认时间、通勤和学业是否可行",
                                            "确认是否需要 CPT、OPT 或其他授权",
                                            "了解背景审查和培训要求"
                                      ]
                                },
                                {
                                      "type": "checklist",
                                      "title": "参与过程中",
                                      "items": [
                                            "主动观察并记录",
                                            "争取承担具体任务",
                                            "定期寻求反馈",
                                            "保存 Lesson Plan 和非敏感成果",
                                            "保护学生隐私",
                                            "与主管和同事建立专业关系"
                                      ]
                                },
                                {
                                      "type": "checklist",
                                      "title": "结束后",
                                      "items": [
                                            "总结职责和成果",
                                            "更新 Resume",
                                            "整理面试案例",
                                            "请求反馈或推荐",
                                            "保持适当联系",
                                            "记录这段经历对职业方向的影响"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s12"
                    },
                    {
                          "heading": "最后的建议",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "国际学生不需要等待一个“完美实习”。更有效的方法，是从合法可参与、职责清楚并能够获得反馈的机会开始，逐步建立自己的经验组合。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "建议组合",
                                            "目标"
                                      ],
                                      "rows": [
                                            [
                                                  "**一段直接教学经历**",
                                                  "证明你能设计、实施和调整教学。"
                                            ],
                                            [
                                                  "**一段学生支持或社区经历**",
                                                  "证明你能建立关系并理解学习者需求。"
                                            ],
                                            [
                                                  "**一段研究或课程设计经历**",
                                                  "证明你能分析、规划并使用证据。"
                                            ],
                                            [
                                                  "**一位真正了解你工作的推荐人**",
                                                  "为你的专业表现提供可信支持。"
                                            ],
                                            [
                                                  "**几个具体案例**",
                                                  "可以直接用于 Resume、面试和 Teaching Portfolio。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "衡量一段经历价值的六个问题",
                                      "lines": [
                                            "1. 我服务了哪些学习者？",
                                            "2. 我承担了什么责任？",
                                            "3. 我使用了哪些教学方法？",
                                            "4. 我如何判断学生的需要和进步？",
                                            "5. 我从中学到了什么？",
                                            "6. 这段经历如何帮助我成为更好的教师？"
                                      ]
                                }
                          ],
                          "level": 1
                    },
                    {
                          "heading": "资料来源与免责声明",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "本文根据 EduVenture“纽约教师求职分享会 Session 1”中关于教育实习、教学经验和 Networking 的内容整理。F-1 学生就业信息参考美国国土安全部、ICE、USCIS 及美国劳工部公开资料。"
                                },
                                {
                                      "type": "text",
                                      "text": "移民身份、工作授权和劳动法规具有个案差异，也可能更新。本文仅用于一般信息分享，不构成法律意见。参与任何校外工作、实习、辅导、研究或志愿活动前，请向所在学校的 DSO 确认个人情况；复杂情形应咨询合格的移民法律专业人士。"
                                }
                          ],
                          "level": 1
                    }
              ]
        },
        {
              "id": "teacher-networking",
              "title": "教师求职中的 Networking：如何建立真正有效的专业人脉",
              "summary": "如何建立并维护真正有效的专业人脉，而不只是请人内推。",
              "leadCallout": {
                    "title": "核心定义",
                    "lines": [
                          "Networking = 交换真实信息 + 建立专业信任 + 长期维护关系。职位推荐只是其中一种可能结果。"
                    ]
              },
              "nav": [
                    {
                          "label": "一、Networking 为什么能帮助教师求职？",
                          "anchor": "s1"
                    },
                    {
                          "label": "二、先避开四个常见误区",
                          "anchor": "s2"
                    },
                    {
                          "label": "三、先建立自己的“三圈人脉地图”",
                          "anchor": "s3"
                    },
                    {
                          "label": "四、教师求职中最实用的 Networking 渠道",
                          "anchor": "s4"
                    },
                    {
                          "label": "五、如何进行一次有效的 Informational Interview？",
                          "anchor": "s5"
                    },
                    {
                          "label": "六、什么情况下别人更愿意推荐你？",
                          "anchor": "s6"
                    },
                    {
                          "label": "七、请求介绍时怎么说？",
                          "anchor": "s7"
                    },
                    {
                          "label": "八、如何自然维护专业关系？",
                          "anchor": "s8"
                    },
                    {
                          "label": "九、国际学生 Networking 时的注意事项",
                          "anchor": "s9"
                    },
                    {
                          "label": "十、准备三个长度的 Networking 自我介绍",
                          "anchor": "s10"
                    },
                    {
                          "label": "十一、30 天 Networking 行动计划",
                          "anchor": "s11"
                    },
                    {
                          "label": "Networking 沟通检查清单",
                          "anchor": "s12"
                    }
              ],
              "sections": [
                    {
                          "heading": "写在前面",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "“多 Networking”并不意味着突然联系陌生人，请对方帮你找工作或直接内推。真正有效的 Networking，是通过持续、专业和互相尊重的交流，让别人逐渐了解你的目标、能力、兴趣和可靠程度。"
                                },
                                {
                                      "type": "text",
                                      "text": "教师求职中的机会，常来自大学教授、实习导师、校友、同事、招聘会、教师社群、LinkedIn，以及求职过程中认识的教育工作者。共同点是：关系已经积累了一定的信任。"
                                }
                          ],
                          "level": 1
                    },
                    {
                          "heading": "一、Networking 为什么能帮助教师求职？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "学校招聘信息不一定同时出现在所有平台。一位导师、教师或校友，可能提前知道职位变化、短期代课、课后项目扩招、研究助理需求，或学校正在搭建新的中文、双语或 ENL 项目。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "Networking 能带来的信息",
                                            "具体价值"
                                      ],
                                      "rows": [
                                            [
                                                  "**尚未广泛发布的机会**",
                                                  "更早了解职位、项目、代课或研究需求。"
                                            ],
                                            [
                                                  "**学校内部情况**",
                                                  "了解学校真正重视什么、团队如何合作、是否支持新教师。"
                                            ],
                                            [
                                                  "**招聘流程**",
                                                  "了解面试由谁负责、招聘时间、职位范围和常见问题。"
                                            ],
                                            [
                                                  "**求职材料反馈**",
                                                  "判断 Resume、自我介绍和教学案例是否符合行业习惯。"
                                            ],
                                            [
                                                  "**长期职业支持**",
                                                  "获得导师、同行、潜在推荐人和专业社群。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "Networking 的主要价值",
                                      "lines": [
                                            "它帮助你减少信息差、理解行业并建立可信关系，而不只是“获得一个职位”。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s1"
                    },
                    {
                          "heading": "二、先避开四个常见误区",
                          "blocks": [
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "Networking 就是请别人内推",
                                                  "desc": "先询问经验和信息。关系逐步建立后，再判断是否适合提出更具体的请求。"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "只有校长或教授值得认识",
                                                  "desc": "同学、年轻校友、新教师、项目工作人员和其他申请者，往往更了解你当前的实际问题。"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "只有找工作时才联系别人",
                                                  "desc": "分享资源、表达感谢、反馈建议效果和更新进展，都是自然的维护方式。"
                                            },
                                            {
                                                  "number": "4",
                                                  "title": "没有回复就是明确拒绝",
                                                  "desc": "教师和校长工作繁忙。可以礼貌跟进一次；仍无回复后，继续联系其他人。"
                                            }
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "不建议作为第一条消息",
                                      "lines": [
                                            "Can you refer me to your school? / Can you help me get a teaching job? / Can you introduce me to your principal?"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "更适合的第一步",
                                      "lines": [
                                            "I am beginning my search for Mandarin teaching positions and would appreciate hearing about your experience working in NYC schools."
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s2"
                    },
                    {
                          "heading": "三、先建立自己的“三圈人脉地图”",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "圈层",
                                            "包括哪些人",
                                            "适合的行动"
                                      ],
                                      "rows": [
                                            [
                                                  "**第一圈：直接认识**",
                                                  "教授、项目导师、Student Teaching 指导教师、主管、同学、校友、项目同事。",
                                                  "先从更新近况、请求具体建议或表达感谢开始。"
                                            ],
                                            [
                                                  "**第二圈：共同关系**",
                                                  "教授的教师联系人、校友的同事、实习导师的同事、朋友认识的教育工作者。",
                                                  "请共同联系人做一个范围清楚、负担较小的介绍。"
                                            ],
                                            [
                                                  "**第三圈：共同背景**",
                                                  "同校校友、同专业教师、相同学科、相似职业转型、同会议参与者。",
                                                  "说明连接点，并提出 10–15 分钟的具体交流请求。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "请求介绍越具体，对方越容易帮助",
                                      "lines": [
                                            "与其说“能不能介绍一个校长”，可以说：“如果合适，是否可以介绍一位愿意分享 10–15 分钟经验的在职中文教师？我想了解新教师进入学校后的课程准备。”"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s3"
                    },
                    {
                          "heading": "四、教师求职中最实用的 Networking 渠道",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "渠道",
                                            "最适合获得什么"
                                      ],
                                      "rows": [
                                            [
                                                  "**教授与教师教育项目**",
                                                  "学校和项目介绍、研究机会、校友联系、Resume 反馈、推荐信和招聘时间建议。"
                                            ],
                                            [
                                                  "**Student Teaching / 实习**",
                                                  "可被观察的工作表现、推荐人、学科组和行政联系人、学校招聘信息。"
                                            ],
                                            [
                                                  "**校友网络**",
                                                  "最近的求职平台、面试经历、入职流程、新教师第一年挑战。"
                                            ],
                                            [
                                                  "**LinkedIn**",
                                                  "查找校友、了解职业路径、关注学校、展示专业项目、联系教育工作者。"
                                            ],
                                            [
                                                  "**教师社群 / 微信群**",
                                                  "招聘信息、证书经验、教学资源、活动通知和同行支持。"
                                            ],
                                            [
                                                  "**招聘会 / 专业会议**",
                                                  "直接接触校长、HR、学科负责人和同行；了解学校项目与行业趋势。"
                                            ],
                                            [
                                                  "**社交媒体 / 内容平台**",
                                                  "展示教学反思、作品和专业兴趣；认识同行并建立个人专业形象。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "关系质量来自可被观察的表现",
                                      "lines": [
                                            "Student Teaching 和实习期间，准时、完成任务、接受反馈、参加团队会议和保持专业沟通，比单纯“认识很多人”更能促成推荐。"
                                      ]
                                },
                                {
                                      "type": "subheading",
                                      "text": "LinkedIn 资料至少说明三件事"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "资料元素",
                                            "建议写法"
                                      ],
                                      "rows": [
                                            [
                                                  "**你是谁**",
                                                  "Mandarin Teacher Candidate / TESOL Teacher Candidate"
                                            ],
                                            [
                                                  "**你的资格方向**",
                                                  "New York State Certification in Chinese 7–12 / Multilingual Learner Support"
                                            ],
                                            [
                                                  "**你能做什么**",
                                                  "Secondary Education、Curriculum Development、Project-based Language Learning 等。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "Headline 示例 1",
                                      "lines": [
                                            "Mandarin Teacher Candidate | New York State Certification in Chinese 7–12 | World Language Education"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "Headline 示例 2",
                                      "lines": [
                                            "TESOL Teacher Candidate | Multilingual Learner Support | Secondary Education"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s4"
                    },
                    {
                          "heading": "五、如何进行一次有效的 Informational Interview？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "Informational Interview 是以了解职业经验为目的的简短交流。它不是正式面试，也不应以直接获得工作为唯一目标。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "适合询问",
                                            "不适合一开始就问"
                                      ],
                                      "rows": [
                                            [
                                                  "**How did you find your first teaching position?**",
                                                  "Can you get me a job?"
                                            ],
                                            [
                                                  "**What did schools focus on during interviews?**",
                                                  "Can you send my resume to your principal?"
                                            ],
                                            [
                                                  "**What surprised you most during your first year?**",
                                                  "How much money do you make?"
                                            ],
                                            [
                                                  "**What should a new Mandarin or ENL teacher prepare?**",
                                                  "Can you write me a recommendation letter?"
                                            ],
                                            [
                                                  "**Are there professional communities you recommend?**",
                                                  "Is your school easy to get into?"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "交流后的感谢消息",
                                      "lines": [
                                            "Thank you again for sharing your experience. Your advice about preparing specific classroom examples was especially helpful. I plan to revise my interview notes this week and will keep you updated on my progress."
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s5"
                    },
                    {
                          "heading": "六、什么情况下别人更愿意推荐你？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "推荐建立在信任和具体观察之上。与其先问“谁能给我推荐”，更重要的问题是“谁真正了解我的工作”。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "别人愿意推荐的表现",
                                            "推荐人能够具体说明"
                                      ],
                                      "rows": [
                                            [
                                                  "**按时完成任务、沟通清楚**",
                                                  "你是否可靠，能否代表推荐人的专业判断。"
                                            ],
                                            [
                                                  "**接受反馈并做出调整**",
                                                  "你如何回应指导并持续成长。"
                                            ],
                                            [
                                                  "**对学生负责**",
                                                  "你如何备课、互动、保护学生并解决问题。"
                                            ],
                                            [
                                                  "**主动合作**",
                                                  "你如何与团队分工、沟通和共同完成目标。"
                                            ],
                                            [
                                                  "**不夸大能力**",
                                                  "你是否诚实、清楚自己的优势和学习需要。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "推荐的基础",
                                      "lines": [
                                            "可被观察的专业表现 + 持续可靠的合作 + 对学生和团队负责。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s6"
                    },
                    {
                          "heading": "七、请求介绍时怎么说？",
                          "blocks": [
                                {
                                      "type": "callout",
                                      "title": "向教授请求介绍校友",
                                      "lines": [
                                            "Professor [Name], I am preparing to apply for secondary Mandarin teaching positions and would like to learn more about the transition from student teaching to a full-time role. If you know a recent graduate who might be willing to share their experience, I would greatly appreciate an introduction. I would keep the conversation brief and focused on the job-search process."
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "向朋友请求介绍教师",
                                      "lines": [
                                            "I remember you mentioned that your colleague teaches ENL in Queens. I am currently learning about middle-school ENL positions. If you think it would be appropriate, would you be comfortable introducing us for a short informational conversation?"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "对方分享招聘信息后",
                                      "lines": [
                                            "Thank you for sharing the opening. Based on the description, the position aligns closely with my Chinese 7–12 certification and student-teaching experience. Would you recommend applying through the school’s system first, or contacting the hiring administrator directly?"
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "好的请求通常包含",
                                      "lines": [
                                            "共同背景或联系原因 + 一个具体问题 + 明确的时间范围 + 尊重对方选择的空间。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s7"
                    },
                    {
                          "heading": "八、如何自然维护专业关系？",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "一次交流结束后不需要频繁联系。更自然的做法，是在有真实进展或有价值信息时进行简短更新。"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "适合联系的时机",
                                            "可以分享什么"
                                      ],
                                      "rows": [
                                            [
                                                  "**获得面试或完成 Demo Lesson**",
                                                  "说明你如何使用了对方的建议。"
                                            ],
                                            [
                                                  "**接受 Offer 或完成重要项目**",
                                                  "表达感谢并分享具体结果。"
                                            ],
                                            [
                                                  "**参加对方推荐的活动**",
                                                  "反馈活动中最有帮助的内容。"
                                            ],
                                            [
                                                  "**看到相关资源**",
                                                  "分享与对方工作直接相关的文章、活动或工具。"
                                            ],
                                            [
                                                  "**学年结束或节日**",
                                                  "简短问候，不附带新的复杂请求。"
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "进展更新示例",
                                      "lines": [
                                            "I wanted to share a quick update and thank you again for your advice. I recently completed my first demo lesson and used the clear learning-objective structure you recommended. The experience helped me feel much more prepared."
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s8"
                    },
                    {
                          "heading": "九、国际学生 Networking 时的注意事项",
                          "blocks": [
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "不需要假装知道所有规则",
                                                  "desc": "可以直接说明自己仍在学习 NYC 教师招聘流程，并请教对方的一般经验。"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "不要隐藏国际经历",
                                                  "desc": "中国或其他国家的教学、研究和项目经历，都是专业交流的内容。"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "避免追问私人身份细节",
                                                  "desc": "可以询问国际毕业生常见挑战，但不要要求对方披露个人移民信息。"
                                            },
                                            {
                                                  "number": "4",
                                                  "title": "工作授权要向 DSO 核实",
                                                  "desc": "教师、校友和社群成员可以分享经验，但不能代替 DSO 或法律意见。"
                                            }
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s9"
                    },
                    {
                          "heading": "十、准备三个长度的 Networking 自我介绍",
                          "blocks": [
                                {
                                      "type": "table",
                                      "headers": [
                                            "长度",
                                            "示例"
                                      ],
                                      "rows": [
                                            [
                                                  "**10 秒**",
                                                  "I am a Mandarin teacher candidate preparing to teach at the secondary level in New York."
                                            ],
                                            [
                                                  "**30 秒**",
                                                  "I am completing a master’s program in world language education and working toward New York State certification in Chinese 7–12. My student-teaching experience focuses on beginner Mandarin and project-based language learning."
                                            ],
                                            [
                                                  "**60 秒**",
                                                  "I am completing my master’s degree in world language education and preparing for New York State certification in Chinese 7–12. During student teaching, I designed beginner Mandarin lessons using visual supports, collaborative speaking tasks and formative assessment. I am particularly interested in schools that are building or expanding world language programs, because I enjoy curriculum development and creating accessible entry points for new language learners."
                                            ]
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "使用原则",
                                      "lines": [
                                            "根据交流对象调整重点。它们是表达框架，不需要每次逐字背诵。"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s10"
                    },
                    {
                          "heading": "十一、30 天 Networking 行动计划",
                          "blocks": [
                                {
                                      "type": "subheading",
                                      "text": "Networking 追踪表建议字段"
                                },
                                {
                                      "type": "table",
                                      "headers": [
                                            "字段",
                                            "记录内容"
                                      ],
                                      "rows": [
                                            [
                                                  "**姓名 / 职位 / 机构**",
                                                  "联系人身份和当前工作。"
                                            ],
                                            [
                                                  "**认识渠道与共同点**",
                                                  "教授介绍、LinkedIn、会议、同校、同专业或同学科。"
                                            ],
                                            [
                                                  "**首次联系日期与回复状态**",
                                                  "未回复、已回复、已交流。"
                                            ],
                                            [
                                                  "**交流重点**",
                                                  "对方分享的建议和关键信息。"
                                            ],
                                            [
                                                  "**下一步与下次联系日期**",
                                                  "感谢、Follow-up、更新或适当维护时间。"
                                            ],
                                            [
                                                  "**你可以提供的帮助**",
                                                  "可分享的资源、活动信息或专业支持。"
                                            ]
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s11"
                    },
                    {
                          "heading": "Networking 沟通检查清单",
                          "blocks": [
                                {
                                      "type": "checklist",
                                      "title": "发送消息前",
                                      "items": [
                                            "说明自己是谁",
                                            "说明为什么联系对方",
                                            "提出明确且合理的请求",
                                            "控制对方需要投入的时间",
                                            "根据对方经历修改消息",
                                            "避免直接索要工作或推荐",
                                            "检查姓名和机构拼写",
                                            "保持专业和礼貌"
                                      ]
                                },
                                {
                                      "type": "checklist",
                                      "title": "交流后",
                                      "items": [
                                            "发送感谢信息",
                                            "记录关键建议",
                                            "完成自己承诺的行动",
                                            "在适当时间提供进展更新",
                                            "避免频繁催促或重复请求"
                                      ]
                                }
                          ],
                          "level": 1,
                          "anchor": "s12"
                    },
                    {
                          "heading": "最后的建议",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "教师求职中的 Networking，本质上是一套专业信任网络。它不需要很大：几位真正了解你的导师、同事、校友或同行，往往比几百个没有实际交流的 LinkedIn 联系人更有价值。"
                                },
                                {
                                      "type": "flowchart",
                                      "steps": [
                                            {
                                                  "number": "1",
                                                  "title": "联系一位已经了解你工作的人",
                                                  "desc": "请求一个具体建议，或更新你的求职方向。"
                                            },
                                            {
                                                  "number": "2",
                                                  "title": "向一位校友请教具体经验",
                                                  "desc": "控制交流时间，并围绕一个明确问题展开。"
                                            },
                                            {
                                                  "number": "3",
                                                  "title": "参加一次专业活动",
                                                  "desc": "认识同行、学习行业表达，并在活动后进行简短 Follow-up。"
                                            }
                                      ]
                                },
                                {
                                      "type": "callout",
                                      "title": "真正有效的关系",
                                      "lines": [
                                            "当别人能够清楚知道你是谁、你想做什么、你擅长什么，以及你是否值得信任，合适机会出现时，他们才更可能想到你。"
                                      ]
                                }
                          ],
                          "level": 1
                    },
                    {
                          "heading": "资料来源",
                          "blocks": [
                                {
                                      "type": "text",
                                      "text": "本文根据 EduVenture“纽约教师求职分享会 Session 1”中关于 LinkedIn、微信群、大学教授、实习导师、志愿活动和专业社群的分享整理。"
                                },
                                {
                                      "type": "text",
                                      "text": "文中的沟通模板和行动建议为 EduVenture International Teacher Hub 原创整理，使用时应根据个人经历、关系程度和具体求职目标进行修改。"
                                }
                          ],
                          "level": 1
                    }
              ]
        },
        {
              "id": "job-search-faq",
              "title": "纽约教师求职常见问题：从提交申请到接受 Offer",
              "summary": "从申请系统到接受 Offer，教师求职中最常见问题的整理与解答。",
      "leadCallout": {
        "title": "先看结论",
        "lines": [
          "纽约教师求职很少是一条完全清晰的直线——收到回复的快慢、是否需要 Demo Lesson、招聘轮次，都因学校而异。本文按申请系统、学校联系、简历材料、面试、推荐人、工作授权、Offer、以及卡住时怎么办，整理成可以直接查找的问答。"
        ]
      },
              "intro": "纽约教师求职很少是一条完全清晰的直线。\n\n 有些申请者提交材料后，很快就收到学校联系；有些人发送了很多邮件，却长时间没有回复。部分学校会安排多轮面试和Demo Lesson，另一些学校可能在一次面试后便作出决定。\n\n EduVenture“纽约教师求职分享会”中，参与者最常提出的问题包括：\n\n • 校长不回复怎么办？ • 没有美国教学经验是否会影响求职？ • 是否需要主动联系学校？ • 面试时应该注意哪些礼仪？ • 国际学生什么时候说明工作授权？ • 推荐人应该怎样准备？ • 收到口头Offer后还需要做什么？\n\n 本文将这些问题集中整理，帮助申请者判断自己目前处于哪一个阶段，以及下一步应该采取什么行动。",
              "faqs": [
                    {
                          "q": "新教师应该使用New Teacher Finder还是Open Market？",
                          "a": "准备第一次进入NYC Public Schools全职任教的申请者，通常需要完成NYCPS Certified Teacher Application。\n\n 申请通过审核后，候选人会进入New Teacher Finder。候选人可以在其中搜索职位，校长和招聘负责人也可以查看符合条件的申请者。\n\n Open Market Hiring System主要供目前已经在NYCPS任职、符合资格的教师和其他UFT职位员工申请转校使用，不是新教师的主要申请系统。\n\n 可以这样判断：\n\n 申请者身份 — 主要系统第一次申请NYCPS全职教师职位 — Certified Teacher Application＋New Teacher Finder 目前已在NYCPS任职并希望转校 — Open Market 申请Charter或Private School — 学校或机构自己的申请平台申请Pre-K或社区机构职位 — 根据项目类型使用相应申请系统"
                    },
                    {
                          "q": "完成NYCPS申请后，是否代表已经获得教师职位？",
                          "a": "不是。\n\n NYCPS首先审核申请者是否符合进入学校招聘阶段的基本条件。申请被接受后，候选人进入New Teacher Finder，但仍需要自行搜索职位、联系学校并参加学校安排的招聘流程。最终决定通常由具体学校的招聘团队作出。\n\n 可以将整个流程理解为：\n\n NYCPS申请审核 → 进入候选人系统 → 学校级求职 → 面试与Demo → 学校Offer → Nomination与入职流程\n\n 申请通过审核只是获得了参加学校招聘的资格，并不是工作Offer。"
                    },
                    {
                          "q": "教师资格证还没有正式签发，可以申请吗？",
                          "a": "部分正在完成纽约州教师教育项目，并预计在规定时间前满足教师资格要求的候选人，可以按照“on track to be certified”的身份申请。\n\n NYCPS当前说明，已经获得纽约州教师资格，或预计在相应学年开始前获得资格的候选人，可以提交Certified Teacher Application。具体资格状态、项目证明和截止日期应以当期官方申请说明为准。\n\n 申请前应准备：\n\n • 教师教育项目证明 • 预计毕业或完成项目日期 • 当前证书申请状态 • 已通过和待完成的考试 • 学校Certification Office联系方式 • NYSED TEACH账户信息\n\n 面试中应准确说明自己的状态，不要说“已经获得证书”，除非证书已经正式签发。\n\n 可以说：\n\n I am currently on track to complete the requirements for New York State certification in Chinese 7–12 before the beginning of the school year."
                    },
                    {
                          "q": "进入New Teacher Finder后，应该等待学校联系吗？",
                          "a": "不建议只等待。\n\n New Teacher Finder允许候选人和学校相互搜索与联系，但被动等待会限制你接触职位的数量。\n\n 更有效的方法是同时进行：\n\n 1. 在New Teacher Finder中搜索职位 2. 建立目标学校名单 3. 阅读学校网站和课程信息 4. 根据职位要求调整Resume 5. 按照学校要求提交申请 6. 在适当情况下发送简短联系邮件 7. 参加招聘会、学校参观和Networking活动\n\n 求职系统是入口，不是完整的求职策略。"
                    },
                    {
                          "q": "需要申请多少所学校？",
                          "a": "没有适用于所有人的固定数字。\n\n 申请数量应根据以下因素决定：\n\n • 教师资格领域 • 年级范围 • 地理位置 • 招聘季节 • 学校类型 • 个人通勤限制 • 是否需要签证或工作授权安排 • 职位供需情况\n\n 建议把学校分为三组：\n\n **高优先级**\n\n 职位、学校理念、学生群体和通勤条件都比较匹配。\n\n 对这些学校应投入更多时间：\n\n • 调整Resume • 研究学校 • 撰写个性化邮件 • 准备有针对性的面试答案\n\n **中等优先级**\n\n 基本符合条件，但仍有部分信息需要确认。\n\n 可以正常申请，并在面试中进一步了解。\n\n **探索性申请**\n\n 你并不完全确定是否适合，但职位能够帮助你了解市场和积累面试经验。\n\n 求职初期不要因为学校不是“完美选择”就完全不申请。分享会主讲人也建议新教师把部分面试看作了解学校和练习专业表达的机会。"
                    },
                    {
                          "q": "为什么我联系了很多校长，却没有收到回复？",
                          "a": "没有回复并不一定代表申请者不合格。\n\n 学校招聘可能受到以下因素影响：\n\n • 学校仍在确认预算或课程安排 • 职位尚未最终批准 • 招聘负责人正在处理大量申请 • 学校已经有内部候选人 • 面试时间尚未确定 • 招聘负责人优先处理紧急职位 • 邮件进入垃圾邮箱 • 你的材料没有清楚显示证书或职位匹配度\n\n 分享会中，“联系校长后没有回复”也是参与者提出的常见问题。主讲人建议申请者继续扩大申请范围，而不是把所有希望放在一所学校上。\n\n 可以采用以下节奏：\n\n • 提交申请后等待约一周 • 发送一次简短Follow-up • 没有回复后继续申请其他学校 • 职位仍开放时，可以在之后进行最后一次跟进 • 避免连续多日重复发送邮件"
                    },
                    {
                          "q": "可以绕过系统，直接给学校发邮件吗？",
                          "a": "直接联系学校可以作为系统申请的补充，但不应代替学校要求的正式申请步骤。\n\n 一个较稳妥的顺序是：\n\n 1. 确认自己符合职位要求 2. 完成正式系统申请 3. 查找学校或招聘负责人的公开联系方式 4. 发送简短、个性化的介绍邮件 5. 附上Resume 6. 说明已经通过哪个渠道申请 7. 礼貌询问是否需要补充材料\n\n 例如：\n\n Dear Assistant Principal Chen,\n\n I recently applied for the Mandarin teacher position through the New Teacher Finder. I am on track to receive New York State certification in Chinese 7–12 and recently completed my student teaching at the high school level.\n\n I am particularly interested in your school’s focus on project-based learning and would welcome the opportunity to discuss how my experience could support your world language program. My resume is attached for reference.\n\n 不要一次向同一所学校的多位工作人员发送完全相同的邮件。"
                    },
                    {
                          "q": "我的Resume没有美国全职教学经历，怎么办？",
                          "a": "不要用“是否做过美国全职教师”作为唯一标准判断自己的经验。\n\n 以下经历都可以提供与教师岗位相关的证据：\n\n • Student Teaching • Tutoring • Afterschool Program • Summer Camp • 社区中文学校 • 成人教育 • Research Assistant • 课程设计 • 志愿服务 • 学生社团 • 国内教学 • 客户服务 • 项目管理 • 数据分析 • 团队领导\n\n 重点是把经历转换成教师招聘团队能够理解的能力：\n\n 原经历 — 可以体现的教师能力客户服务 — 关系建立、家庭沟通、冲突处理数据分析 — 学生数据分析、形成性评估项目管理 — 单元规划、时间管理、跨团队合作团队监督 — 课堂管理、领导力、反馈内容设计 — 课程材料与学习活动设计销售与推广 — 学生动机、清晰表达、需求分析\n\n 不要虚构自己没有承担过的教学职责。\n\n 可以改变表达重点，但不能把“向新员工介绍收银系统”写成“教授学生课程”。\n\n 正确的转化逻辑是：\n\n 我完成了什么真实任务？它体现了什么技能？这种技能如何用于教师岗位？"
                    },
                    {
                          "q": "一份教师Resume应该多长？",
                          "a": "对于刚毕业或职业早期的教师候选人，清晰、相关和容易扫描通常比堆积大量内容更重要。\n\n 官方Resume指导强调：\n\n • 根据招聘对象调整内容 • 清楚列出教师资格和相关经验 • 使用行动动词和具体例子 • 保持格式一致 • 检查语言和拼写 • 保存为PDF提交\n\n 通常应优先保留：\n\n • 教师资格 • 教育背景 • Student Teaching • 相关教学和学生工作经历 • 可迁移的职业经验 • 技能和语言 • 与职位相关的项目\n\n 不相关或很早以前的经历可以缩短，而不是全部删除。"
                    },
                    {
                          "q": "是否需要准备Teaching Portfolio？",
                          "a": "Teaching Portfolio不一定是每所学校的硬性要求，但它可以帮助招聘负责人更具体地了解你的教学实践。\n\n TeachNYC建议Portfolio可以包括Lesson Plan和其他教学样本。\n\n 可以准备：\n\n • 一至两份代表性Lesson Plan • Unit Plan • Slides或学生材料 • Assessment和Rubric • 匿名化学生作品 • 教学反思 • 项目式学习案例 • Classroom Management Plan • 教学视频片段，前提是获得必要许可 • Professional Development记录\n\n 不要把Portfolio做成几十页的材料集合。\n\n 更重要的是选择少量作品，并说明：\n\n • 教学目标是什么 • 为什么这样设计 • 学生如何参与 • 如何评估学习 • 你进行了什么调整"
                    },
                    {
                          "q": "所有学校都会安排Demo Lesson吗？",
                          "a": "不一定。\n\n Demo Lesson是学校可能使用的一种招聘评估方式。学校可能要求候选人向真实学生或由行政人员组成的小组教授一节模拟课，但并非每一所学校都会采用相同流程。\n\n 可能出现的形式包括：\n\n • 不安排Demo • 面试当天进行短试讲 • 第一轮面试后另行安排 • 向真实学生授课 • 向招聘委员会授课 • 提交Lesson Plan并进行部分展示 • 观看教学视频或讨论教学案例\n\n 即使学校暂时没有要求Demo，TeachNYC也建议候选人提前准备一份可以调整的示范课程。"
                    },
                    {
                          "q": "Demo Lesson中最重要的是什么？",
                          "a": "Demo Lesson不是表演一节“看起来很热闹”的课。\n\n 招聘团队更希望观察：\n\n • 学习目标是否清楚 • 活动是否与目标一致 • 指令是否容易理解 • 学生是否真正参与 • 教师是否检查理解 • 是否能够根据学生反应调整 • 时间管理是否合理 • 教师是否建立尊重的课堂氛围\n\n TeachNYC的准备建议也强调，候选人应遵循准备好的教学计划，同时保持灵活，并通过提问、观察学生工作和其他方式持续检查理解。\n\n 短试讲最常见的问题不是内容不够多，而是：\n\n • 教师讲话时间过长 • 活动与目标不一致 • 没有检查学生是否理解 • 指令过于复杂 • 内容超出学生水平 • 依赖科技，没有备用方案 • 结尾没有Assessment"
                    },
                    {
                          "q": "面试时需要穿得非常正式吗？",
                          "a": "教师面试通常应采用干净、专业并适合学校环境的服装。\n\n 不一定需要非常正式的商务套装，但应避免：\n\n • 过于休闲的运动服 • 影响活动或走动的服装 • 带有明显争议性文字的服饰 • 不适合进入课堂的鞋子 • 过度依赖香水或强烈气味\n\n 若面试包含Demo Lesson，应考虑：\n\n • 是否需要在教室中走动 • 是否能够使用白板 • 是否需要弯腰协助学生 • 是否方便携带和发放材料\n\n 面试礼仪不只体现在衣着，还包括：\n\n • 提前到达 • 对前台、School Safety Agent和其他工作人员保持礼貌 • 关闭手机声音 • 带好材料 • 认真倾听问题 • 不批评前任学校或同事 • 离开前感谢参与面试的人员"
                    },
                    {
                          "q": "回答面试问题时，应该使用多少专业术语？",
                          "a": "专业术语可以帮助你准确表达教学实践，但术语不能代替实际案例。\n\n 例如，只说：\n\n I use UDL, differentiation and culturally responsive teaching.\n\n 说服力有限。\n\n 更好的回答是：\n\n In a beginner Mandarin class, I used images, sentence frames and multiple response options so that students with different language backgrounds could participate in the same speaking task.\n\n 分享会主讲人建议候选人使用专业教育语言，同时通过具体教学故事让面试官理解这些术语如何出现在实际课堂中。\n\n 一个有效回答可以包含：\n\n 1. 核心观点 2. 具体情境 3. 采取的行动 4. 学生表现或结果 5. 反思与下一步"
                    },
                    {
                          "q": "需要准备几位推荐人？",
                          "a": "NYCPS教师申请目前要求候选人填写至少一位、不超过三位专业推荐人的相关信息。\n\n 进入学校招聘阶段后，建议提前准备两至三位能够具体评价你工作的人。分享会中也建议候选人提前整理推荐人名单。\n\n 适合的人选包括：\n\n • Cooperating Teacher • University Supervisor • Student Teaching负责人 • 教授 • 教育项目主管 • 前任学校领导 • 实习或研究负责人\n\n 推荐人应当能够说明你的：\n\n • 教学准备 • 学生互动 • 专业态度 • 合作能力 • 接受反馈的能力 • 可靠性\n\n 一个职位更高、但不熟悉你工作的人，不一定比直接观察过你教学的人更适合。"
                    },
                    {
                          "q": "可以不通知推荐人，直接填写对方信息吗？",
                          "a": "不建议。\n\n 提交前应先联系推荐人，确认对方：\n\n • 愿意担任推荐人 • 记得你的具体工作 • 可以在招聘期间及时回复 • 知道你正在申请什么职位 • 拥有你的最新Resume\n\n 可以提供：\n\n • 职位描述 • 学校名称 • 最新Resume • 申请时间线 • 希望对方重点说明的经历\n\n 不要为推荐人编写他们必须照抄的评价，但可以提醒对方你们共同完成过的项目。"
                    },
                    {
                          "q": "国际学生应该什么时候向学校说明工作授权？",
                          "a": "应诚实、准确地回答申请和招聘过程中关于工作授权的问题，但不需要在第一次Networking交流中主动解释所有个人移民历史。\n\n 需要区分：\n\n • 教师资格 • 求职资格 • 当前工作授权 • 未来是否需要雇主支持\n\n 这些是不同的问题。\n\n F-1学生决定在美国工作时，官方建议首先联系本校DSO，确认自己是否具有相应授权。学生不能在尚未取得所需授权时提前开始工作。\n\n CPT通常由DSO根据课程和职位情况授权；OPT则涉及DSO推荐，并在适用情况下需要USCIS批准。\n\n 面试前应能够准确回答：\n\n • 当前身份是什么 • 工作授权何时开始 • 授权何时结束 • 是否与所学专业相关 • 是否存在雇主需要完成的步骤 • 将来是否可能需要新的身份或雇主支持\n\n 不确定时，不要根据同学经历猜测，应向DSO或合格的移民法律专业人士确认。"
                    },
                    {
                          "q": "面试官问身份问题时，我应该怎样回答？",
                          "a": "回答应简短、准确，并聚焦工作资格。\n\n 例如：\n\n I am currently an F-1 student and expect to be eligible for post-completion OPT beginning in July. I am confirming the exact timeline with my university’s international student office.\n\n 或者：\n\n I am currently authorized to work through OPT until \\[date\\]. I would be happy to provide the appropriate employment authorization documentation during the onboarding process.\n\n 避免：\n\n • 隐瞒重要事实 • 承诺自己并不了解的签证结果 • 使用“应该没问题”作为回答 • 把OPT、CPT和工作签证混为一谈 • 让招聘负责人替你判断个人身份问题\n\n 本文不构成移民法律意见。复杂情况应咨询DSO或合格律师。"
                    },
                    {
                          "q": "学校口头说“想雇用我”，是否代表已经正式入职？",
                          "a": "不一定。\n\n 学校表达招聘意向或给出口头Offer后，通常还需要完成正式提名和系统入职步骤。NYCPS的求职指南说明，候选人接受学校Offer后，还会收到与Applicant Gateway及后续入职事项有关的信息。\n\n 收到口头Offer时，可以确认：\n\n • 具体职位名称 • 教授科目和年级 • 全职或兼职 • 预计开始日期 • 学校下一步需要什么材料 • 谁负责提交Nomination • 何时收到正式系统通知 • 是否存在尚未完成的批准或审核\n\n 在没有确认正式流程前，不要假设所有入职步骤已经完成。"
                    },
                    {
                          "q": "收到Offer后应该问哪些问题？",
                          "a": "Offer阶段可以重点确认以下内容。\n\n **教学职责**\n\n • 教授哪些课程和年级？ • 每天有多少节课？ • 是否需要教授多个不同课程？ • 是否承担Advisory、Lunch Duty或其他职责？ • 是否需要建立新的课程？\n\n **教学支持**\n\n • 是否有Mentor？ • 新教师如何参加Professional Development？ • 是否提供课程材料？ • 是否有共同备课时间？ • 学科组如何合作？\n\n **工作安排**\n\n • 预计开始日期 • 每日工作时间 • 入职培训 • 课程表何时确定 • 教室和设备安排 • 需要完成的背景审查和文件\n\n **发展机会**\n\n • 是否支持参加专业会议？ • 是否有课程开发机会？ • 是否可以带学生社团？ • 是否有未来教师领导力路径？\n\n 不需要在第一次Offer沟通中一次问完所有问题。优先确认会影响你是否接受职位的重要信息。"
                    },
                    {
                          "q": "什么时候可以停止申请其他学校？",
                          "a": "建议至少等到以下事项比较明确后，再停止全部求职活动：\n\n • 已经接受明确的职位 • 学校确认了职位和职责 • 正式提名或入职步骤已经开始 • 工作授权与开始日期没有明显冲突 • 你已经收到并完成必要系统指示\n\n 在此之前，可以减少新申请，但不建议只根据一句口头承诺立即取消所有其他机会。\n\n 同时，应保持职业道德：\n\n • 接受Offer前认真考虑 • 接受后不要继续把其他学校作为随意比较的筹码 • 情况变化时尽快通知相关学校 • 不要同时向多所学校承诺已经接受职位"
                    },
                    {
                          "q": "面试后多久没有回复，可以Follow-up？",
                          "a": "一般可以在面试后的一至两个工作日内先发送感谢邮件。\n\n 若学校提供了明确时间线，应按照该时间线等待。如果超过了学校给出的时间，可以发送一次简短Follow-up。\n\n TeachNYC建议候选人在面试后发送感谢邮件；如果Demo Lesson单独进行，也应在试讲后的一至两个工作日内发送个性化感谢信息。\n\n Follow-up可以写：\n\n Dear Principal Garcia,\n\n Thank you again for the opportunity to interview for the ENL teacher position. I appreciated learning more about your school’s collaborative planning structure and support for multilingual learners.\n\n I remain very interested in the role and wanted to ask whether there are any updates regarding the next stage of the hiring process."
                    },
                    {
                          "q": "被拒绝后，可以询问反馈吗？",
                          "a": "可以礼貌询问，但学校没有义务提供详细反馈。\n\n 例如：\n\n Thank you for letting me know. Although I am disappointed, I appreciate the opportunity to learn more about your school. If you are able to share any brief feedback that could help me improve for future interviews, I would be grateful.\n\n 即使对方没有回复，也可以自行复盘：\n\n • 哪些问题回答得不够具体？ • 是否真正研究了学校？ • 是否清楚解释了教师资格状态？ • 案例是否体现了学生学习？ • Demo是否有检查理解？ • 是否提出了有价值的问题？ • Resume是否与职位匹配？\n\n 不要把每次拒绝都解释为自己“不适合当老师”。\n\n 招聘结果也可能受到课程安排、职位变化、内部候选人和学校特殊需求影响。"
                    },
                    {
                          "q": "如果连续申请都没有回复，应该调整什么？",
                          "a": "可以依次检查以下方面。\n\n **第一层：职位匹配**\n\n • 是否申请了符合自己证书领域的职位？ • 年级和学科是否对应？ • 是否清楚标注证书状态？ • 是否存在地理范围过窄的问题？\n\n **第二层：Resume**\n\n • 招聘负责人能否在十秒内看出你可以教什么？ • 是否把Student Teaching放在明显位置？ • Bullet是否包含具体行动和结果？ • 是否有过多不相关经历？ • 是否存在格式或语言错误？\n\n **第三层：联系方式**\n\n • 邮件是否过长？ • 是否使用相同模板联系所有学校？ • 是否说明已经完成正式申请？ • 邮件主题是否清楚？ • Resume文件名是否专业？\n\n **第四层：申请策略**\n\n • 是否只申请少数“理想学校”？ • 是否持续扩大学校名单？ • 是否参加招聘活动？ • 是否使用Networking？ • 是否记录和安排Follow-up？\n\n **第五层：材料证据**\n\n • 是否有教学案例？ • 是否准备Portfolio？ • 是否有推荐人？ • 是否能够清楚解释非教育经历的可迁移技能？\n\n 一次只调整一到两个方面，之后观察回复率是否变化。"
                    }
              ],
              "closing": [
                    {
                          "heading": "A. 申请系统",
                          "body": "• 确认纽约州教师资格或on-track状态 • 建立或更新NYSED TEACH账户 • 完成NYCPS Certified Teacher Application • 上传最新Resume • 填写专业推荐人 • 上传教师资格证明 • 检查申请状态 • 进入New Teacher Finder"
                    },
                    {
                          "heading": "B. 学校搜索",
                          "body": "• 明确目标年级和学科 • 确定可接受的Borough和通勤时间 • 建立学校名单 • 调查学校使命、学生和课程 • 记录联系人 • 设置申请优先级 • 记录申请和Follow-up日期"
                    },
                    {
                          "heading": "C. 求职材料",
                          "body": "• 一页或两页Resume • 基础Cover Letter模板 • 学校定制段落 • 一分钟自我介绍 • Teaching Portfolio • Sample Lesson Plan • 推荐人名单 • 教师资格状态说明 • 工作授权状态说明"
                    },
                    {
                          "heading": "D. 面试",
                          "body": "• 调查学校 • 准备六至八个教学案例 • 练习STAR-R回答 • 准备Classroom Management案例 • 准备Differentiation案例 • 准备数据与Assessment案例 • 准备团队合作案例 • 准备国际经历转化案例 • 准备一至三个候选人问题"
                    },
                    {
                          "heading": "E. Demo Lesson",
                          "body": "• 确认年级、课程和学生水平 • 确认时长 • 确认设备和材料 • 写出可观察的学习目标 • 设计Check for Understanding • 加入学生输出 • 准备Differentiation • 设计Exit Ticket • 准备无科技备用方案 • 完整计时排练"
                    },
                    {
                          "heading": "F. 面试后",
                          "body": "• 记录问题和反馈 • 更新求职追踪表 • 一至两个工作日内发送感谢邮件 • 按学校时间线跟进 • 继续申请其他职位 • 修改需要改进的面试案例"
                    },
                    {
                          "heading": "G. Offer与入职",
                          "body": "• 确认职位、科目和年级 • 确认开始日期 • 确认学校联系人 • 确认Nomination流程 • 检查Applicant Gateway信息 • 完成背景审查和指纹要求 • 核对教师资格状态 • 核对工作授权 • 保存所有正式文件"
                    },
                    {
                          "heading": "最后的建议",
                          "body": "教师求职中，最容易让人焦虑的并不是某一道面试题，而是不知道“现在到底应该做什么”。\n\n 可以把整个过程简化为四个循环：\n\n 搜索机会 → 提交申请 → 复盘反馈 → 调整策略\n\n 每周检查以下五个数字：\n\n 1. 新调研了多少所学校？ 2. 提交了多少份申请？ 3. 完成了多少次Follow-up？ 4. 获得了多少次面试或交流？ 5. 根据反馈修改了什么？\n\n 无法控制学校何时回复，但可以控制：\n\n • 材料是否清楚 • 申请范围是否合理 • Follow-up是否专业 • 面试案例是否具体 • Demo Lesson是否经过练习 • 是否持续建立专业关系\n\n 教师求职不是证明自己没有缺点，而是让学校清楚地看到：\n\n 你能够教授什么？你如何支持学生？你怎样与团队合作？你是否愿意接受反馈？你为什么适合这所学校？\n\n 当这些问题能够通过真实经历和具体证据得到回答时，你的申请就会更有说服力。"
                    },
                    {
                          "heading": "资料来源与免责声明",
                          "body": "本文根据EduVenture“纽约教师求职分享会 Session 1”中的常见问题、招聘流程、学校联系、推荐人和面试建议整理。\n\n NYCPS申请和招聘信息参考NYC Public Schools及TeachNYC截至2026年7月的公开资源。招聘系统、时间和要求可能在不同学年调整，请在申请时核对当期官方说明。\n\n 文中关于F-1、CPT和OPT的内容仅用于一般信息分享，不构成法律意见。国际学生应根据个人情况咨询学校DSO或合格的移民法律专业人士。"
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
