package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;
@Transactional
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("Select l from Login l where l.email = :email and l.password= :password")
	public Optional<Login> Login(String email, String password);
	
	
	
	public Login findByEmail(String email);
	
	
	
}
