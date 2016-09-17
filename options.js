// Saves options to chrome.storage
function save_options() {
  var time = document.getElementById('time').value;
  var site0x = document.getElementById('site0').value;
  var site1x = document.getElementById('site1').value;
  var site2x = document.getElementById('site2').value;
  var site3x = document.getElementById('site3').value;
  var site4x = document.getElementById('site4').value;
  var site5x = document.getElementById('site5').value;
  var site6x = document.getElementById('site6').value;
  var site7x = document.getElementById('site7').value;
  var site8x = document.getElementById('site8').value;
  var site9x = document.getElementById('site9').value;
  
  chrome.storage.sync.set({
    timerTime: time
	site0: site0x,
	site1: site1x,
	site2: site2x,
	site3: site3x,
	site4: site4x,
	site5: site5x,
	site6: site6x,
	site7: site7x,
	site8: site8x,
	site9: site9x
	
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
  }, function(items) {
    document.getElementById('time').value = items.timerTime;
	
  });
}



document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);