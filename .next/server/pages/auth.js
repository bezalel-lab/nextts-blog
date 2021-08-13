/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/auth";
exports.ids = ["pages/auth"];
exports.modules = {

/***/ "./firebase/clientApp.ts":
/*!*******************************!*\
  !*** ./firebase/clientApp.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst clientCredentials = {\n  apiKey: \"AIzaSyAGgsPo-hJ1e0FxTSnvi1iR63PjLcPAqM4\",\n  authDomain: \"nextts-blog.firebaseapp.com\",\n  projectId: \"nextts-blog\",\n  storageBucket: \"nextts-blog.appspot.com\",\n  messagingSenderId: \"64055334384\",\n  appId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_APP_ID\n};\n\nif (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n  firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(clientCredentials);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vZmlyZWJhc2UvY2xpZW50QXBwLnRzPzVjNDUiXSwibmFtZXMiOlsiY2xpZW50Q3JlZGVudGlhbHMiLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX0FQUF9JRCIsImZpcmViYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLFFBQU0sRUFBRUMseUNBRGdCO0FBRXhCQyxZQUFVLEVBQUVELDZCQUZZO0FBR3hCRSxXQUFTLEVBQUVGLGFBSGE7QUFJeEJHLGVBQWEsRUFBRUgseUJBSlM7QUFLeEJJLG1CQUFpQixFQUFFSixhQUxLO0FBTXhCSyxPQUFLLEVBQUVMLE9BQU8sQ0FBQ00sR0FBUixDQUFZQztBQU5LLENBQTFCOztBQVNBLElBQUksQ0FBQ0MsaUVBQUwsRUFBMkI7QUFDekJBLG1FQUFBLENBQXVCVixpQkFBdkI7QUFDRDs7QUFFRCwrREFBZVUscURBQWYiLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnRBcHAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGNsaWVudENyZWRlbnRpYWxzID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19BUFBfSUQsXG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY2xpZW50Q3JlZGVudGlhbHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/clientApp.ts\n");

/***/ }),

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/auth.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.ts\");\n\nvar _jsxFileName = \"/Users/motohashitomoki/OneFolder/Programming/Nextjs/nextjs-blog/pages/auth.tsx\";\n\n\n // Configure firebaseui\n\nconst uiConfig = {\n  // Redirect to / after sign in is successful. Alternatively you can provide a callback[......]\n  signInSuccessUrl: \"/\",\n  // We will display GitHub as auth providers.\n  signInOptions: [_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.default.auth.GithubAuthProvider.PROVIDER_ID]\n};\n\nfunction SinInScreen() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      maxWidth: '320px',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Nextts-blog Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: \"Please sign-in:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default()), {\n      uiConfig: uiConfig,\n      firebaseAuth: _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.default.auth()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SinInScreen);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYXV0aC50c3g/YTg4YSJdLCJuYW1lcyI6WyJ1aUNvbmZpZyIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiZmlyZWJhc2UiLCJTaW5JblNjcmVlbiIsIm1heFdpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHO0FBQ2I7QUFDQUMsa0JBQWdCLEVBQUUsR0FGTDtBQUdiO0FBQ0FDLGVBQWEsRUFBRSxDQUFDQyw0RkFBRDtBQUpGLENBQWpCOztBQU9BLFNBQVNDLFdBQVQsR0FBdUI7QUFDbkIsc0JBQ0k7QUFDSSxTQUFLLEVBQUU7QUFDSEMsY0FBUSxFQUFFLE9BRFA7QUFFSEMsYUFBTyxFQUFFLE1BRk47QUFHSEMsbUJBQWEsRUFBRSxRQUhaO0FBSUhDLGdCQUFVLEVBQUUsUUFKVDtBQUtIQyxvQkFBYyxFQUFFO0FBTGIsS0FEWDtBQUFBLDRCQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBV0UsOERBQUMsNEVBQUQ7QUFBb0IsY0FBUSxFQUFFVCxRQUE5QjtBQUF3QyxrQkFBWSxFQUFFRyw2REFBQTtBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7QUFFRCwrREFBZUMsV0FBZiIsImZpbGUiOiIuL3BhZ2VzL2F1dGgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZWRGaXJlYmFzZUF1dGggZnJvbSAncmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGgnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudEFwcCc7XG5cbi8vIENvbmZpZ3VyZSBmaXJlYmFzZXVpXG5jb25zdCB1aUNvbmZpZyA9IHtcbiAgICAvLyBSZWRpcmVjdCB0byAvIGFmdGVyIHNpZ24gaW4gaXMgc3VjY2Vzc2Z1bC4gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHByb3ZpZGUgYSBjYWxsYmFja1suLi4uLi5dXG4gICAgc2lnbkluU3VjY2Vzc1VybDogXCIvXCIsXG4gICAgLy8gV2Ugd2lsbCBkaXNwbGF5IEdpdEh1YiBhcyBhdXRoIHByb3ZpZGVycy5cbiAgICBzaWduSW5PcHRpb25zOiBbZmlyZWJhc2UuYXV0aC5HaXRodWJBdXRoUHJvdmlkZXIuUFJPVklERVJfSURdLFxufTtcblxuZnVuY3Rpb24gU2luSW5TY3JlZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMyMHB4JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMT5OZXh0dHMtYmxvZyBMb2dpbjwvaDE+XG4gICAgICAgICAgPHA+UGxlYXNlIHNpZ24taW46PC9wPlxuICAgICAgICAgIDxTdHlsZWRGaXJlYmFzZUF1dGggdWlDb25maWc9e3VpQ29uZmlnfSBmaXJlYmFzZUF1dGg9e2ZpcmViYXNlLmF1dGgoKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2luSW5TY3JlZW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth.tsx\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/firestore");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-firebaseui/StyledFirebaseAuth");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/auth.tsx"));
module.exports = __webpack_exports__;

})();