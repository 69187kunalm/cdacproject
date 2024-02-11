package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.Logindao;
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
}
