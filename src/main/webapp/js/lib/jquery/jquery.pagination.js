/**
 * This jQuery plugin displays pagination links inside the selected elements.
 *
 * @author Gabriel Birke (birke *at* d-scribe *dot* de)
 * @version 1.1
 * @param {int} maxentries Number of entries to paginate
 * @param {Object} opts Several options (see README for documentation)
 * @return {Object} jQuery Object
 */
jQuery.fn.pagination = function(maxentries, opts){
	opts = jQuery.extend({
		items_per_page:10,
		num_display_entries:10,
		current_page:0,
		num_edge_entries:0,
		link_to:"###",
		prev_text:"Prev",
		next_text:"Next",
		ellipse_text:". . .",
		prev_show_always:true,
		next_show_always:true,
		callback:function(){return false;}
	},opts||{});
	
	return this.each(function() {
		/**
		 * Calculate the maximum number of pages
		 */
		function numPages() {
			return Math.ceil(maxentries/opts.items_per_page);
		}
		
		/**
		 * Calculate start and end point of pagination links depending on 
		 * current_page and num_display_entries.
		 * @return {Array}
		 */
		function getInterval()  {
			var ne_half = Math.ceil(opts.num_display_entries/2);
			var np = numPages();
			var upper_limit = np-opts.num_display_entries-1;
			var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
			//var start = current_page-3;
			if(start<0) start=0;
			var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
			//var end = start+6;
			if(end>=np) end= np-1;
			return [start,end];
		}
		
		/**
		 * This is the event handling function for the pagination links. 
		 * @param {int} page_id The new page number
		 */
		function pageSelected(page_id, evt){
			if(page_id==undefined || isNaN(page_id) || !isInteger(page_id)){return;}
			if(page_id<0) page_id=0;
			if(page_id>numPages()-1) page_id=numPages()-1;
			current_page = page_id;
			drawLinks();
			var continuePropagation = opts.callback(page_id, panel);
			if (!continuePropagation && evt) {
				if (evt.stopPropagation) {
					evt.stopPropagation();
				}
				else {
					evt.cancelBubble = true;
				}
			}
			return continuePropagation;
		}
		
		/**
		 * This function inserts the pagination links into the container element
		 */
		function drawLinks() {
			panel.empty();
			var interval = getInterval();
			var np = numPages();
			panel.append("<span class='page_count'> Page "+(current_page+1)+" of "+np+"</span>");
			// This helper function returns a handler function that calls pageSelected with the right page_id
			var getClickHandler = function(page_id) {
				return function(evt){ return pageSelected(page_id,evt); }
			}
			// Helper function for generating a single link (or a span tag if it'S the current page)
			var appendItem = function(page_id, appendopts){
				page_id = page_id<0?0:(page_id<np?page_id:np-1); // Normalize page id to sane value
				appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
				if(page_id == current_page){
					var lnk = $("<span class='current'>"+(appendopts.text)+"</span>");
				}
				else
				{
					var lnk = $("<a>"+(appendopts.text)+"</a>")
						.bind("click", getClickHandler(page_id))
						.attr('href', opts.link_to.replace(/__id__/,page_id));
						
						
				}
				if(appendopts.classes){lnk.addClass(appendopts.classes);}
				if(appendopts.nextSeperator) panel.append("<span class='new_separator'>"+appendopts.nextSeperator+"</span>");
				panel.append(lnk);
				if(appendopts.prevSeperator) panel.append("<span class='new_separator'>"+appendopts.prevSeperator+"</span>");
			}
			// Generate starting points
			if (opts.num_edge_entries > 0){
				if(0 == current_page){
					var lnk = $("<span class='first current'>&nbsp;</span>");
				}else{
					var lnk = $("<span class='first'>&nbsp;</span>").bind("click", getClickHandler(0));
				}
				panel.append(lnk);
				/*var end = Math.min(opts.num_edge_entries, interval[0]);
				for(var i=0; i<end; i++) {
					appendItem(i);
				*/
			}
			// Generate "Previous"-Link
			if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
				appendItem(current_page-1,{text:opts.prev_text,prevSeperator:"", classes:"prev"});
				if(opts.num_edge_entries <= interval[0] && opts.ellipse_text){
					jQuery("<span class='ellipse_text'>"+opts.ellipse_text+"</span>").appendTo(panel);
				}				
			}
			
			// Generate interval links
			for(var i=interval[0]; i<=interval[1]; i++) {
				appendItem(i,{prevSeperator:""});
			}
			// Generate "Next"-Link
			if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
				if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text){
					jQuery("<span class='ellipse_text'>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
				appendItem(current_page+1,{text:opts.next_text, classes:"next"});
			}
			
			// Generate ending points
			if (opts.num_edge_entries > 0){
				if(np-1 == current_page){
					var lnk = $("<span class='last current'>&nbsp;</span>");
				}else{
					var lnk = $("<span class='last'>&nbsp;</span>").bind("click", getClickHandler(np-1));
				}
				panel.append(lnk);				
				/*var begin = Math.max(np-opts.num_edge_entries, interval[1]);
				for(var i=begin; i<np; i++) {
					appendItem(i);
				}
				*/
			}
	
			panel.append("<div class='gotoPage'> <span>Page</span><form id='pagination_goto_form' method='GET' onsubmit='return false;'> <img class='link' src='"+opts.goto_btn_src+"' id='pagination_page_go'/> <input type='text'  style='ime-mode:Disabled' id='pagination_page_number' onkeypress='return onlyNumberInput($(this));'/><input type='submit' class='hidden'></form></div>");
			panel.find("#pagination_page_go").bind("click", function(){pageSelected(parseInt(panel.find("#pagination_page_number").val(),10)-1);});
			panel.find("#pagination_goto_form").bind("submit", function(){pageSelected(parseInt(panel.find("#pagination_page_number").val(),10)-1);});
			/*$("#pagination_page_number").numeric();*/
			panel.find("#pagination_page_number").change(function(){
				if($(this).val().length<1){
					return false;
				}
				if(!isInteger($(this).val())){
					$(this).val('');
				}
			});
		}
		
		// Extract current_page from options
		var current_page = opts.current_page;
		// Create a sane value for maxentries and items_per_page
		maxentries = (!maxentries || maxentries < 0)?1:maxentries;
		opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
		// Store DOM element for easy access from all inner functions
		var panel = jQuery(this);
		// Attach control functions to the DOM element 
		this.selectPage = function(page_id){ pageSelected(page_id);}
		this.prevPage = function(){ 
			if (current_page > 0) {
				pageSelected(current_page - 1);
				return true;
			}
			else {
				return false;
			}
		}
		this.nextPage = function(){ 
			if(current_page < numPages()-1) {
				pageSelected(current_page+1);
				return true;
			}
			else {
				return false;
			}
		}
				
		// When all initialisation is done, draw the links
		drawLinks();
	});
}


