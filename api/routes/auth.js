const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const nodemailer = require('nodemailer');
const crypto = require("crypto");

// Kullanıcının e-posta adresini doğrulamak için kullanılacak endpoint
router.get("/verify/:token", async (req, res) => {
  const { token } = req.params;

  try {
    // Token'ı veritabanında kontrol et
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ error: "Geçersiz doğrulama bağlantısı." });
    }

    // Kullanıcının e-posta adresini doğrula
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.redirect("http://localhost:3000/"); // Doğrulandıktan sonra yönlendirilecek sayfa
    // res.status(200).json({ message: "E-posta adresiniz doğrulandı." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error." });
  }
});
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    // Şifre sıfırlama token'ını oluştur
    const resetToken = generateResetToken();

    // Kullanıcıya şifre sıfırlama token'ını ve bağlantıyı gönder
    await sendPasswordResetEmail(user.email, resetToken);

    // Kullanıcının veritabanındaki resetToken bilgisini güncelle
    user.resetToken = resetToken;
    await user.save();

    res.status(200).json({ message: "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi." });
  } catch (error) {
    console.error("Şifremi unuttum hatası:", error);
    res.status(500).json({ error: "Server error." });
  }
});
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword, confirmPassword } = req.body;

  // Şifreleri kontrol et
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'Şifreler uyuşmuyor.' });
  }

  try {
    // Kullanıcıyı token'a göre bul
    console.log('Kullanıcı bulma işlemi öncesi');
    const user = await User.findOne({ resetToken: token });
    console.log('Kullanıcı bulma işlemi sonrası');
    if (!user) {
      return res.status(404).json({ error: 'Geçersiz şifre sıfırlama bağlantısı.' });
    }

    // Token'ı kullanıldı olarak işaretle
    user.resetToken = undefined;
    await user.save();

    // Yeni şifreyi hashle ve kullanıcının şifresini güncelle
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    // Şifre sıfırlama tamamlandıktan sonra kullanıcıyı giriş sayfasına yönlendir
    res.redirect("http://localhost:3000/login");
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error.message);
    res.status(500).json({ error: 'Server error.' });
  }
});

// Kullanıcı Oluşturma (Create - Register)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email kayıtlı." });
    }

    // Doğrulama token'ını oluştur
    const verificationToken = generateVerificationToken();

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isVerified: false,
      verificationToken,
    });

    await newUser.save();
    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: "Kullanıcı oluşturuldu. E-posta doğrulaması için e-posta gönderildi." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Yeni şifre alma endpoint'i


async function sendVerificationEmail(toEmail, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kahveicelim11@gmail.com',
      pass: 'uaoqinlxrieedoxo',
    },
  });

  const mailOptions = {
    from: 'kahveicelim11@gmail.com',
    to: toEmail,
    subject: 'Hesap Doğrulama',
    text: `Hesabınızı doğrulamak için lütfen aşağıdaki bağlantıya tıklayın: http://localhost:5000/api/auth/verify/${token}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', toEmail);
  } catch (error) {
    console.log('Email send failed with error:', error);
  }
}

function generateVerificationToken() {
  return crypto.randomBytes(32).toString("hex");
}

// Şifremi Unuttum (Forgot Password)

async function sendPasswordResetEmail(toEmail, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kahveicelim11@gmail.com',
      pass: 'uaoqinlxrieedoxo',
    },
  });

  const mailOptionsReset = {
    from: 'kahveicelim11@gmail.com',
    to: toEmail,
    subject: 'Şifre Sıfırlama',
    text: `Şifrenizi sıfırlamak için lütfen aşağıdaki bağlantıya tıklayın: http://localhost:3000/reset-password/${token}`,
  };

  try {
    const result = await transporter.sendMail(mailOptionsReset);
    console.log('Şifre sıfırlama bağlantısı e-posta olarak gönderildi:', toEmail);
  } catch (error) {
    console.log('Şifre sıfırlama bağlantısı gönderimi başarısız oldu:', error);
  }
}

function generateResetToken() {
  return crypto.randomBytes(32).toString("hex");
}
//! kullanıcı girişi-login
router.post("/login", async (req,res)=>{
    try {
        const {email,password}= req.body;


        const user = await User.findOne({email})
        if (!user) {
            return res.status(401).json({error:"Email yanlış."})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({error:"Şifre yanlış."})
        }
        res.status(200).json({
            id:user._id,
            email: user.email,
            username: user.username,
            role: user.role
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
    }
})

module.exports = router;