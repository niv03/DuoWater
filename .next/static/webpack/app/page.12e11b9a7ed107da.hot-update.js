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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Features = ()=>{\n    _s();\n    const bottleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            const section = bottleRef.current.parentElement;\n            const sectionTop = section.offsetTop;\n            const sectionHeight = section.offsetHeight;\n            const windowHeight = window.innerHeight;\n            const scrollPosition = window.scrollY;\n            // Calculate the maximum scroll distance within the section\n            const maxScrollDistance = sectionHeight - windowHeight;\n            // Calculate the current scroll distance relative to the section\n            const scrollDistance = Math.min(maxScrollDistance, Math.max(0, scrollPosition - sectionTop));\n            // Calculate the maximum translate Y for the bottle\n            const maxTranslateY = sectionHeight - bottleRef.current.offsetHeight;\n            // Calculate the translate Y based on scroll distance\n            const bottleTranslateY = scrollDistance / maxScrollDistance * maxTranslateY;\n            // Set the transform style of the bottle\n            bottleRef.current.style.transform = \"translateY(\".concat(bottleTranslateY, \"px)\");\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"home\",\n        className: \"bg-white dark:bg-gray-dark mt-10 mb-10 relative\",\n        style: {\n            minHeight: \"50vh\",\n            width: \"100vw\",\n            overflowX: \"hidden\",\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/hero/Component1.png\",\n                alt: \"Background Image\",\n                style: {\n                    width: \"100%\",\n                    height: \"100%\",\n                    objectFit: \"cover\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/hero/transparentbottle.png\",\n                alt: \"Overlay Image\",\n                ref: bottleRef,\n                style: {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    transform: \"translate(-50%, -50%)\",\n                    maxWidth: \"80%\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Desktop/DuoWater/src/components/Features/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Features, \"yTBm8xk0MG0NWD3gEkqN2MHk2Xs=\");\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\nvar _c;\n$RefreshReg$(_c, \"Features\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUQ7QUFFakQsTUFBTUcsV0FBVzs7SUFDZixNQUFNQyxZQUFZRiw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxlQUFlO1lBQ25CLE1BQU1DLFVBQVVGLFVBQVVHLE9BQU8sQ0FBQ0MsYUFBYTtZQUMvQyxNQUFNQyxhQUFhSCxRQUFRSSxTQUFTO1lBQ3BDLE1BQU1DLGdCQUFnQkwsUUFBUU0sWUFBWTtZQUMxQyxNQUFNQyxlQUFlQyxPQUFPQyxXQUFXO1lBQ3ZDLE1BQU1DLGlCQUFpQkYsT0FBT0csT0FBTztZQUVyQywyREFBMkQ7WUFDM0QsTUFBTUMsb0JBQW9CUCxnQkFBZ0JFO1lBRTFDLGdFQUFnRTtZQUNoRSxNQUFNTSxpQkFBaUJDLEtBQUtDLEdBQUcsQ0FBQ0gsbUJBQW1CRSxLQUFLRSxHQUFHLENBQUMsR0FBR04saUJBQWlCUDtZQUVoRixtREFBbUQ7WUFDbkQsTUFBTWMsZ0JBQWdCWixnQkFBZ0JQLFVBQVVHLE9BQU8sQ0FBQ0ssWUFBWTtZQUVwRSxxREFBcUQ7WUFDckQsTUFBTVksbUJBQW1CLGlCQUFrQk4sb0JBQXFCSztZQUVoRSx3Q0FBd0M7WUFDeENuQixVQUFVRyxPQUFPLENBQUNrQixLQUFLLENBQUNDLFNBQVMsR0FBRyxjQUErQixPQUFqQkYsa0JBQWlCO1FBQ3JFO1FBRUFWLE9BQU9hLGdCQUFnQixDQUFDLFVBQVV0QjtRQUVsQyxPQUFPO1lBQ0xTLE9BQU9jLG1CQUFtQixDQUFDLFVBQVV2QjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDdUIsSUFBRztRQUNIQyxXQUFVO1FBQ1ZMLE9BQU87WUFBRU0sV0FBVztZQUFRQyxPQUFPO1lBQVNDLFdBQVc7WUFBVUMsVUFBVTtRQUFXOzswQkFHdEYsOERBQUNDO2dCQUNDQyxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKWixPQUFPO29CQUFFTyxPQUFPO29CQUFRTSxRQUFRO29CQUFRQyxXQUFXO2dCQUFROzs7Ozs7MEJBSTdELDhEQUFDSjtnQkFDQ0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkcsS0FBS3BDO2dCQUNMcUIsT0FBTztvQkFDTFMsVUFBVTtvQkFDVk8sS0FBSztvQkFDTEMsTUFBTTtvQkFDTmhCLFdBQVc7b0JBQ1hpQixVQUFVO2dCQUNaOzs7Ozs7Ozs7Ozs7QUFJUjtHQTlETXhDO0tBQUFBO0FBZ0VOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzL2luZGV4LnRzeD84YTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZlYXR1cmVzID0gKCkgPT4ge1xuICBjb25zdCBib3R0bGVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gYm90dGxlUmVmLmN1cnJlbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHNlY3Rpb25Ub3AgPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICAgIGNvbnN0IHNlY3Rpb25IZWlnaHQgPSBzZWN0aW9uLm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4aW11bSBzY3JvbGwgZGlzdGFuY2Ugd2l0aGluIHRoZSBzZWN0aW9uXG4gICAgICBjb25zdCBtYXhTY3JvbGxEaXN0YW5jZSA9IHNlY3Rpb25IZWlnaHQgLSB3aW5kb3dIZWlnaHQ7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY3VycmVudCBzY3JvbGwgZGlzdGFuY2UgcmVsYXRpdmUgdG8gdGhlIHNlY3Rpb25cbiAgICAgIGNvbnN0IHNjcm9sbERpc3RhbmNlID0gTWF0aC5taW4obWF4U2Nyb2xsRGlzdGFuY2UsIE1hdGgubWF4KDAsIHNjcm9sbFBvc2l0aW9uIC0gc2VjdGlvblRvcCkpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIG1heGltdW0gdHJhbnNsYXRlIFkgZm9yIHRoZSBib3R0bGVcbiAgICAgIGNvbnN0IG1heFRyYW5zbGF0ZVkgPSBzZWN0aW9uSGVpZ2h0IC0gYm90dGxlUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHRyYW5zbGF0ZSBZIGJhc2VkIG9uIHNjcm9sbCBkaXN0YW5jZVxuICAgICAgY29uc3QgYm90dGxlVHJhbnNsYXRlWSA9IChzY3JvbGxEaXN0YW5jZSAvIG1heFNjcm9sbERpc3RhbmNlKSAqIG1heFRyYW5zbGF0ZVk7XG5cbiAgICAgIC8vIFNldCB0aGUgdHJhbnNmb3JtIHN0eWxlIG9mIHRoZSBib3R0bGVcbiAgICAgIGJvdHRsZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7Ym90dGxlVHJhbnNsYXRlWX1weClgO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvblxuICAgICAgaWQ9XCJob21lXCJcbiAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS1kYXJrIG10LTEwIG1iLTEwIHJlbGF0aXZlXCJcbiAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogJzUwdmgnLCB3aWR0aDogJzEwMHZ3Jywgb3ZlcmZsb3dYOiAnaGlkZGVuJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICA+XG4gICAgICB7LyogQmFja2dyb3VuZCBpbWFnZSAqL31cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiL2ltYWdlcy9oZXJvL0NvbXBvbmVudDEucG5nXCJcbiAgICAgICAgYWx0PVwiQmFja2dyb3VuZCBJbWFnZVwiXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicgfX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBPdmVybGF5IGltYWdlIChib3R0bGUpICovfVxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvaW1hZ2VzL2hlcm8vdHJhbnNwYXJlbnRib3R0bGUucG5nXCJcbiAgICAgICAgYWx0PVwiT3ZlcmxheSBJbWFnZVwiXG4gICAgICAgIHJlZj17Ym90dGxlUmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICBtYXhXaWR0aDogJzgwJScsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRmVhdHVyZXMiLCJib3R0bGVSZWYiLCJoYW5kbGVTY3JvbGwiLCJzZWN0aW9uIiwiY3VycmVudCIsInBhcmVudEVsZW1lbnQiLCJzZWN0aW9uVG9wIiwib2Zmc2V0VG9wIiwic2VjdGlvbkhlaWdodCIsIm9mZnNldEhlaWdodCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwic2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxZIiwibWF4U2Nyb2xsRGlzdGFuY2UiLCJzY3JvbGxEaXN0YW5jZSIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtYXhUcmFuc2xhdGVZIiwiYm90dGxlVHJhbnNsYXRlWSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpZCIsImNsYXNzTmFtZSIsIm1pbkhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3dYIiwicG9zaXRpb24iLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJyZWYiLCJ0b3AiLCJsZWZ0IiwibWF4V2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Features/index.tsx\n"));

/***/ })

});