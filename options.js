// Saves options to chrome.storage
function save_options() {
  var time = document.getElementById('time').value;
  chrome.storage.sync.set({
    timerTime: time
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    timerTime: 0
	sites: []
  }, function(items) {
    document.getElementById('time').value = items.timerTime;
	for(i = 0, i < items.sites.length, i++)
		var input = document.createElement('input')
		input.type('text')
		input.name=('site-' + items.sites.length)	
  });
}

function add_site_input() {
		
		var input = document.createElement('input');
		input.type = 'text';
		input.name = 'site_input';
}

var sites = [];
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
	
document.getElementById('addbutton').addEventListener('click', 'add_site_input')