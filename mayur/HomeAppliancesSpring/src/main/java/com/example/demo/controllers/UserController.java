package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.Userdao;
import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	 
	@Autowired
	UserService us;
	
	@GetMapping("/getalluser")
	public List<User> getalluser()
	{
		return us.getAllUser();
	}
	
	
	@PostMapping("/register")
	public User register(@RequestBody Userdao user) {
		return us.register(user);
	}
	
}
