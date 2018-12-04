exports.ids = [0];
exports.modules = {

/***/ "./pages/components/MyStage.js":
/*!*************************************!*\
  !*** ./pages/components/MyStage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inlet/react-pixi */ "@inlet/react-pixi");
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rectangle */ "./pages/components/Rectangle.js");
var _jsxFileName = "/Users/thierry/Documents/github/nextpixipixi-example/pages/components/MyStage.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["Stage"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    x: 100,
    y: 100,
    width: 500,
    heigth: 300,
    fill: 0xff0000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
});

/***/ }),

/***/ "./pages/components/Rectangle.js":
/*!***************************************!*\
  !*** ./pages/components/Rectangle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "pixi.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pixi_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inlet/react-pixi */ "@inlet/react-pixi");
/* harmony import */ var _inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(_inlet_react_pixi__WEBPACK_IMPORTED_MODULE_1__["PixiComponent"])('Rectangle', {
  create: function create(props) {
    return new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Graphics"]();
  },
  didMount: function didMount(instance, parent) {// apply custom logic on mount
  },
  willUnmount: function willUnmount(instance, parent) {// clean up before removal
  },
  applyProps: function applyProps(instance, oldProps, newProps) {
    var fill = newProps.fill,
        x = newProps.x,
        y = newProps.y,
        width = newProps.width,
        height = newProps.height;
    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  }
}));

/***/ })

};;
//# sourceMappingURL=0.js.map