(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        4176: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 8627))
        },
        8627: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => S
            });
            var r = a(5155),
                s = a(2115),
                i = a(4624),
                n = a(2085),
                l = a(2596),
                o = a(9688);
            let c = (0, n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                d = s.forwardRef((e, t) => {
                    let {
                        className: a,
                        variant: s,
                        size: n,
                        asChild: d = !1,
                        ...x
                    } = e, h = d ? i.DX : "button";
                    return (0, r.jsx)(h, {
                        className: function() {
                            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                            return (0, o.QP)((0, l.$)(t))
                        }(c({
                            variant: s,
                            size: n,
                            className: a
                        })),
                        ref: t,
                        ...x
                    })
                });
            d.displayName = "Button";
            var x = a(4869),
                h = a(5487),
                m = a(4186),
                g = a(5525),
                b = a(1539),
                u = a(760),
                p = a(6408),
                y = a(7574),
                f = a.n(y),
                v = a(7550),
                w = a(3786);

            function N(e) {
                let {
                    title: t,
                    dashboardLink: a,
                    status: s,
                    flag: i,
                    uptime: n,
                    lastUpdated: l,
                    accessText: o,
                    href: c,
                    delay: d
                } = e, x = "Online" === s, h = "Coming Soon" === s;
                return (0, r.jsxs)(p.P.a, {
                    href: c,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "bg-gray-900/80 border-2 p-6 hover:border-red-400 transition-all duration-300 group relative overflow-hidden cursor-pointer hover:scale-105 transform ".concat(h ? "border-gray-500/50 opacity-75 cursor-not-allowed" : "border-red-500/50"),
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: d,
                        duration: .3
                    },
                    children: [(0, r.jsx)("div", {
                        className: "absolute inset-0 ".concat(h ? "bg-gray-500/5" : "bg-red-500/5", " opacity-0 group-hover:opacity-100 transition-opacity duration-300")
                    }), (0, r.jsxs)("div", {
                        className: "relative z-10",
                        children: [(0, r.jsx)("h3", {
                            className: "text-white text-xl font-bold mb-3 tracking-wider transition-colors ".concat(h ? "group-hover:text-gray-300" : "group-hover:text-red-300"),
                            children: t
                        }), (0, r.jsx)("div", {
                            className: "text-red-400 text-sm mb-4 font-semibold",
                            children: "Dashboard"
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-2 mb-2",
                            children: [(0, r.jsx)("span", {
                                className: "text-gray-300",
                                children: "Status:"
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)("div", {
                                    className: "w-2 h-2 rounded-full ".concat(x ? "bg-green-400 animate-pulse" : "bg-yellow-400 animate-pulse")
                                }), (0, r.jsx)("span", {
                                    className: "font-bold ".concat(x ? "text-green-400" : "text-yellow-400"),
                                    children: s
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [(0, r.jsx)("span", {
                                className: "text-gray-300",
                                children: "Flag:"
                            }), (0, r.jsx)("span", {
                                className: "text-red-400 font-semibold",
                                children: i
                            })]
                        }), (0, r.jsx)("div", {
                            className: "border-t border-gray-700 pt-3 mt-3",
                            children: (0, r.jsxs)("div", {
                                className: "flex justify-between text-xs",
                                children: [(0, r.jsxs)("span", {
                                    className: "text-gray-400",
                                    children: ["Uptime: ", (0, r.jsx)("span", {
                                        className: "text-cyan-400",
                                        children: n
                                    })]
                                }), (0, r.jsxs)("span", {
                                    className: "text-gray-400",
                                    children: ["Last: ", (0, r.jsx)("span", {
                                        className: "text-yellow-400",
                                        children: l
                                    })]
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "w-full mt-4 border py-2 px-4 text-center text-sm font-mono transition-all ".concat(h ? "bg-gray-600/20 border-gray-500 text-gray-400 cursor-not-allowed" : "bg-red-600/20 border-red-500 text-red-400 group-hover:bg-red-600/40"),
                            children: o
                        })]
                    }), (0, r.jsx)("div", {
                        className: "absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ".concat(h ? "border-gray-400/50" : "border-red-400/50")
                    }), (0, r.jsx)("div", {
                        className: "absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ".concat(h ? "border-gray-400/50" : "border-red-400/50")
                    }), (0, r.jsx)("div", {
                        className: "absolute top-2 right-2 ".concat(h ? "text-gray-400/50" : "text-red-400/50", " group-hover:text-red-400 transition-colors"),
                        children: (0, r.jsx)(w.A, {
                            className: "w-4 h-4"
                        })
                    })]
                })
            }

            function j(e) {
                let {
                    handleBackToDashboard: t
                } = e;
                return (0, r.jsxs)(p.P.div, {
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: 50
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6,
                                ease: "easeOut"
                            }
                        }
                    },
                    className: "flex flex-col items-center justify-center text-center font-extralight",
                    children: [(0, r.jsx)(p.P.div, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .1,
                            duration: .5
                        },
                        className: "w-full max-w-4xl flex justify-start mb-4",
                        children: (0, r.jsxs)(d, {
                            onClick: t,
                            className: "bg-tech-blue-800/50 border border-tech-blue-700 text-gray-300 hover:bg-tech-blue-700/50 transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-md shadow-md shadow-tech-blue-700/20",
                            children: [(0, r.jsx)(v.A, {
                                className: "w-4 h-4"
                            }), "Back to Dashboard"]
                        })
                    }), (0, r.jsx)(p.P.h1, {
                        className: "text-5xl md:text-7xl font-bold mb-4 tracking-wider animate-lightning-flicker text-tech-cyan-glow drop-shadow-lg shadow-tech-cyan-glow/50",
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .2,
                            duration: .8
                        },
                        children: (0, r.jsx)("span", {
                            className: "chrome-text animate-chrome-shine",
                            children: "GENERATOR"
                        })
                    }), (0, r.jsx)(p.P.div, {
                        className: "text-tech-green-glow text-lg md:text-xl mb-2",
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .4,
                            duration: .6
                        },
                        children: "SELECT_YOUR_SERVICE"
                    }), (0, r.jsx)(p.P.div, {
                        className: "text-gray-400 text-sm md:text-base mb-8",
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: .6,
                            duration: .6
                        },
                        children: "[STATUS] ALL_SERVICES_OPERATIONAL"
                    }), (0, r.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl",
                        children: (0, r.jsx)(N, {
                            title: "SPLUNK",
                            dashboardLink: "#",
                            status: "Online",
                            flag: "Discord/Tiktok",
                            uptime: "99.9%",
                            lastUpdated: "2s ago",
                            accessText: "[CLICK_TO_ACCESS]",
                            href: "https://app.beaming.pro/u/Skidder",
                            delay: 0
                        })
                    })]
                }, "cards-view")
            }

            function S() {
                let [e, t] = (0, s.useState)(!1), [a, i] = (0, s.useState)("");
                (0, s.useEffect)(() => {
                    let e = () => {
                        i(new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: !0
                        }))
                    };
                    e();
                    let t = setInterval(e, 1e3);
                    return () => clearInterval(t)
                }, []);
                let n = {
                    hidden: {
                        opacity: 0,
                        scale: .8
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: .4,
                            ease: "easeOut"
                        }
                    }
                };
                return (0, r.jsx)("div", {
                    className: "min-h-screen bg-tech-bg-dark text-white ".concat(f().variable, " font-orbitron overflow-hidden"),
                    children: (0, r.jsxs)(u.N, {
                        mode: "wait",
                        children: [(0, r.jsxs)("div", {
                            className: "absolute inset-0 z-0",
                            children: [(0, r.jsx)("div", {
                                className: "absolute inset-0 opacity-10",
                                style: {
                                    backgroundImage: "linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)",
                                    backgroundSize: "50px 50px"
                                }
                            }), (() => {
                                let e = [];
                                for (let t = 0; t < 50; t++) {
                                    let a = 100 * Math.random(),
                                        s = 100 * Math.random(),
                                        i = 2 + 4 * Math.random(),
                                        n = 5 * Math.random(),
                                        l = 2 + 3 * Math.random();
                                    e.push((0, r.jsx)("div", {
                                        className: "absolute rounded-full bg-tech-cyan-glow opacity-70 animate-node-pulse",
                                        style: {
                                            top: "".concat(a, "%"),
                                            left: "".concat(s, "%"),
                                            width: "".concat(i, "px"),
                                            height: "".concat(i, "px"),
                                            animationDelay: "".concat(n, "s"),
                                            animationDuration: "".concat(l, "s"),
                                            filter: "blur(".concat(i / 4, "px)")
                                        }
                                    }, "node-".concat(t)))
                                }
                                return e
                            })()]
                        }), (0, r.jsxs)("div", {
                            className: "relative z-10 flex flex-col min-h-screen",
                            children: [(0, r.jsx)("header", {
                                className: "border-b-2 border-tech-red-glow/50 bg-tech-blue-900/90 backdrop-blur-sm py-4 px-6 shadow-lg shadow-tech-red-glow/10",
                                children: (0, r.jsxs)("div", {
                                    className: "container mx-auto flex items-center justify-between",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-6",
                                        children: [(0, r.jsx)("div", {
                                            className: "w-2 h-2 bg-tech-green-glow animate-pulse shadow-lg shadow-tech-green-glow/50 rounded-full"
                                        }), (0, r.jsx)("span", {
                                            className: "text-sm text-tech-green-glow",
                                            children: "SYSTEM.ONLINE"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "text-tech-cyan-glow text-sm",
                                        children: a
                                    })]
                                })
                            }), (0, r.jsx)("main", {
                                className: "container mx-auto px-6 py-8 flex-1 flex flex-col justify-center",
                                children: (0, r.jsx)(u.N, {
                                    mode: "wait",
                                    children: e ? (0, r.jsx)(j, {
                                        handleBackToDashboard: () => {
                                            t(!1)
                                        }
                                    }) : (0, r.jsxs)(p.P.div, {
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "hidden",
                                        variants: {
                                            hidden: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: .6,
                                                    ease: "easeOut"
                                                }
                                            }
                                        },
                                        className: "flex flex-col items-center justify-center text-center",
                                        children: [(0, r.jsx)(p.P.h1, {
                                            className: "text-5xl md:text-7xl font-bold mb-4 tracking-wider animate-lightning-flicker text-tech-cyan-glow drop-shadow-lg shadow-tech-cyan-glow/50",
                                            initial: {
                                                opacity: 0,
                                                y: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: .2,
                                                duration: .8
                                            },
                                            children: (0, r.jsx)("span", {
                                                className: "chrome-text animate-chrome-shine",
                                                children: "SPLUNK X"
                                            })
                                        }), (0, r.jsx)(p.P.div, {
                                            className: "text-gray-400 text-sm md:text-base mb-8",
                                            initial: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: .6,
                                                duration: .6
                                            },
                                            children: "[SYSTEM_STATUS] ALL_SERVICES_OPERATIONAL"
                                        }), (0, r.jsxs)(p.P.div, {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-4xl",
                                            initial: "hidden",
                                            animate: "visible",
                                            variants: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: .1
                                                    }
                                                }
                                            },
                                            children: [(0, r.jsxs)(p.P.div, {
                                                variants: n,
                                                className: "bg-tech-blue-800/80 border-2 border-tech-green-glow/50 p-4 text-center flex flex-col items-center justify-center shadow-lg shadow-tech-green-glow/10",
                                                children: [(0, r.jsx)(x.A, {
                                                    className: "w-8 h-8 text-tech-green-glow mb-2"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-tech-green-glow text-3xl font-bold",
                                                    children: "1"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "ACTIVE_SERVICES"
                                                })]
                                            }), (0, r.jsxs)(p.P.div, {
                                                variants: n,
                                                className: "bg-tech-blue-800/80 border-2 border-tech-cyan-glow/50 p-4 text-center flex flex-col items-center justify-center shadow-lg shadow-tech-cyan-glow/10",
                                                children: [(0, r.jsx)(h.A, {
                                                    className: "w-8 h-8 text-tech-cyan-glow mb-2"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-tech-cyan-glow text-3xl font-bold",
                                                    children: "99.8%"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "AVG_UPTIME"
                                                })]
                                            }), (0, r.jsxs)(p.P.div, {
                                                variants: n,
                                                className: "bg-tech-blue-800/80 border-2 border-tech-red-glow/50 p-4 text-center flex flex-col items-center justify-center shadow-lg shadow-tech-red-glow/10",
                                                children: [(0, r.jsx)(m.A, {
                                                    className: "w-8 h-8 text-tech-red-glow mb-2"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-tech-red-glow text-3xl font-bold",
                                                    children: "24/7"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "MONITORING"
                                                })]
                                            }), (0, r.jsxs)(p.P.div, {
                                                variants: n,
                                                className: "bg-tech-blue-800/80 border-2 border-tech-purple-glow/50 p-4 text-center flex flex-col items-center justify-center shadow-lg shadow-tech-purple-glow/10",
                                                children: [(0, r.jsx)(g.A, {
                                                    className: "w-8 h-8 text-tech-purple-glow mb-2"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-tech-purple-glow text-3xl font-bold",
                                                    children: "0"
                                                }), (0, r.jsx)("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: "INCIDENTS"
                                                })]
                                            })]
                                        }), (0, r.jsx)(p.P.div, {
                                            className: "flex justify-center mt-8 w-full max-w-md",
                                            initial: {
                                                opacity: 0,
                                                scale: .8
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            transition: {
                                                delay: 1,
                                                duration: .5
                                            },
                                            children: (0, r.jsxs)(d, {
                                                onClick: () => t(!0),
                                                className: "w-full h-16 bg-tech-red-glow/20 border-2 border-tech-red-glow text-tech-red-glow text-2xl font-bold rounded-lg hover:bg-tech-red-glow/30 transition-all duration-200 flex items-center justify-center gap-4 animate-glow-pulse shadow-lg shadow-tech-red-glow/50",
                                                "aria-label": "Generator",
                                                children: [(0, r.jsx)(b.A, {
                                                    className: "w-8 h-8"
                                                }), "GENERATOR"]
                                            })
                                        })]
                                    }, "dashboard-view")
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "crt-overlay fixed inset-0 pointer-events-none z-50 opacity-20 animate-flicker",
                            style: {
                                background: "repeating-linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 1px, transparent 2px)",
                                animation: "scanlines 1s linear infinite"
                            }
                        })]
                    })
                })
            }
        }
    },
    e => {
        var t = t => e(e.s = t);
        e.O(0, [907, 421, 441, 684, 358], () => t(4176)), _N_E = e.O()
    }
]);