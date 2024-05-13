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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ \"(app-pages-browser)/./node_modules/react-scroll/modules/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Features = ()=>{\n    _s();\n    const [scrollPercentage, setScrollPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const scrollPosition = window.scrollY;\n            const windowHeight = window.innerHeight;\n            const documentHeight = document.documentElement.scrollHeight;\n            const maxScroll = documentHeight - windowHeight;\n            const currentScrollPercentage = scrollPosition / maxScroll * 100;\n            setScrollPercentage(currentScrollPercentage);\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"home\",\n        className: \"bg-white dark:bg-gray-dark mt-10 mb-10\",\n        style: {\n            minHeight: \"50vh\",\n            width: \"100vw\",\n            overflowX: \"hidden\",\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/hero/Component1.png\",\n                alt: \"Background Image\",\n                style: {\n                    width: \"100%\",\n                    height: \"100%\",\n                    objectFit: \"cover\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Element, {\n                name: \"top\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"\".concat(Math.min(scrollPercentage, 45), \"%\"),\n                    left: \"50%\",\n                    transform: \"translate(-50%, 0)\",\n                    maxWidth: \"20%\",\n                    maxHeight: \"20%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/transparentbottle.png\",\n                    alt: \"Overlay Image\",\n                    style: {\n                        width: \"100%\",\n                        height: \"100%\",\n                        objectFit: \"cover\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Element, {\n                name: \"bottom\",\n                style: {\n                    position: \"absolute\",\n                    bottom: 0,\n                    left: \"50%\",\n                    transform: \"translate(-50%, 0)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Features, \"z2ffmsBreXUbAnXIBcBMNTmfdB8=\");\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ1o7QUFFdkMsTUFBTUksV0FBVzs7SUFDZixNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1LLGVBQWU7WUFDbkIsTUFBTUMsaUJBQWlCQyxPQUFPQyxPQUFPO1lBQ3JDLE1BQU1DLGVBQWVGLE9BQU9HLFdBQVc7WUFDdkMsTUFBTUMsaUJBQWlCQyxTQUFTQyxlQUFlLENBQUNDLFlBQVk7WUFDNUQsTUFBTUMsWUFBWUosaUJBQWlCRjtZQUVuQyxNQUFNTywwQkFBMEIsaUJBQWtCRCxZQUFhO1lBQy9EWCxvQkFBb0JZO1FBQ3RCO1FBRUFULE9BQU9VLGdCQUFnQixDQUFDLFVBQVVaO1FBQ2xDLE9BQU8sSUFBTUUsT0FBT1csbUJBQW1CLENBQUMsVUFBVWI7SUFDcEQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQ0NDLElBQUc7UUFDSEMsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLFdBQVc7WUFBUUMsT0FBTztZQUFTQyxXQUFXO1lBQVVDLFVBQVU7UUFBVzs7MEJBR3RGLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSlAsT0FBTztvQkFBRUUsT0FBTztvQkFBUU0sUUFBUTtvQkFBUUMsV0FBVztnQkFBUTs7Ozs7OzBCQUk3RCw4REFBQzlCLGlEQUFPQTtnQkFBQytCLE1BQUs7Ozs7OzswQkFHZCw4REFBQ0M7Z0JBQ0NYLE9BQU87b0JBQ0xJLFVBQVU7b0JBQ1ZRLEtBQUssR0FBa0MsT0FBL0JDLEtBQUtDLEdBQUcsQ0FBQ2pDLGtCQUFrQixLQUFJO29CQUN2Q2tDLE1BQU07b0JBQ05DLFdBQVc7b0JBQ1hDLFVBQVU7b0JBQ1ZDLFdBQVc7Z0JBQ2I7MEJBRUEsNEVBQUNiO29CQUNDQyxLQUFJO29CQUNKQyxLQUFJO29CQUNKUCxPQUFPO3dCQUFFRSxPQUFPO3dCQUFRTSxRQUFRO3dCQUFRQyxXQUFXO29CQUFROzs7Ozs7Ozs7OzswQkFLL0QsOERBQUM5QixpREFBT0E7Z0JBQUMrQixNQUFLO2dCQUFTVixPQUFPO29CQUFFSSxVQUFVO29CQUFZZSxRQUFRO29CQUFFSixNQUFNO29CQUNsRUMsV0FBVztnQkFBcUI7Ozs7Ozs7Ozs7OztBQUcxQztHQXpETXBDO0tBQUFBO0FBMkROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeD84YTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuXG5jb25zdCBGZWF0dXJlcyA9ICgpID0+IHtcbiAgY29uc3QgW3Njcm9sbFBlcmNlbnRhZ2UsIHNldFNjcm9sbFBlcmNlbnRhZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3QgbWF4U2Nyb2xsID0gZG9jdW1lbnRIZWlnaHQgLSB3aW5kb3dIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQZXJjZW50YWdlID0gKHNjcm9sbFBvc2l0aW9uIC8gbWF4U2Nyb2xsKSAqIDEwMDtcbiAgICAgIHNldFNjcm9sbFBlcmNlbnRhZ2UoY3VycmVudFNjcm9sbFBlcmNlbnRhZ2UpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImhvbWVcIlxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LWRhcmsgbXQtMTAgbWItMTBcIlxuICAgICAgc3R5bGU9e3sgbWluSGVpZ2h0OiAnNTB2aCcsIHdpZHRoOiAnMTAwdncnLCBvdmVyZmxvd1g6ICdoaWRkZW4nLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fVxuICAgID5cbiAgICAgIHsvKiBCYWNrZ3JvdW5kIGltYWdlICovfVxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvaW1hZ2VzL2hlcm8vQ29tcG9uZW50MS5wbmdcIlxuICAgICAgICBhbHQ9XCJCYWNrZ3JvdW5kIEltYWdlXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIG9iamVjdEZpdDogJ2NvdmVyJyB9fVxuICAgICAgLz5cblxuICAgICAgey8qIFRvcCBib3VuZGFyeSBlbGVtZW50ICovfVxuICAgICAgPEVsZW1lbnQgbmFtZT1cInRvcFwiIC8+XG5cbiAgICAgIHsvKiBPdmVybGF5IGltYWdlIChib3R0bGUpICovfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogYCR7TWF0aC5taW4oc2Nyb2xsUGVyY2VudGFnZSwgNDUpfSVgLCAvLyBMaW1pdCB0b3AgcG9zaXRpb24gdG8gMTAwJSAoYm90dG9tIG9mIHNlY3Rpb24pXG4gICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDApJyxcbiAgICAgICAgICBtYXhXaWR0aDogJzIwJScsXG4gICAgICAgICAgbWF4SGVpZ2h0OiAnMjAlJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaGVyby90cmFuc3BhcmVudGJvdHRsZS5wbmdcIlxuICAgICAgICAgIGFsdD1cIk92ZXJsYXkgSW1hZ2VcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQm90dG9tIGJvdW5kYXJ5IGVsZW1lbnQgKi99XG4gICAgICA8RWxlbWVudCBuYW1lPVwiYm90dG9tXCIgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIGJvdHRvbTogMCxsZWZ0OiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgMCknLH19IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkVsZW1lbnQiLCJGZWF0dXJlcyIsInNjcm9sbFBlcmNlbnRhZ2UiLCJzZXRTY3JvbGxQZXJjZW50YWdlIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwibWF4U2Nyb2xsIiwiY3VycmVudFNjcm9sbFBlcmNlbnRhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJvdmVyZmxvd1giLCJwb3NpdGlvbiIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIm9iamVjdEZpdCIsIm5hbWUiLCJkaXYiLCJ0b3AiLCJNYXRoIiwibWluIiwibGVmdCIsInRyYW5zZm9ybSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiYm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Features/index.tsx\n"));

/***/ })

});