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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ScrollingBottlePage = ()=>{\n    _s();\n    const [scrollY, setScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            // Only set the scroll position if we're within the bounds of the page\n            if (window.scrollY >= containerTop && window.scrollY <= containerBottom) {\n                setScrollY(window.scrollY - containerTop);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    // These would be the actual pixel values where your animation container starts and ends\n    const containerTop = 1000; // The starting Y position of your animation container\n    const containerBottom = 5000;\n    const getBottleTransform = ()=>{\n        let rotation = scrollY / 10; // rotate the bottle based on scroll\n        let yPos = scrollY / 2; // move the bottle down at half the scroll speed\n        // Assuming you want the bottle to start rotating back after scrolling 1000px\n        if (scrollY > 1000) {\n            rotation = (2000 - scrollY) / 10; // rotate back after passing 1000px\n        }\n        // Adjust the rotation and yPos as needed for the animation\n        return \"translateY(\".concat(yPos, \"px) rotate(\").concat(rotation, \"deg)\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"scrolling-animation-container\",\n            style: {\n                height: \"400vh\",\n                position: \"relative\",\n                background: \"white\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"sticky\",\n                    top: \"50vh\",\n                    height: \"100vh\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/hero/transparentbottle.png\",\n                    alt: \"Animated Bottle\",\n                    style: {\n                        width: \"200px\",\n                        height: \"auto\",\n                        transform: getBottleTransform(),\n                        transition: \"transform 0.2s ease-out\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Desktop/DuoWater/src/components/ScrollingBottlePage.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/ScrollingBottlePage.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Desktop/DuoWater/src/components/ScrollingBottlePage.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(ScrollingBottlePage, \"eTR5W6wH45bVtWbD0ho0jkNrbDM=\");\n_c = ScrollingBottlePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingBottlePage);\nvar _c;\n$RefreshReg$(_c, \"ScrollingBottlePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbGluZ0JvdHRsZVBhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUVuRCxNQUFNRyxzQkFBc0I7O0lBQzFCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxlQUFlO1lBQ25CLHNFQUFzRTtZQUN0RSxJQUFJQyxPQUFPSCxPQUFPLElBQUlJLGdCQUFnQkQsT0FBT0gsT0FBTyxJQUFJSyxpQkFBaUI7Z0JBQ3ZFSixXQUFXRSxPQUFPSCxPQUFPLEdBQUdJO1lBQzlCO1FBQ0Y7UUFFQUQsT0FBT0csZ0JBQWdCLENBQUMsVUFBVUosY0FBYztZQUFFSyxTQUFTO1FBQUs7UUFFaEUsT0FBTztZQUNMSixPQUFPSyxtQkFBbUIsQ0FBQyxVQUFVTjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHdGQUF3RjtJQUN4RixNQUFNRSxlQUFlLE1BQU0sc0RBQXNEO0lBQ2pGLE1BQU1DLGtCQUFrQjtJQUN4QixNQUFNSSxxQkFBcUI7UUFDekIsSUFBSUMsV0FBV1YsVUFBVSxJQUFJLG9DQUFvQztRQUNqRSxJQUFJVyxPQUFPWCxVQUFVLEdBQUcsZ0RBQWdEO1FBRXhFLDZFQUE2RTtRQUM3RSxJQUFJQSxVQUFVLE1BQU07WUFDbEJVLFdBQVcsQ0FBQyxPQUFPVixPQUFNLElBQUssSUFBSSxtQ0FBbUM7UUFDdkU7UUFFQSwyREFBMkQ7UUFDM0QsT0FBTyxjQUFnQ1UsT0FBbEJDLE1BQUssZUFBc0IsT0FBVEQsVUFBUztJQUNsRDtJQUVBLHFCQUNFO2tCQUlFLDRFQUFDRTtZQUFJQyxJQUFHO1lBQWdDQyxPQUFPO2dCQUFFQyxRQUFRO2dCQUFTQyxVQUFVO2dCQUFZQyxZQUFZO1lBQVE7c0JBRTFHLDRFQUFDTDtnQkFBSUUsT0FBTztvQkFBRUUsVUFBVTtvQkFBVUUsS0FBSztvQkFBUUgsUUFBUTtvQkFBU0ksU0FBUztvQkFBUUMsWUFBWTtvQkFBVUMsZ0JBQWdCO2dCQUFTOzBCQUM5SCw0RUFBQ0M7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pWLE9BQU87d0JBQ0xXLE9BQU87d0JBQ1BWLFFBQVE7d0JBQ1JXLFdBQVdqQjt3QkFDWGtCLFlBQVk7b0JBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVo7R0ExRE01QjtLQUFBQTtBQTRETiwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbGluZ0JvdHRsZVBhZ2UudHN4P2YzMDUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNjcm9sbGluZ0JvdHRsZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzY3JvbGxZLCBzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgLy8gT25seSBzZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBpZiB3ZSdyZSB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgcGFnZVxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IGNvbnRhaW5lclRvcCAmJiB3aW5kb3cuc2Nyb2xsWSA8PSBjb250YWluZXJCb3R0b20pIHtcbiAgICAgICAgc2V0U2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSAtIGNvbnRhaW5lclRvcCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gVGhlc2Ugd291bGQgYmUgdGhlIGFjdHVhbCBwaXhlbCB2YWx1ZXMgd2hlcmUgeW91ciBhbmltYXRpb24gY29udGFpbmVyIHN0YXJ0cyBhbmQgZW5kc1xuICBjb25zdCBjb250YWluZXJUb3AgPSAxMDAwOyAvLyBUaGUgc3RhcnRpbmcgWSBwb3NpdGlvbiBvZiB5b3VyIGFuaW1hdGlvbiBjb250YWluZXJcbiAgY29uc3QgY29udGFpbmVyQm90dG9tID0gNTAwMDtcbiAgY29uc3QgZ2V0Qm90dGxlVHJhbnNmb3JtID0gKCkgPT4ge1xuICAgIGxldCByb3RhdGlvbiA9IHNjcm9sbFkgLyAxMDsgLy8gcm90YXRlIHRoZSBib3R0bGUgYmFzZWQgb24gc2Nyb2xsXG4gICAgbGV0IHlQb3MgPSBzY3JvbGxZIC8gMjsgLy8gbW92ZSB0aGUgYm90dGxlIGRvd24gYXQgaGFsZiB0aGUgc2Nyb2xsIHNwZWVkXG5cbiAgICAvLyBBc3N1bWluZyB5b3Ugd2FudCB0aGUgYm90dGxlIHRvIHN0YXJ0IHJvdGF0aW5nIGJhY2sgYWZ0ZXIgc2Nyb2xsaW5nIDEwMDBweFxuICAgIGlmIChzY3JvbGxZID4gMTAwMCkge1xuICAgICAgcm90YXRpb24gPSAoMjAwMCAtIHNjcm9sbFkpIC8gMTA7IC8vIHJvdGF0ZSBiYWNrIGFmdGVyIHBhc3NpbmcgMTAwMHB4XG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IHRoZSByb3RhdGlvbiBhbmQgeVBvcyBhcyBuZWVkZWQgZm9yIHRoZSBhbmltYXRpb25cbiAgICByZXR1cm4gYHRyYW5zbGF0ZVkoJHt5UG9zfXB4KSByb3RhdGUoJHtyb3RhdGlvbn1kZWcpYDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogT3RoZXIgcGFnZSBjb250ZW50IGJlZm9yZSB5b3VyIGFuaW1hdGlvbiAqL31cbiAgICAgIFxuICAgICAgey8qIFRoaXMgZGl2IHJlcHJlc2VudHMgdGhlIGVudGlyZSBzcGFjZSBmb3IgdGhlIHNjcm9sbGluZyBhbmltYXRpb24uICovfVxuICAgICAgPGRpdiBpZD1cInNjcm9sbGluZy1hbmltYXRpb24tY29udGFpbmVyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNDAwdmgnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgYmFja2dyb3VuZDogJ3doaXRlJyB9fT5cbiAgICAgICAgey8qIEEgZnVsbC13aWR0aCBjb250YWluZXIgZm9yIHRoZSBib3R0bGUgdG8gbGl2ZSBpbiAqL31cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3N0aWNreScsIHRvcDogJzUwdmgnLCBoZWlnaHQ6ICcxMDB2aCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hlcm8vdHJhbnNwYXJlbnRib3R0bGUucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkFuaW1hdGVkIEJvdHRsZVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzIwMHB4JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogZ2V0Qm90dGxlVHJhbnNmb3JtKCksXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBPdGhlciBwYWdlIGNvbnRlbnQgYWZ0ZXIgeW91ciBhbmltYXRpb24gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxpbmdCb3R0bGVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTY3JvbGxpbmdCb3R0bGVQYWdlIiwic2Nyb2xsWSIsInNldFNjcm9sbFkiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJjb250YWluZXJUb3AiLCJjb250YWluZXJCb3R0b20iLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRCb3R0bGVUcmFuc2Zvcm0iLCJyb3RhdGlvbiIsInlQb3MiLCJkaXYiLCJpZCIsInN0eWxlIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwidG9wIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ScrollingBottlePage.tsx\n"));

/***/ })

});