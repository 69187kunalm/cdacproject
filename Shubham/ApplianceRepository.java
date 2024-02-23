package com.example.demo.repositories;

import java.time.LocalDate;
import java.util.List;

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
	
	@Query("select A from Appliance A where isverified=0 and onrent=0")
	public List<Appliance> getVerifiedAppliance();
	
	@Query("select A.image from Appliance A where App_id= :id")
	public byte[] getImage(int id);
	
	@Query("select A from Appliance A where A.isverified=1 and A.onrent=0")
	public List<Appliance> getAllVerifiedAppliance();
	
	@Query("select A from Appliance A where name=:name and A.isverified=1")
	public List<Appliance> searchApp(String name);
	
	@Modifying
	@Query("update Appliance set onrent = 1 where App_id = :id")
	public int updateOnRentStatus(int id);
	
	@Query("select A from Appliance A  where App_id in (select T.app_id from Transaction T where T.enddate< :currdate)")
	public List<Appliance> findOverdueAppliances(LocalDate currdate);
}
