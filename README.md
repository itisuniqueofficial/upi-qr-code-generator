# 🧾 Advanced UPI QR Code Generator

An advanced, high-quality, and fully customizable **UPI QR Code Generator** made for seamless digital payments in India. Generate scannable QR codes with optional logo overlay, preview UPI URI, download image, and copy payment link — all with a sleek UI and no backend required.

---

## ✨ Features

- 🔒 No backend or API required
- 🎨 High-quality QR code with center logo support
- 🌀 Loading spinner while generating
- ⚡ Live preview of generated UPI URI
- 🔗 Copy UPI payment link to clipboard
- 📱 Fully responsive, mobile-friendly design
- 🌐 Works offline (no external server calls)
- 💾 One-click QR image download
- 💡 Built with HTML, CSS, JavaScript, and [qrcode](https://www.npmjs.com/package/qrcode) library

---

## ❓ What is This?

The **UPI QR Code Generator** allows individuals and businesses in India to generate a **Unified Payments Interface (UPI)** QR code. Anyone with a UPI-supported app (like PhonePe, Google Pay, Paytm, BHIM) can scan the QR and send payment immediately.

It is ideal for:
- Freelancers
- Merchants
- Subscription payments
- Digital goods and services
- Donation or tipping pages

---

## 🛠️ How to Use

> 🔗 [Live Demo](#) *(host it and insert your live URL here)*

1. **Enter your UPI ID**
   - Example: `yourname@upi`

2. **Enter the amount**
   - Example: `199`

3. **Enter payment note**
   - Example: `Canva Pro for khare.vivek98@gmail.com`

4. Click **“Generate QR Code”**

5. Wait for the QR code to generate:
   - ⏳ Spinner will appear while it's working
   - ✅ A sharp QR code with your logo will appear

6. Choose what you want to do:
   - 🔽 **Download the QR code**
   - 📋 **Copy the UPI URI**
   - 📷 **Display QR on your website/store**

---

## ⚙️ How it Works (Behind the Scenes)

1. The tool takes the form values you entered:
   - `pa` (payee address / UPI ID)
   - `am` (amount)
   - `tn` (transaction note)

2. Constructs a valid [UPI URI](https://www.npci.org.in/what-we-do/upi/product-overview):
   ```
   upi://pay?pa=yourname@upi&am=199&cu=INR&tn=NoteHere
   ```

3. Passes that URI to the `qrcode` library in JavaScript:
   - This creates a QR code `canvas` element

4. Once the QR is drawn, the tool overlays a logo in the center:
   - A white circle is added first for contrast
   - Then your custom `logo.png` is drawn in the middle

5. The canvas is then:
   - Appended to the page
   - Exported to PNG for download
   - Made available via download + copy buttons

---

## 🖼️ Customization

- **Logo**: Replace `logo.png` with your own logo (transparent PNG recommended).
- **Colors & Styles**: Modify `styles.css` to match your brand theme.
- **Fields**: Want to add preset amounts or fixed notes? You can prefill inputs via HTML.

---

## 📁 File Structure

```
/upi-qr-generator
│
├── index.html        # Main layout and structure
├── styles.css        # Styling and animations
├── script.js         # Core logic and QR generation
├── logo.png          # Your center QR logo (replaceable)
```

---

## 🔐 Security & Privacy

- 🧠 100% client-side, nothing is sent or stored anywhere
- 🧾 UPI URI is generated locally in your browser
- ✅ No login, signup, or database required

---

## 📦 Requirements

- Modern browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Working UPI ID (like `yourname@okaxis`, `@upi`, `@paytm` etc.)

---

## 📌 Notes

- **Ensure your UPI ID is active** before sharing QR
- **No API used**, but this tool can be expanded to log payments via Google Sheets, Firestore, etc.
- It’s best to use a **transparent logo** for clean overlay.

---

## 📣 Credits

Developed by [It Is Unique Official](https://www.itisuniqueofficial.com/)  
Powered by [QRCode.js](https://www.npmjs.com/package/qrcode)

---

## 📃 License

This tool is open for personal and commercial use. Feel free to modify and use it in your own projects. Attribution appreciated.

---

Would you like me to write a blog post version of this too for your website like *"How to Generate UPI QR Code with Logo – No API Needed"*?
