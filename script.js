function generateQR() {
    const upiId = document.getElementById('upiId').value.trim();
    const amount = document.getElementById('amount').value.trim();
    const note = document.getElementById('note').value.trim();
  
    const qrcodeContainer = document.getElementById('qrcode');
    const downloadLink = document.getElementById('downloadLink');
    const loading = document.getElementById('loading');
    const uriPreview = document.getElementById('upiUriPreview');
    const actions = document.getElementById('actions');
  
    if (!upiId || !amount || !note) {
      alert('Please fill out all fields.');
      return;
    }
  
    const upiUri = `upi://pay?pa=${encodeURIComponent(upiId)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  
    uriPreview.style.display = 'block';
    uriPreview.textContent = upiUri;
  
    qrcodeContainer.innerHTML = '';
    loading.style.display = 'block';
    actions.style.display = 'none';
  
    const canvas = document.createElement('canvas');
    QRCode.toCanvas(canvas, upiUri, { width: 300, errorCorrectionLevel: 'H' }, function (error) {
      if (error) {
        console.error(error);
        alert('Failed to generate QR code.');
        loading.style.display = 'none';
        return;
      }
  
      const ctx = canvas.getContext('2d');
      const logo = new Image();
      logo.src = 'logo.png';
  
      logo.onload = function () {
        const logoSize = canvas.width * 0.2;
        const x = (canvas.width - logoSize) / 2;
        const y = (canvas.height - logoSize) / 2;
  
        // Draw white circle first for better visibility
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, logoSize / 1.9, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
  
        // Draw logo image
        ctx.drawImage(logo, x, y, logoSize, logoSize);
  
        qrcodeContainer.appendChild(canvas);
        downloadLink.href = canvas.toDataURL('image/png');
        loading.style.display = 'none';
        actions.style.display = 'block';
      };
  
      logo.onerror = function () {
        qrcodeContainer.appendChild(canvas);
        downloadLink.href = canvas.toDataURL('image/png');
        loading.style.display = 'none';
        actions.style.display = 'block';
      };
    });
  
    document.getElementById('copyUri').onclick = function () {
      navigator.clipboard.writeText(upiUri).then(() => {
        alert('UPI URI copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy URI.');
      });
    };
  }
  