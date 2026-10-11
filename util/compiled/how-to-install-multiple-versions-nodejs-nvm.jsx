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
    strong: "strong",
    div: "div",
    pre: "pre",
    blockquote: "blockquote",
    h3: "h3",
    em: "em",
    ol: "ol",
    li: "li",
    ul: "ul"
  }, _provideComponents(), props.components);
  return _jsxs(_Fragment, {
    children: [_jsx(_components.p, {
      children: "In this article, I'll explain how you can install and manage multiple versions of Node.js with Node Version Manager (NVM) on Windows, Linux, and Mac and easily switch between them with a single command."
    }), "\n", _jsxs(_components.h2, {
      id: "-what-is-nvm",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-what-is-nvm",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🤔 What is NVM?"]
    }), "\n", _jsx(_components.p, {
      children: "Node Version Manager (NVM), as the name implies, is a tool for managing Node versions on your device."
    }), "\n", _jsxs(_components.p, {
      children: ["Different projects on your device may be using different versions of Node. Using only one version (the one installed by ", _jsx(_components.code, {
        children: "npm"
      }), ") for these different projects may not give you accurate execution results."]
    }), "\n", _jsxs(_components.p, {
      children: ["For example, if you use a Node version of ", _jsx(_components.strong, {
        children: "18.0.0"
      }), " for a project that uses ", _jsx(_components.strong, {
        children: "20.0.0"
      }), ", you may get some errors. And if you update the Node version to ", _jsx(_components.strong, {
        children: "20.0.0"
      }), " with npm and use it for a project that uses ", _jsx(_components.strong, {
        children: "18.0.0"
      }), ", you may not get the expected experience."]
    }), "\n", _jsx(_components.p, {
      children: "In fact, you would most likely get a warning that says:"
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
              children: "This"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "project"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "requires"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "Node"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "version"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "X"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["Instead of using npm to install and uninstall Node versions for your different projects, you can use ", _jsx(_components.strong, {
        children: "nvm"
      }), ", which helps you effectively manage your node versions for each project."]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.a, {
        href: "https://github.com/nvm-sh/nvm",
        children: "NVM"
      }), " allows you to install different versions of Node and switch between these versions depending on the project that you're working on via the command line."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: [_jsx(_components.strong, {
          children: "🚨 Important:"
        }), " This guide assumes that you don't have a previous installation of ", _jsx(_components.code, {
          children: "Node.js"
        }), ". If you do, it might cause issues and conflicts. Before proceeding, make sure you have uninstalled any previous installations of ", _jsx(_components.code, {
          children: "Node.js"
        }), " and ", _jsx(_components.code, {
          children: "npm"
        }), "."]
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "-how-to-install-nvm-on-mac-linux-or-windows-wsl",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-how-to-install-nvm-on-mac-linux-or-windows-wsl",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🐧 How to Install NVM on Mac, Linux or Windows WSL"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.strong, {
        children: "This would be the recommended method if your operating system is based on UNIX"
      }), " (like Mac, Linux, or Windows WSL), as it offers various advantages, such as handling different versions of Node simultaneously."]
    }), "\n", _jsxs(_components.h3, {
      id: "1-run-the-nvm-installer",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#1-run-the-nvm-installer",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "1. Run the nvm installer"]
    }), "\n", _jsxs(_components.p, {
      children: ["To install and update ", _jsx(_components.em, {
        children: "nvm"
      }), ", you need to execute the installation script. You can download and run the code from the terminal using the following command:"]
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
              children: "curl"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-o-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.s"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "h"
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
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "bash"
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
              children: "# or"
            })
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "wget"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-qO-"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "<"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.s"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "h"
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
                color: "#F97583"
              },
              children: "|"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "bash"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["You can use ", _jsx(_components.code, {
        children: "curl"
      }), " or ", _jsx(_components.code, {
        children: "bash"
      }), " depending on the command available on your device."]
    }), "\n", _jsxs(_components.p, {
      children: ["This script will clone the ", _jsx(_components.a, {
        href: "https://github.com/nvm-sh/nvm",
        children: "nvm repository"
      }), " into the ", _jsx(_components.code, {
        children: "~/.nvm"
      }), " directory and attempt to add the execution lines depending on your terminal language (", _jsx(_components.code, {
        children: "~/.bash_profile"
      }), ", ", _jsx(_components.code, {
        children: "~/.zshrc"
      }), ", ", _jsx(_components.code, {
        children: "~/.profile"
      }), ", or ", _jsx(_components.code, {
        children: "~/.bashrc"
      }), ")."]
    }), "\n", _jsxs(_components.h3, {
      id: "2-update-your-profile-configuration",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#2-update-your-profile-configuration",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "2. Update your profile configuration"]
    }), "\n", _jsxs(_components.p, {
      children: ["In case it wasn't possible for some reason, it might ask you to manually add the code lines. ", _jsx(_components.strong, {
        children: "This is only necessary if it couldn't be done automatically."
      }), " The lines to add would be these:"]
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
              children: "export"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " NVM_DIR"
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "="
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\"$([ "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-z"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " \"${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "XDG_CONFIG_HOME-"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}\" ] && "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "printf"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " %s \"${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "HOME"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/.nvm\" "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "||"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "printf"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: " %s \"${"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "XDG_CONFIG_HOME"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "}/nvm\")\""
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "[ "
            }), _jsx(_components.span, {
              style: {
                color: "#F97583"
              },
              children: "-s"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "$NVM_DIR"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "/nvm.sh\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " ] && "
            }), _jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "\\\\\\\\."
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "\""
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: "$NVM_DIR"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "/nvm.sh\""
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["After doing this, you may need to restart the terminal or open a new tab to use the ", _jsx(_components.code, {
        children: "nvm"
      }), " command."]
    }), "\n", _jsx(_components.p, {
      children: "This command above loads nvm for use."
    }), "\n", _jsxs(_components.h3, {
      id: "3-reload-the-shell-configuration",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#3-reload-the-shell-configuration",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "3. Reload the shell configuration"]
    }), "\n", _jsx(_components.p, {
      children: "With your profile configuration updated, now you will reload the configuration for your terminal to use:"
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
                color: "#79B8FF"
              },
              children: "source"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "~/.bashrc"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "With this command executed, nvm is ready for you to use. You can confirm that nvm is installed correctly by running:"
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
              children: "nvm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-v"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "This should show the version of nvm installed."
    }), "\n", _jsxs(_components.h2, {
      id: "-how-to-install-nvm-on-windows",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-how-to-install-nvm-on-windows",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🪟 How to Install NVM on Windows"]
    }), "\n", _jsxs(_components.p, {
      children: [_jsx(_components.code, {
        children: "nvm-windows"
      }), ", although sharing the name with ", _jsx(_components.code, {
        children: "nvm"
      }), ", is not from the same creators and, therefore, has some differences. And among those differences is, of course, the way to install it. For ", _jsx(_components.code, {
        children: "nvm-windows"
      }), ", follow these steps:"]
    }), "\n", _jsxs(_components.ol, {
      children: ["\n", _jsxs(_components.li, {
        children: ["Go to the ", _jsx(_components.a, {
          href: "https://github.com/coreybutler/nvm-windows/releases",
          children: "nvm-windows releases section"
        }), "."]
      }), "\n", _jsxs(_components.li, {
        children: ["Download and run the ", _jsx(_components.code, {
          children: "nvm-setup.exe"
        }), " file from the latest available release."]
      }), "\n", _jsxs(_components.li, {
        children: ["Run the ", _jsx(_components.code, {
          children: "nvm-setup.exe"
        }), " file."]
      }), "\n", _jsx(_components.li, {
        children: "Follow the guided package installation steps and choose the desired configuration."
      }), "\n", _jsxs(_components.li, {
        children: ["Once completed, open a ", _jsx(_components.code, {
          children: "PowerShell"
        }), " terminal and run:"]
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "When done, you can confirm that nvm has been installed by running:"
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
              children: "nvm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "-v"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsx(_components.p, {
      children: "If nvm was installed correctly, this command will show you the nvm version installed."
    }), "\n", _jsxs(_components.p, {
      children: ["And with this, we are ready to work with ", _jsx(_components.code, {
        children: "nvm-windows"
      }), ". If you encounter any issues, you can ", _jsxs(_components.strong, {
        children: ["check the ", _jsx(_components.a, {
          href: "https://github.com/coreybutler/nvm-windows/wiki/Common-Issues",
          children: "Common Issues section of the repository"
        }), " to see if your problem has a solution."]
      })]
    }), "\n", _jsxs(_components.h2, {
      id: "️-how-nvm-works",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-how-nvm-works",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🕹️ How NVM Works?"]
    }), "\n", _jsx(_components.p, {
      children: "With nvm installed, you can now install, uninstall, and switch between different Node versions on your Windows, Linux, or Mac device."
    }), "\n", _jsx(_components.p, {
      children: "You can install Node versions like this:"
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
              children: "nvm"
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
              children: "--lts"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["This will install the ", _jsx(_components.strong, {
        children: "long-term support version of Node"
      }), ". Currently, it is version 20, but in the future, it will be 22 and so on."]
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsx(_components.p, {
        children: "LTS or long-term support means that it is a version that will receive support for a longer period than other versions. Generally, it is up to 30 months of support for critical errors. If you are going to use Node in production, it's best to use only LTS versions."
      }), "\n"]
    }), "\n", _jsx(_components.p, {
      children: "If you prefer, you can also install a specific version either by indicating the major or directly the exact version:"
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
              children: "nvm"
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
              children: "21"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# this will install the latest version 21 of Node.js"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "nvm"
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
              children: "12.6"
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: ".0"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#6A737D"
              },
              children: "# this will install exactly version 21.6.0"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.h2, {
      id: "-using-a-nodejs-version-with-nvm",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#-using-a-nodejs-version-with-nvm",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "🚀 Using a Node.js Version With NVM"]
    }), "\n", _jsxs(_components.p, {
      children: ["Sometimes you may have more than one installed version of Node.js on your user. To see all the versions of Node.js you have installed, you can use the ", _jsx(_components.code, {
        children: "nvm ls"
      }), " command. To see the versions available for installation, you have to use ", _jsx(_components.code, {
        children: "nvm ls-remote"
      }), "."]
    }), "\n", _jsxs(_components.p, {
      children: ["Once you have more than one on your system, you'll want to switch between those versions. To do this, run ", _jsx(_components.code, {
        children: "nvm use <version-you-want-to-use>"
      }), " for example:"]
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
              children: "nvm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "20"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "nvm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "21"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "nvm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "use"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "--lts"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.p, {
      children: ["If you want one of these to be your default version, so that it is used the next time you open a tab, you have to create an alias for that version called ", _jsx(_components.code, {
        children: "default"
      }), "."]
    }), "\n", _jsx(_components.p, {
      children: "For example, let's say you have version 16 and 18 installed, and now you install version 20, and you want this to be the default version from now on. You should do the following:"
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
              children: "nvm"
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
              children: "20"
            })]
          }), "\n", _jsxs(_components.span, {
            "data-line": "",
            children: [_jsx(_components.span, {
              style: {
                color: "#B392F0"
              },
              children: "nvm"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "alias"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#9ECBFF"
              },
              children: "default"
            }), _jsx(_components.span, {
              style: {
                color: "#E1E4E8"
              },
              children: " "
            }), _jsx(_components.span, {
              style: {
                color: "#79B8FF"
              },
              children: "20"
            })]
          }), "\n", _jsx(_components.span, {
            "data-line": "",
            children: " "
          })]
        })
      })
    }), "\n", _jsxs(_components.blockquote, {
      children: ["\n", _jsxs(_components.p, {
        children: ["The first time you run ", _jsx(_components.code, {
          children: "nvm install"
        }), ", it will make that version the default."]
      }), "\n"]
    }), "\n", _jsxs(_components.h2, {
      id: "️-possible-problems",
      children: [_jsx(_components.a, {
        className: "subheading-anchor",
        "aria-label": "Link to section",
        href: "#️-possible-problems",
        children: _jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "⚠️ Possible Problems"]
    }), "\n", _jsxs(_components.ul, {
      children: ["\n", _jsxs(_components.li, {
        children: ["On Mac, you'll need to have Xcode development tools installed. When you run the ", _jsx(_components.code, {
          children: "nvm"
        }), " installation script for the first time, a window may appear asking you to do this. Once installed, try installing ", _jsx(_components.code, {
          children: "nvm"
        }), " again with the same script as before."]
      }), "\n", _jsxs(_components.li, {
        children: ["Remember, as I mentioned, after the installation, you may need to restart the terminal or create a new tab before you can run the ", _jsx(_components.code, {
          children: "nvm"
        }), " command."]
      }), "\n", _jsxs(_components.li, {
        children: ["If you have any further issues, you can check the ", _jsx(_components.a, {
          href: "https://github.com/nvm-sh/nvm#troubleshooting-on-linux",
          children: "Troubleshooting on Linux section in the nvm repository."
        })]
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
