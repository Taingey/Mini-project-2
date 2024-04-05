"use strict";
exports.__esModule = true;
exports.Tables = void 0;
var react_1 = require("@nextui-org/react");
var react_2 = require("react");
exports.Tables = function () {
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.Table, { bordered: true, shadow: false, color: "secondary", "aria-label": "Example pagination  table", css: {
                height: "auto",
                minWidth: "100%"
            }, selectionMode: "multiple" },
            react_2["default"].createElement(react_1.Table.Header, null,
                react_2["default"].createElement(react_1.Table.Column, null, "NAME"),
                react_2["default"].createElement(react_1.Table.Column, null, "ROLE"),
                react_2["default"].createElement(react_1.Table.Column, null, "STATUS")),
            react_2["default"].createElement(react_1.Table.Body, null,
                react_2["default"].createElement(react_1.Table.Row, { key: "1" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "Tony Reichert"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "CEO"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Active")),
                react_2["default"].createElement(react_1.Table.Row, { key: "2" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "Zoey Lang"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Technical Lead"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Paused")),
                react_2["default"].createElement(react_1.Table.Row, { key: "3" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "Jane Fisher"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Senior Developer"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Active")),
                react_2["default"].createElement(react_1.Table.Row, { key: "4" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "William Howard"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Community Manager"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Vacation")),
                react_2["default"].createElement(react_1.Table.Row, { key: "5" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "Jane Fisher"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Senior Developer"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Active")),
                react_2["default"].createElement(react_1.Table.Row, { key: "6" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "Zoey Lang"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Technical Lead"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Paused")),
                react_2["default"].createElement(react_1.Table.Row, { key: "7" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "Jane Fisher"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Senior Developer"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Active")),
                react_2["default"].createElement(react_1.Table.Row, { key: "8" },
                    react_2["default"].createElement(react_1.Table.Cell, null, "William Howard"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Community Manager"),
                    react_2["default"].createElement(react_1.Table.Cell, null, "Vacation"))),
            react_2["default"].createElement(react_1.Table.Pagination, { shadow: true, noMargin: true, align: "center", rowsPerPage: 3, onPageChange: function (page) { return console.log({ page: page }); } }))));
};
