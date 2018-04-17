<script src="https://widget.flowxo.com/embed.js" data-fxo-widget="eyJ0aGVtZSI6IiNmMzdhNzEiLCJ0ZWxlZ3JhbSI6eyJib3RVc2VybmFtZSI6IkZsaWdodEJvdCJ9LCJ3ZWxjb21lVGV4dCI6IldlbGNvbWUgdG8gbXkgQ2hhdEJvdCEifQ=="></script>
<script>
  // Wait until the messenger is fully
  // ready, then send a message
  FxoMessenger.on('stateChanged', function(state) {
    if (state === 'connected') {
      FxoMessenger.sendMessage('Hey!');
    }
  });

  // Subscribe to all messages received,
  // logging them to the console
  FxoMessenger.on('messageReceived', function(message) {
    console.log(message);
  });
</script>