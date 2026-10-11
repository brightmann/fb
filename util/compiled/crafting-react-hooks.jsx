/*@jsxRuntime automatic @jsxImportSource react*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
import {useMDXComponents as _provideComponents} from "@/util/mdx-components";
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h3: "h3",
    a: "a",
    span: "span",
    blockquote: "blockquote",
    strong: "strong",
    code: "code",
    h2: "h2",
    img: "img",
    div: "div",
    pre: "pre",
    ul: "ul",
    li: "li"
  }, _provideComponents(), props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In this article, I will reveal in a clear and simplified way how React Hooks can work magic in your projects, just as I would have liked to learn when I discovered them."
    }), "\n", _jsxs(_components.h3, {
      id: "-hooks-the-magic-of-react",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-hooks-the-magic-of-react",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🪝 Hooks: The Magic of React"]
    }), "\n", _jsx(_components.p, {
      children: "In React, hooks are utilities that allow us to execute arbitrary code in our components based on specific actions. Hooks provide a way to reuse state and side-effect logic in functional components in a simpler and more declarative manner."
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "🚨 Important:"
        }), " This guide uses ", _jsx(_components.code, {
          children: "TypeScript"
        }), " code snippets to illustrate the concepts. If you are not familiar with TypeScript, feel free to ignore the typing in the examples."]
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "-basic-hooks",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-basic-hooks",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🌱 Basic Hooks"]
    }), "\n", _jsxs(_components.p, {
      children: ["This reference guide will discuss all the Hooks natively available in React, but first, let’s start with the basic React Hooks: ", _jsx(_components.code, {
        children: "useState"
      }), ", ", _jsx(_components.code, {
        children: "useEffect"
      }), ", and ", _jsx(_components.code, {
        children: "useContext"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://frainer-blog.vercel.app/images/posts/content/basic-hooks.webp",
        alt: "React basic hooks image"
      })
    }), "\n", _jsxs(_components.h2, {
      id: "-usestate",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-usestate",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "⚡ useState"]
    }), "\n", _jsx(_components.p, {
      children: "It is a hook that allows functional components to manage and maintain their internal state. You can use it to declare state variables and access them in your functional components."
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["The signature for the ", _jsx(_components.code, {
          children: "useState"
        }), " Hook is as follows:"]
      })
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(initialState)"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Here, ", _jsx(_components.code, {
        children: "state"
      }), " and ", _jsx(_components.code, {
        children: "setState"
      }), " refer to the state value and updater function returned on invoking ", _jsx(_components.code, {
        children: "useState"
      }), " with some ", _jsx(_components.code, {
        children: "initialState"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["It’s important to note that when your component first renders and invokes ", _jsx(_components.code, {
        children: "useState"
      }), ", the ", _jsx(_components.code, {
        children: "initialState"
      }), " is the returned state from ", _jsx(_components.code, {
        children: "useState"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["Also, to update state, the state updater function ", _jsx(_components.code, {
        children: "setState"
      }), " should be invoked with a new state value, as shown below:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(newValue)"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["By doing this, a new re-render of the component is queued. ", _jsx(_components.code, {
        children: "useState"
      }), " guarantees that the ", _jsx(_components.code, {
        children: "state"
      }), " value will always be the most recent after applying updates."]
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example of using ", _jsx(_components.code, {
          children: "useState"
        }), " in a React component about the follow card of X:"]
      })
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "XFollowCard"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "fullName"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "userName"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "initialIsFollowing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "isFollowing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setIsFollowing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(initialIsFollowing) "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// <-- Definition"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "text"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " isFollowing "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'Following'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'Follow'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "buttonClassName"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " isFollowing"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-button is-following'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-button'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "handleClick"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setIsFollowing"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "isFollowing) "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Changing the state"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "article"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "header"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-header'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "img"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-avatar'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "alt"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'Midudev avatar'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "src"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`https://unavatar.io/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "userName"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        />"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-info'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "strong"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">{fullName}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "strong"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-infoUserName'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">@{userName}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "header"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "aside"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{buttonClassName} "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleClick}>"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-text'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">{text}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "          <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'tw-followCard-stopFollow'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Unfollow</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "span"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "aside"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "article"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "-useeffect",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-useeffect",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🎬 useEffect"]
    }), "\n", _jsxs(_components.p, {
      children: ["It is a React hook that allows performing side effects in functional components. You can use it to execute code in response to changes in the component, such as making API requests, subscribing to events, or updating the DOM. ", _jsx(_components.code, {
        children: "useEffect"
      }), " receives a function as an argument and executes it after the component is rendered or when certain dependencies change."]
    }), "\n", _jsxs(_components.p, {
      children: ["The basic signature of ", _jsx(_components.code, {
        children: "useEffect"
      }), " is as follows:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "//..."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "})"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Example of using ", _jsx(_components.code, {
          children: "useEffect"
        }), " in a React component:"]
      })
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "CAT_PREFIX_IMAGE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'https://cataas.com'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useCatImage"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "fact"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "fact"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "imageUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setImageUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "!"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "fact) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "threeFirstWords"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " fact."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "split"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "' '"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "3"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "join"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "' '"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "fetch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`https://cataas.com/cat/says/${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "threeFirstWords"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}?size=50&color=red&json=true`"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    )"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "res"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " res."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "json"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "())"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      ."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "then"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "response"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "url"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " response"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setImageUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(url)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      })"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }, [fact])"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { imageUrl: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "CAT_PREFIX_IMAGE_URL"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "imageUrl"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "-cleaning-up-an-effect",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-cleaning-up-an-effect",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🧹 Cleaning up an effect"]
    }), "\n", _jsxs(_components.p, {
      children: ["Some imperative code need to be cleaned up e.g. to prevent memory leaks. For example, subscriptions need to be cleaned up, timers need to be invalidated etc. To do this return a function from the callback passed to ", _jsx(_components.code, {
        children: "useEffect"
      }), ":"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "subscription"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " props."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "apiSubscripton"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// clean up the subscription"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    subscription."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "unsubscribeApi"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "})"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "The clean-up function is guaranteed to be invoked before the component is removed from the user interface."
    }), "\n", _jsxs(_components.h3, {
      id: "️-avoid-infinite-loops",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-avoid-infinite-loops",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "⚠️ Avoid Infinite Loops"]
    }), "\n", _jsxs(_components.p, {
      children: ["When using ", _jsx(_components.code, {
        children: "useEffect"
      }), " in React, it's crucial to avoid infinite loops that can arise from incorrect effect configurations. One common mistake is modifying the state within the effect body in a way that triggers infinite renderings."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "Common Cause of Infinite Loops:"
        }), " Directly Modifying State"]
      }), "\n"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Incorrect: Modifying state within the effect body"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}, [count])"
            })
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "This example causes an infinite loop by updating the state within the effect, triggering new renderings and re-executing the effect."
    }), "\n", _jsxs(_components.h3, {
      id: "-solution",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-solution",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "✅ Solution"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Correct: No dependencies in the array, avoiding the infinite loop"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}, [])"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Avoid infinite loops by ensuring that the dependencies in the ", _jsx(_components.code, {
        children: "useEffect"
      }), " dependency array are stable and do not change within the effect body. In this case, by removing ", _jsx(_components.code, {
        children: "count"
      }), " from the dependency array, we prevent the infinite loop."]
    }), "\n", _jsxs(_components.h2, {
      id: "-usecontext",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-usecontext",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🤝 useContext"]
    }), "\n", _jsxs(_components.p, {
      children: ["The problem that ", _jsx(_components.code, {
        children: "useContext"
      }), " solves lies in the need to pass data through the component hierarchy without resorting to prop drilling, which is when props are manually passed through multiple levels of components. This approach can become cumbersome and impractical as the application grows, as each intermediate component has to relay the props, generating less clean and error-prone code."]
    }), "\n", _jsxs(_components.h3, {
      id: "-prop-drilling-the-challenge",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-prop-drilling-the-challenge",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "❌ Prop Drilling: The Challenge"]
    }), "\n", _jsxs(_components.p, {
      children: ["Imagine a scenario where we have a ", _jsx(_components.code, {
        children: "ComponentA"
      }), " that needs to pass data to ", _jsx(_components.code, {
        children: "ComponentD"
      }), ". Traditional prop drilling would involve passing the props through all intermediate components, even if ", _jsx(_components.code, {
        children: "ComponentB"
      }), " and ", _jsx(_components.code, {
        children: "ComponentC"
      }), " do not need that data."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "// ComponentA.tsx"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ComponentA"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{dataForD} />"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
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
              children: "// ComponentB.tsx"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ComponentB"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "ComponentC"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{dataForD} />"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
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
              children: "// ComponentC.tsx"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ComponentC"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "ComponentD"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{dataForD} />"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
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
              children: "// ComponentD.tsx"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ComponentD"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "dataForD"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use dataForD here"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "This process, known as prop drilling, can become unmanageable and complicated as more components are added to the hierarchy."
    }), "\n", _jsxs(_components.h3, {
      id: "-solution-usecontext-to-the-rescue",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-solution-usecontext-to-the-rescue",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "✅ Solution: ", _jsx(_components.code, {
        children: "useContext"
      }), " to the Rescue"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useContext"
      }), " greatly simplifies this task by allowing us to create and consume a context without manually passing props through each component. First, we create a context using ", _jsx(_components.code, {
        children: "createContext"
      }), ":"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "// ThemeContext.ts"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { createContext } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "ThemeContext"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "createContext"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Then, we use the ", _jsx(_components.code, {
        children: "Provider"
      }), " component to wrap our component tree with the desired value:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "// App.tsx"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " React "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { ThemeContext } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'./ThemeContext'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "App"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "ThemeContext.Provider"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "value"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'dark'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/* Nested components here */"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "ThemeContext.Provider"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Finally, in any component within this context, we can use ", _jsx(_components.code, {
        children: "useContext"
      }), " to access the data without manually passing props:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "// Button.tsx"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " React, { useContext } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { ThemeContext } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'./ThemeContext'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "theme"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useContext"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(ThemeContext)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "className"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{theme}>Click here</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "Note that the value passed to useContext must be the context object, i.e., the return value from invoking React.createContext, not ContextObject.Provider or ContextObject.Consumer."
      }), "\n"]
    }), "\n", _jsxs(_components.p, {
      children: ["This solution avoids the cumbersome prop drilling and provides a cleaner and more efficient way to share data across components in a React application. ", _jsx(_components.code, {
        children: "useContext"
      }), " makes data management more elegant and easy to maintain."]
    }), "\n", _jsx(_components.p, {
      children: "Goodbye, prop drilling! 👋"
    }), "\n", _jsxs(_components.h2, {
      id: "-additional-hooks",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-additional-hooks",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🌟 Additional Hooks"]
    }), "\n", _jsx(_components.p, {
      children: "The following hooks are variants of the basic hooks discussed in the sections above. If you’re new to hooks don’t bother learning these right now. They are only needed for specific edge cases."
    }), "\n", _jsx(_components.p, {
      children: _jsx(_components.img, {
        src: "https://frainer-blog.vercel.app/images/posts/content/additional-hooks.webp",
        alt: "React additional hooks image"
      })
    }), "\n", _jsxs(_components.h2, {
      id: "-useref",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-useref",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "📌 useRef"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useRef"
      }), " in React is a hook that makes it easy to create mutable references. Unlike ", _jsx(_components.code, {
        children: "useState"
      }), ", ", _jsx(_components.code, {
        children: "useRef"
      }), " doesn't trigger component re-renders when its value changes, making it a powerful tool for holding data that doesn't directly affect the user interface."]
    }), "\n", _jsxs(_components.p, {
      children: ["Here’s how the ", _jsx(_components.code, {
        children: "useRef"
      }), " hook is used:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useRef } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "MyComponent"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "myRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(initialValue)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ..."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "-challenge",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-challenge",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🥷🏻 Challenge"]
    }), "\n", _jsxs(_components.p, {
      children: ["The problem that ", _jsx(_components.code, {
        children: "useRef"
      }), " solves becomes apparent when we need to update values without triggering a visual representation update of the component. To illustrate this, let's consider a movie search scenario:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "search"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "search"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "movies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "([])"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "loading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ❌ This is a bad practice because we are fetching"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// the movies and re-rendering the component again"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// even if the search is the same as the previous one."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "try"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "newMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "searchMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ search })"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(newMovies)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "any"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(error.message)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "finally"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { movies, getMovies, loading, error }"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this case, using ", _jsx(_components.code, {
        children: "useState"
      }), " for the search term causes unnecessary renderings every time the search term changes. This is where ", _jsx(_components.code, {
        children: "useRef"
      }), " becomes an efficient solution by allowing us to update ", _jsx(_components.code, {
        children: "search"
      }), " without affecting the user interface:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "search"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "search"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "movies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "([])"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "loading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "previousSearch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(search) "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// <-- Define a ref"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "async"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// ✅ If the current search is the same to before search: return"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (previousSearch.current "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "==="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " search) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "try"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "true"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      previousSearch.current "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " search"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "newMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "await"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "searchMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ search })"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setMovies"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(newMovies)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "catch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "error"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "any"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setError"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(error.message)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "finally"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setLoading"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "false"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { movies, getMovies, loading, error }"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With this implementation, ", _jsx(_components.code, {
        children: "useRef"
      }), " helps manage the value of ", _jsx(_components.code, {
        children: "search"
      }), " without causing unwanted visual updates, improving efficiency and the user experience."]
    }), "\n", _jsxs(_components.h2, {
      id: "-usememo",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-usememo",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🧠 useMemo"]
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "useMemo"
      }), " hook in React is a powerful tool for optimizing performance by memorizing the result of a function. Its main purpose is to prevent unnecessary computations, reusing the previously calculated value if the dependencies haven't changed."]
    }), "\n", _jsxs(_components.p, {
      children: ["Here’s how the ", _jsx(_components.code, {
        children: "useMemo"
      }), " hook is used:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "readTime"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useMemo"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "wordsPerMinute"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "200"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "words"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " text."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "trim"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "split"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "\\s"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")."
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "length"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "value"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " Math."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ceil"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(words "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "/"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " wordsPerMinute)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "value"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "} min read`"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}, [text]) "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// only recompute if text changes"
            })]
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The problem that ", _jsx(_components.code, {
        children: "useMemo"
      }), " addresses becomes apparent when we need to perform expensive calculations in a component, but those calculations are not necessary every time the component renders. Let's take the example of the ", _jsx(_components.code, {
        children: "Counter"
      }), " component:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "number"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Costly calculation performed on every render"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Contador: {count}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Doble: {double}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this case, the double value is recalculated on every render, even if ", _jsx(_components.code, {
        children: "count"
      }), " hasn't changed. ", _jsx(_components.code, {
        children: "useMemo"
      }), " solves this by memorizing the result of the calculation only when the dependencies, in this case, the ", _jsx(_components.code, {
        children: "count"
      }), " prop, have changed:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useMemo } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "number"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "double"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useMemo"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "*"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", [count])"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Contador: {count}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Doble: {double}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With ", _jsx(_components.code, {
        children: "useMemo"
      }), ", if the ", _jsx(_components.code, {
        children: "count"
      }), " prop hasn't changed, the recalculation of double is avoided, and the previously calculated value is reused. This significantly improves the efficiency of the component, especially in situations where calculations are more resource-intensive."]
    }), "\n", _jsxs(_components.h2, {
      id: "️-usecallback",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-usecallback",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "♻️ useCallback"]
    }), "\n", _jsxs(_components.p, {
      children: ["The ", _jsx(_components.code, {
        children: "useCallback"
      }), " hook in React provides a way to memorize functions. The main advantage is to avoid creating new functions on each render, returning the previously memorized function if the dependencies haven't changed."]
    }), "\n", _jsxs(_components.p, {
      children: ["Here’s how the ", _jsx(_components.code, {
        children: "useCallback"
      }), " hook is used:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "memoizedCallback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useCallback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(callback, arrayDependency)"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The problem that ", _jsx(_components.code, {
        children: "useCallback"
      }), " addresses becomes apparent when we need to pass functions to child components and want to avoid creating new instances of those functions on each render. Let's take the example of the ", _jsx(_components.code, {
        children: "Counter"
      }), " component:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "onIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "handleIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(count)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Contador: {count}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleIncrement}>Incrementar</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this case, ", _jsx(_components.code, {
        children: "handleIncrement"
      }), " is recreated on every render, which is not efficient, especially if ", _jsx(_components.code, {
        children: "onIncrement"
      }), " and ", _jsx(_components.code, {
        children: "count"
      }), " haven't changed. ", _jsx(_components.code, {
        children: "useCallback"
      }), " addresses this by memorizing the function only when the dependencies change:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useCallback } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "onIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "handleIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useCallback"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(count)"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }, [count, onIncrement]) "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// only re-create if count or onIncrement change"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Contador: {count}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleIncrement}>Incrementar</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With ", _jsx(_components.code, {
        children: "useCallback"
      }), ", if ", _jsx(_components.code, {
        children: "count"
      }), " or ", _jsx(_components.code, {
        children: "onIncrement"
      }), " haven't changed, creating a new function is avoided, and the previously calculated function is reused. This improves efficiency and contributes to a more optimal component performance."]
    }), "\n", _jsxs(_components.h2, {
      id: "️-useid",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-useid",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🏷️ useId"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useId"
      }), " is a React hook designed to generate unique identifiers, ideal for assigning them to HTML tag attributes. This practice becomes especially useful for improving accessibility by establishing specific relationships between elements."]
    }), "\n", _jsxs(_components.p, {
      children: ["Here’s how the ", _jsx(_components.code, {
        children: "useId"
      }), " hook is used:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "passwordHintId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          })
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "Next, the generated ID is used in different attributes:"
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: [_jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<>"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'password'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "aria-describedby"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{passwordHintId} />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{passwordHintId}>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "</>"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The problem that ", _jsx(_components.code, {
        children: "useId"
      }), " addresses arises when we need to assign unique identifiers to HTML elements, especially in situations where a component may appear multiple times on the screen. Let's take the example of the ", _jsx(_components.code, {
        children: "PasswordField"
      }), " component:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useId } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "PasswordField"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "passwordHintId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useId"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <>"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "label"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        Password:"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "type"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'password'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "aria-describedby"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{passwordHintId} />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "label"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "id"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{passwordHintId}>"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        The password must be 18 characters long and contain special characters."
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </>"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this case, ", _jsx(_components.code, {
        children: "useId"
      }), " is used to generate a unique ID (", _jsx(_components.code, {
        children: "passwordHintId"
      }), ") that is assigned to both the ", _jsx(_components.code, {
        children: "aria-describedby"
      }), " attribute of the input and the ", _jsx(_components.code, {
        children: "id"
      }), " of the paragraph. This ensures that even if ", _jsx(_components.code, {
        children: "PasswordField"
      }), " appears multiple times on the screen, the generated IDs will not conflict."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "function"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "App"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "() {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <>"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "h2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Choose password</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "h2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "PasswordField"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "h2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Confirm password</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "h2"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "PasswordField"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " />"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </>"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In the ", _jsx(_components.code, {
        children: "App"
      }), " component, where ", _jsx(_components.code, {
        children: "PasswordField"
      }), " is used twice, ", _jsx(_components.code, {
        children: "useId"
      }), " ensures that automatically generated identifiers avoid duplicates and provide a robust solution for assigning unique IDs in repeated contexts. This contributes to improving accessibility and consistency in the application."]
    }), "\n", _jsxs(_components.h2, {
      id: "️-usereducer",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-usereducer",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🕹️ useReducer"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useReducer"
      }), " is a React hook designed to manage the state of a component using an action-based and reduction-oriented approach, similar to the pattern used in Redux. This hook becomes preferable over ", _jsx(_components.code, {
        children: "useState"
      }), " when the state of a component is more complex or when state updates depend on the previous state or previous actions."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useReducer"
      }), " takes two arguments: a reducing function and the initial state. The reducing function receives two arguments: the current state and an action that describes how the state should change. The reducing function returns the new state."]
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Here’s how the ", _jsx(_components.code, {
          children: "useReducer"
        }), " hook is used:"]
      })
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "dispatch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useReducer"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(reducer, initialArgument, init)"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["The problem that ", _jsx(_components.code, {
        children: "useReducer"
      }), " addresses arises when the state of a component becomes more complex, and state updates depend on multiple factors or actions. Let's take the example of the ", _jsx(_components.code, {
        children: "Counter"
      }), " component:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useState } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "handleIncrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "handleDecrement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Count: {count}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleIncrement}>Increment</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{handleDecrement}>Decrement</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this example, we use ", _jsx(_components.code, {
        children: "useState"
      }), " to manage the state of the counter. While this can work for simple cases, as the logic of the state becomes more complex or depends on previous actions, the code can become harder to maintain. ", _jsx(_components.code, {
        children: "useReducer"
      }), " provides a more organized structure and a more scalable solution for handling complex states and actions in situations where the code could become confusing using only ", _jsx(_components.code, {
        children: "useState"
      }), ". We would approach this problem with useReducer as follows:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "// Define the reducing function"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "counterReducer"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "State"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "action"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Action"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "switch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (action.type) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "case"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'increment'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { count: state.count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "+"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "case"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'decrement'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { count: state.count "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "1"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ":"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " state"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "Counter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use useReducer to manage the state of the counter"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "dispatch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useReducer"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(counterReducer, { count: "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " })"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">Count: {state.count}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "p"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dispatch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ type: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'increment'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " })}>Increment</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "onClick"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "dispatch"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "({ type: "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'decrement'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " })}>Decrement</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "button"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "-useimperativehandle",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-useimperativehandle",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "✨ useImperativeHandle"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useImperativeHandle"
      }), " in React is a handy tool when you need to control and customize the external interface of a functional component, especially when working with refs. Imagine the challenge you would face without this hook."]
    }), "\n", _jsxs(_components.h3, {
      id: "-challenge-without-useimperativehandle",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-challenge-without-useimperativehandle",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🤔 Challenge Without ", _jsx(_components.code, {
        children: "useImperativeHandle"
      }), ":"]
    }), "\n", _jsxs(_components.p, {
      children: ["Let's assume we have a functional component called ", _jsx(_components.code, {
        children: "FancyInput"
      }), " that encapsulates a text input. We want the parent component to access and manipulate the input value directly and also trigger focus on that input. Without ", _jsx(_components.code, {
        children: "useImperativeHandle"
      }), ", we might end up with less efficient and error-prone code."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "FancyInput"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "inputRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "HTMLInputElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "focusInput"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (inputRef.current) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      inputRef.current."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "focus"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ref"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{inputRef} />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      {"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/* Challenge: How to expose the `focusInput` method to the parent component? */"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this scenario, exposing the ", _jsx(_components.code, {
        children: "focusInput"
      }), " method to the parent component would be a challenging and inelegant task. This is where ", _jsx(_components.code, {
        children: "useImperativeHandle"
      }), " comes into play."]
    }), "\n", _jsxs(_components.h3, {
      id: "-solution-with-useimperativehandle",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-solution-with-useimperativehandle",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "✅ Solution with ", _jsx(_components.code, {
        children: "useImperativeHandle"
      }), ":"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "FancyInput"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "forwardRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "props"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "ref"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ") "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "inputRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "HTMLInputElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use useImperativeHandle to customize the external interface"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useImperativeHandle"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(ref, () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ({"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "focus"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (inputRef.current) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "        inputRef.current."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "focus"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "()"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "getValue"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ": () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " inputRef.current "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "?"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " inputRef.current.value "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "''"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }))"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "input"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ref"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{inputRef} />"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    </"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  )"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "})"
            })
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With ", _jsx(_components.code, {
        children: "useImperativeHandle"
      }), ", we can now selectively expose the functions we want the parent component to use. This solution improves code clarity and provides a more efficient and controlled external interface."]
    }), "\n", _jsxs(_components.h2, {
      id: "-uselayouteffect",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-uselayouteffect",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🧩 useLayoutEffect"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useLayoutEffect"
      }), " in React is a powerful hook that allows you to perform synchronous operations after all mutations to the DOM have been completed but before the browser repaints the screen. Imagine the challenge you would face without this hook."]
    }), "\n", _jsxs(_components.h3, {
      id: "-challenge-without-uselayouteffect",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-challenge-without-uselayouteffect",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🤔 Challenge Without ", _jsx(_components.code, {
        children: "useLayoutEffect"
      }), ":"]
    }), "\n", _jsxs(_components.p, {
      children: ["Imagine a scenario where we want to measure the dimensions of a DOM element and, based on those dimensions, perform certain actions in our functional component ", _jsx(_components.code, {
        children: "ResizableBox"
      }), ". Without ", _jsx(_components.code, {
        children: "useLayoutEffect"
      }), ", we could face issues when making these measurements asynchronously."]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ResizableBox"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "boxRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "HTMLDivElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "boxWidth"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setBoxWidth"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Challenge: How to measure the dimensions of boxRef synchronously?"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Measurements may not be available immediately."
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// This can cause issues if we depend on dimensions to perform actions."
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }, [])"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ref"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{boxRef}>{"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/* Resizable box content */"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["In this scenario, performing synchronous measurements of the dimensions of ", _jsx(_components.code, {
        children: "boxRef"
      }), " is challenging with ", _jsx(_components.code, {
        children: "useEffect"
      }), " because the measurements may not be available immediately. This is where ", _jsx(_components.code, {
        children: "useLayoutEffect"
      }), " comes into play."]
    }), "\n", _jsxs(_components.h3, {
      id: "-solution-with-uselayouteffect",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-solution-with-uselayouteffect",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "✅ Solution with ", _jsx(_components.code, {
        children: "useLayoutEffect"
      }), ":"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ResizableBox"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "boxRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useRef"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "HTMLDivElement"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "null"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "boxWidth"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setBoxWidth"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useLayoutEffect"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(() "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use useLayoutEffect to measure the dimensions of boxRef synchronously"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "if"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " (boxRef.current) {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "      "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "setBoxWidth"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(boxRef.current.offsetWidth)"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  }, [])"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " <"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "ref"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "{boxRef}>{"
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/* Resizable box content */"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}</"
            }), _jsx(_components.span, {
              style: {
                color: "#85E89D"
              },
              children: "div"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ">"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["With ", _jsx(_components.code, {
        children: "useLayoutEffect"
      }), ", we can perform synchronous measurements after the browser has completed all mutations to the DOM but before repainting the screen. This ensures that measurements are available immediately and avoids potential issues related to asynchrony."]
    }), "\n", _jsxs(_components.h2, {
      id: "-usedebugvalue",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-usedebugvalue",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🐞 useDebugValue"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "useDebugValue"
      }), " in React is a specialized hook designed to enhance the debugging experience by providing additional information about the state of a component. Its main utility is to facilitate component identification in browser development tools."]
    }), "\n", _jsxs(_components.p, {
      children: ["The basic signature for ", _jsx(_components.code, {
        children: "useDebugValue"
      }), " is as follows:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsx(_components.code, {
          "data-language": "tsx",
          "data-theme": "default",
          style: {
            display: "grid"
          },
          children: _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useDebugValue"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(value)"
            })]
          })
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["When debugging a React application, it's common to face the challenge of quickly identifying the component you're interested in within the browser development tools. Without ", _jsx(_components.code, {
        children: "useDebugValue"
      }), ", information about a component can be limited and nonspecific."]
    }), "\n", _jsx(_components.p, {
      children: _jsxs(_components.strong, {
        children: ["Here’s how the ", _jsx(_components.code, {
          children: "useDebugValue"
        }), " hook is used:"]
      })
    }), "\n", _jsxs(_components.h3, {
      id: "1-adding-a-descriptive-name",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-adding-a-descriptive-name",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "1. Adding a Descriptive Name:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useDebugValue } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useCustomHook"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "state"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/* hook logic */"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Provide a descriptive name for easy identification in development tools"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "    "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useDebugValue"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "'Custom Hook'"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " state"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "2-displaying-array-content",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-displaying-array-content",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "2. Displaying Array Content:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useDebugValue } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useArrayHook"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ("
            }), _jsx(_components.span, {
              style: {
                color: "#FFAB70"
              },
              children: "array"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: ":"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "string"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[]) "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// hook logic"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Show the content of the array in development tools"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useDebugValue"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "(array."
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "join"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "', '"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "))"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "/* result */"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h3, {
      id: "3-using-state-information",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-using-state-information",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "3. Using State Information:"]
    }), "\n", _jsx(_components.div, {
      "data-rehype-pretty-code-fragment": "",
      children: _jsx(_components.pre, {
        style: {
          backgroundColor: "#24292e"
        },
        tabIndex: "0",
        "data-language": "tsx",
        "data-theme": "default",
        children: _jsxs(_components.code, {
          "data-language": "tsx",
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
              children: "import"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " { useState, useDebugValue } "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
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
              children: "'react'"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useCounter"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " () "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "=>"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "const"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ["
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ", "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "setCount"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "] "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useState"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "// Use the counter value as information in development tools"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "useDebugValue"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "("
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "`Counter: ${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "count"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}`"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "  "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "return"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " [count, setCount]"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["By using ", _jsx(_components.code, {
        children: "useDebugValue"
      }), ", you can customize the information displayed about your hook or component in development tools, making it easier to identify and debug during development."]
    }), "\n", _jsxs(_components.h2, {
      id: "-conclusion",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-conclusion",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🚀 Conclusion"]
    }), "\n", _jsx(_components.p, {
      children: "In this exploration of React Hooks, from the most basic concepts to the most advanced, I trust you have discovered the fascinating world that these hooks offer to simplify and empower your developments in React. Happy coding! ✨"
    }), "\n", _jsxs(_components.h3, {
      id: "-references",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-references",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🔗 References"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://react.dev/reference/react",
          children: "https://react.dev/reference/react"
        })
      }), "\n", _jsx(_components.li, {
        children: _jsx(_components.a, {
          href: "https://youtube.com/playlist?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&si=38k-uyCK8hlf7DIk",
          children: "https://www.youtube.com/@midulive"
        })
      }), "\n"]
    }), "\n", _jsxs(_components.h3, {
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
          href: "https://blog.logrocket.com/react-hooks-cheat-sheet-solutions-common-problems/",
          children: "React Hooks Documentation: An Easy to Read Version"
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
