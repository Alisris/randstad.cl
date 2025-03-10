"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(n => {
  var r = {};
  function i(e) {
    var t;
    return (r[e] || (t = r[e] = {
      i: e,
      l: !1,
      exports: {}
    }, n[e].call(t.exports, t, t.exports, i), t.l = !0, t)).exports;
  }
  i.m = n, i.c = r, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
      return t[e];
    }.bind(null, r));
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 137);
})({
  137: function (e, t, n) {
    e.exports = n(138);
  },
  138: function (e, t, n) {
    n.r(t);
    t = n(96), n = n.n(t);
    window.jQuery = n.a, window.$ = n.a;
  },
  96: function (sr, ur, e) {
    var lr, t, n;
    t = "undefined" != typeof window ? window : this, n = function (T, M) {
      function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
      }
      function R(e) {
        return null != e && e === e.window;
      }
      var t = [],
        I = Object.getPrototypeOf,
        s = t.slice,
        W = t.flat ? function (e) {
          return t.flat.call(e);
        } : function (e) {
          return t.concat.apply([], e);
        },
        F = t.push,
        b = t.indexOf,
        $ = {},
        _ = $.toString,
        B = $.hasOwnProperty,
        z = B.toString,
        X = z.call(Object),
        g = {},
        C = T.document,
        U = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };
      function V(e, t, n) {
        var r,
          i,
          o = (n = n || C).createElement("script");
        if (o.text = e, t) for (r in U) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function G(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? $[_.call(e)] || "object" : typeof e;
      }
      var Y = /HTML$/i,
        S = function (e, t) {
          return new S.fn.init(e, t);
        };
      function Q(e) {
        var t = !!e && "length" in e && e.length,
          n = G(e);
        return !m(e) && !R(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
      }
      function x(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      S.fn = S.prototype = {
        jquery: "3.7.1",
        constructor: S,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
          e = S.merge(this.constructor(), e);
          return e.prevObject = this, e;
        },
        each: function (e) {
          return S.each(this, e);
        },
        map: function (n) {
          return this.pushStack(S.map(this, function (e, t) {
            return n.call(e, t, e);
          }));
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(S.grep(this, function (e, t) {
            return (t + 1) % 2;
          }));
        },
        odd: function () {
          return this.pushStack(S.grep(this, function (e, t) {
            return t % 2;
          }));
        },
        eq: function (e) {
          var t = this.length,
            e = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: F,
        sort: t.sort,
        splice: t.splice
      }, S.extend = S.fn.extend = function () {
        var e,
          t,
          n,
          r,
          i,
          o = arguments[0] || {},
          a = 1,
          s = arguments.length,
          u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || m(o) || (o = {}), a === s && (o = this, a--); a < s; a++) if (null != (e = arguments[a])) for (t in e) n = e[t], "__proto__" !== t && o !== n && (u && n && (S.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], i = r && !Array.isArray(i) ? [] : r || S.isPlainObject(i) ? i : {}, r = !1, o[t] = S.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o;
      }, S.extend({
        expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          return !(!e || "[object Object]" !== _.call(e) || (e = I(e)) && ("function" != typeof (e = B.call(e, "constructor") && e.constructor) || z.call(e) !== X));
        },
        isEmptyObject: function (e) {
          for (var t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          V(e, {
            nonce: t && t.nonce
          }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (Q(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        text: function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (!i) for (; t = e[r++];) n += S.text(t);
          return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n;
        },
        makeArray: function (e, t) {
          t = t || [];
          return null != e && (Q(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : F.call(t, e)), t;
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : b.call(t, e, n);
        },
        isXMLDoc: function (e) {
          var t = e && e.namespaceURI,
            e = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || e && e.nodeName || "HTML");
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e;
        },
        grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
          return r;
        },
        map: function (e, t, n) {
          var r,
            i,
            o = 0,
            a = [];
          if (Q(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
          return W(a);
        },
        guid: 1,
        support: g
      }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        $["[object " + t + "]"] = t.toLowerCase();
      });
      var J = t.pop,
        K = t.sort,
        Z = t.splice,
        n = "[\\x20\\t\\r\\n\\f]",
        ee = new RegExp("^" + n + "+|((?:^|[^\\\\])(?:\\\\.)*)" + n + "+$", "g"),
        te = (S.contains = function (e, t) {
          t = t && t.parentNode;
          return e === t || !(!t || 1 !== t.nodeType || !(e.contains ? e.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
        }, /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g);
      function ne(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      S.escapeSelector = function (e) {
        return (e + "").replace(te, ne);
      };
      var re,
        w,
        ie,
        oe,
        ae,
        E,
        r,
        k,
        p,
        se,
        i = C,
        ue = F,
        j = ue,
        A = S.expando,
        D = 0,
        le = 0,
        ce = De(),
        fe = De(),
        pe = De(),
        de = De(),
        he = function (e, t) {
          return e === t && (ae = !0), 0;
        },
        ge = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        e = "(?:\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        o = "\\[" + n + "*(" + e + ")(?:" + n + "*([*^$|!~]?=)" + n + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + e + "))|)" + n + "*\\]",
        a = ":(" + e + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + o + ")*)|.*)\\)|)",
        ye = new RegExp(n + "+", "g"),
        ve = new RegExp("^" + n + "*," + n + "*"),
        me = new RegExp("^" + n + "*([>+~]|" + n + ")" + n + "*"),
        xe = new RegExp(n + "|>"),
        be = new RegExp(a),
        we = new RegExp("^" + e + "$"),
        Te = {
          ID: new RegExp("^#(" + e + ")"),
          CLASS: new RegExp("^\\.(" + e + ")"),
          TAG: new RegExp("^(" + e + "|[*])"),
          ATTR: new RegExp("^" + o),
          PSEUDO: new RegExp("^" + a),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + n + "*(even|odd|(([+-]|)(\\d*)n|)" + n + "*(?:([+-]|)" + n + "*(\\d+)|))" + n + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ge + ")$", "i"),
          needsContext: new RegExp("^" + n + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + n + "*((?:-\\d)?\\d*)" + n + "*\\)|)(?=[^-]|$)", "i")
        },
        Ce = /^(?:input|select|textarea|button)$/i,
        Se = /^h\d$/i,
        Ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ke = /[+~]/,
        f = new RegExp("\\\\[\\da-fA-F]{1,6}" + n + "?|\\\\([^\\r\\n\\f])", "g"),
        d = function (e, t) {
          e = "0x" + e.slice(1) - 65536;
          return t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320));
        },
        je = function () {
          Oe();
        },
        Ae = Ie(function (e) {
          return !0 === e.disabled && x(e, "fieldset");
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        j.apply(t = s.call(i.childNodes), i.childNodes), t[i.childNodes.length].nodeType;
      } catch (re) {
        j = {
          apply: function (e, t) {
            ue.apply(e, s.call(t));
          },
          call: function (e) {
            ue.apply(e, s.call(arguments, 1));
          }
        };
      }
      function N(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c = t && t.ownerDocument,
          f = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
        if (!r && (Oe(t), t = t || E, k)) {
          if (11 !== f && (s = Ee.exec(e))) if (i = s[1]) {
            if (9 === f) {
              if (!(l = t.getElementById(i))) return n;
              if (l.id === i) return j.call(n, l), n;
            } else if (c && (l = c.getElementById(i)) && N.contains(t, l) && l.id === i) return j.call(n, l), n;
          } else {
            if (s[2]) return j.apply(n, t.getElementsByTagName(e)), n;
            if ((i = s[3]) && t.getElementsByClassName) return j.apply(n, t.getElementsByClassName(i)), n;
          }
          if (!(de[e + " "] || p && p.test(e))) {
            if (l = e, c = t, 1 === f && (xe.test(e) || me.test(e))) {
              for ((c = ke.test(e) && He(t.parentNode) || t) == t && g.scope || ((a = t.getAttribute("id")) ? a = S.escapeSelector(a) : t.setAttribute("id", a = A)), o = (u = Me(e)).length; o--;) u[o] = (a ? "#" + a : ":scope") + " " + Re(u[o]);
              l = u.join(",");
            }
            try {
              return j.apply(n, c.querySelectorAll(l)), n;
            } catch (t) {
              de(e, !0);
            } finally {
              a === A && t.removeAttribute("id");
            }
          }
        }
        return Be(e.replace(ee, "$1"), t, n, r);
      }
      function De() {
        var r = [];
        return function e(t, n) {
          return r.push(t + " ") > w.cacheLength && delete e[r.shift()], e[t + " "] = n;
        };
      }
      function u(e) {
        return e[A] = !0, e;
      }
      function Ne(e) {
        var t = E.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t);
        }
      }
      function qe(t) {
        return function (e) {
          return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
        };
      }
      function Le(a) {
        return u(function (o) {
          return o = +o, u(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          });
        });
      }
      function He(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      function Oe(e) {
        var e = e ? e.ownerDocument || e : i;
        return e != E && 9 === e.nodeType && e.documentElement && (r = (E = e).documentElement, k = !S.isXMLDoc(E), se = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && i != E && (e = E.defaultView) && e.top !== e && e.addEventListener("unload", je), g.getById = Ne(function (e) {
          return r.appendChild(e).id = S.expando, !E.getElementsByName || !E.getElementsByName(S.expando).length;
        }), g.disconnectedMatch = Ne(function (e) {
          return se.call(e, "*");
        }), g.scope = Ne(function () {
          return E.querySelectorAll(":scope");
        }), g.cssHas = Ne(function () {
          try {
            return E.querySelector(":has(*,:jqfake)"), 0;
          } catch (e) {
            return 1;
          }
        }), g.getById ? (w.filter.ID = function (e) {
          var t = e.replace(f, d);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, w.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && k) return (t = t.getElementById(e)) ? [t] : [];
        }) : (w.filter.ID = function (e) {
          var t = e.replace(f, d);
          return function (e) {
            e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return e && e.value === t;
          };
        }, w.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && k) {
            var n,
              r,
              i,
              o = t.getElementById(e);
            if (o) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
            return [];
          }
        }), w.find.TAG = function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
        }, w.find.CLASS = function (e, t) {
          if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e);
        }, p = [], Ne(function (e) {
          var t;
          r.appendChild(e).innerHTML = "<a id='" + A + "' href='' disabled='disabled'></a><select id='" + A + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || p.push("\\[" + n + "*(?:value|" + ge + ")"), e.querySelectorAll("[id~=" + A + "-]").length || p.push("~="), e.querySelectorAll("a#" + A + "+*").length || p.push(".#.+[+~]"), e.querySelectorAll(":checked").length || p.push(":checked"), (t = E.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"), (t = E.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || p.push("\\[" + n + "*name" + n + "*=" + n + "*(?:''|\"\")");
        }), g.cssHas || p.push(":has"), p = p.length && new RegExp(p.join("|")), he = function (e, t) {
          var n;
          return e === t ? (ae = !0, 0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument == i && N.contains(i, e) ? -1 : t === E || t.ownerDocument == i && N.contains(i, t) ? 1 : oe ? b.call(oe, e) - b.call(oe, t) : 0 : 4 & n ? -1 : 1);
        }), E;
      }
      for (re in N.matches = function (e, t) {
        return N(e, null, null, t);
      }, N.matchesSelector = function (e, t) {
        if (Oe(e), k && !de[t + " "] && (!p || !p.test(t))) try {
          var n = se.call(e, t);
          if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
        } catch (e) {
          de(t, !0);
        }
        return 0 < N(t, E, null, [e]).length;
      }, N.contains = function (e, t) {
        return (e.ownerDocument || e) != E && Oe(e), S.contains(e, t);
      }, N.attr = function (e, t) {
        (e.ownerDocument || e) != E && Oe(e);
        var n = w.attrHandle[t.toLowerCase()],
          n = n && B.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
        return void 0 !== n ? n : e.getAttribute(t);
      }, N.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, S.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (ae = !g.sortStable, oe = !g.sortStable && s.call(e, 0), K.call(e, he), ae) {
          for (; t = e[i++];) t === e[i] && (r = n.push(i));
          for (; r--;) Z.call(e, n[r], 1);
        }
        return oe = null, e;
      }, S.fn.uniqueSort = function () {
        return this.pushStack(S.uniqueSort(s.apply(this)));
      }, (w = S.expr = {
        cacheLength: 50,
        createPseudo: u,
        match: Te,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(f, d), e[3] = (e[3] || e[4] || e[5] || "").replace(f, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || N.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && N.error(e[0]), e;
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Te.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && be.test(n) && (t = (t = Me(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(f, d).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return x(e, t);
            };
          },
          CLASS: function (e) {
            var t = ce[e + " "];
            return t || (t = new RegExp("(^|" + n + ")" + e + "(" + n + "|$)")) && ce(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function (t, n, r) {
            return function (e) {
              e = N.attr(e, t);
              return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ye, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
            };
          },
          CHILD: function (d, e, t, h, g) {
            var y = "nth" !== d.slice(0, 3),
              v = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g ? function (e) {
              return !!e.parentNode;
            } : function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u = y != v ? "nextSibling" : "previousSibling",
                l = e.parentNode,
                c = m && e.nodeName.toLowerCase(),
                f = !n && !m,
                p = !1;
              if (l) {
                if (y) {
                  for (; u;) {
                    for (o = e; o = o[u];) if (m ? x(o, c) : 1 === o.nodeType) return !1;
                    s = u = "only" === d && !s && "nextSibling";
                  }
                  return !0;
                }
                if (s = [v ? l.firstChild : l.lastChild], v && f) {
                  for (p = (a = (r = (i = l[A] || (l[A] = {}))[d] || [])[0] === D && r[1]) && r[2], o = a && l.childNodes[a]; o = ++a && o && o[u] || (p = a = 0, s.pop());) if (1 === o.nodeType && ++p && o === e) {
                    i[d] = [D, a, p];
                    break;
                  }
                } else if (!1 === (p = f ? a = (r = (i = e[A] || (e[A] = {}))[d] || [])[0] === D && r[1] : p)) for (; (o = ++a && o && o[u] || (p = a = 0, s.pop())) && (!(m ? x(o, c) : 1 === o.nodeType) || !++p || (f && ((i = o[A] || (o[A] = {}))[d] = [D, p]), o !== e)););
                return (p -= g) === h || p % h == 0 && 0 <= p / h;
              }
            };
          },
          PSEUDO: function (e, o) {
            var t,
              a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || N.error("unsupported pseudo: " + e);
            return a[A] ? a(o) : 1 < a.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? u(function (e, t) {
              for (var n, r = a(e, o), i = r.length; i--;) e[n = b.call(e, r[i])] = !(t[n] = r[i]);
            }) : function (e) {
              return a(e, 0, t);
            }) : a;
          }
        },
        pseudos: {
          not: u(function (e) {
            var r = [],
              i = [],
              s = _e(e.replace(ee, "$1"));
            return s[A] ? u(function (e, t, n, r) {
              for (var i, o = s(e, null, r, []), a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i));
            }) : function (e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
            };
          }),
          has: u(function (t) {
            return function (e) {
              return 0 < N(t, e).length;
            };
          }),
          contains: u(function (t) {
            return t = t.replace(f, d), function (e) {
              return -1 < (e.textContent || S.text(e)).indexOf(t);
            };
          }),
          lang: u(function (n) {
            return we.test(n || "") || N.error("unsupported lang: " + n), n = n.replace(f, d).toLowerCase(), function (e) {
              var t;
              do {
                if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            };
          }),
          target: function (e) {
            var t = T.location && T.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === r;
          },
          focus: function (e) {
            return e === (() => {
              try {
                return E.activeElement;
              } catch (e) {}
            })() && E.hasFocus() && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: qe(!1),
          disabled: qe(!0),
          checked: function (e) {
            return x(e, "input") && !!e.checked || x(e, "option") && !!e.selected;
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !w.pseudos.empty(e);
          },
          header: function (e) {
            return Se.test(e.nodeName);
          },
          input: function (e) {
            return Ce.test(e.nodeName);
          },
          button: function (e) {
            return x(e, "input") && "button" === e.type || x(e, "button");
          },
          text: function (e) {
            return x(e, "input") && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
          },
          first: Le(function () {
            return [0];
          }),
          last: Le(function (e, t) {
            return [t - 1];
          }),
          eq: Le(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: Le(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: Le(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: Le(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
            return e;
          }),
          gt: Le(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e;
          })
        }
      }).pseudos.nth = w.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[re] = (t => function (e) {
        return x(e, "input") && e.type === t;
      })(re);
      for (re in {
        submit: !0,
        reset: !0
      }) w.pseudos[re] = (t => function (e) {
        return (x(e, "input") || x(e, "button")) && e.type === t;
      })(re);
      function Pe() {}
      function Me(e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = fe[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (a = e, s = [], u = w.preFilter; a;) {
          for (o in n && !(r = ve.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = me.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace(ee, " ")
          }), a = a.slice(n.length)), w.filter) !(r = Te[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
          if (!n) break;
        }
        return t ? a.length : a ? N.error(e) : fe(e, s).slice(0);
      }
      function Re(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function Ie(a, e, t) {
        var s = e.dir,
          u = e.next,
          l = u || s,
          c = t && "parentNode" === l,
          f = le++;
        return e.first ? function (e, t, n) {
          for (; e = e[s];) if (1 === e.nodeType || c) return a(e, t, n);
          return !1;
        } : function (e, t, n) {
          var r,
            i,
            o = [D, f];
          if (n) {
            for (; e = e[s];) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
          } else for (; e = e[s];) if (1 === e.nodeType || c) if (i = e[A] || (e[A] = {}), u && x(e, u)) e = e[s] || e;else {
            if ((r = i[l]) && r[0] === D && r[1] === f) return o[2] = r[2];
            if ((i[l] = o)[2] = a(e, t, n)) return !0;
          }
          return !1;
        };
      }
      function We(i) {
        return 1 < i.length ? function (e, t, n) {
          for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
          return !0;
        } : i[0];
      }
      function Fe(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(o = e[s]) || n && !n(o, r, i) || (a.push(o), l && t.push(s));
        return a;
      }
      function $e(d, h, g, y, v, e) {
        return y && !y[A] && (y = $e(y)), v && !v[A] && (v = $e(v, e)), u(function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u = [],
            l = [],
            c = t.length,
            f = e || ((e, t, n) => {
              for (var r = 0, i = t.length; r < i; r++) N(e, t[r], n);
              return n;
            })(h || "*", n.nodeType ? [n] : n, []),
            p = !d || !e && h ? f : Fe(f, u, d, n, r);
          if (g ? g(p, s = v || (e ? d : c || y) ? [] : t, n, r) : s = p, y) for (i = Fe(s, l), y(i, [], n, r), o = i.length; o--;) (a = i[o]) && (s[l[o]] = !(p[l[o]] = a));
          if (e) {
            if (v || d) {
              if (v) {
                for (i = [], o = s.length; o--;) (a = s[o]) && i.push(p[o] = a);
                v(null, s = [], i, r);
              }
              for (o = s.length; o--;) (a = s[o]) && -1 < (i = v ? b.call(e, a) : u[o]) && (e[i] = !(t[i] = a));
            }
          } else s = Fe(s === t ? s.splice(c, s.length) : s), v ? v(null, t, s, r) : j.apply(t, s);
        });
      }
      function _e(e, t) {
        var n,
          y,
          v,
          m,
          x,
          r = [],
          i = [],
          o = pe[e + " "];
        if (!o) {
          for (n = (t = t || Me(e)).length; n--;) ((o = function e(t) {
            for (var r, n, i, o = t.length, a = w.relative[t[0].type], s = a || w.relative[" "], u = a ? 1 : 0, l = Ie(function (e) {
                return e === r;
              }, s, !0), c = Ie(function (e) {
                return -1 < b.call(r, e);
              }, s, !0), f = [function (e, t, n) {
                return e = !a && (n || t != ie) || ((r = t).nodeType ? l : c)(e, t, n), r = null, e;
              }]; u < o; u++) if (n = w.relative[t[u].type]) f = [Ie(We(f), n)];else {
              if ((n = w.filter[t[u].type].apply(null, t[u].matches))[A]) {
                for (i = ++u; i < o && !w.relative[t[i].type]; i++);
                return $e(1 < u && We(f), 1 < u && Re(t.slice(0, u - 1).concat({
                  value: " " === t[u - 2].type ? "*" : ""
                })).replace(ee, "$1"), n, u < i && e(t.slice(u, i)), i < o && e(t = t.slice(i)), i < o && Re(t));
              }
              f.push(n);
            }
            return We(f);
          }(t[n]))[A] ? r : i).push(o);
          (o = pe(e, (y = i, m = 0 < (v = r).length, x = 0 < y.length, m ? u(a) : a))).selector = e;
        }
        function a(e, t, n, r, i) {
          var o,
            a,
            s,
            u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = ie,
            d = e || x && w.find.TAG("*", i),
            h = D += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (ie = t == E || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              for (a = 0, t || o.ownerDocument == E || (Oe(o), n = !k); s = y[a++];) if (s(o, t || E, n)) {
                j.call(r, o);
                break;
              }
              i && (D = h);
            }
            m && ((o = !s && o) && u--, e) && c.push(o);
          }
          if (u += l, m && l !== u) {
            for (a = 0; s = v[a++];) s(c, f, t, n);
            if (e) {
              if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = J.call(r));
              f = Fe(f);
            }
            j.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && S.uniqueSort(r);
          }
          return i && (D = h, ie = p), c;
        }
        return o;
      }
      function Be(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && Me(e = l.selector || e);
        if (n = n || [], 1 === c.length) {
          if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && k && w.relative[o[1].type]) {
            if (!(t = (w.find.ID(a.matches[0].replace(f, d), t) || [])[0])) return n;
            l && (t = t.parentNode), e = e.slice(o.shift().value.length);
          }
          for (i = Te.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);) if ((u = w.find[s]) && (r = u(a.matches[0].replace(f, d), ke.test(o[0].type) && He(t.parentNode) || t))) {
            if (o.splice(i, 1), e = r.length && Re(o)) break;
            return j.apply(n, r), n;
          }
        }
        return (l || _e(e, c))(r, t, !k, n, !t || ke.test(e) && He(t.parentNode) || t), n;
      }
      Pe.prototype = w.filters = w.pseudos, w.setFilters = new Pe(), g.sortStable = A.split("").sort(he).join("") === A, Oe(), g.sortDetached = Ne(function (e) {
        return 1 & e.compareDocumentPosition(E.createElement("fieldset"));
      }), S.find = N, S.expr[":"] = S.expr.pseudos, S.unique = S.uniqueSort, N.compile = _e, N.select = Be, N.setDocument = Oe, N.tokenize = Me, N.escape = S.escapeSelector, N.getText = S.text, N.isXML = S.isXMLDoc, N.selectors = S.expr, N.support = S.support, N.uniqueSort = S.uniqueSort;
      function ze(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
        return r;
      }
      function Xe(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
      }
      var Ue = S.expr.match.needsContext,
        Ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Ge(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? S.grep(e, function (e) {
          return e === n !== r;
        }) : "string" != typeof n ? S.grep(e, function (e) {
          return -1 < b.call(n, e) !== r;
        }) : S.filter(n, e, r);
      }
      S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, S.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            i = this;
          if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
            for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
          return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(Ge(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(Ge(this, e || [], !0));
        },
        is: function (e) {
          return !!Ge(this, "string" == typeof e && Ue.test(e) ? S(e) : e || [], !1).length;
        }
      });
      var Ye,
        Qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Je = ((S.fn.init = function (e, t, n) {
          if (e) {
            if (n = n || Ye, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Qe.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
              if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), Ve.test(r[1]) && S.isPlainObject(t)) for (var r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            } else (n = C.getElementById(r[2])) && (this[0] = n, this.length = 1);
          }
          return this;
        }).prototype = S.fn, Ye = S(C), /^(?:parents|prev(?:Until|All))/),
        Ke = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };
      function Ze(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e;
      }
      S.fn.extend({
        has: function (e) {
          var t = S(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = "string" != typeof e && S(e);
          if (!Ue.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
          return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function (e) {
          return e ? "string" == typeof e ? b.call(S(e), this[0]) : b.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
          return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
      }), S.each({
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return ze(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ze(e, "parentNode", n);
        },
        next: function (e) {
          return Ze(e, "nextSibling");
        },
        prev: function (e) {
          return Ze(e, "previousSibling");
        },
        nextAll: function (e) {
          return ze(e, "nextSibling");
        },
        prevAll: function (e) {
          return ze(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ze(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ze(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Xe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Xe(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && I(e.contentDocument) ? e.contentDocument : (x(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
        }
      }, function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (Ke[r] || S.uniqueSort(n), Je.test(r)) && n.reverse(), this.pushStack(n);
        };
      });
      var q = /[^\x20\t\r\n\f]+/g;
      function et(e) {
        return e;
      }
      function tt(e) {
        throw e;
      }
      function nt(e, t, n, r) {
        var i;
        try {
          e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(q) || [], function (e, t) {
          n[t] = !0;
        }), n) : S.extend({}, r);
        function i() {
          for (s = s || r.once, a = o = !0; l.length; c = -1) for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
          r.memory || (t = !1), o = !1, s && (u = t ? [] : "");
        }
        var o,
          t,
          a,
          s,
          u = [],
          l = [],
          c = -1,
          f = {
            add: function () {
              return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
                S.each(e, function (e, t) {
                  m(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== G(t) && n(t);
                });
              }(arguments), t) && !o && i(), this;
            },
            remove: function () {
              return S.each(arguments, function (e, t) {
                for (var n; -1 < (n = S.inArray(t, u, n));) u.splice(n, 1), n <= c && c--;
              }), this;
            },
            has: function (e) {
              return e ? -1 < S.inArray(e, u) : 0 < u.length;
            },
            empty: function () {
              return u = u && [], this;
            },
            disable: function () {
              return s = l = [], u = t = "", this;
            },
            disabled: function () {
              return !u;
            },
            lock: function () {
              return s = l = [], t || o || (u = t = ""), this;
            },
            locked: function () {
              return !!s;
            },
            fireWith: function (e, t) {
              return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o) || i(), this;
            },
            fire: function () {
              return f.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!a;
            }
          };
        return f;
      }, S.extend({
        Deferred: function (e) {
          var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
            i = "pending",
            a = {
              state: function () {
                return i;
              },
              always: function () {
                return s.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return a.then(null, e);
              },
              pipe: function () {
                var i = arguments;
                return S.Deferred(function (r) {
                  S.each(o, function (e, t) {
                    var n = m(i[t[4]]) && i[t[4]];
                    s[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }), i = null;
                }).promise();
              },
              then: function (t, n, r) {
                var u = 0;
                function l(i, o, a, s) {
                  return function () {
                    function e() {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, et, s), l(u, o, tt, s)) : (u++, t.call(e, l(u, o, et, s), l(u, o, tt, s), l(u, o, et, o.notifyWith))) : (a !== et && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                      }
                    }
                    var n = this,
                      r = arguments,
                      t = s ? e : function () {
                        try {
                          e();
                        } catch (e) {
                          S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== tt && (n = void 0, r = [e]), o.rejectWith(n, r));
                        }
                      };
                    i ? t() : (S.Deferred.getErrorHook ? t.error = S.Deferred.getErrorHook() : S.Deferred.getStackHook && (t.error = S.Deferred.getStackHook()), T.setTimeout(t));
                  };
                }
                return S.Deferred(function (e) {
                  o[0][3].add(l(0, e, m(r) ? r : et, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : et)), o[2][3].add(l(0, e, m(n) ? n : tt));
                }).promise();
              },
              promise: function (e) {
                return null != e ? S.extend(e, a) : a;
              }
            },
            s = {};
          return S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            a[t[1]] = n.add, r && n.add(function () {
              i = r;
            }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
              return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
            }, s[t[0] + "With"] = n.fireWith;
          }), a.promise(s), e && e.call(s, s), s;
        },
        when: function (e) {
          function t(t) {
            return function (e) {
              i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o);
            };
          }
          var n = arguments.length,
            r = n,
            i = Array(r),
            o = s.call(arguments),
            a = S.Deferred();
          if (n <= 1 && (nt(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || m(o[r] && o[r].then))) return a.then();
          for (; r--;) nt(o[r], t(r), a.reject);
          return a.promise();
        }
      });
      var rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        it = (S.Deferred.exceptionHook = function (e, t) {
          T.console && T.console.warn && e && rt.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }, S.readyException = function (e) {
          T.setTimeout(function () {
            throw e;
          });
        }, S.Deferred());
      function ot() {
        C.removeEventListener("DOMContentLoaded", ot), T.removeEventListener("load", ot), S.ready();
      }
      S.fn.ready = function (e) {
        return it.then(e).catch(function (e) {
          S.readyException(e);
        }), this;
      }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || it.resolveWith(C, [S]);
        }
      }), S.ready.then = it.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(S.ready) : (C.addEventListener("DOMContentLoaded", ot), T.addEventListener("load", ot));
      function c(e, t, n, r, i, o, a) {
        var s = 0,
          u = e.length,
          l = null == n;
        if ("object" === G(n)) for (s in i = !0, n) c(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
          return l.call(S(e), n);
        }) : t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      }
      var at = /^-ms-/,
        st = /-([a-z])/g;
      function ut(e, t) {
        return t.toUpperCase();
      }
      function L(e) {
        return e.replace(at, "ms-").replace(st, ut);
      }
      function lt(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }
      function ct() {
        this.expando = S.expando + ct.uid++;
      }
      ct.uid = 1, ct.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return t || (t = {}, lt(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function (e, t, n) {
          var r,
            i = this.cache(e);
          if ("string" == typeof t) i[L(t)] = n;else for (r in t) i[L(r)] = t[r];
          return i;
        },
        get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][L(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(L) : (t = L(t)) in r ? [t] : t.match(q) || []).length;
              for (; n--;) delete r[t[n]];
            }
            void 0 !== t && !S.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          e = e[this.expando];
          return void 0 !== e && !S.isEmptyObject(e);
        }
      };
      var v = new ct(),
        l = new ct(),
        ft = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pt = /[A-Z]/g;
      function dt(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(pt, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : ft.test(i) ? JSON.parse(i) : i);
          } catch (e) {}
          l.set(e, t, n);
        } else n = void 0;
        return n;
      }
      S.extend({
        hasData: function (e) {
          return l.hasData(e) || v.hasData(e);
        },
        data: function (e, t, n) {
          return l.access(e, t, n);
        },
        removeData: function (e, t) {
          l.remove(e, t);
        },
        _data: function (e, t, n) {
          return v.access(e, t, n);
        },
        _removeData: function (e, t) {
          v.remove(e, t);
        }
      }), S.fn.extend({
        data: function (n, e) {
          var t,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
          if (void 0 !== n) return "object" == typeof n ? this.each(function () {
            l.set(this, n);
          }) : c(this, function (e) {
            var t;
            if (o && void 0 === e) return void 0 !== (t = l.get(o, n)) || void 0 !== (t = dt(o, n)) ? t : void 0;
            this.each(function () {
              l.set(this, n, e);
            });
          }, null, e, 1 < arguments.length, null, !0);
          if (this.length && (i = l.get(o), 1 === o.nodeType) && !v.get(o, "hasDataAttrs")) {
            for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = L(r.slice(5)), dt(o, r, i[r]));
            v.set(o, "hasDataAttrs", !0);
          }
          return i;
        },
        removeData: function (e) {
          return this.each(function () {
            l.remove(this, e);
          });
        }
      }), S.extend({
        queue: function (e, t, n) {
          var r;
          if (e) return r = v.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = v.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = S.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = S._queueHooks(e, t);
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            S.dequeue(e, t);
          }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return v.get(e, n) || v.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              v.remove(e, [t + "queue", n]);
            })
          });
        }
      }), S.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
            var e = S.queue(this, t, n);
            S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
          });
        },
        dequeue: function (e) {
          return this.each(function () {
            S.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          function n() {
            --i || o.resolveWith(a, [a]);
          }
          var r,
            i = 1,
            o = S.Deferred(),
            a = this,
            s = this.length;
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (r = v.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
          return n(), o.promise(t);
        }
      });
      function ht(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && mt(e) && "none" === S.css(e, "display");
      }
      var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        gt = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        yt = ["Top", "Right", "Bottom", "Left"],
        vt = C.documentElement,
        mt = function (e) {
          return S.contains(e.ownerDocument, e);
        },
        xt = {
          composed: !0
        };
      vt.getRootNode && (mt = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(xt) === e.ownerDocument;
      });
      function bt(e, t, n, r) {
        var i,
          o,
          a = 20,
          s = r ? function () {
            return r.cur();
          } : function () {
            return S.css(e, t, "");
          },
          u = s(),
          l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && gt.exec(S.css(e, t));
        if (c && c[3] !== l) {
          for (l = l || c[3], c = +(u /= 2) || 1; a--;) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          S.style(e, t, (c *= 2) + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r) && (r.unit = l, r.start = c, r.end = i), i;
      }
      var wt = {};
      function Tt(e, t) {
        for (var n, r, i, o, a, s = [], u = 0, l = e.length; u < l; u++) (r = e[u]).style && (n = r.style.display, t ? ("none" === n && (s[u] = v.get(r, "display") || null, s[u] || (r.style.display = "")), "" === r.style.display && ht(r) && (s[u] = (a = o = void 0, o = (i = r).ownerDocument, (a = wt[i = i.nodeName]) || (o = o.body.appendChild(o.createElement(i)), a = S.css(o, "display"), o.parentNode.removeChild(o), wt[i] = a = "none" === a ? "block" : a)))) : "none" !== n && (s[u] = "none", v.set(r, "display", n)));
        for (u = 0; u < l; u++) null != s[u] && (e[u].style.display = s[u]);
        return e;
      }
      S.fn.extend({
        show: function () {
          return Tt(this, !0);
        },
        hide: function () {
          return Tt(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            ht(this) ? S(this).show() : S(this).hide();
          });
        }
      });
      var Ct = /^(?:checkbox|radio)$/i,
        St = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Et = /^$|^module$|\/(?:java|ecma)script/i,
        o = C.createDocumentFragment().appendChild(C.createElement("div")),
        h = ((a = C.createElement("input")).setAttribute("type", "radio"), a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), o.appendChild(a), g.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, o.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue, o.innerHTML = "<option></option>", g.option = !!o.lastChild, {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        });
      function y(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && x(e, t) ? S.merge([e], n) : n;
      }
      function kt(e, t) {
        for (var n = 0, r = e.length; n < r; n++) v.set(e[n], "globalEval", !t || v.get(t[n], "globalEval"));
      }
      h.tbody = h.tfoot = h.colgroup = h.caption = h.thead, h.th = h.td, g.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "</select>"]);
      var jt = /<|&#?\w+;/;
      function At(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++) if ((o = e[p]) || 0 === o) if ("object" === G(o)) S.merge(f, o.nodeType ? [o] : o);else if (jt.test(o)) {
          for (a = a || c.appendChild(t.createElement("div")), s = (St.exec(o) || ["", ""])[1].toLowerCase(), s = h[s] || h._default, a.innerHTML = s[1] + S.htmlPrefilter(o) + s[2], l = s[0]; l--;) a = a.lastChild;
          S.merge(f, a.childNodes), (a = c.firstChild).textContent = "";
        } else f.push(t.createTextNode(o));
        for (c.textContent = "", p = 0; o = f[p++];) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (u = mt(o), a = y(c.appendChild(o), "script"), u && kt(a), n) for (l = 0; o = a[l++];) Et.test(o.type || "") && n.push(o);
        return c;
      }
      var Dt = /^([^.]*)(?:\.(.+)|)/;
      function Nt() {
        return !0;
      }
      function qt() {
        return !1;
      }
      function Lt(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) Lt(e, s, n, r, t[s], o);
          return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qt;else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
          S.event.add(this, t, i, r, n);
        });
      }
      function Ht(e, r, t) {
        t ? (v.set(e, r, !1), S.event.add(e, r, {
          namespace: !1,
          handler: function (e) {
            var t,
              n = v.get(this, r);
            if (1 & e.isTrigger && this[r]) {
              if (n) (S.event.special[r] || {}).delegateType && e.stopPropagation();else if (n = s.call(arguments), v.set(this, r, n), this[r](), t = v.get(this, r), v.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t;
            } else n && (v.set(this, r, S.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Nt);
          }
        })) : void 0 === v.get(e, r) && S.event.add(e, r, Nt);
      }
      S.event = {
        global: {},
        add: function (t, e, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h = v.get(t);
          if (lt(t)) for (n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(vt, i), n.guid || (n.guid = S.guid++), s = (s = h.events) || (h.events = Object.create(null)), a = (a = h.handle) || (h.handle = function (e) {
            return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
          }), u = (e = (e || "").match(q) || [""]).length; u--;) f = d = (p = Dt.exec(e[u]) || [])[1], p = (p[2] || "").split(".").sort(), f && (l = S.event.special[f] || {}, f = (i ? l.delegateType : l.bindType) || f, l = S.event.special[f] || {}, d = S.extend({
            type: f,
            origType: d,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: p.join(".")
          }, o), (c = s[f]) || ((c = s[f] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(t, r, p, a)) || t.addEventListener && t.addEventListener(f, a), l.add && (l.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0, d) : c.push(d), S.event.global[f] = !0);
        },
        remove: function (e, t, n, r, i) {
          var o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y = v.hasData(e) && v.get(e);
          if (y && (u = y.events)) {
            for (l = (t = (t || "").match(q) || [""]).length; l--;) if (d = g = (s = Dt.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              for (f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle), delete u[d]);
            } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
            S.isEmptyObject(u) && v.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            a = new Array(arguments.length),
            s = S.event.fix(e),
            e = (v.get(this, "events") || Object.create(null))[s.type] || [],
            u = S.event.special[s.type] || {};
          for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
            for (o = S.event.handlers.call(this, s, e), t = 0; (r = o[t++]) && !s.isPropagationStopped();) for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (i = ((S.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            });
          }
          return l = this, u < t.length && s.push({
            elem: l,
            handlers: t.slice(u)
          }), s;
        },
        addProp: function (t, e) {
          Object.defineProperty(S.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: m(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              });
            }
          });
        },
        fix: function (e) {
          return e[S.expando] ? e : new S.Event(e);
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function (e) {
              e = this || e;
              return Ct.test(e.type) && e.click && x(e, "input") && Ht(e, "click", !0), !1;
            },
            trigger: function (e) {
              e = this || e;
              return Ct.test(e.type) && e.click && x(e, "input") && Ht(e, "click"), !0;
            },
            _default: function (e) {
              e = e.target;
              return Ct.test(e.type) && e.click && x(e, "input") && v.get(e, "click") || x(e, "a");
            }
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Nt : qt, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
      }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: qt,
        isPropagationStopped: qt,
        isImmediatePropagationStopped: qt,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = Nt, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = Nt, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Nt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
      }, function (r, i) {
        function o(e) {
          var t, n;
          C.documentMode ? (t = v.get(this, "handle"), (n = S.event.fix(e)).type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)) : S.event.simulate(i, e.target, S.event.fix(e));
        }
        S.event.special[r] = {
          setup: function () {
            var e;
            if (Ht(this, r, !0), !C.documentMode) return !1;
            (e = v.get(this, i)) || this.addEventListener(i, o), v.set(this, i, (e || 0) + 1);
          },
          trigger: function () {
            return Ht(this, r), !0;
          },
          teardown: function () {
            var e;
            if (!C.documentMode) return !1;
            (e = v.get(this, i) - 1) ? v.set(this, i, e) : (this.removeEventListener(i, o), v.remove(this, i));
          },
          _default: function (e) {
            return v.get(e.target, r);
          },
          delegateType: i
        }, S.event.special[i] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = v.get(t, i);
            n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), v.set(t, i, (n || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = C.documentMode ? this : e,
              n = v.get(t, i) - 1;
            n ? v.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), v.remove(t, i));
          }
        };
      }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
          }
        };
      }), S.fn.extend({
        on: function (e, t, n, r) {
          return Lt(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return Lt(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);else {
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qt), this.each(function () {
              S.event.remove(this, e, n, t);
            });
            for (i in e) this.off(i, t, e[i]);
          }
          return this;
        }
      });
      var Ot = /<script|<style|<link/i,
        Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Mt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Rt(e, t) {
        return x(e, "table") && x(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
      }
      function It(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }
      function Wt(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function Ft(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
          if (v.hasData(e) && (o = v.get(e).events)) for (i in v.remove(t, "handle events"), o) for (n = 0, r = o[i].length; n < r; n++) S.event.add(t, i, o[i][n]);
          l.hasData(e) && (e = l.access(e), e = S.extend({}, e), l.set(t, e));
        }
      }
      function $t(n, r, i, o) {
        r = W(r);
        var e,
          t,
          a,
          s,
          u,
          l,
          c = 0,
          f = n.length,
          p = f - 1,
          d = r[0],
          h = m(d);
        if (h || 1 < f && "string" == typeof d && !g.checkClone && Pt.test(d)) return n.each(function (e) {
          var t = n.eq(e);
          h && (r[0] = d.call(this, e, t.html())), $t(t, r, i, o);
        });
        if (f && (t = (e = At(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
          for (s = (a = S.map(y(e, "script"), It)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s) && S.merge(a, y(u, "script")), i.call(n[c], u, c);
          if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, Wt), c = 0; c < s; c++) u = a[c], Et.test(u.type || "") && !v.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }, l) : V(u.textContent.replace(Mt, ""), u, l));
        }
        return n;
      }
      function _t(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(y(r)), r.parentNode && (n && mt(r) && kt(y(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      S.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = e.cloneNode(!0),
            f = mt(e);
          if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = y(c), r = 0, i = (o = y(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && Ct.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          if (t) if (n) for (o = o || y(e), a = a || y(c), r = 0, i = o.length; r < i; r++) Ft(o[r], a[r]);else Ft(e, c);
          return 0 < (a = y(c, "script")).length && kt(a, !f && y(e, "script")), c;
        },
        cleanData: function (e) {
          for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (lt(n)) {
            if (t = n[v.expando]) {
              if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
              n[v.expando] = void 0;
            }
            n[l.expando] && (n[l.expando] = void 0);
          }
        }
      }), S.fn.extend({
        detach: function (e) {
          return _t(this, e, !0);
        },
        remove: function (e) {
          return _t(this, e);
        },
        text: function (e) {
          return c(this, function (e) {
            return void 0 === e ? S.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        },
        append: function () {
          return $t(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return $t(this, arguments, function (e) {
            var t;
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Rt(this, e)).insertBefore(e, t.firstChild);
          });
        },
        before: function () {
          return $t(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return $t(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(y(e, !1)), e.textContent = "");
          return this;
        },
        clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return S.clone(this, e, t);
          });
        },
        html: function (e) {
          return c(this, function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Ot.test(e) && !h[(St.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(y(t, !1)), t.innerHTML = e);
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          }, null, e, arguments.length);
        },
        replaceWith: function () {
          var n = [];
          return $t(this, arguments, function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 && (S.cleanData(y(this)), t) && t.replaceChild(e, this);
          }, n);
        }
      }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), F.apply(n, t.get());
          return this.pushStack(n);
        };
      });
      function Bt(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e);
      }
      function zt(e, t, n) {
        var r,
          i = {};
        for (r in t) i[r] = e.style[r], e.style[r] = t[r];
        for (r in n = n.call(e), t) e.style[r] = i[r];
        return n;
      }
      var Xt,
        Ut,
        Vt,
        Gt,
        Yt,
        Qt,
        Jt,
        H,
        Kt = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Zt = /^--/,
        en = new RegExp(yt.join("|"), "i");
      function tn(e, t, n) {
        var r,
          i = Zt.test(t),
          o = e.style;
        return (n = n || Bt(e)) && (r = n.getPropertyValue(t) || n[t], "" !== (r = i ? r && (r.replace(ee, "$1") || void 0) : r) || mt(e) || (r = S.style(e, t)), !g.pixelBoxStyles()) && Kt.test(r) && en.test(t) && (i = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = e, o.maxWidth = t), void 0 !== r ? r + "" : r;
      }
      function nn(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          }
        };
      }
      function rn() {
        var e;
        H && (Jt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", H.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", vt.appendChild(Jt).appendChild(H), e = T.getComputedStyle(H), Xt = "1%" !== e.top, Qt = 12 === on(e.marginLeft), H.style.right = "60%", Gt = 36 === on(e.right), Ut = 36 === on(e.width), H.style.position = "absolute", Vt = 12 === on(H.offsetWidth / 3), vt.removeChild(Jt), H = null);
      }
      function on(e) {
        return Math.round(parseFloat(e));
      }
      Jt = C.createElement("div"), (H = C.createElement("div")).style && (H.style.backgroundClip = "content-box", H.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === H.style.backgroundClip, S.extend(g, {
        boxSizingReliable: function () {
          return rn(), Ut;
        },
        pixelBoxStyles: function () {
          return rn(), Gt;
        },
        pixelPosition: function () {
          return rn(), Xt;
        },
        reliableMarginLeft: function () {
          return rn(), Qt;
        },
        scrollboxSize: function () {
          return rn(), Vt;
        },
        reliableTrDimensions: function () {
          var e, t, n;
          return null == Yt && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", vt.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), Yt = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, vt.removeChild(e)), Yt;
        }
      }));
      var an = ["Webkit", "Moz", "ms"],
        sn = C.createElement("div").style,
        un = {};
      function ln(e) {
        return S.cssProps[e] || un[e] || (e in sn ? e : un[e] = (e => {
          for (var t = e[0].toUpperCase() + e.slice(1), n = an.length; n--;) if ((e = an[n] + t) in sn) return e;
        })(e) || e);
      }
      var cn = /^(none|table(?!-c[ea]).+)/,
        fn = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        pn = {
          letterSpacing: "0",
          fontWeight: "400"
        };
      function dn(e, t, n) {
        var r = gt.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function hn(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += S.css(e, n + yt[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + yt[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + yt[a] + "Width", !0, i))) : (u += S.css(e, "padding" + yt[a], !0, i), "padding" !== n ? u += S.css(e, "border" + yt[a] + "Width", !0, i) : s += S.css(e, "border" + yt[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l;
      }
      function gn(e, t, n) {
        var r = Bt(e),
          i = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
          o = i,
          a = tn(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Kt.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (!g.boxSizingReliable() && i || !g.reliableTrDimensions() && x(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), o = s in e) && (a = e[s]), (a = parseFloat(a) || 0) + hn(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
      }
      function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i);
      }
      S.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) return "" === (t = tn(e, "opacity")) ? "1" : t;
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              a,
              s = L(t),
              u = Zt.test(t),
              l = e.style;
            if (u || (t = ln(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
            "string" == (o = typeof n) && (i = gt.exec(n)) && i[1] && (n = bt(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o = L(t);
          return Zt.test(t) || (t = ln(o)), "normal" === (i = void 0 === (i = (o = S.cssHooks[t] || S.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? tn(e, t, r) : i) && t in pn && (i = pn[t]), ("" === n || n) && (o = parseFloat(i), !0 === n || isFinite(o)) ? o || 0 : i;
        }
      }), S.each(["height", "width"], function (e, a) {
        S.cssHooks[a] = {
          get: function (e, t, n) {
            if (t) return !cn.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? gn(e, a, n) : zt(e, fn, function () {
              return gn(e, a, n);
            });
          },
          set: function (e, t, n) {
            var r = Bt(e),
              i = !g.scrollboxSize() && "absolute" === r.position,
              o = (i || n) && "border-box" === S.css(e, "boxSizing", !1, r),
              n = n ? hn(e, a, n, o, r) : 0;
            return o && i && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - hn(e, a, "border", !1, r) - .5)), n && (o = gt.exec(t)) && "px" !== (o[3] || "px") && (e.style[a] = t, t = S.css(e, a)), dn(0, t, n);
          }
        };
      }), S.cssHooks.marginLeft = nn(g.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(tn(e, "marginLeft")) || e.getBoundingClientRect().left - zt(e, {
          marginLeft: 0
        }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), S.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (i, o) {
        S.cssHooks[i + o] = {
          expand: function (e) {
            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + yt[t] + o] = r[t] || r[t - 2] || r[0];
            return n;
          }
        }, "margin" !== i && (S.cssHooks[i + o].set = dn);
      }), S.fn.extend({
        css: function (e, t) {
          return c(this, function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Bt(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          }, e, t, 1 < arguments.length);
        }
      }), ((S.Tween = O).prototype = {
        constructor: O,
        init: function (e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
        },
        cur: function () {
          var e = O.propHooks[this.prop];
          return (e && e.get ? e : O.propHooks._default).get(this);
        },
        run: function (e) {
          var t,
            n = O.propHooks[this.prop];
          return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : O.propHooks._default).set(this), this;
        }
      }).init.prototype = O.prototype, (O.propHooks = {
        _default: {
          get: function (e) {
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
          },
          set: function (e) {
            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ln(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
          }
        }
      }).scrollTop = O.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, S.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, S.fx = O.prototype.init, S.fx.step = {};
      var yn,
        vn,
        mn = /^(?:toggle|show|hide)$/,
        xn = /queueHooks$/;
      function bn() {
        vn && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(bn) : T.setTimeout(bn, S.fx.interval), S.fx.tick());
      }
      function wn() {
        return T.setTimeout(function () {
          yn = void 0;
        }), yn = Date.now();
      }
      function Tn(e, t) {
        var n,
          r = 0,
          i = {
            height: e
          };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = yt[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function Cn(e, t, n) {
        for (var r, i = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
      }
      function P(i, e, t) {
        var n,
          o,
          r,
          a,
          s,
          u,
          l,
          c = 0,
          f = P.prefilters.length,
          p = S.Deferred().always(function () {
            delete d.elem;
          }),
          d = function () {
            if (o) return !1;
            for (var e = yn || wn(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
            return p.notifyWith(i, [h, t, e]), t < 1 && r ? e : (r || p.notifyWith(i, [h, 1, 0]), p.resolveWith(i, [h]), !1);
          },
          h = p.promise({
            elem: i,
            props: S.extend({}, e),
            opts: S.extend(!0, {
              specialEasing: {},
              easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: yn || wn(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
              t = S.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
              return h.tweens.push(t), t;
            },
            stop: function (e) {
              var t = 0,
                n = e ? h.tweens.length : 0;
              if (!o) {
                for (o = !0; t < n; t++) h.tweens[t].run(1);
                e ? (p.notifyWith(i, [h, 1, 0]), p.resolveWith(i, [h, e])) : p.rejectWith(i, [h, e]);
              }
              return this;
            }
          }),
          g = h.props,
          y = g,
          v = h.opts.specialEasing;
        for (r in y) if (s = v[a = L(r)], u = y[r], Array.isArray(u) && (s = u[1], u = y[r] = u[0]), r !== a && (y[a] = u, delete y[r]), (l = S.cssHooks[a]) && "expand" in l) for (r in u = l.expand(u), delete y[a], u) r in y || (y[r] = u[r], v[r] = s);else v[a] = s;
        for (; c < f; c++) if (n = P.prefilters[c].call(h, i, g, h.opts)) return m(n.stop) && (S._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(g, Cn, h), m(h.opts.start) && h.opts.start.call(i, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), S.fx.timer(S.extend(d, {
          elem: i,
          anim: h,
          queue: h.opts.queue
        })), h;
      }
      S.Animation = S.extend(P, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return bt(n.elem, e, gt.exec(t), n), n;
          }]
        },
        tweener: function (e, t) {
          for (var n, r = 0, i = (e = m(e) ? (t = e, ["*"]) : e.match(q)).length; r < i; r++) n = e[r], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t);
        },
        prefilters: [function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c = "width" in t || "height" in t,
            f = this,
            p = {},
            d = e.style,
            h = e.nodeType && ht(e),
            g = v.get(e, "fxshow");
          for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
          }), a.unqueued++, f.always(function () {
            f.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })), t) if (i = t[r], mn.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
              if ("show" !== i || !g || void 0 === g[r]) continue;
              h = !0;
            }
            p[r] = g && g[r] || S.style(e, r);
          }
          if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(p)) for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = g && g.display) && (l = v.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (Tt([e], !0), l = e.style.display || l, c = S.css(e, "display"), Tt([e]))), "inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (f.done(function () {
            d.display = l;
          }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block"), n.overflow && (d.overflow = "hidden", f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
          })), u = !1, p) u || (g ? "hidden" in g && (h = g.hidden) : g = v.access(e, "fxshow", {
            display: l
          }), o && (g.hidden = !h), h && Tt([e], !0), f.done(function () {
            for (r in h || Tt([e]), v.remove(e, "fxshow"), p) S.style(e, r, p[r]);
          })), u = Cn(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0));
        }],
        prefilter: function (e, t) {
          t ? P.prefilters.unshift(e) : P.prefilters.push(e);
        }
      }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
          complete: n || !n && t || m(e) && e,
          duration: e,
          easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }, r;
      }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ht).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, r);
        },
        animate: function (t, e, n, r) {
          function i() {
            var e = P(this, S.extend({}, t), a);
            (o || v.get(this, "finish")) && e.stop(!0);
          }
          var o = S.isEmptyObject(t),
            a = S.speed(e, n, r);
          return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i);
        },
        stop: function (i, e, o) {
          function a(e) {
            var t = e.stop;
            delete e.stop, t(o);
          }
          return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = v.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && xn.test(t) && a(r[t]);
            for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
            !e && o || S.dequeue(this, i);
          });
        },
        finish: function (a) {
          return !1 !== a && (a = a || "fx"), this.each(function () {
            var e,
              t = v.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          });
        }
      }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Tn(r, !0), e, t, n);
        };
      }), S.each({
        slideDown: Tn("show"),
        slideUp: Tn("hide"),
        slideToggle: Tn("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }), S.timers = [], S.fx.tick = function () {
        var e,
          t = 0,
          n = S.timers;
        for (yn = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), yn = void 0;
      }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start();
      }, S.fx.interval = 13, S.fx.start = function () {
        vn || (vn = !0, bn());
      }, S.fx.stop = function () {
        vn = null;
      }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, this.queue(e = e || "fx", function (e, t) {
          var n = T.setTimeout(e, r);
          t.stop = function () {
            T.clearTimeout(n);
          };
        });
      }, a = C.createElement("input"), o = C.createElement("select").appendChild(C.createElement("option")), a.type = "checkbox", g.checkOn = "" !== a.value, g.optSelected = o.selected, (a = C.createElement("input")).value = "t", a.type = "radio", g.radioValue = "t" === a.value;
      var Sn,
        En = S.expr.attrHandle,
        kn = (S.fn.extend({
          attr: function (e, t) {
            return c(this, S.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e);
            });
          }
        }), S.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Sn : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = S.find.attr(e, t)) ? void 0 : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                var n;
                if (!g.radioValue && "radio" === t && x(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t;
              }
            }
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(q);
            if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
          }
        }), Sn = {
          set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
          }
        }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var a = En[t] || S.find.attr;
          En[t] = function (e, t, n) {
            var r,
              i,
              o = t.toLowerCase();
            return n || (i = En[o], En[o] = r, r = null != a(e, t, n) ? o : null, En[o] = i), r;
          };
        }), /^(?:input|select|textarea|button)$/i),
        jn = /^(?:a|area)$/i;
      function An(e) {
        return (e.match(q) || []).join(" ");
      }
      function Dn(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function Nn(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || [];
      }
      S.fn.extend({
        prop: function (e, t) {
          return c(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[S.propFix[e] || e];
          });
        }
      }), S.extend({
        prop: function (e, t, n) {
          var r,
            i,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = S.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : kn.test(e.nodeName) || jn.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), g.optSelected || (S.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode) && e.parentNode.selectedIndex;
        }
      }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this;
      }), S.fn.extend({
        addClass: function (t) {
          var e, n, r, i, o, a;
          return m(t) ? this.each(function (e) {
            S(this).addClass(t.call(this, e, Dn(this)));
          }) : (e = Nn(t)).length ? this.each(function () {
            if (r = Dn(this), n = 1 === this.nodeType && " " + An(r) + " ") {
              for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
              a = An(n), r !== a && this.setAttribute("class", a);
            }
          }) : this;
        },
        removeClass: function (t) {
          var e, n, r, i, o, a;
          return m(t) ? this.each(function (e) {
            S(this).removeClass(t.call(this, e, Dn(this)));
          }) : arguments.length ? (e = Nn(t)).length ? this.each(function () {
            if (r = Dn(this), n = 1 === this.nodeType && " " + An(r) + " ") {
              for (o = 0; o < e.length; o++) for (i = e[o]; -1 < n.indexOf(" " + i + " ");) n = n.replace(" " + i + " ", " ");
              a = An(n), r !== a && this.setAttribute("class", a);
            }
          }) : this : this.attr("class", "");
        },
        toggleClass: function (t, n) {
          var e,
            r,
            i,
            o,
            a = typeof t,
            s = "string" == a || Array.isArray(t);
          return m(t) ? this.each(function (e) {
            S(this).toggleClass(t.call(this, e, Dn(this), n), n);
          }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = Nn(t), this.each(function () {
            if (s) for (o = S(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);else void 0 !== t && "boolean" != a || ((r = Dn(this)) && v.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", !r && !1 !== t && v.get(this, "__className__") || ""));
          }));
        },
        hasClass: function (e) {
          for (var t, n = 0, r = " " + e + " "; t = this[n++];) if (1 === t.nodeType && -1 < (" " + An(Dn(t)) + " ").indexOf(r)) return !0;
          return !1;
        }
      });
      function qn(e) {
        e.stopPropagation();
      }
      var Ln = /\r/g,
        Hn = (S.fn.extend({
          val: function (t) {
            var n,
              e,
              r,
              i = this[0];
            return arguments.length ? (r = m(t), this.each(function (e) {
              1 === this.nodeType && (null == (e = r ? t.call(this, e, S(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function (e) {
                return null == e ? "" : e + "";
              })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e));
            })) : i ? (n = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(Ln, "") : null == e ? "" : e : void 0;
          }
        }), S.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = S.find.attr(e, "value");
                return null != t ? t : An(S.text(e));
              }
            },
            select: {
              get: function (e) {
                for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++) if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !x(t.parentNode, "optgroup"))) {
                  if (t = S(t).val(), i) return t;
                  o.push(t);
                }
                return o;
              },
              set: function (e, t) {
                for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              }
            }
          }
        }), S.each(["radio", "checkbox"], function () {
          S.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
            }
          }, g.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
        }), T.location),
        On = {
          guid: Date.now()
        },
        Pn = /\?/,
        Mn = (S.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
            t = new T.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}
          return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
            return e.textContent;
          }).join("\n") : e)), t;
        }, /^(?:focusinfocus|focusoutblur)$/),
        Rn = (S.extend(S.event, {
          trigger: function (e, t, n, r) {
            var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = [n || C],
              p = B.call(e, "type") ? e.type : e,
              d = B.call(e, "namespace") ? e.namespace.split(".") : [],
              h = c = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Mn.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), l = S.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
              if (!r && !l.noBubble && !R(n)) {
                for (a = l.delegateType || p, Mn.test(a + p) || (h = h.parentNode); h; h = h.parentNode) f.push(h), o = h;
                o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T);
              }
              for (i = 0; (h = f[i++]) && !e.isPropagationStopped();) c = h, e.type = 1 < i ? a : l.bindType || p, (u = (v.get(h, "events") || Object.create(null))[e.type] && v.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && lt(h) && (e.result = u.apply(h, t), !1 === e.result) && e.preventDefault();
              return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !lt(n) || s && m(n[p]) && !R(n) && ((o = n[s]) && (n[s] = null), S.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, qn), n[p](), e.isPropagationStopped() && c.removeEventListener(p, qn), S.event.triggered = void 0, o) && (n[s] = o), e.result;
            }
          },
          simulate: function (e, t, n) {
            n = S.extend(new S.Event(), n, {
              type: e,
              isSimulated: !0
            });
            S.event.trigger(n, null, t);
          }
        }), S.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              S.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0);
          }
        }), /\[\]$/),
        In = /\r?\n/g,
        Wn = /^(?:submit|button|image|reset|file)$/i,
        Fn = /^(?:input|select|textarea|keygen)/i;
      S.param = function (e, t) {
        function n(e, t) {
          t = m(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t);
        }
        var r,
          i = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
          n(this.name, this.value);
        });else for (r in e) !function n(r, e, i, o) {
          if (Array.isArray(e)) S.each(e, function (e, t) {
            i || Rn.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o);
          });else if (i || "object" !== G(e)) o(r, e);else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
        }(r, e[r], t, n);
        return i.join("&");
      }, S.fn.extend({
        serialize: function () {
          return S.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;
            return this.name && !S(this).is(":disabled") && Fn.test(this.nodeName) && !Wn.test(e) && (this.checked || !Ct.test(e));
          }).map(function (e, t) {
            var n = S(this).val();
            return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
              return {
                name: t.name,
                value: e.replace(In, "\r\n")
              };
            }) : {
              name: t.name,
              value: n.replace(In, "\r\n")
            };
          }).get();
        }
      });
      var $n = /%20/g,
        _n = /#.*$/,
        Bn = /([?&])_=[^&]*/,
        zn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Xn = /^(?:GET|HEAD)$/,
        Un = /^\/\//,
        Vn = {},
        Gn = {},
        Yn = "*/".concat("*"),
        Qn = C.createElement("a");
      function Jn(o) {
        return function (e, t) {
          "string" != typeof e && (t = e, e = "*");
          var n,
            r = 0,
            i = e.toLowerCase().match(q) || [];
          if (m(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
      }
      function Kn(t, r, i, o) {
        var a = {},
          s = t === Gn;
        function u(e) {
          var n;
          return a[e] = !0, S.each(t[e] || [], function (e, t) {
            t = t(r, i, o);
            return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1);
          }), n;
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*");
      }
      function Zn(e, t) {
        var n,
          r,
          i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && S.extend(!0, e, r), e;
      }
      Qn.href = Hn.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Hn.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Hn.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Yn,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": S.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function (e, t) {
          return t ? Zn(Zn(e, S.ajaxSettings), t) : Zn(S.ajaxSettings, e);
        },
        ajaxPrefilter: Jn(Vn),
        ajaxTransport: Jn(Gn),
        ajax: function (e, t) {
          "object" == typeof e && (t = e, e = void 0);
          var u,
            l,
            c,
            n,
            f,
            p,
            d,
            r,
            i,
            h = S.ajaxSetup({}, t = t || {}),
            g = h.context || h,
            y = h.context && (g.nodeType || g.jquery) ? S(g) : S.event,
            v = S.Deferred(),
            m = S.Callbacks("once memory"),
            x = h.statusCode || {},
            o = {},
            a = {},
            s = "canceled",
            b = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (p) {
                  if (!n) for (n = {}; t = zn.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = n[e.toLowerCase() + " "];
                }
                return null == t ? null : t.join(", ");
              },
              getAllResponseHeaders: function () {
                return p ? c : null;
              },
              setRequestHeader: function (e, t) {
                return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, o[e] = t), this;
              },
              overrideMimeType: function (e) {
                return null == p && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                if (e) if (p) b.always(e[b.status]);else for (var t in e) x[t] = [x[t], e[t]];
                return this;
              },
              abort: function (e) {
                e = e || s;
                return u && u.abort(e), w(0, e), this;
              }
            };
          if (v.promise(b), h.url = ((e || h.url || Hn.href) + "").replace(Un, Hn.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
            i = C.createElement("a");
            try {
              i.href = h.url, i.href = i.href, h.crossDomain = Qn.protocol + "//" + Qn.host != i.protocol + "//" + i.host;
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)), Kn(Vn, h, t, b), !p) {
            for (r in (d = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Xn.test(h.type), l = h.url.replace(_n, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace($n, "+")) : (i = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (Pn.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(Bn, "$1"), i = (Pn.test(l) ? "&" : "?") + "_=" + On.guid++ + i), h.url = l + i), h.ifModified && (S.lastModified[l] && b.setRequestHeader("If-Modified-Since", S.lastModified[l]), S.etag[l]) && b.setRequestHeader("If-None-Match", S.etag[l]), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Yn + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p)) return b.abort();
            if (s = "abort", m.add(h.complete), b.done(h.success), b.fail(h.error), u = Kn(Gn, h, t, b)) {
              if (b.readyState = 1, d && y.trigger("ajaxSend", [b, h]), p) return b;
              h.async && 0 < h.timeout && (f = T.setTimeout(function () {
                b.abort("timeout");
              }, h.timeout));
              try {
                p = !1, u.send(o, w);
              } catch (e) {
                if (p) throw e;
                w(-1, e);
              }
            } else w(-1, "No Transport");
          }
          return b;
          function w(e, t, n, r) {
            var i,
              o,
              a,
              s = t;
            p || (p = !0, f && T.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = ((e, t, n) => {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r) for (i in s) if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
              }
              if (u[0] in n) o = u[0];else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                  }
                  a = a || i;
                }
                o = o || a;
              }
              if (o) return o !== u[0] && u.unshift(o), n[o];
            })(h, b, n)), !r && -1 < S.inArray("script", h.dataTypes) && S.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), a = ((e, t, n, r) => {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
                if (!0 !== a) if (a && e.throws) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                  };
                }
              }
              return {
                state: "success",
                data: t
              };
            })(h, a, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (S.lastModified[l] = n), n = b.getResponseHeader("etag")) && (S.etag[l] = n), 204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i = a.data, r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || s) + "", r ? v.resolveWith(g, [i, s, b]) : v.rejectWith(g, [b, s, o]), b.statusCode(x), x = void 0, d && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]), m.fireWith(g, [b, s]), d && (y.trigger("ajaxComplete", [b, h]), --S.active || S.event.trigger("ajaxStop")));
          }
        },
        getJSON: function (e, t, n) {
          return S.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return S.get(e, void 0, t, "script");
        }
      }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
          return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
            url: e,
            type: i,
            dataType: r,
            data: t,
            success: n
          }, S.isPlainObject(e) && e));
        };
      }), S.ajaxPrefilter(function (e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
      }), S._evalUrl = function (e, t, n) {
        return S.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function () {}
          },
          dataFilter: function (e) {
            S.globalEval(e, t, n);
          }
        });
      }, S.fn.extend({
        wrapAll: function (e) {
          return this[0] && (m(e) && (e = e.call(this[0])), e = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e;
          }).append(this)), this;
        },
        wrapInner: function (n) {
          return m(n) ? this.each(function (e) {
            S(this).wrapInner(n.call(this, e));
          }) : this.each(function () {
            var e = S(this),
              t = e.contents();
            t.length ? t.wrapAll(n) : e.append(n);
          });
        },
        wrap: function (t) {
          var n = m(t);
          return this.each(function (e) {
            S(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return this.parent(e).not("body").each(function () {
            S(this).replaceWith(this.childNodes);
          }), this;
        }
      }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e);
      }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, S.ajaxSettings.xhr = function () {
        try {
          return new T.XMLHttpRequest();
        } catch (e) {}
      };
      var er = {
          0: 200,
          1223: 204
        },
        tr = S.ajaxSettings.xhr();
      g.cors = !!tr && "withCredentials" in tr, g.ajax = tr = !!tr, S.ajaxTransport(function (i) {
        var o, a;
        if (g.cors || tr && !i.crossDomain) return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
            o = function (e) {
              return function () {
                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(er[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                  binary: r.response
                } : {
                  text: r.responseText
                }, r.getAllResponseHeaders()));
              };
            }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
              4 === r.readyState && T.setTimeout(function () {
                o && a();
              });
            }, o = o("abort");
            try {
              r.send(i.hasContent && i.data || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          }
        };
      }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), S.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (e) {
            return S.globalEval(e), e;
          }
        }
      }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
          send: function (e, t) {
            r = S("<script>").attr(n.scriptAttrs || {}).prop({
              charset: n.scriptCharset,
              src: n.url
            }).on("load error", i = function (e) {
              r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
            }), C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          }
        };
      });
      var nr = [],
        rr = /(=)\?(?=&|$)|\?\?/,
        ir = (S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = nr.pop() || S.expando + "_" + On.guid++;
            return this[e] = !0, e;
          }
        }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
          var r,
            i,
            o,
            a = !1 !== e.jsonp && (rr.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && rr.test(e.data) && "data");
          if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(rr, "$1" + r) : !1 !== e.jsonp && (e.url += (Pn.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }, e.dataTypes[0] = "json", i = T[r], T[r] = function () {
            o = arguments;
          }, n.always(function () {
            void 0 === i ? S(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, nr.push(r)), o && m(i) && i(o[0]), o = i = void 0;
          }), "script";
        }), g.createHTMLDocument = ((e = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), S.parseHTML = function (e, t, n) {
          return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), r = !n && [], (n = Ve.exec(e)) ? [t.createElement(n[1])] : (n = At([e], t, r), r && r.length && S(r).remove(), S.merge([], n.childNodes)));
          var r;
        }, S.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
          return -1 < s && (r = An(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
          }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
          }).always(n && function (e, t) {
            a.each(function () {
              n.apply(this, o || [e.responseText, t, e]);
            });
          }), this;
        }, S.expr.pseudos.animated = function (t) {
          return S.grep(S.timers, function (e) {
            return t === e.elem;
          }).length;
        }, S.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s = S.css(e, "position"),
              u = S(e),
              l = {};
            "static" === s && (e.style.position = "relative"), o = u.offset(), r = S.css(e, "top"), a = S.css(e, "left"), s = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (i = (s = u.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = m(t) ? t.call(e, n, S.extend({}, o)) : t).top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u.css(l);
          }
        }, S.fn.extend({
          offset: function (t) {
            var e, n;
            return arguments.length ? void 0 === t ? this : this.each(function (e) {
              S.offset.setOffset(this, t, e);
            }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
              top: e.top + n.pageYOffset,
              left: e.left + n.pageXOffset
            }) : {
              top: 0,
              left: 0
            } : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = {
                  top: 0,
                  left: 0
                };
              if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
              }
              return {
                top: t.top - i.top - S.css(r, "marginTop", !0),
                left: t.left - i.left - S.css(r, "marginLeft", !0)
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
              return e || vt;
            });
          }
        }), S.each({
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset"
        }, function (t, i) {
          var o = "pageYOffset" === i;
          S.fn[t] = function (e) {
            return c(this, function (e, t, n) {
              var r;
              if (R(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
              r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
          };
        }), S.each(["top", "left"], function (e, n) {
          S.cssHooks[n] = nn(g.pixelPosition, function (e, t) {
            if (t) return t = tn(e, n), Kt.test(t) ? S(e).position()[n] + "px" : t;
          });
        }), S.each({
          Height: "height",
          Width: "width"
        }, function (a, s) {
          S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
          }, function (r, o) {
            S.fn[o] = function (e, t) {
              var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");
              return c(this, function (e, t, n) {
                var r;
                return R(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
              }, s, n ? e : void 0, n);
            };
          });
        }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
          S.fn[t] = function (e) {
            return this.on(t, e);
          };
        }), S.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          }
        }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
          S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
          };
        }), /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
        or = (S.proxy = function (e, t) {
          var n, r;
          if ("string" == typeof t && (r = e[t], t = e, e = r), m(e)) return n = s.call(arguments, 2), (r = function () {
            return e.apply(t || this, n.concat(s.call(arguments)));
          }).guid = e.guid = e.guid || S.guid++, r;
        }, S.holdReady = function (e) {
          e ? S.readyWait++ : S.ready(!0);
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = x, S.isFunction = m, S.isWindow = R, S.camelCase = L, S.type = G, S.now = Date.now, S.isNumeric = function (e) {
          var t = S.type(e);
          return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }, S.trim = function (e) {
          return null == e ? "" : (e + "").replace(ir, "$1");
        }, void 0 !== (lr = function () {
          return S;
        }.apply(ur, [])) && (sr.exports = lr), T.jQuery),
        ar = T.$;
      return S.noConflict = function (e) {
        return T.$ === S && (T.$ = ar), e && T.jQuery === S && (T.jQuery = or), S;
      }, void 0 === M && (T.jQuery = T.$ = S), S;
    }, "object" == typeof sr.exports ? sr.exports = t.document ? n(t, !0) : function (e) {
      if (e.document) return n(e);
      throw new Error("jQuery requires a window with a document");
    } : n(t);
  }
});
//# sourceMappingURL=jquery.js.map