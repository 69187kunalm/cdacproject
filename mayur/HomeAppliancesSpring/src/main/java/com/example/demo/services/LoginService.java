package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;


@Service
public class LoginService {
	
	@Autowired
	LoginRepository logrepo;
	
	public Login register(Login lg) {

		return logrepo.save(lg);
	}
	
	public Login checkLogin(String email, String password) {
		Optional<Login> lg = logrepo.Login(email, password);
		
		Login res = null;
		
		try {
			res = lg.get();
		}
		catch (Exception e) {
			res = null;
		}
		return res;
	}
}
