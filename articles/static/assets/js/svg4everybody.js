"use strict";

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
(n => {
  var r = {};
  function o(e) {
    var t;
    return (r[e] || (t = r[e] = {
      i: e,
      l: !1,
      exports: {}
    }, n[e].call(t.exports, t, t.exports, o), t.l = !0, t)).exports;
  }
  o.m = n, o.c = r, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
      return t[e];
    }.bind(null, r));
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 344);
})({
  344: function (e, t, n) {
    e.exports = n(345);
  },
  345: function (e, t, n) {
    !function r(o, i, a) {
      function u(t, e) {
        if (!i[t]) {
          if (!o[t]) {
            let e = new Error(`Cannot find module '${t}'`);
            throw e.code = "MODULE_NOT_FOUND", e;
          }
          var n = i[t] = {
            exports: {}
          };
          o[t][0].call(n.exports, e => u(o[t][1][e] || e), n, n.exports, r, o, i, a);
        }
        return i[t].exports;
      }
      for (var e = 0; e < a.length; e++) u(a[e]);
      return u;
    }({
      1: [function (e, t, n) {
        function c(e, t, n) {
          if (n) {
            var r = document.createDocumentFragment(),
              o = !t.hasAttribute("viewBox") && n.getAttribute("viewBox");
            o && t.setAttribute("viewBox", o);
            for (var i = n.cloneNode(!0); i.childNodes.length;) r.appendChild(i.firstChild);
            e.appendChild(r);
          }
        }
        if (document, navigator, /Trident\/[567]\b/.test(navigator.userAgent)) {
          let t,
            n = Object(),
            e = window.top !== window.self,
            u = (t = "polyfill" in n ? n.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && e, {}),
            r = window.requestAnimationFrame || setTimeout,
            d = document.getElementsByTagName("use"),
            l = 0;
          t && function e() {
            for (let e = 0; e < d.length;) {
              let r = d[e],
                o = r.parentNode,
                i = (e => {
                  for (var t = e; "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode););
                  return t;
                })(o),
                a = r.getAttribute("xlink:href") || r.getAttribute("href");
              if (!a && n.attributeName && (a = r.getAttribute(n.attributeName)), i && a) {
                if (t) if (!n.validate || n.validate(a, i, r)) {
                  o.removeChild(r);
                  let e = a.split("#"),
                    t = e.shift(),
                    n = e.join("#");
                  if (t.length) {
                    let e = u[t];
                    e || ((e = u[t] = new XMLHttpRequest()).open("GET", t), e.send(), e._embeds = []), e._embeds.push({
                      parent: o,
                      svg: i,
                      id: n
                    }), (r => {
                      r.onreadystatechange = function () {
                        if (4 === r.readyState) {
                          let n = r._cachedDocument;
                          n || ((n = r._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = r.responseText, r._cachedTarget = {}), r._embeds.splice(0).map(e => {
                            let t = r._cachedTarget[e.id];
                            t = t || (r._cachedTarget[e.id] = n.getElementById(e.id)), c(e.parent, e.svg, t);
                          });
                        }
                      }, r.onreadystatechange();
                    })(e);
                  } else c(o, i, document.getElementById(n));
                } else ++e, ++l;
              } else ++e;
            }
            (!d.length || 0 < d.length - l) && r(e, 67);
          }();
        }
      }, {}]
    }, {}, [1]);
  }
});
//# sourceMappingURL=svg4everybody.js.map