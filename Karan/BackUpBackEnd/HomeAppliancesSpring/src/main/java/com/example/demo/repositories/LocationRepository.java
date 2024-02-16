package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Location;
import com.example.demo.entities.Login;

import jakarta.transaction.Transactional;


public interface LocationRepository extends JpaRepository<Location, Integer> {
 
	
}
