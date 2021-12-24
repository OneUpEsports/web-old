/* eslint-disable prettier/prettier */
module.exports = {
    options: {
        indent: "  ",
    },
    npm: {
        src: "<%= meta.cwd %>package.json",
        dest: "<%= meta.build %>package.json",
        fields: {
            name: null,
            version: null,
            description: null,
            license: null,
            author: null,
            homepage: null,
            repository: null,
            keywords: null,
            main: null,
            dependencies: null,
            browser: null,
        },
    },
    bower: {
        src: "<%= meta.cwd %>package.json",
        dest: "<%= meta.build %>bower.json",
        fields: {
            name: null,
            version: null,
            description: null,
            license: null,
            author: "author",
            homepage: null,
            repository: null,
            keywords: null,
            main: null,
            dependencies: null,
            browser: null,
            ignore: [],
        },
    },
};
