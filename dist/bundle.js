!(function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, e), (i.l = !0), i.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var i in t)
          e.d(
            r,
            i,
            function (n) {
              return t[n];
            }.bind(null, i)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 20));
})([
  function (t, n, e) {
    "use strict";
    e.r(n);
    var r = "http://www.w3.org/1999/xhtml",
      i = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: r,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      },
      a = function (t) {
        var n = (t += ""),
          e = n.indexOf(":");
        return (
          e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
          i.hasOwnProperty(n) ? { space: i[n], local: t } : t
        );
      };
    var o = function (t) {
      var n = a(t);
      return (n.local
        ? function (t) {
            return function () {
              return this.ownerDocument.createElementNS(t.space, t.local);
            };
          }
        : function (t) {
            return function () {
              var n = this.ownerDocument,
                e = this.namespaceURI;
              return e === r && n.documentElement.namespaceURI === r
                ? n.createElement(t)
                : n.createElementNS(e, t);
            };
          })(n);
    };
    function c() {}
    var u = function (t) {
      return null == t
        ? c
        : function () {
            return this.querySelector(t);
          };
    };
    function f() {
      return [];
    }
    var s = function (t) {
        return null == t
          ? f
          : function () {
              return this.querySelectorAll(t);
            };
      },
      l = function (t) {
        return function () {
          return this.matches(t);
        };
      },
      h = function (t) {
        return new Array(t.length);
      };
    function d(t, n) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n);
    }
    d.prototype = {
      constructor: d,
      appendChild: function (t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function (t, n) {
        return this._parent.insertBefore(t, n);
      },
      querySelector: function (t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function (t) {
        return this._parent.querySelectorAll(t);
      },
    };
    var p = "$";
    function b(t, n, e, r, i, a) {
      for (var o, c = 0, u = n.length, f = a.length; c < f; ++c)
        (o = n[c])
          ? ((o.__data__ = a[c]), (r[c] = o))
          : (e[c] = new d(t, a[c]));
      for (; c < u; ++c) (o = n[c]) && (i[c] = o);
    }
    function y(t, n, e, r, i, a, o) {
      var c,
        u,
        f,
        s = {},
        l = n.length,
        h = a.length,
        b = new Array(l);
      for (c = 0; c < l; ++c)
        (u = n[c]) &&
          ((b[c] = f = p + o.call(u, u.__data__, c, n)),
          f in s ? (i[c] = u) : (s[f] = u));
      for (c = 0; c < h; ++c)
        (u = s[(f = p + o.call(t, a[c], c, a))])
          ? ((r[c] = u), (u.__data__ = a[c]), (s[f] = null))
          : (e[c] = new d(t, a[c]));
      for (c = 0; c < l; ++c) (u = n[c]) && s[b[c]] === u && (i[c] = u);
    }
    function _(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    var g = function (t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    };
    function v(t, n) {
      return (
        t.style.getPropertyValue(n) ||
        g(t).getComputedStyle(t, null).getPropertyValue(n)
      );
    }
    function m(t) {
      return t.trim().split(/^|\s+/);
    }
    function x(t) {
      return t.classList || new w(t);
    }
    function w(t) {
      (this._node = t), (this._names = m(t.getAttribute("class") || ""));
    }
    function M(t, n) {
      for (var e = x(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
    }
    function k(t, n) {
      for (var e = x(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
    }
    w.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function (t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0;
      },
    };
    function N() {
      this.textContent = "";
    }
    function A() {
      this.innerHTML = "";
    }
    function S() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    function T() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function C() {
      return null;
    }
    function L() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    function E() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function O() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    var j = {},
      U = null;
    "undefined" != typeof document &&
      ("onmouseenter" in document.documentElement ||
        (j = { mouseenter: "mouseover", mouseleave: "mouseout" }));
    function D(t, n, e) {
      return (
        (t = P(t, n, e)),
        function (n) {
          var e = n.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            t.call(this, n);
        }
      );
    }
    function P(t, n, e) {
      return function (r) {
        var i = U;
        U = r;
        try {
          t.call(this, this.__data__, n, e);
        } finally {
          U = i;
        }
      };
    }
    function R(t) {
      return function () {
        var n = this.__on;
        if (n) {
          for (var e, r = 0, i = -1, a = n.length; r < a; ++r)
            (e = n[r]),
              (t.type && e.type !== t.type) || e.name !== t.name
                ? (n[++i] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++i ? (n.length = i) : delete this.__on;
        }
      };
    }
    function Y(t, n, e) {
      var r = j.hasOwnProperty(t.type) ? D : P;
      return function (i, a, o) {
        var c,
          u = this.__on,
          f = r(n, a, o);
        if (u)
          for (var s = 0, l = u.length; s < l; ++s)
            if ((c = u[s]).type === t.type && c.name === t.name)
              return (
                this.removeEventListener(c.type, c.listener, c.capture),
                this.addEventListener(
                  c.type,
                  (c.listener = f),
                  (c.capture = e)
                ),
                void (c.value = n)
              );
        this.addEventListener(t.type, f, e),
          (c = {
            type: t.type,
            name: t.name,
            value: n,
            listener: f,
            capture: e,
          }),
          u ? u.push(c) : (this.__on = [c]);
      };
    }
    function q(t, n, e, r) {
      var i = U;
      (t.sourceEvent = U), (U = t);
      try {
        return n.apply(e, r);
      } finally {
        U = i;
      }
    }
    function z(t, n, e) {
      var r = g(t),
        i = r.CustomEvent;
      "function" == typeof i
        ? (i = new i(n, e))
        : ((i = r.document.createEvent("Event")),
          e
            ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
            : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i);
    }
    var I = [null];
    function F(t, n) {
      (this._groups = t), (this._parents = n);
    }
    function H() {
      return new F([[document.documentElement]], I);
    }
    F.prototype = H.prototype = {
      constructor: F,
      select: function (t) {
        "function" != typeof t && (t = u(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var a, o, c = n[i], f = c.length, s = (r[i] = new Array(f)), l = 0;
            l < f;
            ++l
          )
            (a = c[l]) &&
              (o = t.call(a, a.__data__, l, c)) &&
              ("__data__" in a && (o.__data__ = a.__data__), (s[l] = o));
        return new F(r, this._parents);
      },
      selectAll: function (t) {
        "function" != typeof t && (t = s(t));
        for (
          var n = this._groups, e = n.length, r = [], i = [], a = 0;
          a < e;
          ++a
        )
          for (var o, c = n[a], u = c.length, f = 0; f < u; ++f)
            (o = c[f]) && (r.push(t.call(o, o.__data__, f, c)), i.push(o));
        return new F(r, i);
      },
      filter: function (t) {
        "function" != typeof t && (t = l(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var a, o = n[i], c = o.length, u = (r[i] = []), f = 0;
            f < c;
            ++f
          )
            (a = o[f]) && t.call(a, a.__data__, f, o) && u.push(a);
        return new F(r, this._parents);
      },
      data: function (t, n) {
        if (!t)
          return (
            (p = new Array(this.size())),
            (s = -1),
            this.each(function (t) {
              p[++s] = t;
            }),
            p
          );
        var e,
          r = n ? y : b,
          i = this._parents,
          a = this._groups;
        "function" != typeof t &&
          ((e = t),
          (t = function () {
            return e;
          }));
        for (
          var o = a.length,
            c = new Array(o),
            u = new Array(o),
            f = new Array(o),
            s = 0;
          s < o;
          ++s
        ) {
          var l = i[s],
            h = a[s],
            d = h.length,
            p = t.call(l, l && l.__data__, s, i),
            _ = p.length,
            g = (u[s] = new Array(_)),
            v = (c[s] = new Array(_));
          r(l, h, g, v, (f[s] = new Array(d)), p, n);
          for (var m, x, w = 0, M = 0; w < _; ++w)
            if ((m = g[w])) {
              for (w >= M && (M = w + 1); !(x = v[M]) && ++M < _; );
              m._next = x || null;
            }
        }
        return ((c = new F(c, i))._enter = u), (c._exit = f), c;
      },
      enter: function () {
        return new F(this._enter || this._groups.map(h), this._parents);
      },
      exit: function () {
        return new F(this._exit || this._groups.map(h), this._parents);
      },
      join: function (t, n, e) {
        var r = this.enter(),
          i = this,
          a = this.exit();
        return (
          (r = "function" == typeof t ? t(r) : r.append(t + "")),
          null != n && (i = n(i)),
          null == e ? a.remove() : e(a),
          r && i ? r.merge(i).order() : i
        );
      },
      merge: function (t) {
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i),
            o = new Array(r),
            c = 0;
          c < a;
          ++c
        )
          for (
            var u,
              f = n[c],
              s = e[c],
              l = f.length,
              h = (o[c] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (u = f[d] || s[d]) && (h[d] = u);
        for (; c < r; ++c) o[c] = n[c];
        return new F(o, this._parents);
      },
      order: function () {
        for (var t = this._groups, n = -1, e = t.length; ++n < e; )
          for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0; )
            (r = i[a]) &&
              (o &&
                4 ^ r.compareDocumentPosition(o) &&
                o.parentNode.insertBefore(r, o),
              (o = r));
        return this;
      },
      sort: function (t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        }
        t || (t = _);
        for (
          var e = this._groups, r = e.length, i = new Array(r), a = 0;
          a < r;
          ++a
        ) {
          for (
            var o, c = e[a], u = c.length, f = (i[a] = new Array(u)), s = 0;
            s < u;
            ++s
          )
            (o = c[s]) && (f[s] = o);
          f.sort(n);
        }
        return new F(i, this._parents).order();
      },
      call: function () {
        var t = arguments[0];
        return (arguments[0] = this), t.apply(null, arguments), this;
      },
      nodes: function () {
        var t = new Array(this.size()),
          n = -1;
        return (
          this.each(function () {
            t[++n] = this;
          }),
          t
        );
      },
      node: function () {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
          for (var r = t[n], i = 0, a = r.length; i < a; ++i) {
            var o = r[i];
            if (o) return o;
          }
        return null;
      },
      size: function () {
        var t = 0;
        return (
          this.each(function () {
            ++t;
          }),
          t
        );
      },
      empty: function () {
        return !this.node();
      },
      each: function (t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
          for (var i, a = n[e], o = 0, c = a.length; o < c; ++o)
            (i = a[o]) && t.call(i, i.__data__, o, a);
        return this;
      },
      attr: function (t, n) {
        var e = a(t);
        if (arguments.length < 2) {
          var r = this.node();
          return e.local
            ? r.getAttributeNS(e.space, e.local)
            : r.getAttribute(e);
        }
        return this.each(
          (null == n
            ? e.local
              ? function (t) {
                  return function () {
                    this.removeAttributeNS(t.space, t.local);
                  };
                }
              : function (t) {
                  return function () {
                    this.removeAttribute(t);
                  };
                }
            : "function" == typeof n
            ? e.local
              ? function (t, n) {
                  return function () {
                    var e = n.apply(this, arguments);
                    null == e
                      ? this.removeAttributeNS(t.space, t.local)
                      : this.setAttributeNS(t.space, t.local, e);
                  };
                }
              : function (t, n) {
                  return function () {
                    var e = n.apply(this, arguments);
                    null == e
                      ? this.removeAttribute(t)
                      : this.setAttribute(t, e);
                  };
                }
            : e.local
            ? function (t, n) {
                return function () {
                  this.setAttributeNS(t.space, t.local, n);
                };
              }
            : function (t, n) {
                return function () {
                  this.setAttribute(t, n);
                };
              })(e, n)
        );
      },
      style: function (t, n, e) {
        return arguments.length > 1
          ? this.each(
              (null == n
                ? function (t) {
                    return function () {
                      this.style.removeProperty(t);
                    };
                  }
                : "function" == typeof n
                ? function (t, n, e) {
                    return function () {
                      var r = n.apply(this, arguments);
                      null == r
                        ? this.style.removeProperty(t)
                        : this.style.setProperty(t, r, e);
                    };
                  }
                : function (t, n, e) {
                    return function () {
                      this.style.setProperty(t, n, e);
                    };
                  })(t, n, null == e ? "" : e)
            )
          : v(this.node(), t);
      },
      property: function (t, n) {
        return arguments.length > 1
          ? this.each(
              (null == n
                ? function (t) {
                    return function () {
                      delete this[t];
                    };
                  }
                : "function" == typeof n
                ? function (t, n) {
                    return function () {
                      var e = n.apply(this, arguments);
                      null == e ? delete this[t] : (this[t] = e);
                    };
                  }
                : function (t, n) {
                    return function () {
                      this[t] = n;
                    };
                  })(t, n)
            )
          : this.node()[t];
      },
      classed: function (t, n) {
        var e = m(t + "");
        if (arguments.length < 2) {
          for (var r = x(this.node()), i = -1, a = e.length; ++i < a; )
            if (!r.contains(e[i])) return !1;
          return !0;
        }
        return this.each(
          ("function" == typeof n
            ? function (t, n) {
                return function () {
                  (n.apply(this, arguments) ? M : k)(this, t);
                };
              }
            : n
            ? function (t) {
                return function () {
                  M(this, t);
                };
              }
            : function (t) {
                return function () {
                  k(this, t);
                };
              })(e, n)
        );
      },
      text: function (t) {
        return arguments.length
          ? this.each(
              null == t
                ? N
                : ("function" == typeof t
                    ? function (t) {
                        return function () {
                          var n = t.apply(this, arguments);
                          this.textContent = null == n ? "" : n;
                        };
                      }
                    : function (t) {
                        return function () {
                          this.textContent = t;
                        };
                      })(t)
            )
          : this.node().textContent;
      },
      html: function (t) {
        return arguments.length
          ? this.each(
              null == t
                ? A
                : ("function" == typeof t
                    ? function (t) {
                        return function () {
                          var n = t.apply(this, arguments);
                          this.innerHTML = null == n ? "" : n;
                        };
                      }
                    : function (t) {
                        return function () {
                          this.innerHTML = t;
                        };
                      })(t)
            )
          : this.node().innerHTML;
      },
      raise: function () {
        return this.each(S);
      },
      lower: function () {
        return this.each(T);
      },
      append: function (t) {
        var n = "function" == typeof t ? t : o(t);
        return this.select(function () {
          return this.appendChild(n.apply(this, arguments));
        });
      },
      insert: function (t, n) {
        var e = "function" == typeof t ? t : o(t),
          r = null == n ? C : "function" == typeof n ? n : u(n);
        return this.select(function () {
          return this.insertBefore(
            e.apply(this, arguments),
            r.apply(this, arguments) || null
          );
        });
      },
      remove: function () {
        return this.each(L);
      },
      clone: function (t) {
        return this.select(t ? O : E);
      },
      datum: function (t) {
        return arguments.length
          ? this.property("__data__", t)
          : this.node().__data__;
      },
      on: function (t, n, e) {
        var r,
          i,
          a = (function (t) {
            return t
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var n = "",
                  e = t.indexOf(".");
                return (
                  e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                  { type: t, name: n }
                );
              });
          })(t + ""),
          o = a.length;
        if (!(arguments.length < 2)) {
          for (c = n ? Y : R, null == e && (e = !1), r = 0; r < o; ++r)
            this.each(c(a[r], n, e));
          return this;
        }
        var c = this.node().__on;
        if (c)
          for (var u, f = 0, s = c.length; f < s; ++f)
            for (r = 0, u = c[f]; r < o; ++r)
              if ((i = a[r]).type === u.type && i.name === u.name)
                return u.value;
      },
      dispatch: function (t, n) {
        return this.each(
          ("function" == typeof n
            ? function (t, n) {
                return function () {
                  return z(this, t, n.apply(this, arguments));
                };
              }
            : function (t, n) {
                return function () {
                  return z(this, t, n);
                };
              })(t, n)
        );
      },
    };
    var B = H,
      X = function (t) {
        return "string" == typeof t
          ? new F([[document.querySelector(t)]], [document.documentElement])
          : new F([[t]], I);
      },
      V = function (t) {
        return X(o(t).call(document.documentElement));
      },
      W = 0;
    function $() {
      return new Z();
    }
    function Z() {
      this._ = "@" + (++W).toString(36);
    }
    Z.prototype = $.prototype = {
      constructor: Z,
      get: function (t) {
        for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
        return t[n];
      },
      set: function (t, n) {
        return (t[this._] = n);
      },
      remove: function (t) {
        return this._ in t && delete t[this._];
      },
      toString: function () {
        return this._;
      },
    };
    var Q = function () {
        for (var t, n = U; (t = n.sourceEvent); ) n = t;
        return n;
      },
      J = function (t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
          var r = e.createSVGPoint();
          return (
            (r.x = n.clientX),
            (r.y = n.clientY),
            [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
          );
        }
        var i = t.getBoundingClientRect();
        return [
          n.clientX - i.left - t.clientLeft,
          n.clientY - i.top - t.clientTop,
        ];
      },
      G = function (t) {
        var n = Q();
        return n.changedTouches && (n = n.changedTouches[0]), J(t, n);
      },
      K = function (t) {
        return "string" == typeof t
          ? new F([document.querySelectorAll(t)], [document.documentElement])
          : new F([null == t ? [] : t], I);
      },
      tt = function (t, n, e) {
        arguments.length < 3 && ((e = n), (n = Q().changedTouches));
        for (var r, i = 0, a = n ? n.length : 0; i < a; ++i)
          if ((r = n[i]).identifier === e) return J(t, r);
        return null;
      },
      nt = function (t, n) {
        null == n && (n = Q().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
          i[e] = J(t, n[e]);
        return i;
      };
    e.d(n, "create", function () {
      return V;
    }),
      e.d(n, "creator", function () {
        return o;
      }),
      e.d(n, "local", function () {
        return $;
      }),
      e.d(n, "matcher", function () {
        return l;
      }),
      e.d(n, "mouse", function () {
        return G;
      }),
      e.d(n, "namespace", function () {
        return a;
      }),
      e.d(n, "namespaces", function () {
        return i;
      }),
      e.d(n, "clientPoint", function () {
        return J;
      }),
      e.d(n, "select", function () {
        return X;
      }),
      e.d(n, "selectAll", function () {
        return K;
      }),
      e.d(n, "selection", function () {
        return B;
      }),
      e.d(n, "selector", function () {
        return u;
      }),
      e.d(n, "selectorAll", function () {
        return s;
      }),
      e.d(n, "style", function () {
        return v;
      }),
      e.d(n, "touch", function () {
        return tt;
      }),
      e.d(n, "touches", function () {
        return nt;
      }),
      e.d(n, "window", function () {
        return g;
      }),
      e.d(n, "event", function () {
        return U;
      }),
      e.d(n, "customEvent", function () {
        return q;
      });
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    var r = function (t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
      },
      i = function (t) {
        var n;
        return (
          1 === t.length &&
            ((n = t),
            (t = function (t, e) {
              return r(n(t), e);
            })),
          {
            left: function (n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var a = (r + i) >>> 1;
                t(n[a], e) < 0 ? (r = a + 1) : (i = a);
              }
              return r;
            },
            right: function (n, e, r, i) {
              for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
                var a = (r + i) >>> 1;
                t(n[a], e) > 0 ? (i = a) : (r = a + 1);
              }
              return r;
            },
          }
        );
      };
    var a = i(r),
      o = a.right,
      c = a.left,
      u = o,
      f = function (t, n) {
        null == n && (n = s);
        for (
          var e = 0, r = t.length - 1, i = t[0], a = new Array(r < 0 ? 0 : r);
          e < r;

        )
          a[e] = n(i, (i = t[++e]));
        return a;
      };
    function s(t, n) {
      return [t, n];
    }
    var l = function (t, n, e) {
        var r,
          i,
          a,
          o,
          c = t.length,
          u = n.length,
          f = new Array(c * u);
        for (null == e && (e = s), r = a = 0; r < c; ++r)
          for (o = t[r], i = 0; i < u; ++i, ++a) f[a] = e(o, n[i]);
        return f;
      },
      h = function (t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
      },
      d = function (t) {
        return null === t ? NaN : +t;
      },
      p = function (t, n) {
        var e,
          r,
          i = t.length,
          a = 0,
          o = -1,
          c = 0,
          u = 0;
        if (null == n)
          for (; ++o < i; )
            isNaN((e = d(t[o]))) || (u += (r = e - c) * (e - (c += r / ++a)));
        else
          for (; ++o < i; )
            isNaN((e = d(n(t[o], o, t)))) ||
              (u += (r = e - c) * (e - (c += r / ++a)));
        if (a > 1) return u / (a - 1);
      },
      b = function (t, n) {
        var e = p(t, n);
        return e ? Math.sqrt(e) : e;
      },
      y = function (t, n) {
        var e,
          r,
          i,
          a = t.length,
          o = -1;
        if (null == n) {
          for (; ++o < a; )
            if (null != (e = t[o]) && e >= e)
              for (r = i = e; ++o < a; )
                null != (e = t[o]) && (r > e && (r = e), i < e && (i = e));
        } else
          for (; ++o < a; )
            if (null != (e = n(t[o], o, t)) && e >= e)
              for (r = i = e; ++o < a; )
                null != (e = n(t[o], o, t)) &&
                  (r > e && (r = e), i < e && (i = e));
        return [r, i];
      },
      _ = Array.prototype,
      g = _.slice,
      v = _.map,
      m = function (t) {
        return function () {
          return t;
        };
      },
      x = function (t) {
        return t;
      },
      w = function (t, n, e) {
        (t = +t),
          (n = +n),
          (e =
            (i = arguments.length) < 2
              ? ((n = t), (t = 0), 1)
              : i < 3
              ? 1
              : +e);
        for (
          var r = -1,
            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
            a = new Array(i);
          ++r < i;

        )
          a[r] = t + r * e;
        return a;
      },
      M = Math.sqrt(50),
      k = Math.sqrt(10),
      N = Math.sqrt(2),
      A = function (t, n, e) {
        var r,
          i,
          a,
          o,
          c = -1;
        if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t];
        if (
          ((r = n < t) && ((i = t), (t = n), (n = i)),
          0 === (o = S(t, n, e)) || !isFinite(o))
        )
          return [];
        if (o > 0)
          for (
            t = Math.ceil(t / o),
              n = Math.floor(n / o),
              a = new Array((i = Math.ceil(n - t + 1)));
            ++c < i;

          )
            a[c] = (t + c) * o;
        else
          for (
            t = Math.floor(t * o),
              n = Math.ceil(n * o),
              a = new Array((i = Math.ceil(t - n + 1)));
            ++c < i;

          )
            a[c] = (t - c) / o;
        return r && a.reverse(), a;
      };
    function S(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
      return i >= 0
        ? (a >= M ? 10 : a >= k ? 5 : a >= N ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (a >= M ? 10 : a >= k ? 5 : a >= N ? 2 : 1);
    }
    function T(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;
      return (
        a >= M ? (i *= 10) : a >= k ? (i *= 5) : a >= N && (i *= 2),
        n < t ? -i : i
      );
    }
    var C = function (t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
      },
      L = function () {
        var t = x,
          n = y,
          e = C;
        function r(r) {
          var i,
            a,
            o = r.length,
            c = new Array(o);
          for (i = 0; i < o; ++i) c[i] = t(r[i], i, r);
          var f = n(c),
            s = f[0],
            l = f[1],
            h = e(c, s, l);
          Array.isArray(h) ||
            ((h = T(s, l, h)), (h = w(Math.ceil(s / h) * h, l, h)));
          for (var d = h.length; h[0] <= s; ) h.shift(), --d;
          for (; h[d - 1] > l; ) h.pop(), --d;
          var p,
            b = new Array(d + 1);
          for (i = 0; i <= d; ++i)
            ((p = b[i] = []).x0 = i > 0 ? h[i - 1] : s),
              (p.x1 = i < d ? h[i] : l);
          for (i = 0; i < o; ++i)
            s <= (a = c[i]) && a <= l && b[u(h, a, 0, d)].push(r[i]);
          return b;
        }
        return (
          (r.value = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : m(n)), r)
              : t;
          }),
          (r.domain = function (t) {
            return arguments.length
              ? ((n = "function" == typeof t ? t : m([t[0], t[1]])), r)
              : n;
          }),
          (r.thresholds = function (t) {
            return arguments.length
              ? ((e =
                  "function" == typeof t
                    ? t
                    : Array.isArray(t)
                    ? m(g.call(t))
                    : m(t)),
                r)
              : e;
          }),
          r
        );
      },
      E = function (t, n, e) {
        if ((null == e && (e = d), (r = t.length))) {
          if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
          if (n >= 1) return +e(t[r - 1], r - 1, t);
          var r,
            i = (r - 1) * n,
            a = Math.floor(i),
            o = +e(t[a], a, t);
          return o + (+e(t[a + 1], a + 1, t) - o) * (i - a);
        }
      },
      O = function (t, n, e) {
        return (
          (t = v.call(t, d).sort(r)),
          Math.ceil(
            (e - n) /
              (2 * (E(t, 0.75) - E(t, 0.25)) * Math.pow(t.length, -1 / 3))
          )
        );
      },
      j = function (t, n, e) {
        return Math.ceil((e - n) / (3.5 * b(t) * Math.pow(t.length, -1 / 3)));
      },
      U = function (t, n) {
        var e,
          r,
          i = t.length,
          a = -1;
        if (null == n) {
          for (; ++a < i; )
            if (null != (e = t[a]) && e >= e)
              for (r = e; ++a < i; ) null != (e = t[a]) && e > r && (r = e);
        } else
          for (; ++a < i; )
            if (null != (e = n(t[a], a, t)) && e >= e)
              for (r = e; ++a < i; )
                null != (e = n(t[a], a, t)) && e > r && (r = e);
        return r;
      },
      D = function (t, n) {
        var e,
          r = t.length,
          i = r,
          a = -1,
          o = 0;
        if (null == n) for (; ++a < r; ) isNaN((e = d(t[a]))) ? --i : (o += e);
        else for (; ++a < r; ) isNaN((e = d(n(t[a], a, t)))) ? --i : (o += e);
        if (i) return o / i;
      },
      P = function (t, n) {
        var e,
          i = t.length,
          a = -1,
          o = [];
        if (null == n) for (; ++a < i; ) isNaN((e = d(t[a]))) || o.push(e);
        else for (; ++a < i; ) isNaN((e = d(n(t[a], a, t)))) || o.push(e);
        return E(o.sort(r), 0.5);
      },
      R = function (t) {
        for (var n, e, r, i = t.length, a = -1, o = 0; ++a < i; )
          o += t[a].length;
        for (e = new Array(o); --i >= 0; )
          for (n = (r = t[i]).length; --n >= 0; ) e[--o] = r[n];
        return e;
      },
      Y = function (t, n) {
        var e,
          r,
          i = t.length,
          a = -1;
        if (null == n) {
          for (; ++a < i; )
            if (null != (e = t[a]) && e >= e)
              for (r = e; ++a < i; ) null != (e = t[a]) && r > e && (r = e);
        } else
          for (; ++a < i; )
            if (null != (e = n(t[a], a, t)) && e >= e)
              for (r = e; ++a < i; )
                null != (e = n(t[a], a, t)) && r > e && (r = e);
        return r;
      },
      q = function (t, n) {
        for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]];
        return r;
      },
      z = function (t, n) {
        if ((e = t.length)) {
          var e,
            i,
            a = 0,
            o = 0,
            c = t[o];
          for (null == n && (n = r); ++a < e; )
            (n((i = t[a]), c) < 0 || 0 !== n(c, c)) && ((c = i), (o = a));
          return 0 === n(c, c) ? o : void 0;
        }
      },
      I = function (t, n, e) {
        for (
          var r, i, a = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
          a;

        )
          (i = (Math.random() * a--) | 0),
            (r = t[a + n]),
            (t[a + n] = t[i + n]),
            (t[i + n] = r);
        return t;
      },
      F = function (t, n) {
        var e,
          r = t.length,
          i = -1,
          a = 0;
        if (null == n) for (; ++i < r; ) (e = +t[i]) && (a += e);
        else for (; ++i < r; ) (e = +n(t[i], i, t)) && (a += e);
        return a;
      },
      H = function (t) {
        if (!(i = t.length)) return [];
        for (var n = -1, e = Y(t, B), r = new Array(e); ++n < e; )
          for (var i, a = -1, o = (r[n] = new Array(i)); ++a < i; )
            o[a] = t[a][n];
        return r;
      };
    function B(t) {
      return t.length;
    }
    var X = function () {
      return H(arguments);
    };
    e.d(n, "bisect", function () {
      return u;
    }),
      e.d(n, "bisectRight", function () {
        return o;
      }),
      e.d(n, "bisectLeft", function () {
        return c;
      }),
      e.d(n, "ascending", function () {
        return r;
      }),
      e.d(n, "bisector", function () {
        return i;
      }),
      e.d(n, "cross", function () {
        return l;
      }),
      e.d(n, "descending", function () {
        return h;
      }),
      e.d(n, "deviation", function () {
        return b;
      }),
      e.d(n, "extent", function () {
        return y;
      }),
      e.d(n, "histogram", function () {
        return L;
      }),
      e.d(n, "thresholdFreedmanDiaconis", function () {
        return O;
      }),
      e.d(n, "thresholdScott", function () {
        return j;
      }),
      e.d(n, "thresholdSturges", function () {
        return C;
      }),
      e.d(n, "max", function () {
        return U;
      }),
      e.d(n, "mean", function () {
        return D;
      }),
      e.d(n, "median", function () {
        return P;
      }),
      e.d(n, "merge", function () {
        return R;
      }),
      e.d(n, "min", function () {
        return Y;
      }),
      e.d(n, "pairs", function () {
        return f;
      }),
      e.d(n, "permute", function () {
        return q;
      }),
      e.d(n, "quantile", function () {
        return E;
      }),
      e.d(n, "range", function () {
        return w;
      }),
      e.d(n, "scan", function () {
        return z;
      }),
      e.d(n, "shuffle", function () {
        return I;
      }),
      e.d(n, "sum", function () {
        return F;
      }),
      e.d(n, "ticks", function () {
        return A;
      }),
      e.d(n, "tickIncrement", function () {
        return S;
      }),
      e.d(n, "tickStep", function () {
        return T;
      }),
      e.d(n, "transpose", function () {
        return H;
      }),
      e.d(n, "variance", function () {
        return p;
      }),
      e.d(n, "zip", function () {
        return X;
      });
  },
  function (t, n, e) {
    "use strict";
    var r = new Date(),
      i = new Date();
    function a(t, n, e, o) {
      function c(n) {
        return t((n = new Date(+n))), n;
      }
      return (
        (c.floor = c),
        (c.ceil = function (e) {
          return t((e = new Date(e - 1))), n(e, 1), t(e), e;
        }),
        (c.round = function (t) {
          var n = c(t),
            e = c.ceil(t);
          return t - n < e - t ? n : e;
        }),
        (c.offset = function (t, e) {
          return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
        }),
        (c.range = function (e, r, i) {
          var a,
            o = [];
          if (
            ((e = c.ceil(e)),
            (i = null == i ? 1 : Math.floor(i)),
            !(e < r && i > 0))
          )
            return o;
          do {
            o.push((a = new Date(+e))), n(e, i), t(e);
          } while (a < e && e < r);
          return o;
        }),
        (c.filter = function (e) {
          return a(
            function (n) {
              if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
            },
            function (t, r) {
              if (t >= t)
                if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
            }
          );
        }),
        e &&
          ((c.count = function (n, a) {
            return (
              r.setTime(+n), i.setTime(+a), t(r), t(i), Math.floor(e(r, i))
            );
          }),
          (c.every = function (t) {
            return (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? c.filter(
                      o
                        ? function (n) {
                            return o(n) % t == 0;
                          }
                        : function (n) {
                            return c.count(0, n) % t == 0;
                          }
                    )
                  : c
                : null
            );
          })),
        c
      );
    }
    var o = a(
      function () {},
      function (t, n) {
        t.setTime(+t + n);
      },
      function (t, n) {
        return n - t;
      }
    );
    o.every = function (t) {
      return (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? a(
                function (n) {
                  n.setTime(Math.floor(n / t) * t);
                },
                function (n, e) {
                  n.setTime(+n + e * t);
                },
                function (n, e) {
                  return (e - n) / t;
                }
              )
            : o
          : null
      );
    };
    var c = o,
      u = (o.range, 6e4),
      f = 6048e5,
      s = a(
        function (t) {
          t.setTime(t - t.getMilliseconds());
        },
        function (t, n) {
          t.setTime(+t + 1e3 * n);
        },
        function (t, n) {
          return (n - t) / 1e3;
        },
        function (t) {
          return t.getUTCSeconds();
        }
      ),
      l = s,
      h =
        (s.range,
        a(
          function (t) {
            t.setTime(t - t.getMilliseconds() - 1e3 * t.getSeconds());
          },
          function (t, n) {
            t.setTime(+t + n * u);
          },
          function (t, n) {
            return (n - t) / u;
          },
          function (t) {
            return t.getMinutes();
          }
        )),
      d = h,
      p =
        (h.range,
        a(
          function (t) {
            t.setTime(
              t -
                t.getMilliseconds() -
                1e3 * t.getSeconds() -
                t.getMinutes() * u
            );
          },
          function (t, n) {
            t.setTime(+t + 36e5 * n);
          },
          function (t, n) {
            return (n - t) / 36e5;
          },
          function (t) {
            return t.getHours();
          }
        )),
      b = p,
      y =
        (p.range,
        a(
          function (t) {
            t.setHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setDate(t.getDate() + n);
          },
          function (t, n) {
            return (
              (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * u) /
              864e5
            );
          },
          function (t) {
            return t.getDate() - 1;
          }
        )),
      _ = y;
    y.range;
    function g(t) {
      return a(
        function (n) {
          n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
            n.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setDate(t.getDate() + 7 * n);
        },
        function (t, n) {
          return (
            (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * u) / f
          );
        }
      );
    }
    var v = g(0),
      m = g(1),
      x = g(2),
      w = g(3),
      M = g(4),
      k = g(5),
      N = g(6),
      A =
        (v.range,
        m.range,
        x.range,
        w.range,
        M.range,
        k.range,
        N.range,
        a(
          function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setMonth(t.getMonth() + n);
          },
          function (t, n) {
            return (
              n.getMonth() -
              t.getMonth() +
              12 * (n.getFullYear() - t.getFullYear())
            );
          },
          function (t) {
            return t.getMonth();
          }
        )),
      S = A,
      T =
        (A.range,
        a(
          function (t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setFullYear(t.getFullYear() + n);
          },
          function (t, n) {
            return n.getFullYear() - t.getFullYear();
          },
          function (t) {
            return t.getFullYear();
          }
        ));
    T.every = function (t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? a(
            function (n) {
              n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                n.setMonth(0, 1),
                n.setHours(0, 0, 0, 0);
            },
            function (n, e) {
              n.setFullYear(n.getFullYear() + e * t);
            }
          )
        : null;
    };
    var C = T,
      L =
        (T.range,
        a(
          function (t) {
            t.setUTCSeconds(0, 0);
          },
          function (t, n) {
            t.setTime(+t + n * u);
          },
          function (t, n) {
            return (n - t) / u;
          },
          function (t) {
            return t.getUTCMinutes();
          }
        )),
      E = L,
      O =
        (L.range,
        a(
          function (t) {
            t.setUTCMinutes(0, 0, 0);
          },
          function (t, n) {
            t.setTime(+t + 36e5 * n);
          },
          function (t, n) {
            return (n - t) / 36e5;
          },
          function (t) {
            return t.getUTCHours();
          }
        )),
      j = O,
      U =
        (O.range,
        a(
          function (t) {
            t.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCDate(t.getUTCDate() + n);
          },
          function (t, n) {
            return (n - t) / 864e5;
          },
          function (t) {
            return t.getUTCDate() - 1;
          }
        )),
      D = U;
    U.range;
    function P(t) {
      return a(
        function (n) {
          n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
            n.setUTCHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        },
        function (t, n) {
          return (n - t) / f;
        }
      );
    }
    var R = P(0),
      Y = P(1),
      q = P(2),
      z = P(3),
      I = P(4),
      F = P(5),
      H = P(6),
      B =
        (R.range,
        Y.range,
        q.range,
        z.range,
        I.range,
        F.range,
        H.range,
        a(
          function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCMonth(t.getUTCMonth() + n);
          },
          function (t, n) {
            return (
              n.getUTCMonth() -
              t.getUTCMonth() +
              12 * (n.getUTCFullYear() - t.getUTCFullYear())
            );
          },
          function (t) {
            return t.getUTCMonth();
          }
        )),
      X = B,
      V =
        (B.range,
        a(
          function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          function (t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n);
          },
          function (t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear();
          },
          function (t) {
            return t.getUTCFullYear();
          }
        ));
    V.every = function (t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? a(
            function (n) {
              n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0);
            },
            function (n, e) {
              n.setUTCFullYear(n.getUTCFullYear() + e * t);
            }
          )
        : null;
    };
    var W = V;
    V.range;
    e.d(n, "c", function () {
      return c;
    }),
      e.d(n, "n", function () {
        return c;
      }),
      e.d(n, "g", function () {
        return l;
      }),
      e.d(n, "r", function () {
        return l;
      }),
      e.d(n, "d", function () {
        return d;
      }),
      e.d(n, "b", function () {
        return b;
      }),
      e.d(n, "a", function () {
        return _;
      }),
      e.d(n, "j", function () {
        return v;
      }),
      e.d(n, "h", function () {
        return v;
      }),
      e.d(n, "e", function () {
        return m;
      }),
      e.d(n, "i", function () {
        return M;
      }),
      e.d(n, "f", function () {
        return S;
      }),
      e.d(n, "k", function () {
        return C;
      }),
      e.d(n, "o", function () {
        return E;
      }),
      e.d(n, "m", function () {
        return j;
      }),
      e.d(n, "l", function () {
        return D;
      }),
      e.d(n, "u", function () {
        return R;
      }),
      e.d(n, "s", function () {
        return R;
      }),
      e.d(n, "p", function () {
        return Y;
      }),
      e.d(n, "t", function () {
        return I;
      }),
      e.d(n, "q", function () {
        return X;
      }),
      e.d(n, "v", function () {
        return W;
      });
  },
  function (t, n, e) {
    "use strict";
    var r = function (t, n, e) {
      (t.prototype = n.prototype = e), (e.constructor = t);
    };
    function i(t, n) {
      var e = Object.create(t.prototype);
      for (var r in n) e[r] = n[r];
      return e;
    }
    function a() {}
    var o = "\\s*([+-]?\\d+)\\s*",
      c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      f = /^#([0-9a-f]{3})$/,
      s = /^#([0-9a-f]{6})$/,
      l = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
      h = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
      d = new RegExp("^rgba\\(" + [o, o, o, c] + "\\)$"),
      p = new RegExp("^rgba\\(" + [u, u, u, c] + "\\)$"),
      b = new RegExp("^hsl\\(" + [c, u, u] + "\\)$"),
      y = new RegExp("^hsla\\(" + [c, u, u, c] + "\\)$"),
      _ = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function g(t) {
      var n;
      return (
        (t = (t + "").trim().toLowerCase()),
        (n = f.exec(t))
          ? new M(
              (((n = parseInt(n[1], 16)) >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (240 & n),
              ((15 & n) << 4) | (15 & n),
              1
            )
          : (n = s.exec(t))
          ? v(parseInt(n[1], 16))
          : (n = l.exec(t))
          ? new M(n[1], n[2], n[3], 1)
          : (n = h.exec(t))
          ? new M((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = d.exec(t))
          ? m(n[1], n[2], n[3], n[4])
          : (n = p.exec(t))
          ? m((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
          : (n = b.exec(t))
          ? N(n[1], n[2] / 100, n[3] / 100, 1)
          : (n = y.exec(t))
          ? N(n[1], n[2] / 100, n[3] / 100, n[4])
          : _.hasOwnProperty(t)
          ? v(_[t])
          : "transparent" === t
          ? new M(NaN, NaN, NaN, 0)
          : null
      );
    }
    function v(t) {
      return new M((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function m(t, n, e, r) {
      return r <= 0 && (t = n = e = NaN), new M(t, n, e, r);
    }
    function x(t) {
      return (
        t instanceof a || (t = g(t)),
        t ? new M((t = t.rgb()).r, t.g, t.b, t.opacity) : new M()
      );
    }
    function w(t, n, e, r) {
      return 1 === arguments.length ? x(t) : new M(t, n, e, null == r ? 1 : r);
    }
    function M(t, n, e, r) {
      (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
    }
    function k(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
        t.toString(16)
      );
    }
    function N(t, n, e, r) {
      return (
        r <= 0
          ? (t = n = e = NaN)
          : e <= 0 || e >= 1
          ? (t = n = NaN)
          : n <= 0 && (t = NaN),
        new S(t, n, e, r)
      );
    }
    function A(t, n, e, r) {
      return 1 === arguments.length
        ? (function (t) {
            if (t instanceof S) return new S(t.h, t.s, t.l, t.opacity);
            if ((t instanceof a || (t = g(t)), !t)) return new S();
            if (t instanceof S) return t;
            var n = (t = t.rgb()).r / 255,
              e = t.g / 255,
              r = t.b / 255,
              i = Math.min(n, e, r),
              o = Math.max(n, e, r),
              c = NaN,
              u = o - i,
              f = (o + i) / 2;
            return (
              u
                ? ((c =
                    n === o
                      ? (e - r) / u + 6 * (e < r)
                      : e === o
                      ? (r - n) / u + 2
                      : (n - e) / u + 4),
                  (u /= f < 0.5 ? o + i : 2 - o - i),
                  (c *= 60))
                : (u = f > 0 && f < 1 ? 0 : c),
              new S(c, u, f, t.opacity)
            );
          })(t)
        : new S(t, n, e, null == r ? 1 : r);
    }
    function S(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    function T(t, n, e) {
      return (
        255 *
        (t < 60
          ? n + ((e - n) * t) / 60
          : t < 180
          ? e
          : t < 240
          ? n + ((e - n) * (240 - t)) / 60
          : n)
      );
    }
    r(a, g, {
      displayable: function () {
        return this.rgb().displayable();
      },
      hex: function () {
        return this.rgb().hex();
      },
      toString: function () {
        return this.rgb() + "";
      },
    }),
      r(
        M,
        w,
        i(a, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new M(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new M(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function () {
            return this;
          },
          displayable: function () {
            return (
              0 <= this.r &&
              this.r <= 255 &&
              0 <= this.g &&
              this.g <= 255 &&
              0 <= this.b &&
              this.b <= 255 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: function () {
            return "#" + k(this.r) + k(this.g) + k(this.b);
          },
          toString: function () {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? "rgb("
                : "rgba(") +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === t ? ")" : ", " + t + ")")
            );
          },
        })
      ),
      r(
        S,
        A,
        i(a, {
          brighter: function (t) {
            return (
              (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
              new S(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? 0.7 : Math.pow(0.7, t)),
              new S(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = (this.h % 360) + 360 * (this.h < 0),
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < 0.5 ? e : 1 - e) * n,
              i = 2 * e - r;
            return new M(
              T(t >= 240 ? t - 240 : t + 120, i, r),
              T(t, i, r),
              T(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity
            );
          },
          displayable: function () {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
        })
      );
    var C = Math.PI / 180,
      L = 180 / Math.PI,
      E = 0.96422,
      O = 1,
      j = 0.82521,
      U = 4 / 29,
      D = 6 / 29,
      P = 3 * D * D,
      R = D * D * D;
    function Y(t) {
      if (t instanceof z) return new z(t.l, t.a, t.b, t.opacity);
      if (t instanceof W) {
        if (isNaN(t.h)) return new z(t.l, 0, 0, t.opacity);
        var n = t.h * C;
        return new z(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      t instanceof M || (t = x(t));
      var e,
        r,
        i = B(t.r),
        a = B(t.g),
        o = B(t.b),
        c = I((0.2225045 * i + 0.7168786 * a + 0.0606169 * o) / O);
      return (
        i === a && a === o
          ? (e = r = c)
          : ((e = I((0.4360747 * i + 0.3850649 * a + 0.1430804 * o) / E)),
            (r = I((0.0139322 * i + 0.0971045 * a + 0.7141733 * o) / j))),
        new z(116 * c - 16, 500 * (e - c), 200 * (c - r), t.opacity)
      );
    }
    function q(t, n, e, r) {
      return 1 === arguments.length ? Y(t) : new z(t, n, e, null == r ? 1 : r);
    }
    function z(t, n, e, r) {
      (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
    }
    function I(t) {
      return t > R ? Math.pow(t, 1 / 3) : t / P + U;
    }
    function F(t) {
      return t > D ? t * t * t : P * (t - U);
    }
    function H(t) {
      return (
        255 *
        (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
      );
    }
    function B(t) {
      return (t /= 255) <= 0.04045
        ? t / 12.92
        : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function X(t) {
      if (t instanceof W) return new W(t.h, t.c, t.l, t.opacity);
      if ((t instanceof z || (t = Y(t)), 0 === t.a && 0 === t.b))
        return new W(NaN, 0, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * L;
      return new W(
        n < 0 ? n + 360 : n,
        Math.sqrt(t.a * t.a + t.b * t.b),
        t.l,
        t.opacity
      );
    }
    function V(t, n, e, r) {
      return 1 === arguments.length ? X(t) : new W(t, n, e, null == r ? 1 : r);
    }
    function W(t, n, e, r) {
      (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
    }
    r(
      z,
      q,
      i(a, {
        brighter: function (t) {
          return new z(
            this.l + 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function (t) {
          return new z(
            this.l - 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function () {
          var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
          return new M(
            H(
              3.1338561 * (n = E * F(n)) -
                1.6168667 * (t = O * F(t)) -
                0.4906146 * (e = j * F(e))
            ),
            H(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
            H(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
            this.opacity
          );
        },
      })
    ),
      r(
        W,
        V,
        i(a, {
          brighter: function (t) {
            return new W(
              this.h,
              this.c,
              this.l + 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          darker: function (t) {
            return new W(
              this.h,
              this.c,
              this.l - 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          rgb: function () {
            return Y(this).rgb();
          },
        })
      );
    var $ = -0.14861,
      Z = 1.78277,
      Q = -0.29227,
      J = -0.90649,
      G = 1.97294,
      K = G * J,
      tt = G * Z,
      nt = Z * Q - J * $;
    function et(t, n, e, r) {
      return 1 === arguments.length
        ? (function (t) {
            if (t instanceof rt) return new rt(t.h, t.s, t.l, t.opacity);
            t instanceof M || (t = x(t));
            var n = t.r / 255,
              e = t.g / 255,
              r = t.b / 255,
              i = (nt * r + K * n - tt * e) / (nt + K - tt),
              a = r - i,
              o = (G * (e - i) - Q * a) / J,
              c = Math.sqrt(o * o + a * a) / (G * i * (1 - i)),
              u = c ? Math.atan2(o, a) * L - 120 : NaN;
            return new rt(u < 0 ? u + 360 : u, c, i, t.opacity);
          })(t)
        : new rt(t, n, e, null == r ? 1 : r);
    }
    function rt(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    r(
      rt,
      et,
      i(a, {
        brighter: function (t) {
          return (
            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
            new rt(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? 0.7 : Math.pow(0.7, t)),
            new rt(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * C,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
          return new M(
            255 * (n + e * ($ * r + Z * i)),
            255 * (n + e * (Q * r + J * i)),
            255 * (n + e * (G * r)),
            this.opacity
          );
        },
      })
    ),
      e.d(n, "a", function () {
        return g;
      }),
      e.d(n, "f", function () {
        return w;
      }),
      e.d(n, "d", function () {
        return A;
      }),
      e.d(n, "e", function () {
        return q;
      }),
      e.d(n, "c", function () {
        return V;
      }),
      e.d(n, "b", function () {
        return et;
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(3);
    function i(t, n, e, r, i) {
      var a = t * t,
        o = a * t;
      return (
        ((1 - 3 * t + 3 * a - o) * n +
          (4 - 6 * a + 3 * o) * e +
          (1 + 3 * t + 3 * a - 3 * o) * r +
          o * i) /
        6
      );
    }
    var a = function (t) {
      return function () {
        return t;
      };
    };
    function o(t, n) {
      return function (e) {
        return t + e * n;
      };
    }
    function c(t, n) {
      var e = n - t;
      return e
        ? o(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : a(isNaN(t) ? n : t);
    }
    function u(t) {
      return 1 == (t = +t)
        ? f
        : function (n, e) {
            return e - n
              ? (function (t, n, e) {
                  return (
                    (t = Math.pow(t, e)),
                    (n = Math.pow(n, e) - t),
                    (e = 1 / e),
                    function (r) {
                      return Math.pow(t + r * n, e);
                    }
                  );
                })(n, e, t)
              : a(isNaN(n) ? e : n);
          };
    }
    function f(t, n) {
      var e = n - t;
      return e ? o(t, e) : a(isNaN(t) ? n : t);
    }
    var s = (function t(n) {
      var e = u(n);
      function i(t, n) {
        var i = e((t = Object(r.f)(t)).r, (n = Object(r.f)(n)).r),
          a = e(t.g, n.g),
          o = e(t.b, n.b),
          c = f(t.opacity, n.opacity);
        return function (n) {
          return (
            (t.r = i(n)), (t.g = a(n)), (t.b = o(n)), (t.opacity = c(n)), t + ""
          );
        };
      }
      return (i.gamma = t), i;
    })(1);
    function l(t) {
      return function (n) {
        var e,
          i,
          a = n.length,
          o = new Array(a),
          c = new Array(a),
          u = new Array(a);
        for (e = 0; e < a; ++e)
          (i = Object(r.f)(n[e])),
            (o[e] = i.r || 0),
            (c[e] = i.g || 0),
            (u[e] = i.b || 0);
        return (
          (o = t(o)),
          (c = t(c)),
          (u = t(u)),
          (i.opacity = 1),
          function (t) {
            return (i.r = o(t)), (i.g = c(t)), (i.b = u(t)), i + "";
          }
        );
      };
    }
    var h = l(function (t) {
        var n = t.length - 1;
        return function (e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            a = t[r],
            o = t[r + 1],
            c = r > 0 ? t[r - 1] : 2 * a - o,
            u = r < n - 1 ? t[r + 2] : 2 * o - a;
          return i((e - r / n) * n, c, a, o, u);
        };
      }),
      d =
        (l(function (t) {
          var n = t.length;
          return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              a = t[(r + n - 1) % n],
              o = t[r % n],
              c = t[(r + 1) % n],
              u = t[(r + 2) % n];
            return i((e - r / n) * n, a, o, c, u);
          };
        }),
        function (t, n) {
          return (
            (n -= t = +t),
            function (e) {
              return t + n * e;
            }
          );
        }),
      p = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      b = new RegExp(p.source, "g");
    var y,
      _,
      g,
      v,
      m = function (t, n) {
        var e,
          r,
          i,
          a = (p.lastIndex = b.lastIndex = 0),
          o = -1,
          c = [],
          u = [];
        for (t += "", n += ""; (e = p.exec(t)) && (r = b.exec(n)); )
          (i = r.index) > a &&
            ((i = n.slice(a, i)), c[o] ? (c[o] += i) : (c[++o] = i)),
            (e = e[0]) === (r = r[0])
              ? c[o]
                ? (c[o] += r)
                : (c[++o] = r)
              : ((c[++o] = null), u.push({ i: o, x: d(e, r) })),
            (a = b.lastIndex);
        return (
          a < n.length && ((i = n.slice(a)), c[o] ? (c[o] += i) : (c[++o] = i)),
          c.length < 2
            ? u[0]
              ? (function (t) {
                  return function (n) {
                    return t(n) + "";
                  };
                })(u[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(n)
            : ((n = u.length),
              function (t) {
                for (var e, r = 0; r < n; ++r) c[(e = u[r]).i] = e.x(t);
                return c.join("");
              })
        );
      },
      x = function (t, n) {
        var e,
          i = typeof n;
        return null == n || "boolean" === i
          ? a(n)
          : ("number" === i
              ? d
              : "string" === i
              ? (e = Object(r.a)(n))
                ? ((n = e), s)
                : m
              : n instanceof r.a
              ? s
              : n instanceof Date
              ? function (t, n) {
                  var e = new Date();
                  return (
                    (n -= t = +t),
                    function (r) {
                      return e.setTime(t + n * r), e;
                    }
                  );
                }
              : Array.isArray(n)
              ? function (t, n) {
                  var e,
                    r = n ? n.length : 0,
                    i = t ? Math.min(r, t.length) : 0,
                    a = new Array(i),
                    o = new Array(r);
                  for (e = 0; e < i; ++e) a[e] = x(t[e], n[e]);
                  for (; e < r; ++e) o[e] = n[e];
                  return function (t) {
                    for (e = 0; e < i; ++e) o[e] = a[e](t);
                    return o;
                  };
                }
              : ("function" != typeof n.valueOf &&
                  "function" != typeof n.toString) ||
                isNaN(n)
              ? function (t, n) {
                  var e,
                    r = {},
                    i = {};
                  for (e in ((null !== t && "object" == typeof t) || (t = {}),
                  (null !== n && "object" == typeof n) || (n = {}),
                  n))
                    e in t ? (r[e] = x(t[e], n[e])) : (i[e] = n[e]);
                  return function (t) {
                    for (e in r) i[e] = r[e](t);
                    return i;
                  };
                }
              : d)(t, n);
      },
      w = function (t, n) {
        return (
          (n -= t = +t),
          function (e) {
            return Math.round(t + n * e);
          }
        );
      },
      M = 180 / Math.PI,
      k = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      },
      N = function (t, n, e, r, i, a) {
        var o, c, u;
        return (
          (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
          (u = t * e + n * r) && ((e -= t * u), (r -= n * u)),
          (c = Math.sqrt(e * e + r * r)) && ((e /= c), (r /= c), (u /= c)),
          t * r < n * e && ((t = -t), (n = -n), (u = -u), (o = -o)),
          {
            translateX: i,
            translateY: a,
            rotate: Math.atan2(n, t) * M,
            skewX: Math.atan(u) * M,
            scaleX: o,
            scaleY: c,
          }
        );
      };
    function A(t, n, e, r) {
      function i(t) {
        return t.length ? t.pop() + " " : "";
      }
      return function (a, o) {
        var c = [],
          u = [];
        return (
          (a = t(a)),
          (o = t(o)),
          (function (t, r, i, a, o, c) {
            if (t !== i || r !== a) {
              var u = o.push("translate(", null, n, null, e);
              c.push({ i: u - 4, x: d(t, i) }, { i: u - 2, x: d(r, a) });
            } else (i || a) && o.push("translate(" + i + n + a + e);
          })(a.translateX, a.translateY, o.translateX, o.translateY, c, u),
          (function (t, n, e, a) {
            t !== n
              ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
                a.push({
                  i: e.push(i(e) + "rotate(", null, r) - 2,
                  x: d(t, n),
                }))
              : n && e.push(i(e) + "rotate(" + n + r);
          })(a.rotate, o.rotate, c, u),
          (function (t, n, e, a) {
            t !== n
              ? a.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: d(t, n) })
              : n && e.push(i(e) + "skewX(" + n + r);
          })(a.skewX, o.skewX, c, u),
          (function (t, n, e, r, a, o) {
            if (t !== e || n !== r) {
              var c = a.push(i(a) + "scale(", null, ",", null, ")");
              o.push({ i: c - 4, x: d(t, e) }, { i: c - 2, x: d(n, r) });
            } else
              (1 === e && 1 === r) ||
                a.push(i(a) + "scale(" + e + "," + r + ")");
          })(a.scaleX, a.scaleY, o.scaleX, o.scaleY, c, u),
          (a = o = null),
          function (t) {
            for (var n, e = -1, r = u.length; ++e < r; )
              c[(n = u[e]).i] = n.x(t);
            return c.join("");
          }
        );
      };
    }
    var S = A(
        function (t) {
          return "none" === t
            ? k
            : (y ||
                ((y = document.createElement("DIV")),
                (_ = document.documentElement),
                (g = document.defaultView)),
              (y.style.transform = t),
              (t = g
                .getComputedStyle(_.appendChild(y), null)
                .getPropertyValue("transform")),
              _.removeChild(y),
              (t = t.slice(7, -1).split(",")),
              N(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
        },
        "px, ",
        "px)",
        "deg)"
      ),
      T = A(
        function (t) {
          return null == t
            ? k
            : (v ||
                (v = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                )),
              v.setAttribute("transform", t),
              (t = v.transform.baseVal.consolidate())
                ? ((t = t.matrix), N(t.a, t.b, t.c, t.d, t.e, t.f))
                : k);
        },
        ", ",
        ")",
        ")"
      ),
      C = Math.SQRT2;
    function L(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    var E = function (t, n) {
      var e,
        r,
        i = t[0],
        a = t[1],
        o = t[2],
        c = n[0],
        u = n[1],
        f = n[2],
        s = c - i,
        l = u - a,
        h = s * s + l * l;
      if (h < 1e-12)
        (r = Math.log(f / o) / C),
          (e = function (t) {
            return [i + t * s, a + t * l, o * Math.exp(C * t * r)];
          });
      else {
        var d = Math.sqrt(h),
          p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
          b = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
          y = Math.log(Math.sqrt(p * p + 1) - p),
          _ = Math.log(Math.sqrt(b * b + 1) - b);
        (r = (_ - y) / C),
          (e = function (t) {
            var n,
              e = t * r,
              c = L(y),
              u =
                (o / (2 * d)) *
                (c * ((n = C * e + y), ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                  (function (t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2;
                  })(y));
            return [i + u * s, a + u * l, (o * c) / L(C * e + y)];
          });
      }
      return (e.duration = 1e3 * r), e;
    };
    function O(t) {
      return function (n, e) {
        var i = t((n = Object(r.d)(n)).h, (e = Object(r.d)(e)).h),
          a = f(n.s, e.s),
          o = f(n.l, e.l),
          c = f(n.opacity, e.opacity);
        return function (t) {
          return (
            (n.h = i(t)), (n.s = a(t)), (n.l = o(t)), (n.opacity = c(t)), n + ""
          );
        };
      };
    }
    O(c), O(f);
    function j(t) {
      return function (n, e) {
        var i = t((n = Object(r.c)(n)).h, (e = Object(r.c)(e)).h),
          a = f(n.c, e.c),
          o = f(n.l, e.l),
          c = f(n.opacity, e.opacity);
        return function (t) {
          return (
            (n.h = i(t)), (n.c = a(t)), (n.l = o(t)), (n.opacity = c(t)), n + ""
          );
        };
      };
    }
    j(c), j(f);
    function U(t) {
      return (function n(e) {
        function i(n, i) {
          var a = t((n = Object(r.b)(n)).h, (i = Object(r.b)(i)).h),
            o = f(n.s, i.s),
            c = f(n.l, i.l),
            u = f(n.opacity, i.opacity);
          return function (t) {
            return (
              (n.h = a(t)),
              (n.s = o(t)),
              (n.l = c(Math.pow(t, e))),
              (n.opacity = u(t)),
              n + ""
            );
          };
        }
        return (e = +e), (i.gamma = n), i;
      })(1);
    }
    U(c);
    var D = U(f);
    e.d(n, "a", function () {
      return x;
    }),
      e.d(n, "c", function () {
        return d;
      }),
      e.d(n, "f", function () {
        return w;
      }),
      e.d(n, "g", function () {
        return m;
      }),
      e.d(n, "h", function () {
        return S;
      }),
      e.d(n, "i", function () {
        return T;
      }),
      e.d(n, "j", function () {
        return E;
      }),
      e.d(n, "d", function () {
        return s;
      }),
      e.d(n, "e", function () {
        return h;
      }),
      e.d(n, "b", function () {
        return D;
      });
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    var r = { value: function () {} };
    function i() {
      for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
        if (!(t = arguments[n] + "") || t in r)
          throw new Error("illegal type: " + t);
        r[t] = [];
      }
      return new a(r);
    }
    function a(t) {
      this._ = t;
    }
    function o(t, n) {
      for (var e, r = 0, i = t.length; r < i; ++r)
        if ((e = t[r]).name === n) return e.value;
    }
    function c(t, n, e) {
      for (var i = 0, a = t.length; i < a; ++i)
        if (t[i].name === n) {
          (t[i] = r), (t = t.slice(0, i).concat(t.slice(i + 1)));
          break;
        }
      return null != e && t.push({ name: n, value: e }), t;
    }
    a.prototype = i.prototype = {
      constructor: a,
      on: function (t, n) {
        var e,
          r,
          i = this._,
          a =
            ((r = i),
            (t + "")
              .trim()
              .split(/^|\s+/)
              .map(function (t) {
                var n = "",
                  e = t.indexOf(".");
                if (
                  (e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
                  t && !r.hasOwnProperty(t))
                )
                  throw new Error("unknown type: " + t);
                return { type: t, name: n };
              })),
          u = -1,
          f = a.length;
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n)
            throw new Error("invalid callback: " + n);
          for (; ++u < f; )
            if ((e = (t = a[u]).type)) i[e] = c(i[e], t.name, n);
            else if (null == n) for (e in i) i[e] = c(i[e], t.name, null);
          return this;
        }
        for (; ++u < f; )
          if ((e = (t = a[u]).type) && (e = o(i[e], t.name))) return e;
      },
      copy: function () {
        var t = {},
          n = this._;
        for (var e in n) t[e] = n[e].slice();
        return new a(t);
      },
      call: function (t, n) {
        if ((e = arguments.length - 2) > 0)
          for (var e, r, i = new Array(e), a = 0; a < e; ++a)
            i[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (a = 0, e = (r = this._[t]).length; a < e; ++a)
          r[a].value.apply(n, i);
      },
      apply: function (t, n, e) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, a = r.length; i < a; ++i)
          r[i].value.apply(n, e);
      },
    };
    var u = i;
    e.d(n, "dispatch", function () {
      return u;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = function (t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            "e"
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      },
      i = function (t) {
        return (t = r(Math.abs(t))) ? t[1] : NaN;
      },
      a = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function o(t) {
      return new c(t);
    }
    function c(t) {
      if (!(n = a.exec(t))) throw new Error("invalid format: " + t);
      var n;
      (this.fill = n[1] || " "),
        (this.align = n[2] || ">"),
        (this.sign = n[3] || "-"),
        (this.symbol = n[4] || ""),
        (this.zero = !!n[5]),
        (this.width = n[6] && +n[6]),
        (this.comma = !!n[7]),
        (this.precision = n[8] && +n[8].slice(1)),
        (this.trim = !!n[9]),
        (this.type = n[10] || "");
    }
    (o.prototype = c.prototype),
      (c.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (null == this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (null == this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      });
    var u,
      f,
      s,
      l,
      h = function (t) {
        t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
          switch (t[r]) {
            case ".":
              i = n = r;
              break;
            case "0":
              0 === i && (i = r), (n = r);
              break;
            default:
              if (i > 0) {
                if (!+t[r]) break t;
                i = 0;
              }
          }
        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
      },
      d = function (t, n) {
        var e = r(t, n);
        if (!e) return t + "";
        var i = e[0],
          a = e[1];
        return a < 0
          ? "0." + new Array(-a).join("0") + i
          : i.length > a + 1
          ? i.slice(0, a + 1) + "." + i.slice(a + 1)
          : i + new Array(a - i.length + 2).join("0");
      },
      p = {
        "%": function (t, n) {
          return (100 * t).toFixed(n);
        },
        b: function (t) {
          return Math.round(t).toString(2);
        },
        c: function (t) {
          return t + "";
        },
        d: function (t) {
          return Math.round(t).toString(10);
        },
        e: function (t, n) {
          return t.toExponential(n);
        },
        f: function (t, n) {
          return t.toFixed(n);
        },
        g: function (t, n) {
          return t.toPrecision(n);
        },
        o: function (t) {
          return Math.round(t).toString(8);
        },
        p: function (t, n) {
          return d(100 * t, n);
        },
        r: d,
        s: function (t, n) {
          var e = r(t, n);
          if (!e) return t + "";
          var i = e[0],
            a = e[1],
            o = a - (u = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            c = i.length;
          return o === c
            ? i
            : o > c
            ? i + new Array(o - c + 1).join("0")
            : o > 0
            ? i.slice(0, o) + "." + i.slice(o)
            : "0." +
              new Array(1 - o).join("0") +
              r(t, Math.max(0, n + o - 1))[0];
        },
        X: function (t) {
          return Math.round(t).toString(16).toUpperCase();
        },
        x: function (t) {
          return Math.round(t).toString(16);
        },
      },
      b = function (t) {
        return t;
      },
      y = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    (f = (function (t) {
      var n,
        e,
        r =
          t.grouping && t.thousands
            ? ((n = t.grouping),
              (e = t.thousands),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, c = n[0], u = 0;
                  i > 0 &&
                  c > 0 &&
                  (u + c + 1 > r && (c = Math.max(1, r - u)),
                  a.push(t.substring((i -= c), i + c)),
                  !((u += c + 1) > r));

                )
                  c = n[(o = (o + 1) % n.length)];
                return a.reverse().join(e);
              })
            : b,
        a = t.currency,
        c = t.decimal,
        f = t.numerals
          ? (function (t) {
              return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                  return t[+n];
                });
              };
            })(t.numerals)
          : b,
        s = t.percent || "%";
      function l(t) {
        var n = (t = o(t)).fill,
          e = t.align,
          i = t.sign,
          l = t.symbol,
          d = t.zero,
          b = t.width,
          _ = t.comma,
          g = t.precision,
          v = t.trim,
          m = t.type;
        "n" === m
          ? ((_ = !0), (m = "g"))
          : p[m] || (null == g && (g = 12), (v = !0), (m = "g")),
          (d || ("0" === n && "=" === e)) && ((d = !0), (n = "0"), (e = "="));
        var x =
            "$" === l
              ? a[0]
              : "#" === l && /[boxX]/.test(m)
              ? "0" + m.toLowerCase()
              : "",
          w = "$" === l ? a[1] : /[%p]/.test(m) ? s : "",
          M = p[m],
          k = /[defgprs%]/.test(m);
        function N(t) {
          var a,
            o,
            s,
            l = x,
            p = w;
          if ("c" === m) (p = M(t) + p), (t = "");
          else {
            var N = (t = +t) < 0;
            if (
              ((t = M(Math.abs(t), g)),
              v && (t = h(t)),
              N && 0 == +t && (N = !1),
              (l =
                (N ? ("(" === i ? i : "-") : "-" === i || "(" === i ? "" : i) +
                l),
              (p =
                ("s" === m ? y[8 + u / 3] : "") +
                p +
                (N && "(" === i ? ")" : "")),
              k)
            )
              for (a = -1, o = t.length; ++a < o; )
                if (48 > (s = t.charCodeAt(a)) || s > 57) {
                  (p = (46 === s ? c + t.slice(a + 1) : t.slice(a)) + p),
                    (t = t.slice(0, a));
                  break;
                }
          }
          _ && !d && (t = r(t, 1 / 0));
          var A = l.length + t.length + p.length,
            S = A < b ? new Array(b - A + 1).join(n) : "";
          switch (
            (_ &&
              d &&
              ((t = r(S + t, S.length ? b - p.length : 1 / 0)), (S = "")),
            e)
          ) {
            case "<":
              t = l + t + p + S;
              break;
            case "=":
              t = l + S + t + p;
              break;
            case "^":
              t = S.slice(0, (A = S.length >> 1)) + l + t + p + S.slice(A);
              break;
            default:
              t = S + l + t + p;
          }
          return f(t);
        }
        return (
          (g =
            null == g
              ? 6
              : /[gprs]/.test(m)
              ? Math.max(1, Math.min(21, g))
              : Math.max(0, Math.min(20, g))),
          (N.toString = function () {
            return t + "";
          }),
          N
        );
      }
      return {
        format: l,
        formatPrefix: function (t, n) {
          var e = l((((t = o(t)).type = "f"), t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))),
            a = Math.pow(10, -r),
            c = y[8 + r / 3];
          return function (t) {
            return e(a * t) + c;
          };
        },
      };
    })({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] })),
      (s = f.format),
      (l = f.formatPrefix);
    var _ = function (t) {
        return Math.max(0, -i(Math.abs(t)));
      },
      g = function (t, n) {
        return Math.max(
          0,
          3 * Math.max(-8, Math.min(8, Math.floor(i(n) / 3))) - i(Math.abs(t))
        );
      },
      v = function (t, n) {
        return (
          (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, i(n) - i(t)) + 1
        );
      };
    e.d(n, "a", function () {
      return s;
    }),
      e.d(n, "b", function () {
        return l;
      }),
      e.d(n, "c", function () {
        return o;
      }),
      e.d(n, "d", function () {
        return _;
      }),
      e.d(n, "e", function () {
        return g;
      }),
      e.d(n, "f", function () {
        return v;
      });
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    var r = e(5),
      i = e(0);
    function a() {
      i.event.stopImmediatePropagation();
    }
    var o = function () {
        i.event.preventDefault(), i.event.stopImmediatePropagation();
      },
      c = function (t) {
        var n = t.document.documentElement,
          e = Object(i.select)(t).on("dragstart.drag", o, !0);
        "onselectstart" in n
          ? e.on("selectstart.drag", o, !0)
          : ((n.__noselect = n.style.MozUserSelect),
            (n.style.MozUserSelect = "none"));
      };
    function u(t, n) {
      var e = t.document.documentElement,
        r = Object(i.select)(t).on("dragstart.drag", null);
      n &&
        (r.on("click.drag", o, !0),
        setTimeout(function () {
          r.on("click.drag", null);
        }, 0)),
        "onselectstart" in e
          ? r.on("selectstart.drag", null)
          : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
    }
    var f = function (t) {
      return function () {
        return t;
      };
    };
    function s(t, n, e, r, i, a, o, c, u, f) {
      (this.target = t),
        (this.type = n),
        (this.subject = e),
        (this.identifier = r),
        (this.active = i),
        (this.x = a),
        (this.y = o),
        (this.dx = c),
        (this.dy = u),
        (this._ = f);
    }
    function l() {
      return !i.event.button;
    }
    function h() {
      return this.parentNode;
    }
    function d(t) {
      return null == t ? { x: i.event.x, y: i.event.y } : t;
    }
    function p() {
      return "ontouchstart" in this;
    }
    s.prototype.on = function () {
      var t = this._.on.apply(this._, arguments);
      return t === this._ ? this : t;
    };
    var b = function () {
      var t,
        n,
        e,
        b,
        y = l,
        _ = h,
        g = d,
        v = p,
        m = {},
        x = Object(r.dispatch)("start", "drag", "end"),
        w = 0,
        M = 0;
      function k(t) {
        t.on("mousedown.drag", N)
          .filter(v)
          .on("touchstart.drag", T)
          .on("touchmove.drag", C)
          .on("touchend.drag touchcancel.drag", L)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function N() {
        if (!b && y.apply(this, arguments)) {
          var r = E(
            "mouse",
            _.apply(this, arguments),
            i.mouse,
            this,
            arguments
          );
          r &&
            (Object(i.select)(i.event.view)
              .on("mousemove.drag", A, !0)
              .on("mouseup.drag", S, !0),
            c(i.event.view),
            a(),
            (e = !1),
            (t = i.event.clientX),
            (n = i.event.clientY),
            r("start"));
        }
      }
      function A() {
        if ((o(), !e)) {
          var r = i.event.clientX - t,
            a = i.event.clientY - n;
          e = r * r + a * a > M;
        }
        m.mouse("drag");
      }
      function S() {
        Object(i.select)(i.event.view).on("mousemove.drag mouseup.drag", null),
          u(i.event.view, e),
          o(),
          m.mouse("end");
      }
      function T() {
        if (y.apply(this, arguments)) {
          var t,
            n,
            e = i.event.changedTouches,
            r = _.apply(this, arguments),
            o = e.length;
          for (t = 0; t < o; ++t)
            (n = E(e[t].identifier, r, i.touch, this, arguments)) &&
              (a(), n("start"));
        }
      }
      function C() {
        var t,
          n,
          e = i.event.changedTouches,
          r = e.length;
        for (t = 0; t < r; ++t) (n = m[e[t].identifier]) && (o(), n("drag"));
      }
      function L() {
        var t,
          n,
          e = i.event.changedTouches,
          r = e.length;
        for (
          b && clearTimeout(b),
            b = setTimeout(function () {
              b = null;
            }, 500),
            t = 0;
          t < r;
          ++t
        )
          (n = m[e[t].identifier]) && (a(), n("end"));
      }
      function E(t, n, e, r, a) {
        var o,
          c,
          u,
          f = e(n, t),
          l = x.copy();
        if (
          Object(i.customEvent)(
            new s(k, "beforestart", o, t, w, f[0], f[1], 0, 0, l),
            function () {
              return (
                null != (i.event.subject = o = g.apply(r, a)) &&
                ((c = o.x - f[0] || 0), (u = o.y - f[1] || 0), !0)
              );
            }
          )
        )
          return function h(d) {
            var p,
              b = f;
            switch (d) {
              case "start":
                (m[t] = h), (p = w++);
                break;
              case "end":
                delete m[t], --w;
              case "drag":
                (f = e(n, t)), (p = w);
            }
            Object(i.customEvent)(
              new s(
                k,
                d,
                o,
                t,
                p,
                f[0] + c,
                f[1] + u,
                f[0] - b[0],
                f[1] - b[1],
                l
              ),
              l.apply,
              l,
              [d, r, a]
            );
          };
      }
      return (
        (k.filter = function (t) {
          return arguments.length
            ? ((y = "function" == typeof t ? t : f(!!t)), k)
            : y;
        }),
        (k.container = function (t) {
          return arguments.length
            ? ((_ = "function" == typeof t ? t : f(t)), k)
            : _;
        }),
        (k.subject = function (t) {
          return arguments.length
            ? ((g = "function" == typeof t ? t : f(t)), k)
            : g;
        }),
        (k.touchable = function (t) {
          return arguments.length
            ? ((v = "function" == typeof t ? t : f(!!t)), k)
            : v;
        }),
        (k.on = function () {
          var t = x.on.apply(x, arguments);
          return t === x ? k : t;
        }),
        (k.clickDistance = function (t) {
          return arguments.length ? ((M = (t = +t) * t), k) : Math.sqrt(M);
        }),
        k
      );
    };
    e.d(n, "drag", function () {
      return b;
    }),
      e.d(n, "dragDisable", function () {
        return c;
      }),
      e.d(n, "dragEnable", function () {
        return u;
      });
  },
  function (t, n, e) {
    "use strict";
    function r() {}
    function i(t, n) {
      var e = new r();
      if (t instanceof r)
        t.each(function (t, n) {
          e.set(n, t);
        });
      else if (Array.isArray(t)) {
        var i,
          a = -1,
          o = t.length;
        if (null == n) for (; ++a < o; ) e.set(a, t[a]);
        else for (; ++a < o; ) e.set(n((i = t[a]), a, t), i);
      } else if (t) for (var c in t) e.set(c, t[c]);
      return e;
    }
    r.prototype = i.prototype = {
      constructor: r,
      has: function (t) {
        return "$" + t in this;
      },
      get: function (t) {
        return this["$" + t];
      },
      set: function (t, n) {
        return (this["$" + t] = n), this;
      },
      remove: function (t) {
        var n = "$" + t;
        return n in this && delete this[n];
      },
      clear: function () {
        for (var t in this) "$" === t[0] && delete this[t];
      },
      keys: function () {
        var t = [];
        for (var n in this) "$" === n[0] && t.push(n.slice(1));
        return t;
      },
      values: function () {
        var t = [];
        for (var n in this) "$" === n[0] && t.push(this[n]);
        return t;
      },
      entries: function () {
        var t = [];
        for (var n in this)
          "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
        return t;
      },
      size: function () {
        var t = 0;
        for (var n in this) "$" === n[0] && ++t;
        return t;
      },
      empty: function () {
        for (var t in this) if ("$" === t[0]) return !1;
        return !0;
      },
      each: function (t) {
        for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this);
      },
    };
    var a = i,
      o = function () {
        var t,
          n,
          e,
          r = [],
          i = [];
        function o(e, i, c, u) {
          if (i >= r.length)
            return null != t && e.sort(t), null != n ? n(e) : e;
          for (
            var f, s, l, h = -1, d = e.length, p = r[i++], b = a(), y = c();
            ++h < d;

          )
            (l = b.get((f = p((s = e[h])) + ""))) ? l.push(s) : b.set(f, [s]);
          return (
            b.each(function (t, n) {
              u(y, n, o(t, i, c, u));
            }),
            y
          );
        }
        return (e = {
          object: function (t) {
            return o(t, 0, c, u);
          },
          map: function (t) {
            return o(t, 0, f, s);
          },
          entries: function (t) {
            return (function t(e, a) {
              if (++a > r.length) return e;
              var o,
                c = i[a - 1];
              return (
                null != n && a >= r.length
                  ? (o = e.entries())
                  : ((o = []),
                    e.each(function (n, e) {
                      o.push({ key: e, values: t(n, a) });
                    })),
                null != c
                  ? o.sort(function (t, n) {
                      return c(t.key, n.key);
                    })
                  : o
              );
            })(o(t, 0, f, s), 0);
          },
          key: function (t) {
            return r.push(t), e;
          },
          sortKeys: function (t) {
            return (i[r.length - 1] = t), e;
          },
          sortValues: function (n) {
            return (t = n), e;
          },
          rollup: function (t) {
            return (n = t), e;
          },
        });
      };
    function c() {
      return {};
    }
    function u(t, n, e) {
      t[n] = e;
    }
    function f() {
      return a();
    }
    function s(t, n, e) {
      t.set(n, e);
    }
    function l() {}
    var h = a.prototype;
    function d(t, n) {
      var e = new l();
      if (t instanceof l)
        t.each(function (t) {
          e.add(t);
        });
      else if (t) {
        var r = -1,
          i = t.length;
        if (null == n) for (; ++r < i; ) e.add(t[r]);
        else for (; ++r < i; ) e.add(n(t[r], r, t));
      }
      return e;
    }
    l.prototype = d.prototype = {
      constructor: l,
      has: h.has,
      add: function (t) {
        return (this["$" + (t += "")] = t), this;
      },
      remove: h.remove,
      clear: h.clear,
      values: h.keys,
      size: h.size,
      empty: h.empty,
      each: h.each,
    };
    e.d(n, "b", function () {
      return o;
    }),
      e.d(n, "a", function () {
        return a;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return +t;
    }
    function i(t) {
      return t * t;
    }
    function a(t) {
      return t * (2 - t);
    }
    function o(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }
    function c(t) {
      return t * t * t;
    }
    function u(t) {
      return --t * t * t + 1;
    }
    function f(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    e.r(n);
    var s = (function t(n) {
        function e(t) {
          return Math.pow(t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      l = (function t(n) {
        function e(t) {
          return 1 - Math.pow(1 - t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      h = (function t(n) {
        function e(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      d = Math.PI,
      p = d / 2;
    function b(t) {
      return 1 - Math.cos(t * p);
    }
    function y(t) {
      return Math.sin(t * p);
    }
    function _(t) {
      return (1 - Math.cos(d * t)) / 2;
    }
    function g(t) {
      return Math.pow(2, 10 * t - 10);
    }
    function v(t) {
      return 1 - Math.pow(2, -10 * t);
    }
    function m(t) {
      return (
        ((t *= 2) <= 1
          ? Math.pow(2, 10 * t - 10)
          : 2 - Math.pow(2, 10 - 10 * t)) / 2
      );
    }
    function x(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    function w(t) {
      return Math.sqrt(1 - --t * t);
    }
    function M(t) {
      return (
        ((t *= 2) <= 1
          ? 1 - Math.sqrt(1 - t * t)
          : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
      );
    }
    var k = 4 / 11,
      N = 6 / 11,
      A = 8 / 11,
      S = 0.75,
      T = 9 / 11,
      C = 10 / 11,
      L = 0.9375,
      E = 21 / 22,
      O = 63 / 64,
      j = 1 / k / k;
    function U(t) {
      return 1 - D(1 - t);
    }
    function D(t) {
      return (t = +t) < k
        ? j * t * t
        : t < A
        ? j * (t -= N) * t + S
        : t < C
        ? j * (t -= T) * t + L
        : j * (t -= E) * t + O;
    }
    function P(t) {
      return ((t *= 2) <= 1 ? 1 - D(1 - t) : D(t - 1) + 1) / 2;
    }
    var R = (function t(n) {
        function e(t) {
          return t * t * ((n + 1) * t - n);
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      Y = (function t(n) {
        function e(t) {
          return --t * t * ((n + 1) * t + n) + 1;
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      q = (function t(n) {
        function e(t) {
          return (
            ((t *= 2) < 1
              ? t * t * ((n + 1) * t - n)
              : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
          );
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      z = 2 * Math.PI,
      I = (function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= z);
        function i(t) {
          return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
        }
        return (
          (i.amplitude = function (n) {
            return t(n, e * z);
          }),
          (i.period = function (e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      F = (function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= z);
        function i(t) {
          return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
        }
        return (
          (i.amplitude = function (n) {
            return t(n, e * z);
          }),
          (i.period = function (e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      H = (function t(n, e) {
        var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= z);
        function i(t) {
          return (
            ((t = 2 * t - 1) < 0
              ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e)
              : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2
          );
        }
        return (
          (i.amplitude = function (n) {
            return t(n, e * z);
          }),
          (i.period = function (e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3);
    e.d(n, "easeLinear", function () {
      return r;
    }),
      e.d(n, "easeQuad", function () {
        return o;
      }),
      e.d(n, "easeQuadIn", function () {
        return i;
      }),
      e.d(n, "easeQuadOut", function () {
        return a;
      }),
      e.d(n, "easeQuadInOut", function () {
        return o;
      }),
      e.d(n, "easeCubic", function () {
        return f;
      }),
      e.d(n, "easeCubicIn", function () {
        return c;
      }),
      e.d(n, "easeCubicOut", function () {
        return u;
      }),
      e.d(n, "easeCubicInOut", function () {
        return f;
      }),
      e.d(n, "easePoly", function () {
        return h;
      }),
      e.d(n, "easePolyIn", function () {
        return s;
      }),
      e.d(n, "easePolyOut", function () {
        return l;
      }),
      e.d(n, "easePolyInOut", function () {
        return h;
      }),
      e.d(n, "easeSin", function () {
        return _;
      }),
      e.d(n, "easeSinIn", function () {
        return b;
      }),
      e.d(n, "easeSinOut", function () {
        return y;
      }),
      e.d(n, "easeSinInOut", function () {
        return _;
      }),
      e.d(n, "easeExp", function () {
        return m;
      }),
      e.d(n, "easeExpIn", function () {
        return g;
      }),
      e.d(n, "easeExpOut", function () {
        return v;
      }),
      e.d(n, "easeExpInOut", function () {
        return m;
      }),
      e.d(n, "easeCircle", function () {
        return M;
      }),
      e.d(n, "easeCircleIn", function () {
        return x;
      }),
      e.d(n, "easeCircleOut", function () {
        return w;
      }),
      e.d(n, "easeCircleInOut", function () {
        return M;
      }),
      e.d(n, "easeBounce", function () {
        return D;
      }),
      e.d(n, "easeBounceIn", function () {
        return U;
      }),
      e.d(n, "easeBounceOut", function () {
        return D;
      }),
      e.d(n, "easeBounceInOut", function () {
        return P;
      }),
      e.d(n, "easeBack", function () {
        return q;
      }),
      e.d(n, "easeBackIn", function () {
        return R;
      }),
      e.d(n, "easeBackOut", function () {
        return Y;
      }),
      e.d(n, "easeBackInOut", function () {
        return q;
      }),
      e.d(n, "easeElastic", function () {
        return F;
      }),
      e.d(n, "easeElasticIn", function () {
        return I;
      }),
      e.d(n, "easeElasticOut", function () {
        return F;
      }),
      e.d(n, "easeElasticInOut", function () {
        return H;
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(2);
    function i(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n;
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function a(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n;
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function o(t) {
      return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
    }
    var c,
      u,
      f,
      s,
      l = { "-": "", _: " ", 0: "0" },
      h = /^\s*\d+/,
      d = /^%/,
      p = /[\\^$*+?|[\]().{}]/g;
    function b(t, n, e) {
      var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        a = i.length;
      return r + (a < e ? new Array(e - a + 1).join(n) + i : i);
    }
    function y(t) {
      return t.replace(p, "\\$&");
    }
    function _(t) {
      return new RegExp("^(?:" + t.map(y).join("|") + ")", "i");
    }
    function g(t) {
      for (var n = {}, e = -1, r = t.length; ++e < r; )
        n[t[e].toLowerCase()] = e;
      return n;
    }
    function v(t, n, e) {
      var r = h.exec(n.slice(e, e + 1));
      return r ? ((t.w = +r[0]), e + r[0].length) : -1;
    }
    function m(t, n, e) {
      var r = h.exec(n.slice(e, e + 1));
      return r ? ((t.u = +r[0]), e + r[0].length) : -1;
    }
    function x(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.U = +r[0]), e + r[0].length) : -1;
    }
    function w(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.V = +r[0]), e + r[0].length) : -1;
    }
    function M(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.W = +r[0]), e + r[0].length) : -1;
    }
    function k(t, n, e) {
      var r = h.exec(n.slice(e, e + 4));
      return r ? ((t.y = +r[0]), e + r[0].length) : -1;
    }
    function N(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r
        ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
        : -1;
    }
    function A(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r
        ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
        : -1;
    }
    function S(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
    }
    function T(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.d = +r[0]), e + r[0].length) : -1;
    }
    function C(t, n, e) {
      var r = h.exec(n.slice(e, e + 3));
      return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
    }
    function L(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.H = +r[0]), e + r[0].length) : -1;
    }
    function E(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.M = +r[0]), e + r[0].length) : -1;
    }
    function O(t, n, e) {
      var r = h.exec(n.slice(e, e + 2));
      return r ? ((t.S = +r[0]), e + r[0].length) : -1;
    }
    function j(t, n, e) {
      var r = h.exec(n.slice(e, e + 3));
      return r ? ((t.L = +r[0]), e + r[0].length) : -1;
    }
    function U(t, n, e) {
      var r = h.exec(n.slice(e, e + 6));
      return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function D(t, n, e) {
      var r = d.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }
    function P(t, n, e) {
      var r = h.exec(n.slice(e));
      return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
    }
    function R(t, n, e) {
      var r = h.exec(n.slice(e));
      return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1;
    }
    function Y(t, n) {
      return b(t.getDate(), n, 2);
    }
    function q(t, n) {
      return b(t.getHours(), n, 2);
    }
    function z(t, n) {
      return b(t.getHours() % 12 || 12, n, 2);
    }
    function I(t, n) {
      return b(1 + r.a.count(Object(r.k)(t), t), n, 3);
    }
    function F(t, n) {
      return b(t.getMilliseconds(), n, 3);
    }
    function H(t, n) {
      return F(t, n) + "000";
    }
    function B(t, n) {
      return b(t.getMonth() + 1, n, 2);
    }
    function X(t, n) {
      return b(t.getMinutes(), n, 2);
    }
    function V(t, n) {
      return b(t.getSeconds(), n, 2);
    }
    function W(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n;
    }
    function $(t, n) {
      return b(r.h.count(Object(r.k)(t), t), n, 2);
    }
    function Z(t, n) {
      var e = t.getDay();
      return (
        (t = e >= 4 || 0 === e ? Object(r.i)(t) : r.i.ceil(t)),
        b(r.i.count(Object(r.k)(t), t) + (4 === Object(r.k)(t).getDay()), n, 2)
      );
    }
    function Q(t) {
      return t.getDay();
    }
    function J(t, n) {
      return b(r.e.count(Object(r.k)(t), t), n, 2);
    }
    function G(t, n) {
      return b(t.getFullYear() % 100, n, 2);
    }
    function K(t, n) {
      return b(t.getFullYear() % 1e4, n, 4);
    }
    function tt(t) {
      var n = t.getTimezoneOffset();
      return (
        (n > 0 ? "-" : ((n *= -1), "+")) +
        b((n / 60) | 0, "0", 2) +
        b(n % 60, "0", 2)
      );
    }
    function nt(t, n) {
      return b(t.getUTCDate(), n, 2);
    }
    function et(t, n) {
      return b(t.getUTCHours(), n, 2);
    }
    function rt(t, n) {
      return b(t.getUTCHours() % 12 || 12, n, 2);
    }
    function it(t, n) {
      return b(1 + r.l.count(Object(r.v)(t), t), n, 3);
    }
    function at(t, n) {
      return b(t.getUTCMilliseconds(), n, 3);
    }
    function ot(t, n) {
      return at(t, n) + "000";
    }
    function ct(t, n) {
      return b(t.getUTCMonth() + 1, n, 2);
    }
    function ut(t, n) {
      return b(t.getUTCMinutes(), n, 2);
    }
    function ft(t, n) {
      return b(t.getUTCSeconds(), n, 2);
    }
    function st(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n;
    }
    function lt(t, n) {
      return b(r.s.count(Object(r.v)(t), t), n, 2);
    }
    function ht(t, n) {
      var e = t.getUTCDay();
      return (
        (t = e >= 4 || 0 === e ? Object(r.t)(t) : r.t.ceil(t)),
        b(
          r.t.count(Object(r.v)(t), t) + (4 === Object(r.v)(t).getUTCDay()),
          n,
          2
        )
      );
    }
    function dt(t) {
      return t.getUTCDay();
    }
    function pt(t, n) {
      return b(r.p.count(Object(r.v)(t), t), n, 2);
    }
    function bt(t, n) {
      return b(t.getUTCFullYear() % 100, n, 2);
    }
    function yt(t, n) {
      return b(t.getUTCFullYear() % 1e4, n, 4);
    }
    function _t() {
      return "+0000";
    }
    function gt() {
      return "%";
    }
    function vt(t) {
      return +t;
    }
    function mt(t) {
      return Math.floor(+t / 1e3);
    }
    (c = (function (t) {
      var n = t.dateTime,
        e = t.date,
        c = t.time,
        u = t.periods,
        f = t.days,
        s = t.shortDays,
        h = t.months,
        d = t.shortMonths,
        p = _(u),
        b = g(u),
        y = _(f),
        xt = g(f),
        wt = _(s),
        Mt = g(s),
        kt = _(h),
        Nt = g(h),
        At = _(d),
        St = g(d),
        Tt = {
          a: function (t) {
            return s[t.getDay()];
          },
          A: function (t) {
            return f[t.getDay()];
          },
          b: function (t) {
            return d[t.getMonth()];
          },
          B: function (t) {
            return h[t.getMonth()];
          },
          c: null,
          d: Y,
          e: Y,
          f: H,
          H: q,
          I: z,
          j: I,
          L: F,
          m: B,
          M: X,
          p: function (t) {
            return u[+(t.getHours() >= 12)];
          },
          Q: vt,
          s: mt,
          S: V,
          u: W,
          U: $,
          V: Z,
          w: Q,
          W: J,
          x: null,
          X: null,
          y: G,
          Y: K,
          Z: tt,
          "%": gt,
        },
        Ct = {
          a: function (t) {
            return s[t.getUTCDay()];
          },
          A: function (t) {
            return f[t.getUTCDay()];
          },
          b: function (t) {
            return d[t.getUTCMonth()];
          },
          B: function (t) {
            return h[t.getUTCMonth()];
          },
          c: null,
          d: nt,
          e: nt,
          f: ot,
          H: et,
          I: rt,
          j: it,
          L: at,
          m: ct,
          M: ut,
          p: function (t) {
            return u[+(t.getUTCHours() >= 12)];
          },
          Q: vt,
          s: mt,
          S: ft,
          u: st,
          U: lt,
          V: ht,
          w: dt,
          W: pt,
          x: null,
          X: null,
          y: bt,
          Y: yt,
          Z: _t,
          "%": gt,
        },
        Lt = {
          a: function (t, n, e) {
            var r = wt.exec(n.slice(e));
            return r ? ((t.w = Mt[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          A: function (t, n, e) {
            var r = y.exec(n.slice(e));
            return r ? ((t.w = xt[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          b: function (t, n, e) {
            var r = At.exec(n.slice(e));
            return r ? ((t.m = St[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          B: function (t, n, e) {
            var r = kt.exec(n.slice(e));
            return r ? ((t.m = Nt[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          c: function (t, e, r) {
            return jt(t, n, e, r);
          },
          d: T,
          e: T,
          f: U,
          H: L,
          I: L,
          j: C,
          L: j,
          m: S,
          M: E,
          p: function (t, n, e) {
            var r = p.exec(n.slice(e));
            return r ? ((t.p = b[r[0].toLowerCase()]), e + r[0].length) : -1;
          },
          Q: P,
          s: R,
          S: O,
          u: m,
          U: x,
          V: w,
          w: v,
          W: M,
          x: function (t, n, r) {
            return jt(t, e, n, r);
          },
          X: function (t, n, e) {
            return jt(t, c, n, e);
          },
          y: N,
          Y: k,
          Z: A,
          "%": D,
        };
      function Et(t, n) {
        return function (e) {
          var r,
            i,
            a,
            o = [],
            c = -1,
            u = 0,
            f = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++c < f; )
            37 === t.charCodeAt(c) &&
              (o.push(t.slice(u, c)),
              null != (i = l[(r = t.charAt(++c))])
                ? (r = t.charAt(++c))
                : (i = "e" === r ? " " : "0"),
              (a = n[r]) && (r = a(e, i)),
              o.push(r),
              (u = c + 1));
          return o.push(t.slice(u, c)), o.join("");
        };
      }
      function Ot(t, n) {
        return function (e) {
          var i,
            c,
            u = o(1900);
          if (jt(u, t, (e += ""), 0) != e.length) return null;
          if ("Q" in u) return new Date(u.Q);
          if (("p" in u && (u.H = (u.H % 12) + 12 * u.p), "V" in u)) {
            if (u.V < 1 || u.V > 53) return null;
            "w" in u || (u.w = 1),
              "Z" in u
                ? ((c = (i = a(o(u.y))).getUTCDay()),
                  (i = c > 4 || 0 === c ? r.p.ceil(i) : Object(r.p)(i)),
                  (i = r.l.offset(i, 7 * (u.V - 1))),
                  (u.y = i.getUTCFullYear()),
                  (u.m = i.getUTCMonth()),
                  (u.d = i.getUTCDate() + ((u.w + 6) % 7)))
                : ((c = (i = n(o(u.y))).getDay()),
                  (i = c > 4 || 0 === c ? r.e.ceil(i) : Object(r.e)(i)),
                  (i = r.a.offset(i, 7 * (u.V - 1))),
                  (u.y = i.getFullYear()),
                  (u.m = i.getMonth()),
                  (u.d = i.getDate() + ((u.w + 6) % 7)));
          } else
            ("W" in u || "U" in u) &&
              ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0),
              (c = "Z" in u ? a(o(u.y)).getUTCDay() : n(o(u.y)).getDay()),
              (u.m = 0),
              (u.d =
                "W" in u
                  ? ((u.w + 6) % 7) + 7 * u.W - ((c + 5) % 7)
                  : u.w + 7 * u.U - ((c + 6) % 7)));
          return "Z" in u
            ? ((u.H += (u.Z / 100) | 0), (u.M += u.Z % 100), a(u))
            : n(u);
        };
      }
      function jt(t, n, e, r) {
        for (var i, a, o = 0, c = n.length, u = e.length; o < c; ) {
          if (r >= u) return -1;
          if (37 === (i = n.charCodeAt(o++))) {
            if (
              ((i = n.charAt(o++)),
              !(a = Lt[i in l ? n.charAt(o++) : i]) || (r = a(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (Tt.x = Et(e, Tt)),
        (Tt.X = Et(c, Tt)),
        (Tt.c = Et(n, Tt)),
        (Ct.x = Et(e, Ct)),
        (Ct.X = Et(c, Ct)),
        (Ct.c = Et(n, Ct)),
        {
          format: function (t) {
            var n = Et((t += ""), Tt);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          parse: function (t) {
            var n = Ot((t += ""), i);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcFormat: function (t) {
            var n = Et((t += ""), Ct);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcParse: function (t) {
            var n = Ot(t, a);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
        }
      );
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    })),
      (u = c.format),
      c.parse,
      (f = c.utcFormat),
      (s = c.utcParse);
    Date.prototype.toISOString || f("%Y-%m-%dT%H:%M:%S.%LZ");
    +new Date("2000-01-01T00:00:00.000Z") || s("%Y-%m-%dT%H:%M:%S.%LZ");
    e.d(n, "a", function () {
      return u;
    }),
      e.d(n, "b", function () {
        return f;
      });
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    var r = e(1);
    function i(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(n).domain(t);
      }
      return this;
    }
    function a(t, n) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.interpolator(t);
          break;
        default:
          this.interpolator(n).domain(t);
      }
      return this;
    }
    var o = e(8),
      c = Array.prototype,
      u = c.map,
      f = c.slice,
      s = { name: "implicit" };
    function l() {
      var t = Object(o.a)(),
        n = [],
        e = [],
        r = s;
      function a(i) {
        var a = i + "",
          o = t.get(a);
        if (!o) {
          if (r !== s) return r;
          t.set(a, (o = n.push(i)));
        }
        return e[(o - 1) % e.length];
      }
      return (
        (a.domain = function (e) {
          if (!arguments.length) return n.slice();
          (n = []), (t = Object(o.a)());
          for (var r, i, c = -1, u = e.length; ++c < u; )
            t.has((i = (r = e[c]) + "")) || t.set(i, n.push(r));
          return a;
        }),
        (a.range = function (t) {
          return arguments.length ? ((e = f.call(t)), a) : e.slice();
        }),
        (a.unknown = function (t) {
          return arguments.length ? ((r = t), a) : r;
        }),
        (a.copy = function () {
          return l(n, e).unknown(r);
        }),
        i.apply(a, arguments),
        a
      );
    }
    function h() {
      var t,
        n,
        e = l().unknown(void 0),
        a = e.domain,
        o = e.range,
        c = [0, 1],
        u = !1,
        f = 0,
        s = 0,
        d = 0.5;
      function p() {
        var e = a().length,
          i = c[1] < c[0],
          l = c[i - 0],
          h = c[1 - i];
        (t = (h - l) / Math.max(1, e - f + 2 * s)),
          u && (t = Math.floor(t)),
          (l += (h - l - t * (e - f)) * d),
          (n = t * (1 - f)),
          u && ((l = Math.round(l)), (n = Math.round(n)));
        var p = Object(r.range)(e).map(function (n) {
          return l + t * n;
        });
        return o(i ? p.reverse() : p);
      }
      return (
        delete e.unknown,
        (e.domain = function (t) {
          return arguments.length ? (a(t), p()) : a();
        }),
        (e.range = function (t) {
          return arguments.length ? ((c = [+t[0], +t[1]]), p()) : c.slice();
        }),
        (e.rangeRound = function (t) {
          return (c = [+t[0], +t[1]]), (u = !0), p();
        }),
        (e.bandwidth = function () {
          return n;
        }),
        (e.step = function () {
          return t;
        }),
        (e.round = function (t) {
          return arguments.length ? ((u = !!t), p()) : u;
        }),
        (e.padding = function (t) {
          return arguments.length ? ((f = Math.min(1, (s = +t))), p()) : f;
        }),
        (e.paddingInner = function (t) {
          return arguments.length ? ((f = Math.min(1, t)), p()) : f;
        }),
        (e.paddingOuter = function (t) {
          return arguments.length ? ((s = +t), p()) : s;
        }),
        (e.align = function (t) {
          return arguments.length
            ? ((d = Math.max(0, Math.min(1, t))), p())
            : d;
        }),
        (e.copy = function () {
          return h(a(), c).round(u).paddingInner(f).paddingOuter(s).align(d);
        }),
        i.apply(p(), arguments)
      );
    }
    function d() {
      return (function t(n) {
        var e = n.copy;
        return (
          (n.padding = n.paddingOuter),
          delete n.paddingInner,
          delete n.paddingOuter,
          (n.copy = function () {
            return t(e());
          }),
          n
        );
      })(h.apply(null, arguments).paddingInner(1));
    }
    var p = e(4),
      b = function (t) {
        return function () {
          return t;
        };
      },
      y = function (t) {
        return +t;
      },
      _ = [0, 1];
    function g(t) {
      return t;
    }
    function v(t, n) {
      return (n -= t = +t)
        ? function (e) {
            return (e - t) / n;
          }
        : b(isNaN(n) ? NaN : 0.5);
    }
    function m(t) {
      var n,
        e = t[0],
        r = t[t.length - 1];
      return (
        e > r && ((n = e), (e = r), (r = n)),
        function (t) {
          return Math.max(e, Math.min(r, t));
        }
      );
    }
    function x(t, n, e) {
      var r = t[0],
        i = t[1],
        a = n[0],
        o = n[1];
      return (
        i < r ? ((r = v(i, r)), (a = e(o, a))) : ((r = v(r, i)), (a = e(a, o))),
        function (t) {
          return a(r(t));
        }
      );
    }
    function w(t, n, e) {
      var i = Math.min(t.length, n.length) - 1,
        a = new Array(i),
        o = new Array(i),
        c = -1;
      for (
        t[i] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
        ++c < i;

      )
        (a[c] = v(t[c], t[c + 1])), (o[c] = e(n[c], n[c + 1]));
      return function (n) {
        var e = Object(r.bisect)(t, n, 1, i) - 1;
        return o[e](a[e](n));
      };
    }
    function M(t, n) {
      return n
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function k() {
      var t,
        n,
        e,
        r,
        i,
        a,
        o = _,
        c = _,
        s = p.a,
        l = g;
      function h() {
        return (
          (r = Math.min(o.length, c.length) > 2 ? w : x), (i = a = null), d
        );
      }
      function d(n) {
        return isNaN((n = +n)) ? e : (i || (i = r(o.map(t), c, s)))(t(l(n)));
      }
      return (
        (d.invert = function (e) {
          return l(n((a || (a = r(c, o.map(t), p.c)))(e)));
        }),
        (d.domain = function (t) {
          return arguments.length
            ? ((o = u.call(t, y)), l === g || (l = m(o)), h())
            : o.slice();
        }),
        (d.range = function (t) {
          return arguments.length ? ((c = f.call(t)), h()) : c.slice();
        }),
        (d.rangeRound = function (t) {
          return (c = f.call(t)), (s = p.f), h();
        }),
        (d.clamp = function (t) {
          return arguments.length ? ((l = t ? m(o) : g), d) : l !== g;
        }),
        (d.interpolate = function (t) {
          return arguments.length ? ((s = t), h()) : s;
        }),
        (d.unknown = function (t) {
          return arguments.length ? ((e = t), d) : e;
        }),
        function (e, r) {
          return (t = e), (n = r), h();
        }
      );
    }
    function N(t, n) {
      return k()(t, n);
    }
    var A = e(6),
      S = function (t, n, e, i) {
        var a,
          o = Object(r.tickStep)(t, n, e);
        switch ((i = Object(A.c)(null == i ? ",f" : i)).type) {
          case "s":
            var c = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != i.precision ||
                isNaN((a = Object(A.e)(o, c))) ||
                (i.precision = a),
              Object(A.b)(i, c)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != i.precision ||
              isNaN((a = Object(A.f)(o, Math.max(Math.abs(t), Math.abs(n))))) ||
              (i.precision = a - ("e" === i.type));
            break;
          case "f":
          case "%":
            null != i.precision ||
              isNaN((a = Object(A.d)(o))) ||
              (i.precision = a - 2 * ("%" === i.type));
        }
        return Object(A.a)(i);
      };
    function T(t) {
      var n = t.domain;
      return (
        (t.ticks = function (t) {
          var e = n();
          return Object(r.ticks)(e[0], e[e.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function (t, e) {
          var r = n();
          return S(r[0], r[r.length - 1], null == t ? 10 : t, e);
        }),
        (t.nice = function (e) {
          null == e && (e = 10);
          var i,
            a = n(),
            o = 0,
            c = a.length - 1,
            u = a[o],
            f = a[c];
          return (
            f < u && ((i = u), (u = f), (f = i), (i = o), (o = c), (c = i)),
            (i = Object(r.tickIncrement)(u, f, e)) > 0
              ? ((u = Math.floor(u / i) * i),
                (f = Math.ceil(f / i) * i),
                (i = Object(r.tickIncrement)(u, f, e)))
              : i < 0 &&
                ((u = Math.ceil(u * i) / i),
                (f = Math.floor(f * i) / i),
                (i = Object(r.tickIncrement)(u, f, e))),
            i > 0
              ? ((a[o] = Math.floor(u / i) * i),
                (a[c] = Math.ceil(f / i) * i),
                n(a))
              : i < 0 &&
                ((a[o] = Math.ceil(u * i) / i),
                (a[c] = Math.floor(f * i) / i),
                n(a)),
            t
          );
        }),
        t
      );
    }
    function C() {
      var t = N(g, g);
      return (
        (t.copy = function () {
          return M(t, C());
        }),
        i.apply(t, arguments),
        T(t)
      );
    }
    function L(t) {
      var n;
      function e(t) {
        return isNaN((t = +t)) ? n : t;
      }
      return (
        (e.invert = e),
        (e.domain = e.range = function (n) {
          return arguments.length ? ((t = u.call(n, y)), e) : t.slice();
        }),
        (e.unknown = function (t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.copy = function () {
          return L(t).unknown(n);
        }),
        (t = arguments.length ? u.call(t, y) : [0, 1]),
        T(e)
      );
    }
    var E = function (t, n) {
      var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        a = t[r],
        o = t[i];
      return (
        o < a && ((e = r), (r = i), (i = e), (e = a), (a = o), (o = e)),
        (t[r] = n.floor(a)),
        (t[i] = n.ceil(o)),
        t
      );
    };
    function O(t) {
      return Math.log(t);
    }
    function j(t) {
      return Math.exp(t);
    }
    function U(t) {
      return -Math.log(-t);
    }
    function D(t) {
      return -Math.exp(-t);
    }
    function P(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }
    function R(t) {
      return function (n) {
        return -t(-n);
      };
    }
    function Y(t) {
      var n,
        e,
        i = t(O, j),
        a = i.domain,
        o = 10;
      function c() {
        return (
          (n = (function (t) {
            return t === Math.E
              ? Math.log
              : (10 === t && Math.log10) ||
                  (2 === t && Math.log2) ||
                  ((t = Math.log(t)),
                  function (n) {
                    return Math.log(n) / t;
                  });
          })(o)),
          (e = (function (t) {
            return 10 === t
              ? P
              : t === Math.E
              ? Math.exp
              : function (n) {
                  return Math.pow(t, n);
                };
          })(o)),
          a()[0] < 0 ? ((n = R(n)), (e = R(e)), t(U, D)) : t(O, j),
          i
        );
      }
      return (
        (i.base = function (t) {
          return arguments.length ? ((o = +t), c()) : o;
        }),
        (i.domain = function (t) {
          return arguments.length ? (a(t), c()) : a();
        }),
        (i.ticks = function (t) {
          var i,
            c = a(),
            u = c[0],
            f = c[c.length - 1];
          (i = f < u) && ((d = u), (u = f), (f = d));
          var s,
            l,
            h,
            d = n(u),
            p = n(f),
            b = null == t ? 10 : +t,
            y = [];
          if (!(o % 1) && p - d < b) {
            if (((d = Math.round(d) - 1), (p = Math.round(p) + 1), u > 0)) {
              for (; d < p; ++d)
                for (l = 1, s = e(d); l < o; ++l)
                  if (!((h = s * l) < u)) {
                    if (h > f) break;
                    y.push(h);
                  }
            } else
              for (; d < p; ++d)
                for (l = o - 1, s = e(d); l >= 1; --l)
                  if (!((h = s * l) < u)) {
                    if (h > f) break;
                    y.push(h);
                  }
          } else y = Object(r.ticks)(d, p, Math.min(p - d, b)).map(e);
          return i ? y.reverse() : y;
        }),
        (i.tickFormat = function (t, r) {
          if (
            (null == r && (r = 10 === o ? ".0e" : ","),
            "function" != typeof r && (r = Object(A.a)(r)),
            t === 1 / 0)
          )
            return r;
          null == t && (t = 10);
          var a = Math.max(1, (o * t) / i.ticks().length);
          return function (t) {
            var i = t / e(Math.round(n(t)));
            return i * o < o - 0.5 && (i *= o), i <= a ? r(t) : "";
          };
        }),
        (i.nice = function () {
          return a(
            E(a(), {
              floor: function (t) {
                return e(Math.floor(n(t)));
              },
              ceil: function (t) {
                return e(Math.ceil(n(t)));
              },
            })
          );
        }),
        i
      );
    }
    function q() {
      var t = Y(k()).domain([1, 10]);
      return (
        (t.copy = function () {
          return M(t, q()).base(t.base());
        }),
        i.apply(t, arguments),
        t
      );
    }
    function z(t) {
      return function (n) {
        return Math.sign(n) * Math.log1p(Math.abs(n / t));
      };
    }
    function I(t) {
      return function (n) {
        return Math.sign(n) * Math.expm1(Math.abs(n)) * t;
      };
    }
    function F(t) {
      var n = 1,
        e = t(z(n), I(n));
      return (
        (e.constant = function (e) {
          return arguments.length ? t(z((n = +e)), I(n)) : n;
        }),
        T(e)
      );
    }
    function H() {
      var t = F(k());
      return (
        (t.copy = function () {
          return M(t, H()).constant(t.constant());
        }),
        i.apply(t, arguments)
      );
    }
    function B(t) {
      return function (n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }
    function X(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }
    function V(t) {
      return t < 0 ? -t * t : t * t;
    }
    function W(t) {
      var n = t(g, g),
        e = 1;
      return (
        (n.exponent = function (n) {
          return arguments.length
            ? 1 === (e = +n)
              ? t(g, g)
              : 0.5 === e
              ? t(X, V)
              : t(B(e), B(1 / e))
            : e;
        }),
        T(n)
      );
    }
    function $() {
      var t = W(k());
      return (
        (t.copy = function () {
          return M(t, $()).exponent(t.exponent());
        }),
        i.apply(t, arguments),
        t
      );
    }
    function Z() {
      return $.apply(null, arguments).exponent(0.5);
    }
    function Q() {
      var t,
        n = [],
        e = [],
        a = [];
      function o() {
        var t = 0,
          i = Math.max(1, e.length);
        for (a = new Array(i - 1); ++t < i; )
          a[t - 1] = Object(r.quantile)(n, t / i);
        return c;
      }
      function c(n) {
        return isNaN((n = +n)) ? t : e[Object(r.bisect)(a, n)];
      }
      return (
        (c.invertExtent = function (t) {
          var r = e.indexOf(t);
          return r < 0
            ? [NaN, NaN]
            : [r > 0 ? a[r - 1] : n[0], r < a.length ? a[r] : n[n.length - 1]];
        }),
        (c.domain = function (t) {
          if (!arguments.length) return n.slice();
          n = [];
          for (var e, i = 0, a = t.length; i < a; ++i)
            null == (e = t[i]) || isNaN((e = +e)) || n.push(e);
          return n.sort(r.ascending), o();
        }),
        (c.range = function (t) {
          return arguments.length ? ((e = f.call(t)), o()) : e.slice();
        }),
        (c.unknown = function (n) {
          return arguments.length ? ((t = n), c) : t;
        }),
        (c.quantiles = function () {
          return a.slice();
        }),
        (c.copy = function () {
          return Q().domain(n).range(e).unknown(t);
        }),
        i.apply(c, arguments)
      );
    }
    function J() {
      var t,
        n = 0,
        e = 1,
        a = 1,
        o = [0.5],
        c = [0, 1];
      function u(n) {
        return n <= n ? c[Object(r.bisect)(o, n, 0, a)] : t;
      }
      function s() {
        var t = -1;
        for (o = new Array(a); ++t < a; )
          o[t] = ((t + 1) * e - (t - a) * n) / (a + 1);
        return u;
      }
      return (
        (u.domain = function (t) {
          return arguments.length ? ((n = +t[0]), (e = +t[1]), s()) : [n, e];
        }),
        (u.range = function (t) {
          return arguments.length
            ? ((a = (c = f.call(t)).length - 1), s())
            : c.slice();
        }),
        (u.invertExtent = function (t) {
          var r = c.indexOf(t);
          return r < 0
            ? [NaN, NaN]
            : r < 1
            ? [n, o[0]]
            : r >= a
            ? [o[a - 1], e]
            : [o[r - 1], o[r]];
        }),
        (u.unknown = function (n) {
          return arguments.length ? ((t = n), u) : u;
        }),
        (u.thresholds = function () {
          return o.slice();
        }),
        (u.copy = function () {
          return J().domain([n, e]).range(c).unknown(t);
        }),
        i.apply(T(u), arguments)
      );
    }
    function G() {
      var t,
        n = [0.5],
        e = [0, 1],
        a = 1;
      function o(i) {
        return i <= i ? e[Object(r.bisect)(n, i, 0, a)] : t;
      }
      return (
        (o.domain = function (t) {
          return arguments.length
            ? ((n = f.call(t)), (a = Math.min(n.length, e.length - 1)), o)
            : n.slice();
        }),
        (o.range = function (t) {
          return arguments.length
            ? ((e = f.call(t)), (a = Math.min(n.length, e.length - 1)), o)
            : e.slice();
        }),
        (o.invertExtent = function (t) {
          var r = e.indexOf(t);
          return [n[r - 1], n[r]];
        }),
        (o.unknown = function (n) {
          return arguments.length ? ((t = n), o) : t;
        }),
        (o.copy = function () {
          return G().domain(n).range(e).unknown(t);
        }),
        i.apply(o, arguments)
      );
    }
    var K = e(2),
      tt = e(10),
      nt = 1e3,
      et = 60 * nt,
      rt = 60 * et,
      it = 24 * rt,
      at = 7 * it,
      ot = 30 * it,
      ct = 365 * it;
    function ut(t) {
      return new Date(t);
    }
    function ft(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function st(t, n, e, i, a, o, c, f, s) {
      var l = N(g, g),
        h = l.invert,
        d = l.domain,
        p = s(".%L"),
        b = s(":%S"),
        y = s("%I:%M"),
        _ = s("%I %p"),
        v = s("%a %d"),
        m = s("%b %d"),
        x = s("%B"),
        w = s("%Y"),
        k = [
          [c, 1, nt],
          [c, 5, 5 * nt],
          [c, 15, 15 * nt],
          [c, 30, 30 * nt],
          [o, 1, et],
          [o, 5, 5 * et],
          [o, 15, 15 * et],
          [o, 30, 30 * et],
          [a, 1, rt],
          [a, 3, 3 * rt],
          [a, 6, 6 * rt],
          [a, 12, 12 * rt],
          [i, 1, it],
          [i, 2, 2 * it],
          [e, 1, at],
          [n, 1, ot],
          [n, 3, 3 * ot],
          [t, 1, ct],
        ];
      function A(r) {
        return (c(r) < r
          ? p
          : o(r) < r
          ? b
          : a(r) < r
          ? y
          : i(r) < r
          ? _
          : n(r) < r
          ? e(r) < r
            ? v
            : m
          : t(r) < r
          ? x
          : w)(r);
      }
      function S(n, e, i, a) {
        if ((null == n && (n = 10), "number" == typeof n)) {
          var o = Math.abs(i - e) / n,
            c = Object(r.bisector)(function (t) {
              return t[2];
            }).right(k, o);
          c === k.length
            ? ((a = Object(r.tickStep)(e / ct, i / ct, n)), (n = t))
            : c
            ? ((a = (c = k[o / k[c - 1][2] < k[c][2] / o ? c - 1 : c])[1]),
              (n = c[0]))
            : ((a = Math.max(Object(r.tickStep)(e, i, n), 1)), (n = f));
        }
        return null == a ? n : n.every(a);
      }
      return (
        (l.invert = function (t) {
          return new Date(h(t));
        }),
        (l.domain = function (t) {
          return arguments.length ? d(u.call(t, ft)) : d().map(ut);
        }),
        (l.ticks = function (t, n) {
          var e,
            r = d(),
            i = r[0],
            a = r[r.length - 1],
            o = a < i;
          return (
            o && ((e = i), (i = a), (a = e)),
            (e = (e = S(t, i, a, n)) ? e.range(i, a + 1) : []),
            o ? e.reverse() : e
          );
        }),
        (l.tickFormat = function (t, n) {
          return null == n ? A : s(n);
        }),
        (l.nice = function (t, n) {
          var e = d();
          return (t = S(t, e[0], e[e.length - 1], n)) ? d(E(e, t)) : l;
        }),
        (l.copy = function () {
          return M(l, st(t, n, e, i, a, o, c, f, s));
        }),
        l
      );
    }
    var lt = function () {
        return i.apply(
          st(K.k, K.f, K.j, K.a, K.b, K.d, K.g, K.c, tt.a).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      },
      ht = function () {
        return i.apply(
          st(K.v, K.q, K.u, K.l, K.m, K.o, K.r, K.n, tt.b).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      };
    function dt() {
      var t,
        n,
        e,
        r,
        i,
        a = 0,
        o = 1,
        c = g,
        u = !1;
      function f(n) {
        return isNaN((n = +n))
          ? i
          : c(
              0 === e
                ? 0.5
                : ((n = (r(n) - t) * e), u ? Math.max(0, Math.min(1, n)) : n)
            );
      }
      return (
        (f.domain = function (i) {
          return arguments.length
            ? ((t = r((a = +i[0]))),
              (n = r((o = +i[1]))),
              (e = t === n ? 0 : 1 / (n - t)),
              f)
            : [a, o];
        }),
        (f.clamp = function (t) {
          return arguments.length ? ((u = !!t), f) : u;
        }),
        (f.interpolator = function (t) {
          return arguments.length ? ((c = t), f) : c;
        }),
        (f.unknown = function (t) {
          return arguments.length ? ((i = t), f) : i;
        }),
        function (i) {
          return (
            (r = i), (t = i(a)), (n = i(o)), (e = t === n ? 0 : 1 / (n - t)), f
          );
        }
      );
    }
    function pt(t, n) {
      return n
        .domain(t.domain())
        .interpolator(t.interpolator())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function bt() {
      var t = T(dt()(g));
      return (
        (t.copy = function () {
          return pt(t, bt());
        }),
        a.apply(t, arguments)
      );
    }
    function yt() {
      var t = Y(dt()).domain([1, 10]);
      return (
        (t.copy = function () {
          return pt(t, yt()).base(t.base());
        }),
        a.apply(t, arguments)
      );
    }
    function _t() {
      var t = F(dt());
      return (
        (t.copy = function () {
          return pt(t, _t()).constant(t.constant());
        }),
        a.apply(t, arguments)
      );
    }
    function gt() {
      var t = W(dt());
      return (
        (t.copy = function () {
          return pt(t, gt()).exponent(t.exponent());
        }),
        a.apply(t, arguments)
      );
    }
    function vt() {
      return gt.apply(null, arguments).exponent(0.5);
    }
    function mt() {
      var t = [],
        n = g;
      function e(e) {
        if (!isNaN((e = +e)))
          return n((Object(r.bisect)(t, e) - 1) / (t.length - 1));
      }
      return (
        (e.domain = function (n) {
          if (!arguments.length) return t.slice();
          t = [];
          for (var i, a = 0, o = n.length; a < o; ++a)
            null == (i = n[a]) || isNaN((i = +i)) || t.push(i);
          return t.sort(r.ascending), e;
        }),
        (e.interpolator = function (t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.copy = function () {
          return mt(n).domain(t);
        }),
        a.apply(e, arguments)
      );
    }
    function xt() {
      var t,
        n,
        e,
        r,
        i,
        a,
        o,
        c = 0,
        u = 0.5,
        f = 1,
        s = g,
        l = !1;
      function h(t) {
        return isNaN((t = +t))
          ? o
          : ((t = 0.5 + ((t = +a(t)) - n) * (t < n ? r : i)),
            s(l ? Math.max(0, Math.min(1, t)) : t));
      }
      return (
        (h.domain = function (o) {
          return arguments.length
            ? ((t = a((c = +o[0]))),
              (n = a((u = +o[1]))),
              (e = a((f = +o[2]))),
              (r = t === n ? 0 : 0.5 / (n - t)),
              (i = n === e ? 0 : 0.5 / (e - n)),
              h)
            : [c, u, f];
        }),
        (h.clamp = function (t) {
          return arguments.length ? ((l = !!t), h) : l;
        }),
        (h.interpolator = function (t) {
          return arguments.length ? ((s = t), h) : s;
        }),
        (h.unknown = function (t) {
          return arguments.length ? ((o = t), h) : o;
        }),
        function (o) {
          return (
            (a = o),
            (t = o(c)),
            (n = o(u)),
            (e = o(f)),
            (r = t === n ? 0 : 0.5 / (n - t)),
            (i = n === e ? 0 : 0.5 / (e - n)),
            h
          );
        }
      );
    }
    function wt() {
      var t = T(xt()(g));
      return (
        (t.copy = function () {
          return pt(t, wt());
        }),
        a.apply(t, arguments)
      );
    }
    function Mt() {
      var t = Y(xt()).domain([0.1, 1, 10]);
      return (
        (t.copy = function () {
          return pt(t, Mt()).base(t.base());
        }),
        a.apply(t, arguments)
      );
    }
    function kt() {
      var t = F(xt());
      return (
        (t.copy = function () {
          return pt(t, kt()).constant(t.constant());
        }),
        a.apply(t, arguments)
      );
    }
    function Nt() {
      var t = W(xt());
      return (
        (t.copy = function () {
          return pt(t, Nt()).exponent(t.exponent());
        }),
        a.apply(t, arguments)
      );
    }
    function At() {
      return Nt.apply(null, arguments).exponent(0.5);
    }
    e.d(n, "scaleBand", function () {
      return h;
    }),
      e.d(n, "scalePoint", function () {
        return d;
      }),
      e.d(n, "scaleIdentity", function () {
        return L;
      }),
      e.d(n, "scaleLinear", function () {
        return C;
      }),
      e.d(n, "scaleLog", function () {
        return q;
      }),
      e.d(n, "scaleSymlog", function () {
        return H;
      }),
      e.d(n, "scaleOrdinal", function () {
        return l;
      }),
      e.d(n, "scaleImplicit", function () {
        return s;
      }),
      e.d(n, "scalePow", function () {
        return $;
      }),
      e.d(n, "scaleSqrt", function () {
        return Z;
      }),
      e.d(n, "scaleQuantile", function () {
        return Q;
      }),
      e.d(n, "scaleQuantize", function () {
        return J;
      }),
      e.d(n, "scaleThreshold", function () {
        return G;
      }),
      e.d(n, "scaleTime", function () {
        return lt;
      }),
      e.d(n, "scaleUtc", function () {
        return ht;
      }),
      e.d(n, "scaleSequential", function () {
        return bt;
      }),
      e.d(n, "scaleSequentialLog", function () {
        return yt;
      }),
      e.d(n, "scaleSequentialPow", function () {
        return gt;
      }),
      e.d(n, "scaleSequentialSqrt", function () {
        return vt;
      }),
      e.d(n, "scaleSequentialSymlog", function () {
        return _t;
      }),
      e.d(n, "scaleSequentialQuantile", function () {
        return mt;
      }),
      e.d(n, "scaleDiverging", function () {
        return wt;
      }),
      e.d(n, "scaleDivergingLog", function () {
        return Mt;
      }),
      e.d(n, "scaleDivergingPow", function () {
        return Nt;
      }),
      e.d(n, "scaleDivergingSqrt", function () {
        return At;
      }),
      e.d(n, "scaleDivergingSymlog", function () {
        return kt;
      }),
      e.d(n, "tickFormat", function () {
        return S;
      });
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    var r = Array.prototype.slice,
      i = function (t) {
        return t;
      },
      a = 1,
      o = 2,
      c = 3,
      u = 4,
      f = 1e-6;
    function s(t) {
      return "translate(" + (t + 0.5) + ",0)";
    }
    function l(t) {
      return "translate(0," + (t + 0.5) + ")";
    }
    function h() {
      return !this.__axis;
    }
    function d(t, n) {
      var e = [],
        d = null,
        p = null,
        b = 6,
        y = 6,
        _ = 3,
        g = t === a || t === u ? -1 : 1,
        v = t === u || t === o ? "x" : "y",
        m = t === a || t === c ? s : l;
      function x(r) {
        var s = null == d ? (n.ticks ? n.ticks.apply(n, e) : n.domain()) : d,
          l = null == p ? (n.tickFormat ? n.tickFormat.apply(n, e) : i) : p,
          x = Math.max(b, 0) + _,
          w = n.range(),
          M = +w[0] + 0.5,
          k = +w[w.length - 1] + 0.5,
          N = (n.bandwidth
            ? function (t) {
                var n = Math.max(0, t.bandwidth() - 1) / 2;
                return (
                  t.round() && (n = Math.round(n)),
                  function (e) {
                    return +t(e) + n;
                  }
                );
              }
            : function (t) {
                return function (n) {
                  return +t(n);
                };
              })(n.copy()),
          A = r.selection ? r.selection() : r,
          S = A.selectAll(".domain").data([null]),
          T = A.selectAll(".tick").data(s, n).order(),
          C = T.exit(),
          L = T.enter().append("g").attr("class", "tick"),
          E = T.select("line"),
          O = T.select("text");
        (S = S.merge(
          S.enter()
            .insert("path", ".tick")
            .attr("class", "domain")
            .attr("stroke", "currentColor")
        )),
          (T = T.merge(L)),
          (E = E.merge(
            L.append("line")
              .attr("stroke", "currentColor")
              .attr(v + "2", g * b)
          )),
          (O = O.merge(
            L.append("text")
              .attr("fill", "currentColor")
              .attr(v, g * x)
              .attr("dy", t === a ? "0em" : t === c ? "0.71em" : "0.32em")
          )),
          r !== A &&
            ((S = S.transition(r)),
            (T = T.transition(r)),
            (E = E.transition(r)),
            (O = O.transition(r)),
            (C = C.transition(r)
              .attr("opacity", f)
              .attr("transform", function (t) {
                return isFinite((t = N(t)))
                  ? m(t)
                  : this.getAttribute("transform");
              })),
            L.attr("opacity", f).attr("transform", function (t) {
              var n = this.parentNode.__axis;
              return m(n && isFinite((n = n(t))) ? n : N(t));
            })),
          C.remove(),
          S.attr(
            "d",
            t === u || t == o
              ? y
                ? "M" + g * y + "," + M + "H0.5V" + k + "H" + g * y
                : "M0.5," + M + "V" + k
              : y
              ? "M" + M + "," + g * y + "V0.5H" + k + "V" + g * y
              : "M" + M + ",0.5H" + k
          ),
          T.attr("opacity", 1).attr("transform", function (t) {
            return m(N(t));
          }),
          E.attr(v + "2", g * b),
          O.attr(v, g * x).text(l),
          A.filter(h)
            .attr("fill", "none")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr(
              "text-anchor",
              t === o ? "start" : t === u ? "end" : "middle"
            ),
          A.each(function () {
            this.__axis = N;
          });
      }
      return (
        (x.scale = function (t) {
          return arguments.length ? ((n = t), x) : n;
        }),
        (x.ticks = function () {
          return (e = r.call(arguments)), x;
        }),
        (x.tickArguments = function (t) {
          return arguments.length
            ? ((e = null == t ? [] : r.call(t)), x)
            : e.slice();
        }),
        (x.tickValues = function (t) {
          return arguments.length
            ? ((d = null == t ? null : r.call(t)), x)
            : d && d.slice();
        }),
        (x.tickFormat = function (t) {
          return arguments.length ? ((p = t), x) : p;
        }),
        (x.tickSize = function (t) {
          return arguments.length ? ((b = y = +t), x) : b;
        }),
        (x.tickSizeInner = function (t) {
          return arguments.length ? ((b = +t), x) : b;
        }),
        (x.tickSizeOuter = function (t) {
          return arguments.length ? ((y = +t), x) : y;
        }),
        (x.tickPadding = function (t) {
          return arguments.length ? ((_ = +t), x) : _;
        }),
        x
      );
    }
    function p(t) {
      return d(a, t);
    }
    function b(t) {
      return d(o, t);
    }
    function y(t) {
      return d(c, t);
    }
    function _(t) {
      return d(u, t);
    }
    e.d(n, "axisTop", function () {
      return p;
    }),
      e.d(n, "axisRight", function () {
        return b;
      }),
      e.d(n, "axisBottom", function () {
        return y;
      }),
      e.d(n, "axisLeft", function () {
        return _;
      });
  },
  function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var e = (function (t, n) {
              var e = t[1] || "",
                r = t[3];
              if (!r) return e;
              if (n && "function" == typeof btoa) {
                var i =
                    ((o = r),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                      " */"),
                  a = r.sources.map(function (t) {
                    return "/*# sourceURL=" + r.sourceRoot + t + " */";
                  });
                return [e].concat(a).concat([i]).join("\n");
              }
              var o;
              return [e].join("\n");
            })(n, t);
            return n[2] ? "@media " + n[2] + "{" + e + "}" : e;
          }).join("");
        }),
        (n.i = function (t, e) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var a = this[i][0];
            null != a && (r[a] = !0);
          }
          for (i = 0; i < t.length; i++) {
            var o = t[i];
            (null != o[0] && r[o[0]]) ||
              (e && !o[2]
                ? (o[2] = e)
                : e && (o[2] = "(" + o[2] + ") and (" + e + ")"),
              n.push(o));
          }
        }),
        n
      );
    };
  },
  function (t, n, e) {
    var r, i, a, o;
    function c(t) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    (o = function (t, n, e, r, i, a, o, c) {
      "use strict";
      var u = 200;
      (t.sliderHorizontal = function () {
        return (function () {
          var t = 0,
            f = 0,
            s = [0, 10],
            l = 100,
            h = !0,
            d = "M-5.5,-5.5v10l6,5.5l6,-5.5v-10z",
            p = null,
            b = null,
            y = null,
            _ = null,
            g = null,
            v = r.dispatch("onchange", "start", "end", "drag"),
            m = null,
            x = null,
            w = null;
          function M(n) {
            (m = n.selection ? n.selection() : n),
              (x = (x = s[0] instanceof Date ? o.scaleTime() : o.scaleLinear())
                .domain(s)
                .range([0, l])
                .clamp(!0)),
              (w = o
                .scaleLinear()
                .range(x.range())
                .domain(x.range())
                .clamp(!0)),
              (t = o.scaleLinear().range(s).domain(s).clamp(!0)(t)),
              (_ = _ || x.tickFormat()),
              m
                .selectAll(".axis")
                .data([null])
                .enter()
                .append("g")
                .attr("transform", "translate(0,7)")
                .attr("class", "axis");
            var r = m.selectAll(".slider").data([null]),
              a = r
                .enter()
                .append("g")
                .attr("class", "slider")
                .attr("cursor", "ew-resize")
                .attr("transform", "translate(0,0)")
                .call(
                  i
                    .drag()
                    .on("start", function () {
                      c.select(this).classed("active", !0);
                      var t = w(c.event.x),
                        n = N(x.invert(t));
                      S(n), v.call("start", r, n), A(n);
                    })
                    .on("drag", function () {
                      var t = w(c.event.x),
                        n = N(x.invert(t));
                      S(n), v.call("drag", r, n), A(n);
                    })
                    .on("end", function () {
                      c.select(this).classed("active", !1);
                      var t = w(c.event.x),
                        n = N(x.invert(t));
                      S(n), v.call("end", r, n), A(n);
                    })
                );
            a
              .append("line")
              .attr("class", "track")
              .attr("x1", 0)
              .attr("y1", 0)
              .attr("y2", 0)
              .attr("stroke", "#bbb")
              .attr("stroke-width", 6)
              .attr("stroke-linecap", "round"),
              a
                .append("line")
                .attr("class", "track-inset")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("y2", 0)
                .attr("stroke", "#eee")
                .attr("stroke-width", 4)
                .attr("stroke-linecap", "round"),
              a
                .append("line")
                .attr("class", "track-overlay")
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("y2", 0)
                .attr("stroke", "transparent")
                .attr("stroke-width", 40)
                .attr("stroke-linecap", "round")
                .merge(r.select(".track-overlay"));
            var u = a
              .append("g")
              .attr("class", "parameter-value")
              .attr("transform", "translate(" + x(t) + ",0)")
              .attr("font-family", "sans-serif")
              .attr("text-anchor", "middle");
            u
              .append("path")
              .attr("d", d)
              .attr("fill", "white")
              .attr("stroke", "#777"),
              h &&
                u
                  .append("text")
                  .attr("font-size", 30)
                  .attr("y", 27)
                  .attr("dy", ".71em")
                  .text(_(t)),
              n.select(".track").attr("x2", x.range()[1]),
              n.select(".track-inset").attr("x2", x.range()[1]),
              n.select(".track-overlay").attr("x2", x.range()[1]),
              n
                .select(".axis")
                .call(e.axisBottom(x).tickFormat(_).ticks(g).tickValues(b)),
              m.select(".axis").select(".domain").remove(),
              n.select(".axis").attr("transform", "translate(0,7)"),
              n
                .selectAll(".axis text")
                .attr("fill", "#aaa")
                .attr("y", 20)
                .attr("dy", ".71em")
                .attr("text-anchor", "middle"),
              n.selectAll(".axis line").attr("stroke", "#aaa"),
              n
                .select(".parameter-value")
                .attr("transform", "translate(" + x(t) + ",0)"),
              k();
          }
          function k() {
            if (h) {
              var e = [];
              m.selectAll(".axis .tick").each(function (n) {
                e.push(Math.abs(n - t));
              });
              var r = n.scan(e);
              m.selectAll(".axis .tick text").attr("opacity", function (t, n) {
                return n === r ? 0 : 1;
              });
            }
          }
          function N(t) {
            if (p) {
              var e = (t - s[0]) % p,
                r = t - e;
              return 2 * e > p && (r += p), t instanceof Date ? new Date(r) : r;
            }
            if (y) {
              var i = n.scan(
                y.map(function (n) {
                  return Math.abs(t - n);
                })
              );
              return y[i];
            }
            return t;
          }
          function A(n) {
            t !== n && ((t = n), v.call("onchange", M, n), k());
          }
          function S(t, n) {
            n = void 0 !== n && n;
            var e = m.select(".parameter-value");
            n && (e = e.transition().ease(a.easeQuadOut).duration(u)),
              e.attr("transform", "translate(" + x(t) + ",0)"),
              h && m.select(".parameter-value text").text(_(t));
          }
          return (
            (M.min = function (t) {
              return arguments.length ? ((s[0] = t), M) : s[0];
            }),
            (M.max = function (t) {
              return arguments.length ? ((s[1] = t), M) : s[1];
            }),
            (M.domain = function (t) {
              return arguments.length ? ((s = t), M) : s;
            }),
            (M.width = function (t) {
              return arguments.length ? ((l = t), M) : l;
            }),
            (M.tickFormat = function (t) {
              return arguments.length ? ((_ = t), M) : _;
            }),
            (M.ticks = function (t) {
              return arguments.length ? ((g = t), M) : g;
            }),
            (M.value = function (n) {
              if (!arguments.length) return t;
              var e = w(x(n)),
                r = N(x.invert(e));
              return S(r, !0), A(r), M;
            }),
            (M.default = function (n) {
              return arguments.length ? ((f = n), (t = n), M) : f;
            }),
            (M.step = function (t) {
              return arguments.length ? ((p = t), M) : p;
            }),
            (M.tickValues = function (t) {
              return arguments.length ? ((b = t), M) : b;
            }),
            (M.marks = function (t) {
              return arguments.length ? ((y = t), M) : y;
            }),
            (M.handle = function (t) {
              return arguments.length ? ((d = t), M) : d;
            }),
            (M.displayValue = function (t) {
              return arguments.length ? ((h = t), M) : h;
            }),
            (M.on = function () {
              var t = v.on.apply(v, arguments);
              return t === v ? M : t;
            }),
            M
          );
        })();
      }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
      "object" === c(n) && void 0 !== t
        ? o(n, e(1), e(12), e(5), e(7), e(9), e(11), e(0))
        : ((i = [n, e(1), e(12), e(5), e(7), e(9), e(11), e(0)]),
          void 0 === (a = "function" == typeof (r = o) ? r.apply(n, i) : r) ||
            (t.exports = a));
  },
  function (t, n, e) {
    var r = e(16);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    e(18)(r, i);
    r.locals && (t.exports = r.locals);
  },
  function (t, n, e) {
    (n = t.exports = e(13)(!1)).i(e(17), ""),
      n.push([
        t.i,
        "body {\n  font-family: 'Roboto', sans-serif;\n  background: #d2dce6; }\n\nheader {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  background: white;\n  padding: 10px 0; }\n  header > h1 {\n    font-size: 28px; }\n  header > a {\n    position: absolute;\n    left: 10px;\n    padding: 10px; }\n\n.links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background: white;\n  width: 100%;\n  bottom: 0;\n  height: 5vh; }\n  .links > * {\n    padding: 5px;\n    margin-right: 60px; }\n  .links::last-child {\n    margin-right: 0; }\n\nfooter > a {\n  position: fixed;\n  bottom: 0;\n  font-size: 1px;\n  color: white; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.instructions {\n  padding: 8px;\n  background: white;\n  border-radius: 5px;\n  margin: 5px 0; }\n  .instructions h1 {\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 5px; }\n  .instructions ul {\n    font-weight: 300;\n    display: flex;\n    flex-direction: column; }\n  .instructions li {\n    font-size: 16px;\n    margin-left: 22px;\n    margin-bottom: 5px;\n    list-style-type: square; }\n    .instructions li:last-child {\n      margin-bottom: 0; }\n\na:hover {\n  outline: lightblue solid 2px; }\n\n#visualization-container {\n  background: white;\n  width: 90vw;\n  height: auto;\n  margin: 10px 0 50px 0; }\n\np {\n  fill: black; }\n\n#line {\n  fill: none;\n  stroke: black;\n  stroke-width: 3; }\n\n.bar-labels {\n  font-size: 16;\n  font-weight: bold;\n  text-anchor: middle; }\n\n.line {\n  fill: none;\n  stroke-width: 3px;\n  opacity: .3; }\n\n.thisYearLine line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 1;\n  opacity: 0.5; }\n\n.revAxis,\n.spendAxis {\n  font-size: 12px;\n  font-weight: bold; }\n  .revAxis .domain,\n  .spendAxis .domain {\n    opacity: 0; }\n\n.thisYearLine text {\n  font-size: 14px;\n  text-anchor: middle;\n  font-weight: bold;\n  opacity: 0; }\n\n.lineNode path {\n  opacity: 0.2; }\n\n.lineTitle {\n  font-size: 20px;\n  font-weight: bold;\n  text-anchor: middle; }\n\n.lineLabel {\n  text-anchor: middle;\n  font-size: 14px;\n  fill: black;\n  font-weight: bold; }\n\n.node rect {\n  fill-opacity: .9;\n  shape-rendering: crispEdges; }\n\n.node text {\n  pointer-events: none;\n  text-shadow: 0px 0px 2px #fff;\n  font-weight: 1000; }\n\n.link {\n  fill: none;\n  stroke: #000;\n  stroke-opacity: .4; }\n\n.nodeRect {\n  fill: lightgray;\n  opacity: 0.5;\n  stroke: black; }\n\n.nodePercent {\n  text-anchor: middle;\n  font-size: 16px; }\n\n.percent {\n  font-size: 20px;\n  font-weight: bold; }\n\n.deficitLabel {\n  text-anchor: middle;\n  font-size: 28px;\n  font-weight: bold; }\n",
        "",
      ]);
  },
  function (t, n, e) {
    (t.exports = e(13)(!1)).push([
      t.i,
      "html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nselect,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: inherit;\n  font: inherit;\n  vertical-align: baseline;\n  text-decoration: none;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nselect,\ninput,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\ninput,\ntextarea,\nselect,\na {\n  border-width: inherit;\n  outline: none;\n}",
      "",
    ]);
  },
  function (t, n, e) {
    var r,
      i,
      a = {},
      o =
        ((r = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === i && (i = r.apply(this, arguments)), i;
        }),
      c = (function (t) {
        var n = {};
        return function (t, e) {
          if ("function" == typeof t) return t();
          if (void 0 === n[t]) {
            var r = function (t, n) {
              return n ? n.querySelector(t) : document.querySelector(t);
            }.call(this, t, e);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (t) {
                r = null;
              }
            n[t] = r;
          }
          return n[t];
        };
      })(),
      u = null,
      f = 0,
      s = [],
      l = e(19);
    function h(t, n) {
      for (var e = 0; e < t.length; e++) {
        var r = t[e],
          i = a[r.id];
        if (i) {
          i.refs++;
          for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]);
          for (; o < r.parts.length; o++) i.parts.push(g(r.parts[o], n));
        } else {
          var c = [];
          for (o = 0; o < r.parts.length; o++) c.push(g(r.parts[o], n));
          a[r.id] = { id: r.id, refs: 1, parts: c };
        }
      }
    }
    function d(t, n) {
      for (var e = [], r = {}, i = 0; i < t.length; i++) {
        var a = t[i],
          o = n.base ? a[0] + n.base : a[0],
          c = { css: a[1], media: a[2], sourceMap: a[3] };
        r[o] ? r[o].parts.push(c) : e.push((r[o] = { id: o, parts: [c] }));
      }
      return e;
    }
    function p(t, n) {
      var e = c(t.insertInto);
      if (!e)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = s[s.length - 1];
      if ("top" === t.insertAt)
        r
          ? r.nextSibling
            ? e.insertBefore(n, r.nextSibling)
            : e.appendChild(n)
          : e.insertBefore(n, e.firstChild),
          s.push(n);
      else if ("bottom" === t.insertAt) e.appendChild(n);
      else {
        if ("object" != typeof t.insertAt || !t.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var i = c(t.insertAt.before, e);
        e.insertBefore(n, i);
      }
    }
    function b(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var n = s.indexOf(t);
      n >= 0 && s.splice(n, 1);
    }
    function y(t) {
      var n = document.createElement("style");
      if (
        (void 0 === t.attrs.type && (t.attrs.type = "text/css"),
        void 0 === t.attrs.nonce)
      ) {
        var r = (function () {
          0;
          return e.nc;
        })();
        r && (t.attrs.nonce = r);
      }
      return _(n, t.attrs), p(t, n), n;
    }
    function _(t, n) {
      Object.keys(n).forEach(function (e) {
        t.setAttribute(e, n[e]);
      });
    }
    function g(t, n) {
      var e, r, i, a;
      if (n.transform && t.css) {
        if (
          !(a =
            "function" == typeof n.transform
              ? n.transform(t.css)
              : n.transform.default(t.css))
        )
          return function () {};
        t.css = a;
      }
      if (n.singleton) {
        var o = f++;
        (e = u || (u = y(n))),
          (r = x.bind(null, e, o, !1)),
          (i = x.bind(null, e, o, !0));
      } else
        t.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((e = (function (t) {
              var n = document.createElement("link");
              return (
                void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                (t.attrs.rel = "stylesheet"),
                _(n, t.attrs),
                p(t, n),
                n
              );
            })(n)),
            (r = function (t, n, e) {
              var r = e.css,
                i = e.sourceMap,
                a = void 0 === n.convertToAbsoluteUrls && i;
              (n.convertToAbsoluteUrls || a) && (r = l(r));
              i &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                  " */");
              var o = new Blob([r], { type: "text/css" }),
                c = t.href;
              (t.href = URL.createObjectURL(o)), c && URL.revokeObjectURL(c);
            }.bind(null, e, n)),
            (i = function () {
              b(e), e.href && URL.revokeObjectURL(e.href);
            }))
          : ((e = y(n)),
            (r = function (t, n) {
              var e = n.css,
                r = n.media;
              r && t.setAttribute("media", r);
              if (t.styleSheet) t.styleSheet.cssText = e;
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e));
              }
            }.bind(null, e)),
            (i = function () {
              b(e);
            }));
      return (
        r(t),
        function (n) {
          if (n) {
            if (
              n.css === t.css &&
              n.media === t.media &&
              n.sourceMap === t.sourceMap
            )
              return;
            r((t = n));
          } else i();
        }
      );
    }
    t.exports = function (t, n) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}),
        n.singleton || "boolean" == typeof n.singleton || (n.singleton = o()),
        n.insertInto || (n.insertInto = "head"),
        n.insertAt || (n.insertAt = "bottom");
      var e = d(t, n);
      return (
        h(e, n),
        function (t) {
          for (var r = [], i = 0; i < e.length; i++) {
            var o = e[i];
            (c = a[o.id]).refs--, r.push(c);
          }
          t && h(d(t, n), n);
          for (i = 0; i < r.length; i++) {
            var c;
            if (0 === (c = r[i]).refs) {
              for (var u = 0; u < c.parts.length; u++) c.parts[u]();
              delete a[c.id];
            }
          }
        }
      );
    };
    var v,
      m =
        ((v = []),
        function (t, n) {
          return (v[t] = n), v.filter(Boolean).join("\n");
        });
    function x(t, n, e, r) {
      var i = e ? "" : r.css;
      if (t.styleSheet) t.styleSheet.cssText = m(n, i);
      else {
        var a = document.createTextNode(i),
          o = t.childNodes;
        o[n] && t.removeChild(o[n]),
          o.length ? t.insertBefore(a, o[n]) : t.appendChild(a);
      }
    }
  },
  function (t, n) {
    t.exports = function (t) {
      var n = "undefined" != typeof window && window.location;
      if (!n) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var e = n.protocol + "//" + n.host,
        r = e + n.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (t, n) {
          var i,
            a = n
              .trim()
              .replace(/^"(.*)"$/, function (t, n) {
                return n;
              })
              .replace(/^'(.*)'$/, function (t, n) {
                return n;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
            ? t
            : ((i =
                0 === a.indexOf("//")
                  ? a
                  : 0 === a.indexOf("/")
                  ? e + a
                  : r + a.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")");
        }
      );
    };
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    e(15);
    var r,
      i,
      a = e(1),
      o = e(12),
      c = e(5),
      u = (e(7), e(4)),
      f = e(0),
      s = 0,
      l = 0,
      h = 0,
      d = 1e3,
      p = 0,
      b = 0,
      y = 0,
      _ =
        "object" == typeof performance && performance.now ? performance : Date,
      g =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17);
            };
    function v() {
      return b || (g(m), (b = _.now() + y));
    }
    function m() {
      b = 0;
    }
    function x() {
      this._call = this._time = this._next = null;
    }
    function w(t, n, e) {
      var r = new x();
      return r.restart(t, n, e), r;
    }
    function M() {
      (b = (p = _.now()) + y), (s = l = 0);
      try {
        !(function () {
          v(), ++s;
          for (var t, n = r; n; )
            (t = b - n._time) >= 0 && n._call.call(null, t), (n = n._next);
          --s;
        })();
      } finally {
        (s = 0),
          (function () {
            var t,
              n,
              e = r,
              a = 1 / 0;
            for (; e; )
              e._call
                ? (a > e._time && (a = e._time), (t = e), (e = e._next))
                : ((n = e._next),
                  (e._next = null),
                  (e = t ? (t._next = n) : (r = n)));
            (i = t), N(a);
          })(),
          (b = 0);
      }
    }
    function k() {
      var t = _.now(),
        n = t - p;
      n > d && ((y -= n), (p = t));
    }
    function N(t) {
      s ||
        (l && (l = clearTimeout(l)),
        t - b > 24
          ? (t < 1 / 0 && (l = setTimeout(M, t - _.now() - y)),
            h && (h = clearInterval(h)))
          : (h || ((p = _.now()), (h = setInterval(k, d))), (s = 1), g(M)));
    }
    x.prototype = w.prototype = {
      constructor: x,
      restart: function (t, n, e) {
        if ("function" != typeof t)
          throw new TypeError("callback is not a function");
        (e = (null == e ? v() : +e) + (null == n ? 0 : +n)),
          this._next ||
            i === this ||
            (i ? (i._next = this) : (r = this), (i = this)),
          (this._call = t),
          (this._time = e),
          N();
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), N());
      },
    };
    var A = function (t, n, e) {
        var r = new x();
        return (
          (n = null == n ? 0 : +n),
          r.restart(
            function (e) {
              r.stop(), t(e + n);
            },
            n,
            e
          ),
          r
        );
      },
      S = Object(c.dispatch)("start", "end", "cancel", "interrupt"),
      T = [],
      C = 0,
      L = 1,
      E = 2,
      O = 3,
      j = 4,
      U = 5,
      D = 6,
      P = function (t, n, e, r, i, a) {
        var o = t.__transition;
        if (o) {
          if (e in o) return;
        } else t.__transition = {};
        !(function (t, n, e) {
          var r,
            i = t.__transition;
          function a(u) {
            var f, s, l, h;
            if (e.state !== L) return c();
            for (f in i)
              if ((h = i[f]).name === e.name) {
                if (h.state === O) return A(a);
                h.state === j
                  ? ((h.state = D),
                    h.timer.stop(),
                    h.on.call("interrupt", t, t.__data__, h.index, h.group),
                    delete i[f])
                  : +f < n &&
                    ((h.state = D),
                    h.timer.stop(),
                    h.on.call("cancel", t, t.__data__, h.index, h.group),
                    delete i[f]);
              }
            if (
              (A(function () {
                e.state === O &&
                  ((e.state = j), e.timer.restart(o, e.delay, e.time), o(u));
              }),
              (e.state = E),
              e.on.call("start", t, t.__data__, e.index, e.group),
              e.state === E)
            ) {
              for (
                e.state = O, r = new Array((l = e.tween.length)), f = 0, s = -1;
                f < l;
                ++f
              )
                (h = e.tween[f].value.call(t, t.__data__, e.index, e.group)) &&
                  (r[++s] = h);
              r.length = s + 1;
            }
          }
          function o(n) {
            for (
              var i =
                  n < e.duration
                    ? e.ease.call(null, n / e.duration)
                    : (e.timer.restart(c), (e.state = U), 1),
                a = -1,
                o = r.length;
              ++a < o;

            )
              r[a].call(t, i);
            e.state === U &&
              (e.on.call("end", t, t.__data__, e.index, e.group), c());
          }
          function c() {
            for (var r in ((e.state = D), e.timer.stop(), delete i[n], i))
              return;
            delete t.__transition;
          }
          (i[n] = e),
            (e.timer = w(
              function (t) {
                (e.state = L),
                  e.timer.restart(a, e.delay, e.time),
                  e.delay <= t && a(t - e.delay);
              },
              0,
              e.time
            ));
        })(t, e, {
          name: n,
          index: r,
          group: i,
          on: S,
          tween: T,
          time: a.time,
          delay: a.delay,
          duration: a.duration,
          ease: a.ease,
          timer: null,
          state: C,
        });
      };
    function R(t, n) {
      var e = q(t, n);
      if (e.state > C) throw new Error("too late; already scheduled");
      return e;
    }
    function Y(t, n) {
      var e = q(t, n);
      if (e.state > O) throw new Error("too late; already running");
      return e;
    }
    function q(t, n) {
      var e = t.__transition;
      if (!e || !(e = e[n])) throw new Error("transition not found");
      return e;
    }
    var z = function (t, n) {
      var e,
        r,
        i,
        a = t.__transition,
        o = !0;
      if (a) {
        for (i in ((n = null == n ? null : n + ""), a))
          (e = a[i]).name === n
            ? ((r = e.state > E && e.state < U),
              (e.state = D),
              e.timer.stop(),
              e.on.call(
                r ? "interrupt" : "cancel",
                t,
                t.__data__,
                e.index,
                e.group
              ),
              delete a[i])
            : (o = !1);
        o && delete t.__transition;
      }
    };
    function I(t, n, e) {
      var r = t._id;
      return (
        t.each(function () {
          var t = Y(this, r);
          (t.value || (t.value = {}))[n] = e.apply(this, arguments);
        }),
        function (t) {
          return q(t, r).value[n];
        }
      );
    }
    var F = e(3),
      H = function (t, n) {
        var e;
        return ("number" == typeof n
          ? u.c
          : n instanceof F.a
          ? u.d
          : (e = Object(F.a)(n))
          ? ((n = e), u.d)
          : u.g)(t, n);
      };
    var B = f.selection.prototype.constructor;
    function X(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    var V = 0;
    function W(t, n, e, r) {
      (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
    }
    function $() {
      return ++V;
    }
    var Z = f.selection.prototype;
    W.prototype = function (t) {
      return Object(f.selection)().transition(t);
    }.prototype = {
      constructor: W,
      select: function (t) {
        var n = this._name,
          e = this._id;
        "function" != typeof t && (t = Object(f.selector)(t));
        for (
          var r = this._groups, i = r.length, a = new Array(i), o = 0;
          o < i;
          ++o
        )
          for (
            var c, u, s = r[o], l = s.length, h = (a[o] = new Array(l)), d = 0;
            d < l;
            ++d
          )
            (c = s[d]) &&
              (u = t.call(c, c.__data__, d, s)) &&
              ("__data__" in c && (u.__data__ = c.__data__),
              (h[d] = u),
              P(h[d], n, e, d, h, q(c, e)));
        return new W(a, this._parents, n, e);
      },
      selectAll: function (t) {
        var n = this._name,
          e = this._id;
        "function" != typeof t && (t = Object(f.selectorAll)(t));
        for (
          var r = this._groups, i = r.length, a = [], o = [], c = 0;
          c < i;
          ++c
        )
          for (var u, s = r[c], l = s.length, h = 0; h < l; ++h)
            if ((u = s[h])) {
              for (
                var d,
                  p = t.call(u, u.__data__, h, s),
                  b = q(u, e),
                  y = 0,
                  _ = p.length;
                y < _;
                ++y
              )
                (d = p[y]) && P(d, n, e, y, p, b);
              a.push(p), o.push(u);
            }
        return new W(a, o, n, e);
      },
      filter: function (t) {
        "function" != typeof t && (t = Object(f.matcher)(t));
        for (
          var n = this._groups, e = n.length, r = new Array(e), i = 0;
          i < e;
          ++i
        )
          for (
            var a, o = n[i], c = o.length, u = (r[i] = []), s = 0;
            s < c;
            ++s
          )
            (a = o[s]) && t.call(a, a.__data__, s, o) && u.push(a);
        return new W(r, this._parents, this._name, this._id);
      },
      merge: function (t) {
        if (t._id !== this._id) throw new Error();
        for (
          var n = this._groups,
            e = t._groups,
            r = n.length,
            i = e.length,
            a = Math.min(r, i),
            o = new Array(r),
            c = 0;
          c < a;
          ++c
        )
          for (
            var u,
              f = n[c],
              s = e[c],
              l = f.length,
              h = (o[c] = new Array(l)),
              d = 0;
            d < l;
            ++d
          )
            (u = f[d] || s[d]) && (h[d] = u);
        for (; c < r; ++c) o[c] = n[c];
        return new W(o, this._parents, this._name, this._id);
      },
      selection: function () {
        return new B(this._groups, this._parents);
      },
      transition: function () {
        for (
          var t = this._name,
            n = this._id,
            e = $(),
            r = this._groups,
            i = r.length,
            a = 0;
          a < i;
          ++a
        )
          for (var o, c = r[a], u = c.length, f = 0; f < u; ++f)
            if ((o = c[f])) {
              var s = q(o, n);
              P(o, t, e, f, c, {
                time: s.time + s.delay + s.duration,
                delay: 0,
                duration: s.duration,
                ease: s.ease,
              });
            }
        return new W(r, this._parents, t, e);
      },
      call: Z.call,
      nodes: Z.nodes,
      node: Z.node,
      size: Z.size,
      empty: Z.empty,
      each: Z.each,
      on: function (t, n) {
        var e = this._id;
        return arguments.length < 2
          ? q(this.node(), e).on.on(t)
          : this.each(
              (function (t, n, e) {
                var r,
                  i,
                  a = (function (t) {
                    return (t + "")
                      .trim()
                      .split(/^|\s+/)
                      .every(function (t) {
                        var n = t.indexOf(".");
                        return (
                          n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                        );
                      });
                  })(n)
                    ? R
                    : Y;
                return function () {
                  var o = a(this, t),
                    c = o.on;
                  c !== r && (i = (r = c).copy()).on(n, e), (o.on = i);
                };
              })(e, t, n)
            );
      },
      attr: function (t, n) {
        var e = Object(f.namespace)(t),
          r = "transform" === e ? u.i : H;
        return this.attrTween(
          t,
          "function" == typeof n
            ? (e.local
                ? function (t, n, e) {
                    var r, i, a;
                    return function () {
                      var o,
                        c,
                        u = e(this);
                      if (null != u)
                        return (o = this.getAttributeNS(t.space, t.local)) ===
                          (c = u + "")
                          ? null
                          : o === r && c === i
                          ? a
                          : ((i = c), (a = n((r = o), u)));
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function (t, n, e) {
                    var r, i, a;
                    return function () {
                      var o,
                        c,
                        u = e(this);
                      if (null != u)
                        return (o = this.getAttribute(t)) === (c = u + "")
                          ? null
                          : o === r && c === i
                          ? a
                          : ((i = c), (a = n((r = o), u)));
                      this.removeAttribute(t);
                    };
                  })(e, r, I(this, "attr." + t, n))
            : null == n
            ? (e.local
                ? function (t) {
                    return function () {
                      this.removeAttributeNS(t.space, t.local);
                    };
                  }
                : function (t) {
                    return function () {
                      this.removeAttribute(t);
                    };
                  })(e)
            : (e.local
                ? function (t, n, e) {
                    var r,
                      i,
                      a = e + "";
                    return function () {
                      var o = this.getAttributeNS(t.space, t.local);
                      return o === a ? null : o === r ? i : (i = n((r = o), e));
                    };
                  }
                : function (t, n, e) {
                    var r,
                      i,
                      a = e + "";
                    return function () {
                      var o = this.getAttribute(t);
                      return o === a ? null : o === r ? i : (i = n((r = o), e));
                    };
                  })(e, r, n)
        );
      },
      attrTween: function (t, n) {
        var e = "attr." + t;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ("function" != typeof n) throw new Error();
        var r = Object(f.namespace)(t);
        return this.tween(
          e,
          (r.local
            ? function (t, n) {
                var e, r;
                function i() {
                  var i = n.apply(this, arguments);
                  return (
                    i !== r &&
                      (e =
                        (r = i) &&
                        (function (t, n) {
                          return function (e) {
                            this.setAttributeNS(t.space, t.local, n(e));
                          };
                        })(t, i)),
                    e
                  );
                }
                return (i._value = n), i;
              }
            : function (t, n) {
                var e, r;
                function i() {
                  var i = n.apply(this, arguments);
                  return (
                    i !== r &&
                      (e =
                        (r = i) &&
                        (function (t, n) {
                          return function (e) {
                            this.setAttribute(t, n(e));
                          };
                        })(t, i)),
                    e
                  );
                }
                return (i._value = n), i;
              })(r, n)
        );
      },
      style: function (t, n, e) {
        var r = "transform" == (t += "") ? u.h : H;
        return null == n
          ? this.styleTween(
              t,
              (function (t, n) {
                var e, r, i;
                return function () {
                  var a = Object(f.style)(this, t),
                    o =
                      (this.style.removeProperty(t), Object(f.style)(this, t));
                  return a === o
                    ? null
                    : a === e && o === r
                    ? i
                    : (i = n((e = a), (r = o)));
                };
              })(t, r)
            ).on("end.style." + t, X(t))
          : "function" == typeof n
          ? this.styleTween(
              t,
              (function (t, n, e) {
                var r, i, a;
                return function () {
                  var o = Object(f.style)(this, t),
                    c = e(this),
                    u = c + "";
                  return (
                    null == c &&
                      (this.style.removeProperty(t),
                      (u = c = Object(f.style)(this, t))),
                    o === u
                      ? null
                      : o === r && u === i
                      ? a
                      : ((i = u), (a = n((r = o), c)))
                  );
                };
              })(t, r, I(this, "style." + t, n))
            ).each(
              (function (t, n) {
                var e,
                  r,
                  i,
                  a,
                  o = "style." + n,
                  c = "end." + o;
                return function () {
                  var u = Y(this, t),
                    f = u.on,
                    s = null == u.value[o] ? a || (a = X(n)) : void 0;
                  (f === e && i === s) || (r = (e = f).copy()).on(c, (i = s)),
                    (u.on = r);
                };
              })(this._id, t)
            )
          : this.styleTween(
              t,
              (function (t, n, e) {
                var r,
                  i,
                  a = e + "";
                return function () {
                  var o = Object(f.style)(this, t);
                  return o === a ? null : o === r ? i : (i = n((r = o), e));
                };
              })(t, r, n),
              e
            ).on("end.style." + t, null);
      },
      styleTween: function (t, n, e) {
        var r = "style." + (t += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == n) return this.tween(r, null);
        if ("function" != typeof n) throw new Error();
        return this.tween(
          r,
          (function (t, n, e) {
            var r, i;
            function a() {
              var a = n.apply(this, arguments);
              return (
                a !== i &&
                  (r =
                    (i = a) &&
                    (function (t, n, e) {
                      return function (r) {
                        this.style.setProperty(t, n(r), e);
                      };
                    })(t, a, e)),
                r
              );
            }
            return (a._value = n), a;
          })(t, n, null == e ? "" : e)
        );
      },
      text: function (t) {
        return this.tween(
          "text",
          "function" == typeof t
            ? (function (t) {
                return function () {
                  var n = t(this);
                  this.textContent = null == n ? "" : n;
                };
              })(I(this, "text", t))
            : (function (t) {
                return function () {
                  this.textContent = t;
                };
              })(null == t ? "" : t + "")
        );
      },
      remove: function () {
        return this.on(
          "end.remove",
          ((t = this._id),
          function () {
            var n = this.parentNode;
            for (var e in this.__transition) if (+e !== t) return;
            n && n.removeChild(this);
          })
        );
        var t;
      },
      tween: function (t, n) {
        var e = this._id;
        if (((t += ""), arguments.length < 2)) {
          for (
            var r, i = q(this.node(), e).tween, a = 0, o = i.length;
            a < o;
            ++a
          )
            if ((r = i[a]).name === t) return r.value;
          return null;
        }
        return this.each(
          (null == n
            ? function (t, n) {
                var e, r;
                return function () {
                  var i = Y(this, t),
                    a = i.tween;
                  if (a !== e)
                    for (var o = 0, c = (r = e = a).length; o < c; ++o)
                      if (r[o].name === n) {
                        (r = r.slice()).splice(o, 1);
                        break;
                      }
                  i.tween = r;
                };
              }
            : function (t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error();
                return function () {
                  var a = Y(this, t),
                    o = a.tween;
                  if (o !== r) {
                    i = (r = o).slice();
                    for (
                      var c = { name: n, value: e }, u = 0, f = i.length;
                      u < f;
                      ++u
                    )
                      if (i[u].name === n) {
                        i[u] = c;
                        break;
                      }
                    u === f && i.push(c);
                  }
                  a.tween = i;
                };
              })(e, t, n)
        );
      },
      delay: function (t) {
        var n = this._id;
        return arguments.length
          ? this.each(
              ("function" == typeof t
                ? function (t, n) {
                    return function () {
                      R(this, t).delay = +n.apply(this, arguments);
                    };
                  }
                : function (t, n) {
                    return (
                      (n = +n),
                      function () {
                        R(this, t).delay = n;
                      }
                    );
                  })(n, t)
            )
          : q(this.node(), n).delay;
      },
      duration: function (t) {
        var n = this._id;
        return arguments.length
          ? this.each(
              ("function" == typeof t
                ? function (t, n) {
                    return function () {
                      Y(this, t).duration = +n.apply(this, arguments);
                    };
                  }
                : function (t, n) {
                    return (
                      (n = +n),
                      function () {
                        Y(this, t).duration = n;
                      }
                    );
                  })(n, t)
            )
          : q(this.node(), n).duration;
      },
      ease: function (t) {
        var n = this._id;
        return arguments.length
          ? this.each(
              (function (t, n) {
                if ("function" != typeof n) throw new Error();
                return function () {
                  Y(this, t).ease = n;
                };
              })(n, t)
            )
          : q(this.node(), n).ease;
      },
      end: function () {
        var t,
          n,
          e = this,
          r = e._id,
          i = e.size();
        return new Promise(function (a, o) {
          var c = { value: o },
            u = {
              value: function () {
                0 == --i && a();
              },
            };
          e.each(function () {
            var e = Y(this, r),
              i = e.on;
            i !== t &&
              ((n = (t = i).copy())._.cancel.push(c),
              n._.interrupt.push(c),
              n._.end.push(u)),
              (e.on = n);
          });
        });
      },
    };
    var Q = { time: null, delay: 0, duration: 250, ease: e(9).easeCubicInOut };
    function J(t, n) {
      for (var e; !(e = t.__transition) || !(e = e[n]); )
        if (!(t = t.parentNode)) return (Q.time = v()), Q;
      return e;
    }
    (f.selection.prototype.interrupt = function (t) {
      return this.each(function () {
        z(this, t);
      });
    }),
      (f.selection.prototype.transition = function (t) {
        var n, e;
        t instanceof W
          ? ((n = t._id), (t = t._name))
          : ((n = $()), ((e = Q).time = v()), (t = null == t ? null : t + ""));
        for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
          for (var o, c = r[a], u = c.length, f = 0; f < u; ++f)
            (o = c[f]) && P(o, t, n, f, c, e || J(o, n));
        return new W(r, this._parents, t, n);
      });
    ["e", "w"].map(G),
      ["n", "s"].map(G),
      ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(G);
    function G(t) {
      return { type: t };
    }
    Math.cos, Math.sin, Math.PI, Math.max;
    Array.prototype.slice;
    var K = Math.PI,
      tt = 2 * K,
      nt = tt - 1e-6;
    function et() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function rt() {
      return new et();
    }
    et.prototype = rt.prototype = {
      constructor: et,
      moveTo: function (t, n) {
        this._ +=
          "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
      },
      closePath: function () {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
      },
      lineTo: function (t, n) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
      },
      quadraticCurveTo: function (t, n, e, r) {
        this._ +=
          "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
      },
      bezierCurveTo: function (t, n, e, r, i, a) {
        this._ +=
          "C" +
          +t +
          "," +
          +n +
          "," +
          +e +
          "," +
          +r +
          "," +
          (this._x1 = +i) +
          "," +
          (this._y1 = +a);
      },
      arcTo: function (t, n, e, r, i) {
        (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
        var a = this._x1,
          o = this._y1,
          c = e - t,
          u = r - n,
          f = a - t,
          s = o - n,
          l = f * f + s * s;
        if (i < 0) throw new Error("negative radius: " + i);
        if (null === this._x1)
          this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
        else if (l > 1e-6)
          if (Math.abs(s * c - u * f) > 1e-6 && i) {
            var h = e - a,
              d = r - o,
              p = c * c + u * u,
              b = h * h + d * d,
              y = Math.sqrt(p),
              _ = Math.sqrt(l),
              g = i * Math.tan((K - Math.acos((p + l - b) / (2 * y * _))) / 2),
              v = g / _,
              m = g / y;
            Math.abs(v - 1) > 1e-6 &&
              (this._ += "L" + (t + v * f) + "," + (n + v * s)),
              (this._ +=
                "A" +
                i +
                "," +
                i +
                ",0,0," +
                +(s * h > f * d) +
                "," +
                (this._x1 = t + m * c) +
                "," +
                (this._y1 = n + m * u));
          } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
        else;
      },
      arc: function (t, n, e, r, i, a) {
        (t = +t), (n = +n);
        var o = (e = +e) * Math.cos(r),
          c = e * Math.sin(r),
          u = t + o,
          f = n + c,
          s = 1 ^ a,
          l = a ? r - i : i - r;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1
          ? (this._ += "M" + u + "," + f)
          : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - f) > 1e-6) &&
            (this._ += "L" + u + "," + f),
          e &&
            (l < 0 && (l = (l % tt) + tt),
            l > nt
              ? (this._ +=
                  "A" +
                  e +
                  "," +
                  e +
                  ",0,1," +
                  s +
                  "," +
                  (t - o) +
                  "," +
                  (n - c) +
                  "A" +
                  e +
                  "," +
                  e +
                  ",0,1," +
                  s +
                  "," +
                  (this._x1 = u) +
                  "," +
                  (this._y1 = f))
              : l > 1e-6 &&
                (this._ +=
                  "A" +
                  e +
                  "," +
                  e +
                  ",0," +
                  +(l >= K) +
                  "," +
                  s +
                  "," +
                  (this._x1 = t + e * Math.cos(i)) +
                  "," +
                  (this._y1 = n + e * Math.sin(i))));
      },
      rect: function (t, n, e, r) {
        this._ +=
          "M" +
          (this._x0 = this._x1 = +t) +
          "," +
          (this._y0 = this._y1 = +n) +
          "h" +
          +e +
          "v" +
          +r +
          "h" +
          -e +
          "Z";
      },
      toString: function () {
        return this._;
      },
    };
    var it = rt;
    var at = e(8);
    Array.prototype.slice;
    var ot = {},
      ct = {},
      ut = 34,
      ft = 10,
      st = 13;
    function lt(t) {
      return new Function(
        "d",
        "return {" +
          t
            .map(function (t, n) {
              return JSON.stringify(t) + ": d[" + n + "]";
            })
            .join(",") +
          "}"
      );
    }
    function ht(t) {
      var n = Object.create(null),
        e = [];
      return (
        t.forEach(function (t) {
          for (var r in t) r in n || e.push((n[r] = r));
        }),
        e
      );
    }
    function dt(t, n) {
      var e = t + "",
        r = e.length;
      return r < n ? new Array(n - r + 1).join(0) + e : e;
    }
    function pt(t) {
      var n,
        e = t.getUTCHours(),
        r = t.getUTCMinutes(),
        i = t.getUTCSeconds(),
        a = t.getUTCMilliseconds();
      return isNaN(t)
        ? "Invalid Date"
        : ((n = t.getUTCFullYear()) < 0
            ? "-" + dt(-n, 6)
            : n > 9999
            ? "+" + dt(n, 6)
            : dt(n, 4)) +
            "-" +
            dt(t.getUTCMonth() + 1, 2) +
            "-" +
            dt(t.getUTCDate(), 2) +
            (a
              ? "T" +
                dt(e, 2) +
                ":" +
                dt(r, 2) +
                ":" +
                dt(i, 2) +
                "." +
                dt(a, 3) +
                "Z"
              : i
              ? "T" + dt(e, 2) + ":" + dt(r, 2) + ":" + dt(i, 2) + "Z"
              : r || e
              ? "T" + dt(e, 2) + ":" + dt(r, 2) + "Z"
              : "");
    }
    var bt = function (t) {
        var n = new RegExp('["' + t + "\n\r]"),
          e = t.charCodeAt(0);
        function r(t, n) {
          var r,
            i = [],
            a = t.length,
            o = 0,
            c = 0,
            u = a <= 0,
            f = !1;
          function s() {
            if (u) return ct;
            if (f) return (f = !1), ot;
            var n,
              r,
              i = o;
            if (t.charCodeAt(i) === ut) {
              for (
                ;
                (o++ < a && t.charCodeAt(o) !== ut) || t.charCodeAt(++o) === ut;

              );
              return (
                (n = o) >= a
                  ? (u = !0)
                  : (r = t.charCodeAt(o++)) === ft
                  ? (f = !0)
                  : r === st && ((f = !0), t.charCodeAt(o) === ft && ++o),
                t.slice(i + 1, n - 1).replace(/""/g, '"')
              );
            }
            for (; o < a; ) {
              if ((r = t.charCodeAt((n = o++))) === ft) f = !0;
              else if (r === st) (f = !0), t.charCodeAt(o) === ft && ++o;
              else if (r !== e) continue;
              return t.slice(i, n);
            }
            return (u = !0), t.slice(i, a);
          }
          for (
            t.charCodeAt(a - 1) === ft && --a,
              t.charCodeAt(a - 1) === st && --a;
            (r = s()) !== ct;

          ) {
            for (var l = []; r !== ot && r !== ct; ) l.push(r), (r = s());
            (n && null == (l = n(l, c++))) || i.push(l);
          }
          return i;
        }
        function i(n, e) {
          return n.map(function (n) {
            return e
              .map(function (t) {
                return o(n[t]);
              })
              .join(t);
          });
        }
        function a(n) {
          return n.map(o).join(t);
        }
        function o(t) {
          return null == t
            ? ""
            : t instanceof Date
            ? pt(t)
            : n.test((t += ""))
            ? '"' + t.replace(/"/g, '""') + '"'
            : t;
        }
        return {
          parse: function (t, n) {
            var e,
              i,
              a = r(t, function (t, r) {
                if (e) return e(t, r - 1);
                (i = t),
                  (e = n
                    ? (function (t, n) {
                        var e = lt(t);
                        return function (r, i) {
                          return n(e(r), i, t);
                        };
                      })(t, n)
                    : lt(t));
              });
            return (a.columns = i || []), a;
          },
          parseRows: r,
          format: function (n, e) {
            return (
              null == e && (e = ht(n)),
              [e.map(o).join(t)].concat(i(n, e)).join("\n")
            );
          },
          formatBody: function (t, n) {
            return null == n && (n = ht(t)), i(t, n).join("\n");
          },
          formatRows: function (t) {
            return t.map(a).join("\n");
          },
        };
      },
      yt = bt(","),
      _t = yt.parse,
      gt = (yt.parseRows, yt.format, yt.formatBody, yt.formatRows, bt("\t")),
      vt = gt.parse;
    gt.parseRows, gt.format, gt.formatBody, gt.formatRows;
    function mt(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.text();
    }
    var xt = function (t, n) {
      return fetch(t, n).then(mt);
    };
    function wt(t) {
      return function (n, e, r) {
        return (
          2 === arguments.length &&
            "function" == typeof e &&
            ((r = e), (e = void 0)),
          xt(n, e).then(function (n) {
            return t(n, r);
          })
        );
      };
    }
    var Mt = wt(_t);
    wt(vt);
    function kt(t) {
      return function (n, e) {
        return xt(n, e).then(function (n) {
          return new DOMParser().parseFromString(n, t);
        });
      };
    }
    kt("application/xml"), kt("text/html"), kt("image/svg+xml");
    function Nt(t, n, e, r) {
      if (isNaN(n) || isNaN(e)) return t;
      var i,
        a,
        o,
        c,
        u,
        f,
        s,
        l,
        h,
        d = t._root,
        p = { data: r },
        b = t._x0,
        y = t._y0,
        _ = t._x1,
        g = t._y1;
      if (!d) return (t._root = p), t;
      for (; d.length; )
        if (
          ((f = n >= (a = (b + _) / 2)) ? (b = a) : (_ = a),
          (s = e >= (o = (y + g) / 2)) ? (y = o) : (g = o),
          (i = d),
          !(d = d[(l = (s << 1) | f)]))
        )
          return (i[l] = p), t;
      if (
        ((c = +t._x.call(null, d.data)),
        (u = +t._y.call(null, d.data)),
        n === c && e === u)
      )
        return (p.next = d), i ? (i[l] = p) : (t._root = p), t;
      do {
        (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
          (f = n >= (a = (b + _) / 2)) ? (b = a) : (_ = a),
          (s = e >= (o = (y + g) / 2)) ? (y = o) : (g = o);
      } while ((l = (s << 1) | f) == (h = ((u >= o) << 1) | (c >= a)));
      return (i[h] = d), (i[l] = p), t;
    }
    var At = function (t, n, e, r, i) {
      (this.node = t),
        (this.x0 = n),
        (this.y0 = e),
        (this.x1 = r),
        (this.y1 = i);
    };
    function St(t) {
      return t[0];
    }
    function Tt(t) {
      return t[1];
    }
    function Ct(t, n, e) {
      var r = new Lt(
        null == n ? St : n,
        null == e ? Tt : e,
        NaN,
        NaN,
        NaN,
        NaN
      );
      return null == t ? r : r.addAll(t);
    }
    function Lt(t, n, e, r, i, a) {
      (this._x = t),
        (this._y = n),
        (this._x0 = e),
        (this._y0 = r),
        (this._x1 = i),
        (this._y1 = a),
        (this._root = void 0);
    }
    function Et(t) {
      for (var n = { data: t.data }, e = n; (t = t.next); )
        e = e.next = { data: t.data };
      return n;
    }
    var Ot = (Ct.prototype = Lt.prototype);
    (Ot.copy = function () {
      var t,
        n,
        e = new Lt(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
      if (!r) return e;
      if (!r.length) return (e._root = Et(r)), e;
      for (
        t = [{ source: r, target: (e._root = new Array(4)) }];
        (r = t.pop());

      )
        for (var i = 0; i < 4; ++i)
          (n = r.source[i]) &&
            (n.length
              ? t.push({ source: n, target: (r.target[i] = new Array(4)) })
              : (r.target[i] = Et(n)));
      return e;
    }),
      (Ot.add = function (t) {
        var n = +this._x.call(null, t),
          e = +this._y.call(null, t);
        return Nt(this.cover(n, e), n, e, t);
      }),
      (Ot.addAll = function (t) {
        var n,
          e,
          r,
          i,
          a = t.length,
          o = new Array(a),
          c = new Array(a),
          u = 1 / 0,
          f = 1 / 0,
          s = -1 / 0,
          l = -1 / 0;
        for (e = 0; e < a; ++e)
          isNaN((r = +this._x.call(null, (n = t[e])))) ||
            isNaN((i = +this._y.call(null, n))) ||
            ((o[e] = r),
            (c[e] = i),
            r < u && (u = r),
            r > s && (s = r),
            i < f && (f = i),
            i > l && (l = i));
        if (u > s || f > l) return this;
        for (this.cover(u, f).cover(s, l), e = 0; e < a; ++e)
          Nt(this, o[e], c[e], t[e]);
        return this;
      }),
      (Ot.cover = function (t, n) {
        if (isNaN((t = +t)) || isNaN((n = +n))) return this;
        var e = this._x0,
          r = this._y0,
          i = this._x1,
          a = this._y1;
        if (isNaN(e))
          (i = (e = Math.floor(t)) + 1), (a = (r = Math.floor(n)) + 1);
        else {
          for (
            var o, c, u = i - e, f = this._root;
            e > t || t >= i || r > n || n >= a;

          )
            switch (
              ((c = ((n < r) << 1) | (t < e)),
              ((o = new Array(4))[c] = f),
              (f = o),
              (u *= 2),
              c)
            ) {
              case 0:
                (i = e + u), (a = r + u);
                break;
              case 1:
                (e = i - u), (a = r + u);
                break;
              case 2:
                (i = e + u), (r = a - u);
                break;
              case 3:
                (e = i - u), (r = a - u);
            }
          this._root && this._root.length && (this._root = f);
        }
        return (
          (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = a), this
        );
      }),
      (Ot.data = function () {
        var t = [];
        return (
          this.visit(function (n) {
            if (!n.length)
              do {
                t.push(n.data);
              } while ((n = n.next));
          }),
          t
        );
      }),
      (Ot.extent = function (t) {
        return arguments.length
          ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
          : isNaN(this._x0)
          ? void 0
          : [
              [this._x0, this._y0],
              [this._x1, this._y1],
            ];
      }),
      (Ot.find = function (t, n, e) {
        var r,
          i,
          a,
          o,
          c,
          u,
          f,
          s = this._x0,
          l = this._y0,
          h = this._x1,
          d = this._y1,
          p = [],
          b = this._root;
        for (
          b && p.push(new At(b, s, l, h, d)),
            null == e
              ? (e = 1 / 0)
              : ((s = t - e), (l = n - e), (h = t + e), (d = n + e), (e *= e));
          (u = p.pop());

        )
          if (
            !(
              !(b = u.node) ||
              (i = u.x0) > h ||
              (a = u.y0) > d ||
              (o = u.x1) < s ||
              (c = u.y1) < l
            )
          )
            if (b.length) {
              var y = (i + o) / 2,
                _ = (a + c) / 2;
              p.push(
                new At(b[3], y, _, o, c),
                new At(b[2], i, _, y, c),
                new At(b[1], y, a, o, _),
                new At(b[0], i, a, y, _)
              ),
                (f = ((n >= _) << 1) | (t >= y)) &&
                  ((u = p[p.length - 1]),
                  (p[p.length - 1] = p[p.length - 1 - f]),
                  (p[p.length - 1 - f] = u));
            } else {
              var g = t - +this._x.call(null, b.data),
                v = n - +this._y.call(null, b.data),
                m = g * g + v * v;
              if (m < e) {
                var x = Math.sqrt((e = m));
                (s = t - x),
                  (l = n - x),
                  (h = t + x),
                  (d = n + x),
                  (r = b.data);
              }
            }
        return r;
      }),
      (Ot.remove = function (t) {
        if (
          isNaN((a = +this._x.call(null, t))) ||
          isNaN((o = +this._y.call(null, t)))
        )
          return this;
        var n,
          e,
          r,
          i,
          a,
          o,
          c,
          u,
          f,
          s,
          l,
          h,
          d = this._root,
          p = this._x0,
          b = this._y0,
          y = this._x1,
          _ = this._y1;
        if (!d) return this;
        if (d.length)
          for (;;) {
            if (
              ((f = a >= (c = (p + y) / 2)) ? (p = c) : (y = c),
              (s = o >= (u = (b + _) / 2)) ? (b = u) : (_ = u),
              (n = d),
              !(d = d[(l = (s << 1) | f)]))
            )
              return this;
            if (!d.length) break;
            (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) &&
              ((e = n), (h = l));
          }
        for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
        return (
          (i = d.next) && delete d.next,
          r
            ? (i ? (r.next = i) : delete r.next, this)
            : n
            ? (i ? (n[l] = i) : delete n[l],
              (d = n[0] || n[1] || n[2] || n[3]) &&
                d === (n[3] || n[2] || n[1] || n[0]) &&
                !d.length &&
                (e ? (e[h] = d) : (this._root = d)),
              this)
            : ((this._root = i), this)
        );
      }),
      (Ot.removeAll = function (t) {
        for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
        return this;
      }),
      (Ot.root = function () {
        return this._root;
      }),
      (Ot.size = function () {
        var t = 0;
        return (
          this.visit(function (n) {
            if (!n.length)
              do {
                ++t;
              } while ((n = n.next));
          }),
          t
        );
      }),
      (Ot.visit = function (t) {
        var n,
          e,
          r,
          i,
          a,
          o,
          c = [],
          u = this._root;
        for (
          u && c.push(new At(u, this._x0, this._y0, this._x1, this._y1));
          (n = c.pop());

        )
          if (
            !t((u = n.node), (r = n.x0), (i = n.y0), (a = n.x1), (o = n.y1)) &&
            u.length
          ) {
            var f = (r + a) / 2,
              s = (i + o) / 2;
            (e = u[3]) && c.push(new At(e, f, s, a, o)),
              (e = u[2]) && c.push(new At(e, r, s, f, o)),
              (e = u[1]) && c.push(new At(e, f, i, a, s)),
              (e = u[0]) && c.push(new At(e, r, i, f, s));
          }
        return this;
      }),
      (Ot.visitAfter = function (t) {
        var n,
          e = [],
          r = [];
        for (
          this._root &&
          e.push(new At(this._root, this._x0, this._y0, this._x1, this._y1));
          (n = e.pop());

        ) {
          var i = n.node;
          if (i.length) {
            var a,
              o = n.x0,
              c = n.y0,
              u = n.x1,
              f = n.y1,
              s = (o + u) / 2,
              l = (c + f) / 2;
            (a = i[0]) && e.push(new At(a, o, c, s, l)),
              (a = i[1]) && e.push(new At(a, s, c, u, l)),
              (a = i[2]) && e.push(new At(a, o, l, s, f)),
              (a = i[3]) && e.push(new At(a, s, l, u, f));
          }
          r.push(n);
        }
        for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this;
      }),
      (Ot.x = function (t) {
        return arguments.length ? ((this._x = t), this) : this._x;
      }),
      (Ot.y = function (t) {
        return arguments.length ? ((this._y = t), this) : this._y;
      });
    Math.PI, Math.sqrt(5);
    var jt = e(6),
      Ut = function () {
        return new Dt();
      };
    function Dt() {
      this.reset();
    }
    Dt.prototype = {
      constructor: Dt,
      reset: function () {
        this.s = this.t = 0;
      },
      add: function (t) {
        Rt(Pt, t, this.t),
          Rt(this, Pt.s, this.s),
          this.s ? (this.t += Pt.t) : (this.s = Pt.t);
      },
      valueOf: function () {
        return this.s;
      },
    };
    var Pt = new Dt();
    function Rt(t, n, e) {
      var r = (t.s = n + e),
        i = r - n,
        a = r - i;
      t.t = n - a + (e - i);
    }
    var Yt = 1e-6,
      qt = Math.PI,
      zt = qt / 2,
      It = qt / 4,
      Ft = 2 * qt,
      Ht = qt / 180,
      Bt = Math.abs,
      Xt = Math.atan,
      Vt = Math.atan2,
      Wt = Math.cos,
      $t = (Math.ceil, Math.exp),
      Zt = (Math.floor, Math.log),
      Qt = (Math.pow, Math.sin),
      Jt = (Math.sign, Math.sqrt),
      Gt = Math.tan;
    function Kt(t) {
      return t > 1 ? 0 : t < -1 ? qt : Math.acos(t);
    }
    function tn(t) {
      return t > 1 ? zt : t < -1 ? -zt : Math.asin(t);
    }
    function nn() {}
    Ut(), Ut();
    function en(t) {
      var n = t[0],
        e = t[1],
        r = Wt(e);
      return [r * Wt(n), r * Qt(n), Qt(e)];
    }
    function rn(t, n) {
      return [
        t[1] * n[2] - t[2] * n[1],
        t[2] * n[0] - t[0] * n[2],
        t[0] * n[1] - t[1] * n[0],
      ];
    }
    function an(t) {
      var n = Jt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      (t[0] /= n), (t[1] /= n), (t[2] /= n);
    }
    Ut();
    function on(t, n) {
      return [Bt(t) > qt ? t + Math.round(-t / Ft) * Ft : t, n];
    }
    on.invert = on;
    var cn = function () {
        var t,
          n = [];
        return {
          point: function (n, e) {
            t.push([n, e]);
          },
          lineStart: function () {
            n.push((t = []));
          },
          lineEnd: nn,
          rejoin: function () {
            n.length > 1 && n.push(n.pop().concat(n.shift()));
          },
          result: function () {
            var e = n;
            return (n = []), (t = null), e;
          },
        };
      },
      un = function (t, n) {
        return Bt(t[0] - n[0]) < Yt && Bt(t[1] - n[1]) < Yt;
      };
    function fn(t, n, e, r) {
      (this.x = t),
        (this.z = n),
        (this.o = e),
        (this.e = r),
        (this.v = !1),
        (this.n = this.p = null);
    }
    var sn = function (t, n, e, r, i) {
      var a,
        o,
        c = [],
        u = [];
      if (
        (t.forEach(function (t) {
          if (!((n = t.length - 1) <= 0)) {
            var n,
              e,
              r = t[0],
              o = t[n];
            if (un(r, o)) {
              for (i.lineStart(), a = 0; a < n; ++a)
                i.point((r = t[a])[0], r[1]);
              i.lineEnd();
            } else
              c.push((e = new fn(r, t, null, !0))),
                u.push((e.o = new fn(r, null, e, !1))),
                c.push((e = new fn(o, t, null, !1))),
                u.push((e.o = new fn(o, null, e, !0)));
          }
        }),
        c.length)
      ) {
        for (u.sort(n), ln(c), ln(u), a = 0, o = u.length; a < o; ++a)
          u[a].e = e = !e;
        for (var f, s, l = c[0]; ; ) {
          for (var h = l, d = !0; h.v; ) if ((h = h.n) === l) return;
          (f = h.z), i.lineStart();
          do {
            if (((h.v = h.o.v = !0), h.e)) {
              if (d)
                for (a = 0, o = f.length; a < o; ++a)
                  i.point((s = f[a])[0], s[1]);
              else r(h.x, h.n.x, 1, i);
              h = h.n;
            } else {
              if (d)
                for (f = h.p.z, a = f.length - 1; a >= 0; --a)
                  i.point((s = f[a])[0], s[1]);
              else r(h.x, h.p.x, -1, i);
              h = h.p;
            }
            (f = (h = h.o).z), (d = !d);
          } while (!h.v);
          i.lineEnd();
        }
      }
    };
    function ln(t) {
      if ((n = t.length)) {
        for (var n, e, r = 0, i = t[0]; ++r < n; )
          (i.n = e = t[r]), (e.p = i), (i = e);
        (i.n = e = t[0]), (e.p = i);
      }
    }
    var hn = Ut(),
      dn = function (t, n) {
        var e = n[0],
          r = n[1],
          i = Qt(r),
          a = [Qt(e), -Wt(e), 0],
          o = 0,
          c = 0;
        hn.reset(), 1 === i ? (r = zt + Yt) : -1 === i && (r = -zt - Yt);
        for (var u = 0, f = t.length; u < f; ++u)
          if ((l = (s = t[u]).length))
            for (
              var s,
                l,
                h = s[l - 1],
                d = h[0],
                p = h[1] / 2 + It,
                b = Qt(p),
                y = Wt(p),
                _ = 0;
              _ < l;
              ++_, d = v, b = x, y = w, h = g
            ) {
              var g = s[_],
                v = g[0],
                m = g[1] / 2 + It,
                x = Qt(m),
                w = Wt(m),
                M = v - d,
                k = M >= 0 ? 1 : -1,
                N = k * M,
                A = N > qt,
                S = b * x;
              if (
                (hn.add(Vt(S * k * Qt(N), y * w + S * Wt(N))),
                (o += A ? M + k * Ft : M),
                A ^ (d >= e) ^ (v >= e))
              ) {
                var T = rn(en(h), en(g));
                an(T);
                var C = rn(a, T);
                an(C);
                var L = (A ^ (M >= 0) ? -1 : 1) * tn(C[2]);
                (r > L || (r === L && (T[0] || T[1]))) &&
                  (c += A ^ (M >= 0) ? 1 : -1);
              }
            }
        return (o < -Yt || (o < Yt && hn < -Yt)) ^ (1 & c);
      },
      pn = function (t, n, e, r) {
        return function (i) {
          var o,
            c,
            u,
            f = n(i),
            s = cn(),
            l = n(s),
            h = !1,
            d = {
              point: p,
              lineStart: y,
              lineEnd: _,
              polygonStart: function () {
                (d.point = g),
                  (d.lineStart = v),
                  (d.lineEnd = m),
                  (c = []),
                  (o = []);
              },
              polygonEnd: function () {
                (d.point = p),
                  (d.lineStart = y),
                  (d.lineEnd = _),
                  (c = Object(a.merge)(c));
                var t = dn(o, r);
                c.length
                  ? (h || (i.polygonStart(), (h = !0)), sn(c, yn, t, e, i))
                  : t &&
                    (h || (i.polygonStart(), (h = !0)),
                    i.lineStart(),
                    e(null, null, 1, i),
                    i.lineEnd()),
                  h && (i.polygonEnd(), (h = !1)),
                  (c = o = null);
              },
              sphere: function () {
                i.polygonStart(),
                  i.lineStart(),
                  e(null, null, 1, i),
                  i.lineEnd(),
                  i.polygonEnd();
              },
            };
          function p(n, e) {
            t(n, e) && i.point(n, e);
          }
          function b(t, n) {
            f.point(t, n);
          }
          function y() {
            (d.point = b), f.lineStart();
          }
          function _() {
            (d.point = p), f.lineEnd();
          }
          function g(t, n) {
            u.push([t, n]), l.point(t, n);
          }
          function v() {
            l.lineStart(), (u = []);
          }
          function m() {
            g(u[0][0], u[0][1]), l.lineEnd();
            var t,
              n,
              e,
              r,
              a = l.clean(),
              f = s.result(),
              d = f.length;
            if ((u.pop(), o.push(u), (u = null), d))
              if (1 & a) {
                if ((n = (e = f[0]).length - 1) > 0) {
                  for (
                    h || (i.polygonStart(), (h = !0)), i.lineStart(), t = 0;
                    t < n;
                    ++t
                  )
                    i.point((r = e[t])[0], r[1]);
                  i.lineEnd();
                }
              } else
                d > 1 && 2 & a && f.push(f.pop().concat(f.shift())),
                  c.push(f.filter(bn));
          }
          return d;
        };
      };
    function bn(t) {
      return t.length > 1;
    }
    function yn(t, n) {
      return (
        ((t = t.x)[0] < 0 ? t[1] - zt - Yt : zt - t[1]) -
        ((n = n.x)[0] < 0 ? n[1] - zt - Yt : zt - n[1])
      );
    }
    pn(
      function () {
        return !0;
      },
      function (t) {
        var n,
          e = NaN,
          r = NaN,
          i = NaN;
        return {
          lineStart: function () {
            t.lineStart(), (n = 1);
          },
          point: function (a, o) {
            var c = a > 0 ? qt : -qt,
              u = Bt(a - e);
            Bt(u - qt) < Yt
              ? (t.point(e, (r = (r + o) / 2 > 0 ? zt : -zt)),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(c, r),
                t.point(a, r),
                (n = 0))
              : i !== c &&
                u >= qt &&
                (Bt(e - i) < Yt && (e -= i * Yt),
                Bt(a - c) < Yt && (a -= c * Yt),
                (r = (function (t, n, e, r) {
                  var i,
                    a,
                    o = Qt(t - e);
                  return Bt(o) > Yt
                    ? Xt(
                        (Qt(n) * (a = Wt(r)) * Qt(e) -
                          Qt(r) * (i = Wt(n)) * Qt(t)) /
                          (i * a * o)
                      )
                    : (n + r) / 2;
                })(e, r, a, o)),
                t.point(i, r),
                t.lineEnd(),
                t.lineStart(),
                t.point(c, r),
                (n = 0)),
              t.point((e = a), (r = o)),
              (i = c);
          },
          lineEnd: function () {
            t.lineEnd(), (e = r = NaN);
          },
          clean: function () {
            return 2 - n;
          },
        };
      },
      function (t, n, e, r) {
        var i;
        if (null == t)
          (i = e * zt),
            r.point(-qt, i),
            r.point(0, i),
            r.point(qt, i),
            r.point(qt, 0),
            r.point(qt, -i),
            r.point(0, -i),
            r.point(-qt, -i),
            r.point(-qt, 0),
            r.point(-qt, i);
        else if (Bt(t[0] - n[0]) > Yt) {
          var a = t[0] < n[0] ? qt : -qt;
          (i = (e * a) / 2), r.point(-a, i), r.point(0, i), r.point(a, i);
        } else r.point(n[0], n[1]);
      },
      [-qt, -zt]
    );
    Ut();
    Ut(), Ut();
    function _n(t) {
      this._context = t;
    }
    _n.prototype = {
      _radius: 4.5,
      pointRadius: function (t) {
        return (this._radius = t), this;
      },
      polygonStart: function () {
        this._line = 0;
      },
      polygonEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        0 === this._line && this._context.closePath(), (this._point = NaN);
      },
      point: function (t, n) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t, n), (this._point = 1);
            break;
          case 1:
            this._context.lineTo(t, n);
            break;
          default:
            this._context.moveTo(t + this._radius, n),
              this._context.arc(t, n, this._radius, 0, Ft);
        }
      },
      result: nn,
    };
    Ut();
    function gn() {
      this._string = [];
    }
    function vn(t) {
      return (
        "m0," +
        t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        -2 * t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        2 * t +
        "z"
      );
    }
    gn.prototype = {
      _radius: 4.5,
      _circle: vn(4.5),
      pointRadius: function (t) {
        return (
          (t = +t) !== this._radius &&
            ((this._radius = t), (this._circle = null)),
          this
        );
      },
      polygonStart: function () {
        this._line = 0;
      },
      polygonEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        0 === this._line && this._string.push("Z"), (this._point = NaN);
      },
      point: function (t, n) {
        switch (this._point) {
          case 0:
            this._string.push("M", t, ",", n), (this._point = 1);
            break;
          case 1:
            this._string.push("L", t, ",", n);
            break;
          default:
            null == this._circle && (this._circle = vn(this._radius)),
              this._string.push("M", t, ",", n, this._circle);
        }
      },
      result: function () {
        if (this._string.length) {
          var t = this._string.join("");
          return (this._string = []), t;
        }
        return null;
      },
    };
    function mn(t) {
      return function (n) {
        var e = new xn();
        for (var r in t) e[r] = t[r];
        return (e.stream = n), e;
      };
    }
    function xn() {}
    xn.prototype = {
      constructor: xn,
      point: function (t, n) {
        this.stream.point(t, n);
      },
      sphere: function () {
        this.stream.sphere();
      },
      lineStart: function () {
        this.stream.lineStart();
      },
      lineEnd: function () {
        this.stream.lineEnd();
      },
      polygonStart: function () {
        this.stream.polygonStart();
      },
      polygonEnd: function () {
        this.stream.polygonEnd();
      },
    };
    Wt(30 * Ht);
    mn({
      point: function (t, n) {
        this.stream.point(t * Ht, n * Ht);
      },
    });
    function wn(t) {
      return function (n, e) {
        var r = Wt(n),
          i = Wt(e),
          a = t(r * i);
        return [a * i * Qt(n), a * Qt(e)];
      };
    }
    function Mn(t) {
      return function (n, e) {
        var r = Jt(n * n + e * e),
          i = t(r),
          a = Qt(i),
          o = Wt(i);
        return [Vt(n * a, r * o), tn(r && (e * a) / r)];
      };
    }
    var kn = wn(function (t) {
      return Jt(2 / (1 + t));
    });
    kn.invert = Mn(function (t) {
      return 2 * tn(t / 2);
    });
    var Nn = wn(function (t) {
      return (t = Kt(t)) && t / Qt(t);
    });
    Nn.invert = Mn(function (t) {
      return t;
    });
    function An(t, n) {
      return [t, Zt(Gt((zt + n) / 2))];
    }
    An.invert = function (t, n) {
      return [t, 2 * Xt($t(n)) - zt];
    };
    function Sn(t, n) {
      return [t, n];
    }
    Sn.invert = Sn;
    var Tn = 1.340264,
      Cn = -0.081106,
      Ln = 893e-6,
      En = 0.003796,
      On = Jt(3) / 2;
    function jn(t, n) {
      var e = tn(On * Qt(n)),
        r = e * e,
        i = r * r * r;
      return [
        (t * Wt(e)) / (On * (Tn + 3 * Cn * r + i * (7 * Ln + 9 * En * r))),
        e * (Tn + Cn * r + i * (Ln + En * r)),
      ];
    }
    jn.invert = function (t, n) {
      for (
        var e, r = n, i = r * r, a = i * i * i, o = 0;
        o < 12 &&
        ((a =
          (i =
            (r -= e =
              (r * (Tn + Cn * i + a * (Ln + En * i)) - n) /
              (Tn + 3 * Cn * i + a * (7 * Ln + 9 * En * i))) * r) *
          i *
          i),
        !(Bt(e) < 1e-12));
        ++o
      );
      return [
        (On * t * (Tn + 3 * Cn * i + a * (7 * Ln + 9 * En * i))) / Wt(r),
        tn(Qt(r) / On),
      ];
    };
    function Un(t, n) {
      var e = Wt(n),
        r = Wt(t) * e;
      return [(e * Qt(t)) / r, Qt(n) / r];
    }
    Un.invert = Mn(Xt);
    function Dn(t, n) {
      var e = n * n,
        r = e * e;
      return [
        t *
          (0.8707 -
            0.131979 * e +
            r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
        n *
          (1.007226 +
            e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
      ];
    }
    Dn.invert = function (t, n) {
      var e,
        r = n,
        i = 25;
      do {
        var a = r * r,
          o = a * a;
        r -= e =
          (r *
            (1.007226 +
              a * (0.015085 + o * (0.028874 * a - 0.044475 - 0.005916 * o))) -
            n) /
          (1.007226 +
            a * (0.045255 + o * (0.259866 * a - 0.311325 - 0.005916 * 11 * o)));
      } while (Bt(e) > Yt && --i > 0);
      return [
        t /
          (0.8707 +
            (a = r * r) *
              (a * (a * a * a * (0.003971 - 0.001529 * a) - 0.013791) -
                0.131979)),
        r,
      ];
    };
    function Pn(t, n) {
      return [Wt(n) * Qt(t), Qt(n)];
    }
    Pn.invert = Mn(tn);
    function Rn(t, n) {
      var e = Wt(n),
        r = 1 + Wt(t) * e;
      return [(e * Qt(t)) / r, Qt(n) / r];
    }
    Rn.invert = Mn(function (t) {
      return 2 * Xt(t);
    });
    function Yn(t, n) {
      return [Zt(Gt((zt + n) / 2)), -t];
    }
    Yn.invert = function (t, n) {
      return [-n, 2 * Xt($t(t)) - zt];
    };
    function qn(t) {
      var n = 0,
        e = t.children,
        r = e && e.length;
      if (r) for (; --r >= 0; ) n += e[r].value;
      else n = 1;
      t.value = n;
    }
    function zn(t, n) {
      var e,
        r,
        i,
        a,
        o,
        c = new Bn(t),
        u = +t.value && (c.value = t.value),
        f = [c];
      for (null == n && (n = In); (e = f.pop()); )
        if ((u && (e.value = +e.data.value), (i = n(e.data)) && (o = i.length)))
          for (e.children = new Array(o), a = o - 1; a >= 0; --a)
            f.push((r = e.children[a] = new Bn(i[a]))),
              (r.parent = e),
              (r.depth = e.depth + 1);
      return c.eachBefore(Hn);
    }
    function In(t) {
      return t.children;
    }
    function Fn(t) {
      t.data = t.data.data;
    }
    function Hn(t) {
      var n = 0;
      do {
        t.height = n;
      } while ((t = t.parent) && t.height < ++n);
    }
    function Bn(t) {
      (this.data = t), (this.depth = this.height = 0), (this.parent = null);
    }
    Bn.prototype = zn.prototype = {
      constructor: Bn,
      count: function () {
        return this.eachAfter(qn);
      },
      each: function (t) {
        var n,
          e,
          r,
          i,
          a = this,
          o = [a];
        do {
          for (n = o.reverse(), o = []; (a = n.pop()); )
            if ((t(a), (e = a.children)))
              for (r = 0, i = e.length; r < i; ++r) o.push(e[r]);
        } while (o.length);
        return this;
      },
      eachAfter: function (t) {
        for (var n, e, r, i = this, a = [i], o = []; (i = a.pop()); )
          if ((o.push(i), (n = i.children)))
            for (e = 0, r = n.length; e < r; ++e) a.push(n[e]);
        for (; (i = o.pop()); ) t(i);
        return this;
      },
      eachBefore: function (t) {
        for (var n, e, r = this, i = [r]; (r = i.pop()); )
          if ((t(r), (n = r.children)))
            for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
        return this;
      },
      sum: function (t) {
        return this.eachAfter(function (n) {
          for (
            var e = +t(n.data) || 0, r = n.children, i = r && r.length;
            --i >= 0;

          )
            e += r[i].value;
          n.value = e;
        });
      },
      sort: function (t) {
        return this.eachBefore(function (n) {
          n.children && n.children.sort(t);
        });
      },
      path: function (t) {
        for (
          var n = this,
            e = (function (t, n) {
              if (t === n) return t;
              var e = t.ancestors(),
                r = n.ancestors(),
                i = null;
              for (t = e.pop(), n = r.pop(); t === n; )
                (i = t), (t = e.pop()), (n = r.pop());
              return i;
            })(n, t),
            r = [n];
          n !== e;

        )
          (n = n.parent), r.push(n);
        for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
        return r;
      },
      ancestors: function () {
        for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
        return n;
      },
      descendants: function () {
        var t = [];
        return (
          this.each(function (n) {
            t.push(n);
          }),
          t
        );
      },
      leaves: function () {
        var t = [];
        return (
          this.eachBefore(function (n) {
            n.children || t.push(n);
          }),
          t
        );
      },
      links: function () {
        var t = this,
          n = [];
        return (
          t.each(function (e) {
            e !== t && n.push({ source: e.parent, target: e });
          }),
          n
        );
      },
      copy: function () {
        return zn(this).eachBefore(Fn);
      },
    };
    Array.prototype.slice;
    var Xn = function (t, n, e, r, i) {
      for (
        var a,
          o = t.children,
          c = -1,
          u = o.length,
          f = t.value && (r - n) / t.value;
        ++c < u;

      )
        ((a = o[c]).y0 = e), (a.y1 = i), (a.x0 = n), (a.x1 = n += a.value * f);
    };
    function Vn(t, n) {
      (this._ = t),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = n);
    }
    Vn.prototype = Object.create(Bn.prototype);
    var Wn = function (t, n, e, r, i) {
        for (
          var a,
            o = t.children,
            c = -1,
            u = o.length,
            f = t.value && (i - e) / t.value;
          ++c < u;

        )
          ((a = o[c]).x0 = n),
            (a.x1 = r),
            (a.y0 = e),
            (a.y1 = e += a.value * f);
      },
      $n = (1 + Math.sqrt(5)) / 2;
    function Zn(t, n, e, r, i, a) {
      for (
        var o,
          c,
          u,
          f,
          s,
          l,
          h,
          d,
          p,
          b,
          y,
          _ = [],
          g = n.children,
          v = 0,
          m = 0,
          x = g.length,
          w = n.value;
        v < x;

      ) {
        (u = i - e), (f = a - r);
        do {
          s = g[m++].value;
        } while (!s && m < x);
        for (
          l = h = s,
            y = s * s * (b = Math.max(f / u, u / f) / (w * t)),
            p = Math.max(h / y, y / l);
          m < x;
          ++m
        ) {
          if (
            ((s += c = g[m].value),
            c < l && (l = c),
            c > h && (h = c),
            (y = s * s * b),
            (d = Math.max(h / y, y / l)) > p)
          ) {
            s -= c;
            break;
          }
          p = d;
        }
        _.push((o = { value: s, dice: u < f, children: g.slice(v, m) })),
          o.dice
            ? Xn(o, e, r, i, w ? (r += (f * s) / w) : a)
            : Wn(o, e, r, w ? (e += (u * s) / w) : i, a),
          (w -= s),
          (v = m);
      }
      return _;
    }
    (function t(n) {
      function e(t, e, r, i, a) {
        Zn(n, t, e, r, i, a);
      }
      return (
        (e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1);
        }),
        e
      );
    })($n),
      (function t(n) {
        function e(t, e, r, i, a) {
          if ((o = t._squarify) && o.ratio === n)
            for (
              var o, c, u, f, s, l = -1, h = o.length, d = t.value;
              ++l < h;

            ) {
              for (
                u = (c = o[l]).children, f = c.value = 0, s = u.length;
                f < s;
                ++f
              )
                c.value += u[f].value;
              c.dice
                ? Xn(c, e, r, i, (r += ((a - r) * c.value) / d))
                : Wn(c, e, r, (e += ((i - e) * c.value) / d), a),
                (d -= c.value);
            }
          else (t._squarify = o = Zn(n, t, e, r, i, a)), (o.ratio = n);
        }
        return (
          (e.ratio = function (n) {
            return t((n = +n) > 1 ? n : 1);
          }),
          e
        );
      })($n);
    var Qn = function () {
        return Math.random();
      },
      Jn =
        ((function t(n) {
          function e(t, e) {
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
              function () {
                return n() * e + t;
              }
            );
          }
          return (e.source = t), e;
        })(Qn),
        (function t(n) {
          function e(t, e) {
            var r, i;
            return (
              (t = null == t ? 0 : +t),
              (e = null == e ? 1 : +e),
              function () {
                var a;
                if (null != r) (a = r), (r = null);
                else
                  do {
                    (r = 2 * n() - 1), (a = 2 * n() - 1), (i = r * r + a * a);
                  } while (!i || i > 1);
                return t + e * a * Math.sqrt((-2 * Math.log(i)) / i);
              }
            );
          }
          return (e.source = t), e;
        })(Qn)),
      Gn =
        ((function t(n) {
          function e() {
            var t = Jn.source(n).apply(this, arguments);
            return function () {
              return Math.exp(t());
            };
          }
          return (e.source = t), e;
        })(Qn),
        (function t(n) {
          function e(t) {
            return function () {
              for (var e = 0, r = 0; r < t; ++r) e += n();
              return e;
            };
          }
          return (e.source = t), e;
        })(Qn)),
      Kn =
        ((function t(n) {
          function e(t) {
            var e = Gn.source(n)(t);
            return function () {
              return e() / t;
            };
          }
          return (e.source = t), e;
        })(Qn),
        (function t(n) {
          function e(t) {
            return function () {
              return -Math.log(1 - n()) / t;
            };
          }
          return (e.source = t), e;
        })(Qn),
        e(11)),
      te = function (t) {
        for (var n = (t.length / 6) | 0, e = new Array(n), r = 0; r < n; )
          e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e;
      },
      ne =
        (te("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        te("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        te("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        te(
          "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
        ),
        te("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        te("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        te("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        te("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        te(
          "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
        ),
        function (t) {
          return Object(u.e)(t[t.length - 1]);
        });
    ne(
      new Array(3)
        .concat(
          "d8b365f5f5f55ab4ac",
          "a6611adfc27d80cdc1018571",
          "a6611adfc27df5f5f580cdc1018571",
          "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
          "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
          "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
          "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
          "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
          "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
        )
        .map(te)
    ),
      ne(
        new Array(3)
          .concat(
            "af8dc3f7f7f77fbf7b",
            "7b3294c2a5cfa6dba0008837",
            "7b3294c2a5cff7f7f7a6dba0008837",
            "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
            "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
            "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
            "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
            "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
            "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "e9a3c9f7f7f7a1d76a",
            "d01c8bf1b6dab8e1864dac26",
            "d01c8bf1b6daf7f7f7b8e1864dac26",
            "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
            "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
            "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
            "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
            "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
            "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "998ec3f7f7f7f1a340",
            "5e3c99b2abd2fdb863e66101",
            "5e3c99b2abd2f7f7f7fdb863e66101",
            "542788998ec3d8daebfee0b6f1a340b35806",
            "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
            "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
            "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
            "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
            "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "ef8a62f7f7f767a9cf",
            "ca0020f4a58292c5de0571b0",
            "ca0020f4a582f7f7f792c5de0571b0",
            "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
            "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
            "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
            "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
            "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
            "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "ef8a62ffffff999999",
            "ca0020f4a582bababa404040",
            "ca0020f4a582ffffffbababa404040",
            "b2182bef8a62fddbc7e0e0e09999994d4d4d",
            "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
            "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
            "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
            "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
            "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fc8d59ffffbf91bfdb",
            "d7191cfdae61abd9e92c7bb6",
            "d7191cfdae61ffffbfabd9e92c7bb6",
            "d73027fc8d59fee090e0f3f891bfdb4575b4",
            "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
            "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
            "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
            "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
            "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fc8d59ffffbf91cf60",
            "d7191cfdae61a6d96a1a9641",
            "d7191cfdae61ffffbfa6d96a1a9641",
            "d73027fc8d59fee08bd9ef8b91cf601a9850",
            "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
            "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
            "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
            "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
            "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fc8d59ffffbf99d594",
            "d7191cfdae61abdda42b83ba",
            "d7191cfdae61ffffbfabdda42b83ba",
            "d53e4ffc8d59fee08be6f59899d5943288bd",
            "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
            "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
            "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
            "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
            "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "e5f5f999d8c92ca25f",
            "edf8fbb2e2e266c2a4238b45",
            "edf8fbb2e2e266c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a42ca25f006d2c",
            "edf8fbccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
            "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "e0ecf49ebcda8856a7",
            "edf8fbb3cde38c96c688419d",
            "edf8fbb3cde38c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
            "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
            "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "e0f3dba8ddb543a2ca",
            "f0f9e8bae4bc7bccc42b8cbe",
            "f0f9e8bae4bc7bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
            "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
            "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fee8c8fdbb84e34a33",
            "fef0d9fdcc8afc8d59d7301f",
            "fef0d9fdcc8afc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59e34a33b30000",
            "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
            "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "ece2f0a6bddb1c9099",
            "f6eff7bdc9e167a9cf02818a",
            "f6eff7bdc9e167a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
            "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
            "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "ece7f2a6bddb2b8cbe",
            "f1eef6bdc9e174a9cf0570b0",
            "f1eef6bdc9e174a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
            "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
            "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "e7e1efc994c7dd1c77",
            "f1eef6d7b5d8df65b0ce1256",
            "f1eef6d7b5d8df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0dd1c77980043",
            "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
            "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fde0ddfa9fb5c51b8a",
            "feebe2fbb4b9f768a1ae017e",
            "feebe2fbb4b9f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
            "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
            "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "edf8b17fcdbb2c7fb8",
            "ffffcca1dab441b6c4225ea8",
            "ffffcca1dab441b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
            "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
            "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "f7fcb9addd8e31a354",
            "ffffccc2e69978c679238443",
            "ffffccc2e69978c67931a354006837",
            "ffffccd9f0a3addd8e78c67931a354006837",
            "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
            "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fff7bcfec44fd95f0e",
            "ffffd4fed98efe9929cc4c02",
            "ffffd4fed98efe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929d95f0e993404",
            "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
            "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "ffeda0feb24cf03b20",
            "ffffb2fecc5cfd8d3ce31a1c",
            "ffffb2fecc5cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cf03b20bd0026",
            "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
            "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "deebf79ecae13182bd",
            "eff3ffbdd7e76baed62171b5",
            "eff3ffbdd7e76baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed63182bd08519c",
            "eff3ffc6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
            "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "e5f5e0a1d99b31a354",
            "edf8e9bae4b374c476238b45",
            "edf8e9bae4b374c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47631a354006d2c",
            "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
            "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "f0f0f0bdbdbd636363",
            "f7f7f7cccccc969696525252",
            "f7f7f7cccccc969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696636363252525",
            "f7f7f7d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
            "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "efedf5bcbddc756bb1",
            "f2f0f7cbc9e29e9ac86a51a3",
            "f2f0f7cbc9e29e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
            "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
            "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fee0d2fc9272de2d26",
            "fee5d9fcae91fb6a4acb181d",
            "fee5d9fcae91fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
            "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
            "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
          )
          .map(te)
      ),
      ne(
        new Array(3)
          .concat(
            "fee6cefdae6be6550d",
            "feeddefdbe85fd8d3cd94701",
            "feeddefdbe85fd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3ce6550da63603",
            "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
            "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
          )
          .map(te)
      ),
      Object(u.b)(Object(F.b)(300, 0.5, 0), Object(F.b)(-240, 0.5, 1)),
      Object(u.b)(Object(F.b)(-100, 0.75, 0.35), Object(F.b)(80, 1.5, 0.8)),
      Object(u.b)(Object(F.b)(260, 0.75, 0.35), Object(F.b)(80, 1.5, 0.8)),
      Object(F.b)(),
      Object(F.f)(),
      Math.PI,
      Math.PI;
    function ee(t) {
      var n = t.length;
      return function (e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
      };
    }
    ee(
      te(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    ),
      ee(
        te(
          "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
        )
      ),
      ee(
        te(
          "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
        )
      ),
      ee(
        te(
          "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
        )
      );
    var re = function (t) {
        return function () {
          return t;
        };
      },
      ie =
        (Math.abs,
        Math.atan2,
        Math.cos,
        Math.max,
        Math.min,
        Math.sin,
        Math.sqrt,
        1e-12),
      ae = Math.PI,
      oe = 2 * ae;
    function ce(t) {
      this._context = t;
    }
    ce.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n);
        }
      },
    };
    var ue = function (t) {
      return new ce(t);
    };
    function fe(t) {
      return t[0];
    }
    function se(t) {
      return t[1];
    }
    var le = function () {
      var t = fe,
        n = se,
        e = re(!0),
        r = null,
        i = ue,
        a = null;
      function o(o) {
        var c,
          u,
          f,
          s = o.length,
          l = !1;
        for (null == r && (a = i((f = it()))), c = 0; c <= s; ++c)
          !(c < s && e((u = o[c]), c, o)) === l &&
            ((l = !l) ? a.lineStart() : a.lineEnd()),
            l && a.point(+t(u, c, o), +n(u, c, o));
        if (f) return (a = null), f + "" || null;
      }
      return (
        (o.x = function (n) {
          return arguments.length
            ? ((t = "function" == typeof n ? n : re(+n)), o)
            : t;
        }),
        (o.y = function (t) {
          return arguments.length
            ? ((n = "function" == typeof t ? t : re(+t)), o)
            : n;
        }),
        (o.defined = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : re(!!t)), o)
            : e;
        }),
        (o.curve = function (t) {
          return arguments.length ? ((i = t), null != r && (a = i(r)), o) : i;
        }),
        (o.context = function (t) {
          return arguments.length
            ? (null == t ? (r = a = null) : (a = i((r = t))), o)
            : r;
        }),
        o
      );
    };
    de(ue);
    function he(t) {
      this._curve = t;
    }
    function de(t) {
      function n(n) {
        return new he(t(n));
      }
      return (n._curve = t), n;
    }
    he.prototype = {
      areaStart: function () {
        this._curve.areaStart();
      },
      areaEnd: function () {
        this._curve.areaEnd();
      },
      lineStart: function () {
        this._curve.lineStart();
      },
      lineEnd: function () {
        this._curve.lineEnd();
      },
      point: function (t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t));
      },
    };
    var pe = Array.prototype.slice;
    Math.sqrt(1 / 3);
    var be = Math.sin(ae / 10) / Math.sin((7 * ae) / 10),
      ye =
        (Math.sin(oe / 10),
        Math.cos(oe / 10),
        Math.sqrt(3),
        Math.sqrt(3),
        Math.sqrt(12),
        function () {});
    function _e(t, n, e) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + n) / 6,
        (t._y0 + 4 * t._y1 + e) / 6
      );
    }
    function ge(t) {
      this._context = t;
    }
    ge.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 3:
            _e(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._context.lineTo(
                (5 * this._x0 + this._x1) / 6,
                (5 * this._y0 + this._y1) / 6
              );
          default:
            _e(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    function ve(t) {
      this._context = t;
    }
    ve.prototype = {
      areaStart: ye,
      areaEnd: ye,
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = t), (this._y2 = n);
            break;
          case 1:
            (this._point = 2), (this._x3 = t), (this._y3 = n);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = t),
              (this._y4 = n),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + t) / 6,
                (this._y0 + 4 * this._y1 + n) / 6
              );
            break;
          default:
            _e(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    function me(t) {
      this._context = t;
    }
    me.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
            this._line
              ? this._context.lineTo(e, r)
              : this._context.moveTo(e, r);
            break;
          case 3:
            this._point = 4;
          default:
            _e(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    };
    function xe(t, n) {
      (this._basis = new ge(t)), (this._beta = n);
    }
    xe.prototype = {
      lineStart: function () {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (
            var r, i = t[0], a = n[0], o = t[e] - i, c = n[e] - a, u = -1;
            ++u <= e;

          )
            (r = u / e),
              this._basis.point(
                this._beta * t[u] + (1 - this._beta) * (i + r * o),
                this._beta * n[u] + (1 - this._beta) * (a + r * c)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    };
    (function t(n) {
      function e(t) {
        return 1 === n ? new ge(t) : new xe(t, n);
      }
      return (
        (e.beta = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.85);
    function we(t, n, e) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - n),
        t._y2 + t._k * (t._y1 - e),
        t._x2,
        t._y2
      );
    }
    function Me(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    Me.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            we(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            (this._point = 2), (this._x1 = t), (this._y1 = n);
            break;
          case 2:
            this._point = 3;
          default:
            we(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    (function t(n) {
      function e(t) {
        return new Me(t, n);
      }
      return (
        (e.tension = function (n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function ke(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    ke.prototype = {
      areaStart: ye,
      areaEnd: ye,
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            we(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    (function t(n) {
      function e(t) {
        return new ke(t, n);
      }
      return (
        (e.tension = function (n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function Ne(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    Ne.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            we(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    (function t(n) {
      function e(t) {
        return new Ne(t, n);
      }
      return (
        (e.tension = function (n) {
          return t(+n);
        }),
        e
      );
    })(0);
    function Ae(t, n, e) {
      var r = t._x1,
        i = t._y1,
        a = t._x2,
        o = t._y2;
      if (t._l01_a > ie) {
        var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          u = 3 * t._l01_a * (t._l01_a + t._l12_a);
        (r = (r * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / u),
          (i = (i * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / u);
      }
      if (t._l23_a > ie) {
        var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);
        (a = (a * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
          (o = (o * f + t._y1 * t._l23_2a - e * t._l12_2a) / s);
      }
      t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2);
    }
    function Se(t, n) {
      (this._context = t), (this._alpha = n);
    }
    Se.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            Ae(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    (function t(n) {
      function e(t) {
        return n ? new Se(t, n) : new Me(t, 0);
      }
      return (
        (e.alpha = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Te(t, n) {
      (this._context = t), (this._alpha = n);
    }
    Te.prototype = {
      areaStart: ye,
      areaEnd: ye,
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            Ae(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    (function t(n) {
      function e(t) {
        return n ? new Te(t, n) : new ke(t, 0);
      }
      return (
        (e.alpha = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Ce(t, n) {
      (this._context = t), (this._alpha = n);
    }
    Ce.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Ae(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    };
    (function t(n) {
      function e(t) {
        return n ? new Ce(t, n) : new Ne(t, 0);
      }
      return (
        (e.alpha = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.5);
    function Le(t) {
      this._context = t;
    }
    Le.prototype = {
      areaStart: ye,
      areaEnd: ye,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (t, n) {
        (t = +t),
          (n = +n),
          this._point
            ? this._context.lineTo(t, n)
            : ((this._point = 1), this._context.moveTo(t, n));
      },
    };
    function Ee(t) {
      return t < 0 ? -1 : 1;
    }
    function Oe(t, n, e) {
      var r = t._x1 - t._x0,
        i = n - t._x1,
        a = (t._y1 - t._y0) / (r || (i < 0 && -0)),
        o = (e - t._y1) / (i || (r < 0 && -0)),
        c = (a * i + o * r) / (r + i);
      return (
        (Ee(a) + Ee(o)) *
          Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(c)) || 0
      );
    }
    function je(t, n) {
      var e = t._x1 - t._x0;
      return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
    }
    function Ue(t, n, e) {
      var r = t._x0,
        i = t._y0,
        a = t._x1,
        o = t._y1,
        c = (a - r) / 3;
      t._context.bezierCurveTo(r + c, i + c * n, a - c, o - c * e, a, o);
    }
    function De(t) {
      this._context = t;
    }
    function Pe(t) {
      this._context = new Re(t);
    }
    function Re(t) {
      this._context = t;
    }
    function Ye(t) {
      this._context = t;
    }
    function qe(t) {
      var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        a = new Array(r),
        o = new Array(r);
      for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
        (i[n] = 1), (a[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1]);
      for (
        i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1;
        n < r;
        ++n
      )
        (e = i[n] / a[n - 1]), (a[n] -= e), (o[n] -= e * o[n - 1]);
      for (i[r - 1] = o[r - 1] / a[r - 1], n = r - 2; n >= 0; --n)
        i[n] = (o[n] - i[n + 1]) / a[n];
      for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
        a[n] = 2 * t[n + 1] - i[n + 1];
      return [i, a];
    }
    (De.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Ue(this, this._t0, je(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        var e = NaN;
        if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Ue(this, je(this, (e = Oe(this, t, n))), e);
              break;
            default:
              Ue(this, this._t0, (e = Oe(this, t, n)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n),
            (this._t0 = e);
        }
      },
    }),
      ((Pe.prototype = Object.create(De.prototype)).point = function (t, n) {
        De.prototype.point.call(this, n, t);
      }),
      (Re.prototype = {
        moveTo: function (t, n) {
          this._context.moveTo(n, t);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (t, n) {
          this._context.lineTo(n, t);
        },
        bezierCurveTo: function (t, n, e, r, i, a) {
          this._context.bezierCurveTo(n, t, r, e, a, i);
        },
      }),
      (Ye.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = []), (this._y = []);
        },
        lineEnd: function () {
          var t = this._x,
            n = this._y,
            e = t.length;
          if (e)
            if (
              (this._line
                ? this._context.lineTo(t[0], n[0])
                : this._context.moveTo(t[0], n[0]),
              2 === e)
            )
              this._context.lineTo(t[1], n[1]);
            else
              for (var r = qe(t), i = qe(n), a = 0, o = 1; o < e; ++a, ++o)
                this._context.bezierCurveTo(
                  r[0][a],
                  i[0][a],
                  r[1][a],
                  i[1][a],
                  t[o],
                  n[o]
                );
          (this._line || (0 !== this._line && 1 === e)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function (t, n) {
          this._x.push(+t), this._y.push(+n);
        },
      });
    function ze(t, n) {
      (this._context = t), (this._t = n);
    }
    ze.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x = this._y = NaN), (this._point = 0);
      },
      lineEnd: function () {
        0 < this._t &&
          this._t < 1 &&
          2 === this._point &&
          this._context.lineTo(this._x, this._y),
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
          this._line >= 0 &&
            ((this._t = 1 - this._t), (this._line = 1 - this._line));
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0)
              this._context.lineTo(this._x, n), this._context.lineTo(t, n);
            else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, n);
            }
        }
        (this._x = t), (this._y = n);
      },
    };
    var Ie = function (t, n) {
        if ((i = t.length) > 1)
          for (var e, r, i, a = 1, o = t[n[0]], c = o.length; a < i; ++a)
            for (r = o, o = t[n[a]], e = 0; e < c; ++e)
              o[e][1] += o[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      },
      Fe = function (t) {
        for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
        return e;
      };
    function He(t, n) {
      return t[n];
    }
    var Be = function () {
        var t = re([]),
          n = Fe,
          e = Ie,
          r = He;
        function i(i) {
          var a,
            o,
            c = t.apply(this, arguments),
            u = i.length,
            f = c.length,
            s = new Array(f);
          for (a = 0; a < f; ++a) {
            for (var l, h = c[a], d = (s[a] = new Array(u)), p = 0; p < u; ++p)
              (d[p] = l = [0, +r(i[p], h, p, i)]), (l.data = i[p]);
            d.key = h;
          }
          for (a = 0, o = n(s); a < f; ++a) s[o[a]].index = a;
          return e(s, o), s;
        }
        return (
          (i.keys = function (n) {
            return arguments.length
              ? ((t = "function" == typeof n ? n : re(pe.call(n))), i)
              : t;
          }),
          (i.value = function (t) {
            return arguments.length
              ? ((r = "function" == typeof t ? t : re(+t)), i)
              : r;
          }),
          (i.order = function (t) {
            return arguments.length
              ? ((n =
                  null == t ? Fe : "function" == typeof t ? t : re(pe.call(t))),
                i)
              : n;
          }),
          (i.offset = function (t) {
            return arguments.length ? ((e = null == t ? Ie : t), i) : e;
          }),
          i
        );
      },
      Xe = function (t, n) {
        if ((c = t.length) > 0)
          for (var e, r, i, a, o, c, u = 0, f = t[n[0]].length; u < f; ++u)
            for (a = o = 0, e = 0; e < c; ++e)
              (i = (r = t[n[e]][u])[1] - r[0]) >= 0
                ? ((r[0] = a), (r[1] = a += i))
                : i < 0
                ? ((r[1] = o), (r[0] = o += i))
                : (r[0] = a);
      };
    e(2), e(10);
    function Ve() {
      this._ = null;
    }
    function We(t) {
      t.U = t.C = t.L = t.R = t.P = t.N = null;
    }
    function $e(t, n) {
      var e = n,
        r = n.R,
        i = e.U;
      i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (e.U = r),
        (e.R = r.L),
        e.R && (e.R.U = e),
        (r.L = e);
    }
    function Ze(t, n) {
      var e = n,
        r = n.L,
        i = e.U;
      i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (e.U = r),
        (e.L = r.R),
        e.L && (e.L.U = e),
        (r.R = e);
    }
    function Qe(t) {
      for (; t.L; ) t = t.L;
      return t;
    }
    Ve.prototype = {
      constructor: Ve,
      insert: function (t, n) {
        var e, r, i;
        if (t) {
          if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
            for (t = t.R; t.L; ) t = t.L;
            t.L = n;
          } else t.R = n;
          e = t;
        } else
          this._
            ? ((t = Qe(this._)),
              (n.P = null),
              (n.N = t),
              (t.P = t.L = n),
              (e = t))
            : ((n.P = n.N = null), (this._ = n), (e = null));
        for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
          e === (r = e.U).L
            ? (i = r.R) && i.C
              ? ((e.C = i.C = !1), (r.C = !0), (t = r))
              : (t === e.R && ($e(this, e), (e = (t = e).U)),
                (e.C = !1),
                (r.C = !0),
                Ze(this, r))
            : (i = r.L) && i.C
            ? ((e.C = i.C = !1), (r.C = !0), (t = r))
            : (t === e.L && (Ze(this, e), (e = (t = e).U)),
              (e.C = !1),
              (r.C = !0),
              $e(this, r)),
            (e = t.U);
        this._.C = !1;
      },
      remove: function (t) {
        t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
        var n,
          e,
          r,
          i = t.U,
          a = t.L,
          o = t.R;
        if (
          ((e = a ? (o ? Qe(o) : a) : o),
          i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
          a && o
            ? ((r = e.C),
              (e.C = t.C),
              (e.L = a),
              (a.U = e),
              e !== o
                ? ((i = e.U),
                  (e.U = t.U),
                  (t = e.R),
                  (i.L = t),
                  (e.R = o),
                  (o.U = e))
                : ((e.U = i), (i = e), (t = e.R)))
            : ((r = t.C), (t = e)),
          t && (t.U = i),
          !r)
        )
          if (t && t.C) t.C = !1;
          else {
            do {
              if (t === this._) break;
              if (t === i.L) {
                if (
                  ((n = i.R).C &&
                    ((n.C = !1), (i.C = !0), $e(this, i), (n = i.R)),
                  (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  (n.R && n.R.C) ||
                    ((n.L.C = !1), (n.C = !0), Ze(this, n), (n = i.R)),
                    (n.C = i.C),
                    (i.C = n.R.C = !1),
                    $e(this, i),
                    (t = this._);
                  break;
                }
              } else if (
                ((n = i.L).C &&
                  ((n.C = !1), (i.C = !0), Ze(this, i), (n = i.L)),
                (n.L && n.L.C) || (n.R && n.R.C))
              ) {
                (n.L && n.L.C) ||
                  ((n.R.C = !1), (n.C = !0), $e(this, n), (n = i.L)),
                  (n.C = i.C),
                  (i.C = n.L.C = !1),
                  Ze(this, i),
                  (t = this._);
                break;
              }
              (n.C = !0), (t = i), (i = i.U);
            } while (!t.C);
            t && (t.C = !1);
          }
      },
    };
    var Je = Ve;
    function Ge(t, n, e, r) {
      var i = [null, null],
        a = wr.push(i) - 1;
      return (
        (i.left = t),
        (i.right = n),
        e && tr(i, t, n, e),
        r && tr(i, n, t, r),
        mr[t.index].halfedges.push(a),
        mr[n.index].halfedges.push(a),
        i
      );
    }
    function Ke(t, n, e) {
      var r = [n, e];
      return (r.left = t), r;
    }
    function tr(t, n, e, r) {
      t[0] || t[1]
        ? t.left === e
          ? (t[1] = r)
          : (t[0] = r)
        : ((t[0] = r), (t.left = n), (t.right = e));
    }
    function nr(t, n, e, r, i) {
      var a,
        o = t[0],
        c = t[1],
        u = o[0],
        f = o[1],
        s = 0,
        l = 1,
        h = c[0] - u,
        d = c[1] - f;
      if (((a = n - u), h || !(a > 0))) {
        if (((a /= h), h < 0)) {
          if (a < s) return;
          a < l && (l = a);
        } else if (h > 0) {
          if (a > l) return;
          a > s && (s = a);
        }
        if (((a = r - u), h || !(a < 0))) {
          if (((a /= h), h < 0)) {
            if (a > l) return;
            a > s && (s = a);
          } else if (h > 0) {
            if (a < s) return;
            a < l && (l = a);
          }
          if (((a = e - f), d || !(a > 0))) {
            if (((a /= d), d < 0)) {
              if (a < s) return;
              a < l && (l = a);
            } else if (d > 0) {
              if (a > l) return;
              a > s && (s = a);
            }
            if (((a = i - f), d || !(a < 0))) {
              if (((a /= d), d < 0)) {
                if (a > l) return;
                a > s && (s = a);
              } else if (d > 0) {
                if (a < s) return;
                a < l && (l = a);
              }
              return (
                !(s > 0 || l < 1) ||
                (s > 0 && (t[0] = [u + s * h, f + s * d]),
                l < 1 && (t[1] = [u + l * h, f + l * d]),
                !0)
              );
            }
          }
        }
      }
    }
    function er(t, n, e, r, i) {
      var a = t[1];
      if (a) return !0;
      var o,
        c,
        u = t[0],
        f = t.left,
        s = t.right,
        l = f[0],
        h = f[1],
        d = s[0],
        p = s[1],
        b = (l + d) / 2,
        y = (h + p) / 2;
      if (p === h) {
        if (b < n || b >= r) return;
        if (l > d) {
          if (u) {
            if (u[1] >= i) return;
          } else u = [b, e];
          a = [b, i];
        } else {
          if (u) {
            if (u[1] < e) return;
          } else u = [b, i];
          a = [b, e];
        }
      } else if (((c = y - (o = (l - d) / (p - h)) * b), o < -1 || o > 1))
        if (l > d) {
          if (u) {
            if (u[1] >= i) return;
          } else u = [(e - c) / o, e];
          a = [(i - c) / o, i];
        } else {
          if (u) {
            if (u[1] < e) return;
          } else u = [(i - c) / o, i];
          a = [(e - c) / o, e];
        }
      else if (h < p) {
        if (u) {
          if (u[0] >= r) return;
        } else u = [n, o * n + c];
        a = [r, o * r + c];
      } else {
        if (u) {
          if (u[0] < n) return;
        } else u = [r, o * r + c];
        a = [n, o * n + c];
      }
      return (t[0] = u), (t[1] = a), !0;
    }
    function rr(t, n) {
      var e = t.site,
        r = n.left,
        i = n.right;
      return (
        e === i && ((i = r), (r = e)),
        i
          ? Math.atan2(i[1] - r[1], i[0] - r[0])
          : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
            Math.atan2(r[0] - i[0], i[1] - r[1]))
      );
    }
    function ir(t, n) {
      return n[+(n.left !== t.site)];
    }
    function ar(t, n) {
      return n[+(n.left === t.site)];
    }
    var or,
      cr = [];
    function ur() {
      We(this), (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function fr(t) {
      var n = t.P,
        e = t.N;
      if (n && e) {
        var r = n.site,
          i = t.site,
          a = e.site;
        if (r !== a) {
          var o = i[0],
            c = i[1],
            u = r[0] - o,
            f = r[1] - c,
            s = a[0] - o,
            l = a[1] - c,
            h = 2 * (u * l - f * s);
          if (!(h >= -kr)) {
            var d = u * u + f * f,
              p = s * s + l * l,
              b = (l * d - f * p) / h,
              y = (u * p - s * d) / h,
              _ = cr.pop() || new ur();
            (_.arc = t),
              (_.site = i),
              (_.x = b + o),
              (_.y = (_.cy = y + c) + Math.sqrt(b * b + y * y)),
              (t.circle = _);
            for (var g = null, v = xr._; v; )
              if (_.y < v.y || (_.y === v.y && _.x <= v.x)) {
                if (!v.L) {
                  g = v.P;
                  break;
                }
                v = v.L;
              } else {
                if (!v.R) {
                  g = v;
                  break;
                }
                v = v.R;
              }
            xr.insert(g, _), g || (or = _);
          }
        }
      }
    }
    function sr(t) {
      var n = t.circle;
      n &&
        (n.P || (or = n.N), xr.remove(n), cr.push(n), We(n), (t.circle = null));
    }
    var lr = [];
    function hr() {
      We(this), (this.edge = this.site = this.circle = null);
    }
    function dr(t) {
      var n = lr.pop() || new hr();
      return (n.site = t), n;
    }
    function pr(t) {
      sr(t), vr.remove(t), lr.push(t), We(t);
    }
    function br(t) {
      var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        a = t.P,
        o = t.N,
        c = [t];
      pr(t);
      for (
        var u = a;
        u.circle &&
        Math.abs(e - u.circle.x) < Mr &&
        Math.abs(r - u.circle.cy) < Mr;

      )
        (a = u.P), c.unshift(u), pr(u), (u = a);
      c.unshift(u), sr(u);
      for (
        var f = o;
        f.circle &&
        Math.abs(e - f.circle.x) < Mr &&
        Math.abs(r - f.circle.cy) < Mr;

      )
        (o = f.N), c.push(f), pr(f), (f = o);
      c.push(f), sr(f);
      var s,
        l = c.length;
      for (s = 1; s < l; ++s)
        (f = c[s]), (u = c[s - 1]), tr(f.edge, u.site, f.site, i);
      (u = c[0]),
        ((f = c[l - 1]).edge = Ge(u.site, f.site, null, i)),
        fr(u),
        fr(f);
    }
    function yr(t) {
      for (var n, e, r, i, a = t[0], o = t[1], c = vr._; c; )
        if ((r = _r(c, o) - a) > Mr) c = c.L;
        else {
          if (!((i = a - gr(c, o)) > Mr)) {
            r > -Mr
              ? ((n = c.P), (e = c))
              : i > -Mr
              ? ((n = c), (e = c.N))
              : (n = e = c);
            break;
          }
          if (!c.R) {
            n = c;
            break;
          }
          c = c.R;
        }
      !(function (t) {
        mr[t.index] = { site: t, halfedges: [] };
      })(t);
      var u = dr(t);
      if ((vr.insert(n, u), n || e)) {
        if (n === e)
          return (
            sr(n),
            (e = dr(n.site)),
            vr.insert(u, e),
            (u.edge = e.edge = Ge(n.site, u.site)),
            fr(n),
            void fr(e)
          );
        if (e) {
          sr(n), sr(e);
          var f = n.site,
            s = f[0],
            l = f[1],
            h = t[0] - s,
            d = t[1] - l,
            p = e.site,
            b = p[0] - s,
            y = p[1] - l,
            _ = 2 * (h * y - d * b),
            g = h * h + d * d,
            v = b * b + y * y,
            m = [(y * g - d * v) / _ + s, (h * v - b * g) / _ + l];
          tr(e.edge, f, p, m),
            (u.edge = Ge(f, t, null, m)),
            (e.edge = Ge(t, p, null, m)),
            fr(n),
            fr(e);
        } else u.edge = Ge(n.site, u.site);
      }
    }
    function _r(t, n) {
      var e = t.site,
        r = e[0],
        i = e[1],
        a = i - n;
      if (!a) return r;
      var o = t.P;
      if (!o) return -1 / 0;
      var c = (e = o.site)[0],
        u = e[1],
        f = u - n;
      if (!f) return c;
      var s = c - r,
        l = 1 / a - 1 / f,
        h = s / f;
      return l
        ? (-h +
            Math.sqrt(
              h * h - 2 * l * ((s * s) / (-2 * f) - u + f / 2 + i - a / 2)
            )) /
            l +
            r
        : (r + c) / 2;
    }
    function gr(t, n) {
      var e = t.N;
      if (e) return _r(e, n);
      var r = t.site;
      return r[1] === n ? r[0] : 1 / 0;
    }
    var vr,
      mr,
      xr,
      wr,
      Mr = 1e-6,
      kr = 1e-12;
    function Nr(t, n) {
      return n[1] - t[1] || n[0] - t[0];
    }
    function Ar(t, n) {
      var e,
        r,
        i,
        a = t.sort(Nr).pop();
      for (wr = [], mr = new Array(t.length), vr = new Je(), xr = new Je(); ; )
        if (((i = or), a && (!i || a[1] < i.y || (a[1] === i.y && a[0] < i.x))))
          (a[0] === e && a[1] === r) || (yr(a), (e = a[0]), (r = a[1])),
            (a = t.pop());
        else {
          if (!i) break;
          br(i.arc);
        }
      if (
        ((function () {
          for (var t, n, e, r, i = 0, a = mr.length; i < a; ++i)
            if ((t = mr[i]) && (r = (n = t.halfedges).length)) {
              var o = new Array(r),
                c = new Array(r);
              for (e = 0; e < r; ++e) (o[e] = e), (c[e] = rr(t, wr[n[e]]));
              for (
                o.sort(function (t, n) {
                  return c[n] - c[t];
                }),
                  e = 0;
                e < r;
                ++e
              )
                c[e] = n[o[e]];
              for (e = 0; e < r; ++e) n[e] = c[e];
            }
        })(),
        n)
      ) {
        var o = +n[0][0],
          c = +n[0][1],
          u = +n[1][0],
          f = +n[1][1];
        !(function (t, n, e, r) {
          for (var i, a = wr.length; a--; )
            (er((i = wr[a]), t, n, e, r) &&
              nr(i, t, n, e, r) &&
              (Math.abs(i[0][0] - i[1][0]) > Mr ||
                Math.abs(i[0][1] - i[1][1]) > Mr)) ||
              delete wr[a];
        })(o, c, u, f),
          (function (t, n, e, r) {
            var i,
              a,
              o,
              c,
              u,
              f,
              s,
              l,
              h,
              d,
              p,
              b,
              y = mr.length,
              _ = !0;
            for (i = 0; i < y; ++i)
              if ((a = mr[i])) {
                for (o = a.site, c = (u = a.halfedges).length; c--; )
                  wr[u[c]] || u.splice(c, 1);
                for (c = 0, f = u.length; c < f; )
                  (p = (d = ar(a, wr[u[c]]))[0]),
                    (b = d[1]),
                    (l = (s = ir(a, wr[u[++c % f]]))[0]),
                    (h = s[1]),
                    (Math.abs(p - l) > Mr || Math.abs(b - h) > Mr) &&
                      (u.splice(
                        c,
                        0,
                        wr.push(
                          Ke(
                            o,
                            d,
                            Math.abs(p - t) < Mr && r - b > Mr
                              ? [t, Math.abs(l - t) < Mr ? h : r]
                              : Math.abs(b - r) < Mr && e - p > Mr
                              ? [Math.abs(h - r) < Mr ? l : e, r]
                              : Math.abs(p - e) < Mr && b - n > Mr
                              ? [e, Math.abs(l - e) < Mr ? h : n]
                              : Math.abs(b - n) < Mr && p - t > Mr
                              ? [Math.abs(h - n) < Mr ? l : t, n]
                              : null
                          )
                        ) - 1
                      ),
                      ++f);
                f && (_ = !1);
              }
            if (_) {
              var g,
                v,
                m,
                x = 1 / 0;
              for (i = 0, _ = null; i < y; ++i)
                (a = mr[i]) &&
                  (m = (g = (o = a.site)[0] - t) * g + (v = o[1] - n) * v) <
                    x &&
                  ((x = m), (_ = a));
              if (_) {
                var w = [t, n],
                  M = [t, r],
                  k = [e, r],
                  N = [e, n];
                _.halfedges.push(
                  wr.push(Ke((o = _.site), w, M)) - 1,
                  wr.push(Ke(o, M, k)) - 1,
                  wr.push(Ke(o, k, N)) - 1,
                  wr.push(Ke(o, N, w)) - 1
                );
              }
            }
            for (i = 0; i < y; ++i)
              (a = mr[i]) && (a.halfedges.length || delete mr[i]);
          })(o, c, u, f);
      }
      (this.edges = wr), (this.cells = mr), (vr = xr = wr = mr = null);
    }
    Ar.prototype = {
      constructor: Ar,
      polygons: function () {
        var t = this.edges;
        return this.cells.map(function (n) {
          var e = n.halfedges.map(function (e) {
            return ir(n, t[e]);
          });
          return (e.data = n.site.data), e;
        });
      },
      triangles: function () {
        var t = [],
          n = this.edges;
        return (
          this.cells.forEach(function (e, r) {
            if ((a = (i = e.halfedges).length))
              for (
                var i,
                  a,
                  o,
                  c,
                  u,
                  f,
                  s = e.site,
                  l = -1,
                  h = n[i[a - 1]],
                  d = h.left === s ? h.right : h.left;
                ++l < a;

              )
                (o = d),
                  (d = (h = n[i[l]]).left === s ? h.right : h.left),
                  o &&
                    d &&
                    r < o.index &&
                    r < d.index &&
                    ((u = o),
                    (f = d),
                    ((c = s)[0] - f[0]) * (u[1] - c[1]) -
                      (c[0] - u[0]) * (f[1] - c[1]) <
                      0) &&
                    t.push([s.data, o.data, d.data]);
          }),
          t
        );
      },
      links: function () {
        return this.edges
          .filter(function (t) {
            return t.right;
          })
          .map(function (t) {
            return { source: t.left.data, target: t.right.data };
          });
      },
      find: function (t, n, e) {
        for (
          var r, i, a = this, o = a._found || 0, c = a.cells.length;
          !(i = a.cells[o]);

        )
          if (++o >= c) return null;
        var u = t - i.site[0],
          f = n - i.site[1],
          s = u * u + f * f;
        do {
          (i = a.cells[(r = o)]),
            (o = null),
            i.halfedges.forEach(function (e) {
              var r = a.edges[e],
                c = r.left;
              if ((c !== i.site && c) || (c = r.right)) {
                var u = t - c[0],
                  f = n - c[1],
                  l = u * u + f * f;
                l < s && ((s = l), (o = c.index));
              }
            });
        } while (null !== o);
        return (a._found = r), null == e || s <= e * e ? i.site : null;
      },
    };
    function Sr(t, n, e) {
      (this.k = t), (this.x = n), (this.y = e);
    }
    Sr.prototype = {
      constructor: Sr,
      scale: function (t) {
        return 1 === t ? this : new Sr(this.k * t, this.x, this.y);
      },
      translate: function (t, n) {
        return (0 === t) & (0 === n)
          ? this
          : new Sr(this.k, this.x + this.k * t, this.y + this.k * n);
      },
      apply: function (t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y];
      },
      applyX: function (t) {
        return t * this.k + this.x;
      },
      applyY: function (t) {
        return t * this.k + this.y;
      },
      invert: function (t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
      },
      invertX: function (t) {
        return (t - this.x) / this.k;
      },
      invertY: function (t) {
        return (t - this.y) / this.k;
      },
      rescaleX: function (t) {
        return t
          .copy()
          .domain(t.range().map(this.invertX, this).map(t.invert, t));
      },
      rescaleY: function (t) {
        return t
          .copy()
          .domain(t.range().map(this.invertY, this).map(t.invert, t));
      },
      toString: function () {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      },
    };
    new Sr(1, 0, 0);
    Sr.prototype;
    var Tr = jt.a(".1f"),
      Cr = function (t) {
        return Tr(t);
      },
      Lr = Kn.scaleLinear().range([14, 22]),
      Er = 800,
      Or = 50;
    function jr(t, n, e) {
      return (
        (window.thisYearCsv = t.filter(function (t) {
          return t.year == e;
        })),
        thisYearCsv.forEach(function (t) {
          return (t.dollars = +t.dollars);
        }),
        (window.thisYearDeficit = n.filter(function (t) {
          return t.year == e;
        })),
        (window.arr = []),
        thisYearCsv.forEach(function (t) {
          arr.push(t.source), arr.push(t.target);
        }),
        (window.nodes = arr.filter(Dr).map(function (t, n) {
          return { node: n, name: t };
        })),
        (window.links = thisYearCsv.map(function (t) {
          return {
            source: n("source"),
            target: n("target"),
            value: +t.value,
            type: t.type,
          };
          function n(n) {
            return nodes.filter(function (e) {
              return e.name == t[n];
            })[0].node;
          }
        })),
        (window.lineData = t),
        lineData.forEach(function (t) {
          (t.year = +t.year), (t.value = +t.value);
        }),
        {
          lineData: lineData,
          links: links,
          nodes: nodes,
          thisYearCsv: thisYearCsv,
          thisYearDeficit: thisYearDeficit,
        }
      );
    }
    function Ur() {
      (window.key = f.select(this).attr("key")),
        (window.lineLabelData = lineData.filter(function (t) {
          return (
            t.source.split(" ").join("_") == key ||
            t.target.split(" ").join("_") == key
          );
        })),
        f
          .selectAll(".line")
          .filter(function (t) {
            return f.select(this).attr("key") == key;
          })
          .transition()
          .duration(Or)
          .style("opacity", 1),
        f
          .selectAll(".line")
          .filter(function (t) {
            return f.select(this).attr("key") != key;
          })
          .transition()
          .duration(Or)
          .style("opacity", 0.2),
        f
          .selectAll(".link")
          .filter(function (t) {
            return f.select(this).attr("key") == key;
          })
          .transition()
          .duration(Or)
          .style("stroke-opacity", 0.7),
        f
          .selectAll(".link")
          .filter(function (t) {
            return f.select(this).attr("key") != key;
          })
          .transition()
          .duration(Or)
          .style("stroke-opacity", 0.4),
        f
          .selectAll(".nodeRect")
          .filter(function (t) {
            return f.select(this).attr("key") == key;
          })
          .transition()
          .duration(Or)
          .style("opacity", 1),
        f
          .selectAll(".nodeRect")
          .filter(function (t) {
            return f.select(this).attr("key") != key;
          })
          .transition()
          .duration(Or)
          .style("opacity", 0.5),
        f.selectAll(".lineLabel").remove(),
        f
          .selectAll(".lineNode")
          .filter(function (t, n) {
            return f.select(this).attr("key") == key;
          })
          .append("g")
          .selectAll("text")
          .data(lineLabelData)
          .enter()
          .append("text")
          .filter(function (t, n) {
            return (
              0 === n || n === lineLabelData.length - 1 || t.year === thisYear
            );
          })
          .attr("x", function (t, n) {
            return "Revenue" == t.type ? revLineX(t.year) : spendLineX(t.year);
          })
          .attr("y", function (t) {
            return lineY(t.value) - 14;
          })
          .text(function (t, n) {
            return Tr(t.value);
          })
          .attr("class", "lineLabel");
    }
    (window.thisYear = 2017), (window.key = 0);
    var Dr = function (t, n, e) {
        return e.indexOf(t) === n;
      },
      Pr = function (t) {
        return a.min(t, function (t) {
          return t[0];
        });
      },
      Rr = function (t) {
        return a.max(t, function (t) {
          return t[1];
        });
      };
    var Yr = e(14);
    function qr() {
      var t = {},
        n = 24,
        e = 8,
        r = [1, 1],
        i = [],
        o = [];
      function c() {
        function t(t, n) {
          return t.source.y - n.source.y;
        }
        function n(t, n) {
          return t.target.y - n.target.y;
        }
        i.forEach(function (e) {
          e.sourceLinks.sort(n), e.targetLinks.sort(t);
        }),
          i.forEach(function (t) {
            var n = 0,
              e = 0;
            t.sourceLinks.forEach(function (t) {
              (t.sy = n), (n += t.dy);
            }),
              t.targetLinks.forEach(function (t) {
                (t.ty = e), (e += t.dy);
              });
          });
      }
      function f(t) {
        return t.y + t.dy / 2;
      }
      function s(t) {
        return t.value;
      }
      return (
        (t.nodeWidth = function (e) {
          return arguments.length ? ((n = +e), t) : n;
        }),
        (t.nodePadding = function (n) {
          return arguments.length ? ((e = +n), t) : e;
        }),
        (t.nodes = function (n) {
          return arguments.length ? ((i = n), t) : i;
        }),
        (t.links = function (n) {
          return arguments.length ? ((o = n), t) : o;
        }),
        (t.size = function (n) {
          return arguments.length ? ((r = n), t) : r;
        }),
        (t.layout = function (u) {
          return (
            i.forEach(function (t) {
              (t.sourceLinks = []), (t.targetLinks = []);
            }),
            o.forEach(function (t) {
              var n = t.source,
                e = t.target;
              "number" == typeof n && (n = t.source = i[t.source]),
                "number" == typeof e && (e = t.target = i[t.target]),
                n.sourceLinks.push(t),
                e.targetLinks.push(t);
            }),
            i.forEach(function (t) {
              t.value = Math.max(
                a.sum(t.sourceLinks, s),
                a.sum(t.targetLinks, s)
              );
            }),
            (function () {
              var t,
                e = i,
                a = 0;
              for (; e.length; )
                (t = []),
                  e.forEach(function (e) {
                    (e.x = a),
                      (e.dx = n),
                      e.sourceLinks.forEach(function (n) {
                        t.indexOf(n.target) < 0 && t.push(n.target);
                      });
                  }),
                  (e = t),
                  ++a;
              (function (t) {
                i.forEach(function (n) {
                  n.sourceLinks.length || (n.x = t - 1);
                });
              })(a),
                (o = (r[0] - n) / (a - 1)),
                i.forEach(function (t) {
                  t.x *= o;
                });
              var o;
            })(),
            (function (t) {
              var n = at
                .b()
                .key(function (t) {
                  return t.x;
                })
                .sortKeys(a.ascending)
                .entries(i)
                .map(function (t) {
                  return t.values;
                });
              (c = a.min(n, function (t) {
                return (r[1] - (t.length - 1) * e) / a.sum(t, s);
              })),
                n.forEach(function (t) {
                  t.forEach(function (t, n) {
                    (t.y = n), (t.dy = t.value * c);
                  });
                }),
                o.forEach(function (t) {
                  t.dy = t.value * c;
                }),
                d();
              var c;
              for (var u = 1; t > 0; --t) h((u *= 0.99)), d(), l(u), d();
              function l(t) {
                function e(t) {
                  return f(t.source) * t.value;
                }
                n.forEach(function (n, r) {
                  n.forEach(function (n) {
                    if (n.targetLinks.length) {
                      var r = a.sum(n.targetLinks, e) / a.sum(n.targetLinks, s);
                      n.y += (r - f(n)) * t;
                    }
                  });
                });
              }
              function h(t) {
                function e(t) {
                  return f(t.target) * t.value;
                }
                n.slice()
                  .reverse()
                  .forEach(function (n) {
                    n.forEach(function (n) {
                      if (n.sourceLinks.length) {
                        var r =
                          a.sum(n.sourceLinks, e) / a.sum(n.sourceLinks, s);
                        n.y += (r - f(n)) * t;
                      }
                    });
                  });
              }
              function d() {
                n.forEach(function (t) {
                  var n,
                    i,
                    a,
                    o = 0,
                    c = t.length;
                  for (t.sort(p), a = 0; a < c; ++a)
                    (n = t[a]),
                      (i = o - n.y) > 0 && (n.y += i),
                      (o = n.y + n.dy + e);
                  if ((i = o - e - r[1]) > 0)
                    for (o = n.y -= i, a = c - 2; a >= 0; --a)
                      (n = t[a]),
                        (i = n.y + n.dy + e - o) > 0 && (n.y -= i),
                        (o = n.y);
                });
              }
              function p(t, n) {
                return t.y - n.y;
              }
            })(u),
            c(),
            t
          );
        }),
        (t.relayout = function () {
          return c(), t;
        }),
        (t.link = function () {
          var t = 0.5;
          function n(n) {
            var e = n.source.x + n.source.dx,
              r = n.target.x,
              i = u.c(e, r),
              a = i(t),
              o = i(1 - t),
              c = n.source.y + n.sy + n.dy / 2,
              f = n.target.y + n.ty + n.dy / 2;
            return (
              "M" +
              e +
              "," +
              c +
              "C" +
              a +
              "," +
              c +
              " " +
              o +
              "," +
              f +
              " " +
              r +
              "," +
              f
            );
          }
          return (
            (n.curvature = function (e) {
              return arguments.length ? ((t = +e), n) : t;
            }),
            n
          );
        }),
        t
      );
    }
    function zr() {
      f.selectAll(".deficit").remove(),
        f.selectAll(".deficitLabel").remove(),
        (window.barHeight = f.select("rect[key=Spending]").attr("height")),
        (window.barVal = f.select("rect[key=Spending]").attr("value")),
        (window.deficitVal = thisYearDeficit[0].deficit),
        (window.deficitBarRatio = Math.floor(
          (barHeight * deficitVal) / barVal
        )),
        (window.deficitBar = f
          .select("rect[key=Spending]")
          .select(function () {
            return this.parentNode;
          })
          .append("rect")
          .attr("height", function () {
            return deficitBarRatio < 0 ? -deficitBarRatio : deficitBarRatio;
          })
          .attr("width", sankey.nodeWidth())
          .attr("y", function (t) {
            return deficitBarRatio < 0
              ? t.dy + deficitBarRatio
              : t.dy - deficitBarRatio;
          })
          .style("fill", function () {
            return deficitBarRatio < 0 ? "red" : "blue";
          })
          .attr("class", "deficit")
          .style("opacity", 0)
          .transition(Er)
          .style("opacity", 0.8)),
        sankeySvg
          .append("text")
          .attr("x", sankeyWidth / 2)
          .attr("y", 0.92 * sankeyHeight)
          .attr("class", "deficitLabel")
          .text(function () {
            return thisYearDeficit[0].deficit < 0
              ? Cr(-thisYearDeficit[0].deficit) + "% Deficit"
              : Cr(thisYearDeficit[0].deficit) + "% Surplus";
          })
          .style("fill", function () {
            return deficitBarRatio < 0 ? "red" : "blue";
          })
          .style("opacity", 0)
          .transition(Er)
          .style("opacity", 0.8);
    }
    function Ir() {
      var t = Yr.sliderHorizontal()
        .min(1968)
        .max(2017)
        .step(1)
        .width(barsContainer.offsetWidth - 62)
        .tickFormat(jt.a(".4"))
        .default(2017)
        .on("onchange", function (t) {
          (window.thisYear = t),
            (function (t) {
              rects
                .transition()
                .duration(50)
                .style("opacity", function (n) {
                  return n.data.year === t ? 0.8 : 0.6;
                })
                .style("stroke", function (n) {
                  return n.data.year === t ? "black" : "none";
                })
                .style("stroke-width", function (n) {
                  return n.data.year === t ? "2px" : "none";
                });
            })(t),
            (function (t) {
              f
                .select(".thisYearLine.rev line")
                .attr("x1", revLineX(t))
                .attr("x2", revLineX(t)),
                f
                  .select(".thisYearLine.rev text")
                  .text(function (n) {
                    return t;
                  })
                  .attr("x", revLineX(t))
                  .style("opacity", function (n) {
                    return 1968 == t || 2017 == t ? 0 : 1;
                  }),
                f
                  .select(".thisYearLine.spend line")
                  .attr("x1", spendLineX(t))
                  .attr("x2", spendLineX(t)),
                f
                  .select(".thisYearLine.spend text")
                  .text(function (n) {
                    return t;
                  })
                  .attr("x", spendLineX(t))
                  .style("opacity", function (n) {
                    return 1968 == t || 2017 == t ? 0 : 1;
                  }),
                0 != window.key &&
                  window.lineLabelData &&
                  (f.selectAll(".lineLabel").remove(),
                  f
                    .selectAll(".lineNode")
                    .filter(function (t, n) {
                      return f.select(this).attr("key") == window.key;
                    })
                    .append("g")
                    .selectAll("text")
                    .data(window.lineLabelData)
                    .enter()
                    .append("text")
                    .filter(function (n, e) {
                      return (
                        0 === e ||
                        e === window.lineLabelData.length - 1 ||
                        n.year === t
                      );
                    })
                    .attr("x", function (t, n) {
                      return "Revenue" == t.type
                        ? revLineX(t.year)
                        : spendLineX(t.year);
                    })
                    .attr("y", function (t) {
                      return lineY(t.value) - 14;
                    })
                    .text(function (t, n) {
                      return Tr(t.value);
                    })
                    .attr("class", "lineLabel"));
            })(t);
        })
        .on("end", function (t) {
          (window.thisYear = t),
            Mt("data/us-budget-sankey-main.csv").then(function (n) {
              Mt("data/us-budget-sankey-deficit.csv").then(function (e) {
                var r;
                f.select(".deficit").remove(),
                  f.select(".deficitLabel").remove(),
                  jr(n, e, t),
                  (r = sankey.link()),
                  sankey.nodes(nodes).links(links).layout(1e3),
                  sankey.relayout(),
                  Lr.domain(
                    a.extent(nodes, function (t) {
                      return t.value;
                    })
                  ),
                  sankeySvg
                    .selectAll(".link")
                    .data(links)
                    .transition("newSankey")
                    .duration(Er)
                    .attr("d", r)
                    .style("stroke-width", function (t) {
                      return Math.max(1, t.dy);
                    }),
                  sankeySvg
                    .selectAll(".node")
                    .data(nodes)
                    .transition("newSankey")
                    .duration(Er)
                    .attr("transform", function (t) {
                      return "translate(".concat(t.x, ",").concat(t.y, ")");
                    }),
                  sankeySvg
                    .selectAll(".node rect")
                    .data(nodes)
                    .transition("newSankey")
                    .duration(Er)
                    .attr("height", function (t) {
                      return t.dy < 0 ? 0.1 : t.dy;
                    })
                    .attr("value", function (t) {
                      return t.value;
                    }),
                  sankeySvg
                    .selectAll(".nodeLabel")
                    .data(nodes)
                    .transition("newSankey")
                    .duration(Er)
                    .style("font-size", function (t) {
                      return "".concat(Math.floor(Lr(t.value)), "px");
                    })
                    .attr("y", function (t) {
                      return t.dy / 2;
                    }),
                  sankeySvg
                    .selectAll(".nodePercent")
                    .data(nodes)
                    .transition("newSankey")
                    .duration(Er)
                    .text(function (t) {
                      return "".concat(Cr(t.value), "%");
                    })
                    .attr("y", function (t) {
                      return t.dy / 2;
                    })
                    .style("opacity", 1)
                    .filter(function (t) {
                      return t.value < 1 || 20 == t.node;
                    })
                    .style("opacity", 0),
                  sankeySvg.selectAll(".spendingNodePercent").remove(),
                  node
                    .append("text")
                    .attr("text-anchor", "middle")
                    .attr("x", 30)
                    .attr("y", function (t) {
                      return t.dy / 2;
                    })
                    .style("font-size", 18)
                    .attr("dy", ".35em")
                    .filter(function (t) {
                      return 20 == t.node;
                    })
                    .text(function () {
                      return Cr(thisYearDeficit[0].spending) + "%";
                    })
                    .attr("class", "spendingNodePercent"),
                  setTimeout(function () {
                    return zr();
                  }, Er);
              });
            });
        });
      f
        .select("div#slider")
        .append("svg")
        .attr("width", barsContainer.offsetWidth)
        .attr("height", 90)
        .append("g")
        .attr("transform", "translate(30,30)")
        .call(t),
        f.selectAll("#slider").style("font-size", 20);
    }
    document.addEventListener("DOMContentLoaded", function () {
      Fr();
    });
    var Fr = function () {
      f.select("#visualization-container").selectAll("svg").remove(),
        Mt("data/us-budget-sankey-main.csv").then(function (t) {
          Mt("data/us-budget-sankey-deficit.csv").then(function (n) {
            Mt("data/us-budget-sankey-bars.csv").then(function (e) {
              jr(t, n, thisYear),
                (function (t) {
                  var n = 10,
                    e = 5,
                    r = 5,
                    i = 5,
                    o = barsContainer.offsetWidth - i - e,
                    c = 80 - n - r,
                    u = f
                      .select("#barsContainer")
                      .append("svg")
                      .attr("width", o + i + e)
                      .attr("height", c + n + r)
                      .attr("class", "barsCanvas")
                      .append("g")
                      .attr("transform", "translate(" + i + "," + n + ")");
                  t.forEach(function (t) {
                    return (t.year = +t.year);
                  });
                  var s = Be(),
                    l = t.columns.slice(2);
                  s.keys(l).offset(Xe);
                  var h = s(t),
                    d = Kn.scaleBand()
                      .domain(
                        t.map(function (t) {
                          return t.year;
                        })
                      )
                      .range([i, o - e])
                      .paddingInner(0.1)
                      .paddingOuter(0.75),
                    p = Kn.scaleLinear()
                      .domain([a.min(h, Pr), a.max(h, Rr)])
                      .range([c - r, n])
                      .nice(),
                    b = u
                      .selectAll("#bars")
                      .data(h)
                      .enter()
                      .append("g")
                      .attr("id", "bars")
                      .attr("class", function (t, n) {
                        return t.key;
                      });
                  window.rects = b
                    .selectAll("rect")
                    .data(function (t) {
                      return t;
                    })
                    .enter()
                    .append("rect")
                    .attr("x", function (t, n) {
                      return d(t.data.year);
                    })
                    .attr("y", function (t) {
                      return p(t[1]);
                    })
                    .attr("height", function (t) {
                      return p(t[0]) - p(t[1]);
                    })
                    .attr("class", "bar")
                    .attr("year", function (t) {
                      return t.data.year;
                    })
                    .attr("width", d.bandwidth)
                    .style("fill", function (t) {
                      return "Revenue" ===
                        f.select(this.parentNode).attr("class")
                        ? "green"
                        : "red";
                    })
                    .style("opacity", function (t) {
                      return t.data.year === thisYear ? 0.8 : 0.6;
                    })
                    .style("stroke", function (t) {
                      return t.data.year === thisYear ? "black" : "none";
                    })
                    .style("stroke-width", function (t) {
                      return t.data.year === thisYear ? "2px" : "none";
                    });
                  var y = le()
                    .x(function (t) {
                      return d(t.year) + d.bandwidth() / 2;
                    })
                    .y(function (t) {
                      return p(t.Balance);
                    });
                  u.append("path").datum(t).attr("id", "line").attr("d", y),
                    u
                      .append("text")
                      .attr("x", o / 2)
                      .attr("y", 0.5 * n)
                      .attr("dy", "0em")
                      .text("Revenue/Surplus")
                      .attr("class", "bar-labels"),
                    u
                      .append("text")
                      .attr("x", o / 2)
                      .attr("y", c + 0.5 * r)
                      .attr("dy", "0em")
                      .attr("class", "bar-labels")
                      .text("Spending/Deficit");
                })(e),
                (function () {
                  (window.sankeyMargin = {
                    top: 30,
                    right: 10,
                    bottom: 10,
                    left: 10,
                  }),
                    (window.sankeyWidth =
                      sankeyContainer.offsetWidth -
                      sankeyMargin.left -
                      sankeyMargin.right),
                    (window.sankeyHeight =
                      375 - sankeyMargin.top - sankeyMargin.bottom),
                    (window.sankeySvg = f
                      .select("#sankeyContainer")
                      .append("svg")
                      .attr(
                        "width",
                        sankeyWidth + sankeyMargin.left + sankeyMargin.right
                      )
                      .attr(
                        "height",
                        sankeyHeight + sankeyMargin.top + sankeyMargin.bottom
                      )
                      .attr("class", "sankeyCanvas")
                      .append("g")
                      .attr(
                        "transform",
                        "translate("
                          .concat(sankeyMargin.left, ",")
                          .concat(sankeyMargin.top, ")")
                      )),
                    (window.sankey = qr()
                      .nodeWidth(60)
                      .nodePadding(20)
                      .size([sankeyWidth, sankeyHeight]));
                  var t = sankey.link();
                  sankey.nodes(nodes).links(links).layout(1e3),
                    Lr.domain(
                      a.extent(nodes, function (t) {
                        return t.value;
                      })
                    ),
                    (window.link = sankeySvg
                      .append("g")
                      .selectAll(".link")
                      .data(links, function (t) {
                        return t.id;
                      })
                      .enter()
                      .append("path")
                      .attr("class", "link")
                      .attr("d", t)
                      .style("stroke", function (t) {
                        return "Revenue" == t.type
                          ? "green"
                          : "Spending" == t.type
                          ? "red"
                          : "grey";
                      })
                      .style("stroke-width", function (t) {
                        return Math.max(1, t.dy);
                      })
                      .attr("key", function (t) {
                        return "Revenue" == t.type
                          ? t.source.name.split(" ").join("_")
                          : t.target.name.split(" ").join("_");
                      })
                      .on("mouseover", Ur)),
                    (window.node = sankeySvg
                      .append("g")
                      .selectAll(".node")
                      .data(nodes)
                      .enter()
                      .append("g")
                      .attr("class", "node")
                      .attr("transform", function (t) {
                        return "translate(".concat(t.x, ",").concat(t.y, ")");
                      })),
                    node
                      .append("rect")
                      .attr("height", function (t) {
                        return t.dy < 0 ? 0.1 : t.dy;
                      })
                      .attr("width", sankey.nodeWidth())
                      .attr("key", function (t) {
                        return t.name.split(" ").join("_");
                      })
                      .attr("value", function (t) {
                        return t.value;
                      })
                      .attr("class", "nodeRect")
                      .on("mouseover", Ur),
                    node
                      .append("text")
                      .attr("x", -6)
                      .attr("y", function (t) {
                        return t.dy / 2;
                      })
                      .attr("dy", ".35em")
                      .attr("text-anchor", "end")
                      .attr("transform", null)
                      .style("font-size", function (t) {
                        return Math.floor(Lr(t.value)) + "px";
                      })
                      .text(function (t) {
                        return t.name;
                      })
                      .attr("class", "nodeLabel")
                      .filter(function (t) {
                        return t.x < sankeyWidth / 2;
                      })
                      .attr("x", 6 + sankey.nodeWidth())
                      .attr("text-anchor", "start"),
                    node
                      .append("text")
                      .attr("x", 30)
                      .attr("y", function (t) {
                        return t.dy / 2;
                      })
                      .attr("dy", ".35em")
                      .attr("class", "nodePercent")
                      .text(function (t) {
                        return "".concat(Cr(t.value), "%");
                      })
                      .filter(function (t) {
                        return t.value <= 1 || 20 == t.node;
                      })
                      .style("opacity", 0),
                    sankeySvg
                      .append("text")
                      .attr("x", 0)
                      .attr("y", -5)
                      .attr("dy", "0em")
                      .text("Percent of GDP")
                      .attr("class", "percent"),
                    node
                      .append("text")
                      .attr("text-anchor", "middle")
                      .attr("x", 30)
                      .attr("y", function (t) {
                        return t.dy / 2;
                      })
                      .style("font-size", 18)
                      .attr("dy", ".35em")
                      .filter(function (t) {
                        return 20 == t.node;
                      })
                      .text(function () {
                        return Cr(thisYearDeficit[0].spending) + "%";
                      })
                      .attr("class", "spendingNodePercent");
                })(),
                zr(),
                Ir(),
                (function () {
                  var t = lineData.filter(function (t) {
                      return "Revenue" == t.type;
                    }),
                    n = lineData.filter(function (t) {
                      return "Spending" == t.type;
                    }),
                    e = at
                      .b()
                      .key(function (t) {
                        return t.source;
                      })
                      .entries(t),
                    r = at
                      .b()
                      .key(function (t) {
                        return t.target;
                      })
                      .entries(n);
                  (window.lineMargin = {
                    top: 20,
                    right: 20,
                    bottom: 10,
                    left: 20,
                    middle: 20,
                  }),
                    (window.lineWidth =
                      linesContainer.offsetWidth -
                      lineMargin.left -
                      lineMargin.right),
                    (window.lineHeight =
                      140 - lineMargin.top - lineMargin.bottom),
                    (window.lineSvg = f
                      .select("#linesContainer")
                      .append("svg")
                      .attr(
                        "width",
                        lineWidth + lineMargin.left + lineMargin.right
                      )
                      .attr(
                        "height",
                        lineHeight + lineMargin.top + lineMargin.bottom
                      )
                      .append("g")
                      .attr(
                        "transform",
                        "translate(" +
                          lineMargin.left +
                          "," +
                          lineMargin.top +
                          ")"
                      )),
                    (window.revLineX = Kn.scaleBand()
                      .domain(
                        t.map(function (t) {
                          return t.year;
                        })
                      )
                      .range([
                        lineMargin.left,
                        lineWidth / 2 - lineMargin.middle,
                      ])),
                    (window.spendLineX = Kn.scaleBand()
                      .domain(
                        n.map(function (t) {
                          return t.year;
                        })
                      )
                      .range([
                        lineWidth / 2 + lineMargin.middle,
                        lineWidth - lineMargin.right,
                      ])),
                    (window.lineY = Kn.scaleLinear()
                      .domain([
                        0,
                        a.max(t, function (t) {
                          return t.value;
                        }),
                      ])
                      .range([lineHeight - lineMargin.bottom, lineMargin.top]));
                  var i = le()
                      .x(function (t) {
                        return revLineX(t.year);
                      })
                      .y(function (t) {
                        return lineY(t.value);
                      }),
                    c = le()
                      .x(function (t) {
                        return spendLineX(t.year);
                      })
                      .y(function (t) {
                        return lineY(t.value);
                      });
                  lineSvg
                    .selectAll("lineNode")
                    .data(e)
                    .enter()
                    .append("g")
                    .attr("class", "lineNode")
                    .attr("key", function (t) {
                      return t.key.split(" ").join("_");
                    })
                    .append("path")
                    .attr("class", function (t) {
                      return "line " + t.key;
                    })
                    .attr("d", function (t) {
                      return i(t.values);
                    })
                    .attr("key", function (t) {
                      return t.key.split(" ").join("_");
                    })
                    .style("stroke", "green")
                    .on("mouseover", Ur),
                    lineSvg
                      .selectAll("lineNode")
                      .data(r)
                      .enter()
                      .append("g")
                      .attr("class", "lineNode")
                      .attr("key", function (t) {
                        return t.key.split(" ").join("_");
                      })
                      .append("path")
                      .attr("class", function (t) {
                        return "line " + t.key;
                      })
                      .attr("d", function (t) {
                        return c(t.values);
                      })
                      .attr("key", function (t) {
                        return t.key.split(" ").join("_");
                      })
                      .style("stroke", "red")
                      .on("mouseover", Ur),
                    lineSvg
                      .append("text")
                      .attr("x", 0.25 * lineWidth)
                      .attr("y", lineMargin.top / 4)
                      .attr("class", "lineTitle")
                      .text("Revenue"),
                    lineSvg
                      .append("text")
                      .attr("x", 0.75 * lineWidth)
                      .attr("y", lineMargin.top / 4)
                      .attr("class", "lineTitle")
                      .text("Spending");
                  var u = o
                      .axisBottom()
                      .scale(revLineX)
                      .tickValues(
                        revLineX.domain().filter(function (t, n) {
                          return 0 === n || 49 === n;
                        })
                      )
                      .tickSize(0),
                    s = o
                      .axisBottom()
                      .scale(spendLineX)
                      .tickValues(
                        revLineX.domain().filter(function (t, n) {
                          return 0 === n || 49 === n;
                        })
                      )
                      .tickSize(0);
                  lineSvg
                    .append("g")
                    .attr("class", "revAxis x")
                    .attr(
                      "transform",
                      "translate(-7," + (lineHeight - lineMargin.bottom) + ")"
                    )
                    .call(u),
                    lineSvg
                      .append("g")
                      .attr("class", "spendAxis x")
                      .attr(
                        "transform",
                        "translate(-7," + (lineHeight - lineMargin.bottom) + ")"
                      )
                      .call(s),
                    lineSvg
                      .append("g")
                      .attr("class", "thisYearLine rev")
                      .append("line")
                      .attr("x1", revLineX(thisYear))
                      .attr("x2", revLineX(thisYear))
                      .attr("y1", lineMargin.top)
                      .attr("y2", lineHeight - lineMargin.bottom),
                    f
                      .select(".thisYearLine.rev")
                      .append("text")
                      .text(function (t) {
                        return thisYear;
                      })
                      .attr("x", revLineX(thisYear))
                      .attr("y", lineHeight + 0.2 * lineMargin.bottom),
                    lineSvg
                      .append("g")
                      .attr("class", "thisYearLine spend")
                      .append("line")
                      .attr("x1", spendLineX(thisYear))
                      .attr("x2", spendLineX(thisYear))
                      .attr("y1", lineMargin.top)
                      .attr("y2", lineHeight - lineMargin.bottom),
                    f
                      .select(".thisYearLine.spend")
                      .append("text")
                      .text(function (t) {
                        return thisYear;
                      })
                      .attr("x", spendLineX(thisYear))
                      .attr("y", lineHeight + 0.2 * lineMargin.bottom);
                })();
            });
          });
        });
    };
  },
]);
//# sourceMappingURL=bundle.js.map
