(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    814140: (e) => {
      "use strict";
      e.s({ default: () => r });
      var t = e.i(731636),
        s = e.i(838653);
      let r = (0, s.memo)(function (e) {
        let { ...r } = e,
          [a, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              l(document.documentElement.classList.contains("dark"));
            };
            e();
            let t = new MutationObserver(e);
            return (
              t.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["class"],
              }),
              () => t.disconnect()
            );
          }, []),
          (0, t.jsx)("div", {
            className: "w-full ".concat(r.className),
            children: (0, t.jsx)("img", {
              className: "w-full",
              src: a ? "/images/divider-dark.svg" : "/images/divider-light.svg",
              alt: "divider",
            }),
          })
        );
      });
    },
    798166: (e) => {
      "use strict";
      e.s({ default: () => a });
      var t = e.i(731636),
        s = e.i(186240),
        r = e.i(814140);
      function a() {
        return (0, t.jsxs)("div", {
          className: "min-h-screen bg-white dark:bg-gray-950 mt-28",
          children: [
            (0, t.jsxs)("div", {
              className: "relative overflow-hidden",
              children: [
                (0, t.jsx)("div", {
                  className: "absolute inset-0 bg-white dark:bg-gray-950",
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                  children: (0, t.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, t.jsx)("h1", {
                        className:
                          "text-4xl md:text-5xl font-bold text-gray-950 dark:text-white mb-6",
                        children: "Create A Wallet",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                        children:
                          "Creating a cryptocurrency wallet is the first step to managing your assets and accessing blockchain networks like Etherchain AI.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)(r.default, {}),
            (0, t.jsxs)("div", {
              className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-8",
                  children: (0, t.jsxs)("div", {
                    className: "flex items-start",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex-shrink-0",
                        children: (0, t.jsx)("svg", {
                          className: "w-6 h-6 text-red-600 dark:text-red-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
                          }),
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "ml-3",
                        children: [
                          (0, t.jsx)("h3", {
                            className:
                              "text-lg font-semibold text-red-800 dark:text-red-200 mb-2",
                            children:
                              "Remember, Never share your private keys or seed phrase with anyone!",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-red-700 dark:text-red-300",
                            children:
                              "Your private keys and seed phrase are the only way to access your wallet. Keep them secure and never share them with anyone, including support staff.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "mb-12",
                  children: [
                    (0, t.jsxs)("h2", {
                      className:
                        "text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",
                      children: [
                        (0, t.jsx)("svg", {
                          className: "w-8 h-8 mr-3 text-ethai dark:text-ethai",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                          }),
                        }),
                        "Which Wallet Can I Use?",
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-lg text-gray-600 dark:text-gray-300 mb-6",
                      children:
                        "You can use CEX wallets like Binance Wallet, or any centralized exchange wallet. We recommend using MetaMask or TrustWallet.",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6",
                      children: (0, t.jsxs)("div", {
                        className: "flex items-start",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)("svg", {
                              className:
                                "w-6 h-6 text-yellow-600 dark:text-yellow-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
                              }),
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "ml-3",
                            children: (0, t.jsxs)("p", {
                              className: "text-yellow-800 dark:text-yellow-200",
                              children: [
                                (0, t.jsx)("strong", { children: "NOTE:" }),
                                " Your private keys and seed phrase are the sole credentials to access and control your wallet. Keep them strictly confidential and never share them with anyone — not even with official support staff. Anyone with access to them can permanently take control of your assets.",
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "mb-12",
                  children: [
                    (0, t.jsxs)("h2", {
                      className:
                        "text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",
                      children: [
                        (0, t.jsx)("svg", {
                          className:
                            "w-8 h-8 mr-3 text-orange-600 dark:text-orange-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                          }),
                        }),
                        "1. Create a Wallet with MetaMask (Desktop Browser)",
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-lg text-gray-600 dark:text-gray-300 mb-6",
                      children:
                        "MetaMask is a browser extension wallet that allows you to securely manage Ethereum and other blockchain assets directly from your desktop.",
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-8",
                      children: [
                        (0, t.jsx)("h3", {
                          className:
                            "text-xl font-semibold text-gray-900 dark:text-white mb-6",
                          children: "Steps to Create a MetaMask Wallet",
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-ethai dark:text-ethai font-semibold text-sm",
                                    children: "1",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "",
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Install MetaMask",
                                    }),
                                    (0, t.jsx)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: (0, t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-ethai dark:text-ethai mr-2",
                                            children: "•",
                                          }),
                                          (0, t.jsxs)("p", {
                                            className: "",
                                            children: [
                                              "Visit the ",
                                              (0, t.jsx)("a", {
                                                href: "https://metamask.io",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "text-ethai dark:text-ethai hover:underline",
                                                children:
                                                  "official MetaMask website",
                                              }),
                                              " and download the extension for your preferred browser (Chrome, Firefox, Brave, or Edge).",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-ethai dark:text-ethai font-semibold text-sm",
                                    children: "2",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Set Up Your Wallet",
                                    }),
                                    (0, t.jsxs)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: [
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-ethai dark:text-ethai mr-2",
                                              children: "•",
                                            }),
                                            "Open the MetaMask extension after installation.",
                                          ],
                                        }),
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-ethai dark:text-ethai mr-2",
                                              children: "•",
                                            }),
                                            (0, t.jsxs)("p", {
                                              children: [
                                                "Click ",
                                                (0, t.jsx)("strong", {
                                                  children: '"Get Started"',
                                                }),
                                                " and choose ",
                                                (0, t.jsx)("strong", {
                                                  children:
                                                    '"Create a Wallet."',
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-ethai dark:text-ethai font-semibold text-sm",
                                    children: "3",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Secure Your Wallet",
                                    }),
                                    (0, t.jsxs)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: [
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-ethai dark:text-ethai mr-2",
                                              children: "•",
                                            }),
                                            "Create a strong password and note it down securely.",
                                          ],
                                        }),
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-ethai dark:text-ethai mr-2",
                                              children: "•",
                                            }),
                                            (0, t.jsxs)("p", {
                                              children: [
                                                "Back up your ",
                                                (0, t.jsx)("strong", {
                                                  children:
                                                    "Secret Recovery Phrase",
                                                }),
                                                ". This phrase is the only way to recover your wallet if you lose access. Store it offline in a secure location.",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-ethai dark:text-ethai font-semibold text-sm",
                                    children: "4",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Start Using MetaMask",
                                    }),
                                    (0, t.jsx)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: (0, t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-ethai dark:text-ethai mr-2",
                                            children: "•",
                                          }),
                                          "Once set up, you can connect MetaMask to various dApps, buy Ethereum, and interact with blockchain platforms like Etherchain AI.",
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "border-t border-gray-200 dark:border-gray-700 my-12",
                }),
                (0, t.jsxs)("div", {
                  className: "mb-12",
                  children: [
                    (0, t.jsxs)("h2", {
                      className:
                        "text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center",
                      children: [
                        (0, t.jsx)("svg", {
                          className:
                            "w-8 h-8 mr-3 text-blue-600 dark:text-blue-400",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                          }),
                        }),
                        "2. Create a Wallet with Trust Wallet (Mobile)",
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-lg text-gray-600 dark:text-gray-300 mb-6",
                      children:
                        "Trust Wallet is a mobile-first wallet designed for easy access to blockchain networks and assets on the go.",
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8",
                      children: [
                        (0, t.jsx)("h3", {
                          className:
                            "text-xl font-semibold text-gray-900 dark:text-white mb-6",
                          children: "Steps to Create a Trust Wallet",
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-blue-600 dark:text-blue-400 font-semibold text-sm",
                                    children: "1",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Download Trust Wallet",
                                    }),
                                    (0, t.jsx)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: (0, t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-blue-600 dark:text-blue-400 mr-2",
                                            children: "•",
                                          }),
                                          (0, t.jsxs)("p", {
                                            children: [
                                              "Visit the ",
                                              (0, t.jsx)("a", {
                                                href: "https://trustwallet.com",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "text-blue-600 dark:text-blue-400 hover:underline",
                                                children:
                                                  "official Trust Wallet website",
                                              }),
                                              " or download it directly from the ",
                                              (0, t.jsx)("strong", {
                                                children: "App Store (iOS)",
                                              }),
                                              " or ",
                                              (0, t.jsx)("strong", {
                                                children:
                                                  "Google Play Store (Android)",
                                              }),
                                              ".",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-blue-600 dark:text-blue-400 font-semibold text-sm",
                                    children: "2",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Set Up Your Wallet",
                                    }),
                                    (0, t.jsxs)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: [
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-blue-600 dark:text-blue-400 mr-2",
                                              children: "•",
                                            }),
                                            (0, t.jsxs)("p", {
                                              children: [
                                                "Open the app and tap ",
                                                (0, t.jsx)("strong", {
                                                  children:
                                                    '"Create a New Wallet."',
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-blue-600 dark:text-blue-400 mr-2",
                                              children: "•",
                                            }),
                                            "Agree to the Terms of Service.",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-blue-600 dark:text-blue-400 font-semibold text-sm",
                                    children: "3",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Secure Your Wallet",
                                    }),
                                    (0, t.jsx)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: (0, t.jsxs)("li", {
                                        className: "flex items-start",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-blue-600 dark:text-blue-400 mr-2",
                                            children: "•",
                                          }),
                                          (0, t.jsxs)("p", {
                                            children: [
                                              "Back up your ",
                                              (0, t.jsx)("strong", {
                                                children: "Recovery Phrase",
                                              }),
                                              " and store it securely offline. This phrase is essential for recovering your wallet.",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-start",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4 mt-1",
                                  children: (0, t.jsx)("span", {
                                    className:
                                      "text-blue-600 dark:text-blue-400 font-semibold text-sm",
                                    children: "4",
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("h4", {
                                      className:
                                        "text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                      children: "Start Using Trust Wallet",
                                    }),
                                    (0, t.jsxs)("ul", {
                                      className:
                                        "space-y-2 text-gray-600 dark:text-gray-300",
                                      children: [
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-blue-600 dark:text-blue-400 mr-2",
                                              children: "•",
                                            }),
                                            "Add Ethereum or other assets to your wallet by purchasing within the app or transferring from an exchange.",
                                          ],
                                        }),
                                        (0, t.jsxs)("li", {
                                          className: "flex items-start",
                                          children: [
                                            (0, t.jsx)("span", {
                                              className:
                                                "text-blue-600 dark:text-blue-400 mr-2",
                                              children: "•",
                                            }),
                                            "Use the wallet to interact with blockchain networks and dApps, including Etherchain AI.",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col md:flex-row gap-4 mt-12",
                  children: [
                    (0, t.jsx)(s.default, {
                      href: "/how-to-buy",
                      className:
                        "flex-1 group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300",
                      children: (0, t.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, t.jsxs)("div", {
                          className: "flex items-center",
                          children: [
                            (0, t.jsx)("svg", {
                              className:
                                "w-5 h-5 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transition-colors",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M15 19l-7-7 7-7",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: "ml-3",
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400",
                                  children: "Previous",
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white group-hover:text-ethai dark:group-hover:text-ethai transition-colors",
                                  children: "How to Buy",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, t.jsx)(s.default, {
                      href: "/how-to-buy/get-ethereum",
                      className:
                        "flex-1 group p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300",
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex items-center",
                            children: (0, t.jsxs)("div", {
                              className: "mr-3",
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400",
                                  children: "Next",
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "font-medium text-gray-900 dark:text-white group-hover:text-ethai dark:group-hover:text-ethai transition-colors",
                                  children: "Get Ethereum",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("svg", {
                            className:
                              "w-5 h-5 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transition-colors",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                              d: "M9 5l7 7-7 7",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "mt-8 text-center",
                  children: (0, t.jsxs)("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400",
                    children: [
                      "Last updated ",
                      (0, t.jsx)("time", { children: "August 2025" }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=634a912837140c86.js.map
