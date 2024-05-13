"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Features/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Features/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Features = ()=>{\n    _s();\n    const bottleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollPosition = window.scrollY;\n            if (bottleRef.current) {\n                // Calculate vertical positioning to center the bottle over the background image\n                const containerHeight = window.innerHeight;\n                const bottleHeight = bottleRef.current.clientHeight;\n                const verticalOffset = (containerHeight - bottleHeight) / 2;\n                // Move the bottle vertically based on scroll position\n                bottleRef.current.style.transform = \"translateY(\".concat(verticalOffset, \"px)\");\n            }\n        };\n        // Attach scroll event listener to the window to handle overall page scrolling\n        window.addEventListener(\"scroll\", handleScroll);\n        // Call handleScroll initially to position the bottle correctly\n        handleScroll();\n        // Clean up the event listener on component unmount\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-white dark:bg-gray-dark mt-10 mb-10\",\n        style: {\n            minHeight: \"100vh\",\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex justify-center items-center h-full relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/Component1.png\",\n                    alt: \"Background\",\n                    className: \"min-w-full md:max-w-none object-cover object-center z-0\",\n                    style: {\n                        width: \"100%\",\n                        height: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/transparentbottle.png\",\n                    alt: \"Bottle\",\n                    className: \"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10\",\n                    style: {\n                        maxWidth: \"50%\",\n                        opacity: 0.7\n                    },\n                    ref: bottleRef\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Features, \"yTBm8xk0MG0NWD3gEkqN2MHk2Xs=\");\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUQ7QUFFakQsTUFBTUcsV0FBVzs7SUFDZixNQUFNQyxZQUFZRiw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxlQUFlO1lBQ25CLE1BQU1DLGlCQUFpQkMsT0FBT0MsT0FBTztZQUVyQyxJQUFJSixVQUFVSyxPQUFPLEVBQUU7Z0JBQ3JCLGdGQUFnRjtnQkFDaEYsTUFBTUMsa0JBQWtCSCxPQUFPSSxXQUFXO2dCQUMxQyxNQUFNQyxlQUFlUixVQUFVSyxPQUFPLENBQUNJLFlBQVk7Z0JBQ25ELE1BQU1DLGlCQUFpQixDQUFDSixrQkFBa0JFLFlBQVcsSUFBSztnQkFFMUQsc0RBQXNEO2dCQUN0RFIsVUFBVUssT0FBTyxDQUFDTSxLQUFLLENBQUNDLFNBQVMsR0FBRyxjQUE2QixPQUFmRixnQkFBZTtZQUNuRTtRQUNGO1FBRUEsOEVBQThFO1FBQzlFUCxPQUFPVSxnQkFBZ0IsQ0FBQyxVQUFVWjtRQUVsQywrREFBK0Q7UUFDL0RBO1FBRUEsbURBQW1EO1FBQ25ELE9BQU87WUFDTEUsT0FBT1csbUJBQW1CLENBQUMsVUFBVWI7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ2M7UUFBUUMsV0FBVTtRQUF5Q0wsT0FBTztZQUFFTSxXQUFXO1lBQVNDLFVBQVU7UUFBUztrQkFDMUcsNEVBQUNDO1lBQUlILFdBQVU7OzhCQUViLDhEQUFDSTtvQkFDQ0MsS0FBSTtvQkFDSkMsS0FBSTtvQkFDSk4sV0FBVTtvQkFDVkwsT0FBTzt3QkFBRVksT0FBTzt3QkFBUUMsUUFBUTtvQkFBTzs7Ozs7OzhCQUl6Qyw4REFBQ0o7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pOLFdBQVU7b0JBQ1ZMLE9BQU87d0JBQUVjLFVBQVU7d0JBQU9DLFNBQVM7b0JBQUk7b0JBQ3ZDQyxLQUFLM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2Y7R0FwRE1EO0tBQUFBO0FBc0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeD84YTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZlYXR1cmVzID0gKCkgPT4ge1xuICBjb25zdCBib3R0bGVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICBpZiAoYm90dGxlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHZlcnRpY2FsIHBvc2l0aW9uaW5nIHRvIGNlbnRlciB0aGUgYm90dGxlIG92ZXIgdGhlIGJhY2tncm91bmQgaW1hZ2VcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb25zdCBib3R0bGVIZWlnaHQgPSBib3R0bGVSZWYuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHZlcnRpY2FsT2Zmc2V0ID0gKGNvbnRhaW5lckhlaWdodCAtIGJvdHRsZUhlaWdodCkgLyAyO1xuXG4gICAgICAgIC8vIE1vdmUgdGhlIGJvdHRsZSB2ZXJ0aWNhbGx5IGJhc2VkIG9uIHNjcm9sbCBwb3NpdGlvblxuICAgICAgICBib3R0bGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke3ZlcnRpY2FsT2Zmc2V0fXB4KWA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEF0dGFjaCBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHdpbmRvdyB0byBoYW5kbGUgb3ZlcmFsbCBwYWdlIHNjcm9sbGluZ1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgLy8gQ2FsbCBoYW5kbGVTY3JvbGwgaW5pdGlhbGx5IHRvIHBvc2l0aW9uIHRoZSBib3R0bGUgY29ycmVjdGx5XG4gICAgaGFuZGxlU2Nyb2xsKCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LWRhcmsgbXQtMTAgbWItMTBcIiBzdHlsZT17eyBtaW5IZWlnaHQ6ICcxMDB2aCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHJlbGF0aXZlXCI+XG4gICAgICAgIHsvKiBPcmlnaW5hbCBJbWFnZSAqL31cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaGVyby9Db21wb25lbnQxLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiQmFja2dyb3VuZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWluLXctZnVsbCBtZDptYXgtdy1ub25lIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyIHotMFwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogVHJhbnNwYXJlbnQgQm90dGxlIEltYWdlICovfVxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9oZXJvL3RyYW5zcGFyZW50Ym90dGxlLnBuZ1wiXG4gICAgICAgICAgYWx0PVwiQm90dGxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgei0xMFwiXG4gICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICc1MCUnLCBvcGFjaXR5OiAwLjcgfX1cbiAgICAgICAgICByZWY9e2JvdHRsZVJlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRmVhdHVyZXMiLCJib3R0bGVSZWYiLCJoYW5kbGVTY3JvbGwiLCJzY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFkiLCJjdXJyZW50IiwiY29udGFpbmVySGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3R0bGVIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJ2ZXJ0aWNhbE9mZnNldCIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWluSGVpZ2h0Iiwib3ZlcmZsb3ciLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1heFdpZHRoIiwib3BhY2l0eSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Features/index.tsx\n"));

/***/ })

});