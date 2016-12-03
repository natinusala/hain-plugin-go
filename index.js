'use strict';

module.exports = (pluginContext) => {
  const shell = pluginContext.shell;

  function startup() {}

  function search(query, res) 
  {
	var query_trim = query.trim();
	
	if (!query_trim)
	{
		return;
	}
	
	res.add({
	  id: query_trim,
	  payload: "go",
	  title: query_trim,
	  desc: "Open in a browser"
	});
  }

  function execute(id, payload) {
    if (payload === "go") {
      shell.openExternal("http://www.google.com/search?q=" + id + "&btnI=1");
    }
  }
  
  function renderPreview(id, payload, render) {}
  
  return { startup, search, execute, renderPreview };
};