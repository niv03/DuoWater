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

/***/ "(app-pages-browser)/./src/components/ScrollingBottlePage.tsx":
/*!************************************************!*\
  !*** ./src/components/ScrollingBottlePage.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// Your React component\n\nconst ScrollingBottlePage = ()=>{\n    _s();\n    const [scrollY, setScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            setScrollY(window.scrollY);\n        };\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const getBottleTransform = ()=>{\n        let rotation = scrollY / 10; // rotate the bottle based on scroll\n        let yPos = scrollY / 2; // move the bottle down at half the scroll speed\n        // Assuming you want the bottle to start rotating back after scrolling 1000px\n        if (scrollY > 1000) {\n            rotation = (2000 - scrollY) / 10; // rotate back after passing 1000px\n        }\n        // Adjust the rotation and yPos as needed for the animation\n        return \"translateY(\".concat(yPos, \"px) rotate(\").concat(rotation, \"deg)\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"scrolling-animation-container\",\n            style: {\n                height: \"400vh\",\n                position: \"relative\",\n                background: \"white\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"sticky\",\n                    top: \"50vh\",\n                    height: \"100vh\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/transparentbottle.png\",\n                    alt: \"Animated Bottle\",\n                    style: {\n                        width: \"200px\",\n                        height: \"auto\",\n                        transform: getBottleTransform(),\n                        transition: \"transform 0.2s ease-out\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/ScrollingBottlePage.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/ScrollingBottlePage.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Desktop/DuoWater/src/components/ScrollingBottlePage.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ScrollingBottlePage, \"eTR5W6wH45bVtWbD0ho0jkNrbDM=\");\n_c = ScrollingBottlePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingBottlePage);\nvar _c;\n$RefreshReg$(_c, \"ScrollingBottlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbGluZ0JvdHRsZVBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHVCQUF1QjtBQUM0QjtBQUVuRCxNQUFNRyxzQkFBc0I7O0lBQzFCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxlQUFlO1lBQ25CRCxXQUFXRSxPQUFPSCxPQUFPO1FBQzNCO1FBRUFHLE9BQU9DLGdCQUFnQixDQUFDLFVBQVVGLGNBQWM7WUFBRUcsU0FBUztRQUFLO1FBRWhFLE9BQU87WUFDTEYsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSyxxQkFBcUI7UUFDekIsSUFBSUMsV0FBV1IsVUFBVSxJQUFJLG9DQUFvQztRQUNqRSxJQUFJUyxPQUFPVCxVQUFVLEdBQUcsZ0RBQWdEO1FBRXhFLDZFQUE2RTtRQUM3RSxJQUFJQSxVQUFVLE1BQU07WUFDbEJRLFdBQVcsQ0FBQyxPQUFPUixPQUFNLElBQUssSUFBSSxtQ0FBbUM7UUFDdkU7UUFFQSwyREFBMkQ7UUFDM0QsT0FBTyxjQUFnQ1EsT0FBbEJDLE1BQUssZUFBc0IsT0FBVEQsVUFBUztJQUNsRDtJQUVBLHFCQUNFO2tCQUlFLDRFQUFDRTtZQUFJQyxJQUFHO1lBQWdDQyxPQUFPO2dCQUFFQyxRQUFRO2dCQUFTQyxVQUFVO2dCQUFZQyxZQUFZO1lBQVE7c0JBRTFHLDRFQUFDTDtnQkFBSUUsT0FBTztvQkFBRUUsVUFBVTtvQkFBVUUsS0FBSztvQkFBUUgsUUFBUTtvQkFBU0ksU0FBUztvQkFBUUMsWUFBWTtvQkFBVUMsZ0JBQWdCO2dCQUFTOzBCQUM5SCw0RUFBQ0M7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pWLE9BQU87d0JBQ0xXLE9BQU87d0JBQ1BWLFFBQVE7d0JBQ1JXLFdBQVdqQjt3QkFDWGtCLFlBQVk7b0JBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVo7R0FwRE0xQjtLQUFBQTtBQXNETiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbGluZ0JvdHRsZVBhZ2UudHN4P2YzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuLy8gWW91ciBSZWFjdCBjb21wb25lbnRcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTY3JvbGxpbmdCb3R0bGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbc2Nyb2xsWSwgc2V0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEJvdHRsZVRyYW5zZm9ybSA9ICgpID0+IHtcbiAgICBsZXQgcm90YXRpb24gPSBzY3JvbGxZIC8gMTA7IC8vIHJvdGF0ZSB0aGUgYm90dGxlIGJhc2VkIG9uIHNjcm9sbFxuICAgIGxldCB5UG9zID0gc2Nyb2xsWSAvIDI7IC8vIG1vdmUgdGhlIGJvdHRsZSBkb3duIGF0IGhhbGYgdGhlIHNjcm9sbCBzcGVlZFxuXG4gICAgLy8gQXNzdW1pbmcgeW91IHdhbnQgdGhlIGJvdHRsZSB0byBzdGFydCByb3RhdGluZyBiYWNrIGFmdGVyIHNjcm9sbGluZyAxMDAwcHhcbiAgICBpZiAoc2Nyb2xsWSA+IDEwMDApIHtcbiAgICAgIHJvdGF0aW9uID0gKDIwMDAgLSBzY3JvbGxZKSAvIDEwOyAvLyByb3RhdGUgYmFjayBhZnRlciBwYXNzaW5nIDEwMDBweFxuICAgIH1cblxuICAgIC8vIEFkanVzdCB0aGUgcm90YXRpb24gYW5kIHlQb3MgYXMgbmVlZGVkIGZvciB0aGUgYW5pbWF0aW9uXG4gICAgcmV0dXJuIGB0cmFuc2xhdGVZKCR7eVBvc31weCkgcm90YXRlKCR7cm90YXRpb259ZGVnKWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIE90aGVyIHBhZ2UgY29udGVudCBiZWZvcmUgeW91ciBhbmltYXRpb24gKi99XG4gICAgICBcbiAgICAgIHsvKiBUaGlzIGRpdiByZXByZXNlbnRzIHRoZSBlbnRpcmUgc3BhY2UgZm9yIHRoZSBzY3JvbGxpbmcgYW5pbWF0aW9uLiAqL31cbiAgICAgIDxkaXYgaWQ9XCJzY3JvbGxpbmctYW5pbWF0aW9uLWNvbnRhaW5lclwiIHN0eWxlPXt7IGhlaWdodDogJzQwMHZoJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIGJhY2tncm91bmQ6ICd3aGl0ZScgfX0+XG4gICAgICAgIHsvKiBBIGZ1bGwtd2lkdGggY29udGFpbmVyIGZvciB0aGUgYm90dGxlIHRvIGxpdmUgaW4gKi99XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdzdGlja3knLCB0b3A6ICc1MHZoJywgaGVpZ2h0OiAnMTAwdmgnLCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9oZXJvL3RyYW5zcGFyZW50Ym90dGxlLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJBbmltYXRlZCBCb3R0bGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGdldEJvdHRsZVRyYW5zZm9ybSgpLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogT3RoZXIgcGFnZSBjb250ZW50IGFmdGVyIHlvdXIgYW5pbWF0aW9uICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsaW5nQm90dGxlUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2Nyb2xsaW5nQm90dGxlUGFnZSIsInNjcm9sbFkiLCJzZXRTY3JvbGxZIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0Qm90dGxlVHJhbnNmb3JtIiwicm90YXRpb24iLCJ5UG9zIiwiZGl2IiwiaWQiLCJzdHlsZSIsImhlaWdodCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsInRvcCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ScrollingBottlePage.tsx\n"));

/***/ })

});