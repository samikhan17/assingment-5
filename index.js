    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

     document.querySelectorAll('.heart').forEach(btn => {
      btn.addEventListener('click', () => {
        heartCount++;
        document.getElementById('heartCount').textContent = heartCount;
        btn.classList.toggle('text-red-500');
      });
    });


        function copyNumber(number) {
      navigator.clipboard.writeText(number);
      copyCount++;
      document.getElementById('copyCount').textContent = copyCount + " Copy";
      alert("Copied: " + number);
    }




  function getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }

    // Call Function
    function makeCall(serviceName, serviceNumber) {
      if (coinCount < 20) {
        alert("Not enough coins! You need at least 20 coins to make a call.");
        return;
      }
      alert("Calling " + serviceName + " (" + serviceNumber + ")");
      coinCount -= 20;
      document.getElementById('coinCount').textContent = coinCount;

      // Add to call history (with time)
      let li = document.createElement('li');
      li.textContent = `${serviceName} - ${getCurrentTime()}`;
      document.getElementById('callHistory').appendChild(li);
    }




       function clearHistory() {
      document.getElementById('callHistory').innerHTML = "";
    }