

 $('#google-button').on('click', function() {
    // Initialize with your OAuth.io app public key
    OAuth.initialize('SwtCfntFYnWRa2E5jhP30wnVEG8');
    // Use popup for OAuth
    OAuth.popup('google').then(google => {
      console.log(google);
      // Retrieves user data from oauth provider
      console.log(google.me());
    });
  })