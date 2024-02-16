package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.Logindao;
import com.example.demo.dao.UpdatepasswordDao;
import com.example.demo.entities.Login;
import com.example.demo.services.LoginService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

    @Autowired
    LoginService ls;

    @PostMapping("/checkLogin")
    public Login checkLogin(@RequestBody Logindao lg1) {
        return ls.checkLogin(lg1.getEmail(), lg1.getPassword());
    }

    @PostMapping("/updatepass")
    public ResponseEntity<String> updatePassword(@RequestBody UpdatepasswordDao upd) {
        String email = upd.getEmail();
        String oldPassword = upd.getOldPassword();
        String newPassword = upd.getNewPassword();

        Login l = ls.getEmail(email);

        if (l != null) {
            if (oldPassword.equals(l.getPassword())) {
                ls.updatePassword(email, newPassword);
                return ResponseEntity.ok("Password changed successfully.");
            } else {
                // Log or print details about the failed password match
                System.out.println("Password does not match for email: " + email);
                return ResponseEntity.ok("Password does not match");
            }
        } else {
            // Log or print details about the non-existent email
            System.out.println("Email not found: " + email);
            return ResponseEntity.ok("Please enter valid Email");
        }
    }
}
