//  validasyon şeması
import * as yup from "yup";

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

export const schema = yup.object().shape({
  // email için zorunluluklar
  email: yup
    .string()
    .email("Lütfen geçerli bir email formatı giriniz (@)")
    .required("Email alanı zorunludur."),
  //yaş için zorunluluklar
  age: yup
    .number()
    .min(18, "Yaşınız 18'den büyük olmalı")
    .max(100, "Yaşınız 100'den büyük olamaz.")
    .integer("Lütfen tam sayı giriniz.")
    .required("Yaş alanı zorunludur."),
  // şifre için zorunluluklar
  password: yup
    .string()
    .min(5, "Şifre en az 5 karekter olmalı.")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre alanı zorunludur."),
  // şifreOnay için zorunluluklar
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Şifre onay zorunludur."),
});
