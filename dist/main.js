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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* style.css */\\n/* General CSS */\\n:root {\\n  --primary-dark: #1d3557;\\n  --secondary-dark: #457b9d;\\n  --primary-light: #a8dadc;\\n  --secondary-light: #f1faee;\\n  --contrast-color: #e63946;\\n}\\n* {\\n  padding: 0;\\n  margin: 0;\\n}\\nhtml {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  height: 100vh;\\n}\\nmain {\\n  display: flex;\\n  width: 100%;\\n}\\n/* Header CSS */\\nheader {\\n  display: flex;\\n  align-items: center;\\n  padding: 10px 20px;\\n  margin-bottom: 20px;\\n}\\n.fa-sticky-note {\\n  font-size: 26px;\\n  transition: 1s ease-out;\\n  color: var(--primary-dark);\\n}\\n.fa-sticky-note:hover {\\n  transform: scale(1.3);\\n}\\n#page-name {\\n  color: var(--primary-dark);\\n  font-weight: 400;\\n  text-transform: uppercase;\\n  letter-spacing: 0.2rem;\\n  margin-left: 20px;\\n}\\n/* Main CSS */\\nmain {\\n  height: 100vh;\\n  display: flex;\\n  align-items: flex-start;\\n}\\n/* Sidebar CSS */\\n.sidebar {\\n  border: 1px solid gray;\\n  padding: 10px;\\n  margin: 0 10px;\\n  box-shadow: 0 0 6px var(--secondary-dark);\\n  min-width: 205px;\\n}\\n.default-project-container,\\n.user-project-container {\\n  display: flex;\\n  flex-direction: column;\\n  margin: 20px 0;\\n}\\n.tab-btn {\\n  font-size: 20px;\\n  padding: 10px 20px;\\n  margin: 5px;\\n  display: flex;\\n  justify-content: center;\\n  gap: 20px;\\n  border: none;\\n  border-radius: 10px;\\n  background-color: transparent;\\n}\\n.tab-btn:hover {\\n  background-color: lightgrey;\\n}\\n.project-header {\\n  text-align: center;\\n  margin-bottom: 10px;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n.project-list {\\n  display: flex;\\n  flex-direction: column;\\n}\\n/* .project-item {\\n  font-size: 18px;\\n  margin: 0;\\n} */\\n/* Sidebar Form CSS */\\n.add-project {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n  padding: 0 20px;\\n}\\n.project-form-container {\\n  padding-top: 10px;\\n}\\n#project-input {\\n  width: 100%;\\n  font-size: 18px;\\n  line-height: 2rem;\\n}\\n.form-btns {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n.form-btn {\\n  font-size: 18px;\\n  padding: 5px 10px;\\n  border: none;\\n  border-radius: 5px;\\n}\\n.add-btn {\\n  background-color: var(--primary-light);\\n}\\n.cancel-btn {\\n  background-color: var(--contrast-color);\\n}\\n/* Display CSS */\\n.display {\\n  width: 100%;\\n  height: 100%;\\n}\\n.list-header {\\n  display: flex;\\n  justify-content: space-between;\\n  border-bottom: 1px solid gray;\\n}\\n.list-title {\\n  padding-bottom: 5px;\\n  margin-bottom: 10px;\\n}\\n.delete-proj-btn {\\n  font-size: 24px;\\n  color: gray;\\n  padding: 0 5px;\\n  background-color: transparent;\\n  border: none;\\n}\\n.delete-proj-btn:hover {\\n  color: black;\\n}\\n.display-container {\\n  background-color: white;\\n  font-size: 18px;\\n  margin: 0 auto;\\n  width: 90%;\\n  max-width: 1000px;\\n}\\n.list-item {\\n  list-style: none;\\n  padding: 10px;\\n  border-bottom: thin solid lightgray;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.list-item-left,\\n.list-item-right {\\n  display: flex;\\n  gap: 10px;\\n}\\n/* Add Task CSS */\\n.new-task-container {\\n  width: 90%;\\n  max-width: 1000px;\\n  margin: 0 auto;\\n}\\n.task-form-container {\\n  margin-top: 10px;\\n  margin-bottom: 50px;\\n}\\n.add-task-btn {\\n  font-size: 18px;\\n}\\n.add-task-btn:hover {\\n  background-color: lightgray;\\n}\\n.task-form {\\n  border: 1px solid gray;\\n  border-radius: 5px;\\n  padding: 20px;\\n  font-size: 18px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n.task-form input,\\n.task-form select,\\n.task-form textarea {\\n  font-size: 18px;\\n}\\n.task-form label {\\n  margin-right: 10px;\\n}\\n.task-title-container,\\n.task-form-2 {\\n  margin-bottom: 10px;\\n  display: flex;\\n  align-items: center;\\n}\\n.task-form-2 {\\n  gap: 50px;\\n}\\n#task-title {\\n  width: 70%;\\n}\\n.task-form-btns {\\n  margin-top: 10px;\\n  display: flex;\\n  justify-content: flex-end;\\n  gap: 20px;\\n}\\n.task-btn {\\n  font-size: 18px;\\n  padding: 5px 10px;\\n}\\n/* Footer CSS */\\nfooter {\\n  position: fixed;\\n  bottom: 0;\\n  left: 50%;\\n  width: 100%;\\n  transform: translateX(-50%);\\n  background-color: white;\\n}\\nfooter p {\\n  letter-spacing: 0.1rem;\\n  padding: 10px;\\n  text-align: center;\\n}\\n/* Modifiers CSS */\\n.complete {\\n  color: lightgrey;\\n  text-decoration: line-through;\\n}\\n.hidden {\\n  opacity: 0;\\n}\\n.not-visible {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n\n\n\n(0,_modules_display__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeWebsite\": () => (/* binding */ initializeWebsite)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/modules/projectList.js\");\n/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element */ \"./src/modules/element.js\");\n\n\n\n\n\n\n\n// ELEMENTS\nconst projectContainer = document.querySelector(\".sidebar\");\nconst defaultProjectContainer = document.querySelector(\n  \".default-project-container\"\n);\nconst userProjectContainer = document.querySelector(\".user-project-container\");\nconst addProjectBtn = document.querySelector(\".add-project-btn\");\nconst projectFormContainer = document.querySelector(\".project-form-container\");\nconst projectForm = document.querySelector(\".add-project\");\nconst projectInputField = document.querySelector(\"#project-input\");\nconst projectSubmitBtn = document.querySelector(\".add-btn\");\nconst projectCancelBtn = document.querySelector(\".cancel-btn\");\n\nconst displayContainer = document.querySelector(\".display-container\");\nconst displayTitle = document.querySelector(\".list-title\");\nconst deleteProjBtn = document.querySelector(\".delete-proj-btn\");\n\nconst addTaskBtn = document.querySelector(\".add-task-btn\");\nconst taskFormContainer = document.querySelector(\".task-form-container\");\nconst taskForm = document.querySelector(\".task-form\");\nconst taskTitleInput = document.querySelector(\"#task-title\");\nconst taskDateInput = document.querySelector(\"#task-date\");\nconst taskPriorityInput = document.querySelector(\"#task-priority\");\nconst taskSubmitBtn = document.querySelector(\".task-submit\");\nconst taskCancelBtn = document.querySelector(\".task-cancel\");\n\n// Default To Do list\nconst defaultToDo = new _projectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList();\n\nconst project1 = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\"Chores\");\nconst project2 = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\"Groceries\");\nconst dishes = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(\"Wash dishes\", \"10/20/2021\");\nproject1.addTask(dishes);\n\ndefaultToDo.addProject(project1);\ndefaultToDo.addProject(project2);\n\n// console.log(defaultToDo.getProject(\"Chores\").getTasksToday());\n\n// Default to \"Today\" project\nlet activeProjectIndex = 0;\nlet myToDo = defaultToDo;\n\n// FUNCTIONS\nfunction storeLocal(todoList) {\n  localStorage.setItem(\"storedToDo\", JSON.stringify(todoList));\n}\n\nfunction retrieveLocal() {\n  // console.log(\"default\", defaultToDo.getProjectAtIndex(2).getTasks());\n  const data = JSON.parse(localStorage.getItem(\"storedToDo\"));\n\n  if (data) {\n    // console.log(\"storedToDo\", data);\n    // console.log(Object.entries(data)[0][1]);\n    const newProjList = new _projectList__WEBPACK_IMPORTED_MODULE_2__.ProjectList();\n    Object.entries(data)[0][1].forEach((item, index) => {\n      // console.log(item.taskList);\n      const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(item.name);\n      // console.log(\"item task\", item.taskList);\n      item.taskList.forEach((task) => {\n        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(task.name, task.date);\n        if (task.isComplete) newTask.changeCompleteStatus();\n        newProject.addTask(newTask);\n      });\n      newProject.getTasksToday;\n      // newProject.setTasks(item.taskList);\n      // console.log(\"new project\", newProject);\n      if (index > 1) newProjList.addProject(newProject);\n    });\n\n    // console.log(newProjList);\n    // newProjList.updateTodayList();\n    myToDo = newProjList;\n  } else myToDo = defaultToDo; // If no stored data, use default\n}\n\nfunction openProjectForm() {\n  addProjectBtn.classList.add(\"not-visible\");\n  projectFormContainer.classList.remove(\"not-visible\");\n}\n\nfunction closeProjectForm() {\n  projectInputField.value = \"\";\n  addProjectBtn.classList.remove(\"not-visible\");\n  projectFormContainer.classList.add(\"not-visible\");\n}\n\nfunction clearTaskForm() {\n  taskTitleInput.value = \"\";\n  taskDateInput.value = \"\";\n  // taskPriorityInput.value = \"\";\n}\n\nfunction openTaskForm() {\n  addTaskBtn.classList.add(\"not-visible\");\n  taskFormContainer.classList.remove(\"not-visible\");\n}\n\nfunction closeTaskForm() {\n  addTaskBtn.classList.remove(\"not-visible\");\n  taskFormContainer.classList.add(\"not-visible\");\n  clearTaskForm();\n}\n\n// Check local storage\nretrieveLocal();\n\nfunction initializeWebsite() {\n  updateProjectList();\n  updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));\n}\n\nfunction updateProjectList() {\n  // Clear existing project list\n  document.querySelector(\".project-list\").remove();\n\n  // Create new project list\n  const projectList = (0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"div\", [\"project-list\"]);\n\n  // Generate buttons for user project list\n  const currentProjects = myToDo.getProjects();\n  currentProjects.forEach((project, index) => {\n    if (project.getName() !== \"Today\" && project.getName() !== \"Week\") {\n      const projectBtn = (0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\n        \"button\",\n        [\"tab-btn\", \"project-item\"],\n        project.getName()\n      );\n      projectBtn.insertAdjacentHTML(\n        \"afterbegin\",\n        '<i class=\"fas fa-tasks\"></i>'\n      );\n      projectBtn.dataset.id = index;\n      projectList.appendChild(projectBtn);\n    }\n  });\n\n  // Add event listener to project list;\n  projectContainer.addEventListener(\"click\", function (e) {\n    const clicked = e.target.closest(\"button\");\n    if (!clicked) return;\n    if (clicked.classList.contains(\"project-item\")) {\n      activeProjectIndex = e.target.closest(\"button\").dataset.id;\n      updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));\n    }\n  });\n\n  userProjectContainer.prepend(projectList);\n  // storeLocal(myToDo);\n}\n\nfunction updateProjectDisplay(project) {\n  // Clear display\n  document.querySelector(\".list-container\").remove();\n\n  // Update title\n  displayTitle.textContent = myToDo\n    .getProjectAtIndex(activeProjectIndex)\n    .getName();\n  if (activeProjectIndex < 2) {\n    deleteProjBtn.classList.add(\"not-visible\");\n  } else if (activeProjectIndex >= 2) {\n    deleteProjBtn.classList.remove(\"not-visible\");\n  }\n\n  // Create new list container\n  const listContainer = (0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"ul\", [\"list-container\"]);\n  // Create list items and append to list container\n  const taskList = project.getTasks();\n  taskList.forEach((task, index) => {\n    const listItem = (0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"li\", [\"list-item\"]);\n    listItem.dataset.id = index;\n\n    // List item left side\n    const listItemLeft = (0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"div\", [\"list-item-left\"]);\n    listItemLeft.appendChild((0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"p\", [\"task-title\"], task.getName()));\n    if (task.getCompleteStatus())\n      listItemLeft.insertAdjacentHTML(\n        \"afterbegin\",\n        '<i class=\"far fa-check-square\"></i>'\n      );\n    else\n      listItemLeft.insertAdjacentHTML(\n        \"afterbegin\",\n        '<i class=\"far fa-square\"></i>'\n      );\n\n    // List item right side\n    const listItemRight = (0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"div\", [\"list-item-right\"]);\n    listItemRight.appendChild((0,_element__WEBPACK_IMPORTED_MODULE_3__.makeElement)(\"p\", [\"task-date\"], task.getDate()));\n    listItemRight.insertAdjacentHTML(\n      \"beforeend\",\n      '<i class=\"far fa-trash-alt\"></i>'\n    );\n\n    listItem.appendChild(listItemLeft);\n    listItem.appendChild(listItemRight);\n\n    if (task.getCompleteStatus()) {\n      listItem.style.color = \"lightgray\";\n      listItem.querySelectorAll(\"p\").forEach((item) => {\n        item.classList.add(\"complete\");\n      });\n    }\n\n    listContainer.appendChild(listItem);\n  });\n\n  displayContainer.appendChild(listContainer);\n\n  // Add event listener to list items\n  listContainer.addEventListener(\"click\", function (e) {\n    const targetItem = e.target.closest(\"li\").dataset.id;\n    // Delete item\n    if (e.target.classList.contains(\"fa-trash-alt\")) {\n      myToDo\n        .getProjectAtIndex(activeProjectIndex)\n        .removeTaskAtIndex(targetItem);\n      updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));\n    }\n    // Mark complete\n    else if (\n      e.target.classList.contains(\"fa-square\") ||\n      e.target.classList.contains(\"fa-check-square\")\n    ) {\n      myToDo\n        .getProjectAtIndex(activeProjectIndex)\n        .getTaskAtIndex(targetItem)\n        .changeCompleteStatus();\n      updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));\n    }\n    storeLocal(myToDo);\n  });\n\n  // storeLocal(myToDo);\n}\n\n// EVENT LISTENERS\n// Add project\naddProjectBtn.addEventListener(\"click\", openProjectForm);\nprojectCancelBtn.addEventListener(\"click\", closeProjectForm);\nprojectForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  const newProject = projectInputField.value;\n  if (myToDo.checkProjectName(newProject))\n    myToDo.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(newProject));\n  else alert(`${newProject} already in use.`);\n  closeProjectForm();\n  updateProjectList();\n  storeLocal(myToDo);\n});\n\n// Delete project\ndeleteProjBtn.addEventListener(\"click\", function () {\n  console.log(\"Delete project\", myToDo.getProjectAtIndex(activeProjectIndex));\n  myToDo.removeProject(myToDo.getProjectAtIndex(activeProjectIndex));\n  activeProjectIndex--;\n  updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));\n  updateProjectList();\n  storeLocal(myToDo);\n});\n\n// Add task form\naddTaskBtn.addEventListener(\"click\", openTaskForm);\ntaskCancelBtn.addEventListener(\"click\", closeTaskForm);\n\ntaskForm.addEventListener(\"submit\", function (e) {\n  e.preventDefault();\n  const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(taskTitleInput.value, taskDateInput.value);\n\n  myToDo.getProjectAtIndex(activeProjectIndex).addTask(newTask);\n  closeTaskForm();\n  updateProjectDisplay(myToDo.getProjectAtIndex(activeProjectIndex));\n  storeLocal(myToDo);\n});\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/element.js":
/*!********************************!*\
  !*** ./src/modules/element.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeElement\": () => (/* binding */ makeElement)\n/* harmony export */ });\n\n\nfunction makeElement(element, classes = [], text = \"\") {\n  const el = document.createElement(element);\n  if (classes.length) {\n    classes.forEach((item) => el.classList.add(item));\n  }\n  if (text) {\n    el.textContent = text;\n  }\n  return el;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/element.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.taskList = [];\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setTasks(tasks) {\n    this.taskList = tasks;\n  }\n\n  getTasks() {\n    return this.taskList;\n  }\n\n  getTaskAtIndex(index) {\n    return this.taskList[index];\n  }\n\n  getTaskNames() {\n    return this.taskList.map((task) => task.getName());\n  }\n\n  addTask(task) {\n    if (this.getTaskNames().includes(task.getName())) {\n      alert(\"This task already exists.\");\n      return;\n    }\n    this.taskList.push(task);\n  }\n\n  removeTask(task) {\n    this.taskList = this.taskList.filter((item) => item !== task);\n  }\n\n  removeTaskAtIndex(index) {\n    this.taskList.splice(index, 1);\n  }\n\n  getTasksToday() {\n    // const today = new Date();\n    // console.log(today);\n    // console.log(isToday(today));\n    // return this.taskList.filter((task) =>\n    //   isToday(format(parseISO(task.getFormattedDate()), \"MM/dd/yyyy\"))\n    // );\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/projectList.js":
/*!************************************!*\
  !*** ./src/modules/projectList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nclass ProjectList {\n  constructor() {\n    this.projectList = [];\n    this.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Today\"));\n    this.projectList.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Week\"));\n  }\n\n  getProjects() {\n    return this.projectList;\n  }\n\n  getProject(projectName) {\n    return this.projectList.find(\n      (project) => project.getName() === projectName\n    );\n  }\n\n  getProjectAtIndex(index) {\n    return this.projectList[index];\n  }\n\n  checkProjectName(name) {\n    if (!this.projectList.map((project) => project.name).includes(name))\n      return true;\n  }\n\n  addProject(project) {\n    if (this.projectList.includes(project)) return;\n    this.projectList.push(project);\n  }\n\n  removeProject(project) {\n    this.projectList = this.projectList.filter((item) => item !== project);\n  }\n\n  updateTodayList() {\n    this.getProject(\"Today\").taskList = [];\n    console.log(this.getProject(\"Today\"));\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projectList.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(name, date = \"No date\") {\n    this.name = name;\n    this.date = date;\n    this.isComplete = false;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setDate(date) {\n    this.date = date;\n  }\n\n  getDate() {\n    return this.date;\n  }\n\n  getFormattedDate() {\n    const month = this.date.split(\"/\")[0];\n    const day = this.date.split(\"/\")[1];\n    const year = this.date.split(\"/\")[2];\n    return `${month}/${day}/${year}`;\n  }\n\n  getCompleteStatus() {\n    return this.isComplete;\n  }\n\n  changeCompleteStatus() {\n    this.isComplete === false\n      ? (this.isComplete = true)\n      : (this.isComplete = false);\n    return this.isComplete;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

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