self.onmessage = function(event) {
	var msg = function() {
		self.postMessage("ok");
	};

	setTimeout(msg, event.data);
}
