package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Appliance;

import jakarta.transaction.Transactional;

@Transactional
public interface ApplianceRepository extends JpaRepository<Appliance, Integer> {
	
	@Modifying
	@Query("update Appliance set image = :file where App_id = :id")
	public int uploadImage(int id, byte[] file);
}
