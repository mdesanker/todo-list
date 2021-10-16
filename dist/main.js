/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* style.css */\\n/* General CSS */\\n:root {\\n  --primary-dark: #1d3557;\\n  --secondary-dark: #457b9d;\\n  --primary-light: #a8dadc;\\n  --secondary-light: #f1faee;\\n  --contrast-color: #e63946;\\n}\\n* {\\n  padding: 0;\\n  margin: 0;\\n}\\nhtml {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n}\\nmain {\\n  display: flex;\\n  width: 100%;\\n}\\n/* Header CSS */\\nheader {\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 20px;\\n  margin-bottom: 20px;\\n}\\n.fa-sticky-note {\\n  font-size: 26px;\\n  transition: 1s ease-out;\\n  color: var(--primary-dark);\\n}\\n.fa-sticky-note:hover {\\n  transform: scale(1.3);\\n}\\n#page-name {\\n  color: var(--primary-dark);\\n  font-weight: 400;\\n  text-transform: uppercase;\\n  letter-spacing: 0.2rem;\\n  margin-left: 20px;\\n}\\n/* Main CSS */\\nmain {\\n  height: 100vh;\\n  display: flex;\\n  align-items: flex-start;\\n}\\n/* Sidebar CSS */\\n.sidebar {\\n  border: 1px solid gray;\\n  padding: 10px;\\n  margin: 0 10px;\\n  box-shadow: 0 0 6px var(--secondary-dark);\\n  min-width: 205px;\\n}\\n.view-container,\\n.project-container {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 20px 0;\\n}\\n.tab-btn {\\n  font-size: 22px;\\n  padding: 10px 20px;\\n  margin: 5px;\\n  display: flex;\\n  justify-content: center;\\n  gap: 20px;\\n  border: none;\\n  border-radius: 10px;\\n  background-color: transparent;\\n}\\n.tab-btn:hover {\\n  background-color: var(--primary-light);\\n}\\n.project-header {\\n  text-align: center;\\n  margin-bottom: 10px;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n.project-list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n.project-item {\\n  font-size: 18px;\\n  margin: 0;\\n}\\n/* Sidebar Form CSS */\\n.add-project {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n  padding: 0 20px;\\n}\\n.project-form-container {\\n  padding-top: 10px;\\n}\\n#project-input {\\n  width: 100%;\\n  font-size: 18px;\\n  line-height: 2rem;\\n}\\n.form-btns {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.form-btn {\\n  font-size: 18px;\\n  padding: 5px 10px;\\n  border: none;\\n  border-radius: 5px;\\n}\\n.add-btn {\\n  background-color: var(--primary-light);\\n}\\n.cancel-btn {\\n  background-color: var(--contrast-color);\\n}\\n/* Display CSS */\\n.display {\\n  width: 100%;\\n  height: 100%;\\n}\\n.list-header {\\n  padding-bottom: 5px;\\n  border-bottom: 1px solid gray;\\n  margin-bottom: 10px;\\n}\\n.list-display-container {\\n  background-color: white;\\n  font-size: 18px;\\n  margin: 5% auto 0;\\n  width: 90%;\\n  max-width: 1000px;\\n  height: 70vh;\\n}\\n.list-item {\\n  list-style: none;\\n  padding: 10px;\\n  border-bottom: thin solid lightgray;\\n}\\n.list-item-main {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.item-left,\\n.item-right {\\n  display: flex;\\n  gap: 10px;\\n}\\n.list-item-notes {\\n  color: gray;\\n  padding: 5px 0 5px 25px;\\n}\\n/* Footer CSS */\\nfooter {\\n  position: absolute;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translateX(-50%);\\n}\\nfooter p {\\n  letter-spacing: 0.1rem;\\n  padding: 10px;\\n}\\n/* Hide Element CSS */\\n.hidden {\\n  opacity: 0;\\n}\\n.not-visible {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n\n\n\n\n(0,_modules_projects__WEBPACK_IMPORTED_MODULE_1__.generateProjectList)();\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_modules_projects__WEBPACK_IMPORTED_MODULE_1__.projectList[\"Project 1\"]);\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ \"./src/modules/element.js\");\n\n\n\n\n\n// Elements\nconst displayContainer = document.querySelector(\".list-display-container\");\n\n// This module will need to import to key for the project\n\nconst project = _projects__WEBPACK_IMPORTED_MODULE_0__.projectList[\"Project 1\"];\nconsole.log(project);\n\nconst title = \"Project 1\";\nproject[1].complete = true;\n\nfunction generateDisplay(project) {\n  // Clear display container\n  [...displayContainer.children].forEach((child) =>\n    displayContainer.removeChild(child)\n  );\n\n  // How to get project name here...\n  displayContainer.appendChild((0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"h2\", [\"list-header\"], title));\n\n  addListEventListener(project);\n  displayContainer.appendChild(updateListContainer(project));\n}\n\n// How do I get the name of the project here...\n// function generateDisplayHeader(header) {\n//   const displayHeader = makeElement(\"h2\", [\"list-header\"], \"header\");\n\n//   return displayHeader;\n// }\n\n// Change name to updateDisplay\nfunction updateListContainer(project) {\n  const listContainer = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"ul\", [\"list-container\"]);\n\n  project.forEach((item, index) => {\n    const listItem = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"li\", [\"list-item\"]);\n    listItem.dataset.id = index;\n\n    const listItemMain = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"div\", [\"list-item-main\"]);\n\n    // Add icon with insertAdjacentHTML so HTML is parsed\n    const itemLeft = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"div\", [\"item-left\"]);\n    if (item.complete === true)\n      itemLeft.insertAdjacentHTML(\n        \"afterbegin\",\n        '<i class=\"far fa-check-square\"></i>'\n      );\n    else\n      itemLeft.insertAdjacentHTML(\n        \"afterbegin\",\n        '<i class=\"far fa-square\"></i>'\n      );\n\n    const taskTitle = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"p\", [\"task-title\"], item.title);\n    itemLeft.appendChild(taskTitle);\n    listItemMain.appendChild(itemLeft);\n\n    const itemRight = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"div\", [\"item-right\"]);\n    const date = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\"p\", [\"task-date\"], item.dueDate);\n    itemRight.appendChild(date);\n    itemRight.insertAdjacentHTML(\n      \"beforeend\",\n      '<i class=\"far fa-trash-alt\"></i>'\n    );\n    listItemMain.appendChild(itemRight);\n    listItem.appendChild(listItemMain);\n\n    const notes = (0,_element__WEBPACK_IMPORTED_MODULE_1__.makeElement)(\n      \"p\",\n      [\"list-item-notes\", \"not-visible\"],\n      item.description\n    );\n    listItem.appendChild(notes);\n\n    listContainer.appendChild(listItem);\n\n    // Modify display if item completed (separate function)\n    if (item.complete === \"true\") {\n      // Put check mark in box\n      document.querySelector(\".complete-marker\").classList.remove(\"fa-square\");\n      document\n        .querySelector(\".complete-marker\")\n        .classList.add(\"fa-check-square\");\n    }\n  });\n\n  return listContainer;\n}\n\nfunction addListEventListener(project) {\n  displayContainer.addEventListener(\"click\", function (e) {\n    console.log(e.target);\n    // const clicked = e.target.closest(\".list-item\");\n    // if (!clicked) return;\n    // console.log(clicked);\n\n    if (e.target.classList.contains(\"far\")) {\n      e.target.classList.toggle(\"fa-square\");\n      e.target.classList.toggle(\"fa-check-square\");\n      // Use data attribute to identify clicked item\n      const clickedIndex = e.target.closest(\".list-item\").dataset.id;\n      project[clickedIndex].complete = true;\n      console.log(project[clickedIndex]);\n    }\n  });\n}\n\n{\n  /* <li class=\"list-item\">\n              <div class=\"list-item-main\">\n                <div class=\"item-left\">\n                  <i class=\"far fa-check-square\"></i>\n                  <p class=\"task-title\">Wash the dishes</p>\n                </div>\n                <div class=\"item-right\">\n                  <p class=\"task-date\">10/14/21</p>\n                  <i class=\"far fa-trash-alt\"></i>\n                </div>\n              </div>\n              <p class=\"list-item-notes visible\">\n                These are notes for the list item.\n              </p>\n            </li> */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateDisplay);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/element.js":
/*!********************************!*\
  !*** ./src/modules/element.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeElement\": () => (/* binding */ makeElement)\n/* harmony export */ });\n\n\nfunction makeElement(element, classes = [], text = \"\") {\n  const el = document.createElement(element);\n  if (classes.length) {\n    classes.forEach((item) => el.classList.add(item));\n  }\n  if (text) {\n    el.textContent = text;\n  }\n  return el;\n}\n\n\n//# sourceURL=webpack://todo-list/./src/modules/element.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateProjectList\": () => (/* binding */ generateProjectList),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ \"./src/modules/element.js\");\n\n\n\n\n// Elements\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\nconst projectFormContainer = document.querySelector(\".project-form-container\");\nconst projectForm = document.querySelector(\".add-project\");\nconst projectInput = document.querySelector(\"#project-input\");\nconst projectFormCancelBtn = document.querySelector(\".cancel-btn\");\n\n// Functions\nconst openProjectForm = function (e) {\n  e.preventDefault();\n  addProjectBtn.classList.add(\"not-visible\");\n  projectFormContainer.classList.remove(\"not-visible\");\n};\n\nconst closeProjectForm = function () {\n  addProjectBtn.classList.remove(\"not-visible\");\n  projectFormContainer.classList.add(\"not-visible\");\n};\n\nconst clearProjectForm = function (e) {\n  projectInput.value = \"\";\n};\n\n// Todo object class\nclass Todo {\n  constructor(title, dueDate, description, priority) {\n    this.title = title;\n    this.dueDate = dueDate;\n    this.description = description;\n    this.priority = priority;\n    this.complete = false;\n  }\n}\n\nconst item1 = new Todo(\"Wash dishes\", \"10/16/2021\", \"Sink is very dirty\");\nconst item2 = new Todo(\"Get gas\", \"10/15/2021\", \"Low tank\");\n\naddProjectBtn.addEventListener(\"click\", openProjectForm);\n\n// Store projects in object\nconst projectList = {\n  \"Project 1\": [item1, item2, item1, item2, item1, item2],\n  \"Project 2\": [],\n};\n\n// Add project name to object on form submission\nprojectForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  // Check that project name is available\n  if (Object.keys(projectList).includes(projectInput.value)) {\n    console.log(`Project name \"${projectInput.value}\" is already taken.`);\n    return;\n  }\n  // Add project name to object\n  projectList[projectInput.value] = [];\n  clearProjectForm();\n  closeProjectForm();\n  console.log(projectList);\n  generateProjectList();\n});\n\nprojectFormCancelBtn.addEventListener(\"click\", function () {\n  clearProjectForm();\n  closeProjectForm();\n});\n\nfunction generateProjectList() {\n  const projectListContainer = document.querySelector(\".project-list\");\n  const projectItems = document.querySelectorAll(\".project-item\");\n\n  // Clear project list\n  projectItems.forEach((item) => {\n    projectListContainer.removeChild(item);\n  });\n\n  // Generate sidebar project item for each project in list\n  Object.keys(projectList).forEach((project, index) => {\n    const projectItem = (0,_element__WEBPACK_IMPORTED_MODULE_0__.makeElement)(\n      \"button\",\n      [\"tab-btn\", \"project-item\"],\n      project\n    );\n    projectItem.dataset.id = index;\n    projectItem.insertAdjacentHTML(\n      \"afterbegin\",\n      \"<i class='fas fa-tasks'></i>\"\n    );\n    projectItem.insertAdjacentHTML(\n      \"beforeend\",\n      \"<i class='fas fa-times-circle hidden'></i>\"\n    );\n    console.log(projectItem);\n\n    projectListContainer.appendChild(projectItem);\n  });\n\n  // Add event listener to project list\n  projectListContainer.addEventListener(\"click\", function (e) {\n    const clicked = e.target.closest(\"button\");\n    console.log(clicked);\n  });\n\n  return projectListContainer;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;