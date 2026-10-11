/*@jsxRuntime automatic @jsxImportSource react*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/util/mdx-components";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    a: "a",
    span: "span",
    code: "code",
    h3: "h3",
    strong: "strong",
    div: "div",
    pre: "pre",
    blockquote: "blockquote",
    img: "img",
    em: "em",
    ul: "ul",
    li: "li"
  }, _provideComponents(), props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In this post, I'll show you how to improve your Git commit messages using industry best practices, aiming to ensure a clear and easily readable Git history for your projects."
    }), "\n", _jsxs(_components.h2, {
      id: "-understanding-git-commits",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-understanding-git-commits",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🧠 Understanding Git Commits"]
    }), "\n", _jsxs(_components.p, {
      children: ["A ", _jsx(_components.code, {
        children: "commit"
      }), " in Git captures a set of changes stored in a project's history, representing a logical unit of work. Commits are pivotal for version control, fostering effective collaboration among developers, organizing update records, and enabling easy rollback to previous versions."]
    }), "\n", _jsxs(_components.h3, {
      id: "commit-structure",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#commit-structure",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "Commit Structure"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Basic:"
      }), " ", _jsx(_components.code, {
        children: "git commit -m <message>"
      })]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "Detailed:"
      }), " ", _jsx(_components.code, {
        children: "git commit -m <title> -m <description>"
      })]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "$"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "add"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "."
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "$"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Implement user sign-in feature\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "🚨 Important:"
        }), " This article assumes you already understand basic Git workflow. If not, I suggest reading through the ", _jsx(_components.a, {
          href: "https://guides.github.com/introduction/git-handbook/",
          children: "Git Handbook"
        }), "."]
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "-the-importance-of-well-crafted-commit-messages",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-the-importance-of-well-crafted-commit-messages",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🌟 ", _jsx(_components.strong, {
        children: "The Importance of Well-Crafted Commit Messages"
      })]
    }), "\n", _jsx(_components.p, {
      children: "Commits are not just snapshots of code changes; they serve as a roadmap for your project's history. A poorly written commit message can lead to confusion, making it challenging to understand the context of changes. Let's explore why crafting meaningful commit messages matters."
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.img, {
        src: "https://frainer-blog.vercel.app/images/posts/content/git-commit.webp",
        alt: "Example of wrong commit messages"
      }), "\n", _jsxs(_components.em, {
        children: ["Source: ", _jsx(_components.a, {
          href: "http://xkcd.com/",
          children: "xkcd.com"
        })]
      })]
    }), "\n", _jsx(_components.p, {
      children: "Think of your commit messages as letters to your future self or collaborators. By investing time in writing informative messages, you create a documentation trail that can save hours of troubleshooting and enhance project maintenance, especially in large-scale projects."
    }), "\n", _jsxs(_components.h2, {
      id: "-why-commit-message-quality-matters",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-why-commit-message-quality-matters",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🤔 ", _jsx(_components.strong, {
        children: "Why Commit Message Quality Matters"
      })]
    }), "\n", _jsxs(_components.p, {
      children: ["I challenge you to review old commit messages in your projects using ", _jsx(_components.code, {
        children: "git log"
      }), ". You may encounter unclear messages that provide little insight into the changes made. Without proper documentation, you might find yourself pondering over the purpose of certain code lines."]
    }), "\n", _jsx(_components.p, {
      children: "By adhering to good commit practices, you future-proof your work. Clear messages become a valuable asset during collaborative efforts, fostering better communication within engineering teams."
    }), "\n", _jsxs(_components.h2, {
      id: "-6-rules-for-crafting-exceptional-commit-messages",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-6-rules-for-crafting-exceptional-commit-messages",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🎬 ", _jsx(_components.strong, {
        children: "6 Rules for Crafting Exceptional Commit Messages"
      })]
    }), "\n", _jsx(_components.p, {
      children: "There are 6 simple rules that will help maintain consistency, clarity, and effectiveness in your commit messages, improving communication within the development team and facilitating code history tracking. These rules are:"
    }), "\n", _jsxs(_components.h3, {
      id: "1-use-imperative-mood-in-the-subject-line",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-use-imperative-mood-in-the-subject-line",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "1. Use Imperative Mood in the Subject Line"]
    }), "\n", _jsx(_components.p, {
      children: "When crafting a commit message, use the imperative mood in the subject line to convey the action taken. For example, instead of saying \"Added feature,\" use \"Add feature\" or \"Fix bug\" rather than \"Fixed bug.\" This provides a clear instruction on the intended state change."
    }), "\n", _jsx(_components.p, {
      children: "To come up with thoughtful commits, consider the following:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: "Why have I made these changes?"
      }), "\n", _jsx(_components.li, {
        children: "What effect have my changes made?"
      }), "\n", _jsx(_components.li, {
        children: "Why was the change needed?"
      }), "\n", _jsx(_components.li, {
        children: "What are the changes in reference to?"
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "The answer will be something like:"
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Add"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "new"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "login"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "page"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Fix"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "problem"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "with"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "feed"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "of"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "blog"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Change"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "main"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "font"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "family"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Inter"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Remove"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "random"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "article"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "2-avoid-periods-and-ellipses-in-commit-messages",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-avoid-periods-and-ellipses-in-commit-messages",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "2. Avoid Periods and Ellipses in Commit Messages"]
    }), "\n", _jsx(_components.p, {
      children: "Refrain from using unnecessary punctuation in commit messages. The first line of a commit serves as the title and should not end with a period. Additionally, ellipses should be avoided for clear and concise instructions."
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Add the new login page.\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# ❌"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Add the new login page...\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# ❌"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Add the new login page\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# ✅"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "3-keep-the-subject-line-under-50-characters",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-keep-the-subject-line-under-50-characters",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "3. Keep the Subject Line Under 50 Characters"]
    }), "\n", _jsx(_components.p, {
      children: "Be brief and to the point. If your commit message is too lengthy, consider breaking it down into multiple commits. Ensure that the subject line accurately reflects the changes made."
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Add the article 'How to install Bun on Windows' and update the blog's description in the home page\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# ❌"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Add the article 'How to install Bun on Windows'\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# ✅"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Update the blog's description in the home page\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# ✅"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "4-provide-necessary-context-in-the-commit-body",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#4-provide-necessary-context-in-the-commit-body",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "4. Provide Necessary Context in the Commit Body"]
    }), "\n", _jsxs(_components.p, {
      children: ["When additional context is required, use the commit body instead of overcrowding the subject line. This can be achieved by using ", _jsx(_components.code, {
        children: "git commit"
      }), " without the ", _jsx(_components.code, {
        children: "-m"
      }), " flag."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# Example"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "fix:"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "prevent"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "racing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "of"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "requests"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Introduce"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "request"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "and"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "a"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "reference"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "latest"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "request."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Dismiss"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "incoming"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "responses"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "other"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "than"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "from"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "latest"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "request."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Remove"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "timeouts"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "which"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "were"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "used"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "mitigate"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "racing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "issue"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "but"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "are"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "obsolete"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "now."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Remember that the first commit message line serves as the title, while subsequent lines form the body and should adhere to standard punctuation rules."
    }), "\n", _jsxs(_components.h3, {
      id: "5-use-prefixes-for-semantic-commits",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#5-use-prefixes-for-semantic-commits",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "5. Use Prefixes for Semantic Commits"]
    }), "\n", _jsx(_components.p, {
      children: "As your project grows, maintaining a readable history becomes crucial. To achieve this, you can add a prefix to give more meaning to the commits you make. This is called semantic commits and is done as follows:"
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[optional scope]: "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "description"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[optional body]"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[optional footer(s)]"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# Example:"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "fix:"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "resolve"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "login"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "authentication"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "bug"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "^-^"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "^------------------------------^"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "     "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "│"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "     "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "└-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ">"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# Description of the changes"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "│"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "└──------>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# Type of change"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[optional body]"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Improved"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "authentication"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "logic"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "to"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "handle"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "edge"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "cases."
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Updated"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "relevant"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "unit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "tests."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[optional footer(s)]"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Reviewed-by:"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Z"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Refs:"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "#123"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In ", _jsx(_components.code, {
        children: "monorepositories"
      }), " with multiple packages, you can also add information about the package affected by the commit. This is known as scope and would look like this:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "feat(backend"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "): add a new table "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "for"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " the likes"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "fix(web"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "): update the main font family to Inter"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "The commit type can include the following:"
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "feat"
        }), " – a new feature is introduced with the changes"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "fix"
        }), " – a bug fix has occurred"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "chore"
        }), " – changes that do not relate to a fix or feature and don't modify src or test files (for example updating dependencies)"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "refactor"
        }), " – refactored code that neither fixes a bug nor adds a feature"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "docs"
        }), " – updates to documentation such as a the README or other markdown files"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "style"
        }), " – changes that do not affect the meaning of the code, likely related to code formatting such as white-space, missing semi-colons, and so on."]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "test"
        }), " – including new or correcting previous tests"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "perf"
        }), " – performance improvements"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "ci"
        }), " – continuous integration related"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "build"
        }), " – changes that affect the build system or external dependencies"]
      }), "\n", _jsxs(_components.li, {
        children: [_jsx(_components.code, {
          children: "revert"
        }), " – reverts a previous commit"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "The commit type subject line should be all lowercase with a character limit to encourage succinct descriptions."
    }), "\n", _jsx(_components.p, {
      children: "The optional commit body should be used to provide further detail that cannot fit within the character limitations of the subject line description."
    }), "\n", _jsxs(_components.p, {
      children: ["It is also a good location to utilize ", _jsx(_components.code, {
        children: "BREAKING CHANGE: <description>"
      }), " to note the reason for a breaking change within the commit."]
    }), "\n", _jsxs(_components.h3, {
      id: "6-consider-using-commit-utilities",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#6-consider-using-commit-utilities",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "6. Consider Using Commit Utilities"]
    }), "\n", _jsxs(_components.p, {
      children: ["Enhance your commit workflow by incorporating tools like ", _jsx(_components.code, {
        children: "husky"
      }), " for executing scripts before specific Git actions and ", _jsx(_components.code, {
        children: "commitlint"
      }), " to ensure commits follow a chosen convention. These utilities contribute to a more streamlined and standardized commit process."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "install"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "husky"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-D"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "husky"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "install"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "set-script"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "prepare"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"husky install\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "run"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "prepare"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "husky"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "add"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ".husky/pre-push"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"npm test\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "add"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ".husky/pre-push"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "commit"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-m"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"Keep calm and commit\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "git"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "push"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-u"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "origin"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "master"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "#"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "tests"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "run"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "before"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "the"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "push"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With ", _jsx(_components.code, {
        children: "commitlint"
      }), ", you can enforce semantic, readable commits that adhere to predefined conventions."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "bash",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "bash",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# 1. Install commitlint cli and conventional config"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# For Mac and Linux:"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "install"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "--save-dev"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "@commitlint/{config-conventional,cli}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# For Windows:"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "install"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "--save-dev"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "@commitlint/config-conventional"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "@commitlint/cli"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# 2. Add hoook to check out the commit message"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "npx"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "husky"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "add"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ".husky/commit-msg"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'npx --no-install commitlint --edit \"$1\"'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["These tools, combined with practices like ", _jsx(_components.code, {
        children: "conventional-changelog"
      }), " and ", _jsx(_components.code, {
        children: "commitizen"
      }), ", contribute to an efficient and standardized commit workflow, ultimately improving project maintainability and collaboration."]
    }), "\n", _jsx(_components.p, {
      children: "By incorporating these rules and tools into your Git workflow, you'll contribute to a more readable and organized project history, making it easier for you and your collaborators to navigate and understand the changes made over time. Happy committing! 🚀"
    }), "\n", _jsxs(_components.h2, {
      id: "-additional-resources",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-additional-resources",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🌐 Additional Resources"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://www.conventionalcommits.org",
          children: "Conventional Commits"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://semver.org",
          children: "Semantic Versioning"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages",
          children: "freeCodeCamp.org"
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
export default MDXContent;
