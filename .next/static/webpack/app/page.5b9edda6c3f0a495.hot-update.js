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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Features = ()=>{\n    _s();\n    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Update scroll position state on scroll\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const position = window.scrollY;\n            setScrollPosition(position);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    // Inline styles for parallax effect\n    const parallaxContainerStyle = {\n        position: \"relative\",\n        minHeight: \"100vh\",\n        width: \"100vw\",\n        overflow: \"hidden\",\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\"\n    };\n    const parallaxImageStyle = {\n        position: \"absolute\",\n        top: \"\".concat(-scrollPosition * 0.5, \"px\"),\n        left: \"50%\",\n        transform: \"translate(-50%, 0)\",\n        width: \"80%\",\n        maxWidth: \"100%\",\n        height: \"auto\",\n        zIndex: -1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"home\",\n        className: \"bg-white dark:bg-gray-dark mt-10 mb-10\",\n        style: parallaxContainerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: parallaxImageStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/transparentbottle.png\",\n                    alt: \"Transparent Bottle\",\n                    className: \"object-cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full overflow-auto flex justify-center items-start md:items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/Component1.png\",\n                    alt: \"Original Image\",\n                    className: \"min-h-full min-w-full md:h-auto md:max-w-none object-cover object-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Features, \"Q2iK3kJoTBUHGJF6VgTmVb/ctE4=\");\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDbUQ7QUFFbkQsTUFBTUcsV0FBVzs7SUFDZixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBRXJELHlDQUF5QztJQUN6Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxlQUFlO1lBQ25CLE1BQU1DLFdBQVdDLE9BQU9DLE9BQU87WUFDL0JKLGtCQUFrQkU7UUFDcEI7UUFFQUMsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUo7UUFFbEMsT0FBTztZQUNMRSxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVTDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLG9DQUFvQztJQUNwQyxNQUFNTSx5QkFBeUI7UUFDN0JMLFVBQVU7UUFDVk0sV0FBVztRQUNYQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7SUFDZDtJQUVBLE1BQU1DLHFCQUFxQjtRQUN6QlosVUFBVTtRQUNWYSxLQUFLLEdBQXlCLE9BQXRCLENBQUNoQixpQkFBaUIsS0FBSTtRQUM5QmlCLE1BQU07UUFDTkMsV0FBVztRQUNYUixPQUFPO1FBQ1BTLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxRQUFRLENBQUM7SUFDWDtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxJQUFHO1FBQ0hDLFdBQVU7UUFDVkMsT0FBT2pCOzswQkFHUCw4REFBQ2tCO2dCQUFJRCxPQUFPVjswQkFDViw0RUFBQ1k7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pMLFdBQVU7Ozs7Ozs7Ozs7OzBCQUtkLDhEQUFDRTtnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ0c7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pMLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBaEVNekI7S0FBQUE7QUFrRU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmVhdHVyZXMvaW5kZXgudHN4PzhhNTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGZWF0dXJlcyA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBVcGRhdGUgc2Nyb2xsIHBvc2l0aW9uIHN0YXRlIG9uIHNjcm9sbFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICAvLyBJbmxpbmUgc3R5bGVzIGZvciBwYXJhbGxheCBlZmZlY3RcbiAgY29uc3QgcGFyYWxsYXhDb250YWluZXJTdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH07XG5cbiAgY29uc3QgcGFyYWxsYXhJbWFnZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogYCR7LXNjcm9sbFBvc2l0aW9uICogMC41fXB4YCxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMCknLFxuICAgIHdpZHRoOiAnODAlJywgLy8gQWRqdXN0IHdpZHRoIGFzIG5lZWRlZFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgekluZGV4OiAtMSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImhvbWVcIlxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LWRhcmsgbXQtMTAgbWItMTBcIlxuICAgICAgc3R5bGU9e3BhcmFsbGF4Q29udGFpbmVyU3R5bGV9XG4gICAgPlxuICAgICAgey8qIFRyYW5zcGFyZW50IEJvdHRsZSBJbWFnZSB3aXRoIFBhcmFsbGF4IEVmZmVjdCAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3BhcmFsbGF4SW1hZ2VTdHlsZX0+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hlcm8vdHJhbnNwYXJlbnRib3R0bGUucG5nXCJcbiAgICAgICAgICBhbHQ9XCJUcmFuc3BhcmVudCBCb3R0bGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbnQgKEV4aXN0aW5nIEltYWdlKSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1hdXRvIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgbWQ6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hlcm8vQ29tcG9uZW50MS5wbmdcIlxuICAgICAgICAgIGFsdD1cIk9yaWdpbmFsIEltYWdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtaW4taC1mdWxsIG1pbi13LWZ1bGwgbWQ6aC1hdXRvIG1kOm1heC13LW5vbmUgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZlYXR1cmVzIiwic2Nyb2xsUG9zaXRpb24iLCJzZXRTY3JvbGxQb3NpdGlvbiIsImhhbmRsZVNjcm9sbCIsInBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyYWxsYXhDb250YWluZXJTdHlsZSIsIm1pbkhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFyYWxsYXhJbWFnZVN0eWxlIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiekluZGV4Iiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Features/index.tsx\n"));

/***/ })

});