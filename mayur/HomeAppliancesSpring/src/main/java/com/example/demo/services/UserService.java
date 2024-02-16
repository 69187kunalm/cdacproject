package com.example.demo.services;

import java.util.List;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.dao.Userdao;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.User;

import com.example.demo.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userrepo;
	
	@Autowired
	RoleService rs;
	
	@Autowired
	LoginService logserv;
	
	public List<User> getAllUser()
	{
		return userrepo.findAll();
	}
	
	public User getOne(int id) {
		Optional<User> u1 = userrepo.findById(id);
		return u1.get();
	}
	
	
	
	public User register(Userdao u1) {
	
		Role r1 = null;
		
		if(u1.getRole()==2) {
			r1 = rs.getRolle(2);
		}
		else if(u1.getRole()==3) {
			r1 = rs.getRolle(3);
		}		
		Login lg = new Login(u1.getEmail(),u1.getPassword(),r1);
		
	
		User u2 = new User(u1.getFname(),u1.getLname(),1,u1.getContact_no(),lg);
		
		return userrepo.save(u2);
	}
	
	 
	
}
