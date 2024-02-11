package com.example.demo.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	RoleRepository rolerepo;
	
	public Role getRolle(int id) {
		Optional<Role> in = rolerepo.findById(id);
		return in.get();			
	}
}
