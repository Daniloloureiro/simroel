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

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ \"(app-pages-browser)/./app/header.css\");\n/* harmony import */ var _Simulacao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Simulacao */ \"(app-pages-browser)/./app/Simulacao.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _Rede__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rede */ \"(app-pages-browser)/./app/Rede.js\");\n/* harmony import */ var _Fisica__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fisica */ \"(app-pages-browser)/./app/Fisica.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    /*Código para qual página de parâmetro reinderizar*/ const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"simulacao\");\n    const changePage = (page)=>{\n        setCurrentPage(page);\n    };\n    const renderPage = ()=>{\n        if (currentPage === \"simulacao\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Simulacao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n            lineNumber: 17,\n            columnNumber: 14\n        }, this);\n        else if (currentPage === \"rede\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rede__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n            lineNumber: 19,\n            columnNumber: 14\n        }, this);\n        else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Fisica__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n            lineNumber: 21,\n            columnNumber: 14\n        }, this);\n    };\n    /*Código de geeração de json*/ const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();\n    const onSubmit = (data)=>{\n        const jsonData = JSON.stringify(data, null, 2);\n        console.log(jsonData);\n    };\n    /*Código da parte fixa da página*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"simRoel web\"\n                }, void 0, false, {\n                    fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"parametros\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Parameters\"\n                }, void 0, false, {\n                    fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tab\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tablinks\",\n                        onClick: ()=>changePage(\"simulacao\"),\n                        children: \"Simulation\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tablinks\",\n                        onClick: ()=>changePage(\"rede\"),\n                        children: \"Networking\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tablinks\",\n                        onClick: ()=>changePage(\"fisica\"),\n                        children: \"Physical\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_6__.FormProvider, {\n                ...methods,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: methods.handleSubmit(onSubmit),\n                    children: [\n                        renderPage(),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"Button\",\n                                type: \"submit\",\n                                children: \"Simulate\"\n                            }, void 0, false, {\n                                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                                lineNumber: 47,\n                                columnNumber: 7\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                            lineNumber: 46,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"wM3iF+y0IUzdQ/TX9BUwYmJhuiA=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ3ZCO0FBQ2M7QUFDb0I7QUFDOUI7QUFDSTtBQUVmLFNBQVNPOztJQUN0QixrREFBa0QsR0FDbEQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUNSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1TLGFBQVcsQ0FBQ0M7UUFDaEJGLGVBQWVFO0lBQ2pCO0lBQ0EsTUFBTUMsYUFBVztRQUNmLElBQUdKLGdCQUFjLGFBQ2YscUJBQU8sOERBQUNOLGtEQUFTQTs7Ozs7YUFDZCxJQUFHTSxnQkFBYyxRQUNwQixxQkFBTyw4REFBQ0gsNkNBQUlBOzs7OzthQUVaLHFCQUFPLDhEQUFDQywrQ0FBTUE7Ozs7O0lBQ2xCO0lBQ0EsNEJBQTRCLEdBQzVCLE1BQU1PLFVBQVFWLHdEQUFPQTtJQUNyQixNQUFNVyxXQUFTLENBQUNDO1FBQ2QsTUFBTUMsV0FBU0MsS0FBS0MsU0FBUyxDQUFDSCxNQUFLLE1BQUs7UUFDeENJLFFBQVFDLEdBQUcsQ0FBQ0o7SUFDaEI7SUFDQSxnQ0FBZ0MsR0FDOUIscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0Y7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFBT0gsV0FBVzt3QkFBV0ksU0FBVSxJQUFJakIsV0FBVztrQ0FBYzs7Ozs7O2tDQUNyRSw4REFBQ2dCO3dCQUFPSCxXQUFXO3dCQUFXSSxTQUFVLElBQUlqQixXQUFXO2tDQUFTOzs7Ozs7a0NBQ2hFLDhEQUFDZ0I7d0JBQU9ILFdBQVc7d0JBQVdJLFNBQVUsSUFBSWpCLFdBQVc7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFcEUsOERBQUNOLHlEQUFZQTtnQkFBRSxHQUFHUyxPQUFPOzBCQUN2Qiw0RUFBQ2U7b0JBQUtkLFVBQVVELFFBQVFnQixZQUFZLENBQUNmOzt3QkFDdENGO3NDQUNELDhEQUFDVTtzQ0FDRCw0RUFBQ0k7Z0NBQU9ILFdBQVU7Z0NBQVNPLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0M7R0E1Q3dCdkI7O1FBZVJKLG9EQUFPQTs7O0tBZkNJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtjcmVhdGVDb250ZXh0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vaGVhZGVyLmNzcyc7XG5pbXBvcnQgU2ltdWxhY2FvIGZyb20gJy4vU2ltdWxhY2FvJztcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgUmVkZSBmcm9tICcuL1JlZGUnO1xuaW1wb3J0IEZpc2ljYSBmcm9tICcuL0Zpc2ljYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8qQ8OzZGlnbyBwYXJhIHF1YWwgcMOhZ2luYSBkZSBwYXLDom1ldHJvIHJlaW5kZXJpemFyKi8gXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdPXVzZVN0YXRlKCdzaW11bGFjYW8nKVxuICBjb25zdCBjaGFuZ2VQYWdlPShwYWdlKT0+e1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpXG4gIH1cbiAgY29uc3QgcmVuZGVyUGFnZT0oKT0+e1xuICAgIGlmKGN1cnJlbnRQYWdlPT09J3NpbXVsYWNhbycpXG4gICAgICByZXR1cm4gPFNpbXVsYWNhbyAvPlxuICAgIGVsc2UgaWYoY3VycmVudFBhZ2U9PT0ncmVkZScpXG4gICAgICByZXR1cm4gPFJlZGUgLz5cbiAgICBlbHNlXG4gICAgICByZXR1cm4gPEZpc2ljYSAvPlxuICB9XG4gIC8qQ8OzZGlnbyBkZSBnZWVyYcOnw6NvIGRlIGpzb24qL1xuICBjb25zdCBtZXRob2RzPXVzZUZvcm0oKTtcbiAgY29uc3Qgb25TdWJtaXQ9KGRhdGEpPT57XG4gICAgY29uc3QganNvbkRhdGE9SlNPTi5zdHJpbmdpZnkoZGF0YSxudWxsLDIpO1xuICAgIGNvbnNvbGUubG9nKGpzb25EYXRhKTtcbn07XG4vKkPDs2RpZ28gZGEgcGFydGUgZml4YSBkYSBww6FnaW5hKi9cbiAgcmV0dXJuIChcbiAgICA8bWFpbiA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgIDxoMT5zaW1Sb2VsIHdlYjwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYW1ldHJvc1wiPlxuICAgICAgICA8aDM+UGFyYW1ldGVyczwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSBcInRhYmxpbmtzXCIgb25DbGljayA9eygpPT5jaGFuZ2VQYWdlKCdzaW11bGFjYW8nKX0+U2ltdWxhdGlvbjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0gXCJ0YWJsaW5rc1wiIG9uQ2xpY2sgPXsoKT0+Y2hhbmdlUGFnZSgncmVkZScpfT5OZXR3b3JraW5nPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSBcInRhYmxpbmtzXCIgb25DbGljayA9eygpPT5jaGFuZ2VQYWdlKCdmaXNpY2EnKX0+UGh5c2ljYWw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm1Qcm92aWRlciB7Li4ubWV0aG9kc30+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXttZXRob2RzLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAge3JlbmRlclBhZ2UoKX1cbiAgICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TaW11bGF0ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJTaW11bGFjYW8iLCJ1c2VGb3JtIiwiRm9ybVByb3ZpZGVyIiwiUmVkZSIsIkZpc2ljYSIsIkhvbWUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY2hhbmdlUGFnZSIsInBhZ2UiLCJyZW5kZXJQYWdlIiwibWV0aG9kcyIsIm9uU3VibWl0IiwiZGF0YSIsImpzb25EYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwiaGFuZGxlU3VibWl0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});