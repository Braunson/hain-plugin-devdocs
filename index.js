'use strict';

module.exports = (context) => {
    const shell = context.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }
        res.add({
            id: query_trim,
            payload: 'open',
            title: 'Search ' + query_trim,
            desc: 'Search on DevDocs.io'
        });
    }

    function execute(id, payload) {
        if (payload !== 'open') {
            return;
        }
        shell.openExternal(`http://devdocs.io/#q=${id}`);
    }

    return {search, execute};
};