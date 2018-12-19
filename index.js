// nicked from https://github.com/eslint/eslint/blob/master/lib/rules/no-tabs.js

"use strict";

const rule = {
    meta: {
        type: "layout",

        docs: {
            description: "block a regex from settings",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://github.com/andrew-t/eslint-plugin-regex"
        },
        schema: [{
            type: "object",
            properties: {
                pattern: { type: "string" },
                flags: { type: "string" }
            },
            additionalProperties: false
        }]
    },

    create: context => {
        const sourceCode = context.getSourceCode();
        const regex = new RegExp(context.options[0].pattern, context.options[0].flags);

        return {
            Program: node => {
                sourceCode.getLines().forEach((line, index) => {
                    const match = regex.exec(line);
                    if (match)
                        context.report({
                            node,
                            loc: {
                                line: index + 1,
                                column: match.index
                            },
                            message: "Evil regex matched"
                        });
                });
            }
        };
    }
};

module.exports.rules = {
    regex: rule
};
