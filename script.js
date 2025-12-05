* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  background: #ecf4fa;
  color: #222;
  display: flex;
  flex-direction: column;
}

.topbar {
  background: #e8e8e8;
  border-bottom: 1px solid #e6e6e6;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-area h1 {
  font-size: 20px;
  color: #111;
  margin: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-links a {
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 15px;
  padding: 6px 8px;
}

.nav-links a:hover {
  color: #0b74b1;
}

.btn-primary {
  background: #0b74b1;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-outline {
  background: transparent;
  border: 1px solid #0b74b1;
  color: #0b74b1;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

main {
  flex: 1;
  padding: 28px 18px;
}

.hero {
  display: flex;
  gap: 22px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 26px;
}

.hero-text {
  max-width: 480px;
  text-align: left;
}

.hero-text h2 {
  font-size: 28px;
  color: #022a40;
  margin-bottom: 10px;
}

.hero-text p {
  color: #333;
  margin-bottom: 14px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 10px;
}

.hero-image img {
  width: 420px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}

.info {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 18px;
}

.box {
  background: #fff;
  padding: 14px;
  width: 230px;
  border-radius: 8px;
  border: 1px solid #ececec;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

.box h3 {
  color: #0b3b50;
  margin-bottom: 8px;
}

.box p {
  color: #444;
  line-height: 1.5;
  font-size: 14px;
}

.form-card {
  background: #fff;
  border: 1px solid #e7e7e7;
  padding: 14px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 18px;
}

.form-card input[type="text"],
.form-card input[type="file"],
.form-card textarea {
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-card textarea {
  min-height: 90px;
  resize: vertical;
}

.form-card button {
  margin-top: 6px;
}

.gallery {
  margin-top: 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.photo-card {
  width: 250px;
  background: #f6e5e5;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #e9e9e9;
  box-shadow: 0 6px 14px rgba(0,0,0,0.04);
  text-align: left;
}

.photo-card h3 {
  font-size: 16px;
  color: #0b3b50;
  margin: 0 0 8px 0;
}

.photo-card img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  display: block;
  margin-bottom: 8px;
}

.photo-card p {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}

.photo-card button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
}

.photo-card button:hover {
  opacity: 0.95;
}

.showcase-page {
  background: #e8f4fc; 
  padding: 20px;
  border-radius: 8px;
}


.about-section {
  max-width: 900px;
  margin: 0 auto;
  background: #d1e1e6;
  padding: 26px;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  line-height: 1.6;
}

.about-section h2 {
  margin-bottom: 12px;
  color: #111;
  font-size: 22px;
}

.about-section h3 {
  margin-top: 18px;
  margin-bottom: 10px;
  color: #0b5276;
  font-size: 18px;
}

.team {
  margin-top: 12px;
}

.member {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  background: #fbfbfb;
  margin-bottom: 12px;
}

.member-left {
  max-width: 62%;
}

.member-right {
  max-width: 36%;
  text-align: right;
}

.member h4 {
  margin: 0 0 6px 0;
  color: #0b3b50;
  font-size: 16px;
}

.small {
  color: #666;
  font-size: 14px;
  margin: 4px 0;
}

.member-right p {
  margin: 0;
  font-size: 14px;
  color: #333;
}

footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 12px 0;
  width: 100%;
}

.center { text-align: center; }
.mt-12 { margin-top: 12px; }
.mb-12 { margin-bottom: 12px; }
