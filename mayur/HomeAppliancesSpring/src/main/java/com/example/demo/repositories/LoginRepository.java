package com.example.demo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("Select l from Login l where l.email = :email and l.password= :password")
	public Optional<Login> Login(String email, String password);
}
