import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-M2F73YNM.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  __commonJS,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-LTRQ44LT.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function oa(g, t) {
        g.prototype = eb(t.prototype);
        g.prototype.constructor = g;
        g.base = t.prototype;
      }
      function eb(g) {
        function t() {
        }
        t.prototype = g;
        return new t();
      }
      function Za(g, t, l2) {
        "millisecond" === l2 ? g.setMilliseconds(g.getMilliseconds() + 1 * t) : "second" === l2 ? g.setSeconds(g.getSeconds() + 1 * t) : "minute" === l2 ? g.setMinutes(g.getMinutes() + 1 * t) : "hour" === l2 ? g.setHours(g.getHours() + 1 * t) : "day" === l2 ? g.setDate(g.getDate() + 1 * t) : "week" === l2 ? g.setDate(g.getDate() + 7 * t) : "month" === l2 ? g.setMonth(g.getMonth() + 1 * t) : "year" === l2 && g.setFullYear(g.getFullYear() + 1 * t);
        return g;
      }
      function $(g, t) {
        var l2 = false;
        0 > g && (l2 = true, g *= -1);
        g = "" + g;
        for (t = t ? t : 1; g.length < t; )
          g = "0" + g;
        return l2 ? "-" + g : g;
      }
      function Ha(g) {
        if (!g)
          return g;
        g = g.replace(/^\s\s*/, "");
        for (var t = /\s/, l2 = g.length; t.test(g.charAt(--l2)); )
          ;
        return g.slice(0, l2 + 1);
      }
      function za(g) {
        g.roundRect = function(g2, l2, r2, T, qa, A, v2, z2) {
          v2 && (this.fillStyle = v2);
          z2 && (this.strokeStyle = z2);
          "undefined" === typeof qa && (qa = 5);
          this.lineWidth = A;
          this.beginPath();
          this.moveTo(g2 + qa, l2);
          this.lineTo(g2 + r2 - qa, l2);
          this.quadraticCurveTo(g2 + r2, l2, g2 + r2, l2 + qa);
          this.lineTo(
            g2 + r2,
            l2 + T - qa
          );
          this.quadraticCurveTo(g2 + r2, l2 + T, g2 + r2 - qa, l2 + T);
          this.lineTo(g2 + qa, l2 + T);
          this.quadraticCurveTo(g2, l2 + T, g2, l2 + T - qa);
          this.lineTo(g2, l2 + qa);
          this.quadraticCurveTo(g2, l2, g2 + qa, l2);
          this.closePath();
          v2 && this.fill();
          z2 && 0 < A && this.stroke();
        };
      }
      function Sa(g, t) {
        return g - t;
      }
      function U(g) {
        var t = ((g & 16711680) >> 16).toString(16), l2 = ((g & 65280) >> 8).toString(16);
        g = ((g & 255) >> 0).toString(16);
        t = 2 > t.length ? "0" + t : t;
        l2 = 2 > l2.length ? "0" + l2 : l2;
        g = 2 > g.length ? "0" + g : g;
        return "#" + t + l2 + g;
      }
      function fb(g, t) {
        var l2 = this.length >>> 0, r2 = Number(t) || 0, r2 = 0 > r2 ? Math.ceil(r2) : Math.floor(r2);
        for (0 > r2 && (r2 += l2); r2 < l2; r2++)
          if (r2 in this && this[r2] === g)
            return r2;
        return -1;
      }
      function l(g) {
        return null === g || "undefined" === typeof g;
      }
      function Ea(g) {
        g.indexOf || (g.indexOf = fb);
        return g;
      }
      function gb(g) {
        if (ua.fSDec)
          g[X("`eeDwdouMhrudods")](X("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            ua._fTWm && ua._fTWm(g);
          });
      }
      function $a(g, t, l2) {
        l2 = l2 || "normal";
        var r2 = g + "_" + t + "_" + l2, T = ab[r2];
        if (isNaN(T)) {
          try {
            if (!wa) {
              var qa = document.body;
              wa = document.createElement("span");
              wa.innerHTML = "";
              var A = document.createTextNode("Mpgyi");
              wa.appendChild(A);
              qa.appendChild(wa);
            }
            wa.style.display = "";
            J(wa, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: g, fontSize: t + "px", fontWeight: l2 });
            T = Math.round(wa.offsetHeight);
            wa.style.display = "none";
          } catch (v2) {
            T = Math.ceil(1.1 * t);
          }
          T = Math.max(T, t);
          ab[r2] = T;
        }
        return T;
      }
      function I(g, t) {
        var l2 = [];
        if (l2 = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [4, 2, 1, 2], longDash: [
          8,
          2
        ], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] }[g || "solid"])
          for (var r2 = 0; r2 < l2.length; r2++)
            l2[r2] *= t;
        else
          l2 = [];
        return l2;
      }
      function G(g, t, xa, r2, T) {
        r2 = r2 || [];
        T = l(T) ? hb ? { passive: false, capture: false } : false : T;
        r2.push([g, t, xa, T]);
        return g.addEventListener ? (g.addEventListener(t, xa, T), xa) : g.attachEvent ? (r2 = function(t2) {
          t2 = t2 || window.event;
          t2.preventDefault = t2.preventDefault || function() {
            t2.returnValue = false;
          };
          t2.stopPropagation = t2.stopPropagation || function() {
            t2.cancelBubble = true;
          };
          xa.call(g, t2);
        }, g.attachEvent("on" + t, r2), r2) : false;
      }
      function ib(g) {
        if (g._menuButton)
          g.exportEnabled ? (J(g._menuButton, { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor }), Ma(g._menuButton), sa(g, g._menuButton, "menu"), 0 >= navigator.userAgent.search("MSIE") && g._menuButton.childNodes[0] && J(g._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) : va(g._menuButton);
        else if (g.exportEnabled && r) {
          var t = false;
          g._menuButton = document.createElement("button");
          sa(g, g._menuButton, "menu");
          g._toolBar.appendChild(g._menuButton);
          G(g._menuButton, "touchstart", function(g2) {
            t = true;
          }, g.allDOMEventHandlers);
          G(g._menuButton, "click", function() {
            "none" !== g._dropdownMenu.style.display || g._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - g._dropDownCloseTime.getTime() || (g._dropdownMenu.style.display = "block", g._menuButton.blur(), g._dropdownMenu.focus());
          }, g.allDOMEventHandlers, true);
          G(g._menuButton, "mousemove", function() {
            t || (J(g._menuButton, { backgroundColor: g.toolbar.itemBackgroundColorOnHover, color: g.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && J(g._menuButton.childNodes[0], {
              WebkitFilter: "invert(100%)",
              filter: "invert(100%)"
            }));
          }, g.allDOMEventHandlers, true);
          G(g._menuButton, "mouseout", function() {
            t || (J(g._menuButton, { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && J(g._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
          }, g.allDOMEventHandlers, true);
        }
        if (g.exportEnabled && g._dropdownMenu) {
          var l2 = g.theme && -1 !== g.theme.indexOf("dark") ? "black" : "#888888";
          J(g._dropdownMenu, {
            backgroundColor: g.toolbar.itemBackgroundColor,
            color: g.toolbar.fontColor,
            boxShadow: "2px 2px 10px " + l2
          });
          for (var l2 = g._dropdownMenu.childNodes, M = [g._cultureInfo.printText, g._cultureInfo.saveJPGText, g._cultureInfo.savePNGText], T = 0; T < M.length; T++)
            J(l2[T], { backgroundColor: g.toolbar.itemBackgroundColor, color: g.toolbar.fontColor }), l2[T].innerHTML = M[T];
        } else
          !g._dropdownMenu && (g.exportEnabled && r) && (t = false, g._dropdownMenu = document.createElement("div"), g._dropdownMenu.setAttribute("tabindex", -1), l2 = g.theme && -1 !== g.theme.indexOf("dark") ? "black" : "#888888", J(g._dropdownMenu, {
            position: "absolute",
            zIndex: 1,
            userSelect: "none",
            MozUserSeelct: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            cursor: "pointer",
            right: "0px",
            top: "25px",
            minWidth: "120px",
            outline: 0,
            fontSize: "14px",
            fontFamily: "Arial, Helvetica, sans-serif",
            padding: "5px 0px 5px 0px",
            textAlign: "left",
            lineHeight: "10px",
            backgroundColor: g.toolbar.itemBackgroundColor,
            boxShadow: "2px 2px 10px " + l2
          }), g._dropdownMenu.style.display = "none", g._toolBar.appendChild(g._dropdownMenu), G(g._dropdownMenu, "blur", function() {
            va(g._dropdownMenu);
            g._dropDownCloseTime = /* @__PURE__ */ new Date();
          }, g.allDOMEventHandlers, true), l2 = document.createElement("div"), J(l2, { padding: "12px 8px 12px 8px" }), l2.innerHTML = g._cultureInfo.printText, l2.style.backgroundColor = g.toolbar.itemBackgroundColor, l2.style.color = g.toolbar.fontColor, g._dropdownMenu.appendChild(l2), G(l2, "touchstart", function(g2) {
            t = true;
          }, g.allDOMEventHandlers), G(l2, "mousemove", function() {
            t || (this.style.backgroundColor = g.toolbar.itemBackgroundColorOnHover, this.style.color = g.toolbar.fontColorOnHover);
          }, g.allDOMEventHandlers, true), G(l2, "mouseout", function() {
            t || (this.style.backgroundColor = g.toolbar.itemBackgroundColor, this.style.color = g.toolbar.fontColor);
          }, g.allDOMEventHandlers, true), G(l2, "click", function() {
            g.print();
            va(g._dropdownMenu);
          }, g.allDOMEventHandlers, true), l2 = document.createElement("div"), J(l2, { padding: "12px 8px 12px 8px" }), l2.innerHTML = g._cultureInfo.saveJPGText, l2.style.backgroundColor = g.toolbar.itemBackgroundColor, l2.style.color = g.toolbar.fontColor, g._dropdownMenu.appendChild(l2), G(l2, "touchstart", function(g2) {
            t = true;
          }, g.allDOMEventHandlers), G(
            l2,
            "mousemove",
            function() {
              t || (this.style.backgroundColor = g.toolbar.itemBackgroundColorOnHover, this.style.color = g.toolbar.fontColorOnHover);
            },
            g.allDOMEventHandlers,
            true
          ), G(l2, "mouseout", function() {
            t || (this.style.backgroundColor = g.toolbar.itemBackgroundColor, this.style.color = g.toolbar.fontColor);
          }, g.allDOMEventHandlers, true), G(l2, "click", function() {
            g.exportChart({ format: "jpeg", fileName: g.exportFileName });
            va(g._dropdownMenu);
          }, g.allDOMEventHandlers, true), l2 = document.createElement("div"), J(l2, { padding: "12px 8px 12px 8px" }), l2.innerHTML = g._cultureInfo.savePNGText, l2.style.backgroundColor = g.toolbar.itemBackgroundColor, l2.style.color = g.toolbar.fontColor, g._dropdownMenu.appendChild(l2), G(l2, "touchstart", function(g2) {
            t = true;
          }, g.allDOMEventHandlers), G(l2, "mousemove", function() {
            t || (this.style.backgroundColor = g.toolbar.itemBackgroundColorOnHover, this.style.color = g.toolbar.fontColorOnHover);
          }, g.allDOMEventHandlers, true), G(
            l2,
            "mouseout",
            function() {
              t || (this.style.backgroundColor = g.toolbar.itemBackgroundColor, this.style.color = g.toolbar.fontColor);
            },
            g.allDOMEventHandlers,
            true
          ), G(l2, "click", function() {
            g.exportChart({ format: "png", fileName: g.exportFileName });
            va(g._dropdownMenu);
          }, g.allDOMEventHandlers, true));
      }
      function bb(g, t, l2) {
        g *= ia;
        t *= ia;
        g = l2.getImageData(g, t, 2, 2).data;
        t = true;
        for (l2 = 0; 4 > l2; l2++)
          if (g[l2] !== g[l2 + 4] | g[l2] !== g[l2 + 8] | g[l2] !== g[l2 + 12]) {
            t = false;
            break;
          }
        return t ? g[0] << 16 | g[1] << 8 | g[2] : 0;
      }
      function ma(g, t, l2) {
        return g in t ? t[g] : l2[g];
      }
      function Na(g, t, xa, M) {
        r && cb ? (M = !l(M) && M ? g.getContext("2d", { willReadFrequently: true }) : g.getContext("2d"), Oa = M.webkitBackingStorePixelRatio || M.mozBackingStorePixelRatio || M.msBackingStorePixelRatio || M.oBackingStorePixelRatio || M.backingStorePixelRatio || 1, ia = Ta / Oa, g.width = t * ia, g.height = xa * ia, Ta !== Oa && (g.style.width = t + "px", g.style.height = xa + "px", M.scale(ia, ia))) : (g.width = t, g.height = xa);
      }
      function jb(g) {
        if (!kb) {
          var t = false, l2 = false;
          "undefined" === typeof pa.Chart.creditHref ? (g.creditHref = X("iuuqr;..b`ow`rkr/bnl."), g.creditText = X("B`ow`rKR/bnl")) : (t = g.updateOption("creditText"), l2 = g.updateOption("creditHref"));
          if (g.creditHref && g.creditText) {
            g._creditLink || (g._creditLink = document.createElement("a"), g._creditLink.setAttribute("class", "canvasjs-chart-credit"), g._creditLink.setAttribute("title", "JavaScript Charts"), J(g._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: g.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }), g._creditLink.setAttribute("tabIndex", -1), g._creditLink.setAttribute("target", "_blank"));
            if (0 === g.renderCount || t || l2)
              g._creditLink.setAttribute("href", g.creditHref), g._creditLink.innerHTML = g.creditText;
            g._creditLink && g.creditHref && g.creditText ? (g._creditLink.parentElement || g._canvasJSContainer.appendChild(g._creditLink), g._creditLink.style.top = g.height - 14 + "px") : g._creditLink.parentElement && g._canvasJSContainer.removeChild(g._creditLink);
          }
        }
      }
      function ta(g, t, l2) {
        Ia && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var M = document.createElement("canvas");
        M.setAttribute("class", "canvasjs-chart-canvas");
        Na(M, g, t, l2);
        r || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(M);
        return M;
      }
      function J(g, t) {
        for (var l2 in t)
          g.style[l2] = t[l2];
      }
      function sa(g, t, l2) {
        t.getAttribute("state") || (t.style.backgroundColor = g.toolbar.itemBackgroundColor, t.style.color = g.toolbar.fontColor, t.style.border = "none", J(t, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        t.getAttribute("state") !== l2 && (t.setAttribute("state", l2), t.setAttribute("type", "button"), J(t, {
          padding: "5px 12px",
          cursor: "pointer",
          "float": "left",
          width: "40px",
          height: "25px",
          outline: "0px",
          verticalAlign: "baseline",
          lineHeight: "0"
        }), t.innerHTML = "<img src='" + lb[l2].image + "' alt='" + g._cultureInfo[l2 + "Text"] + "' />", J(t.childNodes[0], { height: "95%", pointerEvents: "none" }));
        t.setAttribute("title", g._cultureInfo[l2 + "Text"]);
      }
      function Ma() {
        for (var g = null, t = 0; t < arguments.length; t++)
          g = arguments[t], g.style && (g.style.display = "inline");
      }
      function va() {
        for (var g = null, t = 0; t < arguments.length; t++)
          (g = arguments[t]) && g.style && (g.style.display = "none");
      }
      function Ua(g, t, l2, r2, T) {
        if (null === g || "undefined" === typeof g)
          return "undefined" === typeof l2 ? t : l2;
        g = parseFloat(g.toString()) * (0 <= g.toString().indexOf("%") ? t / 100 : 1);
        "undefined" !== typeof r2 && (g = Math.min(r2, g), "undefined" !== typeof T && (g = Math.max(T, g)));
        return !isNaN(g) && g <= t && 0 <= g ? g : "undefined" === typeof l2 ? t : l2;
      }
      function Y(g, t, r2, M, T) {
        this._defaultsKey = g;
        this._themeOptionsKey = t;
        this._index = M;
        this.parent = T;
        this._eventListeners = [];
        g = {};
        this.theme && l(this.parent) && l(t) && l(M) ? g = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[t]) && (null === M ? g = this.parent.themeOptions[t] : 0 < this.parent.themeOptions[t].length && (M = Math.min(this.parent.themeOptions[t].length - 1, M), g = this.parent.themeOptions[t][M]));
        this.themeOptions = g;
        this.options = r2 ? r2 : { _isPlaceholder: true };
        this.setOptions(this.options, g);
      }
      function Fa(g, t, l2, r2, T) {
        "undefined" === typeof T && (T = 0);
        this._padding = T;
        this._x1 = g;
        this._y1 = t;
        this._x2 = l2;
        this._y2 = r2;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function ka(g, t) {
        ka.base.constructor.call(this, "TextBlock", null, t, null, null);
        this.ctx = g;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Va(g, t) {
        Va.base.constructor.call(this, "Toolbar", "toolbar", t, null, g);
        this.chart = g;
        this.canvas = g.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Aa(g, t) {
        Aa.base.constructor.call(this, "Title", "title", t, null, g);
        this.chart = g;
        this.canvas = g.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (l(this.options.margin) && g.options.subtitles) {
          for (var r2 = g.options.subtitles, M = 0; M < r2.length; M++)
            if ((l(r2[M].horizontalAlign) && "center" === this.horizontalAlign || r2[M].horizontalAlign === this.horizontalAlign) && (l(r2[M].verticalAlign) && "top" === this.verticalAlign || r2[M].verticalAlign === this.verticalAlign) && !r2[M].dockInsidePlotArea === !this.dockInsidePlotArea) {
              this.margin = 0;
              break;
            }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
          x1: null,
          y1: null,
          x2: null,
          y2: null
        };
      }
      function Ja(g, t, l2) {
        Ja.base.constructor.call(this, "Subtitle", "subtitles", t, l2, g);
        this.chart = g;
        this.canvas = g.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Wa() {
        this.pool = [];
      }
      function Ka(g) {
        var t;
        g && La[g] && (t = La[g]);
        Ka.base.constructor.call(
          this,
          "CultureInfo",
          null,
          t,
          null,
          null
        );
      }
      var Ia = false, ua = {}, r = !!document.createElement("canvas").getContext, pa = {
        Chart: { width: 500, height: 400, zoomEnabled: false, zoomType: "x", backgroundColor: "white", theme: "light1", animationEnabled: false, animationDuration: 1200, dataPointWidth: null, dataPointMinWidth: null, dataPointMaxWidth: null, colorSet: "colorSet1", culture: "en", creditText: "CanvasJS", interactivityEnabled: true, exportEnabled: false, exportFileName: "Chart", rangeChanging: null, rangeChanged: null, publicProperties: {
          title: "readWrite",
          subtitles: "readWrite",
          toolbar: "readWrite",
          toolTip: "readWrite",
          legend: "readWrite",
          axisX: "readWrite",
          axisY: "readWrite",
          axisX2: "readWrite",
          axisY2: "readWrite",
          data: "readWrite",
          options: "readWrite",
          bounds: "readOnly",
          container: "readOnly",
          selectedColorSet: "readOnly"
        } },
        Title: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 20,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: r ? "transparent" : null,
          margin: 5,
          wrap: true,
          maxWidth: null,
          textAlign: "center",
          dockInsidePlotArea: false,
          publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        Subtitle: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 14, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, margin: 2, wrap: true, maxWidth: null, textAlign: "center", dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        Toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } },
        Legend: { name: null, verticalAlign: "center", horizontalAlign: "right", fontSize: 14, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", cursor: null, itemmouseover: null, itemmouseout: null, itemmousemove: null, itemclick: null, dockInsidePlotArea: false, reversed: false, backgroundColor: r ? "transparent" : null, borderColor: r ? "transparent" : null, borderThickness: 0, cornerRadius: 0, maxWidth: null, maxHeight: null, markerMargin: null, itemMaxWidth: null, itemWidth: null, itemWrap: true, itemTextFormatter: null, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        ToolTip: {
          enabled: true,
          shared: false,
          animationEnabled: true,
          content: null,
          contentFormatter: null,
          reversed: false,
          backgroundColor: r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
          borderColor: null,
          borderThickness: 2,
          cornerRadius: 5,
          fontSize: 14,
          fontColor: "black",
          fontFamily: "Calibri, Arial, Georgia, serif;",
          fontWeight: "normal",
          fontStyle: "italic",
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", chart: "readOnly" }
        },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: false,
          logarithmic: false,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: true,
          titleMaxWidth: null,
          titleBackgroundColor: r ? "transparent" : null,
          titleBorderColor: r ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          titleTextAlign: "left",
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: true,
          labelWrap: true,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: r ? "transparent" : null,
          labelBorderColor: r ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: false,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: r ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: r ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          labelTextAlign: "left",
          showOnTop: false,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        ScaleBreaks: {
          autoCalculate: false,
          collapsibleThreshold: "25%",
          maxNumberOfAutoBreaks: 2,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        Break: { startValue: null, endValue: null, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: {
          options: "readWrite",
          scaleBreaks: "readOnly",
          bounds: "readOnly",
          chart: "readOnly"
        } },
        Crosshair: {
          enabled: false,
          snapToDataPoint: false,
          color: "grey",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelWrap: true,
          labelMaxWidth: null,
          labelTextAlign: "left",
          labelBackgroundColor: r ? "grey" : null,
          labelBorderColor: r ? "grey" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: r ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
          labelFontSize: 12,
          labelFontColor: "#fff",
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          valueFormatString: null,
          updated: null,
          hidden: null,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: false,
          highlightEnabled: true,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelBackgroundColor: null,
          indexLabelBorderColor: null,
          indexLabelBorderThickness: 0,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: true,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: false,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          explodeOnClick: true,
          neckHeight: null,
          neckWidth: null,
          reversed: false,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: false,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: r ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: r ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: true,
          publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
        },
        TextBlock: {
          x: 0,
          y: 0,
          width: null,
          height: null,
          maxWidth: null,
          maxHeight: null,
          padding: 0,
          angle: 0,
          text: "",
          horizontalAlign: "center",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          textBaseline: "top"
        },
        CultureInfo: {
          decimalSeparator: ".",
          digitGroupSeparator: ",",
          zoomText: "Zoom",
          panText: "Pan",
          resetText: "Reset",
          menuText: "More Options",
          saveJPGText: "Save as JPEG",
          savePNGText: "Save as PNG",
          printText: "Print",
          days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          months: "January February March April May June July August September October November December".split(" "),
          shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
      }, La = { en: {} }, v = r ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ga = r ? "Impact, Charcoal, sans-serif" : "Arial", Ba = { colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "), colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ") }, P, Z, V, ga, ja;
      Z = "#333333";
      V = "#000000";
      P = "#666666";
      ja = ga = "#000000";
      var fa = 20, z = 14, Xa = { colorSet: "colorSet1", backgroundColor: "#FFFFFF", title: { fontFamily: Ga, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ga, fontSize: z, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: v, indexLabelFontSize: z, indexLabelFontColor: Z, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: Z,
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: P,
        tickThickness: 1,
        tickColor: P,
        gridThickness: 0,
        gridColor: P,
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisX2: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: Z, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 0, gridColor: P, stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: Z, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 1, gridColor: P, stripLines: [{
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY2: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: Z,
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: P,
        tickThickness: 1,
        tickColor: P,
        gridThickness: 1,
        gridColor: P,
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], legend: { fontFamily: v, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: v, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      V = Z = "#F5F5F5";
      P = "#FFFFFF";
      ga = "#40BAF1";
      ja = "#F5F5F5";
      var fa = 20, z = 14, db = { colorSet: "colorSet2", title: {
        fontFamily: v,
        fontSize: 33,
        fontColor: "#3A3A3A",
        fontWeight: "bold",
        verticalAlign: "top",
        margin: 5
      }, subtitles: [{ fontFamily: v, fontSize: z, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: v, indexLabelFontSize: z, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickThickness: 1,
        tickColor: "#BBBBBB",
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisX2: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }], crosshair: {
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: "black",
        color: "black",
        thickness: 1,
        lineDashType: "dot"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisY2: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], legend: { fontFamily: v, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: v, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" } };
      V = Z = "#F5F5F5";
      P = "#FFFFFF";
      ga = "#40BAF1";
      ja = "#F5F5F5";
      fa = 20;
      z = 14;
      Ga = { colorSet: "colorSet1", backgroundColor: "#2A2A2A", title: { fontFamily: Ga, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ga, fontSize: z, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: v,
        indexLabelFontSize: z,
        indexLabelFontColor: V,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 0, gridColor: P, stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 0, gridColor: P, stripLines: [{
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: P,
        tickThickness: 1,
        tickColor: P,
        gridThickness: 1,
        gridColor: P,
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 1, gridColor: P, stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: v, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: v, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: V, backgroundColor: "rgba(0, 0, 0, .7)" } };
      P = "#FFFFFF";
      V = Z = "#FAFAFA";
      ga = "#40BAF1";
      ja = "#F5F5F5";
      var fa = 20, z = 14, Pa = { light1: Xa, light2: db, dark1: Ga, dark2: { colorSet: "colorSet2", backgroundColor: "#32373A", title: { fontFamily: v, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: v, fontSize: z, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }], toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" }, data: [{
        indexLabelFontFamily: v,
        indexLabelFontSize: z,
        indexLabelFontColor: V,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 0, gridColor: P, stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisX2: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 1, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 0, gridColor: P, stripLines: [{
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], axisY: [{
        titleFontFamily: v,
        titleFontSize: fa,
        titleFontColor: V,
        titleFontWeight: "normal",
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: V,
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: P,
        tickThickness: 1,
        tickColor: P,
        gridThickness: 1,
        gridColor: P,
        stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: v, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#777777",
          lineThickness: 1,
          lineDashType: "solid",
          color: "#111111"
        }
      }], axisY2: [{ titleFontFamily: v, titleFontSize: fa, titleFontColor: V, titleFontWeight: "normal", labelFontFamily: v, labelFontSize: z, labelFontColor: V, labelFontWeight: "normal", lineThickness: 0, lineColor: P, tickThickness: 1, tickColor: P, gridThickness: 1, gridColor: P, stripLines: [{ labelFontFamily: v, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: v,
        labelFontSize: z,
        labelFontColor: "#000000",
        labelFontWeight: "normal",
        labelBackgroundColor: ja,
        color: ga,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }], legend: { fontFamily: v, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: v, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: V, backgroundColor: "rgba(0, 0, 0, .7)" } }, theme1: Xa, theme2: db, theme3: Xa }, R = {
        numberDuration: 1,
        yearDuration: 314496e5,
        monthDuration: 2592e6,
        weekDuration: 6048e5,
        dayDuration: 864e5,
        hourDuration: 36e5,
        minuteDuration: 6e4,
        secondDuration: 1e3,
        millisecondDuration: 1,
        dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
      };
      (function() {
        ua.fSDec = function(g) {
          for (var t = "", l2 = 0; l2 < g.length; l2++)
            t += String.fromCharCode(Math.ceil(g.length / 57 / 5) ^ g.charCodeAt(l2));
          return t;
        };
        delete pa[ua.fSDec("Bi`su")][ua.fSDec("bsdehuIsdg")];
        ua.pro = { sCH: pa[ua.fSDec("Bi`su")][ua.fSDec("bsdehuIsdg")] };
      })();
      var hb = function() {
        var g = false;
        try {
          var t = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
            g = true;
            return false;
          } });
          window.addEventListener && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
        } catch (l2) {
          g = false;
        }
        return g;
      }(), ab = {}, wa = null, mb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
      }, ya = function(g) {
        g.width = 1;
        g.height = 1;
        g.getContext("2d") && g.getContext("2d").clearRect(0, 0, 1, 1);
      }, nb = function(g, t, l2) {
        t = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= t ? 12 : 11, Math.round(t * (g / 400)));
      }, Ca = function() {
        var g = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), l2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), r2 = "January February March April May June July August September October November December".split(" "), T = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), v2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, A = /[^-+\dA-Z]/g;
        return function(z2, I2, N) {
          var P2 = N ? N.days : t, U2 = N ? N.months : r2, G2 = N ? N.shortDays : l2, R2 = N ? N.shortMonths : T;
          N = "";
          var J2 = false;
          z2 = z2 && z2.getTime ? z2 : z2 ? new Date(z2) : /* @__PURE__ */ new Date();
          if (isNaN(z2))
            throw SyntaxError("invalid date");
          "UTC:" === I2.slice(0, 4) && (I2 = I2.slice(4), J2 = true);
          N = J2 ? "getUTC" : "get";
          var Y2 = z2[N + "Date"](), Q = z2[N + "Day"](), aa = z2[N + "Month"](), a = z2[N + "FullYear"](), d = z2[N + "Hours"](), c = z2[N + "Minutes"](), b = z2[N + "Seconds"](), e = z2[N + "Milliseconds"](), h = J2 ? 0 : z2.getTimezoneOffset();
          return N = I2.replace(g, function(n) {
            switch (n) {
              case "D":
                return Y2;
              case "DD":
                return $(Y2, 2);
              case "DDD":
                return G2[Q];
              case "DDDD":
                return P2[Q];
              case "M":
                return aa + 1;
              case "MM":
                return $(aa + 1, 2);
              case "MMM":
                return R2[aa];
              case "MMMM":
                return U2[aa];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return $(String(a).slice(-2), 2);
              case "YYY":
                return $(
                  String(a).slice(-3),
                  3
                );
              case "YYYY":
                return $(a, 4);
              case "h":
                return d % 12 || 12;
              case "hh":
                return $(d % 12 || 12, 2);
              case "H":
                return d;
              case "HH":
                return $(d, 2);
              case "m":
                return c;
              case "mm":
                return $(c, 2);
              case "s":
                return b;
              case "ss":
                return $(b, 2);
              case "f":
                return $(String(e), 3).slice(0, 1);
              case "ff":
                return $(String(e), 3).slice(0, 2);
              case "fff":
                return $(String(e), 3).slice(0, 3);
              case "t":
                return 12 > d ? "a" : "p";
              case "tt":
                return 12 > d ? "am" : "pm";
              case "T":
                return 12 > d ? "A" : "P";
              case "TT":
                return 12 > d ? "AM" : "PM";
              case "K":
                return J2 ? "UTC" : (String(z2).match(v2) || [""]).pop().replace(A, "");
              case "z":
                return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
              case "zz":
                return (0 < h ? "-" : "+") + $(Math.floor(Math.abs(h) / 60), 2);
              case "zzz":
                return (0 < h ? "-" : "+") + $(Math.floor(Math.abs(h) / 60), 2) + $(Math.abs(h) % 60, 2);
              default:
                return n.slice(1, n.length - 1);
            }
          });
        };
      }(), ob = function(g) {
        var t = 0 > g;
        if (1 > Math.abs(g)) {
          var l2 = parseInt(g.toString().split("e-")[1]);
          l2 && (g = (t ? -1 * g : g) * Math.pow(10, l2 - 1), g = "0." + Array(l2).join("0") + g.toString().substring(2), g = t ? "-" + g : g);
        } else
          l2 = parseInt(g.toString().split("+")[1]), 20 < l2 && (l2 -= 20, g /= Math.pow(10, l2), g = g.toString() + Array(l2 + 1).join("0"));
        return String(g);
      }, ha = function(g, l2, r2) {
        if (null === g)
          return "";
        if (!isFinite(g))
          return g;
        g = Number(g);
        var M = 0 > g ? true : false;
        M && (g *= -1);
        var T = r2 ? r2.decimalSeparator : ".", v2 = r2 ? r2.digitGroupSeparator : ",", A = "";
        l2 = String(l2);
        var A = 1, z2 = r2 = "", I2 = -1, N = [], P2 = [], U2 = 0, J2 = 0, G2 = 0, R2 = false, Y2 = 0, z2 = l2.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        l2 = null;
        for (var Q = 0; z2 && Q < z2.length; Q++)
          if (l2 = z2[Q], "." === l2 && 0 > I2)
            I2 = Q;
          else {
            if ("%" === l2)
              A *= 100;
            else if ("‰" === l2) {
              A *= 1e3;
              continue;
            } else if ("," === l2[0] && "." === l2[l2.length - 1]) {
              A /= Math.pow(1e3, l2.length - 1);
              I2 = Q + l2.length - 1;
              continue;
            } else
              "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || (R2 = true);
            0 > I2 ? (N.push(l2), "#" === l2 || "0" === l2 ? U2++ : "," === l2 && G2++) : (P2.push(l2), "#" !== l2 && "0" !== l2 || J2++);
          }
        R2 && (l2 = Math.floor(g), z2 = -Math.floor(Math.log(g) / Math.LN10 + 1), Y2 = 0 === g ? 0 : 0 === l2 ? -(U2 + z2) : ob(l2).length - U2, A /= Math.pow(10, Y2));
        0 > I2 && (I2 = Q);
        A = (g * A).toFixed(J2);
        l2 = A.split(".");
        A = (l2[0] + "").split("");
        g = (l2[1] + "").split("");
        A && "0" === A[0] && A.shift();
        for (R2 = z2 = Q = J2 = I2 = 0; 0 < N.length; )
          if (l2 = N.pop(), "#" === l2 || "0" === l2)
            if (I2++, I2 === U2) {
              var aa = A, A = [];
              if ("0" === l2)
                for (l2 = U2 - J2 - (aa ? aa.length : 0); 0 < l2; )
                  aa.unshift("0"), l2--;
              for (; 0 < aa.length; )
                r2 = aa.pop() + r2, R2++, 0 === R2 % z2 && (Q === G2 && 0 < aa.length) && (r2 = v2 + r2);
            } else
              0 < A.length ? (r2 = A.pop() + r2, J2++, R2++) : "0" === l2 && (r2 = "0" + r2, J2++, R2++), 0 === R2 % z2 && (Q === G2 && 0 < A.length) && (r2 = v2 + r2);
          else
            "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || !/[eE][+-]*[0]+/.test(l2) ? "," === l2 ? (Q++, z2 = R2, R2 = 0, 0 < A.length && (r2 = v2 + r2)) : r2 = 1 < l2.length && ('"' === l2[0] && '"' === l2[l2.length - 1] || "'" === l2[0] && "'" === l2[l2.length - 1]) ? l2.slice(1, l2.length - 1) + r2 : l2 + r2 : (l2 = 0 > Y2 ? l2.replace("+", "").replace("-", "") : l2.replace("-", ""), r2 += l2.replace(/[0]+/, function(a) {
              return $(Y2, a.length);
            }));
        v2 = "";
        for (N = false; 0 < P2.length; )
          l2 = P2.shift(), "#" === l2 || "0" === l2 ? 0 < g.length && 0 !== Number(g.join("")) ? (v2 += g.shift(), N = true) : "0" === l2 && (v2 += "0", N = true) : 1 < l2.length && ('"' === l2[0] && '"' === l2[l2.length - 1] || "'" === l2[0] && "'" === l2[l2.length - 1]) ? v2 += l2.slice(1, l2.length - 1) : "E" !== l2[0] && "e" !== l2[0] || "0" !== l2[l2.length - 1] || !/[eE][+-]*[0]+/.test(l2) ? v2 += l2 : (l2 = 0 > Y2 ? l2.replace("+", "").replace("-", "") : l2.replace("-", ""), v2 += l2.replace(/[0]+/, function(a) {
            return $(
              Y2,
              a.length
            );
          }));
        r2 += (N ? T : "") + v2;
        return M ? "-" + r2 : r2;
      }, Qa = function(g) {
        var l2 = 0, r2 = 0;
        g = g || window.event;
        g.offsetX || 0 === g.offsetX ? (l2 = g.offsetX, r2 = g.offsetY) : g.layerX || 0 == g.layerX ? (l2 = g.layerX, r2 = g.layerY) : (l2 = g.pageX - g.target.offsetLeft, r2 = g.pageY - g.target.offsetTop);
        return { x: l2, y: r2 };
      }, cb = true, Ta = window.devicePixelRatio || 1, Oa = 1, ia = cb ? Ta / Oa : 1, da = function(g, l2, r2, M, v2, z2, A, I2, R2, N, U2, P2, J2) {
        "undefined" === typeof J2 && (J2 = 1);
        A = A || 0;
        I2 = I2 || "black";
        var G2 = 15 < M - l2 && 15 < v2 - r2 ? 8 : 0.35 * Math.min(M - l2, v2 - r2);
        g.beginPath();
        g.moveTo(l2, r2);
        g.save();
        g.fillStyle = z2;
        g.globalAlpha = J2;
        g.fillRect(l2, r2, M - l2, v2 - r2);
        g.globalAlpha = 1;
        0 < A && (J2 = 0 === A % 2 ? 0 : 0.5, g.beginPath(), g.lineWidth = A, g.strokeStyle = I2, g.moveTo(l2, r2), g.rect(l2 - J2, r2 - J2, M - l2 + 2 * J2, v2 - r2 + 2 * J2), g.stroke());
        g.restore();
        true === R2 && (g.save(), g.beginPath(), g.moveTo(l2, r2), g.lineTo(l2 + G2, r2 + G2), g.lineTo(M - G2, r2 + G2), g.lineTo(M, r2), g.closePath(), A = g.createLinearGradient((M + l2) / 2, r2 + G2, (M + l2) / 2, r2), A.addColorStop(0, z2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), g.fillStyle = A, g.fill(), g.restore());
        true === N && (g.save(), g.beginPath(), g.moveTo(l2, v2), g.lineTo(l2 + G2, v2 - G2), g.lineTo(M - G2, v2 - G2), g.lineTo(M, v2), g.closePath(), A = g.createLinearGradient((M + l2) / 2, v2 - G2, (M + l2) / 2, v2), A.addColorStop(0, z2), A.addColorStop(1, "rgba(255, 255, 255, .4)"), g.fillStyle = A, g.fill(), g.restore());
        true === U2 && (g.save(), g.beginPath(), g.moveTo(l2, r2), g.lineTo(l2 + G2, r2 + G2), g.lineTo(l2 + G2, v2 - G2), g.lineTo(l2, v2), g.closePath(), A = g.createLinearGradient(l2 + G2, (v2 + r2) / 2, l2, (v2 + r2) / 2), A.addColorStop(0, z2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), g.fillStyle = A, g.fill(), g.restore());
        true === P2 && (g.save(), g.beginPath(), g.moveTo(
          M,
          r2
        ), g.lineTo(M - G2, r2 + G2), g.lineTo(M - G2, v2 - G2), g.lineTo(M, v2), A = g.createLinearGradient(M - G2, (v2 + r2) / 2, M, (v2 + r2) / 2), A.addColorStop(0, z2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), g.fillStyle = A, A.addColorStop(0, z2), A.addColorStop(1, "rgba(255, 255, 255, 0.1)"), g.fillStyle = A, g.fill(), g.closePath(), g.restore());
      }, X = function(g) {
        for (var l2 = "", r2 = 0; r2 < g.length; r2++)
          l2 += String.fromCharCode(Math.ceil(g.length / 57 / 5) ^ g.charCodeAt(r2));
        return l2;
      }, kb = window && (window[X("mnb`uhno")] && window[X("mnb`uhno")].href && window[X("mnb`uhno")].href.indexOf && (-1 !== window[X("mnb`uhno")].href.indexOf(X("b`ow`rkr/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gdonqhy/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gheemd")))) && -1 === window[X("mnb`uhno")].href.indexOf(X("gheemd")), lb = {
        reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
        pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
        zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
        menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
      };
      Y.prototype.setOptions = function(g, l2) {
        if (pa[this._defaultsKey]) {
          var r2 = pa[this._defaultsKey], v2;
          for (v2 in r2)
            "publicProperties" !== v2 && r2.hasOwnProperty(v2) && (this[v2] = g && v2 in g ? g[v2] : l2 && v2 in l2 ? l2[v2] : r2[v2]);
        } else
          Ia && window.console && console.log("defaults not set");
      };
      Y.prototype.get = function(g) {
        var l2 = pa[this._defaultsKey];
        if ("options" === g)
          return this.options && this.options._isPlaceholder ? null : this.options;
        if (l2.hasOwnProperty(g) || l2.publicProperties && l2.publicProperties.hasOwnProperty(g))
          return this[g];
        window.console && window.console.log('Property "' + g + `" doesn't exist. Please check for typo.`);
      };
      Y.prototype.set = function(g, l2, r2) {
        r2 = "undefined" === typeof r2 ? true : r2;
        var v2 = pa[this._defaultsKey];
        if ("options" === g)
          this.createUserOptions(l2);
        else if (v2.hasOwnProperty(g) || v2.publicProperties && v2.publicProperties.hasOwnProperty(g) && "readWrite" === v2.publicProperties[g])
          this.options._isPlaceholder && this.createUserOptions(), this.options[g] = l2;
        else {
          window.console && (v2.publicProperties && v2.publicProperties.hasOwnProperty(g) && "readOnly" === v2.publicProperties[g] ? window.console.log('Property "' + g + '" is read-only.') : window.console.log('Property "' + g + `" doesn't exist. Please check for typo.`));
          return;
        }
        r2 && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.addTo = function(g, l2, r2, v2) {
        v2 = "undefined" === typeof v2 ? true : v2;
        var z2 = pa[this._defaultsKey];
        z2.hasOwnProperty(g) || z2.publicProperties && z2.publicProperties.hasOwnProperty(g) && "readWrite" === z2.publicProperties[g] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[g] && (this.options[g] = []), g = this.options[g], r2 = "undefined" === typeof r2 || null === r2 ? g.length : r2, g.splice(r2, 0, l2), v2 && (this.stockChart || this.chart || this).render()) : window.console && (z2.publicProperties && z2.publicProperties.hasOwnProperty(g) && "readOnly" === z2.publicProperties[g] ? window.console.log('Property "' + g + '" is read-only.') : window.console.log('Property "' + g + `" doesn't exist. Please check for typo.`));
      };
      Y.prototype.createUserOptions = function(g) {
        if ("undefined" !== typeof g || this.options._isPlaceholder)
          if (this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
            this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
            var l2 = this.parent.options[this.optionsName], r2 = l2.length;
            this.options._isPlaceholder || (Ea(l2), r2 = l2.indexOf(this.options));
            this.options = "undefined" === typeof g ? {} : g;
            l2[r2] = this.options;
          } else
            this.options = "undefined" === typeof g ? {} : g, this.parent && (g = this.parent.options, this.optionsName ? l2 = this.optionsName : (l2 = this._defaultsKey) && 0 !== l2.length ? (r2 = l2.charAt(0).toLowerCase(), 1 < l2.length && (r2 = r2.concat(l2.slice(1))), l2 = r2) : l2 = void 0, g[l2] = this.options);
      };
      Y.prototype.remove = function(g) {
        g = "undefined" === typeof g ? true : g;
        if (this.isOptionsInArray) {
          var l2 = this.parent.options[this.optionsName];
          Ea(l2);
          var r2 = l2.indexOf(this.options);
          0 <= r2 && l2.splice(r2, 1);
        } else
          delete this.parent.options[this.optionsName];
        g && (this.stockChart || this.chart || this).render();
      };
      Y.prototype.updateOption = function(g) {
        !pa[this._defaultsKey] && (Ia && window.console) && console.log("defaults not set");
        var r2 = pa[this._defaultsKey], v2 = {}, z2 = this[g], T = this._themeOptionsKey, I2 = this._index;
        this.theme && l(this.parent) && l(T) && l(I2) ? v2 = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && this.parent.themeOptions && (this.options.theme ? "Chart" === this._defaultsKey && Pa[this.options.theme] ? v2 = Pa[this.options.theme] : stockThemes[this.options.theme] && (v2 = stockThemes[this.options.theme][T]) : this.parent.themeOptions[T] && (null === I2 ? v2 = this.parent.themeOptions[T] : 0 < this.parent.themeOptions[T].length && (v2 = Math.min(this.parent.themeOptions[T].length - 1, I2), v2 = this.parent.themeOptions[T][v2])));
        this.themeOptions = v2;
        g in r2 && (z2 = g in this.options ? this.options[g] : v2 && g in v2 ? v2[g] : r2[g]);
        if (z2 === this[g])
          return false;
        this[g] = z2;
        return true;
      };
      Y.prototype.trackChanges = function(g) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        this.sessionVariables[g] = this.options[g];
      };
      Y.prototype.isBeingTracked = function(g) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[g] ? true : false;
      };
      Y.prototype.hasOptionChanged = function(g) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        return this.sessionVariables[g] !== this.options[g];
      };
      Y.prototype.addEventListener = function(g, l2, r2) {
        g && l2 && (this._eventListeners[g] = this._eventListeners[g] || [], this._eventListeners[g].push({ context: r2 || this, eventHandler: l2 }));
      };
      Y.prototype.removeEventListener = function(g, l2) {
        if (g && l2 && this._eventListeners[g]) {
          for (var r2 = this._eventListeners[g], v2 = 0; v2 < r2.length; v2++)
            if (r2[v2].eventHandler === l2) {
              r2[v2].splice(v2, 1);
              break;
            }
        }
      };
      Y.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      Y.prototype.dispatchEvent = function(g, l2, r2) {
        if (g && this._eventListeners[g]) {
          l2 = l2 || {};
          for (var v2 = this._eventListeners[g], z2 = 0; z2 < v2.length; z2++)
            v2[z2].eventHandler.call(v2[z2].context, l2);
        }
        "function" === typeof this[g] && this[g].call(r2 || this.chart, l2);
      };
      Fa.prototype.registerSpace = function(l2, r2) {
        "top" === l2 ? this._topOccupied += r2.height : "bottom" === l2 ? this._bottomOccupied += r2.height : "left" === l2 ? this._leftOccupied += r2.width : "right" === l2 && (this._rightOccupied += r2.width);
      };
      Fa.prototype.unRegisterSpace = function(l2, r2) {
        "top" === l2 ? this._topOccupied -= r2.height : "bottom" === l2 ? this._bottomOccupied -= r2.height : "left" === l2 ? this._leftOccupied -= r2.width : "right" === l2 && (this._rightOccupied -= r2.width);
      };
      Fa.prototype.getFreeSpace = function() {
        return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
      };
      Fa.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      oa(ka, Y);
      ka.prototype._initialize = function() {
        l(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = l(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = l(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = l(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = l(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      ka.prototype.render = function(l2) {
        if (0 !== this.fontSize) {
          l2 && this.ctx.save();
          var r2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var v2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + v2);
          "middle" === this.textBaseline && (v2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var z2 = 0, T = this.topPadding, I2 = null;
          this.ctx.roundRect || za(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(
            0,
            v2,
            this.width,
            this.height,
            this.cornerRadius,
            this.borderThickness,
            this.backgroundColor,
            this.borderColor
          );
          this.ctx.fillStyle = this.fontColor;
          for (v2 = 0; v2 < this._wrappedText.lines.length; v2++)
            I2 = this._wrappedText.lines[v2], "right" === this.textAlign ? z2 = this.width - I2.width - this.rightPadding : "left" === this.textAlign ? z2 = this.leftPadding : "center" === this.textAlign && (z2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - I2.width / 2 + this.leftPadding), this.ctx.fillText(I2.text, z2, T), T += I2.height;
          this.ctx.font = r2;
          l2 && this.ctx.restore();
        }
      };
      ka.prototype.setText = function(l2) {
        this.text = l2;
        this._isDirty = true;
        this._wrappedText = null;
      };
      ka.prototype.measureText = function() {
        this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth)
          throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return { width: this.width, height: this.height };
      };
      ka.prototype._getLineWithWidth = function(l2, r2, v2) {
        l2 = String(l2);
        if (!l2)
          return { text: "", width: 0 };
        var z2 = v2 = 0, I2 = l2.length - 1, G2 = Infinity;
        for (this.ctx.font = this._getFontString(); z2 <= I2; ) {
          var G2 = Math.floor((z2 + I2) / 2), A = l2.substr(0, G2 + 1);
          v2 = this.ctx.measureText(A).width;
          if (v2 < r2)
            z2 = G2 + 1;
          else if (v2 > r2)
            I2 = G2 - 1;
          else
            break;
        }
        v2 > r2 && 1 < A.length && (A = A.substr(0, A.length - 1), v2 = this.ctx.measureText(A).width);
        r2 = true;
        if (A.length === l2.length || " " === l2[A.length])
          r2 = false;
        r2 && (l2 = A.split(" "), 1 < l2.length && l2.pop(), A = l2.join(" "), v2 = this.ctx.measureText(A).width);
        return { text: A, width: v2 };
      };
      ka.prototype._wrapText = function() {
        var l2 = new String(Ha(String(this.text))), r2 = [], v2 = this.ctx.font, z2 = 0, I2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize)
          I2 = z2 = 0;
        else
          for (; 0 < l2.length; ) {
            var G2 = this.maxHeight - (this.topPadding + this.bottomPadding), A = this._getLineWithWidth(l2, this.maxWidth - (this.leftPadding + this.rightPadding), false);
            A.height = this._lineHeight;
            r2.push(A);
            var J2 = I2, I2 = Math.max(I2, A.width), z2 = z2 + A.height, l2 = Ha(l2.slice(A.text.length, l2.length));
            G2 && z2 > G2 && (A = r2.pop(), z2 -= A.height, I2 = J2);
          }
        this._wrappedText = { lines: r2, width: I2, height: z2 };
        this.width = I2 + (this.leftPadding + this.rightPadding);
        this.height = z2 + (this.topPadding + this.bottomPadding);
        this.ctx.font = v2;
      };
      ka.prototype._getFontString = function() {
        var l2;
        l2 = this.fontStyle ? this.fontStyle + " " : "";
        l2 += this.fontWeight ? this.fontWeight + " " : "";
        l2 += this.fontSize ? this.fontSize + "px " : "";
        var t = this.fontFamily ? this.fontFamily + "" : "";
        !r && t && (t = t.split(",")[0], "'" !== t[0] && '"' !== t[0] && (t = "'" + t + "'"));
        return l2 += t;
      };
      oa(Va, Y);
      oa(Aa, Y);
      Aa.prototype.setLayout = function() {
        if (this.text) {
          var g = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, r2 = g.layoutManager.getFreeSpace(), v2 = r2.x1, z2 = r2.y1, I2 = 0, G2 = 0, A = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, J2, R2;
          this.textAlign = l(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = r2.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)), G2 = 0.5 * r2.height - this.margin - 2, I2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = r2.height - 4), G2 = 0.5 * r2.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = r2.width - 4), G2 = 0.5 * r2.height - 4));
          var N;
          l(this.padding) || "number" !== typeof this.padding ? l(this.padding) || "object" !== typeof this.padding || (N = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, N += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : N = 2 * this.padding;
          this.wrap || (G2 = Math.min(G2, 1.5 * this.fontSize + N));
          G2 = new ka(this.ctx, {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            textAlign: this.textAlign,
            verticalAlign: this.verticalAlign,
            borderColor: this.borderColor,
            borderThickness: this.borderThickness,
            backgroundColor: this.backgroundColor,
            maxWidth: this.maxWidth,
            maxHeight: G2,
            cornerRadius: this.cornerRadius,
            text: this.text,
            padding: this.padding,
            textBaseline: "middle"
          });
          N = G2.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (z2 = r2.y1 + 2 + this.fontSize / 2 + 4, R2 = "top") : "bottom" === this.verticalAlign && (z2 = r2.y2 - 2 - N.height + this.fontSize / 2 + 4, R2 = "bottom"), "left" === this.horizontalAlign ? v2 = r2.x1 + 2 : "center" === this.horizontalAlign ? v2 = r2.x1 + r2.width / 2 - N.width / 2 : "right" === this.horizontalAlign && (v2 = r2.x2 - 2 - N.width - A), J2 = this.horizontalAlign, this.width = N.width, this.height = N.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (v2 = r2.x1 + 2 + (this.fontSize / 2 + 4), z2 = r2.y2 - 2 - (this.maxWidth / 2 - N.width / 2), I2 = -90, R2 = "left", this.width = N.height, this.height = N.width) : "right" === this.horizontalAlign ? (v2 = r2.x2 - 2 - (this.fontSize / 2 + 4), z2 = r2.y1 + 2 + (this.maxWidth / 2 - N.width / 2), I2 = 90, R2 = "right", this.width = N.height, this.height = N.width) : "center" === this.horizontalAlign && (z2 = g.y1 + (g.height / 2 - N.height / 2) + this.fontSize / 2 + 4, v2 = g.x1 + (g.width / 2 - N.width / 2), R2 = "center", this.width = N.width, this.height = N.height), J2 = "center");
          G2.x = v2;
          G2.y = z2;
          G2.angle = I2;
          G2.horizontalAlign = J2;
          this._textBlock = G2;
          g.layoutManager.registerSpace(R2, { width: this.width + ("left" === R2 || "right" === R2 ? this.margin + 2 : 0), height: this.height + ("top" === R2 || "bottom" === R2 ? this.margin + 2 : 0) });
          this.bounds = { x1: v2, y1: z2, x2: v2 + this.width, y2: z2 + this.height };
          this.ctx.textBaseline = "top";
        }
      };
      Aa.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      oa(Ja, Y);
      Ja.prototype.setLayout = Aa.prototype.setLayout;
      Ja.prototype.render = Aa.prototype.render;
      Wa.prototype.get = function(l2, r2) {
        var v2 = null;
        0 < this.pool.length ? (v2 = this.pool.pop(), Na(v2, l2, r2)) : v2 = ta(l2, r2);
        return v2;
      };
      Wa.prototype.release = function(l2) {
        this.pool.push(l2);
      };
      oa(Ka, Y);
      var Ra = { addTheme: function(l2, r2) {
        Pa[l2] = r2;
      }, addColorSet: function(l2, r2) {
        Ba[l2] = r2;
      }, addCultureInfo: function(l2, r2) {
        La[l2] = r2;
      }, formatNumber: function(l2, r2, v2) {
        v2 = v2 || "en";
        if (La[v2])
          return ha(l2, r2 || "#,##0.##", new Ka(v2));
        throw "Unknown Culture Name";
      }, formatDate: function(l2, r2, v2) {
        v2 = v2 || "en";
        if (La[v2])
          return Ca(l2, r2 || "DD MMM YYYY", new Ka(v2));
        throw "Unknown Culture Name";
      } };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Ra : "function" === typeof define && define.amd ? define([], function() {
        return Ra;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ra);
      v = Ra.Chart = function() {
        function g(a, d) {
          return a.x - d.x;
        }
        function t(a, d, c) {
          d = d || {};
          l(c) ? (this.predefinedThemes = Pa, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = l(d.theme) || l(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
          t.base.constructor.call(
            this,
            "Chart",
            this.optionsName,
            d,
            this.index,
            this.parent
          );
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Wa();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", d = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", r || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ta(a, d), this._preRenderCanvas = ta(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", za(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", za(this._preRenderCtx), r ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = ta(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", za(this.overlaidCanvasCtx)), this._eventManager = new ga2(this), this.windowResizeHandler = G(
            window,
            "resize",
            function() {
              b._updateSize() && (b.render(), b.isNavigator && (b.stockChart && b.stockChart.navigator && b.stockChart.navigator.enabled) && b.stockChart.navigator._updateSlider(b.stockChart._axisXMin, b.stockChart._axisXMax));
            },
            this.allDOMEventHandlers
          ), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), J(this._toolBar, { position: "absolute", right: "1px", top: "1px" }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, G(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), G(
            this.overlaidCanvas,
            "mouseup",
            function(a2) {
              b._mouseEventHandler(a2);
            },
            this.allDOMEventHandlers
          ), G(this.overlaidCanvas, "mousedown", function(a2) {
            b._mouseEventHandler(a2);
            va(b._dropdownMenu);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, "mouseout", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), G(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new $2(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function v2(a, d) {
          for (var c = [], b, e = 0; e < a.length; e++)
            if (0 == e)
              c.push(a[0]);
            else {
              var h, n, x;
              x = e - 1;
              h = 0 === x ? 0 : x - 1;
              n = x === a.length - 1 ? x : x + 1;
              b = Math.abs((a[n].x - a[h].x) / (0 === a[n].x - a[x].x ? 0.01 : a[n].x - a[x].x)) * (d - 1) / 2 + 1;
              var E = (a[n].x - a[h].x) / b;
              b = (a[n].y - a[h].y) / b;
              c[c.length] = a[x].x > a[h].x && 0 < E || a[x].x < a[h].x && 0 > E ? { x: a[x].x + E / 3, y: a[x].y + b / 3 } : { x: a[x].x, y: a[x].y + (1 === c.length ? 0 : b / 9) };
              x = e;
              h = 0 === x ? 0 : x - 1;
              n = x === a.length - 1 ? x : x + 1;
              b = Math.abs((a[n].x - a[h].x) / (0 === a[x].x - a[h].x ? 0.01 : a[x].x - a[h].x)) * (d - 1) / 2 + 1;
              E = (a[n].x - a[h].x) / b;
              b = (a[n].y - a[h].y) / b;
              c[c.length] = a[x].x > a[h].x && 0 < E || a[x].x < a[h].x && 0 > E ? { x: a[x].x - E / 3, y: a[x].y - b / 3 } : { x: a[x].x, y: a[x].y - b / 9 };
              c[c.length] = a[e];
            }
          return c;
        }
        function z2(a, d, c, b, e, h, n, x, E, k) {
          var m = 0;
          k ? (n.color = h, x.color = h) : k = 1;
          m = E ? Math.abs(e - c) : Math.abs(b - d);
          m = 0 < n.trimLength ? Math.abs(m * n.trimLength / 100) : Math.abs(m - n.length);
          E ? (c += m / 2, e -= m / 2) : (d += m / 2, b -= m / 2);
          var m = 1 === Math.round(n.thickness) % 2 ? 0.5 : 0, p = 1 === Math.round(x.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = x.color || h;
          a.lineWidth = x.thickness || 2;
          a.setLineDash && a.setLineDash(I(x.dashType, x.thickness));
          a.beginPath();
          E && 0 < x.thickness ? (a.moveTo(b - n.thickness / 2, Math.round((c + e) / 2) - p), a.lineTo(d + n.thickness / 2, Math.round((c + e) / 2) - p)) : 0 < x.thickness && (a.moveTo(Math.round((d + b) / 2) - p, c + n.thickness / 2), a.lineTo(Math.round((d + b) / 2) - p, e - n.thickness / 2));
          a.stroke();
          a.strokeStyle = n.color || h;
          a.lineWidth = n.thickness || 2;
          a.setLineDash && a.setLineDash(I(n.dashType, n.thickness));
          a.beginPath();
          E && 0 < n.thickness ? (a.moveTo(b - m, c), a.lineTo(b - m, e), a.moveTo(d + m, c), a.lineTo(d + m, e)) : 0 < n.thickness && (a.moveTo(d, c + m), a.lineTo(b, c + m), a.moveTo(d, e - m), a.lineTo(b, e - m));
          a.stroke();
          a.restore();
        }
        function T(a, d) {
          T.base.constructor.call(this, "Legend", "legend", d, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = { x1: null, y1: null, x2: null, y2: null };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function P2(a, d, c, b) {
          P2.base.constructor.call(this, "DataSeries", "data", d, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
          a = d.dataPoints ? d.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (d = 0; d < a; d++)
            this.dataPointEOs[d] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function A(a, d, c, b, e, h) {
          A.base.constructor.call(this, "Axis", d, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
          this.isOptionsInArray = true;
          "axisX" === e ? ("left" === h || "bottom" === h ? (this.optionsName = "axisX", l(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", l(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === h || "bottom" === h ? (this.optionsName = "axisY", l(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", l(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = e;
          "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = h;
          this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new V2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (a = 0; a < this.options.stripLines.length; a++)
              this.stripLines.push(new N(
                this.chart,
                this.options.stripLines[a],
                a,
                ++this.chart._eventManager.lastObjectId,
                this
              ));
          this.options.crosshair && (this.crosshair = new Z2(this.chart, this.options.crosshair, this), this.crosshair._updatedValue = l(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue);
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
        }
        function V2(a, d, c, b) {
          V2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++)
              this.customBreaks.push(new fa2(
                this.chart,
                "customBreaks",
                this.options.customBreaks[a],
                a,
                ++this.chart._eventManager.lastObjectId,
                this
              )), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++)
              this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
          }
        }
        function fa2(a, d, c, b, e, h) {
          fa2.base.constructor.call(this, "Break", d, c, b, h);
          this.id = e;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = h;
          this.optionsName = d;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : h.type;
          this.fillOpacity = l(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
          this.lineThickness = l(c.lineThickness) ? h.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : h.color;
          this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
          !l(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !l(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
          this.size = h.parent.logarithmic ? 1 : 0;
        }
        function N(a, d, c, b, e) {
          N.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = e;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
        }
        function Z2(a, d, c) {
          Z2.base.constructor.call(
            this,
            "Crosshair",
            "crosshair",
            d,
            null,
            c
          );
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function $2(a, d) {
          $2.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function ga2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = ta(this.chart.width, this.chart.height, true);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function ja2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        oa(t, Y);
        t.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var d = 0; d < a.length; d++) {
            var c = a[d][0], b = a[d][1], e = a[d][2], h = a[d][3], h = h || false;
            c.removeEventListener ? c.removeEventListener(b, e, h) : c.detachEvent && c.detachEvent("on" + b, e);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
            this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); )
            this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
            this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && ya(this.canvas);
          this.overlaidCanvas && ya(this.overlaidCanvas);
          this._preRenderCanvas && ya(this._preRenderCanvas);
          this._breaksCanvas && ya(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && ya(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        t.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && l(this.options.theme)) && (this.theme = this.stockChart.theme);
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1);
          this.updateOption("backgroundColor");
          this.stockChart && (this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && l(this.options.backgroundColor)) && (this.backgroundColor = this.stockChart.backgroundColor);
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this.stockChart && l(this.options.culture) && (this.culture = this.stockChart.culture);
          this._cultureInfo = new Ka(this.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && r;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Va(this, this.options.toolbar);
          if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar)
            for (var d in this.stockChart.options.toolbar)
              this.toolbar[d] = this.stockChart.options.toolbar[d];
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton)
              J(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && J(this._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
            else {
              var c = false;
              va(this._zoomButton = document.createElement("button"));
              sa(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
              G(this._zoomButton, "touchstart", function(a2) {
                c = true;
              }, this.allDOMEventHandlers);
              G(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, sa(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, sa(a, a._zoomButton, "pan"));
                a.render();
              }, this.allDOMEventHandlers);
              G(
                this._zoomButton,
                "mousemove",
                function() {
                  c ? c = false : (J(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                },
                this.allDOMEventHandlers
              );
              G(this._zoomButton, "mouseout", function() {
                c || (J(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (J(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && J(this._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }), this._resetButton.title = this._cultureInfo.resetText) : (c = false, va(this._resetButton = document.createElement("button")), sa(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), G(this._resetButton, "touchstart", function(a2) {
              c = true;
            }, this.allDOMEventHandlers), G(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent(
                "hidden",
                { chart: a, toolTip: a.toolTip },
                a.toolTip
              );
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, sa(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX)
                for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                  a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2)
                for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                  a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY)
                for (b = 0; b < a.sessionVariables.axisY.length; b++)
                  a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2)
                for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                  a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && J(
                a._resetButton.childNodes[0],
                { WebkitFilter: "invert(0%)", filter: "invert(0%)" }
              );
              va(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.stockChart && (a.stockChart.rangeUpdatedBy = !a.stockChart.navigator.slider || l(a.stockChart.navigator.slider.options.minimum) && l(a.stockChart.navigator.slider.options.maximum) ? !a.stockChart.rangeSelector.enabled || !a.stockChart.rangeSelector.inputFields.enabled || l(a.stockChart.rangeSelector.inputFields.options.startValue) && l(a.stockChart.rangeSelector.inputFields.options.endValue) ? null : "inputFields" : "navigator", l(a.stockChart._selectedRangeButtonIndex) || (a.stockChart.rangeUpdatedBy = "rangeButton"), a.syncCharts(null, null), "rangeButton" === a.stockChart.rangeUpdatedBy && a.stockChart.rangeSelector.selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length && (b = a.stockChart.rangeSelector.buttons[a.stockChart.rangeSelector.selectedRangeButtonIndex], b.enabled && (b.state = "on", b.textBlock.fontWeight = "bold", b.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover, b.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect, a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex = null, b.render())));
              a._dispatchRangeEvent("rangeChanged", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
            }, this.allDOMEventHandlers), G(this._resetButton, "mousemove", function() {
              c || (J(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], {
                WebkitFilter: "invert(100%)",
                filter: "invert(100%)"
              }));
            }, this.allDOMEventHandlers), G(this._resetButton, "mouseout", function() {
              c || (J(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Ma(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else
            this.panEnabled = this.zoomEnabled = false;
          ib(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? sa(a, a._zoomButton, "zoom") : sa(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && sa(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (d in this.toolTip.options)
            this.toolTip.options.hasOwnProperty(d) && this.toolTip.updateOption(d);
        };
        t.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var d = 0, c = 0;
          this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
          l(this.stockChart) || l(this.index) ? this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height : c = this.height = this.stockChart._chartsHeight[this.index];
          if (this.canvas.width !== d * ia || this.canvas.height !== c * ia) {
            for (var b = 0; b < a.length; b++)
              Na(a[b], d, c);
            this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
            a = true;
          } else
            a = false;
          return a;
        };
        t.prototype._initialize = function() {
          this.isNavigator = l(this.parent) || l(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new ja2(this);
          this.removeAllEventListeners();
          this.disableToolTip = false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = r && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = { axisPlacement: null, plotTypes: [] };
          this.layoutManager = new Fa(
            0,
            0,
            this.width,
            this.height,
            this.isNavigator ? 0 : 2
          );
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, d = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++)
              if (a++, !this.options.data[c].type || 0 <= t._supportedChartTypes.indexOf(this.options.data[c].type)) {
                var b = new P2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                if (!l(b) && b.dataPoints) {
                  for (var e = 0; e < b.dataPoints.length; e++)
                    if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                      b.xValueType = "dateTime";
                      break;
                    }
                }
                "error" === b.type && (b.linkedDataSeriesIndex = l(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                null === b.name && (b.name = "DataSeries " + a);
                null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                  return a2.x;
                }) && b.dataPoints.sort(g) : b.dataPoints.sort(g));
                this.data.push(b);
                var e = b.axisPlacement, d = d || e, h;
                "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? h = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
                if (h && window.console) {
                  window.console.log(h);
                  return;
                }
              }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == d && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
        };
        t._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        t.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
              if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                if (this.options.axisY && 0 < this.options.axisY.length) {
                  if (!this.axisY.length)
                    for (var c = 0; c < this.options.axisY.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                  this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                  this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new A(
                    this,
                    "axisY",
                    this.options.axisY,
                    0,
                    "axisY",
                    "left"
                  )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
              if ("secondary" === this.data[d].axisYType)
                if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                  if (!this.axisY2.length)
                    for (c = 0; c < this.options.axisY2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new A(
                        this,
                        "axisY2",
                        this.options.axisY2[c],
                        c,
                        "axisY",
                        "right"
                      )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new A(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                  this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                  this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
              if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                if (this.options.axisX && 0 < this.options.axisX.length) {
                  if (!this.axisX.length)
                    for (c = 0; c < this.options.axisX.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                  this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                  this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
              if ("secondary" === this.data[d].axisXType)
                if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                  if (!this.axisX2.length)
                    for (c = 0; c < this.options.axisX2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                  this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                  this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d]);
            }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++)
              "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++)
              "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++)
              "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++)
              "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
            for (c = 0; c < this.axisX.length; c++)
              "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2)
            for (c = 0; c < this.axisX2.length; c++)
              "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (d = 0; d < this._axes.length; d++)
              if (!l(this._axes[d].viewportMinimum) || !l(this._axes[d].viewportMaximum)) {
                c = true;
                break;
              }
          }
          c ? (Ma(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (va(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
          gb(this);
          this._processData();
          this.options.title && (this.title = new Aa(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles)
            for (d = 0; d < this.options.subtitles.length; d++)
              c = new Ja(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new T(this, this.options.legend);
          for (d = 0; d < this.data.length; d++)
            (this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (d = 0; d < this._axes.length; d++)
            if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
              r ? (this._breaksCanvas = ta(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
              break;
            }
          this._preRenderCanvas = ta(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        t.prototype.renderElements = function() {
          if (this.height && this.width) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++)
              this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
              A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement)
              this.preparePlotArea();
            else
              return;
            for (d = 0; d < a.length; d++)
              a[d].setLayout(), a[d].render();
            var c = [];
            if (this.animatedRender) {
              var b = ta(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            jb(this);
            var a = this.ctx.miterLimit, e;
            this.ctx.miterLimit = 3;
            r && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
              for (var h = this.plotInfo.plotTypes[d], n = 0; n < h.plotUnits.length; n++) {
                var x = h.plotUnits[n], E = null;
                x.targetCanvas && ya(x.targetCanvas);
                x.targetCanvas = null;
                this.animatedRender && (x.targetCanvas = ta(this.width, this.height), x.targetCanvasCtx = x.targetCanvas.getContext("2d"), e = x.targetCanvasCtx.miterLimit, x.targetCanvasCtx.miterLimit = 3);
                "line" === x.type ? E = this.renderLine(x) : "stepLine" === x.type ? E = this.renderStepLine(x) : "spline" === x.type ? E = this.renderSpline(x) : "column" === x.type ? E = this.renderColumn(x) : "bar" === x.type ? E = this.renderBar(x) : "area" === x.type ? E = this.renderArea(x) : "stepArea" === x.type ? E = this.renderStepArea(x) : "splineArea" === x.type ? E = this.renderSplineArea(x) : "stackedColumn" === x.type ? E = this.renderStackedColumn(x) : "stackedColumn100" === x.type ? E = this.renderStackedColumn100(x) : "stackedBar" === x.type ? E = this.renderStackedBar(x) : "stackedBar100" === x.type ? E = this.renderStackedBar100(x) : "stackedArea" === x.type ? E = this.renderStackedArea(x) : "stackedArea100" === x.type ? E = this.renderStackedArea100(x) : "bubble" === x.type ? E = E = this.renderBubble(x) : "scatter" === x.type ? E = this.renderScatter(x) : "pie" === x.type ? this.renderPie(x) : "doughnut" === x.type ? this.renderPie(x) : "funnel" === x.type ? E = this.renderFunnel(x) : "pyramid" === x.type ? E = this.renderFunnel(x) : "candlestick" === x.type ? E = this.renderCandlestick(x) : "ohlc" === x.type ? E = this.renderCandlestick(x) : "rangeColumn" === x.type ? E = this.renderRangeColumn(x) : "error" === x.type ? E = this.renderError(x) : "rangeBar" === x.type ? E = this.renderRangeBar(x) : "rangeArea" === x.type ? E = this.renderRangeArea(x) : "rangeSplineArea" === x.type ? E = this.renderRangeSplineArea(x) : "waterfall" === x.type ? E = this.renderWaterfall(x) : "boxAndWhisker" === x.type && (E = this.renderBoxAndWhisker(x));
                for (var k = 0; k < x.dataSeriesIndexes.length; k++)
                  this._dataInRenderedOrder.push(this.data[x.dataSeriesIndexes[k]]);
                this.animatedRender && (x.targetCanvasCtx.miterLimit = e, E && c.push(E));
              }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (e = ta(this.width, this.height).getContext("2d"), za(e), c.push(this.renderIndexLabels(e)));
            var m = this;
            if (0 < c.length)
              m.disableToolTip = true, m._animator.animate(200, m.animationDuration, function(a2) {
                m.ctx.clearRect(0, 0, m.width, m.height);
                m.ctx.drawImage(b, 0, 0, Math.floor(m.width * ia), Math.floor(m.height * ia), 0, 0, m.width, m.height);
                for (var e2 = 0; e2 < c.length; e2++)
                  E = c[e2], 1 > a2 && "undefined" !== typeof E.startTimePercent ? a2 >= E.startTimePercent && E.animationCallback(E.easingFunction(a2 - E.startTimePercent, 0, 1, 1 - E.startTimePercent), E) : E.animationCallback(E.easingFunction(a2, 0, 1, 1), E);
                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              }, function() {
                c = [];
                for (var a2 = 0; a2 < m.plotInfo.plotTypes.length; a2++)
                  for (var e2 = m.plotInfo.plotTypes[a2], f = 0; f < e2.plotUnits.length; f++) {
                    var d2 = e2.plotUnits[f];
                    d2.targetCanvas && ya(d2.targetCanvas);
                    d2.targetCanvas = null;
                  }
                b = null;
                m.disableToolTip = false;
                m.dispatchEvent("dataAnimationEnd", { chart: m });
              });
            else {
              if (m._breaksCanvas)
                if (r)
                  m.plotArea.ctx.drawImage(
                    m._breaksCanvas,
                    0,
                    0,
                    this.width,
                    this.height
                  );
                else
                  for (k = 0; k < m._axes.length; k++)
                    m._axes[k].createMask();
              0 < m._indexLabels.length && m.renderIndexLabels();
              m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
              m.dispatchEvent("dataAnimationEnd", { chart: m });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || va(this._zoomButton, this._resetButton);
            l(this.toolTip._xValue) || l(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(
              this.toolTip._xValue,
              this.toolTip._dataSeriesIndex
            );
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ia && (m = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Na(a2, m.width, m.height), a2.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++)
              this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        t.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && ya(this._preRenderCanvas);
        };
        t.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({ context: this, chart: this, mousedown: this._plotAreaMouseDown, mouseup: this._plotAreaMouseUp, mousemove: this._plotAreaMouseMove, cursor: this.panEnabled ? "move" : "default", capture: true, bounds: this.plotArea });
        };
        t.prototype.categoriseDataSeries = function() {
          for (var a = "", d = 0; d < this.data.length; d++)
            if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= t._supportedChartTypes.indexOf(a.type)) {
              for (var c = null, b = false, e = null, h = false, n = 0; n < this.plotInfo.plotTypes.length; n++)
                if (this.plotInfo.plotTypes[n].type === a.type) {
                  b = true;
                  c = this.plotInfo.plotTypes[n];
                  break;
                }
              b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
              for (n = 0; n < c.plotUnits.length; n++)
                if (c.plotUnits[n].axisYType === a.axisYType && c.plotUnits[n].axisXType === a.axisXType && c.plotUnits[n].axisYIndex === a.axisYIndex && c.plotUnits[n].axisXIndex === a.axisXIndex) {
                  h = true;
                  e = c.plotUnits[n];
                  break;
                }
              h || (e = { type: a.type, previousDataSeriesCount: 0, index: c.plotUnits.length, plotType: c, axisXType: a.axisXType, axisYType: a.axisYType, axisYIndex: a.axisYIndex, axisXIndex: a.axisXIndex, axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0], axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0], dataSeriesIndexes: [], yTotals: [], yAbsTotals: [] }, c.plotUnits.push(e));
              c.totalDataSeries++;
              e.dataSeriesIndexes.push(d);
              a.plotUnit = e;
            }
          for (d = 0; d < this.plotInfo.plotTypes.length; d++)
            for (c = this.plotInfo.plotTypes[d], n = a = 0; n < c.plotUnits.length; n++)
              c.plotUnits[n].previousDataSeriesCount = a, a += c.plotUnits[n].dataSeriesIndexes.length;
        };
        t.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var d = this.data[a];
            if (d.dataPoints)
              for (var c = d.dataPoints.length, b = 0; b < c; b++)
                d.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        t.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
              var b = d.plotUnits[c];
              "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
            }
          this.calculateAutoBreaks();
        };
        t.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, n = 0; n < a.dataSeriesIndexes.length; n++) {
              var x = this.data[a.dataSeriesIndexes[n]], E = 0, k = false, m = false, p;
              if ("normal" === x.axisPlacement || "xySwapped" === x.axisPlacement)
                var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (x.dataPoints[E].x && x.dataPoints[E].x.getTime || "dateTime" === x.xValueType)
                h = true;
              for (E = 0; E < x.dataPoints.length; E++) {
                "undefined" === typeof x.dataPoints[E].x && (x.dataPoints[E].x = E + (a.axisX.logarithmic ? 1 : 0));
                x.dataPoints[E].x.getTime ? (h = true, b = x.dataPoints[E].x.getTime()) : b = x.dataPoints[E].x;
                e = x.dataPoints[E].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                e < d.min && "number" === typeof e && (d.min = e);
                e > d.max && "number" === typeof e && (d.max = e);
                if (0 < E) {
                  if (a.axisX.logarithmic) {
                    var l2 = b / x.dataPoints[E - 1].x;
                    1 > l2 && (l2 = 1 / l2);
                    c.minDiff > l2 && 1 !== l2 && (c.minDiff = l2);
                  } else
                    l2 = b - x.dataPoints[E - 1].x, 0 > l2 && (l2 *= -1), c.minDiff > l2 && 0 !== l2 && (c.minDiff = l2);
                  null !== e && null !== x.dataPoints[E - 1].y && (a.axisY.logarithmic ? (l2 = e / x.dataPoints[E - 1].y, 1 > l2 && (l2 = 1 / l2), d.minDiff > l2 && 1 !== l2 && (d.minDiff = l2)) : (l2 = e - x.dataPoints[E - 1].y, 0 > l2 && (l2 *= -1), d.minDiff > l2 && 0 !== l2 && (d.minDiff = l2)));
                }
                if (b < q && !k)
                  null !== e && (p = b);
                else {
                  if (!k && (k = true, 0 < E)) {
                    E -= 2;
                    continue;
                  }
                  if (b > f && !m)
                    m = true;
                  else if (b > f && m)
                    continue;
                  x.dataPoints[E].label && (a.axisX.labels[b] = x.dataPoints[E].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && p < b && (c.viewPortMin = p) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e));
                }
              }
              x.axisX.valueType = x.xValueType = h ? "dateTime" : "number";
            }
        };
        t.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, n = [], x = [], E = Infinity, k = -Infinity, m = {}, p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = this.data[a.dataSeriesIndexes[p]], f = 0, D = false, g2 = false, y;
              if ("normal" === q.axisPlacement || "xySwapped" === q.axisPlacement)
                var s = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, r2 = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (q.dataPoints[f].x && q.dataPoints[f].x.getTime || "dateTime" === q.xValueType)
                h = true;
              for (f = 0; f < q.dataPoints.length; f++) {
                "undefined" === typeof q.dataPoints[f].x && (q.dataPoints[f].x = f + (a.axisX.logarithmic ? 1 : 0));
                q.dataPoints[f].x.getTime ? (h = true, b = q.dataPoints[f].x.getTime()) : b = q.dataPoints[f].x;
                e = l(q.dataPoints[f].y) ? 0 : q.dataPoints[f].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < f) {
                  if (a.axisX.logarithmic) {
                    var u = b / q.dataPoints[f - 1].x;
                    1 > u && (u = 1 / u);
                    c.minDiff > u && 1 !== u && (c.minDiff = u);
                  } else
                    u = b - q.dataPoints[f - 1].x, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u);
                  null !== e && null !== q.dataPoints[f - 1].y && (a.axisY.logarithmic ? 0 < e && (u = e / q.dataPoints[f - 1].y, 1 > u && (u = 1 / u), d.minDiff > u && 1 !== u && (d.minDiff = u)) : (u = e - q.dataPoints[f - 1].y, 0 > u && (u *= -1), d.minDiff > u && 0 !== u && (d.minDiff = u)));
                }
                if (b < s && !D)
                  null !== q.dataPoints[f].y && (y = b);
                else {
                  if (!D && (D = true, 0 < f)) {
                    f -= 2;
                    continue;
                  }
                  if (b > r2 && !g2)
                    g2 = true;
                  else if (b > r2 && g2)
                    continue;
                  q.dataPoints[f].label && (a.axisX.labels[b] = q.dataPoints[f].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === q.dataPoints[f].y ? c.viewPortMin === b && y < b && (c.viewPortMin = y) : (m[b] = (m[b] || 0) + q.dataPoints[f].y, q.dataPointEOs[f].cumulativeY = m[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? n[b] ? n[b] += e : (n[b] = e, E = Math.min(e, E)) : x[b] ? x[b] += e : (x[b] = e, k = Math.max(e, k)));
                }
              }
              a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, n), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, x)) : (d.dataPointYPositiveSums = n, d.dataPointYNegativeSums = x));
              q.axisX.valueType = q.xValueType = h ? "dateTime" : "number";
            }
            for (f in n)
              n.hasOwnProperty(f) && !isNaN(f) && (a = n[f], a < d.min && (d.min = Math.min(a, E)), a > d.max && (d.max = a), f < c.viewPortMin || f > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, E)), a > d.viewPortMax && (d.viewPortMax = a)));
            for (f in x)
              x.hasOwnProperty(f) && !isNaN(f) && (a = x[f], a < d.min && (d.min = a), a > d.max && (d.max = Math.max(a, k)), f < c.viewPortMin || f > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))));
          }
        };
        t.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, n = false, x = false, E = {}, k = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = this.data[a.dataSeriesIndexes[m]], q = 0, f = false, g2 = false, w;
              if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement)
                var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType)
                h = true;
              for (q = 0; q < p.dataPoints.length; q++) {
                "undefined" === typeof p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                p.dataPoints[q].x.getTime ? (h = true, b = p.dataPoints[q].x.getTime()) : b = p.dataPoints[q].x;
                e = l(p.dataPoints[q].y) ? null : p.dataPoints[q].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < q) {
                  if (a.axisX.logarithmic) {
                    var r2 = b / p.dataPoints[q - 1].x;
                    1 > r2 && (r2 = 1 / r2);
                    c.minDiff > r2 && 1 !== r2 && (c.minDiff = r2);
                  } else
                    r2 = b - p.dataPoints[q - 1].x, 0 > r2 && (r2 *= -1), c.minDiff > r2 && 0 !== r2 && (c.minDiff = r2);
                  l(e) || null === p.dataPoints[q - 1].y || (a.axisY.logarithmic ? 0 < e && (r2 = e / p.dataPoints[q - 1].y, 1 > r2 && (r2 = 1 / r2), d.minDiff > r2 && 1 !== r2 && (d.minDiff = r2)) : (r2 = e - p.dataPoints[q - 1].y, 0 > r2 && (r2 *= -1), d.minDiff > r2 && 0 !== r2 && (d.minDiff = r2)));
                }
                if (b < y && !f)
                  null !== e && (w = b);
                else {
                  if (!f && (f = true, 0 < q)) {
                    q -= 2;
                    continue;
                  }
                  if (b > s && !g2)
                    g2 = true;
                  else if (b > s && g2)
                    continue;
                  p.dataPoints[q].label && (a.axisX.labels[b] = p.dataPoints[q].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && w < b && (c.viewPortMin = w) : (E[b] = (E[b] || 0) + p.dataPoints[q].y, p.dataPointEOs[q].cumulativeY = E[b], a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? n = true : 0 > e && (x = true), k[b] = k[b] ? k[b] + Math.abs(e) : Math.abs(e));
                }
              }
              p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (d.max = l(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min = l(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : n && !x ? (d.max = l(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = l(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : n && x ? (d.max = l(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = l(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)) : !n && x && (d.max = l(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1), d.min = l(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
            d.viewPortMin = d.min;
            d.viewPortMax = d.max;
            a.dataPointYSums = k;
          }
        };
        t.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h, n, x = false, l2 = 0; l2 < a.dataSeriesIndexes.length; l2++) {
              var k = this.data[a.dataSeriesIndexes[l2]], m = 0, p = false, q = false, f, g2, r2;
              if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                var y = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (k.dataPoints[m].x && k.dataPoints[m].x.getTime || "dateTime" === k.xValueType)
                x = true;
              for (m = 0; m < k.dataPoints.length; m++) {
                "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                k.dataPoints[m].x.getTime ? (x = true, b = k.dataPoints[m].x.getTime()) : b = k.dataPoints[m].x;
                if ((e = k.dataPoints[m].y) && e.length) {
                  h = Math.min.apply(null, e);
                  n = Math.max.apply(null, e);
                  g2 = true;
                  for (var C = 0; C < e.length; C++)
                    null === e.k && (g2 = false);
                  g2 && (p || (r2 = f), f = b);
                }
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                h < d.min && (d.min = h);
                n > d.max && (d.max = n);
                0 < m && (a.axisX.logarithmic ? (g2 = b / k.dataPoints[m - 1].x, 1 > g2 && (g2 = 1 / g2), c.minDiff > g2 && 1 !== g2 && (c.minDiff = g2)) : (g2 = b - k.dataPoints[m - 1].x, 0 > g2 && (g2 *= -1), c.minDiff > g2 && 0 !== g2 && (c.minDiff = g2)), e && (null !== e[0] && k.dataPoints[m - 1].y && null !== k.dataPoints[m - 1].y[0]) && (a.axisY.logarithmic ? (g2 = e[0] / k.dataPoints[m - 1].y[0], 1 > g2 && (g2 = 1 / g2), d.minDiff > g2 && 1 !== g2 && (d.minDiff = g2)) : (g2 = e[0] - k.dataPoints[m - 1].y[0], 0 > g2 && (g2 *= -1), d.minDiff > g2 && 0 !== g2 && (d.minDiff = g2))));
                if (!(b < y) || p) {
                  if (!p && (p = true, 0 < m)) {
                    m -= 2;
                    f = r2;
                    continue;
                  }
                  if (b > s && !q)
                    q = true;
                  else if (b > s && q)
                    continue;
                  k.dataPoints[m].label && (a.axisX.labels[b] = k.dataPoints[m].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  if (c.viewPortMin === b && e) {
                    for (C = 0; C < e.length; C++)
                      if (null === e[C] && f < b) {
                        c.viewPortMin = f;
                        break;
                      }
                  }
                  null === e ? c.viewPortMin === b && f < b && (c.viewPortMin = f) : (h < d.viewPortMin && (d.viewPortMin = h), n > d.viewPortMax && (d.viewPortMax = n));
                }
              }
              k.axisX.valueType = k.xValueType = x ? "dateTime" : "number";
            }
        };
        t.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = false, n = 0; n < a.dataSeriesIndexes.length; n++) {
              var x = this.data[a.dataSeriesIndexes[n]], l2 = 0, k = false, m = false, p = b = 0;
              if ("normal" === x.axisPlacement || "xySwapped" === x.axisPlacement)
                var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (x.dataPoints[l2].x && x.dataPoints[l2].x.getTime || "dateTime" === x.xValueType)
                h = true;
              for (l2 = 0; l2 < x.dataPoints.length; l2++)
                "undefined" !== typeof x.dataPoints[l2].isCumulativeSum && true === x.dataPoints[l2].isCumulativeSum ? (x.dataPointEOs[l2].cumulativeSumYStartValue = 0, x.dataPointEOs[l2].cumulativeSum = 0 === l2 ? 0 : x.dataPointEOs[l2 - 1].cumulativeSum, x.dataPoints[l2].y = 0 === l2 ? 0 : x.dataPointEOs[l2 - 1].cumulativeSum) : "undefined" !== typeof x.dataPoints[l2].isIntermediateSum && true === x.dataPoints[l2].isIntermediateSum ? (x.dataPointEOs[l2].cumulativeSumYStartValue = p, x.dataPointEOs[l2].cumulativeSum = 0 === l2 ? 0 : x.dataPointEOs[l2 - 1].cumulativeSum, x.dataPoints[l2].y = 0 === l2 ? 0 : b, p = 0 === l2 ? 0 : x.dataPointEOs[l2 - 1].cumulativeSum, b = 0) : (e = "number" !== typeof x.dataPoints[l2].y ? 0 : x.dataPoints[l2].y, x.dataPointEOs[l2].cumulativeSumYStartValue = 0 === l2 ? 0 : x.dataPointEOs[l2 - 1].cumulativeSum, x.dataPointEOs[l2].cumulativeSum = 0 === l2 ? e : x.dataPointEOs[l2 - 1].cumulativeSum + e, b += e);
              for (l2 = 0; l2 < x.dataPoints.length; l2++)
                if ("undefined" === typeof x.dataPoints[l2].x && (x.dataPoints[l2].x = l2 + (a.axisX.logarithmic ? 1 : 0)), x.dataPoints[l2].x.getTime ? (h = true, b = x.dataPoints[l2].x.getTime()) : b = x.dataPoints[l2].x, e = x.dataPoints[l2].y, b < c.min && (c.min = b), b > c.max && (c.max = b), x.dataPointEOs[l2].cumulativeSum < d.min && (d.min = x.dataPointEOs[l2].cumulativeSum), x.dataPointEOs[l2].cumulativeSum > d.max && (d.max = x.dataPointEOs[l2].cumulativeSum), 0 < l2 && (a.axisX.logarithmic ? (p = b / x.dataPoints[l2 - 1].x, 1 > p && (p = 1 / p), c.minDiff > p && 1 !== p && (c.minDiff = p)) : (p = b - x.dataPoints[l2 - 1].x, 0 > p && (p *= -1), c.minDiff > p && 0 !== p && (c.minDiff = p)), null !== e && null !== x.dataPoints[l2 - 1].y && (a.axisY.logarithmic ? (e = x.dataPointEOs[l2].cumulativeSum / x.dataPointEOs[l2 - 1].cumulativeSum, 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e)) : (e = x.dataPointEOs[l2].cumulativeSum - x.dataPointEOs[l2 - 1].cumulativeSum, 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < q) || k) {
                  if (!k && (k = true, 0 < l2)) {
                    l2 -= 2;
                    continue;
                  }
                  if (b > f && !m)
                    m = true;
                  else if (b > f && m)
                    continue;
                  x.dataPoints[l2].label && (a.axisX.labels[b] = x.dataPoints[l2].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  0 < l2 && (x.dataPointEOs[l2 - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = x.dataPointEOs[l2 - 1].cumulativeSum), x.dataPointEOs[l2 - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = x.dataPointEOs[l2 - 1].cumulativeSum));
                  x.dataPointEOs[l2].cumulativeSum < d.viewPortMin && (d.viewPortMin = x.dataPointEOs[l2].cumulativeSum);
                  x.dataPointEOs[l2].cumulativeSum > d.viewPortMax && (d.viewPortMax = x.dataPointEOs[l2].cumulativeSum);
                }
              x.axisX.valueType = x.xValueType = h ? "dateTime" : "number";
            }
        };
        t.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, e2) {
            if (e2)
              return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
            return { startValue: a2 + c2, endValue: b2 - c2 };
          }
          function d(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2)
                for (var f2 = a2.axisY.dataInfo, d2 = a2.axisX.dataInfo, h2, k2 = d2.min, n2 = d2.max, m2 = f2.min, p2 = f2.max, d2 = d2._dataRanges, f2 = f2._dataRanges, q2, x2 = 0, E2 = 0; E2 < a2.dataSeriesIndexes.length; E2++) {
                  var g2 = e.data[a2.dataSeriesIndexes[E2]];
                  if (!(4 > g2.dataPoints.length)) {
                    for (x2 = 0; x2 < g2.dataPoints.length; x2++)
                      if (b2 && (q2 = (n2 + 1 - k2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, h2 = g2.dataPoints[x2].x.getTime ? g2.dataPoints[x2].x.getTime() : g2.dataPoints[x2].x, q2 = Math.floor((h2 - k2) / q2), h2 < d2[q2].min && (d2[q2].min = h2), h2 > d2[q2].max && (d2[q2].max = h2)), c2) {
                        var r2 = (p2 + 1 - m2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        if ((h2 = "waterfall" === a2.type ? g2.dataPointEOs[x2].cumulativeSum : g2.dataPoints[x2].y) && h2.length)
                          for (var ea = 0; ea < h2.length; ea++)
                            q2 = Math.floor((h2[ea] - m2) / r2), h2[ea] < f2[q2].min && (f2[q2].min = h2[ea]), h2[ea] > f2[q2].max && (f2[q2].max = h2[ea]);
                        else
                          l(h2) || (q2 = Math.floor((h2 - m2) / r2), h2 < f2[q2].min && (f2[q2].min = h2), h2 > f2[q2].max && (f2[q2].max = h2));
                      }
                  }
                }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks)
              for (var b2 = a2.axisX.dataInfo, c2 = b2.min, f2 = b2.max, d2 = b2._dataRanges, h2, k2 = 0, n2 = 0; n2 < a2.dataSeriesIndexes.length; n2++) {
                var m2 = e.data[a2.dataSeriesIndexes[n2]];
                if (!(4 > m2.dataPoints.length))
                  for (k2 = 0; k2 < m2.dataPoints.length; k2++)
                    h2 = (f2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = m2.dataPoints[k2].x.getTime ? m2.dataPoints[k2].x.getTime() : m2.dataPoints[k2].x, h2 = Math.floor((b2 - c2) / h2), b2 < d2[h2].min && (d2[h2].min = b2), b2 > d2[h2].max && (d2[h2].max = b2);
              }
          }
          for (var b, e = this, h = false, n = 0; n < this._axes.length; n++)
            if (this._axes[n].scaleBreaks && this._axes[n].scaleBreaks.autoCalculate && 1 <= this._axes[n].scaleBreaks.maxNumberOfAutoBreaks) {
              h = true;
              this._axes[n].dataInfo._dataRanges = [];
              for (var x = 0; x < 100 / Math.max(parseFloat(this._axes[n].scaleBreaks.collapsibleThreshold) || 10, 10); x++)
                this._axes[n].dataInfo._dataRanges.push({
                  min: Infinity,
                  max: -Infinity
                });
            }
          if (h) {
            for (n = 0; n < this.plotInfo.plotTypes.length; n++)
              for (h = this.plotInfo.plotTypes[n], x = 0; x < h.plotUnits.length; x++)
                b = h.plotUnits[x], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (n = 0; n < this._axes.length; n++)
              if (this._axes[n].dataInfo._dataRanges) {
                var E = this._axes[n].dataInfo.min;
                b = (this._axes[n].dataInfo.max + 1 - E) * Math.max(parseFloat(this._axes[n].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                var k = this._axes[n].dataInfo._dataRanges, m, p, h = [];
                if (this._axes[n].dataInfo.dataPointYPositiveSums) {
                  var q = this._axes[n].dataInfo.dataPointYPositiveSums;
                  m = k;
                  for (x in q)
                    if (q.hasOwnProperty(x) && !isNaN(x) && (p = q[x], !l(p))) {
                      var f = Math.floor((p - E) / b);
                      p < m[f].min && (m[f].min = p);
                      p > m[f].max && (m[f].max = p);
                    }
                  delete this._axes[n].dataInfo.dataPointYPositiveSums;
                }
                if (this._axes[n].dataInfo.dataPointYNegativeSums) {
                  q = this._axes[n].dataInfo.dataPointYNegativeSums;
                  m = k;
                  for (x in q)
                    q.hasOwnProperty(x) && !isNaN(x) && (p = -1 * q[x], l(p) || (f = Math.floor((p - E) / b), p < m[f].min && (m[f].min = p), p > m[f].max && (m[f].max = p)));
                  delete this._axes[n].dataInfo.dataPointYNegativeSums;
                }
                for (x = 0; x < k.length - 1; x++)
                  if (m = k[x].max, isFinite(m))
                    for (; x < k.length - 1; )
                      if (E = k[x + 1].min, isFinite(E)) {
                        p = E - m;
                        p > b && h.push({ diff: p, start: m, end: E });
                        break;
                      } else
                        x++;
                if (this._axes[n].scaleBreaks.customBreaks) {
                  for (x = 0; x < this._axes[n].scaleBreaks.customBreaks.length; x++)
                    for (b = 0; b < h.length; b++)
                      if (this._axes[n].scaleBreaks.customBreaks[x].startValue <= h[b].start && h[b].start <= this._axes[n].scaleBreaks.customBreaks[x].endValue || this._axes[n].scaleBreaks.customBreaks[x].startValue <= h[b].start && h[b].start <= this._axes[n].scaleBreaks.customBreaks[x].endValue || h[b].start <= this._axes[n].scaleBreaks.customBreaks[x].startValue && this._axes[n].scaleBreaks.customBreaks[x].startValue <= h[b].end || h[b].start <= this._axes[n].scaleBreaks.customBreaks[x].endValue && this._axes[n].scaleBreaks.customBreaks[x].endValue <= h[b].end)
                        h.splice(b, 1), b--;
                }
                h.sort(function(a2, b2) {
                  return b2.diff - a2.diff;
                });
                for (x = 0; x < Math.min(h.length, this._axes[n].scaleBreaks.maxNumberOfAutoBreaks); x++)
                  b = a(h[x].start, h[x].end, this._axes[n].logarithmic ? this._axes[n].dataInfo.max / this._axes[n].dataInfo.min : this._axes[n].dataInfo.max - this._axes[n].dataInfo.min, this._axes[n].logarithmic), this._axes[n].scaleBreaks.autoBreaks.push(new fa2(this, "autoBreaks", b, x, ++this._eventManager.lastObjectId, this._axes[n].scaleBreaks)), this._axes[n].scaleBreaks._appliedBreaks.push(this._axes[n].scaleBreaks.autoBreaks[this._axes[n].scaleBreaks.autoBreaks.length - 1]);
                this._axes[n].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                  return a2.startValue - b2.startValue;
                });
              }
          }
        };
        t.prototype.renderCrosshairs = function(a, d) {
          for (var c = 0; c < this.axisX.length; c++)
            this.axisX[c] != a && (this.axisX[c].crosshair && this.axisX[c].crosshair.enabled && !this.axisX[c].crosshair._hidden) && (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseY)) : this.axisX[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseX)) : d || this.axisX[c].showCrosshair(this.axisX[c].crosshair._updatedValue));
          for (c = 0; c < this.axisX2.length; c++)
            this.axisX2[c] != a && (this.axisX2[c].crosshair && this.axisX2[c].crosshair.enabled && !this.axisX2[c].crosshair._hidden) && (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisX2[c].crosshair.render(
              null,
              this.sessionVariables.mouseY,
              this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseY)
            ) : this.axisX2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseX)) : d || this.axisX2[c].showCrosshair(this.axisX2[c].crosshair._updatedValue));
          for (c = 0; c < this.axisY.length; c++)
            this.axisY[c] != a && (this.axisY[c].crosshair && this.axisY[c].crosshair.enabled && !this.axisY[c].crosshair._hidden) && (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseY)) : d || this.axisY[c].showCrosshair(this.axisY[c].crosshair._updatedValue));
          for (c = 0; c < this.axisY2.length; c++)
            this.axisY2[c] != a && (this.axisY2[c].crosshair && this.axisY2[c].crosshair.enabled && !this.axisY2[c].crosshair._hidden) && (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2 ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement ? this.axisY2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseX)) : this.axisY2[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseY)) : d || this.axisY2[c].showCrosshair(this.axisY2[c].crosshair._updatedValue));
        };
        t.prototype.getDataPointAtXY = function(a, d, c) {
          c = c || false;
          for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var h = null;
            (h = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(h);
          }
          a = null;
          d = false;
          for (c = 0; c < b.length; c++)
            if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
              if (e = ma("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
                d = true;
                break;
              }
            }
          for (c = 0; c < b.length; c++)
            d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        t.prototype.getObjectAtXY = function(a, d, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, d, c || false))
            b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (r)
            b = bb(a, d, this._eventManager.ghostCtx);
          else
            for (c = 0; c < this.legend.items.length; c++) {
              var e = this.legend.items[c];
              a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (b = e.id);
            }
          return b;
        };
        t.prototype.getAutoFontSize = nb;
        t.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        t.prototype.clearCanvas = mb;
        t.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        t.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var d = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                d = ["mousemove", "mousedown"];
                this._lastTouchData = Qa(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                d = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var h = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              e = Qa(b);
              e.time = /* @__PURE__ */ new Date();
              try {
                var n = e.y - this._lastTouchData.y, h = e.time - this._lastTouchData.time;
                if (1 < Math.abs(n) && this._lastTouchData.scroll || 5 < Math.abs(n) && 250 > h)
                  this._lastTouchData.scroll = true;
              } catch (x) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled)
                this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else
                for (c = 0; c < d.length; c++)
                  if (e = d[c], n = document.createEvent("MouseEvent"), n.initMouseEvent(
                    e,
                    true,
                    true,
                    window,
                    1,
                    b.screenX,
                    b.screenY,
                    b.clientX,
                    b.clientY,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                  ), b.target.dispatchEvent(n), !l(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < h || "click" === e)
                    a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
            }
          }
        };
        t.prototype._dispatchRangeEvent = function(a, d) {
          var c = { chart: this };
          c.type = a;
          c.trigger = d;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var e = 0; e < b.length; e++)
            if (l(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
              for (var h = 0; h < this.axisY.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisY2" === b[e])
              for (h = 0; h < this.axisY2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX" === b[e])
              for (h = 0; h < this.axisX.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
              for (h = 0; h < this.axisX2.length; h++)
                c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
          this.dispatchEvent(a, c, this);
        };
        t.prototype._mouseEventHandler = function(a) {
          function d() {
            t.capturedEventParam && (e = t.capturedEventParam, n = e.bounds, "mouseup" === b && (t.capturedEventParam = null, e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", e.chart._mouseEventHandler, false)), e.hasOwnProperty(b) && ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture ? a.target !== e.chart.overlaidCanvas && r || e[b].call(e.context, c.x, c.y) : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Qa(a), b = a.type, e, h;
          a.which ? h = 3 == a.which : a.button && (h = 2 == a.button);
          if (this._ignoreNextEvent)
            d(), this._ignoreNextEvent = false;
          else if (d(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var n;
            Ia && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!h) {
              if (!t.capturedEventParam && this._events) {
                for (h = 0; h < this._events.length; h++)
                  if (this._events[h].hasOwnProperty(b))
                    if (e = this._events[h], n = e.bounds, c.x >= n.x1 && c.x <= n.x2 && c.y >= n.y1 && c.y <= n.y2) {
                      e[b].call(e.context, c.x, c.y);
                      "mousedown" === b && true === e.capture ? (t.capturedEventParam = e, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                      break;
                    } else
                      e = null;
                a.target.style.cursor = e && e.cursor ? e.cursor : this._defaultCursor;
              }
              h = this.plotArea;
              if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                for (h = 0; h < this.axisX.length; h++)
                  this.axisX[h].crosshair && this.axisX[h].crosshair.enabled && (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[h].options }, this.axisX[h].crosshair));
                for (h = 0; h < this.axisX2.length; h++)
                  this.axisX2[h].crosshair && this.axisX2[h].crosshair.enabled && (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[h].options }, this.axisX2[h].crosshair));
                for (h = 0; h < this.axisY.length; h++)
                  this.axisY[h].crosshair && this.axisY[h].crosshair.enabled && (this.axisY[h].crosshair.hide(), this.axisY[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[h].options }, this.axisY[h].crosshair));
                for (h = 0; h < this.axisY2.length; h++)
                  this.axisY2[h].crosshair && this.axisY2[h].crosshair.enabled && (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[h].options }, this.axisY2[h].crosshair));
              }
              this.sessionVariables.mouseX = c.x;
              this.sessionVariables.mouseY = c.y;
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
          }
        };
        t.prototype._plotAreaMouseDown = function(a, d) {
          this.isDrag = true;
          this.dragStartPoint = { x: a, y: d };
        };
        t.prototype._plotAreaMouseUp = function(a, d) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = d - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), n = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement)
              var x = h, h = e, e = x;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled)
                for (e = h = 0; e < this._axes.length; e++)
                  c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (h = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * h, c.sessionVariables.newViewportMaximum = c.viewportMaximum * h, n = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / h, c.sessionVariables.newViewportMaximum = c.viewportMaximum / h, n = true) : c.viewportMinimum < c.minimum ? (h = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + h, c.sessionVariables.newViewportMaximum = c.viewportMaximum + h, n = true) : c.viewportMaximum > c.maximum && (h = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - h, c.sessionVariables.newViewportMaximum = c.viewportMaximum - h, n = true);
              else if ((!e || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint)
                  return;
                c = e ? this.dragStartPoint.x : this.plotArea.x1;
                b = h ? this.dragStartPoint.y : this.plotArea.y1;
                e = e ? a : this.plotArea.x2;
                h = h ? d : this.plotArea.y2;
                2 < Math.abs(c - e) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c, b, e, h) && (n = true);
              }
              n && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.rangeUpdatedBy = "chart", this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), n && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ma(this._zoomButton, this._resetButton), sa(this, this._zoomButton, "pan"), sa(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length)
              for (n = 0; n < this.axisX.length; n++)
                this.axisX[n].crosshair && this.axisX[n].crosshair.enabled && this.axisX[n].renderCrosshair(a, d);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (n = 0; n < this.axisX2.length; n++)
                this.axisX2[n].crosshair && this.axisX2[n].crosshair.enabled && this.axisX2[n].renderCrosshair(a, d);
            if (this.axisY && 0 < this.axisY.length)
              for (n = 0; n < this.axisY.length; n++)
                this.axisY[n].crosshair && this.axisY[n].crosshair.enabled && this.axisY[n].renderCrosshair(a, d);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (n = 0; n < this.axisY2.length; n++)
                this.axisY2[n].crosshair && this.axisY2[n].crosshair.enabled && this.axisY2[n].renderCrosshair(a, d);
            if (this.axisX && 0 < this.axisX.length)
              for (n = 0; n < this.axisX.length; n++)
                this.axisX[n].crosshair && this.axisX[n].crosshair.enabled && this.axisX[n].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (n = 0; n < this.axisX2.length; n++)
                this.axisX2[n].crosshair && this.axisX2[n].crosshair.enabled && this.axisX2[n].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (n = 0; n < this.axisY.length; n++)
                this.axisY[n].crosshair && this.axisY[n].crosshair.enabled && this.axisY[n].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (n = 0; n < this.axisY2.length; n++)
                this.axisY2[n].crosshair && this.axisY2[n].crosshair.enabled && this.axisY2[n].crosshair.renderLabel();
          }
        };
        t.prototype._plotAreaMouseMove = function(a, d) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, e = c = null, e = 0 <= this.zoomType.indexOf("x"), h = 0 <= this.zoomType.indexOf("y"), n = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = h, h = e, e = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - d;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
              for (var x = 0; x < this.axisX.length; x++)
                this.axisX[x].crosshair && this.axisX[x].crosshair.enabled && (this.axisX[x].crosshair.hide(), this.axisX[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[x].options }, this.axisX[x].crosshair));
              for (x = 0; x < this.axisX2.length; x++)
                this.axisX2[x].crosshair && this.axisX2[x].crosshair.enabled && (this.axisX2[x].crosshair.hide(), this.axisX2[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[x].options }, this.axisX2[x].crosshair));
              for (x = 0; x < this.axisY.length; x++)
                this.axisY[x].crosshair && this.axisY[x].crosshair.enabled && (this.axisY[x].crosshair.hide(), this.axisY[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[x].options }, this.axisY[x].crosshair));
              for (x = 0; x < this.axisY2.length; x++)
                this.axisY2[x].crosshair && this.axisY2[x].crosshair.enabled && (this.axisY2[x].crosshair.hide(), this.axisY2[x].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[x].options }, this.axisY2[x].crosshair));
            } else
              this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
            if ((!e || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled)
                e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: h ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: h ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(n._panTimerId), n._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, e2, f) {
                  return function() {
                    n._zoomPanToSelectedRegion(b2, c2, e2, f, true) && (n._dispatchRangeEvent("rangeChanging", "pan"), n.stockChart && (n.stockChart._rangeEventParameter.type = "rangeChanging", n.stockChart.dispatchEvent("rangeChanging", n.stockChart._rangeEventParameter, n.stockChart)), n.render(), n._dispatchRangeEvent("rangeChanged", "pan"), n.stockChart && (n.stockChart._rangeEventParameter.type = "rangeChanged", n.stockChart.dispatchEvent("rangeChanged", n.stockChart._rangeEventParameter, n.stockChart)), n.dragStartPoint.x = a, n.dragStartPoint.y = d);
                  };
                }(e.x1, e.y1, e.x2, e.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = e ? this.dragStartPoint.x : this.plotArea.x1, x = h ? this.dragStartPoint.y : this.plotArea.y1, l2 = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = h ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, x, e ? a : this.plotArea.x2 - this.plotArea.x1, h ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, x, l2, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement) {
            this.sessionVariables.crosshairShownByPixel = true;
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d);
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
          }
        };
        t.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
          a = this.validateRegion(a, d, c, b, e);
          d = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid)
            for (b = 0; b < d.length; b++)
              e = c[b], d[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: e.val1,
                maximum: e.val2
              });
          return a.isValid;
        };
        t.prototype.validateRegion = function(a, d, c, b, e) {
          e = e || false;
          for (var h = 0 <= this.zoomType.indexOf("x"), n = 0 <= this.zoomType.indexOf("y"), x = false, l2 = [], k = [], m = [], p = 0; p < this._axes.length; p++)
            ("axisX" === this._axes[p].type && h || "axisY" === this._axes[p].type && n) && k.push(this._axes[p]);
          for (n = 0; n < k.length; n++) {
            var p = k[n], h = false, q = p.convertPixelToValue({ x: a, y: d }), f = p.convertPixelToValue({ x: c, y: b });
            if (q > f)
              var g2 = f, f = q, q = g2;
            if (p.scaleBreaks)
              for (g2 = 0; !h && g2 < p.scaleBreaks._appliedBreaks.length; g2++)
                h = p.scaleBreaks._appliedBreaks[g2].startValue <= q && p.scaleBreaks._appliedBreaks[g2].endValue >= f;
            if (isFinite(p.dataInfo.minDiff)) {
              if (g2 = p.getApparentDifference(q, f, null, true), !(h || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) && (p.logarithmic && g2 < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && g2 < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || f > p.maximum))
                l2.push(p), m.push({ val1: q, val2: f }), x = true;
              else if (!e) {
                x = false;
                break;
              }
            }
          }
          return {
            isValid: x,
            axesWithValidRange: l2,
            axesRanges: m
          };
        };
        t.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !r && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
              a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
              a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
              a.y2 = d.y1 > c.lineCoordinates.y2 ? d.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > c.lineCoordinates.y2 ? d.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else
            d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
          r || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Fa(a.x1, a.y1, a.x2, a.y2, 2);
        };
        t.prototype.renderIndexLabels = function(a) {
          var d = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, h = 0, n = e = h = 0, x = 0, g2 = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var m = this._indexLabels[a], p = m.chartType.toLowerCase(), q, f, x = ma("indexLabelFontColor", m.dataPoint, m.dataSeries), D = ma(
              "indexLabelFontSize",
              m.dataPoint,
              m.dataSeries
            ), g2 = ma("indexLabelFontFamily", m.dataPoint, m.dataSeries), k = ma("indexLabelFontStyle", m.dataPoint, m.dataSeries);
            q = ma("indexLabelFontWeight", m.dataPoint, m.dataSeries);
            var w = ma("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
            f = ma("indexLabelBorderColor", m.dataPoint, m.dataSeries);
            var h = ma("indexLabelBorderThickness", m.dataPoint, m.dataSeries), e = ma("indexLabelMaxWidth", m.dataPoint, m.dataSeries), n = ma("indexLabelWrap", m.dataPoint, m.dataSeries), y = ma(
              "indexLabelLineDashType",
              m.dataPoint,
              m.dataSeries
            ), s = ma("indexLabelLineColor", m.dataPoint, m.dataSeries), C = l(m.dataPoint.indexLabelLineThickness) ? l(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness : m.dataPoint.indexLabelLineThickness, b = 0 < C ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, u = { percent: null, total: null }, W = null;
            if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type)
              u = this.getPercentAndTotal(
                m.dataSeries,
                m.dataPoint
              );
            if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter)
              W = { chart: this, dataSeries: m.dataSeries, dataPoint: m.dataPoint, index: m.indexKeyword, total: u.total, percent: u.percent };
            var t2 = m.dataPoint.indexLabelFormatter ? m.dataPoint.indexLabelFormatter(W) : m.dataPoint.indexLabel ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword) : m.dataSeries.indexLabelFormatter ? m.dataSeries.indexLabelFormatter(W) : m.dataSeries.indexLabel ? this.replaceKeywordsWithValue(
              m.dataSeries.indexLabel,
              m.dataPoint,
              m.dataSeries,
              null,
              m.indexKeyword
            ) : null;
            if (null !== t2 && "" !== t2) {
              var u = ma("indexLabelPlacement", m.dataPoint, m.dataSeries), W = ma("indexLabelOrientation", m.dataPoint, m.dataSeries), B = ma("indexLabelTextAlign", m.dataPoint, m.dataSeries), v3 = m.direction, z3 = m.dataSeries.axisX, K = m.dataSeries.axisY, L = false, w = new ka(d, {
                x: 0,
                y: 0,
                maxWidth: e ? e : 0.5 * this.width,
                maxHeight: n ? 5 * D : 1.5 * D,
                angle: "horizontal" === W ? 0 : -90,
                text: t2,
                padding: 0,
                backgroundColor: w,
                borderColor: f,
                borderThickness: h,
                textAlign: B,
                fontSize: D,
                fontFamily: g2,
                fontWeight: q,
                fontColor: x,
                fontStyle: k,
                textBaseline: "middle"
              });
              w.measureText();
              m.dataSeries.indexLabelMaxWidth = w.maxWidth;
              if ("stackedarea100" === p) {
                if (m.point.x < c.x1 || m.point.x > c.x2 || m.point.y < c.y1 - 1 || m.point.y > c.y2 + 1)
                  continue;
              } else if ("rangearea" === p || "rangesplinearea" === p) {
                if (m.dataPoint.x < z3.viewportMinimum || m.dataPoint.x > z3.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum)
                  continue;
              } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                if (m.dataPoint.x < z3.viewportMinimum || m.dataPoint.x > z3.viewportMaximum || m.dataPoint.y < K.viewportMinimum || m.dataPoint.y > K.viewportMaximum)
                  continue;
              } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !m.axisSwapped) {
                if (m.dataPoint.x < z3.viewportMinimum || m.dataPoint.x > z3.viewportMaximum || (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) < K.viewportMinimum || (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) > K.viewportMaximum)
                  continue;
              } else if (0 <= p.indexOf("bar") || "error" === p) {
                if (m.dataPoint.x < z3.viewportMinimum || m.dataPoint.x > z3.viewportMaximum || m.bounds.x1 > c.x2 || m.bounds.x2 < c.x1)
                  continue;
              } else if ("candlestick" === p || "ohlc" === p) {
                if (m.dataPoint.x < z3.viewportMinimum || m.dataPoint.x > z3.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum)
                  continue;
              } else if (m.dataPoint.x < z3.viewportMinimum || m.dataPoint.x > z3.viewportMaximum)
                continue;
              n = x = 2;
              "horizontal" === W ? (g2 = w.width, k = w.height) : (k = w.width, g2 = w.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= p.indexOf("line") || 0 <= p.indexOf("area"))
                  u = "auto", x = 4;
                else if (0 <= p.indexOf("stacked"))
                  "auto" === u && (u = "inside");
                else if ("bubble" === p || "scatter" === p)
                  u = "inside";
                q = m.point.x - g2 / 2 + ("horizontal" === W ? 0 : w._lineHeight / 2);
                if ("inside" !== u)
                  e = c.y1, h = c.y2, 0 < v3 ? (f = m.point.y + w._lineHeight / 2 - k - x - b, f < e && (f = "auto" === u ? Math.max(m.point.y, e) + w._lineHeight / 2 + x + b : e + w._lineHeight / 2 + x + b, L = f + ("horizontal" === W ? k - w._lineHeight / 2 : 0) > m.point.y, !L || (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) || (f -= b))) : (f = m.point.y + w._lineHeight / 2 + x + b, f > h - k + w._lineHeight / 2 - x && (f = "auto" === u ? Math.min(m.point.y, h) + w._lineHeight / 2 - k - x - b : h + w._lineHeight / 2 - k - x - b, L = f - ("horizontal" === W ? w._lineHeight / 2 : k) < m.point.y, !L || (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) || (f += b)));
                else {
                  Math.max(m.bounds.y1, c.y1);
                  h = Math.min(m.bounds.y2, c.y2) - k + w._lineHeight / 2;
                  b = 0 <= p.indexOf("range") || "error" === p ? 0 < v3 ? Math.max(m.bounds.y1, c.y1) + w._lineHeight / 2 + x : Math.min(m.bounds.y2, c.y2) + w._lineHeight / 2 - k - x : (Math.max(
                    m.bounds.y1,
                    c.y1
                  ) + Math.min(m.bounds.y2, c.y2)) / 2 - k / 2 + w._lineHeight / 2;
                  if (0 < v3) {
                    if (f = b, "bubble" === p || "scatter" === p)
                      f = m.point.y - k / 2 + w._lineHeight / 2, k > m.bounds.y2 - m.bounds.y1 && (f -= k / 2 + x), 0 > f - w._lineHeight / 2 && (f += Math.abs(f - w._lineHeight / 2) <= (m.bounds.y2 - m.bounds.y1) / 2 + x ? Math.abs(f - w._lineHeight / 2) : (m.bounds.y2 - m.bounds.y1) / 2 + x);
                  } else
                    f = Math.min(m.point.y, b), f > h - k - x && ("bubble" === p || "scatter" === p) && (f = Math.min(m.point.y + x, c.y2 - k - x));
                  f = Math.min(f, h);
                }
              } else
                0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (u = "auto", n = 4) : 0 <= p.indexOf("stacked") ? "auto" === u && (u = "inside") : "bubble" === p && (u = "inside"), f = m.point.y + w._lineHeight / 2 - k / 2, "inside" !== u ? (h = c.x1, e = c.x2, 0 > v3 ? (q = m.point.x - g2 + ("horizontal" === W ? 0 : w._lineHeight / 2) - n - b, ("horizontal" === W ? q : q - w._lineHeight / 2) < h && (q = "auto" === u ? Math.max(m.point.x, h) + ("horizontal" === W ? 0 : w._lineHeight / 2) + x + b : h + ("horizontal" === W ? 0 : w._lineHeight / 2) + n, (L = q + g2 - ("horizontal" === W ? 0 : w._lineHeight / 2) > m.point.x) && (q -= b))) : (q = m.point.x + ("horizontal" === W ? 0 : w._lineHeight / 2) + n + b, ("horizontal" === W ? q : q - w._lineHeight / 2) > e - g2 - n - b && (q = "auto" === u ? Math.min(m.point.x, e) - ("horizontal" === W ? g2 : g2 - w._lineHeight / 2) - n - b : e - g2 - n + ("horizontal" === W ? 0 : w._lineHeight / 2), (L = q - ("horizontal" === W ? 0 : w._lineHeight / 2) < m.point.x) && (q += b)))) : (h = Math.max(m.bounds.x1, c.x1), Math.min(m.bounds.x2, c.x2), b = 0 <= p.indexOf("range") || "error" === p ? 0 > v3 ? Math.max(m.bounds.x1, c.x1) : Math.min(m.bounds.x2, c.x2) - g2 - n + ("horizontal" === W ? 0 : w._lineHeight / 2) : (Math.max(m.bounds.x1, c.x1) + Math.min(m.bounds.x2, c.x2)) / 2 - g2 / 2 + ("horizontal" === W ? 0 : w._lineHeight / 2), q = 0 > v3 ? b : Math.min(m.point.x, b), q = Math.max(q, h + ("horizontal" === W ? 0 : w._lineHeight / 2 + x)));
              "vertical" === W && (f += k - w._lineHeight / 2, 0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(p) && (L = 0 < v3 ? f + ("horizontal" === W ? k - w._lineHeight / 2 : 0) > m.point.y : f - ("horizontal" === W ? w._lineHeight / 2 : k) < m.point.y), "bubble" === p || "scatter" === p) && (q += w._lineHeight / 2 - D / 2);
              w.x = q;
              w.y = f;
              w.render(true);
              C && ("inside" !== u && (0 > p.indexOf("bar") && ("error" !== p || !m.axisSwapped) && m.point.x > c.x1 && m.point.x < c.x2 || !L) && (-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(p) && ("error" !== p || m.axisSwapped) && m.point.y > c.y1 && m.point.y < c.y2 || !L)) && (d.lineWidth = C, d.strokeStyle = s ? s : "gray", d.setLineDash && d.setLineDash(I(y, C)), d.beginPath(), d.moveTo(m.point.x, m.point.y), 0 <= p.indexOf("bar") || "error" === p && m.axisSwapped ? d.lineTo(q + (0 < m.direction ? 0 : g2) + ("vertical" === W ? -w._lineHeight / 2 : 0), f + ("vertical" === W ? -k / 2 : k / 2 - w._lineHeight / 2)) : 0 <= p.indexOf("column") || "error" === p && !m.axisSwapped ? d.lineTo(q + g2 / 2 - ("horizontal" === W ? 0 : w._lineHeight / 2), f + ("vertical" === W ? f - k < m.point.y ? 0 : -k : (f - w._lineHeight / 2 < m.point.y ? k : 0) - w._lineHeight / 2)) : 0 <= p.indexOf("waterfall") ? d.lineTo(q + g2 / 2 - ("horizontal" === W ? 0 : w._lineHeight / 2), "vertical" === W ? 0 < v3 && f < m.point.y ? f : 0 > v3 && f - k > m.point.y ? f - k : m.point.y : 0 < v3 && f + k - w._lineHeight / 2 < m.point.y ? f + k - w._lineHeight / 2 : 0 > v3 && f - w._lineHeight / 2 > m.point.y ? f - w._lineHeight / 2 : m.point.y) : d.lineTo(q + g2 / 2 - ("horizontal" === W ? 0 : w._lineHeight / 2), f + ("vertical" === W ? f - k < m.point.y ? 0 : -k : (f + k - w._lineHeight / 2 < m.point.y ? k : 0) - w._lineHeight / 2)), d.stroke());
            }
          }
          d = { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
          for (a = 0; a < this._indexLabels.length; a++)
            m = this._indexLabels[a], w = ma("indexLabelBackgroundColor", m.dataPoint, m.dataSeries), m.dataSeries.indexLabelBackgroundColor = l(w) ? r ? "transparent" : null : w;
          return d;
        };
        t.prototype.renderLine = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], n, x = 0; x < a.dataSeriesIndexes.length; x++) {
              var l2 = a.dataSeriesIndexes[x], k = this.data[l2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, p = "solid";
              if (c.setLineDash) {
                var q = I(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, f = I(p, k.lineThickness);
                c.setLineDash(f);
              }
              var g2 = k.id;
              this._eventManager.objectMap[g2] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              g2 = U(g2);
              b.strokeStyle = g2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var g2 = k._colorSet, w = g2 = k.lineColor = k.options.lineColor ? k.options.lineColor : g2[0];
              c.strokeStyle = g2;
              var y = true, s = 0, C, u;
              c.beginPath();
              if (0 < m.length) {
                for (var W = false, s = 0; s < m.length; s++)
                  if (C = m[s].x.getTime ? m[s].x.getTime() : m[s].x, !(C < a.axisX.dataInfo.viewPortMin || C > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !W)))
                    if ("number" !== typeof m[s].y)
                      0 < s && !(k.connectNullData || W || y) && (c.stroke(), r && b.stroke()), W = true;
                    else {
                      C = a.axisX.convertValueToPixel(C);
                      u = a.axisY.convertValueToPixel(m[s].y);
                      var t2 = k.dataPointIds[s];
                      this._eventManager.objectMap[t2] = { id: t2, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: s, x1: C, y1: u };
                      y || W ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(n.x, n.y), p = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(C, u), r && b.lineTo(C, u)) : (c.beginPath(), c.moveTo(
                        C,
                        u
                      ), r && (b.beginPath(), b.moveTo(C, u))), W = y = false) : (c.lineTo(C, u), r && b.lineTo(C, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(C, u), r && (b.stroke(), b.beginPath(), b.moveTo(C, u))));
                      n = { x: C, y: u };
                      s < m.length - 1 && (w !== (m[s].lineColor || g2) || p !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(C, u), w = m[s].lineColor || g2, c.strokeStyle = w, c.setLineDash && (m[s].lineDashType ? (p = m[s].lineDashType, c.setLineDash(I(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(f))));
                      if (0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize)) {
                        var B = k.getMarkerProperties(s, C, u, c);
                        h.push(B);
                        t2 = U(t2);
                        r && h.push({ x: C, y: u, ctx: b, type: B.type, size: B.size, color: t2, borderColor: t2, borderThickness: B.borderThickness });
                      }
                      (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: m[s], dataSeries: k, point: { x: C, y: u }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: g2 });
                    }
                c.stroke();
                r && b.stroke();
              }
            }
            aa.drawMarkers(h);
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderStepLine = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var h = [], n, x = 0; x < a.dataSeriesIndexes.length; x++) {
              var l2 = a.dataSeriesIndexes[x], k = this.data[l2];
              c.lineWidth = k.lineThickness;
              var m = k.dataPoints, p = "solid";
              if (c.setLineDash) {
                var q = I(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, f = I(p, k.lineThickness);
                c.setLineDash(f);
              }
              var g2 = k.id;
              this._eventManager.objectMap[g2] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              g2 = U(g2);
              b.strokeStyle = g2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var g2 = k._colorSet, w = g2 = k.lineColor = k.options.lineColor ? k.options.lineColor : g2[0];
              c.strokeStyle = g2;
              var y = true, s = 0, C, u;
              c.beginPath();
              if (0 < m.length) {
                for (var W = false, s = 0; s < m.length; s++)
                  if (C = m[s].getTime ? m[s].x.getTime() : m[s].x, !(C < a.axisX.dataInfo.viewPortMin || C > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !W)))
                    if ("number" !== typeof m[s].y)
                      0 < s && !(k.connectNullData || W || y) && (c.stroke(), r && b.stroke()), W = true;
                    else {
                      var t2 = u;
                      C = a.axisX.convertValueToPixel(C);
                      u = a.axisY.convertValueToPixel(m[s].y);
                      var B = k.dataPointIds[s];
                      this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: s, x1: C, y1: u };
                      y || W ? (!y && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(n.x, n.y), p = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(C, t2), c.lineTo(C, u), r && (b.lineTo(C, t2), b.lineTo(C, u))) : (c.beginPath(), c.moveTo(C, u), r && (b.beginPath(), b.moveTo(C, u))), W = y = false) : (c.lineTo(C, t2), r && b.lineTo(C, t2), c.lineTo(C, u), r && b.lineTo(C, u), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(C, u), r && (b.stroke(), b.beginPath(), b.moveTo(C, u))));
                      n = { x: C, y: u };
                      s < m.length - 1 && (w !== (m[s].lineColor || g2) || p !== (m[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(C, u), w = m[s].lineColor || g2, c.strokeStyle = w, c.setLineDash && (m[s].lineDashType ? (p = m[s].lineDashType, c.setLineDash(I(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(f))));
                      0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize) && (t2 = k.getMarkerProperties(s, C, u, c), h.push(t2), B = U(B), r && h.push({ x: C, y: u, ctx: b, type: t2.type, size: t2.size, color: B, borderColor: B, borderThickness: t2.borderThickness }));
                      (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: m[s], dataSeries: k, point: { x: C, y: u }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: g2 });
                    }
                c.stroke();
                r && b.stroke();
              }
            }
            aa.drawMarkers(h);
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderSpline = function(a) {
          function d(a2) {
            a2 = v2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              r && e.beginPath();
              b.moveTo(a2[0].x, a2[0].y);
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              r && e.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3)
                if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), r && e.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), r && (e.stroke(), e.beginPath(), e.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              r && e.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx;
            b.save();
            var h = this.plotArea;
            b.beginPath();
            b.rect(h.x1, h.y1, h.width, h.height);
            b.clip();
            for (var n = [], x = 0; x < a.dataSeriesIndexes.length; x++) {
              var l2 = a.dataSeriesIndexes[x], k = this.data[l2];
              b.lineWidth = k.lineThickness;
              var m = k.dataPoints, p = "solid";
              if (b.setLineDash) {
                var q = I(k.nullDataLineDashType, k.lineThickness), p = k.lineDashType, f = I(p, k.lineThickness);
                b.setLineDash(f);
              }
              var g2 = k.id;
              this._eventManager.objectMap[g2] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              g2 = U(g2);
              e.strokeStyle = g2;
              e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var g2 = k._colorSet, w = g2 = k.lineColor = k.options.lineColor ? k.options.lineColor : g2[0];
              b.strokeStyle = g2;
              var y = 0, s, C, u = [];
              b.beginPath();
              if (0 < m.length) {
                for (C = false, y = 0; y < m.length; y++)
                  if (s = m[y].getTime ? m[y].x.getTime() : m[y].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !C)))
                    if ("number" !== typeof m[y].y)
                      0 < y && !C && (k.connectNullData ? b.setLineDash && (0 < u.length && (k.options.nullDataLineDashType || !m[y - 1].lineDashType)) && (u[u.length - 1].newLineDashArray = q, p = k.nullDataLineDashType) : (d(u), u = [])), C = true;
                    else {
                      s = a.axisX.convertValueToPixel(s);
                      C = a.axisY.convertValueToPixel(m[y].y);
                      var W = k.dataPointIds[y];
                      this._eventManager.objectMap[W] = { id: W, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: y, x1: s, y1: C };
                      u[u.length] = { x: s, y: C };
                      y < m.length - 1 && (w !== (m[y].lineColor || g2) || p !== (m[y].lineDashType || k.lineDashType)) && (w = m[y].lineColor || g2, u[u.length - 1].newStrokeStyle = w, b.setLineDash && (m[y].lineDashType ? (p = m[y].lineDashType, u[u.length - 1].newLineDashArray = I(p, k.lineThickness)) : (p = k.lineDashType, u[u.length - 1].newLineDashArray = f)));
                      if (0 !== m[y].markerSize && (0 < m[y].markerSize || 0 < k.markerSize)) {
                        var t2 = k.getMarkerProperties(y, s, C, b);
                        n.push(t2);
                        W = U(W);
                        r && n.push({ x: s, y: C, ctx: e, type: t2.type, size: t2.size, color: W, borderColor: W, borderThickness: t2.borderThickness });
                      }
                      (m[y].indexLabel || k.indexLabel || m[y].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: m[y], dataSeries: k, point: { x: s, y: C }, direction: 0 > m[y].y === a.axisY.reversed ? 1 : -1, color: g2 });
                      C = false;
                    }
              }
              d(u);
            }
            aa.drawMarkers(n);
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(h.x1, h.y1, h.width, h.height), e.beginPath());
            b.restore();
            b.beginPath();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: Q.xClipAnimation,
              easingFunction: Q.easing.linear,
              animationBase: 0
            };
          }
        };
        t.prototype.renderColumn = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, n, x, l2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            p < h && (p = h);
            p > m && (p = m);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var q = a.dataSeriesIndexes[m], f = this.data[q], g2 = f.dataPoints;
              if (0 < g2.length) {
                for (var w = 5 < p && f.bevelEnabled ? true : false, h = 0; h < g2.length; h++)
                  if (g2[h].getTime ? l2 = g2[h].x.getTime() : l2 = g2[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof g2[h].y) {
                    n = a.axisX.convertValueToPixel(l2);
                    x = a.axisY.convertValueToPixel(g2[h].y);
                    n = a.axisX.reversed ? n + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + m) * p << 0 : n - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + m) * p << 0;
                    var y = a.axisX.reversed ? n - p << 0 : n + p << 0, s;
                    0 <= g2[h].y ? s = k : (s = x, x = k);
                    x > s && (b = x, x = s, s = b);
                    b = g2[h].color ? g2[h].color : f._colorSet[h % f._colorSet.length];
                    da(c, a.axisX.reversed ? y : n, x, a.axisX.reversed ? n : y, s, b, 0, null, w && (a.axisY.reversed ? 0 > g2[h].y : 0 <= g2[h].y), (a.axisY.reversed ? 0 <= g2[h].y : 0 > g2[h].y) && w, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: n, y1: x, x2: y, y2: s };
                    b = U(b);
                    r && da(
                      this._eventManager.ghostCtx,
                      a.axisX.reversed ? y : n,
                      x,
                      a.axisX.reversed ? n : y,
                      s,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (g2[h].indexLabel || f.indexLabel || g2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "column", dataPoint: g2[h], dataSeries: f, point: { x: n + (y - n) / 2, y: 0 > g2[h].y === a.axisY.reversed ? x : s }, direction: 0 > g2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: n, y1: Math.min(x, s), x2: y, y2: Math.max(x, s) }, color: b });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.yScaleAnimation, easingFunction: Q.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k };
          }
        };
        t.prototype.renderStackedColumn = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], n = [], x = [], l2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, g2 = a.axisX.dataInfo.minDiff;
            isFinite(g2) || (g2 = 0.3 * Math.abs(a.axisX.range));
            g2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g2) / Math.log(a.axisX.range) : Math.abs(g2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            g2 < k && (g2 = k);
            g2 > f && (g2 = f);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var C = 5 < g2 && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    m = a.axisX.convertValueToPixel(b);
                    m = m - a.plotType.plotUnits.length * g2 / 2 + a.index * g2 << 0;
                    var u = m + g2 << 0, t2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      x[b] = s[k].y + (x[b] ? x[b] : 0), 0 < x[b] && (p = a.axisY.convertValueToPixel(x[b]), t2 = "undefined" !== typeof h[b] ? h[b] : q, h[b] = p);
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      l2[b] = s[k].y + (l2[b] ? l2[b] : 0), t2 = a.axisY.convertValueToPixel(l2[b]), p = "undefined" !== typeof n[b] ? n[b] : q, n[b] = t2;
                    else if (p = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var v3 = "undefined" !== typeof h[b] ? h[b] : 0;
                      p -= v3;
                      t2 = q - v3;
                      h[b] = v3 + (t2 - p);
                    } else
                      v3 = n[b] ? n[b] : 0, t2 = p + v3, p = q + v3, n[b] = v3 + (t2 - p);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, m, a.axisY.reversed ? t2 : p, u, a.axisY.reversed ? p : t2, b, 0, null, C && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && C, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: w,
                      dataPointIndex: k,
                      x1: m,
                      y1: p,
                      x2: u,
                      y2: t2
                    };
                    b = U(b);
                    r && da(this._eventManager.ghostCtx, m, p, u, t2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: s[k], dataSeries: y, point: { x: m + (u - m) / 2, y: 0 <= s[k].y ? p : t2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: m, y1: Math.min(p, t2), x2: u, y2: Math.max(p, t2) }, color: b });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.yScaleAnimation, easingFunction: Q.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
          }
        };
        t.prototype.renderStackedColumn100 = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], n = [], x = [], l2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, g2 = a.axisX.dataInfo.minDiff;
            isFinite(g2) || (g2 = 0.3 * Math.abs(a.axisX.range));
            g2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g2) / Math.log(a.axisX.range) : Math.abs(g2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            g2 < k && (g2 = k);
            g2 > f && (g2 = f);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                for (var C = 5 < g2 && y.bevelEnabled ? true : false, k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    m = a.axisX.convertValueToPixel(b);
                    p = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    m = m - a.plotType.plotUnits.length * g2 / 2 + a.index * g2 << 0;
                    var u = m + g2 << 0, t2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      x[b] = p + ("undefined" !== typeof x[b] ? x[b] : 0);
                      if (0 >= x[b])
                        continue;
                      p = a.axisY.convertValueToPixel(x[b]);
                      t2 = h[b] ? h[b] : q;
                      h[b] = p;
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      l2[b] = p + ("undefined" !== typeof l2[b] ? l2[b] : 0), t2 = a.axisY.convertValueToPixel(l2[b]), p = n[b] ? n[b] : q, n[b] = t2;
                    else if (p = a.axisY.convertValueToPixel(p), 0 <= s[k].y) {
                      var v3 = "undefined" !== typeof h[b] ? h[b] : 0;
                      p -= v3;
                      t2 = q - v3;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y1 - p) && (p = e.y1);
                      h[b] = v3 + (t2 - p);
                    } else
                      v3 = "undefined" !== typeof n[b] ? n[b] : 0, t2 = p + v3, p = q + v3, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y2 - t2) && (t2 = e.y2), n[b] = v3 + (t2 - p);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, m, a.axisY.reversed ? t2 : p, u, a.axisY.reversed ? p : t2, b, 0, null, C && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && C, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: m, y1: p, x2: u, y2: t2 };
                    b = U(b);
                    r && da(this._eventManager.ghostCtx, m, p, u, t2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedColumn100",
                      dataPoint: s[k],
                      dataSeries: y,
                      point: { x: m + (u - m) / 2, y: 0 <= s[k].y ? p : t2 },
                      direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: m, y1: Math.min(p, t2), x2: u, y2: Math.max(p, t2) },
                      color: b
                    });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.yScaleAnimation, easingFunction: Q.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q };
          }
        };
        t.prototype.renderBar = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, n, x, l2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, p = a.axisX.dataInfo.minDiff;
            isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
            p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m < h) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            p < h && (p = h);
            p > m && (p = m);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              e.x1,
              e.y1,
              e.width,
              e.height
            ), this._eventManager.ghostCtx.clip());
            for (m = 0; m < a.dataSeriesIndexes.length; m++) {
              var q = a.dataSeriesIndexes[m], f = this.data[q], g2 = f.dataPoints;
              if (0 < g2.length) {
                var w = 5 < p && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < g2.length; h++)
                  if (g2[h].getTime ? l2 = g2[h].x.getTime() : l2 = g2[h].x, !(l2 < a.axisX.dataInfo.viewPortMin || l2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof g2[h].y) {
                    x = a.axisX.convertValueToPixel(l2);
                    n = a.axisY.convertValueToPixel(g2[h].y);
                    x = a.axisX.reversed ? x + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + m) * p << 0 : x - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + m) * p << 0;
                    var y = a.axisX.reversed ? x - p << 0 : x + p << 0, s;
                    0 <= g2[h].y ? s = k : (s = n, n = k);
                    b = g2[h].color ? g2[h].color : f._colorSet[h % f._colorSet.length];
                    da(c, a.axisY.reversed ? n : s, a.axisX.reversed ? y : x, a.axisY.reversed ? s : n, a.axisX.reversed ? x : y, b, 0, null, w, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: s, y1: x, x2: n, y2: y };
                    b = U(b);
                    r && da(
                      this._eventManager.ghostCtx,
                      s,
                      a.axisX.reversed ? y : x,
                      n,
                      a.axisX.reversed ? x : y,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (g2[h].indexLabel || f.indexLabel || g2[h].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: g2[h], dataSeries: f, point: { x: 0 <= g2[h].y ? n : s, y: x + (y - x) / 2 }, direction: 0 > g2[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s, n), y1: x, x2: Math.max(s, n), y2: y }, color: b });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.xScaleAnimation, easingFunction: Q.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k };
          }
        };
        t.prototype.renderStackedBar = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], n = [], l2 = [], g2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, D = a.axisX.dataInfo.minDiff;
            isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
            D = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            D < k && (D = k);
            D > f && (D = f);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var C = 5 < D && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    p = a.axisX.convertValueToPixel(b);
                    p = p - a.plotType.plotUnits.length * D / 2 + a.index * D << 0;
                    var u = p + D << 0, t2;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      l2[b] = s[k].y + (l2[b] ? l2[b] : 0), 0 < l2[b] && (t2 = h[b] ? h[b] : q, h[b] = m = a.axisY.convertValueToPixel(l2[b]));
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      g2[b] = s[k].y + (g2[b] ? g2[b] : 0), m = n[b] ? n[b] : q, n[b] = t2 = a.axisY.convertValueToPixel(g2[b]);
                    else if (m = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var v3 = h[b] ? h[b] : 0;
                      t2 = q + v3;
                      m += v3;
                      h[b] = v3 + (m - t2);
                    } else
                      v3 = n[b] ? n[b] : 0, t2 = m - v3, m = q - v3, n[b] = v3 + (m - t2);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, a.axisY.reversed ? m : t2, p, a.axisY.reversed ? t2 : m, u, b, 0, null, C, false, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: t2, y1: p, x2: m, y2: u };
                    b = U(b);
                    r && da(
                      this._eventManager.ghostCtx,
                      t2,
                      p,
                      m,
                      u,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: s[k], dataSeries: y, point: { x: 0 <= s[k].y ? m : t2, y: p + (u - p) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(t2, m), y1: p, x2: Math.max(t2, m), y2: u }, color: b });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.xScaleAnimation, easingFunction: Q.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q };
          }
        };
        t.prototype.renderStackedBar100 = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = [], n = [], l2 = [], g2 = [], k = 0, m, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, D = a.axisX.dataInfo.minDiff;
            isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
            D = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            D < k && (D = k);
            D > f && (D = f);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var w = a.dataSeriesIndexes[f], y = this.data[w], s = y.dataPoints;
              if (0 < s.length) {
                var C = 5 < D && y.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    p = a.axisX.convertValueToPixel(b);
                    var u;
                    u = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    p = p - a.plotType.plotUnits.length * D / 2 + a.index * D << 0;
                    var t2 = p + D << 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      l2[b] = u + (l2[b] ? l2[b] : 0);
                      if (0 >= l2[b])
                        continue;
                      u = h[b] ? h[b] : q;
                      h[b] = m = a.axisY.convertValueToPixel(l2[b]);
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      g2[b] = u + (g2[b] ? g2[b] : 0), m = n[b] ? n[b] : q, n[b] = u = a.axisY.convertValueToPixel(g2[b]);
                    else if (m = a.axisY.convertValueToPixel(u), 0 <= s[k].y) {
                      var v3 = h[b] ? h[b] : 0;
                      u = q + v3;
                      m += v3;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x2 - m) && (m = e.x2);
                      h[b] = v3 + (m - u);
                    } else
                      v3 = n[b] ? n[b] : 0, u = m - v3, m = q - v3, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x1 - u) && (u = e.x1), n[b] = v3 + (m - u);
                    b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                    da(c, a.axisY.reversed ? m : u, p, a.axisY.reversed ? u : m, t2, b, 0, null, C, false, false, false, y.fillOpacity);
                    b = y.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: k, x1: u, y1: p, x2: m, y2: t2 };
                    b = U(b);
                    r && da(this._eventManager.ghostCtx, u, p, m, t2, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: s[k], dataSeries: y, point: { x: 0 <= s[k].y ? m : u, y: p + (t2 - p) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(u, m), y1: p, x2: Math.max(u, m), y2: t2 }, color: b });
                  }
              }
            }
            r && (d.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: d,
              dest: this.plotArea.ctx,
              animationCallback: Q.xScaleAnimation,
              easingFunction: Q.easing.easeOutQuart,
              animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
            };
          }
        };
        t.prototype.renderArea = function(a) {
          var d, c;
          function b() {
            v3 && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t2 = u : 0 > a.axisY.viewportMaximum ? t2 = l2.y1 : 0 < a.axisY.viewportMinimum && (t2 = u), h.lineTo(y, t2), h.lineTo(v3.x, t2), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, r && (n.lineTo(y, t2), n.lineTo(v3.x, t2), n.closePath(), n.fill()), h.beginPath(), h.moveTo(
              y,
              s
            ), n.beginPath(), n.moveTo(y, s), v3 = { x: y, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var n = this._eventManager.ghostCtx, l2 = a.axisY.lineCoordinates, g2 = [], k = this.plotArea, m;
            h.save();
            r && n.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            r && (n.beginPath(), n.rect(k.x1, k.y1, k.width, k.height), n.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p], f = this.data[q], D = f.dataPoints, g2 = f.id;
              this._eventManager.objectMap[g2] = { objectType: "dataSeries", dataSeriesIndex: q };
              g2 = U(g2);
              n.fillStyle = g2;
              g2 = [];
              d = true;
              var w = 0, y, s, C, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t2, v3 = null;
              if (0 < D.length) {
                var B = f._colorSet[w % f._colorSet.length], z3 = f.lineColor = f.options.lineColor || B, A2 = z3;
                h.fillStyle = B;
                h.strokeStyle = z3;
                h.lineWidth = f.lineThickness;
                c = "solid";
                if (h.setLineDash) {
                  var K = I(f.nullDataLineDashType, f.lineThickness);
                  c = f.lineDashType;
                  var L = I(c, f.lineThickness);
                  h.setLineDash(L);
                }
                for (var ca = true; w < D.length; w++)
                  if (C = D[w].x.getTime ? D[w].x.getTime() : D[w].x, !(C < a.axisX.dataInfo.viewPortMin || C > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !ca)))
                    if ("number" !== typeof D[w].y)
                      f.connectNullData || (ca || d) || b(), ca = true;
                    else {
                      y = a.axisX.convertValueToPixel(C);
                      s = a.axisY.convertValueToPixel(D[w].y);
                      d || ca ? (!d && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || c === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (d = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = d, s = c, v3 = m, c = f.nullDataLineDashType, h.setLineDash(K)), h.lineTo(
                        y,
                        s
                      ), r && n.lineTo(y, s)) : (h.beginPath(), h.moveTo(y, s), r && (n.beginPath(), n.moveTo(y, s)), v3 = { x: y, y: s }), ca = d = false) : (h.lineTo(y, s), r && n.lineTo(y, s), 0 == w % 250 && b());
                      m = { x: y, y: s };
                      w < D.length - 1 && (A2 !== (D[w].lineColor || z3) || c !== (D[w].lineDashType || f.lineDashType)) && (b(), A2 = D[w].lineColor || z3, h.strokeStyle = A2, h.setLineDash && (D[w].lineDashType ? (c = D[w].lineDashType, h.setLineDash(I(c, f.lineThickness))) : (c = f.lineDashType, h.setLineDash(L))));
                      var ba = f.dataPointIds[w];
                      this._eventManager.objectMap[ba] = {
                        id: ba,
                        objectType: "dataPoint",
                        dataSeriesIndex: q,
                        dataPointIndex: w,
                        x1: y,
                        y1: s
                      };
                      0 !== D[w].markerSize && (0 < D[w].markerSize || 0 < f.markerSize) && (C = f.getMarkerProperties(w, y, s, h), g2.push(C), ba = U(ba), r && g2.push({ x: y, y: s, ctx: n, type: C.type, size: C.size, color: ba, borderColor: ba, borderThickness: C.borderThickness }));
                      (D[w].indexLabel || f.indexLabel || D[w].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: D[w], dataSeries: f, point: { x: y, y: s }, direction: 0 > D[w].y === a.axisY.reversed ? 1 : -1, color: B });
                    }
                b();
                aa.drawMarkers(g2);
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: Q.xClipAnimation,
              easingFunction: Q.easing.linear,
              animationBase: 0
            };
          }
        };
        t.prototype.renderSplineArea = function(a) {
          function d() {
            var c2 = v2(C, 2);
            if (0 < c2.length) {
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var f2 = 0; f2 < c2.length - 3; f2 += 3)
                  if (b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), r && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle || c2[f2 + 3].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(c2[f2 + 3].x, c2[f2 + 3].y), c2[f2 + 3].newStrokeStyle && (b.strokeStyle = c2[f2 + 3].newStrokeStyle), c2[f2 + 3].newLineDashArray && b.setLineDash(c2[f2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(c2[0].x, c2[0].y);
              r && (e.beginPath(), e.moveTo(c2[0].x, c2[0].y));
              for (f2 = 0; f2 < c2.length - 3; f2 += 3)
                b.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y), r && e.bezierCurveTo(c2[f2 + 1].x, c2[f2 + 1].y, c2[f2 + 2].x, c2[f2 + 2].y, c2[f2 + 3].x, c2[f2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? y = w : 0 > a.axisY.viewportMaximum ? y = h.y1 : 0 < a.axisY.viewportMinimum && (y = w);
              s = { x: c2[0].x, y: c2[0].y };
              b.lineTo(c2[c2.length - 1].x, y);
              b.lineTo(s.x, y);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              r && (e.lineTo(c2[c2.length - 1].x, y), e.lineTo(s.x, y), e.closePath(), e.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = a.axisY.lineCoordinates, n = [], l2 = this.plotArea;
            b.save();
            r && e.save();
            b.beginPath();
            b.rect(l2.x1, l2.y1, l2.width, l2.height);
            b.clip();
            r && (e.beginPath(), e.rect(l2.x1, l2.y1, l2.width, l2.height), e.clip());
            for (var g2 = 0; g2 < a.dataSeriesIndexes.length; g2++) {
              var k = a.dataSeriesIndexes[g2], m = this.data[k], p = m.dataPoints, n = m.id;
              this._eventManager.objectMap[n] = { objectType: "dataSeries", dataSeriesIndex: k };
              n = U(n);
              e.fillStyle = n;
              var n = [], q = 0, f, D, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y, s = null, C = [];
              if (0 < p.length) {
                var u = m._colorSet[q % m._colorSet.length], t2 = m.lineColor = m.options.lineColor || u, Ya = t2;
                b.fillStyle = u;
                b.strokeStyle = t2;
                b.lineWidth = m.lineThickness;
                var B = "solid";
                if (b.setLineDash) {
                  var z3 = I(m.nullDataLineDashType, m.lineThickness), B = m.lineDashType, A2 = I(B, m.lineThickness);
                  b.setLineDash(A2);
                }
                for (D = false; q < p.length; q++)
                  if (f = p[q].x.getTime ? p[q].x.getTime() : p[q].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !D)))
                    if ("number" !== typeof p[q].y)
                      0 < q && !D && (m.connectNullData ? b.setLineDash && (0 < C.length && (m.options.nullDataLineDashType || !p[q - 1].lineDashType)) && (C[C.length - 1].newLineDashArray = z3, B = m.nullDataLineDashType) : (d(), C = [])), D = true;
                    else {
                      f = a.axisX.convertValueToPixel(f);
                      D = a.axisY.convertValueToPixel(p[q].y);
                      var K = m.dataPointIds[q];
                      this._eventManager.objectMap[K] = { id: K, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: q, x1: f, y1: D };
                      C[C.length] = { x: f, y: D };
                      q < p.length - 1 && (Ya !== (p[q].lineColor || t2) || B !== (p[q].lineDashType || m.lineDashType)) && (Ya = p[q].lineColor || t2, C[C.length - 1].newStrokeStyle = Ya, b.setLineDash && (p[q].lineDashType ? (B = p[q].lineDashType, C[C.length - 1].newLineDashArray = I(B, m.lineThickness)) : (B = m.lineDashType, C[C.length - 1].newLineDashArray = A2)));
                      if (0 !== p[q].markerSize && (0 < p[q].markerSize || 0 < m.markerSize)) {
                        var L = m.getMarkerProperties(q, f, D, b);
                        n.push(L);
                        K = U(K);
                        r && n.push({ x: f, y: D, ctx: e, type: L.type, size: L.size, color: K, borderColor: K, borderThickness: L.borderThickness });
                      }
                      (p[q].indexLabel || m.indexLabel || p[q].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "splineArea",
                        dataPoint: p[q],
                        dataSeries: m,
                        point: { x: f, y: D },
                        direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1,
                        color: u
                      });
                      D = false;
                    }
                d();
                aa.drawMarkers(n);
              }
            }
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l2.x1, l2.y1, l2.width, l2.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderStepArea = function(a) {
          var d, c;
          function b() {
            v3 && (0 < f.lineThickness && h.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? t2 = u : 0 > a.axisY.viewportMaximum ? t2 = l2.y1 : 0 < a.axisY.viewportMinimum && (t2 = u), h.lineTo(y, t2), h.lineTo(v3.x, t2), h.closePath(), h.globalAlpha = f.fillOpacity, h.fill(), h.globalAlpha = 1, r && (n.lineTo(y, t2), n.lineTo(v3.x, t2), n.closePath(), n.fill()), h.beginPath(), h.moveTo(y, s), n.beginPath(), n.moveTo(y, s), v3 = { x: y, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, h = r ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var n = this._eventManager.ghostCtx, l2 = a.axisY.lineCoordinates, g2 = [], k = this.plotArea, m;
            h.save();
            r && n.save();
            h.beginPath();
            h.rect(k.x1, k.y1, k.width, k.height);
            h.clip();
            r && (n.beginPath(), n.rect(k.x1, k.y1, k.width, k.height), n.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p], f = this.data[q], D = f.dataPoints, g2 = f.id;
              this._eventManager.objectMap[g2] = { objectType: "dataSeries", dataSeriesIndex: q };
              g2 = U(g2);
              n.fillStyle = g2;
              g2 = [];
              d = true;
              var w = 0, y, s, C, u = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), t2, v3 = null;
              c = false;
              if (0 < D.length) {
                var B = f._colorSet[w % f._colorSet.length], z3 = f.lineColor = f.options.lineColor || B, A2 = z3;
                h.fillStyle = B;
                h.strokeStyle = z3;
                h.lineWidth = f.lineThickness;
                var K = "solid";
                if (h.setLineDash) {
                  var L = I(f.nullDataLineDashType, f.lineThickness), K = f.lineDashType, ca = I(K, f.lineThickness);
                  h.setLineDash(ca);
                }
                for (; w < D.length; w++)
                  if (C = D[w].x.getTime ? D[w].x.getTime() : D[w].x, !(C < a.axisX.dataInfo.viewPortMin || C > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !c))) {
                    var ba = s;
                    "number" !== typeof D[w].y ? (f.connectNullData || (c || d) || b(), c = true) : (y = a.axisX.convertValueToPixel(C), s = a.axisY.convertValueToPixel(D[w].y), d || c ? (!d && f.connectNullData ? (h.setLineDash && (f.options.nullDataLineDashType || K === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (d = y, c = s, y = m.x, s = m.y, b(), h.moveTo(m.x, m.y), y = d, s = c, v3 = m, K = f.nullDataLineDashType, h.setLineDash(L)), h.lineTo(y, ba), h.lineTo(y, s), r && (n.lineTo(y, ba), n.lineTo(y, s))) : (h.beginPath(), h.moveTo(y, s), r && (n.beginPath(), n.moveTo(y, s)), v3 = { x: y, y: s }), c = d = false) : (h.lineTo(y, ba), r && n.lineTo(y, ba), h.lineTo(y, s), r && n.lineTo(y, s), 0 == w % 250 && b()), m = { x: y, y: s }, w < D.length - 1 && (A2 !== (D[w].lineColor || z3) || K !== (D[w].lineDashType || f.lineDashType)) && (b(), A2 = D[w].lineColor || z3, h.strokeStyle = A2, h.setLineDash && (D[w].lineDashType ? (K = D[w].lineDashType, h.setLineDash(I(K, f.lineThickness))) : (K = f.lineDashType, h.setLineDash(ca)))), C = f.dataPointIds[w], this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: w, x1: y, y1: s }, 0 !== D[w].markerSize && (0 < D[w].markerSize || 0 < f.markerSize) && (ba = f.getMarkerProperties(w, y, s, h), g2.push(ba), C = U(C), r && g2.push({ x: y, y: s, ctx: n, type: ba.type, size: ba.size, color: C, borderColor: C, borderThickness: ba.borderThickness })), (D[w].indexLabel || f.indexLabel || D[w].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: D[w], dataSeries: f, point: { x: y, y: s }, direction: 0 > D[w].y === a.axisY.reversed ? 1 : -1, color: B }));
                  }
                b();
                aa.drawMarkers(g2);
              }
            }
            r && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), h.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), h.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            h.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderStackedArea = function(a) {
          function d() {
            if (!(1 > k.length)) {
              for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                r && y.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = B.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              r && (y.closePath(), y.fill(), y.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, n = [], l2 = this.plotArea, g2 = [], k = [], m = [], p = [], q = 0, f, D, w = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), y = this._eventManager.ghostCtx, s, C, u;
            r && y.beginPath();
            b.save();
            r && y.save();
            b.beginPath();
            b.rect(l2.x1, l2.y1, l2.width, l2.height);
            b.clip();
            r && (y.beginPath(), y.rect(l2.x1, l2.y1, l2.width, l2.height), y.clip());
            for (var e = [], t2 = 0; t2 < a.dataSeriesIndexes.length; t2++) {
              var v3 = a.dataSeriesIndexes[t2], B = this.data[v3], z3 = B.dataPoints;
              B.dataPointIndexes = [];
              for (q = 0; q < z3.length; q++)
                v3 = z3[q].x.getTime ? z3[q].x.getTime() : z3[q].x, B.dataPointIndexes[v3] = q, e[v3] || (m.push(v3), e[v3] = true);
              m.sort(Sa);
            }
            for (t2 = 0; t2 < a.dataSeriesIndexes.length; t2++) {
              v3 = a.dataSeriesIndexes[t2];
              B = this.data[v3];
              z3 = B.dataPoints;
              C = true;
              k = [];
              q = B.id;
              this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: v3 };
              q = U(q);
              y.fillStyle = q;
              if (0 < m.length) {
                var e = B._colorSet[0], A2 = B.lineColor = B.options.lineColor || e, K = A2;
                b.fillStyle = e;
                b.strokeStyle = A2;
                b.lineWidth = B.lineThickness;
                u = "solid";
                if (b.setLineDash) {
                  var L = I(B.nullDataLineDashType, B.lineThickness);
                  u = B.lineDashType;
                  var ca = I(u, B.lineThickness);
                  b.setLineDash(ca);
                }
                for (var ba = true, q = 0; q < m.length; q++) {
                  var h = m[q], ea = null, ea = 0 <= B.dataPointIndexes[h] ? z3[B.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ba)))
                    if ("number" !== typeof ea.y)
                      B.connectNullData || (ba || C) || d(), ba = true;
                    else {
                      f = a.axisX.convertValueToPixel(h);
                      var na = g2[h] ? g2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        p[h] = ea.y + (p[h] ? p[h] : 0);
                        if (0 >= p[h] && a.axisY.logarithmic)
                          continue;
                        D = a.axisY.convertValueToPixel(p[h]);
                      } else
                        D = a.axisY.convertValueToPixel(ea.y), D -= na;
                      k.push({ x: f, y: w - na });
                      g2[h] = w - D;
                      C || ba ? (!C && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || u === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (C = k.pop(), u = k[k.length - 1], d(), b.moveTo(s.x, s.y), k.push(u), k.push(C), u = B.nullDataLineDashType, b.setLineDash(L)), b.lineTo(f, D), r && y.lineTo(f, D)) : (b.beginPath(), b.moveTo(f, D), r && (y.beginPath(), y.moveTo(f, D))), ba = C = false) : (b.lineTo(f, D), r && y.lineTo(f, D), 0 == q % 250 && (d(), b.moveTo(f, D), r && y.moveTo(f, D), k.push({ x: f, y: w - na })));
                      s = { x: f, y: D };
                      q < z3.length - 1 && (K !== (z3[q].lineColor || A2) || u !== (z3[q].lineDashType || B.lineDashType)) && (d(), b.beginPath(), b.moveTo(f, D), k.push({ x: f, y: w - na }), K = z3[q].lineColor || A2, b.strokeStyle = K, b.setLineDash && (z3[q].lineDashType ? (u = z3[q].lineDashType, b.setLineDash(I(u, B.lineThickness))) : (u = B.lineDashType, b.setLineDash(ca))));
                      if (0 <= B.dataPointIndexes[h]) {
                        var la = B.dataPointIds[B.dataPointIndexes[h]];
                        this._eventManager.objectMap[la] = { id: la, objectType: "dataPoint", dataSeriesIndex: v3, dataPointIndex: B.dataPointIndexes[h], x1: f, y1: D };
                      }
                      0 <= B.dataPointIndexes[h] && 0 !== ea.markerSize && (0 < ea.markerSize || 0 < B.markerSize) && (na = B.getMarkerProperties(B.dataPointIndexes[h], f, D, b), n.push(na), h = U(la), r && n.push({ x: f, y: D, ctx: y, type: na.type, size: na.size, color: h, borderColor: h, borderThickness: na.borderThickness }));
                      (ea.indexLabel || B.indexLabel || ea.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ea, dataSeries: B, point: { x: f, y: D }, direction: 0 > ea.y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                d();
                b.moveTo(f, D);
                r && y.moveTo(f, D);
              }
              delete B.dataPointIndexes;
            }
            aa.drawMarkers(n);
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l2.x1, l2.y1, l2.width, l2.height), y.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderStackedArea100 = function(a) {
          function d() {
            for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              r && u.lineTo(
                a2.x,
                a2.y
              );
            }
            b.closePath();
            b.globalAlpha = B.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            r && (u.closePath(), u.fill(), u.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, n = this.plotArea, l2 = [], g2 = [], k = [], m = [], p = [], q = 0, f, D, w, y, s, C = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), u = this._eventManager.ghostCtx;
            b.save();
            r && u.save();
            b.beginPath();
            b.rect(n.x1, n.y1, n.width, n.height);
            b.clip();
            r && (u.beginPath(), u.rect(n.x1, n.y1, n.width, n.height), u.clip());
            for (var e = [], t2 = 0; t2 < a.dataSeriesIndexes.length; t2++) {
              var v3 = a.dataSeriesIndexes[t2], B = this.data[v3], z3 = B.dataPoints;
              B.dataPointIndexes = [];
              for (q = 0; q < z3.length; q++)
                v3 = z3[q].x.getTime ? z3[q].x.getTime() : z3[q].x, B.dataPointIndexes[v3] = q, e[v3] || (m.push(v3), e[v3] = true);
              m.sort(Sa);
            }
            for (t2 = 0; t2 < a.dataSeriesIndexes.length; t2++) {
              v3 = a.dataSeriesIndexes[t2];
              B = this.data[v3];
              z3 = B.dataPoints;
              y = true;
              e = B.id;
              this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: v3 };
              e = U(e);
              u.fillStyle = e;
              k = [];
              if (0 < m.length) {
                var e = B._colorSet[q % B._colorSet.length], A2 = B.lineColor = B.options.lineColor || e, K = A2;
                b.fillStyle = e;
                b.strokeStyle = A2;
                b.lineWidth = B.lineThickness;
                s = "solid";
                if (b.setLineDash) {
                  var L = I(B.nullDataLineDashType, B.lineThickness);
                  s = B.lineDashType;
                  var ca = I(s, B.lineThickness);
                  b.setLineDash(ca);
                }
                for (var ba = true, q = 0; q < m.length; q++) {
                  var h = m[q], ea = null, ea = 0 <= B.dataPointIndexes[h] ? z3[B.dataPointIndexes[h]] : { x: h, y: null };
                  if (!(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ba)))
                    if ("number" !== typeof ea.y)
                      B.connectNullData || (ba || y) || d(), ba = true;
                    else {
                      var na;
                      na = 0 !== a.dataPointYSums[h] ? 100 * (ea.y / a.dataPointYSums[h]) : 0;
                      f = a.axisX.convertValueToPixel(h);
                      var la = g2[h] ? g2[h] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        p[h] = na + (p[h] ? p[h] : 0);
                        if (0 >= p[h] && a.axisY.logarithmic)
                          continue;
                        D = a.axisY.convertValueToPixel(p[h]);
                      } else
                        D = a.axisY.convertValueToPixel(na), D -= la;
                      k.push({ x: f, y: C - la });
                      g2[h] = C - D;
                      y || ba ? (!y && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || s === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (y = k.pop(), s = k[k.length - 1], d(), b.moveTo(w.x, w.y), k.push(s), k.push(y), s = B.nullDataLineDashType, b.setLineDash(L)), b.lineTo(f, D), r && u.lineTo(f, D)) : (b.beginPath(), b.moveTo(f, D), r && (u.beginPath(), u.moveTo(f, D))), ba = y = false) : (b.lineTo(f, D), r && u.lineTo(f, D), 0 == q % 250 && (d(), b.moveTo(f, D), r && u.moveTo(f, D), k.push({ x: f, y: C - la })));
                      w = { x: f, y: D };
                      q < z3.length - 1 && (K !== (z3[q].lineColor || A2) || s !== (z3[q].lineDashType || B.lineDashType)) && (d(), b.beginPath(), b.moveTo(f, D), k.push({ x: f, y: C - la }), K = z3[q].lineColor || A2, b.strokeStyle = K, b.setLineDash && (z3[q].lineDashType ? (s = z3[q].lineDashType, b.setLineDash(I(s, B.lineThickness))) : (s = B.lineDashType, b.setLineDash(ca))));
                      if (0 <= B.dataPointIndexes[h]) {
                        var F = B.dataPointIds[B.dataPointIndexes[h]];
                        this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: v3, dataPointIndex: B.dataPointIndexes[h], x1: f, y1: D };
                      }
                      0 <= B.dataPointIndexes[h] && 0 !== ea.markerSize && (0 < ea.markerSize || 0 < B.markerSize) && (la = B.getMarkerProperties(B.dataPointIndexes[h], f, D, b), l2.push(la), h = U(F), r && l2.push({ x: f, y: D, ctx: u, type: la.type, size: la.size, color: h, borderColor: h, borderThickness: la.borderThickness }));
                      (ea.indexLabel || B.indexLabel || ea.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: ea, dataSeries: B, point: { x: f, y: D }, direction: 0 > ea.y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                d();
                b.moveTo(f, D);
                r && u.moveTo(f, D);
              }
              delete B.dataPointIndexes;
            }
            aa.drawMarkers(l2);
            r && (c.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(n.x1, n.y1, n.width, n.height), u.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: Q.xClipAnimation,
              easingFunction: Q.easing.linear,
              animationBase: 0
            };
          }
        };
        t.prototype.renderBubble = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, n;
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l2 = -Infinity, g2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
              for (var m = a.dataSeriesIndexes[k], p = this.data[m], q = p.dataPoints, f = 0, e = 0; e < q.length; e++)
                h = q[e].getTime ? h = q[e].x.getTime() : h = q[e].x, h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (f = q[e].z, f > l2 && (l2 = f), f < g2 && (g2 = f));
            for (var D = 25 * Math.PI, w = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, D), k = 0; k < a.dataSeriesIndexes.length; k++)
              if (m = a.dataSeriesIndexes[k], p = this.data[m], q = p.dataPoints, 0 < q.length) {
                for (c.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                  if (h = q[e].getTime ? h = q[e].x.getTime() : h = q[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    n = a.axisY.convertValueToPixel(q[e].y);
                    var f = q[e].z, y = 2 * Math.max(Math.sqrt((l2 === g2 ? w / 2 : D + (w - D) / (l2 - g2) * (f - g2)) / Math.PI) << 0, 1), f = p.getMarkerProperties(e, c);
                    f.size = y;
                    c.globalAlpha = p.fillOpacity;
                    aa.drawMarker(h, n, c, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    var s = p.dataPointIds[e];
                    this._eventManager.objectMap[s] = {
                      id: s,
                      objectType: "dataPoint",
                      dataSeriesIndex: m,
                      dataPointIndex: e,
                      x1: h,
                      y1: n,
                      size: y
                    };
                    y = U(s);
                    r && aa.drawMarker(h, n, this._eventManager.ghostCtx, f.type, f.size, y, y, f.borderThickness);
                    (q[e].indexLabel || p.indexLabel || q[e].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({ chartType: "bubble", dataPoint: q[e], dataSeries: p, point: { x: h, y: n }, direction: 1, bounds: { x1: h - f.size / 2, y1: n - f.size / 2, x2: h + f.size / 2, y2: n + f.size / 2 }, color: null });
                  }
              }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        t.prototype.renderScatter = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, h, n;
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var l2 = 0; l2 < a.dataSeriesIndexes.length; l2++) {
              var g2 = a.dataSeriesIndexes[l2], k = this.data[g2], m = k.dataPoints;
              if (0 < m.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var p = 0, q = 0, e = 0; e < m.length; e++)
                  if (h = m[e].getTime ? h = m[e].x.getTime() : h = m[e].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y) {
                    h = a.axisX.convertValueToPixel(h);
                    n = a.axisY.convertValueToPixel(m[e].y);
                    var f = k.getMarkerProperties(e, h, n, c);
                    c.globalAlpha = k.fillOpacity;
                    aa.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    Math.sqrt((p - h) * (p - h) + (q - n) * (q - n)) < Math.min(f.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = k.dataPointIds[e], this._eventManager.objectMap[p] = { id: p, objectType: "dataPoint", dataSeriesIndex: g2, dataPointIndex: e, x1: h, y1: n }, p = U(p), r && aa.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, p, p, f.borderThickness), (m[e].indexLabel || k.indexLabel || m[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "scatter",
                      dataPoint: m[e],
                      dataSeries: k,
                      point: { x: h, y: n },
                      direction: 1,
                      bounds: { x1: h - f.size / 2, y1: n - f.size / 2, x2: h + f.size / 2, y2: n + f.size / 2 },
                      color: null
                    }), p = h, q = n);
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        t.prototype.renderCandlestick = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = null, n = this.plotArea, g2 = 0, E, k, m, p, q, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, D = a.axisX.dataInfo.minDiff;
            isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
            D = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * n.width * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > h && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && h < e) && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            D < e && (D = e);
            D > h && (D = h);
            c.save();
            r && b.save();
            c.beginPath();
            c.rect(n.x1, n.y1, n.width, n.height);
            c.clip();
            r && (b.beginPath(), b.rect(n.x1, n.y1, n.width, n.height), b.clip());
            for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
              var y = a.dataSeriesIndexes[w], s = this.data[y], C = s.dataPoints;
              if (0 < C.length) {
                for (var u = 5 < D && s.bevelEnabled ? true : false, g2 = 0; g2 < C.length; g2++)
                  if (C[g2].getTime ? f = C[g2].x.getTime() : f = C[g2].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !l(C[g2].y) && C[g2].y.length && "number" === typeof C[g2].y[0] && "number" === typeof C[g2].y[1] && "number" === typeof C[g2].y[2] && "number" === typeof C[g2].y[3]) {
                    E = a.axisX.convertValueToPixel(f);
                    k = a.axisY.convertValueToPixel(C[g2].y[0]);
                    m = a.axisY.convertValueToPixel(C[g2].y[1]);
                    p = a.axisY.convertValueToPixel(C[g2].y[2]);
                    q = a.axisY.convertValueToPixel(C[g2].y[3]);
                    var t2 = E - D / 2 << 0, v3 = t2 + D << 0, h = s.options.fallingColor ? s.fallingColor : s._colorSet[0], e = C[g2].color ? C[g2].color : s._colorSet[0], B = Math.round(Math.max(1, 0.15 * D)), z3 = 0 === B % 2 ? 0 : 0.5, A2 = s.dataPointIds[g2];
                    this._eventManager.objectMap[A2] = { id: A2, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: g2, x1: t2, y1: k, x2: v3, y2: m, x3: E, y3: p, x4: E, y4: q, borderThickness: B, color: e };
                    c.strokeStyle = e;
                    c.beginPath();
                    c.lineWidth = B;
                    b.lineWidth = Math.max(B, 4);
                    "candlestick" === s.type ? (c.moveTo(E - z3, m), c.lineTo(E - z3, Math.min(k, q)), c.stroke(), c.moveTo(E - z3, Math.max(k, q)), c.lineTo(E - z3, p), c.stroke(), da(c, t2, Math.min(k, q), v3, Math.max(k, q), C[g2].y[0] <= C[g2].y[3] ? s.risingColor : h, B, e, u, u, false, false, s.fillOpacity), r && (e = U(A2), b.strokeStyle = e, b.moveTo(E - z3, m), b.lineTo(E - z3, Math.min(
                      k,
                      q
                    )), b.stroke(), b.moveTo(E - z3, Math.max(k, q)), b.lineTo(E - z3, p), b.stroke(), da(b, t2, Math.min(k, q), v3, Math.max(k, q), e, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(E - z3, m), c.lineTo(E - z3, p), c.stroke(), c.beginPath(), c.moveTo(E, k), c.lineTo(t2, k), c.stroke(), c.beginPath(), c.moveTo(E, q), c.lineTo(v3, q), c.stroke(), r && (e = U(A2), b.strokeStyle = e, b.moveTo(E - z3, m), b.lineTo(E - z3, p), b.stroke(), b.beginPath(), b.moveTo(E, k), b.lineTo(t2, k), b.stroke(), b.beginPath(), b.moveTo(E, q), b.lineTo(v3, q), b.stroke()));
                    (C[g2].indexLabel || s.indexLabel || C[g2].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: s.type, dataPoint: C[g2], dataSeries: s, point: { x: t2 + (v3 - t2) / 2, y: a.axisY.reversed ? p : m }, direction: 1, bounds: { x1: t2, y1: Math.min(m, p), x2: v3, y2: Math.max(m, p) }, color: e });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(n.x1, n.y1, n.width, n.height), b.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        t.prototype.renderBoxAndWhisker = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = this.plotArea, n = 0, g2, E, k, m, p, q, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, D = a.axisX.dataInfo.minDiff;
            isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
            D = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * h.width * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > n && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < e) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            D < e && (D = e);
            D > n && (D = n);
            c.save();
            r && b.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            r && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
            for (var w = false, w = !!a.axisY.reversed, y = 0; y < a.dataSeriesIndexes.length; y++) {
              var s = a.dataSeriesIndexes[y], t2 = this.data[s], u = t2.dataPoints;
              if (0 < u.length) {
                for (var v3 = 5 < D && t2.bevelEnabled ? true : false, n = 0; n < u.length; n++)
                  if (u[n].getTime ? f = u[n].x.getTime() : f = u[n].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !l(u[n].y) && u[n].y.length && "number" === typeof u[n].y[0] && "number" === typeof u[n].y[1] && "number" === typeof u[n].y[2] && "number" === typeof u[n].y[3] && "number" === typeof u[n].y[4] && 5 === u[n].y.length) {
                    g2 = a.axisX.convertValueToPixel(f);
                    E = a.axisY.convertValueToPixel(u[n].y[0]);
                    k = a.axisY.convertValueToPixel(u[n].y[1]);
                    m = a.axisY.convertValueToPixel(u[n].y[2]);
                    p = a.axisY.convertValueToPixel(u[n].y[3]);
                    q = a.axisY.convertValueToPixel(u[n].y[4]);
                    var z3 = g2 - D / 2 << 0, B = g2 + D / 2 << 0, e = u[n].color ? u[n].color : t2._colorSet[0], A2 = Math.round(Math.max(1, 0.15 * D)), G2 = 0 === A2 % 2 ? 0 : 0.5, K = u[n].whiskerColor ? u[n].whiskerColor : u[n].color ? t2.whiskerColor ? t2.whiskerColor : u[n].color : t2.whiskerColor ? t2.whiskerColor : e, L = "number" === typeof u[n].whiskerThickness ? u[n].whiskerThickness : "number" === typeof t2.options.whiskerThickness ? t2.whiskerThickness : A2, ca = u[n].whiskerDashType ? u[n].whiskerDashType : t2.whiskerDashType, ba = l(u[n].whiskerLength) ? l(t2.options.whiskerLength) ? D : t2.whiskerLength : u[n].whiskerLength, ba = "number" === typeof ba ? 0 >= ba ? 0 : ba >= D ? D : ba : "string" === typeof ba ? parseInt(ba) * D / 100 > D ? D : parseInt(ba) * D / 100 : D, ea = 1 === Math.round(L) % 2 ? 0.5 : 0, na = u[n].stemColor ? u[n].stemColor : u[n].color ? t2.stemColor ? t2.stemColor : u[n].color : t2.stemColor ? t2.stemColor : e, la = "number" === typeof u[n].stemThickness ? u[n].stemThickness : "number" === typeof t2.options.stemThickness ? t2.stemThickness : A2, F = 1 === Math.round(la) % 2 ? 0.5 : 0, R2 = u[n].stemDashType ? u[n].stemDashType : t2.stemDashType, P3 = u[n].lineColor ? u[n].lineColor : u[n].color ? t2.lineColor ? t2.lineColor : u[n].color : t2.lineColor ? t2.lineColor : e, J2 = "number" === typeof u[n].lineThickness ? u[n].lineThickness : "number" === typeof t2.options.lineThickness ? t2.lineThickness : A2, T2 = u[n].lineDashType ? u[n].lineDashType : t2.lineDashType, O = 1 === Math.round(J2) % 2 ? 0.5 : 0, N2 = t2.upperBoxColor, M = t2.lowerBoxColor, ra = l(t2.options.fillOpacity) ? 1 : t2.fillOpacity, S = t2.dataPointIds[n];
                    this._eventManager.objectMap[S] = {
                      id: S,
                      objectType: "dataPoint",
                      dataSeriesIndex: s,
                      dataPointIndex: n,
                      x1: z3,
                      y1: E,
                      x2: B,
                      y2: k,
                      x3: g2,
                      y3: m,
                      x4: g2,
                      y4: p,
                      y5: q,
                      borderThickness: A2,
                      color: e,
                      stemThickness: la,
                      stemColor: na,
                      whiskerThickness: L,
                      whiskerLength: ba,
                      whiskerColor: K,
                      lineThickness: J2,
                      lineColor: P3
                    };
                    c.save();
                    0 < la && (c.beginPath(), c.strokeStyle = na, c.lineWidth = la, c.setLineDash && c.setLineDash(I(R2, la)), c.moveTo(g2 - F, k), c.lineTo(g2 - F, E), c.stroke(), c.moveTo(g2 - F, p), c.lineTo(g2 - F, m), c.stroke());
                    c.restore();
                    b.lineWidth = Math.max(A2, 4);
                    c.beginPath();
                    da(c, z3, Math.min(q, k), B, Math.max(k, q), M, 0, e, w ? v3 : false, w ? false : v3, false, false, ra);
                    c.beginPath();
                    da(c, z3, Math.min(m, q), B, Math.max(q, m), N2, 0, e, w ? false : v3, w ? v3 : false, false, false, ra);
                    c.beginPath();
                    c.lineWidth = A2;
                    c.strokeStyle = e;
                    c.rect(z3 - G2, Math.min(k, m) - G2, B - z3 + 2 * G2, Math.max(k, m) - Math.min(k, m) + 2 * G2);
                    c.stroke();
                    c.save();
                    0 < J2 && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(I(T2, J2)), c.strokeStyle = P3, c.lineWidth = J2, c.moveTo(z3, q - O), c.lineTo(B, q - O), c.stroke());
                    c.restore();
                    c.save();
                    0 < L && (c.beginPath(), c.setLineDash && c.setLineDash(I(ca, L)), c.strokeStyle = K, c.lineWidth = L, c.moveTo(g2 - ba / 2 << 0, p - ea), c.lineTo(g2 + ba / 2 << 0, p - ea), c.stroke(), c.moveTo(g2 - ba / 2 << 0, E + ea), c.lineTo(g2 + ba / 2 << 0, E + ea), c.stroke());
                    c.restore();
                    r && (e = U(S), b.strokeStyle = e, b.lineWidth = la, 0 < la && (b.moveTo(g2 - G2 - F, k), b.lineTo(g2 - G2 - F, Math.max(E, p)), b.stroke(), b.moveTo(g2 - G2 - F, Math.min(E, p)), b.lineTo(g2 - G2 - F, m), b.stroke()), da(b, z3, Math.max(k, m), B, Math.min(k, m), e, 0, null, false, false, false, false), 0 < L && (b.beginPath(), b.lineWidth = L, b.moveTo(g2 + ba / 2, p - ea), b.lineTo(g2 - ba / 2, p - ea), b.stroke(), b.moveTo(g2 + ba / 2, E + ea), b.lineTo(g2 - ba / 2, E + ea), b.stroke()));
                    (u[n].indexLabel || t2.indexLabel || u[n].indexLabelFormatter || t2.indexLabelFormatter) && this._indexLabels.push({ chartType: t2.type, dataPoint: u[n], dataSeries: t2, point: { x: z3 + (B - z3) / 2, y: a.axisY.reversed ? E : p }, direction: 1, bounds: { x1: z3, y1: Math.min(E, p), x2: B, y2: Math.max(E, p) }, color: e });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(h.x1, h.y1, h.width, h.height), b.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        t.prototype.renderRangeColumn = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, n, g2, E, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            k < h && (k = h);
            k > n && (k = n);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
              var p = a.dataSeriesIndexes[m], q = this.data[p], f = q.dataPoints;
              if (0 < f.length) {
                for (var t2 = 5 < k && q.bevelEnabled ? true : false, h = 0; h < f.length; h++)
                  if (f[h].getTime ? E = f[h].x.getTime() : E = f[h].x, !(E < a.axisX.dataInfo.viewPortMin || E > a.axisX.dataInfo.viewPortMax) && !l(f[h].y) && f[h].y.length && "number" === typeof f[h].y[0] && "number" === typeof f[h].y[1]) {
                    b = a.axisX.convertValueToPixel(E);
                    n = a.axisY.convertValueToPixel(f[h].y[0]);
                    g2 = a.axisY.convertValueToPixel(f[h].y[1]);
                    var w = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + m) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + m) * k << 0, y = a.axisX.reversed ? w - k << 0 : w + k << 0, b = f[h].color ? f[h].color : q._colorSet[h % q._colorSet.length];
                    if (n > g2) {
                      var s = n;
                      n = g2;
                      g2 = s;
                    }
                    s = q.dataPointIds[h];
                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: h, x1: w, y1: n, x2: y, y2: g2 };
                    da(c, a.axisX.reversed ? y : w, n, a.axisX.reversed ? w : y, g2, b, 0, b, t2, t2, false, false, q.fillOpacity);
                    b = U(s);
                    r && da(this._eventManager.ghostCtx, a.axisX.reversed ? y : w, n, a.axisX.reversed ? w : y, g2, b, 0, null, false, false, false, false);
                    if (f[h].indexLabel || q.indexLabel || f[h].indexLabelFormatter || q.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: q, indexKeyword: 0, point: { x: w + (y - w) / 2, y: f[h].y[1] >= f[h].y[0] ? g2 : n }, direction: f[h].y[1] >= f[h].y[0] ? -1 : 1, bounds: { x1: w, y1: Math.min(n, g2), x2: y, y2: Math.max(n, g2) }, color: b }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[h], dataSeries: q, indexKeyword: 1, point: { x: w + (y - w) / 2, y: f[h].y[1] >= f[h].y[0] ? n : g2 }, direction: f[h].y[1] >= f[h].y[0] ? 1 : -1, bounds: { x1: w, y1: Math.min(n, g2), x2: y, y2: Math.max(n, g2) }, color: b });
                  }
              }
            }
            r && (d.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: d,
              dest: this.plotArea.ctx,
              animationCallback: Q.fadeInAnimation,
              easingFunction: Q.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        t.prototype.renderError = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, h = false, n = this.plotArea, g2 = 0, E, k, m, p, q, f, t2, w = a.axisX.dataInfo.minDiff;
            isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(n.x1, n.y1, n.width, n.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.clip());
            for (var y = 0, s = 0; s < this.data.length; s++)
              !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && y || y++;
            for (var C = 0; C < a.dataSeriesIndexes.length; C++) {
              var u = a.dataSeriesIndexes[C], v3 = this.data[u], A2 = v3.dataPoints, B = l(v3._linkedSeries) ? false : v3._linkedSeries.type.match(/(bar|column)/ig) && v3._linkedSeries.visible ? true : false, I2 = 0;
              if (B)
                for (e = v3._linkedSeries.id, s = 0; s < e; s++)
                  !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && I2 || (this.data[s].type.match(/(range)/ig) && (h = true), I2++);
              e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              g2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? y : 1))) << 0 : 0.3 * this.width;
              h && (g2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? y : 1))) << 0 : 0.03 * this.width);
              s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? n.height : n.width) * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) / (B ? y : 1)) << 0;
              this.dataPointMaxWidth && e > g2 && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g2));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && g2 < e) && (g2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
              s < e && (s = e);
              s > g2 && (s = g2);
              if (0 < A2.length)
                for (var G2 = v3._colorSet, g2 = 0; g2 < A2.length; g2++) {
                  var e = v3.lineColor = v3.options.color ? v3.options.color : G2[0], K = {
                    color: A2[g2].whiskerColor ? A2[g2].whiskerColor : A2[g2].color ? v3.whiskerColor ? v3.whiskerColor : A2[g2].color : v3.whiskerColor ? v3.whiskerColor : e,
                    thickness: l(A2[g2].whiskerThickness) ? v3.whiskerThickness : A2[g2].whiskerThickness,
                    dashType: A2[g2].whiskerDashType ? A2[g2].whiskerDashType : v3.whiskerDashType,
                    length: l(A2[g2].whiskerLength) ? l(v3.options.whiskerLength) ? s : v3.options.whiskerLength : A2[g2].whiskerLength,
                    trimLength: l(A2[g2].whiskerLength) ? l(v3.options.whiskerLength) ? 50 : 0 : 0
                  };
                  K.length = "number" === typeof K.length ? 0 >= K.length ? 0 : K.length >= s ? s : K.length : "string" === typeof K.length ? parseInt(K.length) * s / 100 > s ? s : parseInt(K.length) * s / 100 > s : s;
                  K.thickness = "number" === typeof K.thickness ? 0 > K.thickness ? 0 : Math.round(K.thickness) : 2;
                  var L = { color: A2[g2].stemColor ? A2[g2].stemColor : A2[g2].color ? v3.stemColor ? v3.stemColor : A2[g2].color : v3.stemColor ? v3.stemColor : e, thickness: A2[g2].stemThickness ? A2[g2].stemThickness : v3.stemThickness, dashType: A2[g2].stemDashType ? A2[g2].stemDashType : v3.stemDashType };
                  L.thickness = "number" === typeof L.thickness ? 0 > L.thickness ? 0 : Math.round(L.thickness) : 2;
                  A2[g2].getTime ? t2 = A2[g2].x.getTime() : t2 = A2[g2].x;
                  if (!(t2 < a.axisX.dataInfo.viewPortMin || t2 > a.axisX.dataInfo.viewPortMax) && !l(A2[g2].y) && A2[g2].y.length && "number" === typeof A2[g2].y[0] && "number" === typeof A2[g2].y[1]) {
                    var ca = a.axisX.convertValueToPixel(t2);
                    b ? k = ca : E = ca;
                    ca = a.axisY.convertValueToPixel(A2[g2].y[0]);
                    b ? m = ca : q = ca;
                    ca = a.axisY.convertValueToPixel(A2[g2].y[1]);
                    b ? p = ca : f = ca;
                    b ? (q = a.axisX.reversed ? k + (B ? y : 1) * s / 2 - (B ? I2 - 1 : 0) * s << 0 : k - (B ? y : 1) * s / 2 + (B ? I2 - 1 : 0) * s << 0, f = a.axisX.reversed ? q - s << 0 : q + s << 0) : (m = a.axisX.reversed ? E + (B ? y : 1) * s / 2 - (B ? I2 - 1 : 0) * s << 0 : E - (B ? y : 1) * s / 2 + (B ? I2 - 1 : 0) * s << 0, p = a.axisX.reversed ? m - s << 0 : m + s << 0);
                    !b && q > f && (ca = q, q = f, f = ca);
                    b && m > p && (ca = m, m = p, p = ca);
                    ca = v3.dataPointIds[g2];
                    this._eventManager.objectMap[ca] = { id: ca, objectType: "dataPoint", dataSeriesIndex: u, dataPointIndex: g2, x1: Math.min(m, p), y1: Math.min(q, f), x2: Math.max(p, m), y2: Math.max(f, q), isXYSwapped: b, stemProperties: L, whiskerProperties: K };
                    z2(
                      c,
                      Math.min(m, p),
                      Math.min(q, f),
                      Math.max(p, m),
                      Math.max(f, q),
                      e,
                      K,
                      L,
                      b
                    );
                    r && z2(this._eventManager.ghostCtx, m, q, p, f, e, K, L, b);
                    if (A2[g2].indexLabel || v3.indexLabel || A2[g2].indexLabelFormatter || v3.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "error", dataPoint: A2[g2], dataSeries: v3, indexKeyword: 0, point: { x: b ? A2[g2].y[1] >= A2[g2].y[0] ? m : p : m + (p - m) / 2, y: b ? q + (f - q) / 2 : A2[g2].y[1] >= A2[g2].y[0] ? f : q }, direction: A2[g2].y[1] >= A2[g2].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(m, p) : m, y1: b ? q : Math.min(q, f), x2: b ? Math.max(m, p) : p, y2: b ? f : Math.max(q, f) }, color: e, axisSwapped: b }), this._indexLabels.push({ chartType: "error", dataPoint: A2[g2], dataSeries: v3, indexKeyword: 1, point: { x: b ? A2[g2].y[1] >= A2[g2].y[0] ? p : m : m + (p - m) / 2, y: b ? q + (f - q) / 2 : A2[g2].y[1] >= A2[g2].y[0] ? q : f }, direction: A2[g2].y[1] >= A2[g2].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(m, p) : m, y1: b ? q : Math.min(q, f), x2: b ? Math.max(m, p) : p, y2: b ? f : Math.max(q, f) }, color: e, axisSwapped: b });
                  }
                }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        t.prototype.renderRangeBar = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, h = 0, n, g2, E, k, h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var m = a.axisX.dataInfo.minDiff;
            isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
            m = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
            m < h && (m = h);
            m > n && (m = n);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
              var q = a.dataSeriesIndexes[p], f = this.data[q], t2 = f.dataPoints;
              if (0 < t2.length) {
                var w = 5 < m && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (h = 0; h < t2.length; h++)
                  if (t2[h].getTime ? k = t2[h].x.getTime() : k = t2[h].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !l(t2[h].y) && t2[h].y.length && "number" === typeof t2[h].y[0] && "number" === typeof t2[h].y[1]) {
                    n = a.axisY.convertValueToPixel(t2[h].y[0]);
                    g2 = a.axisY.convertValueToPixel(t2[h].y[1]);
                    E = a.axisX.convertValueToPixel(k);
                    E = a.axisX.reversed ? E + a.plotType.totalDataSeries * m / 2 - (a.previousDataSeriesCount + p) * m << 0 : E - a.plotType.totalDataSeries * m / 2 + (a.previousDataSeriesCount + p) * m << 0;
                    var y = a.axisX.reversed ? E - m << 0 : E + m << 0;
                    n > g2 && (b = n, n = g2, g2 = b);
                    b = t2[h].color ? t2[h].color : f._colorSet[h % f._colorSet.length];
                    da(c, n, a.axisX.reversed ? y : E, g2, a.axisX.reversed ? E : y, b, 0, null, w, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[h];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: q,
                      dataPointIndex: h,
                      x1: n,
                      y1: E,
                      x2: g2,
                      y2: y
                    };
                    b = U(b);
                    r && da(this._eventManager.ghostCtx, n, a.axisX.reversed ? y : E, g2, a.axisX.reversed ? E : y, b, 0, null, false, false, false, false);
                    if (t2[h].indexLabel || f.indexLabel || t2[h].indexLabelFormatter || f.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeBar", dataPoint: t2[h], dataSeries: f, indexKeyword: 0, point: { x: t2[h].y[1] >= t2[h].y[0] ? n : g2, y: E + (y - E) / 2 }, direction: t2[h].y[1] >= t2[h].y[0] ? -1 : 1, bounds: { x1: Math.min(n, g2), y1: E, x2: Math.max(n, g2), y2: y }, color: b }), this._indexLabels.push({
                        chartType: "rangeBar",
                        dataPoint: t2[h],
                        dataSeries: f,
                        indexKeyword: 1,
                        point: { x: t2[h].y[1] >= t2[h].y[0] ? g2 : n, y: E + (y - E) / 2 },
                        direction: t2[h].y[1] >= t2[h].y[0] ? 1 : -1,
                        bounds: { x1: Math.min(n, g2), y1: E, x2: Math.max(n, g2), y2: y },
                        color: b
                      });
                  }
              }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        t.prototype.renderRangeArea = function(a) {
          function d() {
            if (v3) {
              for (var a2 = null, c2 = l2.length - 1; 0 <= c2; c2--)
                a2 = l2[c2], b.lineTo(a2.x, a2.y2), e.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = m.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              e.fill();
              if (0 < m.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < l2.length; c2++)
                  a2 = l2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(l2[0].x, l2[0].y1);
                for (c2 = 0; c2 < l2.length; c2++)
                  a2 = l2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(t2, w);
              e.beginPath();
              e.moveTo(t2, w);
              v3 = { x: t2, y: w };
              l2 = [];
              l2.push({ x: t2, y1: w, y2: y });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], n = this.plotArea;
            b.save();
            r && e.save();
            b.beginPath();
            b.rect(n.x1, n.y1, n.width, n.height);
            b.clip();
            r && (e.beginPath(), e.rect(n.x1, n.y1, n.width, n.height), e.clip());
            for (var g2 = 0; g2 < a.dataSeriesIndexes.length; g2++) {
              var l2 = [], k = a.dataSeriesIndexes[g2], m = this.data[k], p = m.dataPoints, h = m.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: k };
              h = U(h);
              e.fillStyle = h;
              var h = [], q = true, f = 0, t2, w, y, s, v3 = null;
              if (0 < p.length) {
                var u = m._colorSet[f % m._colorSet.length], A2 = m.lineColor = m.options.lineColor || u, z3 = A2;
                b.fillStyle = u;
                b.strokeStyle = A2;
                b.lineWidth = m.lineThickness;
                var B = "solid";
                if (b.setLineDash) {
                  var G2 = I(
                    m.nullDataLineDashType,
                    m.lineThickness
                  ), B = m.lineDashType, J2 = I(B, m.lineThickness);
                  b.setLineDash(J2);
                }
                for (var K = true; f < p.length; f++)
                  if (s = p[f].x.getTime ? p[f].x.getTime() : p[f].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !K)))
                    if (null !== p[f].y && p[f].y.length && "number" === typeof p[f].y[0] && "number" === typeof p[f].y[1]) {
                      t2 = a.axisX.convertValueToPixel(s);
                      w = a.axisY.convertValueToPixel(p[f].y[0]);
                      y = a.axisY.convertValueToPixel(p[f].y[1]);
                      q || K ? (m.connectNullData && !q ? (b.setLineDash && (m.options.nullDataLineDashType || B === m.lineDashType && m.lineDashType !== m.nullDataLineDashType) && (l2[l2.length - 1].newLineDashArray = J2, B = m.nullDataLineDashType, b.setLineDash(G2)), b.lineTo(t2, w), r && e.lineTo(t2, w), l2.push({ x: t2, y1: w, y2: y })) : (b.beginPath(), b.moveTo(t2, w), v3 = { x: t2, y: w }, l2 = [], l2.push({ x: t2, y1: w, y2: y }), r && (e.beginPath(), e.moveTo(t2, w))), K = q = false) : (b.lineTo(t2, w), l2.push({ x: t2, y1: w, y2: y }), r && e.lineTo(t2, w), 0 == f % 250 && d());
                      s = m.dataPointIds[f];
                      this._eventManager.objectMap[s] = {
                        id: s,
                        objectType: "dataPoint",
                        dataSeriesIndex: k,
                        dataPointIndex: f,
                        x1: t2,
                        y1: w,
                        y2: y
                      };
                      f < p.length - 1 && (z3 !== (p[f].lineColor || A2) || B !== (p[f].lineDashType || m.lineDashType)) && (d(), z3 = p[f].lineColor || A2, l2[l2.length - 1].newStrokeStyle = z3, b.strokeStyle = z3, b.setLineDash && (p[f].lineDashType ? (B = p[f].lineDashType, l2[l2.length - 1].newLineDashArray = I(B, m.lineThickness), b.setLineDash(l2[l2.length - 1].newLineDashArray)) : (B = m.lineDashType, l2[l2.length - 1].newLineDashArray = J2, b.setLineDash(J2))));
                      if (0 !== p[f].markerSize && (0 < p[f].markerSize || 0 < m.markerSize)) {
                        var L = m.getMarkerProperties(f, t2, y, b);
                        h.push(L);
                        var ca = U(s);
                        r && h.push({ x: t2, y, ctx: e, type: L.type, size: L.size, color: ca, borderColor: ca, borderThickness: L.borderThickness });
                        L = m.getMarkerProperties(f, t2, w, b);
                        h.push(L);
                        ca = U(s);
                        r && h.push({ x: t2, y: w, ctx: e, type: L.type, size: L.size, color: ca, borderColor: ca, borderThickness: L.borderThickness });
                      }
                      if (p[f].indexLabel || m.indexLabel || p[f].indexLabelFormatter || m.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[f], dataSeries: m, indexKeyword: 0, point: { x: t2, y: w }, direction: p[f].y[0] > p[f].y[1] === a.axisY.reversed ? -1 : 1, color: u }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[f], dataSeries: m, indexKeyword: 1, point: { x: t2, y }, direction: p[f].y[0] > p[f].y[1] === a.axisY.reversed ? 1 : -1, color: u });
                    } else
                      K || q || d(), K = true;
                d();
                aa.drawMarkers(h);
              }
            }
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderRangeSplineArea = function(a) {
          function d(a2, c2) {
            var f2 = v2(w, 2);
            if (0 < f2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var d2 = 0; d2 < f2.length - 3; d2 += 3) {
                  if (f2[d2].newStrokeStyle || f2[d2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[d2].x, f2[d2].y), f2[d2].newStrokeStyle && (b.strokeStyle = f2[d2].newStrokeStyle), f2[d2].newLineDashArray && b.setLineDash(f2[d2].newLineDashArray);
                  b.bezierCurveTo(f2[d2 + 1].x, f2[d2 + 1].y, f2[d2 + 2].x, f2[d2 + 2].y, f2[d2 + 3].x, f2[d2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(f2[0].x, f2[0].y);
              r && (e.beginPath(), e.moveTo(f2[0].x, f2[0].y));
              for (d2 = 0; d2 < f2.length - 3; d2 += 3)
                b.bezierCurveTo(f2[d2 + 1].x, f2[d2 + 1].y, f2[d2 + 2].x, f2[d2 + 2].y, f2[d2 + 3].x, f2[d2 + 3].y), r && e.bezierCurveTo(f2[d2 + 1].x, f2[d2 + 1].y, f2[d2 + 2].x, f2[d2 + 2].y, f2[d2 + 3].x, f2[d2 + 3].y);
              f2 = v2(y, 2);
              b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
              for (d2 = f2.length - 1; 2 < d2; d2 -= 3)
                b.bezierCurveTo(f2[d2 - 1].x, f2[d2 - 1].y, f2[d2 - 2].x, f2[d2 - 2].y, f2[d2 - 3].x, f2[d2 - 3].y), r && e.bezierCurveTo(f2[d2 - 1].x, f2[d2 - 1].y, f2[d2 - 2].x, f2[d2 - 2].y, f2[d2 - 3].x, f2[d2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              r && (e.closePath(), e.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(f2[0].x, f2[0].y);
                for (var h2 = d2 = 0; d2 < f2.length - 3; d2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[d2].x, f2[d2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(f2[d2 + 1].x, f2[d2 + 1].y, f2[d2 + 2].x, f2[d2 + 2].y, f2[d2 + 3].x, f2[d2 + 3].y);
                }
                f2 = v2(w, 2);
                b.moveTo(f2[0].x, f2[0].y);
                for (h2 = d2 = 0; d2 < f2.length - 3; d2 += 3, h2++) {
                  if (w[h2].newStrokeStyle || w[h2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(f2[d2].x, f2[d2].y), w[h2].newStrokeStyle && (b.strokeStyle = w[h2].newStrokeStyle), w[h2].newLineDashArray && b.setLineDash(w[h2].newLineDashArray);
                  b.bezierCurveTo(f2[d2 + 1].x, f2[d2 + 1].y, f2[d2 + 2].x, f2[d2 + 2].y, f2[d2 + 3].x, f2[d2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = r ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, h = [], n = this.plotArea;
            b.save();
            r && e.save();
            b.beginPath();
            b.rect(n.x1, n.y1, n.width, n.height);
            b.clip();
            r && (e.beginPath(), e.rect(n.x1, n.y1, n.width, n.height), e.clip());
            for (var g2 = 0; g2 < a.dataSeriesIndexes.length; g2++) {
              var l2 = a.dataSeriesIndexes[g2], k = this.data[l2], m = k.dataPoints, h = k.id;
              this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: l2 };
              h = U(h);
              e.fillStyle = h;
              var h = [], p = 0, q, f, t2, w = [], y = [];
              if (0 < m.length) {
                var s = k._colorSet[p % k._colorSet.length], C = k.lineColor = k.options.lineColor || s, u = C;
                b.fillStyle = s;
                b.lineWidth = k.lineThickness;
                var A2 = "solid", z3;
                if (b.setLineDash) {
                  var B = I(k.nullDataLineDashType, k.lineThickness), A2 = k.lineDashType;
                  z3 = I(A2, k.lineThickness);
                }
                for (f = false; p < m.length; p++)
                  if (q = m[p].x.getTime ? m[p].x.getTime() : m[p].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                    if (null !== m[p].y && m[p].y.length && "number" === typeof m[p].y[0] && "number" === typeof m[p].y[1]) {
                      q = a.axisX.convertValueToPixel(q);
                      f = a.axisY.convertValueToPixel(m[p].y[0]);
                      t2 = a.axisY.convertValueToPixel(m[p].y[1]);
                      var G2 = k.dataPointIds[p];
                      this._eventManager.objectMap[G2] = { id: G2, objectType: "dataPoint", dataSeriesIndex: l2, dataPointIndex: p, x1: q, y1: f, y2: t2 };
                      w[w.length] = { x: q, y: f };
                      y[y.length] = { x: q, y: t2 };
                      p < m.length - 1 && (u !== (m[p].lineColor || C) || A2 !== (m[p].lineDashType || k.lineDashType)) && (u = m[p].lineColor || C, w[w.length - 1].newStrokeStyle = u, b.setLineDash && (m[p].lineDashType ? (A2 = m[p].lineDashType, w[w.length - 1].newLineDashArray = I(A2, k.lineThickness)) : (A2 = k.lineDashType, w[w.length - 1].newLineDashArray = z3)));
                      if (0 !== m[p].markerSize && (0 < m[p].markerSize || 0 < k.markerSize)) {
                        var J2 = k.getMarkerProperties(p, q, f, b);
                        h.push(J2);
                        var K = U(G2);
                        r && h.push({ x: q, y: f, ctx: e, type: J2.type, size: J2.size, color: K, borderColor: K, borderThickness: J2.borderThickness });
                        J2 = k.getMarkerProperties(p, q, t2, b);
                        h.push(J2);
                        K = U(G2);
                        r && h.push({ x: q, y: t2, ctx: e, type: J2.type, size: J2.size, color: K, borderColor: K, borderThickness: J2.borderThickness });
                      }
                      if (m[p].indexLabel || k.indexLabel || m[p].indexLabelFormatter || k.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[p], dataSeries: k, indexKeyword: 0, point: { x: q, y: f }, direction: m[p].y[0] <= m[p].y[1] ? -1 : 1, color: s }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[p], dataSeries: k, indexKeyword: 1, point: {
                          x: q,
                          y: t2
                        }, direction: m[p].y[0] <= m[p].y[1] ? 1 : -1, color: s });
                      f = false;
                    } else
                      0 < p && !f && (k.connectNullData ? b.setLineDash && (0 < w.length && (k.options.nullDataLineDashType || !m[p - 1].lineDashType)) && (w[w.length - 1].newLineDashArray = B, A2 = k.nullDataLineDashType) : (d(z3, C), w = [], y = [])), f = true;
                d(z3, C);
                aa.drawMarkers(h);
              }
            }
            r && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(n.x1, n.y1, n.width, n.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
          }
        };
        t.prototype.renderWaterfall = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = r ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, e = null, h = this.plotArea, n = 0, g2, l2, k, m, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), n = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            l2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var q = a.axisX.dataInfo.minDiff;
            isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
            q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (h.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && n > l2 && (n = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && l2 < n) && (l2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, n));
            q < n && (q = n);
            q > l2 && (q = l2);
            c.save();
            r && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(h.x1, h.y1, h.width, h.height);
            c.clip();
            r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
            for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
              var t2 = a.dataSeriesIndexes[f], w = this.data[t2], y = w.dataPoints, e = w._colorSet[0];
              w.risingColor = w.options.risingColor ? w.options.risingColor : e;
              w.fallingColor = w.options.fallingColor ? w.options.fallingColor : "#e40a0a";
              var s = "number" === typeof w.options.lineThickness ? Math.round(w.lineThickness) : 1, v3 = 1 === Math.round(s) % 2 ? -0.5 : 0;
              if (0 < y.length)
                for (var u = 5 < q && w.bevelEnabled ? true : false, A2 = false, z3 = null, B = null, n = 0; n < y.length; n++)
                  if (y[n].getTime ? m = y[n].x.getTime() : m = y[n].x, "number" !== typeof y[n].y) {
                    if (0 < n && !A2 && w.connectNullData)
                      var G2 = w.options.nullDataLineDashType || !y[n - 1].lineDashType ? w.nullDataLineDashType : y[n - 1].lineDashType;
                    A2 = true;
                  } else {
                    g2 = a.axisX.convertValueToPixel(m);
                    l2 = 0 === w.dataPointEOs[n].cumulativeSum ? p : a.axisY.convertValueToPixel(w.dataPointEOs[n].cumulativeSum);
                    k = 0 === w.dataPointEOs[n].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(w.dataPointEOs[n].cumulativeSumYStartValue);
                    g2 = a.axisX.reversed ? g2 + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + f) * q << 0 : g2 - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + f) * q << 0;
                    var J2 = a.axisX.reversed ? g2 - q << 0 : g2 + q << 0;
                    l2 > k && (e = l2, l2 = k, k = e);
                    a.axisY.reversed && (e = l2, l2 = k, k = e);
                    e = w.dataPointIds[n];
                    this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: t2, dataPointIndex: n, x1: g2, y1: l2, x2: J2, y2: k };
                    var K = y[n].color ? y[n].color : 0 < y[n].y ? w.risingColor : w.fallingColor;
                    da(c, a.axisX.reversed ? J2 : g2, a.axisY.reversed ? k : l2, a.axisX.reversed ? g2 : J2, a.axisY.reversed ? l2 : k, K, 0, K, u, u, false, false, w.fillOpacity);
                    e = U(e);
                    r && da(this._eventManager.ghostCtx, a.axisX.reversed ? J2 : g2, l2, a.axisX.reversed ? g2 : J2, k, e, 0, null, false, false, false, false);
                    var L, K = g2;
                    L = "undefined" !== typeof y[n].isIntermediateSum && true === y[n].isIntermediateSum || "undefined" !== typeof y[n].isCumulativeSum && true === y[n].isCumulativeSum ? 0 < y[n].y ? l2 : k : 0 < y[n].y ? k : l2;
                    0 < n && z3 && (!A2 || w.connectNullData) && (A2 && c.setLineDash && c.setLineDash(I(G2, s)), c.beginPath(), c.moveTo(z3, B - v3), c.lineTo(K, L - v3), 0 < s && c.stroke(), r && (b.beginPath(), b.moveTo(
                      z3,
                      B - v3
                    ), b.lineTo(K, L - v3), 0 < s && b.stroke()));
                    A2 = false;
                    z3 = J2;
                    B = 0 < y[n].y ? l2 : k;
                    K = y[n].lineDashType ? y[n].lineDashType : w.options.lineDashType ? w.options.lineDashType : "shortDash";
                    c.strokeStyle = y[n].lineColor ? y[n].lineColor : w.options.lineColor ? w.options.lineColor : "#9e9e9e";
                    c.lineWidth = s;
                    c.setLineDash && (K = I(K, s), c.setLineDash(K));
                    (y[n].indexLabel || w.indexLabel || y[n].indexLabelFormatter || w.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "waterfall",
                      dataPoint: y[n],
                      dataSeries: w,
                      point: { x: g2 + (J2 - g2) / 2, y: 0 <= y[n].y ? l2 : k },
                      direction: 0 > y[n].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: g2, y1: Math.min(l2, k), x2: J2, y2: Math.max(l2, k) },
                      color: e
                    });
                  }
            }
            r && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(
              h.x1,
              h.y1,
              h.width,
              h.height
            ), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
          }
        };
        var X2 = function(a, d, c, b, e, h, n, g2, l2) {
          if (!(0 > c)) {
            "undefined" === typeof g2 && (g2 = 1);
            if (!r) {
              var k = Number((n % (2 * Math.PI)).toFixed(8));
              Number((h % (2 * Math.PI)).toFixed(8)) === k && (n -= 1e-4);
            }
            a.save();
            a.globalAlpha = g2;
            "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, h, n, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, h, n, false), 0 <= l2 && a.arc(d.x, d.y, l2 * c, n, h, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        t.prototype.renderPie = function(a) {
          function d() {
            if (k && m) {
              var a2 = 0, b2 = 0, c2 = 0, e2 = 0;
              l(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * q.width);
              for (var d2 = 0; d2 < m.length; d2++) {
                var h2 = m[d2], n2 = k.dataPointIds[d2];
                f[d2].id = n2;
                f[d2].objectType = "dataPoint";
                f[d2].dataPointIndex = d2;
                f[d2].dataSeriesIndex = 0;
                var g3 = f[d2], p2 = { percent: null, total: null }, x = null, p2 = t2.getPercentAndTotal(k, h2);
                if (k.indexLabelFormatter || h2.indexLabelFormatter)
                  x = { chart: t2.options, dataSeries: k, dataPoint: h2, total: p2.total, percent: p2.percent };
                p2 = h2.indexLabelFormatter ? h2.indexLabelFormatter(x) : h2.indexLabel ? t2.replaceKeywordsWithValue(h2.indexLabel, h2, k, d2) : k.indexLabelFormatter ? k.indexLabelFormatter(x) : k.indexLabel ? t2.replaceKeywordsWithValue(k.indexLabel, h2, k, d2) : h2.label ? h2.label : "";
                t2._eventManager.objectMap[n2] = g3;
                g3.center = { x: u.x, y: u.y };
                g3.y = h2.y;
                g3.radius = B;
                g3.percentInnerRadius = J2;
                g3.indexLabelText = p2;
                g3.indexLabelPlacement = k.indexLabelPlacement;
                g3.indexLabelLineColor = h2.indexLabelLineColor ? h2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : h2.color ? h2.color : k._colorSet[d2 % k._colorSet.length];
                g3.indexLabelLineThickness = l(h2.indexLabelLineThickness) ? k.indexLabelLineThickness : h2.indexLabelLineThickness;
                g3.indexLabelLineDashType = h2.indexLabelLineDashType ? h2.indexLabelLineDashType : k.indexLabelLineDashType;
                g3.indexLabelFontColor = h2.indexLabelFontColor ? h2.indexLabelFontColor : k.indexLabelFontColor;
                g3.indexLabelFontStyle = h2.indexLabelFontStyle ? h2.indexLabelFontStyle : k.indexLabelFontStyle;
                g3.indexLabelFontWeight = h2.indexLabelFontWeight ? h2.indexLabelFontWeight : k.indexLabelFontWeight;
                g3.indexLabelFontSize = l(h2.indexLabelFontSize) ? k.indexLabelFontSize : h2.indexLabelFontSize;
                g3.indexLabelFontFamily = h2.indexLabelFontFamily ? h2.indexLabelFontFamily : k.indexLabelFontFamily;
                g3.indexLabelBackgroundColor = h2.indexLabelBackgroundColor ? h2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                g3.indexLabelBorderColor = h2.indexLabelBorderColor ? h2.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                g3.indexLabelBorderThickness = h2.indexLabelBorderThickness ? h2.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                g3.indexLabelMaxWidth = h2.indexLabelMaxWidth ? h2.indexLabelMaxWidth : k.indexLabelMaxWidth;
                g3.indexLabelWrap = "undefined" !== typeof h2.indexLabelWrap ? h2.indexLabelWrap : k.indexLabelWrap;
                g3.indexLabelTextAlign = h2.indexLabelTextAlign ? h2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                g3.startAngle = 0 === d2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[d2 - 1].endAngle;
                g3.startAngle = (g3.startAngle + 2 * Math.PI) % (2 * Math.PI);
                g3.endAngle = g3.startAngle + 2 * Math.PI / A2 * Math.abs(h2.y);
                h2 = (g3.endAngle + g3.startAngle) / 2;
                h2 = (h2 + 2 * Math.PI) % (2 * Math.PI);
                g3.midAngle = h2;
                if (g3.midAngle > Math.PI / 2 - s && g3.midAngle < Math.PI / 2 + s) {
                  if (0 === a2 || f[c2].midAngle > g3.midAngle)
                    c2 = d2;
                  a2++;
                } else if (g3.midAngle > 3 * Math.PI / 2 - s && g3.midAngle < 3 * Math.PI / 2 + s) {
                  if (0 === b2 || f[e2].midAngle > g3.midAngle)
                    e2 = d2;
                  b2++;
                }
                g3.hemisphere = h2 > Math.PI / 2 && h2 <= 3 * Math.PI / 2 ? "left" : "right";
                g3.indexLabelTextBlock = new ka(t2.plotArea.ctx, {
                  fontSize: g3.indexLabelFontSize,
                  fontFamily: g3.indexLabelFontFamily,
                  fontColor: g3.indexLabelFontColor,
                  fontStyle: g3.indexLabelFontStyle,
                  fontWeight: g3.indexLabelFontWeight,
                  textAlign: g3.indexLabelTextAlign,
                  backgroundColor: g3.indexLabelBackgroundColor,
                  borderColor: g3.indexLabelBorderColor,
                  borderThickness: g3.indexLabelBorderThickness,
                  maxWidth: g3.indexLabelMaxWidth,
                  maxHeight: g3.indexLabelWrap ? 5 * g3.indexLabelFontSize : 1.5 * g3.indexLabelFontSize,
                  text: g3.indexLabelText,
                  padding: 0,
                  textBaseline: "middle"
                });
                g3.indexLabelTextBlock.measureText();
              }
              n2 = h2 = 0;
              p2 = false;
              for (d2 = 0; d2 < m.length; d2++)
                g3 = f[(c2 + d2) % m.length], 1 < a2 && (g3.midAngle > Math.PI / 2 - s && g3.midAngle < Math.PI / 2 + s) && (h2 <= a2 / 2 && !p2 ? (g3.hemisphere = "right", h2++) : (g3.hemisphere = "left", p2 = true));
              p2 = false;
              for (d2 = 0; d2 < m.length; d2++)
                g3 = f[(e2 + d2) % m.length], 1 < b2 && (g3.midAngle > 3 * Math.PI / 2 - s && g3.midAngle < 3 * Math.PI / 2 + s) && (n2 <= b2 / 2 && !p2 ? (g3.hemisphere = "left", n2++) : (g3.hemisphere = "right", p2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = t2.plotArea.ctx;
            c2.clearRect(q.x1, q.y1, q.width, q.height);
            c2.fillStyle = t2.backgroundColor;
            c2.fillRect(q.x1, q.y1, q.width, q.height);
            for (c2 = 0; c2 < m.length; c2++) {
              var e2 = f[c2].startAngle, d2 = f[c2].endAngle;
              if (d2 > e2) {
                var h2 = 0.07 * B * Math.cos(f[c2].midAngle), n2 = 0.07 * B * Math.sin(f[c2].midAngle), g3 = false;
                if (m[c2].exploded) {
                  if (1e-9 < Math.abs(f[c2].center.x - (u.x + h2)) || 1e-9 < Math.abs(f[c2].center.y - (u.y + n2)))
                    f[c2].center.x = u.x + h2 * a2, f[c2].center.y = u.y + n2 * a2, g3 = true;
                } else if (0 < Math.abs(f[c2].center.x - u.x) || 0 < Math.abs(f[c2].center.y - u.y))
                  f[c2].center.x = u.x + h2 * (1 - a2), f[c2].center.y = u.y + n2 * (1 - a2), g3 = true;
                g3 && b2 && (h2 = {}, h2.dataSeries = k, h2.dataPoint = k.dataPoints[c2], h2.index = c2, t2.toolTip.highlightObjects([h2]));
                X2(t2.plotArea.ctx, f[c2].center, f[c2].radius, m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, e2, d2, k.fillOpacity, f[c2].percentInnerRadius);
              }
            }
            c2 = t2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (e2 = e2 = 0; e2 < m.length; e2++)
              d2 = f[e2], d2.indexLabelText && (d2.indexLabelTextBlock.y -= d2.indexLabelTextBlock.height / 2 - d2.indexLabelTextBlock.fontSize / 2, h2 = 0, h2 = "left" === d2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(d2.indexLabelTextBlock.width + p) : -d2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? p : -d2.indexLabelTextBlock.width / 2, d2.indexLabelTextBlock.x += h2, d2.indexLabelTextBlock.render(true), d2.indexLabelTextBlock.x -= h2, d2.indexLabelTextBlock.y += d2.indexLabelTextBlock.height / 2 - d2.indexLabelTextBlock.fontSize / 2, "inside" !== d2.indexLabelPlacement && 0 < d2.indexLabelLineThickness && (h2 = d2.center.x + B * Math.cos(d2.midAngle), n2 = d2.center.y + B * Math.sin(d2.midAngle), c2.strokeStyle = d2.indexLabelLineColor, c2.lineWidth = d2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(I(d2.indexLabelLineDashType, d2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(h2, n2), c2.lineTo(d2.indexLabelTextBlock.x, d2.indexLabelTextBlock.y), c2.lineTo(d2.indexLabelTextBlock.x + ("left" === d2.hemisphere ? -p : p), d2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, f2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, d2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, e2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? d2 - f2 : c2 - e2;
          }
          function e(a2) {
            for (var c2 = null, d2 = 1; d2 < m.length; d2++)
              if (c2 = (a2 + d2 + f.length) % f.length, f[c2].hemisphere !== f[a2].hemisphere) {
                c2 = null;
                break;
              } else if (f[c2].indexLabelText && c2 !== a2 && (0 > b(f[c2], f[a2]) || ("right" === f[a2].hemisphere ? f[c2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y : f[c2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y)))
                break;
              else
                c2 = null;
            return c2;
          }
          function h(a2, c2, d2) {
            d2 = (d2 || 0) + 1;
            if (1e3 < d2)
              return 0;
            c2 = c2 || 0;
            var n2 = 0, k2 = u.y - 1 * w, g3 = u.y + 1 * w;
            if (0 <= a2 && a2 < m.length) {
              var l2 = f[a2];
              if (0 > c2 && l2.indexLabelTextBlock.y < k2 || 0 < c2 && l2.indexLabelTextBlock.y > g3)
                return 0;
              var p2 = 0, q2 = 0, q2 = p2 = p2 = 0;
              0 > c2 ? l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 > k2 && l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 + c2 < k2 && (c2 = -(k2 - (l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 + c2))) : l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 < k2 && l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + c2 > g3 && (c2 = l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2 + c2 - g3);
              c2 = l2.indexLabelTextBlock.y + c2;
              k2 = 0;
              k2 = "right" === l2.hemisphere ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - u.y, 2)) : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c2 - u.y, 2));
              q2 = u.x + B * Math.cos(l2.midAngle);
              p2 = u.y + B * Math.sin(l2.midAngle);
              p2 = Math.sqrt(Math.pow(k2 - q2, 2) + Math.pow(c2 - p2, 2));
              q2 = Math.acos(B / w);
              p2 = Math.acos((w * w + B * B - p2 * p2) / (2 * B * w));
              c2 = p2 < q2 ? c2 - l2.indexLabelTextBlock.y : 0;
              k2 = null;
              for (g3 = 1; g3 < m.length; g3++)
                if (k2 = (a2 - g3 + f.length) % f.length, f[k2].hemisphere !== f[a2].hemisphere) {
                  k2 = null;
                  break;
                } else if (f[k2].indexLabelText && f[k2].hemisphere === f[a2].hemisphere && k2 !== a2 && (0 > b(f[k2], f[a2]) || ("right" === f[a2].hemisphere ? f[k2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y : f[k2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y)))
                  break;
                else
                  k2 = null;
              q2 = k2;
              p2 = e(a2);
              g3 = k2 = 0;
              0 > c2 ? (g3 = "right" === l2.hemisphere ? q2 : p2, n2 = c2, null !== g3 && (q2 = -c2, c2 = l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2 - (f[g3].indexLabelTextBlock.y + f[g3].indexLabelTextBlock.height / 2), c2 - q2 < r2 && (k2 = -q2, g3 = h(g3, k2, d2 + 1), +g3.toFixed(v3) > +k2.toFixed(v3) && (n2 = c2 > r2 ? -(c2 - r2) : -(q2 - (g3 - k2)))))) : 0 < c2 && (g3 = "right" === l2.hemisphere ? p2 : q2, n2 = c2, null !== g3 && (q2 = c2, c2 = f[g3].indexLabelTextBlock.y - f[g3].indexLabelTextBlock.height / 2 - (l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2), c2 - q2 < r2 && (k2 = q2, g3 = h(g3, k2, d2 + 1), +g3.toFixed(v3) < +k2.toFixed(v3) && (n2 = c2 > r2 ? c2 - r2 : q2 - (k2 - g3)))));
              n2 && (d2 = l2.indexLabelTextBlock.y + n2, c2 = 0, c2 = "right" === l2.hemisphere ? u.x + Math.sqrt(Math.pow(w, 2) - Math.pow(d2 - u.y, 2)) : u.x - Math.sqrt(Math.pow(w, 2) - Math.pow(d2 - u.y, 2)), l2.midAngle > Math.PI / 2 - s && l2.midAngle < Math.PI / 2 + s ? (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "left" === l2.hemisphere && "right" === k2.hemisphere && c2 > k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x - 15 : "right" === l2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : l2.midAngle > 3 * Math.PI / 2 - s && l2.midAngle < 3 * Math.PI / 2 + s && (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "right" === l2.hemisphere && "left" === k2.hemisphere && c2 < k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x + 15 : "left" === l2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), l2.indexLabelTextBlock.y = d2, l2.indexLabelTextBlock.x = c2, l2.indexLabelAngle = Math.atan2(l2.indexLabelTextBlock.y - u.y, l2.indexLabelTextBlock.x - u.x));
            }
            return n2;
          }
          function n() {
            var a2 = t2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, d2 = 0, n2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < d2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && B - d2 <= G2)
                n2 = false;
              n2 && (B -= d2);
              d2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                w = B * y;
                for (a2 = 0; a2 < m.length; a2++) {
                  var g3 = f[a2];
                  g3.indexLabelTextBlock.x = u.x + w * Math.cos(g3.midAngle);
                  g3.indexLabelTextBlock.y = u.y + w * Math.sin(g3.midAngle);
                  g3.indexLabelAngle = g3.midAngle;
                  g3.radius = B;
                  g3.percentInnerRadius = J2;
                }
                for (var l2, s2, a2 = 0; a2 < m.length; a2++) {
                  var g3 = f[a2], x = e(a2);
                  if (null !== x) {
                    l2 = f[a2];
                    s2 = f[x];
                    var A3 = 0, A3 = b(l2, s2) - r2;
                    if (0 > A3) {
                      for (var z4 = s2 = 0, W = 0; W < m.length; W++)
                        W !== a2 && f[W].hemisphere === g3.hemisphere && (f[W].indexLabelTextBlock.y < g3.indexLabelTextBlock.y ? s2++ : z4++);
                      s2 = A3 / (s2 + z4 || 1) * z4;
                      var z4 = -1 * (A3 - s2), I2 = W = 0;
                      "right" === g3.hemisphere ? (W = h(a2, s2), z4 = -1 * (A3 - W), I2 = h(x, z4), +I2.toFixed(v3) < +z4.toFixed(v3) && +W.toFixed(v3) <= +s2.toFixed(v3) && h(a2, -(z4 - I2))) : (W = h(x, s2), z4 = -1 * (A3 - W), I2 = h(a2, z4), +I2.toFixed(v3) < +z4.toFixed(v3) && +W.toFixed(v3) <= +s2.toFixed(v3) && h(x, -(z4 - I2)));
                    }
                  }
                }
              } else
                for (a2 = 0; a2 < m.length; a2++)
                  g3 = f[a2], w = "pie" === k.type ? 0.7 * B : 0.85 * B, x = u.x + w * Math.cos(g3.midAngle), s2 = u.y + w * Math.sin(g3.midAngle), g3.indexLabelTextBlock.x = x, g3.indexLabelTextBlock.y = s2;
              for (a2 = 0; a2 < m.length; a2++)
                if (g3 = f[a2], x = g3.indexLabelTextBlock.measureText(), 0 !== x.height && 0 !== x.width)
                  x = x = 0, "right" === g3.hemisphere ? (x = q.x2 - (g3.indexLabelTextBlock.x + g3.indexLabelTextBlock.width + p), x *= -1) : x = q.x1 - (g3.indexLabelTextBlock.x - g3.indexLabelTextBlock.width - p), 0 < x && (!n2 && g3.indexLabelText && (s2 = "right" === g3.hemisphere ? q.x2 - g3.indexLabelTextBlock.x : g3.indexLabelTextBlock.x - q.x1, 0.3 * g3.indexLabelTextBlock.maxWidth > s2 ? g3.indexLabelText = "" : g3.indexLabelTextBlock.maxWidth = 0.85 * s2, 0.3 * g3.indexLabelTextBlock.maxWidth < s2 && (g3.indexLabelTextBlock.x -= "right" === g3.hemisphere ? 2 : -2)), Math.abs(g3.indexLabelTextBlock.y - g3.indexLabelTextBlock.height / 2 - u.y) < B || Math.abs(g3.indexLabelTextBlock.y + g3.indexLabelTextBlock.height / 2 - u.y) < B) && (x /= Math.abs(Math.cos(g3.indexLabelAngle)), 9 < x && (x *= 0.3), x > d2 && (d2 = x)), x = x = 0, 0 < g3.indexLabelAngle && g3.indexLabelAngle < Math.PI ? (x = q.y2 - (g3.indexLabelTextBlock.y + g3.indexLabelTextBlock.height / 2 + 5), x *= -1) : x = q.y1 - (g3.indexLabelTextBlock.y - g3.indexLabelTextBlock.height / 2 - 5), 0 < x && (!n2 && g3.indexLabelText && (s2 = 0 < g3.indexLabelAngle && g3.indexLabelAngle < Math.PI ? -1 : 1, 0 === h(a2, x * s2) && h(a2, 2 * s2)), Math.abs(g3.indexLabelTextBlock.x - u.x) < B && (x /= Math.abs(Math.sin(g3.indexLabelAngle)), 9 < x && (x *= 0.3), x > d2 && (d2 = x)));
              var O = function(a3, b2, c3) {
                for (var d3 = [], e2 = 0; d3.push(f[b2]), b2 !== c3; b2 = (b2 + 1 + m.length) % m.length)
                  ;
                d3.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < d3.length; b2++)
                  if (c3 = d3[b2], e2 < 0.7 * a3)
                    e2 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                  else
                    break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, d3 = 0, h2 = false, k2 = 0; k2 < m.length; k2++)
                  if (h2 = false, l2 = f[k2], l2.indexLabelText) {
                    var n3 = e(k2);
                    if (null !== n3) {
                      var g4 = f[n3];
                      A3 = 0;
                      A3 = b(l2, g4);
                      var q2;
                      if (q2 = 0 > A3) {
                        q2 = l2.indexLabelTextBlock.x;
                        var x2 = l2.indexLabelTextBlock.y - l2.indexLabelTextBlock.height / 2, s3 = l2.indexLabelTextBlock.y + l2.indexLabelTextBlock.height / 2, t3 = g4.indexLabelTextBlock.y - g4.indexLabelTextBlock.height / 2, r3 = g4.indexLabelTextBlock.x + g4.indexLabelTextBlock.width, u2 = g4.indexLabelTextBlock.y + g4.indexLabelTextBlock.height / 2;
                        q2 = l2.indexLabelTextBlock.x + l2.indexLabelTextBlock.width < g4.indexLabelTextBlock.x - p || q2 > r3 + p || x2 > u2 + p || s3 < t3 - p ? false : true;
                      }
                      q2 ? (0 > a3 && (a3 = k2), n3 !== a3 && (c3 = n3, d3 += -A3), 0 === k2 % Math.max(m.length / 10, 3) && (h2 = true)) : h2 = true;
                      h2 && (0 < d3 && 0 <= a3 && 0 <= c3) && (O(d3, a3, c3), c3 = a3 = -1, d3 = 0);
                    }
                  }
                0 < d3 && O(d3, a3, c3);
              })();
            }
          }
          function g2() {
            t2.plotArea.layoutManager.reset();
            t2.title && (t2.title.dockInsidePlotArea || "center" === t2.title.horizontalAlign && "center" === t2.title.verticalAlign) && t2.title.render();
            if (t2.subtitles)
              for (var a2 = 0; a2 < t2.subtitles.length; a2++) {
                var b2 = t2.subtitles[a2];
                (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
              }
            t2.legend && (t2.legend.dockInsidePlotArea || "center" === t2.legend.horizontalAlign && "center" === t2.legend.verticalAlign) && (t2.legend.setLayout(), t2.legend.render());
          }
          var t2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], m = k.dataPoints, p = 10, q = this.plotArea, f = k.dataPointEOs, r2 = 2, w, y = 1.3, s = 20 / 180 * Math.PI, v3 = 6, u = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 }, A2 = 0;
            a = false;
            for (var z3 = 0; z3 < m.length; z3++)
              A2 += Math.abs(m[z3].y), !a && ("undefined" !== typeof m[z3].indexLabel && null !== m[z3].indexLabel && 0 < m[z3].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof m[z3].label && null !== m[z3].label && 0 < m[z3].label.toString().length) && (a = true);
            if (0 !== A2) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var B = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
              k.radius && (B = Ua(k.radius, B));
              var G2 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ua(k.innerRadius, B) : 0.7 * B;
              k.radius = B;
              "doughnut" === k.type && (k.innerRadius = G2);
              var J2 = Math.min(G2 / B, (B - 1) / B);
              this.pieDoughnutClickHandler = function(a2) {
                t2.isAnimating || !l(this.explodeOnClick) && !this.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && t2._animator.animate(0, 500, function(a3) {
                  c(a3, true);
                  g2();
                  t2.dispatchEvent("dataAnimationIterationEnd", { chart: t2 });
                  t2.dispatchEvent("dataAnimationEnd", { chart: t2 });
                }));
              };
              d();
              n();
              n();
              n();
              n();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = t2.plotArea.ctx;
                b2.clearRect(q.x1, q.y1, q.width, q.height);
                b2.fillStyle = t2.backgroundColor;
                b2.fillRect(
                  q.x1,
                  q.y1,
                  q.width,
                  q.height
                );
                for (var b2 = f[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < m.length; c2++) {
                  var d2 = 0 === c2 ? f[c2].startAngle : e2, e2 = d2 + (f[c2].endAngle - f[c2].startAngle), h2 = false;
                  e2 > b2 && (e2 = b2, h2 = true);
                  var n2 = m[c2].color ? m[c2].color : k._colorSet[c2 % k._colorSet.length];
                  e2 > d2 && X2(t2.plotArea.ctx, f[c2].center, f[c2].radius, n2, k.type, d2, e2, k.fillOpacity, f[c2].percentInnerRadius);
                  if (h2)
                    break;
                }
                g2();
                t2.dispatchEvent("dataAnimationIterationEnd", { chart: t2 });
                1 <= a2 && t2.dispatchEvent("dataAnimationEnd", { chart: t2 });
              }, function() {
                t2.disableToolTip = false;
                t2._animator.animate(
                  0,
                  t2.animatedRender ? 500 : 0,
                  function(a2) {
                    c(a2, false);
                    g2();
                    t2.dispatchEvent("dataAnimationIterationEnd", { chart: t2 });
                  }
                );
                t2.dispatchEvent("dataAnimationEnd", { chart: t2 });
              });
            }
          }
        };
        var pa2 = function(a, d, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), a.lineTo(Math.round(d.x3), Math.round(d.y3)), a.lineTo(Math.round(d.x4), Math.round(d.y4)), "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))), a.closePath(), a.fillStyle = b ? b : d.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        t.prototype.renderFunnel = function(a) {
          function d() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < C.length; c2++) {
              if ("undefined" === typeof C[c2].y)
                return -1;
              C[c2].y = "number" === typeof C[c2].y ? C[c2].y : 0;
              a2 += Math.abs(C[c2].y);
            }
            if (0 === a2)
              return -1;
            for (c2 = b2[0] = 0; c2 < C.length; c2++)
              b2.push(Math.abs(C[c2].y) * G2 / a2);
            return b2;
          }
          function c() {
            var a2 = Y2, b2 = $3, c2 = O, d2 = aa2, f2, e2;
            f2 = R2;
            e2 = T2 - M;
            d2 = Math.abs((e2 - f2) * (b2 - a2 + (d2 - c2)) / 2);
            c2 = aa2 - O;
            f2 = e2 - f2;
            e2 = c2 * (e2 - T2);
            e2 = Math.abs(e2);
            e2 = d2 + e2;
            for (var d2 = [], h2 = 0, k2 = 0; k2 < C.length; k2++) {
              if ("undefined" === typeof C[k2].y)
                return -1;
              C[k2].y = "number" === typeof C[k2].y ? C[k2].y : 0;
              h2 += Math.abs(C[k2].y);
            }
            if (0 === h2)
              return -1;
            for (var g3 = d2[0] = 0, n = 0, l2, m2, b2 = b2 - a2, g3 = false, k2 = 0; k2 < C.length; k2++)
              a2 = Math.abs(C[k2].y) * e2 / h2, g3 ? l2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (m2 = da2 * da2 * b2 * b2 - 4 * Math.abs(da2) * a2, 0 > m2 ? (m2 = c2, g3 = (b2 + m2) * (f2 - n) / 2, a2 -= g3, l2 = f2 - n, n += f2 - n, l2 += 0 == m2 ? 0 : a2 / m2, n += a2 / m2, g3 = true) : (l2 = (Math.abs(da2) * b2 - Math.sqrt(m2)) / 2, m2 = b2 - 2 * l2 / Math.abs(da2), n += l2, n > f2 && (n -= l2, m2 = c2, g3 = (b2 + m2) * (f2 - n) / 2, a2 -= g3, l2 = f2 - n, n += f2 - n, l2 += a2 / m2, n += a2 / m2, g3 = true), b2 = m2)), d2.push(l2);
            return d2;
          }
          function b() {
            if (s && C) {
              for (var a2, b2, c2, d2, e2, h2, k2, n, g3, m2, p2, q2, x2, t3, u2, w2, E, v4 = [], A3 = [], z4 = { percent: null, total: null }, D = null, B2 = 0; B2 < C.length; B2++)
                E = S[B2], E = "undefined" !== typeof E.x5 ? (E.y2 + E.y4) / 2 : (E.y2 + E.y3) / 2, E = f(E).x2 + 1, v4[B2] = P3 - E - U2;
              E = 0.5 * U2;
              for (var B2 = 0, F2 = C.length - 1; B2 < C.length || 0 <= F2; B2++, F2--) {
                b2 = s.reversed ? C[F2] : C[B2];
                a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(C.length - 1 - B2) % s._colorSet.length] : s._colorSet[B2 % s._colorSet.length];
                c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
                w2 = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                d2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (r ? "transparent" : null);
                e2 = b2.indexLabelBorderColor || s.indexLabelBorderColor || (r ? "transparent" : null);
                h2 = l(b2.indexLabelBorderThickness) ? s.indexLabelBorderThickness : b2.indexLabelBorderThickness;
                k2 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                n = l(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
                g3 = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                m2 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                p2 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
                q2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                x2 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                t3 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
                u2 = s.dataPointIds[B2];
                y._eventManager.objectMap[u2] = {
                  id: u2,
                  objectType: "dataPoint",
                  dataPointIndex: B2,
                  dataSeriesIndex: 0,
                  funnelSection: S[s.reversed ? C.length - 1 - B2 : B2]
                };
                "inside" === s.indexLabelPlacement && (v4[B2] = B2 !== fa3 ? s.reversed ? S[B2].x2 - S[B2].x1 : S[B2].x3 - S[B2].x4 : S[B2].x3 - S[B2].x6, 20 > v4[B2] && (v4[B2] = B2 !== fa3 ? s.reversed ? S[B2].x3 - S[B2].x4 : S[B2].x2 - S[B2].x1 : S[B2].x2 - S[B2].x1, v4[B2] /= 2));
                u2 = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : v4[B2];
                if (u2 > v4[B2] || 0 > u2)
                  u2 = v4[B2];
                A3[B2] = "inside" === s.indexLabelPlacement ? t3 ? Math.max(S[B2].height, n) : 1.5 * n : false;
                z4 = y.getPercentAndTotal(
                  s,
                  b2
                );
                if (s.indexLabelFormatter || b2.indexLabelFormatter)
                  D = { chart: y.options, dataSeries: s, dataPoint: b2, total: z4.total, percent: z4.percent };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(D) : b2.indexLabel ? y.replaceKeywordsWithValue(b2.indexLabel, b2, s, B2) : s.indexLabelFormatter ? s.indexLabelFormatter(D) : s.indexLabel ? y.replaceKeywordsWithValue(s.indexLabel, b2, s, B2) : b2.label ? b2.label : "";
                0 >= q2 && (q2 = 0);
                1e3 > u2 && 1e3 - u2 < E && (u2 += 1e3 - u2);
                l(s.options.indexLabelMaxWidth) && (s.indexLabelMaxWidth = l(s.indexLabelMaxWidth) ? u2 : Math.max(u2, s.indexLabelMaxWidth));
                N2.roundRect || za(N2);
                c2 = new ka(N2, { fontSize: n, fontFamily: m2, fontColor: k2, fontStyle: g3, fontWeight: p2, horizontalAlign: c2, textAlign: w2, backgroundColor: d2, borderColor: e2, borderThickness: h2, maxWidth: u2, maxHeight: false === A3[B2] ? t3 ? 4.28571429 * n : 1.5 * n : A3[B2], text: b2, padding: ga3, textBaseline: "middle" });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                H.push({
                  textBlock: c2,
                  id: s.reversed ? F2 : B2,
                  isDirty: false,
                  lineColor: a2,
                  lineThickness: q2,
                  lineDashType: x2,
                  height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight,
                  width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth
                });
              }
            }
          }
          function e() {
            var a2, b2, c2, d2, f2, e2 = [];
            f2 = false;
            c2 = 0;
            for (var h2, k2 = P3 - $3 - U2 / 2, k2 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > k2 ? k2 : s.indexLabelMaxWidth : k2, n = H.length - 1; 0 <= n; n--) {
              h2 = C[H[n].id];
              c2 = H[n];
              d2 = c2.textBlock;
              b2 = (a2 = q(n) < S.length ? H[q(n)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && d2.y + c2 + ga3 > b2.y && (f2 = true);
              c2 = h2.indexLabelMaxWidth || k2;
              if (c2 > k2 || 0 > c2)
                c2 = k2;
              e2.push(c2);
            }
            if (f2)
              for (n = H.length - 1; 0 <= n; n--)
                a2 = S[n], H[n].textBlock.maxWidth = e2[e2.length - (n + 1)], H[n].textBlock.measureText(), H[n].textBlock.height = H[n].textBlock.height === 2 * H[n].textBlock.padding ? 0 : H[n].textBlock.height, H[n].textBlock.width = H[n].textBlock.width === 2 * H[n].textBlock.padding ? 0 : H[n].textBlock.width, H[n].textBlock.x = P3 - k2, c2 = H[n].textBlock.height < H[n].textBlock.maxHeight ? H[n].textBlock.height : H[n].textBlock.maxHeight, f2 = H[n].textBlock.width < H[n].textBlock.maxWidth ? H[n].textBlock.width : H[n].textBlock.maxWidth, H[n].height = c2, H[n].width = f2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, H[n].textBlock.y = c2 - H[n].height / 2, s.reversed ? (H[n].textBlock.y + H[n].height > V3 + z3 && (H[n].textBlock.y = V3 + z3 - H[n].height), H[n].textBlock.y < ra - z3 && (H[n].textBlock.y = ra - z3)) : (H[n].textBlock.y < V3 - z3 && (H[n].textBlock.y = V3 - z3), H[n].textBlock.y + H[n].height > ra + z3 && (H[n].textBlock.y = ra + z3 - H[n].height));
          }
          function h() {
            var a2, b2, c2, d2;
            if ("inside" !== s.indexLabelPlacement)
              for (var e2 = 0; e2 < S.length; e2++)
                0 == H[e2].textBlock.text.length ? H[e2].isDirty = true : (a2 = S[e2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > Da ? f(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < Da ? f(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, H[e2].textBlock.x = b2 + U2, H[e2].textBlock.y = c2 - H[e2].height / 2, s.reversed ? (H[e2].textBlock.y + H[e2].height > V3 + z3 && (H[e2].textBlock.y = V3 + z3 - H[e2].height), H[e2].textBlock.y < ra - z3 && (H[e2].textBlock.y = ra - z3)) : (H[e2].textBlock.y < V3 - z3 && (H[e2].textBlock.y = V3 - z3), H[e2].textBlock.y + H[e2].height > ra + z3 && (H[e2].textBlock.y = ra + z3 - H[e2].height)));
            else
              for (e2 = 0; e2 < S.length; e2++)
                0 == H[e2].textBlock.text.length ? H[e2].isDirty = true : (a2 = S[e2], b2 = a2.height, c2 = H[e2].height, d2 = H[e2].width, b2 >= c2 ? (b2 = e2 != fa3 ? (a2.x4 + a2.x3) / 2 - d2 / 2 : (a2.x5 + a2.x4) / 2 - d2 / 2, c2 = e2 != fa3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, H[e2].textBlock.x = b2, H[e2].textBlock.y = c2) : H[e2].isDirty = true);
          }
          function g2() {
            function a2(b3, c3) {
              var d3;
              if (0 > b3 || b3 >= H.length)
                return 0;
              var e3, f3 = H[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                e3 = p(b3);
                d3 = x(e3, b3);
                if (d3 >= c3)
                  return f3.y -= c3, c3;
                if (0 == b3)
                  return 0 < d3 && (f3.y -= d3), d3;
                d3 += a2(e3, -(c3 - d3));
                0 < d3 && (f3.y -= d3);
                return d3;
              }
              e3 = q(b3);
              d3 = x(b3, e3);
              if (d3 >= c3)
                return f3.y += c3, c3;
              if (b3 == S.length - 1)
                return 0 < d3 && (f3.y += d3), d3;
              d3 += a2(e3, c3 - d3);
              0 < d3 && (f3.y += d3);
              return d3;
            }
            function b2() {
              var a3, d3, e3, f3, h3 = 0, n2;
              f3 = (T2 - R2 + 2 * z3) / l2;
              n2 = l2;
              for (var k3, g3 = 1; g3 < n2; g3++) {
                e3 = g3 * f3;
                for (var m3 = H.length - 1; 0 <= m3; m3--)
                  !H[m3].isDirty && (H[m3].textBlock.y < e3 && H[m3].textBlock.y + H[m3].height > e3) && (k3 = q(m3), !(k3 >= H.length - 1) && H[m3].textBlock.y + H[m3].height + ga3 > H[k3].textBlock.y && (H[m3].textBlock.y = H[m3].textBlock.y + H[m3].height - e3 > e3 - H[m3].textBlock.y ? e3 + 1 : e3 - H[m3].height - 1));
              }
              for (k3 = S.length - 1; 0 < k3; k3--)
                if (!H[k3].isDirty) {
                  e3 = p(k3);
                  if (0 > e3 && (e3 = 0, H[e3].isDirty))
                    break;
                  if (H[k3].textBlock.y < H[e3].textBlock.y + H[e3].height) {
                    d3 = d3 || k3;
                    f3 = k3;
                    for (n2 = 0; H[f3].textBlock.y < H[e3].textBlock.y + H[e3].height + ga3; ) {
                      a3 = a3 || H[f3].textBlock.y + H[f3].height;
                      n2 += H[f3].height;
                      n2 += ga3;
                      f3 = e3;
                      if (0 >= f3) {
                        f3 = 0;
                        n2 += H[f3].height;
                        break;
                      }
                      e3 = p(f3);
                      if (0 > e3) {
                        f3 = 0;
                        n2 += H[f3].height;
                        break;
                      }
                    }
                    if (f3 != k3) {
                      h3 = H[f3].textBlock.y;
                      a3 -= h3;
                      a3 = n2 - a3;
                      h3 = c2(a3, d3, f3);
                      break;
                    }
                  }
                }
              return h3;
            }
            function c2(a3, b3, d3) {
              var e3 = [], f3 = 0, h3 = 0;
              for (a3 = Math.abs(a3); d3 <= b3; d3++)
                e3.push(S[d3]);
              e3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (d3 = 0; d3 < e3.length; d3++)
                if (b3 = e3[d3], f3 < a3)
                  h3++, f3 += H[b3.id].height + ga3, H[b3.id].textBlock.text = "", H[b3.id].indexLabelText = "", H[b3.id].isDirty = true, H[b3.id].textBlock.measureText();
                else
                  break;
              return h3;
            }
            for (var d2, e2, f2, h2, n, k2, l2 = 1, m2 = 0; m2 < 2 * l2; m2++) {
              for (var s2 = H.length - 1; 0 <= s2 && !(0 <= p(s2) && p(s2), f2 = H[s2], h2 = f2.textBlock, k2 = (n = q(s2) < S.length ? H[q(s2)] : null) ? n.textBlock : null, d2 = +f2.height.toFixed(6), e2 = +h2.y.toFixed(6), !f2.isDirty && (n && e2 + d2 + ga3 > +k2.y.toFixed(6)) && (d2 = h2.y + d2 + ga3 - k2.y, e2 = a2(s2, -d2), e2 < d2 && (0 < e2 && (d2 -= e2), e2 = a2(q(s2), d2), e2 != d2))); s2--)
                ;
              b2();
            }
          }
          function x(a2, b2) {
            return (b2 < S.length ? H[b2].textBlock.y : s.reversed ? V3 + z3 : ra + z3) - (0 > a2 ? s.reversed ? ra - z3 : V3 - z3 : H[a2].textBlock.y + H[a2].height + ga3);
          }
          function t2(a2, b2, c2) {
            var d2, e2, f2, n = [], g3 = z3, l2 = [];
            -1 !== b2 && (0 <= X3.indexOf(b2) ? (e2 = X3.indexOf(b2), X3.splice(e2, 1)) : (X3.push(b2), X3 = X3.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === X3.length)
              n = ia2;
            else {
              e2 = z3 * (1 != X3.length || 0 != X3[0] && X3[0] != S.length - 1 ? 2 : 1) / k();
              for (var p2 = 0; p2 < S.length; p2++) {
                if (1 == X3.length && 0 == X3[0]) {
                  if (0 === p2) {
                    n.push(ia2[p2]);
                    d2 = g3;
                    continue;
                  }
                } else
                  0 === p2 && (d2 = -1 * g3);
                n.push(ia2[p2] + d2);
                if (0 <= X3.indexOf(p2) || p2 < S.length && 0 <= X3.indexOf(p2 + 1))
                  d2 += e2;
              }
            }
            f2 = function() {
              for (var a3 = [], b3 = 0; b3 < S.length; b3++)
                a3.push(n[b3] - S[b3].y1);
              return a3;
            }();
            var q2 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, d3) {
              return Q.easing.easeOutQuart(a3, b3, c3, d3);
            }, changeSection: function(a3) {
              for (var b3, c3, d3 = 0; d3 < S.length; d3++)
                b3 = f2[d3], c3 = S[d3], b3 *= a3, "undefined" === typeof l2[d3] && (l2[d3] = 0), 0 > l2 && (l2 *= -1), c3.y1 += b3 - l2[d3], c3.y2 += b3 - l2[d3], c3.y3 += b3 - l2[d3], c3.y4 += b3 - l2[d3], c3.y5 && (c3.y5 += b3 - l2[d3], c3.y6 += b3 - l2[d3]), l2[d3] = b3;
            } };
            a2._animator.animate(0, c2, function(c3) {
              var d3 = a2.plotArea.ctx || a2.ctx;
              ja3 = true;
              d3.clearRect(u.x1, u.y1, u.x2 - u.x1, u.y2 - u.y1);
              d3.fillStyle = a2.backgroundColor;
              d3.fillRect(u.x1, u.y1, u.width, u.height);
              q2.changeSection(c3, b2);
              var e3 = {};
              e3.dataSeries = s;
              e3.dataPoint = s.reversed ? s.dataPoints[C.length - 1 - b2] : s.dataPoints[b2];
              e3.index = s.reversed ? C.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([e3]);
              for (e3 = 0; e3 < S.length; e3++)
                pa2(d3, S[e3], s.fillOpacity);
              w(d3);
              K && ("inside" !== s.indexLabelPlacement ? m(d3) : h(), v3(d3));
              1 <= c3 && (ja3 = false);
            }, null, Q.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < S.length - 1; b2++)
              (0 <= X3.indexOf(b2) || 0 <= X3.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function m(a2) {
            for (var b2, c2, d2, e2, h2 = 0; h2 < S.length; h2++)
              e2 = 1 === H[h2].lineThickness % 2 ? 0.5 : 0, c2 = ((S[h2].y2 + S[h2].y4) / 2 << 0) + e2, b2 = f(c2).x2 - 1, d2 = H[h2].textBlock.x, e2 = (H[h2].textBlock.y + H[h2].height / 2 << 0) + e2, H[h2].isDirty || 0 == H[h2].lineThickness || (a2.strokeStyle = H[h2].lineColor, a2.lineWidth = H[h2].lineThickness, a2.setLineDash && a2.setLineDash(I(H[h2].lineDashType, H[h2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(d2, e2), a2.stroke());
          }
          function p(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && H[a2].isDirty; a2--)
              ;
            return a2;
          }
          function q(a2) {
            for (a2 += 1; a2 <= S.length && a2 != S.length && H[a2].isDirty; a2++)
              ;
            return a2;
          }
          function f(a2) {
            for (var b2, c2 = 0; c2 < C.length; c2++)
              if (S[c2].y1 < a2 && S[c2].y4 > a2) {
                b2 = S[c2];
                break;
              }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
          }
          function v3(a2) {
            for (var b2 = 0; b2 < S.length; b2++)
              H[b2].isDirty || (a2 && (H[b2].textBlock.ctx = a2), H[b2].textBlock.y += H[b2].textBlock._lineHeight / 2, H[b2].textBlock.render(true), H[b2].textBlock.y -= H[b2].textBlock._lineHeight / 2);
          }
          function w(a2) {
            y.plotArea.layoutManager.reset();
            a2.roundRect || za(a2);
            y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign && "center" === y.title.verticalAlign) && (y.title.ctx = a2, y.title.render());
            if (y.subtitles)
              for (var b2 = 0; b2 < y.subtitles.length; b2++) {
                var c2 = y.subtitles[b2];
                if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign)
                  y.subtitles.ctx = a2, c2.render();
              }
            y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a2, y.legend.setLayout(), y.legend.render());
            ua.fNg && ua.fNg(y);
          }
          var y = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var s = this.data[a.dataSeriesIndexes[0]], C = s.dataPoints, u = this.plotArea, z3 = 0.025 * u.width, A2 = 0.01 * u.width, B = 0, G2 = u.height - 2 * z3, J2 = Math.min(u.width - 2 * A2, 2.8 * u.height), K = false, L = 0; L < C.length; L++)
              if (!K && ("undefined" !== typeof C[L].indexLabel && null !== C[L].indexLabel && 0 < C[L].indexLabel.toString().length) && (K = true), !K && ("undefined" !== typeof C[L].label && null !== C[L].label && 0 < C[L].label.toString().length) && (K = true), !K && "function" === typeof s.indexLabelFormatter || "function" === typeof C[L].indexLabelFormatter)
                K = true;
            K = K || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
            "inside" !== s.indexLabelPlacement && K || (A2 = (u.width - 0.75 * J2) / 2);
            var L = u.x1 + A2, P3 = u.x2 - A2, R2 = u.y1 + z3, T2 = u.y2 - z3, N2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != s.length && (s.dataPoints && s.visible) && 0 !== C.length) {
              var M, F;
              a = 75 * J2 / 100;
              var U2 = 30 * (P3 - a) / 100;
              "funnel" === s.type ? (M = l(s.options.neckHeight) ? 0.35 * G2 : s.neckHeight, F = l(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof M && M.match(/%$/) ? (M = parseInt(M), M = M * G2 / 100) : M = parseInt(M), "string" === typeof F && F.match(/%$/) ? (F = parseInt(F), F = F * a / 100) : F = parseInt(F), M > G2 ? M = G2 : 0 >= M && (M = 0), F > a ? F = a - 0.5 : 0 >= F && (F = 0)) : "pyramid" === s.type && (F = M = 0, s.reversed = s.reversed ? false : true);
              var A2 = L + a / 2, Y2 = L, $3 = L + a, V3 = s.reversed ? T2 : R2, O = A2 - F / 2, aa2 = A2 + F / 2, Da = s.reversed ? R2 + M : T2 - M, ra = s.reversed ? R2 : T2;
              F = s.valueRepresents = s.valueRepresents ? s.valueRepresents : "height";
              L = [];
              a = [];
              var S = [], A2 = [], Z3 = R2, fa3, da2 = (Da - V3) / (O - Y2), ha2 = -da2, J2 = "area" === F ? c() : d();
              if (-1 !== J2) {
                if (s.reversed)
                  for (A2.push(Z3), F = J2.length - 1; 0 < F; F--)
                    Z3 += J2[F], A2.push(Z3);
                else
                  for (F = 0; F < J2.length; F++)
                    Z3 += J2[F], A2.push(Z3);
                if (s.reversed)
                  for (F = 0; F < J2.length; F++)
                    A2[F] < Da ? (L.push(O), a.push(aa2), fa3 = F) : (L.push((A2[F] - V3 + da2 * Y2) / da2), a.push((A2[F] - V3 + ha2 * $3) / ha2));
                else
                  for (F = 0; F < J2.length; F++)
                    A2[F] < Da ? (L.push((A2[F] - V3 + da2 * Y2) / da2), a.push((A2[F] - V3 + ha2 * $3) / ha2), fa3 = F) : (L.push(O), a.push(aa2));
                for (F = 0; F < J2.length - 1; F++)
                  Z3 = s.reversed ? C[C.length - 1 - F].color ? C[C.length - 1 - F].color : s._colorSet[(C.length - 1 - F) % s._colorSet.length] : C[F].color ? C[F].color : s._colorSet[F % s._colorSet.length], F === fa3 ? S.push({ x1: L[F], y1: A2[F], x2: a[F], y2: A2[F], x3: aa2, y3: Da, x4: a[F + 1], y4: A2[F + 1], x5: L[F + 1], y5: A2[F + 1], x6: O, y6: Da, id: F, height: A2[F + 1] - A2[F], color: Z3 }) : S.push({ x1: L[F], y1: A2[F], x2: a[F], y2: A2[F], x3: a[F + 1], y3: A2[F + 1], x4: L[F + 1], y4: A2[F + 1], id: F, height: A2[F + 1] - A2[F], color: Z3 }), s.dataPointEOs[F] && S[F] && (s.dataPointEOs[F].sectionsofFunnel = S[F]);
                var ga3 = 2, H = [], ja3 = false, X3 = [], ia2 = [], L = false;
                a = a = 0;
                Ea(X3);
                for (F = 0; F < C.length; F++)
                  C[F].exploded && (L = true, s.reversed ? X3.push(C.length - 1 - F) : X3.push(F));
                N2.clearRect(u.x1, u.y1, u.width, u.height);
                N2.fillStyle = y.backgroundColor;
                N2.fillRect(u.x1, u.y1, u.width, u.height);
                if (K && s.visible && (b(), h(), "inside" !== s.indexLabelPlacement)) {
                  e();
                  g2();
                  for (F = 0; F < C.length; F++)
                    H[F].isDirty || (a = H[F].textBlock.x + H[F].width, a = (P3 - a) / 2, 0 == F && (B = a), B > a && (B = a));
                  for (F = 0; F < S.length; F++)
                    S[F].x1 += B, S[F].x2 += B, S[F].x3 += B, S[F].x4 += B, S[F].x5 && (S[F].x5 += B, S[F].x6 += B), H[F].textBlock.x += B;
                }
                for (F = 0; F < S.length; F++)
                  B = S[F], pa2(N2, B, s.fillOpacity), ia2.push(B.y1);
                w(N2);
                K && s.visible && ("inside" === s.indexLabelPlacement || y.animationEnabled || m(N2), y.animationEnabled || v3());
                if (!K)
                  for (F = 0; F < C.length; F++)
                    B = s.dataPointIds[F], a = {
                      id: B,
                      objectType: "dataPoint",
                      dataPointIndex: F,
                      dataSeriesIndex: 0,
                      funnelSection: S[s.reversed ? C.length - 1 - F : F]
                    }, y._eventManager.objectMap[B] = a;
                !y.animationEnabled && L ? t2(y, -1, 0) : y.animationEnabled && !y.animatedRender && t2(y, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ja3 && !y.isAnimating && (l(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? C.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === s.type || "pyramid" === s.type)
                      s.reversed ? C[C.length - 1 - a2].exploded = C[C.length - 1 - a2].exploded ? false : true : C[a2].exploded = C[a2].exploded ? false : true;
                    t2(y, b2, 500);
                  }
                };
                return { source: N2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                  Q.fadeInAnimation(a2, b2);
                  1 <= a2 && (t2(y, -1, 500), w(y.plotArea.ctx || y.ctx));
                }, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
              }
            }
          }
        };
        t.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        t.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        t.prototype.set = function(a, d, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = d, c && this.render()) : t.base.set.call(this, a, d, c);
        };
        t.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var d = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL)
            return this.canvas.toDataURL("image/" + d);
          var b = this.canvas;
          if (b && d && c) {
            c = c + "." + d;
            a = "image/" + d;
            var b = b.toDataURL(a), e = false, h = document.createElement("a");
            h.download = c;
            h.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var n = b.replace(/^data:[a-z\/]*;base64,/, ""), n = atob(n), g2 = new ArrayBuffer(n.length), g2 = new Uint8Array(g2), l2 = 0; l2 < n.length; l2++)
                g2[l2] = n.charCodeAt(l2);
              d = new Blob([g2.buffer], { type: "image/" + d });
              try {
                window.navigator.msSaveBlob(d, c), e = true;
              } catch (k) {
                h.dataset.downloadurl = [a, h.download, h.href].join(":"), h.href = window.URL.createObjectURL(d);
              }
            }
            if (!e)
              try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), h.dispatchEvent ? h.dispatchEvent(event) : h.fireEvent && h.fireEvent("onclick");
              } catch (m) {
                d = window.open(), d.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close();
              }
          }
        };
        t.prototype.print = function() {
          var a = this.exportChart({ toDataURL: true }), d = document.createElement("iframe");
          d.setAttribute("class", "canvasjs-chart-print-frame");
          J(
            d,
            { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" }
          );
          d.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(d);
          var c = this, b = d.contentWindow || d.contentDocument.document || d.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(d);
            }, 1e3);
          }, 500);
        };
        t.prototype.getPercentAndTotal = function(a, d) {
          var c = null, b = null, e = c = null;
          if (0 <= a.type.indexOf("stacked"))
            b = 0, c = d.x.getTime ? d.x.getTime() : d.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(d.y) ? 0 : 0 === c ? 0 : 100 * (d.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++)
              isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            e = isNaN(d.y) ? 0 : 100 * (d.y / b);
          }
          return { percent: e, total: b };
        };
        t.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
          var h = this;
          e = "undefined" === typeof e ? 0 : e;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var n = "#percent", g2 = "#total", l2 = this.getPercentAndTotal(c, d), g2 = isNaN(l2.total) ? g2 : l2.total, n = isNaN(l2.percent) ? n : l2.percent;
            do {
              l2 = "";
              if (c.percentFormatString)
                l2 = c.percentFormatString;
              else {
                var l2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(n)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k))
                  k = 2;
                for (var m = 0; m < k; m++)
                  l2 += "#";
                c.percentFormatString = l2;
              }
              a = a.replace("#percent", ha(n, l2, h._cultureInfo));
              a = a.replace("#total", ha(g2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo));
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
            if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1])
              return a2.slice(
                1,
                a2.length - 1
              );
            a2 = Ha(a2.slice(1, a2.length - 1));
            a2 = a2.replace("#index", e);
            var n2 = null;
            try {
              var f = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              f && 0 < f.length && (n2 = Ha(f[2]), a2 = Ha(f[1]));
            } catch (k2) {
            }
            f = null;
            if ("color" === a2)
              return "waterfall" === c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[n2 % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (d.hasOwnProperty(a2))
              f = d;
            else if (c.hasOwnProperty(a2))
              f = c;
            else
              return "";
            f = f[a2];
            null !== n2 && (f = f[n2]);
            return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime) && !c.axisX.logarithmic ? Ca(f, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY", h._cultureInfo) : ha(f, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", h._cultureInfo) : "y" === a2 ? ha(f, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", h._cultureInfo) : "z" === a2 ? ha(f, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", h._cultureInfo) : f;
          });
        };
        oa(T, Y);
        T.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, d = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, h = 0, n = 0, g2 = this.markerMargin = this.chart.options.legend && !l(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var t2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
            this.orientation = "horizontal", c = this.verticalAlign, h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, n = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
              c = this.horizontalAlign;
            h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
            n = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height;
          }
          this.errorMarkerColor = [];
          for (var m = 0; m < this.dataSeries.length; m++) {
            var p = this.dataSeries[m];
            if (p.dataPoints && p.dataPoints.length) {
              if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !== p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : P2.getDefaultLegendMarker(p._linkedSeries.type) : P2.getDefaultLegendMarker(p.type) : p.markerType, f = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: null }) : p.name, r2 = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? l(p.whiskerColor) ? p._colorSet[0] : p.whiskerColor : p._colorSet[0], w = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0, y = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor, s = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
                "error" === p.type && this.errorMarkerColor.push(r2);
                f = p.legendText = this.chart.replaceKeywordsWithValue(f, p.dataPoints[0], p, m);
                q = {
                  markerType: q,
                  markerColor: r2,
                  text: f,
                  textBlock: null,
                  chartType: p.type,
                  markerSize: w,
                  lineColor: p._colorSet[0],
                  dataSeriesIndex: p.index,
                  dataPointIndex: null,
                  markerBorderColor: y,
                  markerBorderThickness: s
                };
                t2.push(q);
              } else
                for (var v3 = 0; v3 < p.dataPoints.length; v3++) {
                  var u = p.dataPoints[v3], q = u.legendMarkerType ? u.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : P2.getDefaultLegendMarker(p.type), f = u.legendText ? u.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: u }) : u.name ? u.name : "DataPoint: " + (v3 + 1), r2 = u.legendMarkerColor ? u.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : u.color ? u.color : p.color ? p.color : p._colorSet[v3 % p._colorSet.length], w = 0.75 * this.lineHeight, y = u.legendMarkerBorderColor ? u.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : u.markerBorderColor ? u.markerBorderColor : p.markerBorderColor, s = u.legendMarkerBorderThickness ? u.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : u.markerBorderThickness || p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0, f = this.chart.replaceKeywordsWithValue(
                    f,
                    u,
                    p,
                    v3
                  ), q = { markerType: q, markerColor: r2, text: f, textBlock: null, chartType: p.type, markerSize: w, dataSeriesIndex: m, dataPointIndex: v3, markerBorderColor: y, markerBorderThickness: s };
                  (u.showInLegend || p.showInLegend && false !== u.showInLegend) && t2.push(q);
                }
              l(p.legendText) && (p.legendText = p.name);
            }
          }
          true === this.reversed && t2.reverse();
          if (0 < t2.length) {
            p = null;
            f = u = v3 = 0;
            u = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, h) : this.itemMaxWidth = Math.min(this.itemWidth, h) : null !== this.itemMaxWidth ? Math.min(
              this.itemMaxWidth,
              h
            ) : this.itemMaxWidth = h;
            w = 0 === w ? 0.75 * this.lineHeight : w;
            u = (this.itemMaxWidth ? this.itemMaxWidth : u) - (w + g2);
            for (m = 0; m < t2.length; m++) {
              q = t2[m];
              r2 = u;
              if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType)
                r2 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= n || "undefined" === typeof n || 0 >= r2 || "undefined" === typeof r2))
                if ("horizontal" === this.orientation) {
                  q.textBlock = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: r2,
                    maxHeight: this.itemWrap ? n : this.lineHeight,
                    angle: 0,
                    text: q.text,
                    textAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "middle"
                  });
                  q.textBlock.measureText();
                  null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + g2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                  if (!p || p.width + Math.round(q.textBlock.width + w + g2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > h)
                    p = { items: [], width: 0 }, k.push(p), this.height += f, f = 0;
                  f = Math.max(f, q.textBlock.height ? q.textBlock.height : this.lineHeight);
                  q.textBlock.x = p.width;
                  q.textBlock.y = 0;
                  p.width += Math.round(q.textBlock.width + w + g2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                  p.items.push(q);
                  this.width = Math.max(p.width, this.width);
                } else
                  q.textBlock = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: u,
                    maxHeight: true === this.itemWrap ? n : 1.5 * this.fontSize,
                    angle: 0,
                    text: q.text,
                    textAlign: "left",
                    fontSize: this.fontSize,
                    fontFamily: this.fontFamily,
                    fontWeight: this.fontWeight,
                    fontColor: this.fontColor,
                    fontStyle: this.fontStyle,
                    textBaseline: "middle"
                  }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + g2 + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < n - this.lineHeight ? (p = { items: [], width: 0 }, k.push(p)) : (p = k[v3], v3 = (v3 + 1) % k.length), p && (this.height += q.textBlock.height ? q.textBlock.height : this.lineHeight, q.textBlock.x = p.width, q.textBlock.y = 0, p.width += Math.round(q.textBlock.width + w + g2 + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)), p.items.push(q), this.width = Math.max(p.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + f;
            this.height = Math.min(n, this.height);
            this.width = Math.min(h, this.width);
          }
          "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
          this.items = t2;
          for (m = 0; m < this.items.length; m++)
            q = t2[m], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: m, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex };
          this.markerSize = w;
          this.rows = k;
          0 < t2.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
          this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
        };
        T.prototype.render = function() {
          var a = this.bounds.x1, d = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, h = this.markerSize, n = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var g2 = 0, l2 = 0; l2 < n.length; l2++) {
            for (var k = n[l2], m = 0, p = 0; p < k.items.length; p++) {
              var q = k.items[p], f = q.textBlock.x + a + (0 === p ? 0.2 * h : this.horizontalSpacing), t2 = d + g2, r2 = f;
              this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(f - 0.1 * this.lineHeight, t2 + this.lineHeight / 2), this.ctx.lineTo(f + 0.85 * this.lineHeight, t2 + this.lineHeight / 2), this.ctx.stroke(), r2 -= 0.1 * this.lineHeight;
              if ("error" === q.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = h / 8;
                this.ctx.beginPath();
                var y = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = t2 + 0.15 * this.lineHeight, v3 = 0.7 * this.lineHeight, u = v3 + 0.02 * this.lineHeight;
                this.ctx.moveTo(y, s);
                this.ctx.lineTo(y + v3, s);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y + v3 / 2, s);
                this.ctx.lineTo(y + v3 / 2, s + u);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(y, s + u);
                this.ctx.lineTo(y + v3, s + u);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              aa.drawMarker(f + h / 2, t2 + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
              q.textBlock.x = f + c + h;
              if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType)
                q.textBlock.x += 0.1 * this.lineHeight;
              q.textBlock.y = Math.round(t2 + this.lineHeight / 2);
              q.textBlock.render(true);
              this.ctx.restore();
              m = 0 < p ? Math.max(m, q.textBlock.height ? q.textBlock.height : this.lineHeight) : q.textBlock.height ? q.textBlock.height : this.lineHeight;
              this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              f = U(q.id);
              this.ghostCtx.fillStyle = f;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(r2, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - r2, q.textBlock.height ? q.textBlock.height : this.lineHeight);
              q.x1 = this.chart._eventManager.objectMap[q.id].x1 = r2;
              q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
              q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
              q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + (q.textBlock.height ? q.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            g2 += m;
          }
        };
        oa(P2, Y);
        P2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
            return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
            return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        P2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
            return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
            return "triangle";
          if ("error" === a)
            return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        P2.prototype.getDataPointAtX = function(a, d) {
          if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
          var c = { dataPoint: null, distance: Infinity, index: NaN }, b = null, e = 0, h = 0, n = 1, g2 = Infinity, l2 = 0, k = 0, m = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (m = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), m = 1 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (m = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, m = 0 < m ? Math.min(Math.max((this.dataPoints.length - 1) / m * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            h = 0 < n ? m + e : m - e;
            if (0 <= h && h < this.dataPoints.length) {
              var b = this.dataPoints[h], p = this.axisX && this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
              p < c.distance && (c.dataPoint = b, c.distance = p, c.index = h);
              b = p;
              b <= g2 ? g2 = b : 0 < n ? l2++ : k++;
              if (1e3 < l2 && 1e3 < k)
                break;
            } else if (0 > m - e && m + e >= this.dataPoints.length)
              break;
            -1 === n ? (e++, n = 1) : n = -1;
          }
          return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c;
        };
        P2.prototype.getDataPointAtXY = function(a, d, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2)
            return null;
          c = c || false;
          var b = [], e = 0, h = 0, n = 1, g2 = false, t2 = Infinity, k = 0, m = 0, p = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement)
            if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d }), this.axisX.logarithmic)
              var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            else
              q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            h = 0 < n ? p + e : p - e;
            if (0 <= h && h < this.dataPoints.length) {
              var q = this.chart._eventManager.objectMap[this.dataPointIds[h]], f = this.dataPoints[h], r2 = null;
              if (q) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= q.x1 && (a <= q.x2 && d >= q.y1 && d <= q.y2) && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d)) }), g2 = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var w = ma("markerSize", f, this) || 4, y = c ? 20 : w, r2 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                    r2 <= y && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: r2 });
                    q = Math.abs(q.x1 - a);
                    q <= t2 ? t2 = q : 0 < n ? k++ : m++;
                    r2 <= w / 2 && (g2 = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    w = ma("markerSize", f, this) || 4;
                    y = c ? 20 : w;
                    r2 = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)));
                    r2 <= y && b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: r2 });
                    q = Math.abs(q.x1 - a);
                    q <= t2 ? t2 = q : 0 < n ? k++ : m++;
                    r2 <= w / 2 && (g2 = true);
                    break;
                  case "bubble":
                    w = q.size;
                    r2 = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                    r2 <= w / 2 && (b.push({
                      dataPoint: f,
                      dataPointIndex: h,
                      dataSeries: this,
                      distance: r2
                    }), g2 = true);
                    break;
                  case "pie":
                  case "doughnut":
                    w = q.center;
                    y = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                    r2 = Math.sqrt(Math.pow(w.x - a, 2) + Math.pow(w.y - d, 2));
                    r2 < q.radius && r2 > y && (r2 = Math.atan2(d - w.y, a - w.x), 0 > r2 && (r2 += 2 * Math.PI), r2 = Number(((180 * (r2 / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), y = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === y && 1 < q.endAngle && (y = 360), w >= y && (0 !== f.y && !l(f.y)) && (y += 360, r2 < w && (r2 += 360)), r2 > w && r2 < y && (b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: 0 }), g2 = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    r2 = q.funnelSection;
                    d > r2.y1 && d < r2.y4 && (r2.y6 ? d > r2.y6 ? (h = r2.x6 + (r2.x5 - r2.x6) / (r2.y5 - r2.y6) * (d - r2.y6), r2 = r2.x3 + (r2.x4 - r2.x3) / (r2.y4 - r2.y3) * (d - r2.y3)) : (h = r2.x1 + (r2.x6 - r2.x1) / (r2.y6 - r2.y1) * (d - r2.y1), r2 = r2.x2 + (r2.x3 - r2.x2) / (r2.y3 - r2.y2) * (d - r2.y2)) : (h = r2.x1 + (r2.x4 - r2.x1) / (r2.y4 - r2.y1) * (d - r2.y1), r2 = r2.x2 + (r2.x3 - r2.x2) / (r2.y3 - r2.y2) * (d - r2.y2)), a > h && a < r2 && (b.push({ dataPoint: f, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), g2 = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), g2 = true;
                    break;
                  case "candlestick":
                    if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), g2 = true;
                    break;
                  case "ohlc":
                    if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2)
                      b.push({ dataPoint: f, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), g2 = true;
                }
                if (g2 || 1e3 < k && 1e3 < m)
                  break;
              }
            } else if (0 > p - e && p + e >= this.dataPoints.length)
              break;
            -1 === n ? (e++, n = 1) : n = -1;
          }
          a = null;
          for (d = 0; d < b.length; d++)
            a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
          return a;
        };
        P2.prototype.getMarkerProperties = function(a, d, c, b) {
          var e = this.dataPoints, h = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], n = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, g2 = l(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness, r2 = e[a].markerType ? e[a].markerType : this.markerType;
          a = l(e[a].markerSize) ? this.markerSize : e[a].markerSize;
          return { x: d, y: c, ctx: b, type: r2, size: a, color: h, borderColor: n, borderThickness: g2 };
        };
        oa(A, Y);
        A.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var d = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = A.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c)
                b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Sa);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        A.prototype.createLabels = function() {
          var a, d, c = 0, b = 0, e, h = 0, n = 0, b = 0, b = this.interval, g2 = 0, t2, k = 0.6 * this.chart.height, m;
          a = false;
          var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], q = p.length ? l(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            e = this.viewportMaximum;
            if (this.labels) {
              a = Math.ceil(b);
              for (var b = Math.ceil(this.intervalStartPosition), f = false, c = b; c < this.viewportMaximum; c += a)
                if (this.labels[c])
                  f = true;
                else {
                  f = false;
                  break;
                }
              f && (this.interval = a, this.intervalStartPosition = b);
            }
            if (this.logarithmic && !this.equidistantInterval)
              for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, f = q; b < this.logLabelValues.length; b++)
                if (c = this.logLabelValues[b], c < this.viewportMinimum)
                  b++;
                else {
                  for (; f < p.length && c > p[f].endValue; f++)
                    ;
                  a = f < p.length && c >= p[f].startValue && c <= p[f].endValue;
                  m = c;
                  a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ha(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: h,
                    maxHeight: n,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    cornerRadius: this.labelCornerRadius,
                    textAlign: this.labelTextAlign,
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: this.labelBorderThickness
                  }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                }
            f = q;
            for (c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
              for (; f < p.length && c > p[f].endValue; f++)
                ;
              a = f < p.length && c >= p[f].startValue && c <= p[f].endValue;
              m = c;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : ha(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                maxHeight: n,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
            }
          } else
            for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Za(new Date(this.viewportMaximum), this.interval, this.intervalType), f = q, c = this.intervalStartPosition; c < e; Za(c, b, this.intervalType)) {
              for (a = c.getTime(); f < p.length && a > p[f].endValue; f++)
                ;
              m = a;
              a = f < p.length && a >= p[f].startValue && a <= p[f].endValue;
              a || (a = this.labelFormatter ? this.labelFormatter({
                chart: this.chart,
                axis: this.options,
                value: new Date(m),
                label: this.labels[m] ? this.labels[m] : null
              }) : "axisX" === this.type && this.labels[m] ? this.labels[m] : Ca(m, this.valueFormatString, this.chart._cultureInfo), a = new ka(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: h,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxHeight: n,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: m, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }));
            }
          if ("bottom" === this._position || "top" === this._position)
            g2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * R[this.intervalType + "Duration"] * this.interval, h = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position)
            g2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * R[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            a.maxWidth = h;
            a.maxHeight = n;
            var v3 = a.measureText();
            t2 = v3.height;
          }
          e = [];
          q = p = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (l(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
              if (h = Math.floor(0.9 * g2), q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = n;
                this.sessionVariables.labelAngle = this.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    for (var w, f = a.text.split(" "), b = 0; b < f.length; b++)
                      m = f[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, m = this.ctx.measureText(m), m.width > q && (w = c, q = m.width);
                  }
                c = 0;
                for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    v3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        d = this._labels[f].textBlock;
                        d = d.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (n - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    if (l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                      if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = (k - (t2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !l(this.options.labelWrap))
                        this.labelWrap ? l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), m), this.sessionVariables.labelWrap = this.labelWrap, d && v3.width + d.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle) : l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelMaxWidth = h, d && v3.width + d.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelWrap = this.labelWrap);
                      else {
                        if (l(this.options.labelWrap)) {
                          if (!l(this.options.labelMaxWidth))
                            this.options.labelMaxWidth < h ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = n);
                          else if (!l(d)) {
                            if (b = v3.width + d.width >> 0, f = this.labelFontSize, q < h)
                              b - 2 * h > p && (p = b - 2 * h, b >= 2 * h && b < 2.2 * h ? (this.sessionVariables.labelMaxWidth = h, l(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * h && b < 2.8 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = f) : b >= 2.8 * h && b < 3.2 * h ? (this.sessionVariables.labelMaxWidth = Math.max(h, q), this.sessionVariables.labelWrap = true, l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * h && b < 3.6 * h ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * h && b < 5 * h ? (l(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m) : b > 5 * h && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelFontSize = f, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelAngle = this.labelAngle));
                            else if (w === c && (0 === w && q + this._labels[w + 1].textBlock.measureText().width - 2 * h > p || w === this._labels.length - 1 && q + this._labels[w - 1].textBlock.measureText().width - 2 * h > p || 0 < w && w < this._labels.length - 1 && q + this._labels[w + 1].textBlock.measureText().width - 2 * h > p && q + this._labels[w - 1].textBlock.measureText().width - 2 * h > p))
                              p = 0 === w ? q + this._labels[w + 1].textBlock.measureText().width - 2 * h : q + this._labels[w - 1].textBlock.measureText().width - 2 * h, this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = m;
                            else if (0 === p)
                              for (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++)
                                a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), m), v3 = a.measureText(), b < this._labels.length - 1 && (f = b + 1, d = this._labels[f].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, q), m), d = d.measureText(), v3.width + d.width >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                          }
                        }
                      }
                    else
                      (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : Math.min((b - h * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), m = 0 != this.labelAngle ? (k - (t2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : h, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - m * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelMaxHeight = n) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = m, this.sessionVariables.labelMaxHeight = b < 0.9 * g2 ? 0.9 * g2 : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m) : (l(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = n);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = n : this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
              if (h = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, n = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = h;
                this.sessionVariables.labelMaxHeight = n;
                this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    v3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        d = this._labels[f].textBlock;
                        d = d.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    b = h * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (n - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? l(this.options.labelWrap) ? l(this.options.labelWrap) && (l(this.options.labelMaxWidth) ? l(d) || (g2 = v3.height + d.height >> 0, g2 - 2 * n > q && (q = g2 - 2 * n, g2 >= 2 * n && g2 < 2.4 * n ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : g2 >= 2.4 * n && g2 < 2.8 * n ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : g2 >= 2.8 * n && g2 < 3.2 * n ? (this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelWrap = true, l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : g2 >= 3.2 * n && g2 < 3.6 * n ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : g2 > 3.6 * n && g2 < 10 * n ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : g2 > 10 * n && g2 < 50 * n && (l(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelMaxWidth = h, this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = n, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = n) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min(
                      (b - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)),
                      n
                    ), l(this.options.labelWrap)) ? l(this.options.labelWrap) && (this.labelWrap && !l(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : b, l(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? n : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = h) : (this.sessionVariables.labelMaxHeight = n, l(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (l(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = n), c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth) ? l(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = h : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = l(this.options.labelFontSize) ? l(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = l(this.options.labelAngle) ? l(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = l(this.options.labelWrap) ? l(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = n : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var h = this.stripLines[c], y;
            if ("outside" === h.labelPlacement) {
              n = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position)
                l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
              if ("left" === this._position || "right" === this._position)
                l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight) ? y = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
              l(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
            } else
              n = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, y = l(h.options.labelWrap) || h.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, l(h.labelBackgroundColor) && (l(h.startValue) && 0 !== h.startValue ? h.labelBackgroundColor = r ? "transparent" : null : h.labelBackgroundColor = "#EEEEEE");
            h.labelFontSize = "outside" === h.labelPlacement && l(h.options.labelFontSize) ? this.labelFontSize : h.labelFontSize;
            h.labelFontFamily = "outside" === h.labelPlacement && l(h.options.labelFontFamily) ? this.labelFontFamily : h.labelFontFamily;
            h.labelFontWeight = "outside" === h.labelPlacement && l(h.options.labelFontWeight) ? this.labelFontWeight : h.labelFontWeight;
            h.labelFontStyle = "outside" === h.labelPlacement && l(h.options.labelFontStyle) ? this.labelFontStyle : h.labelFontStyle;
            a = new ka(this.ctx, {
              x: 0,
              y: 0,
              backgroundColor: h.labelBackgroundColor,
              borderColor: h.labelBorderColor,
              borderThickness: h.labelBorderThickness,
              cornerRadius: h.labelCornerRadius,
              maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : n,
              maxHeight: y,
              angle: this.labelAngle,
              text: h.labelFormatter ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h }) : h.label,
              textAlign: h.labelTextAlign,
              fontSize: h.labelFontSize,
              fontFamily: h.labelFontFamily,
              fontWeight: h.labelFontWeight,
              fontColor: h.labelFontColor || h.color,
              fontStyle: h.labelFontStyle,
              textBaseline: "middle"
            });
            this._stripLineLabels.push({
              position: h.value,
              textBlock: a,
              effectiveHeight: null,
              stripLine: h
            });
          }
        };
        A.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, d = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (d = 0; d < this._labels.length; d++) {
                var b = this._labels[d].textBlock, b = b.measureText(), e = 0, e = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (this.labelEffectiveWidth = a = e);
                this._labels[d].effectiveWidth = e;
              }
            for (d = 0; d < this._stripLineLabels.length; d++)
              "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[d].textBlock, b = b.measureText(), e = 0 === this.labelAngle ? b.width : b.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + b.height * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (e += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0), a < e && (a = e), this.stripLineLabelEffectiveWidth = this._stripLineLabels[d].effectiveWidth = e);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
        };
        A.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var d, c = 0, b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (c = 0; c < this._labels.length; c++) {
                d = this._labels[c].textBlock;
                d = d.measureText();
                var e = 0, e = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + d.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < e && (this.labelEffectiveHeight = a = e);
                this._labels[c].effectiveHeight = e;
              }
            for (c = 0; c < this._stripLineLabels.length; c++)
              "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock, d = d.measureText(), e = 0 === this.labelAngle ? d.height : d.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + d.height * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (e += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0), a < e && (a = e), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = e);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
        };
        A.setLayout = function(a, d, c, b, e, h) {
          var n, g2, r2, k, m = a[0] ? a[0].chart : d[0].chart, p = m.isNavigator ? 0 : 10, q = m._axes;
          if (a && 0 < a.length)
            for (var f = 0; f < a.length; f++)
              a[f] && a[f].calculateAxisParameters();
          if (d && 0 < d.length)
            for (f = 0; f < d.length; f++)
              d[f].calculateAxisParameters();
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateAxisParameters();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateAxisParameters();
          for (f = 0; f < q.length; f++)
            if (q[f] && q[f].scaleBreaks && q[f].scaleBreaks._appliedBreaks.length)
              for (var t2 = q[f].scaleBreaks._appliedBreaks, w = 0; w < t2.length && !(t2[w].startValue > q[f].viewportMaximum); w++)
                t2[w].endValue < q[f].viewportMinimum || (l(q[f].scaleBreaks.firstBreakIndex) && (q[f].scaleBreaks.firstBreakIndex = w), t2[w].startValue >= q[f].viewPortMinimum && (q[f].scaleBreaks.lastBreakIndex = w));
          for (var y = w = 0, s = 0, v3 = 0, u = 0, A2 = 0, z3 = 0, B, G2, I2 = g2 = 0, J2, L, M, t2 = J2 = L = M = false, f = 0; f < q.length; f++)
            q[f] && q[f].title && (q[f]._titleTextBlock = new ka(q[f].ctx, { text: q[f].title, fontSize: q[f].titleFontSize, fontFamily: q[f].titleFontFamily, fontWeight: q[f].titleFontWeight, fontColor: q[f].titleFontColor, fontStyle: q[f].titleFontStyle, borderColor: q[f].titleBorderColor, borderThickness: q[f].titleBorderThickness, backgroundColor: q[f].titleBackgroundColor, cornerRadius: q[f].titleCornerRadius, textBaseline: "middle", textAlign: q[f].titleTextAlign }));
          for (f = 0; f < q.length; f++)
            if (q[f].title)
              switch (q[f]._position) {
                case "left":
                  q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || h.height;
                  q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * h.width : 1.5 * q[f].titleFontSize;
                  q[f]._titleTextBlock.angle = -90;
                  break;
                case "right":
                  q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || h.height;
                  q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * h.width : 1.5 * q[f].titleFontSize;
                  q[f]._titleTextBlock.angle = 90;
                  break;
                default:
                  q[f]._titleTextBlock.maxWidth = q[f].titleMaxWidth || h.width, q[f]._titleTextBlock.maxHeight = q[f].titleWrap ? 0.8 * h.height : 1.5 * q[f].titleFontSize, q[f]._titleTextBlock.angle = 0;
              }
          if ("normal" === e) {
            for (var v3 = [], u = [], A2 = [], z3 = [], Q2 = [], R2 = [], N2 = [], P3 = []; 4 > w; ) {
              var F = 0, T2 = 0, U2 = 0, V3 = 0, Y2 = e = 0, O = 0, $3 = 0, X3 = 0, Z3 = 0, S = 0, aa2 = 0;
              if (c && 0 < c.length)
                for (A2 = [], f = S = 0; f < c.length; f++)
                  A2.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)), S += A2[f], O += c[f] && !m.isNavigator ? c[f].margin : 0;
              else
                A2.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              N2.push(A2);
              if (b && 0 < b.length)
                for (z3 = [], f = aa2 = 0; f < b.length; f++)
                  z3.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)), aa2 += z3[f], $3 += b[f] ? b[f].margin : 0;
              else
                z3.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              P3.push(z3);
              n = Math.round(h.x1 + S + O);
              r2 = Math.round(h.x2 - aa2 - $3 > m.width - p ? m.width - p : h.x2 - aa2 - $3);
              if (a && 0 < a.length)
                for (v3 = [], f = X3 = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates = {}), a[f].lineCoordinates.width = Math.abs(r2 - n), a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width), v3.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)), X3 += v3[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
              else
                v3.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              Q2.push(v3);
              if (d && 0 < d.length)
                for (u = [], f = Z3 = 0; f < d.length; f++)
                  d[f] && (d[f].lineCoordinates = {}), d[f].lineCoordinates.width = Math.abs(r2 - n), d[f].title && (d[f]._titleTextBlock.maxWidth = 0 < d[f].titleMaxWidth && d[f].titleMaxWidth < d[f].lineCoordinates.width ? d[f].titleMaxWidth : d[f].lineCoordinates.width), u.push(Math.ceil(d[f] ? d[f].createLabelsAndCalculateHeight() : 0)), Z3 += u[f], Y2 += d[f] && !m.isNavigator ? d[f].margin : 0;
              else
                u.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
              R2.push(u);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates.x1 = n, r2 = Math.round(h.x2 - aa2 - $3 > m.width - p ? m.width - p : h.x2 - aa2 - $3), a[f]._labels && 1 < a[f]._labels.length && (g2 = k = 0, k = a[f]._labels[1], g2 = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = g2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(g2.textBlock.angle)) + (g2.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(g2.textBlock.angle))), !a[f] || (!a[f].labelAutoFit || l(B) || l(G2) || m.isNavigator || m.stockChart) || (g2 = 0, 0 < a[f].labelAngle ? G2 + s > r2 && (g2 += 0 < a[f].labelAngle ? G2 + s - r2 - aa2 : 0) : 0 > a[f].labelAngle ? B - y < n && B - y < a[f].viewportMinimum && (I2 = n - (O + a[f].tickLength + A2 + B - y + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (G2 + s > r2 && (g2 = G2 + s / 2 - r2 - aa2), B - y < n && B - y < a[f].viewportMinimum && (I2 = n - O - a[f].tickLength - A2 - B + y / 2)), a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < g2 ? r2 -= g2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < I2 ? n += I2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < I2 && (n += I2), 0 < g2 && (r2 -= g2))), m.panEnabled ? X3 = l(m.sessionVariables.axisX.height) || m.stockChart ? m.sessionVariables.axisX.height = X3 : m.sessionVariables.axisX.height : m.sessionVariables.axisX.height = X3, g2 = Math.round(h.y2 - X3 - e + F), k = Math.round(h.y2), a[f].lineCoordinates.x2 = r2, a[f].lineCoordinates.width = r2 - n, a[f].lineCoordinates.y1 = g2, a[f].lineCoordinates.y2 = g2, "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.y1 = a[0].lineCoordinates.y2 + F + (a[f].labelEffectiveHeight || 0), a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.y1 += a[f].tickLength, a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), a[f].bounds = { x1: n, y1: g2, x2: r2, y2: k - (X3 + e - v3[f] - F), width: r2 - n }, a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1), F += v3[f] + a[f].margin;
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++)
                  d[f].lineCoordinates.x1 = Math.round(h.x1 + S + O), d[f].lineCoordinates.x2 = Math.round(h.x2 - aa2 - $3 > m.width - p ? m.width - p : h.x2 - aa2 - $3), d[f].lineCoordinates.width = Math.abs(r2 - n), d[f]._labels && 1 < d[f]._labels.length && (k = d[f]._labels[1], g2 = "dateTime" === d[f].valueType ? d[f]._labels[d[f]._labels.length - 2] : d[f]._labels[d[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = g2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(g2.textBlock.angle)) + (g2.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(g2.textBlock.angle))), m.panEnabled ? Z3 = l(m.sessionVariables.axisX2.height) || m.stockChart ? m.sessionVariables.axisX2.height = Z3 : m.sessionVariables.axisX2.height : m.sessionVariables.axisX2.height = Z3, g2 = Math.round(h.y1), k = d[f].lineCoordinates.y1 = g2 + Z3 + Y2 - T2, d[f].lineCoordinates.y2 = g2, "inside" === d[f].labelPlacement && 0 < f && (d[f].lineCoordinates.y1 = d[0].lineCoordinates.y1 - T2 - (d[f].labelEffectiveHeight || 0) - 5), "inside" === d[f].tickPlacement && 0 < f && (d[f].lineCoordinates.y1 -= d[f].tickLength), d[f].bounds = { x1: n, y1: g2 + (Z3 + Y2 - ("inside" === d[f].labelPlacement && 0 === f ? u[f] - 5 : u[f]) - T2), x2: r2, y2: k, width: r2 - n }, d[f].bounds.height = d[f].bounds.y2 - d[f].bounds.y1, T2 += ("inside" === d[f].labelPlacement && 0 === f ? u[f] - 5 : u[f]) + d[f].margin;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  O = m.isNavigator ? 0 : 10, c[f] && (n = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), O = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : p, g2 = Math.round(h.y1 + Z3 + Y2 < Math.max(O, p) ? Math.max(O, p) : h.y1 + Z3 + Y2), r2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), O = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : p, k = Math.round(h.y2 - X3 - e - O), c[f].lineCoordinates = { x1: n - U2, y1: g2, x2: r2 - U2, y2: k, height: Math.abs(k - g2) }, "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.x1 = c[0].lineCoordinates.x1 - U2 - (c[f].labelEffectiveWidth || 0) - 5, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.x1 -= c[f].tickLength, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), c[f].bounds = { x1: n - (("inside" === c[f].labelPlacement && 0 === f ? A2[f] - 5 : A2[f]) + U2), y1: g2, x2: r2 - U2, y2: k, height: k - g2 }, c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height), U2 += ("inside" === c[f].labelPlacement && 0 === f ? A2[f] - 5 : A2[f]) + c[f].margin);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && (n = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), r2 = Math.round(n), O = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2 : 0, g2 = Math.round(h.y1 + Z3 + Y2 < Math.max(
                    O,
                    p
                  ) ? Math.max(O, p) : h.y1 + Z3 + Y2), O = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : 0, k = Math.round(h.y2 - (X3 + e + O)), b[f].lineCoordinates = { x1: n + V3, y1: g2, x2: n + V3, y2: k, height: Math.abs(k - g2) }, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.x1 = b[0].lineCoordinates.x2 + V3 + (b[f].labelEffectiveWidth || 0) + 5, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.x1 += b[f].tickLength, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), b[f].bounds = { x1: n + V3, y1: g2, x2: r2 + (("inside" === b[f].labelPlacement && 0 === f ? z3[f] - 5 : z3[f]) + V3), y2: k, height: k - g2 }, b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height), V3 += ("inside" === b[f].labelPlacement && 0 === f ? z3[f] - 5 : z3[f]) + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].calculateValueToPixelConversionParameters(), a[f].calculateBreaksSizeInValues(), a[f]._labels && 1 < a[f]._labels.length && (B = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1, n = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position, n = a[f].getApparentDifference(a[f].viewportMinimum, n), G2 = a[f].logarithmic ? (1 < n ? Math.log(n) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < n ? n * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++)
                  d[f].calculateValueToPixelConversionParameters(), d[f].calculateBreaksSizeInValues(), d[f]._labels && 1 < d[f]._labels.length && (B = (d[f].logarithmic ? Math.log(d[f]._labels[1].position / d[f].viewportMinimum) / d[f].conversionParameters.lnLogarithmBase : d[f]._labels[1].position - d[f].viewportMinimum) * Math.abs(d[f].conversionParameters.pixelPerUnit) + d[f].lineCoordinates.x1, n = d[f]._labels[d[f]._labels.length - ("dateTime" === d[f].valueType ? 2 : 1)].position, n = d[f].getApparentDifference(d[f].viewportMinimum, n), G2 = d[f].logarithmic ? (1 < n ? Math.log(n) / d[f].conversionParameters.lnLogarithmBase * Math.abs(d[f].conversionParameters.pixelPerUnit) : 0) + d[f].lineCoordinates.x1 : (0 < n ? n * Math.abs(d[f].conversionParameters.pixelPerUnit) : 0) + d[f].lineCoordinates.x1);
              for (f = 0; f < q.length; f++)
                "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(), q[f].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    t2 = Q2[w - 1][f] === Q2[w][f] ? true : false;
                else
                  t2 = true;
                if (d && 0 < d.length)
                  for (f = 0; f < d.length; f++)
                    J2 = R2[w - 1][f] === R2[w][f] ? true : false;
                else
                  J2 = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    L = N2[w - 1][f] === N2[w][f] ? true : false;
                else
                  L = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    M = P3[w - 1][f] === P3[w][f] ? true : false;
                else
                  M = true;
              }
              if (t2 && J2 && L && M)
                break;
              w++;
            }
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++)
                d[f].calculateStripLinesThicknessInValues(), d[f].calculateBreaksInPixels();
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
          } else {
            p = [];
            B = [];
            I2 = [];
            y = [];
            G2 = [];
            s = [];
            Q2 = [];
            for (R2 = []; 4 > w; ) {
              X3 = V3 = U2 = $3 = O = Y2 = e = P3 = N2 = F = Z3 = 0;
              if (a && 0 < a.length)
                for (I2 = [], f = V3 = 0; f < a.length; f++)
                  I2.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)), V3 += I2[f], e += a[f] && !m.isNavigator ? a[f].margin : 0;
              else
                I2.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              Q2.push(I2);
              if (d && 0 < d.length)
                for (y = [], f = X3 = 0; f < d.length; f++)
                  y.push(Math.ceil(d[f] ? d[f].createLabelsAndCalculateWidth() : 0)), X3 += y[f], Y2 += d[f] ? d[f].margin : 0;
              else
                y.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
              R2.push(y);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  c[f].lineCoordinates = {}, n = Math.round(h.x1 + V3 + e), r2 = Math.round(h.x2 - X3 - Y2 > m.width - 10 ? m.width - 10 : h.x2 - X3 - Y2), c[f].labelAutoFit && !l(v3) && (0 < !a.length && (n = 0 > c[f].labelAngle ? Math.max(n, v3) : 0 === c[f].labelAngle ? Math.max(n, v3 / 2) : n), 0 < !d.length && (r2 = 0 < c[f].labelAngle ? r2 - u / 2 : 0 === c[f].labelAngle ? r2 - u / 2 : r2)), c[f].lineCoordinates.x1 = n, c[f].lineCoordinates.x2 = r2, c[f].lineCoordinates.width = Math.abs(r2 - n), c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f].lineCoordinates = {}, n = Math.round(h.x1 + V3 + e), r2 = Math.round(h.x2 - X3 - Y2 > b[f].chart.width - 10 ? b[f].chart.width - 10 : h.x2 - X3 - Y2), b[f] && b[f].labelAutoFit && !l(A2) && (0 < !a.length && (n = 0 < b[f].labelAngle ? Math.max(n, A2) : 0 === b[f].labelAngle ? Math.max(n, A2 / 2) : n), 0 < !d.length && (r2 -= z3 / 2)), b[f].lineCoordinates.x1 = n, b[f].lineCoordinates.x2 = r2, b[f].lineCoordinates.width = Math.abs(r2 - n), b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
              if (c && 0 < c.length)
                for (p = [], f = U2 = 0; f < c.length; f++)
                  p.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)), U2 += p[f] + c[f].margin, O += c[f].margin;
              else
                p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              G2.push(p);
              if (b && 0 < b.length)
                for (B = [], f = 0; f < b.length; f++)
                  B.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)), $3 += b[f].margin;
              else
                B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              s.push(B);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  0 < c[f]._labels.length && (k = c[f]._labels[0], g2 = c[f]._labels[c[f]._labels.length - 1], v3 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), u = g2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(g2.textBlock.angle)) + (g2.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(g2.textBlock.angle)));
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && 0 < b[f]._labels.length && (k = b[f]._labels[0], g2 = b[f]._labels[b[f]._labels.length - 1], A2 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), z3 = g2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(g2.textBlock.angle)) + (g2.textBlock.height - g2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(g2.textBlock.angle)));
              if (m.panEnabled)
                for (f = 0; f < c.length; f++)
                  p[f] = l(m.sessionVariables.axisY[f].height) ? m.sessionVariables.axisY[f].height = p[f] : m.sessionVariables.axisY[f].height;
              else
                for (f = 0; f < c.length; f++)
                  m.sessionVariables.axisY[f].height = p[f];
              if (c && 0 < c.length)
                for (f = c.length - 1; 0 <= f; f--)
                  g2 = Math.round(h.y2), k = Math.round(h.y2 > c[f].chart.height ? c[f].chart.height : h.y2), c[f].lineCoordinates.y1 = g2 - (p[f] + c[f].margin + Z3), c[f].lineCoordinates.y2 = g2 - (p[f] + c[f].margin + Z3), "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.y1 = c[f].lineCoordinates.y1 + p[f] - (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) - c[f].tickLength - (c[f].stripLineLabelEffectiveHeight || 0) - 5, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.y1 += c[f].tickLength, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), c[f].bounds = { x1: n, y1: g2 - (p[f] + Z3 + c[f].margin), x2: r2, y2: k - (Z3 + c[f].margin), width: r2 - n, height: p[f] }, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width), Z3 += p[f] + c[f].margin;
              if (b && 0 < b.length)
                for (f = b.length - 1; 0 <= f; f--)
                  b[f] && (g2 = Math.round(h.y1), k = Math.round(h.y1 + (B[f] + b[f].margin + F)), b[f].lineCoordinates.y1 = k, b[f].lineCoordinates.y2 = k, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.y1 = k - B[f] + (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) + b[f].tickLength + (b[f].stripLineLabelEffectiveHeight || 0), b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.y1 -= b[f].tickLength, b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), b[f].bounds = { x1: n, y1: g2 + (b[f].margin + F), x2: r2, y2: k, width: r2 - n }, b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width), F += B[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++) {
                  O = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                  n = Math.round(h.x1 + e);
                  g2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1) : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1;
                  r2 = Math.round(h.x1 + V3 + e);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U2 > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : h.y2 - U2) : h.y2 > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (O = 0; O < c.length; O++)
                      c[O] && c[O].labelAutoFit && (r2 = c[O].lineCoordinates.x1, n = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? r2 - V3 : n);
                  if (b && 0 < b.length)
                    for (O = 0; O < b.length; O++)
                      b[O] && b[O].labelAutoFit && (r2 = b[O].lineCoordinates.x1, n = r2 - V3);
                  a[f].lineCoordinates = { x1: r2 - N2, y1: g2, x2: r2 - N2, y2: k, height: Math.abs(k - g2) };
                  "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - (I2[f] - (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) + a[f].tickLength + (a[f].stripLineLabelEffectiveWidth || 0), a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.x1 -= a[f].tickLength, a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  a[f].bounds = { x1: r2 - (I2[f] + N2), y1: g2, x2: r2 - N2, y2: k, height: k - g2 };
                  a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                  a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                  a[f].calculateValueToPixelConversionParameters();
                  a[f].calculateBreaksSizeInValues();
                  N2 += I2[f] + a[f].margin;
                }
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++) {
                  O = d[f]._labels && 0 < d[f]._labels.length ? d[f]._labels[0].textBlock.fontSize / 2 : 0;
                  n = Math.round(h.x1 - e);
                  g2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1) : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1;
                  r2 = Math.round(h.x2 - X3 - Y2);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U2 > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : h.y2 - U2) : h.y2 > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : h.y2;
                  if (c && 0 < c.length)
                    for (O = 0; O < c.length; O++)
                      c[O] && c[O].labelAutoFit && (r2 = 0 > c[O].labelAngle ? Math.max(r2, v3) : 0 === c[O].labelAngle ? Math.max(r2, v3 / 2) : r2, n = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? r2 - X3 : n);
                  if (b && 0 < b.length)
                    for (O = 0; O < b.length; O++)
                      b[O] && b[O].labelAutoFit && (r2 = b[O].lineCoordinates.x2, n = r2 - X3);
                  d[f].lineCoordinates = { x1: r2 + P3, y1: g2, x2: r2 + P3, y2: k, height: Math.abs(k - g2) };
                  "inside" === d[f].labelPlacement && 0 < f && (d[f].lineCoordinates.x1 = d[f].lineCoordinates.x1 + (y[f] - (d[f]._titleTextBlock ? d[f]._titleTextBlock.height : 0) - 2) - d[f].tickLength - (d[f].stripLineLabelEffectiveWidth || 0), d[f].lineCoordinates.x2 = d[f].lineCoordinates.x1 + d[f].lineThickness / 2);
                  "inside" === d[f].tickPlacement && 0 < f && (d[f].lineCoordinates.x1 += d[f].tickLength, d[f].lineCoordinates.x2 = d[f].lineCoordinates.x1 + d[f].lineThickness / 2);
                  d[f].bounds = { x1: d[f].lineCoordinates.x1, y1: g2, x2: r2 + y[f] + P3, y2: k, width: r2 - n, height: k - g2 };
                  d[f].bounds.width = d[f].bounds.x2 - d[f].bounds.x1;
                  d[f].title && (d[f]._titleTextBlock.maxWidth = 0 < d[f].titleMaxWidth && d[f].titleMaxWidth < d[f].lineCoordinates.height ? d[f].titleMaxWidth : d[f].lineCoordinates.height);
                  d[f].calculateValueToPixelConversionParameters();
                  d[f].calculateBreaksSizeInValues();
                  P3 += y[f] + d[f].margin;
                }
              for (f = 0; f < q.length; f++)
                "axisY" === q[f].type && (q[f].calculateValueToPixelConversionParameters(), q[f].calculateBreaksSizeInValues());
              if (0 < w) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    t2 = Q2[w - 1][f] === Q2[w][f] ? true : false;
                else
                  t2 = true;
                if (d && 0 < d.length)
                  for (f = 0; f < d.length; f++)
                    J2 = R2[w - 1][f] === R2[w][f] ? true : false;
                else
                  J2 = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    L = G2[w - 1][f] === G2[w][f] ? true : false;
                else
                  L = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    M = s[w - 1][f] === s[w][f] ? true : false;
                else
                  M = true;
              }
              if (t2 && J2 && L && M)
                break;
              w++;
            }
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++)
                d[f].calculateStripLinesThicknessInValues(), d[f].calculateBreaksInPixels();
          }
        };
        A.render = function(a, d, c, b, e) {
          e = a[0] ? a[0].chart : d[0].chart;
          var h = e.ctx;
          e.alignVerticalAxes && e.alignVerticalAxes();
          h.save();
          h.beginPath();
          a && a.length && h.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2);
          d && d.length && h.rect(2, d[d.length - 1].bounds.y1, d[0].chart.width - 4, d[0].bounds.y2);
          h.clip();
          if (a && 0 < a.length)
            for (var g2 = 0; g2 < a.length; g2++)
              a[g2].renderLabelsTicksAndTitle();
          if (d && 0 < d.length)
            for (g2 = 0; g2 < d.length; g2++)
              d[g2].renderLabelsTicksAndTitle();
          h.restore();
          if (c && 0 < c.length)
            for (g2 = 0; g2 < c.length; g2++)
              c[g2].renderLabelsTicksAndTitle();
          if (b && 0 < b.length)
            for (g2 = 0; g2 < b.length; g2++)
              b[g2].renderLabelsTicksAndTitle();
          e.preparePlotArea();
          g2 = e.plotArea;
          h.save();
          h.beginPath();
          h.rect(g2.x1, g2.y1, Math.abs(g2.x2 - g2.x1), Math.abs(g2.y2 - g2.y1));
          h.clip();
          if (a && 0 < a.length)
            for (g2 = 0; g2 < a.length; g2++)
              a[g2].renderStripLinesOfThicknessType("value");
          if (d && 0 < d.length)
            for (g2 = 0; g2 < d.length; g2++)
              d[g2].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
            for (g2 = 0; g2 < c.length; g2++)
              c[g2].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
            for (g2 = 0; g2 < b.length; g2++)
              b[g2].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
            for (g2 = 0; g2 < a.length; g2++)
              a[g2].renderInterlacedColors();
          if (d && 0 < d.length)
            for (g2 = 0; g2 < d.length; g2++)
              d[g2].renderInterlacedColors();
          if (c && 0 < c.length)
            for (g2 = 0; g2 < c.length; g2++)
              c[g2].renderInterlacedColors();
          if (b && 0 < b.length)
            for (g2 = 0; g2 < b.length; g2++)
              b[g2].renderInterlacedColors();
          h.restore();
          if (a && 0 < a.length)
            for (g2 = 0; g2 < a.length; g2++)
              a[g2].renderGrid(), r && (a[g2].createMask(), a[g2].renderBreaksBackground());
          if (d && 0 < d.length)
            for (g2 = 0; g2 < d.length; g2++)
              d[g2].renderGrid(), r && (d[g2].createMask(), d[g2].renderBreaksBackground());
          if (c && 0 < c.length)
            for (g2 = 0; g2 < c.length; g2++)
              c[g2].renderGrid(), r && (c[g2].createMask(), c[g2].renderBreaksBackground());
          if (b && 0 < b.length)
            for (g2 = 0; g2 < b.length; g2++)
              b[g2].renderGrid(), r && (b[g2].createMask(), b[g2].renderBreaksBackground());
          if (a && 0 < a.length)
            for (g2 = 0; g2 < a.length; g2++)
              a[g2].renderAxisLine();
          if (d && 0 < d.length)
            for (g2 = 0; g2 < d.length; g2++)
              d[g2].renderAxisLine();
          if (c && 0 < c.length)
            for (g2 = 0; g2 < c.length; g2++)
              c[g2].renderAxisLine();
          if (b && 0 < b.length)
            for (g2 = 0; g2 < b.length; g2++)
              b[g2].renderAxisLine();
          h = false;
          if (a && 0 < a.length)
            for (g2 = 0; g2 < a.length; g2++)
              a[g2].renderStripLinesOfThicknessType("pixel"), a[g2].crosshair && a[g2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = a[g2].type);
          if (d && 0 < d.length)
            for (g2 = 0; g2 < d.length; g2++)
              d[g2].renderStripLinesOfThicknessType("pixel"), d[g2].crosshair && d[g2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = d[g2].type);
          if (c && 0 < c.length)
            for (g2 = 0; g2 < c.length; g2++)
              c[g2].renderStripLinesOfThicknessType("pixel"), c[g2].crosshair && c[g2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = c[g2].type);
          if (b && 0 < b.length)
            for (g2 = 0; g2 < b.length; g2++)
              b[g2].renderStripLinesOfThicknessType("pixel"), b[g2].crosshair && b[g2].crosshair.enabled && (h = true, e.clearedOverlayedCanvas = b[g2].type);
          if (h || !h && e.clearedOverlayedCanvas && 0 <= e.clearedOverlayedCanvas.indexOf("axis"))
            e.resetOverlayedCanvas(), e.renderCrosshairs(null, l(e.sessionVariables.crosshairShownByPixel) || e.sessionVariables.crosshairShownByPixel ? true : e.sessionVariables.crosshairShownByPixel);
        };
        A.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++)
            if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
              var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(d, c);
              this.stripLines[a].value = this.convertPixelToValue((this.convertValueToPixel(d) + this.convertValueToPixel(c)) / 2);
              this.stripLines[a].thickness = b;
              this.stripLines[a]._thicknessType = "value";
            }
        };
        A.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !l(this.scaleBreaks.options.spacing), e, h = 0; h < d.length; h++)
            e = b || !l(d[h].options.spacing), d[h].spacing = Ua(d[h].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, d[h].size = 0 > d[h].spacing ? 0 : Math.abs(d[h].spacing / c), this.logarithmic && (d[h].size = Math.pow(this.logarithmBase, d[h].size));
        };
        A.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++)
              a[d].endValue < this.conversionParameters.minimum || (l(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)));
          }
        };
        A.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, d = false, c = 0, b = 0, e = 1, h = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, g2, l2 = this.viewportMaximum, r2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  p = this._labels[k];
                  if (p.position < this.viewportMinimum)
                    break;
                  p.position > this.viewportMaximum || !(k === this._labels.length - 1 || g2 < Math.log(l2 / p.position) * r2 / e) || (c.push(p), l2 = p.position, g2 = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  p = this._labels[k], p.position < this.viewportMinimum || (g2 = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += g2);
                c > this.lineCoordinates.width * e && this.labelAutoFit && (d = true);
              }
            if ("left" === this._position || "right" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], m, l2 = this.viewportMaximum, r2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  p = this._labels[k];
                  if (p.position < this.viewportMinimum)
                    break;
                  p.position > this.viewportMaximum || !(k === this._labels.length - 1 || m < Math.log(l2 / p.position) * r2) || (c.push(p), l2 = p.position, m = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  p = this._labels[k], p.position < this.viewportMinimum || (m = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += m);
                b > this.lineCoordinates.height * e && this.labelAutoFit && (d = true);
              }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, p, q;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== h++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : 0 > this.labelAngle ? (q.x -= "inside" === this.labelPlacement ? 0 : p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle), q.y = "inside" === this.labelPlacement ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - (p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - p.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))) : (q.x -= "inside" === this.labelPlacement ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, q.y = "inside" === this.labelPlacement ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - (p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs(p.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))), p.textBlock.x = q.x, p.textBlock.y = q.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, q.y << 0);
                  a.ctx.lineTo(b2, q.y - a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== h++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : 0 > this.labelAngle ? (q.x -= "inside" === this.labelPlacement ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, q.y = "inside" === this.labelPlacement ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + p.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)) : (q.x -= "inside" === this.labelPlacement ? 0 : p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle), q.y = "inside" === this.labelPlacement ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + p.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle) : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle))), p.textBlock.x = q.x, p.textBlock.y = q.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, q.y << 0);
                  a.ctx.lineTo(b2, q.y + a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : 0 > this.labelAngle ? (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(q.x << 0, b2);
                  a.ctx.lineTo(q.x + a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== h++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : 0 > this.labelAngle ? (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - p.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + (p.textBlock.height - p.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(q.x << 0, b2);
                  a.ctx.lineTo(q.x - a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          h = 0;
          if ("inside" === this.labelPlacement)
            this.chart.addEventListener(
              "dataAnimationIterationEnd",
              function() {
                for (k = 0; k < a._labels.length; k++)
                  p = a._labels[k], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || d && 0 !== h++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(true), a.ctx.restore());
              },
              this
            );
          else
            for (k = 0; k < this._labels.length; k++)
              p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || d && 0 !== h++ % 2 && this.labelAutoFit) || p.textBlock.render(true);
        };
        A.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, d, c, b = this.chart.plotArea, e = 0;
          d = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = false) : d = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = false) : d = true;
          a.beginPath();
        };
        A.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var d = this, c, b, e = 0, h = 0, g2 = false;
            b = false;
            for (var r2 = [], t2 = [], k = false, m, e = 0; e < this.stripLines.length; e++) {
              var p = this.stripLines[e];
              p._thicknessType === a && ("pixel" === a && (p.value < this.viewportMinimum || p.value > this.viewportMaximum || l(p.value) || isNaN(this.range)) || "value" === a && (p.startValue <= this.viewportMinimum && p.endValue <= this.viewportMinimum || p.startValue >= this.viewportMaximum && p.endValue >= this.viewportMaximum || l(p.startValue) || l(p.endValue) || isNaN(this.range)) || r2.push(p));
            }
            for (e = 0; e < this._stripLineLabels.length; e++)
              if (p = this.stripLines[e], c = this._stripLineLabels[e], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range)))
                if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
                  p && (this.ctx.strokeStyle = p.color, this.ctx.lineWidth = "pixel" === p._thicknessType ? p.thickness : this.tickThickness, l(p.opacity) || "pixel" !== p._thicknessType || (m = p.ctx.globalAlpha, p.ctx.globalAlpha = p.opacity));
                  if ("bottom" === this._position) {
                    var q = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                    this.ctx.beginPath();
                    this.ctx.moveTo(q, b.y << 0);
                    this.ctx.lineTo(q, b.y + this.tickLength << 0);
                    this.ctx.stroke();
                    0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + 5 + (0 > this.labelAngle ? Math.abs(c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle)) : Math.abs(c.textBlock.fontSize / 2 * Math.cos(Math.PI / 180 * this.labelAngle))));
                  } else
                    "top" === this._position ? (q = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(q, b.y << 0), this.ctx.lineTo(q, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x -= 0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y -= this.tickLength + 2 + (0 < this.labelAngle ? (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle)))) : "left" === this._position ? (q = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, q), this.ctx.lineTo(b.x - this.tickLength << 0, q), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b.x -= this.tickLength + 5 + (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle) : c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle)))) : "right" === this._position && (q = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, q), this.ctx.lineTo(b.x + this.tickLength << 0, q), this.ctx.stroke(), b.x = 0 === this.labelAngle ? b.x + this.tickLength + 5 : this.tickLength + 5 + (0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) : b.x - c.textBlock.fontSize / 2 * Math.sin(Math.PI / 180 * this.labelAngle)));
                  m && (p.ctx.globalAlpha = m);
                  c.textBlock.x = b.x;
                  c.textBlock.y = b.y;
                  t2.push(c);
                } else
                  p._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.x1 ? l(p.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, l(p.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.x1 ? l(p.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, l(p.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.y1 ? l(p.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : l(p.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - p.thickness / 2 > this.chart.plotArea.y1 ? l(p.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : l(p.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + p.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, t2.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              for (e = 0; e < r2.length; e++)
                p = r2[e], p.showOnTop ? g2 || (g2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(
                    this.chart.plotArea.x1,
                    this.chart.plotArea.y1,
                    this.chart.plotArea.width,
                    this.chart.plotArea.height
                  );
                  this.ctx.clip();
                  for (h = 0; h < r2.length; h++)
                    p = r2[h], p.showOnTop && p.render();
                  this.ctx.restore();
                }, p)) : p.render();
              for (e = 0; e < t2.length; e++)
                c = t2[e], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  for (h = 0; h < t2.length; h++)
                    c = t2[h], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(true), d.ctx.restore());
                }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k)
              for (b = false, e = 0; e < t2.length; e++)
                c = t2[e], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        A.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(
            this.chart.plotArea.x1,
            this.chart.plotArea.y1,
            this.chart.plotArea.width,
            this.chart.plotArea.height
          ), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        A.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            r ? (this.maskCanvas = ta(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var d = 0; d < a.length; d++)
              a[d].endValue < this.viewportMinimum || (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        A.prototype.renderCrosshair = function(a, d) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, d);
        };
        A.prototype.showCrosshair = function(a) {
          l(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        A.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var d, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(I(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
              for (b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
              for (var b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
            a.restore();
          }
        };
        A.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, d = r ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), e, h;
          d.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (e = this.lineCoordinates.x2, h = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, h = this.lineCoordinates.x2);
              d.lineWidth = this.lineThickness;
              d.strokeStyle = this.lineColor ? this.lineColor : "black";
              d.setLineDash && d.setLineDash(I(this.lineDashType, this.lineThickness));
              var g2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              d.beginPath();
              if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
                if (l(this.scaleBreaks.lastBreakIndex))
                  e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                else
                  for (var t2 = this.scaleBreaks.firstBreakIndex; t2 <= this.scaleBreaks.lastBreakIndex; t2++)
                    d.moveTo(e, g2), d.lineTo(this.scaleBreaks._appliedBreaks[t2].startPixel + c, g2), e = this.scaleBreaks._appliedBreaks[t2].endPixel + b;
              e && (d.moveTo(e, g2), d.lineTo(h, g2));
              d.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (e = this.lineCoordinates.y1, h = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, h = this.lineCoordinates.y1);
            d.lineWidth = this.lineThickness;
            d.strokeStyle = this.lineColor;
            d.setLineDash && d.setLineDash(I(this.lineDashType, this.lineThickness));
            g2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            d.beginPath();
            if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
              if (l(this.scaleBreaks.lastBreakIndex))
                e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
              else
                for (t2 = this.scaleBreaks.firstBreakIndex; t2 <= this.scaleBreaks.lastBreakIndex; t2++)
                  d.moveTo(g2, e), d.lineTo(g2, this.scaleBreaks._appliedBreaks[t2].startPixel + b), e = this.scaleBreaks._appliedBreaks[t2].endPixel + c;
            e && (d.moveTo(g2, e), d.lineTo(g2, h));
            d.stroke();
          }
          r && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), d.clearRect(
            0,
            0,
            this.chart.width,
            this.chart.height
          ));
          d.restore();
        };
        A.prototype.getPixelCoordinatesOnAxis = function(a) {
          var d = {};
          if ("bottom" === this._position || "top" === this._position)
            d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position)
            d.y = this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
          return d;
        };
        A.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a)
            return null;
          var d = 0, c = 0, b, d = true, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (d)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                      d = false;
                    } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                      b /= e[c].startValue / this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                        break;
                      } else
                        a *= e[c].endValue / e[c].startValue / e[c].size;
                      b /= e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b > e[c].startValue / e[c - 1].endValue) {
                    b /= e[c].startValue / e[c - 1].endValue;
                    if (b < e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                      break;
                    } else
                      a *= e[c].endValue / e[c].startValue / e[c].size;
                    b /= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (d)
                    if (e[c].endValue > this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                      d = false;
                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                      b /= e[c].endValue / this.conversionParameters.minimum;
                      if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                      } else
                        a /= e[c].endValue / e[c].startValue / e[c].size;
                      b *= e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break;
                    } else
                      a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                  } else
                    break;
            d = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (d)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                      d = false;
                    } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                      b -= e[c].startValue - this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                        break;
                      } else
                        a += e[c].endValue - e[c].startValue - e[c].size;
                      b -= e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b > e[c].startValue - e[c - 1].endValue) {
                    b -= e[c].startValue - e[c - 1].endValue;
                    if (b < e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                      break;
                    } else
                      a += e[c].endValue - e[c].startValue - e[c].size;
                    b -= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (d)
                    if (e[c].endValue > this.conversionParameters.minimum)
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = false;
                    else if (b < e[c].endValue - this.conversionParameters.minimum) {
                      b -= e[c].endValue - this.conversionParameters.minimum;
                      if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                      } else
                        a -= e[c].endValue - e[c].startValue - e[c].size;
                      b += e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break;
                    } else
                      a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                  } else
                    break;
            d = this.conversionParameters.minimum + a;
          }
          return d;
        };
        A.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        A.prototype.getApparentDifference = function(a, d, c, b) {
          var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = l(c) ? d / a : c;
            for (var h = 0; h < e.length && !(d < e[h].startValue); h++)
              a > e[h].endValue || (a <= e[h].startValue && d >= e[h].endValue ? c = c / e[h].endValue * e[h].startValue * e[h].size : a >= e[h].startValue && d >= e[h].endValue ? c = c / e[h].endValue * a * Math.pow(e[h].size, Math.log(e[h].endValue / a) / Math.log(e[h].endValue / e[h].startValue)) : a <= e[h].startValue && d <= e[h].endValue ? c = c / d * e[h].startValue * Math.pow(e[h].size, Math.log(d / e[h].startValue) / Math.log(e[h].endValue / e[h].startValue)) : !b && (a > e[h].startValue && d < e[h].endValue) && (c = a * Math.pow(e[h].size, Math.log(d / a) / Math.log(e[h].endValue / e[h].startValue))));
          } else
            for (c = l(c) ? Math.abs(d - a) : c, h = 0; h < e.length && !(d < e[h].startValue); h++)
              a > e[h].endValue || (a <= e[h].startValue && d >= e[h].endValue ? c = c - e[h].endValue + e[h].startValue + e[h].size : a > e[h].startValue && d >= e[h].endValue ? c = c - e[h].endValue + a + e[h].size * (e[h].endValue - a) / (e[h].endValue - e[h].startValue) : a <= e[h].startValue && d < e[h].endValue ? c = c - d + e[h].startValue + e[h].size * (d - e[h].startValue) / (e[h].endValue - e[h].startValue) : !b && (a > e[h].startValue && d < e[h].endValue) && (c = a + e[h].size * (d - a) / (e[h].endValue - e[h].startValue)));
          return c;
        };
        A.prototype.setViewPortRange = function(a, d) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d);
        };
        A.prototype.getXValueAt = function(a) {
          if (!a)
            return null;
          var d = null;
          "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x));
          return d;
        };
        A.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var d = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic)
            for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
          else
            for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
          d.minimum = this.viewportMinimum;
          d.maximum = this.viewportMaximum;
          d.range = b;
          if ("bottom" === this._position || "top" === this._position)
            this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position)
            this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = d;
        };
        A.prototype.calculateAxisParameters = function() {
          if (this.logarithmic)
            this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), d = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), e, h, g2, b = 0;
            !l(this.options.viewportMinimum) && (!l(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (l(this.options.viewportMinimum) && !l(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
              this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = this.minimum;
            if (l(this.options.viewportMaximum) && !l(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
              this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = this.maximum;
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                  this.scaleBreaks._appliedBreaks.splice(
                    b,
                    1
                  );
                  break;
                }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length)
                for (e = 0; e < this.dataSeries.length; e++)
                  "dateTime" === this.dataSeries[e].xValueType && (c = true);
              e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === h - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, e -= b);
              Infinity !== this.dataInfo.minDiff ? g2 = this.dataInfo.minDiff : 1 < h - e ? g2 = 0.5 * Math.abs(h - e) : (g2 = 1, c && (d = true));
            } else
              "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(h) ? isFinite(e) ? isFinite(h) || (h = e) : e = h : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === h ? (h += 9, e = 0) : 0 === h - e ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, e -= b) : e > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, true)), 5), 0 <= h ? e = h - b : h = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== e && (e -= b)), g2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * R.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * R.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * R.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * R.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * R.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * R.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * R.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * R.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * R.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * R.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * R.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * R.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * R.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * R.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * R.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * R.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * R.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * R.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * R.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * R.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * R.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * R.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * R.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * R.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * R.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * R.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * R.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * R.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * R.yearDuration) <= a ? 1 : b / (2 * R.yearDuration) <= a ? 2 : b / (4 * R.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(b / (a - 1), true) / R.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = e - g2 / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = h + g2 / 2;
              d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = A.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? e - g2 / 2 : Math.floor(e / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? h + g2 / 2 : Math.ceil(h / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum)
              if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === h - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, h += b, e -= b), g2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, h = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(h) ? 0 === e && 0 === h ? (h += 9, e = 0) : 0 === h - e ? (b = Math.min(Math.abs(0.01 * Math.abs(h)), 5), h += b, e -= b) : e > h ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, true)), 5), 0 <= h ? e = h - b : h = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, true)), 0.05), 0 !== h && (h += b), 0 !== e && (e -= b)) : (h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), g2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)), Math.abs(this.getApparentDifference(e, h, null, true)), "axisX" === this.type && c) {
                this.valueType = "dateTime";
                if (null === this.minimum || isNaN(this.minimum))
                  this.minimum = e - g2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                if (null === this.maximum || isNaN(this.maximum))
                  this.maximum = h + g2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
              } else
                this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - g2 / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum
                )), null === this.maximum && (this.maximum = "axisX" === this.type ? h + g2 / 2 : Math.ceil(h / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            l(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            l(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2));
          }
        };
        A.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), d = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, e, h, g2;
          g2 = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (g2 = 0; g2 < this.scaleBreaks._appliedBreaks.length; g2++)
              if ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[g2].startValue || !l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[g2].startValue || !l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[g2].startValue) && (!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[g2].endValue || !l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[g2].endValue || !l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[g2].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(g2, 1);
                break;
              }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (g2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= g2, b /= g2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (g2 = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= g2, b /= g2) : b > e ? (g2 = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / g2 : e = b * g2) : (g2 = Math.min(e / b * Math.pow(
            this.logarithmBase,
            0.01
          ), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= g2), 1 !== b && (b /= g2)), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
          g2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var r2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          g2 = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(g2) / d), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = A.getNiceExponent(Math.log(g2) / d / (a - 1), true), c = A.getNiceNumber(r2 / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceExponent(Math.ceil(Math.log(g2) / d) / (a - 1)), c = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum)
            "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (g2 = Math.pow(
              this.logarithmBase,
              "undefined" === typeof this.options.interval ? 0.4 : this.options.interval
            ), e *= g2, b /= g2), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (g2 = Math.pow(this.logarithmBase, this.interval), e *= g2, b /= g2) : b > e ? (g2 = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / g2 : e = b * g2) : (g2 = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= g2), 1 !== b && (b /= g2)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval)), l(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), l(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum; )
              d += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = d;
            this.interval = c;
          } else
            this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(d) || !isFinite(d))
              d = 2;
            if (2 < d)
              for (g2 = 0; g2 < d - 2; g2++)
                this.valueFormatString += "#";
          }
        };
        A.generateValueFormatString = function(a, d) {
          var c = "#,##0.", b = d;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
          for (var e = 0; e < b; e++)
            c += "#";
          return c;
        };
        A.getNiceExponent = function(a, d) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.getNiceNumber = function(a, d) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.prototype.getLabelStartPoint = function() {
          var a = R[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType)
              0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("day" === this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else
              "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        oa(V2, Y);
        oa(fa2, Y);
        fa2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var d = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][d] = this.options;
          }
        };
        fa2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var d = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            U(this.id);
            var h, g2, l2, r2, k, m;
            a = Math.max(this.spacing, 3);
            var p = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = p;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, p));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
              if (b = 1 === p % 2 ? (b.x << 0) + 0.5 : b.x << 0, g2 = 1 === p % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2 + p / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, l2 = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - p / 2, y1: e, x2: g2 + p / 2, y2: l2 }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(b, l2), this.ctx.lineTo(g2, l2), this.ctx.lineTo(g2, e);
              else if ("wavy" === this.type) {
                r2 = b;
                k = e;
                h = 0.5;
                m = (l2 - k) / a / 3;
                for (var q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(r2 + h * a, k + a, r2 + h * a, k + 2 * a, r2, k + 3 * a), k += 3 * a, h *= -1;
                this.ctx.bezierCurveTo(r2 + h * a, k + a, r2 + h * a, k + 2 * a, r2, k + 3 * a);
                r2 = g2;
                h *= -1;
                this.ctx.lineTo(r2, k);
                for (q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(r2 + h * a, k - a, r2 + h * a, k - 2 * a, r2, k - 3 * a), k -= 3 * a, h *= -1;
              } else {
                if ("zigzag" === this.type) {
                  h = -1;
                  k = e + a;
                  r2 = b + a;
                  m = (l2 - k) / a / 2;
                  for (q = 0; q < m; q++)
                    this.ctx.lineTo(r2, k), r2 += 2 * h * a, k += 2 * a, h *= -1;
                  this.ctx.lineTo(r2, k);
                  r2 += g2 - b;
                  for (q = 0; q < m + 1; q++)
                    this.ctx.lineTo(r2, k), r2 += 2 * h * a, k -= 2 * a, h *= -1;
                  this.ctx.lineTo(r2 + h * a, k + a);
                }
              }
            else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (e = 1 === p % 2 ? (e.y << 0) + 0.5 : e.y << 0, l2 = 1 === p % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, g2 = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, g2 = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - p / 2, x2: g2, y2: l2 + p / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(g2, e), this.ctx.lineTo(g2, l2), this.ctx.lineTo(b, l2);
              else if ("wavy" === this.type) {
                r2 = b;
                k = e;
                h = 0.5;
                m = (g2 - r2) / a / 3;
                for (q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(r2 + a, k + h * a, r2 + 2 * a, k + h * a, r2 + 3 * a, k), r2 += 3 * a, h *= -1;
                this.ctx.bezierCurveTo(r2 + a, k + h * a, r2 + 2 * a, k + h * a, r2 + 3 * a, k);
                k = l2;
                h *= -1;
                this.ctx.lineTo(r2, k);
                for (q = 0; q < m; q++)
                  this.ctx.bezierCurveTo(r2 - a, k + h * a, r2 - 2 * a, k + h * a, r2 - 3 * a, k), r2 -= 3 * a, h *= -1;
              } else if ("zigzag" === this.type) {
                h = 1;
                k = e - a;
                r2 = b + a;
                m = (g2 - r2) / a / 2;
                for (q = 0; q < m; q++)
                  this.ctx.lineTo(r2, k), k += 2 * h * a, r2 += 2 * a, h *= -1;
                this.ctx.lineTo(r2, k);
                k += l2 - e;
                for (q = 0; q < m + 1; q++)
                  this.ctx.lineTo(
                    r2,
                    k
                  ), k += 2 * h * a, r2 -= 2 * a, h *= -1;
                this.ctx.lineTo(r2 + a, k + h * a);
              }
            }
            0 < p && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = d;
          }
        };
        oa(N, Y);
        N.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var d = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[d] = this.options;
          }
        };
        N.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < d) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            U(this.id);
            var e, h, g2, l2;
            this.ctx.lineWidth = d;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, d));
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              e = h = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, g2 = this.chart.plotArea.y1, l2 = this.chart.plotArea.y2, this.bounds = { x1: e - d / 2, y1: g2, x2: h + d / 2, y2: l2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              g2 = l2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, h = this.chart.plotArea.x2, this.bounds = { x1: e, y1: g2 - d / 2, x2: h, y2: l2 + d / 2 };
            this.ctx.moveTo(e, g2);
            this.ctx.lineTo(h, l2);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        oa(Z2, Y);
        Z2.prototype.showAt = function(a) {
          if (!this.enabled)
            return false;
          var d = this.chart, c = false;
          d.resetOverlayedCanvas();
          d.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent);
          if ("xySwapped" === d.plotInfo.axisPlacement)
            if ("bottom" === this.parent._position)
              for (var b = 0; b < d.axisY.length; b++)
                this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
              for (b = 0; b < d.axisY2.length; b++)
                this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
              for (b = 0; b < d.axisX.length; b++)
                this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else {
              if ("right" === this.parent._position)
                for (b = 0; b < d.axisX2.length; b++)
                  this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            }
          else if ("bottom" === this.parent._position)
            for (b = 0; b < d.axisX.length; b++)
              this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
            for (b = 0; b < d.axisX2.length; b++)
              this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
            for (b = 0; b < d.axisY.length; b++)
              this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
          else if ("right" === this.parent._position)
            for (b = 0; b < d.axisY2.length; b++)
              this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
          for (b = 0; b < d.axisX.length; b++)
            a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && d.axisX[b].crosshair.enabled && (!l(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? (d.axisX[b].showCrosshair(a), d.axisX[b].sessionVariables.crosshairValue = d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = true)) : void 0 !== a && (d.axisX[b].sessionVariables.crosshairValue = d.axisX[b].crosshair._updatedValue = null));
          for (b = 0; b < d.axisX2.length; b++)
            a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && d.axisX2[b].crosshair.enabled && (!l(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? (d.axisX2[b].showCrosshair(a), d.axisX2[b].sessionVariables.crosshairValue = d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = true)) : void 0 !== a && (d.axisX2[b].sessionVariables.crosshairValue = d.axisX2[b].crosshair._updatedValue = null));
          for (b = 0; b < d.axisY.length; b++)
            a = d.axisY[b]._crosshairValue, d.axisY[b].crosshair && d.axisY[b].crosshair.enabled && (!l(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? (d.axisY[b].showCrosshair(a), d.axisY[b].sessionVariables.crosshairValue = d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = true)) : void 0 !== a && (d.axisY[b].sessionVariables.crosshairValue = d.axisY[b].crosshair._updatedValue = null));
          for (b = 0; b < d.axisY2.length; b++)
            a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && d.axisY2[b].crosshair.enabled && (!l(a) && a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? (d.axisY2[b].showCrosshair(a), d.axisY2[b].sessionVariables.crosshairValue = d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair && (c = true)) : void 0 !== a && (d.axisY2[b].sessionVariables.crosshairValue = d.axisY2[b].crosshair._updatedValue = null));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          d.sessionVariables.crosshairShownByPixel = false;
          return c;
        };
        Z2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = true;
        };
        Z2.prototype.render = function(a, d, c) {
          var b, e, h, g2, r2 = null, t2 = null, k = null, m = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = A.generateValueFormatString(this.parent.range, k)));
          var p = null === this.opacity ? 1 : this.opacity, q = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), f = this.chart.overlaidCanvasCtx, v3 = f.globalAlpha;
          f.beginPath();
          f.strokeStyle = this.color;
          f.lineWidth = q;
          f.save();
          this.labelFontSize = Math.abs(l(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = l(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < q && f.setLineDash && f.setLineDash(I(this.lineDashType, q));
          k = new ka(f, {
            x: 0,
            y: 0,
            padding: { top: 2, right: 3, bottom: 2, left: 4 },
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: m,
            textAlign: this.labelTextAlign,
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var w = 0, m = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var y = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position)
                w = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
              else if ("left" === this.parent._position || "right" === this.parent._position)
                w = this.parent.convertPixelToValue({ y: d });
              for (var s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              y = null;
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var z3 = y = 0;
              yPercent = cumulativeY = 0;
              for (var w = Infinity, u, s = 0; s < m.length; s++) {
                if ("rangeBar" === m[s].dataSeries.type || "error" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y)
                    for (var G2 = 0; G2 < m[s].dataPoint.y.length; G2++)
                      z3 = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y[G2])), z3 <= w && (w = z3, y = s);
                } else
                  "stackedBar" === m[s].dataSeries.type ? (cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z3 = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), z3 <= w && (w = z3, y = s)) : "stackedBar100" === m[s].dataSeries.type ? (z3 = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, l(u) && (u = Math.abs(a - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z3])))), cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z3 = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, yPercent = 100 * (cumulativeY / m[s].dataSeries.plotUnit.dataPointYSums[z3]), z3 = Math.abs(a - this.parent.convertValueToPixel(yPercent)), z3 <= u && (u = z3, y = s)) : (z3 = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y)), z3 <= w && (w = z3, y = s));
                l(u) || (w = Math.min(w, u));
              }
              u = m[y];
              s = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === u.dataSeries.type || "error" === u.dataSeries.type) {
                  w = Math.abs(a - this.parent.convertValueToPixel(u.dataPoint.y[0]));
                  for (m = 0; m < u.dataPoint.y.length; m++)
                    z3 = Math.abs(a - this.parent.convertValueToPixel(u.dataPoint.y[m])), z3 < w && (w = z3, s = m);
                  r2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
                  this.value = u.dataPoint.y[s];
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y[s] }) : l(this.options.label) ? ha(l(c) ? u.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else
                  "stackedBar" === u.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = u.dataSeries.dataPointEOs[u.index].cumulativeY, r2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: cumulativeY }) : l(this.options.label) ? ha(l(c) ? cumulativeY : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === u.dataSeries.type ? (w = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y)), cumulativeY = u.dataSeries.dataPointEOs[u.index].cumulativeY, z3 = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, yPercent = 100 * (cumulativeY / u.dataSeries.plotUnit.dataPointYSums[z3]), r2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: yPercent }) : l(this.options.label) ? ha(
                    l(c) ? yPercent : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  ) : this.label) : (r2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y) << 0, this.value = u.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y }) : l(this.options.label) ? ha(l(c) ? u.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
                b = e = r2;
                h = this.chart.plotArea.y1;
                g2 = this.chart.plotArea.y2;
                this.bounds = { x1: b - q / 2, y1: h, x2: e + q / 2, y2: g2 };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                h = g2 = t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                e = this.chart.plotArea.x2;
                this.bounds = { x1: b, y1: h - q / 2, x2: e, y2: g2 + q / 2 };
                s = false;
                if (this.parent.labels)
                  for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                    if (this.parent.labels[m])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (w = this.parent.convertPixelToValue({ y: d }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (y = this.parent.dataSeries[s].getDataPointAtX(
                        w,
                        true
                      )) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : l(this.options.label) ? y.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : l(this.options.label) ? ha(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : l(this.options.label) ? Ca(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = u.dataPoint.x;
                k.y = g2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              w = this.parent.convertPixelToValue({ x: a });
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              u = m[0];
              b = e = r2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.x) << 0;
              h = this.chart.plotArea.y1;
              g2 = this.chart.plotArea.y2;
              this.bounds = { x1: b - q / 2, y1: h, x2: e + q / 2, y2: g2 };
              s = false;
              if (this.parent.labels)
                for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                  if (this.parent.labels[m])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (w = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : l(this.options.label) ? y.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : l(this.options.label) ? ha(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.x }) : l(this.options.label) ? Ca(u.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = u.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !l(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (w = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (y.dataSeries = this.parent.dataSeries[s], null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
              if (0 === m.length)
                return;
              m.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              z3 = y = 0;
              w = Infinity;
              for (s = 0; s < m.length; s++) {
                if ("rangeColumn" === m[s].dataSeries.type || "rangeArea" === m[s].dataSeries.type || "error" === m[s].dataSeries.type || "rangeSplineArea" === m[s].dataSeries.type || "candlestick" === m[s].dataSeries.type || "ohlc" === m[s].dataSeries.type || "boxAndWhisker" === m[s].dataSeries.type) {
                  if (m[s].dataPoint.y)
                    for (G2 = 0; G2 < m[s].dataPoint.y.length; G2++)
                      z3 = Math.abs(d - this.parent.convertValueToPixel(m[s].dataPoint.y[G2])), z3 <= w && (w = z3, y = s);
                } else
                  "stackedColumn" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z3 = Math.abs(d - this.parent.convertValueToPixel(b)), z3 <= w && (w = z3, y = s)) : "stackedArea" === m[s].dataSeries.type ? (b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z3 = Math.abs(d - this.parent.convertValueToPixel(b)), z3 <= w && (w = z3, y = s)) : "stackedColumn100" === m[s].dataSeries.type || "stackedArea100" === m[s].dataSeries.type ? (z3 = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x, l(u) && (u = Math.abs(d - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z3])))), "stackedColumn100" === m[s].dataSeries.type ? (t2 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z3 = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (t2 / m[s].dataSeries.plotUnit.dataPointYSums[z3]), z3 = Math.abs(d - this.parent.convertValueToPixel(b)), z3 <= u && (u = z3, y = s)) : "stackedArea100" === m[s].dataSeries.type && (t2 = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY, z3 = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x, b = 100 * (t2 / m[s].dataSeries.plotUnit.dataPointYSums[z3]), z3 = Math.abs(d - this.parent.convertValueToPixel(b)), z3 <= u && (u = z3, y = s))) : "waterfall" === m[s].dataSeries.type ? (z3 = Math.abs(d - this.parent.convertValueToPixel(m[s].dataSeries.dataPointEOs[m[s].index].cumulativeSum)), z3 <= w && (u = w = z3, y = s)) : (z3 = Math.abs(d - this.parent.convertValueToPixel(m[s].dataPoint.y)), z3 <= w && (w = z3, y = s));
                l(u) || (w = Math.min(w, u));
              }
              u = m[y];
              s = 0;
              if ("rangeColumn" === u.dataSeries.type || "rangeArea" === u.dataSeries.type || "error" === u.dataSeries.type || "rangeSplineArea" === u.dataSeries.type || "candlestick" === u.dataSeries.type || "ohlc" === u.dataSeries.type || "boxAndWhisker" === u.dataSeries.type) {
                w = Math.abs(d - this.parent.convertValueToPixel(u.dataPoint.y[0]));
                for (m = 0; m < u.dataPoint.y.length; m++)
                  z3 = Math.abs(d - this.parent.convertValueToPixel(u.dataPoint.y[m])), z3 < w && (w = z3, s = m);
                t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataPoint.y[s]) << 0;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataPoint.y[s] }) : l(this.options.label) ? ha(l(c) ? u.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = u.dataPoint.y[s];
              } else
                "stackedColumn" === u.dataSeries.type ? (b = u.dataSeries.dataPointEOs[u.index].cumulativeY, t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea" === u.dataSeries.type ? (b = u.dataSeries.dataPointEOs[u.index].cumulativeY, t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedColumn100" === u.dataSeries.type ? (t2 = u.dataSeries.dataPointEOs[u.index].cumulativeY, z3 = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, b = 100 * (t2 / u.dataSeries.plotUnit.dataPointYSums[z3]), t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea100" === u.dataSeries.type ? (t2 = u.dataSeries.dataPointEOs[u.index].cumulativeY, z3 = u.dataPoint.x.getTime ? u.dataPoint.x.getTime() : u.dataPoint.x, b = 100 * (t2 / u.dataSeries.plotUnit.dataPointYSums[z3]), t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : l(this.options.label) ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "waterfall" === u.dataSeries.type ? (t2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(u.dataSeries.dataPointEOs[u.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(u.dataSeries.dataPointEOs[u.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: u.dataSeries.dataPointEOs[u.index].cumulativeSum }) : l(this.options.label) ? ha(l(c) ? u.dataSeries.dataPointEOs[u.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = u.dataSeries.dataPointEOs[u.index].cumulativeSum) : (t2 = 1 === f.lineWidth % 2 ? (l(a) ? d : this.parent.convertValueToPixel(u.dataPoint.y) << 0) + 0.5 : l(a) ? d : this.parent.convertValueToPixel(u.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? u.dataPoint.y : c }) : l(this.options.label) ? ha(l(c) ? u.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = u.dataPoint.y);
              h = g2 = t2;
              b = this.chart.plotArea.x1;
              e = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: h - q / 2, x2: e, y2: g2 + q / 2 };
              k.y = g2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            m = null;
            f.globalAlpha = p;
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < q && (f.moveTo(b, h), f.lineTo(e, g2), f.stroke(), this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position)
              "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(
                this.parent.viewportMinimum,
                this.parent.viewportMaximum
              ) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < q && (f.moveTo(b, h), f.lineTo(e, g2), f.stroke(), this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              b = e = r2 = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, h = this.chart.plotArea.y1, g2 = this.chart.plotArea.y2, this.bounds = { x1: b - q / 2, y1: h, x2: e + q / 2, y2: g2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              h = g2 = t2 = 1 === f.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: h - q / 2, x2: e, y2: g2 + q / 2 };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement)
              if ("left" === this.parent._position || "right" === this.parent._position) {
                s = false;
                if (this.parent.labels)
                  for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                    if (this.parent.labels[m])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (w = this.parent.convertPixelToValue({ y: d }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (y = this.parent.dataSeries[s].getDataPointAtX(
                        w,
                        true
                      )) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c }) : l(this.options.label) ? y.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(d) : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(d) : c }) : l(this.options.label) ? Ca(l(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
              }
            else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              s = false;
              m = "";
              if (this.parent.labels)
                for (w = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += w)
                  if (this.parent.labels[m])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (w = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (y = this.parent.dataSeries[s].getDataPointAtX(w, true)) && 0 <= y.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c }) : l(this.options.label) ? l(c) ? y.dataPoint.label : c : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: l(c) ? this.parent.convertPixelToValue(a) : c
                }) : l(this.options.label) ? Ca(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position)
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(d) : c }) : l(this.options.label) ? ha(l(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            f.globalAlpha = p;
            0 < q && (f.moveTo(b, h), f.lineTo(e, g2), f.stroke(), this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(r2);
          if ("left" === this.parent._position || "right" === this.parent._position)
            this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(t2);
          this._textBlock = k;
          this._label = c;
          l(c) || this.renderLabel();
          f.restore();
          f.globalAlpha = v3;
        };
        Z2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (l(this._textBlock) || (l(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true), l(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        oa($2, Y);
        $2.prototype._updateOptions = function() {
          this.updateOption("enabled");
          this.updateOption("shared");
          this.updateOption("animationEnabled");
          this.updateOption("content");
          this.updateOption("contentFormatter");
          this.updateOption("reversed");
          this.updateOption("backgroundColor");
          this.updateOption("borderColor");
          this.updateOption("borderThickness");
          this.updateOption("cornerRadius");
          this.updateOption("fontSize");
          this.updateOption("fontColor");
          this.updateOption("fontFamily");
          this.updateOption("fontWeight");
          this.updateOption("fontStyle");
        };
        $2.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute("class", "canvasjs-chart-tooltip");
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = r ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            r || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        $2.prototype.mouseMoveHandler = function(a, d) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d), this.enabled && this._updatedEventParameters && !isNaN(this._prevX) && !isNaN(this._prevY) && this.container && this.container.style && this.dispatchEvent("none" === this.container.style.display ? "hidden" : "updated", this._updatedEventParameters, this));
        };
        $2.prototype._updateToolTip = function(a, d, c) {
          c = "undefined" === typeof c ? true : c;
          this._updateOptions();
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof d) {
              if (isNaN(this._prevX) || isNaN(this._prevY))
                return;
              a = this._prevX;
              d = this._prevY;
            } else
              this._prevX = a, this._prevY = d;
            var b = null, e = null, h = [], g2 = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var t2 = [];
              if (this.chart.axisX)
                for (var v3 = 0; v3 < this.chart.axisX.length; v3++) {
                  for (var g2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[v3].convertPixelToValue({ y: d }) : this.chart.axisX[v3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[v3].dataSeries.length; b++)
                    (k = this.chart.axisX[v3].dataSeries[b].getDataPointAtX(g2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[v3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && t2.push(k));
                  k = null;
                }
              if (this.chart.axisX2)
                for (v3 = 0; v3 < this.chart.axisX2.length; v3++) {
                  g2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[v3].convertPixelToValue({ y: d }) : this.chart.axisX2[v3].convertPixelToValue({ x: a });
                  k = null;
                  for (b = 0; b < this.chart.axisX2[v3].dataSeries.length; b++)
                    (k = this.chart.axisX2[v3].dataSeries[b].getDataPointAtX(g2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[v3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && t2.push(k));
                  k = null;
                }
              if (0 === t2.length)
                return;
              t2.sort(function(a2, b2) {
                return a2.dataSeries.axisX.logarithmic || b2.dataSeries.axisX.logarithmic ? a2.distance - b2.distance : a2.distance / a2.dataSeries.axisX.range - b2.distance / b2.dataSeries.axisX.range;
              });
              c = t2[0];
              for (b = 0; b < t2.length; b++)
                t2[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && h.push(t2[b]);
              t2 = null;
            } else {
              if (k = this.chart.getDataPointAtXY(a, d, c))
                this.currentDataPointIndex = k.dataPointIndex, this.currentSeriesIndex = k.dataSeries.index;
              else if (r)
                if (k = bb(a, d, this.chart._eventManager.ghostCtx), 0 < k && "undefined" !== typeof this.chart._eventManager.objectMap[k]) {
                  k = this.chart._eventManager.objectMap[k];
                  if ("legendItem" === k.objectType)
                    return;
                  this.currentSeriesIndex = k.dataSeriesIndex;
                  this.currentDataPointIndex = 0 <= k.dataPointIndex ? k.dataPointIndex : -1;
                } else
                  this.currentDataPointIndex = -1;
              else
                this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                e = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex)
                  b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - g2), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else if (this.enabled && e && ("line" === e.type || "stepLine" === e.type || "spline" === e.type || "area" === e.type || "stepArea" === e.type || "splineArea" === e.type || "stackedArea" === e.type || "stackedArea100" === e.type || "rangeArea" === e.type || "rangeSplineArea" === e.type || "candlestick" === e.type || "ohlc" === e.type || "boxAndWhisker" === e.type))
                  g2 = e.axisX.convertPixelToValue({ x: a }), k = e.getDataPointAtX(g2, c), l(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint);
                else {
                  "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), this.chart.clearedOverlayedCanvas = null, this.container && (this.container.style.display = "none"));
                  return;
                }
                if (!l(k) && !l(k.dataPoint) && !l(k.dataPoint.y))
                  if (k.dataSeries.axisY)
                    if (0 < k.dataPoint.y.length) {
                      for (b = c = 0; b < k.dataPoint.y.length; b++)
                        k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                      c < k.dataPoint.y.length && c > -k.dataPoint.y.length && h.push(k);
                    } else
                      "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && h.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && h.push(k) : "line" === e.type || "spline" === e.type || "stepLine" === e.type || "area" === e.type || "splineArea" === e.type || "stepArea" === e.type ? (c = l(k.dataPoint.markerSize) ? k.dataSeries.markerSize : k.dataPoint.markerSize, k.dataSeries.axisX.convertValueToPixel(k.dataPoint.x) + c / 2 >= this.chart.plotArea.x1 && (k.dataSeries.axisX.convertValueToPixel(k.dataPoint.x) - c / 2 <= this.chart.plotArea.x2 && k.dataSeries.axisY.convertValueToPixel(k.dataPoint.y) + c / 2 >= this.chart.plotArea.y1 && k.dataSeries.axisY.convertValueToPixel(k.dataPoint.y) - c / 2 <= this.chart.plotArea.y2) && h.push(k)) : "stackedArea" === e.type || "stackedArea100" === k.dataSeries.type ? (c = l(k.dataPoint.markerSize) ? k.dataSeries.markerSize : k.dataPoint.markerSize, k.dataSeries.axisX.convertValueToPixel(k.dataPoint.x) + c / 2 >= this.chart.plotArea.x1 && k.dataSeries.axisX.convertValueToPixel(k.dataPoint.x) - c / 2 <= this.chart.plotArea.x2 && h.push(k)) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && h.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && h.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && h.push(k);
                  else
                    h.push(k);
              }
            }
            if (0 < h.length) {
              if (this.highlightObjects(h), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({ entries: h });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                    for (g2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < g2.length; b++)
                      g2[b] && (g2[b].style.color = g2[b].getAttribute("data-color"));
                  g2 = false;
                  "none" === this.container.style.display && (g2 = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[e.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : r ? "italic" : "normal";
                  } catch (m) {
                  }
                  "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type || "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type || "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a += this.container.clientWidth + 20);
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  d = 1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : d : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
                  d = -d + 10;
                  0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, d);
                  !this.animationEnabled || g2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = d;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = d + "px";
                } else
                  this.hide(false), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                d = [];
                for (b = 0; b < h.length; b++)
                  d.push({
                    xValue: h[b].dataPoint.x,
                    dataPoint: h[b].dataPoint,
                    dataSeries: h[b].dataSeries,
                    dataPointIndex: h[b].index,
                    dataSeriesIndex: h[b].dataSeries._index
                  });
                this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: d };
                this._entries = h;
              }
            } else
              this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
            this._dataSeriesIndex = this._xValue = null;
          }
        };
        $2.prototype.highlightObjects = function(a) {
          var d = this.chart.overlaidCanvasCtx;
          l(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas ? (this.chart.resetOverlayedCanvas(), d.clearRect(
            0,
            0,
            this.chart.width,
            this.chart.height
          ), this.chart.clearedOverlayedCanvas = "toolTip") : this.chart.clearedOverlayedCanvas = null;
          d.save();
          var c = this.chart.plotArea, b = 0;
          d.beginPath();
          d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          d.clip();
          for (c = 0; c < a.length; c++) {
            var e = a[c];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
              var b = this.chart.data[e.dataSeriesIndex], h = b.dataPoints[e.dataPointIndex], g2 = e.dataPointIndex;
              false === h.highlightEnabled || true !== b.highlightEnabled && true !== h.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (h = b.getMarkerProperties(g2, e.x1, e.y1, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), aa.drawMarkers([h]), "undefined" !== typeof e.y2 && (h = b.getMarkerProperties(g2, e.x1, e.y2, this.chart.overlaidCanvasCtx), h.size = Math.max(1.5 * h.size << 0, 10), h.borderColor = h.borderColor || "#FFFFFF", h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size), aa.drawMarkers([h]))) : "bubble" === b.type ? (h = b.getMarkerProperties(g2, e.x1, e.y1, this.chart.overlaidCanvasCtx), h.size = e.size, h.color = "white", h.borderColor = "white", d.globalAlpha = 0.3, aa.drawMarkers([h]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? da(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? X2(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? pa2(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d.stroke(), da(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), da(d, e.x1, Math.max(
                e.y2,
                e.y3
              ), e.x2, Math.min(e.y2, e.y3), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && z2(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
            }
          }
          d.restore();
          d.globalAlpha = 1;
          d.beginPath();
        };
        $2.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var d = null, c = null, b = null, e = 0, h = "";
          this.isToolTipDefinedInData = true;
          for (var g2 = 0; g2 < a.length; g2++)
            if (a[g2].dataSeries.toolTipContent || a[g2].dataPoint.toolTipContent) {
              this.isToolTipDefinedInData = false;
              break;
            }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
            a = { chart: this.chart, toolTip: this.options, entries: a }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var l2 = null, r2 = "", g2 = 0; g2 < a.length; g2++) {
              c = a[g2].dataSeries;
              b = a[g2].dataPoint;
              e = a[g2].index;
              h = "";
              if (0 === g2 && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? r2 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (r2 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                r2 += "</br>";
                if (!c.visible)
                  continue;
                r2 = this.chart.replaceKeywordsWithValue(r2, b, c, e);
              }
              null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, l2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (h += l2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), h += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === d && (d = ""), c.visible && (true === this.reversed ? (d = this.chart.replaceKeywordsWithValue(h, b, c, e) + d, g2 < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(h, b, c, e), g2 < a.length - 1 && (d += "</br>"))));
            }
            null !== d && (d = r2 + d);
          } else {
            c = a[0].dataSeries;
            b = a[0].dataPoint;
            e = a[0].index;
            if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)
              return null;
            "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (h = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === d && (d = "");
            d += this.chart.replaceKeywordsWithValue(
              h,
              b,
              c,
              e
            );
          }
          return d;
        };
        $2.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        $2.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        $2.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._entries = this._dataSeriesIndex = this._xValue = null, this._prevY = this._prevX = NaN, this._updatedEventParameters = null, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        $2.prototype.show = function(a, d, c) {
          this._updateToolTip(a, d, "undefined" === typeof c ? false : c);
        };
        $2.prototype.showAtIndex = function(a, d) {
        };
        $2.prototype.showAtX = function(a, d) {
          if (!this.enabled)
            return false;
          this.chart.clearedOverlayedCanvas = null;
          this._updateOptions();
          var c, b, e, h = [];
          e = false;
          d = !l(d) && 0 <= d && d < this.chart.data.length ? d : 0;
          if (this.shared)
            for (var g2 = 0; g2 < this.chart.data.length; g2++)
              c = this.chart.data[g2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !l(b.dataPoint.y) && c.visible) && (b.dataSeries = c, this.chart.data[d].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && h.push(b));
          else
            c = this.chart.data[d], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !l(b.dataPoint.y) && c.visible) && (b.dataSeries = c, h.push(b));
          if (0 < h.length) {
            for (g2 = 0; g2 < h.length; g2++)
              if (b = h[g2], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataSeries.axisX && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
                e = false;
                break;
              } else if (b.dataSeries.axisX && b.dataSeries.axisY && (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum))
                e = true;
              else {
                e = false;
                break;
              }
            if (e)
              return this.hide(), false;
            this.highlightObjects(h);
            this._entries = h;
            g2 = "";
            g2 = this.getToolTipInnerHTML({ entries: h });
            if (null !== g2) {
              this.contentDiv.innerHTML = g2;
              if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                for (b = this.contentDiv.getElementsByTagName("span"), g2 = 0; g2 < b.length; g2++)
                  b[g2] && (b[g2].style.color = b[g2].getAttribute("data-color"));
              g2 = false;
              "none" === this.container.style.display && (g2 = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : 0 < h[0].dataPoint.y ? h[0].dataSeries.risingColor : h[0].dataSeries.fallingColor : "error" === h[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[c.index % h[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : h[0].dataPoint.color ? h[0].dataPoint.color : h[0].dataSeries.color ? h[0].dataSeries.color : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : r ? "italic" : "normal";
              } catch (t2) {
              }
              "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type ? c = h[0].dataSeries.dataPointEOs[h[0].index].center.x + h[0].dataSeries.radius * Math.cos(h[0].dataSeries.dataPointEOs[h[0].index].midAngle) + -("left" === h[0].dataSeries.dataPointEOs[h[0].index].hemisphere ? 0 : this.container.clientWidth) : "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type ? (b = h[0].dataSeries.dataPointEOs[h[0].index].sectionsofFunnel, c = (b.x1 + b.x2 - this.container.clientWidth) / 2) : (c = "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y.length ? h[0].dataPoint.y[h[0].dataPoint.y.length - 1] : h[0].dataPoint.y) - this.container.clientWidth << 0 : h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              1 !== h.length || this.shared || "line" !== h[0].dataSeries.type && "stepLine" !== h[0].dataSeries.type && "spline" !== h[0].dataSeries.type && "area" !== h[0].dataSeries.type && "stepArea" !== h[0].dataSeries.type && "splineArea" !== h[0].dataSeries.type ? "pie" === h[0].dataSeries.type || "doughnut" === h[0].dataSeries.type ? (b = h[0].dataSeries.dataPointEOs[h[0].index].center.y + h[0].dataSeries.radius * Math.sin(h[0].dataSeries.dataPointEOs[h[0].index].midAngle), b < h[0].dataSeries.dataPointEOs[h[0].index].center.y && (b += this.container.clientHeight)) : "funnel" === h[0].dataSeries.type || "pyramid" === h[0].dataSeries.type ? (b = h[0].dataSeries.dataPointEOs[h[0].dataSeries.reversed ? h[0].dataSeries.dataPointEOs.length - 1 - h[0].index : h[0].index].sectionsofFunnel, b = "undefined" !== typeof b.x5 ? (b.y2 + b.y4) / 2 : (b.y2 + b.y3) / 2 + this.container.clientHeight / 2) : b = "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y.length ? h[0].dataPoint.y[h[0].dataPoint.y.length - 1] : h[0].dataPoint.y) : b = h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
              b = -b + 10;
              0 < b + this.container.clientHeight + 5 && (b -= b + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(c, b);
              !this.animationEnabled || g2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = b + "px";
            } else
              return this.hide(false), false;
          } else
            return this.hide(), false;
          this._xValue = a;
          this._dataSeriesIndex = d;
          this._prevY = this._prevX = NaN;
          return true;
        };
        $2.prototype.fixMozTransitionDelay = function(a, d) {
          if (20 < this.chart._eventManager.lastObjectId)
            this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        $2.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ga2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          r && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ga2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        ga2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var d = [], c = Qa(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b])
              if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                var e = this.chart.data[b.dataSeriesIndex], g2 = e.dataPoints[b.dataPointIndex], l2 = b.dataPointIndex;
                b.eventParameter = { x: c.x, y: c.y, dataPoint: g2, dataSeries: e.options, dataPointIndex: l2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = { context: g2, userContext: g2, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                d.push(b);
                b = this.objectMap[e.id];
                b.eventParameter = { x: c.x, y: c.y, dataPoint: g2, dataSeries: e.options, dataPointIndex: l2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = {
                  context: e,
                  userContext: e.options,
                  mouseover: "mouseover",
                  mousemove: "mousemove",
                  mouseout: "mouseout",
                  click: "click"
                };
                d.push(this.objectMap[e.id]);
              } else
                "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], g2 = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = { x: c.x, y: c.y, dataSeries: e.options, dataPoint: g2, dataPointIndex: b.dataPointIndex, dataSeriesIndex: b.dataSeriesIndex, chart: this.chart }, b.eventContext = {
                  context: this.chart.legend,
                  userContext: this.chart.legend.options,
                  mouseover: "itemmouseover",
                  mousemove: "itemmousemove",
                  mouseout: "itemmouseout",
                  click: "itemclick"
                }, d.push(b));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              g2 = true;
              for (b = 0; b < d.length; b++)
                if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                  g2 = false;
                  break;
                }
              g2 ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < d.length; c++) {
              e = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                  e = true;
                  break;
                }
              e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
              "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
            }
          }
        };
        ga2.prototype.fireEvent = function(a, d, c) {
          if (a && d) {
            var b = a.eventParameter, e = a.eventContext, g2 = a.eventContext.userContext;
            g2 && (e && g2[e[d]]) && g2[e[d]].call(g2, b);
            "mouseout" !== d ? g2.cursor && g2.cursor !== c.target.style.cursor && (c.target.style.cursor = g2.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== e.mouseout || g2.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
          }
        };
        ja2.prototype.animate = function(a, d, c, b, e) {
          var g2 = this;
          this.chart.isAnimating = true;
          e = e || Q.easing.linear;
          c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d, animationCallback: c, onComplete: b });
          for (a = []; 0 < this.animations.length; )
            if (d = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete)
              d.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            g2.animate.call(g2);
          }) : this.chart.isAnimating = false;
        };
        ja2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var Q = { yScaleAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas, e = d.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ia, a * c.canvas.height / ia);
          }
        }, xScaleAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas, e = d.animationBase;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              e - e * a,
              0,
              a * c.canvas.width / ia,
              c.canvas.height / ia
            );
          }
        }, xClipAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas;
            c.save();
            0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ia, b.height / ia);
            c.restore();
          }
        }, fadeInAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ia, c.canvas.height / ia);
            c.restore();
          }
        }, easing: { linear: function(a, d, c, b) {
          return c * a / b + d;
        }, easeOutQuad: function(a, d, c, b) {
          return -c * (a /= b) * (a - 2) + d;
        }, easeOutQuart: function(a, d, c, b) {
          return -c * ((a = a / b - 1) * a * a * a - 1) + d;
        }, easeInQuad: function(a, d, c, b) {
          return c * (a /= b) * a + d;
        }, easeInQuart: function(a, d, c, b) {
          return c * (a /= b) * a * a * a + d;
        } } }, aa = { drawMarker: function(a, d, c, b, e, g2, l2, r2) {
          if (c) {
            var t2 = 1;
            c.fillStyle = g2 ? g2 : "#000000";
            c.strokeStyle = l2 ? l2 : "#000000";
            c.lineWidth = r2 ? r2 : 0;
            c.setLineDash && c.setLineDash(I("solid", r2));
            "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, false), g2 && c.fill(), r2 && (l2 ? c.stroke() : (t2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t2))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), g2 && c.fill(), r2 && (l2 ? c.stroke() : (t2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t2))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), g2 && c.fill(), r2 && (l2 ? c.stroke() : (t2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = t2)), c.beginPath()) : "cross" === b && (c.strokeStyle = g2, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke());
          }
        }, drawMarkers: function(a) {
          for (var d = 0; d < a.length; d++) {
            var c = a[d];
            aa.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
          }
        } };
        return t;
      }();
      v.version = "v3.10.9 GA";
      window.CanvasJS && (v && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = v);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
          for (var e = 0; 3 > e; e++) {
            for (var f = 0, d2 = 0; 3 > d2; d2++)
              f += a[g][d2] * b[d2][e];
            c[g][e] = f;
          }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
          b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H)
          return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
          b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++)
            g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g)
            g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else
          b = Z[a] || a;
        return H[a] = { color: b, alpha: c };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push(
          "<g_vml_:stroke",
          ' opacity="',
          c,
          '"',
          ' joinstyle="',
          a.lineJoin,
          '"',
          ' miterlimit="',
          a.miterLimit,
          '"',
          ' endcap="',
          $[a.lineCap] || "square",
          '"',
          ' weight="',
          e,
          'px"',
          ' color="',
          g,
          '" />'
        );
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else
            p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else
          e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
          throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
          throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = { init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      }, init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++)
          this.initElement(a[b]);
      }, initElement: function(a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
        }
        return a;
      } };
      U.init();
      for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
          v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length)
          c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length)
          c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length)
          r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else
          throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(
          " <g_vml_:group",
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' coordorigin="0,0"',
          ' style="width:',
          10,
          "px;height:",
          10,
          "px;position:absolute;"
        );
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else
          p.push(
            "top:",
            k(m.y / q),
            "px;left:",
            k(m.x / q),
            "px;"
          );
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push(
          "<g_vml_:shape",
          ' filled="',
          !!a,
          '"',
          ' style="position:absolute;width:',
          10,
          "px;height:",
          10,
          'px;"',
          ' coordorigin="0,0"',
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' stroked="',
          !a,
          '"',
          ' path="'
        );
        for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x)
              c.x = f.x;
            if (null == d2.x || f.x > d2.x)
              d2.x = f.x;
            if (null == c.y || f.y < c.y)
              c.y = f.y;
            if (null == d2.y || f.y > d2.y)
              d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({ type: "close" });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[
          a,
          b,
          0
        ], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h])
          h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l)
          h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(
          this,
          n,
          { x: -d2, y: 0 },
          { x: r2, y: h.size }
        );
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart)
      this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(t) {
  return new (t || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(t) {
  return new (t || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
